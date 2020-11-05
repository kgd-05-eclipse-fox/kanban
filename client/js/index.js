let socket
// * ============ SOCKET IO ===========

// * ======== Sweetalert2 Toast =======
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
// * ==== End Of Sweetalert2 Toast ====

// * ============= Vue.js =============
const app = new Vue({
    el: '#app',
    data: {
        display: '',
        user: '',
        access_token: '',
        serverUrl: 'http://127.0.0.1:3000',
        loginRegister: 'container',
        login: {
            email: '',
            password: ''
        },
        register: {
            email: '',
            password: ''
        },
        kanban: []
    },
    methods: {
        signIn() {
            this.loginRegister = 'container'
        },
        signUp() {
            this.loginRegister = 'container right-panel-active'
        },
        logout() {
            Swal.fire({
                title: 'Good Bye :(',
                text: 'Are you sure want to logout?',
                icon: 'question',
                reverseButtons: true,
                showCancelButton: true,
                focusConfirm: false
            })
                .then(result => {
                    if(result.isConfirmed) {
                        localStorage.removeItem('access_token')
                        localStorage.removeItem('email')
                        this.loginRegister = 'container'
                        this.display = 'login-page'
                    }
                })
        },
        addTask() {
            Swal.fire({
                title: 'Add Task',
                html: `<input type="text" id="title" class="swal2-input" placeholder="Title">
                <input type="text" id="description" class="swal2-input" placeholder="Description">`,
                confirmButtonText: 'Add',
                showCancelButton: true,
                reverseButtons: true,
                preConfirm: () => {
                    const title = Swal.getPopup().querySelector('#title').value
                    const description = Swal.getPopup().querySelector('#description').value
                    if (!title || !description) {
                    Swal.showValidationMessage(`Please complete all form`)
                    }
                    return { title: title, description: description }
                }
            })
            .then(result => {
                if (result.isConfirmed) {
                    axios({
                        method: `POST`,
                        url: `${this.serverUrl}/kanban`,
                        data: {
                            title: result.value.title,
                            description: result.value.description
                        },
                        headers: {
                            access_token: this.access_token
                        }
                    })
                        .then( _ => {
                            Toast.fire({
                                title: 'Success Add Task!',
                                icon: 'success'
                            })
                            this.fetchTasks()
                            this.socketio()
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }
            })
        },
        editTask(id) {
            const whatToEdit = this.kanban.find( task => task.id == id)

            Swal.fire({
                title: 'Edit Task',
                html: `<input type="text" id="title" class="swal2-input" placeholder="Title" value="${whatToEdit.title}">
                <input type="text" id="description" class="swal2-input" placeholder="Description" value="${whatToEdit.description}">`,
                confirmButtonText: 'Edit Task',
                showCancelButton: true,
                reverseButtons: true,
                preConfirm: () => {
                    const title = Swal.getPopup().querySelector('#title').value
                    const description = Swal.getPopup().querySelector('#description').value
                    if (!title || !description) {
                    Swal.showValidationMessage(`Please complete all form`)
                    }
                    return { title: title, description: description }
                }
            })
                .then(result => {
                    if(result.isConfirmed) {
                        axios({
                            method: 'PUT',
                            url: `${this.serverUrl}/kanban/${id}`,
                            data: {
                                title: result.value.title,
                                description: result.value.description
                            },
                            headers: {
                                access_token: this.access_token
                            }
                        })
                            .then( data => {
                                this.fetchTasks()
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Successfully Edit Task'
                                })
                                this.socketio()
                            })
                            .catch(err => {
                                Swal.fire({
                                    title: `Oopss..`,
                                    text: err.response.data.message,
                                    icon: `error`
                                })
                            })
                    }
                })
        },
        deleteTask(id) {
            const whatToDelete = this.kanban.find( task => task.id == id)

            Swal.fire({
                title: `Delete Task`,
                text: `Are you sure want to delete task ${whatToDelete.title} ?`,
                icon: `warning`,
                reverseButtons: true,
                showCancelButton: true,
                confirmButtonColor: '#d33',
                focusConfirm: false
            })
                .then(result => {
                    if(result.isConfirmed) {
                        axios({
                            method: 'DELETE',
                            url: `${this.serverUrl}/kanban/${id}`,
                            headers: {
                                access_token: this.access_token
                            }
                        })
                            .then( _ => {
                                this.fetchTasks()
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Successfully Delete Task'
                                })
                                this.socketio()
                            })
                            .catch(err => {
                                Swal.fire({
                                    title: `Oopss..`,
                                    text: err.response.data.message,
                                    icon: `error`
                                })
                            })
                    }
                })

        },
        updateTask(id, newStatus) {
            axios({
                method: `PATCH`,
                url: `${this.serverUrl}/kanban/${id}`,
                headers: {
                    access_token: this.access_token
                },
                data: {
                    status: newStatus
                }
            })
                .then(data => {
                    this.socketio()
                })
                .catch(err => {
                    this.fetchTasks()
                    Swal.fire({
                        title: `Oopss..`,
                        text: err.response.data.message,
                        icon: `error`
                    })
                })
        },
        checkLogin(access_token, email) {
            if (access_token && email) {
                this.access_token = access_token
                this.user = email
                this.fetchTasks()
                this.display = 'kanban-app'
            } else {
                this.display = 'login-page'
            }
        },
        convertDate(date) {
            date = new Date(date)
            year = date.getFullYear()
            month = date.getMonth()+1
            dt = date.getDate()

            if (dt < 10) dt = '0' + dt

            if (month < 10) month = '0' + month

            return `${dt}-${month}-${year}`
        },
        userLogin: async function() {
            try {
                const login = await axios({
                    method: 'POST',
                    url: `${this.serverUrl}/login`,
                    data: {
                        email: this.login.email,
                        password: this.login.password
                    }
                })
                localStorage.setItem('access_token', login.data.access_token)
                localStorage.setItem('email', this.login.email)
                this.access_token = login.data.access_token
                this.user = this.login.email
                this.login.email = ''
                this.login.password = ''
                Toast.fire({
                    icon: 'success',
                    title: `Haloo ${this.user}`,
                    text: 'Kamu berhasil login!'
                })
                this.showHome()
            } catch (error) {
                Swal.fire({
                    title: `Oopss..`,
                    text: error.response.data.message,
                    icon: `error`
                })
            }
        },
        userRegister: async function() {
            try {
                const register = await axios({
                    method: 'POST',
                    url: `${this.serverUrl}/register`,
                    data: {
                        email: this.register.email,
                        password: this.register.password
                    }
                })
                Toast.fire({
                    title: 'Success Register!',
                    icon: 'success'
                })
                this.signIn()
            } catch (error) {
                Swal.fire({
                    title: `Oopss..`,
                    text: error.response.data.message,
                    icon: `error`
                })
            }
        },
        fetchTasks: async function() {

            try {
                const tasks = await axios({
                    method: `GET`,
                    url: `${this.serverUrl}/kanban`,
                    headers: {
                        access_token: this.access_token
                    }
                })
                this.kanban = tasks.data.allTask
            } catch (error) {
                console.log(error);
            }
        },
        startDrag(evt, item) {
            evt.dataTransfer.setData('itemID', item.id)
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
        },
        onDrop (evt, status) {
            const itemID = evt.dataTransfer.getData('itemID')
            const item = this.kanban.find(item => item.id == itemID)
            item.status = status

            this.updateTask(itemID, item.status)
        },
        showHome(){
            this.fetchTasks()
            this.display = 'kanban-app'
        },
        socketio() {
            socket.emit('datachange', {})
        }
    },
    computed: {
        backlogs() {
            return this.kanban.filter(task => task.status == 0)
        },
        todos() {
            return this.kanban.filter(task => task.status == 1)
        },
        developments() {
            return this.kanban.filter(task => task.status == 2)
        },
        dones() {
            return this.kanban.filter(task => task.status == 3)
        }
    },
    created() {
        const access_token = localStorage.getItem('access_token')
        const email = localStorage.getItem('email')
        
        this.checkLogin(access_token, email)

        socket = io.connect('http://127.0.0.1:3000')
        socket.on('datachange', _ => {
            this.fetchTasks()
        })
    }
})
// * ========== End Of Vue.js =========
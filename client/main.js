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

const app = new Vue({
    el: "#app",
    data: {
        server: `http://localhost:3000`,
        page: 'login-page',
        kanban: [],
        newUser: {
            username: '',
            email: '',
            password: ''
        },
        user: {
            email: '',
            password: ''
        },
        newTask: {
            title: '',
            description: '',
            category: ''
        },
        form: false,
        loggedIn: {
            status: false,
            user: null
        },
        selected: {
            title: '',
            description: ''
        }
    },
    methods: {
        changePage(pagename) {
            this.page = pagename
        },
        showForm() {
            this.form = true
        },
        backBtn() {
            this.form = false
        },
        register() {
            const payload = this.newUser
            axios({
                    method: 'POST',
                    url: `${this.server}/register`,
                    data: payload
                })
                .then(response => {
                    const access_token = response.data.access_token
                    const user = response.data.user.username

                    localStorage.setItem('access_token', access_token)
                    localStorage.setItem('user', user)

                    this.page = 'home-page'

                    this.loggedIn.status = true
                    this.loggedIn.user = localStorage.getItem('user')

                    Toast.fire({
                        icon: 'success',
                        title: `Welcome ${user.username}`
                    })

                    this.newUser.username = ''
                    this.newUser.email = ''
                    this.newUser.password = ''

                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong',
                        text: err.response.data.msg
                    })
                })
        },
        login() {
            const payload = this.user
            axios({
                    method: 'POST',
                    url: `${this.server}/login`,
                    data: payload
                })
                .then(response => {
                    const access_token = response.data.access_token
                    const user = response.data.user.username
                    this.page = 'home-page'

                    localStorage.setItem('access_token', access_token)
                    localStorage.setItem('user', user)

                    this.loggedIn.status = true
                    this.loggedIn.user = localStorage.user

                    Toast.fire({
                        icon: 'success',
                        title: `Welcome ${user}`
                    })

                    this.user.email = ''
                    this.user.password = ''
                    this.fetchKanban()
                })
                .catch(err => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong',
                        text: err.response.data.msg
                    })
                })
        },
        logout() {
            Swal.fire({
                title: 'Logging out',
                text: "You will be logged out",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Logout'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.clear()
                    this.page = 'login-page'
                    this.loggedIn.status = false
                    this.loggedIn.user = ''
                    Swal.fire({
                        icon: 'success',
                        title: 'logged out'
                    })
                }
            })
        },
        fetchKanban() {
            const access_token = localStorage.getItem('access_token')
            axios({
                    method: 'GET',
                    url: `${this.server}/tasks`,
                    headers: {
                        access_token
                    }
                })
                .then(response => {
                    this.kanban = response.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addTask() {
            const payload = this.newTask
            const access_token = localStorage.getItem('access_token')

            axios({
                    method: 'POST',
                    url: `${this.server}/tasks`,
                    headers: {
                        access_token
                    },
                    data: payload
                })
                .then(response => {
                    this.fetchKanban()
                })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteTask(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You will delete this task",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete'
            }).then((result) => {
                if (result.isConfirmed) {
                    const access_token = localStorage.getItem('access_token')
                    axios({
                            method: 'DELETE',
                            url: `${this.server}/tasks/${+id}`,
                            headers: {
                                access_token
                            }
                        })
                        .then(response => {
                            this.fetchKanban()
                            Toast.fire({
                                icon: 'success',
                                title: response.data.msg
                            })
                        })
                        .catch(err => {
                            Swal.fire({
                                icon: 'error',
                                title: err.response.data.msg
                            })
                        })
                }
            })
        },
        changeCategory(id, category) {
            const access_token = localStorage.getItem('access_token')
            axios({
                method: 'PATCH',
                url: `${this.server}/tasks/${id}`,
                headers: {
                    access_token
                },
                data: {
                    category: category
                }
            })
            .then(response => {
                this.fetchKanban()
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: err.response.data.msg
                })
            })
        },
        editTask(id) {
            
        }
    },
    computed: {
        backlog() {
            return this.kanban.filter(el => el.category === 'backlog')
        },
        todo() {
            return this.kanban.filter(el => el.category === 'todo')
        },
        progress() {
            return this.kanban.filter(el => el.category === 'progress')
        },
        completed() {
            return this.kanban.filter(el => el.category === 'completed')
        },

    },
    created() {
        if (localStorage.access_token) {
            this.page = 'home-page'
            this.loggedIn.status = true
            this.loggedIn.user = localStorage.getItem('user')

            this.fetchKanban()
            console.log(this.loggedIn)
        } else {
            this.page = 'login-page'
        }
    }
})
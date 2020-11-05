<template>
    <div>
        <LoginPage
            v-if="pageRender == 'login-page'"
            :menuLoginRegister="loginRegister"
            @menu="changeLoginRegister"
            @login="userLogin"
            @google="google"
            @github="github"
        ></LoginPage>
        <KanbanPage
            v-else-if="pageRender == 'kanban-page'"
            :tasks="tasks"
            :boards="boards"
            :user="user"
            @addTask="addTask"
            @updateTask="updateTask"
            @editTask="editTask"
            @deleteTask="deleteTask"
            @logout="logout"
        ></KanbanPage>
    </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import KanbanPage from './components/KanbanPage'
import axios from './config/axios'
import Toast from './config/swaltoast'
import Swal from 'sweetalert2'

export default {
    name: 'App',
    data() {
        return {
            pageRender: 'login-page',
            loginRegister: '',
            user: null,
            tasks: [],
            boards: [
                {
                    id: 1,
                    name: 'Backlog',
                    bg:'bg-secondary',
                    img: require('../src/assets/img/backlog.png')
                },
                {
                    id: 2,
                    name: 'Todo',
                    bg:'bg-primary',
                    img: require('../src/assets/img/todo.png')
                },
                {
                    id: 3,
                    name: 'Development',
                    bg:'bg-info',
                    img: require('../src/assets/img/development.png')
                },
                {
                    id: 4,
                    name: 'Done',
                    bg:'bg-success',
                    img: require('../src/assets/img/done.png')
                }
            ]
        }
    },
    components: {
        LoginPage, KanbanPage
    },
    methods: {
        changeLoginRegister(payload) {
            this.loginRegister = payload
        },
        userLogin(payload) {
            axios({
                method: 'POST',
                url: '/login',
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
                .then(({data}) => {
                    localStorage.setItem('access_token', data.access_token)
                    localStorage.setItem('email', payload.email)

                    Toast.fire({
                        icon: 'success',
                        title: `Haloo ${payload.email}`,
                        text: 'Kamu berhasil login!'
                    })

                    this.fetchTask()
                    this.user = payload.email
                    this.pageRender = 'kanban-page'
                })
                .catch(err => {
                    Swal.fire({
                        title: `Oopss..`,
                        text: err.response.data.message,
                        icon: `error`
                    })
                })
        },
        fetchTask() {
            const access_token = localStorage.getItem('access_token')
            axios({
                method: 'GET',
                url: '/kanban',
                headers: {
                    access_token: access_token
                }
            })
                .then(({data}) => {
                    this.tasks = data.allTasks
                })
                .catch(err => {
                    console.log(err)
                })
        },
        addTask() {
            const access_token = localStorage.getItem('access_token')

            Swal.fire({
                title: 'Add Task',
                html: `<input type="title" id="title" class="swal2-input" placeholder="Title" value="">
                <input type="description" id="description" class="swal2-input" placeholder="Description" value="">`,
                confirmButtonText: 'Add',
                focusConfirm: false,
                preConfirm: () => {
                    const title = Swal.getPopup().querySelector('#title').value
                    const description = Swal.getPopup().querySelector('#description').value
                    if (!title || !description) {
                    Swal.showValidationMessage(`Please complete all forms`)
                    }
                    return { title: title, description: description }
                }
                })
                    .then(result => {
                        axios({
                            method: 'POST',
                            url: '/kanban',
                            headers: {
                                access_token: access_token
                            },
                            data: {
                                title: result.value.title,
                                description: result.value.description
                            }
                        })
                            .then(({ data }) => {
                                this.fetchTask()
                                Toast.fire({
                                    icon: 'success',
                                    title: data.msg
                                })
                            })
                            .catch(err => {
                                Swal.fire({
                                    title: `Oopss..`,
                                    text: err.response.data.message,
                                    icon: `error`
                                })
                            })
                    })
        },
        updateTask(payload) {
            const { itemID, newStatus } = payload
            const access_token = localStorage.getItem('access_token')
            axios({
                method: 'PATCH',
                url: '/kanban/' + itemID,
                headers: {
                    access_token: access_token
                },
                data: {
                    status: newStatus
                }
            })
                .then( data => {
                    this.fetchTask()
                })
                .catch(err => {
                    this.fetchTask()
                    Swal.fire({
                        title: `Oopss..`,
                        text: err.response.data.message,
                        icon: `error`
                    })
                })
        },
        editTask(payload) {
            const { id } = payload
            const access_token = localStorage.getItem('access_token')

            Swal.fire({
                title: 'Edit Task',
                html: `<input type="title" id="title" class="swal2-input" placeholder="Title" value="${payload.title}">
                <input type="description" id="description" class="swal2-input" placeholder="Description" value="${payload.description}">`,
                confirmButtonText: 'Edit',
                focusConfirm: false,
                preConfirm: () => {
                    const title = Swal.getPopup().querySelector('#title').value
                    const description = Swal.getPopup().querySelector('#description').value
                    if (!title || !description) {
                    Swal.showValidationMessage(`Please complete all forms`)
                    }
                    return { title: title, description: description }
                }
                })
                    .then(result => {
                        axios({
                            method: 'PUT',
                            url: '/kanban/' + id,
                            headers: {
                                access_token: access_token
                            },
                            data: {
                                title: result.value.title,
                                description: result.value.description
                            }
                        })
                            .then(({ data }) => {
                                this.fetchTask()
                                Toast.fire({
                                    icon: 'success',
                                    title: data.msg
                                })
                            })
                            .catch(err => {
                                Swal.fire({
                                    title: `Oopss..`,
                                    text: err.response.data.message,
                                    icon: `error`
                                })
                            })
                    })
        },
        deleteTask(id) {
            const access_token = localStorage.getItem('access_token')

            Swal.fire({
                title: 'Delete Task?',
                text: 'Are you sure you want to delete this task?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#026AA7',
                focusCancel: true,
                reverseButtons: true,
                confirmButtonText: 'Delete'
            })
                .then(({ isConfirmed }) => {
                    if (isConfirmed) {
                        axios({
                            method: 'DELETE',
                            url: '/kanban/' + id,
                            headers: {
                                access_token: access_token
                            }
                        })
                            .then( _ => {
                                this.fetchTask()
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Successfully Delete Task'
                                })
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
        logout() {
            Swal.fire({
                title: 'Logout?',
                text: 'Are you sure you want to logout?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#026AA7',
                focusCancel: true,
                reverseButtons: true,
                confirmButtonText: 'Logout'
            })
                .then(({ isConfirmed }) => {
                    if (isConfirmed) {
                        localStorage.removeItem('access_token')
                        localStorage.removeItem('email')
                        this.pageRender = 'login-page'
                    }
                })
        },
        google() {
            console.log('google')
        },
        github() {
            console.log('github')
        }
    },
    created() {
        const access_token = localStorage.getItem('access_token')
        const email = localStorage.getItem('email')

        if (access_token && email) {
            this.fetchTask()
            this.user = localStorage.getItem('email')
            this.pageRender = 'kanban-page'
        } else {
            this.pageRender = 'login-page'
        }
    }
}
</script>
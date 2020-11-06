<template>
    <div>
        <LoginRegisterPage
            v-if="pageRender == 'login-page'"
            :menuLoginRegister="loginRegister"
            @menu="changeLoginRegister"
            @login="userLogin"
            @googleLogin="googleLogin"
        ></LoginRegisterPage>
        <KanbanPage
            v-else-if="pageRender == 'kanban-page' || pageRender == 'add-task' || pageRender == 'edit-task'"
            :tasks="tasks"
            :boards="boards"
            :user="user"
            :pageRender="pageRender"
            :editTaskData="editTaskData"
            @addTask="addTask"
            @changePage="changePage"
            @updateTask="updateTask"
            @editTask="editTask"
            @editTaskPage="editTaskPage"
            @deleteTask="deleteTask"
            @logout="logout"
        ></KanbanPage>
    </div>
</template>

<script>
import LoginRegisterPage from './components/LoginRegisterPage'
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
            user: {},
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
            ],
            editTaskData: {}
        }
    },
    components: {
        LoginRegisterPage, KanbanPage
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
                    localStorage.setItem('id', data.id)
                    localStorage.setItem('email', payload.email)

                    Toast.fire({
                        icon: 'success',
                        title: `Haloo ${payload.email}`,
                        text: 'Kamu berhasil login!'
                    })

                    this.loginRegister = ''
                    this.user = {
                        id: data.id,
                        email: payload.email
                    }

                    this.fetchTask()
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
        changePage(pageName) {
            const access_token = localStorage.getItem('access_token')
            this.pageRender = pageName
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
        addTask(payload) {
            const access_token = localStorage.getItem('access_token')
            axios({
                method: 'POST',
                url: '/kanban',
                headers: {
                    access_token: access_token
                },
                data: payload
            })
                .then( _ => {
                    this.fetchTask()
                    Toast.fire({
                        title: 'Success Add Task!',
                        icon: 'success'
                    })
                })
                .catch(err => {
                    Swal.fire({
                        title: `Oopss..`,
                        text: err.response.data.message,
                        icon: `error`
                    })
                })
        },
        editTaskPage(payload) {
            this.editTaskData = {
                id: payload.id,
                title: payload.title,
                description: payload.description
            }
            this.pageRender = 'edit-task'
        },
        editTask(payload) {
            const access_token = localStorage.getItem('access_token')
            const { id, title, description } = payload
            axios({
                method: 'PUT',
                url: '/kanban/' + id,
                headers: {
                    access_token: access_token
                },
                data: {
                    title: title,
                    description: description
                }
            })
                .then(({ data }) => {
                    this.editTaskData = {}
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
                        localStorage.removeItem('id')

                        // * Google SignOut
                        var auth2 = gapi.auth2.getAuthInstance()
                        auth2.signOut()

                        this.tasks = []
                        this.user = {}
                        this.loginRegister = ''
                        this.pageRender = 'login-page'
                    }
                })
        },
        googleLogin(id_token) {
            axios({
                method: 'POST',
                url: '/googlelogin',
                data: {
                    id_token: id_token
                }
            })
                .then(({ data }) => {
                    localStorage.setItem('id', data.id)
                    localStorage.setItem('access_token', data.access_token)
                    localStorage.setItem('email', data.email)

                    Toast.fire({
                        icon: 'success',
                        title: `Haloo ${data.email}`,
                        text: 'Kamu berhasil login!'
                    })

                    this.loginRegister = ''
                    this.user = {
                        id: data.id,
                        email: data.email
                    }

                    this.fetchTask()
                    this.pageRender = 'kanban-page'
                })
                .catch(err => {
                    Swal.fire({
                        title: `Oopss..`,
                        text: err.response.data.message,
                        icon: `error`
                    })
                })
        }
    },
    created() {
        const access_token = localStorage.getItem('access_token')
        const email = localStorage.getItem('email')
        const id = localStorage.getItem('id')

        if (access_token && email && id) {
            this.fetchTask()
            this.user = {
                id: localStorage.getItem('id'),
                email: localStorage.getItem('email')
            }
            this.pageRender = 'kanban-page'
        } else {
            this.pageRender = 'login-page'
        }
    }
}
</script>
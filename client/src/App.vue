<template>
    <div>
        <NavbarPage
            :pageName="pageName"
            v-on:changePage="changePage"
            @clearStorage="logout">
        </NavbarPage>
              
        <HomePage 
            v-if="pageName === 'homePage'"
            @changePage="changePage">
        </HomePage>

        <LoginPage
            @login="loginUser" 
            v-else-if="pageName === 'loginPage'"
            @googleLogin="googleLogin">
        </LoginPage>

        <RegisterPage 
            v-else-if="pageName === 'registerPage'"
            @register="registerUser">
        </RegisterPage>

        <AddPage 
            v-else-if="pageName === 'addPage'"
            @changePage="changePage"
            @addTask="addNewTask">
        </AddPage>

        <EditPage 
            v-else-if="pageName === 'editPage'"
            :detailTask="detailTask"
            @editTask="editTask">

        </EditPage>

        <KanbanPage 
            v-else-if="pageName === 'kanbanPage'"
            :categories="categories"
            @changePage="changePage"
            :tasks="tasks"
            @toEditPage="toEditPage"
            @deleteTask="deleteTask"
            @patchTask="patchTask">
        </KanbanPage>
        
 
    </div>
</template>


<script>
import NavbarPage from './components/NavbarPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import KanbanPage from './components/KanbanPage'
import AddPage from './components/AddPage'
import EditPage from './components/EditPage'
import axios from './config/axios'


export default {
    name: 'App',
    data() {
        return {
            pageName: 'homePage',
            categories: [
                {
                    title: "Backlog",
                    color: "primary"
                },
                {
                    title: "Todo",
                    color: "danger"
                },
                {
                    title: "Doing",
                    color: "info"
                },
                {
                    title: "Done",
                    color: "success"
                }
            ],
            tasks: [],
            detailTask: null,
        };
    },
    components: {
        NavbarPage,
        LoginPage,
        RegisterPage,
        HomePage,
        KanbanPage,
        AddPage,
        EditPage,
    },
    methods: {
        
        changePage(name) {
            this.pageName = name
        },
        googleLogin(google_access_token) {
            axios({
                url: '/googleLogin',
                method: 'POST',
                data:  { google_access_token }
            })
            .then(({data}) => {
                const token = data.access_token
                localStorage.setItem('token', token)
                this.pageName = 'kanbanPage'
                this.fetchTask()
                 
                Swal.fire({
                    icon: 'success',
                    title: 'Success Login',
                })
            })
            .catch(err => {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Error',
                    text: err.response.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        },
        patchTask(payload) {
            const token = localStorage.getItem('token')
            axios({
                url: `/tasks/${payload.id}`,
                method: 'PATCH',
                headers: {
                    token: token
                },
                data: {
                    category: payload.category
                }
            })
            .then(_ => {
                this.fetchTask()

                Swal.fire({
                    icon: 'success',
                    title: 'Data Has Been Updated',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {

                Swal.fire({
                    icon: 'error',
                    title: 'ERROR',
                    text: err.response.data.msg
                })
            })
        },
        toEditPage(payload) {
            this.pageName = payload.pageName
            this.detailTask = payload.task
        },
        deleteTask(id) {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    const token = localStorage.getItem('token')
                    axios({
                        url: `/tasks/${id}`,
                        method: 'DELETE',
                        headers: {
                            token: token
                        }
                    })
                    .then(_ => {
                        this.fetchTask()
                        Swal.fire({
                            position: 'top',
                            icon: 'success',
                            title: 'Task has been delete',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
                    .catch(err => {
        
                         Swal.fire({
                            position: 'top',
                            icon: 'error',
                            title: 'Error',
                            text: err.response.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                        }) 
                    })
                }
            })
        },
        editTask(payload) {
            const token = localStorage.getItem('token')
            axios({
                url: `/tasks/${payload.id}`,
                method: 'PUT',
                headers: {
                    token: token
                },
                data: {
                    title: payload.title,
                    description: payload.description,
                    category: payload.category
                }
            })
            .then(response => {
                this.fetchTask()
                this.pageName = 'kanbanPage'

                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Edit Task Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {

                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Error',
                    text: err.response.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        },
        registerUser(user) {
            axios({
                url: '/register',
                method: 'POST',
                data: user
            })
            .then(response => {
                this.pageName = 'loginPage'

                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Register Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err => {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Error',
                    text: err.response.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        },
        loginUser(user) {
            axios({
                url: '/login',
                method: 'POST',
                data: user
            })
            .then(response => {
                const token = response.data.access_token
                localStorage.setItem('token', token)
                this.pageName = 'kanbanPage'
                this.fetchTask()
                 
                Swal.fire({
                icon: 'success',
                title: 'Success Login',
                })
            })
            .catch(err => {
                Swal.fire({
                position: 'top',
                icon: 'error',
                title: 'Error',
                text: err.response.data.msg,
                showConfirmButton: false,
                timer: 1500
                })
            })
        },
        logout(pageName) {
            localStorage.clear()
            this.pageName = pageName
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: 'Log Out Success',
                showConfirmButton: false,
                timer: 1500
            })
        },
        fetchTask() {
            const token = localStorage.getItem('token')
            axios({
                url: '/tasks',
                method: 'GET',
                headers: {
                    token: token
                }
            })
            .then(({data}) => {
                this.tasks = data
            })
            .catch(err => {
                console.log(err);
            })
        },
        addNewTask(task) {
            const token = localStorage.getItem('token')
            axios({
                url: '/tasks',
                method: 'POST',
                headers: {
                    token: token
                },
                data: task
            })
            .then(({data}) => {
                this.fetchTask()
                this.pageName = 'kanbanPage'

                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Add Task Success',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(err=> {
                Swal.fire({
                    position: 'top',
                    icon: 'error',
                    title: 'Error',
                    text: err.response.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        }
    },
    created () {
        const token = localStorage.getItem('token')
        if (token) {
            this.pageName = 'kanbanPage'
            this.fetchTask()
        }
    }
};
</script>
    
<style scoped>
</style>
<template>
    <div>
       <LoginPage
            v-if="pageName === 'LoginPage'"
            @login="loginUser"
            @signUp="signUpUser"
        ></LoginPage>
       <HomePage
            v-else-if="pageName === 'HomePage'" 
            :categories="categories"
            :allTask="task"
            @changePage="changePage"
            @deleteTask="deleteTask"
            @logout="logoutUser"
        ></HomePage>
       <AddTask
            v-else-if="pageName === 'AddPage'"
            @cancelAddTask="changePage"
            @logout="logoutUser"
            @addTask="addNewTask"
        ></AddTask>
        <EditTask
            v-else-if="pageName === 'EditPage'"
            :updatedTask="updatedTask"
            @updateTask="updateTask"
        ></EditTask>
    </div>
</template>

<script>
import LoginPage from "./components/Login"
import HomePage from "./components/Home"
import AddTask from "./components/AddTask"
import EditTask from "./components/EditTask"
import axios from "./config/axios"

export default {
    name: "App",
    data() {
        return {
            message: 'Hello world',
            pageName: 'LoginPage',
            categories: [
                {
                    name: 'Back Log',
                    bg: "bg-secondary"
                },
                {
                    name: 'To Do',
                    bg: "bg-primary"
                },
                {
                    name: 'On Progress',
                    bg: "bg-warning"
                },
                {
                    name: 'Done',
                    bg: "bg-success"
                }
            ],
            task: [],
            updatedTask: {}
        };
    },
    components: {
        LoginPage, HomePage, AddTask, EditTask
    },
    methods: {
        changePage(name) {
            if(name.pageName == "EditPage") {
                this.pageName = name.pageName
                this.updatedTask = name.task
            } else {
                this.pageName = name.pageName
            }
        },
        signUpUser(payload) {
            // console.log(payload)
            axios({
                method: "POST",
                url: '/users/register',
                data: {
                    firstName: payload.firstName,
                    lastName: payload.lastName,
                    email: payload.email,
                    password: payload.password
                }
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        },
        loginUser(payload) {
            axios({
                method: "POST",
                url: "/users/login",
                data: {
                    email: payload.email,
                    password: payload.password
                }
            })
            .then(({ data }) => {
                let token = data.access_token
                localStorage.setItem('token', token)
                this.fetchTask()
                this.changePage('HomePage')
            })
            .catch(err => {
                console.log(err)
            })
        },
        logoutUser() {
            localStorage.removeItem('token')
            this.pageName = 'LoginPage'
        },
        
        fetchTask() {
            let token = localStorage.getItem('token')
            axios({
                method: "GET",
                url: '/task',
                headers: {token}
            })
            .then(({ data }) => {
                this.task = data
            })
            .catch(err => {
                console.log(data)
            })
        },
        addNewTask(payload) {
            let token = localStorage.getItem('token')
            axios({
                method: "POST",
                url: '/task/add',
                headers: {token},
                data: {
                    title: payload.title,
                    description: payload.description
                }
            })
            .then(({ data }) => {
                this.fetchTask()
                this.pageName = 'HomePage'
            })
            .catch(err => {
                console.log(err)
            })
        },

        updateTask(payload){
            let token = localStorage.getItem('token')
            axios({
                method: "PUT",
                url: '/task/edit',
                headers: {token},
                data: {
                    id: payload.id,
                    title: payload.title,
                    description: payload.description
                }
            })
            .then(({ data }) => {
                console.log(data)
                this.fetchTask()
                this.pageName = 'HomePage'
            })
            .catch(err => {
                console.log(err)
            })
        },
        deleteTask(id) {
            let token = localStorage.getItem('token')
            axios({
                method: "DELETE",
                url: '/task/delete',
                headers: {token},
                data: {
                    id
                }
            })
            .then(({ data }) => {
                this.fetchTask()
                this.pageName = 'HomePage'
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    created() {
        let token = localStorage.getItem('token')
        if(token) {
            this.fetchTask()
            this.pageName = 'HomePage'
        } else {
            this.pageName = 'LoginPage'
        }
    }
};
</script>

<style scoped>
</style>
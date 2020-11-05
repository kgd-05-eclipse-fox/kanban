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
            @changePage="changePage"
            @logout="logoutUser"    
        ></HomePage>
       <AddPage
            v-else-if="pageName === 'AddPage'"
            @cancelAddTask="changePage"
            @logout="logoutUser"
        ></AddPage>
    </div>
</template>

<script>
import LoginPage from "./components/Login"
import HomePage from "./components/Home"
import AddPage from "./components/AddTask"
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
            ]
        };
    },
    components: {
        LoginPage, HomePage, AddPage
    },
    methods: {
        changePage(name) {
            this.pageName = name
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
                this.pageName = 'HomePage'
            })
            .catch(err => {
                console.log(err)
            })
        },
        logoutUser() {
            localStorage.removeItem('token')
            this.pageName = 'LoginPage'
        }
    },
    created() {
        let token = localStorage.getItem('token')
        if(token) {
            this.pageName = 'HomePage'
        } else {
            this.pageName = 'LoginPage'
        }
    }
};
</script>

<style scoped>
</style>
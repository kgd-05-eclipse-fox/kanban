<template>
    <div>
       <LoginPage
            v-if="pageName === 'LoginPage'"
            @login="changePage"
            @signUp="signUpUser"
        ></LoginPage>
       <HomePage
            v-else-if="pageName === 'HomePage'" 
            :categories="categories"
            @changePage="changePage"
            @logout="changePage"    
        ></HomePage>
       <AddPage
            v-else-if="pageName === 'AddPage'"
            @cancelAddTask="changePage"
            @logout="changePage"
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
        }
    }
};
</script>

<style scoped>
</style>
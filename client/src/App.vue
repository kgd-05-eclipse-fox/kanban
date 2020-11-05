<template>
    <div>
        <NavbarPage
            :pageName="pageName"
            @changePage="changePage"
            @clearStorage="logout">
        </NavbarPage>

        <HomePage v-if="pageName === 'homePage'"></HomePage>

        <LoginPage
            @login="loginUser" 
            v-else-if="pageName === 'loginPage'"
        >
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
            @toEditPage="toEditPage">
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
            detailTask: null  
        };
    },
    components: {
        NavbarPage,
        LoginPage,
        RegisterPage,
        HomePage,
        KanbanPage,
        AddPage,
        EditPage
    },
    methods: {
        changePage(name) {
            this.pageName = name
        },
        toEditPage(payload) {
            this.pageName = payload.pageName
            this.detailTask = payload.task
        },
        editTask(payload) {
            console.log('editTask');
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
                console.log(response);
                this.fetchTask()
                this.pageName = 'kanbanPage'
            })
            .catch(err => {
                console.log(err);
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
            })
            .catch(err => {
                console.log(err);
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
            })
            .catch(err => {
                console.log(err);
            })
        },
        logout(clear) {
            console.log('logout sukses');
            clear
            this.pageName = 'loginPage'
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
                console.log(data);
                this.fetchTask()
                this.pageName = 'kanbanPage'
            })
            .catch(err=> {
                console.log(err);
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
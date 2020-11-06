<template>
  <div>
      
     <!-- NAVBAR HOMEPAGE-->
    <HomePage 
        v-if = "pageName === 'home-page'"
        :categories="kategories"
        :tasks="tasks"
        @changePage="changePage"
        @toEditPage="toEditPage"
        @logout="logout"
        @destroy="destroy">
        
    </HomePage>
    
    <!--LOGIN PAGE-->
    <LoginPage 
        v-else-if = "pageName === 'login-page'"
        @login="login"
        @pindahRegister="pindahRegister"
        @OnGoogleAuthSuccess="OnGoogleAuthSuccess"
        ></LoginPage>
    
    <!-- REGISTER PAGE -->
    <RegisterPage 
        v-else-if = "pageName === 'register-page'"
        @register="register"
        @pindahLogin="pindahLogin"
        ></RegisterPage>

    <!-- ADD TASK -->
    <AddTask 
        v-else-if = "pageName ==='add-task'"
        @addTodo="addTodo">
        </AddTask>

    <!--EDIT TASK-->
    <EditTask v-else-if = "pageName === 'edit-task'"
        :detailTask="detailTask"
        @editTask="editTask"></EditTask>
    
  </div>
</template>

<script>
import HomePage from './components/HomePage'
import AddTask from './components/AddTask'
import EditTask from './components/EditTask'
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage'
import Category from './components/Category'
import axios from './config/axios'
export default {
    name : 'App',
    data() {
        return {
            msg : 'bima krishna',
            pageName : 'login-page',
            kategories : [
                {
                    "kategori" : "TODO"
                },{

                    "kategori" : "IN PROGRES"
                },{
                
                    "kategori" : "REVIEW"
                },{

                    "kategori" : "COMPLETE"
                }
            ],
            tasks : [],
            detailTask : null
        }
    },
    components : {
        HomePage, AddTask, EditTask, RegisterPage, LoginPage, Category
    },
    methods : {
        changePage(payload){
            console.log(name, '-------------bener ga nih')
            this.pageName = payload.name
        },

        toEditPage(payload){
            this.pageName = payload.pageName
            console.log(payload, 'ini edit di app')
            this.detailTask = payload.task
            
        },

        pindahRegister(){
            this.pageName = 'register-page'
        },

        pindahLogin(){
            this.pageName = 'login-page'
        },

        register(payload){
            axios ({
                url :'/register',
                method : 'post',
                data : {
                    email : payload.email,
                    password : payload.password
                }
            })
            .then(data=> {
                this.ready()
            })
            .catch(err=> {
                console.log(err)
            })
        },


        login(payload){
            axios ({
                url : '/login',
                method : 'post',
                data : {
                    email : payload.email,
                    password : payload.password
                }
            }).then(data => {
                localStorage.setItem('access_token', data.data.access_token)
                this.ready()
            })
            .catch(err=> {
                console.log(err)
            })
        },

        OnGoogleAuthSuccess(idToken){
            console.log(idToken)
            axios({
                url :'/googleLogin/',
                method : 'post',
                data : {
                    google_access_token : idToken
                }
            })
            .then(data => {

                localStorage.setItem('access_token', data.data.access_token)
                this.ready()
            })
            .catch(err=> {
                console.log(err)
            })
        },


        logout() { 
            localStorage.clear();
            this.ready()
        },

        destroy(payload){
            console.log(payload)
            axios({
                url :`/tasks/${payload}`,
                method : 'delete',
                headers : {
                    access_token : localStorage.getItem('access_token')
                }
            })
            .then(data => {
                this.ready()
                this.fetchTask()
            })
            .catch(err=> {
                console.log(err)
            })
        },

     

        editTask(payload){
            
            axios({
                url:`/tasks/${payload.id}`,
                method: 'put',
                headers : {
                    access_token : localStorage.getItem('access_token')
                },
                data : {
                    title : payload.title,
                    category : payload.category
                }
            })
            .then(_=> {
                this.pageName ='home-page'
                this.fetchTask()
                this.ready()
            })
            .catch(err=> {
                console.log(err.response, 'ini error fetch')
            })
        },


        fetchTask(){
            axios ({
                url : '/tasks',
                method : 'get',
                headers : {
                    access_token : localStorage.getItem('access_token')
                }
                })
                .then((data) => {
                   this.tasks = data.data
                   this.ready()
                })
                .catch(err=> {
                    console.log(err.response, 'ini error')
                })
        },
        addTodo(payload){
            axios({
                url : '/tasks',
                method : 'post',
                headers : {
                    access_token : localStorage.getItem('access_token')
                },
                data : {
                    title : payload.title,
                    category : payload.category
                }
            })
            .then((data)=> {
                this.pageName = 'home-page'
                this.fetchTask()
                this.ready()
            })
            .catch(err => {
                console.log(err.response, 'yahhh error')
            })
        },
        ready () {
            if(localStorage.getItem('access_token')){
                this.pageName = 'home-page';
            }
            else {
                    this.pageName = 'login-page'
            }
        }
    },
     created(){
            this.fetchTask()
        }
}
</script>

<style>

</style>
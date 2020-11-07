<template>
  <div>
    <LoginPage 
      v-if="pageName == 'login-page'"
      @login="login"
      @changePage='changePage'
      @googleSignIn="googleSignIn">
    </LoginPage>

    <RegisterPage
      v-else-if="pageName == 'register-page'"
      @register='register'>
    </RegisterPage>  

    <EditTask
      v-else-if="pageName == 'edit-page'"
      :selected="selected"
      @updateTask="updateTask"
      @deleteTask="deleteTask">
    </EditTask>

    <KanbanPage
      v-else-if="pageName == 'kanban-page'"
      :status="categories"
      :tasks="tasks"
      @changePage="changePage"
      @AddTaskKanban="addTask"
      @editPage="editPage">                                                                   //nama warisan sebelah kiri
    </KanbanPage>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import KanbanPage from './components/KanbanPage'
import NotFoundPage from './components/NotFoundPage'
import EditTask from './components/EditTask'
import axios from './config/axios'
export default {
  name: 'App',
  data() {
    return {
      pageName: 'kanban-page',
      categories: [
        {
          "id": 1,
          "name": "Backlog"
        },
        {
          "id": 2,
          "name": "Todo"
        },
        {
          "id": 3,
          "name": "Doing"
        },
        {
          "id": 4,
          "name": "Done"
        }
      ],
      tasks: [],
      selected: {

      }
    };
  },
   components: {
     LoginPage, 
     RegisterPage,
     KanbanPage,
     NotFoundPage,
     EditTask
   },
   methods: {
     addTask(payload) {
       console.log("addTask ->>>>>>>> payload", payload)
       const access_token = localStorage.getItem('access_token')
       axios({
         method: "POST",
         url: '/tasks',
         data: {
           title: payload.name
         },
         headers: {
           access_token
         }
       })
       .then((data) => {
       console.log("addTask ->>>>>>> data Berhasil Add Task", data)
       this.fetchTasks()
         
       }).catch((err) => {
       console.log("addTask -> err", err)
         
       });
     },
     changePage(name) {
       console.log("changePage ->>>>>>>> name", name)
       this.pageName = name
     },
     login(payload) {
       axios({
         method: 'POST',
         url: `/login`,
         data: {
             email: payload.email,
             password: payload.password
         }
     })
     .then(response => {
         const access_token = response.data.access_token
         this.pageName = 'kanban-page'

         localStorage.setItem('access_token', access_token)

         this.fetchTasks()
     })
     .catch(err => {
       console.log(err);
     })
     },
     fetchTasks() {
       const access_token = localStorage.getItem('access_token')
       axios({
         method: 'GET',
         url: '/tasks',
         headers: {
           access_token
         }
         })
         .then(({data}) => {
         console.log("fetchTasks ->>>>>>>>>>>>>>> data", data)
           this.tasks = data.tasks
           console.log("fetchTasks ->>>>>>>>>> this.tasks", this.tasks)
         })
         .catch(err => {
         console.log("fetchTasks ->>>>>>> err", err)
         })
     },
     register(user) {
       axios({
         method: 'post',
         url: '/register',
         data: user
       })
       .then((result) => {
         this.pageName = 'login-page'
       }).catch((err) => {
         console.log(err);
       });
     },
     editPage(payload) {
       this.pageName = payload.pageName
       this.selected = payload.task
     },
     updateTask(payload) {
       const access_token = localStorage.getItem('access_token')
       axios({
         method: 'put',
         url: `/tasks/${payload.id}`,
         headers: {
           access_token
         },
         data: {
           title: payload.title,
           description: payload.description
         }
       })
       .then((result) => {
         this.fetchTasks()
         this.pageName = 'kanban-page'
       }).catch((err) => {
         console.log(err.response)
       });
     },
     deleteTask(id) {
       const access_token = localStorage.getItem('access_token')
       axios({
         method: 'delete',
         url: `/tasks/${id}`,
         headers: {
           access_token
         }
       })
       .then((result) => {
         this.fetchTasks()
         this.pageName = 'kanban-page'
       }).catch((err) => {
         console.log(err);
       });
     },
     googleSignIn(google_access_token) {
        axios({
            url: '/googleLogin',
            method: 'POST',
            data:  { google_access_token }
        })
        .then(data => {
            const access_token = data.data.access_token
            localStorage.setItem('access_token', access_token)
            this.pageName = 'kanban-page'
            this.fetchTasks()
        })
        .catch(err => {
            console.log(err);
        })
     }
     },
  created() {
     const token = localStorage.getItem('access_token')
     if (token) {
       this.fetchTasks()
       this.pageName = 'kanban-page'
     } else {
       this.pageName = 'login-page'
     }
   }
};
</script>

<style scoped>
</style>
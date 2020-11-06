<template>
  <div>
    <LoginPage 
      v-if="pageName == 'login-page'">
    </LoginPage>

    <RegisterPage
      v-else-if="pageName == 'register-page'">
    </RegisterPage>  

    <KanbanPage
      v-else-if="pageName == 'kanban-page'"
      :status="categories"
      :tasks="tasks">                                                                   //nama warisan sebelah kiri
    </KanbanPage>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import KanbanPage from './components/KanbanPage'
import NotFoundPage from './components/NotFoundPage'
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
      tasks: []
    };
  },
   components: {
     LoginPage, 
     RegisterPage,
     KanbanPage,
     NotFoundPage
   },
   methods: {
     login() {
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
         const user = response.data.user
         this.pageName = 'kanban-page'

         localStorage.setItem('access_token', access_token)
         localStorage.setItem('user', JSON.stringify(user, null, 2))

         this.loggedIn.status = true
         this.loggedIn.user = JSON.parse(localStorage.user)
         this.loggedIn.username = JSON.parse(localStorage.user).username

         this.fetchTasks()
     })
     .catch(err => {
       console.log(err);
     })
     },
     fetchTasks() {
       axios({
         method: 'GET',
         url: '/tasks',
         })
         .then(({data}) => {
           this.tasks = data
         })
         .catch(err => {
         console.log("fetchTasks ->>>>>>> err", err)
         })
     }
   },
   created() {
     this.fetchTasks()
   }
};
</script>

<style scoped>
</style>
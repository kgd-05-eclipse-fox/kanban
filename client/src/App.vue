<template>
  <div>
    <NavBar
      :showContet='showContet'
      @changePage='backToHome'
      @logout='logout'
    ></NavBar>

    <LoginPage 
      v-if="showContet === 'login-page'"
      @dataUserLogin='loginUser'
      @registerpage=changePage
      @googleSignIn='googleSignIn'
    >
    </LoginPage>

    <RegisterPage 
      v-else-if="showContet === 'register-page'"
      @register='register'
      @login=changePage
    >
    </RegisterPage>

    <CardByStatus
      v-else-if="showContet === 'home-page'"
      :categories="categories"
      :dataKanbans="dataKanbans"
      @deleteBacklog='deleteKanban'
      @getKanbanById='getKanbanById'
      @GoUpdate='update'
    >
    </CardByStatus>

    <AddPage
      v-else-if="showContet === 'add-page'"
      @addKanban='addKanban'
    >
    </AddPage>

    <EditPage
      v-else-if="showContet === 'edit-page'"
      :editKanban='this.editKanban'
      @editDataKanban='editDataKanban'
    >
    </EditPage>

    <ImformationPage
      v-else-if="showContet === 'information-page'"
    >
    </ImformationPage>

  </div>
</template>

<script>

import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import NavBar from './components/NavBar'
import AddPage from './components/AddPage'
import EditPage from './components/EditPage'
import ImformationPage from './components/InformationPage'
import CardByStatus from './components/CardByStatus'
import axios from './config/axios'

export default {
  name: 'App',
  data() {
    return {
      categories: [
          {
              title: "Backlog"
          },
          {
              title: "Product"
          },
          {
              title: "Development"
          },
          {
              title: "Done"
          }
      ],
      dataKanbans: [], // data kanban
      showNav: '',
      showContet: 'login-page',
      kanban: [],
      email: '',
      password: '',
      title: '',
      description: '',
      addEmail: '',
      addPassword: '',
      editKanban: []
    };
  },
  methods: {
    changePage(name){
      this.showContet = name,
      this.dataKanbans = []
    },
    googleSignIn(google_access_token) {
      axios({
        method: 'POST',
        url: '/loginGoogle',
        data:  { google_access_token }
      })
      .then(data => {
        const acces_token = data.data.access_token
        localStorage.setItem('acces_token', acces_token)
        this.showContet = 'home-page'
        this.getDataAllkanban()
          
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Welcome`,
            showConfirmButton: false,
            timer: 1500
        })
      })
      .catch(err => {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `Sorry`,
            showConfirmButton: false,
            timer: 1500
        })
      })
    },
    register(data){
      let userEmail = localStorage.getItem('email')
        axios({
            method: 'POST',
            url: '/register',
            data: {
                email: data.addEmail,
                password: data.addPassword
            }
        })
        .then(res=>{
            this.changePage('login-page')
            this.addEmail = ''
            this.addPassword = ''

             Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${userEmail} Registration has been complite`,
              showConfirmButton: false,
              timer: 1500
            })
        })
        .catch(err=>{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: `Sorry`,
              showConfirmButton: false,
              timer: 1500
            })
        })
    },
    backToHome(data){
      this.changePage(data)
      this.getDataAllkanban()
    },
    addKanban(data){
        let access_token = localStorage.acces_token
        axios({
            method: 'POST',
            url: '/tasks',
            headers: {access_token},
            data: {
                title: data.title,
                description: data.description
            }
        })
        .then(res=>{
            this.changePage('home-page')
            this.showNav = 'navBar'
            this.getDataAllkanban()
            this.title = ''
            this.description = ''

             Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your Kanban has ben saved',
              showConfirmButton: false,
              timer: 1500
            })
        })
        .catch(err=>{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: `Sorry errer to add your kanban`,
              showConfirmButton: false,
              timer: 1500
            })
        })
    },
    getDataAllkanban(){  
      const access_token = localStorage.acces_token
      axios({
          method: 'GET',
          url: `/tasks`,
          headers: {access_token}
      })
      .then(res=>{
        this.dataKanbans = res.data
        this.showNav = 'navBar'
            
      })
      .catch(err=>{
          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `Sorry`,
            showConfirmButton: false,
            timer: 1500
          })
      })
    },
    
    loginUser(data){
      let nameUser = data.email
      localStorage.setItem('email', nameUser)
        axios({
            method: 'POST',
            url: '/login',
            data: {
                email: data.email,
                password: data.password
            }
        })
        .then(res=>{
            let data = res.data
            let localId = data.id
            let acces_token = data.access_token
            localStorage.setItem('acces_token', acces_token)
            localStorage.setItem('localId', localId)
            this.changePage('home-page')
            this.getDataAllkanban()
            this.email = ''
            this.password = ''

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `Welcome ${nameUser}`,
              showConfirmButton: false,
              timer: 1500
            })
        })
        .catch(err=>{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: `Sorry`,
              showConfirmButton: false,
              timer: 1500
            })
        })
    },
    deleteKanban(data){
      let id = localStorage.localId
      let access_token = localStorage.acces_token
      let idKanban = data
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
          axios({
              method: 'DELETE',
              url: `/tasks/${idKanban}`,
              headers: {access_token}
          })
          .then(res=>{
              this.changePage('home-page')
              this.getDataAllkanban()
              
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Kanban has been Delete',
                showConfirmButton: false,
                timer: 1500
              })
          })
          .catch(err=>{
              Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Sorry Not your Kanban`,
                showConfirmButton: false,
                timer: 1500
              })
          })
        }
      })
    },
    logout(){
        localStorage.removeItem('acces_token');
        localStorage.removeItem('localId');
        localStorage.removeItem('email');
        this.changePage('login-page')
        this.showNav = ''
        this.dataKanbans = []

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your has been Logout',
          showConfirmButton: false,
          timer: 1500
        })
    },
    update(data){
      let id = +data.status.id
      let access_token = localStorage.acces_token
      let newData = ''
      if(data.status.status === 'backlog'){
        newData = 'product'
      }else if(data.status.status === 'product'){
        newData = 'development'
      }else if(data.status.status === 'development'){
        newData = 'done'
      }else if(data.status.status === 'done'){
        newData = 'done'
      }

      axios({
          method: 'patch',
          url: `/tasks/${id}`,
          headers: {access_token},
          data: {
            status: newData
          }
      })
      .then(res=>{
        this.changePage('home-page')
        this.getDataAllkanban()
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `Your Kanban has been Update status to ${newData}`,
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Sorry internal server Error`,
          showConfirmButton: false,
          timer: 1500
        })
      })

    },
    getKanbanById(data){
      let id = data
      let access_token = localStorage.acces_token
      axios({
        method: 'GET',
        url: `/tasks/${id}`,
        headers: {access_token}
      })
      .then(res=>{
        let data = res.data
        this.editKanban = data
        this.changePage('edit-page')
      })
      .catch(err=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Sorry`,
          showConfirmButton: false,
          timer: 1500
        })
      })

    },
    editDataKanban(data){
      let newData = data
      let access_token = localStorage.acces_token
      axios({
        method: 'PUT',
        url: `/tasks/${newData.id}`,
        headers: {access_token},
        data: {
          title: newData.title,
          description: newData.description
        }
      })
      .then(res=>{
        this.changePage('home-page')
        this.getDataAllkanban()

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your Kanban has been Save',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err=>{
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `Sorry`,
          showConfirmButton: false,
          timer: 1500
        })
      })
    }
  },
  created(){
      if(!localStorage.acces_token){
          this.changePage('login-page')
          this.showNav = ''
      }else{
          this.changePage('home-page')
          this.getDataAllkanban()
          this.showNav = 'navBar'
      }
  },
  components: {
    RegisterPage,
    LoginPage,
    NavBar,
    AddPage,
    EditPage,
    ImformationPage,
    CardByStatus
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
</style>
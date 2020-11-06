<template>
  <div>
    <NavBar
      :showContet='showContet'
      @gantiHalaman='backToHome'
      @logout='logout'
    ></NavBar>

    <LoginPage 
      v-if="showContet === 'login-page'"
      @dataUserLogin='loginUser'
      @registerpage=gantiHalaman
    >
    </LoginPage>

    <RegisterPage 
      v-else-if="showContet === 'register-page'"
      @register='register'
      @login=gantiHalaman
    >
    </RegisterPage>


    <HomePage
      v-else-if="showContet === 'home-page'"
      @editPage='gantiHalaman'
      @GoUpdate='update'
      @deleteBacklog='deleteKanban'
      @deleteProduct='deleteKanban'
      @deleteDevelopment='deleteKanban'
      @deleteDone='deleteKanban'
      @editKanban='getKanbanById'
      :kanban='{
        backlog: this.backlog,
        product: this.product,
        development: this.development,
        done: this.done
      }'
    >
    </HomePage>

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
import HomePage from './components/HomePage'
import AddPage from './components/AddPage'
import EditPage from './components/EditPage'
import ImformationPage from './components/InformationPage'

import axios from './config/axios'

export default {
  name: 'App',
  data() {
    return {
      showNav: '',
      showContet: 'login-page',
      conten: false,
      kanban: [],
      server: 'http://localhost:3000',
      email: '',
      password: '',
      title: '',
      description: '',
      addEmail: '',
      addPassword: '',
      backlog: [],
      product: [],
      development: [],
      done: [],
      editKanban: []
    };
  },
  methods: {
    gantiHalaman(name){
      console.log(name)
      this.showContet = name,
      this.backlog = []
      this.product = []
      this.development = []
      this.done = []
    },
    register(data){
      let userEmail = localStorage.getItem('email')
        axios({
            method: 'POST',
            url: '/resgister',
            data: {
                email: data.addEmail,
                password: data.addPassword
            }
        })
        .then(res=>{
            this.gantiHalaman('login-page')
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
            console.log(err)

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
      this.gantiHalaman(data)
      this.getDataAllkanban()
    },
    addKanban(data){
      console.log(data, 'data add kanban <<<<<<<<<<<<<<,')
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
            this.gantiHalaman('home-page')
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
            console.log(err)

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
        this.backlog = []
        this.product = []
        this.development = []
        this.done = []
        axios({
            method: 'GET',
            url: `/tasks`,
            headers: {access_token}
        })
        .then(res=>{
            this.kanban = res.data
            this.showNav = 'navBar'
            for(let i in res.data){
              if(res.data[i].status === 'backlog'){
                this.backlog.push(res.data[i])
              }else if(res.data[i].status === 'product'){
                this.product.push(res.data[i])
              }else if(res.data[i].status === 'development'){
                this.development.push(res.data[i])
              }else if(res.data[i].status === 'done'){
                this.done.push(res.data[i])
              }
            }
            // console.log(res.data)
        })
        .catch(err=>{
            console.log(err)

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
      console.log(data)
      let nameUser = data.email
      localStorage.setItem('email', nameUser)
      console.log(nameUser)
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
            this.gantiHalaman('home-page')
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
            console.log(err)

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
      console.log(id, '\n', access_token, '\n', idKanban)
      axios({
          method: 'DELETE',
          url: `/tasks/${idKanban}`,
          headers: {access_token}
      })
      .then(res=>{
          this.gantiHalaman('home-page')
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
          console.log(err)

          Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `Sorry Not your Kanban`,
            showConfirmButton: false,
            timer: 1500
          })
      })
    },
    logout(){
        localStorage.removeItem('acces_token');
        this.gantiHalaman('login-page')
        this.showNav = ''
        this.backlog = []
        this.product = []
        this.development = []
        this.done = []

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your has been Logout',
          showConfirmButton: false,
          timer: 1500
        })
    },
    update(data){
      let id = +data.id
      let access_token = localStorage.acces_token
      let newData = ''
      if(data.status === 'backlog'){
        newData = 'product'
      }else if(data.status === 'product'){
        newData = 'development'
      }else if(data.status === 'development'){
        newData = 'done'
      }else if(data.status === 'done'){
        newData = 'done'
      }
      console.log(`${data.status} >>> ${newData}`)

      axios({
          method: 'patch',
          url: `/tasks/${id}`,
          headers: {access_token},
          data: {
            status: newData
          }
      })
      .then(res=>{
        console.log(res.data)
        this.gantiHalaman('home-page')
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
          console.log(err)
      })

      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `Sorry internal server Error`,
        showConfirmButton: false,
        timer: 1500
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
        this.gantiHalaman('edit-page')
        console.log(this.editKanban)
      })
      .catch(err=>{
        console.log(err)

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
      console.log(newData)
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
        console.log(res.data)
        this.gantiHalaman('home-page')
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
        console.log(err)

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
          this.gantiHalaman('login-page')
          this.showNav = ''
      }else{
          this.gantiHalaman('home-page')
          this.getDataAllkanban()
          this.showNav = 'navBar'
      }
  },
  components: {
    RegisterPage,
    LoginPage,
    NavBar,
    HomePage,
    AddPage,
    EditPage,
    ImformationPage
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
</style>
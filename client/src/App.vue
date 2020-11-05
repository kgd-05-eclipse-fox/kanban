<template>
  <div>
    <!-- template -->
    <div>
      <!-- login-page -->
      <!-- <div v-if="showContet === 'login-page'" id="login-page">
        <div class="container d-flex justify-content-center" style="margin-top: 15vh;">
          <div class="card">
              <h4 class="text-center pt-4"><img class="logo-log" src="./assets/img/logoo.png" alt=""></h4> 
              <span class="info">To all special dicounts and more <br> become to login!<span>
              <div class="text-center flex-column"> 
                  <div class="form-group justify-content-center d-flex">
                      <form>
                          <input v-model="email" type="email" name="email" placeholder="email address" class="form-control form mb-2"> 
                          <input v-model="password" type="password" name="password" placeholder="password" class="form-control">
                          <button v-on:click.prevent="loginUser()" type="submit" class="btn mt-4">Login</button>
                      </form>
                  </div>
              </div>
              <div class="text-center pb-4 pt-3">
                  <div class="px-3">
                      <div class=" d-flex justify-content-between mb-2">
                          <span><a v-on:click.prevent="gantiHalaman('register-page')" href="#" style="text-decoration: none; color: whitesmoke;">Go To Register</a></span>
                          <span>Forgot Password</span>
                      </div>
                      <h4 class="else"><span class="else2"> Or use these to login </span></h4>
                  </div>
                  <div class="pt-3 d-flex flex-row px-3"> 
                      <button type="button" class="btn btn-success fb mr-2">Facebook</button> 
                      <button type="button" class="btn btn-succes ggl">Google</button> 
                  </div>
              </div>
          </div>
        </div>
      </div> -->
      <!-- END login-page -->

      <!-- regis-page -->
      <!-- <div v-else-if="showContet === 'register-page'" id="register-page">
        <div class="container d-flex justify-content-center" style="margin-top: 15vh;">
      <div class="card">
          <h4 class="text-center pt-4"><img class="logo-log" src="./assets/img/logoo.png" alt=""></h4> 
          <span class="info">To all special dicounts and more <br> become to member!<span>
          <div class="text-center flex-column"> 
              <div class="form-group justify-content-center d-flex">
                  <form>
                      <input v-model="addEmail" type="email" name="email" placeholder="email address" class="form-control form mb-2"> 
                      <input v-model="addPassword" type="password" name="password" placeholder="password" class="form-control">
                      <button v-on:click.prevent="register()" type="submit" class="btn mt-4">Register</button>
                  </form>
              </div>
          </div>
          <div class="text-center pb-4 pt-3">
              <div class="px-3">
                      <div class=" d-flex justify-content-between mb-2">
                          <span><a v-on:click.prevent="gantiHalaman('login-page')" href="#" style="text-decoration: none; color: whitesmoke;">Go To Login</a></span>
                          <span>Forgot Password</span>
                      </div>
                      <h4 class="else"><span class="else2"> Or use these to login </span></h4>
                  </div>
              <div class="pt-3 d-flex flex-row px-3"> 
                  <button type="button" class="btn btn-success fb mr-2">Facebook</button> 
                  <button type="button" class="btn btn-succes ggl">Google</button> 
              </div>
          </div>
      </div>
        </div>
      </div> -->
      <!-- END regis-page -->

      <!-- NavBar-page -->
      <!-- <div v-if="showNav === 'navBar'" id="navBar">
          <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 shadowNav bgNav">
              <a v-on:click.prevent="gantiHalaman('home-page')" id="listAll-todo" class="navbar-brand" href="#"><img class="logo-nav" src="./assets/img/logoo.png" alt=""></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a v-on:click.prevent="gantiHalaman('add-page')"  id="add-todo" class="nav-link" href="#">Add Kanban
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a v-on:click.prevent="gantiHalaman('information-page')" class="nav-link" href="#">Information</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Dropdown
                    </a>
                    <div class="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
                      <a v-on:click.prevent="gantiHalaman('login-page')" class="dropdown-item" href="#">Log In</a>
                      <a v-on:click.prevent="gantiHalaman('register-page')" class="dropdown-item" href="#">Register</a>
                      <a v-on:click.prevent="gantiHalaman('edit-page')" class="dropdown-item" href="#">Edit</a>
                    </div>
                  </li>
                </ul>
                <ul class="navbar-nav ml-auto nav-flex-icons">
                  <li class="nav-item">
                      <a v-on:click.prevent="logout()" id="btn-logout" class="nav-link" href="#">Log Out</a>
                    </li>
                  <li class="nav-item avatar dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
                      aria-labelledby="navbarDropdownMenuLink-55">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
        </div> -->
      <!-- END NavBar-page -->

      <!-- home-page -->
      <!-- <div v-else-if="showContet === 'home-page'" id="home-page">
        <div v-if="showNav === 'navBar'" id="navBar">
          <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 shadowNav bgNav">
              <a v-on:click.prevent="gantiHalaman('home-page')" id="listAll-todo" class="navbar-brand" href="#"><img class="logo-nav" src="./assets/img/logoo.png" alt=""></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
                aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a v-on:click.prevent="gantiHalaman('add-page')"  id="add-todo" class="nav-link" href="#">Add Kanban
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a v-on:click.prevent="gantiHalaman('information-page')" class="nav-link" href="#">Information</a>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">Dropdown
                    </a>
                    <div class="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
                      <a v-on:click.prevent="gantiHalaman('login-page')" class="dropdown-item" href="#">Log In</a>
                      <a v-on:click.prevent="gantiHalaman('register-page')" class="dropdown-item" href="#">Register</a>
                      <a v-on:click.prevent="gantiHalaman('edit-page')" class="dropdown-item" href="#">Edit</a>
                    </div>
                  </li>
                </ul>
                <ul class="navbar-nav ml-auto nav-flex-icons">
                  <li class="nav-item">
                      <a v-on:click.prevent="logout()" id="btn-logout" class="nav-link" href="#">Log Out</a>
                    </li>
                  <li class="nav-item avatar dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-55" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg-right dropdown-secondary"
                      aria-labelledby="navbarDropdownMenuLink-55">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
        </div>
        <div class="container justify-content-center">
          <div class="row d-flex mt-3">
              <div class="col-sm-3">
                  <div class="bg1 card-header text-center shadowcard">
                      <h4>Backlog</h4>
                  </div>
                  <div class="c1 shadowcard overflow-auto" style="height: 70vh;">
                      <div id="board-1" class=" card-body text-light">
                          <div v-for="el in kanban" :key="el.id" id="card-1" draggable="true" class=" card-body mb-2 text-center flex-column pb-0 px-0" style="border-bottom: solid;">
                              <div class="hvr-grow">
                                  <div class="col titleCard bg-white">
                                      {{el.title}}
                                  </div>
                                  <div class="col bg-dark">
                                      <p class="pContent">{{el.description}}</p>
                                  </div>
                              </div>
                              <div class="col d-flex" style="padding-left: 0%; padding-right: 0%;">
                              <div class="col" style="padding-left: 0%; padding-right: 0%;">
                                  <a href="#"><img class="log-User mt-3" :src="el.imgUser" alt=""></a>
                              </div>
                              <div class="col d-flex mt-3 text-center" style="padding: 0%;">
                                  <a v-on:click.prevent="gantiHalaman('edit-page')" href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                  <a v-on:click.prevent="deleteKanban()" href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                  <a href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-3">
                  <div class="bg1 card-header text-center shadowcard">
                      <h4>Product</h4>
                  </div>
                  <div class="c1 shadowcard overflow-auto" style="height: 70vh;">
                      <div id="board-2" class=" card-body text-light">
                          <div v-for="el in kanban" :key="el.id" id="card-1" draggable="true" class=" card-body mb-2 text-center flex-column pb-0 px-0" style="border-bottom: solid;">
                              <div class="hvr-grow">
                                  <div class="col titleCard bg-white">
                                      {{el.title}}
                                  </div>
                                  <div class="col bg-dark">
                                      <p class="pContent">{{el.description}}</p>
                                  </div>
                              </div>
                              <div class="col d-flex" style="padding-left: 0%; padding-right: 0%;">
                              <div class="col" style="padding-left: 0%; padding-right: 0%;">
                                  <a href="#"><img class="log-User mt-3" :src="el.imgUser" alt=""></a>
                              </div>
                              <div class="col d-flex mt-3 text-center" style="padding: 0%;">
                                  <a v-on:click.prevent="gantiHalaman('edit-page')" href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                  <a href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                  <a href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-3">
                  <div class="bg1 card-header text-center shadowcard">
                      <h4>Development</h4>
                  </div>
                  <div class="c1 shadowcard overflow-auto" style="height: 70vh;">
                      <div id="board-3" class=" card-body text-light">
                          <div v-for="el in kanban" :key="el.id" id="card-1" draggable="true" class=" card-body mb-2 text-center flex-column pb-0 px-0" style="border-bottom: solid;">
                              <div class="hvr-grow">
                                  <div class="col titleCard bg-white">
                                      {{el.title}}
                                  </div>
                                  <div class="col bg-dark">
                                      <p class="pContent">{{el.description}}</p>
                                  </div>
                              </div>
                              <div class="col d-flex" style="padding-left: 0%; padding-right: 0%;">
                              <div class="col" style="padding-left: 0%; padding-right: 0%;">
                                  <a href="#"><img class="log-User mt-3" :src="el.imgUser" alt=""></a>
                              </div>
                              <div class="col d-flex mt-3 text-center" style="padding: 0%;">
                                  <a v-on:click.prevent="gantiHalaman('edit-page')" href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                  <a href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                  <a href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-sm-3">
                  <div class="bg1 card-header text-center shadowcard">
                      <h4>Done</h4>
                  </div>
                  <div class="c1 shadowcard overflow-auto" style="height: 70vh;">
                      <div id="board-4" class=" card-body text-light">
                          <div v-for="el in kanban" :key="el.id" id="card-1" draggable="true" class=" card-body mb-2 text-center flex-column pb-0 px-0" style="border-bottom: solid;">
                              <div class="hvr-grow">
                                  <div class="col titleCard bg-white">
                                      {{el.title}}
                                  </div>
                                  <div class="col bg-dark">
                                      <p class="pContent">{{el.description}}</p>
                                  </div>
                              </div>
                              <div class="col d-flex" style="padding-left: 0%; padding-right: 0%;">
                              <div class="col" style="padding-left: 0%; padding-right: 0%;">
                                  <a href="#"><img class="log-User mt-3" :src="el.imgUser" alt=""></a>
                              </div>
                              <div class="col d-flex mt-3 text-center" style="padding: 0%;">
                                  <a v-on:click.prevent="gantiHalaman('edit-page')" href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                  <a href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                  <a href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
                              </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div> -->
      <!-- NED home-page -->

      <!-- add-page -->
      <!-- <div v-else-if="showContet === 'add-page'" id="add-page">
        <div id="add-page">
          <div class=" container">
              <div class=" flex-column my-5">
                  <div class=" col-12 d-flex justify-content-center">
                      <div class=" card">
                          <div class=" card-header text-center">
                              <h4>Add You'r Project</h4>
                              <img class="logo-log" src="./assets/img/logoo.png" alt="">
                          </div>
                          <div class=" card-footer">
                              <form action="" method="post">
                                  <input v-model="title" type="text" name="title" id="" placeholder="Title" class=" my-4 input-group form-control">
                                  <input v-model="description" type="text" name="descriptin" id="" placeholder="Descriptin" class=" my-4 input-group form-control">
                                  <button v-on:click.prevent="addkanban()" type="submit" class="btn">Submit</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div> -->
      <!-- END add-page -->

      <!-- edit-page -->
      <!-- <div v-else-if="showContet === 'edit-page'" id="edit-page">
        <div id="edit-page">
          <div class=" container">
              <div class=" flex-column my-5">
                  <div class=" col-12 d-flex justify-content-center">
                      <div class=" card">
                          <div class=" card-header text-center">
                              <h4>Edit You'r Project</h4>
                              <img class="logo-log" src="./assets/img/logoo.png" alt="">
                          </div>
                          <div class=" card-footer">
                              <form action="" method="post">
                                  <input type="text" name="title" id="" placeholder="Title" class=" my-4 input-group form-control">
                                  <input type="text" name="descriptin" id="" placeholder="Descriptin" class=" my-4 input-group form-control">
                                  <button type="submit" class="btn">Submit</button>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div> -->
      <!-- END edit-page -->

      <!-- information-page -->
      <!-- <div v-else-if="showContet === 'information-page'" id="information-page">
        <div id="information-page">
          <div class=" container">
              <div class=" flex-column my-5">
                  <div class=" col-12 d-flex justify-content-center">
                      <div class=" card">
                          <div class=" card-header text-center">
                              <h4>information Aplication</h4>
                              <img class="logo-log" src="./assets/img/logoo.png" alt="">
                          </div>
                          <div class=" card-footer">
                              <ul class=" text-center">
                                  <li>
                                      <a href="#"><img class="log-User mt-3" src="./assets/img/l1.png" alt=""></a>
                                      <label for="">Icon User</label>
                                  </li>
                                  <li>
                                      <a href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                      <label for="">Icon "e"dit</label>
                                  </li>
                                  <li>
                                      <a href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                      <label for="">Icon "d"elete</label>
                                  </li>
                                  <li>
                                      <a href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
                                      <label for="">Icon "m"ove/status</label>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div> -->
      <!-- END information-page -->
    </div>
    <!-- END template -->

    <!-- backupdata -->
    <div>
      <LoginPage v-if="showContet === 'login-page'"></LoginPage>
      <RegisterPage v-else-if="showContet === 'regis-page'"></RegisterPage>
      <HomePage v-else-if="showContet === 'home-page'"></HomePage>
    </div>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
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
      addPassword: ''
    };
  },
  methods: {
    gantiHalaman(name){
      this.showContet = name
      this.getDataAllkanban()
    },
    register(){
        axios({
            method: 'POST',
            url: '/resgister',
            data: {
                email: this.addEmail,
                password: this.addPassword
            }
        })
        .then(res=>{
            this.gantiHalaman('login-page')
            this.addEmail = ''
            this.addPassword = ''
        })
        .catch(err=>{
            console.log(err)
        })
    },
    addkanban(){
        let access_token = localStorage.acces_token
        axios({
            method: 'POST',
            url: '/tasks',
            headers: {access_token},
            data: {
                title: this.title,
                description: this.description
            }
        })
        .then(res=>{
            this.gantiHalaman('home-page')
            this.showNav = 'navBar'
            this.title = ''
            this.description = ''
        })
        .catch(err=>{
            console.log(err)
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
            this.kanban = res.data
            this.showNav = 'navBar'
            // console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    loginUser(){
        axios({
            method: 'POST',
            url: '/login',
            data: {
                email: this.email,
                password: this.password
            }
        })
        .then(res=>{
            let data = res.data
            let localId = data.id
            let acces_token = data.access_token
            localStorage.setItem('acces_token', acces_token)
            localStorage.setItem('localId', localId)
            this.gantiHalaman('home-page')
            this.email = ''
            this.password = ''

            // Swal.fire({
            //     position: 'top-end',
            //     icon: 'success',
            //     title: 'Your has been login',
            //     showConfirmButton: false,
            //     timer: 1500
            // })
        })
        .catch(err=>{
            console.log(err)
        })
    },
    deleteKanban(){
        let id = localStorage.localId
        let access_token = localStorage.acces_token
        axios({
            method: 'DELETE',
            url: `/tasks/${id}`,
            headers: {access_token}
        })
        .then(res=>{
            this.gantiHalaman('home-page')
            this.showNav = 'navBar'
        })
        .catch(err=>{
            console.log(err)
        })
    },
    logout(){
        localStorage.removeItem('acces_token');
        this.gantiHalaman('login-page')
        this.showNav = ''
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your has been logout',
            showConfirmButton: false,
            timer: 1500
        })
    }
  },
  created(){
      if(!localStorage.acces_token){
          this.gantiHalaman('login-page')
          this.showNav = ''
      }else{
          this.gantiHalaman('home-page')
          this.showNav = 'navBar'
      }
  },
  components: {
    RegisterPage,
    LoginPage,
    HomePage,
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
</style>
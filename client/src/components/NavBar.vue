<template>
    <div 
      v-if="showContet === 'home-page' || showContet === 'edit-page' || showContet === 'add-page' || showContet === 'information-page'"
      id="navBar">
        <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 shadowNav bgNav">
            <a  v-on:click.prevent="showKanban()"  class="navbar-brand" href="#"><img class="logo-nav" src="../assets/img/logoo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
              aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a v-on:click.prevent="showAddPage()"  id="add-todo" class="nav-link" href="#">Add Kanban
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a v-on:click.prevent="information()" class="nav-link" href="#">Information</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-555" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="false">Dropdown
                  </a>
                  <div class="dropdown-menu dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-555">
                    <a v-on:click.prevent="gantiHalaman()" class="dropdown-item" href="#">Log In</a>
                    <a v-on:click.prevent="gantiHalaman()" class="dropdown-item" href="#">Register</a>
                    <a v-on:click.prevent="gantiHalaman()" class="dropdown-item" href="#">Edit</a>
                  </div>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto nav-flex-icons">
                  <li class="nav-item">
                    <a id="btnLogout" v-on:click.prevent="logout" class="nav-link" href="#">Log Out</a>
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
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {

        }
    },
    props: ['showContet'],
    methods: {
        showAddPage(){
          this.$emit('gantiHalaman', 'add-page')
        },
        logout(){
          this.$emit('logout', {})
        },
        showKanban(){
          this.$emit('gantiHalaman', 'home-page')
        },
        information(){
          this.$emit('gantiHalaman', 'information-page')
        }
    }
}
</script>

<style>

</style>
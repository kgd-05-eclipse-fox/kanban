<template>
    <div 
      v-if="showContet === 'home-page' || showContet === 'edit-page' || showContet === 'add-page' || showContet === 'information-page'"
      id="navBar">
        <nav class="mb-1 d-flex navbar navbar-expand-lg navbar-dark secondary-color lighten-1 shadowNav bgNav justify-content-center">
            <a  v-on:click.prevent="showKanban"  class="navbar-brand justify-content-end" href="#"><img class="logo-nav" src="../assets/img/logoo.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
              aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-column d-flex justify-content-between" id="navbarSupportedContent-555">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a v-on:click.prevent="showAddPage()"  id="add-todo" class="nav-link" href="#">Add Kanban
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a v-on:click.prevent="information()" class="nav-link" href="#">Information</a>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto nav-flex-icons">
                  <li class="nav-item">
                    <a id="btnLogout" v-on:click.prevent="logout" class="nav-link" href="#">Log Out</a>
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
          this.$emit('changePage', 'add-page')
        },
        logout(){
          this.$emit('logout', {})
        },
        showKanban(){
          this.$emit('changePage', 'home-page')
        },
        information(){
          this.$emit('changePage', 'information-page')
        }
    }
}
</script>

<style>

</style>
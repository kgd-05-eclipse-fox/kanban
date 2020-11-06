<template>
  <section id="kanban-page">
    <div class="layout layout-nav-top">
      <div class="navbar navbar-expand-lg bg-purple navbar-dark sticky-top">
        <a class="navbar-brand" href="#">
          <img src="https://lh3.googleusercontent.com/-hH8J-trbQ-M/XbHDwNSOwLI/AAAAAAAAAMs/0wCVVZg0ymwG5GbdOKQJJzqu007DX1L2wCMYCGAYYCw/gtask-logo-ios.png" width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy">
          KanbanBoard
        </a>
        <div class="collapse navbar-collapse justify-content-between" id="navbar-collapse">
          <ul class="navbar-nav">
          </ul>
          <div class="d-lg-flex align-items-center">
        
            <div class="d-none d-lg-block">
              <div class="dropdown">
                <button @click="logout" class="btn btn-round" role="button" data-toggle="dropdown" aria-expanded="false">
                  <i class="material-icons">logout</i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
    
                  <a class="dropdown-item" href="#" data-toggle="modal" data-target="#project-edit-modal">Edit Project</a>
                  <a class="dropdown-item" href="#">Share</a>
                  <a class="dropdown-item" href="#">Mark as Complete</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item text-danger" href="#">Archive</a>
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-container">
        <div class="container-kanban bg-gradient">
          <div class="kanban-board container-fluid mt-lg-4">

            <Category></Category>
            <Category></Category>
            <Category></Category>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Category from './Category'
export default {
  name: 'KanbanPage',
  data() {
    return {
      
      
    }
  },
  methods: {
    logout() {
      
    }
  },
  components: {
    Category
  }
}
</script>

<style>

</style>
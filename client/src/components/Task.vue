<template>
    <div class="card card-kanban text-wrap">

      <div class="card-body">
        <div class="dropdown card-options">
          <button  class="btn-options" type="button" id="kanban-dropdown-button-14" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons">edit</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Edit</a>
            <a class="dropdown-item text-danger" href="#">Archive Card</a>
          </div>
        </div>
        <div class="card-title">
          <a href="#" data-toggle="modal" data-target="#task-modal"><h6>{{ task.title }} </h6></a>
        </div>

        <div class="card-meta d-flex justify-content-between">
          <div class="d-flex align-items-center ">
            <span>{{ task.description }}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Task',
  data() {
    return {
      task: "",
      tasks: [
        {
        title: "Social Login",
        description: "Sign in with google"
        }
      ]
    }
  }

}
</script>

<style>

</style>
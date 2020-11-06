<template>
  <div class="kanban-col">
    <div class="card-list shadow-sm">
      <div class="card-list-header">
        <h6>Backlog</h6>
        <div class="dropdown">
          <button class="btn-options" type="button" id="cardlist-dropdown-button-1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons">more_vert</i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Edit</a>
            <a class="dropdown-item text-danger" href="#">Archive List</a>
          </div>
        </div>
      </div>
    <div  class="card-list-body">

        <Task v-for="(task, index) in tasks" :key="index" ></Task>
    </div>
      <div class="card-list-footer">
        <form v-show="isShow" @submit.prevent="addTask">
          <div class="input-group input-group input-group-round">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="material-icons">add</i>
              </span>
            </div>
            <input v-model="title" type="text" class="form-control form-control" placeholder="Add a task" aria-label="Add app">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Task from './Task'
export default {
  name: 'Category',
  data() {
    return {
      tasks: [{}],
      isShow: true,
      showModal: false,
      title: "",
      description: ""
    }
  },method: {
    addTask() {
      let data = {
        title: this.title,
        description: this.description
      }
      this.tasks.push({title: data.title})
      this.description.push({description: data.description})
    }
  },
  components: {
    Task
  }
}
</script>

<style>

</style>
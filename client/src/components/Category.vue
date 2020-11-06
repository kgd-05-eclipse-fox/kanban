<template>
  <div class="kanban-col">
    <div class="card-list shadow-sm">
      <div class="card-list-header text-wrap">
        <h6>{{ statusDetail.name }}</h6>
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
      
     <Task
      v-for="task in filterCategory"
      :key="task.CategoryId"
      :task="task"
      class="mb-2">
      </Task>

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
      isShow: true,
      showModal: false,
      title: "",
      description: ""
    }
  },
  components: {
    Task
  },
  props: ['statusDetail', 'tasks'],
  computed: {
    filterCategory() {
      return this.tasks.filter(item => item.CategoryId == this.statusDetail.id)
    }
  }
}
</script>

<style>

</style>
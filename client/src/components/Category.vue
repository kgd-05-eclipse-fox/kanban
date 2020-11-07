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
      :key="task.id"
      :task="task"
      class="mb-2"
      @editPage="editPage">
      </Task>

      <!-- Form Add a Task -->
      <div class="card-list-footer" :class="hideForm">
        <form @submit.prevent="addTask">
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
      <!-- End Form -->
    </div>
  </div>
</template>

<script>
import Task from './Task'
export default {
  name: 'Category',
  data() {
    return {
      showModal: false,
      title: "",
      description: ""
    }
  },
  methods: {
    addTask() {
      let payload = {
        name: this.title
      }
      this.$emit('addTaskFromCategory', payload )
    },
    editPage(payload) {
      this.$emit('editPage', payload)
    }
  },
  components: {
    Task
  },
  props: ['statusDetail', 'tasks'],
  computed: {
    filterCategory() {
      return this.tasks.filter(item => item.CategoryId == this.statusDetail.id)
    },
    hideForm() {
      if (this.statusDetail.id != 1) {
        return 'hide'
      }
    }
  }
}
</script>

<style>
  .hide {
    display: none;
  }
</style>
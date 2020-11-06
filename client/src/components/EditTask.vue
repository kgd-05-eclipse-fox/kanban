<template>
  <form @submit.prevent='editTask'>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input v-model="task.title" type="text" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Description</label>
    <div class="col-sm-10">
      <input v-model="task.description" type="text" placeholder="add details" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button @click="deleteTask(task.id)" type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-trash"></span> Trash 
        </button>
    </div>
      
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
  </form>
</template>

<script>
export default {
  name: 'EditTask',
  data () {
    return {
      task: this.selected
    }
  },
  methods: {
    editTask() {
      
      this.$emit('updateTask', this.task)
    },
    deleteTask(id) {
       this.$emit('deleteTask', id)
    }
  },
  props: [
    'selected'
  ]
}
</script>

<style>

</style>
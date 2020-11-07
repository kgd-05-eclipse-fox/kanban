<template>
  <div class = "kartu">
      <h4 class="card-text">{{task.title}}</h4><br>
      <h6 class="card-subtitle mb-2 text-muted">{{new Date(task.createdAt).toISOString().split('T')[0]}}</h6>
      <p class ="text-muted" >email :{{task.User.email}}</p>
    <a @click="toEditPage" href="#" class="card-link">Edit</a>
    <a @click="destroy" href="#" class="card-link">Delete</a>
    <hr>
  </div>
</template>

<script>
export default {
    name : 'TodoList',
    props : [ 'task' ],
    methods : {
        toEditPage(){
          let payload = {
              pageName : 'edit-task',
              task : this.task
          }
          this.$emit('toEditPage', payload)
        },
        destroy(){
          this.$emit('destroy', this.task.id)
        }
    }
}
</script>

<style>

</style>
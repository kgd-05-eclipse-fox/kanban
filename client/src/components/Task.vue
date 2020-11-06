<template>
  <div class="card-list-body">
    <div class="card card-kanban text-wrap">
      <div class="card-body">
        <div class="dropdown card-options">
          <button @click="toEditPage" class="btn-options" type="button" id="kanban-dropdown-button-14" data-toggle="modal" data-target="#exampleModal" aria-haspopup="true" aria-expanded="false">
            <i class="material-icons">edit</i>
          </button>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
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
  </div>
</template>

<script>
export default {
  name: 'Task',
  data() {
    return {
    }
  },
  methods: {
    toEditPage() {
      const payload = {
        pageName: 'edit-page',
        task: this.task
      } 
      this.$emit('editPage', payload)
    }
  },
  props: ['task']

}
</script>

<style>

</style>
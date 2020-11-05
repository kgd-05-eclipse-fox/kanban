<template>
<div>
    <div class="card card-bordered py-2 mb-2">
        <div class="card-body">
            <h6 class="card-title">{{task.title}}</h6>
            <hr>
            <p class="card-text">
                {{task.description}} <br>
                <span class="text-muted">createdBy: {{task.User.email}}</span>
            </p>
            <div class="d-flex container" style="justify-content: space-between;">
                <div>
                    <i @click.prevent="updateTask(task.id)" class="fas fa-pencil-alt text-muted"></i>
                    <i @click.prevent="deleteTask(task.id)" class="fas fa-trash text-muted"></i>
                </div>
                <div>
                    <i class="fas fa-arrows-alt text-muted dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false"></i>
                    <div class="dropdown-menu">
                        <a @click.prevent="changeCategory(task.id, dropdown[0])" href="#" class="dropdown-item">Move to
                            {{dropdown[0]}}</a>
                        <a @click.prevent="changeCategory(task.id, dropdown[1])" href="#" class="dropdown-item">Move to
                            {{dropdown[1]}}</a>
                        <a @click.prevent="changeCategory(task.id, dropdown[2])" href="#" class="dropdown-item">Move to
                            {{dropdown[2]}}</a>
                    </div>
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
            selected: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        changeCategory(id, category) {
            const payload = {
                id: id,
                category: category
            }
            this.$emit('changeCategory', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        updateTask(id) {
            this.selected.title = this.task.title
            this.selected.description = this.task.description
            const payload = {
                id: id,
                task: this.selected
            }
            this.$emit('updateTask', payload)
        },
    },
    props: ['kanban', 'task', 'dropdown']
}
</script>

<style>
span{
    font-size: 12px;
}
</style>
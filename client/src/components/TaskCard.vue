<template>
    <div class="card my-2 mx-3">
        <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text">{{ task.description }}</p>
            <a href="#" class="card-link" @click="editTask" v-if="task.category !== 'Done'"><i class="fa fa-edit"></i></a>
            <a href="#" class="card-link" @click="deleteTask"><i class="fa fa-trash"></i></a>
            <a href="#" class="card-link" @click="updateCategory" v-if="task.category !== 'Done'"><i class="fa fa-check"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskCard",
    props: ['task'],
    methods: {
        editTask() {
            let payload = {
                task: this.task,
                pageName: "EditPage"
            }
            this.$emit('changePage', payload)
        },
        deleteTask() {
            let id = this.task.id
            this.$emit('deleteTask', id)
        },
        updateCategory() {
            let payload = {
                id: this.task.id,
                category: this.task.category
            }
            this.$emit('updateCategory', payload)
        }
    }
}
</script>

<style>

</style>
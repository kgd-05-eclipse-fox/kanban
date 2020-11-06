<template>
  <div class="edit-page">
        <div class="container my-5 d-flex flex-column justify-content-center">
            <form @submit.prevent="saveUpdateTask">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="e.g. Fancy To Do" v-model="title">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description" placeholder="e.g. Build fancy to do with Vue JS" v-model="description">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Edit</button>
            </form>
            <button type="submit" class="btn btn-primary mt-3" @click="cancelEditTask">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: '',
            description: ''
        }
    },
    props: ['updatedTask'],
    created() {
        this.title = this.updatedTask.title,
        this.description = this.updatedTask.description
    },
    methods: {
        saveUpdateTask() {
            let payload = {
                id: this.updatedTask.id,
                title: this.title,
                description: this.description
            }
            this.$emit('updateTask', payload)
        },
        cancelEditTask() {
            let payload = {
                pageName: "HomePage"
            }
            this.$emit('cancelEditTask', payload)
        }
    }
}
</script>

<style>

</style>
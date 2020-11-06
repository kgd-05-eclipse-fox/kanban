<template>
    <div class="add-page">
        <Navbar
            @logoutUser='logoutUser'
        ></Navbar>
        <div class="container my-5 d-flex flex-column justify-content-center">
            <form @submit.prevent="saveTask">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="e.g. Fancy To Do" v-model="title">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description" placeholder="e.g. Build fancy to do with Vue JS" v-model="description">
                </div>
                <!-- <div class="form-group">
                    <label for="category">Assignee</label>
                    <input type="text" class="form-control" id="assignee" placeholder="e.g. Farhan Haryawan" v-model="assignee">
                </div> -->
                <button type="submit" class="btn btn-primary btn-block">Add</button>
            </form>
            <button type="submit" class="btn btn-primary mt-3" @click="cancelAddTask">Cancel</button>
        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar"
export default {
    name: "AddTask",
    data() {
        return {
            title: '',
            description: ''
        }
    },
    components: {
        Navbar
    },
    methods: {
        cancelAddTask() {
            this.$emit('cancelAddTask', 'HomePage')
        },
        logoutUser() {
            this.$emit('logout', 'LoginPage')
        },
        saveTask() {
            let payload = {
                title: this.title,
                description: this.description
            }
            this.$emit('addTask', payload)
            this.title = ''
            this.description = ''
        }
    }

}
</script>

<style>

</style>
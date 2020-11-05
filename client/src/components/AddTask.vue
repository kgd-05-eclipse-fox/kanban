<template>
    <div class="add-page">
        <Navbar
            @logoutUser='logoutUser'
        ></Navbar>
        <div class="container my-5 d-flex flex-column justify-content-center">
            <form @submit.prevent="saveTask()">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title">
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description">
                </div>
                <div class="form-group">
                    <label for="category">Category</label>
                    <input type="text" class="form-control" id="category">
                </div>
                <button type="submit" class="btn btn-primary btn-block">Add</button>
            </form>
            <button type="submit" class="btn btn-primary mt-3" @click="cancelAddTask">Cancel</button>
        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar"
export default {
    name: "AddPage",
    components: {
        Navbar
    },
    methods: {
        cancelAddTask() {
            this.$emit('cancelAddTask', 'HomePage')
        },
        logoutUser() {
            this.$emit('logout', 'LoginPage')
        }
    }

}
</script>

<style>

</style>
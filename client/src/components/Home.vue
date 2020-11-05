<template>
    <div class="home-page">
        <Navbar></Navbar>
        <div class="container opacity">
            <button class="btn btn-primary" @click="changePage('add-page')">Add New Task</button>
            <div class="row my-5">
                <TaskCategory></TaskCategory>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "./Navbar"
import TaskCategory from "./TaskCategory"
export default {
    name: "HomePage",
    components: {
        Navbar, TaskCategory
    }
}
</script>

<style>

</style>
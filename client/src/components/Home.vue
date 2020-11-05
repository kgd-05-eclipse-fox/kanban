<template>
    <div class="home-page">
        <Navbar
            @logoutUser='logoutUser'
        ></Navbar>
        <div class="container opacity">
            <button class="btn btn-primary" @click="toAddPage">Add New Task</button>
            <div class="row my-5">
                <TaskCategory v-for="(cat, i) in categories" :key="i" :category="cat"></TaskCategory>
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
    },
    props: ['categories'],
    methods: {
        toAddPage() {
            this.$emit('changePage', 'AddPage')
        },
        logoutUser() {
            this.$emit('logout', 'LoginPage')
        }
    }
}
</script>

<style>

</style>
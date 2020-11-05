<template>
    <div>
        <Navbar
            :user="user"
            @addTask="addTask"
            @logout="logout"
        ></Navbar>
        <section class="container-todo">
            <Category
                v-for="(cat, i) in boards" :key="i"
                :categoryDetail="cat"
                :tasks="tasks"
                @updateTask="updateTask"
                @editTask="editTask"
                @deleteTask="deleteTask"
            >
            </Category>
        <section>
    </div>
</template>

<script>

import Category from './Category'
import Navbar from './Navbar';

export default {
    name: 'KanbanPage',
    props: ['tasks', 'boards', 'user'],
    components: {
        Category,
        Navbar
    },
    methods: {
        addTask() {
            this.$emit('addTask')
        },
        updateTask(payload) {
            this.$emit('updateTask', payload)
        },
        editTask(payload) {
            this.$emit('editTask', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        logout() {
            this.$emit('logout')
        }
    }
}
</script>
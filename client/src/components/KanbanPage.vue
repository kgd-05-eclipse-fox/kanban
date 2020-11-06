<template>
    <div>
        <Navbar
            :user="user"
            @changePage="changePage"
            @addTask="addTask"
            @logout="logout"
        ></Navbar>
        <section class="container-todo">
            <Category
                v-for="(cat, i) in boards" :key="i"
                :categoryDetail="cat"
                :tasks="tasks"
                @updateTask="updateTask"
                @editTaskPage="editTaskPage"
                @deleteTask="deleteTask"
            >
            </Category>
            <AddTaskPage
                v-if="this.pageRender == 'add-task'"
                @addTask="addTask"
                @changePage="changePage"
            ></AddTaskPage>
            <EditTaskPage
                v-else-if="this.pageRender == 'edit-task'"
                :editTaskData="editTaskData"
                @editTask="editTask"
                @changePage="changePage"
            >
            </EditTaskPage>
        <section>
    </div>
</template>

<script>

import Category from './Category'
import Navbar from './Navbar'
import AddTaskPage from './AddTaskPage'
import EditTaskPage from './EditTaskPage'

export default {
    name: 'KanbanPage',
    props: ['tasks', 'boards', 'user', 'pageRender', 'editTaskData'],
    components: {
        Category,
        Navbar,
        AddTaskPage,
        EditTaskPage
    },
    methods: {
        addTask(payload) {
            this.$emit('addTask', payload)
        },
        updateTask(payload) {
            this.$emit('updateTask', payload)
        },
        editTask(payload) {
            this.$emit('editTask', payload)
        },
        editTaskPage(payload) {
            this.$emit('editTaskPage', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        logout() {
            this.$emit('logout')
        },
        changePage(pageName){
            this.$emit('changePage', pageName)
        }
    }
}
</script>
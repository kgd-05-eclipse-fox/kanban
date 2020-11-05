<template>
    <section class="container-fluid" id="addTask">
        <section style="margin-top: 3em;" id="board">
            <button @click="showForm" class="btn btn-outline-primary">Add Task</button>

            <br><br>

            <div class="row mx-auto">
                <Category 
                    v-for="(el, i) in category" 
                    :key="i"
                    :cat='el'
                    :kanban='kanban'
                    @changeCategory='changeCategory'
                    @deleteTask='deleteTask'
                    @updateTask='updateTask'>
                </Category>
            </div>
        </section>
    </section>
</template>

<script>
import Category from './Category'
export default {
    name: 'HomePage',
    data() {
        return {
            category: [
                {
                    name: 'Back Log',
                    called: 'backlog',
                    color: 'bg-bl',
                    dropdown: ['todo', 'progress', 'completed']
                },
                {
                    name: 'To Do',
                    called: 'todo',
                    color: 'bg-td',
                    dropdown: ['backlog', 'progress', 'completed']
                },
                {
                    name: 'Progress',
                    called: 'progress',
                    color: 'bg-pg',
                    dropdown: ['backlog', 'todo', 'completed']
                },
                {
                    name: 'Completed',
                    called: 'completed',
                    color: 'bg-cm',
                    dropdown: ['backlog', 'todo', 'progress']
                }
            ]
        }
    },
    components: {
        Category
    },
    methods: {
        showForm() {
            this.$emit('changePage', 'add-page')
        },
        changeCategory(payload) {
            this.$emit('changeCategory', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        updateTask(payload) {
            this.$emit('updateTask', payload)
        }
    },
    props: ['kanban']
}
</script>

<style>

</style>
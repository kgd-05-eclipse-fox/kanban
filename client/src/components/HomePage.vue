<template>
    <section class="container-fluid" id="addTask">
        <section style="margin-top: 3em;" id="board">
            <button @click="showForm" class="btn btn-outline-primary">Add Task</button>

            <br><br>

            <div class="row mx-auto">
                <Category 
                    v-for="(el, i) in category" 
                    :key="i"
                    :category_detail='el'
                    :kanban='kanban'
                    :loggedIn='loggedIn'
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
                    id: 1,
                    name: 'Back Log',
                    called: 'backlog',
                    color: 'bg-bl',
                    dropdown: ['todo', 'progress', 'completed']
                },
                {
                    id:2,
                    name: 'To Do',
                    called: 'todo',
                    color: 'bg-td',
                    dropdown: ['backlog', 'progress', 'completed']
                },
                {
                    id: 3,
                    name: 'Progress',
                    called: 'progress',
                    color: 'bg-pg',
                    dropdown: ['backlog', 'todo', 'completed']
                },
                {
                    id: 4,
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
    props: ['kanban', 'loggedIn'],
    created () {
      if (localStorage.access_token) {
        this.$emit('fetchKanban')
      } else {
        this.$emit('changePage', 'login-page')
      }
    }
}
</script>

<style>

</style>
<template>
    <section id="kanban-board">
        <div class="container">
            <div class="row category">
                <TaskCategory
                    @changePage="changePage" 
                    v-for="(cat,i) in categories"
                    :key="i"
                    :categoryDetail="cat"
                    :tasks="tasks"
                    @toEditPage="toEditPage"
                    @deleteTask="deleteTask"
                    @patchTask="patchTask">
                </TaskCategory>
            </div>
        </div>
    </section>
</template>

<script>
import TaskCategory from './TaskCategory'

export default {
    name: 'KanbanPage',
    components: {
        TaskCategory,
    },
    props: ['categories','tasks'],
    methods:{
        changePage(name) {
            this.$emit('changePage', name)
        },
        toEditPage(payload) {
            this.$emit('toEditPage', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        patchTask(payload) {
            this.$emit('patchTask', payload)
        }
    }

}
</script>

<style>

</style>
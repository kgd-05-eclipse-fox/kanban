<template>
    <section id="kanban-board">
        <div class="container">
            <div class="row category">
                <Category
                    @changePage="changePage" 
                    v-for="(cat,i) in categories"
                    :key="i"
                    :categoryDetail="cat"
                    :tasks="tasks"
                    @toEditPage="toEditPage">
                </Category>
            </div>
        </div>
    </section>
</template>

<script>
import Category from './Category'

export default {
    name: 'KanbanPage',
    components: {
        Category
    },
    props: ['categories','tasks'],
    methods:{
        changePage(name) {
            this.$emit('changePage', name)
        },
        toEditPage(payload) {
            this.$emit('toEditPage', payload)
        }
    }

}
</script>

<style>

</style>
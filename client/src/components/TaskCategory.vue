<template>
    <div class="col-3">
        <div :class="category.bg">
            <h3 class="text-center">{{category.name}}</h3>
            <div class="test-class">
                <TaskCard
                    v-for="task in filterTask"
                    :key="task.id"
                    :task="task"
                    @changePage="changePage"
                    @deleteTask="deleteTask"
                    @updateCategory="updateCategory"
                ></TaskCard>
            </div>
        </div>
    </div>
</template>

<script>
import TaskCard from "./TaskCard"
export default {
    name: "Category",
    components: {
        TaskCard
    },
    props: ['category', 'allTask'],
    computed: {
        filterTask() {
            return this.allTask.filter(task => task.category == this.category.name)
        }
    },
    methods: {
        changePage(payload) {
            this.$emit('changePage', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        updateCategory(payload) {
            this.$emit('updateCategory', payload)
        }
    }
}
</script>

<style>

</style>
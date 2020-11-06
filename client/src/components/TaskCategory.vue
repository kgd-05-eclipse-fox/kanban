<template>
    <div class="col-3">
        <div :class="category.bg">
            <h3 class="text-center">{{category.name}}</h3>
            <p>{{allTask}}</p>
            <div class="test-class">
                <TaskCard></TaskCard>
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
    props: ['category', 'allTask']
}
</script>

<style>

</style>
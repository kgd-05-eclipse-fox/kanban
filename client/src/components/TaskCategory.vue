<template>
    <div class="col-3">
        <div class="bg-primary">
            <h3 class="text-center">Back Log</h3>
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
    }
}
</script>

<style>

</style>
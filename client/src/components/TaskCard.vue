<template>
    <div class="card my-2 mx-3">
        <div class="card-body">
            <h5 class="card-title">{{ task.title }}</h5>
            <p class="card-text">{{ task.description }}</p>
            <a href="#" class="card-link"><i class="fa fa-edit"></i></a>
            <a href="#" class="card-link"><i class="fa fa-trash"></i></a>
            <a href="#" class="card-link"><i class="fa fa-check"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskCard",
    props: ['task']
}
</script>

<style>

</style>
<template>
    <div class="card text-white bg-light mb-3">
        <div class="card-body">
            <h5 class="card-title" :class="type">{{ oneTask.title }}</h5>
            <p class="card-text" :class="type">{{ oneTask.description }}</p>
            <hr>
                <p class="card-text sm-info" :class="type">
                <b>By:</b> {{ oneTask.User.email }}<br>
                <b>Created:</b> {{ oneTask.createdAt }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskItemNonDraggable',
    props: ['oneTask','type']
}
</script>
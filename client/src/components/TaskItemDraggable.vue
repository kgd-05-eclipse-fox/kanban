<template>
    <div class="card text-white bg-light mb-3"
        draggable
        @dragstart="startDrag($event, oneTask)"
    >
        <div class="card-body">
            <h5 class="card-title" :class="type">{{ oneTask.title }}</h5>
            <p class="card-text" :class="type">{{ oneTask.description }}</p>
            <hr>
                <p class="card-text sm-info" :class="type">
                <b>By:</b> {{ oneTask.User.email }}<br>
                <b>Created:</b> {{ oneTask.createdAt }}
            </p>
            <a href="/" class="card-link" v-b-modal.modal-prevent-closing @click.prevent="editTaskPage"><font-awesome-icon icon="edit" :class="type" /></a>
            <a href="/" class="card-link" @click.prevent="deleteTask"><font-awesome-icon icon="trash-alt" :class="type" /></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskItemDraggable',
    props: ['oneTask','type'],
    methods: {
        startDrag(evt, item) {
            evt.dataTransfer.setData('itemID', item.id)
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
        },
        editTaskPage() {
            this.$emit('editTaskPage', this.oneTask)
        },
        deleteTask() {
            this.$emit('deleteTask', this.oneTask.id)
        }
    }
}
</script>
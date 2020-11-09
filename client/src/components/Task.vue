<template>
    <div>
        <TaskItemDraggable
            v-if="user.id == oneTask.UserId"
            @editTaskPage="editTaskPage"
            @deleteTask="deleteTask"
            :type="type"
            :oneTask="oneTask"
        ></TaskItemDraggable>
        <TaskItemNonDraggable
            v-else
            :type="type"
            :oneTask="oneTask"
        >
        </TaskItemNonDraggable>
    </div>
</template>

<script>

import TaskItemDraggable from './TaskItemDraggable'
import TaskItemNonDraggable from './TaskItemNonDraggable'

export default {
    name: 'Task',
    props: ['oneTask', 'type', 'user'],
    components: {
        TaskItemDraggable,
        TaskItemNonDraggable
    },
    methods: {
        editTaskPage(payload) {
            this.$emit('editTaskPage', payload)
        },
        deleteTask(payload) {
            this.$emit('deleteTask', payload)
        }
    }
}
</script>
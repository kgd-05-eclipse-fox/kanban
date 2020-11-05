<template>
    <div class="kanban col-3" :class="type"> <!-- Backlog -->
        <div class="card text-white mb-3" :class="categoryDetail.bg" style="max-width: 30rem;">
            <div class="card-header">
                <p>{{ categoryDetail.name }}</p><hr>
                <img class="img-fluid" :src="categoryDetail.img" alt="">
            </div>
            <div class="card-body overflow-auto" style="height: 60vh;"
                @drop='onDrop($event, categoryDetail.id)'
                @dragover.prevent
                @dragenter.prevent
            >
                <Task
                    v-for="task in categoryTask" :key="task.id"
                    :oneTask="task"
                    :type="type"
                    @editTask="editTask"
                    @deleteTask="deleteTask"
                >
                </Task>
            </div>
        </div>
    </div>
</template>

<script>

import Task from './Task'

export default {
    name: 'Category',
    props: ['categoryDetail', 'tasks'],
    components: {
        Task
    },
    methods: {
        onDrop (evt, status) {
            const itemID = +evt.dataTransfer.getData('itemID')
            const item = this.tasks.find(item => item.id == itemID)
            item.status = status

            let payload = {
                itemID: itemID,
                newStatus: item.status
            }

            this.$emit('updateTask', payload)
        },
        editTask(payload) {
            this.$emit('editTask', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        }
    },
    computed: {
        categoryTask() {
            return this.tasks.filter(task => task.status == this.categoryDetail.id)
        },
        type() {
            return this.categoryDetail.name.toLowerCase()
        }
    }
}
</script>
<template>
    <div class="col-3">
        <div class="card card-bordered pb-2 mb-2 shadow">
            <div style="height: 3em;" class="card-head" :class="cat.color">
                <h5 class="text-left ml-2 mt-2 text-light">{{cat.name}}</h5>
            </div>
            <div class="card-body overflow-auto" style="height:60vh"
                @drop="onDrop($event, cat)"
                @dragover.prevent
                @dragenter.prevent>

                <TaskCard
                    v-for="task in filterCategory"
                    :key='task.id'
                    :task='task'
                    :loggedIn='loggedIn'
                    :dropdown='cat.dropdown'
                    @changeCategory="changeCategory"
                    @deleteTask='deleteTask'
                    @updateTask='updateTask'>
                </TaskCard>
            </div>
        </div>
    </div>
</template>

<script>
import TaskCard from './TaskCard'

export default {
    name: 'Category',
    components: {
        TaskCard
    },
    props: ['cat', 'kanban','loggedIn'],
    methods: {
        changeCategory(payload) {
            this.$emit('changeCategory', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        updateTask(payload) {
            this.$emit('updateTask', payload)
        },
        onDrop(e, category) {
            const taskID = +e.dataTransfer.getData('taskID')

            const payload = {
                id: taskID,
                category: category.called
            }
            
            this.$emit('changeCategory', payload)
        }
    },
    computed: {
        filterCategory() {
            return this.kanban.filter(el => el.category == this.cat.called)
        }
    }
}
</script>

<style>
.bg-bl{
    background-color: #FF3300;
}
.bg-td{
    background-color: #FF9900;
}
.bg-pg{
    background-color: #3399FF;
}
.bg-cm{
    background-color: #00CC66;
}
</style>
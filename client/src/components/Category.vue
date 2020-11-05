<template>
    <div class="col-3">
        <div class="card card-bordered pb-2 mb-2 shadow">
            <div style="height: 3em;" class="card-head" :class="cat.color">
                <h5 class="text-left ml-2 mt-2 text-light">{{cat.name}}</h5>
            </div>
            <div class="card-body overflow-auto" style="height:60vh">
                <Task
                    v-for="task in filterCategory"
                    :key='task.id'
                    :task='task'
                    :dropdown='cat.dropdown'
                    @changeCategory="changeCategory"
                    @deleteTask='deleteTask'
                    @updateTask='updateTask'>
                </Task>
            </div>
        </div>
    </div>
</template>

<script>
import Task from './Task'

export default {
    name: 'Category',
    components: {
        Task
    },
    props: ['cat', 'kanban'],
    methods: {
        changeCategory(payload) {
            this.$emit('changeCategory', payload)
        },
        deleteTask(id) {
            this.$emit('deleteTask', id)
        },
        updateTask(payload) {
            this.$emit('updateTask', payload)
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
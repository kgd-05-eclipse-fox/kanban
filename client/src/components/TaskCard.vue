<template>
    <div class="card border rounded shadow" draggable @dragstart="dragging($event,task)">
        <div class="card-body pl-4 pt-3 pr-4 pb-3" style="width: 18rem">
            <h4 class="card-title">
                <span 
                    class="badge "
                    :class="`badge-${categoryDetail.color}`">
                    {{task.title}}
                </span>
            </h4>
            <p class="card-text" style="text-align: left;">{{task.description}}</p>
            <p 
                class="mt-2"
                style=" font-size:10px; 
                color: black;"
                >created by: {{task.username}}
            </p>
            <p 
                class="card-subtitle 
                text-muted" 
                style="font-size: 10px;"
                >id: {{task.id}}
            </p>
            <ul>
                <li>
                    <a href="#">
                        <i 
                            @click="toEditPage"
                            class="fas fa-edit" 
                            data-toggle="modal" 
                            data-target="#editmodal"
                            > Edit
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#"><i @click="deleteTask" class="fa fa-trash"> Delete</i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TaskCard',
    data () {
        return {

        }
    },
    components: {

    },
    methods: {
        changeToEdit() {
            this.$emit('changePage', 'editPage')
        },
        toEditPage() {
            let payload = {
                pageName: 'editPage',
                task : this.task

            }
            this.$emit('toEditPage', payload)
        },
        deleteTask() {
            let id = this.task.id
            this.$emit('deleteTask', id)
        },
        dragging(event, task) {
            event.dataTransfer.setData('taskId', task.id)
            event.dataTransfer.dropEffect = 'move'
            event.dataTransfer.effectAllowed = 'move'
        }
    },
    props: ['task', 'categoryDetail']

}
</script>

<style>
    
</style>
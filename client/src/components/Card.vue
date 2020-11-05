<template>
    <div class="card">
        <div class="card-body">
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
                    <a href="#"><i class="fa fa-trash"> Delete</i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data () {
        return {

        }
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
        }
    },
    props: ['task', 'categoryDetail']

}
</script>

<style>
    
</style>
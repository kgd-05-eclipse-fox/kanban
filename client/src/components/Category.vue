<template>
<div>
    <div class = "container-navbar">
        <div class = "flexbox-item-1">{{kategoriDetail.kategori}}</div>
    </div>
        <div class="black"></div>
        <div class = "category"> 
        <div class="card" style="width: 18rem;">
    <div class="card-body anyClass">
    <TodoList 
        v-for="task in taskperKategori"
        :key="task.id"
        :task="task"
        @toEditPage="toEditPage"
        @destroy="destroy">
    </TodoList>
    
   
    </div>
    </div>
    </div>
</div>
</template>

<script>
import TodoList from './TodoList'
export default {
    name : 'Category',
    components : {
        TodoList
    },
    props : [ 'kategoriDetail', 'tasks' ],
    computed : {
        taskperKategori(){
            return this.tasks.filter(task => task.category === this.kategoriDetail.kategori)
        }
    },
    methods : {
        toEditPage(payload){
            this.$emit('toEditPage', payload)
        },
        destroy(hapus){
            console.log(hapus, 'di hapus')
            this.$emit('destroy', hapus)
        }
    }
}
</script>

<style>

</style>
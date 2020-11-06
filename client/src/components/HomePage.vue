<template>
<div>
    <nav class="navbar bg-dark">
        <div>
            <a href="#" class ="nav-logo" ><h1 style ="color : white">KANBAND</h1>
        </div>
        <div>
          <form class="form-inline">
            <button @click="logout" class="btn btn-outline" id = "tombol-logout" type="submit">Logout</button>
          </form>
        </div>
    </nav>
    <div class = "container-category">
    <!--CATEGORY-->
    <Category 
        v-for="(cat,i) in categories"
        :key="i"
        :kategoriDetail="cat"
        :tasks="tasks"
        @toEditPage="toEditPage"
        @destroy="destroy">
    </Category>
    </div>
       <button @click="changePage" class="btn btn-outline" id="add-task" type = "submit">Add Task</button>
</div>
        
</template>

<script>
import Category from './Category'
export default {
    name : 'HomePage',
    components : {
        Category
    },
    props : [ 'categories', 'tasks' ],
    methods : {
        changePage(){
            let payload = {
                name : 'add-task'
            }
            this.$emit('changePage', payload)
        },
        toEditPage(payload){
            this.$emit('toEditPage', payload)
        },
        logout(){
            this.$emit('logout')
        },
        destroy(hapus){
            this.$emit('destroy', hapus)
        }
    }
}
</script>

<style>

</style>
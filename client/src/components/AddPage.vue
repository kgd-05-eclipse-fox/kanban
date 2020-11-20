<template>
    <section>
        <div class="container">
            <div class="row border shadow-lg" style="height: 70vh; background-color:#17A2B8">
                <div class="col-6 py-3" style="height: 60vh">
                    <img 
                    src="../assets/pics/notes.png" 
                    alt="" 
                    width="100%"  
                    height="100%" 
                    class="border rounded">
                </div>
                <div class="col-6 py-3" style="height: 60vh">
                <h2 class="text-white">Add Task</h2>
                    <form @submit.prevent="addTask">
                        <div class="form-group">
                            <label 
                                for="title" 
                                style="color: white; 
                                text-align: left;"
                            >   
                                Title
                            </label>
                            <input
                                v-model="task.title" 
                                type="text" 
                                class="form-control" 
                                id="input-title" 
                                placeholder="e.g: Study Vue.JS"
                            >
                            </div>
                            <div class="form-group">
                                <label 
                                    for="description" 
                                    style="color: white;"
                                >   
                                    Description
                                </label>
                            <textarea
                                v-model="task.description" 
                                class="form-control" 
                                id="input-description" 
                                placeholder="e.g: Learn the introduction of Vue.js" 
                                rows="4"
                            >
                            </textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-warning">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'AddPage',
    data() {
        return {
            task: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        addTask() {
            let task = this.task
            this.$emit('addTask', task)
        }
    }
}
</script>

<style>

</style>
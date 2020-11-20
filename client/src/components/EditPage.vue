<template>
  <section>
        <div class="container">
            <div class="row border shadow-lg" style="height: 80vh; background-color:#17A2B8">
                <div class="col-6 py-3">
                    <img 
                    src="../assets/pics/content.png" 
                    alt="" 
                    width="100%"  
                    height="100%" 
                    class="border rounded">
                </div>
                <div class="col-6 py-3">
                    <h2 class="text-white">Edit Task</h2>
                    <form @submit.prevent="editTask">
                        <div class="form-group">
                            <label 
                                for="title" 
                                style="color: white; 
                                text-align: left;"
                            >   
                                Title
                            </label>
                            <input 
                                v-model="title"
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
                                v-model="description" 
                                class="form-control" 
                                id="input-description" 
                                placeholder="e.g: Learn the introduction of Vue.js" 
                                rows="4"
                            >
                            </textarea>
                        </div>
                        <div class="form-group">
                            <label for="category" style="color:white">Category</label>
                            <select class="form-control" v-model="category">
                            <option disabled value="">Please select one</option>
                            <option value="backlog">backlog</option>
                            <option value="todo">todo</option>
                            <option value="doing">doing</option>
                            <option value="done">done</option>
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
    name: 'EditPage',
    data() {
        return {
            title: this.detailTask.title,
            description: this.detailTask.description,
            category: this.detailTask.category
        }
    },
    methods: {
        editTask() {
            let payload = {
                id: this.detailTask.id,
                title: this.title,
                description: this.description,
                category: this.category
            }
            this.$emit('editTask', payload)
        }
    },
    props: ['detailTask']

}
</script>

<style>

</style>
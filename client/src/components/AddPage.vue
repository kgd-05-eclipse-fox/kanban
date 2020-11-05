<template>
    <section class="container-fluid" id="add_task">
        <div class="mt-5">
            <div class="shadow bg-white rounded p-5 mb-5">
                <h5 class="mb-4"><b>add a new task</b></h5>
                <form @submit.prevent="addTask">
                    <div class="form-group">
                        <label for="add_title">Title</label>
                        <input v-model="newTask.title" type="text" id="add_title" class="form-control" required
                            placeholder="Some Task">
                    </div>
                    <div class="form-group">
                        <label for="add_description">Description</label>
                        <input v-model="newTask.description" type="text" id="add_description" class="form-control"
                            required placeholder="Lorem Ipsum Dolor">
                    </div>
                    <div class="form-group">
                        <label for="add_category">Category</label>
                        <select v-model="newTask.category" id="add_category" class="form-control" required>
                            <option value="" disabled>Select Here</option>
                            <option value="backlog">Back log</option>
                            <option value="todo">To Do</option>
                            <option value="progress">Progress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button class="btn btn-outline-success" type="submit"><i class="fas fa-check"></i>Add</button>
                    <button @click="backBtn" class="btn btn-outline-warning">Back</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'AddPage',
        data() {
            return {
                newTask: {
                    title: '',
                    description: '',
                    category: ''
                }
            }
        },
        methods: {
            addTask() {
                this.$emit('addTask', this.newTask)
                this.newTask.title = ''
                this.newTask.description = ''
                this.newTask.category = ''
            },
            backBtn() {
                this.$emit('changePage', 'home-page')
            }
        }
    }
</script>

<style>
#add_task{
    margin-top: 5em;
}
</style>
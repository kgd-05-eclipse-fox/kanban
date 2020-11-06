<template>
    <section id="addForm">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div id = "logo">
            <a href ="home-page" class ="nav-logo" ><h1 style ="color : white">KANBAND</h1>
        </div>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
          <form>
            <button class="btn btn-outline" id = "tombol-logout" type="submit">Logout</button>
          </form>
        </nav>
        <div class="row justify-content-center mt-5">
            <div class="col-4" style="background: silver; border-radius: 8px; box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65); height: 320px; margin: 10rem auto 10.1rem auto; width: 329px;">
                <form @submit.prevent="addTodo" class="addForm"><br>
                    <h3 class="text-center text-light font-weight-bold">ADD TASK</h3>
                    <div class="form-group">
                        <label for="title" class="text-light">Title</label>
                        <input v-model ="title" type="text" class="form-control" id="title">    
                    </div>
                    <div class="form-group">
                        <label for="category">Choose a Category :</label>
                        <select class="form-control" id="category" v-model="category">
                            <option disabled value ="">Please select one</option>
                            <option value="TODO">TODO</option>
                            <option value="IN PROGRES">IN PROGRES</option>
                            <option value="REVIEW">REVIEW</option>
                            <option value="COMPLETE">COMPLETE</option>
                        </select>
                    </div>
                        <button type="submit" class="btn btn-primary btn-block">ADD</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'AddTask',
    data(){
        return {
            title : '',
            category : ''
        }
    }, 
    methods : {
        addTodo(){
            let payload = {
                title : this.title,
                category : this.category
            }
            this.$emit('addTodo', payload)
        }
    }
}
</script>

<style>

</style>
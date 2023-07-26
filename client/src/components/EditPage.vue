<template>
    <div id="edit-page">
        <div class=" container">
            <div class=" flex-column my-5">
                <div class=" col-12 d-flex justify-content-center">
                    <div class=" card">
                        <div class=" card-header text-center">
                            <h4>Edit You'r Project</h4>
                            <img class="logo-log" src="../assets/img/logoo.png" alt="">
                        </div>
                        <div class=" card-footer text-dark">
                            <form @submit.prevent="editDataKanban">
                                <input type="text" 
                                    name="title"
                                    placeholder="Title" 
                                    class=" my-4 input-group form-control"    
                                    v-model="title"
                                >
                                <!-- <input type="textarea" name="descriptin" id="" placeholder="Descriptin" class=" my-4 input-group form-control" v-model="description"> -->
                                <textarea class=" form-control mb-4 h-100" v-model="description"></textarea>
                                <button type="submit" class="btn">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditPage',
    props: ['editKanban'],
    data(){
        return{
            id: null,
            title: '',
            description: ''
        }
    },
    methods:{
        editDataKanban(){
            let data = {
                id: this.id,
                title: this.title,
                description: this.description
            }
            this.$emit('editDataKanban', data)
            this.title = ''
            this.description = ''
        }
    },
    created(){
        this.id = this.editKanban.id
        this.title = this.editKanban.title
        this.description = this.editKanban.description
    }
}
</script>

<style>

</style>
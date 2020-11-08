<template>
    <div id="add-page">
        <div class=" container">
            <div class=" flex-column my-5">
                <div class=" col-12 d-flex justify-content-center">
                    <div class=" card">
                        <div class=" card-header text-center">
                            <h4>Add You'r Project</h4>
                            <img class="logo-log" src="../assets/img/logoo.png" alt="">
                        </div>
                        <div class=" card-footer">
                            <form @submit.prevent="addKanban">
                                <input v-model="title" type="text" name="title" id="" placeholder="Title" class=" my-4 input-group form-control">
                                <input v-model="description" type="text" name="descriptin" id="" placeholder="Descriptin" class=" my-4 input-group form-control">
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
    name: 'AddPage',
    data(){
        return {
            title: '',
            description: ''
        }
    },
    methods: {
        addKanban(){
            console.log('masuk add <<<<<<<<<<<<<<,')
            let data = {
                title: this.title,
                description: this.description
            }
            this.$emit('addKanban', data)
        }
    }
}
</script>

<style>

</style>
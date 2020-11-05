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
                            <form action="" method="post">
                                <input v-model="title" type="text" name="title" id="" placeholder="Title" class=" my-4 input-group form-control">
                                <input v-model="description" type="text" name="descriptin" id="" placeholder="Descriptin" class=" my-4 input-group form-control">
                                <button v-on:click.prevent="addkanban()" type="submit" class="btn">Submit</button>
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

        }
    },
    methods: {
        addkanban(){
            
        }
    }
}
</script>

<style>

</style>
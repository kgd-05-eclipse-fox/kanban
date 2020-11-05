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
                        <div class=" card-footer">
                            <form action="" method="post">
                                <input type="text" name="title" id="" placeholder="Title" class=" my-4 input-group form-control">
                                <input type="text" name="descriptin" id="" placeholder="Descriptin" class=" my-4 input-group form-control">
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
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style>

</style>
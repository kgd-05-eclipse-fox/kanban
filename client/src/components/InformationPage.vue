<template>
    <div id="information-page">
        <div class=" container">
            <div class=" flex-column my-5">
                <div class=" col-12 d-flex justify-content-center">
                    <div class=" card">
                        <div class=" card-header text-center">
                            <h4>information Aplication</h4>
                            <img class="logo-log" src="../assets/img/logoo.png" alt="">
                        </div>
                        <div class=" card-footer">
                            <ul class=" text-center">
                                <li>
                                    <a href="#"><img class="log-User mt-3" src="../assets/img/l1.png" alt=""></a>
                                    <label for="">Icon User</label>
                                </li>
                                <li>
                                    <a href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                    <label for="">Icon "e"dit</label>
                                </li>
                                <li>
                                    <a href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                    <label for="">Icon "d"elete</label>
                                </li>
                                <li>
                                    <a href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
                                    <label for="">Icon "m"ove/status</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InformationPage',
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
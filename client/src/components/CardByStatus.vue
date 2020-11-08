<template>
    <div id="home-page">
        <div class="container justify-content-center">
            <div class="row d-flex mt-3">
                <div class="col-sm-3">
                    <div class="bg1 card-header text-center shadowcard">
                        <h4>Backlog</h4>
                    </div>
                    <DataKanban></DataKanban>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DataKanban from './DataKanban'
export default {
    name: 'CardByStatus',
    data(){
        return{

        }
    },
    methods: {

    },
    components: {
        DataKanban
    },
    created(){

    }
}
</script>

<style>

</style>
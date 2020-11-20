<template>
    <div id="home-page">
        <div class="container justify-content-center">
            <div class="row d-flex mt-3">
                <div v-for="(el, i) in categories" :key="i" class="col-sm-3">
                    <div class="bg1 card-header text-center shadowcard">
                        <h4>{{el.title}}</h4>
                    </div>
                    <DataKanban
                      :dataKanbans="dataKanbans"
                      :categories="el.title"
                      @deleteBacklog='deleteKanban'
                      @editKanban='editKanban'
                      @GoUpdate='changeStatus'
                    >
                    </DataKanban>
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
        deleteKanban(data){
            this.$emit('deleteBacklog', data)
        },
        editKanban(id){
            this.$emit('getKanbanById', id)
        },
        changeStatus(status, id){
            let data = {
                id: id,
                status: status
            }
            this.$emit('GoUpdate', data)
        }
    },
    props: ['dataKanbans', 'categories'],
    components: {
        DataKanban
    },
    computed: {
    },
    created(){

    }
}
</script>

<style>

</style>
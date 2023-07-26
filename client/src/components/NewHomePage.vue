<template>
    <div>
        <CardByStatus></CardByStatus>
    </div>
</template>

<script>
import CardByStatus from './CardByStatus'
import DataKanban from './DataKanban'
export default {
    name: 'NewHomePage',
    data(){
        return{

        }
    },
    methods:{

    },
    components:{
        CardByStatus,
        DataKanban
    },
    created(){

    }
}
</script>

<style>

</style>
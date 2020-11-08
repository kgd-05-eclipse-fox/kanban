<template>
    <div class="c1 shadowcard overflow-auto" style="height: 70vh;">
        <div id="board-1" class=" card-body text-light">
            <div v-for="el in kanban.backlog" :key="el.id" id="card-1" draggable="true" class=" card-body mb-2 text-center flex-column pb-0 px-0" style="border-bottom: solid;">
                <div class="hvr-grow">
                    <div class="col titleCard bg-white">
                        {{el.title}}
                    </div>
                    <div class="col bg-dark">
                        <p class="pContent">{{el.description}}</p>
                    </div>
                </div>
                <div class="col d-flex" style="padding-left: 0%; padding-right: 0%;">
                <div class="col d-flex mt-2 mx-2 justify-content-start" style="padding-left: 0%; padding-right: 0%;">
                    <a href="#"><img  src="../assets/img/profile.png" alt=""></a>
                    <a v-if="UserId == el.UserId" class=" mx-3 mt-2" href="#"><img  src="../assets/img/star.png" alt=""></a>
                </div>
                <div class="col d-flex my-3 justify-content-end" style="padding: 0%;">
                    <a id="icon" class="mx-2" v-on:click.prevent="deleteKanban(el.id)" href="#"><img src="../assets/img/deleteBt.png"/></a>
                    <a id="icon" class="mx-2" v-on:click.prevent="editKanban(el.id)"  href="#"><img  src="../assets/img/edit.png"/></a>
                    <a id="icon" class="mx-2" v-on:click.prevent="changeStatus(el.status, el.id)" href="#"><img src="../assets/img/move.png"/></a>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataKanban',
    data(){
        return{

        }
    },
    methods: {

    },
    components: {

    },
    created(){

    }
}
</script>

<style>

</style>
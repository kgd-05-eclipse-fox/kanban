<template>
    <div id="home-page">
            <div class="container justify-content-center">
                <div class="row d-flex mt-3">
                    <div class="col-sm-3">
                        <div class="bg1 card-header text-center shadowcard">
                            <h4>Backlog</h4>
                        </div>
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
                    </div>
                    <div class="col-sm-3">
                        <div class="bg1 card-header text-center shadowcard">
                            <h4>Product</h4>
                        </div>
                        <div class="c1 shadowcard overflow-auto" style="height: 70vh;">
                            <div id="board-2" class=" card-body text-light">
                                <div v-for="el in kanban.product" :key="el.id" id="card-1" draggable="true" class=" card-body mb-2 text-center flex-column pb-0 px-0" style="border-bottom: solid;">
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
                    </div>
                    <div class="col-sm-3">
                        <div class="bg1 card-header text-center shadowcard">
                            <h4>Development</h4>
                        </div>
                        <div class="c1 shadowcard overflow-auto" style="height: 70vh;">
                            <div id="board-3" class=" card-body text-light">
                                <div v-for="el in kanban.development" :key="el.id" id="card-1" draggable="true" class=" card-body mb-2 text-center flex-column pb-0 px-0" style="border-bottom: solid;">
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
                    </div>
                    <div class="col-sm-3">
                        <div class="bg1 card-header text-center shadowcard">
                            <h4>Done</h4>
                        </div>
                        <div class="c1 shadowcard overflow-auto" style="height: 70vh;">
                            <div id="board-4" class=" card-body text-light">
                                <div v-for="el in kanban.done" :key="el.id" id="card-1" draggable="true" class=" card-body mb-2 text-center flex-column pb-0 px-0" style="border-bottom: solid;">
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
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    props: ['kanban'],
    data(){
        return{
            UserId: localStorage.localId
        }
    },
    methods: {
        changeStatus(status, id){
            let data = {
                id: id,
                status: status
            }
            this.$emit('GoUpdate', data)
        },
        upToDevelopment(status,id){
             let data = {
                status: status,
                id: id
            }
            this.$emit('GoUpdate', data)
        },
        upToDone(status, id){
             let data = {
                status: status,
                id: id
            }
            this.$emit('GoUpdate', data)
        },
        downToDevelopment(status, id){
            let data = {
                status: status,
                id: id
            }
            this.$emit('GoUpdate', data)
        },
        deleteKanban(data){ //===========
            this.$emit('deleteBacklog', data)
        },
        deleteProduct(data){
            this.$emit('deleteProduct', data)
        },
        deleteDevelopment(data){
            this.$emit('deleteDevelopment', data)
        },
        deleteDone(data){
            this.$emit('deleteDone', data)
        },
        editKanban(id){ //=================
            this.$emit('editKanban', id)
        },
        editProduct(id){
            this.$emit('editKanban', id)
        },
        editDevelopment(id){
            this.$emit('editKanban', id)
        },
        editDone(id){
            this.$emit('editKanban', id)
        }
    }
}
</script>

<style>

</style>
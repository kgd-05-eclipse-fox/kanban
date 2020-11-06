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
                                    <div class="col" style="padding-left: 0%; padding-right: 0%;">
                                        <a href="#"><img class="log-User mt-3" :src="el.imgUser" alt=""></a>
                                    </div>
                                    <div class="col d-flex mt-3 text-center" style="padding: 0%;">
                                        <a v-on:click.prevent="editBacklog(el.id)" href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                        <a v-on:click.prevent="deleteBacklog(el.id)" href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                        <a v-on:click.prevent="upToProduct(el.status, el.id)" href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
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
                                    <div class="col" style="padding-left: 0%; padding-right: 0%;">
                                        <a href="#"><img class="log-User mt-3" :src="el.imgUser" alt=""></a>
                                    </div>
                                    <div class="col d-flex mt-3 text-center" style="padding: 0%;">
                                        <a v-on:click.prevent="editProduct(el.id)" href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                        <a v-on:click.prevent="deleteProduct(el.id)" href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                        <a v-on:click.prevent="upToDevelopment(el.status, el.id)" href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
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
                                    <div class="col" style="padding-left: 0%; padding-right: 0%;">
                                        <a href="#"><img class="log-User mt-3" :src="el.imgUser" alt=""></a>
                                    </div>
                                    <div class="col d-flex mt-3 text-center" style="padding: 0%;">
                                        <a v-on:click.prevent="editDevelopment(el.id)"  href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                        <a v-on:click.prevent="deleteDevelopment(el.id)"  href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                        <a v-on:click.prevent="upToDone(el.status, el.id)" href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
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
                                    <div class="col" style="padding-left: 0%; padding-right: 0%;">
                                        <a href="#"><img class="log-User mt-3" :src="el.imgUser" alt=""></a>
                                    </div>
                                    <div class="col d-flex mt-3 text-center" style="padding: 0%;">
                                        <a v-on:click.prevent="editDone(el.id)" href="#"><p class="tOption rounded bg-info mx-1 py-2 px-1">e</p></a>
                                        <a v-on:click.prevent="deleteDone(el.id)" href="#"><p class="tOption rounded bg-danger mx-1 py-2 px-1">d</p></a>
                                        <a v-on:click.prevent="downToDevelopment(el.status, el.id)" href="#"><p class="tOption rounded bg-success mx-1 py-2 px-1">m</p></a>
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
        upToProduct(status, id){
            let data = {
                status: status,
                id: id
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
        deleteBacklog(data){
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
        editBacklog(id){
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
<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Title</h5>
            <p class="card-text" style="text-align: justify;">Description</p>
            <p 
                class="mt-2" 
                style=" font-size:10px; 
                color: black;"
                >Created By: Username
            </p>
            <p 
                class="card-subtitle 
                text-muted" 
                style="font-size: 10px;"
                >ID: 1
            </p>
            <ul>
                <li>
                    <a href="#">
                        <i 
                            @click="changeToEdit"
                            class="fas fa-edit" 
                            data-toggle="modal" 
                            data-target="#editmodal"
                            > Edit
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#"><i class="fa fa-trash"> Delete</i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    data () {
        return {

        }
    },
    methods: {
        changeToEdit() {
            
            this.$emit('changePage', 'editPage')
        }
    }

}
</script>

<style>
    
</style>
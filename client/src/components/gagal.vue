<template>
    <div>
        <NavBar
            v-if="showContet === 'add-page' || showContet === 'home-page' || showContet === 'edit-page' || showContet === 'information-page'"
            @gantiHalaman='gantiHalaman'
            @logout='logout'
            :showContet='showContet'
        >
        </NavBar>
        <DataKanban
            :kanban=kanban
            v-if="showHomePage === 'home-page'"
        >
        </DataKanban>

        <!-- <AddPage v-else-if="showHomePage === 'add-page'"></AddPage> -->
        <EditPage v-else-if="showHomePage === 'edit-page'"></EditPage>
        <InformationPage v-else-if="showHomePage === 'information-page'"></InformationPage>
    </div>
   
</template>

<script>
import NavBar from './NavBar'
import AddPage from './AddPage'
import EditPage from './EditPage'
import InformationPage from './InformationPage'
import DataKanban from './DataKanban'
export default {
    name: 'HomePage',
    data(){
        return {
            dataUser: 'kanban',
            showHomePage: 'home-page'
        }
    },
    props: ['kanban', 'showContet'],
    methods: {
        gantiHalaman(name){
            // this.showHomePage = name
            this.$emit('gantiHalaman', name)
        },
        deleteKanban(){
            
        },
        logout(data){
            this.$emit('logout', data)
        }
    },
    components: {
        NavBar,
        AddPage,
        EditPage,
        InformationPage,
        DataKanban
    }

}
</script>

<style>

</style>
<template>
    <div>
       <LoginPage v-if="pageName === 'LoginPage'"></LoginPage>
       <HomePage v-else-if="pageName === 'HomePage'"></HomePage>
       <AddPage v-else-if="pageName === 'AddPage'"></AddPage>
    </div>
</template>

<script>
import LoginPage from "./components/Login"
import HomePage from "./components/Home"
import AddPage from "./components/AddTask"

export default {
    name: "App",
    data() {
        return {
        message: 'Hello world',
        pageName: 'LoginPage'
        };
    },
    components: {
        LoginPage, HomePage, AddPage
    }
};
</script>

<style scoped>
</style>
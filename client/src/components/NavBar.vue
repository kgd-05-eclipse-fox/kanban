<template>
<div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow" style="justify-content: space-between;">
        <div>
            <a class="navbar-brand text-light"><strong>KANBAN</strong></a>
            <a @click.prevent="changePage('register-page')" v-show="!loggedIn.status" href="#" class="navbar-brand text-light">Register</a>
            <a @click.prevent="changePage('login-page')" v-show="!loggedIn.status" href="#" class="navbar-brand text-light">Login</a>
            <a @click.prevent="changePage('home-page')" v-show="loggedIn.status" href="#" class="navbar-brand text-light">{{loggedIn.username}}</a>
        </div>
        <div>
            <a v-show="loggedIn.status" @click.prevent="logout" href="#" class="navbar-brand text-danger">Logout</a>
        </div>
    </nav>
</div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            
        }
    },
    methods: {
        changePage(params) {
            this.$emit('changePage', params)
        },
        logout() {
            this.$emit('logout')
        }
    },
    props: ['loggedIn']
}
</script>

<style>

</style>
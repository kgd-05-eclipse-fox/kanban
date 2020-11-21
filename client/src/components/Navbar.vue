<template>
    <div>
        <nav>
            <div>
                <h2>Hello, {{fullname}}</h2>
            </div>
            <div class="task">
                <ul>
                    <li><button class="btn btn-danger" @click="logoutUser">Logout</button></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    methods: {
        logoutUser() {
            this.$emit('logoutUser', 'LoginPage')
        }
    },
    props: ['fullname']
}
</script>

<style>

</style>
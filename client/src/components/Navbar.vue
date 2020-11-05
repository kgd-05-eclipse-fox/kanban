<template>
    <div>
        <nav>
            <div>
                <h2>Kanban Apps</h2>
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
    }
}
</script>

<style>

</style>
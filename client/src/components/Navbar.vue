<template>
    <div>
        <nav>
            <div>
                <h2>{{ fullname }}</h2>
            </div>
            <div class="task">
                <ul>
                    <li><button class="btn btn-danger" @click="signOutUser()">Logout</button></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Navbar"
}
</script>

<style>

</style>
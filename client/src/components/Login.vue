<template>
    <section class="container my-3 mx-5">
        <div class="row justify-content-center" style="margin-top: 10em;">
            <div class="col-6">
                <img src="../assets/login.png" alt="#" style="height: 50%; margin-left: 8em;">
            </div>
            <div class="col-6">
                <h5 class="font-weight-light mb-3 text-center">Login</h5>
                <form @submit.prevent="login" class="form-signin bg-light rounded shadow text-dark">
                    <div class="form-group">
                        <label for="login-email">Email</label>
                        <input v-model="user.email" type="email" id="login-email" placeholder="email here"
                            class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label for="login-password">Password</label>
                        <input v-model="user.password" type="password" id="login-password" placeholder="password here"
                            class="form-control" required>
                    </div>
                    <br>
                    <div class="container d-flex" style="justify-content: space-between;">
                        <button class="btn btn-outline-primary" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$emit('login', this.user)
                this.user.email = ''
                this.user.password = ''
            }
        }
    }
</script>

<style>

</style>
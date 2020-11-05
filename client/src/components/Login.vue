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
                        <button v-google-signin-button="clientId" class="google-signin-button"><i class="fab fa-google"></i></button>
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
            },
            clientId:'191086874630-8fcpf7tkkcd5gtor93p31og3mr97rfr6.apps.googleusercontent.com'
        }
    },
    methods: {
        login() {
            this.$emit('login', this.user)
            this.user.email = ''
            this.user.password = ''
        },
        OnGoogleAuthSuccess (idToken) {
            this.$emit('googleSignIn', idToken)
        },
        OnGoogleAuthFail (error) {
            console.log(error)
        }
    }
}
</script>

<style>
.google-signin-button {
    color: white;
    background-color: red;
    height: 50px;
    font-size: 14px;
    width: 50px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
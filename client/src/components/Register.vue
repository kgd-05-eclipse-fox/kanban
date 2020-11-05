<template>
    <section class="container my-3 mx-5">
        <div class="row justify-content-center" style="margin-top: 10em;">
            <div class="col-6">
                <img src="../assets/private.png" alt="#" style="height: 50%; margin-left: 8em;">
            </div>
            <div class="col-6">
                <h5 class="font-weight-light mb-3 text-center" style="margin-left: 2em;">Register</h5>
                <div cl>
                    <form @submit.prevent="register" class="form-signin bg-light rounded shadow text-dark"
                    style="margin-right: 5em;">
                        <div class="form-group">
                            <label for="register-username">Username</label>
                            <input v-model="newUser.username" type="text" id="register-username" placeholder="username here"
                                class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="register-email">Email</label>
                            <input v-model="newUser.email" type="email" id="register-email" placeholder="email here"
                                class="form-control" required>
                        </div>
                        <div class="form-group">
                            <label for="register-password">Password</label>
                            <input v-model="newUser.password" type="password" id="register-password"
                                placeholder="password here" class="form-control" required>
                        </div>
                        <br>
                        <div class="container d-flex" style="justify-content: space-between;">
                            <button class="btn btn-outline-primary" type="submit">Register</button>
                            <button v-google-signin-button="clientId" class="google-signin-button"><i class="fab fa-google"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            newUser: {
                username: '',
                email: '',
                password: ''
            },
            clientId:'191086874630-8fcpf7tkkcd5gtor93p31og3mr97rfr6.apps.googleusercontent.com'
        }
    },
    methods: {
        register() {
            this.$emit('register', this.newUser)
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
<template>
    <div class="login-page">
        <div class="row my-5 mx-5">
            <div class="col-md-6 mx-auto p-0">
                <div class="login-card">
                    <div class="login-box">
                        <div class="login-snip">
                            <input id="tab-1" type="radio" name="tab" class="sign-in" checked>
                            <label for="tab-1" class="tab">Sign In</label>
                            <input id="tab-2" type="radio" name="tab" class="sign-up">
                            <label for="tab-2" class="tab">Sign Up</label>
                            <div class="login-space">
                                <div class="login">
                                    <div class="group">
                                        <label for="email-login" class="label">Email</label>
                                        <input id="email-login" type="text" class="input" placeholder="Enter your email" v-model="email">
                                    </div>
                                    <div class="group">
                                        <label for="pass-login" class="label">Password</label>
                                        <input id="pass-login" type="password" class="input" data-type="password" placeholder="Enter your password" v-model="password">
                                    </div>
                                    <div class="group">
                                        <button type="submit" class="button" @click="loginUser">SIGN IN</button>
                                    </div>
                                    <div class="group">
                                        <!-- <button type="submit" class="button"
                                        @click="loginUser"
                                        :params="params"
                                        :onSuccess="onSuccess"
                                        >SIGN IN WITH GOOGLE</button> -->
                                        <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
                                    </div>
                                </div>
                                <div class="sign-up-form">
                                    <div class="group">
                                        <label for="first-name" class="label">First Name</label>
                                        <input
                                        id="first-name"
                                        type="text"
                                        class="input"
                                        v-model="firstName"
                                        >
                                    </div>
                                    <div class="group">
                                        <label for="last-name" class="label">Last Name</label>
                                        <input id="last-name" type="text" class="input" v-model="lastName" required>
                                    </div>
                                    <div class="group">
                                        <label for="email-register" class="label">Email</label>
                                        <input id="email-register" type="text" class="input" v-model="email" required>
                                    </div>
                                    <div class="group">
                                        <label for="pass-register" class="label">Password</label>
                                        <input id="pass-register" type="password" class="input" data-type="password" v-model="password" required>
                                    </div>
                                    <div class="group">
                                        <button type="submit" class="button" @click="signUpUser">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GoogleLogin from 'vue-google-login'
export default {
    name: "LoginPage",
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            params: {
                client_id: "223212081300-97e5g0dh9s4h0b1m88b06hhu4vdj36ja.apps.googleusercontent.com"
            },
            renderParams: {
                    width: 500,
                    height: 50,
                    longtitle: true
            }
        }
    },
    components: {
        GoogleLogin
    },
    methods: {
        loginUser() {
            let payload = {
                email: this.email,
                password: this.password
            }
            this.$emit('login', payload)
            this.email = ''
            this.password = ''
        },
        signUpUser() {
            let payload = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            }
            this.$emit('signUp', payload)
            this.firstName = ''
            this.lastName = ''
            this.email = ''
            this.password = ''
        },
        onSuccess(googleUser) {
            let id_token = googleUser.getAuthResponse().id_token;
            this.$emit('loginGoogle', id_token)
        }
        
    }

}
</script>

<style>

</style>
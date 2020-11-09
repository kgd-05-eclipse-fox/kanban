<template>
    <div class="loginregister">
        <div class="container" :class="menuLoginRegister">
        <div class="form-container right-panel-active sign-up-container">
            <form @submit.prevent="register" class="login-template-xd">
            <h1 class="login-template-xd">Create Account</h1>
            <div class="social-container">
                <a class="login-template-xd social" href="/" @click.prevent="google"><GoogleLogin :params="params" :onSuccess="onSuccess" style="border: none; background-color: transparent;"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></GoogleLogin></a>
                <!-- <a class="login-template-xd social" href="/" @click.prevent="github"><font-awesome-icon :icon="['fab', 'github']" /></a> -->
            </div>
            <span class="login-template-xd">or use email to register</span>
            <input class="login-template-xd" type="email" placeholder="Email" v-model="userRegister.email" />
            <input class="login-template-xd" type="password" placeholder="Password" v-model="userRegister.password" />
            <button class="login-template-xd">Register</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            
            <form @submit.prevent="login" class="login-template-xd">
                <h1 class="login-template-xd">Sign in to Kanban</h1>
                <div class="social-container">
                    <a class="login-template-xd social" href="/" @click.prevent="google"><GoogleLogin :params="params" :onSuccess="onSuccess" style="border: none; background-color: transparent;"><font-awesome-icon :icon="['fab', 'google-plus-g']" /></GoogleLogin></a>
                    <!-- <a class="login-template-xd social" href="/" @click.prevent="github"><font-awesome-icon :icon="['fab', 'github']" /></a> -->
                </div>
                <span class="login-template-xd">or use email to login</span>
                <input class="login-template-xd" type="email" placeholder="Email" v-model="userLogin.email" />
                <input class="login-template-xd" type="password" placeholder="Password" v-model="userLogin.password" />
                <button class="login-template-xd">Login</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
            <div class="overlay-panel overlay-left">
                <h1 class="login-template-xd">Heyyy</h1>
                <p class="login-template-xd">Already have an account?</p>
                <button class="ghost login-template-xd" @click="loginPage">Login</button>
            </div>
            <div class="overlay-panel overlay-right">
                <h1 class="login-template-xd">Hey You!</h1>
                <p class="login-template-xd">Don't have an account?</p>
                <button class="ghost login-template-xd" @click="registerPage">Register</button>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>

import GoogleLogin from 'vue-google-login'

export default {
    name: 'LoginRegisterPage',
    props: ['menuLoginRegister'],
    data() {
        return {
            userLogin: {
                email: '',
                password: ''
            },
            userRegister: {
                email: '',
                password: ''
            },
            params: {
                client_id: "90829278115-fu8tr2ekd74q2mg6b2ks5tadalrb0c45.apps.googleusercontent.com"
            }
        }
    },
    components: {
        GoogleLogin
    },
    methods: {
        loginPage() {
            this.$emit('menu', '')
        },
        registerPage() {
            this.$emit('menu', 'right-panel-active')
        },
        login() {
            let payload = {
                email: this.userLogin.email,
                password: this.userLogin.password
            }
            this.$emit('login', payload)
        },
        register() {
            let payload = {
                email: this.userRegister.email,
                password: this.userRegister.password
            }
            this.$emit('register', payload)
        },
        google() {
            this.$emit('google')
        },
        github() {
            this.$emit('github')
        },
        onSuccess(googleUser) {
            const id_token = googleUser.getAuthResponse().id_token
            this.$emit('googleLogin', id_token)
        }
    }
}
</script>
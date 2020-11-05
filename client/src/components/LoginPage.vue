<template>
    <div class="loginregister">
        <div class="container" :class="menuLoginRegister">
        <div class="form-container right-panel-active sign-up-container">
            <form class="login-template-xd">
            <h1 class="login-template-xd">Create Account</h1>
            <div class="social-container">
                <a class="login-template-xd social" href="/" @click.prevent="google"><i class="fab fa-google-plus-g"></i></a>
                <a class="login-template-xd social" href="/" @click.prevent="github"><i class="fab fa-github"></i></a>
            </div>
            <span class="login-template-xd">or use email to register</span>
            <input class="login-template-xd" type="email" placeholder="Email" />
            <input class="login-template-xd" type="password" placeholder="Password" />
            <button class="login-template-xd">Register</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form @submit.prevent="login" class="login-template-xd">
                <h1 class="login-template-xd">Sign in to Kanban</h1>
                <div class="social-container">
                    <a class="login-template-xd social" href="/" @click.prevent="google"><i class="fab fa-google-plus-g"></i></a>
                    <a class="login-template-xd social" href="/" @click.prevent="github"><i class="fab fa-github"></i></a>
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
export default {
    name: 'LoginPage',
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
            }
        }
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
        google() {
            this.$emit('google')
        },
        github() {
            this.$emit('github')
        }
    }
}
</script>
<template>
    <section id="login-page">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div id = "logo">
            <a href ="home-page" class ="nav-logo" ><h1 style ="color : white">KANBAND</h1>
        </div>
        <div class="collapse navbar-collapse" id="register">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="pindahRegister" style="color: white;">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="row justify-content-center mt-5">
            <div class="col-4" style="background:  silver; border-radius: px; box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65); height: 450px; margin: 3rem auto 10.1rem auto; width: 329px;">
                <form action="#" @submit.prevent="login"><br><br>
                    <h3 class="text-center text-light font-weight-bold">Log In</h3>
                    <div class="form-group">
                        <label for="email" class="text-light">Email</label>
                        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" autocomplete="email">
                        <small id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="password" class="text-light">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password" autocomplete="current-password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                    
                </form><br>
                <!-- Button Google Login -->
                <p>or you can use :</p>
                <button v-google-signin-button="clientId" class="google-signin-button">I'm Google</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name : 'LoginPage',
    data () {
        return {
            email : '',
            password : '',
            clientId : '185397511381-fmcrh65i9cesrqrkvi470jjbik0ij3s8.apps.googleusercontent.com'
        }
    },
    methods :{
        login(){
            let payload = {
                email : this.email,
                password : this.password
            }
            this.$emit('login', payload)
        },
        OnGoogleAuthSuccess(idToken){
            this.$emit('OnGoogleAuthSuccess', idToken)
        },
        OnGoogleAuthFail(error){
            console.log(error)
        },
        pindahRegister(){
            this.$emit('pindahRegister')
        }
    }
}
</script>

<style>
.google-signin-button {
    color : black;
    height: 50px;
    font-size: 16px;
    border-radius: 10px;
    padding : 10px 20px 25px 20px;
    box-shadow: 0 4px 8px 9 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
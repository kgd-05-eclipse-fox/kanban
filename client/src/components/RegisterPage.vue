<template>
    <section id="register">
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div id = "logo">
            <a class ="nav-logo" ><h1 style ="color : white">KANBAND</h1>
        </div>
        <div class="collapse navbar-collapse" id="login">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click="pindahLogin" style="color: white;">Login</a>
                    </li>
                </ul>
            </div>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul>
        </nav>
        <div class="row justify-content-center mt-5">
            <div class="col-4" style="background: silver; border-radius: 8px; box-shadow: 1px 2px 8px rgba(0, 0, 0, 0.65); height: 450px; margin: 10rem auto 10.1rem auto; width: 329px;">
                <form action="#" @submit.prevent="register"><br><br>
                    <h3 class="text-center text-light font-weight-bold">Create an Account</h3>
                    <div class="form-group">
    
                        <label for="email_register" class="text-light">Email</label>
                        <input v-model="email" type="email" class="form-control" id="email_register" aria-describedby="emailHelp" autocomplete="email">
                        <small id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</small>
    
                    </div>
                    <div class="form-group">
                        <label for="password_register" class="text-light">Password</label>
                        <input v-model="password" type="password" class="form-control" id="password_register" autocomplete="current-password">
                    </div>
                        <button type="submit" class="btn btn-primary btn-block">Create an account</button>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'RegisterPage',
    data (){
        return {
            email:'',
            password:''
        }
    },
    methods : {
        pindahLogin(){
            this.$emit('pindahLogin')
        },
        register(){
            let payload = {
                email : this.email,
                password : this.password
            }
            console.log(this.email)
            this.$emit('register', payload)
        },
    }
}
</script>

<style>

</style>
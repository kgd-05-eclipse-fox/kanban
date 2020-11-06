<template>
    <div class="container d-flex justify-content-center" style="margin-top: 15vh;">
        <div class="card">
            <h4 class="text-center pt-4"><img class="logo-log" src="../assets/img/logoo.png" alt=""></h4> 
            <span class="info">To all special dicounts and more <br> become to login!<span>
            <div class="text-center flex-column"> 
                <div class="form-group justify-content-center d-flex">
                    <form  @submit.prevent="userLogin">
                        <input v-model="email" type="email" name="email" placeholder="email address" class="form-control form mb-2"> 
                        <input v-model="password" type="password" name="password" placeholder="password" class="form-control">
                        <button type="submit" class="btn mt-4">Login</button>
                    </form>
                </div>
            </div>
            <div class="text-center pb-4 pt-3">
                <div class="px-3">
                    <div class=" d-flex justify-content-between mb-2">
                        <span><a v-on:click.prevent="gantiHalaman('register-page')" href="#" style="text-decoration: none; color: whitesmoke;">Go To Register</a></span>
                        <span>Forgot Password</span>
                    </div>
                    <h4 class="else"><span class="else2"> Or use these to login </span></h4>
                </div>
                <div class="pt-3 d-flex flex-row px-3"> 
                    <button type="button" class="btn btn-success fb mr-2">Facebook</button> 
                    <button type="button" class="btn btn-succes ggl">Google</button> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data (){
        return {
            email: '',
            password: ''
                
        }
    },
    methods: {
        userLogin(){
            let data = {
                email: this.email,
                password: this.password
            }
            this.$emit('dataUserLogin', data)
        },
        gantiHalaman(name){
            this.$emit('registerpage', name)
        }
    }
}
</script>

<style>

</style>
<template>
  <div class="container d-flex justify-content-center" style="margin-top: 15vh;">
    <div class="card">
        <h4 class="text-center pt-4"><img class="logo-log" src="../assets/img/logoo.png" alt=""></h4> 
        <span class="info">To all special dicounts and more <br> become to member!<span>
        <div class="text-center flex-column"> 
            <div class="form-group justify-content-center d-flex">
                <form  @submit.prevent="register">
                    <input v-model="addEmail" type="email" name="email" placeholder="email address" class="form-control form mb-2"> 
                    <input v-model="addPassword" type="password" name="password" placeholder="password" class="form-control">
                    <button  type="submit" class="btn mt-4">Register</button>
                </form>
            </div>
        </div>
        <div class="text-center pb-4 pt-3">
             <div class="px-3">
                    <div class=" d-flex justify-content-between mb-2">
                        <span><a v-on:click.prevent="gantiHalaman('login-page')" href="#" style="text-decoration: none; color: whitesmoke;">Go To Login</a></span>
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
    name: 'RegisterPage',
    data(){
        return{
            addEmail: '',
            addPassword: ''
        }
    },
    methods: {
        gantiHalaman(name){
            this.$emit('login', name)
        },
        register(){
            let data = {
                addEmail: this.addEmail,
                addPassword: this.addPassword
            }
            this.$emit('register', data)
        }
    },
    components: {
        
    }
    

}
</script>

<style>

</style>
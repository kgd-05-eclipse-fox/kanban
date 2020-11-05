<template>
  <div class="container d-flex justify-content-center" style="margin-top: 15vh;">
    <div class="card">
        <h4 class="text-center pt-4"><img class="logo-log" src="../assets/img/logoo.png" alt=""></h4> 
        <span class="info">To all special dicounts and more <br> become to member!<span>
        <div class="text-center container flex-column"> 
            <div class="form-group text-center container d-flex">
                <form>
                    <input v-model="addEmail" type="email" name="email" placeholder="email address" class="form-control form mb-2"> 
                    <input v-model="addPassword" type="password" name="password" placeholder="password" class="form-control">
                    <button v-on:click.prevent="register()" type="submit" class="btn mt-4">Register</button>
                </form>
            </div>
        </div>
        <div class="text-center pb-4 pt-3">
            <div class="px-3">
                <span class="mr-4"><a v-on:click.prevent="gantiHalaman('register-page')" href="#" style="text-decoration: none; color: whitesmoke;">Go To Login</a></span>
                <span class="ml-4">Forgot Password</span>
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
    

}
</script>

<style>

</style>
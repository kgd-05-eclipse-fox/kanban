<template>
  <section id="login-page">
    <div class="main-container fullscreen bg-gradient">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-7">
            <div class="text-center">
              <h1 class="h2">Welcome Back &#x1f44b;</h1>
              <p class="lead">Log in to your account to continue</p>
              <form @submit.prevent="login">
                <div class="form-group">
                  <input v-model="user.email" class="form-control" type="email" placeholder="Email Address" name="login-email" />
                </div>
                <div class="form-group">
                  <input v-model="user.password" class="form-control" type="password" placeholder="Password" name="login-password" />
                </div>
                <div class="d-flex">
                  <button class="btn btn-lg btn-block btn-white mb-2" role="button" type="submit">
                    Log in
                  </button>
                  <button v-google-signin-button="clientId" class="google-signin-button"> Continue with Google</button>
                </div>
                <small @click="register">Don't have an account yet? <a href="#">Create one</a>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      user:{
        email:'',
        password:''
      },
      clientId: '247629122397-5olff61o6eicahelc1n2bprmsm2nk8ba.apps.googleusercontent.com'
    }
  },
  methods: {
    login() {
      
      this.$emit('login', this.user)
    },
    register() {
      this.$emit('changePage', 'register-page')
    },
    OnGoogleAuthSuccess (idToken) {
      console.log(idToken)
      // Receive the idToken and make your magic with the backend
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
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
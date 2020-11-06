<template>
  <section id="register-page">
    <div class="main-container fullscreen bg-gradient">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-5 col-lg-6 col-md-7">
            <div class="text-center">
              <h1 class="h2">Create account</h1>
              <p class="lead">Start doing things for free, in an instant</p>
              <hr>
              <form @submit.prevent='register'>
                <div class="form-group">
                  <input v-model="user.email" class="form-control" type="email" placeholder="Email Address" name="create-account-email" />
                </div>
                <div class="form-group">
                  <input v-model="user.password" class="form-control" type="password" placeholder="Password" name="create-account-password" />
                  <div class="text-left">
                    <small>Your password should be at least 6 characters</small>
                  </div>
                </div>
                <button class="btn btn-lg btn-block btn-primary" role="button" type="submit">
                  Create account
                </button>
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
  name: "RegisterPage",
  data() {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    register() {
      const user = this.user
      this.$emit('register', user)
    }
  }
}
</script>

<style>

</style>
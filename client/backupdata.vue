<template>
  <div>
    <LoginPage v-if="showContet === 'login-page'"></LoginPage>
    <RegisterPage v-else-if="showContet === 'regis-page'"></RegisterPage>
    <HomePage v-else-if="showContet === 'home-page'"></HomePage>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
export default {
  name: 'App',
  data() {
    return {
      showContet: 'login-page'
    };
  },
  methods: {
    gantiHalaman(page){
      this.showContet = page

    }
  },
  components: {
    RegisterPage,
    LoginPage,
    HomePage,
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
</style>
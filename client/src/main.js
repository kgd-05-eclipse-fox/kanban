import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import GoogleSignInButton from 'vue-google-signin-button-directive'


new Vue({
  GoogleSignInButton,
  render: h => h(App),
}).$mount('#app');
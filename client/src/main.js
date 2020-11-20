import Vue from 'vue'
import App from './App.vue'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://kanban-tori.herokuapp.com'
}))

new Vue({
    render: h => h(App),
    GoogleSignInButton,
}).$mount('#app')
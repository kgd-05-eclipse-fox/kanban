import Vue from 'vue';
import App from './App.vue';
import './assets/css/style.css'
import GoogleSignInButton from 'vue-google-signin-button-directive'
import draggable from 'vuedraggable'
Vue.config.productionTip = false;
Vue.component('draggable', draggable);

new Vue({
	render: h => h(App),
	GoogleSignInButton
}).$mount('#app');
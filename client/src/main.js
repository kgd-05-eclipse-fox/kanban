import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faEdit, faTrashAlt, faGithub, faGooglePlusG)

Vue.use(BootstrapVue)

Vue.component('font-awesome-icon', FontAwesomeIcon)

import './assets/css/style.css'

new Vue({
    render: h => h(App)
}).$mount('#app')
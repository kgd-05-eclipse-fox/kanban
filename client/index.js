
// import Board from './components/Board'
// import Card from './components/Card'

let app = new Vue({
    el: '#app',
    data: {
        showNav: 'navBar',
        showContet: 'login-page',
        conten: false
    },
    methods: {
        gantiHalaman(nama){
            this.showContet = nama
        }
    }
})
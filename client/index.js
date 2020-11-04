
// import Board from './components/Board'
// import Card from './components/Card'

const { default: Axios } = require("axios")

let app = new Vue({
    el: '#app',
    data: {
        showNav: 'navBar',
        showContet: 'login-page',
        conten: false,
        kanban: [],
        server: 'http://localhost:3000'
    },
    methods: {
        gantiHalaman(nama){
            this.showContet = nama
        },
        getDataAllkanban(){
            axios({
                method: 'get',
                url: this.server + `/tasks`,
            })
            .then(function (response) {
                console.log(response.data)
            })
            .catch(err=>{
                console.log(err)
            })
        }
    }
    
    
})
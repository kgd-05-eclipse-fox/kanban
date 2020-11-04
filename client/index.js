
// import Board from './components/Board'
// import Card from './components/Card'

let app = new Vue({
    el: '#app',
    data: {
        showNav: 'navBar',
        showContet: 'login-page',
        conten: false,
        kanban: [],
        server: 'http://localhost:3000',
        email: '',
        password: '',
        title: '',
        description: '',
        addEmail: '',
        addPassword: ''
    },
    methods: {
        gantiHalaman(nama){
            this.showContet = nama
            this.getDataAllkanban()
        },
        register(){
            axios({
                method: 'POST',
                url: this.server + '/resgister',
                data: {
                    email: this.addEmail,
                    password: this.addPassword
                }
            })
            .then(res=>{
                this.gantiHalaman('login-page')
                this.addEmail = ''
                this.addPassword = ''
            })
            .catch(err=>{
                console.log(err)
            })
        },
        addkanban(){
            let access_token = localStorage.acces_token
            axios({
                method: 'POST',
                url: this.server + '/tasks',
                headers: {access_token},
                data: {
                    title: this.title,
                    description: this.description
                }
            })
            .then(res=>{
                this.gantiHalaman('home-page')
                this.title = ''
                this.description = ''
            })
            .catch(err=>{
                console.log(err)
            })
        },
        getDataAllkanban(){
            const access_token = localStorage.acces_token
            axios({
                method: 'GET',
                url: this.server + `/tasks`,
                headers: {access_token}
            })
            .then(res=>{
                this.kanban = res.data
                // console.log(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
        },
        loginUser(){
            axios({
                method: 'POST',
                url: this.server + '/login',
                data: {
                    email: this.email,
                    password: this.password
                }
            })
            .then(res=>{
                let data = res.data
                let id = data.id
                let email = data.email
                let acces_token = data.access_token
                localStorage.setItem('acces_token', acces_token)
                this.gantiHalaman('home-page')
                this.email = ''
                this.password = ''
            })
            .catch(err=>{
                console.log(err)
            })
        },
        logout(){
            localStorage.removeItem('acces_token');
            this.gantiHalaman('login-page')
        }
    },
    created(){
        if(!localStorage.acces_token){
            this.gantiHalaman('login-page')
        }else{
            this.gantiHalaman('home-page')
        }
    }
    
    
})
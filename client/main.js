const app = new Vue({
    el: '#app',
    data: {
        title: "Kanban Apps",
        page: "login-page",
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        tasks: [
            {
                id: 1,
                title: "Vue.js",
                description: "Belajar directive vue.js"
            },
            {
                id: 2,
                title: "React Native",
                description: "Belajar react native"
            },
            {
                id: 3,
                title: "JQuery",
                description: "Belajar JQuery"
            }
        ]
    },
    methods:{
        changePage(name){
            this.page = name
        },
        signUpUser() {
            localStorage.setItem('email', this.email)
            localStorage.setItem('first-name', this.firstName)
            localStorage.setItem('last-name', this.lastName)
            this.email = ''
            this.password = ''
            this.firstName = ''
            this.lastName = ''
        },
        signInUser() {
            let email = localStorage.getItem('email')
            if(this.email == email) {
                this.changePage('home-page')
                this.email = ''
                this.password = ''
            }else {
                this.email = ''
                this.password = ''
            }
        },
        signOutUser() {
            this.page = 'login-page'
        }
    },
    created () {
        let email = localStorage.getItem('email')
        if(email) {
            this.page = 'home-page'
        } else {   
            this.page = 'login-page'
        }
    },
    computed: {
        fullname() {
            let firstName = localStorage.getItem('first-name')
            let lastName = localStorage.getItem('last-name')
            return `Hello, ${firstName} ${lastName}`
        }
    }
})
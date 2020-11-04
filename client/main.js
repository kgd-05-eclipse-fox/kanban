const app = new Vue({
    el: "#app",
    data: {
        server: `http://localhost:3000`,
        page: 'home-page',
        kanban: [],
        newUser: {
            username: '',
            email: '',
            password: ''
        },
        user: {
            email: '',
            password: ''
        },
        newTask: {
            title: '',
            description: '',
            category: ''
        },
        form: false
    },
    methods: {
        changePage(pagename) {
            this.page = pagename
        },
        showForm() {
            this.form = true
        },
        register() {
            const payload = this.newUser
            axios({
                method: 'POST',
                url: `${this.server}/register`,
                data: payload
            })
            .then(response => {
                const access_token = response.data.access_token

                localStorage.setItem('access_token', access_token)
                this.page = 'home-page'

                this.newUser.username = ''
                this.newUser.email = ''
                this.newUser.password = ''
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    text: err
                })
            })
        },
        login() {
            const payload = this.user
            axios({
                method: 'POST',
                url: `${this.server}/login`,
                data: payload
            })
            .then(response => {
                const access_token = response.data.access_token
                this.page = 'home-page'

                localStorage.setItem('access_token', access_token)
                this.user.email = ''
                this.user.password = ''
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong',
                    text: err
                })
            })
        },
        logout() {
            localStorage.clear()
            this.page = 'login-page'
            Swal.fire({
                icon: 'success',
                title: 'logged out'
            })
        },
        fetchKanban() {
            const access_token = localStorage.getItem('access_token')
            axios({
                method: 'GET',
                url: `${this.server}/tasks`,
                headers: {
                    access_token
                }
            })
            .then(response => {
                this.kanban = response.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        addTask() {
            const payload = this.newTask
            const access_token = localStorage.getItem('access_token')

            axios({
                method: 'POST',
                url: `${this.server}/tasks`,
                headers: {
                    access_token
                },
                data: payload
            })
            .then(response => {
                this.fetchKanban()
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    computed: {
        backlog() {
            const backlog = this.kanban.filter(el => el.category === 'backlog')
            return backlog
        },
        todo() {
            const todo = this.kanban.filter(el => el.category === 'todo')
            return todo
        },
        progress() {
            const progress = this.kanban.filter(el => el.category === 'progress')
            return progress
        },
        completed() {
            const completed = this.kanban.filter(el => el.category === 'completed')
            return completed
        }
        
    },
    created () {
        if (localStorage.access_token) {
            this.page = 'home-page'
            this.fetchKanban()
        } else {
            this.page = 'login-page'
        }
    }
})
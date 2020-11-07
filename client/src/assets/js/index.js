 // register modal component
 Vue.component("modal", {
  template: "#modal-template"
});

let app = new Vue({
  el: '#app',
  data: {
    message: "Hello world",
    text: "wooo",
    pageName: 'login-page',
    tasks: [
      {
        title: "Social Login",
        description: "Sign in with google"
      },
      {
        title: "Authorization",
        description: "User can create organization keep a live bro ....."
      }
    ],
    user: {
      email: '',
      password: ''
    },
    isShow: true,
    title: "",
    showModal: false
  },
  methods: {
    changePage(name) {
      this.pageName = name
    },
    addTask() {
      let data = {
        title: this.title,
        description: this.description
      }
      this.tasks.push({title: data.title})

      this.title = ''
    },
    showForm() {
      this.isShow = false
    },
    login() {
      let payload = this.user

      // axios({
      //   url: 'localhost:3000/login',
      //   data: payload,
      //   method: 'POST'
      // })
      // .then(result => {
      //   localStorage.setItem('access_token', this.user.email)
      // })
      
      localStorage.setItem('access_token', this.user.email)
      this.changePage('kanban-page')
      this.user.email = ""
      this.user.password = ""
    },
    checkLogin() {
      if (localStorage.access_token) {
        this.pageName = 'kanban-page'
      } else {
        this.pageName = 'login-page'
      }
    },
    logout() {
      this.changePage('login-page')
      localStorage.clear
    },
    register() {
      this.changePage('register-page')
    }
  },
  created: function () {
    this.checkLogin()
  }
})
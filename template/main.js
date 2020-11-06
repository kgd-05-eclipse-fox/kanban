const user = require("../server/models/user")

let app = new Vue({
    el: '#app',
    data: {
        pageName: "home-page",
        user: {
            email: '',
            password: ''
        }
    },
})
let app = new Vue({
	el: '#app',
	data: {
		showingPage: 'login'
	},
	methods: {
		changePage(page) {
			this.showingPage = page
		},
		logout() {
			this.showingPage = 'login'
			// clear token
		}
	}
})
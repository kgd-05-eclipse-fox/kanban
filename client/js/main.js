const { response } = require("express")

let app = new Vue({
	el: '#app',
	data: {
		showingPage: 'login',
		user: {
			email: '',
			password: ''
		},
		reg: {
			email: '',
			password: ''
		},
		url: 'http://localhost:3000',
		backlog: [],
		product: [],
		development: [],
		done: [],
	},
	created() {
		if (!localStorage.token) {
			this.showingPage = 'login'
		} else {
			this.showingPage = 'kanban'
			this.showAllTask()
		}
	},
	methods: {
		changePage(page) {
			this.showingPage = page
		},
		logout() {
			this.showingPage = 'login'
			localStorage.clear()
		},
		getDate(date) {
			let o = new Intl.DateTimeFormat("id" , {
				timeStyle: "short",
				dateStyle: "long"
			});
			return o.format(new Date(date))
		},
		login() {
			let payLoad = this.user
			axios
				.post(`${this.url}/login`, payLoad)
				.then(response => {
					Swal.fire({
						icon: 'success',
						title: 'Login Success!!',
						showConfirmButton: false,
						timer: 1500
					})
					localStorage.setItem('token', response.data.token)
					this.showingPage = 'kanban'
					this.user.email = ''
					this.user.password = ''
					this.showAllTask()
				})
				.catch(err => {
					Swal.fire({
						title: 'Login Failed!',
						text: err.response.data.error,
						icon: 'error',
					})
				})
		},
		register() {
			let payLoad = this.reg
			axios
				.post(`${this.url}/register`, payLoad)
				.then(response => {
					Swal.fire({
						icon: 'success',
						title: 'Register Success!!',
						showConfirmButton: false,
						timer: 1500
					})
					this.showingPage = 'login'
					this.reg.email = ''
					this.reg.password = ''
				})
				.catch(err => {
					Swal.fire({
						title: 'Login Failed!',
						text: err.response.data.error,
						icon: 'error',
					})
				})
		},
		showAllTask() {
			const token = localStorage.token
			axios({
				method: 'GET',
				url: `${this.url}/task`,
				headers: { token }
			})
			.then(response => {
				response.data.forEach(el => {
					el.date = this.getDate(new Date(el.createdAt))
					if (el.category === 'backlog') {
						this.backlog.push(el)
					} else if (el.category === 'development') {
						this.development.push(el)
					} else if (el.category === 'product') {
						this.product.push(el)
					} else if (el.category === 'done') {
						this.done.push(el)
					}
				});
			})
			.catch(err => {
				console.log(err)
			})
		},
		showAddForm() {
			Swal.fire({
				title: 'Login Form',
				html: `<input type="text" id="addtitle" class="swal2-input" placeholder="Title">
				<input type="text" id="adddesc" class="swal2-input" placeholder="Description">`,
				confirmButtonText: 'Sign in',
				focusConfirm: false,
				preConfirm: () => {
					const title = Swal.getPopup().querySelector('#addtitle').value
					const description = Swal.getPopup().querySelector('#adddesc').value
					if (!title || !description) {
						Swal.showValidationMessage(`Please fill out all the fields!`)
					}
					return { title, description }
				}
			}).then((result) => {
					const payLoad = {
						title: result.value.title,
						description: result.value.description
					}
					const token = localStorage.token
					axios
						.post(`${this.url}/task`, payLoad, { headers: { token } })
						.then(response => {
							const id = response.data.id
							axios
								.get(`${this.url}/task/${id}`, { headers: { token } })
								.then(response => {
									this.backlog.push(response.data)
									Swal.fire({
										icon: 'success',
										title: 'New task added!!',
										showConfirmButton: false,
										timer: 1500
									})
								})
								.catch(err => {
									console.log(err)
								})
						})
						.catch(err => {
							Swal.fire({
								title: 'Add Failed!',
								text: err.response.data.error,
								icon: 'error',
							})
						})
			})
		},
		destroy(id) {
			const token = localStorage.token
			axios
				.destroy(`${this.url}/task`, id, { headers: { token } })
				.then(response => {
					
				})
		}
	}
})
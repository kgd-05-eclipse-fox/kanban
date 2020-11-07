<template>
	<div>
		<LoginPage 
			v-if="showingPage == 'login'"
			@changePage="changePage"
			@login="login"
			@showAllTask='showAllTask'
			@setUser='setUser'
			>
		</LoginPage>
		<RegisterPage 
			v-else-if="showingPage == 'register'"
			@changePage="changePage"
			@register="register"
			>
		</RegisterPage>
		<HomePage
			@logout='logout'
			@showAddForm="showAddForm"
			@destroy='destroy'
			@updateTask='updateTask'
			@moveCategory='moveCategory'
			:categories="categories"
			:getDate='getDate'
			:showAllTask='showAllTask'
			:tasks="tasks"
			:user='user'
			v-else>
		</HomePage>
		<div>
	</div>
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import axios from './config/axios'
import Swal from 'sweetalert2'
import draggable from 'vuedraggable'

export default {
	name: 'kanban',
	components: {
		LoginPage,
		RegisterPage,
		HomePage,
		draggable
	},
	methods: {
		changePage(name) {
			this.showingPage = name
		},
		login(payload) {
			axios
				.post('/login', payload)
				.then(({data}) => {
					Swal.fire({
						icon: 'success',
						title: 'Login Success!!',
						showConfirmButton: false,
						timer: 1500
					})
					localStorage.setItem('token', data.token)
					this.showingPage = 'kanban'
					this.showAllTask()
					localStorage.setItem('email', data.email)
				})
				.catch(err => {
					Swal.fire({
						title: 'Login Failed!',
						text: err.response.data.error,
						icon: 'error',
					})
				})
		},
		logout(data) {
			Swal.fire({
				title: 'Are you sure to logout and leave me alone?',
				imageUrl: 'https://media1.tenor.com/images/94ec8e77f201109a234ae494b82bb514/tenor.gif?itemid=4988274',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, logout!',
				backdrop: `
				rgba(0,0,123,0.4)
				left top
				no-repeat
			`
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire(
						'Logged Out!',
						'Please come back anytime!',
						'success'
					)
				this.showingPage = 'login'
				localStorage.clear()
				}
			})
		},
		getDate(date) {
			let o = new Intl.DateTimeFormat("id" , {
				timeStyle: "short",
				dateStyle: "long"
			});
			return o.format(new Date(date))
		},
		register(payLoad) {
			axios
				.post(`/register`, payLoad)
				.then(response => {
					Swal.fire({
						icon: 'success',
						title: 'Register Success!!',
						showConfirmButton: false,
						timer: 1500
					})
					this.showingPage = 'login'
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
				url: `/task`,
				headers: { token }
			})
			.then(({data}) => {
				this.tasks = data
			})
			.catch(err => {
				console.log(err)
			})
		},
		showAddForm() {
			Swal.fire({
				title: 'Add a task',
				html: `<input type="text" id="addtitle" class="swal2-input" placeholder="Title">
				<input type="text" id="adddesc" class="swal2-input" placeholder="Description">
				  <select id="addCategory" class="swal2-input">
					<option value="backlog">Backlog</option>
					<option value="product">Product</option>
					<option value="development">Development</option>
					<option value="done">Done</option>
				</select>`,
				confirmButtonText: 'Add task',
				focusConfirm: false,
				preConfirm: () => {
					const title = Swal.getPopup().querySelector('#addtitle').value
					const description = Swal.getPopup().querySelector('#adddesc').value
					const category = Swal.getPopup().querySelector('#addCategory').value
					if (!title || !description || !category) {
						Swal.showValidationMessage(`Please fill out all the fields!`)
					}
					return { title, description, category }
				}
			})
			.then((result) => {
				const payLoad = {
					title: result.value.title,
					description: result.value.description,
					category: result.value.category
				}
				const token = localStorage.token
				axios
					.post(`/task`, payLoad, { headers: { token } })
					.then(response => {
						Swal.fire({
							icon: 'success',
							title: 'New task added!!',
							showConfirmButton: false,
							timer: 1500
						})
						this.reloadTask()
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
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!'
			})
			.then((result) => {
				if (result.isConfirmed) {
					const token = localStorage.token
					axios.delete(`/task/${id}`, { headers: { token } })
						.then(response => {
							Swal.fire(
								'Deleted!',
								'Your task has been deleted.',
								'success'
							)
							this.reloadTask()
						})
						.catch(err => {
							Swal.fire({
								title: 'Delete Failed!',
								text: err.response.data.error,
								icon: 'error',
							})
						})
				}
			})
			.catch(err => {
				Swal.fire({
					title: 'Login Failed!',
					text: err.response.data.error,
					icon: 'error',
				})
			})
		},
		reloadTask() {
			this.tasks = []
			this.showAllTask()
		},
		editCategory(data) {
			const token = localStorage.token
			axios.patch(`/task/${data.id}`, category, { headers: { token }})
			.then(data => {
				this.reloadTask()
			})
			.catch(err => {
				Swal.fire({
					title: 'Oops!!',
					text: err.response.data.error,
					icon: 'error',
				})
			})
		},
		updateTask(data) {
			const token = localStorage.token
			axios.put(`/task/${data.id}`, data, { headers: { token } })
			.then(data => {
				Swal.fire(
					'Edited!',
					'Your task has been edited.',
					'success'
				)
				this.reloadTask()
			})
			.catch(err => {
				Swal.fire({
					title: 'Edit Failed!',
					text: err.response.data.error,
					icon: 'error',
				})
			})
		},
		moveCategory(payLoad) {
			console.log('di app')
			const id = payLoad.id
			let category
			if (payLoad.movement === 'right') {
				if (payLoad.category === 'backlog') {
					category = 'product'
				} else if (payLoad.category === 'product') {
					category = 'development'
				} else if (payLoad.category === 'development') {
					category = 'done'
				}
			} else {
				if (payLoad.category === 'done') {
					category = 'development'
				} else if (payLoad.category === 'development') {
					category = 'product'
				} else if (payLoad.category === 'product') {
					category = 'backlog'
				}
			}
			const token = localStorage.token
			axios.patch(`/task/${id}`, { category }, { headers: { token } })
			.then(data => {
				this.reloadTask()
			})
			.catch(err => {
				console.log(err, 'error')
			})
		},
		setUser(user) {
			localStorage.setItem('email', user)
			this.user = localStorage.email
		}
	},
	created() {
		if (!localStorage.token) {
			this.showingPage = 'login'
		} else {
			this.showingPage = 'kanban'
			this.showAllTask()
			this.user = localStorage.email
		}
	},
  data() {
    return {
			showingPage: 'login',
			categories: ['Backlog', 'Product', 'Development', 'Done'],
			tasks: [],
			user: ''
    };
  },
};
</script>

<style scoped>
</style>
<template>
	<div>
		<LoginPage 
			v-if="showingPage == 'login'"
			@changePage="changePage"
			@login="login"
			>
		</LoginPage>
		<RegisterPage 
			v-else-if="showingPage == 'register'"
			@changePage="changePage"
			@register="register">
		</RegisterPage>
		<HomePage
			@logout='logout'
			@showAddForm="showAddForm"
			@destroy='destroy'
			:categories="categories"
			:getDate='getDate'
			:showAllTask='showAllTask'
			:tasks="tasks"
			v-else>
		</HomePage>
	</div>
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import axios from './config/axios'
import Swal from 'sweetalert2'

export default {
	name: 'kanban',
	components: {
		LoginPage,
		RegisterPage,
		HomePage
	},
	methods: {
		changePage(name) {
			console.log(name);
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
				<input type="text" id="adddesc" class="swal2-input" placeholder="Description">`,
				confirmButtonText: 'Add task',
				focusConfirm: false,
				preConfirm: () => {
					const title = Swal.getPopup().querySelector('#addtitle').value
					const description = Swal.getPopup().querySelector('#adddesc').value
					if (!title || !description) {
						Swal.showValidationMessage(`Please fill out all the fields!`)
					}
					return { title, description }
				}
			})
			.then((result) => {
				const payLoad = {
					title: result.value.title,
					description: result.value.description
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
								title: 'Login Failed!',
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
		}
	},
	created() {
		if (!localStorage.token) {
			this.showingPage = 'login'
		} else {
			this.showingPage = 'kanban'
			this.showAllTask()
			// this.showAddForm()
		}
	},
  data() {
    return {
			showingPage: 'login',
			categories: ['Backlog', 'Product', 'Development', 'Done'],
			tasks: []
    };
  },
};
</script>

<style scoped>
</style>
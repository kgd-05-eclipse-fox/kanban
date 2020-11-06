<template>
	<div class="register">
		<form class='form'>
			<img src="../assets/img/kanban-logo.png" alt="" class="form-login">
			<div class='control' id="signIn">
				<button @click.prevent="toLogin" class="buttonSignIn btn btn-outline-light hvr-sweep-to-right text-info">Sign In</button>
				<button @click.prevent="toRegister" class="buttonSignUp btn btn-outline-dark hvr-sweep-to-left">Sign Up</button>
			</div>
			<div class='control block-cube block-input'>
				<input v-model="logEmail" name='Email' placeholder='Email' type='email'>
				<div class='bg-top'>
					<div class='bg-inner'></div>
				</div>
				<div class='bg-right'>
					<div class='bg-inner'></div>
				</div>
				<div class='bg'>
					<div class='bg-inner'></div>
				</div>
			</div>
			<div class='control block-cube block-input'>
				<input v-model="logPassword" name='password' placeholder='Password' type='password'>
				<div class='bg-top'>
					<div class='bg-inner'></div>
				</div>
				<div class='bg-right'>
					<div class='bg-inner'></div>
				</div>
				<div class='bg'>
					<div class='bg-inner'></div>
				</div>
			</div>
			<button @click.prevent="enterLogin" class='btn block-cube block-cube-hover' type='submit'>
				<div class='bg-top'>
					<div class='bg-inner'></div>
				</div>
				<div class='bg-right'>
					<div class='bg-inner'></div>
				</div>
				<div class='bg'>
					<div class='bg-inner'></div>
				</div>
				<div class='text'>
					Log In
				</div>
			</button>
			<br><br>
			<h4 class="text mb-3" id="or">or</h4>
		</form>
			<GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure" class="googleButton"></GoogleLogin>
	</div>
</template>

<script>
import axios from 'axios';
import GoogleLogin from 'vue-google-login';
import Swal from 'sweetalert2';
export default {
	name: 'LoginPage',
	components: {
		GoogleLogin
	},
	methods: {
		toLogin() {
			this.$emit('changePage', 'login')
		},
		toRegister() {
			this.$emit('changePage','register')
		},
		enterLogin() {
			let payload = {
				email: this.logEmail,
				password: this.logPassword
			}
			this.$emit('login', payload)
		},
		onSuccess(googleUser) {
			console.log(googleUser)
			const gToken = googleUser.getAuthResponse().id_token
			console.log(gToken)
			axios.post('http://localhost:3000/googleSignIn', {gToken})
			.then(({data}) => {
				localStorage.setItem('token', data.accessToken)
				this.$emit('changePage', 'HomePage')
			})
			.catch(err => {
				console.log(err)
			})
		},
		onFailure(err) {
			console.log(err)
		}
	},
	props: ['login'],
	data() {
		return {
			logEmail: '',
			logPassword: '',
			params: {
					client_id: "358498963778-71ock3dr38230rt7o30v1bn9251f64li.apps.googleusercontent.com"
			},
			renderParams: {
				width: 250,
				height: 50,
				longtitle: true
			}
		}
	}
}
</script>

<style>

</style>
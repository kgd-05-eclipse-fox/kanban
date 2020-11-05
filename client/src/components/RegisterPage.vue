<template>
	<div class="login">
		<form class='form'>
			<img src="../assets/img/kanban-logo.png" alt="" class="form-login">
			<div class='control' id="signIn">
				<button @click.prevent="toLogin" class="buttonSignIn btn btn-outline-light hvr-sweep-to-right">Sign In</button>
				<button @click.prevent="toRegister" class="buttonSignUp btn btn-outline-dark hvr-sweep-to-left text-info">Sign Up</button>
			</div>
			<div class='control block-cube block-input'>
				<input v-model="regEmail" name='email' placeholder='Email' type='email'>
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
				<input v-model="regPassword" name='password' placeholder='Password' type='password'>
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
			<button @click.prevent="registering" class='btn block-cube block-cube-hover' type='submit'>
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
					Sign Up
				</div>
			</button>
			<h4 class="text mb-3" id="or">or</h4>
			<button class='btn block-cube block-cube-hover' type='button'>
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
					Sign Up with Google
				</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'RegisterPage',
	methods: {
		toLogin() {
			this.$emit('changePage', 'login')
		},
		toRegister() {
			this.$emit('changePage','register')
		},
		registering() {
			let payload = {
				email: this.regEmail,
				password: this.regPassword
			}
			this.$emit('register', payload)
		}
	},
	props: ['register']
}
</script>

<style>

</style>
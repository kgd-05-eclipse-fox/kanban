<template>
	<div class="register">
		<form class='form'>
			<img src="../assets/img/kanban-logo.png" alt="" class="form-login">
			<div class='control' id="signIn">
				<button type="button" class="buttonSignIn btn btn-outline-light hvr-sweep-to-right text-info">Sign In</button>
				<button type="button" class="buttonSignUp btn btn-outline-dark hvr-sweep-to-left">Sign Up</button>
			</div>
			<div class='control block-cube block-input'>
				<input name='Email' placeholder='Email' type='email'>
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
				<input name='password' placeholder='Password' type='password'>
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
			<button class='btn block-cube block-cube-hover' type='submit'>
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
					Log In with Google
				</div>
		</form>
	</div>
</template>

<script>
export default {
	name: 'LoginPage'
}
</script>

<style>

</style>
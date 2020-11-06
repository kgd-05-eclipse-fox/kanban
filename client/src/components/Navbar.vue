<template>
	<nav>
		<div class="logo">
			<img src="../assets/img/kanban-logo.png" class="mt-1" width="100px">
		</div>
		<div id="profile" class="d-flex mx-1">
			<h4 class="mr-2 pt-1">Hello User!</h4>
			<a href="#" @click.prevent="showAddForm"> <img src="../assets/img/plus.svg" width="45px" class="mr-2 addicon"> </a>
			<button @click.prevent="logout" type="button" class="btn btn-outline-light">Logout</button>
		</div>
	</nav>
</template>
<script>
export default {
	name: 'Navbar',
	props: [],
	methods: {
		logout() {
			this.$emit('logout')
		},
		showAddForm() {
			this.$emit('showAddForm')
		}
	}
}
</script>

<style>

</style>
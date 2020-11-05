<template>
	<div>
		<nav>
			<div class="logo">
				<img src="../assets/img/kanban-logo.png" class="mt-1" width="100px">
			</div>
			<div id="profile" class="d-flex mx-1">
				<h4 class="mr-2 pt-1">Hello User!</h4>
				<a href="#"> <img src="../assets/img/plus.svg" width="45px" class="mr-2 addicon"> </a>
				<button type="button" class="btn btn-outline-light">Logout</button>
			</div>
		</nav>
		<div class="container-fluid mt-3">
			<div class="row mx-3">
				<Category 
					v-for="(cat, i) in categories" 
					:key="i" class="col-3"
					:category="cat">
					</Category>
			</div>
		</div>
	</div>
</template>

<script>
import Category from './Category'
export default {
	name: 'HomePage',
	components: {
		Category
	},
	props: ['categories'],
	
}
</script>

<style>

</style>
<template>
	<div>
		<Navbar 
			@logout="logout"
			@showAddForm="showAddForm">
		</Navbar>
		<div class="container-fluid mt-3">
			<div class="row mx-3">
				<Category 
					v-for="(cat, i) in categories" 
					:key="i" class="col-3"
					:category="cat"
					:tasks='tasks'
					:getDate="getDate"
					@updateTask='updateTask'
					@destroy="destroy">
					</Category>
			</div>
		</div>
	</div>
</template>

<script>
import Category from './Category'
import Navbar from './Navbar'
export default {
	name: 'HomePage',
	components: {
		Category,
		Navbar
	},
	props: ['categories', 'tasks', 'getDate'],
	methods: {
		destroy(id) {
			this.$emit('destroy', id)
		},
		logout() {
			this.$emit('logout')
		},
		showAddForm() {
			this.$emit('showAddForm')
		},
		updateTask(data) {
			console.log('di homepage')
			this.$emit('updateTask', data)
		}
 	}
}
</script>

<style>

</style>
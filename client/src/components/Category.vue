<template>
	<div class="card-transparent rounded">
		<div :class="category.toLowerCase()" class="rounded pb-3 pr-3">
			<div class="card-title text-center"><h3>{{category}}</h3></div>
			<div class="card-container hiddenScroll scrollbar-rare-wind px-3">
				<CategoryCard
					:tasks='tasks'
					:category='category'
					v-for="task in filterByCategory" 
					:key="task.id"
					:task="task"
					:getDate='getDate'
					@destroy='destroy'
					@updateTask='updateTask'
					@moveCategory='moveCategory'
					>
				</CategoryCard>
		</div>
	</div>
</template>

<script>
import CategoryCard from './CategoryCard'
export default {
	name: 'Category',
	components: {
		CategoryCard
	},
	props: ['category', 'tasks', 'getDate'],
	computed: {
		filterByCategory() {
			return this.tasks.filter(tasks => tasks.category == this.category.toLowerCase())
		}
	},
	methods: {
		destroy(id) {
			this.$emit('destroy', id)
		},
		updateTask(data) {
			this.$emit('updateTask', data)
		},
		moveCategory(payLoad) {
			console.log(payLoad, 'di category')
			this.$emit('moveCategory', payLoad)
		}
	}
}
</script>

<style>

</style>
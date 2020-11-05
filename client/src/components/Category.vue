<template>
	<div :class="category.toLowerCase()" class="card-transparent shadow-lg rounded pl-3 pr-2 pb-3">
		<div class="card-title text-center"><h3>{{category}}</h3></div>
		<div class="card-container scrollbar-rare-wind">
			<CategoryCard
				:tasks='tasks'
				:category='category'
				v-for="task in filterByCategory" 
				:key="task.id"
				:task="task"
				:getDate='getDate'
				@destroy='destroy'
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
		}
	}
}
</script>

<style>

</style>
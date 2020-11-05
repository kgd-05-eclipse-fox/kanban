<template>
	<div :class="category.toLowerCase()" class="card-transparent shadow-lg rounded pl-3 pr-2 pb-3">
		<div class="card-title text-center"><h3>{{category}}</h3></div>
		<div class="card-container scrollbar-rare-wind">
			<CategoryCard></CategoryCard>
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
	props: ['category']
}
</script>

<style>

</style>
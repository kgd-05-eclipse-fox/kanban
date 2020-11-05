<template>
	<div class="card-container scrollbar-rare-wind">
		<div class="card-transparent shadow-lg mb-2 rounded hiddenScroll">
			<div class="card-title">
			<strong>{{task.title}}</strong>
			<hr>
			</div>
			<div class="card-body">
				{{task.description}}
			</div>
			<footer class="blockquote-footer"><i class="fa fa-user" aria-hidden="true"></i>  {{task.User.email}}<br>
					<div class="crud-container row">
						<i class="fa fa-calendar col-8"><cite>  {{getDate(task.createdAt)}}</cite></i>
						<div class="crud-icons col-3 ml-4">
							<a href="#"><i class="fa fa-edit"></i></a>
							<a @click.prevent="destroy(task.id)" href="#"><i class="fa fa-trash"> </i></a>
						</div>
					</div>
				</footer>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CategoryCard',
	props: ['task', 'getDate'],
	methods: {
		destroy(id) {
			this.$emit('destroy', id)
		}
	}
}
</script>

<style>

</style>
<template>
<div>
	<div v-if="!isEdit" class="card-container hiddenScroll scrollbar-rare-wind" style="margin-right: -20vh">
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
						<i class="fa fa-calendar col-7"><cite>  {{getDate(task.createdAt)}}</cite></i>
						<div class="crud-icons col-1">
							<a @click="showEditForm" href="#"><i class="fa fa-edit col-1"></i></a>
							<a @click.prevent="destroy(task.id)" href="#"><i class="fa fa-trash mr-3"> </i></a>
						</div>
					</div>
			</footer>
		</div>
	</div>
	<EditForm
		:task="task"
		:isEdit='isEdit'
		@closeForm='closeForm'
		@updateTask='updateTask'
		v-else>
	</EditForm>
</div>
</template>

<script>
import EditForm from './EditForm'
export default {
	name: 'CategoryCard',
	props: ['task', 'getDate'],
	methods: {
		destroy(id) {
			this.$emit('destroy', id)
		},
		showEditForm() {
			this.isEdit = true
		},
		closeForm() {
			this.isEdit = false
		},
		updateTask(data) {
			console.log('di categorycard')
			this.$emit('updateTask', data)
		}
	},
	components: {
		EditForm
	},
	data() {
		return {
			isEdit: false
		}
	}
}
</script>

<style>

</style>
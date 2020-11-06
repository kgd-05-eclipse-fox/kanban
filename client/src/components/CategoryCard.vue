<template>
<div>
	<div class='drop-zone'>
		<div class='drag-el'>
			<div v-if="!isEdit" class="card-container hiddenScroll scrollbar-rare-wind" style="margin-right: -20vh">
				<div class="card-transparent shadow-lg mb-2 rounded hiddenScroll">
					<a v-if="task.category !== 'backlog'" href="#"><i class="fa fa-arrow-left"></i></a>
					<a v-if="task.category !== 'done'" href="#"><i class="fa fa-arrow-right"></i></a>
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
		</div>
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
		},
		startDrag: (evt, item) => {
      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
      evt.dataTransfer.setData('taskId', task.id)
		},
		onDrop (evt, list) {
      const itemID = evt.dataTransfer.getData('itemID')
      const item = this.items.find(task => task.id == itemID)
      item.list = list
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
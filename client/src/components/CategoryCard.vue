<template>
<div>
	<div class='drag-el'>
		<div v-if="!isEdit" class="card-container hiddenScroll scrollbar-rare-wind" style="margin-right: -20vh">
			<div class="card-transparent shadow-lg mb-2 rounded hiddenScroll">
				<div class="arrow row" >
				<a class="col-7 ml-1" @click.prevent="moveCategory('left')" v-if="task.category !== 'backlog' && this.user === task.User.email" href="#"><i class="fa fa-arrow-left" style="color: black;"></i></a>
				<a class="col-1 ml-2" @click.prevent="moveCategory('right')" v-if="task.category !== 'done' && this.user === task.User.email" href="#"><i class="fa fa-arrow-right" style="color: black;"></i></a>
				</div>
				<div class="card-title">
				<strong>{{task.title}}</strong>
				<hr>
				</div>
				<div class="card-body">
					{{task.description}}
				</div>
				<footer class="blockquote-footer"><i class="fa fa-user" aria-hidden="true"></i>  {{task.User.email}}<br>
						<div class="crud-container row">
							<i v-if="task.category !== 'done'" class="fa fa-calendar col-7"><cite>  {{getDate(task.createdAt)}}</cite></i><br>
							<i v-if="task.category == 'done'" class="fa fa-check col-7"><cite>  {{getDate(task.updatedAt)}}</cite></i>
							<div class="crud-icons col-1">
								<a v-if="this.user === task.User.email" @click.prevent="showEditForm" href="#"><i class="fa fa-edit col-1"></i></a>
								<a v-if="this.user === task.User.email" @click.prevent="destroy(task.id)" href="#"><i class="fa fa-trash mr-3"> </i></a>
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
</template>

<script>
import EditForm from './EditForm'
export default {
	name: 'CategoryCard',
	props: ['task', 'getDate', 'user'],
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
		},
		moveCategory(movement) {
			const payLoad = {
				id: this.task.id,
				category: this.task.category,
				movement
			}
			this.$emit('moveCategory', payLoad)
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
<template>
    <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="Add Task"
        @show="resetModal"
        @hidden="hiddenModal"
        @ok="handleOk"
    >
        <form ref="form" @submit.stop.prevent="handleSubmit">
            <b-form-group
                :state="titleState"
                label="Title"
                label-for="title-input"
                invalid-feedback="Please Complete all form"
            >
                <b-form-input
                id="title-input"
                v-model="title"
                :state="titleState"
                required
                ></b-form-input>
                
            </b-form-group>
            <b-form-group
                :state="descriptionState"
                label="Description"
                label-for="description-input"
                invalid-feedback="Please Complete all form"
            >
                <b-form-input
                id="description-input"
                v-model="description"
                :state="descriptionState"
                required
                ></b-form-input>
                
            </b-form-group>
        </form>
    </b-modal>
</template>

<script>
export default {
    name: 'AddTaskPage',
    data() {
      return {
        title: '',
        description: '',
        titleState: null,
        descriptionState: null,
        submittedNames: []
      }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.titleState = valid
        this.descriptionState = valid
        return valid
      },
      resetModal() {
        this.title = ''
        this.description = ''
        this.titleState = null
        this.descriptionState = null
      },
      hiddenModal() {
        this.resetModal()
        this.$emit('changePage', 'kanban-page')
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        } else {
            // Add The task
            const payload = {
                title: this.title,
                description: this.description
            }
            this.$emit('addTask', payload)
            this.$emit('changePage', 'kanban-page')
            this.$nextTick(() => {
              this.$bvModal.hide('modal-prevent-closing')
            })

        }
      }
    }
}
</script>
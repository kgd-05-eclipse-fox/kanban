<template>
  <div
    class="card-container hiddenScroll scrollbar-rare-wind"
    style="margin-right: -20vh"
  >
    <div class="card-transparent shadow-lg mb-2 rounded hiddenScroll">
      <form>
        <div class="row">
          <div class="card-title col-7 mr-4">
            <input
              v-model="title"
              type="text"
              class="rounded bordering"
              style="background-color: transparent"
            />
          </div>
          <a @click="closeForm" href="#"
            ><i
              class="fa fa-window-close"
              style="font-size: large; color: black"
            ></i
          ></a>
          <hr />
        </div>
        <div class="card-body">
          <input
            v-model="description"
            type="text"
            class="rounded bordering"
            style="background-color: transparent"
          />
        </div>
        <hr />
        <div class="row">
          <a @click.prevent="updateTask" href="#" class="saveButton col-2"
            ><i
              class="fa fa-save mr-3"
              style="font-size: large; text-align: right"
            ></i
          ></a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditForm",
  props: ["task", "isEdit"],
  data() {
    return {
      title: "",
      description: "",
    };
  },
  created() {
    (this.title = this.task.title), (this.description = this.task.description);
  },
  methods: {
    closeForm() {
      this.$emit("closeForm", true);
    },
    updateTask(data) {
      const payload = {
        title: this.title,
        description: this.description,
        id: this.task.id,
      };
      this.$emit("updateTask", payload);
    },
  },
};
</script>

<style>
</style>
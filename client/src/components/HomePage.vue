<template>
  <div>
    <Navbar @logout="logout" @showAddForm="showAddForm" :user="user"> </Navbar>
    <div class="container-fluid mt-3">
      <div class="row mx-3">
        <Category
          v-for="(cat, i) in categories"
          :key="i"
          class="col-3"
          :category="cat"
          :tasks="tasks"
          :getDate="getDate"
          :user="user"
          @updateTask="updateTask"
          @destroy="destroy"
          @moveCategory="moveCategory"
        >
        </Category>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "./Category";
import Navbar from "./Navbar";
export default {
  name: "HomePage",
  components: {
    Category,
    Navbar,
  },
  props: ["categories", "tasks", "getDate", "user"],
  methods: {
    destroy(id) {
      this.$emit("destroy", id);
    },
    logout() {
      this.$emit("logout");
    },
    showAddForm() {
      this.$emit("showAddForm");
    },
    updateTask(data) {
      this.$emit("updateTask", data);
    },
    moveCategory(payLoad) {
      this.$emit("moveCategory", payLoad);
    },
  },
};
</script>

<style>
</style>
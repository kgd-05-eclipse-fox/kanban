<template>
  <div>
    <LoginPage 
      v-if="pageName == 'login-page'">
    </LoginPage>

    <RegisterPage
      v-else-if="pageName == 'register-page'">
    </RegisterPage>  

    <KanbanPage
      v-else-if="pageName == 'kanban-page'">
    </KanbanPage>
  </div>
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import KanbanPage from './components/KanbanPage'
import NotFoundPage from './components/NotFoundPage'
export default {
  name: 'App',
  data() {
    return {
      pageName: 'kanban-page',
    };
  },
   components: {
     LoginPage, 
     RegisterPage,
     KanbanPage,
     NotFoundPage
   }
};
</script>

<style scoped>
</style>
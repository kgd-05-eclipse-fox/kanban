<template>
	<div>
		<LoginPage v-if="showingPage == 'login'">
		</LoginPage>
		<RegisterPage v-else-if="showingPage == 'register'"></RegisterPage>
		<HomePage
			:categories="categories"
			v-else>
		</HomePage>
	</div>
</template>

<script>
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import HomePage from './components/HomePage'
import axios from './config/axios'

export default {
		components: {
		LoginPage,
		RegisterPage,
		HomePage
	},
  data() {
    return {
			showingPage: 'login',
			categories: ['Backlog', 'Product', 'Development', 'Done'],
    };
  },
};
</script>

<style scoped>
</style>
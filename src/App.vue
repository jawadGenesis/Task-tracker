<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Button from "./components/Button.vue";

export default {
	name: "App",
	components: {
		Header,
		Button,
		Footer,
	},
	computed: {
		homepage() {
			if (this.$route.path === "/") {
				return true;
			} else {
				return false;
			}
		},
	},
	data() {
		return {
			showAddTask: false,
		};
	},
	methods: {
		toggleAddTask() {
			this.showAddTask = !this.showAddTask;
		},
	},
};
</script>

<template>
	<div class="container p-5 my-5 bg-light shadow-lg" style="width: 30rem">
		<div class="d-flex justify-content-between align-items-center py-3">
			<Header title="Task Tracker" />
			<Button
				v-show="homepage"
				:text="showAddTask ? 'Close' : 'Add Task'"
				color="green"
				@toggle-add-task="toggleAddTask"
			/>
		</div>

		<router-view :showAddTask="showAddTask"></router-view>
		<Footer />
	</div>
</template>

<script>
import Tasks from "../components/Tasks.vue";
import AddTask from "../components/AddTask.vue";

export default {
	name: "Home",
	props: {
		showAddTask: Boolean,
	},
	components: {
		Tasks,
		AddTask,
	},
	data() {
		return {
			tasks: [],
		};
	},
	methods: {
		async fetchData() {
			const res = await fetch("http://localhost:5000/task");
			const data = await res.json();
			return data;
		},
		async fetchTask(id) {
			const res = await fetch(`http://localhost:5000/task/${id}`);
			const data = await res.json();
			return data;
		},
		async addTask(newTask) {
			const res = await fetch("http://localhost:5000/task", {
				method: "Post",
				headers: {
					"Content-type": "Application/json",
				},
				body: JSON.stringify(newTask),
			});
			const data = await res.json();
			this.tasks = [...this.tasks, data];
		},
		async deleteTask(id) {
			if (confirm("confirm to delete")) {
				const res = await fetch(`http://localhost:5000/task/${id}`, {
					method: "DELETE",
				});
				res.status == 200
					? (this.tasks = this.tasks.filter((task) => task.id !== id))
					: alert("error in deleting");
			}
		},
		async toggleReminder(id) {
			const toggledTask = await this.fetchTask(id);
			const updTask = { ...toggledTask, reminder: !toggledTask.reminder };
			const res = await fetch(`http://localhost:5000/task/${id}`, {
				method: "PUT",
				headers: {
					"Content-type": "Application/json",
				},
				body: JSON.stringify(updTask),
			});
			res.status == 200
				? (this.tasks = this.tasks.map((task) =>
						task.id === id ? { ...task, reminder: !task.reminder } : task
				  ))
				: alert("error in toggling");
		},
	},
	async created() {
		this.tasks = await this.fetchData();
	},
};
</script>
<template>
	<div>
		<AddTask @add-task="addTask" v-show="showAddTask" />
		<Tasks
			@toggle-reminder="toggleReminder"
			@delete-task="deleteTask"
			:tasks="tasks"
		/>
	</div>
</template>

<template>
	<div
		@dblclick="this.$emit('toggle-reminder', task.id)"
		class="d-flex justify-content-between px-2 py-3 my-2 rounded text-white"
		:class="[task.reminder ? 'bg-success' : 'bg-secondary']"
	>
		<p>{{ task.text }}</p>
		<button
			class="btn btn-danger btn-sm"
			@click="this.$emit('delete-task', task.id)"
		>
			Remove
		</button>
	</div>
</template>

<script>
export default {
	name: "Task",
	props: {
		task: Object,
	},
};
</script>

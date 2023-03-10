<template>
	<button
		class="btn text-white"
		:style="{ background: color }"
		@click="handleClick()"
	>
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "Button",
	props: {
		text: String,
		color: String,
	},
	methods: {
		handleClick() {
			this.$emit('toggle-add-task');
		},
	},
};
</script>

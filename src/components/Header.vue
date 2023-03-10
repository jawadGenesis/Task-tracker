
<template>
	<header>
		<h4>{{ title }}</h4>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: {
		title: String,
	},
};
</script>

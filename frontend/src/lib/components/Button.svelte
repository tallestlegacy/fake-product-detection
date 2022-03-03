<script>
	export let onClick = () => {};
	export let type = '';
	export let color = '';
</script>

<button {type} on:click={onClick} style={`background-color : ${color}`}>
	<p>
		<slot />
	</p>
</button>

<style>
	button {
		border: none;
		cursor: pointer;
	}
</style>

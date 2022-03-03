<script>
	import '../global.css';
	import '../fonts.css';
	import Login from '$lib/components/Login.svelte';
	import { loggedIn } from '$lib/store';
</script>

<div class="body">
	{#if $loggedIn}
		<slot />
	{:else}
		<Login />
	{/if}
</div>

<style>
	.body {
		height: 100%;
	}
</style>

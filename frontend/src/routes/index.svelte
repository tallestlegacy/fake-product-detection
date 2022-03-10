<script>
	import Categories from '$lib/components/Categories.svelte';
	import ProductsList from '$lib/components/ProductsList.svelte';
</script>

<main>
	<!-- Categories left nav -->
	<Categories />
	<!-- Product List and Search bar -->
	<ProductsList />
</main>

<style>
	main {
		display: grid;
		grid-template-columns: auto 1fr;
		height: 100vh;
		overflow: hidden;
	}
</style>

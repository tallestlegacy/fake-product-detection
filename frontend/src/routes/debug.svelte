<script>
	import products from '$lib/dummyProducts.json';
	import Product from '$lib/components/Product.svelte';
</script>

<div class="products">
	{#each products as data}
		<Product {data} />
	{/each}
</div>

<style>
	.products {
		display: grid;
		gap: 1rem;
		padding: 1rem;
	}
</style>

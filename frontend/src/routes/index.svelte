<script context="module">
	export const load = async ({ fetch }) => {
		const products = await fetch('https://fakestoreapi.com/products').then((res) => res.json());

		return {
			props: {
				products
			}
		};
	};
</script>

<script>
	import Product from '$lib/components/Product.svelte';
	import { user } from '$lib/store';

	export let products = [];
</script>

<main>
	<h1>Welcome {$user.first_name}</h1>
	<div class="products">
		{#each products as product}
			<Product {...product} />
		{/each}
	</div>
</main>

<style>
	main {
		padding: 1rem;
		display: grid;
		gap: 3rem;
	}
	.products {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1rem;
	}
</style>

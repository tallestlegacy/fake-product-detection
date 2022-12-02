<script>
	import ProductData from '$lib/components/ProductData.svelte';
	import Review from '$lib/components/Review.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { page } from '$app/stores';
	import { getReviews, getProductData } from '$lib/queries';
	import { onMount } from 'svelte';

	export let id;

	onMount(async () => {
		//alert("Product is authentic")
	})
</script>

{#await getProductData(id)}
	<Loader />
{:then product}
	<ProductData data={product} />
{/await}

{#await getReviews(id)}
	<Loader />
{:then reviews}
	<div class="reviews">
		<h2>Reviews</h2>
		<div class="reviews">
			{#each reviews.docs as review}
				<Review data={review} />
			{/each}
		</div>
	</div>
{/await}

<style>
	.reviews {
		padding: 1rem;
	}
</style>

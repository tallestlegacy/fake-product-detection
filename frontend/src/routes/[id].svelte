<script context="module">
	import { getReviews, getProductData } from '$lib/queries';
	export const load = async ({ params, fetch }) => {
		const { id } = params;

		const reviews = await getReviews(id, fetch);
		const product = await getProductData(id, fetch);

		return {
			props: {
				reviews,
				product
			}
		};
	};
</script>

<script>
	import ProductData from '$lib/components/ProductData.svelte';
	import Review from '$lib/components/Review.svelte';

	export let reviews;
	export let product;
</script>

<ProductData data={product} />
<div class="reviews">
	<h2>Reviews</h2>
	<div class="reviews">
		{#each reviews.docs as review}
			<Review data={review} />
		{/each}
	</div>
</div>

<style>
	.reviews {
		padding: 1rem;
	}
</style>

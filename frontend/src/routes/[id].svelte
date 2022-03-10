<script context="module">
	import { getReviews, getProductData } from '$lib/queries';
	export const load = async ({ params }) => {
		const { id } = params;

		try {
			const reviews = await getReviews(id);
			const product = await getProductData(id);

			return {
				props: {
					reviews,
					product
				}
			};
		} catch (err) {
			return {
				props: {
					reviews: { docs: [] },
					product: {}
				}
			};
		}
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

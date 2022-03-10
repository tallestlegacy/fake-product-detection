<!-- <script context="module">
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
</script> -->
<script context="module">
	export const load = ({ params }) => {
		const { id } = params;

		return {
			props: {
				id
			}
		};
	};
</script>

<script>
	import ProductData from '$lib/components/ProductData.svelte';
	import Review from '$lib/components/Review.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { page } from '$app/stores';
	import { getReviews, getProductData } from '$lib/queries';

	export let id;
</script>

{#await getProductData(id)}
	<Loader />
{:then product}
	<ProductData data={product} />
	<pre>
		{JSON.stringify(product)}
	</pre>
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

<script>
	export let title = '';
	export let price = 0;
	export let description = '';
	export let category = '';
	export let image = '';
	export let rating = {
		rate: 0,
		count: 0
	};
</script>

<div class="product">
	<div class="image">
		<img src={image} alt="product" />
	</div>
	<div class="details">
		<span class="title">{title}</span>
		<span class="price">{price}</span>
	</div>
</div>

<style>
	.product {
		display: flex;
		background-color: white;
		gap: 0.5rem;
		border-radius: 1rem;
	}
	.details {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		padding: 1rem;
		color: grey;
	}
	.title {
		color: black;
		margin-top: auto;
	}

	.image {
		width: 300px;
		aspect-ratio: 1;
		padding: 1rem;

		flex: 1;
	}
	img {
		height: 100%;
		width: 100%;
		object-fit: contain;
		border-radius: 1rem 1rem 0 0;
	}
</style>

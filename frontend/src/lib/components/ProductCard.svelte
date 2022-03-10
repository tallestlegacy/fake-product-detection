<script>
	export let data = {};
	$: currency = data.app_sale_price_currency;
	$: src = data.product_main_image_url;
	$: title = data.product_title;
</script>

<a href="/{data.product_id}">
	<div class="product">
		<div class="image">
			<img {src} alt="" />
		</div>
		<div class="details">
			<span class="title">
				{title.substring(0, 45)} ...
			</span>
			<span class="id">
				{data.product_id}
			</span>
			<span class="details-url">
				<a href={data.product_detail_url}>details</a>
			</span>
			<span class="price">
				Price : {currency}
				{data.app_sale_price}
			</span>
		</div>
	</div>
</a>

<style>
	a {
		text-decoration: none;
	}
	.product {
		display: grid;
		grid-template-columns: 1fr 1fr;

		height: 150px;
		overflow: hidden;
		aspect-ratio: 2;

		font-size: 12px;
		color: #777;
		background-color: white;
		border-radius: 8px;
		transition: ease 0.2s;
		box-shadow: 0 1px 6px #0003;
	}

	.product:hover {
		box-shadow: 0 6px 12px #0003;
		transform: translateY(-1px);
	}
	.details {
		padding: 8px;
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.title {
		margin-top: auto;
		color: black;
		font-weight: 600;
	}

	.image {
		display: grid;
		place-items: center;
		border-radius: 8px 0 0 8px;
		overflow: hidden;
	}
	.product img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
</style>

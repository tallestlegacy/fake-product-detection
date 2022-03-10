<script>
	export let data;
</script>

<div class="review">
	<span class="title">
		{data.title}
	</span>
	<span class="text">
		{data.text}
	</span>
	<span class="rating">
		{data.rating}
	</span>
	<span class="name">
		{data.customerName}
	</span>
</div>

<style>
	.review {
		font-size: 12px;
		display: grid;
		gap: 0.5rem;
		padding: 0.5rem;
		text-align: justify;
	}

	.title {
		color: var(--blue);
		font-size: 16px;
		font-family: SerifFontBold, serif;
	}

	.name,
	.rating {
		font-weight: 600;
	}
</style>

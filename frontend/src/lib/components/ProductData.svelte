<script>
	export let data;
</script>

<div class="hero" style="background-image: url({data.product_main_image_url});">
	<div class="title">
		<h1>
			{data.product_title}
		</h1>
	</div>
</div>

<div class="details">
	{#if data.feature_bullets}
		<h2>Features</h2>
		<ol class="feature-bullets">
			{#each data.feature_bullets as text}
				<li>{text}</li>
			{/each}
		</ol>
	{/if}
</div>

<style>
	.hero {
		min-height: 50vh;
		height: fit-content;
		position: relative;
		display: grid;
		z-index: 0;
		background-color: red;
		background-size: cover;
	}

	.title {
		height: 100%;
		width: 100%;
		background-color: #0009;
		display: grid;
		place-items: center;
	}

	.title h1 {
		z-index: 1;
		font-size: 32px;
		padding: 1rem;
		margin-top: auto;
		color: white;
	}

	.details {
		font-size: 12px;
		padding: 1rem;
	}

	.feature-bullets {
		display: grid;
		gap: 0.5rem;
	}
</style>

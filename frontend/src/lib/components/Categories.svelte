<script>
	import categories from '$lib/categories.json';
	import { categoryID } from '$lib/store';
</script>

<div class="categories">
	<div class="heading">
		<h2>Categories</h2>
	</div>
	{#each categories as category}
		<button
			class="category {category.id === $categoryID ? 'selected' : ''}"
			on:click={() => {
				categoryID.set(category.id);
			}}
		>
			<span class="name">
				{category.name}
			</span>
		</button>
	{/each}
</div>

<style>
	.categories {
		position: relative;
		z-index: 0;
		display: grid;
		gap: 4px;
		width: fit-content;
		background-color: var(--blue);
		color: aliceblue;
		overflow: auto;
	}

	.heading {
		display: flex;
		align-items: center;
		padding: 0.2rem 0.5rem;

		background-color: inherit;
		border-bottom: solid 2px var(--gold);
		position: sticky;
		top: 0;
		z-index: 3;
	}

	.categories::-webkit-scrollbar {
		background-color: var(--blue);
		width: 0.5rem;
	}
	.categories::-webkit-scrollbar-thumb {
		background-color: var(--gold);
	}

	.category {
		padding: 4px;
		margin: 0 0.5rem;
		border-radius: none;
		background: none;
		border: none;
		text-align: left;
		color: white;

		font-size: 12px;
		z-index: 1;
	}

	.selected {
		color: var(--gold);
		text-decoration: underline;
	}
</style>

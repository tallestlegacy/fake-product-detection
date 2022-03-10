<script>
	// @ts-ignore
	import categories from '$lib/categories.json';
	import { categoryID } from '$lib/store';
	import { searchKeyword } from '$lib/search';

	let productList = [];
	let keyword = '';

	const handleSearch = async () => {
		productList = await searchKeyword({ categoryID: $categoryID, keyword });
	};
</script>

<main>
	<div class="categories">
		<h2>Categories</h2>
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
	<div class="data">
		<header>
			<form on:submit|preventDefault={handleSearch}>
				<input type="text" name="search-text" bind:value={keyword} placeholder="input keyword" />
				<button type="submit">Search</button>
			</form>
		</header>
		<div class="products">
			<pre>
				{JSON.stringify(productList, null, 2)}
			</pre>
		</div>
	</div>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: auto 1fr;
		height: 100vh;
		overflow: hidden;
	}
	.categories,
	.data {
		overflow: auto;
	}
	.categories {
		position: relative;
		z-index: 0;
		display: grid;
		gap: 4px;
		width: 300px;
		background-color: var(--blue);
		color: aliceblue;
	}

	.categories h2 {
		border-bottom: solid 2px var(--gold);
		background-color: inherit;
		position: sticky;
		z-index: 3;
		top: 0;

		padding: 1rem;
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
		z-index: 1;
	}

	.selected {
		color: var(--gold);
		text-decoration: underline;
	}

	.data {
		position: relative;
	}

	.data header {
		position: sticky;
		top: 0;
		background-color: #fff5;
		backdrop-filter: blur(20px);
		padding: 1.4rem;
		display: flex;
		place-items: center;
	}
	.data header form {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 4px;
	}
</style>

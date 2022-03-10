<script>
	import { SyncLoader } from 'svelte-loading-spinners';

	import { categoryID } from '$lib/store';
	import { searchKeyword } from '$lib/queries';

	import Product from '$lib/components/Product.svelte';

	let productList = [];
	let keyword = '';
	let loading = false;

	const handleSearch = async () => {
		loading = true;
		productList = await searchKeyword({ categoryID: $categoryID, keyword });
		loading = false;
	};
</script>

<div class="data">
	<header>
		<form on:submit|preventDefault={handleSearch}>
			<input type="search" name="search-text" bind:value={keyword} placeholder="input keyword" />
		</form>
	</header>
	<div class="products">
		{#if loading}
			<SyncLoader color="#0a2749" size="60" />
		{:else if productList.length == 0}
			<h2>Enter single word as keyword</h2>
		{:else}
			{#each productList as data}
				<Product {data} />
			{/each}
		{/if}
	</div>
</div>

<style>
	.data {
		position: relative;
		overflow: auto;
		z-index: 0;
	}

	.data header {
		height: 3.2rem;
		position: sticky;
		top: 0;
		z-index: 3;
		background-color: #fff9;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		display: flex;
		place-items: center;
	}
	.data header form {
		display: flex;
		width: 100%;
		justify-content: center;
		gap: 4px;
	}

	input[type='search'] {
		padding: 0.5rem;
	}

	.products {
		padding: 1rem;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: 1rem;
		z-index: 1;
	}
</style>

<script>
	import data from '$lib/productData.json';
	import ProductData from '$lib/components/ProductData.svelte';
</script>

<ProductData {data} />

<pre>
{JSON.stringify(data, null, 2)}
</pre>

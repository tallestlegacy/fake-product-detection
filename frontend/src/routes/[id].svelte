<script context="module">
	export const load = async ({ params, fetch }) => {
		const { id } = params;

		return {
			props: {
				id
			}
		};
	};
</script>

<script>
	export let id;
	export let data;
</script>

<h1>
	Product ID => {id}
</h1>

<pre>
{JSON.stringify(data, null, 2)}
</pre>

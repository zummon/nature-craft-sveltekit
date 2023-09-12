<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div class="max-w-5xl mx-auto">
	<div class="text-2xl mb-4 px-4 sm:px-8">{data.date}</div>
	<div class="prose prose-img:mx-auto max-w-none px-4 sm:px-8">
		<svelte:component this={data.content} />
	</div>
</div>

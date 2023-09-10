<script>
	export let data;
	let { date, description, image, title, tags } = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div
	class="prose prose-invert prose-img:rounded-xl prose-img:mx-auto prose-img:object-contain prose-img:max-h-96 prose-img:max-w-full max-w-none px-4 sm:px-8 mb-8"
>
	<svelte:component this={data.content} />
</div>

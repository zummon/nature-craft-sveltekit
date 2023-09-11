<script>
	export let data;

	let { title, description } = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="mb-10 lg:mb-20">
	<div class="container mx-auto mb-10">
		<div class="flex gap-6 snap-x overflow-x-auto">
			{#each data.blogs as { title, description, image, slug }, index (index)}
				<div class="shadow-lg snap-center">
					<div
						class="h-52 bg-cover"
						style:background-image="url({image.src})"
					/>
					<div class="p-8">
						<h3 class="mb-4 text-2xl">{title}</h3>
						<p class="mb-4">
							{description}
						</p>
						<a
							href="/blog/{slug}"
							class="inline-block bg-black text-white px-7 py-2">Read</a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

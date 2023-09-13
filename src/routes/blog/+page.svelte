<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div class="max-w-5xl mx-auto">
	<div class="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
		{#each data.blogs as item, index (index)}
			<div
				class="shadow-lg flex flex-col justify-between bg-white"
				class:bg-zinc-900={item.invert}
				class:text-white={item.invert}
			>
				<div
					class="h-60 bg-cover bg-center flex"
					style:background-image="url({item.image.src})"
				>
					<div class="my-4 mr-4 ml-auto">
						<span
							class="py-0.5 px-2 text-sm {item.invert
								? 'bg-zinc-900'
								: 'bg-white'}">{item.date}</span
						>
					</div>
				</div>
				<div class="p-8">
					<h3 class="mb-4 text-2xl">{item.title}</h3>
					<p class="mb-4">
						{item.description}
					</p>
					<a
						class="inline-block px-7 py-2 {item.invert
							? 'bg-white text-black'
							: 'bg-zinc-900 text-white'}"
						href="/blog/{item.slug}">Read</a
					>
				</div>
			</div>
		{/each}
	</div>
</div>

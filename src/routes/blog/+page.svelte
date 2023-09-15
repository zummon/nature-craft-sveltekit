<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div class="max-w-6xl mx-auto">
	<div class="grid gap-6 md:grid-cols-3 sm:grid-cols-2 lg:gap-9">
		{#each data.blogs as item, index (index)}
			<div
				class="shadow-lg flex flex-col {item.invert
					? 'bg-zinc-900 text-white'
					: 'bg-white'}"
			>
				<div
					class="h-72 bg-cover bg-center flex"
					style:background-image="url({item.image.src})"
				>
					<div class="my-4 mr-4 ml-auto">
						<span
							class="py-0.5 px-2 text-sm shadow {item.invert
								? 'bg-zinc-900'
								: 'bg-white'}">{item.date}</span
						>
					</div>
				</div>
				<div class="p-8 flex flex-col gap-4 flex-1 justify-between">
					<h3 class="text-2xl">{item.title}</h3>
					<p class="">
						{item.description}
					</p>
					<div class="">
						<a
							class="inline-block px-7 py-2 shadow {item.invert
								? 'bg-white text-black'
								: 'bg-zinc-900 text-white'}"
							href="/blog/{item.slug}">Read</a
						>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

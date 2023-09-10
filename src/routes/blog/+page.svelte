<script>
	export let data;
</script>

<div class="max-w-5xl mx-auto">
	<div class="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
		{#each data.blogs as { title, description, image, slug }, index (index)}
			<div class="shadow-lg">
				<div class="h-52" style:background-image="url({image.src})" />
				<div class="p-8">
					<h3 class="mb-4">{title}</h3>
					<p class="mb-4">
						{description}
					</p>
					<a
						href="/blog/{slug}"
						class="inline-block bg-black text-white mr-5 mb-5 px-7 py-2">Read</a
					>
				</div>
			</div>
		{/each}
	</div>
</div>

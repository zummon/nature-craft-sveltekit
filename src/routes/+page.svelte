<script>
</script>

<div class="mb-10 lg:mb-20">
	<div class="container mx-auto mb-10">
		<div class="flex gap-6">
			{#each [1, 2, 3, 4] as item, index (index)}
				<div class="md:w-1/3 sm:w-1/2 shadow-lg">
					<div class="h-52" style:background-image="url()" />
					<div class="p-8">
						<h3 class="mb-4">title</h3>
						<p class="mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Reprehenderit, odit?
						</p>
						<a
							href="/#"
							class="inline-block bg-black text-white mr-5 mb-5 px-7 py-2"
							>Read</a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
</svelte:head>

<div class="max-w-6xl mx-auto mb-10">
	<div class="flex gap-6 overflow-x-auto snap-x pb-8 lg:gap-9">
		{#each data.blogs as item, index (index)}
			<div
				class="shadow-lg flex flex-col min-w-[360px] snap-center {item.invert
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

<div class="mb-10">
	<div class="flex items-center lg:w-2/3 shadow-xl bg-white">
		<div
			class="w-1/3 h-80 lg:h-96 bg-cover bg-center"
			style:background-image="url(https://images.pexels.com/photos/6137913/pexels-photo-6137913.jpeg?w=640)"
		/>
		<div class="w-2/3 p-4 lg:p-8">
			<h2
				class="text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8 scroll-m-24"
				id="about"
			>
				About
			</h2>
			<p class="text-xl mb-4 lg:mb-8">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id doloremque
				accusantium at cupiditate quaerat temporibus?
			</p>
			<p class="">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
		</div>
	</div>
</div>

<div class="mb-10">
	<div
		class="flex items-center lg:w-2/3 shadow-xl ml-auto bg-zinc-900 text-white"
	>
		<div class="w-2/3 p-4 lg:p-8">
			<h2
				class="text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8 scroll-m-24"
				id="donate"
			>
				Donate
			</h2>
			<p class="text-xl mb-4 lg:mb-8">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id doloremque
				accusantium at cupiditate quaerat temporibus?
			</p>
			<a class="inline-block bg-white text-black px-7 py-2" href="/#"
				>Buy me a coffee</a
			>
		</div>
		<div
			class="w-1/3 h-80 lg:h-96 bg-cover bg-center"
			style:background-image="url(https://images.pexels.com/photos/6207392/pexels-photo-6207392.jpeg?w=640)"
		/>
	</div>
</div>

<div class="">
	<div class="flex items-center lg:w-1/2 shadow-xl mx-auto bg-white">
		<div class="p-4 lg:p-8 text-center">
			<h2 class="text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8">Other</h2>
			<p class="text-xl mb-4 lg:mb-8">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas harum quo
				doloremque sequi quis laborum delectus animi soluta. Minima doloribus
				ullam omnis sit veniam itaque beatae aspernatur illo odit dolore?
			</p>
			<p class="italic">Lorem ipsum dolor sit amet.</p>
		</div>
	</div>
</div>

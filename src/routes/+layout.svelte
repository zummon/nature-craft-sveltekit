<script>
	import "../app.css";
	import { page } from "$app/stores";
</script>

<div
	class="py-20 lg:py-40 bg-zinc-800 text-zinc-50 bg-cover bg-fixed bg-blend-soft-light"
	style:background-image="url(https://images.pexels.com/photos/6102217/pexels-photo-6102217.jpeg?w=1280)"
>
	<div class="max-w-5xl mx-auto">
		<div class="ml-auto lg:w-2/3">
			<h1 class="text-white mb-5 text-4xl lg:text-5xl xl:text-6xl">title</h1>
			<p class="text-xl">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sint
				quibusdam corrupti excepturi tempora nihil, soluta fuga molestiae et
				asperiores accusamus doloremque, temporibus, provident ipsam commodi
				pariatur. Maiores, unde impedit.
			</p>
			<div class="">
				{#if $page.url.pathname !== "/"}
					<a href="/" class="">
						<span class="sr-only">uikit icon home</span>
						<svg
							class=""
							width="40"
							height="40"
							viewBox="0 0 20 20"
							fill="currentColor"
							><polygon
								points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"
							/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5" /><polygon
								points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"
							/></svg
						>
					</a>
				{/if}
				<a href="/blog" class="">Blogs</a>
				<a href="/#about" class="">About</a>
				<a href="/#donate" class="">Donate</a>
			</div>
		</div>
	</div>
</div>

<div class="py-10 lg:py-20 bg-zinc-50">
	<slot />
</div>

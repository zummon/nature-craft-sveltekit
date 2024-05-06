<script>
	import "../app.css";

	export let data;
</script>
<!-- Photo by Laura James: https://www.pexels.com/photo/wooden-reindeer-placed-in-greenery-composition-6102217/ -->
<div
	class="bg-zinc-800 text-zinc-50 bg-cover bg-fixed bg-blend-soft-light bg-center px-6 lg:px-0 {data.pathname == '/'
		? 'py-20 lg:py-40'
		: 'py-10 lg:py-20'}"
	style="background-image: url(https://i.imgur.com/tuhsYYx.jpeg)"
>
	<div class="max-w-5xl mx-auto">
		<div class="ml-auto lg:w-2/3">
			<h1 class="text-white mb-5 text-4xl lg:text-5xl xl:text-6xl">
				{data.title}
			</h1>
			<p class="text-2xl mb-5">{data.description}</p>
			<div class="flex flex-wrap gap-5 items-center">
				{#if data.pathname !== "/"}
					<div class="">
						<!-- uikit icons -->
						<a href="/" class="">
							<span class="sr-only">home icon</span>
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
					</div>
				{/if}
				<div class="">
					<a
						href="/blog"
						class="inline-block bg-white text-black px-10 py-4 shadow-md hover:bg-zinc-100 focus:bg-zinc-100"
						>Blogs</a
					>
				</div>
				<div class="">
					<a
						href="/#about"
						class="inline-block border border-zinc-400 px-7 py-2 hover:border-white focus:border-white"
						>About</a
					>
				</div>
				<div class="">
					<a
						href="/#donate"
						class="inline-block hover:underline focus:underline underline-offset-4"
						>Donate</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="py-10 lg:py-20 bg-zinc-50">
	<slot />
</div>

<!-- Photo by Mathias Reding: https://www.pexels.com/photo/decorative-cage-with-pine-cones-5483826/ -->
<div
	class="py-10 lg:py-20 bg-zinc-800 text-zinc-50 bg-cover bg-fixed bg-blend-soft-light bg-center"
	style="background-image: url(https://i.imgur.com/eVz3Y8v.jpg)"
>
	<div class="max-w-5xl mx-auto">
		<div
			class="divide-y sm:divide-x sm:divide-y-0 grid md:grid-cols-3 sm:grid-cols-2 divide-white divide-opacity-20"
		>
			<div class="p-8">
				<h3 class="text-2xl mb-4">List</h3>
				<ul class="list-inside list-disc space-y-2">
					<li class="">
						<a
							class="hover:underline focus:underline underline-offset-4"
							href="/">Lorem, ipsum.</a
						>
					</li>
					<li class="">
						<a
							class="hover:underline focus:underline underline-offset-4"
							href="/">Lorem, ipsum.</a
						>
					</li>
					<li class="">
						<a
							class="hover:underline focus:underline underline-offset-4"
							href="/">Lorem, ipsum.</a
						>
					</li>
					<li class="">
						<a
							class="hover:underline focus:underline underline-offset-4"
							href="/">Lorem, ipsum.</a
						>
					</li>
				</ul>
			</div>

			<div class="p-8">
				<h3 class="text-2xl mb-4">Paragraph</h3>
				<p class="">
					<a class="" href="https://github.com/zummon" target="_blank"
						>Made by zummon (Teerapat Anantarattanachai)</a
					>
				</p>
			</div>

			<div class="p-8 text-white">
				<!-- uikit icons -->
				<a
					href="https://www.facebook.com/zummonSpace/" target="_blank"
					class="mr-3 mb-3 rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-40 inline-block"
				>
					<span class="sr-only">facebook icon</span>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
						><path
							d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"
						/></svg
					>
				</a>
				<a
					href="https://instagram.com/" target="_blank"
					class="mr-3 mb-3 rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-40 inline-block"
				>
					<span class="sr-only">instagram icon</span>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
						><path
							d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"
						/><circle cx="14.87" cy="5.26" r="1.09" /><path
							d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"
						/></svg
					>
				</a>
				<a
					href="https://pinterest.com/" target="_blank"
					class="mr-3 mb-3 rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-40 inline-block"
				>
					<span class="sr-only">pinterest icon</span>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
						><path
							d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"
						/></svg
					>
				</a>
				<a
					href="https://twitter.com/" target="_blank"
					class="mr-3 mb-3 rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-40 inline-block"
				>
					<span class="sr-only">twitter icon</span>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
						><path
							d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"
						/></svg
					>
				</a>
				<a
					href="https://youtube.com/channel/UCSqTXx-ChE0J3qlr84xcgrA" target="_blank"
					class="mr-3 mb-3 rounded-full p-2 bg-white bg-opacity-20 hover:bg-opacity-40 inline-block"
				>
					<span class="sr-only">youtube icon</span>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor"
						><path
							d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"
						/></svg
					>
				</a>
			</div>
		</div>
	</div>
</div>

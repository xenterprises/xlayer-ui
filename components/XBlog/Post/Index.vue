<template>
	<main class="bg-white">
		<header
			class="w-full h-[460px] xl:h-[537px] bg-no-repeat bg-cover bg-center bg-blend-darken relative"
			:style="`background-image: url('${content.headerImage}?format=webp')`"
		>
			<div
				class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"
			></div>
			<div
				class="absolute top-20 left-1/2 px-4 mx-auto w-full max-w-screen-xl -translate-x-1/2 xl:top-1/2 xl:-translate-y-1/2 xl:px-0"
			>
				<h1
					class="mb-4 max-w-6xl text-4xl font-extrabold leading-none text-white sm:text-5xl lg:text-7xl px-4"
				>
					{{ content.title }}
				</h1>
				<!-- <p class="text-lg font-normal text-gray-300">
                    Before going digital, you might scribbling down some ideas in a
                    sketchbook.
                </p> -->
			</div>
		</header>
		<div
			class="flex flex-col relative z-20 justify-between p-8 -mt-36 mx-4 max-w-screen-xl bg-white rounded-xl xl:-mt-32 xl:p-9 xl:mx-auto mb-5 shadow-sm"
		>
			<div class="absolute right-0 top-0 p-3">
				<a
					href="/"
					class="flex justify-center items-center font-medium text-lg text-slate-500 hover:text-blue-600"
				>
					<img src="/back.svg" class="w-4 h-4 text-sky-400" />
					Back to articles</a
				>
			</div>
			<div class="flex">
				<article
					class="xl:w-[828px] w-full max-w-none format format-sm sm:format-base lg:format-lg format-blue"
				>
					<div
						class="flex flex-col lg:flex-row justify-between lg:items-center"
					>
						<div
							class="flex items-center space-x-3 text-gray-500 text-base mb-2 lg:mb-0"
						>
							<section
								class="prose md:prose-xl lg:prose-xl prose-stone"
								v-html="content.body"
							></section>
						</div>
					</div>
				</article>

				<aside class="hidden xl:block" aria-labelledby="sidebar-label">
					<div class="xl:w-[336px] sticky top-6">
						<h3 id="sidebar-label" class="sr-only">Sidebar</h3>
					</div>
				</aside>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	props: ["content"],
};
</script>	

<style lang="scss" scoped>
</style>
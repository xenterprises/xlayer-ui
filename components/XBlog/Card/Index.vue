<template>
  <section
    class="border border-gray-300 rounded-xl bg-cover relative aspect-[9/12] overflow-hidden"
    :style="`background-image: url('${thumbnail}?format=webp')`"
  >
    <article
      class="p-4 h-full bg-gradient-to-b from-transparent to-gray-900 text-gray-200 flex flex-col justify-end"
    >
      <nuxt-link :to="link">
        <h3 class="font-black">
          {{ heading }}
        </h3>
        <div class="text-sm pt-2 text-gray-200 line-clamp-3">
          <slot />
        </div>
      </nuxt-link>
      <div class="pt-4 flex justify-end">
        <nuxt-link
          :to="link"
          class="bg-gray-500 bg-opacity-40 rounded-lg px-5 py-2 text-xs uppercase hover:bg-gray-400 hover:bg-opacity-40"
          >Read More</nuxt-link
        >
      </div>
    </article>
  </section>
</template>

<script setup>
const props = defineProps({
  link: String,
  heading: String,
  thumbnail: String,
});
</script>

<style lang="scss" scoped></style>

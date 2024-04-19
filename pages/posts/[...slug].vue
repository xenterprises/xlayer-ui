<template>
  <XBlogPost :content="content" />
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const builder = await $fetch(`https://cdn.builder.io/api/v2/content/posts/`, {
  query: {
    apiKey: config.public.builderioKey,
    limit: 1,
    'query.data.slug': route.params.slug[0],
  },
});
const content = computed(() => {
  return builder.results[0].data;
});
useHead({
  title: builder.results[0].data.title,
  meta: [
    {
      name: 'description',
      content: builder.results[0].data.description,
    },
  ],
});
</script>

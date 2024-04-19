<template>
  <div>
    <XBlogCardWrapper>
      <XBlogCard
        :link="`/posts/${post.data.slug}`"
        :heading="post.name"
        :thumbnail="post.data.thumbnail"
        v-for="(post, index) in posts"
        :key="index"
      >
        {{ post.data.summary }}
      </XBlogCard>
    </XBlogCardWrapper>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
const posts = ref([]);
const AllPosts = ref([]);
const props = defineProps({
  search: String,
});

const route = useRoute();
const config = useRuntimeConfig();

const { data, pending, error, refresh } = await useFetch(
  'https://cdn.builder.io/api/v2/content/posts',
  {
    query: {
      apiKey: config.public.builderioKey,
      offset: 0,
      fields: 'id,name,data.slug,data.summary,data.thumbnail',
    },
  }
).then((res) => {
  posts.value = res.data.value.results;
  AllPosts.value = res.data.value.results;
  return res;
});
onMounted(() => {
  window.addEventListener('child-method-called', filters);
});
function filters(search) {
  if (!search.detail) {
    posts.value = AllPosts.value;
  } else {
    const post = AllPosts.value.filter((post) =>
      post.name.toLowerCase().includes(search.detail.toLowerCase())
    );
    posts.value = post;
  }
}
</script>

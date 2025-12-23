<template>
  <UContainer v-if="post">
    <UPageHeader
      :title="post.name"
      :description="post.description"
    />
    <p>Abmetric Index: [{{ post.abmetricIndex.toFixed(2) }}]</p>
  </UContainer>
  <UContainer v-else>
    <h1>sorry</h1>
    <p>we couldn't find that entry</p>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const pageId = computed(() => "numbers-" + route.path);
const { data: post } = await useAsyncData(pageId, () => queryCollection("numbers")
  .path(route.path)
  .first());

useSeoMeta({
  title: post.value?.name,
  ogTitle: post.value?.name,
  description: post.value?.description,
  ogDescription: post.value?.description,
});

</script>

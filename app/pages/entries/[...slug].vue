<template>
  <UContainer v-if="post">
    <h1>{{ post.name }}</h1>
    <p><b>Description:</b> {{ post.description }}</p>
    <ul>
      <li>Abmetric Index: [{{ post.abmetricIndex.toFixed(2) }}]</li>
    </ul>
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

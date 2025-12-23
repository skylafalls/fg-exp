<template>
  <div v-if="post">
    <h1>{{ post.name }}</h1>
    <p><b>Description:</b> {{ post.description }}</p>
    <ul>
      <li>Abmetric Index: [{{ post.abmetricIndex }}]</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { capitalize } from "vue";

const route = useRoute();
// eslint-disable-next-line @stylistic/quotes
const pageId = computed(() => 'numbers-' + route.path);
const { data: post } = await useAsyncData(pageId, () => queryCollection("numbers")
  .where("name", "=", capitalize(route.path.slice(route.path.lastIndexOf("/") + 1)))
  .first());

useSeoMeta({
  title: post.value?.name,
  ogTitle: post.value?.name,
  description: post.value?.description,
  ogDescription: post.value?.description,
});

</script>

<template>
  <UContainer>
    <UPageHeader
      title="Entries"
      description="Here's a list of all the entries we got."
    />
    <UPageList divide>
      <li>
        <ul v-for="entry in entries" :key="entry.name">
          <NuxtLink :to="`/${entry.stem}`">{{ entry.name }}</NuxtLink>
        </ul>
      </li>
    </UPageList>
  </UContainer>
</template>

<script lang="ts" setup>
const { data: entries } = await useAsyncData("entries", () => queryCollection("numbers").order("abmetricIndex", "DESC").all());
</script>

<style>

</style>

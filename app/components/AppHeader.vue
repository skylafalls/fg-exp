<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { docsCharts, normalCharts, specializedCharts } from "~/store/charts";

const itemsLeft = ref([
  {
    label: "Charts",
    icon: "i-lucide-book-open",
    to: "/charts",
    children: normalCharts,
  },
  {
    label: "Documentation",
    icon: "i-lucide-book",
    to: "/docs",
    children: docsCharts,
  },
  {
    label: "Specialized Charts",
    icon: "i-lucide-flask-conical",
    to: "/charts/specialized",
    children: specializedCharts,
  },
] satisfies NavigationMenuItem[]);

const itemsRight = ref([
  {
    label: "GitHub",
    icon: "i-simple-icons-github",
    to: "https://github.com/skylafalls/fg-exp",
    target: "_blank",
  },
  {
    label: "About",
    icon: "i-lucide-circle-help",
    to: "/about",
  },
] satisfies NavigationMenuItem[]);

const { header } = useAppConfig();
</script>

<template>
  <UHeader>
    <template #left>
      <UNavigationMenu :items="itemsLeft"/>
    </template>
    <template #right>
      <UColorModeButton v-if="header?.colorMode" />
      <UNavigationMenu :items="itemsRight"/>
    </template>
  </UHeader>
</template>

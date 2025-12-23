<script setup lang="ts">
import { normalCharts } from "~/store/charts";

const charts = ref(normalCharts);
</script>

<template>
  <UContainer>
    <UPageHeader
      title="Charts"
      description="The spreadsheet offers plenty of charts you can explore. Check some of them out here."
    />
    <UPageList divide>
      <UPageCard
        v-for="(chart, index) in charts"
        :key="index"
        variant="ghost"
        :to="chart.to"
      >
        <template #body>
          <UPageFeature :title="chart.label" :description="chart.description" :icon="chart.icon"/>
        </template>
      </UPageCard>
    </UPageList>
  </UContainer>
</template>

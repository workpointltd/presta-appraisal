<script setup lang="ts">
defineProps<{
  cardInfo: { title: string; value: number; days: number; growth?: number };
}>();
</script>

<template>
  <section
    class="space-y-3 rounded border border-light-gray-03 bg-white px-6 py-5"
  >
    <div>
      <h1 class="text-sm text-dark-gray-04">{{ cardInfo.title }}</h1>
    </div>

    <div>
      <h2 class="text-xl text-blue-shade-01">{{ cardInfo.value }}</h2>
    </div>

    <div class="flex justify-between">
      <h3 class="light-gray-04 text-xs">Last {{ cardInfo.days }} Days</h3>
      <h3
        class="text-xs text-green-dark"
        v-if="cardInfo.growth"
      >
        +{{ cardInfo.growth }}%
      </h3>
    </div>
  </section>
</template>

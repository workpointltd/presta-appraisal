<script setup lang="ts">
defineProps<{
  cardData: {
    title: string;
    value: { name: string; color?: string };
    info: string;
  };
}>();
</script>

<template>
  <section
    class="w-full space-y-2 rounded border border-light-gray-03 bg-white px-6 py-5"
  >
    <div>
      <h1 class="text-sm text-light-gray-04">{{ cardData.title }}</h1>
    </div>

    <div>
      <h2
        class="text-xl"
        :class="
          cardData.value.color ? cardData.value.color : 'text-blue-shade-01'
        "
      >
        {{ cardData.value.name }}
      </h2>
    </div>

    <div>
      <h3 class="text-xs text-light-gray-04">{{ cardData.info }}</h3>
    </div>
  </section>
</template>

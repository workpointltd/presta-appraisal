<script setup lang="ts">
import { ChevronDownIcon, EllipsisVerticalIcon } from "@heroicons/vue/24/solid";
import Cards from "@/modules/overview/components/Overview/Cards.vue";

const cardsInfo = [
  {
    title: "Loan Approval Requests",
    value: 100,
    days: 30,
  },
  {
    title: "Onboarding Requests",
    value: 20,
    days: 30,
    growth: 7,
  },
  {
    title: "Customer Edit Requests",
    value: 35,
    days: 30,
    growth: 30,
  },
];
</script>

<template>
  <section class="space-y-5 py-5">
    <div class="flex justify-between">
      <div>
        <h1 class="text-lg text-dark-shade-01">Appraisal Overview</h1>
        <h2 class="text-xs text-dark-gray-04">
          A Summary For Recent Appraisal Activity
        </h2>
      </div>

      <div class="flex h-full space-x-4">
        <button
          class="flex space-x-2 rounded border border-light-gray-03 bg-white px-2 py-1 text-xs"
        >
          <span>This Month</span>
          <ChevronDownIcon class="h-4 w-4" />
        </button>
        <button class="rounded border border-light-gray-03 bg-white py-1">
          <EllipsisVerticalIcon class="h-4 w-4" />
        </button>
      </div>
    </div>

    <div class="flex space-x-4">
      <Cards
        v-for="(cardInfo, idx) in cardsInfo"
        :cardInfo="cardInfo"
        :key="idx"
      />
    </div>
  </section>
</template>

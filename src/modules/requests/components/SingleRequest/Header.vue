<script setup lang="ts">
import TopCard from "@/modules/requests/components/TopCard.vue";
import { useRequests } from "@/modules/requests/composables/useRequests";
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";

const { request, fetchRequest } = useRequests();
const slug = useRoute().params.slug;
const cardData = ref();
const status = ref<string | null>(null);

onBeforeMount(async () => {
  if (typeof slug === "string") await fetchRequest(slug);
  cardData.value = [
    {
      title: request.value!.requestType,
      value: {
        name: request.value!.description.amount,
        color: "text-green-dark",
      },
      info: "Product: Okoa, Term: 1 Month",
    },
    {
      title: "Action Required",
      value: { name: request.value!.step },
      info: "Next Step: Approver Level 2",
    },
    {
      title: "Initiator Details",
      value: { name: request.value!.applicant.name },
      info: "Request Date: " + request.value!.dateTime.date,
    },
  ];
  status.value = request.value!.status;
});
</script>

<template>
  <section class="space-y-4 py-5">
    <div class="flex justify-between">
      <div>
        <h1 class="text-xl text-dark-shade-01">
          Request ID - #100 (New Loan Request)
        </h1>
        <h3 class="text-xs text-dark-gray-04">A Summary For Request #100</h3>
      </div>
      <div class="flex h-full space-x-4 text-dark-shade-01">
        <button class="btn">Go Back</button>
        <button
          class="btn capitalize text-white"
          :class="{
            'bg-green-dark': status === 'approved',
            'bg-warning-medium': status === 'pending',
            'bg-red-dark': status === 'denied',
          }"
        >
          {{ status }}
        </button>
      </div>
    </div>

    <div class="flex space-x-4">
      <TopCard
        v-for="(data, idx) in cardData"
        :key="idx"
        :cardData="data"
      />
    </div>
  </section>
</template>

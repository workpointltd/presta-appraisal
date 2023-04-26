<script setup lang="ts">
import TopCard from "@/modules/requests/components/TopCard.vue";
import CustomBtn from "@/modules/overview/components/CustomBtn.vue";

//temporary, for css only
const status = "Pending Approval";
const cardData = [
  {
    title: "New Loan Request",
    value: { name: "3,500 KES", color: "text-green-dark" },
    info: "Product: Okoa, Term: 1 Month",
  },
  {
    title: "Action Required",
    value: { name: "Approver Level 1" },
    info: "Next Step: Approver Level 2",
  },
  {
    title: "Initiator Details",
    value: { name: "Initiator Name" },
    info: "Request Date: DD/MM/YYYY",
  },
];
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
          class="btn text-white"
          :class="{
            'bg-green-dark': status === 'Approved',
            'bg-red-dark': status === 'Declined',
            'bg-warning-medium': status === 'Pending Approval',
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

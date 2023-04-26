<script setup lang="ts">
const appDetails = [
  { name: "Name", value: "First & Last Name" },
  { name: "Contact", value: "254 701 234 567" },
  { name: "Branch", value: "HQ" },
  { name: "Member No", value: "1234567890" },
];

const loanDetails = [
  { name: "Product", value: "Okoa" },
  { name: "Duration", value: "1 Month" },
  { name: "Principle (Requested Amount)", value: "3,500.00" },
  { name: "Interest (10%)", value: "888.85" },
  { name: "Total Fees", value: "15,566.67" },
  { name: "Customer Loan Total", value: "19,955,55" },
];
</script>

<template>
  <section class="flex space-x-4">
    <div class="card-div">
      <div class="space-y-1">
        <h1 class="text-xl text-dark-shade-01">Applicant Details</h1>
        <h3 class="text-xs text-dark-gray-04">
          Details For <span class="font-medium">Applicant's Name</span>
        </h3>
      </div>

      <div class="card-div-data">
        <div
          class="flex justify-between py-3"
          v-for="(detail, idx) in appDetails"
          :key="idx"
        >
          <span>{{ detail.name }} : </span> <span>{{ detail.value }}</span>
        </div>
      </div>
    </div>

    <div class="card-div">
      <div class="space-y-1">
        <h1 class="text-xl text-dark-shade-01">New Loan Request</h1>
        <h3 class="text-xs text-dark-gray-04">
          Details For The Requested Change
        </h3>
      </div>

      <div class="card-div-data">
        <div
          class="flex justify-between py-3"
          v-for="(detail, idx) in loanDetails"
          :key="idx"
          :class="
            idx == loanDetails.length - 1 &&
            'border-t border-light-gray-03 font-medium'
          "
        >
          <span>{{ detail.name }} : </span> <span>{{ detail.value }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

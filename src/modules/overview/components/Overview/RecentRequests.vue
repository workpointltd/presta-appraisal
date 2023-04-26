<script setup lang="ts">
import Table from "@components/Table.vue";
import RequestTable from "@/modules/overview/components/RequestTable.vue";
const tableData = {
  title: "My Recent Requests",
  desc: "A List of your Recent Appraisal Requests",
  method: "Actions",
  data: [
    {
      requestID: "#100",
      dateTime: { date: "DD/MM/YYYY", time: "HH:MM" },
      requestType: "New Loan",
      description: { product: "Loan Product", amount: "1,000 KES" },
      step: "Approver Level 1",
      applicant: { name: "First & Last Name", phoneNumber: "254 710 234 524" },
    },
    {
      requestID: "#101",
      dateTime: { date: "DD/MM/YYYY", time: "HH:MM" },
      requestType: "Withdrawal",
      description: { product: "Capital Withdrawal", amount: "10,000 KES" },
      step: "Approver Level 2",
      applicant: { name: "First & Last Name", phoneNumber: "254 710 234 524" },
    },
  ],
};
</script>

<template>
  <RequestTable :tableData="tableData" />
</template>

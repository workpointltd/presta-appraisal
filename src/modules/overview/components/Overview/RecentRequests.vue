<script setup lang="ts">
import Table from "@components/Table.vue";
import RequestTable from "@/modules/overview/components/RequestTable.vue";
import { useRequests } from "@/modules/requests/composables/useRequests";
import { onBeforeMount, ref } from "vue";

const { requests, fetchRequests } = useRequests();
const tableData = ref({
  title: "My Recent Requests",
  desc: "A List of your Recent Appraisal Requests",
  method: "Actions",
  data: requests.value,
});

onBeforeMount(async () => {
  await fetchRequests(["pending"]);
  tableData.value.data = requests.value;
});
</script>

<template>
  <RequestTable :tableData="tableData" />
</template>

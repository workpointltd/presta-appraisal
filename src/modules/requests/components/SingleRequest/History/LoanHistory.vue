<script setup lang="ts">
import Table from "@components/Table.vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import Pagination from "@components/Pagination.vue";

const thead = [
  "ID",
  "Loan Date",
  "Requested",
  "Fees",
  "Total",
  "Bal B/F",
  "Repayable",
  "Status",
];

const tableData = [
  {
    id: "1",
    LoanDate: "DD/MM/YYYY",
    Requested: 50,
    Fees: 5,
    Total: 55,
    Bal: 0,
    Repayable: 55,
    Status: "Paid",
  },
  {
    id: "2",
    LoanDate: "DD/MM/YYYY",
    Requested: 50,
    Fees: 5,
    Total: 55,
    Bal: 0,
    Repayable: 55,
    Status: "Not Paid",
  },
  {
    id: "3",
    LoanDate: "DD/MM/YYYY",
    Requested: 500,
    Fees: 50,
    Total: 550,
    Bal: 0,
    Repayable: 550,
    Status: "Paid",
  },
  {
    id: "4",
    LoanDate: "DD/MM/YYYY",
    Requested: 50,
    Fees: 5,
    Total: 55,
    Bal: 0,
    Repayable: 55,
    Status: "Paid",
  },
  {
    id: "5",
    LoanDate: "DD/MM/YYYY",
    Requested: 50,
    Fees: 5,
    Total: 55,
    Bal: 0,
    Repayable: 55,
    Status: "Not Paid",
  },
];
</script>

<template>
  <Table :thead="thead">
    <tr
      class="border-b border-b-light-gray-03"
      v-for="(data, idx) in tableData"
    >
      <td class="py-2">{{ data.id }}</td>
      <td class="py-2">{{ data.LoanDate }}</td>
      <td class="py-2 text-dark-tint-03">
        {{ data.Requested }}
      </td>
      <td class="py-2">{{ data.Fees }}</td>
      <td class="py-2">{{ data.Total }}</td>
      <td class="py-2">{{ data.Bal }}</td>
      <td class="py-2">{{ data.Repayable }}</td>
      <td
        class="py-2 text-[10px] font-medium uppercase"
        :class="
          data.Status.toLowerCase() === 'paid'
            ? 'text-green-dark-02'
            : 'text-red-dark'
        "
      >
        {{ data.Status }}
      </td>
    </tr>
  </Table>
  <Pagination />
</template>

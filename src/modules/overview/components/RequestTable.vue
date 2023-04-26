<script setup lang="ts">
import CustomBtn from "@/modules/overview/components/CustomBtn.vue";
import {
  ChevronDownIcon,
  CheckIcon,
  XMarkIcon,
  EyeIcon,
} from "@heroicons/vue/24/outline";
import { TableEntry } from "@/types";
import Table from "@components/Table.vue";

const props = defineProps<{
  tableData: {
    title: string;
    desc: string;
    method: string;
    data: TableEntry[];
  };
}>();

const thead = [
  "Request ID",
  "Date & Time",
  "Request Type",
  "Description",
  "Step",
  "Applicant",
  props.tableData.method,
];
</script>

<template>
  <section class="py-5">
    <div class="space-y-6 rounded bg-white px-7 py-5">
      <div class="space-y-2">
        <div class="flex justify-between">
          <div class="flex items-center space-x-4">
            <h1 class="dark-shade-01 text-xl">{{ tableData.title }}</h1>
            <a
              href="#"
              class="text-xs text-dark-tint-02 underline"
              >View All</a
            >
          </div>
          <div>
            <input
              class="rounded-l border border-light-gray-03 p-1 text-xs placeholder:text-dark-shade-01"
              type="text"
              name="search"
              id="search"
              placeholder="Search Here"
            />
            <button
              class="rounded-r border border-light-gray-03 bg-light-gray-03 px-1 py-1 text-xs"
            >
              Go
            </button>
          </div>
        </div>
        <div>
          <h3 class="text-sm text-dark-gray-04">{{ tableData.desc }}</h3>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <CustomBtn
            ><span>Select Request Type</span>
            <ChevronDownIcon class="h-4 w-4" />
          </CustomBtn>
        </div>
        <div class="flex space-x-2">
          <CustomBtn
            ><span>Show/Hide</span> <ChevronDownIcon class="h-4 w-4" />
          </CustomBtn>
          <CustomBtn
            ><span>This Month</span> <ChevronDownIcon class="h-4 w-4" />
          </CustomBtn>
        </div>
      </div>
      <div
        id="table"
        class="py-2"
      >
        <Table :thead="thead">
          <tr
            class="border-b border-b-light-gray-03"
            v-for="(item, idx) in tableData.data"
            :key="idx"
          >
            <td class="py-2">{{ item.requestID }}</td>
            <td class="py-2">
              {{ item.dateTime.date }}<br />
              {{ item.dateTime.time }}
            </td>
            <td class="py-2 text-dark-tint-01">
              <span class="rounded border px-2 py-0.5 text-2xs font-medium"
                >{{ item.requestType }}
              </span>
            </td>
            <td class="py-2">
              {{ item.description.product }}<br />
              {{ item.description.amount }}
            </td>
            <td class="py-2">{{ item.step }}</td>
            <td class="py-2">
              {{ item.applicant.name }} <br />
              {{ item.applicant.phoneNumber }}
            </td>
            <td
              class="space-x-1 py-2"
              v-if="tableData.method === 'Actions'"
            >
              <button
                class="rounded border border-light-gray-03 p-1 text-green-dark hover:bg-gray-50"
              >
                <CheckIcon class="h-3 w-3" />
              </button>

              <button
                class="rounded border border-light-gray-03 p-1 text-red-dark hover:bg-gray-50"
              >
                <XMarkIcon class="h-3 w-3" />
              </button>

              <button
                class="rounded border border-light-gray-03 p-1 text-dark-shade-02 hover:bg-gray-50"
              >
                <EyeIcon class="h-3 w-3" />
              </button>
            </td>
            <td
              class="space-x-2 py-2"
              v-if="tableData.method === 'Status'"
            >
              <span
                class="rounded px-3 py-1 text-2xs"
                :class="{
                  'bg-green-light text-green-dark': item.status === 'Approved',
                  'bg-red-light text-red-dark': item.status === 'Declined',
                }"
                >{{ item.status }}</span
              >
              <button
                class="rounded border border-light-gray-03 p-1 text-dark-shade-02"
              >
                <EyeIcon class="h-3 w-3" />
              </button>
            </td>
          </tr>
        </Table>
      </div>
      <div class="flex justify-between text-xs text-light-gray-05">
        <div class="flex items-center space-x-4">
          <span class="flex items-center font-bold">
            Show
            <CustomBtn class="mx-2"
              ><span>05</span><ChevronDownIcon class="h-5 w-5" />
            </CustomBtn>
            Entries
          </span>
          <span>Showing 1 to 5 of 20 entries</span>
        </div>
        <div class="flex space-x-1">
          <button class="rounded border-0 bg-dark-gray-06 px-2 py-1 text-xs">
            Previous
          </button>
          <button class="rounded border-0 bg-dark-gray-06 px-2 py-1 text-xs">
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

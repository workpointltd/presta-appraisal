<script setup lang="ts">
import CustomBtn from "@/modules/overview/components/CustomBtn.vue";
import {
  ChevronDownIcon,
  CheckIcon,
  XMarkIcon,
  EyeIcon,
} from "@heroicons/vue/24/outline";
import Table from "@components/Table.vue";
import Pagination from "@components/Pagination.vue";
import { RequestData } from "@/modules/requests/types";
import { onMounted, ref } from "vue";
import router from "@/router";
import ModalRequest from "@components/ModalRequest.vue";

const props = defineProps<{
  tableData: {
    title: string;
    desc: string;
    method: string;
    data: RequestData[] | null;
  };
}>();

const isOpen = ref<boolean>(false);
const modalDetails = ref({
  status: "",
  id: "",
});

function onClick(status: string, id: string) {
  modalDetails.value.status = status;
  modalDetails.value.id = id;
  isOpen.value = true;
}

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
        <Table
          :thead="thead"
          v-if="tableData.data"
        >
          <tr
            @click="router.push(`requests/${item.requestID}`)"
            class="border-b border-b-light-gray-03 hover:cursor-pointer hover:bg-gray-50"
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
                @click="e => e.stopPropagation()"
                class="rounded border border-light-gray-03 p-1 text-green-dark hover:bg-gray-50"
              >
                <CheckIcon
                  class="h-3 w-3"
                  @click="onClick('Approve', item.requestID)"
                />
              </button>

              <button
                @click="e => e.stopPropagation()"
                class="rounded border border-light-gray-03 p-1 text-red-dark hover:bg-gray-50"
              >
                <XMarkIcon
                  class="h-3 w-3"
                  @click="onClick('Decline', item.requestID)"
                />
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
                class="rounded px-3 py-1 text-2xs capitalize"
                :class="{
                  'bg-green-light text-green-dark':
                    item.status.toLowerCase() === 'approved',
                  'bg-red-light text-red-dark':
                    item.status.toLowerCase() === 'declined',
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
      <Pagination />
    </div>
  </section>
  <ModalRequest
    @modal-status="status => (isOpen = status)"
    :isOpen="isOpen"
    :modalDetails="modalDetails"
  />
</template>

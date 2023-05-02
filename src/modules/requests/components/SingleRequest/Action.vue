<script setup lang="ts">
import ModalRequest from "@components/ModalRequest.vue";
import { ref } from "vue";
const isOpen = ref(false);

const modalDetails = ref({
  status: "",
  id: "",
});

function onClick(status: string, id: string) {
  modalDetails.value.status = status;
  modalDetails.value.id = id;
  isOpen.value = true;
}
</script>

<template>
  <section class="mt-5">
    <div class="flex justify-between rounded bg-white px-6 py-9">
      <div class="space-y-2">
        <h1 class="text-xl text-dark-shade-01">Action Required</h1>
        <h3 class="text-xs text-dark-gray-04">
          To Approve Or Decline Click On One Of The Buttons.
        </h3>
      </div>
      <div class="flex items-center space-x-4">
        <button
          class="bg-green-dark px-16 py-1 text-xs text-white"
          @click="onClick('Approve', '#100')"
        >
          Approve
        </button>
        <button
          class="bg-red-dark px-16 py-1 text-xs text-white"
          @click="onClick('Decline', '#100')"
        >
          Decline
        </button>
      </div>
    </div>
  </section>
  <ModalRequest
    @modal-status="status => (isOpen = status)"
    :isOpen="isOpen"
    :modalDetails="modalDetails"
  />
</template>

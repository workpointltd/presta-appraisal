<script setup lang="ts">
import { Dialog, DialogPanel } from "@headlessui/vue";
import { onMounted, ref, toRef } from "vue";

const props = defineProps<{
  isOpen: boolean;
  modalDetails: {
    status: string;
    id: string;
  };
}>();

const emit = defineEmits(["modalStatus"]);

const open = toRef(props, "isOpen");
function closeModal() {
  emit("modalStatus", false);
}
</script>

<template>
  <section>
    <Dialog
      as="div"
      :open="open"
      class="z-50"
      @close="closeModal()"
    >
      <div class="fixed inset-0 bg-dark-shade-01/30" />
      <div class="fixed inset-0 mx-auto flex items-center justify-center">
        <DialogPanel
          class="w-full max-w-xl space-y-14 overflow-hidden rounded bg-white px-6 py-8 text-dark-shade-01"
        >
          <div>
            <h1 class="text-xl">
              {{ modalDetails.status }} Request {{ modalDetails.id }}
            </h1>
            <h3 class="text-xs text-light-gray-04">
              This Will {{ modalDetails.status }} The Pending Request
            </h3>
          </div>

          <div class="space-y-4">
            <div>
              <label
                for="textarea"
                class="font-medium"
                >Remarks <span class="font-normal">(Optional)</span></label
              >
              <textarea
                placeholder="Remarks"
                name="textarea"
                class="h-32 w-full resize-none rounded border border-dark-gray-05 p-2 focus-visible:border-dark-gray-05"
              />
            </div>
            <div class="flex w-full space-x-4">
              <button
                @click="closeModal()"
                class="w-full rounded border border-dark-gray-05 py-2 text-sm"
              >
                Cancel
              </button>
              <button
                class="w-full rounded py-2 text-sm text-white"
                :class="{
                  'bg-green-dark': modalDetails.status == 'Approve',
                  'bg-red-dark': modalDetails.status == 'Decline',
                }"
              >
                {{ modalDetails.status }}
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  </section>
</template>

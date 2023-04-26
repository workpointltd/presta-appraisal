<script setup lang="ts">
import CustomBtn from "@/modules/overview/components/CustomBtn.vue";
import {
  ChevronDownIcon,
  CheckIcon,
  XMarkIcon,
  EyeIcon,
} from "@heroicons/vue/24/outline";
import { TableEntry } from "@/types";

defineProps<{
  thead: string[];
}>();
</script>

<template>
  <table class="w-full text-dark-shade-01">
    <thead class="border-b border-b-dark-gray-05 text-left text-xs font-bold">
      <tr>
        <th
          class="py-2"
          v-for="(header, idx) in thead"
          :key="`th-${idx}`"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody class="text-xs">
      <slot />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="my-5 flex justify-between text-xs text-light-gray-05">
    <div class="flex items-center space-x-4">
      <span class="flex items-center font-bold">
        Show
        <button class="btn mx-2 flex items-center">
          <span class="font-normal text-dark-shade-01">05</span
          ><ChevronDownIcon class="h-4 w-4" />
        </button>
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
</template>

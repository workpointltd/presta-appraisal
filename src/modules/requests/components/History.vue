<script setup lang="ts">
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/outline";
import LoanHistory from "@/modules/requests/components/SingleRequest/History/LoanHistory.vue";
const selectedOption = ref(1);

const options = ["Appraisal History", "Loan History", "Notes", "Votes"];
</script>

<template>
  <section class="my-5 space-y-4 rounded bg-white px-6 py-5 text-dark-shade-01">
    <div class="flex justify-between">
      <div class="space-y-2">
        <h1 class="dark-shade-01 text-xl">Applicant's History</h1>
        <h3 class="text-xs text-dark-gray-04">
          The History of <span class="font-medium">{Applicant's Name}</span>
        </h3>
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
      <button
        class="px-3 py-2 text-xs duration-300"
        v-for="(option, idx) in options"
        :key="idx"
        :class="
          idx === selectedOption &&
          'border-b border-dark-tint-03 text-dark-tint-03'
        "
      >
        {{ option }}
      </button>
      <hr class="-mt-[1px]" />
    </div>

    <div class="space-y-6">
      <div class="flex justify-between">
        <h1 class="text-lg">{{ options[selectedOption] }}</h1>
        <div class="flex space-x-2">
          <button class="btn">
            Export <ChevronDownIcon class="h-4 w-4" />
          </button>
          <button class="btn">
            Show / Hide <ChevronDownIcon class="h-4 w-4" />
          </button>
          <button class="btn">
            This Month <ChevronDownIcon class="h-4 w-4" />
          </button>
        </div>
      </div>
      <div>
        <LoanHistory v-if="selectedOption === 1" />
      </div>
    </div>
  </section>
</template>

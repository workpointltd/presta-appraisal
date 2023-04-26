<script setup lang="ts">
import SideNavBar from "@components/SideNavBar.vue";
import TopNavBar from "@components/TopNavBar.vue";
</script>

<template>
  <div class="flex">
    <div class="hidden w-1/6 md:block">
      <SideNavBar />
    </div>
    <div class="flex-1">
      <TopNavBar />
      <main class="px-4">
        <router-view> </router-view>
      </main>
    </div>
  </div>
</template>

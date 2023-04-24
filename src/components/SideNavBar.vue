<script setup lang="ts">
const navItems = [
  {
    title: "Home",
    links: [
      {
        name: "Overview",
        href: "#",
      },
      {
        name: "My Activity",
        href: "#",
      },
    ],
  },
  {
    title: "Requests",
    links: [
      {
        name: "All Requests",
        href: "#",
      },
      {
        name: "Reviewed Requests",
        href: "#",
      },
    ],
  },
  {
    title: "Settings",
    links: [
      {
        name: "Appraisal Settings",
        href: "#",
      },
      {
        name: "External Approvers",
        href: "#",
      },
      {
        name: "Mpesa Paybills",
        href: "#",
      },
    ],
  },
];
</script>

<template>
  <section class="fixed h-screen w-1/6 bg-dark-gray-01 text-white">
    <div class="px-8 py-10">
      <div><h1 class="text-xl">Appraisal</h1></div>

      <div class="my-12 space-y-10 md:my-14 lg:my-20">
        <div
          class="space-y-6"
          v-for="(item, idx) in navItems"
          :key="idx"
        >
          <h2 class="text-xs font-bold">{{ item.title }}</h2>
          <div class="space-y-4">
            <div
              class="text-xs"
              v-for="link in item.links"
            >
              <a :href="link.href">{{ link.name }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 h-6 w-full bg-dark-gray-02"></div>
  </section>
</template>

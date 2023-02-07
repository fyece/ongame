<template>
  <nav class="w-full">
    <ul class="flex flex-col gap-2">
      <NavItem v-for="nav in navItems" :key="nav.link" :link="nav.link">{{
        nav.name
      }}</NavItem>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import NavItem from "./NavItem.vue";

const navItems = [
  {
    name: "Games",
    link: "/games",
  },
  {
    name: "Developers",
    link: "/devs",
  },
  {
    name: "Genres",
    link: "/genres",
  },
];
</script>

<style scoped></style>

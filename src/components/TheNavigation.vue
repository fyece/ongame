<template>
  <nav class="w-full">
    <ul class="flex md:flex-col gap-2 justify-end md:justify-center">
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
    link: "/developers",
  },
  {
    name: "Genres",
    link: "/genres",
  },
];
</script>

<style scoped></style>

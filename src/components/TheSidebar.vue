<template>
  <div
    class="flex flex-col h-screen items-center gap-16 px-3 py-16 bg-black sticky top-0 left-0"
  >
    <TheLogo />
    <TheNavigation />
  </div>
</template>

<script setup lang="ts">
import TheLogo from "./TheLogo.vue";
import TheNavigation from "./TheNavigation.vue";
</script>

<style scoped></style>

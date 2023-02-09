<template>
  <div class="list gap-x-8 gap-y-6 sm:sm:gap-y-12 mx-auto sm:mx-0">
    <DeveloperCard v-for="dev in developers" :key="dev.id" :developer="dev" />
  </div>
</template>

<script setup lang="ts">
import type { Developer } from "@/types/types";
import DeveloperCard from "./DeveloperCard.vue";

interface Props {
  developers: Developer[];
}

defineProps<Props>();
</script>

<style scoped>
.list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}
</style>

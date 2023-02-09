<template>
  <div class="list gap-x-8 gap-y-6 sm:sm:gap-y-12 mx-auto sm:mx-0">
    <GenreCard v-for="genre in genres" :key="genre.id" :genre="genre" />
  </div>
</template>

<script setup lang="ts">
import type { Genre } from "@/types/types";
import GenreCard from "./GenreCard.vue";

interface Props {
  genres: Genre[];
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

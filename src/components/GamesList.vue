<template>
  <div class="list mx-auto sm:mx-0">
    <GameCard v-for="game in games" :key="game.id" :game="game" />
  </div>
</template>

<script setup lang="ts">
import GameCard from "./GameCard.vue";
import type { Game } from "@/types/types";

interface Props {
  games: Game[];
}

defineProps<Props>();
</script>

<style scoped>
.list {
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
</style>

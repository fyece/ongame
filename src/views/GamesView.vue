<template>
  <ContentLayout>
    <div class="flex flex-col gap-12">
      <h1 class="text-5xl font-semibold">Games</h1>
      <GamesList :games="games" />
    </div>
  </ContentLayout>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useGameStore } from "@/stores/game";
import ContentLayout from "@/components/ContentLayout.vue";
import GamesList from "@/components/GamesList.vue";

const gameStore = useGameStore();
const games = computed(() => gameStore.games);

onMounted(() => {
	gameStore.getGames();
})
</script>

<style scoped></style>

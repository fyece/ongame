<template>
  <ContentLayout>
    <div class="flex flex-col gap-12">
      <h1 class="text-5xl font-semibold">Games</h1>
      <GamesList v-if="games" :games="games" />
      <BaseLoader v-if="isLoading" />
      <button
        v-if="games.length"
        @click="loadMore"
        class="px-4 py-2 rounded-lg bg-neutral-800"
      >
        Load more
      </button>
    </div>
  </ContentLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useGameStore } from "@/stores/game";
import ContentLayout from "@/components/ContentLayout.vue";
import GamesList from "@/components/GamesList.vue";
import BaseLoader from "@/components/BaseLoader.vue";

const store = useGameStore();
const games = computed(() => store.games);
const isLoading = computed(() => store.isLoading);
const page = ref(1);

const loadMore = () => {
  page.value++;
  store.getGames({page: page.value});
};

onMounted(() => {
  store.clearGames();
  store.getGames({});
});
</script>

<style scoped></style>

<template>
  <ContentLayout>
    <div class="flex flex-col gap-12">
      <h1 v-if="!isGenreInfoLoading" class="text-5xl font-semibold">{{ genreInfo?.name }} games</h1>
      <GamesList v-if="genreGames && !isGenreInfoLoading" :games="genreGames" />
      <BaseLoader v-if="isGamesLoading" />
      <button
        v-if="genreGames.length && !isGamesLoading && page < pagesCount"
        @click="loadMore"
        class="px-4 py-2 rounded-lg bg-neutral-800"
      >
        Load more
      </button>
    </div>
  </ContentLayout>
</template>

<script setup lang="ts">
import BaseLoader from "@/components/BaseLoader.vue";
import ContentLayout from "@/components/ContentLayout.vue";
import GamesList from "@/components/GamesList.vue";
import { useGameStore } from "@/stores/game";
import { useGenreStore } from "@/stores/genre";
import { ref, computed, onMounted, onUpdated, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const genreId = ref(String(useRoute().params["id"]));

const gameStore = useGameStore();
const genreStore = useGenreStore();

const genreInfo = computed(() => genreStore.genreInfo);
const genreGames = computed(() => gameStore.games);
const isGamesLoading = computed(() => gameStore.isLoading);
const isGenreInfoLoading = computed(() => genreStore.isLoading);
const pagesCount = computed(() => gameStore.pagesCount)
const page = ref(1)

const loadMore = () => {
  page.value++
  gameStore.getGames({ page: page.value ,genres: genreId.value });
};

onMounted(() => {
  gameStore.clearGames();
  genreStore.getGenreById(Number(genreId.value));
  gameStore.getGames({ genres: genreId.value ?? "" });
});

onUpdated(() => {
  genreId.value = String(useRoute().params["id"])
  gameStore.getGames({ genres: genreId.value ?? "" });
})
</script>

<style scoped></style>

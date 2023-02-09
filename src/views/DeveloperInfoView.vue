<template>
  <ContentLayout>
    <div class="flex flex-col gap-12">
      <h1 class="text-5xl font-semibold">Games by {{ developerInfo?.name }}</h1>
      <GamesList v-if="developerGames" :games="developerGames" />
      <BaseLoader v-if="isGamesLoading" />
      <button
        v-if="developerGames.length"
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
import { useDeveloperStore } from "@/stores/developer";
import { useGameStore } from "@/stores/game";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const developerId = ref(String(useRoute().params["id"]));

const gameStore = useGameStore();
const developerStore = useDeveloperStore();

const developerInfo = computed(() => developerStore.developerInfo);
const developerGames = computed(() => gameStore.games);
const isGamesLoading = computed(() => gameStore.isLoading);
const isDeveloperInfoLoading = computed(() => developerStore.isLoading);

const loadMore = () => {
  gameStore.nextPage({ developers: developerId.value });
};

onMounted(() => {
  developerStore.getDeveloperById(Number(developerId.value));
  gameStore.getGames({ developers: developerId.value ?? "" });
});
</script>

<style scoped></style>

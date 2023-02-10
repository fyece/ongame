<template>
  <ContentLayout>
    <div class="flex flex-col gap-12">
      <h1 v-if="!isDeveloperInfoLoading" class="text-5xl font-semibold">
        Games by {{ developerInfo?.name }}
      </h1>
      <GamesList
        v-if="developerGames && !isDeveloperInfoLoading"
        :games="developerGames"
      />
      <BaseLoader v-if="isGamesLoading" />
      <button
        v-if="developerGames.length && !isGamesLoading && page < pagesCount"
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
import { ref, computed, onMounted, onUpdated, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const developerId = ref(String(useRoute().params["id"]));

const gameStore = useGameStore();
const developerStore = useDeveloperStore();

const developerInfo = computed(() => developerStore.developerInfo);
const developerGames = computed(() => gameStore.games);
const isGamesLoading = computed(() => gameStore.isLoading);
const isDeveloperInfoLoading = computed(() => developerStore.isLoading);
const pagesCount = computed(() => gameStore.pagesCount);
const page = ref(1);

const loadMore = () => {
  page.value++;
  gameStore.getGames({ page: page.value, developers: developerId.value });
};

onMounted(() => {
  developerStore.getDeveloperById(Number(developerId.value));
  gameStore.clearGames();
  gameStore.getGames({ developers: developerId.value ?? "" });
});

onUpdated(async () => {
  developerId.value = String(useRoute().params["id"]);
  gameStore.getGames({ developers: developerId.value ?? "" });
});
</script>

<style scoped></style>

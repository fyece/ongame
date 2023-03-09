<template>
  <div class="grid gap-2 relative mb-8">
    <input
      v-model="searchInput"
      @input="onInput"
      placeholder="Search"
      class="h-12 px-4 py-3 text-lg rounded-full w-full bg-neutral-900 search-icon atfocus ring-neutral-200"
    />

    <div
      v-if="isOpen && searchInput"
      v-click-outside="() => (isOpen = false)"
      class="absolute top-16 z-10 p-4 rounded-2xl max-h-96 overflow-y-auto w-full bg-neutral-900"
    >
      <ul class="grid gap-5">
        <li v-if="searchResults.games.length" class="gap-3">
          <!-- <h4 class="text-neutral-300 text-semibold">Games</h4> -->
          <ul class="gap-3">
            <li
              v-for="game in searchResults.games"
              :key="game.id"
              class="font-medium"
              @click="() => {isOpen = false; searchInput = ''}"
            >
            <RouterLink :to="`/games/${game.id}`">
              {{ game.name }}
          </RouterLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import { createDebounce } from "@/utils";
import type { SearchResults } from "@/types/types";
import { useGameStore } from "@/stores/game";

const gameStore = useGameStore();

const searchInput = ref("");
const searchResults: SearchResults = reactive({
  games: [],
  developers: [],
  genres: [],
});
const isOpen = ref(false);

const useDebounde = createDebounce();

const onInput = () => {
  searchResults.games = [];
  isOpen.value = true;
  useDebounde(async () => {
    const { games } = await gameStore.searchGames({
      search: searchInput.value,
      page_size: 5,
    });
    searchResults.games = games;
  }, 200);
};
</script>

<style scoped lang="scss">
.atfocus {
  &:focus {
    outline: none;
  }
}

.search-icon {
  &::before {
    content: url("../assets/images/icons/search.svg");
    width: 1.5rem;
    height: 1.5rem;
  }
}
</style>

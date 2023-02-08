import { computed, reactive, ref, watch } from "vue";
import { defineStore } from "pinia";
import instance from "@/api/axios";
import type { Game, GameInfo } from "@/types/types";

const API_KEY = "d418b29a189e4419ba2c9e9f686ecbb5";

export const useGameStore = defineStore("game", () => {
  const games = ref<Game[]>([]);
  const gameInfo = ref<GameInfo>();
  const isLoading = ref(false);
  const next = ref("");
  const prev = ref("");
  const gamesCount = ref();
  const pagesCount = computed(() => gamesCount.value / params.page_size);
  const params = reactive({
    key: API_KEY,
    page_size: 48,
    page: 1,
  });

  const getGames = async () => {
    isLoading.value = true;
    return instance
      .get("games", {
        params: {
          ...params,
        },
      })
      .then((res) => {
        isLoading.value = false;
        games.value = [...games.value, ...res.data.results];
        gamesCount.value = res.data.count;
      })
      .catch((e) => {
        isLoading.value = false;
        console.warn(e);
      });
  };

  const getGameById = async (gameId: number) => {
    isLoading.value = true;
    return instance
      .get(`games/${gameId}`, {
        params: {
          key: API_KEY,
        },
      })
      .then((res) => {
        isLoading.value = false;
        gameInfo.value = res.data;
      })
      .catch((e) => {
        isLoading.value = false;
        console.warn(e);
      });
  };

  function nextPage() {
    if (params.page < pagesCount.value) {
      params.page++;
    }
  }

  function prevPage() {
    if (params.page !== 1) {
      params.page--;
    }
  }

  watch(
    () => [params.page],
    () => {
      getGames();
    }
  );

  return {
    games,
    gameInfo,
    next,
    prev,
    gamesCount,
    isLoading,
    getGames,
    getGameById,
    nextPage,
    prevPage,
  };
});

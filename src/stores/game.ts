import { computed, reactive, ref, watch } from "vue";
import { defineStore } from "pinia";
import instance from "@/api/axios";
import type { Game, GameInfo, GameListParams } from "@/types/types";

const API_KEY = "d418b29a189e4419ba2c9e9f686ecbb5";

export const useGameStore = defineStore("game", () => {
  const games = ref<Game[]>([]);
  const gameInfo = ref<GameInfo>();
  const isLoading = ref(false);
  const gamesCount = ref(0);
  const pagesCount = computed(() =>
    Math.ceil(gamesCount.value / defaultParams.page_size)
  );

  const defaultParams = reactive({
    key: API_KEY,
    page_size: 30,
  });

  const getGames = async (params?: GameListParams) => {
    isLoading.value = true;
    return instance
      .get("games", {
        params: {
          ...defaultParams,
          ...params,
        },
      })
      .then((res) => {
        isLoading.value = false;
        if (!params?.page) {
          games.value = [];
        }
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

  async function searchGames(params: GameListParams) {
    let games: Game[] = [];
    let errorMessage = "";

    await instance
      .get("games", {
        params: {
          ...defaultParams,
          ...params,
        },
      })
      .then((res) => {
        games = res.data.results ?? [];
      })
      .catch((e) => {
        errorMessage = "Error: " + e;
      });
    return { games, errorMessage };
  }

  const clearGames = () => {
    games.value = [];
  };

  return {
    games,
    gameInfo,
    gamesCount,
    isLoading,
    pagesCount,
    getGames,
    getGameById,
    searchGames,
    clearGames,
  };
});

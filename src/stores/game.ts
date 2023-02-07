import { ref } from "vue";
import { defineStore } from "pinia";
import instance from "@/api/axios";
import type { Game } from "@/types/types";

export const useGameStore = defineStore("game", () => {
  const games = ref<Game[]>([]);
  const isLoading = ref(false);

  const getGames = () => {
    isLoading.value = true;
    return instance
      .get("games", {
        params: {
          key: "d418b29a189e4419ba2c9e9f686ecbb5",
        },
      })
      .then((res) => {
        isLoading.value = false;
        games.value = res.data.results;
        games.value;
      })
      .catch((e) => {
        isLoading.value = false;
        console.warn(e);
      });
  };

  return { games, getGames };
});

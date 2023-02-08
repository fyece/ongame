import { defineStore } from "pinia";
import { ref } from "vue";

export const useGenreStore = defineStore("genre", () => {
  const genres = ref([]);

  return { genres };
});

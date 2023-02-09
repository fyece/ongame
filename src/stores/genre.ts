import instance from "@/api/axios";
import type { Genre } from "@/types/types";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

const API_KEY = "d418b29a189e4419ba2c9e9f686ecbb5";

export const useGenreStore = defineStore("genre", () => {
  const genres = ref<Genre[]>([]);
  const genreInfo = ref<Genre>();

  const isLoading = ref(false);
  const genresCount = ref();
  const pagesCount = computed(
    () => genresCount.value / defaultParams.page_size
  );
  const defaultParams = reactive({
    key: API_KEY,
    page_size: 48,
    page: 1,
  });

  const getGenres = async (params?: any) => {
    isLoading.value = true;
    return instance
      .get("genres", {
        params: {
          ...defaultParams,
          ...params,
        },
      })
      .then((res) => {
        isLoading.value = false;
        genres.value.push(...res.data.results);
        genresCount.value = res.data.count;
      })
      .catch((e) => {
        isLoading.value = false;
        console.warn(e);
      });
  };

  const getGenreById = (genreId: number) => {
    isLoading.value = true;
    instance
      .get(`genres/${genreId}`, {params: {...defaultParams}})
      .then((res) => {
        isLoading.value = false;
        genreInfo.value = res.data;
      })
      .catch((e) => {
        isLoading.value = false;
        console.warn(e);
      });
  };

  function nextPage(params?: any) {
    if (defaultParams.page < pagesCount.value) {
      defaultParams.page++;
      getGenres(params);
    }
  }

  function prevPage(params?: any) {
    if (defaultParams.page !== 1) {
      defaultParams.page--;
      getGenres(params);
    }
  }

  return {
    genres,
    genreInfo,
    isLoading,
    pagesCount,
    getGenres,
    getGenreById,
    nextPage,
    prevPage,
  };
});

import instance from "@/api/axios";
import type { Developer } from "@/types/types";
import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

const API_KEY = "d418b29a189e4419ba2c9e9f686ecbb5";

export const useDeveloperStore = defineStore("developer", () => {
  const developers = ref<Developer[]>([]);
  const developerInfo = ref<Developer>();

  const isLoading = ref(false);
  const developersCount = ref();
  const pagesCount = computed(() =>
    Math.ceil(developersCount.value / defaultParams.page_size)
  );
  const defaultParams = reactive({
    key: API_KEY,
    page_size: 48,
  });

  const getDevelopers = async (params?: any) => {
    isLoading.value = true;
    return instance
      .get("developers", {
        params: {
          ...defaultParams,
          ...params,
        },
      })
      .then((res) => {
        isLoading.value = false;
        developers.value.push(...res.data.results);
        developersCount.value = res.data.count;
      })
      .catch((e) => {
        isLoading.value = false;
        console.warn(e);
      });
  };

  const getDeveloperById = (developerId: number) => {
    isLoading.value = true;
    instance
      .get(`developers/${developerId}`, { params: { ...defaultParams } })
      .then((res) => {
        isLoading.value = false;
        developerInfo.value = res.data;
      })
      .catch((e) => {
        isLoading.value = false;
        console.warn(e);
      });
  };

  return {
    developers,
    developerInfo,
    isLoading,
    pagesCount,
    getDevelopers,
    getDeveloperById,
  };
});

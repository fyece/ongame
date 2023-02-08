import { defineStore } from "pinia";
import { ref } from "vue";

export const useDeveloperStore = defineStore("developer", () => {
  const developers = ref([]);

  return { developers };
});

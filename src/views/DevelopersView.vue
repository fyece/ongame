<template>
  <ContentLayout>
    <div class="flex flex-col gap-12">
      <h1 class="text-5xl font-semibold">Developers</h1>
      <DevelopersList :developers="developers" />
      <BaseLoader v-if="isLoading" />
      <button
        v-if="developers.length && page < pagesCount"
        @click="loadMore"
        class="px-4 py-2 rounded-lg bg-neutral-800"
      >
        Load more
      </button>
    </div>
  </ContentLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useDeveloperStore } from "@/stores/developer";
import BaseLoader from "@/components/BaseLoader.vue";
import ContentLayout from "@/components/ContentLayout.vue";
import DevelopersList from "@/components/DevelopersList.vue";

const store = useDeveloperStore();
const developers = computed(() => store.developers);
const isLoading = computed(() => store.isLoading);
const pagesCount = computed(() => store.pagesCount);
const page = ref(1);


const loadMore = () => {
  page.value++;
  store.getDevelopers({page: page.value})
};

onMounted(() => {
  store.getDevelopers();
});
</script>

<style scoped></style>

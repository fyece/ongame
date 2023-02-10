<template>
  <ContentLayout>
    <div class="flex flex-col gap-12">
      <h1 class="text-5xl font-semibold">Genres</h1>
      <GenresList :genres="genres" />
      <BaseLoader v-if="isLoading" />
      <button
        v-if="genres.length && page < pagesCount"
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
import { useGenreStore } from "@/stores/genre";
import BaseLoader from "@/components/BaseLoader.vue";
import ContentLayout from "@/components/ContentLayout.vue";
import GenresList from "@/components/GenresList.vue";

const store = useGenreStore();
const genres = computed(() => store.genres);
const isLoading = computed(() => store.isLoading);
const pagesCount = computed(() => store.pagesCount)
const page = ref(1);

const loadMore = () => {
  page.value++
  store.getGenres({page: page.value})
};

onMounted(() => {
  store.getGenres();
});
</script>

<style scoped></style>

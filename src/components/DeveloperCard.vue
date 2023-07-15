<template>
  <RouterLink
    :to="`/developers/${developer.id}`"
    class="card bg-place sm:min-h-[200px] pt-[45%] sm:pt-[100%] relative rounded-full place-items-end overflow-hidden cursor-pointer"
    :style="{
      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${developer.image_background})`,
    }"
  >
      <h3 class="font-medium text-3xl text-center absolute">
        {{ developer.name }}
      </h3>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Developer } from "@/types/types";

interface Props {
  developer: Developer;
}

defineProps<Props>();
</script>

<style scoped lang="scss">
.bg-place {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.card {
  display: grid;
  place-items: center;
  min-height: 200px;
}
</style>

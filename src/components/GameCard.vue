<template>
  <RouterLink
    :to="`games/${game.id}`"
    class="card bg-place rounded-3xl place-items-end overflow-hidden cursor-pointer"
    :style="{ backgroundImage: `url(${game.background_image})` }"
  >
    <div class="bg-tint p-3 pt-4 grid items-end gap-2 align-bottom w-full">
      <h3 class="font-medium text-2xl">
        {{ game.name }}
      </h3>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Game } from "@/types/types";

interface Props {
  game: Game;
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
  min-height: 320px;
  max-height: 360px;
  min-width: 220px;
  max-width: 260px;
}
.bg-tint {
  min-height: 7rem;
  height: fit-content;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}
</style>

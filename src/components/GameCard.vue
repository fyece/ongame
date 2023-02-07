<template>
  <div
    class="card bg-place rounded-3xl place-items-end overflow-hidden"
    :style="{ backgroundImage: `url(${game.background_image})` }"
  >
    <div class="bg-tint p-2 pt-3 flex flex-col gap-2 align-bottom w-full">
      <h3 class="font-medium text-3xl">
        {{ game.name }}
      </h3>
    </div>
  </div>
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
  min-height: 360px;
  max-height: 360px;
  min-width: 260px;
  max-width: 360px;
}
.bg-tint {
	min-height: 7rem;
	height: fit-content;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
}
</style>

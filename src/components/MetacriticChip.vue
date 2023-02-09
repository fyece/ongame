<template>
  <span
	v-if="score"
    class="grid items-center justify-self-center w-12 h-5 rounded text-sm font-semibold text-neutral-900 text-center"
    :class="{
      'bg-red-500': score < 50,
      'bg-yellow-500': score >= 50 && score < 75,
      'bg-green-500': score >= 75,
    }"
    >{{ score }}</span
  >
</template>

<script setup lang="ts">
interface Props {
  score?: number;
}
defineProps<Props>();
</script>

<style scoped></style>

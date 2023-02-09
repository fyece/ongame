<template>
  <span class="px-4 py-1 rounded-full bg-white text-neutral-900 text-sm">{{
    text
  }}</span>
</template>

<script setup lang="ts">
interface Props {
  text: string;
}

defineProps<Props>();
</script>

<style scoped></style>

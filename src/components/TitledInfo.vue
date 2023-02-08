<template>
  <div class="grid gap-1">
    <h4 class="text-neutral-400">{{ title }}</h4>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style scoped></style>

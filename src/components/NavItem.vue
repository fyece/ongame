<template>
  <RouterLink :to="link">
    <li
      class="flex gap-3 p-3 text-xl rounded-xl bg-neutral-800 hover:bg-neutral-600 animation font-medium"
    >
      <slot name="icon"></slot>
      <img v-if="icon" :src="icon" />
      <slot></slot>
    </li>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";

interface Props {
  link: string;
  icon?: string;
  isActive?: boolean;
}

defineProps<Props>();
</script>

<style scoped></style>

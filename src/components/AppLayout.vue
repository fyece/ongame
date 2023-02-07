<template>
  <div class="template h-full relative">
    <slot name="sidebar"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.template {
  display: grid;
  grid-template-columns: minmax(120px, 240px) 1fr;
  height: 100%;
}
</style>

<template>
  <div class="template h-full relative">
    <div class="sticky top-0 z-50">
      <slot name="sidebar"></slot>
    </div>
    <div class="">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.template {
  display: grid;
  grid-template-columns: minmax(120px, 240px) 1fr;
  height: 100%;
}

@media (max-width: 768px) {
  .template {
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
  }
}
</style>

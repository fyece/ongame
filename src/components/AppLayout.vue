<template>
  <div class="template h-full relative">
    <div class="static top-0">
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
</style>

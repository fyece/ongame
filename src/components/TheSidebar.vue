<template>
  <div
    class="flex sticky top-0 flex-col h-16 md:h-screen items-center gap-2 md:gap-16 px-3 md:py-16 bg-black"
  >
    <TheLogo />
    <TheNavigation />
</div>
</template>

<script setup lang="ts">
import TheLogo from "./TheLogo.vue";
import TheNavigation from "./TheNavigation.vue";
</script>

<style scoped lang="scss">

</style>

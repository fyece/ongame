<script setup lang="ts">
import { RouterView } from "vue-router";
import AppLayout from "./components/AppLayout.vue";
import TheSidebar from "./components/TheSidebar.vue";
</script>

<template>
  <AppLayout>
    <template v-slot:sidebar>
      <TheSidebar />
    </template>
    <template v-slot:content>
      <RouterView />
    </template>
  </AppLayout>
</template>

<style scoped></style>

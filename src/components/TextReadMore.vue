<template>
  <div class="grid gap-2">
    <div
      class="text-ellipsis overflow-hidden"
      :style="{ maxHeight }"
    >
      <p class="text-ellipsis">{{ text }}</p>
    </div>

    <button
      @click="toggleIsExtended"
      class="px-3 w-fit rounded-full bg-neutral-300 text-neutral-900 text-sm"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

interface Props {
  lines?: number;
  text: string;
}
const props = withDefaults(defineProps<Props>(), { lines: 5 });

const isExtended = ref(false);
const buttonText = computed(() =>
  isExtended.value ? "Show less" : "Show more"
);
const maxHeight = computed(() =>
  isExtended.value ? 200 + "rem" : props.lines * 1.5 + "rem"
);

const toggleIsExtended = () => {
  isExtended.value = !isExtended.value;
};
</script>

<style scoped>
.text-short {
  text-overflow: ellipsis;
}
.text-extended {
}
</style>

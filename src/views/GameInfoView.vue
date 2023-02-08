<template>
  <LayoutNarrow>
    <BaseLoader v-if="isLoading" />
    <div v-else class="grid gap-8">
      <div class="main-info-grid">
        <div class="flex flex-col gap-4">
          <div
            class="w-[262px] h-[335px] rounded-2xl bg-center bg-cover bg-no-repeat"
            :style="{ backgroundImage: `url(${gameInfo?.background_image})` }"
          ></div>
          <div>screens</div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="grid gap-2">
            <h1 class="text-5xl font-semibold">{{ gameInfo?.name }}</h1>
            <div class="flex gap-2">
              <span
                v-for="devs in gameInfo?.developers"
                :key="devs.id"
                class="inline-block font-medium"
                >{{ devs.name }}</span
              >
            </div>
          </div>

          <div class="grid grid-cols-3 gap-2">
            <TitledInfo title="Released">
              <span class="text-lg">{{ gameInfo?.released }}</span>
            </TitledInfo>
            <TitledInfo title="ESRB Rating">
              <span class="text-lg">{{ gameInfo?.esrb_rating.name }}</span>
            </TitledInfo>
            <TitledInfo title="Metacritic" class="place-self-center">
              <span class="text-lg text-center">{{
                gameInfo?.metacritic
              }}</span>
            </TitledInfo>
          </div>

          <TitledInfo title="Where to buy">
            <div class="grid grid-cols-2">
              <div
                v-for="store in gameInfo?.stores"
                :key="store.id"
                class="flex gap-4 items-center"
              >
                <!-- <div>ICO</div> -->
                <span class="font-lg">{{ store.store.name }}</span>
              </div>
            </div>
          </TitledInfo>

          <TitledInfo title="Platforms">
            <div class="flex flex-wrap gap-3 gap-y-0">
              <span
                v-for="platform in gameInfo?.platforms"
                :key="platform.platform.id"
                class="text-lg"
                >{{ platform.platform.name }}</span
              >
            </div>
          </TitledInfo>
<!-- 
          <TitledInfo title="Genres">
            <div class="flex flex-wrap gap-3 gap-y-0">
              <span
                v-for="genre in gameInfo?.platforms"
                :key="platform.platform.id"
                class="text-lg"
                >{{ platform.platform.name }}</span
              >
            </div>
          </TitledInfo> -->
        </div>
      </div>
      <div>about</div>
      <div>tags</div>
    </div>
  </LayoutNarrow>
</template>

<script setup lang="ts">
import BaseLoader from "@/components/BaseLoader.vue";
import LayoutNarrow from "@/components/LayoutNarrow.vue";
import TitledInfo from "@/components/TitledInfo.vue";
import { useGameStore } from "@/stores/game";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";

const gameId = ref(Number(useRoute().params["id"]));

const store = useGameStore();
const gameInfo = computed(() => store.gameInfo);
const isLoading = computed(() => store.isLoading);

onMounted(() => {
  store.getGameById(gameId.value);
});
</script>

<style scoped>
.main-info-grid {
  display: grid;
  grid-template-columns: 262px 1fr;
  gap: 2rem;
}
</style>

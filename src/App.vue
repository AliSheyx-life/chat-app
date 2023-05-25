<template>
  <MainLayout v-if="!hasLayout">
    <RouterView />
  </MainLayout>
  <RouterView v-else />
</template>

<script setup lang="ts">
import MainLayout from "./layout/MainLayout.vue";
import { useChatStore } from "./store";

components: {
  MainLayout;
}

const chatStore = useChatStore();

const hasLayout = chatStore.hasLayout;
console.log(hasLayout);
</script>

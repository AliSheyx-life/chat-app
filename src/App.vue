<template>
  <MainLayout v-if="!hasLayout">
    <RouterView />
  </MainLayout>
  <RouterView v-else />
</template>

<script setup lang="ts">
import MainLayout from "./layout/MainLayout.vue";

components: {
  MainLayout;
}

const hasLayout = false;
</script>

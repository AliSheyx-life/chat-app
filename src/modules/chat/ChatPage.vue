<template>
  <div>
    <h1>Chat Page: {{ chat }}</h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps as VueDefineProps } from "vue";

interface ChatItem {
  name: string;
  avatar: string;
  lastMessage: string;
}

const props = VueDefineProps<{
  chat: ChatItem[];
}>();

const { chat } = props;
</script>

<style scoped></style>

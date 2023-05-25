<template>
  <div>
    <h1>Chat Details for ID: {{ chatId }}</h1>
    <p>Chat Title: {{ chats.name }}</p>
    <p>Chat Description: {{ chats.lastMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useChatStore } from "../../store";
import { Chat } from "../../chats";
import { useRoute } from "vue-router";

const route = useRoute();
const chatId = ref<number>(0);
const chats = ref<Chat>({
  id: 0,
  name: "",
  avatar: "",
  lastMessage: "",
  messages: {},
});

const chatStore = useChatStore();

onMounted(() => {
  chatId.value = Number(route.params.id);
  chats.value =
    chatStore.getChats.find((chat) => chat.id === chatId.value) || chats.value;
});
</script>

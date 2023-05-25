<template>
  <div class="chatlist p-6 w-[250px]">
    <v-text-field
      v-model="searchText"
      label="Search"
      outlined
      clearable
    ></v-text-field>

    <v-list>
      <v-list-item
        v-for="(chat, index) in filteredChats"
        :key="index"
        :chat="chat"
        @click="selectChat(chat)"
      >
        <v-list-item-avatar>
          <v-img :src="chat.avatar" :alt="chat.name"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ chat.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ chat.lastMessage }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useChatStore } from "../store";
import { Chat } from "../chats";

const chatStore = useChatStore();
const router = useRouter();
const chats: Chat[] = chatStore.getChats;
console.log(chats);
const searchText = ref("");

const filteredChats = computed(() => {
  const searchLowerCase = searchText.value.toLowerCase();
  return chats.filter((chat: any) =>
    chat.name.toLowerCase().includes(searchLowerCase)
  );
});

const selectChat = (chat: any) => {
  router.push(`/chat/${chat.id}`);
};
</script>

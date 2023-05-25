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

const router = useRouter();
const chats = ref([
  {
    name: "John Doe",
    avatar: "john-doe-avatar.jpg",
    lastMessage: "Hello there!",
  },
  {
    name: "Jane Smith",
    avatar: "jane-smith-avatar.jpg",
    lastMessage: "How are you?",
  },
  {
    name: "Alice Johnson",
    avatar: "alice-johnson-avatar.jpg",
    lastMessage: "See you later!",
  },
]);

const searchText = ref("");

const filteredChats = computed(() => {
  const searchLowerCase = searchText.value.toLowerCase();
  return chats.value.filter((chat) =>
    chat.name.toLowerCase().includes(searchLowerCase)
  );
});

const selectChat = (chat: any) => {
  router.push(`/chat/${chat.name}`);
};
</script>

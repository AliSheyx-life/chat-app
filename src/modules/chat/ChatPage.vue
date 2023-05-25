<template>
  <div class="bg-white h-full flex flex-col relative">
    <div class="header bg-gray-200 p-5">
      <h2 class="text-md">{{ chats.name }}</h2>
      <p>last seen recently</p>
    </div>

    <div class="chats h-[560px]">
      <ul>
        <li v-for="item in chats.messages" class="m-2 rounded-lg">
          <p class="block max-w-[200px] bg-gray-200 p-2 rounded-lg">
            {{ item }}
          </p>
          <p class="time">{{ time }}</p>
        </li>
      </ul>
    </div>

    <div class="message flex align-center justify-between">
      <v-text-field
        v-model="newMessage"
        label="Message"
        outlined
      ></v-text-field>
      <div @click="sendMessage" class="bg-green-400 p-4 mb-5 cursor-pointer">
        <i class="fab fa-telegram-plane" color="white"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useChatStore } from "../../store";
import { Chat } from "../../chats";
import { useRoute } from "vue-router";

const route = useRoute();
const time = ref("");
const newMessage = ref("");
const chatId = ref<number>(0);
const chats = ref<Chat>({
  id: 0,
  name: "",
  avatar: "",
  lastMessage: "",
  messages: {},
  password: "",
});

const chatStore = useChatStore();

onMounted(() => {
  chatId.value = Number(route.params.id);
  chats.value =
    chatStore.getChats.find((chat) => chat.id === chatId.value) || chats.value;

  time.value = new Date().toLocaleTimeString();
});

const sendMessage = () => {
  console.log(newMessage.value, time.value);
  newMessage.value = "";

  chatStore.chatData = [
    ...chatStore.chatData,
    {
      id: chatId.value,
      name: "",
      avatar: "",
      lastMessage: newMessage.value,
      messages: chats.value.messages.push(newMessage.value),
      password: "",
    },
  ];
};
</script>

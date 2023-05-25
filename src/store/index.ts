
import { defineStore } from 'pinia';
import { chats, Chat } from '../chats';

export const useChatStore = defineStore('chat', {
  state: () => ({
    chatData: chats,
  }),
  getters: {
    getChats(): Chat[] {
      return this.chatData;
    },
  },
});
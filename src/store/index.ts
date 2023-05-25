
import { defineStore } from 'pinia';
import { chats, Chat } from '../chats';

export const useChatStore = defineStore('chat', {
  state: () => ({
    chatData: chats,
    hasLayout:false,
    currentUser: []
  }),
  getters: {
    getChats(): Chat[] {
      return this.chatData;
    },
    getCurrentUser():Chat[]{
      return this.currentUser;
    },
    
  },
  actions: {
    addCurrentUser(chat:Chat) {
      this.currentUser.push(chat);
    },
    changeHasLayout(){
      this.hasLayout = !this.hasLayout;
    }
  },
});
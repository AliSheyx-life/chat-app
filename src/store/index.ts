import { defineStore } from 'pinia';

export const useChatStore = defineStore('chat', {
  state: () => ({
    messages: [
      { id: 1, author: 'Alice', content: 'Hello' },
      { id: 2, author: 'Bob', content: 'Hi' },
      { id: 3, author: 'Alice', content: 'How are you?' },
      { id: 4, author: 'Bob', content: 'I am good, thanks!' },
    ],
  }),
});
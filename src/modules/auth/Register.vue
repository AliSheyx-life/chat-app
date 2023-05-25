<template>
  <div class="login-page h-full min-h-screen flex justify-center items-center">
    <v-sheet width="400" class="">
      <h2 class="text-3xl mb-8 text-center font-bold text-gray">Register</h2>
      <v-form fast-fail @submit.prevent="registerForm">
        <v-text-field
          v-model="username"
          label="Name"
          :rules="usernameRules"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password "
          :rules="passwordRules"
        ></v-text-field>

        <v-btn type="submit" block class="mt-2">Submit</v-btn>
      </v-form>
      <p class="mt-[19px]">
        Have already an account
        <span class="font-bold cursor-pointer text-brand" @click="moveLogin"
          >Sign In</span
        >
      </p>
    </v-sheet>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useChatStore } from "../../store";
import { Chat } from "../../chats";

const router = useRouter();
const username = ref("");
const moveLogin = () => {
  router.push("/login");
};
const usernameRules = [
  (value: any) => {
    if (value?.length > 3) return true;

    return "First name must be at least 3 characters.";
  },
];

const password = ref("");
const passwordRules = [
  (value: any) => {
    if (/[^0-9]/.test(value)) return true;

    return "Password should contain 8 digits.";
  },
];

const registerForm = () => {
  let chatStore = useChatStore();
  const newUser = <Chat>{
    id: 10,
    name: username.value,
    avatar: "",
    lastMessage: "",
    messages: [],
    password: password.value,
  };
  chatStore.changeHasLayout;
  chatStore.addCurrentUser(newUser);
  router.push("/chat/2");
};
// chatStore.currentUser = newUser;
</script>

<template>
  <div class="login-page h-full min-h-screen flex justify-center items-center">
    <v-sheet width="400" class="">
      <h2 class="text-3xl mb-8 text-center font-bold text-gray">Register</h2>
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="username"
          label="Username"
          :rules="usernameRules"
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="Email"
          :rules="emailRules"
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
const email = ref("");
const emailRules = [
  (value: any) => {
    if (value?.length > 3) return true;

    return "Email should contain at least 3 chars.";
  },
];
const password = ref("");
const passwordRules = [
  (value: any) => {
    if (/[^0-9]/.test(value)) return true;

    return "Password should contain 8 digits.";
  },
];
</script>

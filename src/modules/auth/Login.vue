<template>
  <div class="login-page h-full min-h-screen flex justify-center items-center">
    <v-sheet width="400" class="">
      <h2 class="text-3xl mb-8 text-center font-bold text-gray">Login</h2>
      <v-form fast-fail @submit.prevent>
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
          >Sign Up</span
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
  router.push("/register");
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
</script>

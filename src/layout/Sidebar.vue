<template>
  <div class="sidebar p-6 shadow-md">
    <div class="profile flex flex-col items-center">
      <img src="../assets/images/profile.png" alt="profile" />
      <h2>Shahribonu Otaqulova</h2>
    </div>

    <ul class="py-5 mt-5 relative">
      <li
        :class="{ 'bg-brand': item.childs.includes(route.name as string) }"
        v-for="item in menuItems"
        :key="item.name"
        @click="router.push({ name: item.routeName })"
        class="cursor-pointer text-xl mb-6 p-2 rounded-md"
      >
        <i :class="item.icon"></i>

        <span class="ml-3 absolute">{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import menuItem from "./menu.config";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const menuItems = ref(menuItem);
</script>

<style lang="scss" scoped></style>

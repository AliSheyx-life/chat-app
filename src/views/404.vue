<template>
  <div class="page-404 h-full p-5">
    <iframe src="https://embed.lottiefiles.com/animation/95560"></iframe>

    <v-btn
      class="bg-black text-white"
      height="52"
      min-width="164"
      @click="$router.back()"
    >
      <div class="fas fa-arrow-left"></div>
      <span> Back Home</span>
    </v-btn>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.button {
  position: absolute;
  top: 15%;
  left: 15%;

  cursor: pointer;
  background: #000;
  color: #fff;
  padding: 10px;
}
iframe {
  width: 100%;
  height: 80vh;
}
</style>

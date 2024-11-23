<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class=" w-full bg-red-400 text-white justify-center flex">
      <RouterLink class="p-3" to="/">Home</RouterLink>
      <RouterLink class="p-3" to="/about">About</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>

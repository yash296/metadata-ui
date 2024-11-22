<template>
    <div class=" flex p-6  align-middle justify-center">
        <img class="border-2 p-6 rounded-md" :src="src" :alt="alt">
    </div>
</template>

<script setup lang="ts">
defineProps<{ src: string, alt: string }>()
</script>
<template>
    <p>{{ text }}</p>
</template>

<script setup lang="ts">
defineProps<{ text: string }>()
</script>
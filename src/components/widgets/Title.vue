<template>
    <div title="Title" class=" cursor-pointer w-full align-middle flex p-6" :class="[`justify-${position}`]">
        <span class="text-3xl">{{ text }}</span>
    </div>
</template>

<script setup lang="ts">
defineProps<{ text: string, position: string }>()
</script>
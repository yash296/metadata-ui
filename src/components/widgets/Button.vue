<template>
    <div class="flex p-6  align-middle justify-center">
        <button class=" bg-orange-400 p-4 rounded-md hover:bg-orange-300" @click="handleClick(action)">{{ label
            }}</button>
    </div>
</template>

<script setup lang="ts">

defineProps<{ label: string; action: string }>()

const handleClick = (action: string) => {
    eval(action);
}

</script>
<template>
    <button @click="onClick">{{ label }}</button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            default: () => { }
        },
    }
};
</script>
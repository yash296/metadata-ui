<template>
    <div :class="className">{{ text }}</div>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        className: {
            type: [String, Array],
            default: ''
        }
    }
};
</script>
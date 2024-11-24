<template>
    <button :class="className" type="submit">{{ label }}</button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },
        className: {
            type: [String, Array],
            default: ''
        },
    }
};
</script>
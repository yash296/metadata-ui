<template>
    <img :class="className" :style="styleName" :src="src" :alt="alt" />
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            default: ""
        },
        className: {
            type: [String, Array],
            default: ''
        },
        styleName: {
            type: [String, Array],
            default: ''
        }
    }
};
</script>
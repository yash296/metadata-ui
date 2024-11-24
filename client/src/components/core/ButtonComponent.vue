<template>
    <button :class="className" @click="handleClick">{{ label }}</button>
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
        onClick: {
            type: String,
            default: ''
        },
        isFormData: {
            type: Boolean,
            default: false
        },
        clickAsEmit: {
            type: Boolean,
            default: false
        }
    },
    emits: ['onButtonClick'],
    setup(props, { emit }) {
        const handleClick = () => {
            if (!props.clickAsEmit) {
                // possible to use eval here too and send functions as a prop - unsafe
                alert(`placeholder for api: ${props.onClick}`)
                return;
            }
            emit('onButtonClick')
        };
        return {
            handleClick
        };
    }
};
</script>

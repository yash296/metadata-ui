<template>
    <label :class="labelClass">
        <input :class="className" type="checkbox" :name="name" v-model="localValue"
            @input="formUpdate($event.target.checked)" />
        {{ label }}
    </label>
</template>

<script>
import { toRefs } from "vue";
import { useDebouncedInput } from "@/composables/useDebounceFormInput";

export default {
    props: {
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        modelValue: {
            type: Boolean,
            default: false
        },
        className: {
            type: [String, Array],
            default: ''
        },
        labelClass: {
            type: [String, Array, Object],
            default: ''
        },
    },
    emits: ["formUpdate"],

    setup(props, { emit }) {
        const { modelValue } = toRefs(props);

        // use the debounced input logic from the composable
        const { localValue, formUpdate } = useDebouncedInput(modelValue.value, emit);

        return {
            localValue,
            formUpdate
        };
    }
};
</script>

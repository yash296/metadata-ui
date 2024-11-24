<template>
    <label :class="labelClass">{{ label }}
        <input :class="className" :type="type" :name="name" :placeholder="placeholder" v-model="localValue"
            :required="required" @input="formUpdate" />
    </label>
</template>

<script>
import { useDebouncedInput } from "@/composables/useDebounceFormInput"
import { toRefs } from 'vue'
export default {
    props: {
        type: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            default: "",
        },
        required: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: [String, Number],
            default: "",
        },
        className: {
            type: [String, Array],
            default: "",
        },
        labelClass: {
            type: [String, Array],
            default: "",
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

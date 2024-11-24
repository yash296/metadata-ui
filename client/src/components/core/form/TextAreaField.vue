<template>
    <label :class="labelClass">{{ label }}
        <textarea :name="name" :placeholder="placeholder" v-model="localValue" :required="required"
            @input="formUpdate($event.target.value)" :class="className"></textarea>
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
        placeholder: {
            type: String,
            default: ""
        },
        required: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: String,
            default: ""
        },
        className: {
            type: [String, Array],
            default: ''
        },
        labelClass: {
            type: [String, Array],
            default: ''
        }
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

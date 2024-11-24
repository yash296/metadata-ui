<template>
    <label :class="labelClass">{{ label }}
        <select :class="className" :name="name" v-model="localValue" @input="formUpdate($event.target.value)"
            :required="required">
            <option value="" disabled>Select an option</option>
            <option v-for="(option, index) in options" :key="index" :value="option">
                {{ option }}
            </option>
        </select>
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
        options: {
            type: Array,
            required: true
        },
        required: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: String,
            default: ""
        },
        labelClass: {
            type: [String, Array],
            default: ''
        },
        className: {
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

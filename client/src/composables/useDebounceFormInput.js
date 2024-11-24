import { ref, watch, onUnmounted } from "vue";

export function useDebouncedInput(modelValue, emit, delay = 300) {
    // local value
    const localValue = ref(modelValue);
    let debounceTimer = null;

    watch(
        () => modelValue,
        (newValue) => {
            if (newValue !== localValue.value) {
                localValue.value = newValue;
            }
        }
    );

    // debounced input handler
    const formUpdate = () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (localValue.value !== modelValue) {
                emit("formUpdate", localValue.value);
            }
        }, delay);
    };

    // clean up debounce timer when component is unmounted
    onUnmounted(() => {
        clearTimeout(debounceTimer);
    });

    return {
        localValue,
        formUpdate,
    };
}

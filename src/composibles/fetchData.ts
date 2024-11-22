import { ref, onMounted } from "vue";

export function fetchData(path: string) {
    const data = ref(null);
    const error = ref(null);

    const fetchData = async () => {
        try {
            const response = await fetch(path);
            data.value = await response.json();
        } catch (err) {
            error.value = err as any;
        }
    };
    onMounted(fetchData);
    return { data, error };
}

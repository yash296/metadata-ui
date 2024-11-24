<template>
    <form @submit.prevent="handleSubmit" class="flex w-full flex-col">
        <div v-for="(field, index) in fields" :key="index" class="flex w-full items-center justify-center align-middle">
            <component :is="resolveComponent(field.type)" v-bind="fieldProps(field)" :value="formData[field.name]"
                @formUpdate="updateValue(field.name, $event)" :modelValue="field.defaultValue || null" />
        </div>
    </form>
</template>

<script>
import { ref } from "vue";
import { defineAsyncComponent } from "vue";
import { appendVariantClasses } from "@/utils/appendVariantClass";
import FallbackComponent from "@/components/core/FallbackComponent.vue";
// list of form component names
const formComponents = ['InputField', 'TextAreaField', 'SelectField', 'CheckboxField', 'SubmitButton'];

export default {
    props: {
        fields: {
            type: Array,
            required: true
        }
    },
    setup() {
        const formData = ref({});
        // define the component map directly to avoid recalculating on every render
        const componentMap = formComponents.reduce((map, formComponent) => {
            map[formComponent] = defineAsyncComponent(() => import(`@/components/core/form/${formComponent}.vue`));
            return map;
        }, {});

        const fieldProps = (fieldVal) => appendVariantClasses(fieldVal);
        fieldProps.isFormData = true;

        const resolveComponent = (type) => {
            // return the resolved component or null if not found
            return componentMap[type] || FallbackComponent;
        };

        const updateValue = (fieldName, value) => {
            formData.value[fieldName] = value;
        };

        const handleSubmit = () => {
            alert(`placeholder for api: ${JSON.stringify(formData.value, null, 2)}`);
        };

        return {
            resolveComponent,
            formData,
            handleSubmit,
            fieldProps,
            updateValue
        };
    }
};
</script>
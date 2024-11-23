<template>
    <form @submit.prevent="handleSubmit">
        <div v-for="(field, index) in fields" :key="index" class="form-field">
            <component :is="resolveComponent(field.type)" v-bind="field" v-model="formData[field.name]" />
        </div>
        <pre>{{ formData }}</pre> <!-- Debug: Show live form data -->
    </form>
</template>

<script>
import { ref } from "vue";

// Dynamic imports for form field components
const InputField = () => import("./fields/InputField.vue");
const TextAreaField = () => import("./fields/TextAreaField.vue");
const SelectField = () => import("./fields/SelectField.vue");
const CheckboxField = () => import("./fields/CheckboxField.vue");
const SubmitButton = () => import("./fields/SubmitButton.vue");

export default {
    props: {
        fields: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const formData = ref({});

        // Initialize formData with default values
        props.fields.forEach((field) => {
            if (field.name && field.type !== "submit") {
                formData.value[field.name] = field.type === "checkbox" ? false : "";
            }
        });

        const resolveComponent = (type) => {
            const componentMap = {
                text: InputField,
                email: InputField,
                textarea: TextAreaField,
                select: SelectField,
                checkbox: CheckboxField,
                submit: SubmitButton
            };
            return componentMap[type] || null;
        };

        const handleSubmit = () => {
            console.log("Form Submitted:", formData.value);
            alert(`Form Submitted: ${JSON.stringify(formData.value, null, 2)}`);
        };

        return {
            resolveComponent,
            formData,
            handleSubmit
        };
    }
};
</script>

<style>
.form-field {
    margin-bottom: 1rem;
}
</style>
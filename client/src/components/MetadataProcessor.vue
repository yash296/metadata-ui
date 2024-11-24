<template>
    <div class="flex justify-center align-middle w-full flex-col">
        <div v-for="(componentData, index) in coreComponents" :key="`${index}_${componentData.type}`"
            class="p-2 justify-center flex w-full">
            <component class="p-4" :title="componentData.type" :is="resolveComponent(componentData.type)"
                v-bind="componentProps(componentData)" />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import { appendVariantClasses } from "@/utils/appendVariantClass";
import FallbackComponent from "@/components/core/FallbackComponent.vue";
// TODO - add to compoennt config
const coreComponentsConfig = ['Heading', 'ButtonComponent', 'ImageComponent', 'FormComponent'];
const componentMap = {};
// dynamically import components
coreComponentsConfig.forEach((comp) => {
    componentMap[comp] = defineAsyncComponent(async () => {
        try {
            return await import(`@/components/core/${comp}.vue`);
        } catch (e) {
            // TODO - test form components as core components
            return await import(`@/components/core/form/${comp}.vue`);
        }
    });
});

export default {
    props: {
        coreComponents: {
            type: Array,
            required: true,
        },
    },
    setup() {
        const componentProps = (componentData) => appendVariantClasses(componentData.props);
        const resolveComponent = (type) => {
            return componentMap[type] || FallbackComponent;
        };

        return {
            resolveComponent,
            componentProps,
        };
    },
};
</script>

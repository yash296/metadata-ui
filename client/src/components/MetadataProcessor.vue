<template>
    <div>
        <component :title="componentData.type" v-for="(componentData, index) in coreComponents"
            :is="resolveComponent(componentData.type)" :key="index" v-bind="componentData.props" />
    </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
    props: {
        coreComponents: {
            type: Array,
            required: true
        }
    },
    setup() {
        const resolveComponent = (type) => {
            const components = ['Heading', 'ButtonComponent', 'ImageComponent'];
            const componentMap = {};
            for (let comp of components) {
                componentMap[comp] = () => defineAsyncComponent(() => import(`@/components/core/${comp}.vue`));
            }
            console.log(componentMap[type])
            return componentMap[type]?.() || null;
        };
        return {
            resolveComponent
        };
    }
};
</script>
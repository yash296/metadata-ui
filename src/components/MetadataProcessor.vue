<template>
  <div class=" flex w-full h-full flex-col">
    <component v-for="(widget, index) in widgets" :key="index" :is="getWidget(widget.type)" v-bind="widget.props" />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';

defineProps<{ widgets: { type: string; props: Record<string, any> }[] }>()

const getWidget = (type: string) => {

  const widgetMap: Record<string, any> = {}
  const widgetsNames: string[] = ['Title', 'Paragraph', 'Image', 'Form', 'Button']
  for (let item of widgetsNames) {
    widgetMap[item] = () => import(`./widgets/${item}.vue`)
  }


  return defineAsyncComponent(widgetMap[type] || null)
}
</script>

<style scoped></style>

<template>
  <div class="flex justify-center">
    <div v-if="jsonStore.isLoading" class="flex justify-center text-center items-center h-screen">
      <!-- loader -->
      <div class="flex justify-center items-center h-screen">
        <div class="border-t-4 border-orange-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    </div>
    <div v-else-if="jsonStore.getJsonData">
      <div class="flex justify-center pt-4">
        <!-- switch between examples -->
        <div v-for="example in examples" @click="switchExample(example)" :key="example"
          :class="currentExample === example ? 'bg-orange-500 text-white' : 'text-gray-500'"
          class="cursor-pointer uppercase p-2  bg-gray-200 rounded-md mx-3  shadow hover:bg-orange-500 hover:text-orange-900 transition duration-300 transform hover:scale-105">
          {{ example }}
        </div>
      </div>
      <!-- metadata processor -->
      <MetadataProcessor :coreComponents="jsonStore.getJsonData.components" />
    </div>
    <div v-else-if="jsonStore.isError" class="text-center text-red-600">
      Error
    </div>
  </div>
</template>



<script>
import { ref, onMounted } from 'vue';
import MetadataProcessor from '@/components/MetadataProcessor.vue';
import { useJsonStore } from '@/stores/useJsonStore';
const examples = ['example-1', 'example-2'];

export default {
  components: { MetadataProcessor },
  setup() {
    const currentExample = ref(examples[0])
    const jsonStore = useJsonStore();
    const switchExample = (example) => {
      jsonStore.fetchJson(example);
      currentExample.value = example;
    }
    onMounted(() => {
      switchExample(examples[0])
    })
    return {
      jsonStore,
      switchExample,
      examples,
      currentExample
    }
  }
}

</script>
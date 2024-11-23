<template>
  <div>
    <MetadataProcessor :coreComponents="coreComponents" />
  </div>

</template>



<script>
import MetadataProcessor from '@/components/MetadataProcessor.vue';
import example1 from "@/data/example-1.json";
import example2 from "@/data/example-2.json";

export default {
  components: { MetadataProcessor },
  setup() {
    const coreComponents = example1.components;
    return { coreComponents }
  }

}
</script>

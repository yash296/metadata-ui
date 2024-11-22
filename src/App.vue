<template>
  <div>
    <!-- <div v-if="error">Error: {{ error }}</div>
    <div v-else-if="!data">Loading...</div>
    <div v-else> -->
    <MetadataProcessor :widgets="data.widgets" />
    <!-- </div> -->
  </div>
</template>

<script setup lang="ts">
import MetadataProcessor from './components/MetadataProcessor.vue'
// import { fetchData } from './composibles/fetchData';
import data from './data/dummy-data1.json'


// const { data, error } = fetchData('./data/dummy-data1.json');
</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

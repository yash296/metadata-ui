import { defineStore } from 'pinia';

// I added state management (I know it might be overkill) because it's typically how I prefer to separate concerns between Vue files and APIs.

// pre import JSON files 
const jsonFiles = import.meta.glob('@/data/*.json');
export const useJsonStore = defineStore('jsonStore', {
  state: () => ({
    jsonData: null,
    loading: false,
    error: false,
  }),
  getters: {
    isLoading(state) {
      return state.loading;
    },
    getJsonData(state) {
      return state.jsonData;
    },
    isError(state) {
      return state.error;
    }
  },
  actions: {
    async fetchJson(filePath) {
      this.loading = true;
      this.error = false;
      setTimeout(async () => {
        try {
          const jsonImport = jsonFiles[`/src/data/${filePath}.json`]
          if (!jsonImport) {
            throw new Error(`File not found: ${filePath}`);
          }
          // TODO - cache request
          const jsonModule = await jsonImport();
          this.jsonData = jsonModule;
          this.loading = false;
        } catch (error) {
          this.loading = false;
          this.error = true;
        }
      }, 1000);
    }
  },
});

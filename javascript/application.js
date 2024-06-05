import { createApp, ref } from "vue";

createApp({
  data() {
    return {
      message: "Hello from Vue.JS",
      count: ref(0)
    }
  }
}).mount('#results')

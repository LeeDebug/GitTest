<template>
  <div>
    <hello-world class="a" />
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
import HelloWorld from './views/home/index.vue'
// import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // const store = useStore()
    const arr = [];
    const obj = {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
        console.log(element);
        console.log(element);
        console.log(element);
        console.log(element);
      }
    }

    return {
    }
  }
})
</script>

<style scoped>
.main {
  border: 1px solid red;
  width: 800px;
  height: 300px;
}
button {
  display: block;
}
</style>
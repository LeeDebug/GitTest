<template>
  <div>
    <hello-world />
    <hello-world />
    <hello-world />
    <hello-world />
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
import HelloWorld from './views/home/index.vue'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // const store = useStore()

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
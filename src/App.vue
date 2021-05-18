<template>
  <div>
    <div v-for="(item) in obj" :key="item">
      {{ item }}
    </div>
    <!-- <hello-world class="a" /> -->
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
    const obj = {
      aa: 111,
      bb: 222,
      cc: 333,
    };

    return {
      obj,
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
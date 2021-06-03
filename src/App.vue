<template>
  <div class="main">
    <div v-for="(item, key, idx) in obj" :key="item">
      <span>item: {{ item }}；</span>
      <span>key: {{ key }}；</span>
      <span>idx: {{ idx }}</span>
    </div>
    <!-- <hello-world class="a" /> -->
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent } from 'vue'
// import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  components: {
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
</style>
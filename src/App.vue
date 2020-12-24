<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  {{ data1 }}
  <button @click="data1++">+1</button>
  <button @click="handleTest(data1)">按钮</button>
</template>

<script lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    mounted: {
      console.log('mounted======')
    }

    onMounted(() => {
      console.log('onMounted======')
    })

    onBeforeMount(() => {
      console.log('onBeforeMount======')
    })

    const data1:object = ref(2)
    const handleTest = (v) => {
      console.log(23333, v)
    }
    return {
      data1,
      handleTest
    }
  }
  // method: {
  //   handleTest () {
  //     console.log('2222222222')
  //   }
  // }
}
</script>

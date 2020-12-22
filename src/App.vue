<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  {{ data1 }}
  <button @click="handleTest()">按钮</button>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const data1 = 'dsds'
    return {
      data1
    }
  }
  // method: {
  //   handleTest () {
  //     console.log('2222222222')
  //   }
  // }
}
</script>

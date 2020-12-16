<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  jnkndnjkdna
  {{data1}}
  {{data2}}
  <button @click="handleTest()">按钮</button>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      data1: '我是data'
    }
  },
  computed: {
    data2 () {
      return 'dsdadjnsdjnks'
    }
  },
  method: {
    handleTest () {
      console.log('2222222222')
    }
  }
}
</script>

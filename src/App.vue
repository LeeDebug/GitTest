<template>
  <div class="main">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
    {{ data1 }}
    <button @click="data1++">+1</button>
    <button @click="handleTest(data1)">按钮2333</button>
    <div class="text">
      {{reactiveData}}
    </div>
    <div class="text">
      {{reactiveData.key2}}
    </div>
    <button @click="handleEdit()">修改reactiveData</button>
  </div>
</template>

<script lang="ts">
import { onBeforeMount, onMounted, ref, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // const store = useStore()

    mounted: {
      console.log('mounted======')
    }

    onMounted(() => {
      console.log('onMounted======')
    })

    onBeforeMount(() => {
      console.log('onBeforeMount======')
    })

    const data1:object = ref(2512)
    const reactiveData:any = reactive({
      key1: 233,
      key2: '你就开电脑开机撒'
    })
    function handleTest(v) {
      console.log(23239333, v)
    }
    function handleEdit() {
      reactiveData.key1 *= 2
    }
    return {
      data1,
      reactiveData,
      handleTest,
      handleEdit,
    }
  }
}
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
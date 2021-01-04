<template>
  <h1>{{ msg }}</h1>
  <h1>{{ msgC }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <button @click="count++">count is: {{ count }}</button>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { defineComponent } from "vue"
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {
    const store = 111
    console.log(2333, store)
    return {
      store
    }
  }
})
</script>

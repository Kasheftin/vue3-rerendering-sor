<template>
  <div>
    <button @click="counter++">
      {{ counter }}
    </button>
    <Dummy
      :prop1="{
        a: counter ? 1 : 0
      }"
    />
  </div>
</template>

<script>
import Dummy from '@/components/Dummy'

export default {
  components: {
    Dummy
  },
  data () {
    return {
      counter: 0
    }
  }
}
</script>

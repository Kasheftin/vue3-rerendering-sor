<template>
  <div>
    <button @click="counter++">
      {{ counter }}
    </button>
    <Dummy
      :prop1="sor.wrap({
        a: counter ? 1 : 0
      })"
      show-prop1
    />
  </div>
</template>

<script>
import SelectiveObjectReuse from 'selective-object-reuse'
import Dummy from '@/components/Dummy'

export default {
  components: {
    Dummy
  },
  data () {
    return {
      counter: 0,
      sor: new SelectiveObjectReuse()
    }
  }
}
</script>

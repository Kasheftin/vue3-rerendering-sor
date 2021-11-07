<template>
  <div>
    Dummy: {{ showProp1 ? prop1 : 'prop1 is hidden' }}
  </div>
</template>

<script>
export default {
  props: {
    prop1: Object,
    showProp1: Boolean
  },
  updated () {
    console.log('Dummy updated')
  }
}
</script>

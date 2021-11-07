<template>
  <div class="rr-user">
    <div>User: {{ user.name }}</div>
    <div>First Tag: {{ tag ? tag.name : 'No tags' }}</div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    tag: {
      type: [Object, undefined],
      default: undefined
    }
  },
  updated () {
    console.log(`UserWithFirstTag updated for ${this.user.name} user`)
  }
}
</script>

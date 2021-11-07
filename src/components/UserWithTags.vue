<template>
  <div class="rr-user">
    <div>User: {{ user.name }}</div>
    <div>Tags: {{ tags.length ? tags.map(tag => tag.name).join(', ') : 'No Tags' }}</div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    tags: {
      type: Array,
      required: true
    }
  },
  updated () {
    console.log(`UserWithTags updated for ${this.user.name} user`)
  }
}
</script>

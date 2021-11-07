<template>
  <div>
    <UserTagManager />
    <h3>
      Users with First Tag only
    </h3>
    <UserWithFirstTag
      v-for="usersWithTags in usersWithTags"
      :key="usersWithTags.id"
      :user="usersWithTags.user"
      :tag="usersWithTags.tags[0]"
    />
  </div>
</template>

<script>
import UserTagManager from '@/components/UserTagManager'
import UserWithFirstTag from '@/components/UserWithFirstTag'

export default {
  components: {
    UserTagManager,
    UserWithFirstTag
  },
  computed: {
    usersWithTags () {
      return this.$store.getters['example2/usersWithTags']
    }
  }
}
</script>

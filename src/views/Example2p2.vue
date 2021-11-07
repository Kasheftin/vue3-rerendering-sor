<template>
  <div>
    <UserTagManager />
    <h3>
      Users with Tags
    </h3>
    <UserWithTags
      v-for="usersWithTags in usersWithTags"
      :key="usersWithTags.id"
      :user="usersWithTags.user"
      :tags="usersWithTags.tags"
    />
  </div>
</template>

<script>
import UserTagManager from '@/components/UserTagManager'
import UserWithTags from '@/components/UserWithTags'

export default {
  components: {
    UserTagManager,
    UserWithTags
  },
  computed: {
    usersWithTags () {
      return this.$store.getters['example2/usersWithTags']
    }
  }
}
</script>

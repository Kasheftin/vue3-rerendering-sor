<template>
  <div>
    <h3>
      User-Tag Manger
    </h3>
    <table class="manager-table">
      <thead>
        <tr>
          <th key="stub-head" />
          <th v-for="tag in tags" :key="tag.id" class="header header--column">
            {{ tag.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td key="row-header" class="header header--row">
            {{ user.name }}
          </td>
          <td v-for="tag in tags" :key="tag.id">
            <input
              :checked="!!userTags[user.id + '-' + tag.id]"
              type="checkbox"
              @change="toggleUserTag(user.id, tag.id, $event)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    users () {
      return Object.values(this.$store.state.example2.users)
    },
    tags () {
      return Object.values(this.$store.state.example2.tags)
    },
    userTags () {
      return this.$store.state.example2.userTags.reduce((out, userTag) => {
        out[userTag.userId + '-' + userTag.tagId] = true
        return out
      }, {})
    }
  },
  methods: {
    toggleUserTag (userId, tagId, event) {
      this.$store.commit('example2/setUserTag', { userId, tagId, value: event.target.checked })
    }
  }
}
</script>

<style scoped>
.manager-table {
  width: 100%;
}
.manager-table td {
  padding: 3px 10px;
  border: 1px solid lightgray;
  text-align: center;
}
.manager-table .header {
  font-weight: bold;
}
.manager-table .header--row {
  text-align: left;
}
</style>

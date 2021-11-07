import uniqid from 'uniqid'
import SelectiveObjectReuse from 'selective-object-reuse'

const sor = new SelectiveObjectReuse()

export const state = () => {
  const userIds = []
  const users = {}
  const tags = {}
  for (let i = 0; i < 9; i++) {
    const id = uniqid()
    userIds.push(id)
    users[id] = { id, name: `User ${i + 1}` }
  }
  for (let i = 0; i < 5; i++) {
    const id = uniqid()
    tags[id] = { id, name: `Tag ${i + 1}` }
  }
  return {
    userIds,
    users,
    tags,
    userTags: []
  }
}

export const getters = {
  usersWithTags: (state) => state.userIds.map(userId => ({
    id: userId,
    user: state.users[userId],
    tags: state.userTags.filter(userTag => userTag.userId === userId).map(userTag => state.tags[userTag.tagId])
  })),
  usersWithTagsWrapped: (_, getters) => sor.wrap(getters.usersWithTags, 'usersWithTags')
}

export const mutations = {
  setUserTag (state, { userId, tagId, value }) {
    const index = state.userTags.findIndex(userTag => userTag.userId === userId && userTag.tagId === tagId)
    if (index === -1 && value) {
      state.userTags.push({ userId, tagId })
    } else if (index !== -1 && !value) {
      state.userTags.splice(index, 1)
    }
  }
}

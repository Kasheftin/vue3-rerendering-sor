import { createStore } from 'vuex'
import * as example2 from './example2'

export default createStore({
  modules: {
    example2: {
      ...example2,
      namespaced: true
    }
  }
})

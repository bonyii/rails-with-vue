import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'

const store = {
  namespaced: true,
  state: {
  },
  getters,
  mutations,
  actions
}

export default store

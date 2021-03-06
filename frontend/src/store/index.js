import vue from 'vue'
import vuex from 'vuex'

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'

import permission from './modules/permission'
import article from './modules/article'

const state = {
}

vue.use(vuex)

const store = new vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    permission,
    article
  }
})

export default store

import * as types from '../mutation-types'

// initial state
const state = {
  pagecount: 0
}

// getters
const getters = {
  pagecount: state => state.pagecount
}

// actions
const actions = {
  countPages ({ commit }, counter) {
    commit(types.COUNT_PAGES, counter)
  }
}

// mutations
const mutations = {
  [types.COUNT_PAGES] (state, counter) {
    state.pagecount = counter
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

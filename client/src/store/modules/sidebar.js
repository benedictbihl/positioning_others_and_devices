import * as types from '../mutation-types'

// initial state
const state = {
  sidebarOpen: false
}

// getters
const getters = {
  sidebarOpen: state => state.sidebarOpen
}

// actions
const actions = {
  toggleSidebar ({ commit }, state, open) {
    commit(types.TOGGLE_SIDEBAR, state)
  }
}

// mutations
const mutations = {
  [types.TOGGLE_SIDEBAR] (state, open) {
    state.sidebarOpen = open
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

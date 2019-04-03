import * as types from '../mutation-types'

// initial state
const state = {
  languageSelected: false
}

// getters
const getters = {
  languageSelected: state => state.languageSelected
}

// actions
const actions = {
  selectLanguage ({ commit }, lang) {
    commit(types.SELECT_LANGUAGE, lang)
  }
}

// mutations
const mutations = {
  [types.SELECT_LANGUAGE] (state, lang) {
    state.languageSelected = lang
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

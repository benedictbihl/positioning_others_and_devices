import * as types from '../mutation-types'

// initial state
const state = {
  subjectID: ''
}

// getters
const getters = {
  subjectID: state => state.subjectID
}

// actions
const actions = {
  storeSubjectID ({ commit }, id) {
    commit(types.STORE_SUBJECT_ID, id)
  }
}

// mutations
const mutations = {
  [types.STORE_SUBJECT_ID] (state, id) {
    state.subjectID = id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import * as types from '../mutation-types'

// initial state
const state = {
  items: [ { icon: 'account', name: 'Ich', db_table_name: 'me' } ]
}

// getters
const getters = {
  items: state => state.items
}

// actions
const actions = {
  addPersonToItems ({ commit }, item) {
    commit(types.ADD_PERSON_TO_ITEMS, {
      name: item.input,
      db_table_name: item.db_table_name,
      inputField: item.inputField,
      icon: 'account'
    })
  },
  alterPerson ({ commit }, item) {
    commit(types.ALTER_PERSON, {
      name: item.input,
      inputField: item.inputField
    })
  },
  addDeviceToItems ({ commit }, item) {
    commit(types.ADD_DEVICE_TO_ITEMS, {
      name: item.name,
      db_table_name: item.db_table_name,
      icon: item.icon
    })
  },
  removeDevice ({ commit }, item) {
    commit(types.REMOVE_DEVICE, {
      name: item.name
    })
  },
  clearItems ({ commit }) {
    commit(types.CLEAR_ITEMS, {
    })
  }
}

// mutations
const mutations = {
  [types.ADD_PERSON_TO_ITEMS] (state, item) {
    state.items.push(item)
  },
  [types.ALTER_PERSON] (state, item) {
    var index = state.items.findIndex(function (el) {
      return el.inputField === item.inputField
    })
    if (item.name.length !== 0) {
      state.items[index].name = item.name
    } else { // remove if input was cleared
      state.items.splice(index, 1)
    }
  },
  [types.ADD_DEVICE_TO_ITEMS] (state, item) {
    state.items.push(item)
  },
  [types.REMOVE_DEVICE] (state, item) {
    var index = state.items.findIndex(function (el) {
      return el.name === item.name
    })
    state.items.splice(index, 1)
  },
  [types.CLEAR_ITEMS] (state) {
    state.items = [ { icon: 'account', name: 'Ich' } ]
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

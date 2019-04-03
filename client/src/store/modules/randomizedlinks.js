// initial state
const state = {
  links: [{ name: 'Device Selection', route: 'selectdevices' }, { name: 'People Selection', route: 'selectpeople' }].sort(function () { return 0.5 - Math.random() })
}

// getters
const getters = {
  links: state => state.links
}

export default {
  state,
  getters
}

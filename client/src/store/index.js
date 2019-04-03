import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import sidebar from './modules/sidebar'
import selecteditems from './modules/selecteditems'
import randomizedlinks from './modules/randomizedlinks'
import pagecount from './modules/pagecount'
import language from './modules/language'
import subjectid from './modules/subjectid'

Vue.use(Vuex)

/**
 * @description use VuexPersistence to write to Session Storage -> data survives at page reload
 * @see {@link https://github.com/championswimmer/vuex-persist}
 */
const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    sidebar,
    selecteditems,
    randomizedlinks,
    pagecount,
    language,
    subjectid
  },
  plugins: [vuexLocal.plugin],
  strict: debug
})

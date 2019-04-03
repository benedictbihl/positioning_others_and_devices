import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueDraggable from 'vue-draggable'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import JsonExcel from 'vue-json-excel'

Vue.component('downloadExcel', JsonExcel)
Vue.use(VueDraggable)

Vue.config.productionTip = false

Vue.use(vuetify, {
  iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4'
  theme: {
    primary: '#00418b',
    secondary: '#70715E',
    // grey: '#ebebeb',
    error: '#B71C1C'
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import store from './store/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,   // inject store to all children
  template: '<App/>',
  components: { App }
})
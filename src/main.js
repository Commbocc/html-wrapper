import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import 'bootstrap'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#hc-main',
  extends: App
})

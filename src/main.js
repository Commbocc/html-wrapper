// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
// import router from './router'

import 'bootstrap'

import HcNavigation from './components/HcNavigation'
import HcBanner from './components/HcBanner'
import HcFooter from './components/HcFooter'

Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#hc-main',
  components: {
    HcNavigation,
    HcBanner,
    HcFooter
  }
})

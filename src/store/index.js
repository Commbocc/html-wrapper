import Vue from 'vue'
import Vuex from 'vuex'

import navigation, { footer, social } from './modules/navigation'
import search from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    navigation,
    footer,
    social,
    search
  }
})

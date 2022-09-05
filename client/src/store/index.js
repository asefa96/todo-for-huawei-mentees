import Vue from 'vue'
import Vuex from 'vuex'
import TodoModule from './modules/todo'
import plugins from './plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TodoModule
  },
  plugins
})

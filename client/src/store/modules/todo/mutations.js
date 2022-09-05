import * as types from './mutation-types'
import Vue from 'vue'

export default {
  [types.ADD_TODO] (state, todo) {
    state.todos.push(todo)
  },
  [types.DELETE_TODO] (state, id) {
    state.todos = state.todos.filter(item => item.id !== id)
  },
  [types.UPDATE_TODO] (state, todo) {
    const index = state.todos.findIndex(item => item.id === todo.id)
    Vue.set(state.todos, index, todo)
  }
}

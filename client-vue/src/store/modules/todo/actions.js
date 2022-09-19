import * as types from './mutation-types'
export default {
  addTodo ({ commit }, todo) {
    commit(types.ADD_TODO, todo)
  },
  deleteTodo ({ commit }, id) {
    commit(types.DELETE_TODO, id)
  },
  updateTodo ({ commit }, todo) {
    commit(types.UPDATE_TODO, todo)
  }
}

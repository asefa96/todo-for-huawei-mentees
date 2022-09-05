import store from '../store'

class TodoService {
  addTodo ({ todo, date, id }) {
    store.dispatch('TodoModule/addTodo', { ...todo, date: date, id: id })
  }

  deleteTodo ({ id }) {
    store.dispatch('TodoModule/deleteTodo', id)
  }

  updateTodo ({ todo }) {
    store.dispatch('TodoModule/updateTodo', { ...todo })
  }

  getTodoById ({ id }) {
    return store.getters['TodoModule/getTodoById'](id)
  }
}

export default new TodoService()

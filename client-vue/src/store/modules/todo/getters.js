
export default {
  getTodos: (state) => () => {
    console.log(state.todos)
    return state.todos
  },
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

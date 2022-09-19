function TodoDto ({ todo, id }) {
  return { todo: todo, id: id, date: new Date().toLocaleString() }
}

export default TodoDto

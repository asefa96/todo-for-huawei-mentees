class TodoController {
  constructor({ todoService }) {
    this.todoService=todoService
  }

  getTodo() {
    console.log('okok')
    return this.todoService.getTodo()
  }

  addTodo() {
    return "add toto";
  }
}

module.exports = TodoController;

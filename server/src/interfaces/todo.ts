import { Todo } from './../entities/todo';
export interface ITodoService {
  getTodos();
  updateTodo(todo:Todo);
  addTodo(todo:Todo);
  deleteTodo(id:number);
}

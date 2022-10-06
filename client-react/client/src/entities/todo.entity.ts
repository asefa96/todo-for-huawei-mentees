import { ITodo } from "./../types/todo";
class TodoEntity implements ITodo {
  id!: string;
  name!: string;
  status: string;
  date: string;
  constructor(name: string) {
    this.name = name;
    this.status = "Not Done";
    this.date = new Date().toLocaleString();
  }
}

export default TodoEntity;

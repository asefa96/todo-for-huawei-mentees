import { Repository } from "typeorm";
import { TYPES } from "../constants/types";
import { Todo } from "../entities/todo";
import { inject, injectable } from "inversify";
import { ITodoService } from "./../interfaces/todo";

@injectable()
export class TodoService implements ITodoService {
  private readonly _todoRepository: Repository<Todo>;

  public constructor(
    @inject(TYPES.TodoRepository) todoRepository: Repository<Todo>
  ) {
    this._todoRepository = todoRepository;
  }

  async getTodos() {
    return await this._todoRepository.find();
  }
  async addTodo(todo: Todo) {
    return await this._todoRepository.save(todo);
  }
  async updateTodo(todo: Todo) {
    return await this._todoRepository.update(todo.id, todo);
  }
  async deleteTodo(id: number) {
    return await this._todoRepository.delete({ id });
  }
}

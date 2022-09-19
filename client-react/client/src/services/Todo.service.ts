import { urls } from "../configs/api.configs";
import { ITodo } from "../types/todo";
import ApiService from "./Api.service";

class TodoService extends ApiService {
  async getTodos(): Promise<Array<ITodo>> {
    const resp = await this._get(urls.getTodos);
    return resp;
  }

  async updateTodo(todo: ITodo): Promise<ITodo> {
    const resp = await this._put(urls.updateTodo(todo.id), todo);
    return resp;
  }

  async deleteTodo(id: string): Promise<any> {
    const resp = await this._delete(urls.deleteTodo(id));
    return resp;
  }

  async addTodo(todo: ITodo): Promise<ITodo> {
    const resp = await this._post(urls.addTodo, { ...todo });
    return resp;
  }
}

export default new TodoService();

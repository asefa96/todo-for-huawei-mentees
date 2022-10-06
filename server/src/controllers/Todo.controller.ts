import * as express from "express";
import { inject } from "inversify";
import {
  controller,
  httpGet,
  httpPost,
  response,
  requestBody,
  httpDelete,
  requestParam,
  httpPut,
} from "inversify-express-utils";
import { Todo } from "../entities/todo";
import { TYPES } from "../constants/types";
import { TodoService } from "../services/Todo.service";

@controller("/todo")
export class MovieController {
  constructor(@inject(TYPES.TodoService) private todoService: TodoService) {}

  @httpGet("/")
  public async get(@response() res: express.Response) {
    try {
      return await this.todoService.getTodos();
    } catch (e) {
      res.status(500);
      res.send(e.message);
    }
  }

  @httpPost("/")
  public async post(
    @response() res: express.Response,
    @requestBody() newTodo: Todo
  ) {
    if (!newTodo.title) {
      res.status(400);
      res.send(`Invalid Movie!`);
    }
    try {
      await this.todoService.addTodo(newTodo);
      res.status(200).send({ msg: "Todo added successfully!" });
    } catch (e) {
      res.status(500);
      res.send(e.message);
    }
  }

  @httpPut("/:id")
  public async update(
    @response() res: express.Response,
     @requestParam("id") id: string,
    @requestBody() newTodo: Todo
  ) {
    try {
      await this.todoService.updateTodo(newTodo);
      res.status(200).send({ msg: "Todo updated successfully!" });
    } catch (e) {
      res.status(500);
      res.send(e.message);
    }
  }

  @httpDelete("/:id")
  public async delete(
    @response() res: express.Response,
    @requestParam("id") id: string
  ) {
    try {
      const todoId = parseInt(id);
      await this.todoService.deleteTodo(todoId)
      res.status(200).send({ msg: "Todo deleted successfully!" });
    } catch (e) {
      res.status(500);
      res.send(e.message);
    }
  }
}

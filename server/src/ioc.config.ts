import { TodoService } from "./services/Todo.service";
import { AsyncContainerModule } from "inversify";
import { Repository } from "typeorm";
import { Todo } from "./entities/todo";
import { DB } from "./loaders/DB";
import { getTodoRepository } from "./repositories/Todo.repository";
import { TYPES } from "./constants/types";
import { EventEmitter } from "events";
import { App } from "./loaders/App";

export const bindings = new AsyncContainerModule(async (bind) => {
  const mediator = new EventEmitter();
  await require("./controllers/Todo.controller");
  await new DB(mediator).conn();

  bind(TYPES.Mediator).toConstantValue(mediator);
  bind<App>(TYPES.App).to(App);
  bind<TodoService>(TYPES.TodoService).to(TodoService);
  bind<Repository<Todo>>(TYPES.TodoRepository)
    .toDynamicValue(() => {
      return getTodoRepository();
    })
    .inRequestScope();
});

const awilix = require("awilix");
const TodoController = require("./controller/todoController");
const TodoDao = require("./dao/dao");
const db = require("./db/db.json");
const TodoService = require("./service/todo.service.js");

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});


function setupDI(mediator) {
  mediator.once("init", () => {
    container.register({
      todoController: awilix.asClass(TodoController),

      todoService: awilix.asClass(TodoService),

      dao: awilix.asClass(TodoDao),

      db: awilix.asValue(db),
    });
    mediator.emit("di.ready", container);
  });
}

module.exports = {
  container,
  setupDI,
};

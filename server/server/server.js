const express = require("express");
const { setupDI } = require("../di-setup");
const apiErrorHandler = require("../error/api-error-handler");
const { EventEmitter } = require("events");

const mediator = new EventEmitter();

const router = require("../api");

class Server {
  constructor(mediator) {
    setupDI(mediator);
    mediator.emit("init");
    this.app = express();
    this.setup();
  }

  setup() {
    this.app.use(express.json());
    this.app.use("/", router);
    this.app.use(apiErrorHandler);
  }

  run(port) {
    this.server = this.app.listen(port, () => {
      console.log(`server running on port ${port}`);
      mediator.emit("server.ok");
    });
  }

  stop(done) {
    this.server.close(done);
  }
}

module.exports = Server;

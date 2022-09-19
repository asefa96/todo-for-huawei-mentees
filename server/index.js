const Server = require("./server/server");


const {EventEmitter} = require('events')

const mediator = new EventEmitter()

const server = new Server(mediator);
server.run(8081);


import { inject } from "inversify";
import { createConnection } from "typeorm";
import { TYPES } from "../constants/types";
import { Todo } from "../entities/todo";

export class DB {
  mediator: any;
  //    constructor(@inject(TYPES.Mediator) private _mediator: any) { }
  constructor(mediator) {
    this.mediator = mediator;
  }
  async conn() {
    // console.log(this._mediator)
    const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
    const DATABASE_USER = process.env.DATABASE_USER || "postgres";
    const DATABASE_PORT = 5432;
    const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "1234";
    const DATABASE_DB = "demo";

    const entities = [Todo];

    const conn = await createConnection({
      type: "postgres",
      host: DATABASE_HOST,
      port: DATABASE_PORT,
      username: DATABASE_USER,
      password: DATABASE_PASSWORD,
      database: DATABASE_DB,
      entities: entities,
      synchronize: true,
    });

    this.mediator.emit("db.ready", conn);
  }
}

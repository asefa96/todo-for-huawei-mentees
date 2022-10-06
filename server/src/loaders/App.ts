import { inject } from "inversify";
import { TYPES } from "../constants/types";

export class App {
  constructor(@inject(TYPES.Mediator) private mediator: any) {}

  init() {
    this.mediator.on('db.ready',()=>{
        console.log('app init')
    })
  }
}

import {
  venderService
} from "../Services/VenderService.js"
import {
  ProxyState
} from "../AppState.js"


function _consoleMessage() {
  console.log("This is from the controller!")
}

export default class VenderContoller {
  constructor() {
    console.log("Hello, does this work?");
    ProxyState.on("vender", _consoleMessage);
  }

  add() {
    venderService.add()
  }
}
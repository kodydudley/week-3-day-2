import {
  venderService
} from "../Services/VenderService.js"
import {
  ProxyState
} from "../AppState.js"
import Vender from "../Models/Vender.js";


function draw() {
  // console.log("This is from the controller34!")
  let vender = ProxyState.vender
  document.getElementById("vender").innerHTML = /*html*/ `
  <h1>${vender.total}</h1>
  `
}

export default class VenderContoller {
  constructor() {
    ProxyState.on("vender", draw);
  }

  add(input) {
    venderService.add(input)
  }

  buy(input) {
    venderService.buy(input)
  }

  total(input) {
    venderService.total(input)
  }
}
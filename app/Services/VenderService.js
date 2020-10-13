import {
  ProxyState
} from "../AppState.js"
import Vender from "../Models/Vender.js"
import Items from "../Models/Items.js"

class VenderService {
  add(num) {
    let vender = ProxyState.vender
    vender.total += num
    ProxyState.vender = vender;
  }

  buy(num) {
    let vender = ProxyState.vender
    if (vender.total >= num) {
      vender.total -= num
      vender.total = vender.total < 0 ? 0 : vender.total
      ProxyState.vender = vender;
    } else {
      document.getElementById("moreMoney").innerHTML = /*html*/ `
      <h1>You need more money!</h1>
      `
    }
  }

  total(num) {
    let vender = ProxyState.vender
    vender.total -= num
    ProxyState.vender = vender;
  }


}

// export const characterService = new CharacterService()
export const venderService = new VenderService
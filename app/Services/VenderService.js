import {
  ProxyState
} from "../AppState.js"
import Vender from "../Models/Vender.js"
// import Items from "../Models/Items.js"

class VenderService {
  add(num) {
    let vender = ProxyState.vender
    vender.total += num
    ProxyState.vender = vender;
  }

  buy(num) {
    let vender = ProxyState.vender
    vender.total -= num
    vender.total = vender.total < 0 ? 0 : vender.total
    ProxyState.vender = vender;
  }

  total(num) {
    let vender = ProxyState.vender
    vender.total -= num
    ProxyState.vender = vender;
  }
}

// export const characterService = new CharacterService()
export const venderService = new VenderService
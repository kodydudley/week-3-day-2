import {
  ProxyState
} from "../AppState.js"

class VenderService {
  add(input) {
    let vender = ProxyState.vender
    vender.total += input
    ProxyState.vender = vender
    console.log("Added Money!");
  }
}

// export const characterService = new CharacterService()
export const venderService = new VenderService
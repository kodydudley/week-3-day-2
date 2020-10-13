export default class Vender {
  constructor() {
    console.log("This is a working Vending Machine! - Model Vender")
    this.total = 0
    this.add = 0
    this.buy = {
      chips: 25,
      snickers: 100,
      soda: 50,
    }
  }
}
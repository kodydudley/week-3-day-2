export default class Items {
  constructor(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
  }

}
let chips = new Items("chips", .50, 50)
let snickers = new Items("snicker", 1, 50)
let soda = new Items("soda", 1.50, 50)
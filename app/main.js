import VenderController from "./Controllers/VenderController.js"
import ValuesController from "./Controllers/ValuesController.js";

class App {
  venderController = new VenderController();
}

window["app"] = new App();
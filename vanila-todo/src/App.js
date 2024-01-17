import { Button, Checkbox } from "./components";

class App {
  constructor() {
    this.defineWebComponents();
    this.render();
  }

  defineWebComponents() {
    customElements.define("button-component", Button);
    customElements.define("checkbox-component", Checkbox);
  }

  render() {
    const $app = document.getElementById("app");
    $app.innerHTML =
      "<button-component>TEST</button-component> <checkbox-component></checkbox-component>";
  }
}

new App();

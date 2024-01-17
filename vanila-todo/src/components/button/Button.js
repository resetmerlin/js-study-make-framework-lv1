import buttonStyle from "./Button.style";

class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>${buttonStyle}</style>
      <button class="button"><slot/>
      </button>`;
  }
}

export default Button;

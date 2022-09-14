import { h } from "@stencil/core";
export class MyCard {
  render() {
    return (h(MyComponent, { name: this.name }));
  }
  static get is() { return "my-card"; }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "name",
        "reflect": false
      }
    };
  }
}
const MyComponent = ({ name }) => {
  return (h("div", null, h("h1", null, "Hola, ", name)));
};

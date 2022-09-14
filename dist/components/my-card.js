import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const MyCard$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  render() {
    return (h(MyComponent, { name: this.name }));
  }
}, [0, "my-card", {
    "name": [1]
  }]);
const MyComponent = ({ name }) => {
  return (h("div", null, h("h1", null, "Hola, ", name)));
};
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-card"];
  components.forEach(tagName => { switch (tagName) {
    case "my-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyCard$1);
      }
      break;
  } });
}

const MyCard = MyCard$1;
const defineCustomElement = defineCustomElement$1;

export { MyCard, defineCustomElement };

import { r as registerInstance, h } from './index-8b7a55db.js';

const MyCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(MyComponent, { name: this.name }));
  }
};
const MyComponent = ({ name }) => {
  return (h("div", null, h("h1", null, "Hola, ", name)));
};

export { MyCard as my_card };

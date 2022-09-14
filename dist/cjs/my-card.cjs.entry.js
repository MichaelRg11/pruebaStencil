'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1b2cc697.js');

const MyCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  render() {
    return (index.h(MyComponent, { name: this.name }));
  }
};
const MyComponent = ({ name }) => {
  return (index.h("div", null, index.h("h1", null, "Hola, ", name)));
};

exports.my_card = MyCard;

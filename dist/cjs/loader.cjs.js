'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1b2cc697.js');

/*
 Stencil Client Patch Esm v2.18.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-card.cjs",[[0,"my-card",{"name":[1]}]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;

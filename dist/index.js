'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

let _ = require('./');

Object.keys(_).forEach(function(key) {
  if (key === 'default' || key === '__esModule') return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _[key];
    },
  });
});

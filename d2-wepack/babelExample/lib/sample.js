"use strict";

require("core-js/modules/es.array.from.js");
require("core-js/modules/es.string.iterator.js");
var sampleFn = function sampleFn(arr) {
  return Array.from(arr, function (i) {
    return i * i;
  });
};
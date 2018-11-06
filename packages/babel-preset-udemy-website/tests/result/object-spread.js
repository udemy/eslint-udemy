"use strict";

import "core-js/modules/es6.array.copy-within";
import "core-js/modules/es6.array.fill";
import "core-js/modules/es6.array.find";
import "core-js/modules/es6.array.find-index";
import "core-js/modules/es6.array.from";
import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.array.iterator";
import "core-js/modules/es6.array.of";
import "core-js/modules/es6.array.sort";
import "core-js/modules/es6.array.species";
import "core-js/modules/es6.date.to-json";
import "core-js/modules/es6.date.to-primitive";
import "core-js/modules/es6.function.has-instance";
import "core-js/modules/es6.function.name";
import "core-js/modules/es6.map";
import "core-js/modules/es6.math.acosh";
import "core-js/modules/es6.math.asinh";
import "core-js/modules/es6.math.atanh";
import "core-js/modules/es6.math.cbrt";
import "core-js/modules/es6.math.clz32";
import "core-js/modules/es6.math.cosh";
import "core-js/modules/es6.math.expm1";
import "core-js/modules/es6.math.fround";
import "core-js/modules/es6.math.hypot";
import "core-js/modules/es6.math.imul";
import "core-js/modules/es6.math.log1p";
import "core-js/modules/es6.math.log10";
import "core-js/modules/es6.math.log2";
import "core-js/modules/es6.math.sign";
import "core-js/modules/es6.math.sinh";
import "core-js/modules/es6.math.tanh";
import "core-js/modules/es6.math.trunc";
import "core-js/modules/es6.number.constructor";
import "core-js/modules/es6.number.epsilon";
import "core-js/modules/es6.number.is-finite";
import "core-js/modules/es6.number.is-integer";
import "core-js/modules/es6.number.is-nan";
import "core-js/modules/es6.number.is-safe-integer";
import "core-js/modules/es6.number.max-safe-integer";
import "core-js/modules/es6.number.min-safe-integer";
import "core-js/modules/es6.number.parse-float";
import "core-js/modules/es6.number.parse-int";
import "core-js/modules/es6.object.assign";
import "core-js/modules/es7.object.define-getter";
import "core-js/modules/es7.object.define-setter";
import "core-js/modules/es7.object.entries";
import "core-js/modules/es6.object.freeze";
import "core-js/modules/es6.object.get-own-property-descriptor";
import "core-js/modules/es7.object.get-own-property-descriptors";
import "core-js/modules/es6.object.get-own-property-names";
import "core-js/modules/es6.object.get-prototype-of";
import "core-js/modules/es7.object.lookup-getter";
import "core-js/modules/es7.object.lookup-setter";
import "core-js/modules/es6.object.prevent-extensions";
import "core-js/modules/es6.object.is";
import "core-js/modules/es6.object.is-frozen";
import "core-js/modules/es6.object.is-sealed";
import "core-js/modules/es6.object.is-extensible";
import "core-js/modules/es6.object.keys";
import "core-js/modules/es6.object.seal";
import "core-js/modules/es6.object.set-prototype-of";
import "core-js/modules/es7.object.values";
import "core-js/modules/es6.promise";
import "core-js/modules/es7.promise.finally";
import "core-js/modules/es6.reflect.apply";
import "core-js/modules/es6.reflect.construct";
import "core-js/modules/es6.reflect.define-property";
import "core-js/modules/es6.reflect.delete-property";
import "core-js/modules/es6.reflect.get";
import "core-js/modules/es6.reflect.get-own-property-descriptor";
import "core-js/modules/es6.reflect.get-prototype-of";
import "core-js/modules/es6.reflect.has";
import "core-js/modules/es6.reflect.is-extensible";
import "core-js/modules/es6.reflect.own-keys";
import "core-js/modules/es6.reflect.prevent-extensions";
import "core-js/modules/es6.reflect.set";
import "core-js/modules/es6.reflect.set-prototype-of";
import "core-js/modules/es6.regexp.constructor";
import "core-js/modules/es6.regexp.flags";
import "core-js/modules/es6.regexp.match";
import "core-js/modules/es6.regexp.replace";
import "core-js/modules/es6.regexp.split";
import "core-js/modules/es6.regexp.search";
import "core-js/modules/es6.regexp.to-string";
import "core-js/modules/es6.set";
import "core-js/modules/es6.symbol";
import "core-js/modules/es7.symbol.async-iterator";
import "core-js/modules/es6.string.anchor";
import "core-js/modules/es6.string.big";
import "core-js/modules/es6.string.blink";
import "core-js/modules/es6.string.bold";
import "core-js/modules/es6.string.code-point-at";
import "core-js/modules/es6.string.ends-with";
import "core-js/modules/es6.string.fixed";
import "core-js/modules/es6.string.fontcolor";
import "core-js/modules/es6.string.fontsize";
import "core-js/modules/es6.string.from-code-point";
import "core-js/modules/es6.string.includes";
import "core-js/modules/es6.string.italics";
import "core-js/modules/es6.string.iterator";
import "core-js/modules/es6.string.link";
import "core-js/modules/es7.string.pad-start";
import "core-js/modules/es7.string.pad-end";
import "core-js/modules/es6.string.raw";
import "core-js/modules/es6.string.repeat";
import "core-js/modules/es6.string.small";
import "core-js/modules/es6.string.starts-with";
import "core-js/modules/es6.string.strike";
import "core-js/modules/es6.string.sub";
import "core-js/modules/es6.string.sup";
import "core-js/modules/es6.typed.array-buffer";
import "core-js/modules/es6.typed.int8-array";
import "core-js/modules/es6.typed.uint8-array";
import "core-js/modules/es6.typed.uint8-clamped-array";
import "core-js/modules/es6.typed.int16-array";
import "core-js/modules/es6.typed.uint16-array";
import "core-js/modules/es6.typed.int32-array";
import "core-js/modules/es6.typed.uint32-array";
import "core-js/modules/es6.typed.float32-array";
import "core-js/modules/es6.typed.float64-array";
import "core-js/modules/es6.weak-map";
import "core-js/modules/es6.weak-set";
import "core-js/modules/web.timers";
import "core-js/modules/web.immediate";
import "core-js/modules/web.dom.iterable";
import "regenerator-runtime/runtime";

function React() {}

function Component() {}

export default [babelHelpers.objectSpread({
  a: 1
}, {
  b: 2
}), React.createElement(Component, Object.assign({
  a: 1
}, {
  b: 2
}))];

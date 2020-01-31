(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ \"./node_modules/lodash/_isFlattenable.js\");\n\n/**\n * The base implementation of `_.flatten` with support for restricting flattening.\n *\n * @private\n * @param {Array} array The array to flatten.\n * @param {number} depth The maximum recursion depth.\n * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.\n * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.\n * @param {Array} [result=[]] The initial result value.\n * @returns {Array} Returns the new flattened array.\n */\nfunction baseFlatten(array, depth, predicate, isStrict, result) {\n  var index = -1,\n      length = array.length;\n\n  predicate || (predicate = isFlattenable);\n  result || (result = []);\n\n  while (++index < length) {\n    var value = array[index];\n    if (depth > 0 && predicate(value)) {\n      if (depth > 1) {\n        // Recursively flatten arrays (susceptible to call stack limits).\n        baseFlatten(value, depth - 1, predicate, isStrict, result);\n      } else {\n        arrayPush(result, value);\n      }\n    } else if (!isStrict) {\n      result[result.length] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseFlatten;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseFlatten.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/** Built-in value references. */\nvar spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;\n\n/**\n * Checks if `value` is a flattenable `arguments` object or array.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.\n */\nfunction isFlattenable(value) {\n  return isArray(value) || isArguments(value) ||\n    !!(spreadableSymbol && value && value[spreadableSymbol]);\n}\n\nmodule.exports = isFlattenable;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_isFlattenable.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\");\n\n/**\n * Flattens `array` a single level deep.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {Array} array The array to flatten.\n * @returns {Array} Returns the new flattened array.\n * @example\n *\n * _.flatten([1, [2, [3, [4]], 5]]);\n * // => [1, 2, [3, [4]], 5]\n */\nfunction flatten(array) {\n  var length = array == null ? 0 : array.length;\n  return length ? baseFlatten(array, 1) : [];\n}\n\nmodule.exports = flatten;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/flatten.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar numberTag = '[object Number]';\n\n/**\n * Checks if `value` is classified as a `Number` primitive or object.\n *\n * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are\n * classified as numbers, use the `_.isFinite` method.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a number, else `false`.\n * @example\n *\n * _.isNumber(3);\n * // => true\n *\n * _.isNumber(Number.MIN_VALUE);\n * // => true\n *\n * _.isNumber(Infinity);\n * // => true\n *\n * _.isNumber('3');\n * // => false\n */\nfunction isNumber(value) {\n  return typeof value == 'number' ||\n    (isObjectLike(value) && baseGetTag(value) == numberTag);\n}\n\nmodule.exports = isNumber;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/arrow/ends.js":
/*!***************************!*\
  !*** ./src/arrow/ends.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isFunction */ \"./node_modules/lodash/isFunction.js\");\n/* harmony import */ var lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isFunction__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts */ \"./src/consts.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar endNode = function endNode(point) {\n  return lodash_isFunction__WEBPACK_IMPORTED_MODULE_0___default()(point.node) ? point.node() : point.node;\n};\n\nvar endXY = function endXY(point) {\n  var rect = endNode(point).getBoundingClientRect();\n\n  switch (point.direction) {\n    case _consts__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION\"].TOP_LEFT:\n      return {\n        x: rect.x,\n        y: rect.y\n      };\n\n    case _consts__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION\"].TOP:\n      return {\n        x: rect.x + rect.width / 2,\n        y: rect.y\n      };\n\n    case _consts__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION\"].TOP_RIGHT:\n      return {\n        x: rect.x + rect.width,\n        y: rect.y\n      };\n\n    case _consts__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION\"].RIGHT:\n      return {\n        x: rect.x + rect.width,\n        y: rect.y + rect.height / 2\n      };\n\n    case _consts__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION\"].BOTTOM_LEFT:\n      return {\n        x: rect.x,\n        y: rect.y + rect.height\n      };\n\n    case _consts__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION\"].BOTTOM:\n      return {\n        x: rect.x + rect.width / 2,\n        y: rect.y + rect.height\n      };\n\n    case _consts__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION\"].BOTTOM_RIGHT:\n      return {\n        x: rect.x + rect.width,\n        y: rect.y + rect.height\n      };\n\n    case _consts__WEBPACK_IMPORTED_MODULE_1__[\"DIRECTION\"].LEFT:\n      return {\n        x: rect.x,\n        y: rect.y + rect.height / 2\n      };\n\n    default:\n      throw new Error('unexpected type');\n  }\n};\n\nvar ends = function ends(point) {\n  return _objectSpread({}, point, {}, endXY(point));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ends);\n\n//# sourceURL=webpack:///./src/arrow/ends.js?");

/***/ }),

/***/ "./src/arrow/head.js":
/*!***************************!*\
  !*** ./src/arrow/head.js ***!
  \***************************/
/*! exports provided: headBezierAngle, headBezierAngleSmooth, headBezierXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headBezierAngle\", function() { return headBezierAngle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headBezierAngleSmooth\", function() { return headBezierAngleSmooth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headBezierXY\", function() { return headBezierXY; });\nvar PRECISION = 1000.0;\n\nvar round = function round(value) {\n  return Math.round(value * PRECISION) / PRECISION;\n};\n\nvar headBezierAngle = function headBezierAngle(t, points) {\n  var angle = function angle(prop) {\n    return Math.pow(1 - t, 2) * (points[1][prop] - points[0][prop]) + 2 * t * (1 - t) * (points[2][prop] - points[1][prop]) + t * t * (points[3][prop] - points[2][prop]);\n  };\n\n  var dx = angle('x');\n  var dy = angle('y');\n  var radius = round(-Math.atan2(dx, dy) + 0.5 * Math.PI);\n  var degree = round(radius * (180 / Math.PI));\n  return {\n    degree: degree,\n    radius: radius\n  };\n};\nvar headBezierAngleSmooth = function headBezierAngleSmooth(t, points) {\n  var angle = function angle(prop) {\n    return Math.pow(1 - t, 2) * (points[0][prop] - points[3][prop]) + 2 * t * (1 - t) * (points[3][prop] - points[0][prop]) + t * t * (points[3][prop] - points[0][prop]);\n  };\n\n  var dx = angle('x');\n  var dy = angle('y');\n  var radius = round(-Math.atan2(dx, dy) + 0.5 * Math.PI);\n  var degree = round(radius * (180 / Math.PI));\n  return {\n    degree: degree,\n    radius: radius\n  };\n};\nvar headBezierXY = function headBezierXY(t, points) {\n  var position = function position(prop) {\n    return Math.pow(1 - t, 3) * points[0][prop] + 3 * t * Math.pow(1 - t, 2) * points[1][prop] + 3 * t * t * (1 - t) * points[2][prop] + t * t * t * points[3][prop];\n  };\n\n  return {\n    x: position('x'),\n    y: position('y')\n  };\n};\n\n//# sourceURL=webpack:///./src/arrow/head.js?");

/***/ }),

/***/ "./src/arrow/path.js":
/*!***************************!*\
  !*** ./src/arrow/path.js ***!
  \***************************/
/*! exports provided: pointSubstract, pointAbsolute, pathListSVG, smoothCurvesPathSVG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointSubstract\", function() { return pointSubstract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointAbsolute\", function() { return pointAbsolute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathListSVG\", function() { return pathListSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smoothCurvesPathSVG\", function() { return smoothCurvesPathSVG; });\n/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/flatten */ \"./node_modules/lodash/flatten.js\");\n/* harmony import */ var lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_flatten__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts */ \"./src/consts.js\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point */ \"./src/arrow/point.js\");\n/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./head */ \"./src/arrow/head.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar pointSubstract = function pointSubstract(point, subtrahend) {\n  return _objectSpread({}, point, {\n    x: point.x - subtrahend,\n    y: point.y - subtrahend\n  });\n};\nvar pointAbsolute = function pointAbsolute(point, offset) {\n  return pointSubstract(_objectSpread({}, point, {\n    x: point.x - offset.x,\n    y: point.y - offset.y\n  }), -_consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"] * 2);\n};\n\nvar startPosition = function startPosition(from, to) {\n  return {\n    x: Math.min(from.x, to.x),\n    y: Math.min(from.y, to.y)\n  };\n};\n\nvar pathListSVG = function pathListSVG(points) {\n  var list = ['M'];\n  list.push(Object(_point__WEBPACK_IMPORTED_MODULE_2__[\"pointToArray\"])(points[0]));\n  list.push('C');\n  list.push(Object(_point__WEBPACK_IMPORTED_MODULE_2__[\"pointToArray\"])(points[1]));\n  list.push(',');\n  list.push(Object(_point__WEBPACK_IMPORTED_MODULE_2__[\"pointToArray\"])(points[2]));\n  list.push(',');\n  list.push(Object(_point__WEBPACK_IMPORTED_MODULE_2__[\"pointToArray\"])(points[3]));\n  return lodash_flatten__WEBPACK_IMPORTED_MODULE_0___default()(list).join(' ').replace(/ ,/g, ',');\n};\nvar smoothCurvesPathSVG = function smoothCurvesPathSVG(from, to) {\n  var middleX = (from.x - to.x) / 2;\n  var middleY = (from.y - to.y) / 2;\n  var root = \"m \".concat(to.x, \" ,\").concat(to.y, \" c \").concat(middleX, \",0\");\n  var center = \" \".concat(middleX, \",0 \").concat(middleX, \",\").concat(middleY, \" 0,\").concat(middleY);\n  var end = \" 0,\".concat(middleY, \" \").concat(middleX, \" ,\").concat(middleY);\n  return root + center + end;\n};\n\nvar pathViewportFromAndTo = function pathViewportFromAndTo(_ref) {\n  var from = _ref.from,\n      to = _ref.to,\n      pathXYPosition = _ref.pathXYPosition;\n  return {\n    width: Math.max(from.x, to.x) - pathXYPosition.x,\n    height: Math.max(from.y, to.y) - pathXYPosition.y\n  };\n};\n\nvar pathReducer = function pathReducer(points, reducer) {\n  return points.reduce(function (prev, curr) {\n    if (!prev) return curr;\n    return reducer(prev, curr);\n  });\n};\n\nvar pathSubstractStartPosition = function pathSubstractStartPosition(points) {\n  var min = pathReducer(points, function (prev, curr) {\n    return {\n      x: Math.min(prev.x, curr.x),\n      y: Math.min(prev.y, curr.y)\n    };\n  });\n  return points.map(function (point) {\n    return _objectSpread({}, point, {\n      x: point.x - min.x + _consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"],\n      y: point.y - min.y + _consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"]\n    });\n  });\n};\n\nvar pathListBezier = function pathListBezier(_ref2) {\n  var from = _ref2.from,\n      to = _ref2.to,\n      pathXYPosition = _ref2.pathXYPosition;\n  var viewport = pathViewportFromAndTo({\n    from: from,\n    to: to,\n    pathXYPosition: pathXYPosition\n  });\n  var points = [];\n  points.push(from);\n  points.push(Object(_point__WEBPACK_IMPORTED_MODULE_2__[\"pointBezier\"])(from, viewport));\n  points.push(Object(_point__WEBPACK_IMPORTED_MODULE_2__[\"pointBezier\"])(to, viewport));\n  points.push(to);\n  return pathSubstractStartPosition(points);\n};\n\nvar windowScroll = function windowScroll() {\n  if (!window) return {\n    scrollX: 0,\n    scrollY: 0\n  };\n  return {\n    x: window.scrollX,\n    y: window.scrollY\n  };\n};\n\nvar pathOffset = function pathOffset(points, pathXYPosition) {\n  var minPoint = function minPoint(prop) {\n    return Math.min(points[0][prop] - _consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"], points[3][prop] - _consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"]);\n  };\n\n  var scroll = windowScroll();\n  return {\n    x: pathXYPosition.x - minPoint('x') - _consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"] + scroll.x,\n    y: pathXYPosition.y - minPoint('y') - _consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"] + scroll.y\n  };\n};\n\nvar path = function path(from, to, shapeApparence) {\n  var pathXYPosition = startPosition(from, to);\n  var points = pathListBezier({\n    from: pointAbsolute(from, pathXYPosition),\n    to: pointAbsolute(to, pathXYPosition),\n    pathXYPosition: pathXYPosition\n  });\n  var size = pathReducer(points, function (prev, curr) {\n    return {\n      x: Math.max(prev.x, curr.x),\n      y: Math.max(prev.y, curr.y)\n    };\n  });\n  var angle = {};\n  var svgPath = '';\n\n  if (shapeApparence === _consts__WEBPACK_IMPORTED_MODULE_1__[\"SHAPES\"].STRAIGHT_CURVED) {\n    svgPath = smoothCurvesPathSVG(points[0], points[3]);\n    angle = Object(_head__WEBPACK_IMPORTED_MODULE_3__[\"headBezierAngleSmooth\"])(1, points);\n  } else {\n    svgPath = pathListSVG(points);\n    angle = Object(_head__WEBPACK_IMPORTED_MODULE_3__[\"headBezierAngle\"])(1, points);\n  }\n\n  return {\n    offset: pathOffset(points, pathXYPosition),\n    size: {\n      width: size.x + _consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"] * 2,\n      height: size.y + _consts__WEBPACK_IMPORTED_MODULE_1__[\"ARROW_HEAD_SIZE\"] * 2\n    },\n    points: svgPath,\n    head: _objectSpread({}, angle, {}, Object(_head__WEBPACK_IMPORTED_MODULE_3__[\"headBezierXY\"])(1, points))\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (path);\n\n//# sourceURL=webpack:///./src/arrow/path.js?");

/***/ }),

/***/ "./src/arrow/point.js":
/*!****************************!*\
  !*** ./src/arrow/point.js ***!
  \****************************/
/*! exports provided: pointToArray, pointBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointToArray\", function() { return pointToArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointBezier\", function() { return pointBezier; });\nvar pointToArray = function pointToArray(point) {\n  return [point.x, point.y];\n};\nvar pointBezier = function pointBezier(point, viewport) {\n  return {\n    x: point.x + viewport.width * point.translation[0],\n    y: point.y + viewport.height * point.translation[1]\n  };\n};\n\n//# sourceURL=webpack:///./src/arrow/point.js?");

/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: ARROW_HEAD_SIZE, DIRECTION, SHAPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ARROW_HEAD_SIZE\", function() { return ARROW_HEAD_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTION\", function() { return DIRECTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHAPES\", function() { return SHAPES; });\nvar ARROW_HEAD_SIZE = 10;\nvar DIRECTION = {\n  TOP_LEFT: 'top-left',\n  TOP: 'top',\n  TOP_RIGHT: 'top-right',\n  RIGHT: 'right',\n  BOTTOM_LEFT: 'bottom-left',\n  BOTTOM: 'bottom',\n  BOTTOM_RIGHT: 'bottom-right',\n  LEFT: 'left'\n};\nvar SHAPES = {\n  NORMAL: 'normal',\n  STRAIGHT_CURVED: 'straight-curved'\n};\n\n//# sourceURL=webpack:///./src/consts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, DIRECTION, SHAPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _jsx_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jsx/element */ \"./src/jsx/element.js\");\n/* harmony import */ var _arrow_ends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow/ends */ \"./src/arrow/ends.js\");\n/* harmony import */ var _arrow_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow/path */ \"./src/arrow/path.js\");\n/* harmony import */ var _observer_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observer/observer */ \"./src/observer/observer.js\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consts */ \"./src/consts.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DIRECTION\", function() { return _consts__WEBPACK_IMPORTED_MODULE_4__[\"DIRECTION\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SHAPES\", function() { return _consts__WEBPACK_IMPORTED_MODULE_4__[\"SHAPES\"]; });\n\n\n\n\n\n\nvar arrowCreate = function arrowCreate(_ref) {\n  var _ref$className = _ref.className,\n      className = _ref$className === void 0 ? 'arrow' : _ref$className,\n      from = _ref.from,\n      to = _ref.to,\n      shapeApparence = _ref.shapeApparence;\n  var arrow = Object(_arrow_path__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_arrow_ends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(from), Object(_arrow_ends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(to), shapeApparence);\n  var arrowRef = _jsx_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createRef();\n  var pathRef = _jsx_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createRef();\n  var headRef = _jsx_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createRef();\n  var node = _jsx_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(\"svg\", {\n    ref: arrowRef,\n    className: className,\n    style: {\n      top: arrow.offset.y,\n      left: arrow.offset.x,\n      position: 'absolute'\n    },\n    width: arrow.size.width,\n    height: arrow.size.height\n  }, _jsx_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(\"defs\", {\n    id: \"defs2\"\n  }, _jsx_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(\"marker\", {\n    id: \"arrow\",\n    viewBox: \"0 0 10 10\",\n    refX: \"5\",\n    refY: \"5\",\n    markerWidth: \"12\",\n    markerHeight: \"12\",\n    orient: \"auto-start-reverse\"\n  }, _jsx_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(\"path\", {\n    d: \"M 0 0 L 10 5 L 0 10 z\"\n  }))), _jsx_element__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(\"path\", {\n    ref: pathRef,\n    className: \"\".concat(className, \"__path\"),\n    d: arrow.points,\n    \"marker-end\": \"url(#arrow)\",\n    \"marker-start\": \"url(#arrow)\"\n  }));\n  var watcher = Object(_observer_observer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(from, to);\n  watcher.observe(function () {\n    var nextArrow = Object(_arrow_path__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Object(_arrow_ends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(from), Object(_arrow_ends__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(to), shapeApparence);\n    arrowRef.current.style.top = \"\".concat(nextArrow.offset.y, \"px\");\n    arrowRef.current.style.left = \"\".concat(nextArrow.offset.x, \"px\");\n    arrowRef.current.style.width = \"\".concat(nextArrow.size.width, \"px\");\n    arrowRef.current.style.height = \"\".concat(nextArrow.size.height, \"px\");\n    pathRef.current.setAttribute('d', nextArrow.points);\n    headRef.current.setAttribute('transform', \"rotate(\".concat(nextArrow.head.degree, \", \").concat(nextArrow.head.x, \", \").concat(nextArrow.head.y, \")\"));\n    headRef.current.setAttribute('x', \"\".concat(nextArrow.head.x - 10, \"px\"));\n    headRef.current.setAttribute('y', \"\".concat(nextArrow.head.y - 10, \"px\"));\n  });\n  return {\n    node: node,\n    timer: watcher.timer\n  };\n};\n\nif (window) window.arrowCreate = arrowCreate;\n/* harmony default export */ __webpack_exports__[\"default\"] = (arrowCreate);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/jsx/element.js":
/*!****************************!*\
  !*** ./src/jsx/element.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ \"./node_modules/lodash/isNumber.js\");\n/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ \"./node_modules/lodash/isObject.js\");\n/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar XMLNS = 'http://www.w3.org/2000/svg';\n\nvar createRef = function createRef() {\n  var set = function set(node) {\n    set.current = node;\n  };\n\n  set.current = null;\n  return set;\n};\n\nvar createStyle = function createStyle(attribute) {\n  var style = Object.entries(attribute).reduce(function (prev, _ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        key = _ref2[0],\n        value = _ref2[1];\n\n    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(value)) return \"\".concat(key, \": \").concat(value, \"px; \").concat(prev);\n    return \"\".concat(key, \": \").concat(value, \"; \").concat(prev);\n  }, '');\n  return style.endsWith('; ') ? style.substring(0, style.length - 2) : style;\n};\n\nvar createAttribute = function createAttribute(key, value) {\n  if (key === 'style') return createStyle(value);\n  return value;\n};\n\nvar attributeName = function attributeName(_ref3) {\n  var key = _ref3.key,\n      node = _ref3.node,\n      value = _ref3.value;\n\n  switch (key) {\n    case 'className':\n      return 'class';\n\n    case 'ref':\n      value(node);\n      return null;\n\n    default:\n      return key;\n  }\n};\n\nvar create = function create(tagName, attributes) {\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  var node = document.createElementNS(XMLNS, tagName);\n  Object.entries(attributes).forEach(function (_ref4) {\n    var _ref5 = _slicedToArray(_ref4, 2),\n        key = _ref5[0],\n        value = _ref5[1];\n\n    var name = attributeName({\n      key: key,\n      node: node,\n      value: value\n    });\n    if (name) node.setAttributeNS(null, name, createAttribute(key, value));\n  });\n\n  if (children.length) {\n    children.forEach(function (child) {\n      if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(child)) node.appendChild(child);else node.innerHTML = children;\n    });\n  }\n\n  return node;\n}; // Only for testing\n\n\nvar fake = function fake(_ref6) {\n  var x = _ref6.x,\n      y = _ref6.y,\n      width = _ref6.width,\n      height = _ref6.height;\n  return {\n    getBoundingClientRect: function getBoundingClientRect() {\n      return {\n        x: x,\n        y: y,\n        width: width,\n        height: height\n      };\n    }\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  create: create,\n  createRef: createRef,\n  fake: fake\n});\n\n//# sourceURL=webpack:///./src/jsx/element.js?");

/***/ }),

/***/ "./src/observer/observer.js":
/*!**********************************!*\
  !*** ./src/observer/observer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar TO_COMPARE = ['x', 'y', 'width', 'height'];\n\nvar comparePositions = function comparePositions(prev, node) {\n  var rect = node.getBoundingClientRect();\n  return {\n    equal: !TO_COMPARE.some(function (prop) {\n      return prev[prop] !== rect[prop];\n    }),\n    rect: rect\n  };\n};\n\nvar nextPositions = function nextPositions(_ref) {\n  var prevs = _ref.prevs,\n      from = _ref.from,\n      to = _ref.to;\n  var current = {};\n  current.from = comparePositions(prevs.from, from.node);\n  current.to = comparePositions(prevs.to, to.node);\n  if (current.from.equal && current.to.equal) return null;\n  return {\n    from: current.from.rect,\n    to: current.to.rect\n  };\n};\n\nvar observer = function observer(from, to) {\n  var prevs = {\n    from: {},\n    to: {}\n  };\n  var callback = null;\n  var timer = setInterval(function () {\n    if (!document.body.contains(from.node.parentNode) || !document.body.contains(to.node.parentNode)) {\n      clearInterval(timer);\n      return;\n    }\n\n    var next = nextPositions({\n      prevs: prevs,\n      from: from,\n      to: to\n    });\n    if (!next) return;\n    prevs.from = next.from;\n    prevs.to = next.to;\n    if (callback) callback();\n  }, 150);\n\n  var observe = function observe(handler) {\n    callback = handler;\n  };\n\n  return {\n    observe: observe,\n    timer: timer\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (observer);\n\n//# sourceURL=webpack:///./src/observer/observer.js?");

/***/ })

/******/ });
});
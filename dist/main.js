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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/arrow/ends.ts":
/*!***************************!*\
  !*** ./src/arrow/ends.ts ***!
  \***************************/
/*! exports provided: ends */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ends\", function() { return ends; });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ \"./src/consts.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\nvar endNode = function (point) { return (isFunction(point.node)\r\n    ? point.node()\r\n    : point.node); };\r\nvar endXY = function (point) {\r\n    var rect = endNode(point).getBoundingClientRect();\r\n    switch (point.direction) {\r\n        case _consts__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTION\"].TOP_LEFT:\r\n            return {\r\n                x: rect.x,\r\n                y: rect.y,\r\n            };\r\n        case _consts__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTION\"].TOP:\r\n            return {\r\n                x: rect.x + rect.width / 2,\r\n                y: rect.y,\r\n            };\r\n        case _consts__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTION\"].TOP_RIGHT:\r\n            return {\r\n                x: rect.x + rect.width,\r\n                y: rect.y,\r\n            };\r\n        case _consts__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTION\"].RIGHT:\r\n            return {\r\n                x: rect.x + rect.width,\r\n                y: rect.y + rect.height / 2,\r\n            };\r\n        case _consts__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTION\"].BOTTOM_LEFT:\r\n            return {\r\n                x: rect.x,\r\n                y: rect.y + rect.height,\r\n            };\r\n        case _consts__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTION\"].BOTTOM:\r\n            return {\r\n                x: rect.x + rect.width / 2,\r\n                y: rect.y + rect.height,\r\n            };\r\n        case _consts__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTION\"].BOTTOM_RIGHT:\r\n            return {\r\n                x: rect.x + rect.width,\r\n                y: rect.y + rect.height,\r\n            };\r\n        case _consts__WEBPACK_IMPORTED_MODULE_0__[\"DIRECTION\"].LEFT:\r\n            return {\r\n                x: rect.x,\r\n                y: rect.y + rect.height / 2,\r\n            };\r\n        default:\r\n            throw new Error('unexpected type');\r\n    }\r\n};\r\nvar ends = function (point) { return (__assign(__assign({}, point), endXY(point))); };\r\nfunction isFunction(functionToCheck) {\r\n    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';\r\n}\r\n\n\n//# sourceURL=webpack:///./src/arrow/ends.ts?");

/***/ }),

/***/ "./src/arrow/head.ts":
/*!***************************!*\
  !*** ./src/arrow/head.ts ***!
  \***************************/
/*! exports provided: headBezierAngle, headBezierAngleSmooth, headBezierXY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headBezierAngle\", function() { return headBezierAngle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headBezierAngleSmooth\", function() { return headBezierAngleSmooth; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headBezierXY\", function() { return headBezierXY; });\nvar PRECISION = 1000.0;\r\nvar round = function (value) { return Math.round(value * PRECISION) / PRECISION; };\r\nvar headBezierAngle = function (t, points) {\r\n    var angle = function (prop) { return (Math.pow((1 - t), 2)) * (points[1][prop] - points[0][prop])\r\n        + 2 * t * (1 - t) * (points[2][prop] - points[1][prop])\r\n        + t * t * (points[3][prop] - points[2][prop]); };\r\n    var dx = angle('x');\r\n    var dy = angle('y');\r\n    var radius = round(-Math.atan2(dx, dy) + 0.5 * Math.PI);\r\n    var degree = round(radius * (180 / Math.PI));\r\n    return {\r\n        degree: degree,\r\n        radius: radius,\r\n    };\r\n};\r\nvar headBezierAngleSmooth = function (t, points) {\r\n    var angle = function (prop) { return (Math.pow((1 - t), 2)) * (points[0][prop] - points[3][prop])\r\n        + 2 * t * (1 - t) * (points[3][prop] - points[0][prop])\r\n        + t * t * (points[3][prop] - points[0][prop]); };\r\n    var dx = angle('x');\r\n    var dy = angle('y');\r\n    var radius = round(-Math.atan2(dx, dy) + 0.5 * Math.PI);\r\n    var degree = round(radius * (180 / Math.PI));\r\n    return {\r\n        degree: degree,\r\n        radius: radius,\r\n    };\r\n};\r\nvar headBezierXY = function (t, points) {\r\n    var position = function (prop) { return (Math.pow((1 - t), 3)) * points[0][prop]\r\n        + 3 * t * (Math.pow((1 - t), 2)) * points[1][prop]\r\n        + 3 * t * t * (1 - t) * points[2][prop]\r\n        + t * t * t * points[3][prop]; };\r\n    return {\r\n        x: position('x'),\r\n        y: position('y'),\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/arrow/head.ts?");

/***/ }),

/***/ "./src/arrow/path.ts":
/*!***************************!*\
  !*** ./src/arrow/path.ts ***!
  \***************************/
/*! exports provided: pointSubstract, pointAbsolute, pathListSVG, smoothCurvesPathSVG, path */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointSubstract\", function() { return pointSubstract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointAbsolute\", function() { return pointAbsolute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pathListSVG\", function() { return pathListSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smoothCurvesPathSVG\", function() { return smoothCurvesPathSVG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"path\", function() { return path; });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ \"./src/consts.ts\");\n/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ \"./src/arrow/point.ts\");\n/* harmony import */ var _head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./head */ \"./src/arrow/head.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\n\r\n\r\n\r\nvar pointSubstract = function (point, subtrahend) { return (__assign(__assign({}, point), { x: point.x - subtrahend, y: point.y - subtrahend })); };\r\nvar pointAbsolute = function (point, offset) { return pointSubstract(__assign(__assign({}, point), { x: point.x - offset.x, y: point.y - offset.y }), -_consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"] * 2); };\r\nvar startPosition = function (from, to) { return ({\r\n    x: Math.min(from.x, to.x),\r\n    y: Math.min(from.y, to.y),\r\n}); };\r\nvar pathListSVG = function (points) {\r\n    var list = ['M'];\r\n    list.push(Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"pointToArray\"])(points[0]).toString());\r\n    list.push('C');\r\n    list.push(Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"pointToArray\"])(points[1]).toString());\r\n    list.push(',');\r\n    list.push(Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"pointToArray\"])(points[2]).toString());\r\n    list.push(',');\r\n    list.push(Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"pointToArray\"])(points[3]).toString());\r\n    return (list).reduce(function (a, b) { return a.concat(b); }, []).join(' ').replace(/ ,/g, ',');\r\n};\r\nvar smoothCurvesPathSVG = function (from, to) {\r\n    var middleX = (from.x - to.x) / 2;\r\n    var middleY = (from.y - to.y) / 2;\r\n    var root = \"m \" + to.x + \" ,\" + to.y + \" c \" + middleX + \",0\";\r\n    var center = \" \" + middleX + \",0 \" + middleX + \",\" + middleY + \" 0,\" + middleY;\r\n    var end = \" 0,\" + middleY + \" \" + middleX + \" ,\" + middleY;\r\n    return root + center + end;\r\n};\r\nvar pathViewportFromAndTo = function (_a) {\r\n    var from = _a.from, to = _a.to, pathXYPosition = _a.pathXYPosition;\r\n    return ({\r\n        width: Math.max(from.x, to.x) - pathXYPosition.x,\r\n        height: Math.max(from.y, to.y) - pathXYPosition.y,\r\n    });\r\n};\r\nvar pathReducer = function (points, reducer) { return points.reduce(function (prev, curr) {\r\n    if (!prev)\r\n        return curr;\r\n    return reducer(prev, curr);\r\n}); };\r\nvar pathSubstractStartPosition = function (points) {\r\n    var min = pathReducer(points, function (prev, curr) { return ({\r\n        x: Math.min(prev.x, curr.x),\r\n        y: Math.min(prev.y, curr.y),\r\n    }); });\r\n    return points.map(function (point) { return (__assign(__assign({}, point), { x: point.x - min.x + _consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"], y: point.y - min.y + _consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"] })); });\r\n};\r\nvar pathListBezier = function (_a) {\r\n    var from = _a.from, to = _a.to, pathXYPosition = _a.pathXYPosition;\r\n    var viewport = pathViewportFromAndTo({ from: from, to: to, pathXYPosition: pathXYPosition });\r\n    var points = [];\r\n    points.push(from);\r\n    points.push(Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"pointBezier\"])(from, viewport));\r\n    points.push(Object(_point__WEBPACK_IMPORTED_MODULE_1__[\"pointBezier\"])(to, viewport));\r\n    points.push(to);\r\n    return pathSubstractStartPosition(points);\r\n};\r\nvar windowScroll = function () {\r\n    if (!window)\r\n        return { scrollX: 0, scrollY: 0 };\r\n    return {\r\n        x: window.scrollX,\r\n        y: window.scrollY,\r\n    };\r\n};\r\nvar pathOffset = function (points, pathXYPosition) {\r\n    var minPoint = function (prop) { return Math.min(points[0][prop] - _consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"], points[3][prop] - _consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"]); };\r\n    var scroll = windowScroll();\r\n    return {\r\n        x: pathXYPosition.x - minPoint('x') - _consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"] + scroll.x,\r\n        y: pathXYPosition.y - minPoint('y') - _consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"] + scroll.y,\r\n    };\r\n};\r\nvar path = function (from, to, shapeApparence) {\r\n    var pathXYPosition = startPosition(from, to);\r\n    var points = pathListBezier({\r\n        from: pointAbsolute(from, pathXYPosition),\r\n        to: pointAbsolute(to, pathXYPosition),\r\n        pathXYPosition: pathXYPosition,\r\n    });\r\n    var size = pathReducer(points, function (prev, curr) { return ({\r\n        x: Math.max(prev.x, curr.x),\r\n        y: Math.max(prev.y, curr.y),\r\n    }); });\r\n    var angle = {};\r\n    var svgPath = '';\r\n    if (shapeApparence === _consts__WEBPACK_IMPORTED_MODULE_0__[\"SHAPES\"].STRAIGHT_CURVED) {\r\n        svgPath = smoothCurvesPathSVG(points[0], points[3]);\r\n        angle = Object(_head__WEBPACK_IMPORTED_MODULE_2__[\"headBezierAngleSmooth\"])(1, points);\r\n    }\r\n    else {\r\n        svgPath = pathListSVG(points);\r\n        angle = Object(_head__WEBPACK_IMPORTED_MODULE_2__[\"headBezierAngle\"])(1, points);\r\n    }\r\n    return {\r\n        offset: pathOffset(points, pathXYPosition),\r\n        size: {\r\n            width: size.x + _consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"] * 2,\r\n            height: size.y + _consts__WEBPACK_IMPORTED_MODULE_0__[\"ARROW_HEAD_SIZE\"] * 2,\r\n        },\r\n        points: svgPath,\r\n        head: __assign(__assign({}, angle), Object(_head__WEBPACK_IMPORTED_MODULE_2__[\"headBezierXY\"])(1, points)),\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/arrow/path.ts?");

/***/ }),

/***/ "./src/arrow/point.ts":
/*!****************************!*\
  !*** ./src/arrow/point.ts ***!
  \****************************/
/*! exports provided: pointToArray, pointBezier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointToArray\", function() { return pointToArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pointBezier\", function() { return pointBezier; });\nvar pointToArray = function (point) { return ([\r\n    point.x,\r\n    point.y,\r\n]); };\r\nvar pointBezier = function (point, viewport) { return ({\r\n    x: point.x + viewport.width * point.translation[0],\r\n    y: point.y + viewport.height * point.translation[1],\r\n}); };\r\n\n\n//# sourceURL=webpack:///./src/arrow/point.ts?");

/***/ }),

/***/ "./src/consts.ts":
/*!***********************!*\
  !*** ./src/consts.ts ***!
  \***********************/
/*! exports provided: ARROW_HEAD_SIZE, DIRECTION, SHAPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ARROW_HEAD_SIZE\", function() { return ARROW_HEAD_SIZE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DIRECTION\", function() { return DIRECTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SHAPES\", function() { return SHAPES; });\nvar ARROW_HEAD_SIZE = 10;\r\nvar DIRECTION = {\r\n    TOP_LEFT: 'top-left',\r\n    TOP: 'top',\r\n    TOP_RIGHT: 'top-right',\r\n    RIGHT: 'right',\r\n    BOTTOM_LEFT: 'bottom-left',\r\n    BOTTOM: 'bottom',\r\n    BOTTOM_RIGHT: 'bottom-right',\r\n    LEFT: 'left',\r\n};\r\nvar SHAPES = {\r\n    NORMAL: 'normal',\r\n    STRAIGHT_CURVED: 'straight-curved',\r\n};\r\n\n\n//# sourceURL=webpack:///./src/consts.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default, DIRECTION, SHAPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _arrow_ends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrow/ends */ \"./src/arrow/ends.ts\");\n/* harmony import */ var _arrow_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow/path */ \"./src/arrow/path.ts\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consts */ \"./src/consts.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DIRECTION\", function() { return _consts__WEBPACK_IMPORTED_MODULE_2__[\"DIRECTION\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"SHAPES\", function() { return _consts__WEBPACK_IMPORTED_MODULE_2__[\"SHAPES\"]; });\n\n\r\n\r\nvar arrowCreate = function (_a) {\r\n    var _b = _a.className, className = _b === void 0 ? 'arrow' : _b, from = _a.from, to = _a.to, shapeApparence = _a.shapeApparence;\r\n    /**\r\n     * @param {String} HTML representing any number of sibling elements\r\n     * @return {NodeList}\r\n     */\r\n    function htmlToElements(html) {\r\n        var template = document.createElement('template');\r\n        template.innerHTML = html;\r\n        return template.content.childNodes;\r\n    }\r\n    console.warn(from);\r\n    var arrow = Object(_arrow_path__WEBPACK_IMPORTED_MODULE_1__[\"path\"])(Object(_arrow_ends__WEBPACK_IMPORTED_MODULE_0__[\"ends\"])(from), Object(_arrow_ends__WEBPACK_IMPORTED_MODULE_0__[\"ends\"])(to), shapeApparence);\r\n    var node = htmlToElements(\"<svg class=\\\"\" + className + \"\\\"\\n    style=\\\"top: \" + arrow.offset.y + \"px; left: \" + arrow.offset.x + \"px; position: absolute\\\"\\n    width=\" + arrow.size.width + \" height=\\\"\" + arrow.size.height + \"\\\">\\n      <defs\\n        id=\\\"defs2\\\">\\n        <marker id=\\\"arrow\\\" viewBox=\\\"0 0 10 10\\\" refX=\\\"5\\\" refY=\\\"5\\\"\\n            markerWidth=\\\"12\\\" markerHeight=\\\"12\\\"\\n            orient=\\\"auto-start-reverse\\\">\\n          <path d=\\\"M 0 0 L 10 5 L 0 10 z\\\" />\\n        </marker>\\n      </defs>\\n      <path class=\\\"\" + className + \"__path\\\" d=\\\"\" + arrow.points + \"\\\" marker-end=\\\"url(#arrow)\\\" marker-start=\\\"url(#arrow)\\\"/>\\n    </svg>\")[0];\r\n    /* const watcher = observer(from, to);\r\n    watcher.observe(() => {\r\n      const nextArrow = path(ends(from), ends(to), shapeApparence);\r\n      ((node as SVGAElement).querySelector(`.${className}`) as SVGAElement).style.top = `${nextArrow.offset.y}px`;\r\n      ((node as SVGAElement).querySelector(`.${className}`) as SVGAElement).style.left = `${nextArrow.offset.x}px`;\r\n      ((node as SVGAElement).querySelector(`.${className}`) as SVGAElement).style.width = `${nextArrow.size.width}px`;\r\n      ((node as SVGAElement).querySelector(`.${className}`) as SVGAElement).style.height = `${nextArrow.size.height}px`;\r\n  \r\n      ((node as SVGAElement).querySelector(`.${className}__path`) as SVGAElement).setAttribute('d', nextArrow.points);\r\n  \r\n    }); */\r\n    return {\r\n        node: node,\r\n        timer: 0,\r\n    };\r\n};\r\nif (window) {\r\n    window.arrowCreate = arrowCreate;\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (arrowCreate);\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });
});
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/RoundProgressBar/style.css":
/*!***************************************************!*\
  !*** ./src/components/RoundProgressBar/style.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://progressbar/./src/components/RoundProgressBar/style.css?");

/***/ }),

/***/ "./src/globals.css":
/*!*************************!*\
  !*** ./src/globals.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://progressbar/./src/globals.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var _components_RoundProgressBar_RoundProgressBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/RoundProgressBar/RoundProgressBar.js */ \"./src/components/RoundProgressBar/RoundProgressBar.js\");\n\r\n\r\nclass App {\r\n  constructor() {\r\n    this.app = this.#render();\r\n  }\r\n\r\n  #render() {\r\n    const app = document.createElement('div');\r\n    app.classList.add('App');\r\n    const progressBar = new _components_RoundProgressBar_RoundProgressBar_js__WEBPACK_IMPORTED_MODULE_0__.RoundProgressBar();\r\n    app.appendChild(progressBar.render());\r\n    return app;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://progressbar/./src/App.js?");

/***/ }),

/***/ "./src/components/RoundProgressBar/RoundProgressBar.js":
/*!*************************************************************!*\
  !*** ./src/components/RoundProgressBar/RoundProgressBar.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RoundProgressBar: () => (/* binding */ RoundProgressBar)\n/* harmony export */ });\n/* harmony import */ var _framework_CustomFramework_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/CustomFramework.js */ \"./src/framework/CustomFramework.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/components/RoundProgressBar/style.css\");\n\r\n\r\n\r\nclass RoundProgressBar {\r\n  render() {\r\n    const progressBar = _framework_CustomFramework_js__WEBPACK_IMPORTED_MODULE_0__.CustomFramework.createElement('div', {}, 'Hello world');\r\n    console.log(progressBar);\r\n    return progressBar;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://progressbar/./src/components/RoundProgressBar/RoundProgressBar.js?");

/***/ }),

/***/ "./src/framework/CustomFramework.js":
/*!******************************************!*\
  !*** ./src/framework/CustomFramework.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomFramework: () => (/* binding */ CustomFramework)\n/* harmony export */ });\nclass CustomFramework {\r\n  #root;\r\n  #app;\r\n\r\n  constructor(rootId, app) {\r\n    this.#root = this.#createRoot(rootId);\r\n    this.#app = app;\r\n  }\r\n\r\n  static createElement(tag, props, ...children) {\r\n    const element = document.createElement(tag);\r\n\r\n    Object.keys(props).forEach((prop) => {\r\n      if (prop.startsWith('on') && typeof props[prop] === 'function') {\r\n        element.addEventListener(key.substring(2).toLowerCase(), props[key]);\r\n      } else {\r\n        element.setAttribute(prop, props[prop]);\r\n      }\r\n    });\r\n\r\n    children.forEach((child) => {\r\n      if (typeof child === 'string') {\r\n        element.appendChild(document.createTextNode(child));\r\n      } else if (child instanceof Node) {\r\n        element.appendChild(child);\r\n      }\r\n    });\r\n\r\n    return element;\r\n  }\r\n\r\n  #createRoot(rootId) {\r\n    return document.getElementById(rootId);\r\n  }\r\n\r\n  render() {\r\n    this.#root.appendChild(this.#app);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://progressbar/./src/framework/CustomFramework.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.js */ \"./src/App.js\");\n/* harmony import */ var _framework_CustomFramework_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework/CustomFramework.js */ \"./src/framework/CustomFramework.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals.css */ \"./src/globals.css\");\n\r\n\r\n\r\n\r\nconst { app } = new _App_js__WEBPACK_IMPORTED_MODULE_0__.App();\r\nconst root = new _framework_CustomFramework_js__WEBPACK_IMPORTED_MODULE_1__.CustomFramework('root', app);\r\nroot.render();\r\n\n\n//# sourceURL=webpack://progressbar/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
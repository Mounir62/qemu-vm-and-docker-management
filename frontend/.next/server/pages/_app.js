/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// frontend/components/Layout.js\n\n\nconst tabs = [\n    \"Disk Manager\",\n    \"VM Manager\",\n    \"Docker Manager\"\n];\nfunction Layout({ children }) {\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tabs[0]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav-tabs p-4\",\n                children: tabs.map((tab)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        onClick: ()=>setActive(tab),\n                        className: `nav-tab mr-4 ${active === tab ? \"nav-tab-active\" : \"\"}`,\n                        children: tab\n                    }, tab, false, {\n                        fileName: \"E:\\\\projects_1.0\\\\QEMU-Launcher-WebApp\\\\frontend\\\\components\\\\Layout.js\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\projects_1.0\\\\QEMU-Launcher-WebApp\\\\frontend\\\\components\\\\Layout.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-1 p-6 overflow-auto\",\n                children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {\n                    activeTab: active\n                })\n            }, void 0, false, {\n                fileName: \"E:\\\\projects_1.0\\\\QEMU-Launcher-WebApp\\\\frontend\\\\components\\\\Layout.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\projects_1.0\\\\QEMU-Launcher-WebApp\\\\frontend\\\\components\\\\Layout.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGdDQUFnQzs7QUFDTztBQUV2QyxNQUFNRSxPQUFPO0lBQUM7SUFBZ0I7SUFBYztDQUFpQjtBQUU5QyxTQUFTQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTtJQUN6QyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUNDLElBQUksQ0FBQyxFQUFFO0lBRTVDLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ1pOLEtBQUtRLEdBQUcsQ0FBQ0MsQ0FBQUEsb0JBQ1IsOERBQUNDO3dCQUVDQyxTQUFTLElBQU1QLFVBQVVLO3dCQUN6QkgsV0FBVyxDQUFDLGFBQWEsRUFDdkJILFdBQVdNLE1BQU0sbUJBQW1CLEdBQ3JDLENBQUM7a0NBRURBO3VCQU5JQTs7Ozs7Ozs7OzswQkFZWCw4REFBQ0c7Z0JBQUtOLFdBQVU7MEJBQ2JSLGNBQUFBLHlEQUFrQixDQUFDSSxVQUFVO29CQUFFWSxXQUFXWDtnQkFBTzs7Ozs7Ozs7Ozs7O0FBSTFEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGFpbmVycGlsb3QtZnJvbnRlbmQvLi9jb21wb25lbnRzL0xheW91dC5qcz81MTVjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb250ZW5kL2NvbXBvbmVudHMvTGF5b3V0LmpzXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgdGFicyA9IFsnRGlzayBNYW5hZ2VyJywgJ1ZNIE1hbmFnZXInLCAnRG9ja2VyIE1hbmFnZXInXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSh0YWJzWzBdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICB7LyogTmF2YmFyICovfVxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdi10YWJzIHAtNFwiPlxyXG4gICAgICAgIHt0YWJzLm1hcCh0YWIgPT4gKFxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAga2V5PXt0YWJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZSh0YWIpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtdGFiIG1yLTQgJHtcclxuICAgICAgICAgICAgICBhY3RpdmUgPT09IHRhYiA/ICduYXYtdGFiLWFjdGl2ZScgOiAnJ1xyXG4gICAgICAgICAgICB9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RhYn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9uYXY+XHJcblxyXG4gICAgICB7LyogQ29udGVudCAqL31cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC0xIHAtNiBvdmVyZmxvdy1hdXRvXCI+XHJcbiAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgeyBhY3RpdmVUYWI6IGFjdGl2ZSB9KX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidGFicyIsIkxheW91dCIsImNoaWxkcmVuIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwibWFwIiwidGFiIiwic3BhbiIsIm9uQ2xpY2siLCJtYWluIiwiY2xvbmVFbGVtZW50IiwiYWN0aXZlVGFiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layout.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n// frontend/pages/_app.js\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"E:\\\\projects_1.0\\\\QEMU-Launcher-WebApp\\\\frontend\\\\pages\\\\_app.js\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\projects_1.0\\\\QEMU-Launcher-WebApp\\\\frontend\\\\pages\\\\_app.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHlCQUF5Qjs7QUFDSztBQUNXO0FBRTFCLFNBQVNDLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDcEQscUJBQ0UsOERBQUNILDBEQUFNQTtrQkFDTCw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhaW5lcnBpbG90LWZyb250ZW5kLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZyb250ZW5kL3BhZ2VzL19hcHAuanNcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
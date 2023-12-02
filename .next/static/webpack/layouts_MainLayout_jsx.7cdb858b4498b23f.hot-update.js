"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("layouts_MainLayout_jsx",{

/***/ "./components/Footer.jsx":
/*!*******************************!*\
  !*** ./components/Footer.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ \"./components/Logo.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants_appUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/appUser */ \"./constants/appUser.js\");\n\n\n\n\n\n\nlet color = {\n    light: {\n        primary: \"#1d2e3d\",\n        secondary: \"#fff\"\n    },\n    dark: {\n        primary: \"#354656\",\n        secondary: \"#fff\"\n    }\n};\nconst FooterSection = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: \"FooterSection\"\n        }, void 0, false)\n    }, void 0, false);\n};\n_c = FooterSection;\nconst FooterData = ()=>{\n    const startYear = 2023;\n    const currentYear = new Date().getFullYear();\n    let yearText;\n    if (currentYear > startYear) {\n        yearText = \"\".concat(startYear, \"-\").concat(currentYear);\n    } else {\n        yearText = \"\".concat(startYear);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \" \",\n            yearText,\n            \" \\xa9 T\\xfcm Hakları Saklıdır.\"\n        ]\n    }, void 0, true);\n};\n_c1 = FooterData;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c2 = react__WEBPACK_IMPORTED_MODULE_3___default().memo(FooterSection));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"FooterSection\");\n$RefreshReg$(_c1, \"FooterData\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVkwQjtBQUNBO0FBQ0c7QUFFSDtBQUNvQjtBQUU5QyxJQUFJZSxRQUFRO0lBQ1ZDLE9BQU87UUFDTEMsU0FBUztRQUNUQyxXQUFXO0lBQ2I7SUFDQUMsTUFBTTtRQUNKRixTQUFTO1FBQ1RDLFdBQVc7SUFDYjtBQUNGO0FBRUEsTUFBTUUsZ0JBQWdCO0lBQ3BCLHFCQUNFO2tCQUNFO3NCQUFFOzs7QUFHUjtLQU5NQTtBQVFOLE1BQU1DLGFBQWE7SUFDakIsTUFBTUMsWUFBWTtJQUNsQixNQUFNQyxjQUFjLElBQUlDLE9BQU9DLFdBQVc7SUFDMUMsSUFBSUM7SUFDSixJQUFJSCxjQUFjRCxXQUFXO1FBQzNCSSxXQUFXLEdBQWdCSCxPQUFiRCxXQUFVLEtBQWUsT0FBWkM7SUFDN0IsT0FBTztRQUNMRyxXQUFXLEdBQWEsT0FBVko7SUFDaEI7SUFDQSxxQkFBTzs7WUFBRTtZQUFFSTtZQUFTOzs7QUFDdEI7TUFWTUw7QUFZTixrRkFBZVIsaURBQVUsQ0FBQ08sY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Zvb3Rlci5qc3g/Mzg5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIFN0YWNrLFxyXG4gIExpbmsgYXMgQ0xpbmssXHJcbiAgQm94LFxyXG4gIGNoYWtyYSxcclxuICBDb250YWluZXIsXHJcbiAgVGV4dCxcclxuICBWaXN1YWxseUhpZGRlbixcclxuICB1c2VDb2xvck1vZGVWYWx1ZSxcclxuICBGbGV4LFxyXG4gIFNpbXBsZUdyaWQsXHJcbiAgdXNlQ29sb3JNb2RlLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL0xvZ29cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhcHBVc2VyIH0gZnJvbSBcIkAvY29uc3RhbnRzL2FwcFVzZXJcIjtcclxuXHJcbmxldCBjb2xvciA9IHtcclxuICBsaWdodDoge1xyXG4gICAgcHJpbWFyeTogXCIjMWQyZTNkXCIsXHJcbiAgICBzZWNvbmRhcnk6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbiAgZGFyazoge1xyXG4gICAgcHJpbWFyeTogXCIjMzU0NjU2XCIsXHJcbiAgICBzZWNvbmRhcnk6IFwiI2ZmZlwiLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBGb290ZXJTZWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8PkZvb3RlclNlY3Rpb248Lz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGb290ZXJEYXRhID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXJ0WWVhciA9IDIwMjM7XHJcbiAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XHJcbiAgbGV0IHllYXJUZXh0O1xyXG4gIGlmIChjdXJyZW50WWVhciA+IHN0YXJ0WWVhcikge1xyXG4gICAgeWVhclRleHQgPSBgJHtzdGFydFllYXJ9LSR7Y3VycmVudFllYXJ9YDtcclxuICB9IGVsc2Uge1xyXG4gICAgeWVhclRleHQgPSBgJHtzdGFydFllYXJ9YDtcclxuICB9XHJcbiAgcmV0dXJuIDw+IHt5ZWFyVGV4dH0gJmNvcHk7IFTDvG0gSGFrbGFyxLEgU2FrbMSxZMSxci48Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3RlclNlY3Rpb24pO1xyXG4iXSwibmFtZXMiOlsiU3RhY2siLCJMaW5rIiwiQ0xpbmsiLCJCb3giLCJjaGFrcmEiLCJDb250YWluZXIiLCJUZXh0IiwiVmlzdWFsbHlIaWRkZW4iLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIkZsZXgiLCJTaW1wbGVHcmlkIiwidXNlQ29sb3JNb2RlIiwiTG9nbyIsIlJlYWN0IiwiYXBwVXNlciIsImNvbG9yIiwibGlnaHQiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwiZGFyayIsIkZvb3RlclNlY3Rpb24iLCJGb290ZXJEYXRhIiwic3RhcnRZZWFyIiwiY3VycmVudFllYXIiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJ5ZWFyVGV4dCIsIm1lbW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.jsx\n"));

/***/ })

});
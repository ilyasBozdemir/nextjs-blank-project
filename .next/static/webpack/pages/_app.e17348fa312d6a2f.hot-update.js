"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./contexts/AppContext.js":
/*!********************************!*\
  !*** ./contexts/AppContext.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppContextProvider: function() { return /* binding */ AppContextProvider; },\n/* harmony export */   useAppContext: function() { return /* binding */ useAppContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appContextValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appContextValues */ \"./contexts/appContextValues.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst useAppContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppContext);\n};\n_s(useAppContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst AppContextProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const navbarLinks = _appContextValues__WEBPACK_IMPORTED_MODULE_2__.initialNavbarLinks;\n    const [footerData, setFooterData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_appContextValues__WEBPACK_IMPORTED_MODULE_2__.initialFooterData);\n    const [siteInfo, setSiteInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_appContextValues__WEBPACK_IMPORTED_MODULE_2__.initialSiteInfo);\n    const contextValue = {\n        navbarLinks,\n        setNavbarLinks,\n        footerData,\n        setFooterData,\n        siteInfo,\n        setSiteInfo\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Github\\\\nextjs-blank-project\\\\contexts\\\\AppContext.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AppContextProvider, \"7Whschij/neZo3K4vShf//Z82Hs=\");\n_c = AppContextProvider;\nvar _c;\n$RefreshReg$(_c, \"AppContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BcHBDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRTtBQU12QztBQUU1QixNQUFNTywyQkFBYU4sb0RBQWFBO0FBRXpCLE1BQU1PLGdCQUFnQjs7SUFDM0IsT0FBT04saURBQVVBLENBQUNLO0FBQ3BCLEVBQUU7R0FGV0M7QUFJTixNQUFNQyxxQkFBcUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7O0lBQzdDLE1BQU1DLGNBQVlQLGlFQUFrQkE7SUFFcEMsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDRSxnRUFBaUJBO0lBRTlELE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQ0csOERBQWVBO0lBRXhELE1BQU1VLGVBQWU7UUFDbkJMO1FBQ0FNO1FBQ0FMO1FBQ0FDO1FBQ0FDO1FBQ0FDO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ1IsV0FBV1csUUFBUTtRQUFDQyxPQUFPSDtrQkFBZU47Ozs7OztBQUUvQyxFQUFFO0lBbEJXRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb250ZXh0cy9BcHBDb250ZXh0LmpzP2NiMzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIGluaXRpYWxOYXZiYXJMaW5rcyxcclxuICBpbml0aWFsRm9vdGVyRGF0YSxcclxuICBpbml0aWFsU2l0ZUluZm8sXHJcbn0gZnJvbSBcIi4vYXBwQ29udGV4dFZhbHVlc1wiO1xyXG5cclxuY29uc3QgQXBwQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBcHBDb250ZXh0ID0gKCkgPT4ge1xyXG4gIHJldHVybiB1c2VDb250ZXh0KEFwcENvbnRleHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBuYXZiYXJMaW5rcz1pbml0aWFsTmF2YmFyTGlua3NcclxuXHJcbiAgY29uc3QgW2Zvb3RlckRhdGEsIHNldEZvb3RlckRhdGFdID0gdXNlU3RhdGUoaW5pdGlhbEZvb3RlckRhdGEpO1xyXG5cclxuICBjb25zdCBbc2l0ZUluZm8sIHNldFNpdGVJbmZvXSA9IHVzZVN0YXRlKGluaXRpYWxTaXRlSW5mbyk7XHJcblxyXG4gIGNvbnN0IGNvbnRleHRWYWx1ZSA9IHtcclxuICAgIG5hdmJhckxpbmtzLFxyXG4gICAgc2V0TmF2YmFyTGlua3MsXHJcbiAgICBmb290ZXJEYXRhLFxyXG4gICAgc2V0Rm9vdGVyRGF0YSxcclxuICAgIHNpdGVJbmZvLFxyXG4gICAgc2V0U2l0ZUluZm8sXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHRWYWx1ZX0+e2NoaWxkcmVufTwvQXBwQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiaW5pdGlhbE5hdmJhckxpbmtzIiwiaW5pdGlhbEZvb3RlckRhdGEiLCJpbml0aWFsU2l0ZUluZm8iLCJBcHBDb250ZXh0IiwidXNlQXBwQ29udGV4dCIsIkFwcENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibmF2YmFyTGlua3MiLCJmb290ZXJEYXRhIiwic2V0Rm9vdGVyRGF0YSIsInNpdGVJbmZvIiwic2V0U2l0ZUluZm8iLCJjb250ZXh0VmFsdWUiLCJzZXROYXZiYXJMaW5rcyIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AppContext.js\n"));

/***/ })

});
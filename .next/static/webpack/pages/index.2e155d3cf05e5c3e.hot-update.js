"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Wrapper/PageWrapper */ \"./components/Wrapper/PageWrapper.jsx\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Home() {\n    const links = [\n        {\n            title: \"Sitemap Index\",\n            path: \"/sitemap/sitemap_index.xml\"\n        },\n        {\n            title: \"Pages Sitemap\",\n            path: \"/sitemap/pages-sitemap.xml\"\n        },\n        {\n            title: \"Blog Sitemap\",\n            path: \"/sitemap/blog-sitemap.xml\"\n        },\n        {\n            title: \"Robots.txt\",\n            path: \"/robots.txt\"\n        },\n        {\n            title: \"RSS blog-1\",\n            path: \"/rss/blog-1.xml\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n            as: \"nav\",\n            direction: \"column\",\n            justifyContent: \"center\",\n            textAlign: \"center\",\n            children: links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: link.path,\n                    locale: \"tr\",\n                    target: \"_blank\",\n                    children: link.title\n                }, link.path, false, {\n                    fileName: \"D:\\\\Github\\\\nextjs-blank-project\\\\pages\\\\index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"D:\\\\Github\\\\nextjs-blank-project\\\\pages\\\\index.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Github\\\\nextjs-blank-project\\\\pages\\\\index.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUM3QjtBQUNVO0FBQ1g7QUFFZCxTQUFTSTtJQUN0QixNQUFNQyxRQUFRO1FBQ1o7WUFDRUMsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtRQUNBO1lBQ0VELE9BQU87WUFDUEMsTUFBTTtRQUNSO1FBRUE7WUFDRUQsT0FBTztZQUNQQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxPQUFPO1lBQ1BDLE1BQU07UUFDUjtLQUNEO0lBRUQscUJBQ0UsOERBQUNQLHVFQUFXQTtrQkFDViw0RUFBQ0Usa0RBQUlBO1lBQ0hNLElBQUk7WUFDSkMsV0FBVztZQUNYQyxnQkFBZ0I7WUFDaEJDLFdBQVc7c0JBRVZOLE1BQU1PLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ1Ysa0RBQUlBO29CQUFpQlcsTUFBTUQsS0FBS04sSUFBSTtvQkFBRVEsUUFBUTtvQkFBTUMsUUFBTzs4QkFDekRILEtBQUtQLEtBQUs7bUJBREZPLEtBQUtOLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQU85QjtLQXpDd0JIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlV3JhcHBlciBmcm9tIFwiQC9jb21wb25lbnRzL1dyYXBwZXIvUGFnZVdyYXBwZXJcIjtcclxuaW1wb3J0IHJvdXRlcyBmcm9tIFwiQC9yb3V0ZXNcIjtcclxuaW1wb3J0IHsgRmxleCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgbGlua3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlNpdGVtYXAgSW5kZXhcIixcclxuICAgICAgcGF0aDogXCIvc2l0ZW1hcC9zaXRlbWFwX2luZGV4LnhtbFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUGFnZXMgU2l0ZW1hcFwiLFxyXG4gICAgICBwYXRoOiBcIi9zaXRlbWFwL3BhZ2VzLXNpdGVtYXAueG1sXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJCbG9nIFNpdGVtYXBcIixcclxuICAgICAgcGF0aDogXCIvc2l0ZW1hcC9ibG9nLXNpdGVtYXAueG1sXCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiUm9ib3RzLnR4dFwiLFxyXG4gICAgICBwYXRoOiBcIi9yb2JvdHMudHh0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJSU1MgYmxvZy0xXCIsXHJcbiAgICAgIHBhdGg6IFwiL3Jzcy9ibG9nLTEueG1sXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZVdyYXBwZXI+XHJcbiAgICAgIDxGbGV4XHJcbiAgICAgICAgYXM9e1wibmF2XCJ9XHJcbiAgICAgICAgZGlyZWN0aW9uPXtcImNvbHVtblwifVxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtcImNlbnRlclwifVxyXG4gICAgICAgIHRleHRBbGlnbj17XCJjZW50ZXJcIn1cclxuICAgICAgPlxyXG4gICAgICAgIHtsaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17bGluay5wYXRofSBocmVmPXtsaW5rLnBhdGh9IGxvY2FsZT17XCJ0clwifSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAge2xpbmsudGl0bGV9XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvUGFnZVdyYXBwZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUGFnZVdyYXBwZXIiLCJyb3V0ZXMiLCJGbGV4IiwiTGluayIsIkhvbWUiLCJsaW5rcyIsInRpdGxlIiwicGF0aCIsImFzIiwiZGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJ0ZXh0QWxpZ24iLCJtYXAiLCJsaW5rIiwiaHJlZiIsImxvY2FsZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});
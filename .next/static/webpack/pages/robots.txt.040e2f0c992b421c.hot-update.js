"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/robots.txt",{

/***/ "./pages/robots.txt.jsx":
/*!******************************!*\
  !*** ./pages/robots.txt.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _contexts_appContextValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/contexts/appContextValues */ \"./contexts/appContextValues.js\");\n// pages/robots.txt.jsx\n\nconst baseUrl = _contexts_appContextValues__WEBPACK_IMPORTED_MODULE_0__[\"default\"].baseUrl;\nconst generateRules = (param)=>{\n    let { allowDisallow } = param;\n    const rules = [\n        \"User-agent: *\",\n        \"# Apply to all browsers and robots\",\n        \"# -----------------\",\n        \"# Global rules\",\n        \"\",\n        \"# /block access to admin directory\",\n        \"Disallow: /admin\",\n        \"\",\n        \"# To prevent search result spam\",\n        \"Disallow: /?s=*\",\n        \"Disallow: /search/*\",\n        \"\",\n        ...allowDisallow.map((rule)=>rule),\n        \"\",\n        \"# Sitemap\",\n        \"# -----------------\",\n        \"Sitemap: \".concat(baseUrl, \"/sitemap_index.xml\"),\n        \"\"\n    ];\n    return rules.join(\"\\n\");\n};\nconst RobotsTxt = (param)=>{\n    let { allowDisallow = [] } = param;\n    const robotsTxtContent = generateRules({\n        allowDisallow\n    });\n    return robotsTxtContent;\n};\n_c = RobotsTxt;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RobotsTxt);\nvar _c;\n$RefreshReg$(_c, \"RobotsTxt\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb2JvdHMudHh0LmpzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLHVCQUF1QjtBQUNtQztBQUUxRCxNQUFNQyxVQUFVRCwwRUFBdUI7QUFFdkMsTUFBTUUsZ0JBQWdCO1FBQUMsRUFBRUMsYUFBYSxFQUFFO0lBQ3RDLE1BQU1DLFFBQVE7UUFFWDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBR0E7UUFDQTtRQUNBO1FBR0E7UUFDQTtRQUNBO1FBQ0E7V0FFRUQsY0FBY0UsR0FBRyxDQUFDLENBQUNDLE9BQVNBO1FBQzlCO1FBRUE7UUFDQTtRQUNBLFlBQW1CLE9BQVJMLFNBQVE7UUFDbkI7S0FDRjtJQUVELE9BQU9HLE1BQU1HLElBQUksQ0FBQztBQUNwQjtBQUVBLE1BQU1DLFlBQVk7UUFBQyxFQUFFTCxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3ZDLE1BQU1NLG1CQUFtQlAsY0FBYztRQUFFQztJQUFjO0lBQ3ZELE9BQU9NO0FBQ1Q7S0FITUQ7O0FBNEJOLCtEQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JvYm90cy50eHQuanN4PzNjYWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvcm9ib3RzLnR4dC5qc3hcclxuaW1wb3J0IGluaXRpYWxTaXRlSW5mbyBmcm9tIFwiQC9jb250ZXh0cy9hcHBDb250ZXh0VmFsdWVzXCI7XHJcblxyXG5jb25zdCBiYXNlVXJsID0gaW5pdGlhbFNpdGVJbmZvLmJhc2VVcmw7XHJcblxyXG5jb25zdCBnZW5lcmF0ZVJ1bGVzID0gKHsgYWxsb3dEaXNhbGxvdyB9KSA9PiB7XHJcbiAgY29uc3QgcnVsZXMgPSBbXHJcbiAgICAvLyBHbG9iYWwga3VyYWxsYXJcclxuICAgIGBVc2VyLWFnZW50OiAqYCxcclxuICAgIGAjIEFwcGx5IHRvIGFsbCBicm93c2VycyBhbmQgcm9ib3RzYCxcclxuICAgIGAjIC0tLS0tLS0tLS0tLS0tLS0tYCxcclxuICAgIGAjIEdsb2JhbCBydWxlc2AsXHJcbiAgICBgYCxcclxuXHJcbiAgICAvLyBBZG1pbiBkaXppbmluZSBlcmnFn2ltaSBlbmdlbGxlXHJcbiAgICBgIyAvYmxvY2sgYWNjZXNzIHRvIGFkbWluIGRpcmVjdG9yeWAsXHJcbiAgICBgRGlzYWxsb3c6IC9hZG1pbmAsXHJcbiAgICBgYCxcclxuXHJcbiAgICAvLyBBcmFtYSBzb251w6dsYXLEsW5kYWtpIHNwYW0nbGVyaSDDtm5sZVxyXG4gICAgYCMgVG8gcHJldmVudCBzZWFyY2ggcmVzdWx0IHNwYW1gLFxyXG4gICAgYERpc2FsbG93OiAvP3M9KmAsXHJcbiAgICBgRGlzYWxsb3c6IC9zZWFyY2gvKmAsXHJcbiAgICBgYCxcclxuXHJcbiAgICAuLi5hbGxvd0Rpc2FsbG93Lm1hcCgocnVsZSkgPT4gcnVsZSksXHJcbiAgICBgYCxcclxuICAgIC8vIFNpdGUgaGFyaXRhc8SxXHJcbiAgICBgIyBTaXRlbWFwYCxcclxuICAgIGAjIC0tLS0tLS0tLS0tLS0tLS0tYCxcclxuICAgIGBTaXRlbWFwOiAke2Jhc2VVcmx9L3NpdGVtYXBfaW5kZXgueG1sYCxcclxuICAgIGBgLFxyXG4gIF07XHJcblxyXG4gIHJldHVybiBydWxlcy5qb2luKFwiXFxuXCIpO1xyXG59O1xyXG5cclxuY29uc3QgUm9ib3RzVHh0ID0gKHsgYWxsb3dEaXNhbGxvdyA9IFtdIH0pID0+IHtcclxuICBjb25zdCByb2JvdHNUeHRDb250ZW50ID0gZ2VuZXJhdGVSdWxlcyh7IGFsbG93RGlzYWxsb3cgfSk7XHJcbiAgcmV0dXJuIHJvYm90c1R4dENvbnRlbnQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcmVzIH0pID0+IHtcclxuICBjb25zdCB1c2VyRGVmaW5lZFBhZ2VzID0gW1wiL2V4YW1wbGUtcGFnZVwiLCBcIi9hbm90aGVyLXBhZ2VcIl07XHJcbiAgY29uc3QgdXNlckRlZmluZWRBbGxvd0Rpc2FsbG93ID0gW1xyXG4gICAgXCIjIHVzZXJEZWZpbmVkQWxsb3dEaXNhbGxvd1wiLFxyXG4gICAgXCJcIixcclxuICAgIFwiQWxsb3c6IC9hbGxvd2VkLXBhZ2VcIixcclxuICAgIFwiRGlzYWxsb3c6IC9kaXNhbGxvd2VkLXBhZ2VcIixcclxuICBdO1xyXG5cclxuICBjb25zdCByb2JvdHNUeHRDb250ZW50ID0gZ2VuZXJhdGVSdWxlcyh7XHJcbiAgICBwYWdlczogdXNlckRlZmluZWRQYWdlcyxcclxuICAgIGFsbG93RGlzYWxsb3c6IHVzZXJEZWZpbmVkQWxsb3dEaXNhbGxvdyxcclxuICB9KTtcclxuXHJcbiAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW47IGNoYXJzZXQ9dXRmLThcIik7XHJcbiAgcmVzLndyaXRlKHJvYm90c1R4dENvbnRlbnQpO1xyXG4gIHJlcy5lbmQoKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9ib3RzVHh0OyJdLCJuYW1lcyI6WyJpbml0aWFsU2l0ZUluZm8iLCJiYXNlVXJsIiwiZ2VuZXJhdGVSdWxlcyIsImFsbG93RGlzYWxsb3ciLCJydWxlcyIsIm1hcCIsInJ1bGUiLCJqb2luIiwiUm9ib3RzVHh0Iiwicm9ib3RzVHh0Q29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/robots.txt.jsx\n"));

/***/ })

});
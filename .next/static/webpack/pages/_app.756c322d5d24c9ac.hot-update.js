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

/***/ "./contexts/appContextValues.js":
/*!**************************************!*\
  !*** ./contexts/appContextValues.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initialFooterData: function() { return /* binding */ initialFooterData; },\n/* harmony export */   initialNavbarLinks: function() { return /* binding */ initialNavbarLinks; },\n/* harmony export */   initialSiteInfo: function() { return /* binding */ initialSiteInfo; },\n/* harmony export */   initialSocialMediaLinks: function() { return /* binding */ initialSocialMediaLinks; }\n/* harmony export */ });\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons */ \"./assets/icons.js\");\n/* harmony import */ var _utils_formatPhoneNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/formatPhoneNumber */ \"./utils/formatPhoneNumber.js\");\n// appContextValues.js\n\n\nconst baseUrl =  false ? 0 : \"http://localhost:3000\";\nconst logoUrl =  false ? 0 : \"/logo.svg\";\nconst addressInfo = {\n    streetAddress: \"\",\n    addressLocality: \"\",\n    addressRegion: \"\",\n    postalCode: \"\",\n    addressCountry: \"\"\n};\nconst initialNavbarLinks = [\n    {\n        id: 1,\n        name: \"Home\",\n        path: \"#\"\n    },\n    {\n        id: 2,\n        name: \"About\",\n        path: \"#\"\n    },\n    {\n        id: 3,\n        name: \"Contact\",\n        path: \"#\"\n    }\n];\nconst initialSocialMediaLinks = [\n    {\n        text: \"Facebook\",\n        path: \"#Facebook\",\n        icon: _assets_icons__WEBPACK_IMPORTED_MODULE_0__.socialMediaIcons.Facebook\n    },\n    //{ text: \"Twitter\", path: \"#Twitter\", icon: socialMediaIcons.Twitter },\n    {\n        text: \"Instagram\",\n        path: \"#Instagram\",\n        icon: _assets_icons__WEBPACK_IMPORTED_MODULE_0__.socialMediaIcons.Instagram\n    }\n];\nconst initialFooterData = {};\nconst initialSiteInfo = {\n    baseUrl: baseUrl,\n    addressInfo,\n    initialSocialMediaLinks,\n    logoUrl: baseUrl + logoUrl,\n    phoneNumber: \"+905555555555\"\n};\ninitialSiteInfo.phoneNumberDisplay = (0,_utils_formatPhoneNumber__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(initialSiteInfo.phoneNumber);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9hcHBDb250ZXh0VmFsdWVzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHNCQUFzQjtBQUU0QjtBQUNRO0FBRTFELE1BQU1FLFVBQ0pDLE1BQXFDLEdBQ2pDLENBQW1DLEdBQ25DO0FBQ04sTUFBTUMsVUFDSkQsTUFBcUMsR0FBRyxDQUFXLEdBQUc7QUFFeEQsTUFBTUUsY0FBYztJQUNsQkMsZUFBZ0I7SUFDaEJDLGlCQUFrQjtJQUNsQkMsZUFBZ0I7SUFDaEJDLFlBQWE7SUFDYkMsZ0JBQWlCO0FBQ25CO0FBRU8sTUFBTUMscUJBQXFCO0lBQ2hDO1FBQUVDLElBQUk7UUFBR0MsTUFBTTtRQUFRQyxNQUFNO0lBQUk7SUFDakM7UUFBRUYsSUFBSTtRQUFHQyxNQUFNO1FBQVNDLE1BQU07SUFBSTtJQUNsQztRQUFFRixJQUFJO1FBQUdDLE1BQU07UUFBV0MsTUFBTTtJQUFJO0NBQ3JDLENBQUM7QUFDSyxNQUFNQywwQkFBMEI7SUFDckM7UUFBRUMsTUFBTTtRQUFZRixNQUFNO1FBQWFHLE1BQU1qQiwyREFBZ0JBLENBQUNrQixRQUFRO0lBQUM7SUFDdkUsd0VBQXdFO0lBQ3hFO1FBQUVGLE1BQU07UUFBYUYsTUFBTTtRQUFjRyxNQUFNakIsMkRBQWdCQSxDQUFDbUIsU0FBUztJQUFDO0NBRTNFLENBQUM7QUFFSyxNQUFNQyxvQkFBb0IsQ0FBQyxFQUFFO0FBRTdCLE1BQU1DLGtCQUFrQjtJQUM3Qm5CLFNBQVNBO0lBQ1RHO0lBQ0FVO0lBQ0FYLFNBQVNGLFVBQVVFO0lBQ25Ca0IsYUFBYztBQUNoQixFQUFFO0FBRUZELGdCQUFnQkUsa0JBQWtCLEdBQUd0QixvRUFBaUJBLENBQUNvQixnQkFBZ0JDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvYXBwQ29udGV4dFZhbHVlcy5qcz83YTdiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcENvbnRleHRWYWx1ZXMuanNcclxuXHJcbmltcG9ydCB7IHNvY2lhbE1lZGlhSWNvbnMgfSBmcm9tIFwiQC9hc3NldHMvaWNvbnNcIjtcclxuaW1wb3J0IGZvcm1hdFBob25lTnVtYmVyIGZyb20gXCJAL3V0aWxzL2Zvcm1hdFBob25lTnVtYmVyXCI7XHJcblxyXG5jb25zdCBiYXNlVXJsID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgID8gXCJodHRwczovL3d3dy5wcm9kdWN0aW9uLWRvYW1pbi5jb21cIlxyXG4gICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5jb25zdCBsb2dvVXJsID1cclxuICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIi9sb2dvLnN2Z1wiIDogXCIvbG9nby5zdmdcIjtcclxuXHJcbmNvbnN0IGFkZHJlc3NJbmZvID0ge1xyXG4gIHN0cmVldEFkZHJlc3M6IGBgLFxyXG4gIGFkZHJlc3NMb2NhbGl0eTogYGAsXHJcbiAgYWRkcmVzc1JlZ2lvbjogYGAsXHJcbiAgcG9zdGFsQ29kZTogYGAsXHJcbiAgYWRkcmVzc0NvdW50cnk6IGBgLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxOYXZiYXJMaW5rcyA9IFtcclxuICB7IGlkOiAxLCBuYW1lOiBcIkhvbWVcIiwgcGF0aDogXCIjXCIgfSxcclxuICB7IGlkOiAyLCBuYW1lOiBcIkFib3V0XCIsIHBhdGg6IFwiI1wiIH0sXHJcbiAgeyBpZDogMywgbmFtZTogXCJDb250YWN0XCIsIHBhdGg6IFwiI1wiIH0sXHJcbl07XHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU29jaWFsTWVkaWFMaW5rcyA9IFtcclxuICB7IHRleHQ6IFwiRmFjZWJvb2tcIiwgcGF0aDogXCIjRmFjZWJvb2tcIiwgaWNvbjogc29jaWFsTWVkaWFJY29ucy5GYWNlYm9vayB9LFxyXG4gIC8veyB0ZXh0OiBcIlR3aXR0ZXJcIiwgcGF0aDogXCIjVHdpdHRlclwiLCBpY29uOiBzb2NpYWxNZWRpYUljb25zLlR3aXR0ZXIgfSxcclxuICB7IHRleHQ6IFwiSW5zdGFncmFtXCIsIHBhdGg6IFwiI0luc3RhZ3JhbVwiLCBpY29uOiBzb2NpYWxNZWRpYUljb25zLkluc3RhZ3JhbSB9LFxyXG4gIC8veyB0ZXh0OiBcIllvdXR1YmVcIiwgcGF0aDogXCIjWW91dHViZVwiLCBpY29uOiBzb2NpYWxNZWRpYUljb25zLllvdXR1YmUgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsRm9vdGVyRGF0YSA9IHt9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTaXRlSW5mbyA9IHtcclxuICBiYXNlVXJsOiBiYXNlVXJsLFxyXG4gIGFkZHJlc3NJbmZvLFxyXG4gIGluaXRpYWxTb2NpYWxNZWRpYUxpbmtzLFxyXG4gIGxvZ29Vcmw6IGJhc2VVcmwgKyBsb2dvVXJsLFxyXG4gIHBob25lTnVtYmVyOiBgKzkwNTU1NTU1NTU1NWAsXHJcbn07XHJcblxyXG5pbml0aWFsU2l0ZUluZm8ucGhvbmVOdW1iZXJEaXNwbGF5ID0gZm9ybWF0UGhvbmVOdW1iZXIoaW5pdGlhbFNpdGVJbmZvLnBob25lTnVtYmVyKTtcclxuIl0sIm5hbWVzIjpbInNvY2lhbE1lZGlhSWNvbnMiLCJmb3JtYXRQaG9uZU51bWJlciIsImJhc2VVcmwiLCJwcm9jZXNzIiwibG9nb1VybCIsImFkZHJlc3NJbmZvIiwic3RyZWV0QWRkcmVzcyIsImFkZHJlc3NMb2NhbGl0eSIsImFkZHJlc3NSZWdpb24iLCJwb3N0YWxDb2RlIiwiYWRkcmVzc0NvdW50cnkiLCJpbml0aWFsTmF2YmFyTGlua3MiLCJpZCIsIm5hbWUiLCJwYXRoIiwiaW5pdGlhbFNvY2lhbE1lZGlhTGlua3MiLCJ0ZXh0IiwiaWNvbiIsIkZhY2Vib29rIiwiSW5zdGFncmFtIiwiaW5pdGlhbEZvb3RlckRhdGEiLCJpbml0aWFsU2l0ZUluZm8iLCJwaG9uZU51bWJlciIsInBob25lTnVtYmVyRGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/appContextValues.js\n"));

/***/ })

});
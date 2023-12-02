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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppContextProvider: function() { return /* binding */ AppContextProvider; },\n/* harmony export */   useAppContext: function() { return /* binding */ useAppContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons */ \"./assets/icons.js\");\n/* harmony import */ var _utils_formatPhoneNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/formatPhoneNumber */ \"./utils/formatPhoneNumber.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst AppContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst useAppContext = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AppContext);\n};\n_s(useAppContext, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\nconst baseUrl =  false ? 0 : \"http://localhost:3000\";\nconst addressInfo = {\n    streetAddress: \"\",\n    addressLocality: \"\",\n    addressRegion: \"\",\n    postalCode: \"\",\n    addressCountry: \"\"\n};\nconst logoUrl =  false ? 0 : \"/logo.svg\";\nconst AppContextProvider = (param)=>{\n    let { children } = param;\n    _s1();\n    const [navbarLinks, setNavbarLinks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            id: 1,\n            name: \"Home\",\n            path: \"#\"\n        },\n        {\n            id: 2,\n            name: \"About\",\n            path: \"#\"\n        },\n        {\n            id: 3,\n            name: \"Contact\",\n            path: \"#\"\n        }\n    ]);\n    const [socialMediaLinks, setSocialMediaLinks] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            text: \"Facebook\",\n            path: \"#\",\n            icon: _assets_icons__WEBPACK_IMPORTED_MODULE_1__.socialMediaIcons.Facebook\n        },\n        //{ text: \"Twitter\", path: \"#\", icon: socialMediaIcons.Twitter },\n        {\n            text: \"Instagram\",\n            path: \"#\",\n            icon: _assets_icons__WEBPACK_IMPORTED_MODULE_1__.socialMediaIcons.Instagram\n        }\n    ]);\n    const [footerData, setFooterData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [siteInfo, setSiteInfo] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        baseUrl: baseUrl,\n        addressInfo,\n        socialMediaLinks,\n        logoUrl: baseUrl + logoUrl,\n        phoneNumber: \"\"\n    });\n    siteInfo.phoneNumberDisplay = (0,_utils_formatPhoneNumber__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(siteInfo.phoneNumber);\n    const contextValue = {\n        navbarLinks,\n        setNavbarLinks,\n        footerData,\n        setFooterData,\n        siteInfo,\n        setSiteInfo\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppContext.Provider, {\n        value: contextValue,\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Github\\\\nextjs-blank-project\\\\contexts\\\\AppContext.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AppContextProvider, \"XS0MZm8OB7GTQbqhEgMmKt7IB0o=\");\n_c = AppContextProvider;\nvar _c;\n$RefreshReg$(_c, \"AppContextProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BcHBDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDUTtBQUNTO0FBRW5FLE1BQU1NLDJCQUFhSCxvREFBYUE7QUFFekIsTUFBTUksZ0JBQWdCOztJQUMzQixPQUFPSCxpREFBVUEsQ0FBQ0U7QUFDcEIsRUFBRTtHQUZXQztBQUliLE1BQU1DLFVBQ0pDLE1BQXFDLEdBQ2pDLENBQW1DLEdBQ25DO0FBRU4sTUFBTUMsY0FBYztJQUNsQkMsZUFBZ0I7SUFDaEJDLGlCQUFrQjtJQUNsQkMsZUFBZ0I7SUFDaEJDLFlBQWE7SUFDYkMsZ0JBQWlCO0FBQ25CO0FBRUEsTUFBTUMsVUFDSlAsTUFBcUMsR0FBRyxDQUFXLEdBQUc7QUFFakQsTUFBTVEscUJBQXFCO1FBQUMsRUFBRUMsUUFBUSxFQUFFOztJQUM3QyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR2YsK0NBQVFBLENBQUM7UUFDN0M7WUFBRWdCLElBQUk7WUFBR0MsTUFBTTtZQUFRQyxNQUFNO1FBQUk7UUFDakM7WUFBRUYsSUFBSTtZQUFHQyxNQUFNO1lBQVNDLE1BQU07UUFBSTtRQUNsQztZQUFFRixJQUFJO1lBQUdDLE1BQU07WUFBV0MsTUFBTTtRQUFJO0tBQ3JDO0lBRUQsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHcEIsK0NBQVFBLENBQUM7UUFDdkQ7WUFBRXFCLE1BQU07WUFBWUgsTUFBTTtZQUFLSSxNQUFNM0IsMkRBQWdCQSxDQUFDNEIsUUFBUTtRQUFDO1FBQy9ELGlFQUFpRTtRQUNqRTtZQUFFRixNQUFNO1lBQWFILE1BQU07WUFBS0ksTUFBTTNCLDJEQUFnQkEsQ0FBQzZCLFNBQVM7UUFBQztLQUVsRTtJQUNELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHMUIsK0NBQVFBLENBQUMsQ0FBQztJQUU5QyxNQUFNLENBQUMyQixVQUFVQyxZQUFZLEdBQUc1QiwrQ0FBUUEsQ0FBQztRQUN2Q0csU0FBU0E7UUFDVEU7UUFDQWM7UUFDQVIsU0FBU1IsVUFBVVE7UUFDbkJrQixhQUFjO0lBQ2hCO0lBRUFGLFNBQVNHLGtCQUFrQixHQUFHbEMsb0VBQWlCQSxDQUFDK0IsU0FBU0UsV0FBVztJQUVwRSxNQUFNRSxlQUFlO1FBQ25CakI7UUFDQUM7UUFDQVU7UUFDQUM7UUFDQUM7UUFDQUM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDM0IsV0FBVytCLFFBQVE7UUFBQ0MsT0FBT0Y7a0JBQWVsQjs7Ozs7O0FBRS9DLEVBQUU7SUFyQ1dEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHRzL0FwcENvbnRleHQuanM/Y2IzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzb2NpYWxNZWRpYUljb25zIH0gZnJvbSBcIkAvYXNzZXRzL2ljb25zXCI7XHJcbmltcG9ydCBmb3JtYXRQaG9uZU51bWJlciBmcm9tIFwiQC91dGlscy9mb3JtYXRQaG9uZU51bWJlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEFwcENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBwQ29udGV4dCA9ICgpID0+IHtcclxuICByZXR1cm4gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxufTtcclxuXHJcbmNvbnN0IGJhc2VVcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgPyBcImh0dHBzOi8vd3d3LnByb2R1Y3Rpb24tZG9hbWluLmNvbVwiXHJcbiAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG5jb25zdCBhZGRyZXNzSW5mbyA9IHtcclxuICBzdHJlZXRBZGRyZXNzOiBgYCxcclxuICBhZGRyZXNzTG9jYWxpdHk6IGBgLFxyXG4gIGFkZHJlc3NSZWdpb246IGBgLFxyXG4gIHBvc3RhbENvZGU6IGBgLFxyXG4gIGFkZHJlc3NDb3VudHJ5OiBgYCxcclxufTtcclxuXHJcbmNvbnN0IGxvZ29VcmwgPVxyXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiL2xvZ28uc3ZnXCIgOiBcIi9sb2dvLnN2Z1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFwcENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbbmF2YmFyTGlua3MsIHNldE5hdmJhckxpbmtzXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiSG9tZVwiLCBwYXRoOiBcIiNcIiB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCJBYm91dFwiLCBwYXRoOiBcIiNcIiB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogXCJDb250YWN0XCIsIHBhdGg6IFwiI1wiIH0sXHJcbiAgXSk7XHJcblxyXG4gIGNvbnN0IFtzb2NpYWxNZWRpYUxpbmtzLCBzZXRTb2NpYWxNZWRpYUxpbmtzXSA9IHVzZVN0YXRlKFtcclxuICAgIHsgdGV4dDogXCJGYWNlYm9va1wiLCBwYXRoOiBcIiNcIiwgaWNvbjogc29jaWFsTWVkaWFJY29ucy5GYWNlYm9vayB9LFxyXG4gICAgLy97IHRleHQ6IFwiVHdpdHRlclwiLCBwYXRoOiBcIiNcIiwgaWNvbjogc29jaWFsTWVkaWFJY29ucy5Ud2l0dGVyIH0sXHJcbiAgICB7IHRleHQ6IFwiSW5zdGFncmFtXCIsIHBhdGg6IFwiI1wiLCBpY29uOiBzb2NpYWxNZWRpYUljb25zLkluc3RhZ3JhbSB9LFxyXG4gICAgLy97IHRleHQ6IFwiWW91dHViZVwiLCBwYXRoOiBcIiNcIiwgaWNvbjogc29jaWFsTWVkaWFJY29ucy5Zb3V0dWJlIH0sXHJcbiAgXSk7XHJcbiAgY29uc3QgW2Zvb3RlckRhdGEsIHNldEZvb3RlckRhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICBjb25zdCBbc2l0ZUluZm8sIHNldFNpdGVJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgIGJhc2VVcmw6IGJhc2VVcmwsXHJcbiAgICBhZGRyZXNzSW5mbyxcclxuICAgIHNvY2lhbE1lZGlhTGlua3MsXHJcbiAgICBsb2dvVXJsOiBiYXNlVXJsICsgbG9nb1VybCxcclxuICAgIHBob25lTnVtYmVyOiBgYCxcclxuICB9KTtcclxuXHJcbiAgc2l0ZUluZm8ucGhvbmVOdW1iZXJEaXNwbGF5ID0gZm9ybWF0UGhvbmVOdW1iZXIoc2l0ZUluZm8ucGhvbmVOdW1iZXIpO1xyXG5cclxuICBjb25zdCBjb250ZXh0VmFsdWUgPSB7XHJcbiAgICBuYXZiYXJMaW5rcyxcclxuICAgIHNldE5hdmJhckxpbmtzLFxyXG4gICAgZm9vdGVyRGF0YSxcclxuICAgIHNldEZvb3RlckRhdGEsXHJcbiAgICBzaXRlSW5mbyxcclxuICAgIHNldFNpdGVJbmZvLFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17Y29udGV4dFZhbHVlfT57Y2hpbGRyZW59PC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJzb2NpYWxNZWRpYUljb25zIiwiZm9ybWF0UGhvbmVOdW1iZXIiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJBcHBDb250ZXh0IiwidXNlQXBwQ29udGV4dCIsImJhc2VVcmwiLCJwcm9jZXNzIiwiYWRkcmVzc0luZm8iLCJzdHJlZXRBZGRyZXNzIiwiYWRkcmVzc0xvY2FsaXR5IiwiYWRkcmVzc1JlZ2lvbiIsInBvc3RhbENvZGUiLCJhZGRyZXNzQ291bnRyeSIsImxvZ29VcmwiLCJBcHBDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIm5hdmJhckxpbmtzIiwic2V0TmF2YmFyTGlua3MiLCJpZCIsIm5hbWUiLCJwYXRoIiwic29jaWFsTWVkaWFMaW5rcyIsInNldFNvY2lhbE1lZGlhTGlua3MiLCJ0ZXh0IiwiaWNvbiIsIkZhY2Vib29rIiwiSW5zdGFncmFtIiwiZm9vdGVyRGF0YSIsInNldEZvb3RlckRhdGEiLCJzaXRlSW5mbyIsInNldFNpdGVJbmZvIiwicGhvbmVOdW1iZXIiLCJwaG9uZU51bWJlckRpc3BsYXkiLCJjb250ZXh0VmFsdWUiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AppContext.js\n"));

/***/ })

});
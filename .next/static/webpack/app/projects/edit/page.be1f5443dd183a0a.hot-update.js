"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/edit/page",{

/***/ "(app-client)/./app/projects/edit/page.jsx":
/*!************************************!*\
  !*** ./app/projects/edit/page.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ EditForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// \"use client\"\n\n\nfunction EditForm() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/getOneProject\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setProject(data.data[0]);\n            } catch (error) {\n                console.error(\"Error fetching project:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        try {\n            const res = await fetch(\"/api/editProject\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(project)\n            });\n            if (res.status === 201) {\n                router.refresh();\n                router.push(\"/projects\");\n            }\n        } catch (error) {\n            console.error(\"Error updating project:\", error);\n            setIsLoading(false);\n        }\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setProject((prevState)=>({\n                ...prevState,\n                [name]: value\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"w-1/2\",\n        children: [\n            Object.keys(project).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: key\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            type: \"text\",\n                            name: key,\n                            onChange: handleChange,\n                            value: project[key]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, key, true, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Updating...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 22\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Update Project\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 49\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(EditForm, \"782N7u4Dy9ZWsOyfJ0vGKsJDKmY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = EditForm;\nvar _c;\n$RefreshReg$(_c, \"EditForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3Byb2plY3RzL2VkaXQvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSxlQUFlO0FBQzZCO0FBQ0E7QUFFN0IsU0FBU0c7O0lBQ3RCLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUV4QixNQUFNLENBQUNLLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUMsQ0FBQztJQUV4Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNSyxZQUFZO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRTtvQkFDaEIsTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQSxNQUFNQyxPQUFPLE1BQU1KLFNBQVNLLElBQUk7Z0JBQ2hDUCxXQUFXTSxLQUFLQSxJQUFJLENBQUMsRUFBRTtZQUN6QixFQUFFLE9BQU9FLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1lBQzNDO1FBQ0Y7UUFFQVA7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO0lBRTNDLE1BQU1pQixlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCSCxhQUFhO1FBRWIsSUFBSTtZQUNGLE1BQU1JLE1BQU0sTUFBTVosTUFBTSxvQkFBb0I7Z0JBQzFDYSxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ3JCO1lBQ3ZCO1lBRUEsSUFBSWdCLElBQUlNLE1BQU0sS0FBSyxLQUFLO2dCQUN0QnZCLE9BQU93QixPQUFPO2dCQUNkeEIsT0FBT3lCLElBQUksQ0FBQztZQUNkO1FBQ0YsRUFBRSxPQUFPZixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDRyxhQUFhO1FBQ2Y7SUFDRjtJQUVBLE1BQU1hLGVBQWUsQ0FBQ1g7UUFDcEIsTUFBTSxFQUFFWSxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHYixFQUFFYyxNQUFNO1FBQ2hDM0IsV0FBVzRCLENBQUFBLFlBQWM7Z0JBQ3ZCLEdBQUdBLFNBQVM7Z0JBQ1osQ0FBQ0gsS0FBSyxFQUFFQztZQUNWO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7UUFBS0MsVUFBVWxCO1FBQWNtQixXQUFVOztZQUNyQ0MsT0FBT0MsSUFBSSxDQUFDbEMsU0FBU21DLEdBQUcsQ0FBQ0MsQ0FBQUEsb0JBQ3hCLDhEQUFDQzs7c0NBQ0MsOERBQUNDO3NDQUFNRjs7Ozs7O3NDQUNQLDhEQUFDRzs0QkFDQ0MsUUFBUTs0QkFDUkMsTUFBSzs0QkFDTGYsTUFBTVU7NEJBQ05NLFVBQVVqQjs0QkFDVkUsT0FBTzNCLE9BQU8sQ0FBQ29DLElBQUk7Ozs7Ozs7bUJBUFhBOzs7OzswQkFXZCw4REFBQ087Z0JBQU9YLFdBQVU7MEJBQ2ZyQiwwQkFBWSw4REFBQzJCOzhCQUFLOzs7Ozt5Q0FBcUIsOERBQUNBOzhCQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0RDtHQTFFd0J4Qzs7UUFDUEgsc0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2plY3RzL2VkaXQvcGFnZS5qc3g/Y2NmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG4vLyBcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRGb3JtKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9nZXRPbmVQcm9qZWN0Jyk7XHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBzZXRQcm9qZWN0KGRhdGEuZGF0YVswXSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdDonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hEYXRhKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2VkaXRQcm9qZWN0Jywge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdCksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9qZWN0cycpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyBwcm9qZWN0OicsIGVycm9yKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFByb2plY3QocHJldlN0YXRlID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctMS8yXCI+XHJcbiAgICAgIHtPYmplY3Qua2V5cyhwcm9qZWN0KS5tYXAoa2V5ID0+IChcclxuICAgICAgICA8bGFiZWwga2V5PXtrZXl9PlxyXG4gICAgICAgICAgPHNwYW4+e2tleX08L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPXtrZXl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0W2tleV19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICkpfVxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCI+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IDxzcGFuPlVwZGF0aW5nLi4uPC9zcGFuPiA6IDxzcGFuPlVwZGF0ZSBQcm9qZWN0PC9zcGFuPn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkVkaXRGb3JtIiwicm91dGVyIiwicHJvamVjdCIsInNldFByb2plY3QiLCJmZXRjaERhdGEiLCJyZXNwb25zZSIsImZldGNoIiwib2siLCJFcnJvciIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwicmVmcmVzaCIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwibGFiZWwiLCJzcGFuIiwiaW5wdXQiLCJyZXF1aXJlZCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/projects/edit/page.jsx\n"));

/***/ })

});
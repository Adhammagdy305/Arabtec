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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction CreateForm() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                console.log(\"rayeh a3mel fetch\");\n                const response = await fetch(\"/api/getOneProject\");\n                console.log(\"Khalast aho\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setProject(data.data[0]);\n                project.Year = project.St_Date[0];\n                project.Month = project.St_Date[1];\n                project.Day = project.St_Date[2];\n                console.log(\"Project fetched\", project);\n            } catch (error) {\n                console.error(\"Error fetching projects:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData();\n        console.log(project);\n        Object.entries(project).forEach((param)=>{\n            let [key, value] = param;\n            console.log(key, value);\n            formData.append(key, value); // Append other project data\n        });\n        try {\n            const res = await fetch(\"/api/editProject\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (res.status === 201) {\n                router.refresh();\n                router.push(\"/projects\");\n            }\n        } catch (error) {\n            console.error(\"Error uploading project:\", error);\n            setIsLoading(false);\n        }\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        if (name === \"Year\" || name === \"Month\" || name === \"Day\") {\n            // Handle date input change\n            setProject((prevState)=>({\n                    ...prevState,\n                    St_Date: {\n                        ...prevState.St_Date,\n                        [name]: value\n                    }\n                }));\n        } else {\n            // Handle other input change\n            setProject((prevState)=>({\n                    ...prevState,\n                    [name]: value\n                }));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"w-1/2\",\n        encType: \"multipart/form-data\",\n        children: [\n            Object.keys(project).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: key\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this),\n                        key === \"St_Date\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    type: \"number\",\n                                    name: \"Day\",\n                                    placeholder: \"Day\",\n                                    min: \"1\",\n                                    max: \"31\",\n                                    onChange: handleChange,\n                                    value: project.St_Date[2]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    type: \"number\",\n                                    name: \"Month\",\n                                    placeholder: \"Month\",\n                                    min: \"1\",\n                                    max: \"12\",\n                                    onChange: handleChange,\n                                    value: project.St_Date[1]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    required: true,\n                                    type: \"number\",\n                                    name: \"Year\",\n                                    placeholder: \"Year\",\n                                    min: \"1950\",\n                                    max: \"2030\",\n                                    onChange: handleChange,\n                                    value: project.St_Date[0]\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                            lineNumber: 96,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            type: \"text\",\n                            name: key,\n                            onChange: handleChange,\n                            value: project[key]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                            lineNumber: 129,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, key, true, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Adding...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 144,\n                    columnNumber: 22\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Add Ticket\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 144,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n} //\"use client\"\n //\n //import { useRouter } from \"next/navigation\";\n //import { useState, useEffect } from \"react\";\n //\n //export default function CreateForm() {\n //  const router = useRouter();\n //\n //  const [project, setProject] = useState({});\n //  useEffect(() => {\n //    const fetchData = async () => {\n //      try {\n //        console.log(\"rayeh a3mel fetch\");\n //        const response = await fetch('/api/getOneProject');\n //        console.log(\"Khalast aho\");\n //        if (!response.ok) {\n //          throw new Error('Network response was not ok');\n //        }\n //        const data = await response.json();\n //        const fetchedProject = data.data[0];\n //        setProject({\n //          ...fetchedProject,\n //          Year: fetchedProject.St_Date[0],\n //          Month: fetchedProject.St_Date[1],\n //          Day: fetchedProject.St_Date[2]\n //        });\n //        console.log(\"Project fetched\", project);\n //      } catch (error) {\n //        console.error('Error fetching projects:', error);\n //      }\n //    };\n //\n //    fetchData();\n //  }, []);\n //\n //  const [isLoading, setIsLoading] = useState(false);\n //\n //  const handleSubmit = async (e) => {\n //    e.preventDefault();\n //    setIsLoading(true);\n //\n //    const formData = new FormData();\n //    console.log(project);\n //    Object.entries(project).forEach(([key, value]) => {\n //      console.log(key, value);\n //      formData.append(key, value); // Append other project data\n //    });\n //\n //    try {\n //      const res = await fetch('/api/editProject', {\n //        method: \"POST\",\n //        body: formData,\n //        //body: JSON.stringify(project)\n //      });\n //\n //      if (res.status === 201) {\n //        router.refresh();\n //        router.push('/projects');\n //      }\n //    } catch (error) {\n //      console.error('Error uploading project:', error);\n //      setIsLoading(false);\n //    }\n //  }\n //\n //  const handleChange = (e) => {\n //    const { name, value } = e.target;\n //    if (name === 'Year' || name === 'Month' || name === 'Day') {\n //      // Handle date input change\n //      setProject(prevState => ({\n //        ...prevState,\n //        St_Date: {\n //          ...prevState.St_Date,\n //          [name]: value\n //        }\n //      }));\n //    } else {\n //      // Handle other input change\n //      setProject(prevState => ({\n //        ...prevState,\n //        [name]: value\n //      }));\n //    }\n //  }\n //\n //  return (\n //    <form onSubmit={handleSubmit} className=\"w-1/2\" encType=\"multipart/form-data\">\n //      {Object.keys(project).map(key => (\n //        <label key={key}>\n //          <span>{key}</span>\n //          {key === 'St_Date' ? (\n //            <div>\n //              <input\n //                required\n //                type=\"number\"\n //                name=\"Day\"\n //                placeholder=\"Day\"\n //                min=\"1\"\n //                max=\"31\"\n //                onChange={handleChange}\n //                value={project.St_Date[2]}\n //              />\n //              <input\n //                required\n //                type=\"number\"\n //                name=\"Month\"\n //                placeholder=\"Month\"\n //                min=\"1\"\n //                max=\"12\"\n //                onChange={handleChange}\n //                value={project.St_Date[1]}\n //              />\n //              <input\n //                required\n //                type=\"number\"\n //                name=\"Year\"\n //                placeholder=\"Year\"\n //                min=\"1950\"\n //                max=\"2030\"\n //                onChange={handleChange}\n //                value={project.St_Date[0]}\n //              />\n //            </div>\n //          ) : (\n //            <input\n //              required\n //              type=\"text\"\n //              name={key}\n //              onChange={handleChange}\n //              value={project[key]}\n //            />\n //          )}\n //        </label>\n //      ))}\n //      <button\n //        className=\"btn-primary\"\n //        //disabled={isLoading}\n //      >\n //        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}\n //      </button>\n //    </form>\n //  )\n //}\n //\n_s(CreateForm, \"782N7u4Dy9ZWsOyfJ0vGKsJDKmY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CreateForm;\nvar _c;\n$RefreshReg$(_c, \"CreateForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUNBQXlDO0NBQ3pDLDRDQUE0QztDQUM1QyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLDBCQUEwQjtDQUMxQiwrQkFBK0I7Q0FDL0IsOEJBQThCO0NBQzlCLHFDQUFxQztDQUNyQyx5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLHlDQUF5QztDQUN6Qyw0Q0FBNEM7Q0FDNUMsa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QiwwQkFBMEI7Q0FDMUIsK0JBQStCO0NBQy9CLDZCQUE2QjtDQUM3QixvQ0FBb0M7Q0FDcEMsNEJBQTRCO0NBQzVCLDRCQUE0QjtDQUM1Qix5Q0FBeUM7Q0FDekMsNENBQTRDO0NBQzVDLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQix3QkFBd0I7Q0FDeEIsMkJBQTJCO0NBQzNCLDBCQUEwQjtDQUMxQix1Q0FBdUM7Q0FDdkMsb0NBQW9DO0NBQ3BDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsaUNBQWlDO0NBQ2pDLGdDQUFnQztDQUNoQyxTQUFTO0NBQ1Qsd0VBQXdFO0NBQ3hFLGlCQUFpQjtDQUNqQixhQUFhO0NBQ2IsS0FBSztDQUNMLEdBQUc7Q0FDSCxFQUFFO0dBOVJzQmhEOztRQUNQSCxzREFBU0E7OztLQURGRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcHJvamVjdHMvZWRpdC9wYWdlLmpzeD9jY2Y5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVGb3JtKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwicmF5ZWggYTNtZWwgZmV0Y2hcIik7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0T25lUHJvamVjdCcpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIktoYWxhc3QgYWhvXCIpO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRQcm9qZWN0KGRhdGEuZGF0YVswXSk7XHJcbiAgICAgIHByb2plY3QuWWVhcj0gcHJvamVjdC5TdF9EYXRlWzBdO1xyXG4gICAgICBwcm9qZWN0Lk1vbnRoPSBwcm9qZWN0LlN0X0RhdGVbMV07XHJcbiAgICAgIHByb2plY3QuRGF5PSBwcm9qZWN0LlN0X0RhdGVbMl07XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdCBmZXRjaGVkXCIsIHByb2plY3QpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZldGNoRGF0YSgpO1xyXG59LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIE9iamVjdC5lbnRyaWVzKHByb2plY3QpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhrZXksdmFsdWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTsgLy8gQXBwZW5kIG90aGVyIHByb2plY3QgZGF0YVxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2VkaXRQcm9qZWN0Jywge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbiAgICAgICAgLy9ib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0KVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcclxuICAgICAgICByb3V0ZXIucmVmcmVzaCgpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvamVjdHMnKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIHByb2plY3Q6JywgZXJyb3IpO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgaWYgKG5hbWUgPT09ICdZZWFyJyB8fCBuYW1lID09PSAnTW9udGgnIHx8IG5hbWUgPT09ICdEYXknKSB7XHJcbiAgICAgIC8vIEhhbmRsZSBkYXRlIGlucHV0IGNoYW5nZVxyXG4gICAgICBzZXRQcm9qZWN0KHByZXZTdGF0ZSA9PiAoe1xyXG4gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgICBTdF9EYXRlOiB7XHJcbiAgICAgICAgICAuLi5wcmV2U3RhdGUuU3RfRGF0ZSxcclxuICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEhhbmRsZSBvdGhlciBpbnB1dCBjaGFuZ2VcclxuICAgICAgc2V0UHJvamVjdChwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwidy0xLzJcIiBlbmNUeXBlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPlxyXG4gICAgICB7T2JqZWN0LmtleXMocHJvamVjdCkubWFwKGtleSA9PiAoXHJcbiAgICAgICAgPGxhYmVsIGtleT17a2V5fT5cclxuICAgICAgICAgIDxzcGFuPntrZXl9PC9zcGFuPlxyXG4gICAgICAgICAge2tleSA9PT0gJ1N0X0RhdGUnID8gKFxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiRGF5XCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGF5XCJcclxuICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgbWF4PVwiMzFcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0LlN0X0RhdGVbMl19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJNb250aFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vbnRoXCJcclxuICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgbWF4PVwiMTJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0LlN0X0RhdGVbMV19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJZZWFyXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWWVhclwiXHJcbiAgICAgICAgICAgICAgICBtaW49XCIxOTUwXCJcclxuICAgICAgICAgICAgICAgIG1heD1cIjIwMzBcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0LlN0X0RhdGVbMF19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9e2tleX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0W2tleV19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICApKX1cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmltYXJ5XCJcclxuICAgICAgICAvL2Rpc2FibGVkPXtpc0xvYWRpbmd9XHJcbiAgICAgID5cclxuICAgICAgICB7aXNMb2FkaW5nID8gPHNwYW4+QWRkaW5nLi4uPC9zcGFuPiA6IDxzcGFuPkFkZCBUaWNrZXQ8L3NwYW4+fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApXHJcbn1cclxuXHJcbi8vXCJ1c2UgY2xpZW50XCJcclxuLy9cclxuLy9pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbi8vaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vL1xyXG4vL2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZUZvcm0oKSB7XHJcbi8vICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuLy9cclxuLy8gIGNvbnN0IFtwcm9qZWN0LCBzZXRQcm9qZWN0XSA9IHVzZVN0YXRlKHt9KTtcclxuLy8gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgICB0cnkge1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coXCJyYXllaCBhM21lbCBmZXRjaFwiKTtcclxuLy8gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2V0T25lUHJvamVjdCcpO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coXCJLaGFsYXN0IGFob1wiKTtcclxuLy8gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuLy8gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuLy8gICAgICAgIH1cclxuLy8gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgICAgICBjb25zdCBmZXRjaGVkUHJvamVjdCA9IGRhdGEuZGF0YVswXTtcclxuLy8gICAgICAgIHNldFByb2plY3Qoe1xyXG4vLyAgICAgICAgICAuLi5mZXRjaGVkUHJvamVjdCxcclxuLy8gICAgICAgICAgWWVhcjogZmV0Y2hlZFByb2plY3QuU3RfRGF0ZVswXSxcclxuLy8gICAgICAgICAgTW9udGg6IGZldGNoZWRQcm9qZWN0LlN0X0RhdGVbMV0sXHJcbi8vICAgICAgICAgIERheTogZmV0Y2hlZFByb2plY3QuU3RfRGF0ZVsyXVxyXG4vLyAgICAgICAgfSk7XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhcIlByb2plY3QgZmV0Y2hlZFwiLCBwcm9qZWN0KTtcclxuLy8gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6JywgZXJyb3IpO1xyXG4vLyAgICAgIH1cclxuLy8gICAgfTtcclxuLy9cclxuLy8gICAgZmV0Y2hEYXRhKCk7XHJcbi8vICB9LCBbXSk7XHJcbi8vXHJcbi8vICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4vL1xyXG4vLyAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuLy8gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XHJcbi8vXHJcbi8vICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbi8vICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xyXG4vLyAgICBPYmplY3QuZW50cmllcyhwcm9qZWN0KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcclxuLy8gICAgICBjb25zb2xlLmxvZyhrZXksIHZhbHVlKTtcclxuLy8gICAgICBmb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7IC8vIEFwcGVuZCBvdGhlciBwcm9qZWN0IGRhdGFcclxuLy8gICAgfSk7XHJcbi8vXHJcbi8vICAgIHRyeSB7XHJcbi8vICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvZWRpdFByb2plY3QnLCB7XHJcbi8vICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4vLyAgICAgICAgYm9keTogZm9ybURhdGEsXHJcbi8vICAgICAgICAvL2JvZHk6IEpTT04uc3RyaW5naWZ5KHByb2plY3QpXHJcbi8vICAgICAgfSk7XHJcbi8vXHJcbi8vICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMSkge1xyXG4vLyAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcclxuLy8gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvamVjdHMnKTtcclxuLy8gICAgICB9XHJcbi8vICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIHByb2plY3Q6JywgZXJyb3IpO1xyXG4vLyAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XHJcbi8vICAgIH1cclxuLy8gIH1cclxuLy9cclxuLy8gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbi8vICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4vLyAgICBpZiAobmFtZSA9PT0gJ1llYXInIHx8IG5hbWUgPT09ICdNb250aCcgfHwgbmFtZSA9PT0gJ0RheScpIHtcclxuLy8gICAgICAvLyBIYW5kbGUgZGF0ZSBpbnB1dCBjaGFuZ2VcclxuLy8gICAgICBzZXRQcm9qZWN0KHByZXZTdGF0ZSA9PiAoe1xyXG4vLyAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4vLyAgICAgICAgU3RfRGF0ZToge1xyXG4vLyAgICAgICAgICAuLi5wcmV2U3RhdGUuU3RfRGF0ZSxcclxuLy8gICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgIH0pKTtcclxuLy8gICAgfSBlbHNlIHtcclxuLy8gICAgICAvLyBIYW5kbGUgb3RoZXIgaW5wdXQgY2hhbmdlXHJcbi8vICAgICAgc2V0UHJvamVjdChwcmV2U3RhdGUgPT4gKHtcclxuLy8gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuLy8gICAgICAgIFtuYW1lXTogdmFsdWVcclxuLy8gICAgICB9KSk7XHJcbi8vICAgIH1cclxuLy8gIH1cclxuLy9cclxuLy8gIHJldHVybiAoXHJcbi8vICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctMS8yXCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuLy8gICAgICB7T2JqZWN0LmtleXMocHJvamVjdCkubWFwKGtleSA9PiAoXHJcbi8vICAgICAgICA8bGFiZWwga2V5PXtrZXl9PlxyXG4vLyAgICAgICAgICA8c3Bhbj57a2V5fTwvc3Bhbj5cclxuLy8gICAgICAgICAge2tleSA9PT0gJ1N0X0RhdGUnID8gKFxyXG4vLyAgICAgICAgICAgIDxkaXY+XHJcbi8vICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuLy8gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgICAgIG5hbWU9XCJEYXlcIlxyXG4vLyAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRheVwiXHJcbi8vICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4vLyAgICAgICAgICAgICAgICBtYXg9XCIzMVwiXHJcbi8vICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0LlN0X0RhdGVbMl19XHJcbi8vICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbi8vICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICBuYW1lPVwiTW9udGhcIlxyXG4vLyAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vbnRoXCJcclxuLy8gICAgICAgICAgICAgICAgbWluPVwiMVwiXHJcbi8vICAgICAgICAgICAgICAgIG1heD1cIjEyXCJcclxuLy8gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3QuU3RfRGF0ZVsxXX1cclxuLy8gICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuLy8gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbi8vICAgICAgICAgICAgICAgIG5hbWU9XCJZZWFyXCJcclxuLy8gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFyXCJcclxuLy8gICAgICAgICAgICAgICAgbWluPVwiMTk1MFwiXHJcbi8vICAgICAgICAgICAgICAgIG1heD1cIjIwMzBcIlxyXG4vLyAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICB2YWx1ZT17cHJvamVjdC5TdF9EYXRlWzBdfVxyXG4vLyAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgKSA6IChcclxuLy8gICAgICAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbi8vICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbi8vICAgICAgICAgICAgICBuYW1lPXtrZXl9XHJcbi8vICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3Rba2V5XX1cclxuLy8gICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICApfVxyXG4vLyAgICAgICAgPC9sYWJlbD5cclxuLy8gICAgICApKX1cclxuLy8gICAgICA8YnV0dG9uXHJcbi8vICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiXHJcbi8vICAgICAgICAvL2Rpc2FibGVkPXtpc0xvYWRpbmd9XHJcbi8vICAgICAgPlxyXG4vLyAgICAgICAge2lzTG9hZGluZyA/IDxzcGFuPkFkZGluZy4uLjwvc3Bhbj4gOiA8c3Bhbj5BZGQgVGlja2V0PC9zcGFuPn1cclxuLy8gICAgICA8L2J1dHRvbj5cclxuLy8gICAgPC9mb3JtPlxyXG4vLyAgKVxyXG4vL31cclxuLy8iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDcmVhdGVGb3JtIiwicm91dGVyIiwicHJvamVjdCIsInNldFByb2plY3QiLCJmZXRjaERhdGEiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsIlllYXIiLCJTdF9EYXRlIiwiTW9udGgiLCJEYXkiLCJlcnJvciIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImtleSIsInZhbHVlIiwiYXBwZW5kIiwicmVzIiwibWV0aG9kIiwiYm9keSIsInN0YXR1cyIsInJlZnJlc2giLCJwdXNoIiwiaGFuZGxlQ2hhbmdlIiwibmFtZSIsInRhcmdldCIsInByZXZTdGF0ZSIsImZvcm0iLCJvblN1Ym1pdCIsImNsYXNzTmFtZSIsImVuY1R5cGUiLCJrZXlzIiwibWFwIiwibGFiZWwiLCJzcGFuIiwiZGl2IiwiaW5wdXQiLCJyZXF1aXJlZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1pbiIsIm1heCIsIm9uQ2hhbmdlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/projects/edit/page.jsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CreateForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction CreateForm() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [project, setProject] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                console.log(\"rayeh a3mel fetch\");\n                const response = await fetch(\"/api/getOneProject\");\n                console.log(\"Khalast aho\");\n                if (!response.ok) {\n                    throw new Error(\"Network response was not ok\");\n                }\n                const data = await response.json();\n                setProject(data.data[0]);\n                console.log(data.data[0].St_Date[0], data.data[0].St_Date[1], data.data[0].St_Date[2]);\n                console.log(\"Project fetched\", project);\n            } catch (error) {\n                console.error(\"Error fetching projects:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        const formData = new FormData();\n        console.log(project);\n        Object.entries(project).forEach((param)=>{\n            let [key, value] = param;\n            console.log(key, value);\n            formData.append(key, value); // Append other project data\n        });\n        try {\n            const res = await fetch(\"/api/editProject\", {\n                method: \"POST\",\n                body: formData\n            });\n            if (res.status === 201) {\n                router.refresh();\n                router.push(\"/projects\");\n            }\n        } catch (error) {\n            console.error(\"Error uploading project:\", error);\n            setIsLoading(false);\n        }\n    };\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        if (name === \"Year\" || name === \"Month\" || name === \"Day\") {\n            // Handle date input change\n            setProject((prevState)=>({\n                    ...prevState,\n                    name: {\n                        ...prevState.name,\n                        [name]: value\n                    }\n                }));\n        } else {\n            // Handle other input change\n            setProject((prevState)=>({\n                    ...prevState,\n                    [name]: value\n                }));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        className: \"w-1/2\",\n        encType: \"multipart/form-data\",\n        children: [\n            Object.keys(project).map((key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: key\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        key === \"St_Date\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            type: \"text\",\n                            name: key,\n                            onChange: handleChange,\n                            value: project[key][2] + \"-\" + project[key][1] + \"-\" + project[key][0]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            required: true,\n                            type: \"text\",\n                            name: key,\n                            onChange: handleChange,\n                            value: project[key]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                            lineNumber: 101,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, key, true, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this)),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"btn-primary\",\n                children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Adding...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 116,\n                    columnNumber: 22\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Add Ticket\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                    lineNumber: 116,\n                    columnNumber: 47\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\adham\\\\my-app\\\\app\\\\projects\\\\edit\\\\page.jsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n} //\"use client\"\n //\n //import { useRouter } from \"next/navigation\";\n //import { useState, useEffect } from \"react\";\n //\n //export default function CreateForm() {\n //  const router = useRouter();\n //\n //  const [project, setProject] = useState({});\n //  useEffect(() => {\n //    const fetchData = async () => {\n //      try {\n //        console.log(\"rayeh a3mel fetch\");\n //        const response = await fetch('/api/getOneProject');\n //        console.log(\"Khalast aho\");\n //        if (!response.ok) {\n //          throw new Error('Network response was not ok');\n //        }\n //        const data = await response.json();\n //        const fetchedProject = data.data[0];\n //        setProject({\n //          ...fetchedProject,\n //          Year: fetchedProject.St_Date[0],\n //          Month: fetchedProject.St_Date[1],\n //          Day: fetchedProject.St_Date[2]\n //        });\n //        console.log(\"Project fetched\", project);\n //      } catch (error) {\n //        console.error('Error fetching projects:', error);\n //      }\n //    };\n //\n //    fetchData();\n //  }, []);\n //\n //  const [isLoading, setIsLoading] = useState(false);\n //\n //  const handleSubmit = async (e) => {\n //    e.preventDefault();\n //    setIsLoading(true);\n //\n //    const formData = new FormData();\n //    console.log(project);\n //    Object.entries(project).forEach(([key, value]) => {\n //      console.log(key, value);\n //      formData.append(key, value); // Append other project data\n //    });\n //\n //    try {\n //      const res = await fetch('/api/editProject', {\n //        method: \"POST\",\n //        body: formData,\n //        //body: JSON.stringify(project)\n //      });\n //\n //      if (res.status === 201) {\n //        router.refresh();\n //        router.push('/projects');\n //      }\n //    } catch (error) {\n //      console.error('Error uploading project:', error);\n //      setIsLoading(false);\n //    }\n //  }\n //\n //  const handleChange = (e) => {\n //    const { name, value } = e.target;\n //    if (name === 'Year' || name === 'Month' || name === 'Day') {\n //      // Handle date input change\n //      setProject(prevState => ({\n //        ...prevState,\n //        St_Date: {\n //          ...prevState.St_Date,\n //          [name]: value\n //        }\n //      }));\n //    } else {\n //      // Handle other input change\n //      setProject(prevState => ({\n //        ...prevState,\n //        [name]: value\n //      }));\n //    }\n //  }\n //\n //  return (\n //    <form onSubmit={handleSubmit} className=\"w-1/2\" encType=\"multipart/form-data\">\n //      {Object.keys(project).map(key => (\n //        <label key={key}>\n //          <span>{key}</span>\n //          {key === 'St_Date' ? (\n //            <div>\n //              <input\n //                required\n //                type=\"number\"\n //                name=\"Day\"\n //                placeholder=\"Day\"\n //                min=\"1\"\n //                max=\"31\"\n //                onChange={handleChange}\n //                value={project.St_Date[2]}\n //              />\n //              <input\n //                required\n //                type=\"number\"\n //                name=\"Month\"\n //                placeholder=\"Month\"\n //                min=\"1\"\n //                max=\"12\"\n //                onChange={handleChange}\n //                value={project.St_Date[1]}\n //              />\n //              <input\n //                required\n //                type=\"number\"\n //                name=\"Year\"\n //                placeholder=\"Year\"\n //                min=\"1950\"\n //                max=\"2030\"\n //                onChange={handleChange}\n //                value={project.St_Date[0]}\n //              />\n //            </div>\n //          ) : (\n //            <input\n //              required\n //              type=\"text\"\n //              name={key}\n //              onChange={handleChange}\n //              value={project[key]}\n //            />\n //          )}\n //        </label>\n //      ))}\n //      <button\n //        className=\"btn-primary\"\n //        //disabled={isLoading}\n //      >\n //        {isLoading ? <span>Adding...</span> : <span>Add Ticket</span>}\n //      </button>\n //    </form>\n //  )\n //}\n //\n_s(CreateForm, \"782N7u4Dy9ZWsOyfJ0vGKsJDKmY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = CreateForm;\nvar _c;\n$RefreshReg$(_c, \"CreateForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRCQUE0QjtDQUM1Qiw0QkFBNEI7Q0FDNUIseUNBQXlDO0NBQ3pDLDRDQUE0QztDQUM1QyxrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtDQUNqQixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLDJCQUEyQjtDQUMzQiwwQkFBMEI7Q0FDMUIsdUNBQXVDO0NBQ3ZDLG9DQUFvQztDQUNwQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZUFBZTtDQUNmLGlDQUFpQztDQUNqQyxnQ0FBZ0M7Q0FDaEMsU0FBUztDQUNULHdFQUF3RTtDQUN4RSxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLEtBQUs7Q0FDTCxHQUFHO0NBQ0gsRUFBRTtHQWxRc0I3Qzs7UUFDUEgsc0RBQVNBOzs7S0FERkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3Byb2plY3RzL2VkaXQvcGFnZS5qc3g/Y2NmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlRm9ybSgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUoe30pO1xyXG51c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcInJheWVoIGEzbWVsIGZldGNoXCIpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dldE9uZVByb2plY3QnKTtcclxuICAgICAgY29uc29sZS5sb2coXCJLaGFsYXN0IGFob1wiKTtcclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0UHJvamVjdChkYXRhLmRhdGFbMF0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGFbMF0uU3RfRGF0ZVswXSwgZGF0YS5kYXRhWzBdLlN0X0RhdGVbMV0sIGRhdGEuZGF0YVswXS5TdF9EYXRlWzJdKTtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUHJvamVjdCBmZXRjaGVkXCIsIHByb2plY3QpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZldGNoRGF0YSgpO1xyXG59LCBbXSk7XHJcblxyXG5cclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgIE9iamVjdC5lbnRyaWVzKHByb2plY3QpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhrZXksdmFsdWUpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTsgLy8gQXBwZW5kIG90aGVyIHByb2plY3QgZGF0YVxyXG4gICAgfSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9lZGl0UHJvamVjdCcsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4gICAgICAgIC8vYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdClcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gMjAxKSB7XHJcbiAgICAgICAgcm91dGVyLnJlZnJlc2goKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2plY3RzJyk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBwcm9qZWN0OicsIGVycm9yKTtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIGlmIChuYW1lID09PSAnWWVhcicgfHwgbmFtZSA9PT0gJ01vbnRoJyB8fCBuYW1lID09PSAnRGF5Jykge1xyXG4gICAgICAvLyBIYW5kbGUgZGF0ZSBpbnB1dCBjaGFuZ2VcclxuICAgICAgc2V0UHJvamVjdChwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbiAgICAgICAgbmFtZToge1xyXG4gICAgICAgICAgLi4ucHJldlN0YXRlLm5hbWUsXHJcbiAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgb3RoZXIgaW5wdXQgY2hhbmdlXHJcbiAgICAgIHNldFByb2plY3QocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgLi4ucHJldlN0YXRlLFxyXG4gICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgfSkpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cInctMS8yXCIgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cclxuICAgICAge09iamVjdC5rZXlzKHByb2plY3QpLm1hcChrZXkgPT4gKFxyXG4gICAgICAgIDxsYWJlbCBrZXk9e2tleX0+XHJcbiAgICAgICAgICA8c3Bhbj57a2V5fTwvc3Bhbj5cclxuICAgICAgICAgIHtrZXkgPT09ICdTdF9EYXRlJyA/IChcclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPXtrZXl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvamVjdFtrZXldWzJdKyctJytwcm9qZWN0W2tleV1bMV0rJy0nK3Byb2plY3Rba2V5XVswXX1cclxuICAgICAgICAgICAgLz4gXHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBuYW1lPXtrZXl9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17cHJvamVjdFtrZXldfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgKSl9XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWFyeVwiXHJcbiAgICAgICAgLy9kaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IDxzcGFuPkFkZGluZy4uLjwvc3Bhbj4gOiA8c3Bhbj5BZGQgVGlja2V0PC9zcGFuPn1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKVxyXG59XHJcblxyXG4vL1widXNlIGNsaWVudFwiXHJcbi8vXHJcbi8vaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG4vL2ltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy9cclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDcmVhdGVGb3JtKCkge1xyXG4vLyAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbi8vXHJcbi8vICBjb25zdCBbcHJvamVjdCwgc2V0UHJvamVjdF0gPSB1c2VTdGF0ZSh7fSk7XHJcbi8vICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICAgdHJ5IHtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwicmF5ZWggYTNtZWwgZmV0Y2hcIik7XHJcbi8vICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2dldE9uZVByb2plY3QnKTtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwiS2hhbGFzdCBhaG9cIik7XHJcbi8vICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbi8vICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4vLyAgICAgICAgY29uc3QgZmV0Y2hlZFByb2plY3QgPSBkYXRhLmRhdGFbMF07XHJcbi8vICAgICAgICBzZXRQcm9qZWN0KHtcclxuLy8gICAgICAgICAgLi4uZmV0Y2hlZFByb2plY3QsXHJcbi8vICAgICAgICAgIFllYXI6IGZldGNoZWRQcm9qZWN0LlN0X0RhdGVbMF0sXHJcbi8vICAgICAgICAgIE1vbnRoOiBmZXRjaGVkUHJvamVjdC5TdF9EYXRlWzFdLFxyXG4vLyAgICAgICAgICBEYXk6IGZldGNoZWRQcm9qZWN0LlN0X0RhdGVbMl1cclxuLy8gICAgICAgIH0pO1xyXG4vLyAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0IGZldGNoZWRcIiwgcHJvamVjdCk7XHJcbi8vICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2plY3RzOicsIGVycm9yKTtcclxuLy8gICAgICB9XHJcbi8vICAgIH07XHJcbi8vXHJcbi8vICAgIGZldGNoRGF0YSgpO1xyXG4vLyAgfSwgW10pO1xyXG4vL1xyXG4vLyAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuLy9cclxuLy8gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4vL1xyXG4vLyAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4vLyAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuLy8gICAgT2JqZWN0LmVudHJpZXMocHJvamVjdCkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbi8vICAgICAgY29uc29sZS5sb2coa2V5LCB2YWx1ZSk7XHJcbi8vICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpOyAvLyBBcHBlbmQgb3RoZXIgcHJvamVjdCBkYXRhXHJcbi8vICAgIH0pO1xyXG4vL1xyXG4vLyAgICB0cnkge1xyXG4vLyAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2VkaXRQcm9qZWN0Jywge1xyXG4vLyAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuLy8gICAgICAgIGJvZHk6IGZvcm1EYXRhLFxyXG4vLyAgICAgICAgLy9ib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0KVxyXG4vLyAgICAgIH0pO1xyXG4vL1xyXG4vLyAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDEpIHtcclxuLy8gICAgICAgIHJvdXRlci5yZWZyZXNoKCk7XHJcbi8vICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2plY3RzJyk7XHJcbi8vICAgICAgfVxyXG4vLyAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBwcm9qZWN0OicsIGVycm9yKTtcclxuLy8gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4vLyAgICB9XHJcbi8vICB9XHJcbi8vXHJcbi8vICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4vLyAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuLy8gICAgaWYgKG5hbWUgPT09ICdZZWFyJyB8fCBuYW1lID09PSAnTW9udGgnIHx8IG5hbWUgPT09ICdEYXknKSB7XHJcbi8vICAgICAgLy8gSGFuZGxlIGRhdGUgaW5wdXQgY2hhbmdlXHJcbi8vICAgICAgc2V0UHJvamVjdChwcmV2U3RhdGUgPT4gKHtcclxuLy8gICAgICAgIC4uLnByZXZTdGF0ZSxcclxuLy8gICAgICAgIFN0X0RhdGU6IHtcclxuLy8gICAgICAgICAgLi4ucHJldlN0YXRlLlN0X0RhdGUsXHJcbi8vICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuLy8gICAgICAgIH1cclxuLy8gICAgICB9KSk7XHJcbi8vICAgIH0gZWxzZSB7XHJcbi8vICAgICAgLy8gSGFuZGxlIG90aGVyIGlucHV0IGNoYW5nZVxyXG4vLyAgICAgIHNldFByb2plY3QocHJldlN0YXRlID0+ICh7XHJcbi8vICAgICAgICAuLi5wcmV2U3RhdGUsXHJcbi8vICAgICAgICBbbmFtZV06IHZhbHVlXHJcbi8vICAgICAgfSkpO1xyXG4vLyAgICB9XHJcbi8vICB9XHJcbi8vXHJcbi8vICByZXR1cm4gKFxyXG4vLyAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJ3LTEvMlwiIGVuY1R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XHJcbi8vICAgICAge09iamVjdC5rZXlzKHByb2plY3QpLm1hcChrZXkgPT4gKFxyXG4vLyAgICAgICAgPGxhYmVsIGtleT17a2V5fT5cclxuLy8gICAgICAgICAgPHNwYW4+e2tleX08L3NwYW4+XHJcbi8vICAgICAgICAgIHtrZXkgPT09ICdTdF9EYXRlJyA/IChcclxuLy8gICAgICAgICAgICA8ZGl2PlxyXG4vLyAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbi8vICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICBuYW1lPVwiRGF5XCJcclxuLy8gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEYXlcIlxyXG4vLyAgICAgICAgICAgICAgICBtaW49XCIxXCJcclxuLy8gICAgICAgICAgICAgICAgbWF4PVwiMzFcIlxyXG4vLyAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4vLyAgICAgICAgICAgICAgICB2YWx1ZT17cHJvamVjdC5TdF9EYXRlWzJdfVxyXG4vLyAgICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4vLyAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuLy8gICAgICAgICAgICAgICAgbmFtZT1cIk1vbnRoXCJcclxuLy8gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb250aFwiXHJcbi8vICAgICAgICAgICAgICAgIG1pbj1cIjFcIlxyXG4vLyAgICAgICAgICAgICAgICBtYXg9XCIxMlwiXHJcbi8vICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbi8vICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0LlN0X0RhdGVbMV19XHJcbi8vICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbi8vICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4vLyAgICAgICAgICAgICAgICBuYW1lPVwiWWVhclwiXHJcbi8vICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWWVhclwiXHJcbi8vICAgICAgICAgICAgICAgIG1pbj1cIjE5NTBcIlxyXG4vLyAgICAgICAgICAgICAgICBtYXg9XCIyMDMwXCJcclxuLy8gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3QuU3RfRGF0ZVswXX1cclxuLy8gICAgICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICkgOiAoXHJcbi8vICAgICAgICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgICAgICByZXF1aXJlZFxyXG4vLyAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgICAgICAgbmFtZT17a2V5fVxyXG4vLyAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuLy8gICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0W2tleV19XHJcbi8vICAgICAgICAgICAgLz5cclxuLy8gICAgICAgICAgKX1cclxuLy8gICAgICAgIDwvbGFiZWw+XHJcbi8vICAgICAgKSl9XHJcbi8vICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgY2xhc3NOYW1lPVwiYnRuLXByaW1hcnlcIlxyXG4vLyAgICAgICAgLy9kaXNhYmxlZD17aXNMb2FkaW5nfVxyXG4vLyAgICAgID5cclxuLy8gICAgICAgIHtpc0xvYWRpbmcgPyA8c3Bhbj5BZGRpbmcuLi48L3NwYW4+IDogPHNwYW4+QWRkIFRpY2tldDwvc3Bhbj59XHJcbi8vICAgICAgPC9idXR0b24+XHJcbi8vICAgIDwvZm9ybT5cclxuLy8gIClcclxuLy99XHJcbi8vIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ3JlYXRlRm9ybSIsInJvdXRlciIsInByb2plY3QiLCJzZXRQcm9qZWN0IiwiZmV0Y2hEYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJTdF9EYXRlIiwiZXJyb3IiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImFwcGVuZCIsInJlcyIsIm1ldGhvZCIsImJvZHkiLCJzdGF0dXMiLCJyZWZyZXNoIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJ0YXJnZXQiLCJwcmV2U3RhdGUiLCJmb3JtIiwib25TdWJtaXQiLCJjbGFzc05hbWUiLCJlbmNUeXBlIiwia2V5cyIsIm1hcCIsImxhYmVsIiwic3BhbiIsImlucHV0IiwicmVxdWlyZWQiLCJ0eXBlIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/projects/edit/page.jsx\n"));

/***/ })

});
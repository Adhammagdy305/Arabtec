"use strict";
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
exports.id = "pages/api/getAdmin";
exports.ids = ["pages/api/getAdmin"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./Models/admin.js":
/*!*************************!*\
  !*** ./Models/admin.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = mongoose.Schema;\nconst adminSchema = new schema({\n    Username: {\n        type: String,\n        required: true\n    },\n    Password: {\n        type: String,\n        required: true\n    },\n    Level: {\n        type: Number,\n        required: true\n    }\n});\nconst Admin = mongoose.models.Admin || mongoose.model(\"Admin\", adminSchema);\nmodule.exports = Admin;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9Nb2RlbHMvYWRtaW4uanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBQ3pCLE1BQU1DLFNBQVNGLFNBQVNHLE1BQU07QUFFOUIsTUFBTUMsY0FBYSxJQUFJRixPQUFPO0lBQzlCRyxVQUFVO1FBQ05DLE1BQU1DO1FBQ05DLFVBQVU7SUFDVjtJQUNKQyxVQUFVO1FBQ05ILE1BQU1DO1FBQ05DLFVBQVU7SUFDVjtJQUNKRSxPQUFPO1FBQ0hKLE1BQU1LO1FBQ05ILFVBQVU7SUFDZDtBQUNBO0FBRUEsTUFBTUksUUFBUVosU0FBU2EsTUFBTSxDQUFDRCxLQUFLLElBQUlaLFNBQVNjLEtBQUssQ0FBQyxTQUFTVjtBQUUvRFcsT0FBT0MsT0FBTyxHQUFHSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvam8taGVscGRlc2svLi9Nb2RlbHMvYWRtaW4uanM/YjFkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbmNvbnN0IHNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuXHJcbmNvbnN0IGFkbWluU2NoZW1hPSBuZXcgc2NoZW1hKHtcclxuVXNlcm5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG5QYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbkxldmVsOiB7XHJcbiAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG59XHJcbn0pO1xyXG5cclxuY29uc3QgQWRtaW4gPSBtb25nb29zZS5tb2RlbHMuQWRtaW4gfHwgbW9uZ29vc2UubW9kZWwoJ0FkbWluJywgYWRtaW5TY2hlbWEpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBZG1pbjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwic2NoZW1hIiwiU2NoZW1hIiwiYWRtaW5TY2hlbWEiLCJVc2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIlBhc3N3b3JkIiwiTGV2ZWwiLCJOdW1iZXIiLCJBZG1pbiIsIm1vZGVscyIsIm1vZGVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./Models/admin.js\n");

/***/ }),

/***/ "(api)/./app/mdb/db.js":
/*!***********************!*\
  !*** ./app/mdb/db.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// db.js\n\nconst dbURI = \"mongodb+srv://Dodo:586200@cluster0.x8wkalj.mongodb.net/Arabtec_dummy?retryWrites=true&w=majority\"; // Update with your MongoDB connection string\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(dbURI, {\n            socketTimeoutMS: 30000\n        });\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n        process.exit(1); // Exit process with failure\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvbWRiL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFFBQVE7QUFDd0I7QUFFaEMsTUFBTUMsUUFBUSxvR0FBb0csNkNBQTZDO0FBRS9KLE1BQU1DLFlBQVk7SUFDZCxJQUFJO1FBQ0EsTUFBTUYsdURBQWdCLENBQUNDLE9BQU87WUFDMUJHLGlCQUFpQjtRQUNyQjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPQyxPQUFPO1FBQ1pGLFFBQVFFLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDQyxRQUFRQyxJQUFJLENBQUMsSUFBSSw0QkFBNEI7SUFDakQ7QUFDSjtBQUVBLGlFQUFlUCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9qby1oZWxwZGVzay8uL2FwcC9tZGIvZGIuanM/Zjg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYi5qc1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgZGJVUkkgPSAnbW9uZ29kYitzcnY6Ly9Eb2RvOjU4NjIwMEBjbHVzdGVyMC54OHdrYWxqLm1vbmdvZGIubmV0L0FyYWJ0ZWNfZHVtbXk/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JzsgLy8gVXBkYXRlIHdpdGggeW91ciBNb25nb0RCIGNvbm5lY3Rpb24gc3RyaW5nXHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoZGJVUkksIHtcclxuICAgICAgICAgICAgc29ja2V0VGltZW91dE1TOiAzMDAwMCwgLy8gRXhhbXBsZTogSW5jcmVhc2Ugc29ja2V0IHRpbWVvdXQgdG8gMzAgc2Vjb25kc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IpO1xyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTsgLy8gRXhpdCBwcm9jZXNzIHdpdGggZmFpbHVyZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkYlVSSSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJzb2NrZXRUaW1lb3V0TVMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwcm9jZXNzIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./app/mdb/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/getAdmin.js":
/*!*******************************!*\
  !*** ./pages/api/getAdmin.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_mdb_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/mdb/db */ \"(api)/./app/mdb/db.js\");\n/* harmony import */ var _Models_admin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/admin.js */ \"(api)/./Models/admin.js\");\n/* harmony import */ var _Models_admin_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Models_admin_js__WEBPACK_IMPORTED_MODULE_1__);\n// /api/projects.js\n\n // Import your Mongoose model\n// Connect to MongoDB\nasync function handler(req, res) {\n    await (0,_app_mdb_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"GET\") {\n        try {\n            console.log(\"Ana hena habda2 adawar\");\n            const admins = await _Models_admin_js__WEBPACK_IMPORTED_MODULE_1___default().find().sort({\n                \"Level\": 1\n            }); // Fetch all items from the database\n            res.status(200).json({\n                success: true,\n                data: admins\n            });\n        } catch (error) {\n            console.error(\"Error fetching items:\", error);\n            res.status(500).json({\n                success: false,\n                error: \"Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0QWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLG1CQUFtQjtBQUNzQjtBQUNDLENBQUMsNkJBQTZCO0FBR3hFLHFCQUFxQjtBQUdOLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUMxQyxNQUFNSix1REFBU0E7SUFDZixJQUFJRyxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN0QixJQUFJO1lBQ0FDLFFBQVFDLEdBQUcsQ0FBQztZQUNaLE1BQU1DLFNBQVMsTUFBTVAsNERBQVUsR0FBR1MsSUFBSSxDQUFDO2dCQUFDLFNBQVM7WUFBQyxJQUFJLG9DQUFvQztZQUMxRk4sSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztnQkFBTUMsTUFBTU47WUFBTztRQUN2RCxFQUFFLE9BQU9PLE9BQU87WUFDWlQsUUFBUVMsS0FBSyxDQUFDLHlCQUF5QkE7WUFDdkNYLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9FLE9BQU87WUFBZTtRQUNqRTtJQUNKLE9BQU87UUFDSFgsSUFBSU8sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU9FLE9BQU87UUFBcUI7SUFDdkU7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvam8taGVscGRlc2svLi9wYWdlcy9hcGkvZ2V0QWRtaW4uanM/YjVmOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXBpL3Byb2plY3RzLmpzXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vYXBwL21kYi9kYic7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi9Nb2RlbHMvYWRtaW4uanMnOyAvLyBJbXBvcnQgeW91ciBNb25nb29zZSBtb2RlbFxyXG5cclxuXHJcbi8vIENvbm5lY3QgdG8gTW9uZ29EQlxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBbmEgaGVuYSBoYWJkYTIgYWRhd2FyXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBhZG1pbnMgPSBhd2FpdCBBZG1pbi5maW5kKCkuc29ydCh7XCJMZXZlbFwiOiAxfSk7IC8vIEZldGNoIGFsbCBpdGVtcyBmcm9tIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IGFkbWlucyB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBpdGVtczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmVyIEVycm9yJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiQWRtaW4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImFkbWlucyIsImZpbmQiLCJzb3J0Iiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getAdmin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getAdmin.js"));
module.exports = __webpack_exports__;

})();
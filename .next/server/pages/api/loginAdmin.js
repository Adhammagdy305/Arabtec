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
exports.id = "pages/api/loginAdmin";
exports.ids = ["pages/api/loginAdmin"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ "(api)/./pages/api/loginAdmin.js":
/*!*********************************!*\
  !*** ./pages/api/loginAdmin.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_mdb_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/mdb/db */ \"(api)/./app/mdb/db.js\");\n/* harmony import */ var _Models_admin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/admin.js */ \"(api)/./Models/admin.js\");\n/* harmony import */ var _Models_admin_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Models_admin_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n\n // Import your Mongoose model\n\nconst config = {\n    api: {\n        bodyParser: true\n    }\n};\nasync function handler(req, res) {\n    // Connect to MongoDB\n    await (0,_app_mdb_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"POST\") {\n        try {\n            // Extract admin data from req.body\n            const { Username, Password } = req.body;\n            // Find the admin user\n            const user = await _Models_admin_js__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                Username: Username\n            });\n            if (user) {\n                // Compare passwords\n                const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(Password, user.Password);\n                if (passwordMatch) {\n                    // Passwords match, user authenticated\n                    console.log(\"Password Match!\");\n                    res.status(201).json({\n                        success: true,\n                        message: \"Logged in\"\n                    });\n                } else {\n                    // Invalid password\n                    res.status(401).json({\n                        error: \"Invalid password\"\n                    });\n                }\n            } else {\n                // User not found\n                res.status(404).json({\n                    error: \"User not found\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            res.status(500).json({\n                success: false,\n                error: \"Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW5BZG1pbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ0MsQ0FBQyw2QkFBNkI7QUFDNUM7QUFFckIsTUFBTUcsU0FBUztJQUNwQkMsS0FBSztRQUNIQyxZQUFZO0lBQ2Q7QUFDRixFQUFFO0FBRWEsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLHFCQUFxQjtJQUNyQixNQUFNUix1REFBU0E7SUFFZixJQUFJTyxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsbUNBQW1DO1lBQ25DLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxRQUFRLEVBQUUsR0FBR0osSUFBSUssSUFBSTtZQUV2QyxzQkFBc0I7WUFDdEIsTUFBTUMsT0FBTyxNQUFNWiwrREFBYSxDQUFDO2dCQUFFUyxVQUFVQTtZQUFTO1lBRXRELElBQUlHLE1BQU07Z0JBQ1Isb0JBQW9CO2dCQUNwQixNQUFNRSxnQkFBZ0IsTUFBTWIscURBQWMsQ0FBQ1MsVUFBVUUsS0FBS0YsUUFBUTtnQkFFbEUsSUFBSUksZUFBZTtvQkFDakIsc0NBQXNDO29CQUN0Q0UsUUFBUUMsR0FBRyxDQUFDO29CQUNaVixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO3dCQUFFQyxTQUFTO3dCQUFNQyxTQUFTO29CQUFZO2dCQUM3RCxPQUFPO29CQUNMLG1CQUFtQjtvQkFDbkJkLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVHLE9BQU87b0JBQW1CO2dCQUNuRDtZQUNGLE9BQU87Z0JBQ0wsaUJBQWlCO2dCQUNqQmYsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUcsT0FBTztnQkFBaUI7WUFDakQ7UUFDRixFQUFFLE9BQU9BLE9BQU87WUFDZE4sUUFBUU0sS0FBSyxDQUFDLHFCQUFxQkE7WUFDbkNmLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9FLE9BQU87WUFBZTtRQUMvRDtJQUNGLE9BQU87UUFDTGYsSUFBSVcsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU9FLE9BQU87UUFBcUI7SUFDckU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvam8taGVscGRlc2svLi9wYWdlcy9hcGkvbG9naW5BZG1pbi5qcz9iODk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vYXBwL21kYi9kYic7XHJcbmltcG9ydCBBZG1pbiBmcm9tICcuLi8uLi9Nb2RlbHMvYWRtaW4uanMnOyAvLyBJbXBvcnQgeW91ciBNb25nb29zZSBtb2RlbFxyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaToge1xyXG4gICAgYm9keVBhcnNlcjogdHJ1ZSwgLy8gRW5hYmxlIGJvZHkgcGFyc2luZ1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgLy8gQ29ubmVjdCB0byBNb25nb0RCXHJcbiAgYXdhaXQgY29ubmVjdERCKCk7XHJcblxyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEV4dHJhY3QgYWRtaW4gZGF0YSBmcm9tIHJlcS5ib2R5XHJcbiAgICAgIGNvbnN0IHsgVXNlcm5hbWUsIFBhc3N3b3JkIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgIC8vIEZpbmQgdGhlIGFkbWluIHVzZXJcclxuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IEFkbWluLmZpbmRPbmUoeyBVc2VybmFtZTogVXNlcm5hbWUgfSk7XHJcblxyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIC8vIENvbXBhcmUgcGFzc3dvcmRzXHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFBhc3N3b3JkLCB1c2VyLlBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkTWF0Y2gpIHtcclxuICAgICAgICAgIC8vIFBhc3N3b3JkcyBtYXRjaCwgdXNlciBhdXRoZW50aWNhdGVkXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3N3b3JkIE1hdGNoIVwiKTtcclxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogJ0xvZ2dlZCBpbicgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIEludmFsaWQgcGFzc3dvcmRcclxuICAgICAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHBhc3N3b3JkJyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gVXNlciBub3QgZm91bmRcclxuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnVXNlciBub3QgZm91bmQnIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluOicsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJBZG1pbiIsImJjcnlwdCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiVXNlcm5hbWUiLCJQYXNzd29yZCIsImJvZHkiLCJ1c2VyIiwiZmluZE9uZSIsInBhc3N3b3JkTWF0Y2giLCJjb21wYXJlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/loginAdmin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/loginAdmin.js"));
module.exports = __webpack_exports__;

})();
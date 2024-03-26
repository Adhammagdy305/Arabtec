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
exports.id = "pages/api/uploadAdmin";
exports.ids = ["pages/api/uploadAdmin"];
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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

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

/***/ "(api)/./pages/api/uploadAdmin.js":
/*!**********************************!*\
  !*** ./pages/api/uploadAdmin.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_mdb_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/mdb/db */ \"(api)/./app/mdb/db.js\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Models_admin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Models/admin.js */ \"(api)/./Models/admin.js\");\n/* harmony import */ var _Models_admin_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Models_admin_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n// /api/projects.js\n\n // Import multer\n // Import your Mongoose model\n\n// Initialize multer middleware\nconst upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({\n    dest: \"uploads/\"\n}); // Specify the destination folder for uploaded files\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    // Connect to MongoDB\n    await (0,_app_mdb_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"POST\") {\n        try {\n            // Use Multer middleware to handle file uploads\n            upload.any()(req, res, async function(err) {\n                if (err) {\n                    console.error(\"Error uploading files:\", err);\n                    res.status(500).json({\n                        success: false,\n                        error: \"Server Error\"\n                    });\n                    return;\n                }\n                console.log(\"Body: \", req.body);\n                // Extract project data from req.body\n                const { Username, Password, Level } = req.body;\n                const hash_pass = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().hash(Password, 10);\n                // Create a new Project instance with the extracted data\n                const admin = new (_Models_admin_js__WEBPACK_IMPORTED_MODULE_2___default())({\n                    Username,\n                    Password: hash_pass,\n                    Level\n                });\n                console.log(\"admin aho:\", admin);\n                // Save the project to the database\n                await admin.save().then(()=>{\n                    console.log(\"Saved!\");\n                });\n                res.status(201).json({\n                    success: true\n                });\n            });\n        } catch (error) {\n            console.error(\"Error creating project:\", error);\n            res.status(500).json({\n                success: false,\n                error: \"Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkQWRtaW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUJBQW1CO0FBQ3NCO0FBQ2IsQ0FBQyxnQkFBZ0I7QUFDSCxDQUFDLDZCQUE2QjtBQUM1QztBQUc1QiwrQkFBK0I7QUFDL0IsTUFBTUksU0FBU0gsNkNBQU1BLENBQUM7SUFBRUksTUFBTTtBQUFXLElBQUksb0RBQW9EO0FBRTFGLE1BQU1DLFNBQVM7SUFDcEJDLEtBQUs7UUFDSEMsWUFBWTtJQUNkO0FBQ0YsRUFBRTtBQUdhLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxxQkFBcUI7SUFDbkIsTUFBTVgsdURBQVNBO0lBQ2YsSUFBSVUsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDM0IsSUFBSTtZQUNGLCtDQUErQztZQUMvQ1IsT0FBT1MsR0FBRyxHQUFHSCxLQUFLQyxLQUFLLGVBQWdCRyxHQUFHO2dCQUN4QyxJQUFJQSxLQUFLO29CQUNQQyxRQUFRQyxLQUFLLENBQUMsMEJBQTBCRjtvQkFDeENILElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLFNBQVM7d0JBQU9ILE9BQU87b0JBQWU7b0JBQzdEO2dCQUNGO2dCQUNBRCxRQUFRSyxHQUFHLENBQUMsVUFBVVYsSUFBSVcsSUFBSTtnQkFDOUIscUNBQXFDO2dCQUNyQyxNQUFNLEVBQ0pDLFFBQVEsRUFDUkMsUUFBUSxFQUNSQyxLQUFLLEVBQ04sR0FBR2QsSUFBSVcsSUFBSTtnQkFDWixNQUFNSSxZQUFXLE1BQU10QixrREFBVyxDQUFDb0IsVUFBVTtnQkFDN0Msd0RBQXdEO2dCQUN4RCxNQUFNSSxRQUFRLElBQUl6Qix5REFBS0EsQ0FBQztvQkFDdEJvQjtvQkFDQUMsVUFBVUU7b0JBQ1ZEO2dCQUNGO2dCQUNBVCxRQUFRSyxHQUFHLENBQUMsY0FBYU87Z0JBQ3pCLG1DQUFtQztnQkFDbkMsTUFBTUEsTUFBTUMsSUFBSSxHQUFHQyxJQUFJLENBQUM7b0JBQUtkLFFBQVFLLEdBQUcsQ0FBQztnQkFBVTtnQkFFbkRULElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLFNBQVM7Z0JBQUs7WUFDdkM7UUFDRixFQUFFLE9BQU9ILE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLDJCQUEyQkE7WUFDekNMLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU9ILE9BQU87WUFBZTtRQUMvRDtJQUNGLE9BQU87UUFDTEwsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1lBQU9ILE9BQU87UUFBcUI7SUFDckU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvam8taGVscGRlc2svLi9wYWdlcy9hcGkvdXBsb2FkQWRtaW4uanM/YjU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXBpL3Byb2plY3RzLmpzXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vYXBwL21kYi9kYic7XHJcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJzsgLy8gSW1wb3J0IG11bHRlclxyXG5pbXBvcnQgQWRtaW4gZnJvbSAnLi4vLi4vTW9kZWxzL2FkbWluLmpzJzsgLy8gSW1wb3J0IHlvdXIgTW9uZ29vc2UgbW9kZWxcclxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xyXG5cclxuXHJcbi8vIEluaXRpYWxpemUgbXVsdGVyIG1pZGRsZXdhcmVcclxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgZGVzdDogJ3VwbG9hZHMvJyB9KTsgLy8gU3BlY2lmeSB0aGUgZGVzdGluYXRpb24gZm9sZGVyIGZvciB1cGxvYWRlZCBmaWxlc1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLCAvLyBEaXNhYmxlIGJvZHkgcGFyc2luZywgYXMgTXVsdGVyIHdpbGwgaGFuZGxlIGl0XHJcbiAgfSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgLy8gQ29ubmVjdCB0byBNb25nb0RCXHJcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFVzZSBNdWx0ZXIgbWlkZGxld2FyZSB0byBoYW5kbGUgZmlsZSB1cGxvYWRzXHJcbiAgICAgIHVwbG9hZC5hbnkoKShyZXEsIHJlcywgYXN5bmMgZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwbG9hZGluZyBmaWxlczonLCBlcnIpO1xyXG4gICAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJvZHk6IFwiLCByZXEuYm9keSk7XHJcbiAgICAgICAgLy8gRXh0cmFjdCBwcm9qZWN0IGRhdGEgZnJvbSByZXEuYm9keVxyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgIFVzZXJuYW1lLFxyXG4gICAgICAgICAgUGFzc3dvcmQsXHJcbiAgICAgICAgICBMZXZlbFxyXG4gICAgICAgIH0gPSByZXEuYm9keTtcclxuICAgICAgICBjb25zdCBoYXNoX3Bhc3M9IGF3YWl0IGJjcnlwdC5oYXNoKFBhc3N3b3JkLCAxMCk7XHJcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IFByb2plY3QgaW5zdGFuY2Ugd2l0aCB0aGUgZXh0cmFjdGVkIGRhdGFcclxuICAgICAgICBjb25zdCBhZG1pbiA9IG5ldyBBZG1pbih7XHJcbiAgICAgICAgICBVc2VybmFtZSxcclxuICAgICAgICAgIFBhc3N3b3JkOiBoYXNoX3Bhc3MsXHJcbiAgICAgICAgICBMZXZlbCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFkbWluIGFobzpcIixhZG1pbik7XHJcbiAgICAgICAgLy8gU2F2ZSB0aGUgcHJvamVjdCB0byB0aGUgZGF0YWJhc2VcclxuICAgICAgICBhd2FpdCBhZG1pbi5zYXZlKCkudGhlbigoKT0+e2NvbnNvbGUubG9nKFwiU2F2ZWQhXCIpO30pO1xyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvamVjdDonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmVyIEVycm9yJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwibXVsdGVyIiwiQWRtaW4iLCJiY3J5cHQiLCJ1cGxvYWQiLCJkZXN0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhbnkiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImxvZyIsImJvZHkiLCJVc2VybmFtZSIsIlBhc3N3b3JkIiwiTGV2ZWwiLCJoYXNoX3Bhc3MiLCJoYXNoIiwiYWRtaW4iLCJzYXZlIiwidGhlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadAdmin.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/uploadAdmin.js"));
module.exports = __webpack_exports__;

})();
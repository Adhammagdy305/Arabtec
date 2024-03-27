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
exports.id = "pages/api/uploadContact";
exports.ids = ["pages/api/uploadContact"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./Models/Contactus.js":
/*!*****************************!*\
  !*** ./Models/Contactus.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = mongoose.Schema;\nconst contactSchema = new schema({\n    Name: {\n        type: String,\n        required: true\n    },\n    Email: {\n        type: String,\n        required: true\n    },\n    Comments: {\n        type: String,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nconst Contact = mongoose.models.Contact || mongoose.model(\"Contact\", contactSchema);\nmodule.exports = Contact;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9Nb2RlbHMvQ29udGFjdHVzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUN6QixNQUFNQyxTQUFTRixTQUFTRyxNQUFNO0FBRTlCLE1BQU1DLGdCQUFlLElBQUlGLE9BQU87SUFDaENHLE1BQU07UUFDRkMsTUFBTUM7UUFDTkMsVUFBVTtJQUNWO0lBQ0pDLE9BQU87UUFDSEgsTUFBTUM7UUFDTkMsVUFBVTtJQUNWO0lBQ0pFLFVBQVU7UUFDTkosTUFBTUM7UUFDTkMsVUFBVTtJQUNWO0FBRUosR0FBRztJQUFDRyxZQUFZO0FBQUk7QUFFcEIsTUFBTUMsVUFBVVosU0FBU2EsTUFBTSxDQUFDRCxPQUFPLElBQUlaLFNBQVNjLEtBQUssQ0FBQyxXQUFXVjtBQUVyRVcsT0FBT0MsT0FBTyxHQUFHSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Rvam8taGVscGRlc2svLi9Nb2RlbHMvQ29udGFjdHVzLmpzP2I2ZmEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xyXG5jb25zdCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XHJcblxyXG5jb25zdCBjb250YWN0U2NoZW1hPSBuZXcgc2NoZW1hKHtcclxuTmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbkVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuQ29tbWVudHM6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9XHJcblxyXG59LCB7dGltZXN0YW1wczogdHJ1ZX0pO1xyXG5cclxuY29uc3QgQ29udGFjdCA9IG1vbmdvb3NlLm1vZGVscy5Db250YWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdDb250YWN0JywgY29udGFjdFNjaGVtYSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3Q7ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJzY2hlbWEiLCJTY2hlbWEiLCJjb250YWN0U2NoZW1hIiwiTmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIkVtYWlsIiwiQ29tbWVudHMiLCJ0aW1lc3RhbXBzIiwiQ29udGFjdCIsIm1vZGVscyIsIm1vZGVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./Models/Contactus.js\n");

/***/ }),

/***/ "(api)/./app/mdb/db.js":
/*!***********************!*\
  !*** ./app/mdb/db.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// db.js\n\nconst dbURI = \"mongodb+srv://Dodo:586200@cluster0.x8wkalj.mongodb.net/Arabtec_dummy?retryWrites=true&w=majority\"; // Update with your MongoDB connection string\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(dbURI, {\n            socketTimeoutMS: 30000\n        });\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n        process.exit(1); // Exit process with failure\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvbWRiL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFFBQVE7QUFDd0I7QUFFaEMsTUFBTUMsUUFBUSxvR0FBb0csNkNBQTZDO0FBRS9KLE1BQU1DLFlBQVk7SUFDZCxJQUFJO1FBQ0EsTUFBTUYsdURBQWdCLENBQUNDLE9BQU87WUFDMUJHLGlCQUFpQjtRQUNyQjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPQyxPQUFPO1FBQ1pGLFFBQVFFLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDQyxRQUFRQyxJQUFJLENBQUMsSUFBSSw0QkFBNEI7SUFDakQ7QUFDSjtBQUVBLGlFQUFlUCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9qby1oZWxwZGVzay8uL2FwcC9tZGIvZGIuanM/Zjg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYi5qc1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgZGJVUkkgPSAnbW9uZ29kYitzcnY6Ly9Eb2RvOjU4NjIwMEBjbHVzdGVyMC54OHdrYWxqLm1vbmdvZGIubmV0L0FyYWJ0ZWNfZHVtbXk/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JzsgLy8gVXBkYXRlIHdpdGggeW91ciBNb25nb0RCIGNvbm5lY3Rpb24gc3RyaW5nXHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoZGJVUkksIHtcclxuICAgICAgICAgICAgc29ja2V0VGltZW91dE1TOiAzMDAwMCwgLy8gRXhhbXBsZTogSW5jcmVhc2Ugc29ja2V0IHRpbWVvdXQgdG8gMzAgc2Vjb25kc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IpO1xyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTsgLy8gRXhpdCBwcm9jZXNzIHdpdGggZmFpbHVyZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkYlVSSSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJzb2NrZXRUaW1lb3V0TVMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwcm9jZXNzIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./app/mdb/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/uploadContact.js":
/*!************************************!*\
  !*** ./pages/api/uploadContact.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_mdb_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/mdb/db */ \"(api)/./app/mdb/db.js\");\n/* harmony import */ var _Models_Contactus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/Contactus.js */ \"(api)/./Models/Contactus.js\");\n/* harmony import */ var _Models_Contactus_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Models_Contactus_js__WEBPACK_IMPORTED_MODULE_1__);\n\n // Import your Mongoose model\nconst config = {\n    api: {\n        bodyParser: true\n    }\n};\nasync function handler(req, res) {\n    // Connect to MongoDB\n    await (0,_app_mdb_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"POST\") {\n        try {\n            console.log(req.body);\n            // Extract project data from req.body\n            const { Name, Email, Comments } = req.body;\n            const contact = new (_Models_Contactus_js__WEBPACK_IMPORTED_MODULE_1___default())({\n                Name,\n                Email,\n                Comments\n            });\n            console.log(\"Comment aho:\", contact);\n            // Save the contact to the database\n            await contact.save().then(()=>{\n                console.log(\"Saved!\");\n            });\n            res.status(201).json({\n                success: true\n            });\n        } catch (error) {\n            console.error(\"Error creating contact:\", error);\n            res.status(500).json({\n                success: false,\n                error: \"Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkQ29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUNPLENBQUMsNkJBQTZCO0FBRXZFLE1BQU1FLFNBQVM7SUFDcEJDLEtBQUs7UUFDSEMsWUFBWTtJQUNkO0FBQ0YsRUFBRTtBQUVhLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxxQkFBcUI7SUFDckIsTUFBTVAsdURBQVNBO0lBRWYsSUFBSU0sSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsSUFBSTtZQUNGQyxRQUFRQyxHQUFHLENBQUNKLElBQUlLLElBQUk7WUFDcEIscUNBQXFDO1lBQ3JDLE1BQU0sRUFDSkMsSUFBSSxFQUNKQyxLQUFLLEVBQ0xDLFFBQVEsRUFDVCxHQUFHUixJQUFJSyxJQUFJO1lBRVosTUFBTUksVUFBVSxJQUFJZCw2REFBT0EsQ0FBQztnQkFDMUJXO2dCQUNBQztnQkFDQUM7WUFDRjtZQUNBTCxRQUFRQyxHQUFHLENBQUMsZ0JBQWlCSztZQUM3QixtQ0FBbUM7WUFDbkMsTUFBTUEsUUFBUUMsSUFBSSxHQUFHQyxJQUFJLENBQUM7Z0JBQUtSLFFBQVFDLEdBQUcsQ0FBQztZQUFVO1lBQ3JESCxJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO1lBQUs7UUFDdkMsRUFBRSxPQUFPQyxPQUFPO1lBQ2RaLFFBQVFZLEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDZCxJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO2dCQUFPQyxPQUFPO1lBQWU7UUFDL0Q7SUFDRixPQUFPO1FBQ0xkLElBQUlXLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFPQyxPQUFPO1FBQXFCO0lBQ3JFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2pvLWhlbHBkZXNrLy4vcGFnZXMvYXBpL3VwbG9hZENvbnRhY3QuanM/N2ZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdERCIGZyb20gJy4uLy4uL2FwcC9tZGIvZGInO1xyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi9Nb2RlbHMvQ29udGFjdHVzLmpzJzsgLy8gSW1wb3J0IHlvdXIgTW9uZ29vc2UgbW9kZWxcclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgYXBpOiB7XHJcbiAgICBib2R5UGFyc2VyOiB0cnVlLCAvLyBFbmFibGUgYm9keSBwYXJzaW5nXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvLyBDb25uZWN0IHRvIE1vbmdvREJcclxuICBhd2FpdCBjb25uZWN0REIoKTtcclxuXHJcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xyXG4gICAgICAvLyBFeHRyYWN0IHByb2plY3QgZGF0YSBmcm9tIHJlcS5ib2R5XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBOYW1lLFxyXG4gICAgICAgIEVtYWlsLFxyXG4gICAgICAgIENvbW1lbnRzXHJcbiAgICAgIH0gPSByZXEuYm9keTtcclxuXHJcbiAgICAgIGNvbnN0IGNvbnRhY3QgPSBuZXcgQ29udGFjdCh7XHJcbiAgICAgICAgTmFtZSxcclxuICAgICAgICBFbWFpbCxcclxuICAgICAgICBDb21tZW50c1xyXG4gICAgICB9KTtcclxuICAgICAgY29uc29sZS5sb2coXCJDb21tZW50IGFobzpcIiAsIGNvbnRhY3QpO1xyXG4gICAgICAvLyBTYXZlIHRoZSBjb250YWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICBhd2FpdCBjb250YWN0LnNhdmUoKS50aGVuKCgpPT57Y29uc29sZS5sb2coJ1NhdmVkIScpO30pO1xyXG4gICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBjb250YWN0OicsIGVycm9yKTtcclxuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdTZXJ2ZXIgRXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ01ldGhvZCBOb3QgQWxsb3dlZCcgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJDb250YWN0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsIk5hbWUiLCJFbWFpbCIsIkNvbW1lbnRzIiwiY29udGFjdCIsInNhdmUiLCJ0aGVuIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadContact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/uploadContact.js"));
module.exports = __webpack_exports__;

})();
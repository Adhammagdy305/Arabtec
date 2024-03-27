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

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_mdb_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/mdb/db */ \"(api)/./app/mdb/db.js\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multer */ \"multer\");\n/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Models_Contactus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Models/Contactus.js */ \"(api)/./Models/Contactus.js\");\n/* harmony import */ var _Models_Contactus_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Models_Contactus_js__WEBPACK_IMPORTED_MODULE_2__);\n// /api/projects.js\n\n // Import multer\n // Import your Mongoose model\n// Initialize multer middleware\nconst upload = multer__WEBPACK_IMPORTED_MODULE_1___default()({\n    dest: \"uploads/\"\n}); // Specify the destination folder for uploaded files\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\nasync function handler(req, res) {\n    // Connect to MongoDB\n    await (0,_app_mdb_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"POST\") {\n        try {\n            // Use Multer middleware to handle file uploads\n            upload.any()(req, res, async function(err) {\n                if (err) {\n                    console.error(\"Error uploading files:\", err);\n                    res.status(500).json({\n                        success: false,\n                        error: \"Server Error\"\n                    });\n                    return;\n                }\n                console.log(\"Body: \", req.body);\n                // Extract project data from req.body\n                const { Name, Email, Comments } = req.body;\n                const contact = new (_Models_Contactus_js__WEBPACK_IMPORTED_MODULE_2___default())({\n                    Name,\n                    Email,\n                    Comments\n                });\n                console.log(\"contact aho:\", contact);\n                // Save the project to the database\n                await contact.save().then(()=>{\n                    console.log(\"Saved!\");\n                });\n                res.status(201).json({\n                    success: true\n                });\n            });\n        } catch (error) {\n            console.error(\"Error creating project:\", error);\n            res.status(500).json({\n                success: false,\n                error: \"Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkQ29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsbUJBQW1CO0FBQ3NCO0FBQ2IsQ0FBQyxnQkFBZ0I7QUFDRyxDQUFDLDZCQUE2QjtBQUU5RSwrQkFBK0I7QUFDL0IsTUFBTUcsU0FBU0YsNkNBQU1BLENBQUM7SUFBRUcsTUFBTTtBQUFXLElBQUksb0RBQW9EO0FBRTFGLE1BQU1DLFNBQVM7SUFDcEJDLEtBQUs7UUFDSEMsWUFBWTtJQUNkO0FBQ0YsRUFBRTtBQUVhLGVBQWVDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxxQkFBcUI7SUFDbkIsTUFBTVYsdURBQVNBO0lBQ2YsSUFBSVMsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDM0IsSUFBSTtZQUNGLCtDQUErQztZQUMvQ1IsT0FBT1MsR0FBRyxHQUFHSCxLQUFLQyxLQUFLLGVBQWdCRyxHQUFHO2dCQUN4QyxJQUFJQSxLQUFLO29CQUNQQyxRQUFRQyxLQUFLLENBQUMsMEJBQTBCRjtvQkFDeENILElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7d0JBQUVDLFNBQVM7d0JBQU9ILE9BQU87b0JBQWU7b0JBQzdEO2dCQUNGO2dCQUNBRCxRQUFRSyxHQUFHLENBQUMsVUFBVVYsSUFBSVcsSUFBSTtnQkFDOUIscUNBQXFDO2dCQUNyQyxNQUFNLEVBQ0pDLElBQUksRUFDSkMsS0FBSyxFQUNMQyxRQUFRLEVBQ1QsR0FBR2QsSUFBSVcsSUFBSTtnQkFDWixNQUFNSSxVQUFVLElBQUl0Qiw2REFBT0EsQ0FBQztvQkFDMUJtQjtvQkFDQUM7b0JBQ0FDO2dCQUNGO2dCQUNBVCxRQUFRSyxHQUFHLENBQUMsZ0JBQWVLO2dCQUMzQixtQ0FBbUM7Z0JBQ25DLE1BQU1BLFFBQVFDLElBQUksR0FBR0MsSUFBSSxDQUFDO29CQUFLWixRQUFRSyxHQUFHLENBQUM7Z0JBQVU7Z0JBQ3JEVCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUFLO1lBQ3ZDO1FBQ0YsRUFBRSxPQUFPSCxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQywyQkFBMkJBO1lBQ3pDTCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO2dCQUFPSCxPQUFPO1lBQWU7UUFDL0Q7SUFDRixPQUFPO1FBQ0xMLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFPSCxPQUFPO1FBQXFCO0lBQ3JFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2pvLWhlbHBkZXNrLy4vcGFnZXMvYXBpL3VwbG9hZENvbnRhY3QuanM/N2ZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXBpL3Byb2plY3RzLmpzXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vYXBwL21kYi9kYic7XHJcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJzsgLy8gSW1wb3J0IG11bHRlclxyXG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi9Nb2RlbHMvQ29udGFjdHVzLmpzJzsgLy8gSW1wb3J0IHlvdXIgTW9uZ29vc2UgbW9kZWxcclxuXHJcbi8vIEluaXRpYWxpemUgbXVsdGVyIG1pZGRsZXdhcmVcclxuY29uc3QgdXBsb2FkID0gbXVsdGVyKHsgZGVzdDogJ3VwbG9hZHMvJyB9KTsgLy8gU3BlY2lmeSB0aGUgZGVzdGluYXRpb24gZm9sZGVyIGZvciB1cGxvYWRlZCBmaWxlc1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGk6IHtcclxuICAgIGJvZHlQYXJzZXI6IGZhbHNlLCAvLyBEaXNhYmxlIGJvZHkgcGFyc2luZywgYXMgTXVsdGVyIHdpbGwgaGFuZGxlIGl0XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAvLyBDb25uZWN0IHRvIE1vbmdvREJcclxuICAgIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gVXNlIE11bHRlciBtaWRkbGV3YXJlIHRvIGhhbmRsZSBmaWxlIHVwbG9hZHNcclxuICAgICAgdXBsb2FkLmFueSgpKHJlcSwgcmVzLCBhc3luYyBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGZpbGVzOicsIGVycik7XHJcbiAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogJ1NlcnZlciBFcnJvcicgfSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm9keTogXCIsIHJlcS5ib2R5KTtcclxuICAgICAgICAvLyBFeHRyYWN0IHByb2plY3QgZGF0YSBmcm9tIHJlcS5ib2R5XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgTmFtZSxcclxuICAgICAgICAgIEVtYWlsLFxyXG4gICAgICAgICAgQ29tbWVudHNcclxuICAgICAgICB9ID0gcmVxLmJvZHk7XHJcbiAgICAgICAgY29uc3QgY29udGFjdCA9IG5ldyBDb250YWN0KHtcclxuICAgICAgICAgIE5hbWUsXHJcbiAgICAgICAgICBFbWFpbCxcclxuICAgICAgICAgIENvbW1lbnRzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb250YWN0IGFobzpcIixjb250YWN0KTtcclxuICAgICAgICAvLyBTYXZlIHRoZSBwcm9qZWN0IHRvIHRoZSBkYXRhYmFzZVxyXG4gICAgICAgIGF3YWl0IGNvbnRhY3Quc2F2ZSgpLnRoZW4oKCk9Pntjb25zb2xlLmxvZyhcIlNhdmVkIVwiKTt9KTtcclxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgcHJvamVjdDonLCBlcnJvcik7XHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmVyIEVycm9yJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdNZXRob2QgTm90IEFsbG93ZWQnIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwibXVsdGVyIiwiQ29udGFjdCIsInVwbG9hZCIsImRlc3QiLCJjb25maWciLCJhcGkiLCJib2R5UGFyc2VyIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImFueSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwibG9nIiwiYm9keSIsIk5hbWUiLCJFbWFpbCIsIkNvbW1lbnRzIiwiY29udGFjdCIsInNhdmUiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/uploadContact.js\n");

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
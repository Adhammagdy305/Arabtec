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
exports.id = "pages/api/getBlog";
exports.ids = ["pages/api/getBlog"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./Models/blog.js":
/*!************************!*\
  !*** ./Models/blog.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst schema = mongoose.Schema;\nconst blogSchema = new schema({\n    Title_en: {\n        type: String,\n        required: true\n    },\n    Category_en: {\n        type: String,\n        required: true\n    },\n    Blog_Keywords_en: {\n        type: String,\n        required: true\n    },\n    Para_en: {\n        type: String,\n        required: true\n    },\n    Title_ar: {\n        type: String,\n        required: true\n    },\n    Category_ar: {\n        type: String,\n        required: true\n    },\n    Blog_Keywords_ar: {\n        type: String,\n        required: true\n    },\n    Para_ar: {\n        type: String,\n        required: true\n    },\n    slug: {\n        type: String,\n        required: true\n    },\n    Cover_img_alt: {\n        type: String,\n        required: true\n    },\n    coverimg: {\n        type: String,\n        required: false\n    },\n    thumbnail: {\n        type: String,\n        required: false\n    }\n}, {\n    timestamps: true\n});\nconst Blog = mongoose.models.Blog || mongoose.model(\"Blog\", blogSchema);\nmodule.exports = Blog;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9Nb2RlbHMvYmxvZy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDekIsTUFBTUMsU0FBU0YsU0FBU0csTUFBTTtBQUU5QixNQUFNQyxhQUFZLElBQUlGLE9BQU87SUFDN0JHLFVBQVU7UUFDTkMsTUFBTUM7UUFDTkMsVUFBVTtJQUNWO0lBQ0pDLGFBQWE7UUFDVEgsTUFBTUM7UUFDTkMsVUFBVTtJQUNWO0lBQ0pFLGtCQUFrQjtRQUNkSixNQUFNQztRQUNOQyxVQUFVO0lBQ1Y7SUFDSkcsU0FBUztRQUNMTCxNQUFNQztRQUNOQyxVQUFVO0lBQ1Y7SUFDSkksVUFBVTtRQUNOTixNQUFNQztRQUNOQyxVQUFVO0lBQ1Y7SUFDSkssYUFBYTtRQUNUUCxNQUFNQztRQUNOQyxVQUFVO0lBQ1Y7SUFFSk0sa0JBQWtCO1FBQ2RSLE1BQU1DO1FBQ05DLFVBQVU7SUFDVjtJQUNKTyxTQUFTO1FBQ0xULE1BQU1DO1FBQ05DLFVBQVU7SUFDVjtJQUNKUSxNQUFNO1FBQ0ZWLE1BQU1DO1FBQ05DLFVBQVU7SUFDVjtJQUNKUyxlQUFlO1FBQ2JYLE1BQU1DO1FBQ05DLFVBQVU7SUFDVjtJQUNGVSxVQUFVO1FBQ05aLE1BQU1DO1FBQ05DLFVBQVU7SUFDVjtJQUNKVyxXQUFXO1FBQ1BiLE1BQU1DO1FBQ05DLFVBQVU7SUFDVjtBQUNKLEdBQUc7SUFBQ1ksWUFBWTtBQUFJO0FBRXBCLE1BQU1DLE9BQU9yQixTQUFTc0IsTUFBTSxDQUFDRCxJQUFJLElBQUlyQixTQUFTdUIsS0FBSyxDQUFDLFFBQVFuQjtBQUU1RG9CLE9BQU9DLE9BQU8sR0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2pvLWhlbHBkZXNrLy4vTW9kZWxzL2Jsb2cuanM/MTVlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcbmNvbnN0IHNjaGVtYSA9IG1vbmdvb3NlLlNjaGVtYTtcclxuXHJcbmNvbnN0IGJsb2dTY2hlbWE9IG5ldyBzY2hlbWEoe1xyXG5UaXRsZV9lbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbkNhdGVnb3J5X2VuOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuQmxvZ19LZXl3b3Jkc19lbjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcblBhcmFfZW46IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG5UaXRsZV9hcjoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbkNhdGVnb3J5X2FyOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuXHJcbkJsb2dfS2V5d29yZHNfYXI6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiB0cnVlXHJcbiAgICB9LFxyXG5QYXJhX2FyOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgfSxcclxuc2x1Zzoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWVcclxuICAgIH0sXHJcbkNvdmVyX2ltZ19hbHQ6IHtcclxuICB0eXBlOiBTdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IHRydWVcclxuICB9LFxyXG5jb3ZlcmltZzoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IGZhbHNlXHJcbiAgICB9LFxyXG50aHVtYm5haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBmYWxzZVxyXG4gICAgfVxyXG59LCB7dGltZXN0YW1wczogdHJ1ZX0pO1xyXG5cclxuY29uc3QgQmxvZyA9IG1vbmdvb3NlLm1vZGVscy5CbG9nIHx8IG1vbmdvb3NlLm1vZGVsKCdCbG9nJywgYmxvZ1NjaGVtYSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEJsb2c7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsInNjaGVtYSIsIlNjaGVtYSIsImJsb2dTY2hlbWEiLCJUaXRsZV9lbiIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIkNhdGVnb3J5X2VuIiwiQmxvZ19LZXl3b3Jkc19lbiIsIlBhcmFfZW4iLCJUaXRsZV9hciIsIkNhdGVnb3J5X2FyIiwiQmxvZ19LZXl3b3Jkc19hciIsIlBhcmFfYXIiLCJzbHVnIiwiQ292ZXJfaW1nX2FsdCIsImNvdmVyaW1nIiwidGh1bWJuYWlsIiwidGltZXN0YW1wcyIsIkJsb2ciLCJtb2RlbHMiLCJtb2RlbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./Models/blog.js\n");

/***/ }),

/***/ "(api)/./app/mdb/db.js":
/*!***********************!*\
  !*** ./app/mdb/db.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// db.js\n\nconst dbURI = \"mongodb+srv://Dodo:586200@cluster0.x8wkalj.mongodb.net/Arabtec_dummy?retryWrites=true&w=majority\"; // Update with your MongoDB connection string\nconst connectDB = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(dbURI, {\n            socketTimeoutMS: 30000\n        });\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n        process.exit(1); // Exit process with failure\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9hcHAvbWRiL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLFFBQVE7QUFDd0I7QUFFaEMsTUFBTUMsUUFBUSxvR0FBb0csNkNBQTZDO0FBRS9KLE1BQU1DLFlBQVk7SUFDZCxJQUFJO1FBQ0EsTUFBTUYsdURBQWdCLENBQUNDLE9BQU87WUFDMUJHLGlCQUFpQjtRQUNyQjtRQUNBQyxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPQyxPQUFPO1FBQ1pGLFFBQVFFLEtBQUssQ0FBQyxnQ0FBZ0NBO1FBQzlDQyxRQUFRQyxJQUFJLENBQUMsSUFBSSw0QkFBNEI7SUFDakQ7QUFDSjtBQUVBLGlFQUFlUCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9qby1oZWxwZGVzay8uL2FwcC9tZGIvZGIuanM/Zjg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYi5qc1xyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgZGJVUkkgPSAnbW9uZ29kYitzcnY6Ly9Eb2RvOjU4NjIwMEBjbHVzdGVyMC54OHdrYWxqLm1vbmdvZGIubmV0L0FyYWJ0ZWNfZHVtbXk/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5JzsgLy8gVXBkYXRlIHdpdGggeW91ciBNb25nb0RCIGNvbm5lY3Rpb24gc3RyaW5nXHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoZGJVUkksIHtcclxuICAgICAgICAgICAgc29ja2V0VGltZW91dE1TOiAzMDAwMCwgLy8gRXhhbXBsZTogSW5jcmVhc2Ugc29ja2V0IHRpbWVvdXQgdG8gMzAgc2Vjb25kc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgdG8gTW9uZ29EQicpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IpO1xyXG4gICAgICAgIHByb2Nlc3MuZXhpdCgxKTsgLy8gRXhpdCBwcm9jZXNzIHdpdGggZmFpbHVyZVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdERCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJkYlVSSSIsImNvbm5lY3REQiIsImNvbm5lY3QiLCJzb2NrZXRUaW1lb3V0TVMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJwcm9jZXNzIiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./app/mdb/db.js\n");

/***/ }),

/***/ "(api)/./pages/api/getBlog.js":
/*!******************************!*\
  !*** ./pages/api/getBlog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _app_mdb_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app/mdb/db */ \"(api)/./app/mdb/db.js\");\n/* harmony import */ var _Models_blog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Models/blog.js */ \"(api)/./Models/blog.js\");\n/* harmony import */ var _Models_blog_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Models_blog_js__WEBPACK_IMPORTED_MODULE_1__);\n// /api/projects.js\n\n // Import your Mongoose model\n// Connect to MongoDB\nasync function handler(req, res) {\n    await (0,_app_mdb_db__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    if (req.method === \"GET\") {\n        try {\n            console.log(\"Ana hena habda2 adawar\");\n            const blogs = await _Models_blog_js__WEBPACK_IMPORTED_MODULE_1___default().find().sort({\n                \"createdAt\": -1\n            }); // Fetch all items from the database\n            res.status(200).json({\n                success: true,\n                data: blogs\n            });\n        } catch (error) {\n            console.error(\"Error fetching items:\", error);\n            res.status(500).json({\n                success: false,\n                error: \"Server Error\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            error: \"Method Not Allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0QmxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsbUJBQW1CO0FBQ3NCO0FBQ0QsQ0FBQyw2QkFBNkI7QUFHdEUscUJBQXFCO0FBR04sZUFBZUUsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzFDLE1BQU1KLHVEQUFTQTtJQUNmLElBQUlHLElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3RCLElBQUk7WUFDQUMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osTUFBTUMsUUFBUSxNQUFNUCwyREFBUyxHQUFHUyxJQUFJLENBQUM7Z0JBQUMsYUFBYSxDQUFDO1lBQUMsSUFBSSxvQ0FBb0M7WUFDN0ZOLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLFNBQVM7Z0JBQU1DLE1BQU1OO1lBQU07UUFDdEQsRUFBRSxPQUFPTyxPQUFPO1lBQ1pULFFBQVFTLEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3ZDWCxJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO2dCQUFPRSxPQUFPO1lBQWU7UUFDakU7SUFDSixPQUFPO1FBQ0hYLElBQUlPLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztZQUFPRSxPQUFPO1FBQXFCO0lBQ3ZFO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2pvLWhlbHBkZXNrLy4vcGFnZXMvYXBpL2dldEJsb2cuanM/YTVlMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvYXBpL3Byb2plY3RzLmpzXHJcbmltcG9ydCBjb25uZWN0REIgZnJvbSAnLi4vLi4vYXBwL21kYi9kYic7XHJcbmltcG9ydCBCbG9nIGZyb20gJy4uLy4uL01vZGVscy9ibG9nLmpzJzsgLy8gSW1wb3J0IHlvdXIgTW9uZ29vc2UgbW9kZWxcclxuXHJcblxyXG4vLyBDb25uZWN0IHRvIE1vbmdvREJcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW5hIGhlbmEgaGFiZGEyIGFkYXdhclwiKTtcclxuICAgICAgICAgICAgY29uc3QgYmxvZ3MgPSBhd2FpdCBCbG9nLmZpbmQoKS5zb3J0KHtcImNyZWF0ZWRBdFwiOiAtMX0pOyAvLyBGZXRjaCBhbGwgaXRlbXMgZnJvbSB0aGUgZGF0YWJhc2VcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBibG9ncyB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBpdGVtczonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnU2VydmVyIEVycm9yJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyB9KTtcclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiQmxvZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYmxvZ3MiLCJmaW5kIiwic29ydCIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getBlog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getBlog.js"));
module.exports = __webpack_exports__;

})();
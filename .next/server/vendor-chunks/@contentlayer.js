"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@contentlayer";
exports.ids = ["vendor-chunks/@contentlayer"];
exports.modules = {

/***/ "(rsc)/./node_modules/@contentlayer/client/dist/guards.js":
/*!**********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/guards.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guards: () => (/* binding */ guards),\n/* harmony export */   isType: () => (/* binding */ isType)\n/* harmony export */ });\nfunction is(typeName, _) {\n    if (_) {\n        if (Array.isArray(typeName)) {\n            // TODO make type field name dynamic (probably will require to code-gen the guard function)\n            return typeName.some((typeName_)=>_?.type === typeName_);\n        } else {\n            return typeName === _?.type;\n        }\n    } else {\n        return (_)=>is(typeName, _);\n    }\n}\nconst isType = is;\nconst guards = {\n    is,\n    // isType,\n    // hasAllFields,\n    // allFields,\n    hasField\n};\nfunction hasField(_, property) {\n    return _.hasOwnProperty(property);\n} //# sourceMappingURL=guards.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9ndWFyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxHQUFHQyxRQUFRLEVBQUVDLENBQUM7SUFDbkIsSUFBSUEsR0FBRztRQUNILElBQUlDLE1BQU1DLE9BQU8sQ0FBQ0gsV0FBVztZQUN6QiwyRkFBMkY7WUFDM0YsT0FBT0EsU0FBU0ksSUFBSSxDQUFDLENBQUNDLFlBQWNKLEdBQUdLLFNBQVNEO1FBQ3BELE9BQ0s7WUFDRCxPQUFPTCxhQUFhQyxHQUFHSztRQUMzQjtJQUNKLE9BQ0s7UUFDRCxPQUFPLENBQUNMLElBQU1GLEdBQUdDLFVBQVVDO0lBQy9CO0FBQ0o7QUFDTyxNQUFNTSxTQUFTUixHQUFHO0FBQ2xCLE1BQU1TLFNBQVM7SUFDbEJUO0lBQ0EsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2JVO0FBRUosRUFBRTtBQUNGLFNBQVNBLFNBQVNSLENBQUMsRUFBRVMsUUFBUTtJQUN6QixPQUFPVCxFQUFFVSxjQUFjLENBQUNEO0FBQzVCLEVBQ0Esa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1rYXBlbHUvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9ndWFyZHMuanM/OTUyMyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpcyh0eXBlTmFtZSwgXykge1xuICAgIGlmIChfKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHR5cGVOYW1lKSkge1xuICAgICAgICAgICAgLy8gVE9ETyBtYWtlIHR5cGUgZmllbGQgbmFtZSBkeW5hbWljIChwcm9iYWJseSB3aWxsIHJlcXVpcmUgdG8gY29kZS1nZW4gdGhlIGd1YXJkIGZ1bmN0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHR5cGVOYW1lLnNvbWUoKHR5cGVOYW1lXykgPT4gXz8udHlwZSA9PT0gdHlwZU5hbWVfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlTmFtZSA9PT0gXz8udHlwZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChfKSA9PiBpcyh0eXBlTmFtZSwgXyk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IGlzVHlwZSA9IGlzO1xuZXhwb3J0IGNvbnN0IGd1YXJkcyA9IHtcbiAgICBpcyxcbiAgICAvLyBpc1R5cGUsXG4gICAgLy8gaGFzQWxsRmllbGRzLFxuICAgIC8vIGFsbEZpZWxkcyxcbiAgICBoYXNGaWVsZCxcbiAgICAvLyB3aXRoRmllbGQsXG59O1xuZnVuY3Rpb24gaGFzRmllbGQoXywgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gXy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ndWFyZHMuanMubWFwIl0sIm5hbWVzIjpbImlzIiwidHlwZU5hbWUiLCJfIiwiQXJyYXkiLCJpc0FycmF5Iiwic29tZSIsInR5cGVOYW1lXyIsInR5cGUiLCJpc1R5cGUiLCJndWFyZHMiLCJoYXNGaWVsZCIsInByb3BlcnR5IiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@contentlayer/client/dist/guards.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@contentlayer/client/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guards: () => (/* reexport safe */ _guards_js__WEBPACK_IMPORTED_MODULE_0__.guards),\n/* harmony export */   isType: () => (/* reexport safe */ _guards_js__WEBPACK_IMPORTED_MODULE_0__.isType),\n/* harmony export */   pick: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.pick)\n/* harmony export */ });\n/* harmony import */ var _guards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards.js */ \"(rsc)/./node_modules/@contentlayer/client/dist/guards.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"(rsc)/./node_modules/@contentlayer/client/dist/utils.js\");\n\n //# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNELENBQzNCLGlDQUFpQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cta2FwZWx1Ly4vbm9kZV9tb2R1bGVzL0Bjb250ZW50bGF5ZXIvY2xpZW50L2Rpc3QvaW5kZXguanM/MDhlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2d1YXJkcy5qcyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzLmpzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@contentlayer/client/dist/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/@contentlayer/client/dist/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pick: () => (/* binding */ pick)\n/* harmony export */ });\nconst pick = (obj, keys)=>{\n    return keys.reduce((acc, key)=>{\n        acc[key] = obj[key];\n        return acc;\n    }, {});\n}; //# sourceMappingURL=utils.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsT0FBTyxDQUFDQyxLQUFLQztJQUN0QixPQUFPQSxLQUFLQyxNQUFNLENBQUMsQ0FBQ0MsS0FBS0M7UUFDckJELEdBQUcsQ0FBQ0MsSUFBSSxHQUFHSixHQUFHLENBQUNJLElBQUk7UUFDbkIsT0FBT0Q7SUFDWCxHQUFHLENBQUM7QUFDUixFQUFFLENBQ0YsaUNBQWlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxvZy1rYXBlbHUvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC91dGlscy5qcz8zOTEyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwaWNrID0gKG9iaiwga2V5cykgPT4ge1xuICAgIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIl0sIm5hbWVzIjpbInBpY2siLCJvYmoiLCJrZXlzIiwicmVkdWNlIiwiYWNjIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/@contentlayer/client/dist/utils.js\n");

/***/ })

};
;
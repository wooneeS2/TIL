module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/last-sales.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/last-sales.js":
/*!*****************************!*\
  !*** ./pages/last-sales.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/gim-wonhui/Desktop/project/personal/TIL/next.js/next-udemy/section5/pages/last-sales.js\";\n\n\nfunction LastSalesPage() {\n  const {\n    0: sales,\n    1: setSales\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])();\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setIsLoading(true);\n    fetch('https://nextjs-course-b0221-default-rtdb.firebaseio.com/sales.json').then(response => response.json()).then(data => {\n      const transformSales = [];\n\n      for (const key in data) {\n        transformSales.push({\n          id: key,\n          userName: data[key].userName,\n          value: data[key].value\n        });\n      }\n\n      setSales(transformSales);\n      setIsLoading(false);\n    });\n  }, []);\n\n  if (isLoading) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading....\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 16\n    }, this);\n  }\n\n  if (!sales) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"No data yet\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    children: sales.map(sale => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: [sale.userName, \" - $\", sale.value]\n      }, sale.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 21\n      }, this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSalesPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sYXN0LXNhbGVzLmpzPzA1MWQiXSwibmFtZXMiOlsiTGFzdFNhbGVzUGFnZSIsInNhbGVzIiwic2V0U2FsZXMiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJ0cmFuc2Zvcm1TYWxlcyIsImtleSIsInB1c2giLCJpZCIsInVzZXJOYW1lIiwidmFsdWUiLCJtYXAiLCJzYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUNyQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLEVBQWxDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCRixzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQUcseURBQVMsQ0FBQyxNQUFNO0FBQ1pELGdCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0FFLFNBQUssQ0FDRCxvRUFEQyxDQUFMLENBR0tDLElBSEwsQ0FHVUMsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQVQsRUFIdEIsRUFJS0YsSUFKTCxDQUlVRyxJQUFJLElBQUk7QUFDVixZQUFNQyxjQUFjLEdBQUcsRUFBdkI7O0FBQ0EsV0FBSyxNQUFNQyxHQUFYLElBQWtCRixJQUFsQixFQUF3QjtBQUNwQkMsc0JBQWMsQ0FBQ0UsSUFBZixDQUFvQjtBQUNoQkMsWUFBRSxFQUFFRixHQURZO0FBRWhCRyxrQkFBUSxFQUFFTCxJQUFJLENBQUNFLEdBQUQsQ0FBSixDQUFVRyxRQUZKO0FBR2hCQyxlQUFLLEVBQUVOLElBQUksQ0FBQ0UsR0FBRCxDQUFKLENBQVVJO0FBSEQsU0FBcEI7QUFLSDs7QUFFRGYsY0FBUSxDQUFDVSxjQUFELENBQVI7QUFDQVAsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDSCxLQWhCTDtBQWlCSCxHQW5CUSxFQW1CTixFQW5CTSxDQUFUOztBQXFCQSxNQUFJRCxTQUFKLEVBQWU7QUFDWCx3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBRUQsTUFBSSxDQUFDSCxLQUFMLEVBQVk7QUFDUix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBQSxjQUNLQSxLQUFLLENBQUNpQixHQUFOLENBQVVDLElBQUksSUFBSTtBQUNmLDBCQUNJO0FBQUEsbUJBQ0tBLElBQUksQ0FBQ0gsUUFEVixVQUN3QkcsSUFBSSxDQUFDRixLQUQ3QjtBQUFBLFNBQVNFLElBQUksQ0FBQ0osRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFLSCxLQU5BO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0FBRWNmLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvbGFzdC1zYWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIExhc3RTYWxlc1BhZ2UoKSB7XG4gICAgY29uc3QgW3NhbGVzLCBzZXRTYWxlc10gPSB1c2VTdGF0ZSgpO1xuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgICBmZXRjaChcbiAgICAgICAgICAgICdodHRwczovL25leHRqcy1jb3Vyc2UtYjAyMjEtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL3NhbGVzLmpzb24nXG4gICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybVNhbGVzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TYWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTmFtZTogZGF0YVtrZXldLnVzZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFba2V5XS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc2V0U2FsZXModHJhbnNmb3JtU2FsZXMpO1xuICAgICAgICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9LCBbXSk7XG5cbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uLjwvcD47XG4gICAgfVxuXG4gICAgaWYgKCFzYWxlcykge1xuICAgICAgICByZXR1cm4gPHA+Tm8gZGF0YSB5ZXQ8L3A+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICAgIHtzYWxlcy5tYXAoc2FsZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17c2FsZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c2FsZS51c2VyTmFtZX0gLSAke3NhbGUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlc1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/last-sales.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });
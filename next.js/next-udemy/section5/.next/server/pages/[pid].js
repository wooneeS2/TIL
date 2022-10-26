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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[pid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/[pid].js":
/*!************************!*\
  !*** ./pages/[pid].js ***!
  \************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/gim-wonhui/Desktop/project/personal/TIL/next.js/next-udemy/section5/pages/[pid].js\";\n\n\n\nfunction ProductDetailPage(props) {\n  const {\n    loadedProduct\n  } = props;\n\n  if (!loadedProduct) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 16\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: loadedProduct.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: loadedProduct.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\nasync function getData() {\n  const filePath = path__WEBPACK_IMPORTED_MODULE_2___default.a.join(process.cwd(), 'data', 'dummy-backend.json');\n  const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(filePath);\n  const data = JSON.parse(jsonData);\n  return data;\n} //컴포넌트 함수보다 빨리 실행됨\n\n\nasync function getStaticProps(context) {\n  const {\n    params\n  } = context;\n  const productId = params.pid;\n  const data = await getData();\n  const product = data.products.find(product => product.id === productId);\n\n  if (!product) {\n    return {\n      notFound: true\n    };\n  }\n\n  return {\n    props: {\n      loadedProduct: product\n    }\n  };\n} //정적으로 데이터 페칭할 때 미리 데이터 어떤 데이터를 가져와야하는지 알려주는 함수\n\nasync function getStaticPaths() {\n  const data = await getData();\n  const ids = data.products.map(product => product.id);\n  const pathsWithParams = ids.map(id => ({\n    params: {\n      pid: id\n    }\n  }));\n  return {\n    paths: [{\n      params: pathsWithParams\n    }],\n    // true일 경우 Paths에 없는 값은 요청이 도달했을 때 생김\n    //string일 경우에는 값이 로딩 된 다음에 로딩됨.\n    fallback: true\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetailPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bcGlkXS5qcz84OGJkIl0sIm5hbWVzIjpbIlByb2R1Y3REZXRhaWxQYWdlIiwicHJvcHMiLCJsb2FkZWRQcm9kdWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImdldERhdGEiLCJmaWxlUGF0aCIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImpzb25EYXRhIiwiZnMiLCJyZWFkRmlsZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwYXJhbXMiLCJwcm9kdWN0SWQiLCJwaWQiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiaWQiLCJub3RGb3VuZCIsImdldFN0YXRpY1BhdGhzIiwiaWRzIiwibWFwIiwicGF0aHNXaXRoUGFyYW1zIiwicGF0aHMiLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFDOUIsUUFBTTtBQUFFQztBQUFGLE1BQW9CRCxLQUExQjs7QUFDQSxNQUFJLENBQUNDLGFBQUwsRUFBb0I7QUFDaEIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNIOztBQUNELHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0EsYUFBYSxDQUFDQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFJRCxhQUFhLENBQUNFO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBLGtCQURKO0FBTUg7O0FBRUQsZUFBZUMsT0FBZixHQUF5QjtBQUNyQixRQUFNQyxRQUFRLEdBQUdDLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsTUFBekIsRUFBaUMsb0JBQWpDLENBQWpCO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLGtEQUFFLENBQUNDLFFBQUgsQ0FBWVAsUUFBWixDQUF2QjtBQUNBLFFBQU1RLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFFBQVgsQ0FBYjtBQUNBLFNBQU9HLElBQVA7QUFDSCxDLENBRUQ7OztBQUNPLGVBQWVHLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzFDLFFBQU07QUFBRUM7QUFBRixNQUFhRCxPQUFuQjtBQUNBLFFBQU1FLFNBQVMsR0FBR0QsTUFBTSxDQUFDRSxHQUF6QjtBQUNBLFFBQU1QLElBQUksR0FBRyxNQUFNVCxPQUFPLEVBQTFCO0FBRUEsUUFBTWlCLE9BQU8sR0FBR1IsSUFBSSxDQUFDUyxRQUFMLENBQWNDLElBQWQsQ0FBbUJGLE9BQU8sSUFBSUEsT0FBTyxDQUFDRyxFQUFSLEtBQWVMLFNBQTdDLENBQWhCOztBQUVBLE1BQUksQ0FBQ0UsT0FBTCxFQUFjO0FBQ1YsV0FBTztBQUFFSSxjQUFRLEVBQUU7QUFBWixLQUFQO0FBQ0g7O0FBQ0QsU0FBTztBQUNIekIsU0FBSyxFQUFFO0FBQ0hDLG1CQUFhLEVBQUVvQjtBQURaO0FBREosR0FBUDtBQUtILEMsQ0FFRDs7QUFDTyxlQUFlSyxjQUFmLEdBQWdDO0FBQ25DLFFBQU1iLElBQUksR0FBRyxNQUFNVCxPQUFPLEVBQTFCO0FBRUEsUUFBTXVCLEdBQUcsR0FBR2QsSUFBSSxDQUFDUyxRQUFMLENBQWNNLEdBQWQsQ0FBa0JQLE9BQU8sSUFBSUEsT0FBTyxDQUFDRyxFQUFyQyxDQUFaO0FBRUEsUUFBTUssZUFBZSxHQUFHRixHQUFHLENBQUNDLEdBQUosQ0FBUUosRUFBRSxLQUFLO0FBQUVOLFVBQU0sRUFBRTtBQUFFRSxTQUFHLEVBQUVJO0FBQVA7QUFBVixHQUFMLENBQVYsQ0FBeEI7QUFFQSxTQUFPO0FBQ0hNLFNBQUssRUFBRSxDQUFDO0FBQUVaLFlBQU0sRUFBRVc7QUFBVixLQUFELENBREo7QUFFSDtBQUNBO0FBQ0FFLFlBQVEsRUFBRTtBQUpQLEdBQVA7QUFNSDtBQUVjaEMsZ0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9bcGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcy9wcm9taXNlcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZnVuY3Rpb24gUHJvZHVjdERldGFpbFBhZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IGxvYWRlZFByb2R1Y3QgfSA9IHByb3BzO1xuICAgIGlmICghbG9hZGVkUHJvZHVjdCkge1xuICAgICAgICByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+e2xvYWRlZFByb2R1Y3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgIDxwPntsb2FkZWRQcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGF0YScsICdkdW1teS1iYWNrZW5kLmpzb24nKTtcbiAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IGZzLnJlYWRGaWxlKGZpbGVQYXRoKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG59XG5cbi8v7Lu07Y+s64SM7Yq4IO2VqOyImOuztOuLpCDruajrpqwg7Iuk7ZaJ65CoXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IHByb2R1Y3RJZCA9IHBhcmFtcy5waWQ7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldERhdGEoKTtcblxuICAgIGNvbnN0IHByb2R1Y3QgPSBkYXRhLnByb2R1Y3RzLmZpbmQocHJvZHVjdCA9PiBwcm9kdWN0LmlkID09PSBwcm9kdWN0SWQpO1xuXG4gICAgaWYgKCFwcm9kdWN0KSB7XG4gICAgICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBsb2FkZWRQcm9kdWN0OiBwcm9kdWN0LFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbi8v7KCV7KCB7Jy866GcIOuNsOydtO2EsCDtjpjsua3tlaAg65WMIOuvuOumrCDrjbDsnbTthLAg7Ja065akIOuNsOydtO2EsOulvCDqsIDsoLjsmYDslbztlZjripTsp4Ag7JWM66Ck7KO864qUIO2VqOyImFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKCk7XG5cbiAgICBjb25zdCBpZHMgPSBkYXRhLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHByb2R1Y3QuaWQpO1xuXG4gICAgY29uc3QgcGF0aHNXaXRoUGFyYW1zID0gaWRzLm1hcChpZCA9PiAoeyBwYXJhbXM6IHsgcGlkOiBpZCB9IH0pKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzOiBbeyBwYXJhbXM6IHBhdGhzV2l0aFBhcmFtcyB9XSxcbiAgICAgICAgLy8gdHJ1ZeydvCDqsr3smrAgUGF0aHPsl5Ag7JeG64qUIOqwkuydgCDsmpTssq3snbQg64+E64us7ZaI7J2EIOuVjCDsg53quYBcbiAgICAgICAgLy9zdHJpbmfsnbwg6rK97Jqw7JeQ64qUIOqwkuydtCDroZzrlKkg65CcIOuLpOydjOyXkCDroZzrlKnrkKguXG4gICAgICAgIGZhbGxiYWNrOiB0cnVlLFxuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3REZXRhaWxQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[pid].js\n");

/***/ }),

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs/promises\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcy9wcm9taXNlc1wiP2VkODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMvcHJvbWlzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcy9wcm9taXNlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs/promises\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

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
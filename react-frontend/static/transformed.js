/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.jsx":
/*!***********************!*\
  !*** ./src/index.jsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/eddie/Software/WePick/react-frontend/src/index.jsx: Unexpected token (97:1)\\n\\n\\u001b[0m \\u001b[90m  95 | \\u001b[39m              \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mRoute\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  96 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  97 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m     | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  98 | \\u001b[39m  \\u001b[0m\\n\\u001b[0m \\u001b[90m  99 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 100 | \\u001b[39m\\u001b[33m>>>\\u001b[39m\\u001b[33m>>>\\u001b[39m\\u001b[33m>\\u001b[39m e595bf67baf214be4acc68616bb753d952410aa3\\u001b[0m\\n    at Object.raise (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3834:17)\\n    at Object.unexpected (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5142:16)\\n    at Object.jsxParseIdentifier (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3327:12)\\n    at Object.jsxParseNamespacedName (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3337:23)\\n    at Object.jsxParseElementName (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3348:21)\\n    at Object.jsxParseOpeningElementAt (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3433:22)\\n    at Object.jsxParseElementAt (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3466:33)\\n    at Object.jsxParseElementAt (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3482:32)\\n    at Object.jsxParseElementAt (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3482:32)\\n    at Object.jsxParseElementAt (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3482:32)\\n    at Object.jsxParseElement (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3535:17)\\n    at Object.parseExprAtom (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3542:19)\\n    at Object.parseExprSubscripts (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5848:23)\\n    at Object.parseMaybeUnary (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5828:21)\\n    at Object.parseExprOps (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5717:23)\\n    at Object.parseMaybeConditional (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5690:23)\\n    at Object.parseMaybeAssign (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5635:21)\\n    at Object.parseParenAndDistinguishExpression (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:6429:28)\\n    at Object.parseExprAtom (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:6211:21)\\n    at Object.parseExprAtom (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:3547:20)\\n    at Object.parseExprSubscripts (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5848:23)\\n    at Object.parseMaybeUnary (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5828:21)\\n    at Object.parseExprOps (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5717:23)\\n    at Object.parseMaybeConditional (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5690:23)\\n    at Object.parseMaybeAssign (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5635:21)\\n    at Object.parseExpression (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:5587:23)\\n    at Object.parseReturnStatement (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:7559:28)\\n    at Object.parseStatementContent (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:7237:21)\\n    at Object.parseStatement (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:7199:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/eddie/Software/WePick/react-frontend/node_modules/@babel/parser/lib/index.js:7757:25)\");\n\n//# sourceURL=webpack:///./src/index.jsx?");

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/index.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.jsx */\"./src/index.jsx\");\n\n\n//# sourceURL=webpack:///multi_./src/index.jsx?");

/***/ })

/******/ });
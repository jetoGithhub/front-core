(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bcp-core"] = factory();
	else
		root["bcp-core"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseBrowserStorage = (function () {
    function BaseBrowserStorage() {
    }
    BaseBrowserStorage.prototype.get = function (key) { return this.windowStorage.getItem(key) || undefined; };
    BaseBrowserStorage.prototype.set = function (key, value) { this.windowStorage.setItem(key, value); };
    BaseBrowserStorage.prototype.clear = function () { this.windowStorage.destroy(); };
    return BaseBrowserStorage;
}());
exports.BaseBrowserStorage = BaseBrowserStorage;
var BaseMemoryStorage = (function () {
    function BaseMemoryStorage() {
    }
    BaseMemoryStorage.prototype.get = function (key) { return this.memoryStorage.get(key); };
    BaseMemoryStorage.prototype.set = function (key, value) { return this.memoryStorage.set(key, value); };
    BaseMemoryStorage.prototype.clear = function () { return this.memoryStorage.clear(); };
    return BaseMemoryStorage;
}());
exports.BaseMemoryStorage = BaseMemoryStorage;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var MemoryStorage = (function (_super) {
    __extends(MemoryStorage, _super);
    function MemoryStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.memoryStorage = new Map();
        return _this;
    }
    return MemoryStorage;
}(index_1.BaseMemoryStorage));
exports.MemoryStorage = MemoryStorage;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = __webpack_require__(3);
exports.storage = factory_1.StorageFactory;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var browser_builder_1 = __webpack_require__(4);
var local_1 = __webpack_require__(5);
var session_1 = __webpack_require__(6);
var memory_1 = __webpack_require__(1);
function StorageFactory(type) {
    var storage;
    switch (type) {
        case 'local':
            storage = new local_1.LocalStorage();
            return new browser_builder_1.BrowserStorageBuilder(storage).getStorage();
        case 'session':
            storage = new session_1.SessionStorage();
            return new browser_builder_1.BrowserStorageBuilder(storage).getStorage();
        case 'memory':
            return new memory_1.MemoryStorage();
        default:
            return undefined;
    }
}
exports.StorageFactory = StorageFactory;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var memory_1 = __webpack_require__(1);
var BrowserStorageBuilder = (function () {
    function BrowserStorageBuilder(windowStorage) {
        this.windowStorage = windowStorage;
    }
    BrowserStorageBuilder.prototype.getStorage = function () {
        try {
            this.windowStorage.set('1', '1');
            this.windowStorage.get('1');
            this.windowStorage.clear();
            return this.windowStorage;
        }
        catch (e) {
            return new memory_1.MemoryStorage();
        }
    };
    return BrowserStorageBuilder;
}());
exports.BrowserStorageBuilder = BrowserStorageBuilder;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var LocalStorage = (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.windowStorage = window.localStorage;
        return _this;
    }
    return LocalStorage;
}(index_1.BaseBrowserStorage));
exports.LocalStorage = LocalStorage;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(0);
var SessionStorage = (function (_super) {
    __extends(SessionStorage, _super);
    function SessionStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.windowStorage = window.sessionStorage;
        return _this;
    }
    return SessionStorage;
}(index_1.BaseBrowserStorage));
exports.SessionStorage = SessionStorage;


/***/ })
/******/ ]);
});
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\" [ngClass]=\"{'light-theme': !darkTheme, 'dark-theme': darkTheme}\">\r\n  <div class=\"row-display\">\r\n    <div class=\"column-display center-aligned\">\r\n      <span *ngIf=\"user && user.username && !durachok\" class=\"center-aligned\">Welcome, {{user.username}}!</span>\r\n      <span *ngIf=\"user && user.username && durachok\" class=\"center-aligned\">Welcome, Durachok!</span>\r\n      <span *ngIf=\"!user.username\" class=\"center-aligned\">Welcome!</span>\r\n    </div>\r\n    <div>\r\n      <button *ngIf=\"showSign\" class=\"sign-up\" routerLink=\"register\">Sign up</button>\r\n      <button *ngIf=\"showSign\" class=\"sign-in\" routerLink=\"login\">Sign in</button>\r\n      <button *ngIf=\"!showSign\" class=\"sign-up\" (click)=\"logout()\">Sign out</button>\r\n    </div>\r\n    <button class=\"theme\"\r\n            [ngClass]=\"{'light-theme-button': !darkTheme, 'dark-theme-button': darkTheme}\"\r\n            (click)=\"darkTheme = !darkTheme\">\r\n      <span class=\"theme-icon\" *ngIf=\"darkTheme\">💡</span>\r\n      <span class=\"theme-icon\" *ngIf=\"!darkTheme\">🌙</span>\r\n    </button>\r\n  </div>\r\n  <router-outlet>\r\n  </router-outlet>\r\n  <div class=\"fixed-bottom vertical-small-padding row-display\">\r\n    <span class=\"center-aligned\">version ~1.1.1</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"window\">\n  <div *ngIf=\"user.username\" class=\"window-main\">\n    <img src=\"../../../assets/danger.gif\" alt=\"kitty\">\n    <span class=\"centered-text\"><b>Вот ты и попався 😈</b></span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column-display\">\r\n  <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\"\r\n        class=\"form column-display center-aligned\">\r\n    <label class=\"form-field\">\r\n      <span class=\"center-aligned\">Login</span>\r\n      <input formControlName=\"login\" class=\"form-field-input\">\r\n    </label>\r\n    <label class=\"form-field left-aligned\">\r\n      <span class=\"center-aligned\">Password</span>\r\n      <input formControlName=\"password\" type=\"password\" class=\"form-field-input\">\r\n    </label>\r\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column-display\">\n  <form novalidate [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\"\n        class=\"form column-display center-aligned\">\n    <label class=\"form-field\">\n      <span>Login</span>\n      <label class=\"row-display\">\n        <input formControlName=\"login\" class=\"form-field-input flex-grow\">\n        <label class=\"relative-position\">\n<!--          <img src=\"../../../assets/loading_light.gif\" alt=\"load\" class=\"small-icon horizontal-margin\">-->\n<!--          <img src=\"../../../assets/loading_dark.gif\" alt=\"load\" class=\"small-icon horizontal-margin\">-->\n<!--          <img src=\"../../../assets/success_light.ico\" alt=\"load\" class=\"small-icon horizontal-margin\">-->\n<!--          <img src=\"../../../assets/success_dark.ico\" alt=\"load\" class=\"small-icon horizontal-margin\">-->\n<!--          <img src=\"../../../assets/error_dark.ico\" alt=\"load\" class=\"small-icon horizontal-margin\">-->\n<!--          <img src=\"../../../assets/error_light.ico\" alt=\"load\" class=\"small-icon horizontal-margin\">-->\n        </label>\n      </label>\n    </label>\n    <label class=\"row-display error\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError.patternError}}</span>\n    </label>\n    <label class=\"form-field\">\n      <span>Username</span>\n      <input formControlName=\"username\" class=\"form-field-input\">\n    </label>\n    <label class=\"row-display\">\n      <label class=\"form-field left-aligned\">\n        <span class=\"center-aligned\">Password</span>\n        <input formControlName=\"password\" type=\"password\" class=\"form-field-input-password\">\n      </label>\n      <label class=\"form-field right-aligned\">\n        <span class=\"center-aligned\">Password again</span>\n        <input formControlName=\"passwordAgain\" type=\"password\" class=\"form-field-input-password\">\n      </label>\n    </label>\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-in-form/sign-in-form.component */ "./src/app/components/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/sign-up-form/sign-up-form.component */ "./src/app/components/sign-up-form/sign-up-form.component.ts");






const routes = [
    { path: "", component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: "register", component: _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_5__["SignUpFormComponent"] },
    { path: "login", component: _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_4__["SignInFormComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: auto auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  outline: none;\n  padding: 5px 10px;\n}\n.small-icon {\n  width: 1.1em;\n}\n.sign-in {\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e6e6e6;\n  color: #1a1a1a;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: #cccccc;\n}\n.dark-theme-button {\n  background: #cdcdcd;\n  box-shadow: 0 0 0.5em #cdcdcd;\n}\n.dark-theme-button:hover {\n  background: #d9d9d9;\n  box-shadow: 0 0 1em #e6e6e6;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFLFlBQUE7QUNqQkY7QURvQkE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDbEJGO0FEcUJBO0VBQ0UsYUFBQTtBQ25CRjtBRHNCQTtFQUNFLGVBQUE7QUNwQkY7QUR1QkE7RUFDRSxlQUFBO0FDckJGO0FEd0JBO0VBQ0UsZUFBQTtBQ3RCRjtBRHlCQTtFQUNFLGVBQUE7QUN2QkY7QUQwQkE7RUFDRSxtQkFBQTtBQ3hCRjtBRDJCQTtFQUNFLGNBQUE7QUN6QkY7QUQ0QkE7RUFDRSxjQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7QUMzQkY7QUQ4QkE7RUFDRSx3QkFBQTtBQzVCRjtBRCtCQTtFQUNFLHdCQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsY0FBQTtBQzlCRjtBRGlDQTtFQUNFLFlBQUE7QUMvQkY7QURrQ0E7RUFDRSx3QkFBQTtBQ2hDRjtBRG1DQTtFQUNFLHdCQUFBO0FDakNGO0FEb0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDbENGO0FEcUNBO0VBQ0UsYUFBQTtBQ25DRjtBRHNDQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLFlBQUE7QUNyQ0Y7QUR3Q0E7RUFSRSxhQUFBO0VBQ0EsaUJBQUE7RUFTQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDckNGO0FEd0NBO0VBaEJFLGFBQUE7RUFDQSxpQkFBQTtFQWlCQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNyQ0Y7QUR3Q0E7RUFDRSxrQkFBQTtBQ3RDRjtBRHlDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUN6Q0Y7QUQwQ0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDeENKO0FENENBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDMUNGO0FEMkNFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQ3pDSjtBRDBDSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUN4Q047QUQ0Q0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUMxQ0Y7QUQyQ0U7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FDekNKO0FEMENJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQ3hDTjtBRDZDQTtFQUNFLFFBQUE7QUMzQ0YiLCJmaWxlIjoiLi4vYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjMwcHg7XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6IHJnYig0MywgNDYsIDQ4KTtcbkBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lOiAjZTZlNmU2O1xuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XG5AdGV4dC1kYXJrLWNvbG9yOiBkYXJrZW4od2hpdGUsIDIwJSk7XG5cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xufVxuXG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlIDAgMDtcbn1cblxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIEBzbWFsbC1zcGFjZSBhdXRvIDA7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IEBzcGFjZSAwO1xufVxuXG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuXG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xufVxuXG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4xZW07XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50aGVtZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBsZWZ0OiAwLjdlbTtcbiAgdG9wOiAwLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gICYtaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAyMCUpO1xuICAgIH1cbiAgfVxufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCA1JSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICAgIH1cbiAgfVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4iLCIuZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIDEwcHg7XG59XG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XG59XG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuMWVtO1xufVxuLnNpZ24taW4ge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2Q3ZDdkNztcbiAgYm9yZGVyLWNvbG9yOiAjZDdkN2Q3O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi50aGVtZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBsZWZ0OiAwLjdlbTtcbiAgdG9wOiAwLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udGhlbWUtaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzJiMmUzMDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NkY2RjZDtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U2ZTZlNjtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/services/user-store.service */ "./src/app/store/services/user-store.service.ts");



let AppComponent = class AppComponent {
    constructor(userStore, cdr) {
        this.userStore = userStore;
        this.cdr = cdr;
        this.durachok = false;
    }
    logout() {
        this.userStore.logout();
        this.cdr.markForCheck();
    }
    ngOnInit() {
        const currentHour = new Date().getHours();
        (currentHour >= 21 && currentHour < 24) || (0 <= currentHour && currentHour <= 7)
            ? this.darkTheme = true
            : this.darkTheme = false;
    }
    ngDoCheck() {
        this.userStore.loadUserInfo().subscribe(user => {
            this.user = user;
            if (Object.keys(user).length) {
                const userInfo = user;
                if (userInfo.login.toLowerCase() === "huy") {
                    this.durachok = true;
                }
                this.showSign = false;
            }
            else {
                this.showSign = true;
            }
            this.cdr.markForCheck();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sign-in-form/sign-in-form.component */ "./src/app/components/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sign-up-form/sign-up-form.component */ "./src/app/components/sign-up-form/sign-up-form.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./store/reducers/app.reducers */ "./src/app/store/reducers/app.reducers.ts");
/* harmony import */ var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/services/user-store.service */ "./src/app/store/services/user-store.service.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_9__["SignUpFormComponent"],
            _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_8__["SignInFormComponent"],
            _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__["HomePageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_11__["appReducers"], {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
        ],
        providers: [
            _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
            _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_12__["UserStoreService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".window {\n  display: flex;\n  flex-direction: column;\n}\n.window img {\n  margin: auto;\n  width: 90%;\n  max-width: 500px;\n}\n.window-main {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.centered-text {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQubGVzcyIsImhvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VKO0FERUE7RUFDRSxrQkFBQTtBQ0FGIiwiZmlsZSI6ImhvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2luZG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cbiAgJi1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLndpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud2luZG93IGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi53aW5kb3ctbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/services/user-store.service */ "./src/app/store/services/user-store.service.ts");



let HomePageComponent = class HomePageComponent {
    constructor(userStore, cdr) {
        this.userStore = userStore;
        this.cdr = cdr;
    }
    ngDoCheck() {
        this.userStore.loadUserInfo().subscribe((user) => {
            this.user = user;
            this.cdr.markForCheck();
        });
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-home-page",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-page.component.less */ "./src/app/components/home-page/home-page.component.less")).default]
    })
], HomePageComponent);



/***/ }),

/***/ "./src/app/components/sign-in-form/sign-in-form.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/sign-in-form/sign-in-form.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: auto auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  outline: none;\n  padding: 5px 10px;\n}\n.small-icon {\n  width: 1.1em;\n}\n.sign-in {\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e6e6e6;\n  color: #1a1a1a;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: #cccccc;\n}\n.dark-theme-button {\n  background: #cdcdcd;\n  box-shadow: 0 0 0.5em #cdcdcd;\n}\n.dark-theme-button:hover {\n  background: #d9d9d9;\n  box-shadow: 0 0 1em #e6e6e6;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.form {\n  padding: 0 20px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-input {\n  width: 170px;\n  outline: none;\n}\n.form-submit {\n  outline: none;\n  padding: 5px 10px;\n  background: #9f6969;\n  border-color: #9f6969;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4tZm9ybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzaWduLWluLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0UsWUFBQTtBQ2pCRjtBRG9CQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNsQkY7QURxQkE7RUFDRSxhQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZUFBQTtBQ3BCRjtBRHVCQTtFQUNFLGVBQUE7QUNyQkY7QUR3QkE7RUFDRSxlQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZUFBQTtBQ3ZCRjtBRDBCQTtFQUNFLG1CQUFBO0FDeEJGO0FEMkJBO0VBQ0UsY0FBQTtBQ3pCRjtBRDRCQTtFQUNFLGNBQUE7QUMxQkY7QUQ2QkE7RUFDRSxrQkFBQTtBQzNCRjtBRDhCQTtFQUNFLHdCQUFBO0FDNUJGO0FEK0JBO0VBQ0Usd0JBQUE7QUM3QkY7QURnQ0E7RUFDRSxjQUFBO0FDOUJGO0FEaUNBO0VBQ0UsWUFBQTtBQy9CRjtBRGtDQTtFQUNFLHdCQUFBO0FDaENGO0FEbUNBO0VBQ0Usd0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxhQUFBO0FDbkNGO0FEc0NBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDcENGO0FEdUNBO0VBQ0UsWUFBQTtBQ3JDRjtBRHdDQTtFQVJFLGFBQUE7RUFDQSxpQkFBQTtFQVNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNyQ0Y7QUR3Q0E7RUFoQkUsYUFBQTtFQUNBLGlCQUFBO0VBaUJBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGtCQUFBO0FDdENGO0FEeUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDeENGO0FEMkNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ3pDRjtBRDBDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUN4Q0o7QUQ0Q0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUMxQ0Y7QUQyQ0U7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FDekNKO0FEMENJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQ3hDTjtBRDRDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQzFDRjtBRDJDRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUN6Q0o7QUQwQ0k7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDeENOO0FENkNBO0VBQ0UsUUFBQTtBQzNDRjtBQ3pJQTtFRnVDRSxlQUFBO0FDcUdGO0FDMUlFO0VGcUZBLGFBQUE7RUFDQSxzQkFBQTtFQXJEQSxlQUFBO0FDOEdGO0FDNUlJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUQ4SU47QUMzSUU7RUZzRkEsYUFBQTtFQUNBLGlCQUFBO0VFckZFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FEOElKIiwiZmlsZSI6InNpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAc21hbGxlc3Qtc3BhY2U6IDVweDtcbkBzbWFsbC1zcGFjZTogMTBweDtcbkBzcGFjZTogMjBweDtcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcbkBncmV5LWNvbG9yOiAjZDdkN2Q3O1xuQGdyZWVuLWNvbG9yOiAjMDBhMTAwO1xuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xuQGJsdWUtY29sb3I6ICM1OTZiOWY7XG5AZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGZlZjtcbkBlcnJvci10ZXh0LWNvbG9yOiAjMWUwNDU2O1xuQGJvcmRlci1yYWRpdXM6IDVweDtcbkBmb3JtLXdpZHRoOiAyMzBweDtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogcmdiKDQzLCA0NiwgNDgpO1xuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlNmU2ZTY7XG5AdGV4dC1saWdodC1jb2xvcjogbGlnaHRlbihibGFjaywgMTAlKTtcbkB0ZXh0LWRhcmstY29sb3I6IGRhcmtlbih3aGl0ZSwgMjAlKTtcblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjFlbTtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTs7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbiIsIi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIDA7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4xZW07XG59XG4uc2lnbi1pbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzEzMTQxNTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwMDAwO1xufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMmIyZTMwO1xuICBjb2xvcjogI2NjY2NjYztcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNjZGNkY2Q7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2RjZGNkO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjZTZlNmU2O1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmZvcm0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5mb3JtLWZpZWxkLWlucHV0IHtcbiAgd2lkdGg6IDE3MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0tc3VibWl0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM5ZjY5Njk7XG4gIGJvcmRlci1jb2xvcjogIzlmNjk2OTtcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGlucHV0LXdpZHRoOiAxNzBweDtcbkBzbWFsbC1pbnB1dC13aWR0aDogMTAwcHg7XG4uZm9ybSB7XG4gIC5ob3Jpem9udGFsLXBhZGRpbmc7XG4gICYtZmllbGQge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAudmVydGljYWwtc21hbGwtcGFkZGluZztcbiAgICAmLWlucHV0IHtcbiAgICAgIHdpZHRoOiBAaW5wdXQtd2lkdGg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgfVxuICAmLXN1Ym1pdCB7XG4gICAgLmJ1dHRvbjtcbiAgICBiYWNrZ3JvdW5kOiBAbGlnaHQtYnJvd24tY29sb3I7XG4gICAgYm9yZGVyLWNvbG9yOiBAbGlnaHQtYnJvd24tY29sb3I7XG4gICAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/sign-in-form/sign-in-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sign-in-form/sign-in-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: SignInFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInFormComponent", function() { return SignInFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/services/user-store.service */ "./src/app/store/services/user-store.service.ts");






let SignInFormComponent = class SignInFormComponent {
    constructor(userService, userStore, router) {
        this.userService = userService;
        this.userStore = userStore;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\w*[A-Za-z]+\d*/),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            ]),
            submitButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Submit"),
        });
    }
    submitForm() {
        console.log(this.loginForm.status);
        if (this.loginForm.invalid) {
            return;
        }
        const login = this.loginForm.get("login").value;
        const password = this.loginForm.get("password").value;
        this.userService.loginUser(login, password).subscribe(data => {
            this.userStore.loginUser(data);
            this.router.navigate([""]).then();
        });
    }
    ngOnInit() {
    }
};
SignInFormComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_5__["UserStoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignInFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sign-in-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-in-form.component.less */ "./src/app/components/sign-in-form/sign-in-form.component.less")).default]
    })
], SignInFormComponent);



/***/ }),

/***/ "./src/app/components/sign-up-form/sign-up-form.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/sign-up-form/sign-up-form.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: auto auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  outline: none;\n  padding: 5px 10px;\n}\n.small-icon {\n  width: 1.1em;\n}\n.sign-in {\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e6e6e6;\n  color: #1a1a1a;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: #cccccc;\n}\n.dark-theme-button {\n  background: #cdcdcd;\n  box-shadow: 0 0 0.5em #cdcdcd;\n}\n.dark-theme-button:hover {\n  background: #d9d9d9;\n  box-shadow: 0 0 1em #e6e6e6;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.form {\n  padding: 20px;\n  position: relative;\n  width: 230px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-input {\n  outline: none;\n}\n.form-field-input-password {\n  width: 100px;\n  outline: none;\n}\n.form-field-input-login-loading {\n  height: 100%;\n}\n.form-submit {\n  outline: none;\n  padding: 5px 10px;\n  background: #596b9f;\n  border-color: #596b9f;\n  color: white;\n}\n.error {\n  margin: 0 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: #d6dfef;\n  max-width: 190px;\n  color: #1e0456;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: #1e0456;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtZm9ybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzaWduLXVwLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0JBO0VBQ0UsWUFBQTtBQ2pCRjtBRG9CQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNsQkY7QURxQkE7RUFDRSxhQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZUFBQTtBQ3BCRjtBRHVCQTtFQUNFLGVBQUE7QUNyQkY7QUR3QkE7RUFDRSxlQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZUFBQTtBQ3ZCRjtBRDBCQTtFQUNFLG1CQUFBO0FDeEJGO0FEMkJBO0VBQ0UsY0FBQTtBQ3pCRjtBRDRCQTtFQUNFLGNBQUE7QUMxQkY7QUQ2QkE7RUFDRSxrQkFBQTtBQzNCRjtBRDhCQTtFQUNFLHdCQUFBO0FDNUJGO0FEK0JBO0VBQ0Usd0JBQUE7QUM3QkY7QURnQ0E7RUFDRSxjQUFBO0FDOUJGO0FEaUNBO0VBQ0UsWUFBQTtBQy9CRjtBRGtDQTtFQUNFLHdCQUFBO0FDaENGO0FEbUNBO0VBQ0Usd0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxhQUFBO0FDbkNGO0FEc0NBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FDcENGO0FEdUNBO0VBQ0UsWUFBQTtBQ3JDRjtBRHdDQTtFQVJFLGFBQUE7RUFDQSxpQkFBQTtFQVNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNyQ0Y7QUR3Q0E7RUFoQkUsYUFBQTtFQUNBLGlCQUFBO0VBaUJBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGtCQUFBO0FDdENGO0FEeUNBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDeENGO0FEMkNBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ3pDRjtBRDBDRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUN4Q0o7QUQ0Q0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUMxQ0Y7QUQyQ0U7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FDekNKO0FEMENJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQ3hDTjtBRDRDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQzFDRjtBRDJDRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUN6Q0o7QUQwQ0k7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDeENOO0FENkNBO0VBQ0UsUUFBQTtBQzNDRjtBQ3pJQTtFRjJCRSxhQUFBO0VFekJBLGtCQUFBO0VBQ0EsWUFBQTtBRDJJRjtBQzFJRTtFRm1GQSxhQUFBO0VBQ0Esc0JBQUE7RUFyREEsZUFBQTtBQ2dIRjtBQzVJSTtFQUNFLGFBQUE7QUQ4SU47QUM3SU07RUFDRSxZQUFBO0VBQ0EsYUFBQTtBRCtJUjtBQzdJTTtFQUNFLFlBQUE7QUQrSVI7QUMzSUU7RUY4RUEsYUFBQTtFQUNBLGlCQUFBO0VFN0VFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FEOElKO0FDMUlBO0VGNkJFLGNBQUE7RUUzQkEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FENElGO0FDdklJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEeUlOIiwiZmlsZSI6InNpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAc21hbGxlc3Qtc3BhY2U6IDVweDtcbkBzbWFsbC1zcGFjZTogMTBweDtcbkBzcGFjZTogMjBweDtcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcbkBncmV5LWNvbG9yOiAjZDdkN2Q3O1xuQGdyZWVuLWNvbG9yOiAjMDBhMTAwO1xuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xuQGJsdWUtY29sb3I6ICM1OTZiOWY7XG5AZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGZlZjtcbkBlcnJvci10ZXh0LWNvbG9yOiAjMWUwNDU2O1xuQGJvcmRlci1yYWRpdXM6IDVweDtcbkBmb3JtLXdpZHRoOiAyMzBweDtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogcmdiKDQzLCA0NiwgNDgpO1xuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlNmU2ZTY7XG5AdGV4dC1saWdodC1jb2xvcjogbGlnaHRlbihibGFjaywgMTAlKTtcbkB0ZXh0LWRhcmstY29sb3I6IGRhcmtlbih3aGl0ZSwgMjAlKTtcblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjFlbTtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTs7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbiIsIi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIDA7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4xZW07XG59XG4uc2lnbi1pbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzEzMTQxNTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwMDAwO1xufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMmIyZTMwO1xuICBjb2xvcjogI2NjY2NjYztcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNjZGNkY2Q7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2RjZGNkO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjZTZlNmU2O1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAyMzBweDtcbn1cbi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmZvcm0tZmllbGQtaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0tZmllbGQtaW5wdXQtcGFzc3dvcmQge1xuICB3aWR0aDogMTAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybS1maWVsZC1pbnB1dC1sb2dpbi1sb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0tc3VibWl0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM1OTZiOWY7XG4gIGJvcmRlci1jb2xvcjogIzU5NmI5ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmVycm9yIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkNmRmZWY7XG4gIG1heC13aWR0aDogMTkwcHg7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLm1lc3NhZ2Utc2lnbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimqBcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFlMDQ1NjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGlucHV0LXdpZHRoOiAxNzBweDtcbkBzbWFsbC1pbnB1dC13aWR0aDogMTAwcHg7XG4uZm9ybSB7XG4gIC5wYWRkaW5nO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBAZm9ybS13aWR0aDtcbiAgJi1maWVsZCB7XG4gICAgLmNvbHVtbi1kaXNwbGF5O1xuICAgIC52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nO1xuICAgICYtaW5wdXQge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICYtcGFzc3dvcmQge1xuICAgICAgICB3aWR0aDogQHNtYWxsLWlucHV0LXdpZHRoO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgICAgJi1sb2dpbi1sb2FkaW5nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLXN1Ym1pdCB7XG4gICAgLmJ1dHRvbjtcbiAgICBiYWNrZ3JvdW5kOiBAYmx1ZS1jb2xvcjtcbiAgICBib3JkZXItY29sb3I6IEBibHVlLWNvbG9yO1xuICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgfVxufVxuXG4uZXJyb3Ige1xuICAuaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW47XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kOiBAZXJyb3ItYmFja2dyb3VuZC1jb2xvcjtcbiAgbWF4LXdpZHRoOiBAaW5wdXQtd2lkdGggKyBAc3BhY2U7XG4gIGNvbG9yOiBAZXJyb3ItdGV4dC1jb2xvcjtcbn1cblxuLm1lc3NhZ2Uge1xuICAmLXNpZ24ge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIuKaoFwiO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IEBlcnJvci10ZXh0LWNvbG9yO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gICAgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/sign-up-form/sign-up-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/sign-up-form/sign-up-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: SignUpFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function() { return SignUpFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/messages */ "./src/app/model/messages.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/services/user-store.service */ "./src/app/store/services/user-store.service.ts");







let SignUpFormComponent = class SignUpFormComponent {
    constructor(userService, userStore, router) {
        this.userService = userService;
        this.userStore = userStore;
        this.router = router;
        this.invalidError = _model_messages__WEBPACK_IMPORTED_MODULE_4__["messages"].validation;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\w*[A-Za-z]+\d*/),
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Zа-яА-Я\s]+$/),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            ]),
            passwordAgain: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
            ]),
            submitButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Submit"),
        });
    }
    submitForm() {
        console.log(this.registerForm.status);
        if (this.registerForm.get("password").value !== this.registerForm.get("passwordAgain").value) {
            return;
        }
        if (this.registerForm.invalid) {
            return;
        }
        const newUser = {
            _id: 0,
            login: this.registerForm.get("login").value,
            username: this.registerForm.get("username").value,
            password: this.registerForm.get("password").value
        };
        this.userService.registerNewUser(newUser).subscribe(data => {
            this.userStore.loginUser(data);
            this.router.navigate([""]).then();
        });
    }
    checkLogin() {
        this.userService.checkLogin(this.registerForm.get("login").value).subscribe(() => console.log("login exist"), () => console.log("login doesn't exist"));
    }
    ngOnInit() {
    }
};
SignUpFormComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_6__["UserStoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignUpFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sign-up-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up-form.component.less */ "./src/app/components/sign-up-form/sign-up-form.component.less")).default]
    })
], SignUpFormComponent);

// "\f06e"


/***/ }),

/***/ "./src/app/model/messages.ts":
/*!***********************************!*\
  !*** ./src/app/model/messages.ts ***!
  \***********************************/
/*! exports provided: messages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messages", function() { return messages; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const messages = {
    validation: {
        requireError: "Нужно заполнить поле",
        loginExistError: "Логин занят",
        patternError: "Недопустимые символы",
    }
};


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.usersURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + "users/";
    }
    checkLogin(login) {
        return this._http.get(this.usersURL + login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err)));
    }
    registerNewUser(user) {
        return this._http.post(this.usersURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data[0]));
    }
    loginUser(login, password) {
        return this._http.get(this.usersURL + login, { params: { password: password } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
    })
], UserService);



/***/ }),

/***/ "./src/app/store/actions/user.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/user.actions.ts ***!
  \***********************************************/
/*! exports provided: userLogin, userLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogin", function() { return userLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userLogout", function() { return userLogout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const LOGIN = "[User] logged in";
const LOGOUT = "[User] logged out";
const userLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
const userLogout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(LOGOUT);


/***/ }),

/***/ "./src/app/store/reducers/app.reducers.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/app.reducers.ts ***!
  \************************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.reducer */ "./src/app/store/reducers/user.reducer.ts");


const appReducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["userReducer"],
};


/***/ }),

/***/ "./src/app/store/reducers/user.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/store/reducers/user.reducer.ts ***!
  \************************************************/
/*! exports provided: userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _state_user_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/user.state */ "./src/app/store/state/user.state.ts");




const userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_user_state__WEBPACK_IMPORTED_MODULE_3__["initialUserState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["userLogin"], (state, action) => (Object.assign({}, state, { userInfo: action.userInfo }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["userLogout"], (state) => (Object.assign({}, state, { userInfo: {} }))));


/***/ }),

/***/ "./src/app/store/selectors/user.selectors.ts":
/*!***************************************************!*\
  !*** ./src/app/store/selectors/user.selectors.ts ***!
  \***************************************************/
/*! exports provided: selectUserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserInfo", function() { return selectUserInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectUser = (appState) => appState.user;
const selectUserInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUser, (state) => state.userInfo);


/***/ }),

/***/ "./src/app/store/services/user-store.service.ts":
/*!******************************************************!*\
  !*** ./src/app/store/services/user-store.service.ts ***!
  \******************************************************/
/*! exports provided: UserStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreService", function() { return UserStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../selectors/user.selectors */ "./src/app/store/selectors/user.selectors.ts");





let UserStoreService = class UserStoreService {
    constructor(store$) {
        this.store$ = store$;
    }
    loadUserInfo() {
        return this.store$.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserInfo"]);
    }
    loginUser(user) {
        this.store$.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["userLogin"])({ userInfo: user }));
    }
    logout() {
        this.store$.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["userLogout"])());
    }
};
UserStoreService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
UserStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], UserStoreService);



/***/ }),

/***/ "./src/app/store/state/user.state.ts":
/*!*******************************************!*\
  !*** ./src/app/store/state/user.state.ts ***!
  \*******************************************/
/*! exports provided: initialUserState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialUserState", function() { return initialUserState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const initialUserState = {
    userInfo: {},
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    url: "https://mysterious-oasis-74963.herokuapp.com/"
    // url: "http://localhost:3000/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! N:\workspaces\idea-workspace\ping-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
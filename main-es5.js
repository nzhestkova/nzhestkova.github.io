function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"background\" [ngClass]=\"{'light-theme': !darkTheme, 'dark-theme': darkTheme}\">\r\n  <div class=\"row-display\">\r\n    <div class=\"column-display center-aligned\">\r\n      <span *ngIf=\"user && user.username && !durachok\" class=\"center-aligned\">Welcome, {{user.username}}!</span>\r\n      <span *ngIf=\"user && user.username && durachok\" class=\"center-aligned\">Welcome, Durachok!</span>\r\n      <span *ngIf=\"!user.username\" class=\"center-aligned\">Welcome!</span>\r\n    </div>\r\n    <div>\r\n      <button *ngIf=\"showSign\" class=\"sign-up\" routerLink=\"register\">Sign up</button>\r\n      <button *ngIf=\"showSign\" class=\"sign-in\" routerLink=\"login\">Sign in</button>\r\n      <button *ngIf=\"!showSign\" class=\"sign-up\" (click)=\"logout()\">Sign out</button>\r\n    </div>\r\n    <button class=\"theme\"\r\n            [ngClass]=\"{'light-theme-button': !darkTheme, 'dark-theme-button': darkTheme}\"\r\n            (click)=\"darkTheme = !darkTheme\">\r\n      <span class=\"theme-icon\" *ngIf=\"darkTheme\">💡</span>\r\n      <span class=\"theme-icon\" *ngIf=\"!darkTheme\">🌙</span>\r\n    </button>\r\n  </div>\r\n  <router-outlet>\r\n  </router-outlet>\r\n  <div class=\"fixed-bottom vertical-small-padding row-display\">\r\n    <span class=\"center-aligned\">version ~1.1.0</span>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomePageHomePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"window\">\n  <div *ngIf=\"user.username\" class=\"window-main\">\n    <img src=\"../../../assets/danger.gif\" alt=\"kitty\">\n    <span class=\"centered-text\"><b>Вот ты и попався 😈</b></span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignInFormSignInFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"column-display\">\r\n  <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\"\r\n        class=\"form column-display center-aligned\">\r\n    <label class=\"form-field\">\r\n      <span class=\"center-aligned\">Login</span>\r\n      <input formControlName=\"login\" class=\"form-field-input\">\r\n    </label>\r\n    <label class=\"form-field left-aligned\">\r\n      <span class=\"center-aligned\">Password</span>\r\n      <input formControlName=\"password\" type=\"password\" class=\"form-field-input\">\r\n    </label>\r\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSignUpFormSignUpFormComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"column-display\">\n  <form novalidate [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\"\n        class=\"form column-display center-aligned\">\n    <label class=\"form-field\">\n      <span>Login</span>\n      <label class=\"row-display\">\n        <input formControlName=\"login\" class=\"form-field-input\">\n        <input (click)=\"checkLogin()\" type=\"button\" value=\"Check\">\n      </label>\n    </label>\n    <label class=\"form-field\">\n      <span>Username</span>\n      <input formControlName=\"username\" class=\"form-field-input\">\n    </label>\n    <label class=\"row-display\">\n      <label class=\"form-field left-aligned\">\n        <span class=\"center-aligned\">Password</span>\n        <input formControlName=\"password\" type=\"password\" class=\"form-field-input-password\">\n      </label>\n      <label class=\"form-field right-aligned\">\n        <span class=\"center-aligned\">Password again</span>\n        <input formControlName=\"passwordAgain\" type=\"password\" class=\"form-field-input-password\">\n      </label>\n    </label>\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/sign-in-form/sign-in-form.component */
    "./src/app/components/sign-in-form/sign-in-form.component.ts");
    /* harmony import */


    var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/sign-up-form/sign-up-form.component */
    "./src/app/components/sign-up-form/sign-up-form.component.ts");

    var routes = [{
      path: "",
      component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }, {
      path: "register",
      component: _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_5__["SignUpFormComponent"]
    }, {
      path: "login",
      component: _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_4__["SignInFormComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.less":
  /*!************************************!*\
    !*** ./src/app/app.component.less ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: auto auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  outline: none;\n  padding: 5px 10px;\n}\n.sign-in {\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #ffffff;\n  color: #1a1a1a;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: #cccccc;\n}\n.dark-theme-button {\n  background: #e6e6e6;\n  box-shadow: 0 0 0.5em #e6e6e6;\n}\n.dark-theme-button:hover {\n  background: #f2f2f2;\n  box-shadow: 0 0 1em #ffffff;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ2JGO0FEZ0JBO0VBQ0UsZUFBQTtBQ2RGO0FEaUJBO0VBQ0UsZUFBQTtBQ2ZGO0FEa0JBO0VBQ0UsZUFBQTtBQ2hCRjtBRG1CQTtFQUNFLGNBQUE7QUNqQkY7QURvQkE7RUFDRSxrQkFBQTtBQ2xCRjtBRHFCQTtFQUNFLGNBQUE7QUNuQkY7QURzQkE7RUFDRSxZQUFBO0FDcEJGO0FEdUJBO0VBQ0Usd0JBQUE7QUNyQkY7QUR3QkE7RUFDRSx3QkFBQTtBQ3RCRjtBRHlCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQ3ZCRjtBRDBCQTtFQUNFLGFBQUE7QUN4QkY7QUQyQkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUN6QkY7QUQ0QkE7RUFKRSxhQUFBO0VBQ0EsaUJBQUE7RUFLQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDekJGO0FENEJBO0VBWkUsYUFBQTtFQUNBLGlCQUFBO0VBYUEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDekJGO0FENEJBO0VBQ0Usa0JBQUE7QUMxQkY7QUQ2QkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDM0JGO0FEOEJBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDN0JGO0FEOEJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQzVCSjtBRGdDQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQzlCRjtBRCtCRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7QUM3Qko7QUQ4Qkk7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDNUJOO0FEZ0NBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDOUJGO0FEK0JFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQzdCSjtBRDhCSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUM1Qk47QURpQ0E7RUFDRSxRQUFBO0FDL0JGIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1wYWRkaW5nOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6IHJnYig0MywgNDYsIDQ4KTtcbkBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5AdGV4dC1saWdodC1jb2xvcjogbGlnaHRlbihibGFjaywgMTAlKTtcbkB0ZXh0LWRhcmstY29sb3I6IGRhcmtlbih3aGl0ZSwgMjAlKTtcblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1wYWRkaW5nIEBzbWFsbC1zcGFjZTtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTs7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbiIsIi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XG59XG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5zaWduLWluIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYTEwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMTAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zaWduLXVwIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5saWdodC10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMWYyMTIzO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gIzFmMjEyMztcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiAjY2NjY2NjO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICNlNmU2ZTY7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNmZmZmZmY7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./store/services/user-store.service */
    "./src/app/store/services/user-store.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(userStore, cdr) {
        _classCallCheck(this, AppComponent);

        this.userStore = userStore;
        this.cdr = cdr;
        this.durachok = false;
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.userStore.logout();
          this.cdr.markForCheck();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var currentHour = new Date().getHours();
          currentHour >= 21 && currentHour < 24 || 0 <= currentHour && currentHour <= 7 ? this.darkTheme = true : this.darkTheme = false;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this = this;

          this.userStore.loadUserInfo().subscribe(function (user) {
            _this.user = user;

            if (Object.keys(user).length) {
              var userInfo = user;

              if (userInfo.login.toLowerCase() === "huy") {
                _this.durachok = true;
              }

              _this.showSign = false;
            } else {
              _this.showSign = true;
            }

            _this.cdr.markForCheck();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.less */
      "./src/app/app.component.less"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/sign-in-form/sign-in-form.component */
    "./src/app/components/sign-in-form/sign-in-form.component.ts");
    /* harmony import */


    var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/sign-up-form/sign-up-form.component */
    "./src/app/components/sign-up-form/sign-up-form.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./store/reducers/app.reducers */
    "./src/app/store/reducers/app.reducers.ts");
    /* harmony import */


    var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./store/services/user-store.service */
    "./src/app/store/services/user-store.service.ts");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_9__["SignUpFormComponent"], _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_8__["SignInFormComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_13__["HomePageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_11__["appReducers"], {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      })],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"], _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_12__["UserStoreService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/home-page/home-page.component.less":
  /*!***************************************************************!*\
    !*** ./src/app/components/home-page/home-page.component.less ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomePageHomePageComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".window {\n  display: flex;\n  flex-direction: column;\n}\n.window img {\n  margin: auto;\n  width: 90%;\n  max-width: 500px;\n}\n.window-main {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.centered-text {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQubGVzcyIsImhvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjtBREFFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0VKO0FERUE7RUFDRSxrQkFBQTtBQ0FGIiwiZmlsZSI6ImhvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2luZG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cbiAgJi1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLndpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud2luZG93IGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi53aW5kb3ctbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/home-page/home-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/home-page/home-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: HomePageComponent */

  /***/
  function srcAppComponentsHomePageHomePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageComponent", function () {
      return HomePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/services/user-store.service */
    "./src/app/store/services/user-store.service.ts");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(userStore, cdr) {
        _classCallCheck(this, HomePageComponent);

        this.userStore = userStore;
        this.cdr = cdr;
      }

      _createClass(HomePageComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this2 = this;

          this.userStore.loadUserInfo().subscribe(function (user) {
            _this2.user = user;

            _this2.cdr.markForCheck();
          });
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-home-page",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home-page.component.less */
      "./src/app/components/home-page/home-page.component.less"))["default"]]
    })], HomePageComponent);
    /***/
  },

  /***/
  "./src/app/components/sign-in-form/sign-in-form.component.less":
  /*!*********************************************************************!*\
    !*** ./src/app/components/sign-in-form/sign-in-form.component.less ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignInFormSignInFormComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: auto auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  outline: none;\n  padding: 5px 10px;\n}\n.sign-in {\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #ffffff;\n  color: #1a1a1a;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: #cccccc;\n}\n.dark-theme-button {\n  background: #e6e6e6;\n  box-shadow: 0 0 0.5em #e6e6e6;\n}\n.dark-theme-button:hover {\n  background: #f2f2f2;\n  box-shadow: 0 0 1em #ffffff;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.form {\n  padding: 0 20px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-input {\n  width: 170px;\n  outline: none;\n}\n.form-submit {\n  outline: none;\n  padding: 5px 10px;\n  background: #9f6969;\n  border-color: #9f6969;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4tZm9ybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzaWduLWluLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDYkY7QURnQkE7RUFDRSxlQUFBO0FDZEY7QURpQkE7RUFDRSxlQUFBO0FDZkY7QURrQkE7RUFDRSxlQUFBO0FDaEJGO0FEbUJBO0VBQ0UsY0FBQTtBQ2pCRjtBRG9CQTtFQUNFLGtCQUFBO0FDbEJGO0FEcUJBO0VBQ0UsY0FBQTtBQ25CRjtBRHNCQTtFQUNFLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSx3QkFBQTtBQ3JCRjtBRHdCQTtFQUNFLHdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDdkJGO0FEMEJBO0VBQ0UsYUFBQTtBQ3hCRjtBRDJCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ3pCRjtBRDRCQTtFQUpFLGFBQUE7RUFDQSxpQkFBQTtFQUtBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUN6QkY7QUQ0QkE7RUFaRSxhQUFBO0VBQ0EsaUJBQUE7RUFhQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxrQkFBQTtBQzFCRjtBRDZCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUMzQkY7QUQ4QkE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzVCRjtBRCtCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUM3QkY7QUQ4QkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDNUJKO0FEZ0NBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDOUJGO0FEK0JFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQzdCSjtBRDhCSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUM1Qk47QURnQ0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUM5QkY7QUQrQkU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FDN0JKO0FEOEJJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQzVCTjtBRGlDQTtFQUNFLFFBQUE7QUMvQkY7QUNqSEE7RUYyQkUsZUFBQTtBQ3lGRjtBQ2xIRTtFRnFEQSxhQUFBO0VBQ0Esc0JBQUE7RUFqQ0EsZUFBQTtBQ2tHRjtBQ3BISTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FEc0hOO0FDbkhFO0VGc0RBLGFBQUE7RUFDQSxpQkFBQTtFRXJERSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBRHNISiIsImZpbGUiOiJzaWduLWluLWZvcm0vc2lnbi1pbi1mb3JtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXBhZGRpbmc6IDVweDtcbkBzbWFsbC1zcGFjZTogMTBweDtcbkBzcGFjZTogMjBweDtcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcbkBncmV5LWNvbG9yOiAjZDdkN2Q3O1xuQGdyZWVuLWNvbG9yOiAjMDBhMTAwO1xuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xuQGJvcmRlci1yYWRpdXM6IDVweDtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogcmdiKDQzLCA0NiwgNDgpO1xuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6IHJnYigyNTUsIDI1NSwgMjU1KTtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogZGFya2VuKHdoaXRlLCAyMCUpO1xuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xufVxuXG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IEBzcGFjZSAwO1xufVxuXG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuXG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xufVxuXG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXBhZGRpbmcgQHNtYWxsLXNwYWNlO1xufVxuXG4uc2lnbi1pbiB7XG4gIC5idXR0b247XG4gIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgYmFja2dyb3VuZDogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5zaWduLXVwIHtcbiAgLmJ1dHRvbjtcbiAgYmFja2dyb3VuZDogQGdyZXktY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZXktY29sb3I7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICAmLWljb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpOztcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtZGFyay10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgNSUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgICB9XG4gIH1cbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuIiwiLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnNpZ24taW4ge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2Q3ZDdkNztcbiAgYm9yZGVyLWNvbG9yOiAjZDdkN2Q3O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi50aGVtZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBsZWZ0OiAwLjdlbTtcbiAgdG9wOiAwLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udGhlbWUtaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzJiMmUzMDtcbiAgY29sb3I6ICNjY2NjY2M7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2U2ZTZlNjtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2ZmZmZmZjtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5mb3JtIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZm9ybS1maWVsZC1pbnB1dCB7XG4gIHdpZHRoOiAxNzBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtLXN1Ym1pdCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjOWY2OTY5O1xuICBib3JkZXItY29sb3I6ICM5ZjY5Njk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBpbnB1dC13aWR0aDogMTcwcHg7XG5Ac21hbGwtaW5wdXQtd2lkdGg6IDEwMHB4O1xuLmZvcm0ge1xuICAuaG9yaXpvbnRhbC1wYWRkaW5nO1xuICAmLWZpZWxkIHtcbiAgICAuY29sdW1uLWRpc3BsYXk7XG4gICAgLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmc7XG4gICAgJi1pbnB1dCB7XG4gICAgICB3aWR0aDogQGlucHV0LXdpZHRoO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIH1cbiAgJi1zdWJtaXQge1xuICAgIC5idXR0b247XG4gICAgYmFja2dyb3VuZDogQGxpZ2h0LWJyb3duLWNvbG9yO1xuICAgIGJvcmRlci1jb2xvcjogQGxpZ2h0LWJyb3duLWNvbG9yO1xuICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/sign-in-form/sign-in-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/sign-in-form/sign-in-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SignInFormComponent */

  /***/
  function srcAppComponentsSignInFormSignInFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignInFormComponent", function () {
      return SignInFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../store/services/user-store.service */
    "./src/app/store/services/user-store.service.ts");

    var SignInFormComponent = /*#__PURE__*/function () {
      function SignInFormComponent(userService, userStore, router) {
        _classCallCheck(this, SignInFormComponent);

        this.userService = userService;
        this.userStore = userStore;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\w*[A-Za-z]+\d*/)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
          submitButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Submit")
        });
      }

      _createClass(SignInFormComponent, [{
        key: "submitForm",
        value: function submitForm() {
          var _this3 = this;

          console.log(this.loginForm.status);

          if (this.loginForm.invalid) {
            return;
          }

          var login = this.loginForm.get("login").value;
          var password = this.loginForm.get("password").value;
          this.userService.loginUser(login, password).subscribe(function (data) {
            _this3.userStore.loginUser(data);

            _this3.router.navigate([""]).then();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignInFormComponent;
    }();

    SignInFormComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_5__["UserStoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignInFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sign-in-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-in-form.component.less */
      "./src/app/components/sign-in-form/sign-in-form.component.less"))["default"]]
    })], SignInFormComponent);
    /***/
  },

  /***/
  "./src/app/components/sign-up-form/sign-up-form.component.less":
  /*!*********************************************************************!*\
    !*** ./src/app/components/sign-up-form/sign-up-form.component.less ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSignUpFormSignUpFormComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: auto auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  outline: none;\n  padding: 5px 10px;\n}\n.sign-in {\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #ffffff;\n  color: #1a1a1a;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: #cccccc;\n}\n.dark-theme-button {\n  background: #e6e6e6;\n  box-shadow: 0 0 0.5em #e6e6e6;\n}\n.dark-theme-button:hover {\n  background: #f2f2f2;\n  box-shadow: 0 0 1em #ffffff;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.form {\n  padding: 0 20px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-input {\n  width: 170px;\n  outline: none;\n}\n.form-field-input-password {\n  width: 100px;\n  outline: none;\n}\n.form-submit {\n  outline: none;\n  padding: 5px 10px;\n  background: #9f6969;\n  border-color: #9f6969;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtZm9ybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzaWduLXVwLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDYkY7QURnQkE7RUFDRSxlQUFBO0FDZEY7QURpQkE7RUFDRSxlQUFBO0FDZkY7QURrQkE7RUFDRSxlQUFBO0FDaEJGO0FEbUJBO0VBQ0UsY0FBQTtBQ2pCRjtBRG9CQTtFQUNFLGtCQUFBO0FDbEJGO0FEcUJBO0VBQ0UsY0FBQTtBQ25CRjtBRHNCQTtFQUNFLFlBQUE7QUNwQkY7QUR1QkE7RUFDRSx3QkFBQTtBQ3JCRjtBRHdCQTtFQUNFLHdCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDdkJGO0FEMEJBO0VBQ0UsYUFBQTtBQ3hCRjtBRDJCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQ3pCRjtBRDRCQTtFQUpFLGFBQUE7RUFDQSxpQkFBQTtFQUtBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUN6QkY7QUQ0QkE7RUFaRSxhQUFBO0VBQ0EsaUJBQUE7RUFhQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxrQkFBQTtBQzFCRjtBRDZCQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUMzQkY7QUQ4QkE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQzVCRjtBRCtCQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUM3QkY7QUQ4QkU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDNUJKO0FEZ0NBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDOUJGO0FEK0JFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtBQzdCSjtBRDhCSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUM1Qk47QURnQ0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUM5QkY7QUQrQkU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0FDN0JKO0FEOEJJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQzVCTjtBRGlDQTtFQUNFLFFBQUE7QUMvQkY7QUNqSEE7RUYyQkUsZUFBQTtBQ3lGRjtBQ2xIRTtFRnFEQSxhQUFBO0VBQ0Esc0JBQUE7RUFqQ0EsZUFBQTtBQ2tHRjtBQ3BISTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FEc0hOO0FDckhNO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUR1SFI7QUNuSEU7RUZrREEsYUFBQTtFQUNBLGlCQUFBO0VFakRFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FEc0hKIiwiZmlsZSI6InNpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAc21hbGxlc3QtcGFkZGluZzogNXB4O1xuQHNtYWxsLXNwYWNlOiAxMHB4O1xuQHNwYWNlOiAyMHB4O1xuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XG5AZ3JlZW4tY29sb3I6ICMwMGExMDA7XG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XG5AYm9yZGVyLXJhZGl1czogNXB4O1xuXG5AYmFja2dyb3VuZC1kYXJrLXRoZW1lOiByZ2IoNDMsIDQ2LCA0OCk7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XG5AdGV4dC1kYXJrLWNvbG9yOiBkYXJrZW4od2hpdGUsIDIwJSk7XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3QtcGFkZGluZyBAc21hbGwtc3BhY2U7XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50aGVtZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBsZWZ0OiAwLjdlbTtcbiAgdG9wOiAwLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gICYtaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7O1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAyMCUpO1xuICAgIH1cbiAgfVxufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCA1JSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICAgIH1cbiAgfVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4iLCIuZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIGF1dG8gYXV0byAwO1xufVxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc2lnbi1pbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzEzMTQxNTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwMDAwO1xufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMmIyZTMwO1xuICBjb2xvcjogI2NjY2NjYztcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjZTZlNmU2O1xufVxuLmRhcmstdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjZmZmZmZmO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmZvcm0ge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5mb3JtLWZpZWxkLWlucHV0IHtcbiAgd2lkdGg6IDE3MHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0tZmllbGQtaW5wdXQtcGFzc3dvcmQge1xuICB3aWR0aDogMTAwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybS1zdWJtaXQge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogIzlmNjk2OTtcbiAgYm9yZGVyLWNvbG9yOiAjOWY2OTY5O1xuICBjb2xvcjogd2hpdGU7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5AaW5wdXQtd2lkdGg6IDE3MHB4O1xuQHNtYWxsLWlucHV0LXdpZHRoOiAxMDBweDtcbi5mb3JtIHtcbiAgLmhvcml6b250YWwtcGFkZGluZztcbiAgJi1maWVsZCB7XG4gICAgLmNvbHVtbi1kaXNwbGF5O1xuICAgIC52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nO1xuICAgICYtaW5wdXQge1xuICAgICAgd2lkdGg6IEBpbnB1dC13aWR0aDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAmLXBhc3N3b3JkIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLXN1Ym1pdCB7XG4gICAgLmJ1dHRvbjtcbiAgICBiYWNrZ3JvdW5kOiBAbGlnaHQtYnJvd24tY29sb3I7XG4gICAgYm9yZGVyLWNvbG9yOiBAbGlnaHQtYnJvd24tY29sb3I7XG4gICAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/sign-up-form/sign-up-form.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/sign-up-form/sign-up-form.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SignUpFormComponent */

  /***/
  function srcAppComponentsSignUpFormSignUpFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpFormComponent", function () {
      return SignUpFormComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../store/services/user-store.service */
    "./src/app/store/services/user-store.service.ts");

    var SignUpFormComponent = /*#__PURE__*/function () {
      function SignUpFormComponent(userService, userStore, router) {
        _classCallCheck(this, SignUpFormComponent);

        this.userService = userService;
        this.userStore = userStore;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\w*[A-Za-z]+\d*/)]),
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Zа-яА-Я\s]+$/)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
          passwordAgain: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
          submitButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Submit")
        });
      }

      _createClass(SignUpFormComponent, [{
        key: "submitForm",
        value: function submitForm() {
          var _this4 = this;

          console.log(this.registerForm.status);

          if (this.registerForm.get("password").value !== this.registerForm.get("passwordAgain").value) {
            return;
          }

          if (this.registerForm.invalid) {
            return;
          }

          var newUser = {
            _id: 0,
            login: this.registerForm.get("login").value,
            username: this.registerForm.get("username").value,
            password: this.registerForm.get("password").value
          };
          this.userService.registerNewUser(newUser).subscribe(function (data) {
            _this4.userStore.loginUser(data);

            _this4.router.navigate([""]).then();
          });
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          this.userService.checkLogin(this.registerForm.get("login").value).subscribe(function () {
            return console.log("login exist");
          }, function () {
            return console.log("login doesn't exist");
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignUpFormComponent;
    }();

    SignUpFormComponent.ctorParameters = function () {
      return [{
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _store_services_user_store_service__WEBPACK_IMPORTED_MODULE_5__["UserStoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignUpFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sign-up-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up-form.component.less */
      "./src/app/components/sign-up-form/sign-up-form.component.less"))["default"]]
    })], SignUpFormComponent); // "\f06e"

    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(_http) {
        _classCallCheck(this, UserService);

        this._http = _http;
        this.usersURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + "users/";
      }

      _createClass(UserService, [{
        key: "checkLogin",
        value: function checkLogin(login) {
          return this._http.get(this.usersURL + login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }, {
        key: "registerNewUser",
        value: function registerNewUser(user) {
          return this._http.post(this.usersURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data[0];
          }));
        }
      }, {
        key: "loginUser",
        value: function loginUser(login, password) {
          return this._http.get(this.usersURL + login, {
            params: {
              password: password
            }
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], UserService);
    /***/
  },

  /***/
  "./src/app/store/actions/user.actions.ts":
  /*!***********************************************!*\
    !*** ./src/app/store/actions/user.actions.ts ***!
    \***********************************************/

  /*! exports provided: userLogin, userLogout */

  /***/
  function srcAppStoreActionsUserActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userLogin", function () {
      return userLogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userLogout", function () {
      return userLogout;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var LOGIN = "[User] logged in";
    var LOGOUT = "[User] logged out";
    var userLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var userLogout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(LOGOUT);
    /***/
  },

  /***/
  "./src/app/store/reducers/app.reducers.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/app.reducers.ts ***!
    \************************************************/

  /*! exports provided: appReducers */

  /***/
  function srcAppStoreReducersAppReducersTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appReducers", function () {
      return appReducers;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.reducer */
    "./src/app/store/reducers/user.reducer.ts");

    var appReducers = {
      user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["userReducer"]
    };
    /***/
  },

  /***/
  "./src/app/store/reducers/user.reducer.ts":
  /*!************************************************!*\
    !*** ./src/app/store/reducers/user.reducer.ts ***!
    \************************************************/

  /*! exports provided: userReducer */

  /***/
  function srcAppStoreReducersUserReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userReducer", function () {
      return userReducer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/user.actions */
    "./src/app/store/actions/user.actions.ts");
    /* harmony import */


    var _state_user_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state/user.state */
    "./src/app/store/state/user.state.ts");

    var userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_user_state__WEBPACK_IMPORTED_MODULE_3__["initialUserState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["userLogin"], function (state, action) {
      return Object.assign({}, state, {
        userInfo: action.userInfo
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["userLogout"], function (state) {
      return Object.assign({}, state, {
        userInfo: {}
      });
    }));
    /***/
  },

  /***/
  "./src/app/store/selectors/user.selectors.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/selectors/user.selectors.ts ***!
    \***************************************************/

  /*! exports provided: selectUserInfo */

  /***/
  function srcAppStoreSelectorsUserSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectUserInfo", function () {
      return selectUserInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectUser = function selectUser(appState) {
      return appState.user;
    };

    var selectUserInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectUser, function (state) {
      return state.userInfo;
    });
    /***/
  },

  /***/
  "./src/app/store/services/user-store.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/services/user-store.service.ts ***!
    \******************************************************/

  /*! exports provided: UserStoreService */

  /***/
  function srcAppStoreServicesUserStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserStoreService", function () {
      return UserStoreService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");
    /* harmony import */


    var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../actions/user.actions */
    "./src/app/store/actions/user.actions.ts");
    /* harmony import */


    var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../selectors/user.selectors */
    "./src/app/store/selectors/user.selectors.ts");

    var UserStoreService = /*#__PURE__*/function () {
      function UserStoreService(store$) {
        _classCallCheck(this, UserStoreService);

        this.store$ = store$;
      }

      _createClass(UserStoreService, [{
        key: "loadUserInfo",
        value: function loadUserInfo() {
          return this.store$.select(_selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__["selectUserInfo"]);
        }
      }, {
        key: "loginUser",
        value: function loginUser(user) {
          this.store$.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["userLogin"])({
            userInfo: user
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          this.store$.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["userLogout"])());
        }
      }]);

      return UserStoreService;
    }();

    UserStoreService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    UserStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], UserStoreService);
    /***/
  },

  /***/
  "./src/app/store/state/user.state.ts":
  /*!*******************************************!*\
    !*** ./src/app/store/state/user.state.ts ***!
    \*******************************************/

  /*! exports provided: initialUserState */

  /***/
  function srcAppStoreStateUserStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialUserState", function () {
      return initialUserState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var initialUserState = {
      userInfo: {}
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      url: "https://mysterious-oasis-74963.herokuapp.com/" // url: "http://localhost:3000/"

    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! N:\workspaces\idea-workspace\ping-test\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
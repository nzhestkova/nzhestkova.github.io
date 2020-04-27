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


    __webpack_exports__["default"] = "<div class=\"background\" [ngClass]=\"{'light-theme': !darkThemeEnable, 'dark-theme': darkThemeEnable}\">\r\n  <div class=\"row-display bottom-margin\">\r\n    <div class=\"right-aligned\">\r\n      <button *ngIf=\"showSign\" class=\"sign-up\" routerLink=\"register\">Sign up</button>\r\n      <button *ngIf=\"showSign\" class=\"sign-in\" routerLink=\"login\">Sign in</button>\r\n      <button *ngIf=\"!showSign\" class=\"sign-up\" (click)=\"logout()\">Sign out</button>\r\n    </div>\r\n    <button class=\"theme\"\r\n            [ngClass]=\"{'light-theme-button': !darkThemeEnable, 'dark-theme-button': darkThemeEnable}\"\r\n            (click)=\"toggleTheme()\">\r\n      <span class=\"theme-icon\" *ngIf=\"darkThemeEnable\">💡</span>\r\n      <span class=\"theme-icon\" *ngIf=\"!darkThemeEnable\">🌙</span>\r\n    </button>\r\n  </div>\r\n  <router-outlet>\r\n  </router-outlet>\r\n  <div class=\"fixed-bottom vertical-small-padding row-display\">\r\n    <span class=\"center-aligned\">~ {{specialSign}}</span>\r\n  </div>\r\n</div>\r\n<div [ngClass]=\"{'popup-transparent-light': !darkThemeEnable, 'popup-transparent-dark': darkThemeEnable}\"\r\n     *ngIf=\"loading | async\" class=\"load-popup\">\r\n  <div [ngClass]=\"{'load-icon-transparent-light': !darkThemeEnable, 'load-icon-transparent-dark': darkThemeEnable}\"\r\n       class=\"center-aligned column-display load-icon\">\r\n    <img [src]=\"darkThemeEnable ? '../assets/onload_dark.gif' : '../assets/onload.gif'\"\r\n         alt=\"loading\" class=\"load-image\">\r\n    <span [ngClass]=\"{'load-phrase-text-light': !darkThemeEnable, 'load-phrase-text-dark': darkThemeEnable}\"\r\n          class=\"center-aligned font-set load-phrase\">Подождите</span>\r\n  </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"window\">\n  <div *ngIf=\"userExist\" class=\"window-main\">\n    <img src=\"../../../assets/danger.gif\" alt=\"kitty\">\n    <span class=\"centered-text\"><b>Вот ты и попався, {{user.username}} 😈</b></span>\n    <a routerLink=\"/profile\" class=\"centered-text link\">Редактировать</a>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"userExist\" class=\"row-display user-data\">\r\n<!--      <a class=\"link center-aligned\" routerLink=\"\">← вернуться</a>-->\r\n  <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"\r\n       class=\"column-display right-aligned plate\">\r\n    <div class=\"column-display\">\r\n      <img src=\"../../../assets/cat_avatar.png\" alt=\"women\" class=\"user-data-ico\">\r\n      <span [appSetStatus]=\"{status: user.status, darkTheme: darkTheme}\" class=\"center-aligned status\">{{user.status}}</span>\r\n      <span class=\"user-data-username center-aligned\">{{user.username}}</span>\r\n    </div>\r\n  </div>\r\n<!--  <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"-->\r\n<!--       class=\"column-display left-aligned plate\">-->\r\n<!--    <span class=\"flex-grow\">Увы :(</span>-->\r\n<!--    <span class=\"flex-grow\">Ты ничего не можешь изменить</span>-->\r\n<!--    <span class=\"flex-grow part\">не расстраивайся, дело не в тебе</span>-->\r\n<!--    <span class=\"flex-grow\">скоро все будет</span>-->\r\n<!--  </div>-->\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"column-display\">\r\n  <label *ngIf=\"authErrors.getError\" class=\"row-display auth-error center-aligned\">\r\n    <span class=\"right-aligned message-sign\"></span>\r\n    <span *ngIf=\"authErrors.loginDoesntExist\" class=\"left-aligned message\">{{authErrorMessages.loginDoesntExist}}</span>\r\n    <span *ngIf=\"authErrors.passwordDoesntMatch\" class=\"left-aligned message\">{{authErrorMessages.passwordDoesntMatch}}</span>\r\n  </label>\r\n  <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\"\r\n        [ngClass]=\"{ 'window-light-theme': !darkThemeEnable, 'window-dark-theme': darkThemeEnable }\"\r\n        class=\"form column-display center-aligned\">\r\n    <label class=\"form-field\">\r\n      <span class=\"form-field-text center-aligned bold-text\">Login</span>\r\n      <input formControlName=\"login\" class=\"form-field-input\">\r\n    </label>\r\n    <label class=\"form-field\">\r\n      <span class=\"form-field-text center-aligned bold-text\">Password</span>\r\n      <label class=\"row-display relative-position\">\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-field-input flex-grow\">\r\n        <label [appChangeImage]=\"['../../../assets/show_password.png', '../../../assets/hide_password.png']\"\r\n               class=\"relative-position column-display right-icon-container set-left-border pointer\">\r\n          <img appShowPassword src=\"../../../assets/hide_password.png\"\r\n               alt=\"show password\" class=\"small-icon vertical-auto-margin\">\r\n        </label>\r\n      </label>\r\n    </label>\r\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\r\n  </form>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"column-display\">\n  <form novalidate [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\"\n        [ngClass]=\"{ 'window-light-theme': !darkThemeEnable, 'window-dark-theme': darkThemeEnable }\"\n        class=\"form column-display center-aligned\">\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Login</span>\n      <label class=\"row-display relative-position\">\n        <input formControlName=\"login\" (change)=\"checkLogin()\" (input)=\"resetLoadSigns()\"\n               class=\"right-icon flex-grow\">\n        <label class=\"relative-position column-display right-icon-container remove-left-border\">\n          <img *ngIf=\"loginCheckStatus.pending\" src=\"../../../assets/loading_light.gif\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n          <img *ngIf=\"loginCheckStatus.free\" src=\"../../../assets/success_light.ico\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n          <img *ngIf=\"loginCheckStatus.exist\" src=\"../../../assets/error_light.ico\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n        </label>\n      </label>\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('login').invalid && registerForm.get('login').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('login'), \"login\")]}}</span>\n    </label>\n    <label *ngIf=\"loginCheckStatus.exist\" class=\"row-display error\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError.loginExistError}}</span>\n    </label>\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Username</span>\n      <input formControlName=\"username\" class=\"form-field-input\">\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('username').invalid && registerForm.get('username').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('username'), \"username\")]}}</span>\n    </label>\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Password</span>\n      <label class=\"row-display relative-position\">\n        <input formControlName=\"password\" type=\"password\" class=\"form-field-input flex-grow\">\n        <label [appChangeImage]=\"['../../../assets/show_password.png', '../../../assets/hide_password.png']\"\n               class=\"relative-position column-display right-icon-container set-left-border pointer\">\n          <img appShowPassword src=\"../../../assets/hide_password.png\"\n               alt=\"show password\" class=\"small-icon vertical-auto-margin\">\n        </label>\n      </label>\n    </label>\n      <label class=\"form-field\">\n        <label class=\"row-display relative-position\">\n          <input formControlName=\"passwordAgain\" type=\"password\" class=\"form-field-input flex-grow\">\n          <label [appChangeImage]=\"['../../../assets/show_password.png', '../../../assets/hide_password.png']\"\n                 class=\"relative-position column-display right-icon-container set-left-border pointer\">\n            <img appShowPassword src=\"../../../assets/hide_password.png\"\n                 alt=\"hide password\" class=\"small-icon vertical-auto-margin\">\n          </label>\n        </label>\n      </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('password').invalid && registerForm.get('password').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('password'), \"password\")]}}</span>\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.hasError('doesntMatch')\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError.passwordDoesntMatch}}</span>\n    </label>\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\n  </form>\n</div>\n";
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


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/sign-in-form/sign-in-form.component */
    "./src/app/components/sign-in-form/sign-in-form.component.ts");
    /* harmony import */


    var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/sign-up-form/sign-up-form.component */
    "./src/app/components/sign-up-form/sign-up-form.component.ts");

    var routes = [{
      path: "",
      component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"]
    }, {
      path: "register",
      component: _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_6__["SignUpFormComponent"]
    }, {
      path: "login",
      component: _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_5__["SignInFormComponent"]
    }, {
      path: "profile",
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"]
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


    __webpack_exports__["default"] = ".smooth-animation {\n  transition: all 500ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #626262;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 500ms ease;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCQTtFQUNFLDBCQUFBO0FDeEJGO0FEMkJBO0VBQ0Usa0NBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtBQzFCRjtBRDZCQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQzNCRjtBRDhCQTtFQUNFLFlBQUE7QUM1QkY7QUQrQkE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDN0JGO0FEZ0NBO0VBQ0UsYUFBQTtBQzlCRjtBRGlDQTtFQUNFLGVBQUE7QUMvQkY7QURrQ0E7RUFDRSxlQUFBO0FDaENGO0FEbUNBO0VBQ0UsZUFBQTtBQ2pDRjtBRG9DQTtFQUNFLGVBQUE7QUNsQ0Y7QURxQ0E7RUFDRSxtQkFBQTtBQ25DRjtBRHNDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxjQUFBO0FDckNGO0FEd0NBO0VBQ0UsY0FBQTtBQ3RDRjtBRHlDQTtFQUNFLGtCQUFBO0FDdkNGO0FEMENBO0VBQ0Usd0JBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSx3QkFBQTtBQ3pDRjtBRDRDQTtFQUNFLG1CQUFBO0FDMUNGO0FENENBO0VBQ0UsY0FBQTtBQzFDRjtBRDZDQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxZQUFBO0FDNUNGO0FEK0NBO0VBQ0Usd0JBQUE7QUM3Q0Y7QURnREE7RUFDRSxxQkFBQTtBQzlDRjtBRGlEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQy9DRjtBRGtEQTtFQUNFLGFBQUE7QUNoREY7QURtREE7RUFDRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ2pERjtBRG9EQTtFQUNFLFlBQUE7QUNsREY7QURxREE7RUFURSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQVNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNqREY7QURvREE7RUFqQkUsa0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFpQkEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDaERGO0FEbURBO0VBQ0Usa0JBQUE7QUNqREY7QURvREE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDbERGO0FEcURBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNuREY7QURzREE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQ3BERjtBRHFERTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNuREo7QUR1REE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUE1S0EsMEJBQUE7QUN3SEY7QURzREU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBaExGLDBCQUFBO0FDNkhGO0FEcURJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQ25ETjtBRHVEQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQTFMQSwwQkFBQTtBQ3NJRjtBRHNERTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUE5TEYsMEJBQUE7QUMySUY7QURxREk7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDbkROO0FEd0RBO0VBQ0UsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUExTUEsMEJBQUE7QUNxSkY7QUR5REE7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsWUFBQTtFQWpOQSwwQkFBQTtBQzJKRjtBRDBEQTtFQUNFLFFBQUE7QUN4REY7QUQyREE7RUFwSEUsYUFBQTtFQUNBLHNCQUFBO0VBcUhBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBL05BLDBCQUFBO0FDd0tGO0FEMkRBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQXJPQSwwQkFBQTtBQzZLRjtBRDREQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQTVPQSwwQkFBQTtBQ21MRjtBRDZEQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDM0RGO0FEOERBO0VBQ0Usb0NBQUE7QUM1REY7QUQrREE7RUFDRSxpQ0FBQTtBQzdERjtBRGdFQTtFQUNFLG9DQUFBO0FDOURGO0FEaUVBO0VBQ0UsaUNBQUE7QUMvREY7QURrRUE7RUFDRSxjQUFBO0FDaEVGO0FEbUVBO0VBQ0UsY0FBQTtBQ2pFRiIsImZpbGUiOiIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAc21hbGxlc3Qtc3BhY2U6IDVweDtcbkBzbWFsbC1zcGFjZTogMTBweDtcbkBzcGFjZTogMjBweDtcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcbkBncmV5LWNvbG9yOiAjZDdkN2Q3O1xuQGdyZWVuLWNvbG9yOiAjMDBhMTAwO1xuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xuQGJsdWUtY29sb3I6ICM1OTZiOWY7XG5AZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGZlZjtcbkBlcnJvci10ZXh0LWNvbG9yOiAjMWUwNDU2O1xuQGJvcmRlci1yYWRpdXM6IDVweDtcbkBmb3JtLXdpZHRoOiAyNDBweDtcbkBzbWFsbC1pY29uLXdpZHRoOiAxLjNlbTtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzJiMmUzMDtcbkBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lOiAjZThlOGU4O1xuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcblxuQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICM2MjYyNjI7XG5AaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG5AZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICM2NDU1YjI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gQHNtYWxsLXNwYWNlO1xufVxuXG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDEgKiBAc3BhY2U7XG59XG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xufVxuXG4uc2lnbi1pbiB7XG4gIC5idXR0b247XG4gIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgYmFja2dyb3VuZDogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5zaWduLXVwIHtcbiAgLmJ1dHRvbjtcbiAgYmFja2dyb3VuZDogQGdyZXktY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZXktY29sb3I7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xuICAmLWljb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtZGFyay10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgICB9XG4gIH1cbn1cblxuLndpbmRvdy1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuXG4ubG9hZC1wb3B1cCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbiIsIi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGluayB7XG4gIGNvbG9yOiAjNjQ1NWIyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIDEwcHg7XG59XG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4udmVydGljYWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byAwO1xufVxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuM2VtO1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzJiMmUzMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjNjI2MjYyO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4iXX0= */";
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services/cookies-service/cookies.service */
    "./src/app/services/cookies-service/cookies.service.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./store/services/waiting-store.service/waiting-store.service */
    "./src/app/store/services/waiting-store.service/waiting-store.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(userStore, userService, cookieService, themeStore, waitingStore, router, cdr) {
        _classCallCheck(this, AppComponent);

        this.userStore = userStore;
        this.userService = userService;
        this.cookieService = cookieService;
        this.themeStore = themeStore;
        this.waitingStore = waitingStore;
        this.router = router;
        this.cdr = cdr;
        this.specialSign = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].versionSign;
      }

      _createClass(AppComponent, [{
        key: "logout",
        value: function logout() {
          this.cookieService.deleteCookies();
          this.userStore.logout();
          this.cdr.markForCheck();
        }
      }, {
        key: "toggleTheme",
        value: function toggleTheme() {
          this.themeStore.toggleTheme();
          this.cookieService.saveInfo("theme", "".concat(this.darkThemeEnable));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = this.waitingStore.loadInfo();
          var savedLogin = this.cookieService.checkInfo("login");
          var savedPassword = this.cookieService.checkInfo("password");

          if (savedLogin && savedPassword) {
            this.waitingStore.activateLoading();
            this.userService.loginUser(savedLogin, savedPassword).subscribe(function (data) {
              _this.userStore.loginUser(data);

              _this.waitingStore.deactivateLoading();

              _this.router.navigate(["", "profile"]).then();
            }, function () {
              _this.cookieService.deleteCookie("login");

              _this.cookieService.deleteCookie("password");

              _this.waitingStore.deactivateLoading();
            });
          }

          var currentHour = new Date().getHours();

          if (currentHour >= 20 && currentHour < 24 || 0 <= currentHour && currentHour <= 7) {
            this.themeStore.toggleTheme();
          }
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this2 = this;

          this.themeStore.loadThemeInfo().subscribe(function (mode) {
            return _this2.darkThemeEnable = mode;
          });
          this.userStore.loadUserInfo().subscribe(function (user) {
            _this2.user = user;
            _this2.showSign = !Object.keys(user).length;

            _this2.cdr.markForCheck();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_7__["UserStoreService"]
      }, {
        type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"]
      }, {
        type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_6__["ThemeStoreService"]
      }, {
        type: _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_8__["WaitingStoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/sign-in-form/sign-in-form.component */
    "./src/app/components/sign-in-form/sign-in-form.component.ts");
    /* harmony import */


    var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/sign-up-form/sign-up-form.component */
    "./src/app/components/sign-up-form/sign-up-form.component.ts");
    /* harmony import */


    var _directives_change_image_change_image_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./directives/change-image/change-image.directive */
    "./src/app/directives/change-image/change-image.directive.ts");
    /* harmony import */


    var _directives_set_status_set_status_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./directives/set-status/set-status.directive */
    "./src/app/directives/set-status/set-status.directive.ts");
    /* harmony import */


    var _directives_show_password_show_password_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./directives/show-password/show-password.directive */
    "./src/app/directives/show-password/show-password.directive.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./store/reducers/app.reducers */
    "./src/app/store/reducers/app.reducers.ts");
    /* harmony import */


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./store/services/waiting-store.service/waiting-store.service */
    "./src/app/store/services/waiting-store.service/waiting-store.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_11__["SignUpFormComponent"], _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_10__["SignInFormComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], _directives_show_password_show_password_directive__WEBPACK_IMPORTED_MODULE_14__["ShowPasswordDirective"], _directives_change_image_change_image_directive__WEBPACK_IMPORTED_MODULE_12__["ChangeImageDirective"], _directives_set_status_set_status_directive__WEBPACK_IMPORTED_MODULE_13__["SetStatusDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_16__["appReducers"], {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      })],
      providers: [_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"], _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_18__["UserStoreService"], _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_17__["ThemeStoreService"], _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_19__["WaitingStoreService"]],
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


    __webpack_exports__["default"] = ".smooth-animation {\n  transition: all 500ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #626262;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 500ms ease;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.window {\n  display: flex;\n  flex-direction: column;\n}\n.window img {\n  margin: auto;\n  width: 90%;\n  max-width: 500px;\n}\n.window-main {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.centered-text {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJBO0VBQ0UsMEJBQUE7QUN4QkY7QUQyQkE7RUFDRSxrQ0FBQTtBQ3pCRjtBRDRCQTtFQUNFLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDM0JGO0FEOEJBO0VBQ0UsWUFBQTtBQzVCRjtBRCtCQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUM3QkY7QURnQ0E7RUFDRSxhQUFBO0FDOUJGO0FEaUNBO0VBQ0UsZUFBQTtBQy9CRjtBRGtDQTtFQUNFLGVBQUE7QUNoQ0Y7QURtQ0E7RUFDRSxlQUFBO0FDakNGO0FEb0NBO0VBQ0UsZUFBQTtBQ2xDRjtBRHFDQTtFQUNFLG1CQUFBO0FDbkNGO0FEc0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGNBQUE7QUNyQ0Y7QUR3Q0E7RUFDRSxjQUFBO0FDdENGO0FEeUNBO0VBQ0Usa0JBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSx3QkFBQTtBQ3hDRjtBRDJDQTtFQUNFLHdCQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7QUMxQ0Y7QUQ0Q0E7RUFDRSxjQUFBO0FDMUNGO0FENkNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzNDRjtBRDhDQTtFQUNFLFlBQUE7QUM1Q0Y7QUQrQ0E7RUFDRSx3QkFBQTtBQzdDRjtBRGdEQTtFQUNFLHFCQUFBO0FDOUNGO0FEaURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDL0NGO0FEa0RBO0VBQ0UsYUFBQTtBQ2hERjtBRG1EQTtFQUNFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDakRGO0FEb0RBO0VBQ0UsWUFBQTtBQ2xERjtBRHFEQTtFQVRFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBU0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2pERjtBRG9EQTtFQWpCRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQWlCQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNoREY7QURtREE7RUFDRSxrQkFBQTtBQ2pERjtBRG9EQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNsREY7QURxREE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ25ERjtBRHNEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDcERGO0FEcURFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ25ESjtBRHVEQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQTVLQSwwQkFBQTtBQ3dIRjtBRHNERTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFoTEYsMEJBQUE7QUM2SEY7QURxREk7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDbkROO0FEdURBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBMUxBLDBCQUFBO0FDc0lGO0FEc0RFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQTlMRiwwQkFBQTtBQzJJRjtBRHFESTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUNuRE47QUR3REE7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQTFNQSwwQkFBQTtBQ3FKRjtBRHlEQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBak5BLDBCQUFBO0FDMkpGO0FEMERBO0VBQ0UsUUFBQTtBQ3hERjtBRDJEQTtFQXBIRSxhQUFBO0VBQ0Esc0JBQUE7RUFxSEEsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUEvTkEsMEJBQUE7QUN3S0Y7QUQyREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBck9BLDBCQUFBO0FDNktGO0FENERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBNU9BLDBCQUFBO0FDbUxGO0FENkRBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUMzREY7QUQ4REE7RUFDRSxvQ0FBQTtBQzVERjtBRCtEQTtFQUNFLGlDQUFBO0FDN0RGO0FEZ0VBO0VBQ0Usb0NBQUE7QUM5REY7QURpRUE7RUFDRSxpQ0FBQTtBQy9ERjtBRGtFQTtFQUNFLGNBQUE7QUNoRUY7QURtRUE7RUFDRSxjQUFBO0FDakVGO0FDbE9BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEb09GO0FDbk9FO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRHFPSjtBQ25PRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FEcU9KO0FDak9BO0VBQ0Usa0JBQUE7QURtT0YiLCJmaWxlIjoiLi4vLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNjI2MjYyO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cblxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjNjQ1NWIyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xufVxuXG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlIDAgMDtcbn1cblxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAxICogQHNwYWNlO1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4iLCIuc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuLndpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud2luZG93IGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi53aW5kb3ctbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuXG4ud2luZG93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgJiBpbWcge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gIH1cbiAgJi1tYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG5cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */";
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


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");

    var HomePageComponent = /*#__PURE__*/function () {
      function HomePageComponent(userStore, cdr) {
        _classCallCheck(this, HomePageComponent);

        this.userStore = userStore;
        this.cdr = cdr;
      }

      _createClass(HomePageComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this3 = this;

          this.subscriber = this.userStore.loadUserInfo().subscribe(function (user) {
            _this3.user = user;
            _this3.userExist = !!Object.keys(user).length;

            _this3.cdr.markForCheck();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriber.unsubscribe();
        }
      }]);

      return HomePageComponent;
    }();

    HomePageComponent.ctorParameters = function () {
      return [{
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"]
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
  "./src/app/components/profile/profile.component.less":
  /*!***********************************************************!*\
    !*** ./src/app/components/profile/profile.component.less ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProfileProfileComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".smooth-animation {\n  transition: all 500ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #626262;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 500ms ease;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.status-dark-theme {\n  color: #532478;\n  background: #f9f9f9;\n  transition: all 500ms ease;\n}\n.status-light-theme {\n  color: white;\n  background: #5f508d;\n  transition: all 500ms ease;\n}\n.plate {\n  font-family: \"Georgia\", sans-serif;\n  width: 45%;\n  margin-left: 10px;\n  padding: 20px 10px;\n  border-radius: 5px;\n  max-width: 140px;\n}\n.status {\n  text-align: center;\n  font-weight: bold;\n  max-width: 120px;\n  padding: 5px 20px;\n  border-radius: 5px;\n  transition: all 500ms ease;\n}\n.user-data {\n  margin-top: 20px;\n}\n.user-data-ico {\n  width: 120px;\n  margin: 10px auto;\n  padding: 10px;\n}\n.user-data-username {\n  text-align: center;\n  max-width: 120px;\n  margin-top: 10px;\n  font-weight: bold;\n  line-height: 1.5;\n}\n.message {\n  margin-top: 20px;\n  padding-left: 10px;\n  text-align: left;\n  font-weight: bold;\n}\n.part {\n  font-weight: lighter;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsIi4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9maWxlL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJBO0VBQ0UsMEJBQUE7QUN4QkY7QUQyQkE7RUFDRSxrQ0FBQTtBQ3pCRjtBRDRCQTtFQUNFLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDM0JGO0FEOEJBO0VBQ0UsWUFBQTtBQzVCRjtBRCtCQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUM3QkY7QURnQ0E7RUFDRSxhQUFBO0FDOUJGO0FEaUNBO0VBQ0UsZUFBQTtBQy9CRjtBRGtDQTtFQUNFLGVBQUE7QUNoQ0Y7QURtQ0E7RUFDRSxlQUFBO0FDakNGO0FEb0NBO0VBQ0UsZUFBQTtBQ2xDRjtBRHFDQTtFQUNFLG1CQUFBO0FDbkNGO0FEc0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGNBQUE7QUNyQ0Y7QUR3Q0E7RUFDRSxjQUFBO0FDdENGO0FEeUNBO0VBQ0Usa0JBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSx3QkFBQTtBQ3hDRjtBRDJDQTtFQUNFLHdCQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7QUMxQ0Y7QUQ0Q0E7RUFDRSxjQUFBO0FDMUNGO0FENkNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzNDRjtBRDhDQTtFQUNFLFlBQUE7QUM1Q0Y7QUQrQ0E7RUFDRSx3QkFBQTtBQzdDRjtBRGdEQTtFQUNFLHFCQUFBO0FDOUNGO0FEaURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDL0NGO0FEa0RBO0VBQ0UsYUFBQTtBQ2hERjtBRG1EQTtFQUNFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDakRGO0FEb0RBO0VBQ0UsWUFBQTtBQ2xERjtBRHFEQTtFQVRFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBU0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2pERjtBRG9EQTtFQWpCRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQWlCQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNoREY7QURtREE7RUFDRSxrQkFBQTtBQ2pERjtBRG9EQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNsREY7QURxREE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ25ERjtBRHNEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDcERGO0FEcURFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ25ESjtBRHVEQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQTVLQSwwQkFBQTtBQ3dIRjtBRHNERTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFoTEYsMEJBQUE7QUM2SEY7QURxREk7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDbkROO0FEdURBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBMUxBLDBCQUFBO0FDc0lGO0FEc0RFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQTlMRiwwQkFBQTtBQzJJRjtBRHFESTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUNuRE47QUR3REE7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQTFNQSwwQkFBQTtBQ3FKRjtBRHlEQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBak5BLDBCQUFBO0FDMkpGO0FEMERBO0VBQ0UsUUFBQTtBQ3hERjtBRDJEQTtFQXBIRSxhQUFBO0VBQ0Esc0JBQUE7RUFxSEEsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUEvTkEsMEJBQUE7QUN3S0Y7QUQyREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBck9BLDBCQUFBO0FDNktGO0FENERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBNU9BLDBCQUFBO0FDbUxGO0FENkRBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUMzREY7QUQ4REE7RUFDRSxvQ0FBQTtBQzVERjtBRCtEQTtFQUNFLGlDQUFBO0FDN0RGO0FEZ0VBO0VBQ0Usb0NBQUE7QUM5REY7QURpRUE7RUFDRSxpQ0FBQTtBQy9ERjtBRGtFQTtFQUNFLGNBQUE7QUNoRUY7QURtRUE7RUFDRSxjQUFBO0FDakVGO0FDOU5BO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VGa0JBLDBCQUFBO0FDK01GO0FDN05BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VGWUEsMEJBQUE7QUNvTkY7QUM1TkE7RUZZRSxrQ0FBQTtFRVZBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRDhORjtBQzNOQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUZOQSwwQkFBQTtBQ29PRjtBQ3pOQTtFQUNFLGdCQUFBO0FEMk5GO0FDMU5FO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBRDROSjtBQzFORTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUQ0Tko7QUN4TkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRDBORjtBQ3ZOQTtFQUNFLG9CQUFBO0FEeU5GIiwiZmlsZSI6Ii4uLy4uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNjI2MjYyO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cblxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjNjQ1NWIyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xufVxuXG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlIDAgMDtcbn1cblxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAxICogQHNwYWNlO1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4iLCIuc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuLnN0YXR1cy1kYXJrLXRoZW1lIHtcbiAgY29sb3I6ICM1MzI0Nzg7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnN0YXR1cy1saWdodC10aGVtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzVmNTA4ZDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ucGxhdGUge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHdpZHRoOiA0NSU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiAxNDBweDtcbn1cbi5zdGF0dXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBwYWRkaW5nOiA1cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi51c2VyLWRhdGEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnVzZXItZGF0YS1pY28ge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnVzZXItZGF0YS11c2VybmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4ubWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFydCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGljb24td2lkdGg6IDEyMHB4O1xuQHN0YXR1cy1kYXJrLWJhY2tncm91bmQ6ICNmOWY5Zjk7XG5Ac3RhdHVzLWxpZ2h0LWJhY2tncm91bmQ6ICM1ZjUwOGQ7XG5Ac3RhdHVzLWRhcmstY29sb3ItdGV4dDogIzUzMjQ3ODtcblxuLnN0YXR1cy1kYXJrLXRoZW1lIHtcbiAgY29sb3I6IEBzdGF0dXMtZGFyay1jb2xvci10ZXh0O1xuICBiYWNrZ3JvdW5kOiBAc3RhdHVzLWRhcmstYmFja2dyb3VuZDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5zdGF0dXMtbGlnaHQtdGhlbWUge1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBzdGF0dXMtbGlnaHQtYmFja2dyb3VuZDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5wbGF0ZSB7XG4gIC5mb250LXNldDtcbiAgd2lkdGg6IDQ1JTtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIG1heC13aWR0aDogMTQwcHg7XG59XG5cbi5zdGF0dXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IEBpY29uLXdpZHRoO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNwYWNlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi8vIHRlbXBvcmFyeSBzdHlsZXNcbi51c2VyLWRhdGEge1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG4gICYtaWNvIHtcbiAgICB3aWR0aDogQGljb24td2lkdGg7XG4gICAgbWFyZ2luOiBAc21hbGwtc3BhY2UgYXV0bztcbiAgICBwYWRkaW5nOiBAc21hbGwtc3BhY2U7XG4gIH1cbiAgJi11c2VybmFtZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1heC13aWR0aDogQGljb24td2lkdGg7XG4gICAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIH1cbn1cblxuLm1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBhcnQge1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/profile/profile.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/profile/profile.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
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


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(userStore, themeStore, router, cdr) {
        _classCallCheck(this, ProfileComponent);

        this.userStore = userStore;
        this.themeStore = themeStore;
        this.router = router;
        this.cdr = cdr;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this4 = this;

          this.themeStore.loadThemeInfo().subscribe(function (theme) {
            return _this4.darkTheme = theme;
          });
          this.subscriber = this.userStore.loadUserInfo().subscribe(function (user) {
            _this4.userExist = !!Object.keys(user).length;
            _this4.user = user;

            _this4.cdr.markForCheck();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriber.unsubscribe();
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"]
      }, {
        type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_3__["ThemeStoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.less */
      "./src/app/components/profile/profile.component.less"))["default"]]
    })], ProfileComponent);
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


    __webpack_exports__["default"] = ".smooth-animation {\n  transition: all 500ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #626262;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 500ms ease;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.remove-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  border-left: none;\n}\n.set-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.right-icon {\n  outline: none;\n  border-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  background: #ffffff;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n  z-index: 0;\n}\n.right-icon-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  background: #ffffff;\n  width: 1.3em;\n}\n.form {\n  padding: 20px;\n  font-family: \"Georgia\", sans-serif;\n  position: relative;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-text {\n  margin-bottom: 10px;\n}\n.form-field-input {\n  outline: none;\n  border-radius: 5px;\n  background: #ffffff;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n}\n.form-field-input-password {\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  height: 2em;\n  font-size: 16px;\n  outline: none;\n}\n.form-field-input-login-loading {\n  height: 100%;\n}\n.form-submit {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 20px;\n  font-size: 16px;\n  height: 2.3em;\n  background: #596b9f;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  transition: all 500ms ease;\n}\n.form-submit:hover {\n  cursor: pointer;\n  background: #3d5088;\n}\n.form-submit:disabled {\n  cursor: auto;\n  background: #a8acb6;\n}\n.form-submit:active {\n  background: #8d919e;\n}\n.input-dark-theme {\n  background: #efefef;\n  border-color: #efefef;\n}\n.error {\n  margin: 0 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: #d6dfef;\n  color: #1e0456;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: #1e0456;\n  margin-right: 10px;\n}\n.auth-error {\n  margin-bottom: 10px;\n  padding: 10px 20px;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n  border: 1px solid #b58484;\n  background: #bf9494;\n  color: white;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: white;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2lnbi1pbi1mb3JtL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vY29tcG9uZW50cy9zaWduLWluLWZvcm0vc2lnbi1pbi1mb3JtLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vY29tcG9uZW50cy9zaWduLWluLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCIuLi8uLi9jb21wb25lbnRzL3NpZ24taW4tZm9ybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi1mb3JtL3NpZ24taW4tZm9ybS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmU7RUFBc0IsMEJBQUE7QUNyQnJDO0FEd0JPO0VBQWMsa0NBQUE7QUNyQnJCO0FEeUJFO0VBQWUsaUJBQUE7QUN0QmpCO0FEeUJJO0VBQ0osY0FBQTtFQUFrQixxQkFBQTtBQ3RCbEI7QUQwQlE7RUFDSixZQUFBO0FDeEJKO0FEd0JxQjtFQUdiLGVBQUE7RUFDSyxPQUFBO0VBR1gsU0FBQTtFQUFhLFFBQUE7QUN6QmY7QUQwQlc7RUFDUCxhQUFBO0FDeEJKO0FEeUJZO0VBSVYsZUFBQTtBQzFCRjtBRDJCWTtFQUdHLGVBQUE7QUMzQmY7QUQ2QkE7RUFFbUIsZUFBQTtBQzVCbkI7QUQ2QmM7RUFHSCxlQUFBO0FDN0JYO0FEOEJnQjtFQUdHLG1CQUFBO0FDOUJuQjtBRCtCZ0I7RUFHTCxpQkFBQTtFQUNSLGtCQUFBO0FDL0JIO0FEZ0NBO0VBRWtCLGNBQUE7QUMvQmxCO0FEZ0NZO0VBQ08sY0FBQTtBQzlCbkI7QURpQ2tCO0VBR2xCLGtCQUFBO0FDakNBO0FEa0N1QjtFQUd2Qix3QkFBQTtBQ2xDQTtBRG9DUTtFQUdJLHdCQUFBO0FDcENaO0FEcUNlO0VBQW1CLG1CQUFBO0FDbENsQztBRHFDcUI7RUFDWixjQUFBO0FDbkNUO0FEbUM4QjtFQUdoQixnQkFBQTtFQUNFLG1CQUFBO0FDbkNoQjtBRHFDTztFQUNBLFlBQUE7QUNuQ1A7QURxQ0E7RUFDaUIsd0JBQUE7QUNuQ2pCO0FEcUNBO0VBQWtCLHFCQUFBO0FDbENsQjtBRHFDZTtFQUNDLGFBQUE7RUFHTCxzQkFBQTtBQ3JDWDtBRHNDb0I7RUFHakIsYUFBQTtBQ3RDSDtBRHVDSTtFQUFZLGtDQUFBO0VBR0YsYUFBQTtFQUNGLGlCQUFBO0FDdENaO0FEMENJO0VBQ0EsWUFBQTtBQ3hDSjtBRDJDVTtFQVpNLGtDQUFBO0VBR0YsYUFBQTtFQUNGLGlCQUFBO0VBU1csWUFBQTtFQUVwQixtQkFBQTtFQUE0QixxQkFBQTtFQUdqQixpQkFBQTtBQ3hDZDtBRHlDcUI7RUFuQkwsa0NBQUE7RUFHRixhQUFBO0VBQ0YsaUJBQUE7RUFrQkQsbUJBQUE7RUFFRyxxQkFBQTtFQUNBLGtCQUFBO0FDdkNkO0FEd0NRO0VBQ1Isa0JBQUE7QUN0Q0E7QUR1Q0M7RUFHVSxrQkFBQTtFQUNVLFFBQUE7RUFDaEIsTUFBQTtBQ3ZDTDtBRHVDZ0I7RUFDZCxlQUFBO0VBQW1CLE9BQUE7RUFHakIsTUFBQTtFQUFVLFFBQUE7RUFDVixTQUFBO0VBQWEsY0FBQTtFQUdWLGtCQUFBO0FDdENQO0FEdUNJO0VBQVcsZUFBQTtFQUNKLFlBQUE7RUFHWCxhQUFBO0VBRUEsV0FBQTtFQUFlLFVBQUE7RUFDTiw2QkFBQTtFQUdILG1CQUFBO0VBQ1MsYUFBQTtFQUNGLFVBQUE7QUN4Q2I7QUQwQ0M7RUFFQyxrQkFBQTtFQUNJLGdCQUFBO0FDekNOO0FEMENjO0VBQ0QsbUJBQUE7RUFFUSxjQUFBO0VBbktnQiwwQkFBQTtBQzJIckM7QUQwQ1k7RUFDSCxtQkFBQTtFQUdBLDZCQUFBO0VBeks0QiwwQkFBQTtBQ2dJckM7QUQrQ0s7RUFBZ0IsbUJBQUE7RUFHViwyQkFBQTtBQzlDWDtBRCtDMkI7RUFBZ0IsbUJBQUE7RUFDekIsWUFBQTtFQXBMbUIsMEJBQUE7QUN5SXJDO0FENkMyQjtFQUFlLG1CQUFBO0VBQ0YsNkJBQUE7RUF2TEgsMEJBQUE7QUM4SXJDO0FEOENpQztFQUN2QixtQkFBQTtFQUdQLDJCQUFBO0FDOUNIO0FEK0NNO0VBQXdCLG1CQUFBO0VBQ25CLHdDQUFBO0VBRUssY0FBQTtFQXBNcUIsMEJBQUE7QUN3SnJDO0FENkNRO0VBQXVCLG1CQUFBO0VBS3hCLHdDQUFBO0VBQ3FCLFlBQUE7RUEzTVMsMEJBQUE7QUM4SnJDO0FEOEM4QjtFQUNyQixRQUFBO0FDNUNUO0FENENzQjtFQWpITixhQUFBO0VBR0wsc0JBQUE7RUFrSFYsZUFBQTtFQUFtQixNQUFBO0VBQ1osU0FBQTtFQUFhLE9BQUE7RUFBVyxRQUFBO0VBbE5LLDBCQUFBO0FDMktyQztBRHdDb0I7RUFBZSxrQkFBQTtFQUVoQyxtQkFBQTtFQXJOa0MsMEJBQUE7QUNnTHJDO0FEd0NxQjtFQUVwQixZQUFBO0VBRVcsZUFBQTtFQUNJLGVBQUE7RUE3TnFCLDBCQUFBO0FDc0xyQztBRDBDTTtFQUNHLGVBQUE7RUFFTixpQkFBQTtFQUNELGlCQUFBO0FDekNGO0FENENhO0VBQ2Isb0NBQUE7QUMxQ0E7QUQyQ2lCO0VBSWQsaUNBQUE7QUM1Q0g7QUQ4Q0s7RUFDYSxvQ0FBQTtBQzVDbEI7QURnRGdCO0VBRVYsaUNBQUE7QUMvQ047QURrRFM7RUFDQSxjQUFBO0FDaERUO0FEZ0Q0QjtFQUduQixjQUFBO0FDaERUO0FDaE9BO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEa09GO0FDL05BO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGlPRjtBQzdORTtFQUNFLGVBQUE7QUQrTko7QUM1TkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUQ4TkY7QUM1TkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEOE5GO0FDNU5BO0VGREksYUFBQTtFRUdGLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRDhORjtBQzdORTtFRjJEYyxhQUFBO0VBR0wsc0JBQUE7RUE3REksZUFBQTtBQ2lPZjtBQy9OSTtFQUNFLG1CQUFBO0FEaU9OO0FDL05JO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURpT047QUNoT007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBRGtPUjtBQ2hPTTtFQUNFLFlBQUE7QURrT1I7QUM5TkU7RUZxQ2Msa0NBQUE7RUFHRixhQUFBO0VBQ0YsaUJBQUE7RUV2Q1IsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBRGtPSjtBQ2pPSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRG1PTjtBQ2pPSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBRG1PTjtBQ2pPSTtFQUNFLG1CQUFBO0FEbU9OO0FDOU5BO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBRGdPRjtBQzdOQTtFRnRDbUIsY0FBQTtFRXdDakIsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRCtORjtBQzFOSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRDROTjtBRTNWQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FGNlZGO0FFeFZJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGMFZOIiwiZmlsZSI6Ii4uLy4uL2NvbXBvbmVudHMvc2lnbi1pbi1mb3JtL3NpZ24taW4tZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1zcGFjZTogNXB4O1xyXG5Ac21hbGwtc3BhY2U6IDEwcHg7XHJcbkBzcGFjZTogMjBweDtcclxuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xyXG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcclxuQGdyZWVuLWNvbG9yOiAjMDBhMTAwO1xyXG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XHJcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xyXG5AZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGZlZjtcclxuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XHJcbkBib3JkZXItcmFkaXVzOiA1cHg7XHJcbkBmb3JtLXdpZHRoOiAyNDBweDtcclxuQHNtYWxsLWljb24td2lkdGg6IDEuM2VtO1xyXG5cclxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzJiMmUzMDtcclxuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XHJcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xyXG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcclxuXHJcbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICM2MjYyNjI7XHJcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XHJcblxyXG5AZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuLnNtb290aC1hbmltYXRpb24ge1xyXG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xyXG59XHJcblxyXG4uZm9udC1zZXQge1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbn1cclxuXHJcbi5ib2xkLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgY29sb3I6ICM2NDU1YjI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZmxleC1ncm93IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5maXhlZC1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IEBzcGFjZTtcclxufVxyXG5cclxuLnZlcnRpY2FsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xyXG59XHJcblxyXG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCBAc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XHJcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5ib3R0b20tbWFyZ2luIHtcclxuICBtYXJnaW4tYm90dG9tOiAxICogQHNwYWNlO1xyXG59XHJcbi52ZXJ0aWNhbC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogQHNwYWNlIDA7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4uY2VudGVyLWFsaWduZWQge1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnJpZ2h0LWFsaWduZWQge1xyXG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcclxufVxyXG5cclxuLmxlZnQtYWxpZ25lZCB7XHJcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byAwO1xyXG59XHJcblxyXG4uY29sdW1uLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJvdy1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLnNtYWxsLWljb24ge1xyXG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcclxufVxyXG5cclxuLnNpZ24taW4ge1xyXG4gIC5idXR0b247XHJcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcclxuICBib3JkZXItY29sb3I6IEBncmVlbi1jb2xvcjtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG5cclxuLnNpZ24tdXAge1xyXG4gIC5idXR0b247XHJcbiAgYmFja2dyb3VuZDogQGdyZXktY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi50aGVtZSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAyLjdlbTtcclxuICBoZWlnaHQ6IDIuN2VtO1xyXG4gIGxlZnQ6IDAuN2VtO1xyXG4gIHRvcDogMC43ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgJi1pY29uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubGlnaHQtdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xyXG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICAmLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XHJcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMjAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRhcmstdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XHJcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgJi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgNSUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcclxuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbn1cclxuXHJcbi53aW5kb3ctZGFyay10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5sb2FkLXBvcHVwIHtcclxuICAuY29sdW1uLWRpc3BsYXk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxufVxyXG5cclxuLmxvYWQtaWNvbiB7XHJcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4ubG9hZC1pbWFnZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBtYXgtd2lkdGg6IDg1cHg7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbn1cclxuXHJcbi5sb2FkLXBocmFzZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xyXG59XHJcblxyXG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcclxufVxyXG5cclxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xyXG59XHJcblxyXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcclxufVxyXG5cclxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xyXG4gIGNvbG9yOiAjMWUwNDU2O1xyXG59XHJcblxyXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcclxuICBjb2xvcjogI2NhZDZmZjtcclxufVxyXG4iLCIuc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuLnJlbW92ZS1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNldC1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4ucG9pbnRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yaWdodC1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgei1pbmRleDogMDtcbn1cbi5yaWdodC1pY29uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmZvcm0tZmllbGQtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZm9ybS1maWVsZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uZm9ybS1maWVsZC1pbnB1dC1wYXNzd29yZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybS1maWVsZC1pbnB1dC1sb2dpbi1sb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0tc3VibWl0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDIuM2VtO1xuICBiYWNrZ3JvdW5kOiAjNTk2YjlmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5mb3JtLXN1Ym1pdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzNkNTA4ODtcbn1cbi5mb3JtLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIGN1cnNvcjogYXV0bztcbiAgYmFja2dyb3VuZDogI2E4YWNiNjtcbn1cbi5mb3JtLXN1Ym1pdDphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjOGQ5MTllO1xufVxuLmlucHV0LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXItY29sb3I6ICNlZmVmZWY7XG59XG4uZXJyb3Ige1xuICBtYXJnaW46IDAgMTBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2Q2ZGZlZjtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubWVzc2FnZS1zaWduOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKaoFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWUwNDU2O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYXV0aC1lcnJvciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjU4NDg0O1xuICBiYWNrZ3JvdW5kOiAjYmY5NDk0O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVzc2FnZS1zaWduOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKaoFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGlucHV0LXdpZHRoOiAxNzBweDtcbkBzbWFsbC1pbnB1dC13aWR0aDogMTAwcHg7XG5AZm9udC1zaXplOiAxNnB4O1xuLnJlbW92ZS1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2V0LWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnBvaW50ZXIge1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5yaWdodC1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xuICB6LWluZGV4OiAwO1xufVxuLnJpZ2h0LWljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cbi5mb3JtIHtcbiAgLnBhZGRpbmc7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiBAZm9ybS13aWR0aDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICYtZmllbGQge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAudmVydGljYWwtc21hbGwtcGFkZGluZztcbiAgICAmLXRleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgICAmLWlucHV0IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICAgIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgICAgICYtcGFzc3dvcmQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgICAmLWxvZ2luLWxvYWRpbmcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYtc3VibWl0IHtcbiAgICAuYnV0dG9uO1xuICAgIG1hcmdpbi1sZWZ0OiAzICogQHNwYWNlO1xuICAgIG1hcmdpbi1yaWdodDogMyAqIEBzcGFjZTtcbiAgICBtYXJnaW4tdG9wOiBAc3BhY2U7XG4gICAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICAgIGhlaWdodDogMi4zZW07XG4gICAgYmFja2dyb3VuZDogQGJsdWUtY29sb3I7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHNhdHVyYXRlKGRhcmtlbihAYmx1ZS1jb2xvciwgMTAlKSwgMTAlKTtcbiAgICB9XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kOiBkZXNhdHVyYXRlKGxpZ2h0ZW4oQGJsdWUtY29sb3IsIDIwJSksIDIwJSk7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUobGlnaHRlbihAYmx1ZS1jb2xvciwgMTAlKSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cblxuLmlucHV0LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG59XG5cbi5lcnJvciB7XG4gIC5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbjtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6IEBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yO1xuICBjb2xvcjogQGVycm9yLXRleHQtY29sb3I7XG59XG5cbi5tZXNzYWdlIHtcbiAgJi1zaWduIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLimqBcIjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBAZXJyb3ItdGV4dC1jb2xvcjtcbiAgICAgIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGltcG9ydCBcIi4uL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3NcIjtcbkBhdXRoLWVycm9yLWJhY2tncm91bmQ6ICNiZjk0OTQ7XG5cbi5hdXRoLWVycm9yIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgQHNwYWNlO1xuICBtaW4td2lkdGg6IEBmb3JtLXdpZHRoO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKEBhdXRoLWVycm9yLWJhY2tncm91bmQsIDUlKTtcbiAgYmFja2dyb3VuZDogQGF1dGgtZXJyb3ItYmFja2dyb3VuZDtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yXG59XG5cbi5tZXNzYWdlIHtcbiAgJi1zaWduIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLimqBcIjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgICAgIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */";
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


    var _model_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../model/messages */
    "./src/app/model/messages.ts");
    /* harmony import */


    var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/cookies-service/cookies.service */
    "./src/app/services/cookies-service/cookies.service.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../store/services/waiting-store.service/waiting-store.service */
    "./src/app/store/services/waiting-store.service/waiting-store.service.ts");

    var SignInFormComponent = /*#__PURE__*/function () {
      function SignInFormComponent(userService, userStore, themeStore, waitingStore, cookieService, cdr, router) {
        _classCallCheck(this, SignInFormComponent);

        this.userService = userService;
        this.userStore = userStore;
        this.themeStore = themeStore;
        this.waitingStore = waitingStore;
        this.cookieService = cookieService;
        this.cdr = cdr;
        this.router = router;
        this.authErrorMessages = _model_messages__WEBPACK_IMPORTED_MODULE_4__["messages"].authentication;
        this.authErrors = {
          getError: false,
          loginDoesntExist: false,
          passwordDoesntMatch: false
        };
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/\w*[A-Za-z]+\d*/)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
          submitButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Submit")
        });
      }

      _createClass(SignInFormComponent, [{
        key: "resetErrorSigns",
        value: function resetErrorSigns() {
          this.authErrors = {
            getError: false,
            loginDoesntExist: false,
            passwordDoesntMatch: false
          };
          this.cdr.markForCheck();
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this5 = this;

          if (this.loginForm.invalid) {
            return;
          }

          this.loginForm.get("submitButton").disable();
          this.loginForm.markAsUntouched();
          this.resetErrorSigns();
          var login = this.loginForm.get("login").value;
          var password = this.loginForm.get("password").value;
          this.waitingStore.activateLoading();
          this.userService.loginUser(login, password).subscribe(function (data) {
            _this5.userStore.loginUser(data);

            _this5.cookieService.saveLogin(data.login);

            _this5.cookieService.savePassword(data.password);

            _this5.waitingStore.deactivateLoading();

            _this5.router.navigate(["", "profile"]).then();
          }, function (error) {
            _this5.authErrors.getError = true;

            if (error.status === 404) {
              _this5.authErrors.loginDoesntExist = true;
              _this5.authErrors.passwordDoesntMatch = false;
            }

            if (error.status === 502) {
              _this5.authErrors.loginDoesntExist = false;
              _this5.authErrors.passwordDoesntMatch = true;
            }

            _this5.waitingStore.deactivateLoading();

            _this5.cdr.markForCheck();
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.loginForm.untouched) {
            this.loginForm.get("submitButton").disable();
            return;
          }

          this.loginForm.valid ? this.loginForm.get("submitButton").enable() : this.loginForm.get("submitButton").disable();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.themeStore.loadThemeInfo().subscribe(function (mode) {
            _this6.darkThemeEnable = mode;

            _this6.cdr.markForCheck();
          });
        }
      }]);

      return SignInFormComponent;
    }();

    SignInFormComponent.ctorParameters = function () {
      return [{
        type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_8__["UserStoreService"]
      }, {
        type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_7__["ThemeStoreService"]
      }, {
        type: _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_9__["WaitingStoreService"]
      }, {
        type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignInFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sign-in-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-in-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
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


    __webpack_exports__["default"] = ".smooth-animation {\n  transition: all 500ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #626262;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: all 500ms ease;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.remove-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  border-left: none;\n}\n.set-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.right-icon {\n  outline: none;\n  border-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  background: #ffffff;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n  z-index: 0;\n}\n.right-icon-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  background: #ffffff;\n  width: 1.3em;\n}\n.form {\n  padding: 20px;\n  font-family: \"Georgia\", sans-serif;\n  position: relative;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-text {\n  margin-bottom: 10px;\n}\n.form-field-input {\n  outline: none;\n  border-radius: 5px;\n  background: #ffffff;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n}\n.form-field-input-password {\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  height: 2em;\n  font-size: 16px;\n  outline: none;\n}\n.form-field-input-login-loading {\n  height: 100%;\n}\n.form-submit {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 20px;\n  font-size: 16px;\n  height: 2.3em;\n  background: #596b9f;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  transition: all 500ms ease;\n}\n.form-submit:hover {\n  cursor: pointer;\n  background: #3d5088;\n}\n.form-submit:disabled {\n  cursor: auto;\n  background: #a8acb6;\n}\n.form-submit:active {\n  background: #8d919e;\n}\n.input-dark-theme {\n  background: #efefef;\n  border-color: #efefef;\n}\n.error {\n  margin: 0 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: #d6dfef;\n  color: #1e0456;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: #1e0456;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvc2lnbi11cC1mb3JtL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vY29tcG9uZW50cy9zaWduLXVwLWZvcm0vc2lnbi11cC1mb3JtLmNvbXBvbmVudC5sZXNzIiwiLi4vLi4vY29tcG9uZW50cy9zaWduLXVwLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJBO0VBQ0UsMEJBQUE7QUN4QkY7QUQyQkE7RUFDRSxrQ0FBQTtBQ3pCRjtBRDRCQTtFQUNFLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDM0JGO0FEOEJBO0VBQ0UsWUFBQTtBQzVCRjtBRCtCQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUM3QkY7QURnQ0E7RUFDRSxhQUFBO0FDOUJGO0FEaUNBO0VBQ0UsZUFBQTtBQy9CRjtBRGtDQTtFQUNFLGVBQUE7QUNoQ0Y7QURtQ0E7RUFDRSxlQUFBO0FDakNGO0FEb0NBO0VBQ0UsZUFBQTtBQ2xDRjtBRHFDQTtFQUNFLG1CQUFBO0FDbkNGO0FEc0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGNBQUE7QUNyQ0Y7QUR3Q0E7RUFDRSxjQUFBO0FDdENGO0FEeUNBO0VBQ0Usa0JBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSx3QkFBQTtBQ3hDRjtBRDJDQTtFQUNFLHdCQUFBO0FDekNGO0FENENBO0VBQ0UsbUJBQUE7QUMxQ0Y7QUQ0Q0E7RUFDRSxjQUFBO0FDMUNGO0FENkNBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQzNDRjtBRDhDQTtFQUNFLFlBQUE7QUM1Q0Y7QUQrQ0E7RUFDRSx3QkFBQTtBQzdDRjtBRGdEQTtFQUNFLHFCQUFBO0FDOUNGO0FEaURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDL0NGO0FEa0RBO0VBQ0UsYUFBQTtBQ2hERjtBRG1EQTtFQUNFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDakRGO0FEb0RBO0VBQ0UsWUFBQTtBQ2xERjtBRHFEQTtFQVRFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBU0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ2pERjtBRG9EQTtFQWpCRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQWlCQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNoREY7QURtREE7RUFDRSxrQkFBQTtBQ2pERjtBRG9EQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUNsREY7QURxREE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ25ERjtBRHNEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDcERGO0FEcURFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ25ESjtBRHVEQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQTVLQSwwQkFBQTtBQ3dIRjtBRHNERTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUFoTEYsMEJBQUE7QUM2SEY7QURxREk7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDbkROO0FEdURBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBMUxBLDBCQUFBO0FDc0lGO0FEc0RFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQTlMRiwwQkFBQTtBQzJJRjtBRHFESTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUNuRE47QUR3REE7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQTFNQSwwQkFBQTtBQ3FKRjtBRHlEQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBak5BLDBCQUFBO0FDMkpGO0FEMERBO0VBQ0UsUUFBQTtBQ3hERjtBRDJEQTtFQXBIRSxhQUFBO0VBQ0Esc0JBQUE7RUFxSEEsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUEvTkEsMEJBQUE7QUN3S0Y7QUQyREE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBck9BLDBCQUFBO0FDNktGO0FENERBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBNU9BLDBCQUFBO0FDbUxGO0FENkRBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUMzREY7QUQ4REE7RUFDRSxvQ0FBQTtBQzVERjtBRCtEQTtFQUNFLGlDQUFBO0FDN0RGO0FEZ0VBO0VBQ0Usb0NBQUE7QUM5REY7QURpRUE7RUFDRSxpQ0FBQTtBQy9ERjtBRGtFQTtFQUNFLGNBQUE7QUNoRUY7QURtRUE7RUFDRSxjQUFBO0FDakVGO0FDaE9BO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FEa09GO0FDL05BO0VBQ0UsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBRGlPRjtBQzdORTtFQUNFLGVBQUE7QUQrTko7QUM1TkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUQ4TkY7QUM1TkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FEOE5GO0FDNU5BO0VGS0UsYUFBQTtFRUhBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRDhORjtBQzdORTtFRnVFQSxhQUFBO0VBQ0Esc0JBQUE7RUFsRUEsZUFBQTtBQzRORjtBQy9OSTtFQUNFLG1CQUFBO0FEaU9OO0FDL05JO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURpT047QUNoT007RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBRGtPUjtBQ2hPTTtFQUNFLFlBQUE7QURrT1I7QUM5TkU7RUZrREEsa0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUVsREUsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBRGtPSjtBQ2pPSTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRG1PTjtBQ2pPSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBRG1PTjtBQ2pPSTtFQUNFLG1CQUFBO0FEbU9OO0FDOU5BO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBRGdPRjtBQzdOQTtFRjlCRSxjQUFBO0VFZ0NBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUQrTkY7QUMxTkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUQ0Tk4iLCJmaWxlIjoiLi4vLi4vY29tcG9uZW50cy9zaWduLXVwLWZvcm0vc2lnbi11cC1mb3JtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNjI2MjYyO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cblxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGluayB7XG4gIGNvbG9yOiAjNjQ1NWIyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xufVxuXG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlIDAgMDtcbn1cblxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAxICogQHNwYWNlO1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4iLCIuc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzYyNjI2MjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuLnJlbW92ZS1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNldC1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4ucG9pbnRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yaWdodC1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgei1pbmRleDogMDtcbn1cbi5yaWdodC1pY29uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmZvcm0tZmllbGQtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZm9ybS1maWVsZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uZm9ybS1maWVsZC1pbnB1dC1wYXNzd29yZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybS1maWVsZC1pbnB1dC1sb2dpbi1sb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0tc3VibWl0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDIuM2VtO1xuICBiYWNrZ3JvdW5kOiAjNTk2YjlmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5mb3JtLXN1Ym1pdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzNkNTA4ODtcbn1cbi5mb3JtLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIGN1cnNvcjogYXV0bztcbiAgYmFja2dyb3VuZDogI2E4YWNiNjtcbn1cbi5mb3JtLXN1Ym1pdDphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjOGQ5MTllO1xufVxuLmlucHV0LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXItY29sb3I6ICNlZmVmZWY7XG59XG4uZXJyb3Ige1xuICBtYXJnaW46IDAgMTBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2Q2ZGZlZjtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubWVzc2FnZS1zaWduOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKaoFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWUwNDU2O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5AaW5wdXQtd2lkdGg6IDE3MHB4O1xuQHNtYWxsLWlucHV0LXdpZHRoOiAxMDBweDtcbkBmb250LXNpemU6IDE2cHg7XG4ucmVtb3ZlLWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5zZXQtbGVmdC1ib3JkZXIge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ucG9pbnRlciB7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuLnJpZ2h0LWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIHotaW5kZXg6IDA7XG59XG4ucmlnaHQtaWNvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xufVxuLmZvcm0ge1xuICAucGFkZGluZztcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IEBmb3JtLXdpZHRoO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgJi1maWVsZCB7XG4gICAgLmNvbHVtbi1kaXNwbGF5O1xuICAgIC52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nO1xuICAgICYtdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG4gICAgfVxuICAgICYtaW5wdXQge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgICAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xuICAgICAgJi1wYXNzd29yZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICAgICYtbG9naW4tbG9hZGluZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi1zdWJtaXQge1xuICAgIC5idXR0b247XG4gICAgbWFyZ2luLWxlZnQ6IDMgKiBAc3BhY2U7XG4gICAgbWFyZ2luLXJpZ2h0OiAzICogQHNwYWNlO1xuICAgIG1hcmdpbi10b3A6IEBzcGFjZTtcbiAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgaGVpZ2h0OiAyLjNlbTtcbiAgICBiYWNrZ3JvdW5kOiBAYmx1ZS1jb2xvcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogc2F0dXJhdGUoZGFya2VuKEBibHVlLWNvbG9yLCAxMCUpLCAxMCUpO1xuICAgIH1cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUobGlnaHRlbihAYmx1ZS1jb2xvciwgMjAlKSwgMjAlKTtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogZGVzYXR1cmF0ZShsaWdodGVuKEBibHVlLWNvbG9yLCAxMCUpLCAyMCUpO1xuICAgIH1cbiAgfVxufVxuXG4uaW5wdXQtZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDtcbn1cblxuLmVycm9yIHtcbiAgLmhvcml6b250YWwtc21hbGwtbWFyZ2luO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogQGVycm9yLWJhY2tncm91bmQtY29sb3I7XG4gIGNvbG9yOiBAZXJyb3ItdGV4dC1jb2xvcjtcbn1cblxuLm1lc3NhZ2Uge1xuICAmLXNpZ24ge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIuKaoFwiO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IEBlcnJvci10ZXh0LWNvbG9yO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gICAgfVxuICB9XG59XG4iXX0= */";
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


    var _custom_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../custom-validators/password-match.validator */
    "./src/app/custom-validators/password-match.validator.ts");
    /* harmony import */


    var _model_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../model/messages */
    "./src/app/model/messages.ts");
    /* harmony import */


    var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/cookies-service/cookies.service */
    "./src/app/services/cookies-service/cookies.service.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../store/services/waiting-store.service/waiting-store.service */
    "./src/app/store/services/waiting-store.service/waiting-store.service.ts");

    var SignUpFormComponent = /*#__PURE__*/function () {
      function SignUpFormComponent(userService, cookieService, userStore, themeStore, waitingStore, cdr, router) {
        _classCallCheck(this, SignUpFormComponent);

        this.userService = userService;
        this.cookieService = cookieService;
        this.userStore = userStore;
        this.themeStore = themeStore;
        this.waitingStore = waitingStore;
        this.cdr = cdr;
        this.router = router;
        this.invalidError = _model_messages__WEBPACK_IMPORTED_MODULE_5__["messages"].validation;
        this.loginCheckStatus = {
          pending: false,
          exist: false,
          free: false
        };
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\w*[A-Za-z]+[_]*\d*$/)]),
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Zа-яА-Я\s]+$/)]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
          passwordAgain: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
          submitButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Submit")
        }, Object(_custom_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_4__["passwordMatch"])());
      }

      _createClass(SignUpFormComponent, [{
        key: "submitForm",
        value: function submitForm() {
          var _this7 = this;

          this.registerForm.get("submitButton").disable();
          this.registerForm.markAsUntouched();

          if (this.registerForm.invalid) {
            return;
          }

          var newUser = {
            _id: 0,
            status: "student",
            login: this.registerForm.get("login").value,
            username: this.registerForm.get("username").value,
            password: this.registerForm.get("password").value
          };
          this.waitingStore.activateLoading();
          this.userService.registerNewUser(newUser).subscribe(function (data) {
            _this7.cookieService.saveLogin(data.login);

            _this7.cookieService.savePassword(data.password);

            _this7.userStore.loginUser(data);

            _this7.waitingStore.deactivateLoading();

            _this7.router.navigate(["", "profile"]).then();
          }, function () {
            return _this7.waitingStore.deactivateLoading();
          });
        }
      }, {
        key: "controlStatus",
        value: function controlStatus(control, name) {
          if (control.hasError("required")) {
            return "requireError";
          }

          if (control.hasError("pattern")) {
            return "patternError";
          }

          if (control.hasError("minlength")) {
            return name + "MinLengthError";
          }

          return "";
        }
      }, {
        key: "showLoading",
        value: function showLoading() {
          this.loginCheckStatus.pending = true;
          this.loginCheckStatus.exist = false;
          this.loginCheckStatus.free = false;
          this.cdr.markForCheck();
        }
      }, {
        key: "resetLoadSigns",
        value: function resetLoadSigns() {
          this.loginCheckStatus.pending = false;
          this.loginCheckStatus.exist = false;
          this.loginCheckStatus.free = false;
          this.cdr.markForCheck();
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          var _this8 = this;

          if (this.registerForm.get("login").invalid) {
            return;
          }

          this.showLoading();
          this.userService.checkLogin(this.registerForm.get("login").value).subscribe(function () {
            {
              _this8.loginCheckStatus.pending = false;
              _this8.loginCheckStatus.exist = true;
              _this8.loginCheckStatus.free = false;

              _this8.cdr.markForCheck();
            }
          }, function () {
            _this8.loginCheckStatus.pending = false;
            _this8.loginCheckStatus.exist = false;
            _this8.loginCheckStatus.free = true;

            _this8.cdr.markForCheck();
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.registerForm.untouched) {
            this.registerForm.get("submitButton").disable();
            return;
          }

          this.registerForm.valid && this.loginCheckStatus.free ? this.registerForm.get("submitButton").enable() : this.registerForm.get("submitButton").disable();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.themeStore.loadThemeInfo().subscribe(function (mode) {
            _this9.darkThemeEnable = mode;

            _this9.cdr.markForCheck();
          });
        }
      }]);

      return SignUpFormComponent;
    }();

    SignUpFormComponent.ctorParameters = function () {
      return [{
        type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
      }, {
        type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_6__["CookiesService"]
      }, {
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_9__["UserStoreService"]
      }, {
        type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_8__["ThemeStoreService"]
      }, {
        type: _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_10__["WaitingStoreService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    SignUpFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sign-up-form",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sign-up-form.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sign-up-form.component.less */
      "./src/app/components/sign-up-form/sign-up-form.component.less"))["default"]]
    })], SignUpFormComponent); // "\f06e"

    /***/
  },

  /***/
  "./src/app/custom-validators/password-match.validator.ts":
  /*!***************************************************************!*\
    !*** ./src/app/custom-validators/password-match.validator.ts ***!
    \***************************************************************/

  /*! exports provided: passwordMatch */

  /***/
  function srcAppCustomValidatorsPasswordMatchValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "passwordMatch", function () {
      return passwordMatch;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function passwordMatch() {
      return function (formGroup) {
        if (!formGroup.get("password").hasError("minlength")) {
          if (formGroup.get("password").value !== formGroup.get("passwordAgain").value) {
            return {
              "doesntMatch": true
            };
          }
        }

        return null;
      };
    }
    /***/

  },

  /***/
  "./src/app/directives/change-image/change-image.directive.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/directives/change-image/change-image.directive.ts ***!
    \*******************************************************************/

  /*! exports provided: ChangeImageDirective */

  /***/
  function srcAppDirectivesChangeImageChangeImageDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangeImageDirective", function () {
      return ChangeImageDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ChangeImageDirective = /*#__PURE__*/function () {
      function ChangeImageDirective(elementRef) {
        _classCallCheck(this, ChangeImageDirective);

        this.elementRef = elementRef;
        this.click = 0;
      }

      _createClass(ChangeImageDirective, [{
        key: "toggle",
        value: function toggle() {
          this.elementRef.nativeElement.childNodes[0].src = this.appChangeImage[this.click % 2];
          this.click += 1;
        }
      }]);

      return ChangeImageDirective;
    }();

    ChangeImageDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChangeImageDirective.prototype, "appChangeImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")], ChangeImageDirective.prototype, "toggle", null);
    ChangeImageDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[appChangeImage]"
    })], ChangeImageDirective);
    /***/
  },

  /***/
  "./src/app/directives/set-status/set-status.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/directives/set-status/set-status.directive.ts ***!
    \***************************************************************/

  /*! exports provided: SetStatusDirective */

  /***/
  function srcAppDirectivesSetStatusSetStatusDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetStatusDirective", function () {
      return SetStatusDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SetStatusDirective = /*#__PURE__*/function () {
      function SetStatusDirective(elementRef) {
        _classCallCheck(this, SetStatusDirective);

        this.elementRef = elementRef;
        this.background = {
          white: "#f9f9f9",
          violet: "#5f508d",
          green: "#478d41",
          yellow: "#8d8d43"
        };
        this.color = {
          white: "#ffffff",
          violet: "#532478",
          green: "#3f7e3a",
          yellow: "#707034"
        };
      }

      _createClass(SetStatusDirective, [{
        key: "setColors",
        value: function setColors() {
          var changingProperty = this.appSetStatus.darkTheme ? "color" : "background";
          var constantProperty = !this.appSetStatus.darkTheme ? "color" : "background";
          this.elementRef.nativeElement.style[constantProperty] = this[constantProperty].white;

          switch (this.appSetStatus.status) {
            case "student":
              {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].yellow;
                break;
              }

            case "teacher":
              {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].green;
                break;
              }

            case "developer":
              {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].violet;
                break;
              }

            default:
              {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].white;
                break;
              }
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.setColors();
        }
      }]);

      return SetStatusDirective;
    }();

    SetStatusDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SetStatusDirective.prototype, "appSetStatus", void 0);
    SetStatusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[appSetStatus]"
    })], SetStatusDirective);
    /***/
  },

  /***/
  "./src/app/directives/show-password/show-password.directive.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/directives/show-password/show-password.directive.ts ***!
    \*********************************************************************/

  /*! exports provided: ShowPasswordDirective */

  /***/
  function srcAppDirectivesShowPasswordShowPasswordDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowPasswordDirective", function () {
      return ShowPasswordDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShowPasswordDirective = /*#__PURE__*/function () {
      function ShowPasswordDirective(elementRef) {
        _classCallCheck(this, ShowPasswordDirective);

        this.elementRef = elementRef;
        this.clickCount = 0;
      }

      _createClass(ShowPasswordDirective, [{
        key: "showPassword",
        value: function showPassword() {
          this.clickCount += 1;
          this.clickCount % 2 === 0 ? this.elementRef.nativeElement.parentNode.parentNode.childNodes[0].type = "password" : this.elementRef.nativeElement.parentNode.parentNode.childNodes[0].type = "text";
        }
      }]);

      return ShowPasswordDirective;
    }();

    ShowPasswordDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")], ShowPasswordDirective.prototype, "showPassword", null);
    ShowPasswordDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[appShowPassword]"
    })], ShowPasswordDirective);
    /***/
  },

  /***/
  "./src/app/model/messages.ts":
  /*!***********************************!*\
    !*** ./src/app/model/messages.ts ***!
    \***********************************/

  /*! exports provided: messages */

  /***/
  function srcAppModelMessagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "messages", function () {
      return messages;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var messages = {
      validation: {
        requireError: "Нужно заполнить поле",
        loginExistError: "Логин занят",
        patternError: "Недопустимые символы",
        loginMinLengthError: "Логин слишком короткий",
        usernameMinLengthError: "Имя слишком короткое",
        passwordMinLengthError: "Пароль слишком короткий",
        passwordDoesntMatch: "Пароли не совпадают"
      },
      authentication: {
        loginDoesntExist: "Пользователя с таким логином не существует",
        passwordDoesntMatch: "Неверный пароль"
      }
    };
    /***/
  },

  /***/
  "./src/app/services/cookies-service/cookies.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/cookies-service/cookies.service.ts ***!
    \*************************************************************/

  /*! exports provided: CookiesService */

  /***/
  function srcAppServicesCookiesServiceCookiesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CookiesService", function () {
      return CookiesService;
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");

    var CookiesService = /*#__PURE__*/function () {
      function CookiesService(cookie) {
        _classCallCheck(this, CookiesService);

        this.cookie = cookie;
      }

      _createClass(CookiesService, [{
        key: "saveLogin",
        value: function saveLogin(login) {
          this.cookie.set("login", login, new Date(2999, 1, 1));
        }
      }, {
        key: "savePassword",
        value: function savePassword(password) {
          this.cookie.set("password", password, new Date(2999, 1, 1));
        }
      }, {
        key: "saveInfo",
        value: function saveInfo(cookieName, value, timeout) {
          this.cookie.set(cookieName, value, timeout ? timeout : new Date(2999, 1, 1));
        }
      }, {
        key: "checkInfo",
        value: function checkInfo(cookieName) {
          return this.cookie.get(cookieName);
        }
      }, {
        key: "deleteCookies",
        value: function deleteCookies() {
          this.cookie["delete"]("login");
          this.cookie["delete"]("password");
        }
      }, {
        key: "deleteCookie",
        value: function deleteCookie(cookieName) {
          this.cookie["delete"](cookieName);
        }
      }]);

      return CookiesService;
    }();

    CookiesService.ctorParameters = function () {
      return [{
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]
      }];
    };

    CookiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CookiesService);
    /***/
  },

  /***/
  "./src/app/services/user-service/user.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/user-service/user.service.ts ***!
    \*******************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
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


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(_http, _cookie) {
        _classCallCheck(this, UserService);

        this._http = _http;
        this._cookie = _cookie;
        this.usersURL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].url + "users/";
      }

      _createClass(UserService, [{
        key: "checkLogin",
        value: function checkLogin(login) {
          return this._http.get(this.usersURL + login).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
          }));
        }
      }, {
        key: "registerNewUser",
        value: function registerNewUser(user) {
          return this._http.post(this.usersURL, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
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
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return data;
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], UserService);
    /***/
  },

  /***/
  "./src/app/store/actions/theme.actions.ts":
  /*!************************************************!*\
    !*** ./src/app/store/actions/theme.actions.ts ***!
    \************************************************/

  /*! exports provided: toggleTheme */

  /***/
  function srcAppStoreActionsThemeActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toggleTheme", function () {
      return toggleTheme;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var TOGGLE = "[Theme] theme toggled";
    var toggleTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(TOGGLE);
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
  "./src/app/store/actions/waiting.actions.ts":
  /*!**************************************************!*\
    !*** ./src/app/store/actions/waiting.actions.ts ***!
    \**************************************************/

  /*! exports provided: activateWait, deactivateWait */

  /***/
  function srcAppStoreActionsWaitingActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "activateWait", function () {
      return activateWait;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "deactivateWait", function () {
      return deactivateWait;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var ACTIVATE_WAIT = "[Waiting] activate";
    var DEACTIVATE_WAIT = "[Waiting] deactivate";
    var activateWait = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(ACTIVATE_WAIT);
    var deactivateWait = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(DEACTIVATE_WAIT);
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


    var _theme_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./theme.reducer */
    "./src/app/store/reducers/theme.reducer.ts");
    /* harmony import */


    var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.reducer */
    "./src/app/store/reducers/user.reducer.ts");
    /* harmony import */


    var _waiting_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./waiting.reducer */
    "./src/app/store/reducers/waiting.reducer.ts");

    var appReducers = {
      user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["userReducer"],
      theme: _theme_reducer__WEBPACK_IMPORTED_MODULE_1__["themeReducer"],
      pleaseWait: _waiting_reducer__WEBPACK_IMPORTED_MODULE_3__["waitingReducer"]
    };
    /***/
  },

  /***/
  "./src/app/store/reducers/theme.reducer.ts":
  /*!*************************************************!*\
    !*** ./src/app/store/reducers/theme.reducer.ts ***!
    \*************************************************/

  /*! exports provided: themeReducer */

  /***/
  function srcAppStoreReducersThemeReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "themeReducer", function () {
      return themeReducer;
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


    var _actions_theme_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/theme.actions */
    "./src/app/store/actions/theme.actions.ts");
    /* harmony import */


    var _state_theme_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state/theme.state */
    "./src/app/store/state/theme.state.ts");

    var themeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_theme_state__WEBPACK_IMPORTED_MODULE_3__["initialThemeState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_theme_actions__WEBPACK_IMPORTED_MODULE_2__["toggleTheme"], function (state) {
      return {
        darkThemeEnable: !state.darkThemeEnable
      };
    }));
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
  "./src/app/store/reducers/waiting.reducer.ts":
  /*!***************************************************!*\
    !*** ./src/app/store/reducers/waiting.reducer.ts ***!
    \***************************************************/

  /*! exports provided: waitingReducer */

  /***/
  function srcAppStoreReducersWaitingReducerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "waitingReducer", function () {
      return waitingReducer;
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


    var _actions_waiting_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../actions/waiting.actions */
    "./src/app/store/actions/waiting.actions.ts");
    /* harmony import */


    var _state_waiting_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../state/waiting.state */
    "./src/app/store/state/waiting.state.ts");

    var waitingReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_waiting_state__WEBPACK_IMPORTED_MODULE_3__["initialWaitingState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_waiting_actions__WEBPACK_IMPORTED_MODULE_2__["activateWait"], function () {
      return {
        waiting: true
      };
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_waiting_actions__WEBPACK_IMPORTED_MODULE_2__["deactivateWait"], function () {
      return {
        waiting: false
      };
    }));
    /***/
  },

  /***/
  "./src/app/store/selectors/theme.selectors.ts":
  /*!****************************************************!*\
    !*** ./src/app/store/selectors/theme.selectors.ts ***!
    \****************************************************/

  /*! exports provided: selectThemeInfo */

  /***/
  function srcAppStoreSelectorsThemeSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectThemeInfo", function () {
      return selectThemeInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectTheme = function selectTheme(appState) {
      return appState.theme;
    };

    var selectThemeInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectTheme, function (state) {
      return state.darkThemeEnable;
    });
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
  "./src/app/store/selectors/waiting.selectors.ts":
  /*!******************************************************!*\
    !*** ./src/app/store/selectors/waiting.selectors.ts ***!
    \******************************************************/

  /*! exports provided: selectWaiting */

  /***/
  function srcAppStoreSelectorsWaitingSelectorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "selectWaiting", function () {
      return selectWaiting;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/fesm2015/store.js");

    var selectPleaseWait = function selectPleaseWait(appState) {
      return appState.pleaseWait;
    };

    var selectWaiting = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectPleaseWait, function (state) {
      return state.waiting;
    });
    /***/
  },

  /***/
  "./src/app/store/services/theme-store.service/theme-store.service.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/store/services/theme-store.service/theme-store.service.ts ***!
    \***************************************************************************/

  /*! exports provided: ThemeStoreService */

  /***/
  function srcAppStoreServicesThemeStoreServiceThemeStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeStoreService", function () {
      return ThemeStoreService;
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


    var _actions_theme_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../actions/theme.actions */
    "./src/app/store/actions/theme.actions.ts");
    /* harmony import */


    var _selectors_theme_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../selectors/theme.selectors */
    "./src/app/store/selectors/theme.selectors.ts");

    var ThemeStoreService = /*#__PURE__*/function () {
      function ThemeStoreService(store$) {
        _classCallCheck(this, ThemeStoreService);

        this.store$ = store$;
      }

      _createClass(ThemeStoreService, [{
        key: "loadThemeInfo",
        value: function loadThemeInfo() {
          return this.store$.select(_selectors_theme_selectors__WEBPACK_IMPORTED_MODULE_4__["selectThemeInfo"]);
        }
      }, {
        key: "toggleTheme",
        value: function toggleTheme() {
          this.store$.dispatch(Object(_actions_theme_actions__WEBPACK_IMPORTED_MODULE_3__["toggleTheme"])());
        }
      }]);

      return ThemeStoreService;
    }();

    ThemeStoreService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    ThemeStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ThemeStoreService);
    /***/
  },

  /***/
  "./src/app/store/services/user-store.service/user-store.service.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/store/services/user-store.service/user-store.service.ts ***!
    \*************************************************************************/

  /*! exports provided: UserStoreService */

  /***/
  function srcAppStoreServicesUserStoreServiceUserStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
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
    /*! ../../actions/user.actions */
    "./src/app/store/actions/user.actions.ts");
    /* harmony import */


    var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../selectors/user.selectors */
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
  "./src/app/store/services/waiting-store.service/waiting-store.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/store/services/waiting-store.service/waiting-store.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: WaitingStoreService */

  /***/
  function srcAppStoreServicesWaitingStoreServiceWaitingStoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WaitingStoreService", function () {
      return WaitingStoreService;
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


    var _actions_waiting_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../actions/waiting.actions */
    "./src/app/store/actions/waiting.actions.ts");
    /* harmony import */


    var _selectors_waiting_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../selectors/waiting.selectors */
    "./src/app/store/selectors/waiting.selectors.ts");

    var WaitingStoreService = /*#__PURE__*/function () {
      function WaitingStoreService(store$) {
        _classCallCheck(this, WaitingStoreService);

        this.store$ = store$;
      }

      _createClass(WaitingStoreService, [{
        key: "loadInfo",
        value: function loadInfo() {
          return this.store$.select(_selectors_waiting_selectors__WEBPACK_IMPORTED_MODULE_4__["selectWaiting"]);
        }
      }, {
        key: "activateLoading",
        value: function activateLoading() {
          this.store$.dispatch(Object(_actions_waiting_actions__WEBPACK_IMPORTED_MODULE_3__["activateWait"])());
        }
      }, {
        key: "deactivateLoading",
        value: function deactivateLoading() {
          this.store$.dispatch(Object(_actions_waiting_actions__WEBPACK_IMPORTED_MODULE_3__["deactivateWait"])());
        }
      }]);

      return WaitingStoreService;
    }();

    WaitingStoreService.ctorParameters = function () {
      return [{
        type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]
      }];
    };

    WaitingStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], WaitingStoreService);
    /***/
  },

  /***/
  "./src/app/store/state/theme.state.ts":
  /*!********************************************!*\
    !*** ./src/app/store/state/theme.state.ts ***!
    \********************************************/

  /*! exports provided: initialThemeState */

  /***/
  function srcAppStoreStateThemeStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialThemeState", function () {
      return initialThemeState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var initialThemeState = {
      darkThemeEnable: false
    };
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
  "./src/app/store/state/waiting.state.ts":
  /*!**********************************************!*\
    !*** ./src/app/store/state/waiting.state.ts ***!
    \**********************************************/

  /*! exports provided: initialWaitingState */

  /***/
  function srcAppStoreStateWaitingStateTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "initialWaitingState", function () {
      return initialWaitingState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var initialWaitingState = {
      waiting: false
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
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false,
      url: "https://mysterious-oasis-74963.herokuapp.com/",
      versionSign: "user profile"
    };
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
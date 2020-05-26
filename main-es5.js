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


    __webpack_exports__["default"] = "<div class=\"background\" [ngClass]=\"{'light-theme': !darkThemeEnable, 'dark-theme': darkThemeEnable}\">\r\n  <div class=\"user-panel\">\r\n    <div class=\"row-display\">\r\n      <button routerLink=\"profile\" *ngIf=\"user\" class=\"username right-margin-10px\"\r\n              [ngClass]=\"{'profile-light': !darkThemeEnable, 'profile-dark': darkThemeEnable}\">\r\n        <img src=\"../assets/user-light.svg\" alt=\"profile\" class=\"username-img\">\r\n      </button>\r\n      <button routerLink=\"\" *ngIf=\"user\" class=\"username right-margin-10px\"\r\n              [ngClass]=\"{'profile-light': !darkThemeEnable, 'profile-dark': darkThemeEnable}\">\r\n        <img src=\"../assets/home.svg\" alt=\"profile\" class=\"username-img\">\r\n      </button>\r\n      <button class=\"theme\"\r\n              [ngClass]=\"{'light-theme-button': !darkThemeEnable, 'dark-theme-button': darkThemeEnable}\"\r\n              (click)=\"toggleTheme()\">\r\n        <span class=\"theme-icon\" *ngIf=\"darkThemeEnable\">💡</span>\r\n        <span class=\"theme-icon\" *ngIf=\"!darkThemeEnable\">🌙</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"row-display relative-position top-margin-20px\">\r\n    <div class=\"edit-plate\" *ngIf=\"!showSign\">\r\n      <div routerLink=\"education/tasks\" class=\"control-button\">\r\n        <span class=\"flex-grow button-title\">Обучение</span>\r\n      </div>\r\n      <div routerLink=\"notifications\"\r\n           class=\"relative-position row-display control-button\">\r\n        <span class=\"flex-grow button-title\">События</span>\r\n        <div class=\"notification-sign row-display\">\r\n          <span></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"control-button\">\r\n        <span class=\"flex-grow button-title\">Настройки</span>\r\n      </div>\r\n      <div routerLink=\"login\" (click)=\"logout()\"\r\n           class=\"control-button\">\r\n        <span class=\"flex-grow button-title red-button\">Выход</span>\r\n      </div>\r\n      <!--      <div (click)=\"showPopup()\" [ngClass]=\"{'button-light-theme': !darkTheme, 'button-dark-theme': darkTheme}\"-->\r\n      <!--           class=\"row-display control-button last-button\">-->\r\n      <!--        <span class=\"flex-grow centered-text\">Удалить</span>-->\r\n      <!--&lt;!&ndash;        <img src=\"../../../assets/edit.png\" alt=\"edit\" class=\"small-icon\">&ndash;&gt;-->\r\n      <!--      </div>-->\r\n    </div>\r\n    <div class=\"page\" [ngClass]=\"{'page-user-defined': !showSign, 'page-user-undefined': showSign}\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n  <div class=\"fixed-bottom vertical-padding-10px row-display\">\r\n    <span class=\"center-aligned\">~ {{specialSign}}</span>\r\n  </div>\r\n</div>\r\n<div [ngClass]=\"{'popup-transparent-light': !darkThemeEnable, 'popup-transparent-dark': darkThemeEnable}\"\r\n     *ngIf=\"loading | async\" class=\"load-popup\">\r\n  <div [ngClass]=\"{'load-icon-transparent-light': !darkThemeEnable, 'load-icon-transparent-dark': darkThemeEnable}\"\r\n       class=\"center-aligned column-display load-icon\">\r\n    <img [src]=\"darkThemeEnable ? '../assets/loading/onload_dark.gif' : '../assets/loading/onload.gif'\"\r\n         alt=\"loading\" class=\"load-image\">\r\n    <span [ngClass]=\"{'load-phrase-text-light': !darkThemeEnable, 'load-phrase-text-dark': darkThemeEnable}\"\r\n          class=\"center-aligned font-set load-phrase\">Подождите</span>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEducationEducationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row-display right-margin-auto\">\r\n  <div routerLink=\"materials\" routerLinkActive=\"chosen-link\"\r\n       [queryParams]=\"queryParams\"\r\n       class=\"row-display first-link link\">\r\n    <button class=\"link-button\">Материалы</button>\r\n  </div>\r\n  <div routerLink=\"tasks\" routerLinkActive=\"chosen-link\"\r\n       [queryParams]=\"queryParams\"\r\n       class=\"row-display last-link link\">\r\n    <button class=\"link-button\">Задания</button>\r\n  </div>\r\n</div>\r\n<div class=\"content paint-light-theme\">\r\n  <div class=\"panel\">\r\n    <div class=\"settings flex-grow\">\r\n      <div class=\"settings-control\">\r\n        <img src=\"../../../assets/actions/controls.svg\" alt=\"settings\" class=\"settings-control-img\">\r\n      </div>\r\n      <div class=\"settings-control left-margin-20px\">\r\n        <img src=\"../../../assets/actions/filter.svg\" alt=\"filter\" class=\"settings-control-img\">\r\n      </div>\r\n      <div class=\"settings-control\">\r\n        <img src=\"../../../assets/actions/sort.svg\" alt=\"sort\" class=\"settings-control-img\">\r\n      </div>\r\n      <div class=\"settings-control\">\r\n        <img src=\"../../../assets/actions/search.svg\" alt=\"search\" class=\"settings-control-img\">\r\n      </div>\r\n      <div class=\"settings left-margin-auto right-margin-20px\">\r\n        <div [ngClass]=\"options.view + '-view'\" class=\"chosen-view-mark\"></div>\r\n        <div class=\"settings-views\" (click)=\"toTile()\">\r\n          <img src=\"../../../assets/actions/tile.svg\" alt=\"tile\" class=\"settings-control-img\">\r\n        </div>\r\n        <div class=\"settings-views\" (click)=\"toTable()\">\r\n          <img src=\"../../../assets/actions/list.svg\" alt=\"list\" class=\"settings-control-img\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button class=\"add-button left-margin-auto\" (click)=\"create()\">\r\n      <span class=\"button-action\">{{educationMessages[section][\"add\"]}}</span>\r\n    </button>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<!--<form [formGroup]=\"fileUploadForm\" class=\"row-display\" enctype=\"multipart/form-data\">-->\r\n<!--  <input type=\"file\" (input)=\"fileUpload($event)\">-->\r\n<!--  <input formControlName=\"submit\" type=\"submit\">-->\r\n<!--</form>-->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/materials/materials.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/materials/materials.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEducationMaterialsMaterialsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!displayedInfo.length\" class=\"empty-phrase\">{{messages.empty}}</div>\r\n<table *ngIf=\"displayedInfo.length && panelOptions.view === 'table'\" class=\"flex-grow table\">\r\n  <tbody>\r\n  <tr>\r\n    <td class=\"left-cell\"></td>\r\n    <td class=\"blind-text px50-padding-left\">Название</td>\r\n    <td class=\"blind-text medial-cell\">Автор</td>\r\n    <td class=\"blind-text centered-text medial-cell\">Дата добавления</td>\r\n    <td class=\"small-cell\"></td>\r\n    <td class=\"small-cell\"></td>\r\n  </tr>\r\n  <tr *ngFor=\"let item of displayedInfo\" class=\"table-row\">\r\n    <td class=\"left-cell file-format vertical-margin-auto\">docx</td>\r\n    <td class=\"horizontal-padding\">{{item.title}}</td>\r\n    <td class=\"medial-cell author\">{{item['authorID'] === 18 ? 'Natalia' : 'diper'}}</td>\r\n    <td class=\"centered-text medial-cell grey-text\">{{dateTimeDisplay(item['addDate'])}}</td>\r\n    <td class=\"small-cell\">\r\n      <img src=\"../../../../assets/actions/options.svg\" alt=\"options\" class=\"small-icon\">\r\n    </td>\r\n    <td class=\"small-cell\">\r\n      <img src=\"../../../../assets/actions/remove.svg\" alt=\"options\" class=\"small-icon small-cell\">\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n<div *ngIf=\"displayedInfo.length && panelOptions.view === 'tile'\" class=\"horizontal-padding\">\r\n  <div *ngFor=\"let item of displayedInfo\" class=\"column-display tile\">\r\n    <img src=\"../../../../assets/other/document.svg\" alt=\"document\" class=\"large-icon center-aligned\">\r\n    <img src=\"../../../../assets/actions/options.svg\" alt=\"options\" class=\"small-icon margin-left px10margin-right\">\r\n    <span class=\"tile-title\">{{item.title}}</span>\r\n    <span class=\"file-format tile-format\">docx</span>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/progress/progress.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/progress/progress.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEducationProgressProgressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/tasks/tasks.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/tasks/tasks.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEducationTasksTasksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!displayedInfo.length\" class=\"empty-phrase\">{{messages.empty}}</div>\r\n<table *ngIf=\"displayedInfo.length && panelOptions.view === 'table'\" class=\"flex-grow table\">\r\n  <tbody>\r\n  <tr>\r\n    <td class=\"left-cell\"></td>\r\n    <td class=\"blind-text px50-padding-left\">Название</td>\r\n    <td class=\"blind-text medial-cell\">Автор</td>\r\n    <td class=\"blind-text centered-text medial-cell\">Дата добавления</td>\r\n    <td class=\"small-cell\"></td>\r\n    <td class=\"small-cell\"></td>\r\n  </tr>\r\n  <tr *ngFor=\"let item of displayedInfo\" class=\"table-row\">\r\n    <td class=\"left-cell file-format vertical-margin-auto\">docx</td>\r\n    <td class=\"horizontal-padding\">{{item.title}}</td>\r\n    <td class=\"medial-cell author\">{{item['authorID'] === 18 ? 'Natalia' : 'diper'}}</td>\r\n    <td class=\"centered-text medial-cell grey-text\">{{dateTimeDisplay(item['addDate'])}}</td>\r\n    <td class=\"small-cell\">\r\n      <img src=\"../../../../assets/actions/options.svg\" alt=\"options\" class=\"small-icon\">\r\n    </td>\r\n    <td class=\"small-cell\">\r\n      <img src=\"../../../../assets/actions/remove.svg\" alt=\"options\" class=\"small-icon small-cell\">\r\n    </td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n<div *ngIf=\"displayedInfo.length && panelOptions.view === 'tile'\" class=\"horizontal-padding\">\r\n  <div *ngFor=\"let item of displayedInfo\" class=\"column-display tile\">\r\n    <img src=\"../../../../assets/other/document.svg\" alt=\"document\" class=\"large-icon center-aligned\">\r\n    <img src=\"../../../../assets/actions/options.svg\" alt=\"options\" class=\"small-icon margin-left px10margin-right\">\r\n    <span class=\"tile-title\">{{item.title}}</span>\r\n    <span class=\"file-format tile-format\">docx</span>\r\n  </div>\r\n</div>\r\n<div class=\"popup\" *ngIf=\"askingForType\">\r\n  <div class=\"popup-content\">\r\n    <button class=\"popup-close left-margin-auto\" (click)=\"cancel()\">\r\n      <img src=\"../../../../assets/actions/close.svg\" alt=\"close\" class=\"popup-close-icon\">\r\n    </button>\r\n    <div class=\"task\">\r\n      <div (mouseenter)=\"focus('simple')\" (mouseleave)=\"focus('')\" class=\"task-type\">\r\n        <img src=\"../../../../assets/other/copybook.svg\" alt=\"simpleTask\" class=\"task-type-icon\">\r\n        <span class=\"task-type-title top-margin-10px\">{{messages.types.simple.title}}</span>\r\n      </div>\r\n      <div (mouseenter)=\"focus('test')\" (mouseleave)=\"focus('')\"\r\n           routerLink=\"/create/test\" class=\"task-type\">\r\n        <img src=\"../../../../assets/other/test.svg\" alt=\"testTask\" class=\"task-type-icon\">\r\n        <span class=\"task-type-title top-margin-10px\">{{messages.types.test.title}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"description margin-auto\">\r\n      <span class=\"description-text\">{{description}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"row-display\">\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotificationsNotificationsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"column-display\">\n  <span *ngIf=\"!notificationList.length\" class=\"empty\">{{notificationMessages.haveNotNewNotifications}}</span>\n  <div *ngFor=\"let notification of notificationList\" class=\"notification paint-light-theme\">\n    <div *ngIf=\"!notification.checked\" class=\"unread\"></div>\n    <img [src]=\"'../../../assets/notification-icons/' + notification.owner + 'Notification.svg'\"\n         alt=\"welcome\" class=\"notification-icon\">\n    <div class=\"column-display flex-grow notification-message\">\n      <span class=\"owner\">{{notification.owner}}</span>\n      <span class=\"message\">{{notification.message}}</span>\n    </div>\n    <span class=\"date-time\">{{dateTime(notification.datetime)}}</span>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-confirm/popup-confirm.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-confirm/popup-confirm.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopupConfirmPopupConfirmComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"{'light-background': !darkTheme, 'dark-background': darkTheme}\" class=\"load-popup\">\n  <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"\n       class=\"center-aligned column-display confirm-body\">\n    <span [ngClass]=\"{'confirm-light-title': !darkTheme, 'confirm-dark-title': darkTheme}\"\n          class=\"centered-text font-set bold-text confirm-title\">{{question}}</span>\n    <div class=\"center-aligned column-display confirm-info-body\">\n      <span class=\"centered-text font-set confirm-info\">{{info}}</span>\n      <div class=\"row-display\">\n        <button [ngClass]=\"{'simple-light-button': !darkTheme, 'simple-dark-button': darkTheme}\"\n                class=\"center-aligned chose-button simple-light-button\"\n                (click)=\"onCancel()\">{{cancel}}</button>\n        <button [ngClass]=\"{'danger-light-button': !darkTheme, 'danger-dark-button': darkTheme}\"\n                class=\"center-aligned chose-button\"\n                (click)=\"onConfirm()\">{{confirm}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div *ngIf=\"userExist\" class=\"row-display user-data\">\r\n<!--      <a class=\"link center-aligned\" routerLink=\"\">← вернуться</a>-->\r\n  <div class=\"column-display\">\r\n    <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"\r\n         class=\"column-display right-aligned plate avatar\">\r\n      <img [src]=\"user.status === 'god'\r\n       ? '../../../assets/standard-avatars/doggy.svg'\r\n       : user.status === 'developer'\r\n        ? '../../../assets/standard-avatars/developer.svg'\r\n        : '../../../assets/standard-avatars/simple.svg'\"\r\n           alt=\"cat\" class=\"user-data-ico no-select\">\r\n      <span [appSetStatus]=\"{status: user.status, darkTheme: darkTheme}\"\r\n            class=\"center-aligned status\">{{user.status}}</span>\r\n      <span class=\"user-data-username center-aligned\">{{user.username}}</span>\r\n    </div>\r\n\r\n<!--      <div (click)=\"showPopup()\" [ngClass]=\"{'button-light-theme': !darkTheme, 'button-dark-theme': darkTheme}\"-->\r\n<!--           class=\"row-display control-button last-button\">-->\r\n<!--        <span class=\"flex-grow centered-text\">Удалить</span>-->\r\n<!--&lt;!&ndash;        <img src=\"../../../assets/edit.png\" alt=\"edit\" class=\"small-icon\">&ndash;&gt;-->\r\n<!--      </div>-->\r\n  </div>\r\n  <app-popup-confirm *ngIf=\"askConfirm\" (chosen)=\"deleteUser($event)\"\r\n                     [question]=\"confirmMessages.deleteAccountQuestion\"\r\n                     [info]=\"confirmMessages.deleteAccountInfo\"\r\n                     [confirm]=\"confirmMessages.deleteAccountConfirm\"\r\n                     [cancel]=\"confirmMessages.deleteAccountCancel\">\r\n  </app-popup-confirm>\r\n  <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"\r\n       class=\"column-display router flex-grow small-right-margin\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSettingsSettingsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"column-display\" [formGroup]=\"settingsForm\">\n  <div class=\"row-display simple section-highlight top-margin-10px\">\n    <span class=\"left-margin-10percent right-margin-auto\">Изменение пароля</span>\n  </div>\n  <div class=\"form\" formGroupName=\"passwordChange\">\n    <div class=\"field\">\n      <span class=\"field-name\">Старый пароль</span>\n      <div class=\"row-display relative-position\">\n        <input type=\"password\" formControlName=\"oldPassword\" class=\"password-input paint-light-theme\">\n        <div class=\"password-button paint-light-theme\"\n          [appChangeImage]=\"['../../../assets/password/hide-password.svg', '../../../assets/password/show-password.svg']\">\n          <img appShowPassword src=\"../../../assets/password/show-password.svg\"\n               alt=\"hide password\" class=\"small-icon vertical-auto-margin\">\n        </div>\n      </div>\n    </div>\n    <div class=\"field\">\n      <span class=\"field-name\">Новый пароль</span>\n      <div class=\"row-display relative-position\">\n        <input formControlName=\"newPassword\" class=\"password-input paint-light-theme\">\n        <div class=\"password-button paint-light-theme\"\n          [appChangeImage]=\"['../../../assets/password/hide-password.svg', '../../../assets/password/show-password.svg']\">\n          <img appShowPassword src=\"../../../assets/password/show-password.svg\"\n               alt=\"hide password\" class=\"small-icon vertical-auto-margin\">\n        </div>\n      </div>\n      <div class=\"row-display relative-position top-margin-10px\">\n        <input formControlName=\"newPasswordConfirm\" class=\"password-input paint-light-theme\">\n        <div class=\"password-button paint-light-theme\"\n          [appChangeImage]=\"['../../../assets/password/hide-password.svg', '../../../assets/password/show-password.svg']\">\n          <img appShowPassword src=\"../../../assets/password/show-password.svg\"\n               alt=\"hide password\" class=\"small-icon vertical-auto-margin\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row-display top-margin-20px\">\n      <input type=\"button\" formControlName=\"cancel\" class=\"form-button right-margin-auto\">\n      <input type=\"submit\" formControlName=\"submit\" class=\"form-button left-margin-auto\">\n    </div>\n  </div>\n</div>\n";
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


    __webpack_exports__["default"] = "<div class=\"column-display\">\r\n  <label *ngIf=\"authErrors.getError\" class=\"row-display auth-error center-aligned\">\r\n    <span class=\"right-aligned message-sign\"></span>\r\n    <span *ngIf=\"authErrors.loginDoesntExist\" class=\"left-aligned message\">{{authErrorMessages.loginDoesntExist}}</span>\r\n    <span *ngIf=\"authErrors.passwordDoesntMatch\" class=\"left-aligned message\">{{authErrorMessages.passwordDoesntMatch}}</span>\r\n  </label>\r\n  <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\"\r\n        [ngClass]=\"{ 'window-light-theme': !darkThemeEnable, 'window-dark-theme': darkThemeEnable }\"\r\n        class=\"form column-display center-aligned\">\r\n    <label class=\"form-field\">\r\n      <span class=\"form-field-text center-aligned bold-text\">Логин</span>\r\n      <input formControlName=\"login\" class=\"form-field-input\">\r\n    </label>\r\n    <label class=\"form-field\">\r\n      <span class=\"form-field-text center-aligned bold-text\">Пароль</span>\r\n      <label class=\"row-display relative-position\">\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-field-input flex-grow\">\r\n        <label [appChangeImage]=\"['../../../assets/password/hide-password.svg', '../../../assets/password/show-password.svg']\"\r\n               class=\"relative-position column-display right-icon-container set-left-border pointer no-select\">\r\n          <img appShowPassword src=\"../../../assets/password/show-password.svg\"\r\n               alt=\"show password\" class=\"small-icon vertical-auto-margin\">\r\n        </label>\r\n      </label>\r\n    </label>\r\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\r\n  </form>\r\n  <span routerLink=\"/register\" class=\"link\">Зарегистрироваться</span>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"column-display\">\n  <form novalidate [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\"\n        [ngClass]=\"{ 'window-light-theme': !darkThemeEnable, 'window-dark-theme': darkThemeEnable }\"\n        class=\"form column-display center-aligned\">\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Логин</span>\n      <label class=\"row-display relative-position\">\n        <input formControlName=\"login\" (change)=\"checkLogin()\" (input)=\"resetLoadSigns()\"\n               class=\"right-icon flex-grow\">\n        <label class=\"relative-position column-display right-icon-container remove-left-border\">\n          <img *ngIf=\"loginCheckStatus.pending\" src=\"../../../assets/loading/loading_light.gif\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n          <img *ngIf=\"loginCheckStatus.free\" src=\"../../../assets/statuses/success_light.ico\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n          <img *ngIf=\"loginCheckStatus.exist\" src=\"../../../assets/statuses/error_light.ico\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n        </label>\n      </label>\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('login').invalid && registerForm.get('login').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('login'), \"login\")]}}</span>\n    </label>\n    <label *ngIf=\"loginCheckStatus.exist\" class=\"row-display error\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError.loginExistError}}</span>\n    </label>\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Ваше имя</span>\n      <input formControlName=\"username\" class=\"form-field-input\">\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('username').invalid && registerForm.get('username').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('username'), \"username\")]}}</span>\n    </label>\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Пароль</span>\n      <label class=\"row-display relative-position\">\n        <input formControlName=\"password\" type=\"password\" class=\"form-field-input flex-grow\">\n        <label [appChangeImage]=\"['../../../assets/password/hide-password.svg', '../../../assets/password/show-password.svg']\"\n               class=\"relative-position column-display right-icon-container set-left-border pointer\">\n          <img appShowPassword src=\"../../../assets/password/show-password.svg\"\n               alt=\"show password\" class=\"small-icon vertical-auto-margin\">\n        </label>\n      </label>\n    </label>\n      <label class=\"form-field\">\n        <label class=\"row-display relative-position\">\n          <input formControlName=\"passwordAgain\" type=\"password\" class=\"form-field-input flex-grow\">\n          <label [appChangeImage]=\"['../../../assets/password/hide-password.svg', '../../../assets/password/show-password.svg']\"\n                 class=\"relative-position column-display right-icon-container set-left-border pointer\">\n            <img appShowPassword src=\"../../../assets/password/show-password.svg\"\n                 alt=\"hide password\" class=\"small-icon vertical-auto-margin\">\n          </label>\n        </label>\n      </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('password').invalid && registerForm.get('password').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('password'), \"password\")]}}</span>\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.hasError('doesntMatch')\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError.passwordDoesntMatch}}</span>\n    </label>\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\n  </form>\n  <span routerLink=\"/login\" class=\"link\">Войти</span>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-creator/task-creator.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-creator/task-creator.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTaskCreatorTaskCreatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>task-creator works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-creator/test-creator.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-creator/test-creator.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTestCreatorTestCreatorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"column-display relative-position\">\n  <div class=\"row-display\">\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-task/test-task.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-task/test-task.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTestTaskTestTaskComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"content paint-light-theme\">\n  <div class=\"step\">\n    <span class=\"step-title\">Шаг 1: Структура</span>\n    <button class=\"help\">\n      <img src=\"../../../assets/other/help.svg\" alt=\"remove\" class=\"help-icon\">\n    </button>\n  </div>\n  <div class=\"step-content\">\n    <div class=\"question\" [formGroup]=\"questionForm\">\n      <span class=\"margin-auto italic\" *ngIf=\"!selectedQuestion && !testStructure.length\">Добавьте вопрос</span>\n      <span class=\"margin-auto italic\" *ngIf=\"!selectedQuestion && testStructure.length\">Выберите вопрос в меню справа</span>\n      <div *ngIf=\"selectedQuestion\" class=\"column-display max-height-80prc\">\n        <div class=\"question-wording\">\n          <span class=\"right-margin-10px\">Вопрос #{{testStructure.indexOf(selectedQuestion) + 1}}:</span>\n          <textarea formControlName=\"wording\" class=\"question-wording-input\" appResize\n                    [placeholder]=\"messages.wordingQuestion\" (focusout)=\"saveWording()\">\n        </textarea>\n        </div>\n        <button class=\"add-answer-option\" (click)=\"addAnswer()\">{{messages.test.addAnswer}}</button>\n        <div class=\"answers\" (focusout)=\"saveAnswers()\">\n          <span class=\"italic margin-auto\" *ngIf=\"!answers.length\">{{messages.test.emptyAnswers}}</span>\n          <div *ngFor=\"let input of answers; let i = index\" formGroupName=\"answers\" class=\"answer\"\n               [ngClass]=\"{'answer-correct': checkCorrectAnswers(i)}\">\n            <button class=\"structure-info-question-remove mark\" [ngClass]=\"{'mark-empty': !checkCorrectAnswers(i)}\"\n                    (click)=\"markAs(i)\">\n              <img alt=\"mark\" class=\"structure-info-question-remove-icon\"\n                [src]=\"checkCorrectAnswers(i) ? '../../../assets/other/mark-done.svg'\n                 : '../../../assets/other/mark-empty.svg'\">\n            </button>\n            <span class=\"answer-number\">{{i + 1}})</span>\n            <textarea [formControlName]=\"input\" class=\"question-wording-input\" appResize\n                      [placeholder]=\"messages.wordingAnswer + (i + 1)\">\n            </textarea>\n            <button class=\"structure-info-question-remove answer-remove\" (click)=\"removeAnswer(input, i)\">\n              <img src=\"../../../assets/actions/remove.svg\" alt=\"remove\" class=\"structure-info-question-remove-icon\">\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"structure\">\n      <div class=\"add-question\" (click)=\"addQuestion('free')\">\n        <span>Добавить вопрос</span>\n        <div></div>\n      </div>\n      <div class=\"structure-info\">\n        <span *ngIf=\"!testStructure.length\" class=\"structure-info-empty\">{{messages.test.emptyStructure}}</span>\n        <div *ngFor=\"let question of testStructure; let i = index\" class=\"structure-info-question\"\n             [ngClass]=\"{ 'structure-info-chosen-question': question === selectedQuestion }\" (click)=\"selectQuestion(question)\">\n          <span class=\"flex-grow vertical-margin-auto\">вопрос #{{i + 1}}</span>\n          <button class=\"structure-info-question-remove\" (click)=\"removeQuestion(question)\">\n            <img src=\"../../../assets/actions/remove.svg\" alt=\"remove\" class=\"structure-info-question-remove-icon\">\n          </button>\n        </div>\n      </div>\n      <input type=\"button\" class=\"next\" disabled value=\"Следующий шаг\">\n    </div>\n  </div>\n</div>\n";
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


    var _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/education/education.component */
    "./src/app/components/education/education.component.ts");
    /* harmony import */


    var _components_education_materials_materials_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/education/materials/materials.component */
    "./src/app/components/education/materials/materials.component.ts");
    /* harmony import */


    var _components_education_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/education/progress/progress.component */
    "./src/app/components/education/progress/progress.component.ts");
    /* harmony import */


    var _components_education_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/education/tasks/tasks.component */
    "./src/app/components/education/tasks/tasks.component.ts");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/notifications/notifications.component */
    "./src/app/components/notifications/notifications.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/components/settings/settings.component.ts");
    /* harmony import */


    var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/sign-in-form/sign-in-form.component */
    "./src/app/components/sign-in-form/sign-in-form.component.ts");
    /* harmony import */


    var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/sign-up-form/sign-up-form.component */
    "./src/app/components/sign-up-form/sign-up-form.component.ts");
    /* harmony import */


    var _components_test_task_test_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/test-task/test-task.component */
    "./src/app/components/test-task/test-task.component.ts");

    var routes = [{
      path: "",
      component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_7__["HomePageComponent"]
    }, {
      path: "register",
      component: _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__["SignUpFormComponent"]
    }, {
      path: "login",
      component: _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_11__["SignInFormComponent"]
    }, {
      path: "profile",
      component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]
    }, {
      path: "settings",
      component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_10__["SettingsComponent"]
    }, {
      path: "education",
      component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"],
      children: [{
        path: "materials",
        component: _components_education_materials_materials_component__WEBPACK_IMPORTED_MODULE_4__["MaterialsComponent"]
      }, {
        path: "tasks",
        component: _components_education_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_6__["TasksComponent"]
      }, {
        path: "progress",
        component: _components_education_progress_progress_component__WEBPACK_IMPORTED_MODULE_5__["ProgressComponent"]
      }]
    }, {
      path: "create",
      children: [{
        path: "test",
        component: _components_test_task_test_task_component__WEBPACK_IMPORTED_MODULE_13__["TestTaskComponent"]
      }]
    }, {
      path: "notifications",
      component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsComponent"]
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


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDQTtFQThYRSxhQUFBO0VBQ0Esc0JBQUE7RUE3WEEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDOUJGO0FEaUNBO0VBMEhFLGtCQUFBO0VBeEhBLGlCQUFBO0VBQ0EsVUFBQTtBQy9CRjtBRGtDQTtFQTRLRSxpQkFBQTtFQUNBLGtCQUFBO0VBM0tBLFVBQUE7QUMvQkY7QURrQ0E7RUFxWkUsa0JBQUE7RUF0Q0EsYUFBQTtFQXJIQSxrQ0FBQTtFQXRQQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNoQ0Y7QURpQ0U7RUFDRSwrQkFBQTtBQy9CSjtBRG1DQTtFQUNFLGdCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtBQ2xDRjtBRHFDQTtFQW1WRSxhQUFBO0VBQ0Esc0JBQUE7RUFqSEEsa0NBQUE7RUFoT0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx3Q0FBQTtBQ25DRjtBRHVDQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDckNGO0FEeUNBO0VBb01FLDBCQUFBO0VBbE1BLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUN2Q0Y7QUR3Q0U7RUFDRSxlQUFBO0FDdENKO0FEd0NFO0VBQ0UsWUFBQTtBQ3RDSjtBRDBDQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtC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RSxpQ0FBQTtBQzNHRjtBRDhHQTtFQUNFLG9DQUFBO0FDNUdGO0FEK0dBO0VBQ0UsaUNBQUE7QUM3R0Y7QURnSEE7RUFDRSxjQUFBO0FDOUdGO0FEaUhBO0VBQ0UsY0FBQTtBQy9HRjtBRGtIQTtFQXBNRSxhQUFBO0VBQ0Esc0JBQUE7RUFxTUEsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQy9HRjtBRGtIQTtFQUNFLHlDQUFBO0FDaEhGO0FEaUhFO0VBQ0UsdUNBQUE7QUMvR0o7QURtSEE7RUFDRSwrQ0FBQTtBQ2pIRjtBRGtIRTtFQUNFLDZDQUFBO0FDaEhKIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1zcGFjZTogNXB4O1xuQHNtYWxsLXNwYWNlOiAxMHB4O1xuQG1lZGlhbC1zcGFjZTogN3B4O1xuQHNwYWNlOiAyMHB4O1xuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XG5AZ3JlZW4tY29sb3I6ICMwMGExMDA7XG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcbkBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZDZkZmVmO1xuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XG5AYm9yZGVyLXJhZGl1czogNXB4O1xuQGZvcm0td2lkdGg6IDI0MHB4O1xuQHNtYWxsLWljb24td2lkdGg6IDEuMmVtO1xuQGh1Z2UtaWNvbi13aWR0aDogNzBweDtcbkBzbWFsbGVzdC1pY29uLXdpZHRoOiAwLjdlbTtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzFkMWQxZDtcbkBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lOiAjZThlOGU4O1xuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcblxuQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICMyNjI4Mjk7XG5AaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG5AbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG5cbkBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG5AZm9udC1zaXplOiAxNnB4O1xuXG4vLyBjb250ZW50XG4ucGFnZSB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIC5yaWdodC1tYXJnaW4tYXV0bztcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgd2lkdGg6IDcyJTtcbn1cblxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xuICAuaG9yaXpvbnRhbC1tYXJnaW4tYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cblxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIC5mb250LXNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiBAbWVkaWFsLXNwYWNlIEBzcGFjZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIH1cbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG5cbi5lZGl0LXBsYXRlIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICAuZm9udC1zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLy8gZGVwZW5kcyBvbiB0aGVtZVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBsaWdodC10aGVtZS1ib3JkZXItY29sb3I7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbn1cblxuLy8gdHlwZXNcbi5mb3JtLWJ1dHRvbiB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbn1cblxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsZXN0LXNwYWNlO1xuICBwYWRkaW5nLXJpZ2h0OiBAc21hbGxlc3Qtc3BhY2U7XG59XG5cbi5wYXNzd29yZCB7XG4gICYtYnV0dG9uIHtcbiAgICAuY29sdW1uLWRpc3BsYXk7XG4gICAgLnBvaW50ZXI7XG4gICAgLm5vLXNlbGVjdDtcbiAgICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbiAgICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG4gIH1cblxuICAmLWlucHV0IHtcbiAgICAuaW5wdXQ7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi5maWVsZCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xuICAmLW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4vLyBtYXJnaW4gc2VjdGlvblxuLnJpZ2h0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiBAc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogQHNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1wYWRkaW5nLTIwcHgge1xuICBwYWRkaW5nLWxlZnQ6IEBzcGFjZTtcbn1cblxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG59XG5cbi8vIHBhZGRpbmcgc2VjdGlvblxuLnN0YW5kYXJkLXBhZGRpbmctYWxsIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4ucG9pbnRlciB7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4vLyBhbGwgbXVzdCBiZSBkb25lXG5cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5vLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICAucG9pbnRlcjtcbiAgLm5vLXNlbGVjdDtcbiAgLmJvbGQtdGV4dDtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiBAc3BhY2UgYXV0bztcbn1cblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4vLyBkb25lIHwgaG9yaXpvbnRhbC1tYXJnaW4tYXV0b1xuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIEBzbWFsbC1zcGFjZSBhdXRvIDA7XG59XG5cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IEBzcGFjZSAwO1xufVxuXG4vLyBkb25lIHwgdmVydGljYWwtbWFyZ2luLWF1dG9cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbiAgaGVpZ2h0OiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG59XG5cbi5sYXJnZS1pY29uIHtcbiAgLm5vLXNlbGVjdDtcbiAgd2lkdGg6IEBodWdlLWljb24td2lkdGg7XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi51c2VybmFtZSB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBoZWlnaHQ6IDIuN2VtO1xuICB3aWR0aDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gICYtaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjZlbTtcbiAgICBsZWZ0OiAwLjZlbTtcbiAgICBib3R0b206IDAuNmVtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB3aWR0aDogMS4zZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5uby1zZWxlY3Q7XG4gIH1cbn1cblxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cblxuLnVzZXItcGFuZWwge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiBAc21hbGwtc3BhY2U7XG4gIHJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKHJnYmEoMCwgMCwgMCwgMC41MSksIDEwJSk7XG4gIH1cbn1cblxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpLCAxMCUpO1xuICB9XG59XG4iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDcyJTtcbn1cbi5wYWdlLXVzZXItdW5kZWZpbmVkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cbi5jb250cm9sLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udHJvbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuLmVkaXQtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmZvcm0tYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZm9ybS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybS1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucGFzc3dvcmQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLnBhc3N3b3JkLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXNzd29yZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5maWVsZC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnJpZ2h0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5sZWZ0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4udG9wLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLnBvaW50ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxpbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGluayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTZiOWY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IDAuN2VtO1xuICBoZWlnaHQ6IDAuN2VtO1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4yZW07XG59XG4ubGFyZ2UtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgd2lkdGg6IDcwcHg7XG59XG4uc2lnbi1pbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udXNlcm5hbWUge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgd2lkdGg6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi51c2VybmFtZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC42ZW07XG4gIGxlZnQ6IDAuNmVtO1xuICBib3R0b206IDAuNmVtO1xuICByaWdodDogMC42ZW07XG4gIHdpZHRoOiAxLjNlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4udGhlbWUge1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzEwMTAxMDtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxMDEwMTA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMzAzMDM7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzFkMWQxZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMjYyODI5O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi51c2VyLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLnByb2ZpbGUtbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMxKTtcbn1cbi5wcm9maWxlLWxpZ2h0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDAsIDAsIDAsIDAuNTEpO1xufVxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xufVxuLnByb2ZpbGUtZGFyazpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgyMDcsIDIwNywgMjA3LCAwLjcxKTtcbn1cbiJdfQ== */";
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
        this.requestCount = 0;
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
          var now = new Date();
          var cookieLife = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, now.getMinutes(), now.getSeconds());
          this.cookieService.saveInfo("theme", "".concat(this.darkThemeEnable), cookieLife);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setInterval(function () {
            var subs = _this.userService.forCheck().subscribe(function (data) {
              if (data) {
                _this.requestCount += 1;

                _this.cdr.markForCheck();

                subs.unsubscribe();
              }
            });
          }, 300000);
          this.loading = this.waitingStore.loadInfo();
          var savedLogin = this.cookieService.checkInfo("login");
          var savedPassword = this.cookieService.checkInfo("password");

          if (!savedLogin && !savedPassword) {
            this.router.navigate([this.router.url + "/login"]).then();
          }

          if (savedLogin && savedPassword) {
            this.waitingStore.activateLoading();
            this.userService.loginUser(savedLogin, savedPassword).subscribe(function (data) {
              _this.userStore.loginUser(data);

              _this.waitingStore.deactivateLoading(); // this.router.navigate(["", "profile"]).then();

            }, function () {
              _this.cookieService.deleteCookie("login");

              _this.cookieService.deleteCookie("password");

              _this.waitingStore.deactivateLoading();
            });
          } // if (this.cookieService.checkInfo("theme")) {
          //   if (this.cookieService.checkInfo("theme") === "true") {
          //     console.log(this.cookieService.checkInfo("theme"));
          //     this.themeStore.toggleTheme();
          //   }
          //   return;
          // }
          // const currentHour = new Date().getHours();
          // if ((currentHour >= 20 && currentHour < 24) || (0 <= currentHour && currentHour <= 7)) {
          //   this.themeStore.toggleTheme();
          // }

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
            _this2.showSign = !user;

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


    var _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/education/education.component */
    "./src/app/components/education/education.component.ts");
    /* harmony import */


    var _components_education_materials_materials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/education/materials/materials.component */
    "./src/app/components/education/materials/materials.component.ts");
    /* harmony import */


    var _components_education_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/education/progress/progress.component */
    "./src/app/components/education/progress/progress.component.ts");
    /* harmony import */


    var _components_education_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/education/tasks/tasks.component */
    "./src/app/components/education/tasks/tasks.component.ts");
    /* harmony import */


    var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/home-page/home-page.component */
    "./src/app/components/home-page/home-page.component.ts");
    /* harmony import */


    var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/notifications/notifications.component */
    "./src/app/components/notifications/notifications.component.ts");
    /* harmony import */


    var _components_popup_confirm_popup_confirm_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/popup-confirm/popup-confirm.component */
    "./src/app/components/popup-confirm/popup-confirm.component.ts");
    /* harmony import */


    var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/profile/profile.component */
    "./src/app/components/profile/profile.component.ts");
    /* harmony import */


    var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/settings/settings.component */
    "./src/app/components/settings/settings.component.ts");
    /* harmony import */


    var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/sign-in-form/sign-in-form.component */
    "./src/app/components/sign-in-form/sign-in-form.component.ts");
    /* harmony import */


    var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/sign-up-form/sign-up-form.component */
    "./src/app/components/sign-up-form/sign-up-form.component.ts");
    /* harmony import */


    var _components_task_creator_task_creator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/task-creator/task-creator.component */
    "./src/app/components/task-creator/task-creator.component.ts");
    /* harmony import */


    var _components_test_creator_test_creator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/test-creator/test-creator.component */
    "./src/app/components/test-creator/test-creator.component.ts");
    /* harmony import */


    var _components_test_task_test_task_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/test-task/test-task.component */
    "./src/app/components/test-task/test-task.component.ts");
    /* harmony import */


    var _directives_change_image_change_image_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./directives/change-image/change-image.directive */
    "./src/app/directives/change-image/change-image.directive.ts");
    /* harmony import */


    var _directives_resize_resize_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./directives/resize/resize.directive */
    "./src/app/directives/resize/resize.directive.ts");
    /* harmony import */


    var _directives_set_status_set_status_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./directives/set-status/set-status.directive */
    "./src/app/directives/set-status/set-status.directive.ts");
    /* harmony import */


    var _directives_show_password_show_password_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./directives/show-password/show-password.directive */
    "./src/app/directives/show-password/show-password.directive.ts");
    /* harmony import */


    var _services_material_service_material_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/material-service/material.service */
    "./src/app/services/material-service/material.service.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./store/reducers/app.reducers */
    "./src/app/store/reducers/app.reducers.ts");
    /* harmony import */


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./store/services/waiting-store.service/waiting-store.service */
    "./src/app/store/services/waiting-store.service/waiting-store.service.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_18__["SignUpFormComponent"], _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_17__["SignInFormComponent"], _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_12__["HomePageComponent"], _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _directives_show_password_show_password_directive__WEBPACK_IMPORTED_MODULE_25__["ShowPasswordDirective"], _directives_change_image_change_image_directive__WEBPACK_IMPORTED_MODULE_22__["ChangeImageDirective"], _directives_set_status_set_status_directive__WEBPACK_IMPORTED_MODULE_24__["SetStatusDirective"], _components_popup_confirm_popup_confirm_component__WEBPACK_IMPORTED_MODULE_14__["PopupConfirmComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"], _components_test_creator_test_creator_component__WEBPACK_IMPORTED_MODULE_20__["TestCreatorComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"], _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_13__["NotificationsComponent"], _components_task_creator_task_creator_component__WEBPACK_IMPORTED_MODULE_19__["TaskCreatorComponent"], _components_education_materials_materials_component__WEBPACK_IMPORTED_MODULE_9__["MaterialsComponent"], _components_education_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_11__["TasksComponent"], _components_education_progress_progress_component__WEBPACK_IMPORTED_MODULE_10__["ProgressComponent"], _components_test_task_test_task_component__WEBPACK_IMPORTED_MODULE_21__["TestTaskComponent"], _directives_resize_resize_directive__WEBPACK_IMPORTED_MODULE_23__["ResizeDirective"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_28__["appReducers"], {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      providers: [_services_user_service_user_service__WEBPACK_IMPORTED_MODULE_27__["UserService"], _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_30__["UserStoreService"], _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_29__["ThemeStoreService"], _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_31__["WaitingStoreService"], _services_material_service_material_service__WEBPACK_IMPORTED_MODULE_26__["MaterialService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/education/education.component.less":
  /*!***************************************************************!*\
    !*** ./src/app/components/education/education.component.less ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEducationEducationComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n  border-radius: 0 5px 5px 5px;\n  min-width: 300px;\n}\n.tile {\n  position: relative;\n  min-width: 80px;\n  width: 10%;\n  max-width: 110px;\n  height: 140px;\n  float: left;\n  margin: 5px 10px;\n  padding: 20px 10px;\n}\n.tile-title {\n  word-break: break-all;\n  line-height: 1.25em;\n  height: 2.5em;\n  overflow-y: hidden;\n  max-width: 100px;\n  width: 90%;\n  min-width: 80px;\n  text-align: justify;\n  margin: auto;\n}\n.tile-format {\n  padding: 5px 10px;\n  position: absolute;\n  top: 55px;\n  left: 20%;\n  min-width: 20px;\n  right: 20%;\n}\n.px50-padding-left {\n  padding-left: 50px;\n}\n.margin-left {\n  margin-left: auto;\n}\n.px10margin-right {\n  margin-right: 10px;\n}\n.chosen-view-mark {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  position: absolute;\n  z-index: 0;\n  background: #c9c9c9;\n  top: 0;\n  bottom: 0;\n}\n.table-view {\n  left: 50%;\n  right: 0;\n}\n.tile-view {\n  left: 0;\n  right: 50%;\n}\n.view {\n  position: relative;\n  cursor: pointer;\n  margin: auto 20px auto 60px;\n}\n.grey-text {\n  color: grey;\n}\n.table {\n  margin: 10px 20px;\n  border-collapse: separate;\n  border-spacing: 0 10px;\n}\n.left-cell {\n  width: 4em;\n  padding: 5px 10px;\n}\n.medial-cell {\n  width: 10em;\n  text-align: center;\n  padding: 0 10px;\n}\n.small-cell {\n  width: 1.2em;\n  padding-left: 10px;\n}\n.align-cell {\n  margin: auto 20px auto auto;\n}\n.table-left-cell {\n  margin-left: 20px;\n}\n.head {\n  color: grey;\n  font-style: italic;\n  text-decoration: none;\n}\n.table-simple-cell {\n  margin: auto 20px;\n  min-width: 200px;\n  max-width: 700px;\n}\n.author {\n  color: grey;\n  width: 10em;\n}\n.author:hover {\n  text-decoration: underline;\n}\n.date-time {\n  color: grey;\n  margin: auto 60px auto 20px;\n}\n.table-right-cell {\n  margin: auto 20px auto auto;\n}\n.table-row {\n  position: relative;\n  cursor: pointer;\n}\n.empty {\n  width: 5em;\n  padding: 5px 10px;\n}\n.file-format {\n  text-align: center;\n  border-radius: 5px;\n  background: #90b2c7;\n  color: white;\n  transition: all 500ms ease;\n}\n.fixed-width {\n  min-width: 180px;\n  flex-grow: 1;\n}\n.button {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.merge-to-right {\n  height: 1em;\n  width: 1em;\n  margin: auto 5px auto auto;\n}\n.margin-newest {\n  margin-right: 5px;\n  margin-left: 10px;\n}\n.margin-oldest {\n  margin-right: 10px;\n  margin-left: 5px;\n}\n.sort-phrase {\n  color: grey;\n  font-style: italic;\n  text-align: center;\n  width: 130px;\n}\n.search-input {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  border: none;\n  padding: 0 5px 0 10px;\n  text-align: left;\n  font-style: italic;\n  color: grey;\n  width: 130px;\n}\n.panel {\n  position: relative;\n  display: flex;\n  height: 38px;\n  padding-bottom: 4px;\n  margin: 0 20px;\n  border-bottom: 0.05em solid rgba(0, 0, 0, 0.15);\n}\n.panel-function {\n  transition: all 500ms ease;\n  position: relative;\n  outline: none;\n  padding: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.aligned-icon {\n  margin-left: auto;\n}\n.function-icon {\n  height: 1em;\n  width: 1em;\n  margin: auto;\n}\n.settings {\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n}\n.settings-control {\n  display: flex;\n  transition: all 500ms ease;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-radius: 5px;\n  padding: 0 13px;\n}\n.settings-control-img {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 1em;\n  margin: auto;\n}\n.settings-control:hover {\n  background: rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.settings-views {\n  display: flex;\n  transition: all 500ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  z-index: 1;\n  padding: 0 13px;\n}\n.settings-views:hover {\n  cursor: pointer;\n}\n.add-button {\n  transition: all 500ms ease;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  background: transparent;\n  padding: 0 13px;\n  width: 175px;\n}\n.add-button:hover {\n  background: rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.button-action {\n  flex-grow: 1;\n  text-align: center;\n  font-size: 16px;\n}\n.first-link {\n  border-top-left-radius: 5px;\n}\n.last-link {\n  border-top-right-radius: 5px;\n}\n.link {\n  transition: all 250ms ease;\n  outline: none;\n  padding: 5px 10px 0 10px;\n  background: #f5f5f5b8;\n  margin: 0;\n}\n.chosen-link {\n  background: #ffffff;\n}\n.chosen-link .link-button {\n  border-top: none;\n  border-right: none;\n  border-bottom: 2px solid darkred;\n  border-left: none;\n}\n.link-button {\n  transition: all 250ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-top: none;\n  border-right: none;\n  border-bottom: 2px solid transparent;\n  border-left: none;\n  width: 7em;\n  padding: 5px 0;\n  background: transparent;\n}\n.link-button:hover {\n  border-bottom-color: #d9d9d9;\n}\n.empty-phrase {\n  font-style: italic;\n  text-align: center;\n  margin: auto;\n  padding: 20px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9lZHVjYXRpb24vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBOFhFLGFBQUE7RUFDQSxzQkFBQTtFQTdYQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5QkY7QURpQ0E7RUEwSEUsa0JBQUE7RUF4SEEsaUJBQUE7RUFDQSxVQUFBO0FDL0JGO0FEa0NBO0VBNEtFLGlCQUFBO0VBQ0Esa0JBQUE7RUEzS0EsVUFBQTtBQy9CRjtBRGtDQTtFQXFaRSxrQkFBQTtFQXRDQSxhQUFBO0VBckhBLGtDQUFBO0VBdFBBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNFLCtCQUFBO0FDL0JKO0FEbUNBO0VBQ0UsZ0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBO0VBbVZFLGFBQUE7RUFDQSxzQkFBQTtFQWpIQSxrQ0FBQTtFQWhPQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHdDQUFBO0FDbkNGO0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR5Q0E7RUFvTUUsMEJBQUE7RUFsTUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ3ZDRjtBRHdDRTtFQUNFLGVBQUE7QUN0Q0o7QUR3Q0U7RUFDRSxZQUFBO0FDdENKO0FEMENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDeENGO0FENENFO0VBOFJBLGFBQUE7RUFDQSxzQkFBQTtFQXhKQSxhQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtFQXJJRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDeENKO0FEb0pFO0VBQ0UsZUFBQTtBQ2xKSjtBRHdDRTtFQTdCQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUF1QkUsWUFBQTtBQzlCSjtBRGtDQTtFQXVRRSxhQUFBO0VBQ0Esc0JBQUE7RUF0UUEsa0JBQUE7RUFDQSxpQkFBQTtBQy9CRjtBRGdDRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUM5Qko7QURtQ0E7RUFDRSxrQkFBQTtBQ2pDRjtBRG9DQTtFQUNFLGlCQUFBO0FDbENGO0FEcUNBO0VBQ0Usa0JBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxrQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGlCQUFBO0FDckNGO0FEd0NBO0VBQ0UsZ0JBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxpQkFBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSxpQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQUFBO0FDMUNGO0FENkNBO0VBQ0UsaUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxrQkFBQTtBQzVDRjtBRCtDQTtFQUNFLGtCQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsWUFBQTtBQzlDRjtBRGlEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUMvQ0Y7QURrREE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDaERGO0FEbURBO0VBQ0UsZ0JBQUE7QUNqREY7QURvREE7RUFDRSxnQkFBQTtBQ2xERjtBRHFEQTtFQUNFLG1CQUFBO0FDbkRGO0FEdURBO0VBQ0Usa0JBQUE7QUNyREY7QUR3REE7RUFDRSxlQUFBO0FDdERGO0FEMERFO0VBQ0UsZUFBQTtBQ3hESjtBRDhEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQzVERjtBRCtEQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0FDN0RGO0FEZ0VBO0VBQ0Usa0JBQUE7QUM5REY7QURpRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDL0RGO0FEa0VBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDaEVGO0FEbUVBO0VBQ0Usa0JBQUE7QUNqRUY7QURvRUE7RUFDRSxtQkFBQTtBQ2xFRjtBRHFFQTtFQUNFLDBCQUFBO0FDbkVGO0FEc0VBO0VBQ0UsMEJBQUE7QUNwRUY7QUR1RUE7RUFDRSxrQ0FBQTtBQ3JFRjtBRHdFQTtFQUNFLGlCQUFBO0FDdEVGO0FEeUVBO0VBOUNFLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VBeUNBLGlCQUFBO0VBT0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3RFRjtBREtFO0VBQ0UsZUFBQTtBQ0hKO0FEc0VBO0VBQ0UsWUFBQTtBQ3BFRjtBRHVFQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNyRUY7QUR3RUE7RUFDRSxvQkFBQTtBQ3RFRjtBRHlFQTtFQUNFLGFBQUE7QUN2RUY7QUQwRUE7RUFDRSxlQUFBO0FDeEVGO0FEMkVBO0VBQ0UsZUFBQTtBQ3pFRjtBRDRFQTtFQUNFLGVBQUE7QUMxRUY7QUQ2RUE7RUFDRSxtQkFBQTtBQzNFRjtBRCtFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUM3RUY7QURnRkE7RUFDRSxnQkFBQTtBQzlFRjtBRGlGQTtFQUNFLGNBQUE7QUMvRUY7QURrRkE7RUFDRSxjQUFBO0FDaEZGO0FEbUZBO0VBQ0Usa0JBQUE7QUNqRkY7QURvRkE7RUFDRSx3QkFBQTtBQ2xGRjtBRHFGQTtFQUNFLGtCQUFBO0FDbkZGO0FEc0ZBO0VBQ0Usd0JBQUE7QUNwRkY7QUR1RkE7RUFDRSxtQkFBQTtBQ3JGRjtBRHdGQTtFQUNFLGNBQUE7QUN0RkY7QUQwRkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDeEZGO0FEMkZBO0VBQ0UsWUFBQTtBQ3pGRjtBRDRGQTtFQUNFLHdCQUFBO0FDMUZGO0FENkZBO0VBQ0UscUJBQUE7QUMzRkY7QUQ4RkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUM1RkY7QUQrRkE7RUFDRSxhQUFBO0FDN0ZGO0FEZ0dBO0VBQ0Usa0NBQUE7RUFDQSxhQUFBO0FDOUZGO0FEaUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUMvRkY7QURrR0E7RUFDRSxZQUFBO0FDaEdGO0FEbUdBO0VBN0tFLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VBNktBLFdBQUE7QUMvRkY7QURrR0E7RUVoUkUsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtFRmdSQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDOUZGO0FEaUdBO0VFeFJFLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUZ3UkEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDN0ZGO0FEZ0dBO0VBQ0Usa0JBQUE7QUM5RkY7QURpR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDL0ZGO0FEa0dBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNoR0Y7QURtR0E7RUF0TEUsMEJBQUE7RUF3TEEsa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNqR0Y7QURrR0U7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQXZPRixhQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtBQ3dJRjtBRGtHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNoR0Y7QURpR0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDL0ZKO0FEbUdBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBM05BLDBCQUFBO0FDMkhGO0FEa0dFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQS9ORiwwQkFBQTtBQ2dJRjtBRGlHSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUMvRk47QURtR0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUF6T0EsMEJBQUE7QUN5SUY7QURrR0U7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBN09GLDBCQUFBO0FDOElGO0FEaUdJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQy9GTjtBRG9HQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBelBBLDBCQUFBO0FDd0pGO0FEcUdBO0VBQ0UsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFoUUEsMEJBQUE7QUM4SkY7QURzR0E7RUFDRSxRQUFBO0FDcEdGO0FEdUdBO0VBaEpFLGFBQUE7RUFDQSxzQkFBQTtFQWlKQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ3BHRjtBRHVHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFuUkEsMEJBQUE7QUMrS0Y7QUR3R0E7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUExUkEsMEJBQUE7QUNxTEY7QUR5R0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ3ZHRjtBRDBHQTtFQUNFLG9DQUFBO0FDeEdGO0FEMkdBO0VBQ0UsaUNBQUE7QUN6R0Y7QUQ0R0E7RUFDRSxvQ0FBQTtBQzFHRjtBRDZHQTtFQUNFLGlDQUFBO0FDM0dGO0FEOEdBO0VBQ0UsY0FBQTtBQzVHRjtBRCtHQTtFQUNFLGNBQUE7QUM3R0Y7QURnSEE7RUFwTUUsYUFBQTtFQUNBLHNCQUFBO0VBcU1BLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUM3R0Y7QURnSEE7RUFDRSx5Q0FBQTtBQzlHRjtBRCtHRTtFQUNFLHVDQUFBO0FDN0dKO0FEaUhBO0VBQ0UsK0NBQUE7QUMvR0Y7QURnSEU7RUFDRSw2Q0FBQTtBQzlHSjtBQ2pnQkE7RUZ5WkUsYUFBQTtFQUNBLHNCQUFBO0VFeFpBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FEb2dCRjtBQ2pnQkE7RUY2YkUsa0JBQUE7RUUzYkEsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRG1nQkY7QUNoZ0JBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURrZ0JGO0FDL2ZBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QURpZ0JGO0FDOWZBO0VBQ0Usa0JBQUE7QURnZ0JGO0FDN2ZBO0VBQ0UsaUJBQUE7QUQrZkY7QUM1ZkE7RUFDRSxrQkFBQTtBRDhmRjtBQzNmQTtFRjhPRSwwQkFBQTtFRTVPQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUQ2ZkY7QUMxZkE7RUFDRSxTQUFBO0VBQ0EsUUFBQTtBRDRmRjtBQ3pmQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0FEMmZGO0FDeGZBO0VGNlhFLGtCQUFBO0VFM1hBLGVBQUE7RUFDQSwyQkFBQTtBRDBmRjtBQ3ZmQTtFQUNFLFdBQUE7QUR5ZkY7QUN0ZkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUR3ZkY7QUNyZkE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUR1ZkY7QUNwZkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEc2ZGO0FDbmZBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FEcWZGO0FDbGZBO0VBQ0UsMkJBQUE7QURvZkY7QUNqZkE7RUFDRSxpQkFBQTtBRG1mRjtBQ2hmQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FEa2ZGO0FDL2VBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEaWZGO0FDOWVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QURnZkY7QUMvZUU7RUFDRSwwQkFBQTtBRGlmSjtBQzdlQTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtBRCtlRjtBQzVlQTtFQUNFLDJCQUFBO0FEOGVGO0FDM2VBO0VGd1RFLGtCQUFBO0VFdFRBLGVBQUE7QUQ2ZUY7QUMxZUE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7QUQ0ZUY7QUN6ZUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VGdUlBLDBCQUFBO0FDcVdGO0FDeGVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FEMGVGO0FDdmVBO0VBQ0UsZUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBRHllRjtBQ3RlQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUR3ZUY7QUNyZUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FEdWVGO0FDcGVBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBRHNlRjtBQ25lQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBRHFlRjtBQ2xlQTtFQTVCRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBNEJBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRHNlRjtBQ25lQTtFRjBQRSxrQkFBQTtFQXRDQSxhQUFBO0VFak5BLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBRHFlRjtBQ2xlQTtFRjhFRSwwQkFBQTtFQW1LQSxrQkFBQTtFRTlPQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FEb2VGO0FDdmRBO0VBQ0UsaUJBQUE7QUR5ZEY7QUN0ZEE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUR3ZEY7QUNyZEE7RUZxTkUsa0JBQUE7RUF0Q0EsYUFBQTtFRTVLQSxjQUFBO0FEdWRGO0FDdGRFO0VGMktBLGFBQUE7RUE3SEEsMEJBQUE7RUEvQkEsYUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUViRSxrQkFBQTtFQUNBLGVBQUE7QUQwZEo7QUN6ZEk7RUZTRixhQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtFRVRJLFVBQUE7RUFDQSxZQUFBO0FENmROO0FDM2RJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FENmROO0FDMWRFO0VGMkpBLGFBQUE7RUE3SEEsMEJBQUE7RUE5QkEseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtFRUlFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBRDRkSjtBRGpmRTtFQUNFLGVBQUE7QUNtZko7QUMzZEE7RUZtQkUsMEJBQUE7RUFtS0Esa0JBQUE7RUF0Q0EsYUFBQTtFRTVJQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRDZkRjtBQzVkRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBRDhkSjtBQzFkQTtFRndCRSxZQUFBO0VFdEJBLGtCQUFBO0VBQ0EsZUFBQTtBRDRkRjtBQ3pkQTtFQUNFLDJCQUFBO0FEMmRGO0FDeGRBO0VBQ0UsNEJBQUE7QUQwZEY7QUN2ZEE7RUZYRSwwQkFBQTtFRWFBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBRHlkRjtBQ3RkQTtFQUNFLG1CQUFBO0FEd2RGO0FDemRBO0VBR0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7QUR5ZEo7QUMvY0E7RUZuQ0UsMEJBQUE7RUVqSUEsZUFBQTtFQUNBLGtDQUFBO0VGNkZBLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VFd0VBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBRG9kRjtBQ25kRTtFQUNFLDRCQUFBO0FEcWRKO0FDamRBO0VGaEZFLGtCQUFBO0VFa0ZBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QURtZEYiLCJmaWxlIjoiLi4vY29tcG9uZW50cy9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5AbWVkaWFsLXNwYWNlOiA3cHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4yZW07XG5AaHVnZS1pY29uLXdpZHRoOiA3MHB4O1xuQHNtYWxsZXN0LWljb24td2lkdGg6IDAuN2VtO1xuXG5AYmFja2dyb3VuZC1kYXJrLXRoZW1lOiAjMWQxZDFkO1xuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XG5AdGV4dC1saWdodC1jb2xvcjogbGlnaHRlbihibGFjaywgMTAlKTtcbkB0ZXh0LWRhcmstY29sb3I6IHdoaXRlO1xuXG5Ad2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5Ad2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDogIzI2MjgyOTtcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XG5cbkBsaWdodC10aGVtZS1ib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbkBmb250LXNpemU6IDE2cHg7XG5cbi8vIGNvbnRlbnRcbi5wYWdlIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgLnJpZ2h0LW1hcmdpbi1hdXRvO1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICB3aWR0aDogNzIlO1xufVxuXG4ucGFnZS11c2VyLXVuZGVmaW5lZCB7XG4gIC5ob3Jpem9udGFsLW1hcmdpbi1hdXRvO1xuICB3aWR0aDogNzIlO1xufVxuXG4uY29udHJvbC1idXR0b24ge1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIC5yb3ctZGlzcGxheTtcbiAgLmZvbnQtc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IEBtZWRpYWwtc3BhY2UgQHNwYWNlO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcbiAgfVxufVxuXG4uYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cblxuLmVkaXQtcGxhdGUge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIC5mb250LXNldDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxNSU7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIG1hcmdpbi10b3A6IEBzcGFjZTtcbn1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4vLyBkZXBlbmRzIG9uIHRoZW1lXG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogQGxpZ2h0LXRoZW1lLWJvcmRlci1jb2xvcjtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xufVxuXG4vLyB0eXBlc1xuLmZvcm0tYnV0dG9uIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMi4zZW07XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogYXV0bztcbiAgfVxufVxuXG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGxlc3Qtc3BhY2U7XG4gIHBhZGRpbmctcmlnaHQ6IEBzbWFsbGVzdC1zcGFjZTtcbn1cblxuLnBhc3N3b3JkIHtcbiAgJi1idXR0b24ge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAucG9pbnRlcjtcbiAgICAubm8tc2VsZWN0O1xuICAgIGJvcmRlci13aWR0aDogMC4wOWVtO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICAgIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbiAgfVxuXG4gICYtaW5wdXQge1xuICAgIC5pbnB1dDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG4gICYtbmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi8vIG1hcmdpbiBzZWN0aW9uXG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5yaWdodC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5yaWdodC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucmlnaHQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tcmlnaHQ6IEBzcGFjZTtcbn1cblxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtbWFyZ2luLTVwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubGVmdC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi00MHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogQHNwYWNlO1xufVxuXG4ubWFyZ2luLWF1dG8ge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnZlcnRpY2FsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnRvcC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnRvcC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi10b3A6IEBzcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLy8gcGFkZGluZyBzZWN0aW9uXG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiBAc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5wb2ludGVyIHtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vIGFsbCBtdXN0IGJlIGRvbmVcblxuLmJsaW5kLXRleHQge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuXG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG5cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbn1cblxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGluayB7XG4gIC5wb2ludGVyO1xuICAubm8tc2VsZWN0O1xuICAuYm9sZC10ZXh0O1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGNvbG9yOiAjNTk2YjlmO1xuICBtYXJnaW46IEBzcGFjZSBhdXRvO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi8vIGRvbmUgfCBob3Jpem9udGFsLW1hcmdpbi1hdXRvXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gQHNtYWxsLXNwYWNlO1xufVxuXG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi8vIGRvbmUgfCB2ZXJ0aWNhbC1tYXJnaW4tYXV0b1xuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLmxhcmdlLWljb24ge1xuICAubm8tc2VsZWN0O1xuICB3aWR0aDogQGh1Z2UtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnVzZXJuYW1lIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG4gIGhlaWdodDogMi43ZW07XG4gIHdpZHRoOiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgJi1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuNmVtO1xuICAgIGxlZnQ6IDAuNmVtO1xuICAgIGJvdHRvbTogMC42ZW07XG4gICAgcmlnaHQ6IDAuNmVtO1xuICAgIHdpZHRoOiAxLjNlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLm5vLXNlbGVjdDtcbiAgfVxufVxuXG4udGhlbWUge1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICAmLWljb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtZGFyay10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgICB9XG4gIH1cbn1cblxuLndpbmRvdy1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuXG4ubG9hZC1wb3B1cCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiBAc3BhY2UgQHNwYWNlICsgQHNtYWxsLXNwYWNlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6ICByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG5cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG5cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cblxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cblxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuXG4udXNlci1wYW5lbCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IEBzbWFsbC1zcGFjZTtcbiAgcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2ZpbGUtbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMxKTtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgwLCAwLCAwLCAwLjUxKSwgMTAlKTtcbiAgfVxufVxuXG4ucHJvZmlsZS1kYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSk7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSksIDEwJSk7XG4gIH1cbn1cbiIsIi5wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFnZS11c2VyLWRlZmluZWQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNzIlO1xufVxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzIlO1xufVxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250cm9sLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG59XG4uYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG4uZWRpdC1wbGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5wYWludC1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4uZm9ybS1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMi4zZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5mb3JtLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtLWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wYXNzd29yZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGJvcmRlci13aWR0aDogMC4wOWVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMS4yZW07XG59XG4ucGFzc3dvcmQtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhc3N3b3JkLWlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmZpZWxkLW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yaWdodC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5yaWdodC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucmlnaHQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtbWFyZ2luLTVwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5sZWZ0LW1hcmdpbi00MHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0yMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhvcml6b250YWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnZlcnRpY2FsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRvcC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm90dG9tLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ucG9pbnRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5uby1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbn1cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbn1cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5saW5rIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4ubGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIDA7XG59XG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIDEwcHg7XG59XG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4udmVydGljYWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byAwO1xufVxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNtYWxsZXN0LWljb24ge1xuICB3aWR0aDogMC43ZW07XG4gIGhlaWdodDogMC43ZW07XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5sYXJnZS1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICB3aWR0aDogNzBweDtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYTEwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMTAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zaWduLXVwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udXNlcm5hbWUge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgd2lkdGg6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi51c2VybmFtZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC42ZW07XG4gIGxlZnQ6IDAuNmVtO1xuICBib3R0b206IDAuNmVtO1xuICByaWdodDogMC42ZW07XG4gIHdpZHRoOiAxLjNlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4udGhlbWUge1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzEwMTAxMDtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxMDEwMTA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMzAzMDM7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzFkMWQxZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMjYyODI5O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi51c2VyLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLnByb2ZpbGUtbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMxKTtcbn1cbi5wcm9maWxlLWxpZ2h0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDAsIDAsIDAsIDAuNTEpO1xufVxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xufVxuLnByb2ZpbGUtZGFyazpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgyMDcsIDIwNywgMjA3LCAwLjcxKTtcbn1cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggNXB4O1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuLnRpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogODBweDtcbiAgd2lkdGg6IDEwJTtcbiAgbWF4LXdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi50aWxlLXRpdGxlIHtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBsaW5lLWhlaWdodDogMS4yNWVtO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1pbi13aWR0aDogODBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnRpbGUtZm9ybWF0IHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXB4O1xuICBsZWZ0OiAyMCU7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgcmlnaHQ6IDIwJTtcbn1cbi5weDUwLXBhZGRpbmctbGVmdCB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbn1cbi5tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnB4MTBtYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uY2hvc2VuLXZpZXctbWFyayB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZDogI2M5YzljOTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4udGFibGUtdmlldyB7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDA7XG59XG4udGlsZS12aWV3IHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDUwJTtcbn1cbi52aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogYXV0byAyMHB4IGF1dG8gNjBweDtcbn1cbi5ncmV5LXRleHQge1xuICBjb2xvcjogZ3JleTtcbn1cbi50YWJsZSB7XG4gIG1hcmdpbjogMTBweCAyMHB4O1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xufVxuLmxlZnQtY2VsbCB7XG4gIHdpZHRoOiA0ZW07XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLm1lZGlhbC1jZWxsIHtcbiAgd2lkdGg6IDEwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnNtYWxsLWNlbGwge1xuICB3aWR0aDogMS4yZW07XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5hbGlnbi1jZWxsIHtcbiAgbWFyZ2luOiBhdXRvIDIwcHggYXV0byBhdXRvO1xufVxuLnRhYmxlLWxlZnQtY2VsbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmhlYWQge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udGFibGUtc2ltcGxlLWNlbGwge1xuICBtYXJnaW46IGF1dG8gMjBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cbi5hdXRob3Ige1xuICBjb2xvcjogZ3JleTtcbiAgd2lkdGg6IDEwZW07XG59XG4uYXV0aG9yOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZGF0ZS10aW1lIHtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbjogYXV0byA2MHB4IGF1dG8gMjBweDtcbn1cbi50YWJsZS1yaWdodC1jZWxsIHtcbiAgbWFyZ2luOiBhdXRvIDIwcHggYXV0byBhdXRvO1xufVxuLnRhYmxlLXJvdyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmVtcHR5IHtcbiAgd2lkdGg6IDVlbTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZmlsZS1mb3JtYXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogIzkwYjJjNztcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5maXhlZC13aWR0aCB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5tZXJnZS10by1yaWdodCB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG8gNXB4IGF1dG8gYXV0bztcbn1cbi5tYXJnaW4tbmV3ZXN0IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1hcmdpbi1vbGRlc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uc29ydC1waHJhc2Uge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMzBweDtcbn1cbi5zZWFyY2gtaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAxMzBweDtcbn1cbi5wYW5lbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBtYXJnaW46IDAgMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMC4wNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucGFuZWwtZnVuY3Rpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5hbGlnbmVkLWljb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5mdW5jdGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zZXR0aW5ncyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uc2V0dGluZ3MtY29udHJvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMCAxM3B4O1xufVxuLnNldHRpbmdzLWNvbnRyb2wtaW1nIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG87XG59XG4uc2V0dGluZ3MtY29udHJvbDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zZXR0aW5ncy12aWV3cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTNweDtcbn1cbi5zZXR0aW5ncy12aWV3czpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMCAxM3B4O1xuICB3aWR0aDogMTc1cHg7XG59XG4uYWRkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b24tYWN0aW9uIHtcbiAgZmxleC1ncm93OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5maXJzdC1saW5rIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmxhc3QtbGluayB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubGluayB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweCAwIDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjViODtcbiAgbWFyZ2luOiAwO1xufVxuLmNob3Nlbi1saW5rIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi5jaG9zZW4tbGluayAubGluay1idXR0b24ge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrcmVkO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5saW5rLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIHdpZHRoOiA3ZW07XG4gIHBhZGRpbmc6IDVweCAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5saW5rLWJ1dHRvbjpob3ZlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNkOWQ5ZDk7XG59XG4uZW1wdHktcGhyYXNlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMjBweCAwO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGZvcm1hdC1jb2xvcjogIzg3YWZkMTtcbkBidG4tYm9yZGVyLXN0eWxlOiAycHggc29saWQgcmVkO1xuQHNsaW0tYm9yZGVyOiAwLjAxZW0gc29saWQgI2M5YzljOTtcblxuLmNvbnRlbnQge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xuICBib3JkZXItcmFkaXVzOiAwIEBib3JkZXItcmFkaXVzIEBib3JkZXItcmFkaXVzIEBib3JkZXItcmFkaXVzO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4udGlsZSB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICB3aWR0aDogMTAlO1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xuICBwYWRkaW5nOiBAc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4udGlsZS10aXRsZSB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICB3aWR0aDogOTAlO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpbGUtZm9ybWF0IHtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIGxlZnQ6IDIwJTtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICByaWdodDogMjAlO1xufVxuXG4ucHg1MC1wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5cbi5tYXJnaW4tbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucHgxMG1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNob3Nlbi12aWV3LW1hcmsge1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMDtcbiAgYmFja2dyb3VuZDogI2M5YzljOTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG5cbi50YWJsZS12aWV3IHtcbiAgbGVmdDogNTAlO1xuICByaWdodDogMDtcbn1cblxuLnRpbGUtdmlldyB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiA1MCU7XG59XG5cbi52aWV3IHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogYXV0byBAc3BhY2UgYXV0byAzICogQHNwYWNlO1xufVxuXG4uZ3JleS10ZXh0IHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi50YWJsZSB7XG4gIG1hcmdpbjogQHNtYWxsLXNwYWNlIEBzcGFjZTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1jZWxsIHtcbiAgd2lkdGg6IDRlbTtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLm1lZGlhbC1jZWxsIHtcbiAgd2lkdGg6IDEwZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbC1jZWxsIHtcbiAgd2lkdGg6IDEuMmVtO1xuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmFsaWduLWNlbGwge1xuICBtYXJnaW46IGF1dG8gQHNwYWNlIGF1dG8gYXV0bztcbn1cblxuLnRhYmxlLWxlZnQtY2VsbCB7XG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2U7XG59XG5cbi5oZWFkIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGFibGUtc2ltcGxlLWNlbGwge1xuICBtYXJnaW46IGF1dG8gQHNwYWNlO1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuXG4uYXV0aG9yIHtcbiAgY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAxMGVtO1xuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxufVxuXG4uZGF0ZS10aW1lIHtcbiAgY29sb3I6IGdyZXk7XG4gIG1hcmdpbjogYXV0byAzICogQHNwYWNlIGF1dG8gQHNwYWNlO1xufVxuXG4udGFibGUtcmlnaHQtY2VsbCB7XG4gIG1hcmdpbjogYXV0byBAc3BhY2UgYXV0byBhdXRvO1xufVxuXG4udGFibGUtcm93IHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lbXB0eSB7XG4gIHdpZHRoOiA1ZW07XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5maWxlLWZvcm1hdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6ICM5MGIyYzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5maXhlZC13aWR0aCB7XG4gIG1pbi13aWR0aDogMTgwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1lcmdlLXRvLXJpZ2h0IHtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbjogYXV0byBAc21hbGxlc3Qtc3BhY2UgYXV0byBhdXRvO1xufVxuXG4ubWFyZ2luLW5ld2VzdCB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsZXN0LXNwYWNlO1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubWFyZ2luLW9sZGVzdCB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICBtYXJnaW4tbGVmdDogQHNtYWxsZXN0LXNwYWNlO1xufVxuXG4uc29ydC1waHJhc2Uge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIC5idXR0b247XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCBAc21hbGxlc3Qtc3BhY2UgMCBAc21hbGwtc3BhY2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAxMzBweDtcbn1cblxuLnBhbmVsIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIGhlaWdodDogMzhweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgbWFyZ2luOiAwIEBzcGFjZTtcbiAgYm9yZGVyLWJvdHRvbTogMC4wNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5wYW5lbC1mdW5jdGlvbiB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi8vLmNsaWNrYWJsZSB7XG4gIC8vJjpob3ZlciB7XG4gIC8vICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAvLyAgY3Vyc29yOiBwb2ludGVyO1xuICAvLyAgLnNlYXJjaC1pbnB1dCB7XG4gIC8vICAgIGJhY2tncm91bmQ6ICNlY2VjZWM7XG4gIC8vICB9XG4gIC8vfVxuLy99XG5cbi5hbGlnbmVkLWljb24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmZ1bmN0aW9uLWljb24ge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc2V0dGluZ3Mge1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIC5yb3ctZGlzcGxheTtcbiAgZmxleC1zaHJpbms6IDA7XG4gICYtY29udHJvbCB7XG4gICAgLnJvdy1kaXNwbGF5O1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgIC5uby1zZWxlY3Q7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcGFkZGluZzogMCAxM3B4O1xuICAgICYtaW1nIHtcbiAgICAgIC5uby1zZWxlY3Q7XG4gICAgICB3aWR0aDogMWVtO1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG4gICYtdmlld3Mge1xuICAgIC5yb3ctZGlzcGxheTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAucG9pbnRlcjtcbiAgICAubm8tc2VsZWN0O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwIDEzcHg7XG4gIH1cbn1cblxuLmFkZC1idXR0b24ge1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgMTNweDtcbiAgd2lkdGg6IDE3NXB4O1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4uYnV0dG9uLWFjdGlvbiB7XG4gIC5mbGV4LWdyb3c7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xufVxuXG4uZmlyc3QtbGluayB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4ubGFzdC1saW5rIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4ubGluayB7XG4gIC5zbW9vdGgtZmFzdC1hbmltYXRpb247XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2UgMCBAc21hbGwtc3BhY2U7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjViODtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2hvc2VuLWxpbmsge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIC5saW5rLWJ1dHRvbiB7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGRhcmtyZWQ7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIH1cbn1cblxuLm5vdC1jaG9zZW4tbGluayB7XG4gIC5saW5rLWJ1dHRvbiB7XG5cbiAgfVxufVxuXG4ubGluay1idXR0b24ge1xuICAuc21vb3RoLWZhc3QtYW5pbWF0aW9uO1xuICAuYnV0dG9uO1xuICAubm8tc2VsZWN0O1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIHdpZHRoOiA3ZW07XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMTUlKTtcbiAgfVxufVxuXG4uZW1wdHktcGhyYXNlIHtcbiAgLml0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/education/education.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/education/education.component.ts ***!
    \*************************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppComponentsEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
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


    var _services_material_service_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/material-service/material.service */
    "./src/app/services/material-service/material.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _special_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../special/sort */
    "./src/app/components/special/sort.ts");

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent(userStore, materialService, router, activateRoute, cdr) {
        var _this3 = this;

        _classCallCheck(this, EducationComponent);

        this.userStore = userStore;
        this.materialService = materialService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.cdr = cdr;
        this.userEducationInfoNative = {
          materials: [],
          tasks: []
        };
        this.userEducationInfoDisplay = {
          materials: [],
          tasks: []
        };
        this.options = {
          sortOnOld: false,
          filterMode: "all",
          view: "tile",
          searchRequest: ""
        };
        this.educationMessages = _model_messages__WEBPACK_IMPORTED_MODULE_4__["messages"].education;
        this.fileUploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](""),
          submit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Загрузить")
        });

        if (!this.activateRoute.children.length) {
          this.router.navigate(["".concat(this.router.url, "/tasks")]).then();
        }

        this.router.events.subscribe(function (object) {
          if (object instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            var path = object.url.match(/\/[A-z]+($|[?]+)/)[0];
            _this3.section = path.match(/[A-z]+/)[0];
          }
        });
      }

      _createClass(EducationComponent, [{
        key: "compareQuery",
        value: function compareQuery() {
          this.queryParams = {
            view: this.options.view
          };
        }
      }, {
        key: "create",
        value: function create() {
          this.router.navigate(this.router.url.split(/[\/?]/).filter(function (item) {
            return !item.match(/[=]/);
          }), {
            queryParams: {
              create: true
            }
          }).then();
        }
      }, {
        key: "fileUpload",
        value: function fileUpload(event) {
          var file = event.target["files"][0];
          this.fileUploadForm.get("file").setValue(file);

          if (file) {
            console.log(file.name.match(/.[a-zA-Z]+$/)[0]);
          }

          var formData = new FormData();
          formData.append("material", file, file.name); // this.materialService.upload(18, formData).subscribe(
          //   (data) => console.log(data),
          // );
        }
      }, {
        key: "add",
        value: function add(sectionNumber) {
          if (sectionNumber === 1) {
            this.router.navigate(["", "create_task"]).then();
          }
        }
      }, {
        key: "sort",
        value: function sort() {
          this.sortOnNewest ? this.oldestFirst() : this.newestFirst();
          this.sortOnNewest = !this.sortOnNewest;
          this.options.sortOnOld = !this.sortOnNewest;
        }
      }, {
        key: "newestFirst",
        value: function newestFirst() {
          Object(_special_sort__WEBPACK_IMPORTED_MODULE_7__["newestSort"])(this.userEducationInfoDisplay[this.section]);
        }
      }, {
        key: "oldestFirst",
        value: function oldestFirst() {
          Object(_special_sort__WEBPACK_IMPORTED_MODULE_7__["oldestSort"])(this.userEducationInfoDisplay[this.section]);
        }
      }, {
        key: "filter",
        value: function filter() {
          switch (this.displayMode) {
            case 0:
              {
                this.displayMode += 1;
                this.displayUpload();
                break;
              }

            case 1:
              {
                this.displayMode += 1;
                this.displaySaved();
                break;
              }

            case 2:
              {
                this.displayMode = 0;
                this.displayAll();
                break;
              }
          }

          if (this.searchRequest) {
            this.search();
          }
        }
      }, {
        key: "displaySaved",
        value: function displaySaved() {
          this.userEducationInfoDisplay.materials = this.userEducationInfoNative.materials.filter(function (item) {
            return item.authorID !== 18;
          });
        }
      }, {
        key: "displayUpload",
        value: function displayUpload() {
          this.userEducationInfoDisplay.materials = this.userEducationInfoNative.materials.filter(function (item) {
            return item.authorID === 18;
          });
        }
      }, {
        key: "displayAll",
        value: function displayAll() {
          this.userEducationInfoDisplay.materials = this.userEducationInfoNative.materials;
        }
      }, {
        key: "search",
        value: function search() {
          var _this4 = this;

          switch (this.displayMode) {
            case 0:
              {
                this.displayAll();
                break;
              }

            case 1:
              {
                this.displayUpload();
                break;
              }

            case 2:
              {
                this.displaySaved();
                break;
              }
          }

          this.userEducationInfoDisplay.materials = this.userEducationInfoDisplay.materials.filter(function (item) {
            return item.title.toLowerCase().includes(_this4.searchRequest.toLowerCase());
          });
        }
      }, {
        key: "clear",
        value: function clear() {
          this.searchRequest = "";
          this.displayMode = 0;
          this.sortOnNewest = true;
          this.displayAll();
          this.newestFirst();
        }
      }, {
        key: "refresh",
        value: function refresh() {
          var urlSegments = this.router.url.split(/[\/?]/).filter(function (item) {
            return !item.match(/[=]/);
          });
          this.compareQuery();
          this.router.navigate(urlSegments, {
            queryParams: this.queryParams
          }).then();
        }
      }, {
        key: "toTable",
        value: function toTable() {
          this.options.view = "table";
          this.refresh();
          this.check();
        }
      }, {
        key: "toTile",
        value: function toTile() {
          this.options.view = "tile";
          this.refresh();
          this.check();
        }
      }, {
        key: "check",
        value: function check() {
          this.cdr.markForCheck();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          if (Object.keys(this.activateRoute.snapshot.queryParams)) {
            var params = this.activateRoute.snapshot.queryParams;

            if (params["view"]) {
              this.options.view = params["view"];
              this.compareQuery();
            }
          }

          this.userStore.loadUserInfo().subscribe(function (user) {
            if (user) {
              var userExisted = user;
              _this5.userEducationInfo = userExisted.education;

              _this5.cdr.markForCheck();
            }
          });
          this.userEducationInfoNative.materials.push({
            authorID: 18,
            title: "Лекция по электродинамике",
            link: "[href://localhost:4200/here].docx",
            addDate: new Date("2019-12-05")
          }, {
            authorID: 13,
            title: "Лекция по математике",
            link: "[href://localhost:4200/here].mp3",
            addDate: new Date()
          }, {
            authorID: 18,
            title: "Лекция по электронике",
            link: "[href://localhost:4200/here].json",
            addDate: new Date("2019-11-03 12:01")
          }, {
            authorID: 12,
            title: "Методичка 'Программирование'",
            link: "[href://localhost:4200/here].docx",
            addDate: new Date("2014-07-15 0:0")
          }, {
            authorID: 12,
            title: "Методичка",
            link: "[href://localhost:4200/here].docx",
            addDate: new Date("2014-07-15 0:0")
          }, {
            authorID: 12,
            title: "Методичка 'Программирование'",
            link: "[href://localhost:4200/here].docx",
            addDate: new Date("2014-07-15 0:0")
          });
          this.displayMode = 0;
          this.sortOnNewest = true;
          this.tableView = false;
          this.displayAll();
          this.newestFirst();
        }
      }]);

      return EducationComponent;
    }();

    EducationComponent.ctorParameters = function () {
      return [{
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_6__["UserStoreService"]
      }, {
        type: _services_material_service_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-education",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./education.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./education.component.less */
      "./src/app/components/education/education.component.less"))["default"]]
    })], EducationComponent);
    /***/
  },

  /***/
  "./src/app/components/education/materials/materials.component.less":
  /*!*************************************************************************!*\
    !*** ./src/app/components/education/materials/materials.component.less ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEducationMaterialsMaterialsComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n  border-radius: 0 5px 5px 5px;\n  min-width: 300px;\n}\n.tile {\n  position: relative;\n  min-width: 80px;\n  width: 10%;\n  max-width: 110px;\n  height: 140px;\n  float: left;\n  margin: 5px 10px;\n  padding: 20px 10px;\n}\n.tile-title {\n  word-break: break-all;\n  line-height: 1.25em;\n  height: 2.5em;\n  overflow-y: hidden;\n  max-width: 100px;\n  width: 90%;\n  min-width: 80px;\n  text-align: justify;\n  margin: auto;\n}\n.tile-format {\n  padding: 5px 10px;\n  position: absolute;\n  top: 55px;\n  left: 20%;\n  min-width: 20px;\n  right: 20%;\n}\n.px50-padding-left {\n  padding-left: 50px;\n}\n.margin-left {\n  margin-left: auto;\n}\n.px10margin-right {\n  margin-right: 10px;\n}\n.chosen-view-mark {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  position: absolute;\n  z-index: 0;\n  background: #c9c9c9;\n  top: 0;\n  bottom: 0;\n}\n.table-view {\n  left: 50%;\n  right: 0;\n}\n.tile-view {\n  left: 0;\n  right: 50%;\n}\n.view {\n  position: relative;\n  cursor: pointer;\n  margin: auto 20px auto 60px;\n}\n.grey-text {\n  color: grey;\n}\n.table {\n  margin: 10px 20px;\n  border-collapse: separate;\n  border-spacing: 0 10px;\n}\n.left-cell {\n  width: 4em;\n  padding: 5px 10px;\n}\n.medial-cell {\n  width: 10em;\n  text-align: center;\n  padding: 0 10px;\n}\n.small-cell {\n  width: 1.2em;\n  padding-left: 10px;\n}\n.align-cell {\n  margin: auto 20px auto auto;\n}\n.table-left-cell {\n  margin-left: 20px;\n}\n.head {\n  color: grey;\n  font-style: italic;\n  text-decoration: none;\n}\n.table-simple-cell {\n  margin: auto 20px;\n  min-width: 200px;\n  max-width: 700px;\n}\n.author {\n  color: grey;\n  width: 10em;\n}\n.author:hover {\n  text-decoration: underline;\n}\n.date-time {\n  color: grey;\n  margin: auto 60px auto 20px;\n}\n.table-right-cell {\n  margin: auto 20px auto auto;\n}\n.table-row {\n  position: relative;\n  cursor: pointer;\n}\n.empty {\n  width: 5em;\n  padding: 5px 10px;\n}\n.file-format {\n  text-align: center;\n  border-radius: 5px;\n  background: #90b2c7;\n  color: white;\n  transition: all 500ms ease;\n}\n.fixed-width {\n  min-width: 180px;\n  flex-grow: 1;\n}\n.button {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.merge-to-right {\n  height: 1em;\n  width: 1em;\n  margin: auto 5px auto auto;\n}\n.margin-newest {\n  margin-right: 5px;\n  margin-left: 10px;\n}\n.margin-oldest {\n  margin-right: 10px;\n  margin-left: 5px;\n}\n.sort-phrase {\n  color: grey;\n  font-style: italic;\n  text-align: center;\n  width: 130px;\n}\n.search-input {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  border: none;\n  padding: 0 5px 0 10px;\n  text-align: left;\n  font-style: italic;\n  color: grey;\n  width: 130px;\n}\n.panel {\n  position: relative;\n  display: flex;\n  height: 38px;\n  padding-bottom: 4px;\n  margin: 0 20px;\n  border-bottom: 0.05em solid rgba(0, 0, 0, 0.15);\n}\n.panel-function {\n  transition: all 500ms ease;\n  position: relative;\n  outline: none;\n  padding: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.aligned-icon {\n  margin-left: auto;\n}\n.function-icon {\n  height: 1em;\n  width: 1em;\n  margin: auto;\n}\n.settings {\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n}\n.settings-control {\n  display: flex;\n  transition: all 500ms ease;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-radius: 5px;\n  padding: 0 13px;\n}\n.settings-control-img {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 1em;\n  margin: auto;\n}\n.settings-control:hover {\n  background: rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.settings-views {\n  display: flex;\n  transition: all 500ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  z-index: 1;\n  padding: 0 13px;\n}\n.settings-views:hover {\n  cursor: pointer;\n}\n.add-button {\n  transition: all 500ms ease;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  background: transparent;\n  padding: 0 13px;\n  width: 175px;\n}\n.add-button:hover {\n  background: rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.button-action {\n  flex-grow: 1;\n  text-align: center;\n  font-size: 16px;\n}\n.first-link {\n  border-top-left-radius: 5px;\n}\n.last-link {\n  border-top-right-radius: 5px;\n}\n.link {\n  transition: all 250ms ease;\n  outline: none;\n  padding: 5px 10px 0 10px;\n  background: #f5f5f5b8;\n  margin: 0;\n}\n.chosen-link {\n  background: #ffffff;\n}\n.chosen-link .link-button {\n  border-top: none;\n  border-right: none;\n  border-bottom: 2px solid darkred;\n  border-left: none;\n}\n.link-button {\n  transition: all 250ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-top: none;\n  border-right: none;\n  border-bottom: 2px solid transparent;\n  border-left: none;\n  width: 7em;\n  padding: 5px 0;\n  background: transparent;\n}\n.link-button:hover {\n  border-bottom-color: #d9d9d9;\n}\n.empty-phrase {\n  font-style: italic;\n  text-align: center;\n  margin: auto;\n  padding: 20px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uL21hdGVyaWFscy9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsIi4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uL21hdGVyaWFscy9tYXRlcmlhbHMuY29tcG9uZW50Lmxlc3MiLCIuLi9jb21wb25lbnRzL2VkdWNhdGlvbi9tYXRlcmlhbHMvTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJDO0VBa1d3QixhQUFBO0VBQ2hCLHNCQUFBO0VBaldBLGdCQUFBO0VBRUQsaUJBQUE7RUFDQyxrQ0FBQTtFQUNRLGVBQUE7RUFDRyxrQkFBQTtBQzVCcEI7QUQ2QndCO0VBb0hYLGtCQUFBO0VBaEhULGlCQUFBO0VBQ08sVUFBQTtBQzdCWDtBRDhCRztFQStKVyxpQkFBQTtFQUNBLGtCQUFBO0VBNUpULFVBQUE7QUM3Qkw7QUQ2Qm9CO0VBNFhILGtCQUFBO0VBeENOLGFBQUE7RUE3R1Qsa0NBQUE7RUFqT0YsZUFBQTtFQUFtQixpQkFBQTtFQUVQLGFBQUE7RUFDRyxlQUFBO0VBQ0QsdUJBQUE7RUFDUCxrQkFBQTtBQzdCUDtBRCtCRTtFQUFjLCtCQUFBO0FDNUJoQjtBRDZCNEI7RUFDaEIsZ0JBQUE7QUMzQlo7QUQ0Qm9CO0VBQWdCLGNBQUE7QUN6QnBDO0FENkJPO0VBNFRrQixhQUFBO0VBQ2hCLHNCQUFBO0VBMUdQLGtDQUFBO0VBL01VLGtCQUFBO0VBSU4sZ0JBQUE7RUFDSyxVQUFBO0VBQ04sZ0JBQUE7RUFDTSxpQkFBQTtFQUNMLGdCQUFBO0FDOUJOO0FEK0JRO0VBQ0Msd0NBQUE7QUM3QlQ7QURnQ0E7RUFHRyxtQkFBQTtFQUVGLHFCQUFBO0VBRW9CLGNBQUE7QUNsQ3JCO0FEbUNx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dGVyaWFscy9tYXRlcmlhbHMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAc21hbGxlc3Qtc3BhY2U6IDVweDtcclxuQHNtYWxsLXNwYWNlOiAxMHB4O1xyXG5AbWVkaWFsLXNwYWNlOiA3cHg7XHJcbkBzcGFjZTogMjBweDtcclxuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xyXG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcclxuQGdyZWVuLWNvbG9yOiAjMDBhMTAwO1xyXG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XHJcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xyXG5AZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGZlZjtcclxuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XHJcbkBib3JkZXItcmFkaXVzOiA1cHg7XHJcbkBmb3JtLXdpZHRoOiAyNDBweDtcclxuQHNtYWxsLWljb24td2lkdGg6IDEuMmVtO1xyXG5AaHVnZS1pY29uLXdpZHRoOiA3MHB4O1xyXG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XHJcblxyXG5AYmFja2dyb3VuZC1kYXJrLXRoZW1lOiAjMWQxZDFkO1xyXG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcclxuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XHJcbkB0ZXh0LWRhcmstY29sb3I6IHdoaXRlO1xyXG5cclxuQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5Ad2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDogIzI2MjgyOTtcclxuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcclxuXHJcbkBsaWdodC10aGVtZS1ib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcclxuXHJcbkBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XHJcbkBmb250LXNpemU6IDE2cHg7XHJcblxyXG4vLyBjb250ZW50XHJcbi5wYWdlIHtcclxuICAuY29sdW1uLWRpc3BsYXk7XHJcbiAgbWluLXdpZHRoOiAyODBweDtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xyXG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcclxuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxufVxyXG5cclxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcclxuICAucmlnaHQtbWFyZ2luLWF1dG87XHJcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcclxuICB3aWR0aDogNzIlO1xyXG59XHJcblxyXG4ucGFnZS11c2VyLXVuZGVmaW5lZCB7XHJcbiAgLmhvcml6b250YWwtbWFyZ2luLWF1dG87XHJcbiAgd2lkdGg6IDcyJTtcclxufVxyXG5cclxuLmNvbnRyb2wtYnV0dG9uIHtcclxuICAucmVsYXRpdmUtcG9zaXRpb247XHJcbiAgLnJvdy1kaXNwbGF5O1xyXG4gIC5mb250LXNldDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogQG1lZGlhbC1zcGFjZSBAc3BhY2U7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi10aXRsZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLnJlZC1idXR0b24ge1xyXG4gIGNvbG9yOiAjYTQwODAwO1xyXG59XHJcblxyXG4uZWRpdC1wbGF0ZSB7XHJcbiAgLmNvbHVtbi1kaXNwbGF5O1xyXG4gIC5mb250LXNldDtcclxuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgbWF4LXdpZHRoOiAxNjBweDtcclxuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xyXG4gIG1hcmdpbi10b3A6IEBzcGFjZTtcclxufVxyXG5cclxuLmJveC1zaGFkb3cge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbn1cclxuXHJcbi8vIGRlcGVuZHMgb24gdGhlbWVcclxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XHJcbiAgYm9yZGVyLWNvbG9yOiBAbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yO1xyXG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcclxufVxyXG5cclxuLy8gdHlwZXNcclxuLmZvcm0tYnV0dG9uIHtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgaGVpZ2h0OiAyLjNlbTtcclxuICBmb250LXNpemU6IEBmb250LXNpemU7XHJcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICY6ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmlucHV0IHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgaGVpZ2h0OiAyZW07XHJcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbGVzdC1zcGFjZTtcclxuICBwYWRkaW5nLXJpZ2h0OiBAc21hbGxlc3Qtc3BhY2U7XHJcbn1cclxuXHJcbi5wYXNzd29yZCB7XHJcbiAgJi1idXR0b24ge1xyXG4gICAgLmNvbHVtbi1kaXNwbGF5O1xyXG4gICAgLnBvaW50ZXI7XHJcbiAgICAubm8tc2VsZWN0O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwLjA5ZW07XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XHJcbiAgICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XHJcbiAgfVxyXG5cclxuICAmLWlucHV0IHtcclxuICAgIC5pbnB1dDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICB9XHJcbn1cclxuXHJcbi5maWVsZCB7XHJcbiAgLmNvbHVtbi1kaXNwbGF5O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xyXG4gICYtbmFtZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIG1hcmdpbiBzZWN0aW9uXHJcbi5yaWdodC1tYXJnaW4tYXV0byB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbn1cclxuXHJcbi5yaWdodC1tYXJnaW4tMTBweCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5yaWdodC1tYXJnaW4tMjBweCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBAc3BhY2U7XHJcbn1cclxuXHJcbi5sZWZ0LW1hcmdpbi1hdXRvIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG5cclxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufVxyXG5cclxuLmxlZnQtbWFyZ2luLTEwcHgge1xyXG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4ubGVmdC1tYXJnaW4tMjBweCB7XHJcbiAgbWFyZ2luLWxlZnQ6IEBzcGFjZTtcclxufVxyXG5cclxuLmxlZnQtbWFyZ2luLTQwcHgge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG59XHJcblxyXG4ubGVmdC1tYXJnaW4tMTBweCB7XHJcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmxlZnQtcGFkZGluZy0xMHB4IHtcclxuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmxlZnQtcGFkZGluZy0yMHB4IHtcclxuICBwYWRkaW5nLWxlZnQ6IEBzcGFjZTtcclxufVxyXG5cclxuLm1hcmdpbi1hdXRvIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG59XHJcblxyXG4udG9wLW1hcmdpbi0xMHB4IHtcclxuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi50b3AtbWFyZ2luLTIwcHgge1xyXG4gIG1hcmdpbi10b3A6IEBzcGFjZTtcclxufVxyXG5cclxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4vLyBwYWRkaW5nIHNlY3Rpb25cclxuLnN0YW5kYXJkLXBhZGRpbmctYWxsIHtcclxuICBwYWRkaW5nOiBAc3BhY2UgQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcclxuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcclxufVxyXG5cclxuLnBvaW50ZXIge1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gYWxsIG11c3QgYmUgZG9uZVxyXG5cclxuLmJsaW5kLXRleHQge1xyXG4gIGNvbG9yOiAjYjNiM2IzO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLm5vLXNlbGVjdCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcclxufVxyXG5cclxuLml0YWxpYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uaC1jZW50ZXItYWxpZ24ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmZ1bGxzY3JlZW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LXRleHQge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5zbW9vdGgtYW5pbWF0aW9uIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxufVxyXG5cclxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XHJcbn1cclxuXHJcbi5mb250LXNldCB7XHJcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcclxufVxyXG5cclxuLmJvbGQtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAucG9pbnRlcjtcclxuICAubm8tc2VsZWN0O1xyXG4gIC5ib2xkLXRleHQ7XHJcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xyXG4gIGNvbG9yOiAjNTk2YjlmO1xyXG4gIG1hcmdpbjogQHNwYWNlIGF1dG87XHJcbn1cclxuXHJcbi5mbGV4LWdyb3cge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmZpeGVkLWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmctYm90dG9tOiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICBwYWRkaW5nOiBAc3BhY2U7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiBAc3BhY2UgMDtcclxufVxyXG5cclxuLmhvcml6b250YWwtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCBAc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XHJcbn1cclxuXHJcbi8vIGRvbmUgfCBob3Jpem9udGFsLW1hcmdpbi1hdXRvXHJcbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zbWFsbC10b3AtbWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIEBzcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XHJcbiAgbWFyZ2luOiBhdXRvIEBzbWFsbC1zcGFjZSBhdXRvIDA7XHJcbn1cclxuXHJcbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XHJcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5ib3R0b20tbWFyZ2luIHtcclxuICBtYXJnaW4tYm90dG9tOiBAc3BhY2U7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogQHNwYWNlIDA7XHJcbn1cclxuXHJcbi8vIGRvbmUgfCB2ZXJ0aWNhbC1tYXJnaW4tYXV0b1xyXG4udmVydGljYWwtYXV0by1tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLmNlbnRlci1hbGlnbmVkIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5yaWdodC1hbGlnbmVkIHtcclxuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XHJcbn1cclxuXHJcbi5sZWZ0LWFsaWduZWQge1xyXG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcclxufVxyXG5cclxuLmNvbHVtbi1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5yb3ctZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uc21hbGxlc3QtaWNvbiB7XHJcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xyXG4gIGhlaWdodDogQHNtYWxsZXN0LWljb24td2lkdGg7XHJcbn1cclxuXHJcbi5zbWFsbC1pY29uIHtcclxuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XHJcbn1cclxuXHJcbi5sYXJnZS1pY29uIHtcclxuICAubm8tc2VsZWN0O1xyXG4gIHdpZHRoOiBAaHVnZS1pY29uLXdpZHRoO1xyXG59XHJcblxyXG4uc2lnbi1pbiB7XHJcbiAgLmJ1dHRvbjtcclxuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XHJcbiAgYmFja2dyb3VuZDogQGdyZWVuLWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG59XHJcblxyXG4uc2lnbi11cCB7XHJcbiAgLmJ1dHRvbjtcclxuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcclxuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxufVxyXG5cclxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDAuNWVtO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLnVzZXJuYW1lIHtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcclxuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcclxuICBoZWlnaHQ6IDIuN2VtO1xyXG4gIHdpZHRoOiAyLjdlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gICYtaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMC42ZW07XHJcbiAgICBsZWZ0OiAwLjZlbTtcclxuICAgIGJvdHRvbTogMC42ZW07XHJcbiAgICByaWdodDogMC42ZW07XHJcbiAgICB3aWR0aDogMS4zZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICAubm8tc2VsZWN0O1xyXG4gIH1cclxufVxyXG5cclxuLnRoZW1lIHtcclxuICB3aWR0aDogMi43ZW07XHJcbiAgaGVpZ2h0OiAyLjdlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgJi1pY29uIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubGlnaHQtdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xyXG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICAmLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XHJcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMjAlKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmRhcmstdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XHJcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgJi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgNSUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcclxuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbn1cclxuXHJcbi53aW5kb3ctZGFyay10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5sb2FkLXBvcHVwIHtcclxuICAuY29sdW1uLWRpc3BsYXk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmxvYWQtaWNvbiB7XHJcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4ubG9hZC1pbWFnZSB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1pbi13aWR0aDogMzBweDtcclxuICBtYXgtd2lkdGg6IDg1cHg7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbn1cclxuXHJcbi5sb2FkLXBocmFzZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xyXG59XHJcblxyXG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XHJcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcclxufVxyXG5cclxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xyXG59XHJcblxyXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcclxufVxyXG5cclxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xyXG4gIGNvbG9yOiAjMWUwNDU2O1xyXG59XHJcblxyXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcclxuICBjb2xvcjogI2NhZDZmZjtcclxufVxyXG5cclxuLnVzZXItcGFuZWwge1xyXG4gIC5jb2x1bW4tZGlzcGxheTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiBAc21hbGwtc3BhY2U7XHJcbiAgcmlnaHQ6IEBzbWFsbC1zcGFjZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4ucHJvZmlsZS1saWdodCB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDAsIDAsIDAsIDAuNTEpLCAxMCUpO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGUtZGFyayB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSk7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpLCAxMCUpO1xyXG4gIH1cclxufVxyXG4iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDcyJTtcbn1cbi5wYWdlLXVzZXItdW5kZWZpbmVkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cbi5jb250cm9sLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udHJvbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuLmVkaXQtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmZvcm0tYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZm9ybS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybS1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucGFzc3dvcmQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLnBhc3N3b3JkLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXNzd29yZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5maWVsZC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnJpZ2h0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5sZWZ0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4udG9wLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLnBvaW50ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxpbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGluayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTZiOWY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IDAuN2VtO1xuICBoZWlnaHQ6IDAuN2VtO1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4yZW07XG59XG4ubGFyZ2UtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgd2lkdGg6IDcwcHg7XG59XG4uc2lnbi1pbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnVzZXJuYW1lIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMi43ZW07XG4gIHdpZHRoOiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4udXNlcm5hbWUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNmVtO1xuICBsZWZ0OiAwLjZlbTtcbiAgYm90dG9tOiAwLjZlbTtcbiAgcmlnaHQ6IDAuNmVtO1xuICB3aWR0aDogMS4zZW07XG4gIG1hcmdpbjogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMTAxMDEwO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDMwMzAzO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMxZDFkMWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzI2MjgyOTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4udXNlci1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMTtcbn1cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4ucHJvZmlsZS1saWdodDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAwLjUxKTtcbn1cbi5wcm9maWxlLWRhcmsge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKTtcbn1cbi5wcm9maWxlLWRhcms6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMjA3LCAyMDcsIDIwNywgMC43MSk7XG59XG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDVweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cbi50aWxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIHdpZHRoOiAxMCU7XG4gIG1heC13aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDVweCAxMHB4O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4udGlsZS10aXRsZSB7XG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICB3aWR0aDogOTAlO1xuICBtaW4td2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIG1hcmdpbjogYXV0bztcbn1cbi50aWxlLWZvcm1hdCB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogMjAlO1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIHJpZ2h0OiAyMCU7XG59XG4ucHg1MC1wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5weDEwbWFyZ2luLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNob3Nlbi12aWV3LW1hcmsge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLnRhYmxlLXZpZXcge1xuICBsZWZ0OiA1MCU7XG4gIHJpZ2h0OiAwO1xufVxuLnRpbGUtdmlldyB7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiA1MCU7XG59XG4udmlldyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IGF1dG8gMjBweCBhdXRvIDYwcHg7XG59XG4uZ3JleS10ZXh0IHtcbiAgY29sb3I6IGdyZXk7XG59XG4udGFibGUge1xuICBtYXJnaW46IDEwcHggMjBweDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDAgMTBweDtcbn1cbi5sZWZ0LWNlbGwge1xuICB3aWR0aDogNGVtO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5tZWRpYWwtY2VsbCB7XG4gIHdpZHRoOiAxMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5zbWFsbC1jZWxsIHtcbiAgd2lkdGg6IDEuMmVtO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uYWxpZ24tY2VsbCB7XG4gIG1hcmdpbjogYXV0byAyMHB4IGF1dG8gYXV0bztcbn1cbi50YWJsZS1sZWZ0LWNlbGwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5oZWFkIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnRhYmxlLXNpbXBsZS1jZWxsIHtcbiAgbWFyZ2luOiBhdXRvIDIwcHg7XG4gIG1pbi13aWR0aDogMjAwcHg7XG4gIG1heC13aWR0aDogNzAwcHg7XG59XG4uYXV0aG9yIHtcbiAgY29sb3I6IGdyZXk7XG4gIHdpZHRoOiAxMGVtO1xufVxuLmF1dGhvcjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmRhdGUtdGltZSB7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW46IGF1dG8gNjBweCBhdXRvIDIwcHg7XG59XG4udGFibGUtcmlnaHQtY2VsbCB7XG4gIG1hcmdpbjogYXV0byAyMHB4IGF1dG8gYXV0bztcbn1cbi50YWJsZS1yb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5lbXB0eSB7XG4gIHdpZHRoOiA1ZW07XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmZpbGUtZm9ybWF0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICM5MGIyYzc7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZml4ZWQtd2lkdGgge1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4ubWVyZ2UtdG8tcmlnaHQge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luOiBhdXRvIDVweCBhdXRvIGF1dG87XG59XG4ubWFyZ2luLW5ld2VzdCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tYXJnaW4tb2xkZXN0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLnNvcnQtcGhyYXNlIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTMwcHg7XG59XG4uc2VhcmNoLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMCA1cHggMCAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiBncmV5O1xuICB3aWR0aDogMTMwcHg7XG59XG4ucGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMzhweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIGJvcmRlci1ib3R0b206IDAuMDVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLnBhbmVsLWZ1bmN0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4uYWxpZ25lZC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4uZnVuY3Rpb24taWNvbiB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG87XG59XG4uc2V0dGluZ3Mge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuLnNldHRpbmdzLWNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDAgMTNweDtcbn1cbi5zZXR0aW5ncy1jb250cm9sLWltZyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNldHRpbmdzLWNvbnRyb2w6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2V0dGluZ3Mtdmlld3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDEzcHg7XG59XG4uc2V0dGluZ3Mtdmlld3M6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAgMTNweDtcbiAgd2lkdGg6IDE3NXB4O1xufVxuLmFkZC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uLWFjdGlvbiB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZmlyc3QtbGluayB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5sYXN0LWxpbmsge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmxpbmsge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHggMCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1Yjg7XG4gIG1hcmdpbjogMDtcbn1cbi5jaG9zZW4tbGluayB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uY2hvc2VuLWxpbmsgLmxpbmstYnV0dG9uIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZGFya3JlZDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4ubGluay1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICB3aWR0aDogN2VtO1xuICBwYWRkaW5nOiA1cHggMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4ubGluay1idXR0b246aG92ZXIge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZDlkOWQ5O1xufVxuLmVtcHR5LXBocmFzZSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBmb3JtYXQtY29sb3I6ICM4N2FmZDE7XG5AYnRuLWJvcmRlci1zdHlsZTogMnB4IHNvbGlkIHJlZDtcbkBzbGltLWJvcmRlcjogMC4wMWVtIHNvbGlkICNjOWM5Yzk7XG5cbi5jb250ZW50IHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbiAgYm9yZGVyLXJhZGl1czogMCBAYm9yZGVyLXJhZGl1cyBAYm9yZGVyLXJhZGl1cyBAYm9yZGVyLXJhZGl1cztcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLnRpbGUge1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIG1pbi13aWR0aDogODBweDtcbiAgd2lkdGg6IDEwJTtcbiAgbWF4LXdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLnRpbGUtdGl0bGUge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aWxlLWZvcm1hdCB7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXB4O1xuICBsZWZ0OiAyMCU7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgcmlnaHQ6IDIwJTtcbn1cblxuLnB4NTAtcGFkZGluZy1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnB4MTBtYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jaG9zZW4tdmlldy1tYXJrIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4udGFibGUtdmlldyB7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDA7XG59XG5cbi50aWxlLXZpZXcge1xuICBsZWZ0OiAwO1xuICByaWdodDogNTAlO1xufVxuXG4udmlldyB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IGF1dG8gQHNwYWNlIGF1dG8gMyAqIEBzcGFjZTtcbn1cblxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4udGFibGUge1xuICBtYXJnaW46IEBzbWFsbC1zcGFjZSBAc3BhY2U7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtY2VsbCB7XG4gIHdpZHRoOiA0ZW07XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5tZWRpYWwtY2VsbCB7XG4gIHdpZHRoOiAxMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGwtY2VsbCB7XG4gIHdpZHRoOiAxLjJlbTtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5hbGlnbi1jZWxsIHtcbiAgbWFyZ2luOiBhdXRvIEBzcGFjZSBhdXRvIGF1dG87XG59XG5cbi50YWJsZS1sZWZ0LWNlbGwge1xuICBtYXJnaW4tbGVmdDogQHNwYWNlO1xufVxuXG4uaGVhZCB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRhYmxlLXNpbXBsZS1jZWxsIHtcbiAgbWFyZ2luOiBhdXRvIEBzcGFjZTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLmF1dGhvciB7XG4gIGNvbG9yOiBncmV5O1xuICB3aWR0aDogMTBlbTtcbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLmRhdGUtdGltZSB7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW46IGF1dG8gMyAqIEBzcGFjZSBhdXRvIEBzcGFjZTtcbn1cblxuLnRhYmxlLXJpZ2h0LWNlbGwge1xuICBtYXJnaW46IGF1dG8gQHNwYWNlIGF1dG8gYXV0bztcbn1cblxuLnRhYmxlLXJvdyB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZW1wdHkge1xuICB3aWR0aDogNWVtO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uZmlsZS1mb3JtYXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kOiAjOTBiMmM3O1xuICBjb2xvcjogd2hpdGU7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4uZml4ZWQtd2lkdGgge1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tZXJnZS10by1yaWdodCB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG8gQHNtYWxsZXN0LXNwYWNlIGF1dG8gYXV0bztcbn1cblxuLm1hcmdpbi1uZXdlc3Qge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbGVzdC1zcGFjZTtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLm1hcmdpbi1vbGRlc3Qge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbGVzdC1zcGFjZTtcbn1cblxuLnNvcnQtcGhyYXNlIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICAuYnV0dG9uO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgQHNtYWxsZXN0LXNwYWNlIDAgQHNtYWxsLXNwYWNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiBncmV5O1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5wYW5lbCB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgLnJvdy1kaXNwbGF5O1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG4gIGJvcmRlci1ib3R0b206IDAuMDVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4ucGFuZWwtZnVuY3Rpb24ge1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vLy5jbGlja2FibGUge1xuICAvLyY6aG92ZXIge1xuICAvLyAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgLy8gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy8gIC5zZWFyY2gtaW5wdXQge1xuICAvLyAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAvLyAgfVxuICAvL31cbi8vfVxuXG4uYWxpZ25lZC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5mdW5jdGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNldHRpbmdzIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICAmLWNvbnRyb2wge1xuICAgIC5yb3ctZGlzcGxheTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAubm8tc2VsZWN0O1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICAmLWltZyB7XG4gICAgICAubm8tc2VsZWN0O1xuICAgICAgd2lkdGg6IDFlbTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAmLXZpZXdzIHtcbiAgICAucm93LWRpc3BsYXk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgLnBvaW50ZXI7XG4gICAgLm5vLXNlbGVjdDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMCAxM3B4O1xuICB9XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgLnJvdy1kaXNwbGF5O1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbi1hY3Rpb24ge1xuICAuZmxleC1ncm93O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbn1cblxuLmZpcnN0LWxpbmsge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLmxhc3QtbGluayB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLmxpbmsge1xuICAuc21vb3RoLWZhc3QtYW5pbWF0aW9uO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlIDAgQHNtYWxsLXNwYWNlO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1Yjg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNob3Nlbi1saW5rIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICAubGluay1idXR0b24ge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrcmVkO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG59XG5cbi5ub3QtY2hvc2VuLWxpbmsge1xuICAubGluay1idXR0b24ge1xuXG4gIH1cbn1cblxuLmxpbmstYnV0dG9uIHtcbiAgLnNtb290aC1mYXN0LWFuaW1hdGlvbjtcbiAgLmJ1dHRvbjtcbiAgLm5vLXNlbGVjdDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICB3aWR0aDogN2VtO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDE1JSk7XG4gIH1cbn1cblxuLmVtcHR5LXBocmFzZSB7XG4gIC5pdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/education/materials/materials.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/education/materials/materials.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MaterialsComponent */

  /***/
  function srcAppComponentsEducationMaterialsMaterialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialsComponent", function () {
      return MaterialsComponent;
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


    var _model_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/messages */
    "./src/app/model/messages.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _special_get_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../special/get-date-time */
    "./src/app/components/special/get-date-time.ts");
    /* harmony import */


    var _special_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../special/sort */
    "./src/app/components/special/sort.ts");

    var defaultOptions = {
      sort: "new",
      filter: "all",
      view: "table",
      search: ""
    };

    var MaterialsComponent = /*#__PURE__*/function () {
      function MaterialsComponent(userStore, activatedRoute, cdr) {
        _classCallCheck(this, MaterialsComponent);

        this.userStore = userStore;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.dateTimeDisplay = _special_get_date_time__WEBPACK_IMPORTED_MODULE_5__["strictDateTime"];
        this.messages = _model_messages__WEBPACK_IMPORTED_MODULE_3__["messages"].education.materials;
        this.panelOptions = defaultOptions;
      } // sort(): void {
      //   this.panelOptions.sortOnNewest
      //     ? this.oldestFirst()
      //     : this.newestFirst();
      // }


      _createClass(MaterialsComponent, [{
        key: "newestFirst",
        value: function newestFirst() {
          Object(_special_sort__WEBPACK_IMPORTED_MODULE_6__["newestSort"])(this.displayedInfo);
        }
      }, {
        key: "oldestFirst",
        value: function oldestFirst() {
          Object(_special_sort__WEBPACK_IMPORTED_MODULE_6__["oldestSort"])(this.displayedInfo);
        }
      }, {
        key: "displayAll",
        value: function displayAll() {
          this.displayedInfo = this.userMaterials;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.activatedRoute.queryParams.subscribe(function (params) {
            _this6.panelOptions.view = params["view"] ? params["view"] : defaultOptions.view;
            _this6.panelOptions.filter = params["filter"] ? params["filter"] : defaultOptions.filter;
            _this6.panelOptions.sort = params["sort"] ? params["sort"] : defaultOptions.sort;
            _this6.panelOptions.search = params["search"] ? params["search"] : defaultOptions.search;

            _this6.cdr.markForCheck();
          });
          this.userMaterials = []; //

          this.subscriber = this.userStore.loadUserInfo().subscribe(function (user) {
            if (user) {// this.userMaterials = user.education.materials;
            }
          });
          this.displayAll();
          this.newestFirst();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriber.unsubscribe();
        }
      }]);

      return MaterialsComponent;
    }();

    MaterialsComponent.ctorParameters = function () {
      return [{
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    MaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-materials",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./materials.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/materials/materials.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./materials.component.less */
      "./src/app/components/education/materials/materials.component.less"))["default"]]
    })], MaterialsComponent);
    /***/
  },

  /***/
  "./src/app/components/education/progress/progress.component.less":
  /*!***********************************************************************!*\
    !*** ./src/app/components/education/progress/progress.component.less ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEducationProgressProgressComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jb21wb25lbnRzL2VkdWNhdGlvbi9wcm9ncmVzcy9wcm9ncmVzcy5jb21wb25lbnQubGVzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/education/progress/progress.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/education/progress/progress.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ProgressComponent */

  /***/
  function srcAppComponentsEducationProgressProgressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProgressComponent", function () {
      return ProgressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProgressComponent = /*#__PURE__*/function () {
      function ProgressComponent() {
        _classCallCheck(this, ProgressComponent);
      }

      _createClass(ProgressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProgressComponent;
    }();

    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-progress",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./progress.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/progress/progress.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./progress.component.less */
      "./src/app/components/education/progress/progress.component.less"))["default"]]
    })], ProgressComponent);
    /***/
  },

  /***/
  "./src/app/components/education/tasks/tasks.component.less":
  /*!*****************************************************************!*\
    !*** ./src/app/components/education/tasks/tasks.component.less ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEducationTasksTasksComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n  border-radius: 0 5px 5px 5px;\n  min-width: 300px;\n}\n.tile {\n  position: relative;\n  min-width: 80px;\n  width: 10%;\n  max-width: 110px;\n  height: 140px;\n  float: left;\n  margin: 5px 10px;\n  padding: 20px 10px;\n}\n.tile-title {\n  word-break: break-all;\n  line-height: 1.25em;\n  height: 2.5em;\n  overflow-y: hidden;\n  max-width: 100px;\n  width: 90%;\n  min-width: 80px;\n  text-align: justify;\n  margin: auto;\n}\n.tile-format {\n  padding: 5px 10px;\n  position: absolute;\n  top: 55px;\n  left: 20%;\n  min-width: 20px;\n  right: 20%;\n}\n.px50-padding-left {\n  padding-left: 50px;\n}\n.margin-left {\n  margin-left: auto;\n}\n.px10margin-right {\n  margin-right: 10px;\n}\n.chosen-view-mark {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  position: absolute;\n  z-index: 0;\n  background: #c9c9c9;\n  top: 0;\n  bottom: 0;\n}\n.table-view {\n  left: 50%;\n  right: 0;\n}\n.tile-view {\n  left: 0;\n  right: 50%;\n}\n.view {\n  position: relative;\n  cursor: pointer;\n  margin: auto 20px auto 60px;\n}\n.grey-text {\n  color: grey;\n}\n.table {\n  margin: 10px 20px;\n  border-collapse: separate;\n  border-spacing: 0 10px;\n}\n.left-cell {\n  width: 4em;\n  padding: 5px 10px;\n}\n.medial-cell {\n  width: 10em;\n  text-align: center;\n  padding: 0 10px;\n}\n.small-cell {\n  width: 1.2em;\n  padding-left: 10px;\n}\n.align-cell {\n  margin: auto 20px auto auto;\n}\n.table-left-cell {\n  margin-left: 20px;\n}\n.head {\n  color: grey;\n  font-style: italic;\n  text-decoration: none;\n}\n.table-simple-cell {\n  margin: auto 20px;\n  min-width: 200px;\n  max-width: 700px;\n}\n.author {\n  color: grey;\n  width: 10em;\n}\n.author:hover {\n  text-decoration: underline;\n}\n.date-time {\n  color: grey;\n  margin: auto 60px auto 20px;\n}\n.table-right-cell {\n  margin: auto 20px auto auto;\n}\n.table-row {\n  position: relative;\n  cursor: pointer;\n}\n.empty {\n  width: 5em;\n  padding: 5px 10px;\n}\n.file-format {\n  text-align: center;\n  border-radius: 5px;\n  background: #90b2c7;\n  color: white;\n  transition: all 500ms ease;\n}\n.fixed-width {\n  min-width: 180px;\n  flex-grow: 1;\n}\n.button {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.merge-to-right {\n  height: 1em;\n  width: 1em;\n  margin: auto 5px auto auto;\n}\n.margin-newest {\n  margin-right: 5px;\n  margin-left: 10px;\n}\n.margin-oldest {\n  margin-right: 10px;\n  margin-left: 5px;\n}\n.sort-phrase {\n  color: grey;\n  font-style: italic;\n  text-align: center;\n  width: 130px;\n}\n.search-input {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  border: none;\n  padding: 0 5px 0 10px;\n  text-align: left;\n  font-style: italic;\n  color: grey;\n  width: 130px;\n}\n.panel {\n  position: relative;\n  display: flex;\n  height: 38px;\n  padding-bottom: 4px;\n  margin: 0 20px;\n  border-bottom: 0.05em solid rgba(0, 0, 0, 0.15);\n}\n.panel-function {\n  transition: all 500ms ease;\n  position: relative;\n  outline: none;\n  padding: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.aligned-icon {\n  margin-left: auto;\n}\n.function-icon {\n  height: 1em;\n  width: 1em;\n  margin: auto;\n}\n.settings {\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n}\n.settings-control {\n  display: flex;\n  transition: all 500ms ease;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-radius: 5px;\n  padding: 0 13px;\n}\n.settings-control-img {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 1em;\n  margin: auto;\n}\n.settings-control:hover {\n  background: rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.settings-views {\n  display: flex;\n  transition: all 500ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  z-index: 1;\n  padding: 0 13px;\n}\n.settings-views:hover {\n  cursor: pointer;\n}\n.add-button {\n  transition: all 500ms ease;\n  position: relative;\n  display: flex;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  background: transparent;\n  padding: 0 13px;\n  width: 175px;\n}\n.add-button:hover {\n  background: rgba(0, 0, 0, 0.15);\n  cursor: pointer;\n}\n.button-action {\n  flex-grow: 1;\n  text-align: center;\n  font-size: 16px;\n}\n.first-link {\n  border-top-left-radius: 5px;\n}\n.last-link {\n  border-top-right-radius: 5px;\n}\n.link {\n  transition: all 250ms ease;\n  outline: none;\n  padding: 5px 10px 0 10px;\n  background: #f5f5f5b8;\n  margin: 0;\n}\n.chosen-link {\n  background: #ffffff;\n}\n.chosen-link .link-button {\n  border-top: none;\n  border-right: none;\n  border-bottom: 2px solid darkred;\n  border-left: none;\n}\n.link-button {\n  transition: all 250ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-top: none;\n  border-right: none;\n  border-bottom: 2px solid transparent;\n  border-left: none;\n  width: 7em;\n  padding: 5px 0;\n  background: transparent;\n}\n.link-button:hover {\n  border-bottom-color: #d9d9d9;\n}\n.empty-phrase {\n  font-style: italic;\n  text-align: center;\n  margin: auto;\n  padding: 20px 0;\n}\n.popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.29);\n  z-index: 2;\n}\n.popup-close {\n  transition: all 500ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  display: flex;\n  outline: none;\n  border: none;\n  border-bottom-left-radius: 5px;\n  border-top-right-radius: 5px;\n  background: transparent;\n  padding: 10px;\n}\n.popup-close:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.popup-close-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  margin: auto;\n  width: 1.1em;\n}\n.popup-content {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n  width: 35%;\n  min-height: 325px;\n  background: white;\n  border-radius: 5px;\n  margin: auto;\n}\n.task {\n  display: flex;\n  padding: 10px 0 20px 0;\n}\n.task-type {\n  transition: all 500ms ease;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 120px;\n  width: 25%;\n  border-radius: 5px;\n  padding: 10px;\n}\n.task-type-title {\n  font-size: 16px;\n  text-align: center;\n}\n.task-type-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n  margin: auto;\n}\n.task-type:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.description {\n  display: flex;\n  padding: 10px 20px 20px 20px;\n  text-align: center;\n}\n.description-text {\n  margin: auto;\n  width: 80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uL3Rhc2tzL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9lZHVjYXRpb24vdGFza3MvdGFza3MuY29tcG9uZW50Lmxlc3MiLCIuLi9jb21wb25lbnRzL2VkdWNhdGlvbi90YXNrcy9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQubGVzcyIsIi4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uL3Rhc2tzL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vdGFza3MvdGFza3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJDO0VBa1d3QixhQUFBO0VBQ2hCLHNCQUFBO0VBaldBLGdCQUFBO0VBRUQsaUJBQUE7RUFDQyxrQ0FBQTtFQUNRLGVBQUE7RUFDRyxrQkFBQTtBQzVCcEI7QUQ2QndCO0VBb0hYLGtCQUFBO0VBaEhULGlCQUFBO0VBQ08sVUFBQTtBQzdCWDtBRDhCRztFQStKVyxpQkFBQTtFQUNBLGtCQUFBO0VBNUpULFVBQUE7QUM3Qkw7QUQ2Qm9CO0VBNFhILGtCQUFBO0VBeENOLGFBQUE7RUE3R1Qsa0NBQUE7RUFqT0YsZUFBQTtFQUFtQixpQkFBQTtFQUVQLGFBQUE7RUFDRyxlQUFBO0VBQ0QsdUJBQUE7RUFDUCxrQkFBQTtBQzdCUDtBRCtCRTtFQUFjLCtCQUFBO0FDNUJoQjtBRDZCNEI7RUFDaEIsZ0JBQUE7QUMzQlo7QUQ0Qm9CO0VBQWdCLGNBQUE7QUN6QnBDO0FENkJPO0VBNFRrQixhQUFBO0VBQ2hCLHNCQUFBO0VBMUdQLGtDQUFBO0VBL01VLGtCQUFBO0VBSU4sZ0JBQUE7RUFDSyxVQUFBO0VB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QUFBO0VBbUszQixXQUFBO0VBL01jLFlBQUE7QUNzckJqQjtBRXZ6Qkk7RUFDRSwrQkFBQTtBRnl6Qk47QUVwekJBO0VId1RXLGFBQUE7RUd0VFQsNEJBQUE7RUFDQSxrQkFBQTtBRnN6QkY7QUVyekJFO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUZ1ekJKIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvZWR1Y2F0aW9uL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XHJcbkBzbWFsbC1zcGFjZTogMTBweDtcclxuQG1lZGlhbC1zcGFjZTogN3B4O1xyXG5Ac3BhY2U6IDIwcHg7XHJcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcclxuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XHJcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcclxuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xyXG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcclxuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XHJcbkBlcnJvci10ZXh0LWNvbG9yOiAjMWUwNDU2O1xyXG5AYm9yZGVyLXJhZGl1czogNXB4O1xyXG5AZm9ybS13aWR0aDogMjQwcHg7XHJcbkBzbWFsbC1pY29uLXdpZHRoOiAxLjJlbTtcclxuQGh1Z2UtaWNvbi13aWR0aDogNzBweDtcclxuQHNtYWxsZXN0LWljb24td2lkdGg6IDAuN2VtO1xyXG5cclxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzFkMWQxZDtcclxuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XHJcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xyXG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcclxuXHJcbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICMyNjI4Mjk7XHJcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XHJcblxyXG5AbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XHJcblxyXG5AZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xyXG5AZm9udC1zaXplOiAxNnB4O1xyXG5cclxuLy8gY29udGVudFxyXG4ucGFnZSB7XHJcbiAgLmNvbHVtbi1kaXNwbGF5O1xyXG4gIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcclxuICBmb250LXNpemU6IEBmb250LXNpemU7XHJcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XHJcbn1cclxuXHJcbi5wYWdlLXVzZXItZGVmaW5lZCB7XHJcbiAgLnJpZ2h0LW1hcmdpbi1hdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XHJcbiAgd2lkdGg6IDcyJTtcclxufVxyXG5cclxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xyXG4gIC5ob3Jpem9udGFsLW1hcmdpbi1hdXRvO1xyXG4gIHdpZHRoOiA3MiU7XHJcbn1cclxuXHJcbi5jb250cm9sLWJ1dHRvbiB7XHJcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xyXG4gIC5yb3ctZGlzcGxheTtcclxuICAuZm9udC1zZXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IEBtZWRpYWwtc3BhY2UgQHNwYWNlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tdGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5yZWQtYnV0dG9uIHtcclxuICBjb2xvcjogI2E0MDgwMDtcclxufVxyXG5cclxuLmVkaXQtcGxhdGUge1xyXG4gIC5jb2x1bW4tZGlzcGxheTtcclxuICAuZm9udC1zZXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICB3aWR0aDogMTUlO1xyXG4gIG1heC13aWR0aDogMTYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcclxuICBtYXJnaW4tdG9wOiBAc3BhY2U7XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4vLyBkZXBlbmRzIG9uIHRoZW1lXHJcbi5wYWludC1saWdodC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlci1jb2xvcjogQGxpZ2h0LXRoZW1lLWJvcmRlci1jb2xvcjtcclxuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XHJcbn1cclxuXHJcbi8vIHR5cGVzXHJcbi5mb3JtLWJ1dHRvbiB7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogMi4zZW07XHJcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGxlc3Qtc3BhY2U7XHJcbiAgcGFkZGluZy1yaWdodDogQHNtYWxsZXN0LXNwYWNlO1xyXG59XHJcblxyXG4ucGFzc3dvcmQge1xyXG4gICYtYnV0dG9uIHtcclxuICAgIC5jb2x1bW4tZGlzcGxheTtcclxuICAgIC5wb2ludGVyO1xyXG4gICAgLm5vLXNlbGVjdDtcclxuICAgIGJvcmRlci13aWR0aDogMC4wOWVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xyXG4gICAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xyXG4gIH1cclxuXHJcbiAgJi1pbnB1dCB7XHJcbiAgICAuaW5wdXQ7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIC5jb2x1bW4tZGlzcGxheTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IEBzbWFsbC1zcGFjZTtcclxuICAmLW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtYXJnaW4gc2VjdGlvblxyXG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnJpZ2h0LW1hcmdpbi0xMHBlcmNlbnQge1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ucmlnaHQtbWFyZ2luLTEwcHgge1xyXG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ucmlnaHQtbWFyZ2luLTIwcHgge1xyXG4gIG1hcmdpbi1yaWdodDogQHNwYWNlO1xyXG59XHJcblxyXG4ubGVmdC1tYXJnaW4tYXV0byB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5sZWZ0LW1hcmdpbi0xMHB4IHtcclxuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ubGVmdC1tYXJnaW4tNXBlcmNlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmxlZnQtbWFyZ2luLTIwcHgge1xyXG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2U7XHJcbn1cclxuXHJcbi5sZWZ0LW1hcmdpbi00MHB4IHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuLmxlZnQtbWFyZ2luLTEwcHgge1xyXG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5sZWZ0LXBhZGRpbmctMTBweCB7XHJcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5sZWZ0LXBhZGRpbmctMjBweCB7XHJcbiAgcGFkZGluZy1sZWZ0OiBAc3BhY2U7XHJcbn1cclxuXHJcbi5tYXJnaW4tYXV0byB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udmVydGljYWwtbWFyZ2luLWF1dG8ge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLnRvcC1tYXJnaW4tMTBweCB7XHJcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4udG9wLW1hcmdpbi0yMHB4IHtcclxuICBtYXJnaW4tdG9wOiBAc3BhY2U7XHJcbn1cclxuXHJcbi5ib3R0b20tbWFyZ2luLTEwcHgge1xyXG4gIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLy8gcGFkZGluZyBzZWN0aW9uXHJcbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XHJcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XHJcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIGFsbCBtdXN0IGJlIGRvbmVcclxuXHJcbi5ibGluZC10ZXh0IHtcclxuICBjb2xvcjogI2IzYjNiMztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5uby1zZWxlY3Qge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbn1cclxuXHJcbi5pdGFsaWMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmgtY2VudGVyLWFsaWduIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mdWxsc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2VudGVyZWQtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uanVzdGlmeS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uc21vb3RoLWFuaW1hdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xyXG59XHJcblxyXG4uZm9udC1zZXQge1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbn1cclxuXHJcbi5ib2xkLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgLnBvaW50ZXI7XHJcbiAgLm5vLXNlbGVjdDtcclxuICAuYm9sZC10ZXh0O1xyXG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcclxuICBjb2xvcjogIzU5NmI5ZjtcclxuICBtYXJnaW46IEBzcGFjZSBhdXRvO1xyXG59XHJcblxyXG4uZmxleC1ncm93IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5maXhlZC1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgcGFkZGluZzogQHNwYWNlO1xyXG59XHJcblxyXG4udmVydGljYWwtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogQHNwYWNlIDA7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xyXG59XHJcblxyXG4vLyBkb25lIHwgaG9yaXpvbnRhbC1tYXJnaW4tYXV0b1xyXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc21hbGwtdG9wLW1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCBAc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xyXG59XHJcblxyXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcclxuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogYXV0byAwIGF1dG8gQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4uYm90dG9tLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xyXG59XHJcblxyXG4udmVydGljYWwtbWFyZ2luIHtcclxuICBtYXJnaW46IEBzcGFjZSAwO1xyXG59XHJcblxyXG4vLyBkb25lIHwgdmVydGljYWwtbWFyZ2luLWF1dG9cclxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5jZW50ZXItYWxpZ25lZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHQtYWxpZ25lZCB7XHJcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xyXG59XHJcblxyXG4ubGVmdC1hbGlnbmVkIHtcclxuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XHJcbn1cclxuXHJcbi5jb2x1bW4tZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucm93LWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnNtYWxsZXN0LWljb24ge1xyXG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcclxuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xyXG59XHJcblxyXG4uc21hbGwtaWNvbiB7XHJcbiAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xyXG59XHJcblxyXG4ubGFyZ2UtaWNvbiB7XHJcbiAgLm5vLXNlbGVjdDtcclxuICB3aWR0aDogQGh1Z2UtaWNvbi13aWR0aDtcclxufVxyXG5cclxuLnNpZ24taW4ge1xyXG4gIC5idXR0b247XHJcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcclxuICBib3JkZXItY29sb3I6IEBncmVlbi1jb2xvcjtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG5cclxuLnNpZ24tdXAge1xyXG4gIC5idXR0b247XHJcbiAgYmFja2dyb3VuZDogQGdyZXktY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XHJcbiAgaGVpZ2h0OiAyLjdlbTtcclxuICB3aWR0aDogMi43ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcclxuICAmLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuNmVtO1xyXG4gICAgbGVmdDogMC42ZW07XHJcbiAgICBib3R0b206IDAuNmVtO1xyXG4gICAgcmlnaHQ6IDAuNmVtO1xyXG4gICAgd2lkdGg6IDEuM2VtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLm5vLXNlbGVjdDtcclxuICB9XHJcbn1cclxuXHJcbi50aGVtZSB7XHJcbiAgd2lkdGg6IDIuN2VtO1xyXG4gIGhlaWdodDogMi43ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICYtaWNvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmxpZ2h0LXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcclxuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgJi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xyXG4gICAgLnNtb290aC1hbmltYXRpb247XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5kYXJrLXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xyXG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG4gICYtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XHJcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndpbmRvdy1saWdodC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4ud2luZG93LWRhcmstdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4ubG9hZC1wb3B1cCB7XHJcbiAgLmNvbHVtbi1kaXNwbGF5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5sb2FkLWljb24ge1xyXG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxufVxyXG5cclxuLmxvYWQtaW1hZ2Uge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiA4NXB4O1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4ubG9hZC1waHJhc2Uge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcclxufVxyXG5cclxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xyXG4gIGJhY2tncm91bmQ6ICByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XHJcbn1cclxuXHJcbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcclxufVxyXG5cclxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XHJcbn1cclxuXHJcbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcclxuICBjb2xvcjogIzFlMDQ1NjtcclxufVxyXG5cclxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XHJcbiAgY29sb3I6ICNjYWQ2ZmY7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsIHtcclxuICAuY29sdW1uLWRpc3BsYXk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogQHNtYWxsLXNwYWNlO1xyXG4gIHJpZ2h0OiBAc21hbGwtc3BhY2U7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2ZpbGUtbGlnaHQge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMzEpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgwLCAwLCAwLCAwLjUxKSwgMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWRhcmsge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKSwgMTAlKTtcclxuICB9XHJcbn1cclxuIiwiLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA3MiU7XG59XG4ucGFnZS11c2VyLXVuZGVmaW5lZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG4uY29udHJvbC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cbi5idXR0b24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cbi5lZGl0LXBsYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxNSU7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5mb3JtLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0tYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLnBhc3N3b3JkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA5ZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5wYXNzd29yZC1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFzc3dvcmQtaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uZmllbGQtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJpZ2h0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnJpZ2h0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cbi5yaWdodC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yaWdodC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5sZWZ0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ubGVmdC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubGVmdC1tYXJnaW4tNXBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG4ubGVmdC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmxlZnQtbWFyZ2luLTQwcHgge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubGVmdC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubGVmdC1wYWRkaW5nLTIwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4ubWFyZ2luLWF1dG8ge1xuICBtYXJnaW46IGF1dG87XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udmVydGljYWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLnRvcC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udG9wLW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ib3R0b20tbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnN0YW5kYXJkLXBhZGRpbmctYWxsIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5wb2ludGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJsaW5kLXRleHQge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLm5vLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTk2YjlmO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbi5saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbn1cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLmxhcmdlLWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIHdpZHRoOiA3MHB4O1xufVxuLnNpZ24taW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2Q3ZDdkNztcbiAgYm9yZGVyLWNvbG9yOiAjZDdkN2Q3O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi51c2VybmFtZSB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDIuN2VtO1xuICB3aWR0aDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLnVzZXJuYW1lLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjZlbTtcbiAgbGVmdDogMC42ZW07XG4gIGJvdHRvbTogMC42ZW07XG4gIHJpZ2h0OiAwLjZlbTtcbiAgd2lkdGg6IDEuM2VtO1xuICBtYXJnaW46IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cbi50aGVtZSB7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udGhlbWUtaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTAxMDEwO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gIzEwMTAxMDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAzMDMwMztcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwMDAwO1xufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMWQxZDFkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICNjZmNmY2Y7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjZThlOGU4O1xufVxuLndpbmRvdy1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiAjMWExYTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyNjI4Mjk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4ubG9hZC1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuLnVzZXItcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4ucHJvZmlsZS1saWdodCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLnByb2ZpbGUtbGlnaHQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgMC41MSk7XG59XG4ucHJvZmlsZS1kYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSk7XG59XG4ucHJvZmlsZS1kYXJrOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDIwNywgMjA3LCAyMDcsIDAuNzEpO1xufVxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCA1cHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG4udGlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICB3aWR0aDogMTAlO1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiA1cHggMTBweDtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuLnRpbGUtdGl0bGUge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IGF1dG87XG59XG4udGlsZS1mb3JtYXQge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU1cHg7XG4gIGxlZnQ6IDIwJTtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICByaWdodDogMjAlO1xufVxuLnB4NTAtcGFkZGluZy1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuLm1hcmdpbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ucHgxMG1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jaG9zZW4tdmlldy1tYXJrIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAwO1xuICBiYWNrZ3JvdW5kOiAjYzljOWM5O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi50YWJsZS12aWV3IHtcbiAgbGVmdDogNTAlO1xuICByaWdodDogMDtcbn1cbi50aWxlLXZpZXcge1xuICBsZWZ0OiAwO1xuICByaWdodDogNTAlO1xufVxuLnZpZXcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiBhdXRvIDIwcHggYXV0byA2MHB4O1xufVxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiBncmV5O1xufVxuLnRhYmxlIHtcbiAgbWFyZ2luOiAxMHB4IDIwcHg7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XG59XG4ubGVmdC1jZWxsIHtcbiAgd2lkdGg6IDRlbTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4ubWVkaWFsLWNlbGwge1xuICB3aWR0aDogMTBlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uc21hbGwtY2VsbCB7XG4gIHdpZHRoOiAxLjJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmFsaWduLWNlbGwge1xuICBtYXJnaW46IGF1dG8gMjBweCBhdXRvIGF1dG87XG59XG4udGFibGUtbGVmdC1jZWxsIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4uaGVhZCB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi50YWJsZS1zaW1wbGUtY2VsbCB7XG4gIG1hcmdpbjogYXV0byAyMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtYXgtd2lkdGg6IDcwMHB4O1xufVxuLmF1dGhvciB7XG4gIGNvbG9yOiBncmV5O1xuICB3aWR0aDogMTBlbTtcbn1cbi5hdXRob3I6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5kYXRlLXRpbWUge1xuICBjb2xvcjogZ3JleTtcbiAgbWFyZ2luOiBhdXRvIDYwcHggYXV0byAyMHB4O1xufVxuLnRhYmxlLXJpZ2h0LWNlbGwge1xuICBtYXJnaW46IGF1dG8gMjBweCBhdXRvIGF1dG87XG59XG4udGFibGUtcm93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZW1wdHkge1xuICB3aWR0aDogNWVtO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5maWxlLWZvcm1hdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjOTBiMmM3O1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmZpeGVkLXdpZHRoIHtcbiAgbWluLXdpZHRoOiAxODBweDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xufVxuLm1lcmdlLXRvLXJpZ2h0IHtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbjogYXV0byA1cHggYXV0byBhdXRvO1xufVxuLm1hcmdpbi1uZXdlc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubWFyZ2luLW9sZGVzdCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5zb3J0LXBocmFzZSB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEzMHB4O1xufVxuLnNlYXJjaC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgNXB4IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogZ3JleTtcbiAgd2lkdGg6IDEzMHB4O1xufVxuLnBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIG1hcmdpbjogMCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAwLjA1ZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5wYW5lbC1mdW5jdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLmFsaWduZWQtaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmZ1bmN0aW9uLWljb24ge1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDFlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnNldHRpbmdzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbn1cbi5zZXR0aW5ncy1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAwIDEzcHg7XG59XG4uc2V0dGluZ3MtY29udHJvbC1pbWcge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbjogYXV0bztcbn1cbi5zZXR0aW5ncy1jb250cm9sOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNldHRpbmdzLXZpZXdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMCAxM3B4O1xufVxuLnNldHRpbmdzLXZpZXdzOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFkZC1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIHdpZHRoOiAxNzVweDtcbn1cbi5hZGQtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJ1dHRvbi1hY3Rpb24ge1xuICBmbGV4LWdyb3c6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZpcnN0LWxpbmsge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4ubGFzdC1saW5rIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5saW5rIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMTBweDtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNWI4O1xuICBtYXJnaW46IDA7XG59XG4uY2hvc2VuLWxpbmsge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmNob3Nlbi1saW5rIC5saW5rLWJ1dHRvbiB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGRhcmtyZWQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLmxpbmstYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgd2lkdGg6IDdlbTtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmxpbmstYnV0dG9uOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q5ZDlkOTtcbn1cbi5lbXB0eS1waHJhc2Uge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4ucG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI5KTtcbiAgei1pbmRleDogMjtcbn1cbi5wb3B1cC1jbG9zZSB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wb3B1cC1jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucG9wdXAtY2xvc2UtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMS4xZW07XG59XG4ucG9wdXAtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIG1pbi1oZWlnaHQ6IDMyNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IGF1dG87XG59XG4udGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMCAyMHB4IDA7XG59XG4udGFzay10eXBlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnRhc2stdHlwZS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRhc2stdHlwZS1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICB3aWR0aDogNzBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnRhc2stdHlwZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uZGVzY3JpcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVzY3JpcHRpb24tdGV4dCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDgwJTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBmb3JtYXQtY29sb3I6ICM4N2FmZDE7XG5AYnRuLWJvcmRlci1zdHlsZTogMnB4IHNvbGlkIHJlZDtcbkBzbGltLWJvcmRlcjogMC4wMWVtIHNvbGlkICNjOWM5Yzk7XG5cbi5jb250ZW50IHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbiAgYm9yZGVyLXJhZGl1czogMCBAYm9yZGVyLXJhZGl1cyBAYm9yZGVyLXJhZGl1cyBAYm9yZGVyLXJhZGl1cztcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLnRpbGUge1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIG1pbi13aWR0aDogODBweDtcbiAgd2lkdGg6IDEwJTtcbiAgbWF4LXdpZHRoOiAxMTBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLnRpbGUtdGl0bGUge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XG4gIGhlaWdodDogMi41ZW07XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDBweDtcbiAgd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aWxlLWZvcm1hdCB7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1NXB4O1xuICBsZWZ0OiAyMCU7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgcmlnaHQ6IDIwJTtcbn1cblxuLnB4NTAtcGFkZGluZy1sZWZ0IHtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuXG4ubWFyZ2luLWxlZnQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnB4MTBtYXJnaW4tcmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jaG9zZW4tdmlldy1tYXJrIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIGJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4udGFibGUtdmlldyB7XG4gIGxlZnQ6IDUwJTtcbiAgcmlnaHQ6IDA7XG59XG5cbi50aWxlLXZpZXcge1xuICBsZWZ0OiAwO1xuICByaWdodDogNTAlO1xufVxuXG4udmlldyB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IGF1dG8gQHNwYWNlIGF1dG8gMyAqIEBzcGFjZTtcbn1cblxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiBncmV5O1xufVxuXG4udGFibGUge1xuICBtYXJnaW46IEBzbWFsbC1zcGFjZSBAc3BhY2U7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtY2VsbCB7XG4gIHdpZHRoOiA0ZW07XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5tZWRpYWwtY2VsbCB7XG4gIHdpZHRoOiAxMGVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGwtY2VsbCB7XG4gIHdpZHRoOiAxLjJlbTtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5hbGlnbi1jZWxsIHtcbiAgbWFyZ2luOiBhdXRvIEBzcGFjZSBhdXRvIGF1dG87XG59XG5cbi50YWJsZS1sZWZ0LWNlbGwge1xuICBtYXJnaW4tbGVmdDogQHNwYWNlO1xufVxuXG4uaGVhZCB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRhYmxlLXNpbXBsZS1jZWxsIHtcbiAgbWFyZ2luOiBhdXRvIEBzcGFjZTtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbn1cblxuLmF1dGhvciB7XG4gIGNvbG9yOiBncmV5O1xuICB3aWR0aDogMTBlbTtcbiAgJjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIH1cbn1cblxuLmRhdGUtdGltZSB7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW46IGF1dG8gMyAqIEBzcGFjZSBhdXRvIEBzcGFjZTtcbn1cblxuLnRhYmxlLXJpZ2h0LWNlbGwge1xuICBtYXJnaW46IGF1dG8gQHNwYWNlIGF1dG8gYXV0bztcbn1cblxuLnRhYmxlLXJvdyB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZW1wdHkge1xuICB3aWR0aDogNWVtO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uZmlsZS1mb3JtYXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kOiAjOTBiMmM3O1xuICBjb2xvcjogd2hpdGU7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4uZml4ZWQtd2lkdGgge1xuICBtaW4td2lkdGg6IDE4MHB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tZXJnZS10by1yaWdodCB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW46IGF1dG8gQHNtYWxsZXN0LXNwYWNlIGF1dG8gYXV0bztcbn1cblxuLm1hcmdpbi1uZXdlc3Qge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbGVzdC1zcGFjZTtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLm1hcmdpbi1vbGRlc3Qge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbGVzdC1zcGFjZTtcbn1cblxuLnNvcnQtcGhyYXNlIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5zZWFyY2gtaW5wdXQge1xuICAuYnV0dG9uO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDAgQHNtYWxsZXN0LXNwYWNlIDAgQHNtYWxsLXNwYWNlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiBncmV5O1xuICB3aWR0aDogMTMwcHg7XG59XG5cbi5wYW5lbCB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgLnJvdy1kaXNwbGF5O1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG4gIGJvcmRlci1ib3R0b206IDAuMDVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4ucGFuZWwtZnVuY3Rpb24ge1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4vLy5jbGlja2FibGUge1xuICAvLyY6aG92ZXIge1xuICAvLyAgYmFja2dyb3VuZDogI2VjZWNlYztcbiAgLy8gIGN1cnNvcjogcG9pbnRlcjtcbiAgLy8gIC5zZWFyY2gtaW5wdXQge1xuICAvLyAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAvLyAgfVxuICAvL31cbi8vfVxuXG4uYWxpZ25lZC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5mdW5jdGlvbi1pY29uIHtcbiAgaGVpZ2h0OiAxZW07XG4gIHdpZHRoOiAxZW07XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnNldHRpbmdzIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICAmLWNvbnRyb2wge1xuICAgIC5yb3ctZGlzcGxheTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAubm8tc2VsZWN0O1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIHBhZGRpbmc6IDAgMTNweDtcbiAgICAmLWltZyB7XG4gICAgICAubm8tc2VsZWN0O1xuICAgICAgd2lkdGg6IDFlbTtcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuICAmLXZpZXdzIHtcbiAgICAucm93LWRpc3BsYXk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgLnBvaW50ZXI7XG4gICAgLm5vLXNlbGVjdDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMCAxM3B4O1xuICB9XG59XG5cbi5hZGQtYnV0dG9uIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgLnJvdy1kaXNwbGF5O1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwIDEzcHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLmJ1dHRvbi1hY3Rpb24ge1xuICAuZmxleC1ncm93O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbn1cblxuLmZpcnN0LWxpbmsge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLmxhc3QtbGluayB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLmxpbmsge1xuICAuc21vb3RoLWZhc3QtYW5pbWF0aW9uO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlIDAgQHNtYWxsLXNwYWNlO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1Yjg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNob3Nlbi1saW5rIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICAubGluay1idXR0b24ge1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrcmVkO1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG59XG5cbi5ub3QtY2hvc2VuLWxpbmsge1xuICAubGluay1idXR0b24ge1xuXG4gIH1cbn1cblxuLmxpbmstYnV0dG9uIHtcbiAgLnNtb290aC1mYXN0LWFuaW1hdGlvbjtcbiAgLmJ1dHRvbjtcbiAgLm5vLXNlbGVjdDtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICB3aWR0aDogN2VtO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgMDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICY6aG92ZXIge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6IGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDE1JSk7XG4gIH1cbn1cblxuLmVtcHR5LXBocmFzZSB7XG4gIC5pdGFsaWM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBpbXBvcnQgXCIuLi9lZHVjYXRpb24uY29tcG9uZW50Lmxlc3NcIjtcblxuLnBvcHVwIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjI5KTtcbiAgei1pbmRleDogMjtcblxuICAmLWNsb3NlIHtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAubm8tc2VsZWN0O1xuICAgIC5yb3ctZGlzcGxheTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogQHNtYWxsLXNwYWNlO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICB9XG5cbiAgICAmLWljb24ge1xuICAgICAgLm5vLXNlbGVjdDtcbiAgICAgIC5tYXJnaW4tYXV0bztcbiAgICAgIHdpZHRoOiAxLjFlbTtcbiAgICB9XG4gIH1cblxuICAmLWNvbnRlbnQge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgIHdpZHRoOiAzNSU7XG4gICAgbWluLWhlaWdodDogMzI1cHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59XG5cbi50YXNrIHtcbiAgLnJvdy1kaXNwbGF5O1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMCBAc3BhY2UgMDtcbiAgJi10eXBlIHtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAubm8tc2VsZWN0O1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAuaG9yaXpvbnRhbC1tYXJnaW4tYXV0bztcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcGFkZGluZzogQHNtYWxsLXNwYWNlO1xuXG4gICAgJi10aXRsZSB7XG4gICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgIC5uby1zZWxlY3Q7XG4gICAgICAubGFyZ2UtaWNvbjtcbiAgICAgIC5tYXJnaW4tYXV0bztcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgfVxuICB9XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIC5yb3ctZGlzcGxheTtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIEBzcGFjZSBAc3BhY2UgQHNwYWNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICYtdGV4dCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/education/tasks/tasks.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/education/tasks/tasks.component.ts ***!
    \***************************************************************/

  /*! exports provided: TasksComponent */

  /***/
  function srcAppComponentsEducationTasksTasksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksComponent", function () {
      return TasksComponent;
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


    var _model_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../model/messages */
    "./src/app/model/messages.ts");
    /* harmony import */


    var _special_get_date_time__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../special/get-date-time */
    "./src/app/components/special/get-date-time.ts");

    var defaultOptions = {
      sort: "new",
      filter: "all",
      view: "table",
      search: ""
    };

    var TasksComponent = /*#__PURE__*/function () {
      function TasksComponent(activatedRoute, router, cdr) {
        _classCallCheck(this, TasksComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.cdr = cdr;
        this.messages = _model_messages__WEBPACK_IMPORTED_MODULE_3__["messages"].education.tasks;
        this.dateTimeDisplay = _special_get_date_time__WEBPACK_IMPORTED_MODULE_4__["strictDateTime"];
        this.panelOptions = defaultOptions;
        this.askingForType = false;
      }

      _createClass(TasksComponent, [{
        key: "focus",
        value: function focus(type) {
          switch (type) {
            case "simple":
              {
                this.description = this.messages.types.simple.description;
                break;
              }

            case "test":
              {
                this.description = this.messages.types.test.description;
                console.log("work");
                break;
              }

            default:
              {
                this.description = this.messages.types.hint;
                break;
              }
          }

          this.cdr.markForCheck();
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.askingForType = false;
          this.router.navigate(this.router.url.split(/[\/?]/).filter(function (item) {
            return !item.match(/[=]/);
          })).then();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.userTasks = [];
          this.displayedInfo = this.userTasks;
          this.description = this.messages.types.hint;
          this.subscriber = this.activatedRoute.queryParams.subscribe(function (params) {
            _this7.panelOptions.view = params["view"] ? params["view"] : defaultOptions.view;
            _this7.panelOptions.filter = params["filter"] ? params["filter"] : defaultOptions.filter;
            _this7.panelOptions.sort = params["sort"] ? params["sort"] : defaultOptions.sort;
            _this7.panelOptions.search = params["search"] ? params["search"] : defaultOptions.search;
            _this7.askingForType = !!params["create"];

            _this7.cdr.markForCheck();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriber.unsubscribe();
        }
      }]);

      return TasksComponent;
    }();

    TasksComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    TasksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-tasks",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tasks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/tasks/tasks.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tasks.component.less */
      "./src/app/components/education/tasks/tasks.component.less"))["default"]]
    })], TasksComponent);
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


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.menu {\n  transition: all 500ms ease;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page {\n  transition: all 500ms ease;\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 300px;\n  width: 60%;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.window {\n  display: flex;\n  flex-direction: column;\n}\n.window img {\n  margin: auto;\n  width: 90%;\n  max-width: 500px;\n}\n.window-main {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.centered-text {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9ob21lLXBhZ2UvTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBOFhFLGFBQUE7RUFDQSxzQkFBQTtFQTdYQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5QkY7QURpQ0E7RUEwSEUsa0JBQUE7RUF4SEEsaUJBQUE7RUFDQSxVQUFBO0FDL0JGO0FEa0NBO0VBNEtFLGlCQUFBO0VBQ0Esa0JBQUE7RUEzS0EsVUFBQTtBQy9CRjtBRGtDQTtFQXFaRSxrQkFBQTtFQXRDQSxhQUFBO0VBckhBLGtDQUFBO0VBdFBBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNFLCtCQUFBO0FDL0JKO0FEbUNBO0VBQ0UsZ0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBO0VBbVZFLGFBQUE7RUFDQSxzQkFBQTtFQWpIQSxrQ0FBQTtFQWhPQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHdDQUFBO0FDbkNGO0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR5Q0E7RUFvTUUsMEJBQUE7RUFsTUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtF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RSxrQkFBQTtFQUNBLG1CQUFBO0VBblJBLDBCQUFBO0FDNktGO0FEMEdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBMVJBLDBCQUFBO0FDbUxGO0FEMkdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN6R0Y7QUQ0R0E7RUFDRSxvQ0FBQTtBQzFHRjtBRDZHQTtFQUNFLGlDQUFBO0FDM0dGO0FEOEdBO0VBQ0Usb0NBQUE7QUM1R0Y7QUQrR0E7RUFDRSxpQ0FBQTtBQzdHRjtBRGdIQTtFQUNFLGNBQUE7QUM5R0Y7QURpSEE7RUFDRSxjQUFBO0FDL0dGO0FEa0hBO0VBcE1FLGFBQUE7RUFDQSxzQkFBQTtFQXFNQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDL0dGO0FEa0hBO0VBQ0UseUNBQUE7QUNoSEY7QURpSEU7RUFDRSx1Q0FBQTtBQy9HSjtBRG1IQTtFQUNFLCtDQUFBO0FDakhGO0FEa0hFO0VBQ0UsNkNBQUE7QUNoSEo7QUNsZ0JBO0VGb1NFLDBCQUFBO0VFbFNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEb2dCRjtBQ2pnQkE7RUY2UkUsMEJBQUE7RUEzRUEsaUJBQUE7RUFDQSxrQkFBQTtFRWhOQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBRG9nQkY7QUNqZ0JBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FEbWdCRjtBQ2xnQkU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FEb2dCSjtBQ2xnQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBRG9nQko7QUNoZ0JBO0VBQ0Usa0JBQUE7QURrZ0JGIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1zcGFjZTogNXB4O1xuQHNtYWxsLXNwYWNlOiAxMHB4O1xuQG1lZGlhbC1zcGFjZTogN3B4O1xuQHNwYWNlOiAyMHB4O1xuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XG5AZ3JlZW4tY29sb3I6ICMwMGExMDA7XG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcbkBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZDZkZmVmO1xuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XG5AYm9yZGVyLXJhZGl1czogNXB4O1xuQGZvcm0td2lkdGg6IDI0MHB4O1xuQHNtYWxsLWljb24td2lkdGg6IDEuMmVtO1xuQGh1Z2UtaWNvbi13aWR0aDogNzBweDtcbkBzbWFsbGVzdC1pY29uLXdpZHRoOiAwLjdlbTtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzFkMWQxZDtcbkBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lOiAjZThlOGU4O1xuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcblxuQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICMyNjI4Mjk7XG5AaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG5AbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG5cbkBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG5AZm9udC1zaXplOiAxNnB4O1xuXG4vLyBjb250ZW50XG4ucGFnZSB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIC5yaWdodC1tYXJnaW4tYXV0bztcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgd2lkdGg6IDcyJTtcbn1cblxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xuICAuaG9yaXpvbnRhbC1tYXJnaW4tYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cblxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIC5mb250LXNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiBAbWVkaWFsLXNwYWNlIEBzcGFjZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIH1cbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG5cbi5lZGl0LXBsYXRlIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICAuZm9udC1zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLy8gZGVwZW5kcyBvbiB0aGVtZVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBsaWdodC10aGVtZS1ib3JkZXItY29sb3I7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbn1cblxuLy8gdHlwZXNcbi5mb3JtLWJ1dHRvbiB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbn1cblxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsZXN0LXNwYWNlO1xuICBwYWRkaW5nLXJpZ2h0OiBAc21hbGxlc3Qtc3BhY2U7XG59XG5cbi5wYXNzd29yZCB7XG4gICYtYnV0dG9uIHtcbiAgICAuY29sdW1uLWRpc3BsYXk7XG4gICAgLnBvaW50ZXI7XG4gICAgLm5vLXNlbGVjdDtcbiAgICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbiAgICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG4gIH1cblxuICAmLWlucHV0IHtcbiAgICAuaW5wdXQ7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi5maWVsZCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xuICAmLW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4vLyBtYXJnaW4gc2VjdGlvblxuLnJpZ2h0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiBAc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogQHNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1wYWRkaW5nLTIwcHgge1xuICBwYWRkaW5nLWxlZnQ6IEBzcGFjZTtcbn1cblxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG59XG5cbi8vIHBhZGRpbmcgc2VjdGlvblxuLnN0YW5kYXJkLXBhZGRpbmctYWxsIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4ucG9pbnRlciB7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4vLyBhbGwgbXVzdCBiZSBkb25lXG5cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5vLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICAucG9pbnRlcjtcbiAgLm5vLXNlbGVjdDtcbiAgLmJvbGQtdGV4dDtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiBAc3BhY2UgYXV0bztcbn1cblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4vLyBkb25lIHwgaG9yaXpvbnRhbC1tYXJnaW4tYXV0b1xuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIEBzbWFsbC1zcGFjZSBhdXRvIDA7XG59XG5cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IEBzcGFjZSAwO1xufVxuXG4vLyBkb25lIHwgdmVydGljYWwtbWFyZ2luLWF1dG9cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbiAgaGVpZ2h0OiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG59XG5cbi5sYXJnZS1pY29uIHtcbiAgLm5vLXNlbGVjdDtcbiAgd2lkdGg6IEBodWdlLWljb24td2lkdGg7XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi51c2VybmFtZSB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBoZWlnaHQ6IDIuN2VtO1xuICB3aWR0aDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gICYtaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjZlbTtcbiAgICBsZWZ0OiAwLjZlbTtcbiAgICBib3R0b206IDAuNmVtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB3aWR0aDogMS4zZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5uby1zZWxlY3Q7XG4gIH1cbn1cblxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cblxuLnVzZXItcGFuZWwge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiBAc21hbGwtc3BhY2U7XG4gIHJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKHJnYmEoMCwgMCwgMCwgMC41MSksIDEwJSk7XG4gIH1cbn1cblxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpLCAxMCUpO1xuICB9XG59XG4iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDcyJTtcbn1cbi5wYWdlLXVzZXItdW5kZWZpbmVkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cbi5jb250cm9sLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udHJvbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuLmVkaXQtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmZvcm0tYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZm9ybS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybS1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucGFzc3dvcmQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLnBhc3N3b3JkLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXNzd29yZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5maWVsZC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnJpZ2h0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5sZWZ0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4udG9wLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLnBvaW50ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxpbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGluayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTZiOWY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IDAuN2VtO1xuICBoZWlnaHQ6IDAuN2VtO1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4yZW07XG59XG4ubGFyZ2UtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgd2lkdGg6IDcwcHg7XG59XG4uc2lnbi1pbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udXNlcm5hbWUge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgd2lkdGg6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi51c2VybmFtZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC42ZW07XG4gIGxlZnQ6IDAuNmVtO1xuICBib3R0b206IDAuNmVtO1xuICByaWdodDogMC42ZW07XG4gIHdpZHRoOiAxLjNlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4udGhlbWUge1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzEwMTAxMDtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxMDEwMTA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMzAzMDM7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzFkMWQxZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMjYyODI5O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi51c2VyLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLnByb2ZpbGUtbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMxKTtcbn1cbi5wcm9maWxlLWxpZ2h0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDAsIDAsIDAsIDAuNTEpO1xufVxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xufVxuLnByb2ZpbGUtZGFyazpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgyMDcsIDIwNywgMjA3LCAwLjcxKTtcbn1cbi5tZW51IHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFnZSB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICB3aWR0aDogNjAlO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLndpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud2luZG93IGltZyB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cbi53aW5kb3ctbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuXG4ubWVudSB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4ucGFnZSB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAuaG9yaXpvbnRhbC1tYXJnaW4tYXV0bztcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDYwJTtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLndpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICYgaW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICB9XG4gICYtbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
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
          var _this8 = this;

          this.subscriber = this.userStore.loadUserInfo().subscribe(function (user) {
            _this8.user = user;
            _this8.userExist = !!user;

            _this8.cdr.markForCheck();
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
  "./src/app/components/notifications/notifications.component.less":
  /*!***********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.less ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.empty {\n  margin-left: auto;\n  margin-right: auto;\n  font-style: italic;\n}\n.unread {\n  background: #2f70a7;\n  margin: auto;\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n.read {\n  transition: all 250ms ease;\n  background: #2f70a7;\n  margin: auto;\n  width: 0;\n  height: 0;\n  border-radius: 100%;\n}\n.notification {\n  display: flex;\n  transition: all 500ms ease;\n  padding: 20px 0;\n  margin: 5px 0;\n  border-radius: 5px;\n}\n.date-time {\n  color: #5b3434;\n  margin: auto 20px auto auto;\n}\n.notification-message {\n  margin-right: 20px;\n  line-height: 1.2em;\n}\n.owner {\n  font-weight: bold;\n}\n.notification-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  height: 50px;\n  width: 50px;\n  margin: auto 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsIi4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9ub3RpZmljYXRpb25zL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBOFhFLGFBQUE7RUFDQSxzQkFBQTtFQTdYQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5QkY7QURpQ0E7RUEwSEUsa0JBQUE7RUF4SEEsaUJBQUE7RUFDQSxVQUFBO0FDL0JGO0FEa0NBO0VBNEtFLGlCQUFBO0VBQ0Esa0JBQUE7RUEzS0EsVUFBQTtBQy9CRjtBRGtDQTtFQXFaRSxrQkFBQTtFQXRDQSxhQUFBO0VBckhBLGtDQUFBO0VBdFBBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNFLCtCQUFBO0FDL0JKO0FEbUNBO0VBQ0UsZ0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBO0VBbVZFLGFBQUE7RUFDQSxzQkFBQTtFQWpIQSxrQ0FBQTtFQWhPQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHdDQUFBO0FDbkNGO0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR5Q0E7RUFvTUUsMEJBQUE7RUFsTUEsa0JB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LFdBQUE7RUFDQSxpQkFBQTtBRDhmRiIsImZpbGUiOiIuLi9jb21wb25lbnRzL25vdGlmaWNhdGlvbnMvbm90aWZpY2F0aW9ucy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1zcGFjZTogNXB4O1xuQHNtYWxsLXNwYWNlOiAxMHB4O1xuQG1lZGlhbC1zcGFjZTogN3B4O1xuQHNwYWNlOiAyMHB4O1xuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XG5AZ3JlZW4tY29sb3I6ICMwMGExMDA7XG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcbkBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZDZkZmVmO1xuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XG5AYm9yZGVyLXJhZGl1czogNXB4O1xuQGZvcm0td2lkdGg6IDI0MHB4O1xuQHNtYWxsLWljb24td2lkdGg6IDEuMmVtO1xuQGh1Z2UtaWNvbi13aWR0aDogNzBweDtcbkBzbWFsbGVzdC1pY29uLXdpZHRoOiAwLjdlbTtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzFkMWQxZDtcbkBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lOiAjZThlOGU4O1xuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcblxuQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICMyNjI4Mjk7XG5AaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG5AbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG5cbkBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG5AZm9udC1zaXplOiAxNnB4O1xuXG4vLyBjb250ZW50XG4ucGFnZSB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIC5yaWdodC1tYXJnaW4tYXV0bztcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgd2lkdGg6IDcyJTtcbn1cblxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xuICAuaG9yaXpvbnRhbC1tYXJnaW4tYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cblxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIC5mb250LXNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiBAbWVkaWFsLXNwYWNlIEBzcGFjZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIH1cbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG5cbi5lZGl0LXBsYXRlIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICAuZm9udC1zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLy8gZGVwZW5kcyBvbiB0aGVtZVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBsaWdodC10aGVtZS1ib3JkZXItY29sb3I7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbn1cblxuLy8gdHlwZXNcbi5mb3JtLWJ1dHRvbiB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbn1cblxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsZXN0LXNwYWNlO1xuICBwYWRkaW5nLXJpZ2h0OiBAc21hbGxlc3Qtc3BhY2U7XG59XG5cbi5wYXNzd29yZCB7XG4gICYtYnV0dG9uIHtcbiAgICAuY29sdW1uLWRpc3BsYXk7XG4gICAgLnBvaW50ZXI7XG4gICAgLm5vLXNlbGVjdDtcbiAgICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbiAgICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG4gIH1cblxuICAmLWlucHV0IHtcbiAgICAuaW5wdXQ7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi5maWVsZCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xuICAmLW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4vLyBtYXJnaW4gc2VjdGlvblxuLnJpZ2h0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiBAc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogQHNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1wYWRkaW5nLTIwcHgge1xuICBwYWRkaW5nLWxlZnQ6IEBzcGFjZTtcbn1cblxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG59XG5cbi8vIHBhZGRpbmcgc2VjdGlvblxuLnN0YW5kYXJkLXBhZGRpbmctYWxsIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4ucG9pbnRlciB7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4vLyBhbGwgbXVzdCBiZSBkb25lXG5cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5vLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICAucG9pbnRlcjtcbiAgLm5vLXNlbGVjdDtcbiAgLmJvbGQtdGV4dDtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiBAc3BhY2UgYXV0bztcbn1cblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4vLyBkb25lIHwgaG9yaXpvbnRhbC1tYXJnaW4tYXV0b1xuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIEBzbWFsbC1zcGFjZSBhdXRvIDA7XG59XG5cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IEBzcGFjZSAwO1xufVxuXG4vLyBkb25lIHwgdmVydGljYWwtbWFyZ2luLWF1dG9cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbiAgaGVpZ2h0OiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG59XG5cbi5sYXJnZS1pY29uIHtcbiAgLm5vLXNlbGVjdDtcbiAgd2lkdGg6IEBodWdlLWljb24td2lkdGg7XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi51c2VybmFtZSB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBoZWlnaHQ6IDIuN2VtO1xuICB3aWR0aDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gICYtaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjZlbTtcbiAgICBsZWZ0OiAwLjZlbTtcbiAgICBib3R0b206IDAuNmVtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB3aWR0aDogMS4zZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5uby1zZWxlY3Q7XG4gIH1cbn1cblxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cblxuLnVzZXItcGFuZWwge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiBAc21hbGwtc3BhY2U7XG4gIHJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKHJnYmEoMCwgMCwgMCwgMC41MSksIDEwJSk7XG4gIH1cbn1cblxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpLCAxMCUpO1xuICB9XG59XG4iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDcyJTtcbn1cbi5wYWdlLXVzZXItdW5kZWZpbmVkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cbi5jb250cm9sLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udHJvbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuLmVkaXQtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmZvcm0tYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZm9ybS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybS1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucGFzc3dvcmQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLnBhc3N3b3JkLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXNzd29yZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5maWVsZC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnJpZ2h0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5sZWZ0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4udG9wLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLnBvaW50ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxpbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGluayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTZiOWY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IDAuN2VtO1xuICBoZWlnaHQ6IDAuN2VtO1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4yZW07XG59XG4ubGFyZ2UtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgd2lkdGg6IDcwcHg7XG59XG4uc2lnbi1pbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udXNlcm5hbWUge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgd2lkdGg6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi51c2VybmFtZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC42ZW07XG4gIGxlZnQ6IDAuNmVtO1xuICBib3R0b206IDAuNmVtO1xuICByaWdodDogMC42ZW07XG4gIHdpZHRoOiAxLjNlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4udGhlbWUge1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzEwMTAxMDtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxMDEwMTA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMzAzMDM7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzFkMWQxZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMjYyODI5O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi51c2VyLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLnByb2ZpbGUtbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMxKTtcbn1cbi5wcm9maWxlLWxpZ2h0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDAsIDAsIDAsIDAuNTEpO1xufVxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xufVxuLnByb2ZpbGUtZGFyazpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgyMDcsIDIwNywgMjA3LCAwLjcxKTtcbn1cbi5lbXB0eSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi51bnJlYWQge1xuICBiYWNrZ3JvdW5kOiAjMmY3MGE3O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4ucmVhZCB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICBiYWNrZ3JvdW5kOiAjMmY3MGE3O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4ubm90aWZpY2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmRhdGUtdGltZSB7XG4gIGNvbG9yOiAjNWIzNDM0O1xuICBtYXJnaW46IGF1dG8gMjBweCBhdXRvIGF1dG87XG59XG4ubm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbn1cbi5vd25lciB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5vdGlmaWNhdGlvbi1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IGF1dG8gMjBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBmb250LXNpemU6IDE2cHg7XG5AMTVweC1zcGFjZTogMTVweDtcblxuLmVtcHR5IHtcbiAgLmhvcml6b250YWwtbWFyZ2luLWF1dG87XG4gIC5pdGFsaWM7XG59XG5cbi51bnJlYWQge1xuICBiYWNrZ3JvdW5kOiAjMmY3MGE3O1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5yZWFkIHtcbiAgLnNtb290aC1mYXN0LWFuaW1hdGlvbjtcbiAgYmFja2dyb3VuZDogIzJmNzBhNztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgLnJvdy1kaXNwbGF5O1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG4gIG1hcmdpbjogQHNtYWxsZXN0LXNwYWNlIDA7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4uZGF0ZS10aW1lIHtcbiAgY29sb3I6ICM1YjM0MzQ7XG4gIG1hcmdpbjogYXV0byBAc3BhY2UgYXV0byBhdXRvO1xufVxuXG4ubm90aWZpY2F0aW9uLW1lc3NhZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IEBzcGFjZTtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuXG4ub3duZXIge1xuICAuYm9sZC10ZXh0O1xufVxuXG4ubm90aWZpY2F0aW9uLWljb24ge1xuICAubm8tc2VsZWN0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IGF1dG8gQHNwYWNlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/notifications/notifications.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/notifications/notifications.component.ts ***!
    \*********************************************************************/

  /*! exports provided: NotificationsComponent */

  /***/
  function srcAppComponentsNotificationsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function () {
      return NotificationsComponent;
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


    var _model_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../model/messages */
    "./src/app/model/messages.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _special_get_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../special/get-date-time */
    "./src/app/components/special/get-date-time.ts");

    var NotificationsComponent = /*#__PURE__*/function () {
      function NotificationsComponent(userService, userStore, cdr) {
        _classCallCheck(this, NotificationsComponent);

        this.userService = userService;
        this.userStore = userStore;
        this.cdr = cdr;
        this.notificationMessages = _model_messages__WEBPACK_IMPORTED_MODULE_2__["messages"].notification;
      }

      _createClass(NotificationsComponent, [{
        key: "dateTime",
        value: function dateTime(date) {
          return Object(_special_get_date_time__WEBPACK_IMPORTED_MODULE_5__["stringDateTime"])(date);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.notificationList = [];
          this.userStore.loadUserInfo().subscribe(function (user) {
            if (user) {
              // ??? какого черта
              _this9.notificationList = user.notifications.filter(function (item) {
                return item;
              });

              _this9.notificationList.reverse();

              _this9.cdr.markForCheck();
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this10 = this;

          if (this.notificationList.filter(function (notification) {
            return !notification.checked;
          }).length) {
            this.seenTimer = setTimeout(function () {
              _this10.userStore.markNotificationsAsChecked();

              _this10.userService.saveUserInfo().subscribe();

              _this10.cdr.markForCheck();
            }, 1.5 * 1000);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.seenTimer) {
            clearTimeout(this.seenTimer);
          }
        }
      }]);

      return NotificationsComponent;
    }();

    NotificationsComponent.ctorParameters = function () {
      return [{
        type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-notifications",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notifications.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notifications.component.less */
      "./src/app/components/notifications/notifications.component.less"))["default"]]
    })], NotificationsComponent);
    /***/
  },

  /***/
  "./src/app/components/popup-confirm/popup-confirm.component.less":
  /*!***********************************************************************!*\
    !*** ./src/app/components/popup-confirm/popup-confirm.component.less ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopupConfirmPopupConfirmComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.light-background {\n  background: rgba(192, 192, 192, 0.5);\n}\n.dark-background {\n  background: rgba(39, 39, 39, 0.5);\n}\n.confirm-body {\n  border-radius: 5px;\n  width: 80%;\n  max-width: 400px;\n  min-width: 280px;\n}\n.confirm-title {\n  padding-top: 10px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.confirm-light-title {\n  color: #710202;\n}\n.confirm-dark-title {\n  color: #f9bfbf;\n}\n.confirm-info {\n  padding: 20px 10px;\n}\n.confirm-info-body {\n  padding: 0 20px 10px 20px;\n}\n.danger-light-button {\n  background: #ffffff;\n  color: #640000;\n}\n.danger-light-button:hover {\n  cursor: pointer;\n  background: #8a4242;\n  color: white;\n}\n.danger-light-button:active {\n  background: #a64f4f;\n}\n.danger-dark-button {\n  background: #262829;\n  color: #f9bfbf;\n}\n.danger-dark-button:hover {\n  cursor: pointer;\n  background: #010101;\n}\n.danger-dark-button:active {\n  background: #0d0e0f;\n}\n.simple-light-button {\n  background: #ffffff;\n  color: black;\n}\n.simple-light-button:hover {\n  cursor: pointer;\n  background: #e5e5e5;\n}\n.simple-light-button:active {\n  background: #cccccc;\n}\n.simple-dark-button {\n  background: #262829;\n  color: white;\n}\n.simple-dark-button:hover {\n  cursor: pointer;\n  background: #010101;\n}\n.simple-dark-button:active {\n  background: #0d0e0f;\n}\n.chose-button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  transition: all 250ms ease;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  min-width: 110px;\n  width: 35%;\n  font-size: 16px;\n  height: 2.3em;\n  padding: 5px 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvcG9wdXAtY29uZmlybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsIi4uL2NvbXBvbmVudHMvcG9wdXAtY29uZmlybS9wb3B1cC1jb25maXJtLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9wb3B1cC1jb25maXJtL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvY29tcG9uZW50cy9wb3B1cC1jb25maXJtL3BvcHVwLWNvbmZpcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBOFhFLGFBQUE7RUFDQSxzQkFBQTtFQTdYQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5QkY7QURpQ0E7RUEwSEUsa0JBQUE7RUF4SEEsaUJBQUE7RUFDQSxVQUFBO0FDL0JGO0FEa0NBO0VBNEtFLGlCQUFBO0VBQ0Esa0JBQUE7RUEzS0EsVUFBQTtBQy9CRjtBRGtDQTtFQXFaRSxrQkFBQTtFQXRDQSxhQUFBO0VBckhBLGtDQUFBO0VBdFBBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNFLCtCQUFBO0FDL0JKO0FEbUNBO0VBQ0UsZ0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBO0VBbVZFLGFBQUE7RUFDQSxzQkFBQTtFQWpIQSxrQ0FBQTtFQWhPQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHdDQUFBO0FDbkNGO0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR5Q0E7RUFvTUUsMEJBQUE7RUFsTUEsa0JB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QUE7RUFDQSxZQUFBO0FEZ2ZGO0FDOWVFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEZ2ZKO0FDN2VFO0VBQ0UsbUJBQUE7QUQrZUo7QUMzZUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUQ2ZUY7QUMzZUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUQ2ZUo7QUMxZUU7RUFDRSxtQkFBQTtBRDRlSjtBQ3hlQTtFRmlVRSxrQ0FBQTtFQUNBLGFBQUE7RUE5SEEsMEJBQUE7RUVqTUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FEMmVGIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvcG9wdXAtY29uZmlybS9wb3B1cC1jb25maXJtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5AbWVkaWFsLXNwYWNlOiA3cHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4yZW07XG5AaHVnZS1pY29uLXdpZHRoOiA3MHB4O1xuQHNtYWxsZXN0LWljb24td2lkdGg6IDAuN2VtO1xuXG5AYmFja2dyb3VuZC1kYXJrLXRoZW1lOiAjMWQxZDFkO1xuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XG5AdGV4dC1saWdodC1jb2xvcjogbGlnaHRlbihibGFjaywgMTAlKTtcbkB0ZXh0LWRhcmstY29sb3I6IHdoaXRlO1xuXG5Ad2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5Ad2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDogIzI2MjgyOTtcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XG5cbkBsaWdodC10aGVtZS1ib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbkBmb250LXNpemU6IDE2cHg7XG5cbi8vIGNvbnRlbnRcbi5wYWdlIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgLnJpZ2h0LW1hcmdpbi1hdXRvO1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICB3aWR0aDogNzIlO1xufVxuXG4ucGFnZS11c2VyLXVuZGVmaW5lZCB7XG4gIC5ob3Jpem9udGFsLW1hcmdpbi1hdXRvO1xuICB3aWR0aDogNzIlO1xufVxuXG4uY29udHJvbC1idXR0b24ge1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIC5yb3ctZGlzcGxheTtcbiAgLmZvbnQtc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IEBtZWRpYWwtc3BhY2UgQHNwYWNlO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcbiAgfVxufVxuXG4uYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cblxuLmVkaXQtcGxhdGUge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIC5mb250LXNldDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxNSU7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIG1hcmdpbi10b3A6IEBzcGFjZTtcbn1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4vLyBkZXBlbmRzIG9uIHRoZW1lXG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogQGxpZ2h0LXRoZW1lLWJvcmRlci1jb2xvcjtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xufVxuXG4vLyB0eXBlc1xuLmZvcm0tYnV0dG9uIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMi4zZW07XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogYXV0bztcbiAgfVxufVxuXG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGxlc3Qtc3BhY2U7XG4gIHBhZGRpbmctcmlnaHQ6IEBzbWFsbGVzdC1zcGFjZTtcbn1cblxuLnBhc3N3b3JkIHtcbiAgJi1idXR0b24ge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAucG9pbnRlcjtcbiAgICAubm8tc2VsZWN0O1xuICAgIGJvcmRlci13aWR0aDogMC4wOWVtO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICAgIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbiAgfVxuXG4gICYtaW5wdXQge1xuICAgIC5pbnB1dDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG4gICYtbmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi8vIG1hcmdpbiBzZWN0aW9uXG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5yaWdodC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5yaWdodC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucmlnaHQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tcmlnaHQ6IEBzcGFjZTtcbn1cblxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtbWFyZ2luLTVwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubGVmdC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi00MHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogQHNwYWNlO1xufVxuXG4ubWFyZ2luLWF1dG8ge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnZlcnRpY2FsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnRvcC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnRvcC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi10b3A6IEBzcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLy8gcGFkZGluZyBzZWN0aW9uXG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiBAc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5wb2ludGVyIHtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vIGFsbCBtdXN0IGJlIGRvbmVcblxuLmJsaW5kLXRleHQge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuXG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG5cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbn1cblxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGluayB7XG4gIC5wb2ludGVyO1xuICAubm8tc2VsZWN0O1xuICAuYm9sZC10ZXh0O1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGNvbG9yOiAjNTk2YjlmO1xuICBtYXJnaW46IEBzcGFjZSBhdXRvO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi8vIGRvbmUgfCBob3Jpem9udGFsLW1hcmdpbi1hdXRvXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gQHNtYWxsLXNwYWNlO1xufVxuXG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi8vIGRvbmUgfCB2ZXJ0aWNhbC1tYXJnaW4tYXV0b1xuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLmxhcmdlLWljb24ge1xuICAubm8tc2VsZWN0O1xuICB3aWR0aDogQGh1Z2UtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnVzZXJuYW1lIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG4gIGhlaWdodDogMi43ZW07XG4gIHdpZHRoOiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgJi1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuNmVtO1xuICAgIGxlZnQ6IDAuNmVtO1xuICAgIGJvdHRvbTogMC42ZW07XG4gICAgcmlnaHQ6IDAuNmVtO1xuICAgIHdpZHRoOiAxLjNlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLm5vLXNlbGVjdDtcbiAgfVxufVxuXG4udGhlbWUge1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICAmLWljb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtZGFyay10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgICB9XG4gIH1cbn1cblxuLndpbmRvdy1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuXG4ubG9hZC1wb3B1cCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiBAc3BhY2UgQHNwYWNlICsgQHNtYWxsLXNwYWNlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6ICByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG5cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG5cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cblxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cblxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuXG4udXNlci1wYW5lbCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IEBzbWFsbC1zcGFjZTtcbiAgcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2ZpbGUtbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMxKTtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgwLCAwLCAwLCAwLjUxKSwgMTAlKTtcbiAgfVxufVxuXG4ucHJvZmlsZS1kYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSk7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSksIDEwJSk7XG4gIH1cbn1cbiIsIi5wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFnZS11c2VyLWRlZmluZWQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNzIlO1xufVxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzIlO1xufVxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250cm9sLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG59XG4uYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG4uZWRpdC1wbGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5wYWludC1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4uZm9ybS1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMi4zZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5mb3JtLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtLWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wYXNzd29yZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGJvcmRlci13aWR0aDogMC4wOWVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMS4yZW07XG59XG4ucGFzc3dvcmQtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhc3N3b3JkLWlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmZpZWxkLW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yaWdodC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5yaWdodC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucmlnaHQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtbWFyZ2luLTVwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5sZWZ0LW1hcmdpbi00MHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0yMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhvcml6b250YWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnZlcnRpY2FsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRvcC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm90dG9tLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ucG9pbnRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5uby1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbn1cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbn1cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5saW5rIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4ubGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIDA7XG59XG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIDEwcHg7XG59XG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4udmVydGljYWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byAwO1xufVxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNtYWxsZXN0LWljb24ge1xuICB3aWR0aDogMC43ZW07XG4gIGhlaWdodDogMC43ZW07XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5sYXJnZS1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICB3aWR0aDogNzBweDtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2Q3ZDdkNztcbiAgYm9yZGVyLWNvbG9yOiAjZDdkN2Q3O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi51c2VybmFtZSB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDIuN2VtO1xuICB3aWR0aDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLnVzZXJuYW1lLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjZlbTtcbiAgbGVmdDogMC42ZW07XG4gIGJvdHRvbTogMC42ZW07XG4gIHJpZ2h0OiAwLjZlbTtcbiAgd2lkdGg6IDEuM2VtO1xuICBtYXJnaW46IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cbi50aGVtZSB7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udGhlbWUtaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTAxMDEwO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gIzEwMTAxMDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAzMDMwMztcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwMDAwO1xufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMWQxZDFkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICNjZmNmY2Y7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjZThlOGU4O1xufVxuLndpbmRvdy1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiAjMWExYTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyNjI4Mjk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4ubG9hZC1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuLnVzZXItcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4ucHJvZmlsZS1saWdodCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLnByb2ZpbGUtbGlnaHQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgMC41MSk7XG59XG4ucHJvZmlsZS1kYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSk7XG59XG4ucHJvZmlsZS1kYXJrOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDIwNywgMjA3LCAyMDcsIDAuNzEpO1xufVxuLmxpZ2h0LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNSk7XG59XG4uZGFyay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzOSwgMzksIDM5LCAwLjUpO1xufVxuLmNvbmZpcm0tYm9keSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAyODBweDtcbn1cbi5jb25maXJtLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbn1cbi5jb25maXJtLWxpZ2h0LXRpdGxlIHtcbiAgY29sb3I6ICM3MTAyMDI7XG59XG4uY29uZmlybS1kYXJrLXRpdGxlIHtcbiAgY29sb3I6ICNmOWJmYmY7XG59XG4uY29uZmlybS1pbmZvIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuLmNvbmZpcm0taW5mby1ib2R5IHtcbiAgcGFkZGluZzogMCAyMHB4IDEwcHggMjBweDtcbn1cbi5kYW5nZXItbGlnaHQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICM2NDAwMDA7XG59XG4uZGFuZ2VyLWxpZ2h0LWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzhhNDI0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRhbmdlci1saWdodC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2E2NGY0Zjtcbn1cbi5kYW5nZXItZGFyay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMjYyODI5O1xuICBjb2xvcjogI2Y5YmZiZjtcbn1cbi5kYW5nZXItZGFyay1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMwMTAxMDE7XG59XG4uZGFuZ2VyLWRhcmstYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICMwZDBlMGY7XG59XG4uc2ltcGxlLWxpZ2h0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5zaW1wbGUtbGlnaHQtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xufVxuLnNpbXBsZS1saWdodC1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcbn1cbi5zaW1wbGUtZGFyay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMjYyODI5O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc2ltcGxlLWRhcmstYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMDEwMTAxO1xufVxuLnNpbXBsZS1kYXJrLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMGQwZTBmO1xufVxuLmNob3NlLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG1pbi13aWR0aDogMTEwcHg7XG4gIHdpZHRoOiAzNSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5cbkBtYXgtd2lkdGg6IDQwMHB4O1xuQG1pbi13aWR0aDogMjgwcHg7XG5AYnV0dG9uLXdpZHRoOiAxMTBweDtcbkBidXR0b24tZm9udC1zaXplOiAxNnB4O1xuQHJlZC1jb2xvcjogI2EwNWY1ZjtcblxuLmxpZ2h0LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuNSk7XG59XG5cbi5kYXJrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDM5LCAzOSwgMzksIDAuNSk7XG59XG5cbi5jb25maXJtLWJvZHkge1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgd2lkdGg6IDgwJTtcbiAgbWF4LXdpZHRoOiBAbWF4LXdpZHRoO1xuICBtaW4td2lkdGg6IEBtaW4td2lkdGg7XG59XG5cbi5jb25maXJtLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLmNvbmZpcm0tbGlnaHQtdGl0bGUge1xuICBjb2xvcjogIzcxMDIwMjtcbn1cblxuLmNvbmZpcm0tZGFyay10aXRsZSB7XG4gIGNvbG9yOiAjZjliZmJmO1xufVxuXG4uY29uZmlybS1pbmZvIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLmNvbmZpcm0taW5mby1ib2R5IHtcbiAgcGFkZGluZzogMCBAc3BhY2UgQHNtYWxsLXNwYWNlIEBzcGFjZTtcbn1cblxuLmRhbmdlci1saWdodC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGNvbG9yOiAjNjQwMDAwO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBzYXR1cmF0ZShkYXJrZW4oQHJlZC1jb2xvciwgMTAlKSwgMTAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogc2F0dXJhdGUoZGFya2VuKEByZWQtY29sb3IsIDIlKSwgMTAlKTtcbiAgfVxufVxuXG4uZGFuZ2VyLWRhcmstYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG4gIGNvbG9yOiAjZjliZmJmO1xuXG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQsIDE1JSk7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kLCAxMCUpO1xuICB9XG59XG5cbi5zaW1wbGUtbGlnaHQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBjb2xvcjogYmxhY2s7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG4gIH1cblxuICAmOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKCNlNWU1ZTUsIDEwJSk7XG4gIH1cbn1cblxuLnNpbXBsZS1kYXJrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAd2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZCwgMTUlKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQsIDEwJSk7XG4gIH1cbn1cblxuLmNob3NlLWJ1dHRvbiB7XG4gIC5idXR0b247XG4gIC5zbW9vdGgtZmFzdC1hbmltYXRpb247XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWluLXdpZHRoOiBAYnV0dG9uLXdpZHRoO1xuICB3aWR0aDogMzUlO1xuICBmb250LXNpemU6IEBidXR0b24tZm9udC1zaXplO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNwYWNlO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/popup-confirm/popup-confirm.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/components/popup-confirm/popup-confirm.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PopupConfirmComponent */

  /***/
  function srcAppComponentsPopupConfirmPopupConfirmComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopupConfirmComponent", function () {
      return PopupConfirmComponent;
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


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");

    var PopupConfirmComponent = /*#__PURE__*/function () {
      function PopupConfirmComponent(themeStore, cdr) {
        _classCallCheck(this, PopupConfirmComponent);

        this.themeStore = themeStore;
        this.cdr = cdr;
        this.chosen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(PopupConfirmComponent, [{
        key: "onConfirm",
        value: function onConfirm() {
          this.chosen.emit(true);
        }
      }, {
        key: "onCancel",
        value: function onCancel() {
          this.chosen.emit(false);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.themeStore.loadThemeInfo().subscribe(function (theme) {
            _this11.darkTheme = theme;

            _this11.cdr.markForCheck();
          });
        }
      }]);

      return PopupConfirmComponent;
    }();

    PopupConfirmComponent.ctorParameters = function () {
      return [{
        type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_2__["ThemeStoreService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PopupConfirmComponent.prototype, "question", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PopupConfirmComponent.prototype, "info", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PopupConfirmComponent.prototype, "confirm", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PopupConfirmComponent.prototype, "cancel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], PopupConfirmComponent.prototype, "chosen", void 0);
    PopupConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-popup-confirm",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popup-confirm.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-confirm/popup-confirm.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popup-confirm.component.less */
      "./src/app/components/popup-confirm/popup-confirm.component.less"))["default"]]
    })], PopupConfirmComponent);
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


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.notification-sign {\n  font-size: 16px;\n}\n.active:active {\n  background: #5f508d;\n}\n.red-button {\n  color: #a40800;\n}\n.button-title {\n  margin-left: 20px;\n}\n.set-font-size {\n  font-size: 17px;\n}\n.hover-effect:hover .button-icon {\n  visibility: visible;\n}\n.button-icon {\n  position: absolute;\n  width: 1em;\n  height: 1em;\n  padding: 5px 10px 5px 5px;\n  left: 5px;\n  top: 0;\n  bottom: 0;\n  border-right: 0.001em solid #797979;\n}\n.status-dark-theme {\n  color: #532478;\n  background: #f9f9f9;\n  transition: all 500ms ease;\n}\n.status-light-theme {\n  color: white;\n  background: #5f508d;\n  transition: all 500ms ease;\n}\n.avatar {\n  max-width: 150px;\n}\n.edit-plate {\n  font-family: \"Georgia\", sans-serif;\n  min-width: 170px;\n  margin-left: 10px;\n  border-radius: 5px;\n}\n.first-button {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.last-button {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.control-button {\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n}\n.button-dark-theme:hover {\n  background: #b9b9b9;\n  color: #1a1a1a;\n}\n.button-light-theme:hover {\n  background: #ededed;\n}\n.router {\n  font-family: \"Georgia\", sans-serif;\n  margin-left: 10px;\n  border-radius: 5px;\n}\n.plate {\n  font-family: \"Georgia\", sans-serif;\n  margin-left: 10px;\n  padding: 20px 10px;\n  border-radius: 5px;\n}\n.status {\n  text-align: center;\n  font-weight: bold;\n  max-width: 120px;\n  padding: 5px 20px;\n  border-radius: 5px;\n  transition: all 500ms ease;\n}\n.user-data-ico {\n  width: 120px;\n  margin: 10px auto;\n  padding: 10px;\n}\n.user-data-username {\n  text-align: center;\n  max-width: 120px;\n  margin-top: 10px;\n  font-weight: bold;\n  line-height: 1.5;\n}\n.message {\n  margin-top: 20px;\n  padding-left: 10px;\n  text-align: left;\n  font-weight: bold;\n}\n.part {\n  font-weight: lighter;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvcHJvZmlsZS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsIi4uL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9wcm9maWxlL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBOFhFLGFBQUE7RUFDQSxzQkFBQTtFQTdYQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5QkY7QURpQ0E7RUEwSEUsa0JBQUE7RUF4SEEsaUJBQUE7RUFDQSxVQUFBO0FDL0JGO0FEa0NBO0VBNEtFLGlCQUFBO0VBQ0Esa0JBQUE7RUEzS0EsVUFBQTtBQy9CRjtBRGtDQTtFQXFaRSxrQkFBQTtFQXRDQSxhQUFBO0VBckhBLGtDQUFBO0VBdFBBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNFLCtCQUFBO0FDL0JKO0FEbUNBO0VBQ0UsZ0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBO0VBbVZFLGFBQUE7RUFDQSxzQkFBQTtFQWpIQSxrQ0FBQTtFQWhPQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHdDQUFBO0FDbkNGO0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR5Q0E7RUFvTUUsMEJBQUE7RUFsTUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFD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O0VGNk5FLGtDQUFBO0VFM05BLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUQ0ZUY7QUN4ZUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUQwZUo7QUNyZUU7RUFDRSxtQkFBQTtBRHVlSjtBQ25lQTtFRnVNRSxrQ0FBQTtFRXJNQSxpQkFBQTtFQUNBLGtCQUFBO0FEcWVGO0FDbGVBO0VGaU1FLGtDQUFBO0VFL0xBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBRG9lRjtBQ2plQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUY2S0EsMEJBQUE7QUN1VEY7QUM5ZEU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FEZ2VKO0FDOWRFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRGdlSjtBQzVkQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEOGRGO0FDM2RBO0VBQ0Usb0JBQUE7QUQ2ZEYiLCJmaWxlIjoiLi4vY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAc21hbGxlc3Qtc3BhY2U6IDVweDtcbkBzbWFsbC1zcGFjZTogMTBweDtcbkBtZWRpYWwtc3BhY2U6IDdweDtcbkBzcGFjZTogMjBweDtcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcbkBncmV5LWNvbG9yOiAjZDdkN2Q3O1xuQGdyZWVuLWNvbG9yOiAjMDBhMTAwO1xuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xuQGJsdWUtY29sb3I6ICM1OTZiOWY7XG5AZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGZlZjtcbkBlcnJvci10ZXh0LWNvbG9yOiAjMWUwNDU2O1xuQGJvcmRlci1yYWRpdXM6IDVweDtcbkBmb3JtLXdpZHRoOiAyNDBweDtcbkBzbWFsbC1pY29uLXdpZHRoOiAxLjJlbTtcbkBodWdlLWljb24td2lkdGg6IDcwcHg7XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMxZDFkMWQ7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjMjYyODI5O1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGxpZ2h0LXRoZW1lLWJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuXG5AZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuQGZvbnQtc2l6ZTogMTZweDtcblxuLy8gY29udGVudFxuLnBhZ2Uge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4ucGFnZS11c2VyLWRlZmluZWQge1xuICAucmlnaHQtbWFyZ2luLWF1dG87XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIHdpZHRoOiA3MiU7XG59XG5cbi5wYWdlLXVzZXItdW5kZWZpbmVkIHtcbiAgLmhvcml6b250YWwtbWFyZ2luLWF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG5cbi5jb250cm9sLWJ1dHRvbiB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgLnJvdy1kaXNwbGF5O1xuICAuZm9udC1zZXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogQG1lZGlhbC1zcGFjZSBAc3BhY2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuICB9XG59XG5cbi5idXR0b24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuXG4uZWRpdC1wbGF0ZSB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgLmZvbnQtc2V0O1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgbWFyZ2luLXRvcDogQHNwYWNlO1xufVxuXG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi8vIGRlcGVuZHMgb24gdGhlbWVcbi5wYWludC1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiBAbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG59XG5cbi8vIHR5cGVzXG4uZm9ybS1idXR0b24ge1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG59XG5cbi5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbGVzdC1zcGFjZTtcbiAgcGFkZGluZy1yaWdodDogQHNtYWxsZXN0LXNwYWNlO1xufVxuXG4ucGFzc3dvcmQge1xuICAmLWJ1dHRvbiB7XG4gICAgLmNvbHVtbi1kaXNwbGF5O1xuICAgIC5wb2ludGVyO1xuICAgIC5uby1zZWxlY3Q7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA5ZW07XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG4gICAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xuICB9XG5cbiAgJi1pbnB1dCB7XG4gICAgLmlucHV0O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuXG4uZmllbGQge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IEBzbWFsbC1zcGFjZTtcbiAgJi1uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLy8gbWFyZ2luIHNlY3Rpb25cbi5yaWdodC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJpZ2h0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLnJpZ2h0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5yaWdodC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1yaWdodDogQHNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubGVmdC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tNXBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5sZWZ0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IEBzcGFjZTtcbn1cblxuLmxlZnQtbWFyZ2luLTQwcHgge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtcGFkZGluZy0yMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiBAc3BhY2U7XG59XG5cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhvcml6b250YWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udmVydGljYWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4udG9wLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4udG9wLW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXRvcDogQHNwYWNlO1xufVxuXG4uYm90dG9tLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4vLyBwYWRkaW5nIHNlY3Rpb25cbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLnBvaW50ZXIge1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLy8gYWxsIG11c3QgYmUgZG9uZVxuXG4uYmxpbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uby1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG5cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cblxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xufVxuXG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saW5rIHtcbiAgLnBvaW50ZXI7XG4gIC5uby1zZWxlY3Q7XG4gIC5ib2xkLXRleHQ7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgY29sb3I6ICM1OTZiOWY7XG4gIG1hcmdpbjogQHNwYWNlIGF1dG87XG59XG5cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xufVxuXG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlIDAgMDtcbn1cblxuLy8gZG9uZSB8IGhvcml6b250YWwtbWFyZ2luLWF1dG9cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLy8gZG9uZSB8IHZlcnRpY2FsLW1hcmdpbi1hdXRvXG4udmVydGljYWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuXG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byAwO1xufVxuXG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNtYWxsZXN0LWljb24ge1xuICB3aWR0aDogQHNtYWxsZXN0LWljb24td2lkdGg7XG4gIGhlaWdodDogQHNtYWxsZXN0LWljb24td2lkdGg7XG59XG5cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xufVxuXG4ubGFyZ2UtaWNvbiB7XG4gIC5uby1zZWxlY3Q7XG4gIHdpZHRoOiBAaHVnZS1pY29uLXdpZHRoO1xufVxuXG4uc2lnbi1pbiB7XG4gIC5idXR0b247XG4gIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgYmFja2dyb3VuZDogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5zaWduLXVwIHtcbiAgLmJ1dHRvbjtcbiAgYmFja2dyb3VuZDogQGdyZXktY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZXktY29sb3I7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udXNlcm5hbWUge1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgd2lkdGg6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICAmLWltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC42ZW07XG4gICAgbGVmdDogMC42ZW07XG4gICAgYm90dG9tOiAwLjZlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgd2lkdGg6IDEuM2VtO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAubm8tc2VsZWN0O1xuICB9XG59XG5cbi50aGVtZSB7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gICYtaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAyMCUpO1xuICAgIH1cbiAgfVxufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICAgIH1cbiAgfVxufVxuXG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG5cbi5sb2FkLXBvcHVwIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG5cbi51c2VyLXBhbmVsIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogQHNtYWxsLXNwYWNlO1xuICByaWdodDogQHNtYWxsLXNwYWNlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucHJvZmlsZS1saWdodCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMzEpO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDAsIDAsIDAsIDAuNTEpLCAxMCUpO1xuICB9XG59XG5cbi5wcm9maWxlLWRhcmsge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKTtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKSwgMTAlKTtcbiAgfVxufVxuIiwiLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA3MiU7XG59XG4ucGFnZS11c2VyLXVuZGVmaW5lZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG4uY29udHJvbC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cbi5idXR0b24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cbi5lZGl0LXBsYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxNSU7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5mb3JtLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0tYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLnBhc3N3b3JkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA5ZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5wYXNzd29yZC1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFzc3dvcmQtaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uZmllbGQtbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnJpZ2h0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnJpZ2h0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cbi5yaWdodC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yaWdodC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbi5sZWZ0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ubGVmdC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubGVmdC1tYXJnaW4tNXBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG4ubGVmdC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmxlZnQtbWFyZ2luLTQwcHgge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubGVmdC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4ubGVmdC1wYWRkaW5nLTIwcHgge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG4ubWFyZ2luLWF1dG8ge1xuICBtYXJnaW46IGF1dG87XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4udmVydGljYWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLnRvcC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udG9wLW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ib3R0b20tbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnN0YW5kYXJkLXBhZGRpbmctYWxsIHtcbiAgcGFkZGluZzogMjBweCAxMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5wb2ludGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJsaW5kLXRleHQge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLm5vLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjNTk2YjlmO1xuICBtYXJnaW46IDIwcHggYXV0bztcbn1cbi5saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbn1cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLmxhcmdlLWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIHdpZHRoOiA3MHB4O1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYTEwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMTAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zaWduLXVwIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnVzZXJuYW1lIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMi43ZW07XG4gIHdpZHRoOiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4udXNlcm5hbWUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNmVtO1xuICBsZWZ0OiAwLjZlbTtcbiAgYm90dG9tOiAwLjZlbTtcbiAgcmlnaHQ6IDAuNmVtO1xuICB3aWR0aDogMS4zZW07XG4gIG1hcmdpbjogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMTAxMDEwO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDMwMzAzO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMxZDFkMWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzI2MjgyOTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4udXNlci1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMTtcbn1cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4ucHJvZmlsZS1saWdodDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAwLjUxKTtcbn1cbi5wcm9maWxlLWRhcmsge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKTtcbn1cbi5wcm9maWxlLWRhcms6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMjA3LCAyMDcsIDIwNywgMC43MSk7XG59XG4ubm90aWZpY2F0aW9uLXNpZ24ge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uYWN0aXZlOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICM1ZjUwOGQ7XG59XG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLnNldC1mb250LXNpemUge1xuICBmb250LXNpemU6IDE3cHg7XG59XG4uaG92ZXItZWZmZWN0OmhvdmVyIC5idXR0b24taWNvbiB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uYnV0dG9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggNXB4O1xuICBsZWZ0OiA1cHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDAuMDAxZW0gc29saWQgIzc5Nzk3OTtcbn1cbi5zdGF0dXMtZGFyay10aGVtZSB7XG4gIGNvbG9yOiAjNTMyNDc4O1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zdGF0dXMtbGlnaHQtdGhlbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM1ZjUwOGQ7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmF2YXRhciB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG4uZWRpdC1wbGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgbWluLXdpZHRoOiAxNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5maXJzdC1idXR0b24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubGFzdC1idXR0b24ge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uY29udHJvbC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYnV0dG9uLWRhcmstdGhlbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5idXR0b24tbGlnaHQtdGhlbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuLnJvdXRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wbGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnVzZXItZGF0YS1pY28ge1xuICB3aWR0aDogMTIwcHg7XG4gIG1hcmdpbjogMTBweCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnVzZXItZGF0YS11c2VybmFtZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG4ubWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGFydCB7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGljb24td2lkdGg6IDEyMHB4O1xuQHN0YXR1cy1kYXJrLWJhY2tncm91bmQ6ICNmOWY5Zjk7XG5Ac3RhdHVzLWxpZ2h0LWJhY2tncm91bmQ6ICM1ZjUwOGQ7XG5Ac3RhdHVzLWRhcmstY29sb3ItdGV4dDogIzUzMjQ3ODtcbkBtZWRpYWwtc3BhY2U6IDdweDtcblxuLm5vdGlmaWNhdGlvbi1zaWduIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYWN0aXZlIHtcbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICM1ZjUwOGQ7XG4gIH1cbn1cblxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2U7XG59XG5cbi5zZXQtZm9udC1zaXplIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uaG92ZXItZWZmZWN0IHtcbiAgJjpob3ZlciB7XG4gICAgLmJ1dHRvbi1pY29uIHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2UgQHNtYWxsZXN0LXNwYWNlIEBzbWFsbGVzdC1zcGFjZTtcbiAgbGVmdDogQHNtYWxsZXN0LXNwYWNlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJpZ2h0OiAwLjAwMWVtIHNvbGlkICM3OTc5Nzk7XG59XG5cbi5zdGF0dXMtZGFyay10aGVtZSB7XG4gIGNvbG9yOiBAc3RhdHVzLWRhcmstY29sb3ItdGV4dDtcbiAgYmFja2dyb3VuZDogQHN0YXR1cy1kYXJrLWJhY2tncm91bmQ7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4uc3RhdHVzLWxpZ2h0LXRoZW1lIHtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAc3RhdHVzLWxpZ2h0LWJhY2tncm91bmQ7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4uYXZhdGFyIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmVkaXQtcGxhdGUge1xuICAuZm9udC1zZXQ7XG4gIG1pbi13aWR0aDogMTcwcHg7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4uZmlyc3QtYnV0dG9uIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLmxhc3QtYnV0dG9uIHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgLmZvbnQtc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IEBtZWRpYWwtc3BhY2UgQHNwYWNlO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uYnV0dG9uLWRhcmstdGhlbWUge1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQHN0YXR1cy1kYXJrLWJhY2tncm91bmQsIDI1JSk7XG4gICAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICB9XG59XG5cbi5idXR0b24tbGlnaHQtdGhlbWUge1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCA3JSk7XG4gIH1cbn1cblxuLnJvdXRlciB7XG4gIC5mb250LXNldDtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5wbGF0ZSB7XG4gIC5mb250LXNldDtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5zdGF0dXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXgtd2lkdGg6IEBpY29uLXdpZHRoO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNwYWNlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi8vIHRlbXBvcmFyeSBzdHlsZXNcbi51c2VyLWRhdGEge1xuICAmLWljbyB7XG4gICAgd2lkdGg6IEBpY29uLXdpZHRoO1xuICAgIG1hcmdpbjogQHNtYWxsLXNwYWNlIGF1dG87XG4gICAgcGFkZGluZzogQHNtYWxsLXNwYWNlO1xuICB9XG4gICYtdXNlcm5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IEBpY29uLXdpZHRoO1xuICAgIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cbi5tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogQHNwYWNlO1xuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXJ0IHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4iXX0= */";
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


    var _model_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/messages */
    "./src/app/model/messages.ts");
    /* harmony import */


    var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/cookies-service/cookies.service */
    "./src/app/services/cookies-service/cookies.service.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(userService, cookieService, userStore, themeStore, router, cdr) {
        _classCallCheck(this, ProfileComponent);

        this.userService = userService;
        this.cookieService = cookieService;
        this.userStore = userStore;
        this.themeStore = themeStore;
        this.router = router;
        this.cdr = cdr;
        this.confirmMessages = _model_messages__WEBPACK_IMPORTED_MODULE_3__["messages"].confirmation;
      }

      _createClass(ProfileComponent, [{
        key: "logout",
        value: function logout() {
          this.userStore.logout();
          this.cookieService.deleteCookies();
          this.router.navigate([""]).then();
        }
      }, {
        key: "showPopup",
        value: function showPopup() {
          this.askConfirm = true;
        }
      }, {
        key: "hidePopup",
        value: function hidePopup() {
          this.askConfirm = false;
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(value) {
          var _this12 = this;

          if (!value) {
            this.hidePopup();
            return;
          }

          this.userService.deleteAccount(this.user._id).subscribe(function (answer) {
            if (answer) {
              _this12.userStore.logout();

              _this12.router.navigate([""]).then();
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.askConfirm = false;
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          var _this13 = this;

          this.themeStore.loadThemeInfo().subscribe(function (theme) {
            return _this13.darkTheme = theme;
          });
          this.subscriber = this.userStore.loadUserInfo().subscribe(function (user) {
            _this13.userExist = !!user;
            _this13.user = user;
            var count = 0;

            if (user && _this13.user.notifications) {
              _this13.user.notifications.forEach(function (item) {
                if (!item.checked) {
                  count += 1;
                }
              });

              _this13.unreadNotification = count;
            }

            _this13.cdr.markForCheck();
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
        type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"]
      }, {
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_7__["UserStoreService"]
      }, {
        type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_6__["ThemeStoreService"]
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
  "./src/app/components/settings/settings.component.less":
  /*!*************************************************************!*\
    !*** ./src/app/components/settings/settings.component.less ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSettingsSettingsComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.danger {\n  background: #cea9a9;\n}\n.simple {\n  background: #b5baca;\n}\n.section-highlight {\n  font-size: 18px;\n  font-weight: bold;\n  border: none;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.form {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10%;\n  margin-right: auto;\n  min-width: 250px;\n  width: 30%;\n  max-width: 500px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvc2V0dGluZ3MvTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCIuLi9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9zZXR0aW5ncy9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBOFhFLGFBQUE7RUFDQSxzQkFBQTtFQTdYQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5QkY7QURpQ0E7RUEwSEUsa0JBQUE7RUF4SEEsaUJBQUE7RUFDQSxVQUFBO0FDL0JGO0FEa0NBO0VBNEtFLGlCQUFBO0VBQ0Esa0JBQUE7RUEzS0EsVUFBQTtBQy9CRjtBRGtDQTtFQXFaRSxrQkFBQTtFQXRDQSxhQUFBO0VBckhBLGtDQUFBO0VBdFBBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNFLCtCQUFBO0FDL0JKO0FEbUNBO0VBQ0UsZ0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBO0VBbVZFLGFBQUE7RUFDQSxzQkFBQTtFQWpIQSxrQ0FBQTtFQWhPQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHdDQUFBO0FDbkNGO0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR5Q0E7RUFvTUUsMEJBQUE7RUFsTUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVB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QTtFQUNBLG1CQUFBO0VBblJBLDBCQUFBO0FDNktGO0FEMEdBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBMVJBLDBCQUFBO0FDbUxGO0FEMkdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN6R0Y7QUQ0R0E7RUFDRSxvQ0FBQTtBQzFHRjtBRDZHQTtFQUNFLGlDQUFBO0FDM0dGO0FEOEdBO0VBQ0Usb0NBQUE7QUM1R0Y7QUQrR0E7RUFDRSxpQ0FBQTtBQzdHRjtBRGdIQTtFQUNFLGNBQUE7QUM5R0Y7QURpSEE7RUFDRSxjQUFBO0FDL0dGO0FEa0hBO0VBcE1FLGFBQUE7RUFDQSxzQkFBQTtFQXFNQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDL0dGO0FEa0hBO0VBQ0UseUNBQUE7QUNoSEY7QURpSEU7RUFDRSx1Q0FBQTtBQy9HSjtBRG1IQTtFQUNFLCtDQUFBO0FDakhGO0FEa0hFO0VBQ0UsNkNBQUE7QUNoSEo7QUNsZ0JBO0VBQ0UsbUJBQUE7QURvZ0JGO0FDamdCQTtFQUNFLG1CQUFBO0FEbWdCRjtBQ2hnQkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBRGtnQkY7QUMvZkE7RUY0WUUsYUFBQTtFQUNBLHNCQUFBO0VBeE9BLGdCQUFBO0VBcEJBLGtCQUFBO0VFN0lBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FEa2dCRiIsImZpbGUiOiIuLi9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5AbWVkaWFsLXNwYWNlOiA3cHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4yZW07XG5AaHVnZS1pY29uLXdpZHRoOiA3MHB4O1xuQHNtYWxsZXN0LWljb24td2lkdGg6IDAuN2VtO1xuXG5AYmFja2dyb3VuZC1kYXJrLXRoZW1lOiAjMWQxZDFkO1xuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XG5AdGV4dC1saWdodC1jb2xvcjogbGlnaHRlbihibGFjaywgMTAlKTtcbkB0ZXh0LWRhcmstY29sb3I6IHdoaXRlO1xuXG5Ad2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5Ad2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDogIzI2MjgyOTtcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XG5cbkBsaWdodC10aGVtZS1ib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbkBmb250LXNpemU6IDE2cHg7XG5cbi8vIGNvbnRlbnRcbi5wYWdlIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgLnJpZ2h0LW1hcmdpbi1hdXRvO1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICB3aWR0aDogNzIlO1xufVxuXG4ucGFnZS11c2VyLXVuZGVmaW5lZCB7XG4gIC5ob3Jpem9udGFsLW1hcmdpbi1hdXRvO1xuICB3aWR0aDogNzIlO1xufVxuXG4uY29udHJvbC1idXR0b24ge1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIC5yb3ctZGlzcGxheTtcbiAgLmZvbnQtc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IEBtZWRpYWwtc3BhY2UgQHNwYWNlO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcbiAgfVxufVxuXG4uYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cblxuLmVkaXQtcGxhdGUge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIC5mb250LXNldDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxNSU7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIG1hcmdpbi10b3A6IEBzcGFjZTtcbn1cblxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4vLyBkZXBlbmRzIG9uIHRoZW1lXG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogQGxpZ2h0LXRoZW1lLWJvcmRlci1jb2xvcjtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xufVxuXG4vLyB0eXBlc1xuLmZvcm0tYnV0dG9uIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMi4zZW07XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gICY6ZGlzYWJsZWQge1xuICAgIGN1cnNvcjogYXV0bztcbiAgfVxufVxuXG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGxlc3Qtc3BhY2U7XG4gIHBhZGRpbmctcmlnaHQ6IEBzbWFsbGVzdC1zcGFjZTtcbn1cblxuLnBhc3N3b3JkIHtcbiAgJi1idXR0b24ge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAucG9pbnRlcjtcbiAgICAubm8tc2VsZWN0O1xuICAgIGJvcmRlci13aWR0aDogMC4wOWVtO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICAgIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbiAgfVxuXG4gICYtaW5wdXQge1xuICAgIC5pbnB1dDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gIH1cbn1cblxuLmZpZWxkIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG4gICYtbmFtZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG5cbi8vIG1hcmdpbiBzZWN0aW9uXG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5yaWdodC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5yaWdodC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucmlnaHQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tcmlnaHQ6IEBzcGFjZTtcbn1cblxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtbWFyZ2luLTVwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4ubGVmdC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi00MHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogQHNwYWNlO1xufVxuXG4ubWFyZ2luLWF1dG8ge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnZlcnRpY2FsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLnRvcC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnRvcC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi10b3A6IEBzcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLy8gcGFkZGluZyBzZWN0aW9uXG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiBAc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5wb2ludGVyIHtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vIGFsbCBtdXN0IGJlIGRvbmVcblxuLmJsaW5kLXRleHQge1xuICBjb2xvcjogI2IzYjNiMztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuXG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG5cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbn1cblxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbn1cblxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubGluayB7XG4gIC5wb2ludGVyO1xuICAubm8tc2VsZWN0O1xuICAuYm9sZC10ZXh0O1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGNvbG9yOiAjNTk2YjlmO1xuICBtYXJnaW46IEBzcGFjZSBhdXRvO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi8vIGRvbmUgfCBob3Jpem9udGFsLW1hcmdpbi1hdXRvXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gQHNtYWxsLXNwYWNlO1xufVxuXG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi8vIGRvbmUgfCB2ZXJ0aWNhbC1tYXJnaW4tYXV0b1xuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLmxhcmdlLWljb24ge1xuICAubm8tc2VsZWN0O1xuICB3aWR0aDogQGh1Z2UtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnVzZXJuYW1lIHtcbiAgLnNtb290aC1hbmltYXRpb247XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG4gIGhlaWdodDogMi43ZW07XG4gIHdpZHRoOiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgJi1pbWcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDAuNmVtO1xuICAgIGxlZnQ6IDAuNmVtO1xuICAgIGJvdHRvbTogMC42ZW07XG4gICAgcmlnaHQ6IDAuNmVtO1xuICAgIHdpZHRoOiAxLjNlbTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgLm5vLXNlbGVjdDtcbiAgfVxufVxuXG4udGhlbWUge1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICAmLWljb24ge1xuICAgIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtZGFyay10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAmLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDFlbSBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgICB9XG4gIH1cbn1cblxuLndpbmRvdy1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuXG4ubG9hZC1wb3B1cCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiBAc3BhY2UgQHNwYWNlICsgQHNtYWxsLXNwYWNlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6ICByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG5cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG5cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cblxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cblxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuXG4udXNlci1wYW5lbCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IEBzbWFsbC1zcGFjZTtcbiAgcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbiAgei1pbmRleDogMTtcbn1cblxuLnByb2ZpbGUtbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMxKTtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgwLCAwLCAwLCAwLjUxKSwgMTAlKTtcbiAgfVxufVxuXG4ucHJvZmlsZS1kYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSk7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSksIDEwJSk7XG4gIH1cbn1cbiIsIi5wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucGFnZS11c2VyLWRlZmluZWQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNzIlO1xufVxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogNzIlO1xufVxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb250cm9sLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG59XG4uYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG4uZWRpdC1wbGF0ZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5wYWludC1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgY29sb3I6ICMxYTFhMWE7XG59XG4uZm9ybS1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMi4zZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5mb3JtLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mb3JtLWJ1dHRvbjpkaXNhYmxlZCB7XG4gIGN1cnNvcjogYXV0bztcbn1cbi5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbi5wYXNzd29yZC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIGJvcmRlci13aWR0aDogMC4wOWVtO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMS4yZW07XG59XG4ucGFzc3dvcmQtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhc3N3b3JkLWlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmZpZWxkLW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yaWdodC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5yaWdodC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucmlnaHQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtbWFyZ2luLTVwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5sZWZ0LW1hcmdpbi00MHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0yMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhvcml6b250YWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnZlcnRpY2FsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRvcC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm90dG9tLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ucG9pbnRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5uby1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbn1cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbn1cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5saW5rIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4ubGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIDA7XG59XG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIDEwcHg7XG59XG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4udmVydGljYWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byAwO1xufVxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnNtYWxsZXN0LWljb24ge1xuICB3aWR0aDogMC43ZW07XG4gIGhlaWdodDogMC43ZW07XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5sYXJnZS1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICB3aWR0aDogNzBweDtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2Q3ZDdkNztcbiAgYm9yZGVyLWNvbG9yOiAjZDdkN2Q3O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi51c2VybmFtZSB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBoZWlnaHQ6IDIuN2VtO1xuICB3aWR0aDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLnVzZXJuYW1lLWltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjZlbTtcbiAgbGVmdDogMC42ZW07XG4gIGJvdHRvbTogMC42ZW07XG4gIHJpZ2h0OiAwLjZlbTtcbiAgd2lkdGg6IDEuM2VtO1xuICBtYXJnaW46IGF1dG87XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cbi50aGVtZSB7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4udGhlbWUtaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMTAxMDEwO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gIzEwMTAxMDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzAzMDMwMztcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwMDAwO1xufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMWQxZDFkO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICNjZmNmY2Y7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjZThlOGU4O1xufVxuLndpbmRvdy1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiAjMWExYTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyNjI4Mjk7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4ubG9hZC1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuLnVzZXItcGFuZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDE7XG59XG4ucHJvZmlsZS1saWdodCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMzEpO1xufVxuLnByb2ZpbGUtbGlnaHQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMCwgMCwgMCwgMC41MSk7XG59XG4ucHJvZmlsZS1kYXJrIHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMjMyLCAyMzIsIDIzMiwgMC43MSk7XG59XG4ucHJvZmlsZS1kYXJrOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDIwNywgMjA3LCAyMDcsIDAuNzEpO1xufVxuLmRhbmdlciB7XG4gIGJhY2tncm91bmQ6ICNjZWE5YTk7XG59XG4uc2ltcGxlIHtcbiAgYmFja2dyb3VuZDogI2I1YmFjYTtcbn1cbi5zZWN0aW9uLWhpZ2hsaWdodCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tbGVmdDogMTAlO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIHdpZHRoOiAzMCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5cbi5kYW5nZXIge1xuICBiYWNrZ3JvdW5kOiAjY2VhOWE5O1xufVxuXG4uc2ltcGxlIHtcbiAgYmFja2dyb3VuZDogI2I1YmFjYTtcbn1cblxuLnNlY3Rpb24taGlnaGxpZ2h0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4uZm9ybSB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgLmxlZnQtbWFyZ2luLTEwcGVyY2VudDtcbiAgLnJpZ2h0LW1hcmdpbi1hdXRvO1xuICBtaW4td2lkdGg6IDI1MHB4O1xuICB3aWR0aDogMzAlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4uYnV0dG9uLXdpZHRoIHtcblxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/settings/settings.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/settings/settings.component.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsComponent */

  /***/
  function srcAppComponentsSettingsSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsComponent", function () {
      return SettingsComponent;
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


    var _custom_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../custom-validators/password-match.validator */
    "./src/app/custom-validators/password-match.validator.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");

    var SettingsComponent = /*#__PURE__*/function () {
      function SettingsComponent(userService, userStore) {
        _classCallCheck(this, SettingsComponent);

        this.userService = userService;
        this.userStore = userStore;
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          passwordChange: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            newPasswordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            submit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Сохранить"),
            cancel: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Отменить")
          }, Object(_custom_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_3__["passwordMatch"])("newPassword", "newPasswordConfirm"))
        });
      }

      _createClass(SettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SettingsComponent;
    }();

    SettingsComponent.ctorParameters = function () {
      return [{
        type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_5__["UserStoreService"]
      }];
    };

    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-settings",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./settings.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./settings.component.less */
      "./src/app/components/settings/settings.component.less"))["default"]]
    })], SettingsComponent);
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


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.remove-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  border-left: none;\n}\n.set-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.right-icon {\n  outline: none;\n  border-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  background: #ffffff;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n  z-index: 0;\n}\n.right-icon-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  background: #ffffff;\n  width: 1.2em;\n}\n.form {\n  padding: 20px;\n  font-family: \"Georgia\", sans-serif;\n  position: relative;\n  min-width: 240px;\n  width: 35%;\n  border-radius: 5px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-text {\n  margin-bottom: 10px;\n}\n.form-field-input {\n  outline: none;\n  border-radius: 5px;\n  background: #ffffff;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n}\n.form-field-input-password {\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  height: 2em;\n  font-size: 16px;\n  outline: none;\n}\n.form-field-input-login-loading {\n  height: 100%;\n}\n.form-submit {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 20px;\n  font-size: 16px;\n  height: 2.3em;\n  background: #596b9f;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  transition: all 500ms ease;\n}\n.form-submit:hover {\n  cursor: pointer;\n  background: #3d5088;\n}\n.form-submit:disabled {\n  cursor: auto;\n  background: #a8acb6;\n}\n.form-submit:active {\n  background: #8d919e;\n}\n.input-dark-theme {\n  background: #efefef;\n  border-color: #efefef;\n}\n.error {\n  margin: 0 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: #d6dfef;\n  color: #1e0456;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: #1e0456;\n  margin-right: 10px;\n}\n.auth-error {\n  margin-bottom: 10px;\n  padding: 10px 20px;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n  border: 1px solid #b58484;\n  background: #bf9494;\n  color: white;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: white;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvc2lnbi1pbi1mb3JtL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9zaWduLWluLWZvcm0vc2lnbi1pbi1mb3JtLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9zaWduLWluLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCIuLi9jb21wb25lbnRzL3NpZ24taW4tZm9ybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1pbi1mb3JtL3NpZ24taW4tZm9ybS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QkM7RUFrV3dCLGFBQUE7RUFDaEIsc0JBQUE7RUFqV0EsZ0JBQUE7RUFFRCxpQkFBQTtFQUNDLGtDQUFBO0VBQ1EsZUFBQTtFQUNHLGtCQUFBO0FDNUJwQjtBRDZCd0I7RUFvSFgsa0JBQUE7RUFoSFQsaUJBQUE7RUFDTyxVQUFBO0FDN0JYO0FEOEJHO0VBK0pXLGlCQUFBO0VBQ0Esa0JBQUE7RUE1SlQsVUFBQTtBQzdCTDtBRDZCb0I7RUE0WEgsa0JBQUE7RUF4Q04sYUFBQTtFQTdHVCxrQ0FBQTtFQWpPRixlQUFBO0VBQW1CLGlCQUFBO0VBRVAsYUFBQTtFQUNHLGVBQUE7RUFDRCx1QkFBQTtFQUNQLGtCQUFBO0FDN0JQO0FEK0JFO0VBQWMsK0JBQUE7QUM1QmhCO0FENkI0QjtFQUNoQixnQkFBQTtBQzNCWjtBRDRCb0I7RUFBZ0IsY0FBQTtBQ3pCcEM7QUQ2Qk87RUE0VGtCLGFBQUE7RUFDaEIsc0JBQUE7RUExR1Asa0NBQUE7RUEvTVUsa0JBQUE7RUFJTixnQkFBQTtFQUNLLFVB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d2dCTjtBQ25nQkE7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FEcWdCRjtBQ2xnQkE7RUZtT0EsY0FBQTtFRWpPRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FEb2dCRjtBQy9mSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRGlnQk47QUVob0JBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUZrb0JGO0FFN25CSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRituQk4iLCJmaWxlIjoiLi4vY29tcG9uZW50cy9zaWduLWluLWZvcm0vc2lnbi1pbi1mb3JtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XHJcbkBzbWFsbC1zcGFjZTogMTBweDtcclxuQG1lZGlhbC1zcGFjZTogN3B4O1xyXG5Ac3BhY2U6IDIwcHg7XHJcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcclxuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XHJcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcclxuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xyXG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcclxuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XHJcbkBlcnJvci10ZXh0LWNvbG9yOiAjMWUwNDU2O1xyXG5AYm9yZGVyLXJhZGl1czogNXB4O1xyXG5AZm9ybS13aWR0aDogMjQwcHg7XHJcbkBzbWFsbC1pY29uLXdpZHRoOiAxLjJlbTtcclxuQGh1Z2UtaWNvbi13aWR0aDogNzBweDtcclxuQHNtYWxsZXN0LWljb24td2lkdGg6IDAuN2VtO1xyXG5cclxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzFkMWQxZDtcclxuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XHJcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xyXG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcclxuXHJcbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICMyNjI4Mjk7XHJcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XHJcblxyXG5AbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XHJcblxyXG5AZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xyXG5AZm9udC1zaXplOiAxNnB4O1xyXG5cclxuLy8gY29udGVudFxyXG4ucGFnZSB7XHJcbiAgLmNvbHVtbi1kaXNwbGF5O1xyXG4gIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcclxuICBmb250LXNpemU6IEBmb250LXNpemU7XHJcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XHJcbn1cclxuXHJcbi5wYWdlLXVzZXItZGVmaW5lZCB7XHJcbiAgLnJpZ2h0LW1hcmdpbi1hdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XHJcbiAgd2lkdGg6IDcyJTtcclxufVxyXG5cclxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xyXG4gIC5ob3Jpem9udGFsLW1hcmdpbi1hdXRvO1xyXG4gIHdpZHRoOiA3MiU7XHJcbn1cclxuXHJcbi5jb250cm9sLWJ1dHRvbiB7XHJcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xyXG4gIC5yb3ctZGlzcGxheTtcclxuICAuZm9udC1zZXQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IEBtZWRpYWwtc3BhY2UgQHNwYWNlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tdGl0bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5yZWQtYnV0dG9uIHtcclxuICBjb2xvcjogI2E0MDgwMDtcclxufVxyXG5cclxuLmVkaXQtcGxhdGUge1xyXG4gIC5jb2x1bW4tZGlzcGxheTtcclxuICAuZm9udC1zZXQ7XHJcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICB3aWR0aDogMTUlO1xyXG4gIG1heC13aWR0aDogMTYwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcclxuICBtYXJnaW4tdG9wOiBAc3BhY2U7XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59XHJcblxyXG4vLyBkZXBlbmRzIG9uIHRoZW1lXHJcbi5wYWludC1saWdodC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gIGJvcmRlci1jb2xvcjogQGxpZ2h0LXRoZW1lLWJvcmRlci1jb2xvcjtcclxuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XHJcbn1cclxuXHJcbi8vIHR5cGVzXHJcbi5mb3JtLWJ1dHRvbiB7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGhlaWdodDogMi4zZW07XHJcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAmOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGhlaWdodDogMmVtO1xyXG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGxlc3Qtc3BhY2U7XHJcbiAgcGFkZGluZy1yaWdodDogQHNtYWxsZXN0LXNwYWNlO1xyXG59XHJcblxyXG4ucGFzc3dvcmQge1xyXG4gICYtYnV0dG9uIHtcclxuICAgIC5jb2x1bW4tZGlzcGxheTtcclxuICAgIC5wb2ludGVyO1xyXG4gICAgLm5vLXNlbGVjdDtcclxuICAgIGJvcmRlci13aWR0aDogMC4wOWVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xyXG4gICAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xyXG4gIH1cclxuXHJcbiAgJi1pbnB1dCB7XHJcbiAgICAuaW5wdXQ7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uZmllbGQge1xyXG4gIC5jb2x1bW4tZGlzcGxheTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy10b3A6IEBzbWFsbC1zcGFjZTtcclxuICAmLW5hbWUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtYXJnaW4gc2VjdGlvblxyXG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnJpZ2h0LW1hcmdpbi0xMHBlcmNlbnQge1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4ucmlnaHQtbWFyZ2luLTEwcHgge1xyXG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ucmlnaHQtbWFyZ2luLTIwcHgge1xyXG4gIG1hcmdpbi1yaWdodDogQHNwYWNlO1xyXG59XHJcblxyXG4ubGVmdC1tYXJnaW4tYXV0byB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbi5sZWZ0LW1hcmdpbi0xMHB4IHtcclxuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ubGVmdC1tYXJnaW4tNXBlcmNlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmxlZnQtbWFyZ2luLTIwcHgge1xyXG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2U7XHJcbn1cclxuXHJcbi5sZWZ0LW1hcmdpbi00MHB4IHtcclxuICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuLmxlZnQtbWFyZ2luLTEwcHgge1xyXG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5sZWZ0LXBhZGRpbmctMTBweCB7XHJcbiAgcGFkZGluZy1sZWZ0OiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5sZWZ0LXBhZGRpbmctMjBweCB7XHJcbiAgcGFkZGluZy1sZWZ0OiBAc3BhY2U7XHJcbn1cclxuXHJcbi5tYXJnaW4tYXV0byB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udmVydGljYWwtbWFyZ2luLWF1dG8ge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG5cclxuLnRvcC1tYXJnaW4tMTBweCB7XHJcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4udG9wLW1hcmdpbi0yMHB4IHtcclxuICBtYXJnaW4tdG9wOiBAc3BhY2U7XHJcbn1cclxuXHJcbi5ib3R0b20tbWFyZ2luLTEwcHgge1xyXG4gIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLy8gcGFkZGluZyBzZWN0aW9uXHJcbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XHJcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XHJcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8vIGFsbCBtdXN0IGJlIGRvbmVcclxuXHJcbi5ibGluZC10ZXh0IHtcclxuICBjb2xvcjogI2IzYjNiMztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5uby1zZWxlY3Qge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XHJcbn1cclxuXHJcbi5pdGFsaWMge1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLmgtY2VudGVyLWFsaWduIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mdWxsc2NyZWVuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uY2VudGVyZWQtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uanVzdGlmeS10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uc21vb3RoLWFuaW1hdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xyXG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xyXG59XHJcblxyXG4uZm9udC1zZXQge1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbn1cclxuXHJcbi5ib2xkLXRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgLnBvaW50ZXI7XHJcbiAgLm5vLXNlbGVjdDtcclxuICAuYm9sZC10ZXh0O1xyXG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcclxuICBjb2xvcjogIzU5NmI5ZjtcclxuICBtYXJnaW46IEBzcGFjZSBhdXRvO1xyXG59XHJcblxyXG4uZmxleC1ncm93IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5maXhlZC1ib3R0b20ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ucGFkZGluZyB7XHJcbiAgcGFkZGluZzogQHNwYWNlO1xyXG59XHJcblxyXG4udmVydGljYWwtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogQHNwYWNlIDA7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xyXG59XHJcblxyXG4vLyBkb25lIHwgaG9yaXpvbnRhbC1tYXJnaW4tYXV0b1xyXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc21hbGwtdG9wLW1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCBAc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xyXG59XHJcblxyXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcclxuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogYXV0byAwIGF1dG8gQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4uYm90dG9tLW1hcmdpbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xyXG59XHJcblxyXG4udmVydGljYWwtbWFyZ2luIHtcclxuICBtYXJnaW46IEBzcGFjZSAwO1xyXG59XHJcblxyXG4vLyBkb25lIHwgdmVydGljYWwtbWFyZ2luLWF1dG9cclxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5jZW50ZXItYWxpZ25lZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHQtYWxpZ25lZCB7XHJcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xyXG59XHJcblxyXG4ubGVmdC1hbGlnbmVkIHtcclxuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XHJcbn1cclxuXHJcbi5jb2x1bW4tZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucm93LWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnNtYWxsZXN0LWljb24ge1xyXG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcclxuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xyXG59XHJcblxyXG4uc21hbGwtaWNvbiB7XHJcbiAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xyXG59XHJcblxyXG4ubGFyZ2UtaWNvbiB7XHJcbiAgLm5vLXNlbGVjdDtcclxuICB3aWR0aDogQGh1Z2UtaWNvbi13aWR0aDtcclxufVxyXG5cclxuLnNpZ24taW4ge1xyXG4gIC5idXR0b247XHJcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xyXG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcclxuICBib3JkZXItY29sb3I6IEBncmVlbi1jb2xvcjtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG5cclxuLnNpZ24tdXAge1xyXG4gIC5idXR0b247XHJcbiAgYmFja2dyb3VuZDogQGdyZXktY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi51c2VybmFtZSB7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XHJcbiAgaGVpZ2h0OiAyLjdlbTtcclxuICB3aWR0aDogMi43ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcclxuICAmLWltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDAuNmVtO1xyXG4gICAgbGVmdDogMC42ZW07XHJcbiAgICBib3R0b206IDAuNmVtO1xyXG4gICAgcmlnaHQ6IDAuNmVtO1xyXG4gICAgd2lkdGg6IDEuM2VtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgLm5vLXNlbGVjdDtcclxuICB9XHJcbn1cclxuXHJcbi50aGVtZSB7XHJcbiAgd2lkdGg6IDIuN2VtO1xyXG4gIGhlaWdodDogMi43ZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gICYtaWNvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmxpZ2h0LXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcclxuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgJi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xyXG4gICAgLnNtb290aC1hbmltYXRpb247XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5kYXJrLXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xyXG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG4gICYtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XHJcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndpbmRvdy1saWdodC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4ud2luZG93LWRhcmstdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4ubG9hZC1wb3B1cCB7XHJcbiAgLmNvbHVtbi1kaXNwbGF5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5sb2FkLWljb24ge1xyXG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxufVxyXG5cclxuLmxvYWQtaW1hZ2Uge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiA4NXB4O1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4ubG9hZC1waHJhc2Uge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcclxufVxyXG5cclxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xyXG4gIGJhY2tncm91bmQ6ICByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XHJcbn1cclxuXHJcbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcclxufVxyXG5cclxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XHJcbn1cclxuXHJcbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcclxuICBjb2xvcjogIzFlMDQ1NjtcclxufVxyXG5cclxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XHJcbiAgY29sb3I6ICNjYWQ2ZmY7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsIHtcclxuICAuY29sdW1uLWRpc3BsYXk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogQHNtYWxsLXNwYWNlO1xyXG4gIHJpZ2h0OiBAc21hbGwtc3BhY2U7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnByb2ZpbGUtbGlnaHQge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMzEpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgwLCAwLCAwLCAwLjUxKSwgMTAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9maWxlLWRhcmsge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xyXG4gICY6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKSwgMTAlKTtcclxuICB9XHJcbn1cclxuIiwiLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA3MiU7XG59XG4ucGFnZS11c2VyLXVuZGVmaW5lZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG4uY29udHJvbC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cbi5idXR0b24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cbi5lZGl0LXBsYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxNSU7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5mb3JtLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0tYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLnBhc3N3b3JkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA5ZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5wYXNzd29yZC1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFzc3dvcmQtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhc3N3b3JkLWlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmZpZWxkLW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yaWdodC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5yaWdodC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucmlnaHQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtbWFyZ2luLTVwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5sZWZ0LW1hcmdpbi00MHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0yMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhvcml6b250YWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnZlcnRpY2FsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRvcC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm90dG9tLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ucG9pbnRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5uby1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbn1cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbn1cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5saW5rIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4ubGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbn1cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLmxhcmdlLWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIHdpZHRoOiA3MHB4O1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYTEwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMTAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zaWduLXVwIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnVzZXJuYW1lIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMi43ZW07XG4gIHdpZHRoOiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4udXNlcm5hbWUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNmVtO1xuICBsZWZ0OiAwLjZlbTtcbiAgYm90dG9tOiAwLjZlbTtcbiAgcmlnaHQ6IDAuNmVtO1xuICB3aWR0aDogMS4zZW07XG4gIG1hcmdpbjogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMTAxMDEwO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDMwMzAzO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMxZDFkMWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzI2MjgyOTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4udXNlci1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMTtcbn1cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4ucHJvZmlsZS1saWdodDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAwLjUxKTtcbn1cbi5wcm9maWxlLWRhcmsge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKTtcbn1cbi5wcm9maWxlLWRhcms6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMjA3LCAyMDcsIDIwNywgMC43MSk7XG59XG4ucmVtb3ZlLWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2V0LWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5wb2ludGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJpZ2h0LWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAwO1xufVxuLnJpZ2h0LWljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgd2lkdGg6IDM1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZm9ybS1maWVsZC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mb3JtLWZpZWxkLWlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5mb3JtLWZpZWxkLWlucHV0LXBhc3N3b3JkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtLWZpZWxkLWlucHV0LWxvZ2luLWxvYWRpbmcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybS1zdWJtaXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgYmFja2dyb3VuZDogIzU5NmI5ZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZm9ybS1zdWJtaXQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzZDUwODg7XG59XG4uZm9ybS1zdWJtaXQ6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNhOGFjYjY7XG59XG4uZm9ybS1zdWJtaXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzhkOTE5ZTtcbn1cbi5pbnB1dC1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyLWNvbG9yOiAjZWZlZmVmO1xufVxuLmVycm9yIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkNmRmZWY7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLm1lc3NhZ2Utc2lnbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimqBcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFlMDQ1NjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmF1dGgtZXJyb3Ige1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2I1ODQ4NDtcbiAgYmFja2dyb3VuZDogI2JmOTQ5NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1lc3NhZ2Utc2lnbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimqBcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBpbnB1dC13aWR0aDogMTcwcHg7XG5Ac21hbGwtaW5wdXQtd2lkdGg6IDEwMHB4O1xuQGZvbnQtc2l6ZTogMTZweDtcbi5yZW1vdmUtbGVmdC1ib3JkZXIge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNldC1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5wb2ludGVyIHtcbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG4ucmlnaHQtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgei1pbmRleDogMDtcbn1cbi5yaWdodC1pY29uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG59XG4uZm9ybSB7XG4gIC5wYWRkaW5nO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogQGZvcm0td2lkdGg7XG4gIHdpZHRoOiAzNSU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAmLWZpZWxkIHtcbiAgICAuY29sdW1uLWRpc3BsYXk7XG4gICAgLnZlcnRpY2FsLXBhZGRpbmctMTBweDtcbiAgICAmLXRleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgICAmLWlucHV0IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICAgIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgICAgICYtcGFzc3dvcmQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgICAmLWxvZ2luLWxvYWRpbmcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYtc3VibWl0IHtcbiAgICAuYnV0dG9uO1xuICAgIG1hcmdpbi1sZWZ0OiAzICogQHNwYWNlO1xuICAgIG1hcmdpbi1yaWdodDogMyAqIEBzcGFjZTtcbiAgICBtYXJnaW4tdG9wOiBAc3BhY2U7XG4gICAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICAgIGhlaWdodDogMi4zZW07XG4gICAgYmFja2dyb3VuZDogQGJsdWUtY29sb3I7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHNhdHVyYXRlKGRhcmtlbihAYmx1ZS1jb2xvciwgMTAlKSwgMTAlKTtcbiAgICB9XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kOiBkZXNhdHVyYXRlKGxpZ2h0ZW4oQGJsdWUtY29sb3IsIDIwJSksIDIwJSk7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUobGlnaHRlbihAYmx1ZS1jb2xvciwgMTAlKSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cblxuLmlucHV0LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG59XG5cbi5lcnJvciB7XG4gIC5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbjtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6IEBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yO1xuICBjb2xvcjogQGVycm9yLXRleHQtY29sb3I7XG59XG5cbi5tZXNzYWdlIHtcbiAgJi1zaWduIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLimqBcIjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBAZXJyb3ItdGV4dC1jb2xvcjtcbiAgICAgIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGltcG9ydCBcIi4uL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3NcIjtcbkBhdXRoLWVycm9yLWJhY2tncm91bmQ6ICNiZjk0OTQ7XG5cbi5hdXRoLWVycm9yIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgQHNwYWNlO1xuICBtaW4td2lkdGg6IEBmb3JtLXdpZHRoO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKEBhdXRoLWVycm9yLWJhY2tncm91bmQsIDUlKTtcbiAgYmFja2dyb3VuZDogQGF1dGgtZXJyb3ItYmFja2dyb3VuZDtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yXG59XG5cbi5tZXNzYWdlIHtcbiAgJi1zaWduIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLimqBcIjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgICAgIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */";
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
          submitButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Войти")
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
          var _this14 = this;

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
            _this14.userStore.loginUser(data);

            _this14.cookieService.saveLogin(data.login);

            _this14.cookieService.savePassword(data.password);

            _this14.waitingStore.deactivateLoading();

            _this14.router.navigate(["", "profile"]).then();
          }, function (error) {
            _this14.authErrors.getError = true;

            if (error.status === 404) {
              _this14.authErrors.loginDoesntExist = true;
              _this14.authErrors.passwordDoesntMatch = false;
            }

            if (error.status === 502) {
              _this14.authErrors.loginDoesntExist = false;
              _this14.authErrors.passwordDoesntMatch = true;
            }

            _this14.waitingStore.deactivateLoading();

            _this14.cdr.markForCheck();
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
          var _this15 = this;

          this.themeStore.loadThemeInfo().subscribe(function (mode) {
            _this15.darkThemeEnable = mode;

            _this15.cdr.markForCheck();
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


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.remove-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  border-left: none;\n}\n.set-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.right-icon {\n  outline: none;\n  border-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  background: #ffffff;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n  z-index: 0;\n}\n.right-icon-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  background: #ffffff;\n  width: 1.2em;\n}\n.form {\n  padding: 20px;\n  font-family: \"Georgia\", sans-serif;\n  position: relative;\n  min-width: 240px;\n  width: 35%;\n  border-radius: 5px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-text {\n  margin-bottom: 10px;\n}\n.form-field-input {\n  outline: none;\n  border-radius: 5px;\n  background: #ffffff;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n}\n.form-field-input-password {\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  height: 2em;\n  font-size: 16px;\n  outline: none;\n}\n.form-field-input-login-loading {\n  height: 100%;\n}\n.form-submit {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 20px;\n  font-size: 16px;\n  height: 2.3em;\n  background: #596b9f;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  transition: all 500ms ease;\n}\n.form-submit:hover {\n  cursor: pointer;\n  background: #3d5088;\n}\n.form-submit:disabled {\n  cursor: auto;\n  background: #a8acb6;\n}\n.form-submit:active {\n  background: #8d919e;\n}\n.input-dark-theme {\n  background: #efefef;\n  border-color: #efefef;\n}\n.error {\n  margin: 0 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: #d6dfef;\n  color: #1e0456;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: #1e0456;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvc2lnbi11cC1mb3JtL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9zaWduLXVwLWZvcm0vc2lnbi11cC1mb3JtLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy9zaWduLXVwLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBOFhFLGFBQUE7RUFDQSxzQkFBQTtFQTdYQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5QkY7QURpQ0E7RUEwSEUsa0JBQUE7RUF4SEEsaUJBQUE7RUFDQSxVQUFBO0FDL0JGO0FEa0NBO0VBNEtFLGlCQUFBO0VBQ0Esa0JBQUE7RUEzS0EsVUFBQTtBQy9CRjtBRGtDQTtFQXFaRSxrQkFBQTtFQXRDQSxhQUFBO0VBckhBLGtDQUFBO0VBdFBBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNFLCtCQUFBO0FDL0JKO0FEbUNBO0VBQ0UsZ0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBO0VBbVZFLGFBQUE7RUFDQSxzQkFBQTtFQWpIQSxrQ0FBQTtFQWhPQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHdDQUFBO0FDbkNGO0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR5Q0E7RUFvTUUsMEJBQUE7RUFsTUEsa0JBQUE7RUFD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QUNsZ0JBO0VGNlJFLGFBQUE7RUUzUkEsa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEb2dCRjtBQ25nQkU7RUZzV0EsYUFBQTtFQUNBLHNCQUFBO0VBektBLGVBQUE7QUMwVUY7QUNyZ0JJO0VBQ0UsbUJBQUE7QUR1Z0JOO0FDcmdCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEdWdCTjtBQ3RnQk07RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBRHdnQlI7QUN0Z0JNO0VBQ0UsWUFBQTtBRHdnQlI7QUNwZ0JFO0VGaVZBLGtDQUFBO0VBQ0EsYUFBQTtFRWhWRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FEdWdCSjtBQ3RnQkk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUR3Z0JOO0FDdGdCSTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBRHdnQk47QUN0Z0JJO0VBQ0UsbUJBQUE7QUR3Z0JOO0FDbmdCQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QURxZ0JGO0FDbGdCQTtFRjJQRSxjQUFBO0VFelBBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QURvZ0JGO0FDL2ZJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEaWdCTiIsImZpbGUiOiIuLi9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAc21hbGxlc3Qtc3BhY2U6IDVweDtcbkBzbWFsbC1zcGFjZTogMTBweDtcbkBtZWRpYWwtc3BhY2U6IDdweDtcbkBzcGFjZTogMjBweDtcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcbkBncmV5LWNvbG9yOiAjZDdkN2Q3O1xuQGdyZWVuLWNvbG9yOiAjMDBhMTAwO1xuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xuQGJsdWUtY29sb3I6ICM1OTZiOWY7XG5AZXJyb3ItYmFja2dyb3VuZC1jb2xvcjogI2Q2ZGZlZjtcbkBlcnJvci10ZXh0LWNvbG9yOiAjMWUwNDU2O1xuQGJvcmRlci1yYWRpdXM6IDVweDtcbkBmb3JtLXdpZHRoOiAyNDBweDtcbkBzbWFsbC1pY29uLXdpZHRoOiAxLjJlbTtcbkBodWdlLWljb24td2lkdGg6IDcwcHg7XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMxZDFkMWQ7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjMjYyODI5O1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGxpZ2h0LXRoZW1lLWJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuXG5AZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuQGZvbnQtc2l6ZTogMTZweDtcblxuLy8gY29udGVudFxuLnBhZ2Uge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4ucGFnZS11c2VyLWRlZmluZWQge1xuICAucmlnaHQtbWFyZ2luLWF1dG87XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIHdpZHRoOiA3MiU7XG59XG5cbi5wYWdlLXVzZXItdW5kZWZpbmVkIHtcbiAgLmhvcml6b250YWwtbWFyZ2luLWF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG5cbi5jb250cm9sLWJ1dHRvbiB7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgLnJvdy1kaXNwbGF5O1xuICAuZm9udC1zZXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogQG1lZGlhbC1zcGFjZSBAc3BhY2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xuICB9XG59XG5cbi5idXR0b24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuXG4uZWRpdC1wbGF0ZSB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgLmZvbnQtc2V0O1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgbWFyZ2luLXRvcDogQHNwYWNlO1xufVxuXG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi8vIGRlcGVuZHMgb24gdGhlbWVcbi5wYWludC1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgYm9yZGVyLWNvbG9yOiBAbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG59XG5cbi8vIHR5cGVzXG4uZm9ybS1idXR0b24ge1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgJjpkaXNhYmxlZCB7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG59XG5cbi5pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbGVzdC1zcGFjZTtcbiAgcGFkZGluZy1yaWdodDogQHNtYWxsZXN0LXNwYWNlO1xufVxuXG4ucGFzc3dvcmQge1xuICAmLWJ1dHRvbiB7XG4gICAgLmNvbHVtbi1kaXNwbGF5O1xuICAgIC5wb2ludGVyO1xuICAgIC5uby1zZWxlY3Q7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjA5ZW07XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG4gICAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xuICB9XG5cbiAgJi1pbnB1dCB7XG4gICAgLmlucHV0O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxufVxuXG4uZmllbGQge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy10b3A6IEBzbWFsbC1zcGFjZTtcbiAgJi1uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbn1cblxuLy8gbWFyZ2luIHNlY3Rpb25cbi5yaWdodC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnJpZ2h0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLnJpZ2h0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5yaWdodC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi1yaWdodDogQHNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ubGVmdC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tNXBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5sZWZ0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IEBzcGFjZTtcbn1cblxuLmxlZnQtbWFyZ2luLTQwcHgge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmxlZnQtcGFkZGluZy0yMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiBAc3BhY2U7XG59XG5cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmhvcml6b250YWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4udmVydGljYWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4udG9wLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4udG9wLW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXRvcDogQHNwYWNlO1xufVxuXG4uYm90dG9tLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4vLyBwYWRkaW5nIHNlY3Rpb25cbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLnBvaW50ZXIge1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cblxuLy8gYWxsIG11c3QgYmUgZG9uZVxuXG4uYmxpbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uby1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG5cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cblxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xufVxuXG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saW5rIHtcbiAgLnBvaW50ZXI7XG4gIC5uby1zZWxlY3Q7XG4gIC5ib2xkLXRleHQ7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgY29sb3I6ICM1OTZiOWY7XG4gIG1hcmdpbjogQHNwYWNlIGF1dG87XG59XG5cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG5cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlO1xufVxuXG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZSAwO1xufVxuXG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlIDAgMDtcbn1cblxuLy8gZG9uZSB8IGhvcml6b250YWwtbWFyZ2luLWF1dG9cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLy8gZG9uZSB8IHZlcnRpY2FsLW1hcmdpbi1hdXRvXG4udmVydGljYWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuXG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuXG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byAwO1xufVxuXG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnNtYWxsZXN0LWljb24ge1xuICB3aWR0aDogQHNtYWxsZXN0LWljb24td2lkdGg7XG4gIGhlaWdodDogQHNtYWxsZXN0LWljb24td2lkdGg7XG59XG5cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbC1pY29uLXdpZHRoO1xufVxuXG4ubGFyZ2UtaWNvbiB7XG4gIC5uby1zZWxlY3Q7XG4gIHdpZHRoOiBAaHVnZS1pY29uLXdpZHRoO1xufVxuXG4uc2lnbi1pbiB7XG4gIC5idXR0b247XG4gIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgYmFja2dyb3VuZDogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG5cbi5zaWduLXVwIHtcbiAgLmJ1dHRvbjtcbiAgYmFja2dyb3VuZDogQGdyZXktY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZXktY29sb3I7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4udXNlcm5hbWUge1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgd2lkdGg6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICAmLWltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMC42ZW07XG4gICAgbGVmdDogMC42ZW07XG4gICAgYm90dG9tOiAwLjZlbTtcbiAgICByaWdodDogMC42ZW07XG4gICAgd2lkdGg6IDEuM2VtO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAubm8tc2VsZWN0O1xuICB9XG59XG5cbi50aGVtZSB7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gICYtaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAyMCUpO1xuICAgIH1cbiAgfVxufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICAgIH1cbiAgfVxufVxuXG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG5cbi5sb2FkLXBvcHVwIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG5cbi51c2VyLXBhbmVsIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogQHNtYWxsLXNwYWNlO1xuICByaWdodDogQHNtYWxsLXNwYWNlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ucHJvZmlsZS1saWdodCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDAsIDAsIDAsIDAuMzEpO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDAsIDAsIDAsIDAuNTEpLCAxMCUpO1xuICB9XG59XG5cbi5wcm9maWxlLWRhcmsge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKTtcbiAgJjpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogMCAwIDFlbSBkYXJrZW4ocmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKSwgMTAlKTtcbiAgfVxufVxuIiwiLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDI4MHB4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiA3MiU7XG59XG4ucGFnZS11c2VyLXVuZGVmaW5lZCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3MiU7XG59XG4uY29udHJvbC1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNvbnRyb2wtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEzKTtcbn1cbi5idXR0b24tdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cbi5lZGl0LXBsYXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxNSU7XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJveC1zaGFkb3cge1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5mb3JtLWJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLmZvcm0tYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZvcm0tYnV0dG9uOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBhdXRvO1xufVxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuLnBhc3N3b3JkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgYm9yZGVyLXdpZHRoOiAwLjA5ZW07XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHdpZHRoOiAxLjJlbTtcbn1cbi5wYXNzd29yZC1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGFzc3dvcmQtYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnBhc3N3b3JkLWlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmZpZWxkLW5hbWUge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5yaWdodC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5yaWdodC1tYXJnaW4tMTBwZXJjZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucmlnaHQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLmxlZnQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtbWFyZ2luLTVwZXJjZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5sZWZ0LW1hcmdpbi00MHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XG59XG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmxlZnQtcGFkZGluZy0yMHB4IHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmhvcml6b250YWwtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnZlcnRpY2FsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRvcC1tYXJnaW4tMjBweCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm90dG9tLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zdGFuZGFyZC1wYWRkaW5nLWFsbCB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nLTEwcHgge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4ucG9pbnRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5uby1zZWxlY3Qge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4uaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbn1cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbn1cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5saW5rIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG4ubGluazpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5saW5rOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbn1cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLmxhcmdlLWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIHdpZHRoOiA3MHB4O1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYTEwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMTAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zaWduLXVwIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnVzZXJuYW1lIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMi43ZW07XG4gIHdpZHRoOiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4udXNlcm5hbWUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNmVtO1xuICBsZWZ0OiAwLjZlbTtcbiAgYm90dG9tOiAwLjZlbTtcbiAgcmlnaHQ6IDAuNmVtO1xuICB3aWR0aDogMS4zZW07XG4gIG1hcmdpbjogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMTAxMDEwO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDMwMzAzO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMxZDFkMWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzI2MjgyOTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4udXNlci1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMTtcbn1cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4ucHJvZmlsZS1saWdodDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAwLjUxKTtcbn1cbi5wcm9maWxlLWRhcmsge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKTtcbn1cbi5wcm9maWxlLWRhcms6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMjA3LCAyMDcsIDIwNywgMC43MSk7XG59XG4ucmVtb3ZlLWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2V0LWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cbi5wb2ludGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJpZ2h0LWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB6LWluZGV4OiAwO1xufVxuLnJpZ2h0LWljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgd2lkdGg6IDM1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZm9ybS1maWVsZC10ZXh0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mb3JtLWZpZWxkLWlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5mb3JtLWZpZWxkLWlucHV0LXBhc3N3b3JkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtLWZpZWxkLWlucHV0LWxvZ2luLWxvYWRpbmcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uZm9ybS1zdWJtaXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgYmFja2dyb3VuZDogIzU5NmI5ZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZm9ybS1zdWJtaXQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzZDUwODg7XG59XG4uZm9ybS1zdWJtaXQ6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNhOGFjYjY7XG59XG4uZm9ybS1zdWJtaXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzhkOTE5ZTtcbn1cbi5pbnB1dC1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyLWNvbG9yOiAjZWZlZmVmO1xufVxuLmVycm9yIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkNmRmZWY7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLm1lc3NhZ2Utc2lnbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimqBcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFlMDQ1NjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGlucHV0LXdpZHRoOiAxNzBweDtcbkBzbWFsbC1pbnB1dC13aWR0aDogMTAwcHg7XG5AZm9udC1zaXplOiAxNnB4O1xuLnJlbW92ZS1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2V0LWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnBvaW50ZXIge1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5yaWdodC1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xuICB6LWluZGV4OiAwO1xufVxuLnJpZ2h0LWljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cbi5mb3JtIHtcbiAgLnBhZGRpbmc7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiBAZm9ybS13aWR0aDtcbiAgd2lkdGg6IDM1JTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICYtZmllbGQge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAudmVydGljYWwtcGFkZGluZy0xMHB4O1xuICAgICYtdGV4dCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG4gICAgfVxuICAgICYtaW5wdXQge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgICAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG4gICAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xuICAgICAgJi1wYXNzd29yZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cbiAgICAgICYtbG9naW4tbG9hZGluZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi1zdWJtaXQge1xuICAgIC5idXR0b247XG4gICAgbWFyZ2luLWxlZnQ6IDMgKiBAc3BhY2U7XG4gICAgbWFyZ2luLXJpZ2h0OiAzICogQHNwYWNlO1xuICAgIG1hcmdpbi10b3A6IEBzcGFjZTtcbiAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgaGVpZ2h0OiAyLjNlbTtcbiAgICBiYWNrZ3JvdW5kOiBAYmx1ZS1jb2xvcjtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xuICAgICY6aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZDogc2F0dXJhdGUoZGFya2VuKEBibHVlLWNvbG9yLCAxMCUpLCAxMCUpO1xuICAgIH1cbiAgICAmOmRpc2FibGVkIHtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUobGlnaHRlbihAYmx1ZS1jb2xvciwgMjAlKSwgMjAlKTtcbiAgICB9XG4gICAgJjphY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogZGVzYXR1cmF0ZShsaWdodGVuKEBibHVlLWNvbG9yLCAxMCUpLCAyMCUpO1xuICAgIH1cbiAgfVxufVxuXG4uaW5wdXQtZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDtcbn1cblxuLmVycm9yIHtcbiAgLmhvcml6b250YWwtc21hbGwtbWFyZ2luO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYmFja2dyb3VuZDogQGVycm9yLWJhY2tncm91bmQtY29sb3I7XG4gIGNvbG9yOiBAZXJyb3ItdGV4dC1jb2xvcjtcbn1cblxuLm1lc3NhZ2Uge1xuICAmLXNpZ24ge1xuICAgICY6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIuKaoFwiO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IEBlcnJvci10ZXh0LWNvbG9yO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gICAgfVxuICB9XG59XG4iXX0= */";
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


    var _model_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../model/notification */
    "./src/app/model/notification.ts");
    /* harmony import */


    var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/cookies-service/cookies.service */
    "./src/app/services/cookies-service/cookies.service.ts");
    /* harmony import */


    var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/user-service/user.service */
    "./src/app/services/user-service/user.service.ts");
    /* harmony import */


    var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../store/services/theme-store.service/theme-store.service */
    "./src/app/store/services/theme-store.service/theme-store.service.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");
    /* harmony import */


    var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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
          submitButton: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Зарегистрироваться")
        }, Object(_custom_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_4__["passwordMatch"])("password", "passwordAgain"));
      }

      _createClass(SignUpFormComponent, [{
        key: "submitForm",
        value: function submitForm() {
          var _this16 = this;

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
            password: this.registerForm.get("password").value,
            education: {
              materials: [],
              tasks: []
            },
            notifications: [_model_notification__WEBPACK_IMPORTED_MODULE_6__["welcomeNotification"]]
          };
          this.waitingStore.activateLoading();
          this.userService.registerNewUser(newUser).subscribe(function (data) {
            _this16.cookieService.saveLogin(data.login);

            _this16.cookieService.savePassword(data.password);

            _this16.userStore.loginUser(data);

            _this16.waitingStore.deactivateLoading();

            _this16.router.navigate(["", "profile"]).then();
          }, function () {
            return _this16.waitingStore.deactivateLoading();
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
          var _this17 = this;

          if (this.registerForm.get("login").invalid) {
            return;
          }

          this.showLoading();
          this.userService.checkLogin(this.registerForm.get("login").value).subscribe(function () {
            {
              _this17.loginCheckStatus.pending = false;
              _this17.loginCheckStatus.exist = true;
              _this17.loginCheckStatus.free = false;

              _this17.cdr.markForCheck();
            }
          }, function () {
            _this17.loginCheckStatus.pending = false;
            _this17.loginCheckStatus.exist = false;
            _this17.loginCheckStatus.free = true;

            _this17.cdr.markForCheck();
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
          var _this18 = this;

          this.themeStore.loadThemeInfo().subscribe(function (mode) {
            _this18.darkThemeEnable = mode;

            _this18.cdr.markForCheck();
          });
        }
      }]);

      return SignUpFormComponent;
    }();

    SignUpFormComponent.ctorParameters = function () {
      return [{
        type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
      }, {
        type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_7__["CookiesService"]
      }, {
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_10__["UserStoreService"]
      }, {
        type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_9__["ThemeStoreService"]
      }, {
        type: _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_11__["WaitingStoreService"]
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
  "./src/app/components/special/get-date-time.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/special/get-date-time.ts ***!
    \*****************************************************/

  /*! exports provided: stringDateTime, strictDateTime */

  /***/
  function srcAppComponentsSpecialGetDateTimeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "stringDateTime", function () {
      return stringDateTime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "strictDateTime", function () {
      return strictDateTime;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function stringDateTime(date) {
      var datetime = new Date(date);
      var now = new Date();
      var today = datetime.getDate() === now.getDate();
      var thisYear = datetime.getFullYear() === now.getFullYear();
      return today ? "".concat(datetime.getHours(), ":").concat(datetime.getMinutes()) : thisYear ? "".concat(datetime.getDate(), " ").concat(monthConverter(datetime.getMonth() + 1)) : "".concat(datetime.getDate(), " ").concat(monthConverter(datetime.getMonth() + 1), " ").concat(datetime.getFullYear());
    }

    function strictDateTime(date) {
      var datetime = new Date(date);
      return "\n  ".concat(checkDateSize(datetime.getDate()), ".").concat(checkDateSize(datetime.getMonth() + 1), ".").concat(datetime.getFullYear(), "\n   ").concat(checkDateSize(datetime.getHours()), ":").concat(checkDateSize(datetime.getMinutes()));
    }

    function checkDateSize(date) {
      return date < 10 ? "0".concat(date) : "".concat(date);
    }

    function monthConverter(num) {
      switch (num) {
        case 1:
          {
            return "января";
          }

        case 2:
          {
            return "февраля";
          }

        case 3:
          {
            return "марта";
          }

        case 4:
          {
            return "апреля";
          }

        case 5:
          {
            return "мая";
          }

        case 6:
          {
            return "июня";
          }

        case 7:
          {
            return "июля";
          }

        case 8:
          {
            return "августа";
          }

        case 9:
          {
            return "сентября";
          }

        case 10:
          {
            return "октября";
          }

        case 11:
          {
            return "ноября";
          }

        case 12:
          {
            return "декабря";
          }

        default:
          {
            return "???";
          }
      }
    }
    /***/

  },

  /***/
  "./src/app/components/special/sort.ts":
  /*!********************************************!*\
    !*** ./src/app/components/special/sort.ts ***!
    \********************************************/

  /*! exports provided: oldestSort, newestSort */

  /***/
  function srcAppComponentsSpecialSortTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "oldestSort", function () {
      return oldestSort;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "newestSort", function () {
      return newestSort;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function oldestSort(array) {
      array.sort(function (a, b) {
        var yearA = a.addDate.getFullYear();
        var yearB = b.addDate.getFullYear();

        if (yearA !== yearB) {
          return yearA > yearB ? 1 : -1;
        }

        var monthA = a.addDate.getMonth();
        var monthB = b.addDate.getMonth();

        if (monthA !== monthB) {
          return monthA > monthB ? 1 : -1;
        }

        var dayA = a.addDate.getDate();
        var dayB = b.addDate.getDate();

        if (dayA !== dayB) {
          return dayA > dayB ? 1 : -1;
        }

        var hourA = a.addDate.getHours();
        var hourB = b.addDate.getHours();

        if (hourA !== hourB) {
          return hourA > hourB ? 1 : -1;
        }

        var minuteA = a.addDate.getMinutes();
        var minuteB = b.addDate.getMinutes();

        if (minuteA !== minuteB) {
          return minuteA > minuteB ? 1 : -1;
        }

        return 1;
      });
    }

    function newestSort(array) {
      array.sort(function (a, b) {
        var yearA = a.addDate.getFullYear();
        var yearB = b.addDate.getFullYear();

        if (yearA !== yearB) {
          return yearA < yearB ? 1 : -1;
        }

        var monthA = a.addDate.getMonth();
        var monthB = b.addDate.getMonth();

        if (monthA !== monthB) {
          return monthA < monthB ? 1 : -1;
        }

        var dayA = a.addDate.getDate();
        var dayB = b.addDate.getDate();

        if (dayA !== dayB) {
          return dayA < dayB ? 1 : -1;
        }

        var hourA = a.addDate.getHours();
        var hourB = b.addDate.getHours();

        if (hourA !== hourB) {
          return hourA < hourB ? 1 : -1;
        }

        var minuteA = a.addDate.getMinutes();
        var minuteB = b.addDate.getMinutes();

        if (minuteA !== minuteB) {
          return minuteA < minuteB ? 1 : -1;
        }

        return -1;
      });
    }
    /***/

  },

  /***/
  "./src/app/components/task-creator/task-creator.component.less":
  /*!*********************************************************************!*\
    !*** ./src/app/components/task-creator/task-creator.component.less ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTaskCreatorTaskCreatorComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9jb21wb25lbnRzL3Rhc2stY3JlYXRvci90YXNrLWNyZWF0b3IuY29tcG9uZW50Lmxlc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/task-creator/task-creator.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/task-creator/task-creator.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TaskCreatorComponent */

  /***/
  function srcAppComponentsTaskCreatorTaskCreatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TaskCreatorComponent", function () {
      return TaskCreatorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TaskCreatorComponent = /*#__PURE__*/function () {
      function TaskCreatorComponent() {
        _classCallCheck(this, TaskCreatorComponent);
      }

      _createClass(TaskCreatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TaskCreatorComponent;
    }();

    TaskCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-task-creator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./task-creator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/task-creator/task-creator.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./task-creator.component.less */
      "./src/app/components/task-creator/task-creator.component.less"))["default"]]
    })], TaskCreatorComponent);
    /***/
  },

  /***/
  "./src/app/components/test-creator/test-creator.component.less":
  /*!*********************************************************************!*\
    !*** ./src/app/components/test-creator/test-creator.component.less ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTestCreatorTestCreatorComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvdGVzdC1jcmVhdG9yL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy90ZXN0LWNyZWF0b3IvdGVzdC1jcmVhdG9yLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDQTtFQThYRSxhQUFBO0VBQ0Esc0JBQUE7RUE3WEEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDOUJGO0FEaUNBO0VBMEhFLGtCQUFBO0VBeEhBLGlCQUFBO0VBQ0EsVUFBQTtBQy9CRjtBRGtDQTtFQTRLRSxpQkFBQTtFQUNBLGtCQUFBO0VBM0tBLFVBQUE7QUMvQkY7QURrQ0E7RUFxWkUsa0JBQUE7RUF0Q0EsYUFBQTtFQXJIQSxrQ0FBQTtFQXRQQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNoQ0Y7QURpQ0U7RUFDRSwrQkFBQTtBQy9CSjtBRG1DQTtFQUNFLGdCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtBQ2xDRjtBRHFDQTtFQW1WRSxhQUFBO0VBQ0Esc0JBQUE7RUFqSEEsa0NBQUE7RUFoT0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNsQ0Y7QURxQ0E7RUFDRSx3Q0FBQTtBQ25DRjtBRHVDQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDckNGO0FEeUNBO0VBb01FLDBCQUFBO0VBbE1BLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUN2Q0Y7QUR3Q0U7RUFDRSxlQUFBO0FDdENKO0FEd0NFO0VBQ0UsWUFBQTtBQ3RDSjtBRDBDQTtFQUNFLGFBQUE7RUFD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QSxpQkFBQTtFQUNBLGlCQUFBO0FDekdGO0FENEdBO0VBQ0Usb0NBQUE7QUMxR0Y7QUQ2R0E7RUFDRSxpQ0FBQTtBQzNHRjtBRDhHQTtFQUNFLG9DQUFBO0FDNUdGO0FEK0dBO0VBQ0UsaUNBQUE7QUM3R0Y7QURnSEE7RUFDRSxjQUFBO0FDOUdGO0FEaUhBO0VBQ0UsY0FBQTtBQy9HRjtBRGtIQTtFQXBNRSxhQUFBO0VBQ0Esc0JBQUE7RUFxTUEsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQy9HRjtBRGtIQTtFQUNFLHlDQUFBO0FDaEhGO0FEaUhFO0VBQ0UsdUNBQUE7QUMvR0o7QURtSEE7RUFDRSwrQ0FBQTtBQ2pIRjtBRGtIRTtFQUNFLDZDQUFBO0FDaEhKIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvdGVzdC1jcmVhdG9yL3Rlc3QtY3JlYXRvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1zcGFjZTogNXB4O1xuQHNtYWxsLXNwYWNlOiAxMHB4O1xuQG1lZGlhbC1zcGFjZTogN3B4O1xuQHNwYWNlOiAyMHB4O1xuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XG5AZ3JlZW4tY29sb3I6ICMwMGExMDA7XG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcbkBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZDZkZmVmO1xuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XG5AYm9yZGVyLXJhZGl1czogNXB4O1xuQGZvcm0td2lkdGg6IDI0MHB4O1xuQHNtYWxsLWljb24td2lkdGg6IDEuMmVtO1xuQGh1Z2UtaWNvbi13aWR0aDogNzBweDtcbkBzbWFsbGVzdC1pY29uLXdpZHRoOiAwLjdlbTtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzFkMWQxZDtcbkBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lOiAjZThlOGU4O1xuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcblxuQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICMyNjI4Mjk7XG5AaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG5AbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG5cbkBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG5AZm9udC1zaXplOiAxNnB4O1xuXG4vLyBjb250ZW50XG4ucGFnZSB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIC5yaWdodC1tYXJnaW4tYXV0bztcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgd2lkdGg6IDcyJTtcbn1cblxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xuICAuaG9yaXpvbnRhbC1tYXJnaW4tYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cblxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIC5mb250LXNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiBAbWVkaWFsLXNwYWNlIEBzcGFjZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIH1cbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG5cbi5lZGl0LXBsYXRlIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICAuZm9udC1zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLy8gZGVwZW5kcyBvbiB0aGVtZVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBsaWdodC10aGVtZS1ib3JkZXItY29sb3I7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbn1cblxuLy8gdHlwZXNcbi5mb3JtLWJ1dHRvbiB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbn1cblxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsZXN0LXNwYWNlO1xuICBwYWRkaW5nLXJpZ2h0OiBAc21hbGxlc3Qtc3BhY2U7XG59XG5cbi5wYXNzd29yZCB7XG4gICYtYnV0dG9uIHtcbiAgICAuY29sdW1uLWRpc3BsYXk7XG4gICAgLnBvaW50ZXI7XG4gICAgLm5vLXNlbGVjdDtcbiAgICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbiAgICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG4gIH1cblxuICAmLWlucHV0IHtcbiAgICAuaW5wdXQ7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi5maWVsZCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xuICAmLW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4vLyBtYXJnaW4gc2VjdGlvblxuLnJpZ2h0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiBAc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogQHNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1wYWRkaW5nLTIwcHgge1xuICBwYWRkaW5nLWxlZnQ6IEBzcGFjZTtcbn1cblxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG59XG5cbi8vIHBhZGRpbmcgc2VjdGlvblxuLnN0YW5kYXJkLXBhZGRpbmctYWxsIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4ucG9pbnRlciB7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4vLyBhbGwgbXVzdCBiZSBkb25lXG5cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5vLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICAucG9pbnRlcjtcbiAgLm5vLXNlbGVjdDtcbiAgLmJvbGQtdGV4dDtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiBAc3BhY2UgYXV0bztcbn1cblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4vLyBkb25lIHwgaG9yaXpvbnRhbC1tYXJnaW4tYXV0b1xuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIEBzbWFsbC1zcGFjZSBhdXRvIDA7XG59XG5cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IEBzcGFjZSAwO1xufVxuXG4vLyBkb25lIHwgdmVydGljYWwtbWFyZ2luLWF1dG9cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbiAgaGVpZ2h0OiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG59XG5cbi5sYXJnZS1pY29uIHtcbiAgLm5vLXNlbGVjdDtcbiAgd2lkdGg6IEBodWdlLWljb24td2lkdGg7XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi51c2VybmFtZSB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBoZWlnaHQ6IDIuN2VtO1xuICB3aWR0aDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gICYtaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjZlbTtcbiAgICBsZWZ0OiAwLjZlbTtcbiAgICBib3R0b206IDAuNmVtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB3aWR0aDogMS4zZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5uby1zZWxlY3Q7XG4gIH1cbn1cblxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cblxuLnVzZXItcGFuZWwge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiBAc21hbGwtc3BhY2U7XG4gIHJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKHJnYmEoMCwgMCwgMCwgMC41MSksIDEwJSk7XG4gIH1cbn1cblxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpLCAxMCUpO1xuICB9XG59XG4iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDcyJTtcbn1cbi5wYWdlLXVzZXItdW5kZWZpbmVkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cbi5jb250cm9sLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udHJvbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuLmVkaXQtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmZvcm0tYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZm9ybS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybS1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucGFzc3dvcmQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLnBhc3N3b3JkLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXNzd29yZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5maWVsZC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnJpZ2h0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5sZWZ0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4udG9wLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLnBvaW50ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxpbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGluayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTZiOWY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IDAuN2VtO1xuICBoZWlnaHQ6IDAuN2VtO1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4yZW07XG59XG4ubGFyZ2UtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgd2lkdGg6IDcwcHg7XG59XG4uc2lnbi1pbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udXNlcm5hbWUge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgd2lkdGg6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbi51c2VybmFtZS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC42ZW07XG4gIGxlZnQ6IDAuNmVtO1xuICBib3R0b206IDAuNmVtO1xuICByaWdodDogMC42ZW07XG4gIHdpZHRoOiAxLjNlbTtcbiAgbWFyZ2luOiBhdXRvO1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG59XG4udGhlbWUge1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzEwMTAxMDtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxMDEwMTA7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMzAzMDM7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzFkMWQxZDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMjYyODI5O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi51c2VyLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB6LWluZGV4OiAxO1xufVxuLnByb2ZpbGUtbGlnaHQge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgwLCAwLCAwLCAwLjMxKTtcbn1cbi5wcm9maWxlLWxpZ2h0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSByZ2JhKDAsIDAsIDAsIDAuNTEpO1xufVxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xufVxuLnByb2ZpbGUtZGFyazpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgyMDcsIDIwNywgMjA3LCAwLjcxKTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/test-creator/test-creator.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/test-creator/test-creator.component.ts ***!
    \*******************************************************************/

  /*! exports provided: TestCreatorComponent */

  /***/
  function srcAppComponentsTestCreatorTestCreatorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestCreatorComponent", function () {
      return TestCreatorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TestCreatorComponent = /*#__PURE__*/function () {
      function TestCreatorComponent() {
        _classCallCheck(this, TestCreatorComponent);
      }

      _createClass(TestCreatorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestCreatorComponent;
    }();

    TestCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-test-creator",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-creator.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-creator/test-creator.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-creator.component.less */
      "./src/app/components/test-creator/test-creator.component.less"))["default"]]
    })], TestCreatorComponent);
    /***/
  },

  /***/
  "./src/app/components/test-task/test-task.component.less":
  /*!***************************************************************!*\
    !*** ./src/app/components/test-task/test-task.component.less ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTestTaskTestTaskComponentLess(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page {\n  display: flex;\n  flex-direction: column;\n  min-width: 280px;\n  min-height: 250px;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border-radius: 5px;\n}\n.page-user-defined {\n  margin-right: auto;\n  margin-left: 10px;\n  width: 72%;\n}\n.page-user-undefined {\n  margin-left: auto;\n  margin-right: auto;\n  width: 72%;\n}\n.control-button {\n  position: relative;\n  display: flex;\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n  border-radius: 5px;\n}\n.control-button:hover {\n  background: rgba(0, 0, 0, 0.13);\n}\n.button-title {\n  margin-left: 10%;\n}\n.red-button {\n  color: #a40800;\n}\n.edit-plate {\n  display: flex;\n  flex-direction: column;\n  font-family: \"Georgia\", sans-serif;\n  border-radius: 5px;\n  min-width: 150px;\n  width: 15%;\n  max-width: 160px;\n  margin-left: 10px;\n  margin-top: 20px;\n}\n.box-shadow {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n}\n.paint-light-theme {\n  background: #ffffff;\n  border-color: #cecaca;\n  color: #1a1a1a;\n}\n.form-button {\n  transition: all 500ms ease;\n  border-radius: 5px;\n  border: none;\n  height: 2.3em;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.form-button:hover {\n  cursor: pointer;\n}\n.form-button:disabled {\n  cursor: auto;\n}\n.input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.password-button {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  border-width: 0.09em;\n  border-style: solid;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  width: 1.2em;\n}\n.password-button:hover {\n  cursor: pointer;\n}\n.password-input {\n  outline: none;\n  border-radius: 5px;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 5px;\n  padding-right: 5px;\n  flex-grow: 1;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  padding-top: 10px;\n}\n.field-name {\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.right-margin-auto {\n  margin-right: auto;\n}\n.right-margin-10percent {\n  margin-right: 10%;\n}\n.right-margin-10px {\n  margin-right: 10px;\n}\n.right-margin-20px {\n  margin-right: 20px;\n}\n.left-margin-auto {\n  margin-left: auto;\n}\n.left-margin-10percent {\n  margin-left: 10%;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-margin-5percent {\n  margin-left: 5%;\n}\n.left-margin-20px {\n  margin-left: 20px;\n}\n.left-margin-40px {\n  margin-left: 40px;\n}\n.left-margin-10px {\n  margin-left: 10px;\n}\n.left-padding-10px {\n  padding-left: 10px;\n}\n.left-padding-20px {\n  padding-left: 20px;\n}\n.margin-auto {\n  margin: auto;\n}\n.horizontal-margin-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.vertical-margin-auto {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.top-margin-10px {\n  margin-top: 10px;\n}\n.top-margin-20px {\n  margin-top: 20px;\n}\n.bottom-margin-10px {\n  margin-bottom: 10px;\n}\n.standard-padding-all {\n  padding: 20px 10px;\n}\n.vertical-padding-10px {\n  padding: 10px 0;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.blind-text {\n  color: #b3b3b3;\n  font-style: italic;\n}\n.no-select {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 250ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  font-weight: bold;\n  font-size: 16px;\n  color: #596b9f;\n  margin: 20px auto;\n}\n.link:hover {\n  cursor: pointer;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.2em;\n}\n.large-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 70px;\n}\n.sign-in {\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-in:hover {\n  cursor: pointer;\n}\n.sign-in:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.sign-up {\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.sign-up:hover {\n  cursor: pointer;\n}\n.sign-up:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.username {\n  transition: all 500ms ease;\n  position: relative;\n  font-family: \"Georgia\", sans-serif;\n  padding: 0 10px;\n  height: 2.7em;\n  width: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 30px;\n  outline: none;\n  background: #ffffff;\n}\n.username-img {\n  position: absolute;\n  top: 0.6em;\n  left: 0.6em;\n  bottom: 0.6em;\n  right: 0.6em;\n  width: 1.3em;\n  margin: auto;\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n}\n.theme {\n  width: 2.7em;\n  height: 2.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #101010;\n  box-shadow: 0 0 0.5em #101010;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #030303;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #1d1d1d;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #262829;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.user-panel {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 10px;\n  right: 10px;\n  z-index: 1;\n}\n.profile-light {\n  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.31);\n}\n.profile-light:hover {\n  box-shadow: 0 0 1em rgba(0, 0, 0, 0.51);\n}\n.profile-dark {\n  box-shadow: 0 0 0.5em rgba(232, 232, 232, 0.71);\n}\n.profile-dark:hover {\n  box-shadow: 0 0 1em rgba(207, 207, 207, 0.71);\n}\n.help {\n  display: flex;\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  padding: 5px;\n}\n.help:hover {\n  cursor: pointer;\n}\n.help-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 18px;\n  height: 18px;\n  margin: auto;\n}\n.help:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.content {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 20px;\n  border-radius: 5px;\n  min-width: 300px;\n  min-height: 470px;\n}\n.step {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.step-title {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  margin: 10px auto;\n  font-weight: bold;\n  font-size: 18px;\n}\n.step-content {\n  display: flex;\n  flex-grow: 1;\n}\n.button {\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n}\n.button:hover {\n  cursor: pointer;\n}\n.button:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.add-answer-option {\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  padding: 10px 20px;\n  margin: 0 10px 5px auto;\n  min-width: 173px;\n}\n.add-answer-option:hover {\n  cursor: pointer;\n}\n.add-answer-option:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.add-question {\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  display: flex;\n  flex-direction: column;\n  padding: 10px 20px;\n  background: rgba(61, 75, 60, 0.1);\n}\n.add-question:hover {\n  cursor: pointer;\n}\n.add-question:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.add-question:hover {\n  background: rgba(61, 75, 60, 0.3);\n}\n.question {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  padding: 0 10px;\n}\n.question-wording {\n  display: flex;\n  margin: 20px 0 5px 0;\n  padding-bottom: 10px;\n  border-bottom: 0.05em solid rgba(0, 0, 0, 0.15);\n}\n.question-wording-input {\n  flex-grow: 1;\n  font-family: \"Georgia\", sans-serif;\n  font-size: 16px;\n  border: none;\n  background: transparent;\n  outline: none;\n  resize: none;\n}\n.question-wording-input::-webkit-input-placeholder {\n  font-style: italic;\n}\n.question-wording-input::-moz-placeholder {\n  font-style: italic;\n}\n.question-wording-input::-ms-input-placeholder {\n  font-style: italic;\n}\n.question-wording-input::placeholder {\n  font-style: italic;\n}\n.max-height-80prc {\n  position: relative;\n  height: 80%;\n  max-height: 400px;\n}\n.answers {\n  display: flex;\n  flex-direction: column;\n  height: 50%;\n  overflow-y: scroll;\n}\n.answers::-webkit-scrollbar {\n  width: 7px;\n}\n.answers::-webkit-scrollbar-track {\n  border-radius: 5px;\n}\n.answers::-webkit-scrollbar-thumb {\n  background: rgba(61, 75, 60, 0.1);\n  border-radius: 5px;\n}\n.answer {\n  display: flex;\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n.answer:hover {\n  cursor: pointer;\n}\n.answer:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.answer:hover {\n  background: transparent;\n}\n.answer-correct {\n  background: rgba(74, 130, 74, 0.3);\n}\n.answer-correct:hover {\n  background: rgba(74, 130, 74, 0.3);\n}\n.answer-remove {\n  margin-left: auto;\n  margin-bottom: auto;\n}\n.answer-number {\n  width: 1em;\n  margin-right: 5px;\n}\n.mark {\n  margin-right: 10px;\n  margin-bottom: auto;\n}\n.mark-empty:hover {\n  background: #4caf50 !important;\n}\n.mark-disable {\n  visibility: hidden;\n}\n.structure {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 0;\n  flex-shrink: 0;\n  height: 470px;\n  border-left: 0.05em solid rgba(0, 0, 0, 0.15);\n  padding: 0 0 0 20px;\n  margin-bottom: 20px;\n}\n.structure-info {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  min-height: 300px;\n  height: 85%;\n  overflow-y: scroll;\n}\n.structure-info-empty {\n  font-style: italic;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n}\n.structure-info::-webkit-scrollbar {\n  width: 7px;\n}\n.structure-info::-webkit-scrollbar-track {\n  border-radius: 5px;\n}\n.structure-info::-webkit-scrollbar-thumb {\n  background: rgba(61, 75, 60, 0.1);\n  border-radius: 5px;\n}\n.structure-info-chosen-question {\n  background: rgba(74, 99, 130, 0.3) !important;\n}\n.structure-info-question {\n  display: flex;\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  padding: 5px 10px;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n.structure-info-question:hover {\n  cursor: pointer;\n}\n.structure-info-question:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.structure-info-question-remove {\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  display: flex;\n  padding: 5px;\n}\n.structure-info-question-remove:hover {\n  cursor: pointer;\n}\n.structure-info-question-remove:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.structure-info-question-remove-icon {\n  outline: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  width: 14px;\n  margin: auto;\n}\n.structure-info-question-remove:hover {\n  background: rgba(134, 1, 1, 0.3);\n}\n.next {\n  transition: all 250ms ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-user-drag: none;\n  outline: none;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  background: transparent;\n  padding: 10px 20px;\n  background: rgba(74, 130, 74, 0.9);\n  color: white;\n}\n.next:hover {\n  cursor: pointer;\n}\n.next:hover {\n  background: rgba(0, 0, 0, 0.15);\n}\n.next:hover {\n  background: #4a824a;\n}\n.next:disabled {\n  background: rgba(74, 130, 74, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvdGVzdC10YXNrL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy90ZXN0LXRhc2svdGVzdC10YXNrLmNvbXBvbmVudC5sZXNzIiwiLi4vY29tcG9uZW50cy90ZXN0LXRhc2svTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3Rlc3QtdGFzay90ZXN0LXRhc2suY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NBO0VBOFhFLGFBQUE7RUFDQSxzQkFBQTtFQTdYQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUM5QkY7QURpQ0E7RUEwSEUsa0JBQUE7RUF4SEEsaUJBQUE7RUFDQSxVQUFBO0FDL0JGO0FEa0NBO0VBNEtFLGlCQUFBO0VBQ0Esa0JBQUE7RUEzS0EsVUFBQTtBQy9CRjtBRGtDQTtFQXFaRSxrQkFBQTtFQXRDQSxhQUFBO0VBckhBLGtDQUFBO0VBdFBBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQ2hDRjtBRGlDRTtFQUNFLCtCQUFBO0FDL0JKO0FEbUNBO0VBQ0UsZ0JBQUE7QUNqQ0Y7QURvQ0E7RUFDRSxjQUFBO0FDbENGO0FEcUNBO0VBbVZFLGFBQUE7RUFDQSxzQkFBQTtFQWpIQSxrQ0FBQTtFQWhPQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLHdDQUFBO0FDbkNGO0FEdUNBO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNyQ0Y7QUR5Q0E7RUFvTUUsMEJBQUE7RUFsTUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ3ZDRjtBRHdDRTtFQUNFLGVBQUE7QUN0Q0o7QUR3Q0U7RUFDRSxZQUFBO0FDdENKO0FEMENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDeENGO0FENENFO0VBOFJBLGFBQUE7RUFDQSxzQkFBQTtFQXhKQSxhQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtFQXJJRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDeENKO0FEb0pFO0VBQ0UsZUFBQTtBQ2xKSjtBRHdDRTtFQTdCQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUF1QkUsWUFBQTtBQzlCSjtBRGtDQTtFQXVRRSxhQUFBO0VBQ0Esc0JBQUE7RUF0UUEsa0JBQUE7RUFDQSxpQkFBQTtBQy9CRjtBRGdDRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUM5Qko7QURtQ0E7RUFDRSxrQkFBQTtBQ2pDRjtBRG9DQTtFQUNFLGlCQUFBO0FDbENGO0FEcUNBO0VBQ0Usa0JBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxrQkFBQTtBQ3BDRjtBRHVDQTtFQUNFLGlCQUFBO0FDckNGO0FEd0NBO0VBQ0UsZ0JBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxpQkFBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSxpQkFBQTtBQ3pDRjtBRDRDQTtFQUNFLGlCQUFBO0FDMUNGO0FENkNBO0VBQ0UsaUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxrQkFBQTtBQzVDRjtBRCtDQTtFQUNFLGtCQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsWUFBQTtBQzlDRjtBRGlEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUMvQ0Y7QURrREE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDaERGO0FEbURBO0VBQ0UsZ0JBQUE7QUNqREY7QURvREE7RUFDRSxnQkFBQTtBQ2xERjtBRHFEQTtFQUNFLG1CQUFBO0FDbkRGO0FEdURBO0VBQ0Usa0JBQUE7QUNyREY7QUR3REE7RUFDRSxlQUFBO0FDdERGO0FEMERFO0VBQ0UsZUFBQTtBQ3hESjtBRDhEQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQzVERjtBRCtEQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0FDN0RGO0FEZ0VBO0VBQ0Usa0JBQUE7QUM5REY7QURpRUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDL0RGO0FEa0VBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDaEVGO0FEbUVBO0VBQ0Usa0JBQUE7QUNqRUY7QURvRUE7RUFDRSxtQkFBQTtBQ2xFRjtBRHFFQTtFQUNFLDBCQUFBO0FDbkVGO0FEc0VBO0VBQ0UsMEJBQUE7QUNwRUY7QUR1RUE7RUFDRSxrQ0FBQTtBQ3JFRjtBRHdFQTtFQUNFLGlCQUFBO0FDdEVGO0FEeUVBO0VBOUNFLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VBeUNBLGlCQUFBO0VBT0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3RFRjtBREtFO0VBQ0UsZUFBQTtBQ0hKO0FEc0VBO0VBQ0UsWUFBQTtBQ3BFRjtBRHVFQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNyRUY7QUR3RUE7RUFDRSxvQkFBQTtBQ3RFRjtBRHlFQTtFQUNFLGFBQUE7QUN2RUY7QUQwRUE7RUFDRSxlQUFBO0FDeEVGO0FEMkVBO0VBQ0UsZUFBQTtBQ3pFRjtBRDRFQTtFQUNFLGVBQUE7QUMxRUY7QUQ2RUE7RUFDRSxtQkFBQTtBQzNFRjtBRCtFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUM3RUY7QURnRkE7RUFDRSxnQkFBQTtBQzlFRjtBRGlGQTtFQUNFLGNBQUE7QUMvRUY7QURrRkE7RUFDRSxjQUFBO0FDaEZGO0FEbUZBO0VBQ0Usa0JBQUE7QUNqRkY7QURvRkE7RUFDRSx3QkFBQTtBQ2xGRjtBRHFGQTtFQUNFLGtCQUFBO0FDbkZGO0FEc0ZBO0VBQ0Usd0JBQUE7QUNwRkY7QUR1RkE7RUFDRSxtQkFBQTtBQ3JGRjtBRHdGQTtFQUNFLGNBQUE7QUN0RkY7QUQwRkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDeEZGO0FEMkZBO0VBQ0UsWUFBQTtBQ3pGRjtBRDRGQTtFQUNFLHdCQUFBO0FDMUZGO0FENkZBO0VBQ0UscUJBQUE7QUMzRkY7QUQ4RkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUM1RkY7QUQrRkE7RUFDRSxhQUFBO0FDN0ZGO0FEZ0dBO0VBQ0Usa0NBQUE7RUFDQSxhQUFBO0FDOUZGO0FEaUdBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUMvRkY7QURrR0E7RUFDRSxZQUFBO0FDaEdGO0FEbUdBO0VBN0tFLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VBNktBLFdBQUE7QUMvRkY7QURrR0E7RUEvSUUsMEJBQUE7RUFsQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtFRTNNQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFRnVYQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDdkZGO0FEN0dFO0VBQ0UsZUFBQTtBQytHSjtBQ3JTRTtFQUNFLCtCQUFBO0FEdVNKO0FEb0ZBO0VBdkpFLDBCQUFBO0VBbENBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUUzTUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUYrWEEsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDekVGO0FEbElFO0VBQ0UsZUFBQTtBQ29JSjtBQzFURTtFQUNFLCtCQUFBO0FENFRKO0FEc0VBO0VBQ0Usa0JBQUE7QUNwRUY7QUR1RUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FDckVGO0FEd0VBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUN0RUY7QUR5RUE7RUF0TEUsMEJBQUE7RUF3TEEsa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUN2RUY7QUR3RUU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQXZPRixhQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtBQ2tLRjtBRHdFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUN0RUY7QUR1RUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDckVKO0FEeUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBM05BLDBCQUFBO0FDcUpGO0FEd0VFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQS9ORiwwQkFBQTtBQzBKRjtBRHVFSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUNyRU47QUR5RUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUF6T0EsMEJBQUE7QUNtS0Y7QUR3RUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBN09GLDBCQUFBO0FDd0tGO0FEdUVJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQ3JFTjtBRDBFQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBelBBLDBCQUFBO0FDa0xGO0FEMkVBO0VBQ0UsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUFoUUEsMEJBQUE7QUN3TEY7QUQ0RUE7RUFDRSxRQUFBO0FDMUVGO0FENkVBO0VBaEpFLGFBQUE7RUFDQSxzQkFBQTtFQWlKQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQzFFRjtBRDZFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFuUkEsMEJBQUE7QUN5TUY7QUQ4RUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUExUkEsMEJBQUE7QUMrTUY7QUQrRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQzdFRjtBRGdGQTtFQUNFLG9DQUFBO0FDOUVGO0FEaUZBO0VBQ0UsaUNBQUE7QUMvRUY7QURrRkE7RUFDRSxvQ0FBQTtBQ2hGRjtBRG1GQTtFQUNFLGlDQUFBO0FDakZGO0FEb0ZBO0VBQ0UsY0FBQTtBQ2xGRjtBRHFGQTtFQUNFLGNBQUE7QUNuRkY7QURzRkE7RUFwTUUsYUFBQTtFQUNBLHNCQUFBO0VBcU1BLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNuRkY7QURzRkE7RUFDRSx5Q0FBQTtBQ3BGRjtBRHFGRTtFQUNFLHVDQUFBO0FDbkZKO0FEdUZBO0VBQ0UsK0NBQUE7QUNyRkY7QURzRkU7RUFDRSw2Q0FBQTtBQ3BGSjtBQzdoQkE7RUZnYUUsYUFBQTtFQXpIQSwwQkFBQTtFQWxDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VFalFBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUQraEJGO0FEdlRFO0VBQ0UsZUFBQTtBQ3lUSjtBQ2hpQkU7RUZtUEEsYUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUVuUEUsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FEb2lCSjtBQ2ppQkU7RUFDRSwrQkFBQTtBRG1pQko7QUMvaEJBO0VGOFhFLGFBQUE7RUFDQSxzQkFBQTtFRTdYQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRGtpQkY7QUMvaEJBO0VGc1hFLGFBQUE7RUFDQSxzQkFBQTtFQTBDQSxrQkFBQTtBQ21JRjtBQ2hpQkU7RUYyTkEsYUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUUzTkUsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURvaUJKO0FDamlCRTtFRmdYQSxhQUFBO0VFOVdFLFlBQUE7QURtaUJKO0FDOWhCQTtFRmdQRSwwQkFBQTtFQWxDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VFM01BLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FEZ2lCRjtBRDFXRTtFQUNFLGVBQUE7QUM0V0o7QUNsaUJFO0VBQ0UsK0JBQUE7QURvaUJKO0FDaGlCQTtFRmdPRSwwQkFBQTtFQWxDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VFM01BLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBUUEsa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FEMmlCRjtBRC9YRTtFQUNFLGVBQUE7QUNpWUo7QUN2akJFO0VBQ0UsK0JBQUE7QUR5akJKO0FDOWlCQTtFRnlORSwwQkFBQTtFQWxDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VFM01BLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VGMFZBLGFBQUE7RUFDQSxzQkFBQTtFRTNVQSxrQkFBQTtFQUNBLGlDQUFBO0FEMGpCRjtBRHJaRTtFQUNFLGVBQUE7QUN1Wko7QUM3a0JFO0VBQ0UsK0JBQUE7QUQra0JKO0FDL2pCRTtFQUNFLGlDQUFBO0FEaWtCSjtBQzdqQkE7RUZtVUUsYUFBQTtFQUNBLHNCQUFBO0VBaEdBLFlBQUE7RUVqT0EsZUFBQTtBRGdrQkY7QUM5akJFO0VGbVVBLGFBQUE7RUVqVUUsb0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtDQUFBO0FEZ2tCSjtBQzlqQkk7RUFDRSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QURna0JOO0FDOWpCTTtFRjhKSixrQkFBQTtBQ21hRjtBQ2prQk07RUY4Skosa0JBQUE7QUNtYUY7QUNqa0JNO0VGOEpKLGtCQUFBO0FDbWFGO0FDamtCTTtFRjhKSixrQkFBQTtBQ21hRjtBQzFqQkE7RUZtVkUsa0JBQUE7RUVqVkEsV0FBQTtFQUNBLGlCQUFBO0FENGpCRjtBQ3pqQkE7RUZrU0UsYUFBQTtFQUNBLHNCQUFBO0VFalNBLFdBQUE7RUFDQSxrQkFBQTtBRDRqQkY7QUMxakJFO0VBQ0UsVUFBQTtBRDRqQko7QUN6akJFO0VBQ0Usa0JBQUE7QUQyakJKO0FDeGpCRTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7QUQwakJKO0FDdGpCQTtFRm9SRSxhQUFBO0VBekhBLDBCQUFBO0VBbENBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUUzTUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUE4RUEsWUFBQTtFQUNBLGtCQUFBO0FEaWtCRjtBRDFkRTtFQUNFLGVBQUE7QUM0ZEo7QUNscEJFO0VBQ0UsK0JBQUE7QURvcEJKO0FDcmtCRTtFQUNFLHVCQUFBO0FEdWtCSjtBQ3BrQkU7RUFDRSxrQ0FBQTtBRHNrQko7QUNya0JJO0VBQ0Usa0NBQUE7QUR1a0JOO0FDbmtCRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QURxa0JKO0FDbGtCRTtFQUNFLFVBQUE7RUFDQSxpQkFBQTtBRG9rQko7QUNoa0JBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBRGtrQkY7QUMvakJJO0VBQ0UsOEJBQUE7QURpa0JOO0FDN2pCRTtFQUNFLGtCQUFBO0FEK2pCSjtBQzNqQkE7RUYrUUUsa0JBQUE7RUEzQ0EsYUFBQTtFQUNBLHNCQUFBO0VFbE9BLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBRDhqQkY7QUM1akJFO0VGME5BLGFBQUE7RUFDQSxzQkFBQTtFRXpORSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FEK2pCSjtBQzdqQkk7RUZnRUYsa0JBQUE7RUFsREEsaUJBQUE7RUFDQSxrQkFBQTtFRVpJLGdCQUFBO0FEZ2tCTjtBQzdqQkk7RUFDRSxVQUFBO0FEK2pCTjtBQzVqQkk7RUFDRSxrQkFBQTtBRDhqQk47QUMzakJJO0VBQ0UsaUNBQUE7RUFDQSxrQkFBQTtBRDZqQk47QUMxakJJO0VBQ0UsNkNBQUE7QUQ0akJOO0FDempCSTtFRitMRixhQUFBO0VBekhBLDBCQUFBO0VBbENBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUUzTUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFtS0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEb2tCTjtBRG5qQkU7RUFDRSxlQUFBO0FDcWpCSjtBQzN1QkU7RUFDRSwrQkFBQTtBRDZ1Qko7QUN6a0JNO0VGZ0VKLDBCQUFBO0VBbENBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUUzTUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUYrVkEsYUFBQTtFRXRMTSxZQUFBO0FEb2xCUjtBRHZrQkU7RUFDRSxlQUFBO0FDeWtCSjtBQy92QkU7RUFDRSwrQkFBQTtBRGl3Qko7QUN4bEJRO0VGd0JOLGFBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLHVCQUFBO0VFeEJRLFdBQUE7RUFDQSxZQUFBO0FENGxCVjtBQ3psQlE7RUFDRSxnQ0FBQTtBRDJsQlY7QUNwbEJBO0VGNkNFLDBCQUFBO0VBbENBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsdUJBQUE7RUUzTUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUEyTEEsa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7QUQrbEJGO0FEdG1CRTtFQUNFLGVBQUE7QUN3bUJKO0FDOXhCRTtFQUNFLCtCQUFBO0FEZ3lCSjtBQ25tQkU7RUFDRSxtQkFBQTtBRHFtQko7QUNsbUJFO0VBQ0Usa0NBQUE7QURvbUJKIiwiZmlsZSI6Ii4uL2NvbXBvbmVudHMvdGVzdC10YXNrL3Rlc3QtdGFzay5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1zcGFjZTogNXB4O1xuQHNtYWxsLXNwYWNlOiAxMHB4O1xuQG1lZGlhbC1zcGFjZTogN3B4O1xuQHNwYWNlOiAyMHB4O1xuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XG5AZ3JlZW4tY29sb3I6ICMwMGExMDA7XG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcbkBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZDZkZmVmO1xuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XG5AYm9yZGVyLXJhZGl1czogNXB4O1xuQGZvcm0td2lkdGg6IDI0MHB4O1xuQHNtYWxsLWljb24td2lkdGg6IDEuMmVtO1xuQGh1Z2UtaWNvbi13aWR0aDogNzBweDtcbkBzbWFsbGVzdC1pY29uLXdpZHRoOiAwLjdlbTtcblxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzFkMWQxZDtcbkBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lOiAjZThlOGU4O1xuQHRleHQtbGlnaHQtY29sb3I6IGxpZ2h0ZW4oYmxhY2ssIDEwJSk7XG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcblxuQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICMyNjI4Mjk7XG5AaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xuXG5AbGlnaHQtdGhlbWUtYm9yZGVyLWNvbG9yOiBzYXR1cmF0ZShkYXJrZW4oQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kLCAyMCUpLCAzJSk7XG5cbkBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG5AZm9udC1zaXplOiAxNnB4O1xuXG4vLyBjb250ZW50XG4ucGFnZSB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgbWluLXdpZHRoOiAyODBweDtcbiAgbWluLWhlaWdodDogMjUwcHg7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIGZvbnQtc2l6ZTogQGZvbnQtc2l6ZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5wYWdlLXVzZXItZGVmaW5lZCB7XG4gIC5yaWdodC1tYXJnaW4tYXV0bztcbiAgbWFyZ2luLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgd2lkdGg6IDcyJTtcbn1cblxuLnBhZ2UtdXNlci11bmRlZmluZWQge1xuICAuaG9yaXpvbnRhbC1tYXJnaW4tYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cblxuLmNvbnRyb2wtYnV0dG9uIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICAucm93LWRpc3BsYXk7XG4gIC5mb250LXNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiBAbWVkaWFsLXNwYWNlIEBzcGFjZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMyk7XG4gIH1cbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG5cbi5lZGl0LXBsYXRlIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICAuZm9udC1zZXQ7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICB3aWR0aDogMTUlO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLy8gZGVwZW5kcyBvbiB0aGVtZVxuLnBhaW50LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBsaWdodC10aGVtZS1ib3JkZXItY29sb3I7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbn1cblxuLy8gdHlwZXNcbi5mb3JtLWJ1dHRvbiB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cbn1cblxuLmlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsZXN0LXNwYWNlO1xuICBwYWRkaW5nLXJpZ2h0OiBAc21hbGxlc3Qtc3BhY2U7XG59XG5cbi5wYXNzd29yZCB7XG4gICYtYnV0dG9uIHtcbiAgICAuY29sdW1uLWRpc3BsYXk7XG4gICAgLnBvaW50ZXI7XG4gICAgLm5vLXNlbGVjdDtcbiAgICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMTtcbiAgICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcbiAgICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG4gIH1cblxuICAmLWlucHV0IHtcbiAgICAuaW5wdXQ7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG59XG5cbi5maWVsZCB7XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xuICAmLW5hbWUge1xuICAgIG1hcmdpbi1ib3R0b206IEBzbWFsbC1zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4vLyBtYXJnaW4gc2VjdGlvblxuLnJpZ2h0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ucmlnaHQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiBAc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmxlZnQtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tbGVmdDogQHNwYWNlO1xufVxuXG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4ubGVmdC1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xufVxuXG4ubGVmdC1wYWRkaW5nLTIwcHgge1xuICBwYWRkaW5nLWxlZnQ6IEBzcGFjZTtcbn1cblxuLm1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi50b3AtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiBAc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tYm90dG9tOiBAc21hbGwtc3BhY2U7XG59XG5cbi8vIHBhZGRpbmcgc2VjdGlvblxuLnN0YW5kYXJkLXBhZGRpbmctYWxsIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzbWFsbC1zcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xufVxuXG4ucG9pbnRlciB7XG4gICY6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG4vLyBhbGwgbXVzdCBiZSBkb25lXG5cbi5ibGluZC10ZXh0IHtcbiAgY29sb3I6ICNiM2IzYjM7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5vLXNlbGVjdCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbn1cblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICAucG9pbnRlcjtcbiAgLm5vLXNlbGVjdDtcbiAgLmJvbGQtdGV4dDtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICBjb2xvcjogIzU5NmI5ZjtcbiAgbWFyZ2luOiBAc3BhY2UgYXV0bztcbn1cblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4vLyBkb25lIHwgaG9yaXpvbnRhbC1tYXJnaW4tYXV0b1xuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIEBzbWFsbC1zcGFjZSBhdXRvIDA7XG59XG5cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcbn1cblxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IEBzcGFjZSAwO1xufVxuXG4vLyBkb25lIHwgdmVydGljYWwtbWFyZ2luLWF1dG9cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbiAgaGVpZ2h0OiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG59XG5cbi5sYXJnZS1pY29uIHtcbiAgLm5vLXNlbGVjdDtcbiAgd2lkdGg6IEBodWdlLWljb24td2lkdGg7XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi51c2VybmFtZSB7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBoZWlnaHQ6IDIuN2VtO1xuICB3aWR0aDogMi43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gICYtaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjZlbTtcbiAgICBsZWZ0OiAwLjZlbTtcbiAgICBib3R0b206IDAuNmVtO1xuICAgIHJpZ2h0OiAwLjZlbTtcbiAgICB3aWR0aDogMS4zZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC5uby1zZWxlY3Q7XG4gIH1cbn1cblxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cblxuLnVzZXItcGFuZWwge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiBAc21hbGwtc3BhY2U7XG4gIHJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKHJnYmEoMCwgMCwgMCwgMC41MSksIDEwJSk7XG4gIH1cbn1cblxuLnByb2ZpbGUtZGFyayB7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSByZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpO1xuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihyZ2JhKDIzMiwgMjMyLCAyMzIsIDAuNzEpLCAxMCUpO1xuICB9XG59XG4iLCIucGFnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMjgwcHg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnBhZ2UtdXNlci1kZWZpbmVkIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDcyJTtcbn1cbi5wYWdlLXVzZXItdW5kZWZpbmVkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcyJTtcbn1cbi5jb250cm9sLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDdweCAyMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uY29udHJvbC1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTMpO1xufVxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4ucmVkLWJ1dHRvbiB7XG4gIGNvbG9yOiAjYTQwODAwO1xufVxuLmVkaXQtcGxhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDE1JTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4ucGFpbnQtbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGNvbG9yOiAjMWExYTFhO1xufVxuLmZvcm0tYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDIuM2VtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uZm9ybS1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZm9ybS1idXR0b246ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG59XG4uaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucGFzc3dvcmQtYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBib3JkZXItd2lkdGg6IDAuMDllbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEuMmVtO1xufVxuLnBhc3N3b3JkLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5wYXNzd29yZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5maWVsZC1uYW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmlnaHQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4ucmlnaHQtbWFyZ2luLTEwcGVyY2VudCB7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLnJpZ2h0LW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnJpZ2h0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLmxlZnQtbWFyZ2luLWF1dG8ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbi5sZWZ0LW1hcmdpbi0xMHBlcmNlbnQge1xuICBtYXJnaW4tbGVmdDogMTAlO1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LW1hcmdpbi01cGVyY2VudCB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cbi5sZWZ0LW1hcmdpbi0yMHB4IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4ubGVmdC1tYXJnaW4tNDBweCB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuLmxlZnQtbWFyZ2luLTEwcHgge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMTBweCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5sZWZ0LXBhZGRpbmctMjBweCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5tYXJnaW4tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5ob3Jpem9udGFsLW1hcmdpbi1hdXRvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi52ZXJ0aWNhbC1tYXJnaW4tYXV0byB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4udG9wLW1hcmdpbi0xMHB4IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50b3AtbWFyZ2luLTIwcHgge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4tMTBweCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3RhbmRhcmQtcGFkZGluZy1hbGwge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG59XG4udmVydGljYWwtcGFkZGluZy0xMHB4IHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLnBvaW50ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmxpbmQtdGV4dCB7XG4gIGNvbG9yOiAjYjNiM2IzO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4ubm8tc2VsZWN0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG59XG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGluayB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM1OTZiOWY7XG4gIG1hcmdpbjogMjBweCBhdXRvO1xufVxuLmxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IDAuN2VtO1xuICBoZWlnaHQ6IDAuN2VtO1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4yZW07XG59XG4ubGFyZ2UtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgd2lkdGg6IDcwcHg7XG59XG4uc2lnbi1pbiB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24taW46aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lnbi1pbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uc2lnbi11cCB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogI2Q3ZDdkNztcbiAgYm9yZGVyLWNvbG9yOiAjZDdkN2Q3O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4uc2lnbi11cDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zaWduLXVwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnVzZXJuYW1lIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGhlaWdodDogMi43ZW07XG4gIHdpZHRoOiAyLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4udXNlcm5hbWUtaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNmVtO1xuICBsZWZ0OiAwLjZlbTtcbiAgYm90dG9tOiAwLjZlbTtcbiAgcmlnaHQ6IDAuNmVtO1xuICB3aWR0aDogMS4zZW07XG4gIG1hcmdpbjogYXV0bztcbiAgb3V0bGluZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xufVxuLnRoZW1lIHtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxMDEwMTA7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMTAxMDEwO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDMwMzAzO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMxZDFkMWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzI2MjgyOTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4udXNlci1wYW5lbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgei1pbmRleDogMTtcbn1cbi5wcm9maWxlLWxpZ2h0IHtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtIHJnYmEoMCwgMCwgMCwgMC4zMSk7XG59XG4ucHJvZmlsZS1saWdodDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gcmdiYSgwLCAwLCAwLCAwLjUxKTtcbn1cbi5wcm9maWxlLWRhcmsge1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gcmdiYSgyMzIsIDIzMiwgMjMyLCAwLjcxKTtcbn1cbi5wcm9maWxlLWRhcms6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMWVtIHJnYmEoMjA3LCAyMDcsIDIwNywgMC43MSk7XG59XG4uaGVscCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uaGVscDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5oZWxwLWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5oZWxwOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIG1pbi1oZWlnaHQ6IDQ3MHB4O1xufVxuLnN0ZXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3RlcC10aXRsZSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uc3RlcC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1ncm93OiAxO1xufVxuLmJ1dHRvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbi5idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5hZGQtYW5zd2VyLW9wdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW46IDAgMTBweCA1cHggYXV0bztcbiAgbWluLXdpZHRoOiAxNzNweDtcbn1cbi5hZGQtYW5zd2VyLW9wdGlvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hZGQtYW5zd2VyLW9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uYWRkLXF1ZXN0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjEsIDc1LCA2MCwgMC4xKTtcbn1cbi5hZGQtcXVlc3Rpb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYWRkLXF1ZXN0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5hZGQtcXVlc3Rpb246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYxLCA3NSwgNjAsIDAuMyk7XG59XG4ucXVlc3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5xdWVzdGlvbi13b3JkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAyMHB4IDAgNXB4IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAwLjA1ZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5xdWVzdGlvbi13b3JkaW5nLWlucHV0IHtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xufVxuLnF1ZXN0aW9uLXdvcmRpbmctaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLm1heC1oZWlnaHQtODBwcmMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODAlO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cbi5hbnN3ZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiA1MCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5hbnN3ZXJzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA3cHg7XG59XG4uYW5zd2Vyczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYW5zd2Vyczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYxLCA3NSwgNjAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5hbnN3ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmFuc3dlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hbnN3ZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuLmFuc3dlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuLmFuc3dlci1jb3JyZWN0IHtcbiAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTMwLCA3NCwgMC4zKTtcbn1cbi5hbnN3ZXItY29ycmVjdDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNzQsIDEzMCwgNzQsIDAuMyk7XG59XG4uYW5zd2VyLXJlbW92ZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLmFuc3dlci1udW1iZXIge1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5tYXJrIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLm1hcmstZW1wdHk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNGNhZjUwICFpbXBvcnRhbnQ7XG59XG4ubWFyay1kaXNhYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnN0cnVjdHVyZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiA0NzBweDtcbiAgYm9yZGVyLWxlZnQ6IDAuMDVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBwYWRkaW5nOiAwIDAgMCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnN0cnVjdHVyZS1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgaGVpZ2h0OiA4NSU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5zdHJ1Y3R1cmUtaW5mby1lbXB0eSB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5zdHJ1Y3R1cmUtaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogN3B4O1xufVxuLnN0cnVjdHVyZS1pbmZvOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zdHJ1Y3R1cmUtaW5mbzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYxLCA3NSwgNjAsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5zdHJ1Y3R1cmUtaW5mby1jaG9zZW4tcXVlc3Rpb24ge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCA5OSwgMTMwLCAwLjMpICFpbXBvcnRhbnQ7XG59XG4uc3RydWN0dXJlLWluZm8tcXVlc3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5zdHJ1Y3R1cmUtaW5mby1xdWVzdGlvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdHJ1Y3R1cmUtaW5mby1xdWVzdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uc3RydWN0dXJlLWluZm8tcXVlc3Rpb24tcmVtb3ZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDI1MG1zIGVhc2U7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4uc3RydWN0dXJlLWluZm8tcXVlc3Rpb24tcmVtb3ZlOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN0cnVjdHVyZS1pbmZvLXF1ZXN0aW9uLXJlbW92ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG4uc3RydWN0dXJlLWluZm8tcXVlc3Rpb24tcmVtb3ZlLWljb24ge1xuICBvdXRsaW5lOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIHdpZHRoOiAxNHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4uc3RydWN0dXJlLWluZm8tcXVlc3Rpb24tcmVtb3ZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMzQsIDEsIDEsIDAuMyk7XG59XG4ubmV4dCB7XG4gIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLWRyYWc6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxMzAsIDc0LCAwLjkpO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmV4dDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cbi5uZXh0OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzRhODI0YTtcbn1cbi5uZXh0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTMwLCA3NCwgMC41KTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBzbGltLWJvcmRlcjogMC4wNWVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG5cbi5oZWxwIHtcbiAgLnJvdy1kaXNwbGF5O1xuICAuc21vb3RoLWZhc3QtYW5pbWF0aW9uO1xuICAubm8tc2VsZWN0O1xuICAucG9pbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZTtcblxuICAmLWljb24ge1xuICAgIC5uby1zZWxlY3Q7XG4gICAgd2lkdGg6IDE4cHg7XG4gICAgaGVpZ2h0OiAxOHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cbn1cblxuLmNvbnRlbnQge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSBAc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA0NzBweDtcbn1cblxuLnN0ZXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcblxuICAmLXRpdGxlIHtcbiAgICAubm8tc2VsZWN0O1xuICAgIG1hcmdpbjogQHNtYWxsLXNwYWNlIGF1dG87XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiBAZm9udC1zaXplICsgMnB4O1xuICB9XG5cbiAgJi1jb250ZW50IHtcbiAgICAucm93LWRpc3BsYXk7XG4gICAgZmxleC1ncm93OiAxO1xuICB9XG5cbn1cblxuLmJ1dHRvbiB7XG4gIC5zbW9vdGgtZmFzdC1hbmltYXRpb247XG4gIC5uby1zZWxlY3Q7XG4gIC5wb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIH1cbn1cblxuLmFkZC1hbnN3ZXItb3B0aW9uIHtcbiAgLmJ1dHRvbjtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIEBzcGFjZTtcbiAgbWFyZ2luOiAwIEBzbWFsbC1zcGFjZSBAc21hbGxlc3Qtc3BhY2UgYXV0bztcbiAgbWluLXdpZHRoOiAxNzNweDtcbn1cblxuLmFkZC1xdWVzdGlvbiB7XG4gIC5idXR0b247XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIEBzcGFjZTtcbiAgYmFja2dyb3VuZDogcmdiYSg2MSwgNzUsIDYwLCAwLjEpO1xuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDYxLCA3NSwgNjAsIDAuMyk7XG4gIH1cbn1cblxuLnF1ZXN0aW9uIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICAuZmxleC1ncm93O1xuICBwYWRkaW5nOiAwIEBzbWFsbC1zcGFjZTtcblxuICAmLXdvcmRpbmcge1xuICAgIC5yb3ctZGlzcGxheTtcbiAgICBtYXJnaW46IEBzcGFjZSAwIEBzbWFsbGVzdC1zcGFjZSAwO1xuICAgIHBhZGRpbmctYm90dG9tOiBAc21hbGwtc3BhY2U7XG4gICAgYm9yZGVyLWJvdHRvbTogQHNsaW0tYm9yZGVyO1xuXG4gICAgJi1pbnB1dCB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgcmVzaXplOiBub25lO1xuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIC5pdGFsaWM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5tYXgtaGVpZ2h0LTgwcHJjIHtcbiAgLnJlbGF0aXZlLXBvc2l0aW9uO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbi5hbnN3ZXJzIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBoZWlnaHQ6IDUwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogN3B4O1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICB9XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoNjEsIDc1LCA2MCwgMC4xKTtcbiAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgfVxufVxuXG4uYW5zd2VyIHtcbiAgLnJvdy1kaXNwbGF5O1xuICAuYnV0dG9uO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2U7XG4gIG1hcmdpbi1ib3R0b206IEBzbWFsbGVzdC1zcGFjZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICYtY29ycmVjdCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTMwLCA3NCwgMC4zKTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzQsIDEzMCwgNzQsIDAuMyk7XG4gICAgfVxuICB9XG5cbiAgJi1yZW1vdmUge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIH1cblxuICAmLW51bWJlciB7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IEBzbWFsbGVzdC1zcGFjZTtcbiAgfVxufVxuXG4ubWFyayB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuXG4gICYtZW1wdHkge1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogIzRjYWY1MCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gICYtZGlzYWJsZSB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi5zdHJ1Y3R1cmUge1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIC5jb2x1bW4tZGlzcGxheTtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiA0NzBweDtcbiAgYm9yZGVyLWxlZnQ6IDAuMDVlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBwYWRkaW5nOiAwIDAgMCBAc3BhY2U7XG4gIG1hcmdpbi1ib3R0b206IEBzcGFjZTtcblxuICAmLWluZm8ge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbiAgICBtYXJnaW4tdG9wOiBAc3BhY2U7XG4gICAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICAgIGhlaWdodDogODUlO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcblxuICAgICYtZW1wdHkge1xuICAgICAgLml0YWxpYztcbiAgICAgIC5ob3Jpem9udGFsLW1hcmdpbi1hdXRvO1xuICAgICAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIHdpZHRoOiA3cHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg2MSwgNzUsIDYwLCAwLjEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICAgfVxuXG4gICAgJi1jaG9zZW4tcXVlc3Rpb24ge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg3NCwgOTksIDEzMCwgMC4zKSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgICYtcXVlc3Rpb24ge1xuICAgICAgLnJvdy1kaXNwbGF5O1xuICAgICAgLmJ1dHRvbjtcbiAgICAgIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG4gICAgICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IEBzbWFsbGVzdC1zcGFjZTtcbiAgICAgICYtcmVtb3ZlIHtcbiAgICAgICAgLmJ1dHRvbjtcbiAgICAgICAgLnJvdy1kaXNwbGF5O1xuICAgICAgICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2U7XG5cbiAgICAgICAgJi1pY29uIHtcbiAgICAgICAgICAubm8tc2VsZWN0O1xuICAgICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTM0LCAxLCAxLCAwLjMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5uZXh0IHtcbiAgLmJ1dHRvbjtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIEBzcGFjZTtcbiAgYmFja2dyb3VuZDogcmdiYSg3NCwgMTMwLCA3NCwgMC45KTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0YTgyNGE7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCAxMzAsIDc0LCAwLjUpO1xuICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/test-task/test-task.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/test-task/test-task.component.ts ***!
    \*************************************************************/

  /*! exports provided: TestTaskComponent */

  /***/
  function srcAppComponentsTestTaskTestTaskComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestTaskComponent", function () {
      return TestTaskComponent;
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


    var _model_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../model/messages */
    "./src/app/model/messages.ts");
    /* harmony import */


    var _model_question__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../model/question */
    "./src/app/model/question.ts");

    var TestTaskComponent = /*#__PURE__*/function () {
      function TestTaskComponent(cdr) {
        _classCallCheck(this, TestTaskComponent);

        this.cdr = cdr;
        this.messages = _model_messages__WEBPACK_IMPORTED_MODULE_3__["messages"].education.tasks.types;
        this.questionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          wording: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          answers: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({}),
          submit: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.messages.saveQuestion)
        });
      }

      _createClass(TestTaskComponent, [{
        key: "refreshControls",
        value: function refreshControls() {
          var form = this.questionForm.get("answers");
          this.answers = Object.keys(form.controls);
          this.cdr.markForCheck();
        }
      }, {
        key: "initAnswers",
        value: function initAnswers() {
          this.questionForm.removeControl("answers");
          this.questionForm.addControl("answers", new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({}));
          var form = this.questionForm.get("answers");
          this.selectedQuestion.answers.forEach(function (answer, index) {
            return form.addControl("answer".concat(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](answer, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
          });
          this.refreshControls();
        }
      }, {
        key: "addAnswer",
        value: function addAnswer() {
          var form = this.questionForm.get("answers");
          form.addControl("answer".concat(Object.keys(form.controls).length), new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
          this.refreshControls();
        }
      }, {
        key: "removeAnswer",
        value: function removeAnswer(controlName, removingElementIndex) {
          var answer = this.selectedQuestion.answers[removingElementIndex];

          if (answer) {
            this.selectedQuestion.correctAnswers = this.selectedQuestion.correctAnswers.filter(function (correctAnswer) {
              return correctAnswer !== answer;
            });
            this.selectedQuestion.answers.splice(removingElementIndex, 1);
          }

          var form = this.questionForm.get("answers");
          form.removeControl(controlName);
          var answersCount = Object.keys(form.controls).length;
          this.initAnswers();
          var newForm = this.questionForm.get("answers");
          var newAnswersCount = Object.keys(newForm.controls).length;

          for (var i = 0; i < answersCount - newAnswersCount; i += 1) {
            this.addAnswer();
          }
        }
      }, {
        key: "addQuestion",
        value: function addQuestion(type) {
          this.testStructure.push(new _model_question__WEBPACK_IMPORTED_MODULE_4__["Question"](type));
        }
      }, {
        key: "selectQuestion",
        value: function selectQuestion(selectedQuestion) {
          this.selectedQuestion = selectedQuestion;
          this.questionForm.get("wording").setValue(this.selectedQuestion.wording);
          this.initAnswers();
        }
      }, {
        key: "saveAnswers",
        value: function saveAnswers() {
          var _this19 = this;

          var indexes = [];
          this.selectedQuestion.correctAnswers.forEach(function (correctAnswer) {
            return indexes.push(_this19.selectedQuestion.answers.indexOf(correctAnswer));
          });
          var form = this.questionForm.get("answers");
          this.selectedQuestion.answers = [];
          Object.keys(form.controls).forEach(function (controlName) {
            if (form.get(controlName).value) {
              _this19.selectedQuestion.answers.push(form.get(controlName).value);
            }
          });
          this.selectedQuestion.correctAnswers = [];
          indexes.forEach(function (i) {
            return _this19.selectedQuestion.correctAnswers.push(_this19.selectedQuestion.answers[i]);
          });
        }
      }, {
        key: "saveWording",
        value: function saveWording() {
          var input = this.questionForm.get("wording");

          if (input.value) {
            this.selectedQuestion.setWording(input.value);
          }
        }
      }, {
        key: "removeQuestion",
        value: function removeQuestion(removingQuestion) {
          this.testStructure = this.testStructure.filter(function (question) {
            return question !== removingQuestion;
          });

          if (this.selectedQuestion === removingQuestion) {
            delete this.selectedQuestion;
          }
        }
      }, {
        key: "checkCorrectAnswers",
        value: function checkCorrectAnswers(index) {
          var element = this.selectedQuestion.answers[index];
          return this.selectedQuestion.correctAnswers.includes(element);
        }
      }, {
        key: "markAs",
        value: function markAs(index) {
          var element = this.selectedQuestion.answers[index];

          if (!element) {
            return;
          }

          if (this.selectedQuestion.correctAnswers.includes(element)) {
            this.selectedQuestion.correctAnswers = this.selectedQuestion.correctAnswers.filter(function (correctAnswer) {
              return correctAnswer !== element;
            });
            return;
          }

          this.selectedQuestion.correctAnswers.push(element);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.testStructure = [];
        }
      }]);

      return TestTaskComponent;
    }();

    TestTaskComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    TestTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-test-task",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test-task.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-task/test-task.component.html"))["default"],
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test-task.component.less */
      "./src/app/components/test-task/test-task.component.less"))["default"]]
    })], TestTaskComponent);
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

    function passwordMatch(controlName1, controlName2) {
      return function (formGroup) {
        if (!formGroup.get(controlName1).hasError("minlength")) {
          if (formGroup.get(controlName1).value !== formGroup.get(controlName2).value) {
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
  "./src/app/directives/resize/resize.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/directives/resize/resize.directive.ts ***!
    \*******************************************************/

  /*! exports provided: ResizeDirective */

  /***/
  function srcAppDirectivesResizeResizeDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResizeDirective", function () {
      return ResizeDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ResizeDirective = /*#__PURE__*/function () {
      function ResizeDirective(elementRef) {
        _classCallCheck(this, ResizeDirective);

        this.elementRef = elementRef;
        this.fontWidth = 8.5;
      }

      _createClass(ResizeDirective, [{
        key: "calculateRows",
        value: function calculateRows() {
          var textLengthPX = this.elementRef.nativeElement.textLength * this.fontWidth;
          var areaWidth = this.elementRef.nativeElement.clientWidth;
          return Math.ceil(textLengthPX / areaWidth) ? Math.ceil(textLengthPX / areaWidth) : 1;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.elementRef.nativeElement.rows = this.calculateRows();
        }
      }, {
        key: "resize",
        value: function resize() {
          this.elementRef.nativeElement.rows = this.calculateRows();
        }
      }]);

      return ResizeDirective;
    }();

    ResizeDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("input")], ResizeDirective.prototype, "resize", null);
    ResizeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: "[appResize]"
    })], ResizeDirective);
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
          yellow: "#8d8d43",
          lightBlue: "#528ca2"
        };
        this.color = {
          white: "#ffffff",
          violet: "#532478",
          green: "#3f7e3a",
          yellow: "#707034",
          black: "#000000",
          lightBlue: "#528ca2"
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

            case "god":
              {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].lightBlue;
                break;
              }

            default:
              {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].white;
                this.elementRef.nativeElement.style.color = this.color.black;
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

  /*! exports provided: minute, messages */

  /***/
  function srcAppModelMessagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "minute", function () {
      return minute;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "messages", function () {
      return messages;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var minute = 60 * 1000;
    var messages = {
      notification: {
        haveNotNewNotifications: "нет новых уведомлений"
      },
      welcomeMessage: "Привет! Добро пожаловать в сервис.",
      welcomeOwner: "Приложение",
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
      },
      confirmation: {
        deleteAccountQuestion: "Действительно удалить аккаунт?",
        deleteAccountInfo: "Действие нельзя отменить - страница будет удалена без возможности восстановления",
        deleteAccountConfirm: "Удалить",
        deleteAccountCancel: "Отменить"
      },
      education: {
        materials: {
          empty: "нет материалов",
          add: "Новый материал",
          filter: ["все", "загруженные", "сохраненные"],
          sortOrder: ["сначала новые", "сначала старые"]
        },
        tasks: {
          empty: "нет заданий",
          add: "Новое задание",
          filter: ["невыполненные", "выполненные"],
          sortOrder: ["сначала новые", "сначала старые"],
          types: {
            simple: {
              title: "Письменное задание",
              description: "Задание в свободной форме: проверяется преподавателем"
            },
            test: {
              addAnswer: "Добавить вариант ответа",
              emptyStructure: "\<пусто\>",
              emptyAnswers: "\<нет вариантов ответа\>",
              title: "Тестовое задание",
              description: "Задание в тестовой форме: тестовая часть проверяется автоматически," + " письменная (если есть) - преподавателем"
            },
            wordingQuestion: "Придумайте вопрос и запишите его здесь",
            saveQuestion: "Сохранить",
            wordingAnswer: "Вариант ответа #",
            hint: "Наведите на значок задания, чтобы посмотреть описание"
          }
        },
        materialsFilter: ["все", "загруженные", "сохраненные"],
        tasksFilter: ["невыполненные", "выполненные"],
        sortOrder: ["сначала новые", "сначала старые"],
        materialsEmpty: "нет материалов",
        materialsAddPhrase: "Новый материал",
        tasksEmpty: "нет заданий",
        tasksAddPhrase: "Новое задание"
      },
      testCreator: {
        questionTip: "Придумайте вопрос..?",
        answerTip: "Запишите вариант ответа",
        addAnswerPhrase: "Добавить вариант ответа",
        completeCreatingAnswer: "Сохранить вопрос"
      }
    };
    /***/
  },

  /***/
  "./src/app/model/notification.ts":
  /*!***************************************!*\
    !*** ./src/app/model/notification.ts ***!
    \***************************************/

  /*! exports provided: Notification, welcomeNotification */

  /***/
  function srcAppModelNotificationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Notification", function () {
      return Notification;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "welcomeNotification", function () {
      return welcomeNotification;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./messages */
    "./src/app/model/messages.ts");

    var Notification = /*#__PURE__*/function () {
      function Notification(message, owner, lifetime) {
        _classCallCheck(this, Notification);

        this.message = message;
        this.owner = owner;
        this.datetime = new Date();
        this.lifetime = lifetime;
        this.checked = false;
      }

      _createClass(Notification, [{
        key: "markAsChecked",
        value: function markAsChecked() {
          this.checked = true;
        }
      }]);

      return Notification;
    }();

    var welcomeNotification = new Notification(_messages__WEBPACK_IMPORTED_MODULE_1__["messages"].welcomeMessage, "welcome", 60 * 60 * 1000);
    /***/
  },

  /***/
  "./src/app/model/question.ts":
  /*!***********************************!*\
    !*** ./src/app/model/question.ts ***!
    \***********************************/

  /*! exports provided: Question */

  /***/
  function srcAppModelQuestionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Question = /*#__PURE__*/function () {
      function Question(type, wording, answers, correctAnswers) {
        _classCallCheck(this, Question);

        this.type = type;
        this.wording = wording;
        this.answers = [];

        if (answers) {
          this.setAnswers(answers);
        }

        this.correctAnswers = [];

        if (correctAnswers) {
          this.setCorrectAnswers(answers);
        }
      }

      _createClass(Question, [{
        key: "setWording",
        value: function setWording(wording) {
          this.wording = wording;
        }
      }, {
        key: "setAnswers",
        value: function setAnswers(answers) {
          this.answers = this.answers.concat(answers);
        }
      }, {
        key: "setCorrectAnswers",
        value: function setCorrectAnswers(answers) {
          this.correctAnswers = this.correctAnswers.concat(answers);
        }
      }]);

      return Question;
    }();
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
  "./src/app/services/material-service/material.service.ts":
  /*!***************************************************************!*\
    !*** ./src/app/services/material-service/material.service.ts ***!
    \***************************************************************/

  /*! exports provided: MaterialService */

  /***/
  function srcAppServicesMaterialServiceMaterialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialService", function () {
      return MaterialService;
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
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var MaterialService = /*#__PURE__*/function () {
      function MaterialService(_http) {
        _classCallCheck(this, MaterialService);

        this._http = _http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + "materials/";
      }

      _createClass(MaterialService, [{
        key: "upload",
        value: function upload(userID, body) {
          return this._http.post(this.url + "".concat(userID), body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }]);

      return MaterialService;
    }();

    MaterialService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    MaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], MaterialService);
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../store/services/user-store.service/user-store.service */
    "./src/app/store/services/user-store.service/user-store.service.ts");

    var UserService = /*#__PURE__*/function () {
      function UserService(_http, userStore) {
        var _this20 = this;

        _classCallCheck(this, UserService);

        this._http = _http;
        this.userStore = userStore;
        this.usersURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + "users/";
        this.userStore.loadUserInfo().subscribe(function (user) {
          _this20.userInfo = user;
        });
      }

      _createClass(UserService, [{
        key: "saveUserInfo",
        value: function saveUserInfo() {
          console.log(this.userInfo);
          return this._http.put(this.usersURL + "".concat(this.userInfo._id), this.userInfo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }, {
        key: "forCheck",
        value: function forCheck() {
          return this._http.get(this.usersURL + "natalia").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () {
            return true;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err);
          }));
        }
      }, {
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
      }, {
        key: "deleteAccount",
        value: function deleteAccount(userID) {
          return this._http["delete"](this.usersURL + "".concat(userID)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
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
        type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_6__["UserStoreService"]
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

  /*! exports provided: userLogin, markNotificationsAsChecked, userLogout */

  /***/
  function srcAppStoreActionsUserActionsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userLogin", function () {
      return userLogin;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "markNotificationsAsChecked", function () {
      return markNotificationsAsChecked;
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
    var notificationCHECKED = "[User] notification was marked as seen";
    var LOGOUT = "[User] logged out";
    var userLogin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["props"])());
    var markNotificationsAsChecked = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(notificationCHECKED);
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
        userInfo: undefined
      });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_actions__WEBPACK_IMPORTED_MODULE_2__["markNotificationsAsChecked"], function (state) {
      return Object.assign({}, state, {
        userInfo: Object.assign({}, state.userInfo, {
          notifications: state.userInfo.notifications.map(function (notification) {
            return Object.assign({}, notification, {
              checked: true
            });
          })
        })
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
        key: "markNotificationsAsChecked",
        value: function markNotificationsAsChecked() {
          this.store$.dispatch(Object(_actions_user_actions__WEBPACK_IMPORTED_MODULE_3__["markNotificationsAsChecked"])());
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
      userInfo: undefined
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
      // url: "http://localhost:3000/",
      versionSign: "not for phone"
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
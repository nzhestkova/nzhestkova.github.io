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
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"background\" [ngClass]=\"{'light-theme': !darkThemeEnable, 'dark-theme': darkThemeEnable}\">\r\n  <div class=\"row-display bottom-margin\">\r\n    <div class=\"right-aligned\">\r\n      <button *ngIf=\"showSign\" class=\"sign-up\" routerLink=\"register\">Sign up</button>\r\n      <button *ngIf=\"showSign\" class=\"sign-in\" routerLink=\"login\">Sign in</button>\r\n    </div>\r\n<!--    <button class=\"theme\"-->\r\n<!--            [ngClass]=\"{'light-theme-button': !darkThemeEnable, 'dark-theme-button': darkThemeEnable}\"-->\r\n<!--            (click)=\"toggleTheme()\">-->\r\n<!--      <span class=\"theme-icon\" *ngIf=\"darkThemeEnable\">💡</span>-->\r\n<!--      <span class=\"theme-icon\" *ngIf=\"!darkThemeEnable\">🌙</span>-->\r\n<!--    </button>-->\r\n  </div>\r\n  <router-outlet>\r\n  </router-outlet>\r\n  <div class=\"fixed-bottom vertical-small-padding row-display\">\r\n    <span class=\"center-aligned\">~ {{specialSign}}</span>\r\n  </div>\r\n</div>\r\n<div [ngClass]=\"{'popup-transparent-light': !darkThemeEnable, 'popup-transparent-dark': darkThemeEnable}\"\r\n     *ngIf=\"loading | async\" class=\"load-popup\">\r\n  <div [ngClass]=\"{'load-icon-transparent-light': !darkThemeEnable, 'load-icon-transparent-dark': darkThemeEnable}\"\r\n       class=\"center-aligned column-display load-icon\">\r\n    <img [src]=\"darkThemeEnable ? '../assets/onload_dark.gif' : '../assets/onload.gif'\"\r\n         alt=\"loading\" class=\"load-image\">\r\n    <span [ngClass]=\"{'load-phrase-text-light': !darkThemeEnable, 'load-phrase-text-dark': darkThemeEnable}\"\r\n          class=\"center-aligned font-set load-phrase\">Подождите</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/closed-test-create/closed-test-create.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/closed-test-create/closed-test-create.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row-display\">\r\n  <form novalidate [formGroup]=\"openTestForm\" (submit)=\"saveQuestion()\"\r\n        class=\"column-display center-aligned creator-field flex-grow\">\r\n    <span class=\"italic\">Вопрос #{{testUnits.length + 1}}</span>\r\n    <label class=\"\">\r\n      <input [appClearInputTips]=\"{control: openTestForm.get('question'), message: testMessages.questionTip}\"\r\n             formControlName=\"question\"\r\n             class=\"test-data-input\">\r\n    </label>\r\n    <input type=\"button\" formControlName=\"addAnswer\" (click)=\"addAnswer()\" class=\"add-field-button\">\r\n    <div formGroupName=\"answerOptions\" class=\"column-display answer-options-table\">\r\n      <div class=\"row-display\" *ngFor=\"let answer of answerNames\">\r\n        <button (click)=\"setCorrectAnswer('answerOptions.' + answer)\"\r\n                [ngClass]=\"{\r\n                'clickable-radio': openTestForm.get('answerOptions.' + answer).valid,\r\n                'chosen-radio': 'answerOptions.' + answer === openTestForm.get('correctAnswer').value,\r\n                'simple-radio': 'answerOptions.' + answer !== openTestForm.get('correctAnswer').value\r\n                }\"\r\n                class=\"choice-square\">\r\n        </button>\r\n        <input\r\n          [appClearInputTips]=\"{control: openTestForm.get('answerOptions.' + answer), message: testMessages.answerTip}\"\r\n          [formControlName]=\"answer\"\r\n          class=\"test-data-input flex-grow\">\r\n        <button (click)=\"removeAnswer(answer)\" class=\"remove-button\"></button>\r\n      </div>\r\n    </div>\r\n    <input formControlName=\"complete\" type=\"submit\" class=\"save-answer-button\">\r\n  </form>\r\n  <div class=\"column-display h-center-align\">\r\n    <span class=\"\">Список вопросов</span>\r\n    <span *ngIf=\"!testUnits.length\" class=\"h-center-align\">&lt; пусто &gt;</span>\r\n    <div *ngFor=\"let unit of testUnits; let i = index\">\r\n      <span>Вопрос #{{i + 1}}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row-display\">\r\n  <button [ngClass]=\"{'chosen-link': chosenSection.number === 0, 'not-chosen-link': chosenSection.number !== 0}\"\r\n          (click)=\"choseSection(0)\"\r\n          class=\"left-link link-button first-link\">Материалы</button>\r\n  <button [ngClass]=\"{'chosen-link': chosenSection.number === 1, 'not-chosen-link': chosenSection.number !== 1}\"\r\n          (click)=\"choseSection(1)\"\r\n          class=\"right-link link-button last-link\">Задания</button>\r\n</div>\r\n<div class=\"column-display\">\r\n<!--  <button>{{educationMessages[chosenSection.title + 'AddPhrase']}}</button>-->\r\n  <span *ngIf=\"!userEducationInfo[chosenSection.title].length\" class=\"center-aligned small-top-margin\">\r\n    <i>{{educationMessages[chosenSection.title + 'Empty']}}</i>\r\n  </span>\r\n  <div *ngFor=\"let item of userEducationInfo[chosenSection.title]\" class=\"row-display\">\r\n    <span class=\"center-aligned small-top-margin\">{{item.title}}</span>\r\n    <span class=\"center-aligned small-top-margin\">{{item.link}}</span>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home-page/home-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"window\">\n  <div *ngIf=\"userExist\" class=\"window-main\">\n    <img src=\"../../../assets/danger.gif\" alt=\"kitty\">\n    <span class=\"centered-text\"><b>Вот ты и попався, {{user.username}} 😈</b></span>\n    <a routerLink=\"/profile\" class=\"centered-text link\">Редактировать</a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column-display content-plate\">\n  <span *ngIf=\"!notificationList.length\">Уведомления появятся здесь</span>\n  <div *ngFor=\"let notification of nativeNotification\" class=\"row-display notification\">\n    <img [src]=\"'../../../assets/' + notification.owner + 'Notification.svg'\" alt=\"welcome\" class=\"notification-icon\">\n    <div class=\"column-display flex-grow notification-message\">\n      <span class=\"owner\">{{notification.owner}}</span>\n      <span>{{notification.message}}</span>\n    </div>\n    <span class=\"date-time\">{{dateTime(notification.datetime)}}</span>\n  </div>\n  <div *ngFor=\"let notification of notificationList\" class=\"row-display notification\">\n    <img [src]=\"'../../../assets/' + notification.owner + 'Notification.svg'\" alt=\"welcome\" class=\"notification-icon\">\n    <div class=\"column-display flex-grow notification-message\">\n      <span class=\"owner\">{{notification.owner}}</span>\n      <span class=\"message\">{{notification.message}}</span>\n    </div>\n    <span class=\"date-time\">{{dateTime(notification.datetime)}}</span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-confirm/popup-confirm.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-confirm/popup-confirm.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ngClass]=\"{'light-background': !darkTheme, 'dark-background': darkTheme}\" class=\"load-popup\">\n  <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"\n       class=\"center-aligned column-display confirm-body\">\n    <span [ngClass]=\"{'confirm-light-title': !darkTheme, 'confirm-dark-title': darkTheme}\"\n          class=\"centered-text font-set bold-text confirm-title\">{{question}}</span>\n    <div class=\"center-aligned column-display confirm-info-body\">\n      <span class=\"centered-text font-set confirm-info\">{{info}}</span>\n      <div class=\"row-display\">\n        <button [ngClass]=\"{'simple-light-button': !darkTheme, 'simple-dark-button': darkTheme}\"\n                class=\"center-aligned chose-button simple-light-button\"\n                (click)=\"onCancel()\">{{cancel}}</button>\n        <button [ngClass]=\"{'danger-light-button': !darkTheme, 'danger-dark-button': darkTheme}\"\n                class=\"center-aligned chose-button\"\n                (click)=\"onConfirm()\">{{confirm}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"userExist\" class=\"row-display user-data\">\r\n<!--      <a class=\"link center-aligned\" routerLink=\"\">← вернуться</a>-->\r\n  <div class=\"column-display\">\r\n    <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"\r\n         class=\"column-display right-aligned plate avatar\">\r\n      <img [src]=\"user.status === 'god' ? '../../../assets/cat_god.png' : '../../../assets/cat_avatar.png'\"\r\n           alt=\"cat\" class=\"user-data-ico\">\r\n      <span [appSetStatus]=\"{status: user.status, darkTheme: darkTheme}\"\r\n            class=\"center-aligned status\">{{user.status}}</span>\r\n      <span class=\"user-data-username center-aligned\">{{user.username}}</span>\r\n    </div>\r\n    <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"\r\n         class=\"column-display edit-plate avatar small-top-margin\">\r\n      <div [ngClass]=\"{'button-light-theme': !darkTheme, 'button-dark-theme': darkTheme}\" routerLink=\"education\"\r\n           class=\"relative-position row-display control-button first-button\">\r\n        <img src=\"../../../assets/test_icon.svg\" alt=\"edit\" class=\"center-aligned smallest-icon button-icon\">\r\n        <span class=\"flex-grow button-title\">Обучение</span>\r\n      </div>\r\n      <div [ngClass]=\"{'button-light-theme': !darkTheme, 'button-dark-theme': darkTheme}\" routerLink=\"settings\"\r\n           class=\"relative-position row-display control-button first-button\">\r\n        <img src=\"../../../assets/settings.png\" alt=\"edit\" class=\"center-aligned smallest-icon button-icon\">\r\n        <span class=\"flex-grow button-title\">Настройки</span>\r\n      </div>\r\n      <div [ngClass]=\"{'button-light-theme': !darkTheme, 'button-dark-theme': darkTheme}\" routerLink=\"notifications\"\r\n           class=\"relative-position row-display control-button\">\r\n        <img src=\"../../../assets/notification.png\" alt=\"notification\" class=\"center-aligned smallest-icon button-icon\">\r\n        <span class=\"flex-grow button-title\">События</span>\r\n      </div>\r\n      <div [ngClass]=\"{'button-light-theme': !darkTheme, 'button-dark-theme': darkTheme}\" (click)=\"logout()\"\r\n           class=\"relative-position row-display control-button last-button\">\r\n        <img src=\"../../../assets/logout.png\" alt=\"notification\" class=\"center-aligned smallest-icon button-icon\">\r\n        <span class=\"flex-grow button-title red-button\">Выход</span>\r\n      </div>\r\n<!--      <div (click)=\"showPopup()\" [ngClass]=\"{'button-light-theme': !darkTheme, 'button-dark-theme': darkTheme}\"-->\r\n<!--           class=\"row-display control-button last-button\">-->\r\n<!--        <span class=\"flex-grow centered-text\">Удалить</span>-->\r\n<!--&lt;!&ndash;        <img src=\"../../../assets/edit.png\" alt=\"edit\" class=\"small-icon\">&ndash;&gt;-->\r\n<!--      </div>-->\r\n    </div>\r\n  </div>\r\n  <app-popup-confirm *ngIf=\"askConfirm\" (chosen)=\"deleteUser($event)\"\r\n                     [question]=\"confirmMessages.deleteAccountQuestion\"\r\n                     [info]=\"confirmMessages.deleteAccountInfo\"\r\n                     [confirm]=\"confirmMessages.deleteAccountConfirm\"\r\n                     [cancel]=\"confirmMessages.deleteAccountCancel\">\r\n  </app-popup-confirm>\r\n  <div [ngClass]=\"{'window-light-theme': !darkTheme, 'window-dark-theme': darkTheme}\"\r\n       class=\"column-display router flex-grow small-right-margin\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>settings works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column-display\">\r\n  <label *ngIf=\"authErrors.getError\" class=\"row-display auth-error center-aligned\">\r\n    <span class=\"right-aligned message-sign\"></span>\r\n    <span *ngIf=\"authErrors.loginDoesntExist\" class=\"left-aligned message\">{{authErrorMessages.loginDoesntExist}}</span>\r\n    <span *ngIf=\"authErrors.passwordDoesntMatch\" class=\"left-aligned message\">{{authErrorMessages.passwordDoesntMatch}}</span>\r\n  </label>\r\n  <form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"submitForm()\"\r\n        [ngClass]=\"{ 'window-light-theme': !darkThemeEnable, 'window-dark-theme': darkThemeEnable }\"\r\n        class=\"form column-display center-aligned\">\r\n    <label class=\"form-field\">\r\n      <span class=\"form-field-text center-aligned bold-text\">Login</span>\r\n      <input formControlName=\"login\" class=\"form-field-input\">\r\n    </label>\r\n    <label class=\"form-field\">\r\n      <span class=\"form-field-text center-aligned bold-text\">Password</span>\r\n      <label class=\"row-display relative-position\">\r\n        <input formControlName=\"password\" type=\"password\" class=\"form-field-input flex-grow\">\r\n        <label [appChangeImage]=\"['../../../assets/show_password.png', '../../../assets/hide_password.png']\"\r\n               class=\"relative-position column-display right-icon-container set-left-border pointer\">\r\n          <img appShowPassword src=\"../../../assets/hide_password.png\"\r\n               alt=\"show password\" class=\"small-icon vertical-auto-margin\">\r\n        </label>\r\n      </label>\r\n    </label>\r\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column-display\">\n  <form novalidate [formGroup]=\"registerForm\" (ngSubmit)=\"submitForm()\"\n        [ngClass]=\"{ 'window-light-theme': !darkThemeEnable, 'window-dark-theme': darkThemeEnable }\"\n        class=\"form column-display center-aligned\">\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Login</span>\n      <label class=\"row-display relative-position\">\n        <input formControlName=\"login\" (change)=\"checkLogin()\" (input)=\"resetLoadSigns()\"\n               class=\"right-icon flex-grow\">\n        <label class=\"relative-position column-display right-icon-container remove-left-border\">\n          <img *ngIf=\"loginCheckStatus.pending\" src=\"../../../assets/loading_light.gif\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n          <img *ngIf=\"loginCheckStatus.free\" src=\"../../../assets/success_light.ico\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n          <img *ngIf=\"loginCheckStatus.exist\" src=\"../../../assets/error_light.ico\" alt=\"load\" class=\"small-icon vertical-auto-margin\">\n        </label>\n      </label>\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('login').invalid && registerForm.get('login').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('login'), \"login\")]}}</span>\n    </label>\n    <label *ngIf=\"loginCheckStatus.exist\" class=\"row-display error\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError.loginExistError}}</span>\n    </label>\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Username</span>\n      <input formControlName=\"username\" class=\"form-field-input\">\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('username').invalid && registerForm.get('username').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('username'), \"username\")]}}</span>\n    </label>\n    <label class=\"form-field\">\n      <span class=\"form-field-text center-aligned bold-text\">Password</span>\n      <label class=\"row-display relative-position\">\n        <input formControlName=\"password\" type=\"password\" class=\"form-field-input flex-grow\">\n        <label [appChangeImage]=\"['../../../assets/show_password.png', '../../../assets/hide_password.png']\"\n               class=\"relative-position column-display right-icon-container set-left-border pointer\">\n          <img appShowPassword src=\"../../../assets/hide_password.png\"\n               alt=\"show password\" class=\"small-icon vertical-auto-margin\">\n        </label>\n      </label>\n    </label>\n      <label class=\"form-field\">\n        <label class=\"row-display relative-position\">\n          <input formControlName=\"passwordAgain\" type=\"password\" class=\"form-field-input flex-grow\">\n          <label [appChangeImage]=\"['../../../assets/show_password.png', '../../../assets/hide_password.png']\"\n                 class=\"relative-position column-display right-icon-container set-left-border pointer\">\n            <img appShowPassword src=\"../../../assets/hide_password.png\"\n                 alt=\"hide password\" class=\"small-icon vertical-auto-margin\">\n          </label>\n        </label>\n      </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.get('password').invalid && registerForm.get('password').touched\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError[controlStatus(registerForm.get('password'), \"password\")]}}</span>\n    </label>\n    <label class=\"row-display error\" *ngIf=\"registerForm.hasError('doesntMatch')\">\n      <span class=\"right-aligned message-sign\"></span>\n      <span class=\"left-aligned message\">{{invalidError.passwordDoesntMatch}}</span>\n    </label>\n    <input formControlName=\"submitButton\" type=\"submit\" class=\"form-submit\">\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-creator/test-creator.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-creator/test-creator.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"column-display relative-position\">\n  <div class=\"row-display\">\n  </div>\n</div>\n");

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
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sign-in-form/sign-in-form.component */ "./src/app/components/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sign-up-form/sign-up-form.component */ "./src/app/components/sign-up-form/sign-up-form.component.ts");










const routes = [
    { path: "", component: _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"] },
    { path: "register", component: _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_9__["SignUpFormComponent"] },
    { path: "login", component: _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_8__["SignInFormComponent"] },
    { path: "profile", component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"], children: [
            { path: "settings", component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"] },
            { path: "education", component: _components_education_education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"] },
            { path: "notifications", component: _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_5__["NotificationsComponent"] },
        ] },
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
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwiLi4vYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNFLGtCQUFBO0FDekJGO0FENEJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQzFCRjtBRDZCQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQzNCRjtBRDhCQTtFQUNFLGtCQUFBO0FDNUJGO0FEK0JBO0VBQ0UsbUJBQUE7QUM3QkY7QURnQ0E7RUFDRSwwQkFBQTtBQzlCRjtBRGlDQTtFQUNFLDBCQUFBO0FDL0JGO0FEa0NBO0VBQ0Usa0NBQUE7QUNoQ0Y7QURtQ0E7RUFDRSxpQkFBQTtBQ2pDRjtBRG9DQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQ2xDRjtBRHFDQTtFQUNFLFlBQUE7QUNuQ0Y7QURzQ0E7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0FDcENGO0FEdUNBO0VBQ0Usb0JBQUE7QUNyQ0Y7QUR3Q0E7RUFDRSxhQUFBO0FDdENGO0FEeUNBO0VBQ0UsZUFBQTtBQ3ZDRjtBRDBDQTtFQUNFLGVBQUE7QUN4Q0Y7QUQyQ0E7RUFDRSxlQUFBO0FDekNGO0FENENBO0VBQ0UsZUFBQTtBQzFDRjtBRDZDQTtFQUNFLG1CQUFBO0FDM0NGO0FEOENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQzVDRjtBRCtDQTtFQUNFLGdCQUFBO0FDN0NGO0FEZ0RBO0VBQ0UsY0FBQTtBQzlDRjtBRGlEQTtFQUNFLGNBQUE7QUMvQ0Y7QURrREE7RUFDRSxrQkFBQTtBQ2hERjtBRG1EQTtFQUNFLHdCQUFBO0FDakRGO0FEb0RBO0VBQ0Usa0JBQUE7QUNsREY7QURxREE7RUFDRSx3QkFBQTtBQ25ERjtBRHNEQTtFQUNFLG1CQUFBO0FDcERGO0FEdURBO0VBQ0UsY0FBQTtBQ3JERjtBRHdEQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUN0REY7QUR5REE7RUFDRSxZQUFBO0FDdkRGO0FEMERBO0VBQ0Usd0JBQUE7QUN4REY7QUQyREE7RUFDRSxxQkFBQTtBQ3pERjtBRDREQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQzFERjtBRDZEQTtFQUNFLGFBQUE7QUMzREY7QUQ4REE7RUFDRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQzVERjtBRCtEQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDN0RGO0FEZ0VBO0VBQ0UsWUFBQTtBQzlERjtBRGlFQTtFQWRFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBY0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQzdERjtBRGdFQTtFQXRCRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQXNCQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUM1REY7QUQrREE7RUFDRSxrQkFBQTtBQzdERjtBRGdFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7QUM5REY7QURpRUE7RUFDRSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQy9ERjtBRGtFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDaEVGO0FEaUVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQy9ESjtBRG1FQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQWxNQSwwQkFBQTtBQ2tJRjtBRGtFRTtFQUNFLG1CQUFBO0VBQ0EsNkJBQUE7RUF0TUYsMEJBQUE7QUN1SUY7QURpRUk7RUFDRSxtQkFBQTtFQUNBLDJCQUFBO0FDL0ROO0FEbUVBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBaE5BLDBCQUFBO0FDZ0pGO0FEa0VFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQXBORiwwQkFBQTtBQ3FKRjtBRGlFSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUMvRE47QURvRUE7RUFDRSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsY0FBQTtFQWhPQSwwQkFBQTtBQytKRjtBRHFFQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxZQUFBO0VBdk9BLDBCQUFBO0FDcUtGO0FEc0VBO0VBQ0UsUUFBQTtBQ3BFRjtBRHVFQTtFQXpIRSxhQUFBO0VBQ0Esc0JBQUE7RUEwSEEsZUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNwRUY7QUR1RUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBMVBBLDBCQUFBO0FDc0xGO0FEd0VBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBalFBLDBCQUFBO0FDNExGO0FEeUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUN2RUY7QUQwRUE7RUFDRSxvQ0FBQTtBQ3hFRjtBRDJFQTtFQUNFLGlDQUFBO0FDekVGO0FENEVBO0VBQ0Usb0NBQUE7QUMxRUY7QUQ2RUE7RUFDRSxpQ0FBQTtBQzNFRjtBRDhFQTtFQUNFLGNBQUE7QUM1RUY7QUQrRUE7RUFDRSxjQUFBO0FDN0VGIiwiZmlsZSI6Ii4uL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1zcGFjZTogNXB4O1xuQHNtYWxsLXNwYWNlOiAxMHB4O1xuQHNwYWNlOiAyMHB4O1xuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XG5AZ3JlZW4tY29sb3I6ICMwMGExMDA7XG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcbkBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZDZkZmVmO1xuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XG5AYm9yZGVyLXJhZGl1czogNXB4O1xuQGZvcm0td2lkdGg6IDI0MHB4O1xuQHNtYWxsLWljb24td2lkdGg6IDEuM2VtO1xuQHNtYWxsZXN0LWljb24td2lkdGg6IDAuN2VtO1xuXG5AYmFja2dyb3VuZC1kYXJrLXRoZW1lOiAjMmIyZTMwO1xuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XG5AdGV4dC1saWdodC1jb2xvcjogbGlnaHRlbihibGFjaywgMTAlKTtcbkB0ZXh0LWRhcmstY29sb3I6IHdoaXRlO1xuXG5Ad2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5Ad2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDogIzRhNGE0YTtcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XG5cbkBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG5cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cblxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuXG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICM2NDU1YjI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gQHNtYWxsLXNwYWNlO1xufVxuXG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbiAgaGVpZ2h0OiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50aGVtZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBsZWZ0OiAwLjdlbTtcbiAgdG9wOiAwLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gICYtaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAyMCUpO1xuICAgIH1cbiAgfVxufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICAgIH1cbiAgfVxufVxuXG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG5cbi5sb2FkLXBvcHVwIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4iLCIuaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZTtcbn1cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbn1cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5saW5rIHtcbiAgY29sb3I6ICM2NDU1YjI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbn1cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnNtYWxsZXN0LWljb24ge1xuICB3aWR0aDogMC43ZW07XG4gIGhlaWdodDogMC43ZW07XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4iXX0= */");

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/cookies-service/cookies.service */ "./src/app/services/cookies-service/cookies.service.ts");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/services/theme-store.service/theme-store.service */ "./src/app/store/services/theme-store.service/theme-store.service.ts");
/* harmony import */ var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/services/user-store.service/user-store.service */ "./src/app/store/services/user-store.service/user-store.service.ts");
/* harmony import */ var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/services/waiting-store.service/waiting-store.service */ "./src/app/store/services/waiting-store.service/waiting-store.service.ts");









let AppComponent = class AppComponent {
    constructor(userStore, userService, cookieService, themeStore, waitingStore, router, cdr) {
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
    logout() {
        this.cookieService.deleteCookies();
        this.userStore.logout();
        this.cdr.markForCheck();
    }
    toggleTheme() {
        this.themeStore.toggleTheme();
        const now = new Date();
        const cookieLife = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1, now.getMinutes(), now.getSeconds());
        this.cookieService.saveInfo("theme", `${this.darkThemeEnable}`, cookieLife);
    }
    ngOnInit() {
        setInterval(() => {
            const subs = this.userService.forCheck().subscribe((data) => {
                if (data) {
                    this.requestCount += 1;
                    this.cdr.markForCheck();
                    subs.unsubscribe();
                }
            });
        }, 300000);
        this.loading = this.waitingStore.loadInfo();
        const savedLogin = this.cookieService.checkInfo("login");
        const savedPassword = this.cookieService.checkInfo("password");
        if (savedLogin && savedPassword) {
            this.waitingStore.activateLoading();
            this.userService.loginUser(savedLogin, savedPassword).subscribe(data => {
                this.userStore.loginUser(data);
                this.waitingStore.deactivateLoading();
                // this.router.navigate(["", "profile"]).then();
            }, () => {
                this.cookieService.deleteCookie("login");
                this.cookieService.deleteCookie("password");
                this.waitingStore.deactivateLoading();
            });
        }
        // if (this.cookieService.checkInfo("theme")) {
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
    ngDoCheck() {
        this.themeStore.loadThemeInfo().subscribe(mode => this.darkThemeEnable = mode);
        this.userStore.loadUserInfo().subscribe(user => {
            this.user = user;
            this.showSign = !Object.keys(user).length;
            this.cdr.markForCheck();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_7__["UserStoreService"] },
    { type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"] },
    { type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_6__["ThemeStoreService"] },
    { type: _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_8__["WaitingStoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
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
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_popup_confirm_popup_confirm_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/popup-confirm/popup-confirm.component */ "./src/app/components/popup-confirm/popup-confirm.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/sign-in-form/sign-in-form.component */ "./src/app/components/sign-in-form/sign-in-form.component.ts");
/* harmony import */ var _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sign-up-form/sign-up-form.component */ "./src/app/components/sign-up-form/sign-up-form.component.ts");
/* harmony import */ var _directives_change_image_change_image_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/change-image/change-image.directive */ "./src/app/directives/change-image/change-image.directive.ts");
/* harmony import */ var _directives_set_status_set_status_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/set-status/set-status.directive */ "./src/app/directives/set-status/set-status.directive.ts");
/* harmony import */ var _directives_show_password_show_password_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/show-password/show-password.directive */ "./src/app/directives/show-password/show-password.directive.ts");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/reducers/app.reducers */ "./src/app/store/reducers/app.reducers.ts");
/* harmony import */ var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/services/theme-store.service/theme-store.service */ "./src/app/store/services/theme-store.service/theme-store.service.ts");
/* harmony import */ var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/services/user-store.service/user-store.service */ "./src/app/store/services/user-store.service/user-store.service.ts");
/* harmony import */ var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/services/waiting-store.service/waiting-store.service */ "./src/app/store/services/waiting-store.service/waiting-store.service.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_test_creator_test_creator_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/test-creator/test-creator.component */ "./src/app/components/test-creator/test-creator.component.ts");
/* harmony import */ var _components_closed_test_create_closed_test_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/closed-test-create/closed-test-create.component */ "./src/app/components/closed-test-create/closed-test-create.component.ts");
/* harmony import */ var _directives_clear_input_tips_clear_input_tips_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directives/clear-input-tips/clear-input-tips.directive */ "./src/app/directives/clear-input-tips/clear-input-tips.directive.ts");
/* harmony import */ var _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directives/tooltip.directive */ "./src/app/directives/tooltip.directive.ts");
/* harmony import */ var _components_education_education_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/education/education.component */ "./src/app/components/education/education.component.ts");
/* harmony import */ var _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/notifications/notifications.component */ "./src/app/components/notifications/notifications.component.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_12__["SignUpFormComponent"],
            _components_sign_in_form_sign_in_form_component__WEBPACK_IMPORTED_MODULE_11__["SignInFormComponent"],
            _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_8__["HomePageComponent"],
            _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
            _directives_show_password_show_password_directive__WEBPACK_IMPORTED_MODULE_15__["ShowPasswordDirective"],
            _directives_change_image_change_image_directive__WEBPACK_IMPORTED_MODULE_13__["ChangeImageDirective"],
            _directives_set_status_set_status_directive__WEBPACK_IMPORTED_MODULE_14__["SetStatusDirective"],
            _components_popup_confirm_popup_confirm_component__WEBPACK_IMPORTED_MODULE_9__["PopupConfirmComponent"],
            _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__["SettingsComponent"],
            _components_test_creator_test_creator_component__WEBPACK_IMPORTED_MODULE_22__["TestCreatorComponent"],
            _components_closed_test_create_closed_test_create_component__WEBPACK_IMPORTED_MODULE_23__["ClosedTestCreateComponent"],
            _directives_clear_input_tips_clear_input_tips_directive__WEBPACK_IMPORTED_MODULE_24__["ClearInputTipsDirective"],
            _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_25__["TooltipDirective"],
            _components_education_education_component__WEBPACK_IMPORTED_MODULE_26__["EducationComponent"],
            _components_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_27__["NotificationsComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_17__["appReducers"], {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
        ],
        providers: [
            _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"],
            _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_19__["UserStoreService"],
            _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_18__["ThemeStoreService"],
            _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_20__["WaitingStoreService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/closed-test-create/closed-test-create.component.less":
/*!*********************************************************************************!*\
  !*** ./src/app/components/closed-test-create/closed-test-create.component.less ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  padding: 5px 10px;\n  transition: all 100ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  cursor: pointer;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  padding: 5px 10px;\n  transition: all 100ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  cursor: pointer;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.button {\n  transition: all 100ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  cursor: pointer;\n}\n.clickable-radio:hover::after {\n  visibility: visible;\n}\n.chosen-radio::after {\n  visibility: visible;\n}\n.simple-radio::after {\n  visibility: hidden;\n}\n.choice-square {\n  padding: 5px 10px;\n  transition: all 100ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  padding: 0.5em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  margin-top: auto;\n  margin-right: 10px;\n}\n.choice-square::after {\n  content: \"\";\n  position: absolute;\n  margin: 3px;\n  border-radius: 100%;\n  background: #628d50;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.save-answer-button {\n  padding: 5px 10px;\n  transition: all 100ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  cursor: pointer;\n  margin: auto 20px auto auto;\n  padding: 10px 15px;\n  border-radius: 5px;\n  border: 2px solid transparent;\n  color: #2f4c2b;\n  background: #ffffff;\n}\n.save-answer-button:hover {\n  color: white;\n  background: #578d50;\n}\n.answer-options-table {\n  height: 160px;\n  overflow: scroll;\n}\n.add-field-button {\n  display: flex;\n  flex-direction: column;\n  padding: 5px 10px;\n  transition: all 100ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  cursor: pointer;\n  border: 2px solid transparent;\n  border-radius: 5px;\n  margin: 10px 0 auto auto;\n  padding: 10px 15px;\n  background: #ffffff;\n}\n.add-field-button:hover {\n  background: #eaeaea;\n}\n.creator-field {\n  max-width: 700px;\n  width: 75%;\n  margin: 0 auto auto 10px;\n  padding: 10px 20px;\n}\n.test-data-input {\n  font-family: \"Georgia\", sans-serif;\n  flex-grow: 1;\n  font-size: 16px;\n  padding-top: 10px;\n  padding-left: 5px;\n  padding-right: 10px;\n  outline: none;\n  border: none;\n  color: #aeaeae;\n}\n.remove-button {\n  position: relative;\n  padding: 5px 10px;\n  transition: all 100ms ease;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  cursor: pointer;\n  font-size: 14px;\n  border: none;\n  margin: auto;\n  border-radius: 5px;\n  background: #ffffff;\n  color: rgba(0, 0, 0, 0.51);\n  padding: 10px;\n}\n.remove-button:hover {\n  background: #8d5050;\n  color: white;\n}\n.remove-button::before {\n  content: \"✕\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsb3NlZC10ZXN0LWNyZWF0ZS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsImNsb3NlZC10ZXN0LWNyZWF0ZS9jbG9zZWQtdGVzdC1jcmVhdGUuY29tcG9uZW50Lmxlc3MiLCJjbG9zZWQtdGVzdC1jcmVhdGUvTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2Nsb3NlZC10ZXN0LWNyZWF0ZS9jbG9zZWQtdGVzdC1jcmVhdGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBO0VBQ0Usa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLDBCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsMEJBQUE7QUMvQkY7QURrQ0E7RUFDRSxrQ0FBQTtBQ2hDRjtBRG1DQTtFQUNFLGlCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDbENGO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxvQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxlQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0FDMUNGO0FENkNBO0VBQ0UsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsZ0JBQUE7QUM3Q0Y7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Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBb0dBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QURzUUY7QUNyUUU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUR1UUo7QUNyUUU7RUFDRSxZQUFBO0VGM0ZGLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ21XRiIsImZpbGUiOiJjbG9zZWQtdGVzdC1jcmVhdGUvY2xvc2VkLXRlc3QtY3JlYXRlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNGE0YTRhO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbiIsIi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuM2VtO1xufVxuLnNpZ24taW4ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYTEwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMTAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zaWduLXVwIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4uYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2xpY2thYmxlLXJhZGlvOmhvdmVyOjphZnRlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uY2hvc2VuLXJhZGlvOjphZnRlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uc2ltcGxlLXJhZGlvOjphZnRlciB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5jaG9pY2Utc3F1YXJlIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNob2ljZS1zcXVhcmU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IDNweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZDogIzYyOGQ1MDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLnNhdmUtYW5zd2VyLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiBhdXRvIDIwcHggYXV0byBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMmY0YzJiO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLnNhdmUtYW5zd2VyLWJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzU3OGQ1MDtcbn1cbi5hbnN3ZXItb3B0aW9ucy10YWJsZSB7XG4gIGhlaWdodDogMTYwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uYWRkLWZpZWxkLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IDAgYXV0byBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uYWRkLWZpZWxkLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG59XG4uY3JlYXRvci1maWVsZCB7XG4gIG1heC13aWR0aDogNzAwcHg7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMTBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLnRlc3QtZGF0YS1pbnB1dCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgZmxleC1ncm93OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI2FlYWVhZTtcbn1cbi5yZW1vdmUtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41MSk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ucmVtb3ZlLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM4ZDUwNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5yZW1vdmUtYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKclVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBmb250LXNpemU6IDE2cHg7XG5AbWF4LWNyZWF0b3Itd2lkdGg6IDcwMHB4O1xuQGhhbGYtdmlzaWJsZS1ibGFjazogcmdiYSgwLCAwLCAwLCAwLjUxKTtcbkBncmV5LXRpcHMtdGV4dDogI2FlYWVhZTtcbkBncmV5LWJvcmRlci1idXR0b246ICNkOGQ4ZDg7XG5AZ3JlZW4tYnV0dG9uLWNvbG9yOiAjNTc4ZDUwO1xuQGdyZWVuLWlucHV0LWNvbG9yOiAjNjI4ZDUwO1xuQHJlZC1idXR0b24tY29sb3I6ICM4ZDUwNTA7XG5cbi5idXR0b24ge1xuICAuc21vb3RoLWZhc3QtYW5pbWF0aW9uO1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsaWNrYWJsZS1yYWRpbyB7XG4gICY6aG92ZXIge1xuICAgICY6OmFmdGVyIHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG59XG5cbi5jaG9zZW4tcmFkaW8ge1xuICAmOjphZnRlciB7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG4uc2ltcGxlLXJhZGlvIHtcbiAgJjo6YWZ0ZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4uY2hvaWNlLXNxdWFyZSB7XG4gIC5idXR0b247XG4gIC5yZWxhdGl2ZS1wb3NpdGlvbjtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IEBzbWFsbC1zcGFjZTtcbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogQGdyZWVuLWlucHV0LWNvbG9yO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxufVxuXG4uc2F2ZS1hbnN3ZXItYnV0dG9uIHtcbiAgLmJ1dHRvbjtcbiAgbWFyZ2luOiBhdXRvIEBzcGFjZSBhdXRvIGF1dG87XG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSBAc21hbGwtc3BhY2UgKyBAc21hbGxlc3Qtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGRhcmtlbihAZ3JlZW4tYnV0dG9uLWNvbG9yLCAyMCUpO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiBAZ3JlZW4tYnV0dG9uLWNvbG9yO1xuICB9XG59XG5cbi5hbnN3ZXItb3B0aW9ucy10YWJsZSB7XG4gIGhlaWdodDogMTYwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5hZGQtZmllbGQtYnV0dG9uIHtcbiAgLnNtb290aC1mYXN0LWFuaW1hdGlvbjtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICAuYnV0dG9uO1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIG1hcmdpbjogQHNtYWxsLXNwYWNlIDAgYXV0byBhdXRvO1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgQHNtYWxsLXNwYWNlICsgQHNtYWxsZXN0LXNwYWNlO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGdyZXktYm9yZGVyLWJ1dHRvbiwgNyUpO1xuICB9XG59XG5cbi5jcmVhdG9yLWZpZWxkIHtcbiAgbWF4LXdpZHRoOiBAbWF4LWNyZWF0b3Itd2lkdGg7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gQHNtYWxsLXNwYWNlO1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgQHNwYWNlO1xufVxuXG4udGVzdC1kYXRhLWlucHV0IHtcbiAgLmZvbnQtc2V0O1xuICAuZmxleC1ncm93O1xuICBmb250LXNpemU6IEBmb250LXNpemU7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsZXN0LXNwYWNlO1xuICBwYWRkaW5nLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IEBncmV5LXRpcHMtdGV4dDtcbn1cblxuLnJlbW92ZS1idXR0b24ge1xuICAuc21vb3RoLWZhc3QtYW5pbWF0aW9uO1xuICAucmVsYXRpdmUtcG9zaXRpb247XG4gIC5idXR0b247XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7IC8vXG4gIGNvbG9yOiBAaGFsZi12aXNpYmxlLWJsYWNrOyAvL1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2U7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IEByZWQtYnV0dG9uLWNvbG9yO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi4pyVXCI7XG4gICAgLmZ1bGxzY3JlZW47XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/closed-test-create/closed-test-create.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/closed-test-create/closed-test-create.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClosedTestCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedTestCreateComponent", function() { return ClosedTestCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _model_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/messages */ "./src/app/model/messages.ts");
/* harmony import */ var _model_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/test */ "./src/app/model/test.ts");





let ClosedTestCreateComponent = class ClosedTestCreateComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.testMessages = _model_messages__WEBPACK_IMPORTED_MODULE_3__["messages"].testCreator;
        this.openTestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            question: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.testMessages.questionTip, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
            ]),
            answerOptions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                answer1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.testMessages.answerTip, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                ]),
                answer2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.testMessages.answerTip, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                ]),
            }),
            addAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](`+ ${this.testMessages.addAnswerPhrase}`),
            correctAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", []),
            complete: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.testMessages.completeCreatingAnswer),
        });
    }
    setCorrectAnswer(controlName) {
        if (this.openTestForm.get(controlName).invalid) {
            return;
        }
        if (this.openTestForm.get("correctAnswer").value !== controlName) {
            this.openTestForm.get("correctAnswer").setValue(controlName);
            console.log(this.openTestForm.get("correctAnswer").value);
        }
    }
    saveQuestion() {
        if (this.openTestForm.invalid || this.answerNames.length < 2) {
            return;
        }
        this.testUnits.push(new _model_test__WEBPACK_IMPORTED_MODULE_4__["SimpleTestUnit"](this.openTestForm.get("question").value, this.openTestForm.get("correctAnswer").value, this.answerNames.map((name) => this.openTestForm.get(`answerOptions.${name}`).value)));
    }
    answerNumber(maxIndex) {
        for (let i = 1; i < maxIndex + 1; i += 1) {
            if (!this.answerNames.find((item) => item.match(`${i}`))) {
                return i;
            }
        }
        return 0;
    }
    addAnswer() {
        if (this.answerNames.length === 4) {
            this.openTestForm.get("addAnswer").disable();
        }
        const form = this.openTestForm.get("answerOptions");
        const missNumber = this.answerNumber(5);
        const newAnswerNumber = missNumber ? missNumber : Object.keys(form.controls).length + 1;
        form.addControl(`answer${newAnswerNumber}`, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.testMessages.answerTip, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]));
        this.answerNames.push(`answer${newAnswerNumber}`);
        this.cdr.markForCheck();
    }
    removeAnswer(name) {
        if (this.answerNames.length === 5) {
            this.openTestForm.get("addAnswer").enable();
        }
        const form = this.openTestForm.get("answerOptions");
        form.removeControl(name);
        this.answerNames = this.answerNames.filter((item) => item !== name);
        this.cdr.markForCheck();
    }
    ngOnInit() {
        const form = this.openTestForm.get("answerOptions");
        this.answerNames = [];
        this.testUnits = [];
        Object.keys(form.controls).forEach((name) => {
            this.answerNames.push(`${name}`);
        });
    }
};
ClosedTestCreateComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ClosedTestCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-closed-test-create",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./closed-test-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/closed-test-create/closed-test-create.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./closed-test-create.component.less */ "./src/app/components/closed-test-create/closed-test-create.component.less")).default]
    })
], ClosedTestCreateComponent);



/***/ }),

/***/ "./src/app/components/education/education.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/education/education.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  padding: 5px 10px;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  padding: 5px 10px;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.button {\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n}\n.first-link {\n  border-top-left-radius: 5px;\n}\n.last-link {\n  border-top-right-radius: 5px;\n}\n.chosen-link {\n  border-top: none;\n  border-right: none;\n  border-bottom: 2px solid darkred;\n  border-left: none;\n}\n.not-chosen-link {\n  border-top: none;\n  border-right: none;\n  border-bottom: 2px solid transparent;\n  border-left: none;\n}\n.not-chosen-link:hover {\n  border-bottom-color: #e6e6e6;\n}\n.link-button {\n  transition: all 100ms ease;\n  padding: 5px 10px;\n  font-size: 16px;\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  width: 7em;\n  padding: 15px 0 5px 0;\n  margin: 0 20px 10px 20px;\n  background: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkdWNhdGlvbi9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsImVkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50Lmxlc3MiLCJlZHVjYXRpb24vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBO0VBQ0Usa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLDBCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsMEJBQUE7QUMvQkY7QURrQ0E7RUFDRSxrQ0FBQTtBQ2hDRjtBRG1DQTtFQUNFLGlCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDbENGO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxvQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxlQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0FDMUNGO0FENkNBO0VBQ0UsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsZ0JBQUE7QUM3Q0Y7QURnREE7RUFDRSxjQUFBO0FDOUNGO0FEaURBO0VBQ0UsY0FBQTtBQy9DRjtBRGtEQTtFQUNF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QTtBRG9RRjtBQ25RRTtFQUNFLDRCQUFBO0FEcVFKO0FDalFBO0VGc0JFLDBCQUFBO0VBNkhBLGlCQUFBO0VFakxBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLGFBQUE7RUErQkEsVUFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtBRHNRRiIsImZpbGUiOiJlZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNGE0YTRhO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbiIsIi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuM2VtO1xufVxuLnNpZ24taW4ge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYTEwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMTAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zaWduLXVwIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4uYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZmlyc3QtbGluayB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5sYXN0LWxpbmsge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuLmNob3Nlbi1saW5rIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZGFya3JlZDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4ubm90LWNob3Nlbi1saW5rIHtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLm5vdC1jaG9zZW4tbGluazpob3ZlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNlNmU2ZTY7XG59XG4ubGluay1idXR0b24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogN2VtO1xuICBwYWRkaW5nOiAxNXB4IDAgNXB4IDA7XG4gIG1hcmdpbjogMCAyMHB4IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcbkBidG4tYm9yZGVyLXN0eWxlOiAycHggc29saWQgcmVkO1xuXG4uYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZmlyc3QtbGluayB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4ubGFzdC1saW5rIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4uY2hvc2VuLWxpbmsge1xuICBib3JkZXItdG9wOiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBkYXJrcmVkO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLm5vdC1jaG9zZW4tbGluayB7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMTAlKTtcbiAgfVxufVxuXG4ubGluay1idXR0b24ge1xuICAuc21vb3RoLWZhc3QtYW5pbWF0aW9uO1xuICAuYnV0dG9uO1xuICB3aWR0aDogN2VtO1xuICBwYWRkaW5nOiAxNXB4IDAgQHNtYWxsZXN0LXNwYWNlIDA7XG4gIG1hcmdpbjogMCBAc3BhY2UgQHNtYWxsLXNwYWNlIEBzcGFjZTtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/education/education.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/education/education.component.ts ***!
  \*************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/messages */ "./src/app/model/messages.ts");
/* harmony import */ var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/services/user-store.service/user-store.service */ "./src/app/store/services/user-store.service/user-store.service.ts");




let EducationComponent = class EducationComponent {
    constructor(userStore, cdr) {
        this.userStore = userStore;
        this.cdr = cdr;
        this.educationMessages = _model_messages__WEBPACK_IMPORTED_MODULE_2__["messages"].education;
    }
    choseSection(sectionNumber) {
        this.chosenSection = this.sections[sectionNumber];
    }
    ngOnInit() {
        this.userStore.loadUserInfo().subscribe((user) => {
            if (Object.keys(user)) {
                const userExisted = user;
                this.userEducationInfo = userExisted.education;
                this.cdr.markForCheck();
            }
        });
        this.sections = [
            { number: 0, title: "materials" },
            { number: 1, title: "tasks" },
        ];
        this.chosenSection = this.sections[0];
    }
};
EducationComponent.ctorParameters = () => [
    { type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_3__["UserStoreService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-education",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./education.component.less */ "./src/app/components/education/education.component.less")).default]
    })
], EducationComponent);



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.less ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.window {\n  display: flex;\n  flex-direction: column;\n}\n.window img {\n  margin: auto;\n  width: 90%;\n  max-width: 500px;\n}\n.window-main {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.centered-text {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsImhvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiLCJob21lLXBhZ2UvTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBO0VBQ0Usa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLDBCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsMEJBQUE7QUMvQkY7QURrQ0E7RUFDRSxrQ0FBQTtBQ2hDRjtBRG1DQTtFQUNFLGlCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDbENGO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxvQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxlQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0FDMUNGO0FENkNBO0VBQ0UsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsZ0JBQUE7QUM3Q0Y7QURnREE7RUFDRSxjQUFBO0FDOUNGO0FEaURBO0VBQ0UsY0FBQTtBQy9DRjtBRGtEQTtFQUNFLGtCQUFBO0FDaERGO0FEbURBO0VBQ0Usd0JBQUE7QUNqREY7QURvREE7RUFDRSxrQkFBQTtBQ2xERjtBRHFEQTtFQUNFLHdCQUFBO0FDbkRGO0FEc0RBO0VBQ0UsbUJBQUE7QUNwREY7QUR1REE7RUFDRSxjQUFBO0FDckRGO0FEd0RBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ3RERjtBRHlEQTtFQUNFLFlBQUE7QUN2REY7QUQwREE7RUFDRSx3QkFBQTtBQ3hERjtBRDJEQTtFQUNFLHFCQUFBO0FDekRGO0FENERBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDMURGO0FENkRBO0VBQ0UsYUFBQTtBQzNERjtBRDhEQTtFQUNFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDNURGO0FEK0RBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUM3REY7QURnRUE7RUFDRSxZQUFBO0FDOURGO0FEaUVBO0VBZEUsa0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFjQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDN0RGO0FEZ0VBO0VBdEJFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBc0JBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQzVERjtBRCtEQTtFQUNFLGtCQUFBO0FDN0RGO0FEZ0VBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQzlERjtBRGlFQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDL0RGO0FEa0VBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNoRUY7QURpRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDL0RKO0FEbUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBbE1BLDBCQUFBO0FDa0lGO0FEa0VFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQXRNRiwwQkFBQTtBQ3VJRjtBRGlFSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUMvRE47QURtRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFoTkEsMEJBQUE7QUNnSkY7QURrRUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBcE5GLDBCQUFBO0FDcUpGO0FEaUVJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQy9ETjtBRG9FQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBaE9BLDBCQUFBO0FDK0pGO0FEcUVBO0VBQ0UsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUF2T0EsMEJBQUE7QUNxS0Y7QURzRUE7RUFDRSxRQUFBO0FDcEVGO0FEdUVBO0VBekhFLGFBQUE7RUFDQSxzQkFBQTtFQTBIQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ3BFRjtBRHVFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUExUEEsMEJBQUE7QUNzTEY7QUR3RUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFqUUEsMEJBQUE7QUM0TEY7QUR5RUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ3ZFRjtBRDBFQTtFQUNFLG9DQUFBO0FDeEVGO0FEMkVBO0VBQ0UsaUNBQUE7QUN6RUY7QUQ0RUE7RUFDRSxvQ0FBQTtBQzFFRjtBRDZFQTtFQUNFLGlDQUFBO0FDM0VGO0FEOEVBO0VBQ0UsY0FBQTtBQzVFRjtBRCtFQTtFQUNFLGNBQUE7QUM3RUY7QUNyUUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUR1UUY7QUN0UUU7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FEd1FKO0FDdFFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUR3UUo7QUNwUUE7RUFDRSxrQkFBQTtBRHNRRiIsImZpbGUiOiJob21lLXBhZ2UvaG9tZS1wYWdlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNGE0YTRhO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbiIsIi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuM2VtO1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzJiMmUzMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjNGE0YTRhO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi53aW5kb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndpbmRvdyBpbWcge1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG4ud2luZG93LW1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcblxuLndpbmRvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICYgaW1nIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICB9XG4gICYtbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuXG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */");

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
/* harmony import */ var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/services/user-store.service/user-store.service */ "./src/app/store/services/user-store.service/user-store.service.ts");



let HomePageComponent = class HomePageComponent {
    constructor(userStore, cdr) {
        this.userStore = userStore;
        this.cdr = cdr;
    }
    ngDoCheck() {
        this.subscriber = this.userStore.loadUserInfo().subscribe((user) => {
            this.user = user;
            this.userExist = !!Object.keys(user).length;
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
};
HomePageComponent.ctorParameters = () => [
    { type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"] },
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

/***/ "./src/app/components/notifications/notifications.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.content-plate {\n  margin: 5px 10px;\n}\n.notification {\n  padding: 15px 0;\n  margin: 0 10px;\n  border-width: 0.01em;\n  border-style: solid;\n  border-color: transparent transparent #d3d3d3 transparent;\n}\n.date-time {\n  color: #5b3434;\n  margin: auto 5px auto auto;\n}\n.notification-message {\n  margin-right: 20px;\n  line-height: 1.2em;\n}\n.owner {\n  font-weight: bold;\n}\n.notification-icon {\n  height: 50px;\n  width: 50px;\n  margin: auto 20px auto auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMvTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50Lmxlc3MiLCJub3RpZmljYXRpb25zL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvY29tcG9uZW50cy9ub3RpZmljYXRpb25zL25vdGlmaWNhdGlvbnMuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBO0VBQ0Usa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLDBCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsMEJBQUE7QUMvQkY7QURrQ0E7RUFDRSxrQ0FBQTtBQ2hDRjtBRG1DQTtFQUNFLGlCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDbENGO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxvQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxlQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0FDMUNGO0FENkNBO0VBQ0UsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsZ0JBQUE7QUM3Q0Y7QURnREE7RUFDRSxjQUFBO0FDOUNGO0FEaURBO0VB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QUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QURnUUYiLCJmaWxlIjoibm90aWZpY2F0aW9ucy9ub3RpZmljYXRpb25zLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNGE0YTRhO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbiIsIi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuM2VtO1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzJiMmUzMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjNGE0YTRhO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi5jb250ZW50LXBsYXRlIHtcbiAgbWFyZ2luOiA1cHggMTBweDtcbn1cbi5ub3RpZmljYXRpb24ge1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBib3JkZXItd2lkdGg6IDAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjZDNkM2QzIHRyYW5zcGFyZW50O1xufVxuLmRhdGUtdGltZSB7XG4gIGNvbG9yOiAjNWIzNDM0O1xuICBtYXJnaW46IGF1dG8gNXB4IGF1dG8gYXV0bztcbn1cbi5ub3RpZmljYXRpb24tbWVzc2FnZSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuLm93bmVyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubm90aWZpY2F0aW9uLWljb24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW46IGF1dG8gMjBweCBhdXRvIGF1dG87XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5AZm9udC1zaXplOiAxNnB4O1xuQDE1cHgtc3BhY2U6IDE1cHg7XG5cbi5jb250ZW50LXBsYXRlIHtcbiAgbWFyZ2luOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgcGFkZGluZzogMTVweCAwO1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xuICBib3JkZXItd2lkdGg6IDAuMDFlbTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNkM2QzZDMgdHJhbnNwYXJlbnQ7XG59XG5cbi5kYXRlLXRpbWUge1xuICBjb2xvcjogIzViMzQzNDtcbiAgbWFyZ2luOiBhdXRvIEBzbWFsbGVzdC1zcGFjZSBhdXRvIGF1dG87XG59XG5cbi5ub3RpZmljYXRpb24tbWVzc2FnZSB7XG4gIG1hcmdpbi1yaWdodDogQHNwYWNlO1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59XG5cbi5vd25lciB7XG4gIC5ib2xkLXRleHQ7XG59XG5cbi5ub3RpZmljYXRpb24taWNvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogYXV0byBAc3BhY2UgYXV0byBhdXRvO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/notifications/notifications.component.ts ***!
  \*********************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/services/user-store.service/user-store.service */ "./src/app/store/services/user-store.service/user-store.service.ts");



let NotificationsComponent = class NotificationsComponent {
    constructor(userStore, cdr) {
        this.userStore = userStore;
        this.cdr = cdr;
        this.nativeNotification = [];
    }
    dateTime(date) {
        const datetime = new Date(date);
        const now = new Date();
        const today = datetime.getDate() === now.getDate();
        return today
            ? `${datetime.getHours()}:${datetime.getMinutes()}`
            : `${datetime.getDate()} ${this.monthConverter(datetime.getMonth() + 1)}`;
    }
    monthConverter(num) {
        switch (num) {
            case 1: {
                return "января";
            }
            case 2: {
                return "февраля";
            }
            case 3: {
                return "марта";
            }
            case 4: {
                return "апреля";
            }
            case 5: {
                return "мая";
            }
            case 6: {
                return "июня";
            }
            case 7: {
                return "июля";
            }
            case 8: {
                return "августа";
            }
            case 9: {
                return "сентября";
            }
            case 10: {
                return "октября";
            }
            case 11: {
                return "ноября";
            }
            case 12: {
                return "декабря";
            }
            default: {
                return "???";
            }
        }
    }
    ngOnInit() {
        this.userStore.loadUserInfo().subscribe((user) => {
            this.notificationList = user.notifications.reverse();
            this.cdr.markForCheck();
        });
    }
};
NotificationsComponent.ctorParameters = () => [
    { type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_2__["UserStoreService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-notifications",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notifications/notifications.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notifications.component.less */ "./src/app/components/notifications/notifications.component.less")).default]
    })
], NotificationsComponent);



/***/ }),

/***/ "./src/app/components/popup-confirm/popup-confirm.component.less":
/*!***********************************************************************!*\
  !*** ./src/app/components/popup-confirm/popup-confirm.component.less ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.light-background {\n  background: rgba(192, 192, 192, 0.5);\n}\n.dark-background {\n  background: rgba(39, 39, 39, 0.5);\n}\n.confirm-body {\n  border-radius: 5px;\n  width: 80%;\n  max-width: 400px;\n  min-width: 280px;\n}\n.confirm-title {\n  padding-top: 10px;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.confirm-light-title {\n  color: #710202;\n}\n.confirm-dark-title {\n  color: #f9bfbf;\n}\n.confirm-info {\n  padding: 20px 10px;\n}\n.confirm-info-body {\n  padding: 0 20px 10px 20px;\n}\n.danger-light-button {\n  background: #ffffff;\n  color: #640000;\n}\n.danger-light-button:hover {\n  cursor: pointer;\n  background: #8a4242;\n  color: white;\n}\n.danger-light-button:active {\n  background: #a64f4f;\n}\n.danger-dark-button {\n  background: #4a4a4a;\n  color: #f9bfbf;\n}\n.danger-dark-button:hover {\n  cursor: pointer;\n  background: #242424;\n}\n.danger-dark-button:active {\n  background: #313131;\n}\n.simple-light-button {\n  background: #ffffff;\n  color: black;\n}\n.simple-light-button:hover {\n  cursor: pointer;\n  background: #e5e5e5;\n}\n.simple-light-button:active {\n  background: #cccccc;\n}\n.simple-dark-button {\n  background: #4a4a4a;\n  color: white;\n}\n.simple-dark-button:hover {\n  cursor: pointer;\n  background: #242424;\n}\n.simple-dark-button:active {\n  background: #313131;\n}\n.chose-button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  transition: all 100ms ease;\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  min-width: 110px;\n  width: 35%;\n  font-size: 16px;\n  height: 2.3em;\n  padding: 5px 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLWNvbmZpcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJwb3B1cC1jb25maXJtL3BvcHVwLWNvbmZpcm0uY29tcG9uZW50Lmxlc3MiLCJwb3B1cC1jb25maXJtL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvY29tcG9uZW50cy9wb3B1cC1jb25maXJtL3BvcHVwLWNvbmZpcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBO0VBQ0Usa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLDBCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsMEJBQUE7QUMvQkY7QURrQ0E7RUFDRSxrQ0FBQTtBQ2hDRjtBRG1DQTtFQUNFLGlCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDbENGO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxvQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxlQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0FDMUNGO0FENkNBO0VBQ0UsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsZ0JBQUE7QUM3Q0Y7QURnREE7RUFDRSxjQUFBO0FDOUNGO0FEaURBO0VB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elBBO0VBQ0Usa0JBQUE7QUQyUEY7QUN4UEE7RUFDRSx5QkFBQTtBRDBQRjtBQ3ZQQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBRHlQRjtBQ3ZQRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUR5UEo7QUN0UEU7RUFDRSxtQkFBQTtBRHdQSjtBQ3BQQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBRHNQRjtBQ3BQRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRHNQSjtBQ25QRTtFQUNFLG1CQUFBO0FEcVBKO0FDalBBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FEbVBGO0FDalBFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEbVBKO0FDaFBFO0VBQ0UsbUJBQUE7QURrUEo7QUM5T0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QURnUEY7QUM5T0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QURnUEo7QUM3T0U7RUFDRSxtQkFBQTtBRCtPSjtBQzNPQTtFRjZFRSxrQ0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQTdIQSwwQkFBQTtFRWlEQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUQrT0YiLCJmaWxlIjoicG9wdXAtY29uZmlybS9wb3B1cC1jb25maXJtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNGE0YTRhO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbiIsIi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuM2VtO1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzJiMmUzMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjNGE0YTRhO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi5saWdodC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDE5MiwgMTkyLCAwLjUpO1xufVxuLmRhcmstYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDM5LCAzOSwgMC41KTtcbn1cbi5jb25maXJtLWJvZHkge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiA4MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1pbi13aWR0aDogMjgwcHg7XG59XG4uY29uZmlybS10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uY29uZmlybS1saWdodC10aXRsZSB7XG4gIGNvbG9yOiAjNzEwMjAyO1xufVxuLmNvbmZpcm0tZGFyay10aXRsZSB7XG4gIGNvbG9yOiAjZjliZmJmO1xufVxuLmNvbmZpcm0taW5mbyB7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbn1cbi5jb25maXJtLWluZm8tYm9keSB7XG4gIHBhZGRpbmc6IDAgMjBweCAxMHB4IDIwcHg7XG59XG4uZGFuZ2VyLWxpZ2h0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjNjQwMDAwO1xufVxuLmRhbmdlci1saWdodC1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICM4YTQyNDI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5kYW5nZXItbGlnaHQtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNhNjRmNGY7XG59XG4uZGFuZ2VyLWRhcmstYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgY29sb3I6ICNmOWJmYmY7XG59XG4uZGFuZ2VyLWRhcmstYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xufVxuLmRhbmdlci1kYXJrLWJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjMzEzMTMxO1xufVxuLnNpbXBsZS1saWdodC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogYmxhY2s7XG59XG4uc2ltcGxlLWxpZ2h0LWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cbi5zaW1wbGUtbGlnaHQtYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6ICNjY2NjY2M7XG59XG4uc2ltcGxlLWRhcmstYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnNpbXBsZS1kYXJrLWJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzI0MjQyNDtcbn1cbi5zaW1wbGUtZGFyay1idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzMxMzEzMTtcbn1cbi5jaG9zZS1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWluLXdpZHRoOiAxMTBweDtcbiAgd2lkdGg6IDM1JTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDIuM2VtO1xuICBwYWRkaW5nOiA1cHggMjBweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi9hcHAuY29tcG9uZW50Lmxlc3NcIjtcblxuQG1heC13aWR0aDogNDAwcHg7XG5AbWluLXdpZHRoOiAyODBweDtcbkBidXR0b24td2lkdGg6IDExMHB4O1xuQGJ1dHRvbi1mb250LXNpemU6IDE2cHg7XG5AcmVkLWNvbG9yOiAjYTA1ZjVmO1xuXG4ubGlnaHQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTkyLCAxOTIsIDE5MiwgMC41KTtcbn1cblxuLmRhcmstYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzksIDM5LCAzOSwgMC41KTtcbn1cblxuLmNvbmZpcm0tYm9keSB7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IEBtYXgtd2lkdGg7XG4gIG1pbi13aWR0aDogQG1pbi13aWR0aDtcbn1cblxuLmNvbmZpcm0tdGl0bGUge1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4uY29uZmlybS1saWdodC10aXRsZSB7XG4gIGNvbG9yOiAjNzEwMjAyO1xufVxuXG4uY29uZmlybS1kYXJrLXRpdGxlIHtcbiAgY29sb3I6ICNmOWJmYmY7XG59XG5cbi5jb25maXJtLWluZm8ge1xuICBwYWRkaW5nOiBAc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uY29uZmlybS1pbmZvLWJvZHkge1xuICBwYWRkaW5nOiAwIEBzcGFjZSBAc21hbGwtc3BhY2UgQHNwYWNlO1xufVxuXG4uZGFuZ2VyLWxpZ2h0LWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgY29sb3I6ICM2NDAwMDA7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IHNhdHVyYXRlKGRhcmtlbihAcmVkLWNvbG9yLCAxMCUpLCAxMCUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBzYXR1cmF0ZShkYXJrZW4oQHJlZC1jb2xvciwgMiUpLCAxMCUpO1xuICB9XG59XG5cbi5kYW5nZXItZGFyay1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDtcbiAgY29sb3I6ICNmOWJmYmY7XG5cbiAgJjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAd2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZCwgMTUlKTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQsIDEwJSk7XG4gIH1cbn1cblxuLnNpbXBsZS1saWdodC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGNvbG9yOiBibGFjaztcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbiAgfVxuXG4gICY6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oI2U1ZTVlNSwgMTAlKTtcbiAgfVxufVxuXG4uc2ltcGxlLWRhcmstYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kLCAxNSUpO1xuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAd2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZCwgMTAlKTtcbiAgfVxufVxuXG4uY2hvc2UtYnV0dG9uIHtcbiAgLmJ1dHRvbjtcbiAgLnNtb290aC1mYXN0LWFuaW1hdGlvbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiBub25lO1xuICBtaW4td2lkdGg6IEBidXR0b24td2lkdGg7XG4gIHdpZHRoOiAzNSU7XG4gIGZvbnQtc2l6ZTogQGJ1dHRvbi1mb250LXNpemU7XG4gIGhlaWdodDogMi4zZW07XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc3BhY2U7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/popup-confirm/popup-confirm.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/popup-confirm/popup-confirm.component.ts ***!
  \*********************************************************************/
/*! exports provided: PopupConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupConfirmComponent", function() { return PopupConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/services/theme-store.service/theme-store.service */ "./src/app/store/services/theme-store.service/theme-store.service.ts");



let PopupConfirmComponent = class PopupConfirmComponent {
    constructor(themeStore, cdr) {
        this.themeStore = themeStore;
        this.cdr = cdr;
        this.chosen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onConfirm() {
        this.chosen.emit(true);
    }
    onCancel() {
        this.chosen.emit(false);
    }
    ngOnInit() {
        this.themeStore.loadThemeInfo().subscribe((theme) => {
            this.darkTheme = theme;
            this.cdr.markForCheck();
        });
    }
};
PopupConfirmComponent.ctorParameters = () => [
    { type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_2__["ThemeStoreService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupConfirmComponent.prototype, "question", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupConfirmComponent.prototype, "info", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupConfirmComponent.prototype, "confirm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PopupConfirmComponent.prototype, "cancel", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PopupConfirmComponent.prototype, "chosen", void 0);
PopupConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-popup-confirm",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-confirm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-confirm/popup-confirm.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./popup-confirm.component.less */ "./src/app/components/popup-confirm/popup-confirm.component.less")).default]
    })
], PopupConfirmComponent);



/***/ }),

/***/ "./src/app/components/profile/profile.component.less":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.less ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.active:active {\n  background: #5f508d;\n}\n.red-button {\n  color: #a40800;\n}\n.button-title {\n  margin-left: 25px;\n}\n.set-font-size {\n  font-size: 17px;\n}\n.hover-effect:hover .button-icon {\n  visibility: visible;\n}\n.button-icon {\n  position: absolute;\n  padding: 5px 10px 5px 5px;\n  left: 5px;\n  top: 0;\n  bottom: 0;\n  border-right: 1px solid #797979;\n}\n.status-dark-theme {\n  color: #532478;\n  background: #f9f9f9;\n  transition: all 500ms ease;\n}\n.status-light-theme {\n  color: white;\n  background: #5f508d;\n  transition: all 500ms ease;\n}\n.avatar {\n  max-width: 150px;\n}\n.edit-plate {\n  font-family: \"Georgia\", sans-serif;\n  min-width: 170px;\n  margin-left: 10px;\n  border-radius: 5px;\n}\n.first-button {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.last-button {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.control-button {\n  font-family: \"Georgia\", sans-serif;\n  cursor: pointer;\n  padding: 7px 20px;\n  outline: none;\n  font-size: 17px;\n  background: transparent;\n}\n.button-dark-theme:hover {\n  background: #b9b9b9;\n  color: #1a1a1a;\n}\n.button-light-theme:hover {\n  background: #ededed;\n}\n.router {\n  font-family: \"Georgia\", sans-serif;\n  margin-left: 10px;\n  border-radius: 5px;\n}\n.plate {\n  font-family: \"Georgia\", sans-serif;\n  margin-left: 10px;\n  padding: 20px 10px;\n  border-radius: 5px;\n}\n.status {\n  text-align: center;\n  font-weight: bold;\n  max-width: 120px;\n  padding: 5px 20px;\n  border-radius: 5px;\n  transition: all 500ms ease;\n}\n.user-data {\n  margin-top: 20px;\n}\n.user-data-ico {\n  width: 120px;\n  margin: 10px auto;\n  padding: 10px;\n}\n.user-data-username {\n  text-align: center;\n  max-width: 120px;\n  margin-top: 10px;\n  font-weight: bold;\n  line-height: 1.5;\n}\n.message {\n  margin-top: 20px;\n  padding-left: 10px;\n  text-align: left;\n  font-weight: bold;\n}\n.part {\n  font-weight: lighter;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiLCJwcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmxlc3MiLCJwcm9maWxlL046L3dvcmtzcGFjZXMvaWRlYS13b3Jrc3BhY2UvcGluZy10ZXN0L3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBO0VBQ0Usa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLDBCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsMEJBQUE7QUMvQkY7QURrQ0E7RUFDRSxrQ0FBQTtBQ2hDRjtBRG1DQTtFQUNFLGlCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDbENGO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxvQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxlQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0FDMUNGO0FENkNBO0VBQ0UsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsZ0JBQUE7QUM3Q0Y7QURnREE7RUFDRSxjQUFBO0FDOUNGO0FEaURBO0VBQ0UsY0FBQTtBQy9DRjtBRGtEQTtFQUNFLGtCQUFBO0FDaERG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K09GO0FDblBBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VGRUEsMEJBQUE7QUNvUEY7QUNsUEE7RUFDRSxnQkFBQTtBRG9QRjtBQ2pQQTtFRkVFLGtDQUFBO0VFQUEsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEbVBGO0FDaFBBO0VBQ0UsMkJBQUE7RUFDQSw0QkFBQTtBRGtQRjtBQy9PQTtFQUNFLDhCQUFBO0VBQ0EsK0JBQUE7QURpUEY7QUM5T0E7RUZmRSxrQ0FBQTtFRWlCQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FEZ1BGO0FDNU9FO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FEOE9KO0FDek9FO0VBQ0UsbUJBQUE7QUQyT0o7QUN2T0E7RUZyQ0Usa0NBQUE7RUV1Q0EsaUJBQUE7RUFDQSxrQkFBQTtBRHlPRjtBQ3RPQTtFRjNDRSxrQ0FBQTtFRTZDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUR3T0Y7QUNyT0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VGL0RBLDBCQUFBO0FDdVNGO0FDbk9BO0VBQ0UsZ0JBQUE7QURxT0Y7QUNwT0U7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FEc09KO0FDcE9FO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRHNPSjtBQ2xPQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEb09GO0FDak9BO0VBQ0Usb0JBQUE7QURtT0YiLCJmaWxlIjoicHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNGE0YTRhO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbiIsIi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuM2VtO1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzJiMmUzMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjNGE0YTRhO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi5hY3RpdmU6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzVmNTA4ZDtcbn1cbi5yZWQtYnV0dG9uIHtcbiAgY29sb3I6ICNhNDA4MDA7XG59XG4uYnV0dG9uLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4uc2V0LWZvbnQtc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cbi5ob3Zlci1lZmZlY3Q6aG92ZXIgLmJ1dHRvbi1pY29uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5idXR0b24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDVweDtcbiAgbGVmdDogNXB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzc5Nzk3OTtcbn1cbi5zdGF0dXMtZGFyay10aGVtZSB7XG4gIGNvbG9yOiAjNTMyNDc4O1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zdGF0dXMtbGlnaHQtdGhlbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICM1ZjUwOGQ7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmF2YXRhciB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG4uZWRpdC1wbGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgbWluLXdpZHRoOiAxNzBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5maXJzdC1idXR0b24ge1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4ubGFzdC1idXR0b24ge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG59XG4uY29udHJvbC1idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG4uYnV0dG9uLWRhcmstdGhlbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xuICBjb2xvcjogIzFhMWExYTtcbn1cbi5idXR0b24tbGlnaHQtdGhlbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuLnJvdXRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5wbGF0ZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLnN0YXR1cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIHBhZGRpbmc6IDVweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnVzZXItZGF0YSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG4udXNlci1kYXRhLWljbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4udXNlci1kYXRhLXVzZXJuYW1lIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wYXJ0IHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vYXBwLmNvbXBvbmVudC5sZXNzXCI7XG5AaWNvbi13aWR0aDogMTIwcHg7XG5Ac3RhdHVzLWRhcmstYmFja2dyb3VuZDogI2Y5ZjlmOTtcbkBzdGF0dXMtbGlnaHQtYmFja2dyb3VuZDogIzVmNTA4ZDtcbkBzdGF0dXMtZGFyay1jb2xvci10ZXh0OiAjNTMyNDc4O1xuQG1lZGlhbC1zcGFjZTogN3B4O1xuXG4uYWN0aXZlIHtcbiAgJjphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICM1ZjUwOGQ7XG4gIH1cbn1cblxuLnJlZC1idXR0b24ge1xuICBjb2xvcjogI2E0MDgwMDtcbn1cblxuLmJ1dHRvbi10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiBAc3BhY2UgKyBAc21hbGxlc3Qtc3BhY2U7XG59XG5cbi5zZXQtZm9udC1zaXplIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uaG92ZXItZWZmZWN0IHtcbiAgJjpob3ZlciB7XG4gICAgLmJ1dHRvbi1pY29uIHtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG59XG5cbi5idXR0b24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZSBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsZXN0LXNwYWNlO1xuICBsZWZ0OiBAc21hbGxlc3Qtc3BhY2U7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzk3OTc5O1xufVxuXG4uc3RhdHVzLWRhcmstdGhlbWUge1xuICBjb2xvcjogQHN0YXR1cy1kYXJrLWNvbG9yLXRleHQ7XG4gIGJhY2tncm91bmQ6IEBzdGF0dXMtZGFyay1iYWNrZ3JvdW5kO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLnN0YXR1cy1saWdodC10aGVtZSB7XG4gIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgYmFja2dyb3VuZDogQHN0YXR1cy1saWdodC1iYWNrZ3JvdW5kO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbn1cblxuLmF2YXRhciB7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5lZGl0LXBsYXRlIHtcbiAgLmZvbnQtc2V0O1xuICBtaW4td2lkdGg6IDE3MHB4O1xuICBtYXJnaW4tbGVmdDogQHNtYWxsLXNwYWNlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbn1cblxuLmZpcnN0LWJ1dHRvbiB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5sYXN0LWJ1dHRvbiB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG59XG5cbi5jb250cm9sLWJ1dHRvbiB7XG4gIC5mb250LXNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiBAbWVkaWFsLXNwYWNlIEBzcGFjZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ1dHRvbi1kYXJrLXRoZW1lIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBzdGF0dXMtZGFyay1iYWNrZ3JvdW5kLCAyNSUpO1xuICAgIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgfVxufVxuXG4uYnV0dG9uLWxpZ2h0LXRoZW1lIHtcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgNyUpO1xuICB9XG59XG5cbi5yb3V0ZXIge1xuICAuZm9udC1zZXQ7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4ucGxhdGUge1xuICAuZm9udC1zZXQ7XG4gIG1hcmdpbi1sZWZ0OiBAc21hbGwtc3BhY2U7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xufVxuXG4uc3RhdHVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiBAaWNvbi13aWR0aDtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4vLyB0ZW1wb3Jhcnkgc3R5bGVzXG4udXNlci1kYXRhIHtcbiAgbWFyZ2luLXRvcDogQHNwYWNlO1xuICAmLWljbyB7XG4gICAgd2lkdGg6IEBpY29uLXdpZHRoO1xuICAgIG1hcmdpbjogQHNtYWxsLXNwYWNlIGF1dG87XG4gICAgcGFkZGluZzogQHNtYWxsLXNwYWNlO1xuICB9XG4gICYtdXNlcm5hbWUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXgtd2lkdGg6IEBpY29uLXdpZHRoO1xuICAgIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cbi5tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogQHNwYWNlO1xuICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYXJ0IHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _model_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../model/messages */ "./src/app/model/messages.ts");
/* harmony import */ var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cookies-service/cookies.service */ "./src/app/services/cookies-service/cookies.service.ts");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/services/theme-store.service/theme-store.service */ "./src/app/store/services/theme-store.service/theme-store.service.ts");
/* harmony import */ var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/services/user-store.service/user-store.service */ "./src/app/store/services/user-store.service/user-store.service.ts");








let ProfileComponent = class ProfileComponent {
    constructor(userService, cookieService, userStore, themeStore, router, cdr) {
        this.userService = userService;
        this.cookieService = cookieService;
        this.userStore = userStore;
        this.themeStore = themeStore;
        this.router = router;
        this.cdr = cdr;
        this.confirmMessages = _model_messages__WEBPACK_IMPORTED_MODULE_3__["messages"].confirmation;
    }
    logout() {
        this.userStore.logout();
        this.cookieService.deleteCookies();
        this.router.navigate([""]).then();
    }
    showPopup() {
        this.askConfirm = true;
    }
    hidePopup() {
        this.askConfirm = false;
    }
    deleteUser(value) {
        if (!value) {
            this.hidePopup();
            return;
        }
        this.userService.deleteAccount(this.user._id).subscribe((answer) => {
            if (answer) {
                this.userStore.logout();
                this.router.navigate([""]).then();
            }
        });
    }
    ngOnInit() {
        this.askConfirm = false;
    }
    ngDoCheck() {
        this.themeStore.loadThemeInfo().subscribe((theme) => this.darkTheme = theme);
        this.subscriber = this.userStore.loadUserInfo().subscribe((user) => {
            this.userExist = !!Object.keys(user).length;
            this.user = user;
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.subscriber.unsubscribe();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_4__["CookiesService"] },
    { type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_7__["UserStoreService"] },
    { type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_6__["ThemeStoreService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/profile/profile.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.less */ "./src/app/components/profile/profile.component.less")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/settings/settings.component.less":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.less ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQubGVzcyJ9 */");

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-settings",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.less */ "./src/app/components/settings/settings.component.less")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/components/sign-in-form/sign-in-form.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/sign-in-form/sign-in-form.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.remove-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  border-left: none;\n}\n.set-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.right-icon {\n  outline: none;\n  border-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  background: #ffffff;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n  z-index: 0;\n}\n.right-icon-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  background: #ffffff;\n  width: 1.3em;\n}\n.form {\n  padding: 20px;\n  font-family: \"Georgia\", sans-serif;\n  position: relative;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-text {\n  margin-bottom: 10px;\n}\n.form-field-input {\n  outline: none;\n  border-radius: 5px;\n  background: #ffffff;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n}\n.form-field-input-password {\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  height: 2em;\n  font-size: 16px;\n  outline: none;\n}\n.form-field-input-login-loading {\n  height: 100%;\n}\n.form-submit {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 20px;\n  font-size: 16px;\n  height: 2.3em;\n  background: #596b9f;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  transition: all 500ms ease;\n}\n.form-submit:hover {\n  cursor: pointer;\n  background: #3d5088;\n}\n.form-submit:disabled {\n  cursor: auto;\n  background: #a8acb6;\n}\n.form-submit:active {\n  background: #8d919e;\n}\n.input-dark-theme {\n  background: #efefef;\n  border-color: #efefef;\n}\n.error {\n  margin: 0 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: #d6dfef;\n  color: #1e0456;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: #1e0456;\n  margin-right: 10px;\n}\n.auth-error {\n  margin-bottom: 10px;\n  padding: 10px 20px;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n  border: 1px solid #b58484;\n  background: #bf9494;\n  color: white;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: white;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24taW4tZm9ybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzaWduLWluLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzaWduLWluLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JjO0VBQVksa0JBQUE7QUN0QjFCO0FEd0JTO0VBQ1MsaUJBQUE7RUFHUCxrQkFBQTtBQ3hCWDtBRHlCZTtFQUNOLGtCQUFBO0VBR04sTUFBQTtFQUFVLFNBQUE7RUFDRixPQUFBO0VBQVcsUUFBQTtBQ3ZCdEI7QUR5QkM7RUFDSyxrQkFBQTtBQ3ZCTjtBRDBCQztFQUNnQixtQkFBQTtBQ3hCakI7QUQwQkE7RUFHQSwwQkFBQTtBQzFCQTtBRDZCRTtFQUNNLDBCQUFBO0FDM0JSO0FEOEJHO0VBQWMsa0NBQUE7QUMzQmpCO0FENEJxQjtFQUdyQixpQkFBQTtBQzVCQTtBRDZCUztFQUFVLGNBQUE7RUFHakIscUJBQUE7QUM1QkY7QUQ2QmM7RUFHWixZQUFBO0FDN0JGO0FEOEJVO0VBQ0QsZUFBQTtFQUNQLE9BQUE7RUFFTSxTQUFBO0VBQ0QsUUFBQTtBQzdCUDtBRCtCQTtFQUVPLG9CQUFBO0FDOUJQO0FEZ0NRO0VBQ0QsYUFBQTtBQzlCUDtBRGlDUztFQUNILGVBQUE7QUMvQk47QUQrQjRCO0VBSXRCLGVBQUE7QUNoQ047QURtQ1M7RUFDRyxlQUFBO0FDakNaO0FEb0NPO0VBQ0csZUFBQTtBQ2xDVjtBRHFDSztFQUNPLG1CQUFBO0FDbkNaO0FEc0NXO0VBQ0QsaUJBQUE7RUFFVixrQkFBQTtBQ3JDQTtBRHNDcUI7RUFDUCxnQkFBQTtBQ3BDZDtBRHVDWTtFQUNKLGNBQUE7QUNyQ1I7QURzQ087RUFHQyxjQUFBO0FDdENSO0FEdUNjO0VBR04sa0JBQUE7QUN2Q1I7QUR3Q1c7RUFHUyx3QkFBQTtBQ3hDcEI7QUQwQ0U7RUFFbUIsa0JBQUE7QUN6Q3JCO0FEMkNBO0VBRTZCLHdCQUFBO0FDMUM3QjtBRDJDZ0M7RUFHdkIsbUJBQUE7QUMzQ1Q7QUQ0Q1k7RUFDVixjQUFBO0FDMUNGO0FENENrQjtFQUNQLGdCQUFBO0VBQW9CLG1CQUFBO0FDekMvQjtBRDRDYTtFQUNFLFlBQUE7QUMxQ2Y7QUQ2Q0M7RUFDRCx3QkFBQTtBQzNDQTtBRDhDRztFQUFrQixxQkFBQTtBQzNDckI7QUQ2Q0M7RUFBb0IsYUFBQTtFQUdaLHNCQUFBO0FDNUNUO0FEOENBO0VBRVksYUFBQTtBQzdDWjtBRDhDWTtFQUFZLGtDQUFBO0VBSXRCLGFBQUE7RUFBaUIsaUJBQUE7QUM3Q25CO0FEaURXO0VBQ0MsWUFBQTtFQUdELGFBQUE7QUNqRFg7QURxREs7RUFDSyxZQUFBO0FDbkRWO0FEb0RTO0VBbEJlLGtDQUFBO0VBSXRCLGFBQUE7RUFBaUIsaUJBQUE7RUFlSixZQUFBO0VBQ2QsbUJBQUE7RUFHSyxxQkFBQTtFQUNGLGlCQUFBO0FDakRKO0FEaUQwQjtFQXhCRixrQ0FBQTtFQUl0QixhQUFBO0VBQWlCLGlCQUFBO0VBdUJQLG1CQUFBO0VBQ1kscUJBQUE7RUFJakIsa0JBQUE7QUNqRFA7QURrRGtCO0VBQ04sa0JBQUE7QUNoRFo7QURpRE07RUFDSixrQkFBQTtFQUNBLFFBQUE7RUFFTyxNQUFBO0FDaERUO0FEaURRO0VBQ0ksZUFBQTtFQUNULE9BQUE7RUFBVyxNQUFBO0VBQVUsUUFBQTtFQUNsQixTQUFBO0VBQWEsY0FBQTtFQUdWLGtCQUFBO0FDOUNUO0FEK0NVO0VBQVcsZUFBQTtFQUdULFlBQUE7RUFDVixhQUFBO0VBQWlCLFdBQUE7RUFDUixVQUFBO0VBRVYsNkJBQUE7RUFHYSxtQkFBQTtFQUVULGFBQUE7RUFDTSxVQUFBO0FDakRYO0FEa0RZO0VBQ0Qsa0JBQUE7RUFDSyxnQkFBQTtBQ2hEaEI7QURvREc7RUFDSCxtQkFBQTtFQUVJLGNBQUE7RUF4TEosMEJBQUE7QUNzSUE7QURvRHNCO0VBQ25CLG1CQUFBO0VBRVUsNkJBQUE7RUE3TGIsMEJBQUE7QUMySUE7QUR5RGE7RUFDQSxtQkFBQTtFQUNlLDJCQUFBO0FDdkQ1QjtBRDBEZ0M7RUFBZ0IsbUJBQUE7RUFDZixZQUFBO0VBMU1qQywwQkFBQTtBQ29KQTtBRHVEa0I7RUFDVCxtQkFBQTtFQUN1Qyw2QkFBQTtFQTdNaEQsMEJBQUE7QUN5SkE7QUR5REE7RUFDQyxtQkFBQTtFQUNrQiwyQkFBQTtBQ3ZEbkI7QUQwRGE7RUFBd0IsbUJBQUE7RUFDVCx3Q0FBQTtFQUNyQixjQUFBO0VBek5QLDBCQUFBO0FDbUtBO0FEd0RrQjtFQUF1QixtQkFBQTtFQUNiLHdDQUFBO0VBS3pCLFlBQUE7RUFqT0gsMEJBQUE7QUN5S0E7QUR5RDZCO0VBQ3ZCLFFBQUE7QUN2RE47QUR1RG1CO0VBekhFLGFBQUE7RUFHWixzQkFBQTtFQXVIQSxlQUFBO0VBQW1CLE1BQUE7RUFDbkIsU0FBQTtFQUNULE9BQUE7RUFFTSxRQUFBO0FDbkROO0FEbURtQjtFQUNQLGtCQUFBO0VBQ0wsbUJBQUE7RUExT1AsMEJBQUE7QUMwTEE7QURpRE87RUFBZ0IsWUFBQTtFQUNaLGVBQUE7RUFHUixlQUFBO0VBL09ILDBCQUFBO0FDZ01BO0FEbURHO0VBQ0UsZUFBQTtFQUNELGlCQUFBO0VBQ0MsaUJBQUE7QUNqREw7QURtRFU7RUFJRCxvQ0FBQTtBQ3BEVDtBRHFEb0M7RUFDZCxpQ0FBQTtBQ25EdEI7QUR1RFU7RUFFQyxvQ0FBQTtBQ3REWDtBRHdEWTtFQUlYLGlDQUFBO0FDekREO0FEMERtQjtFQUNNLGNBQUE7QUN4RHpCO0FEMkRTO0VBQ0QsY0FBQTtBQ3pEUjtBQ25RQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRHFRRjtBQ2xRQTtFQUNFLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QURvUUY7QUNoUUU7RUFDRSxlQUFBO0FEa1FKO0FDL1BBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FEaVFGO0FDL1BBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBRGlRRjtBQy9QQTtFRitCTyxhQUFBO0VFN0JMLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBRGlRRjtBQ2hRRTtFRmtHbUIsYUFBQTtFQUdaLHNCQUFBO0VBckVILGVBQUE7QUNxT047QUNsUUk7RUFDRSxtQkFBQTtBRG9RTjtBQ2xRSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FEb1FOO0FDblFNO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QURxUVI7QUNuUU07RUFDRSxZQUFBO0FEcVFSO0FDalFFO0VGNEVzQixrQ0FBQTtFQUl0QixhQUFBO0VBQWlCLGlCQUFBO0VFOUVmLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QURxUUo7QUNwUUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QURzUU47QUNwUUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QURzUU47QUNwUUk7RUFDRSxtQkFBQTtBRHNRTjtBQ2pRQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QURtUUY7QUNoUUE7RUZEUSxjQUFBO0VFR04saUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBRGtRRjtBQzdQSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRCtQTjtBRTlYQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FGZ1lGO0FFM1hJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGNlhOIiwiZmlsZSI6InNpZ24taW4tZm9ybS9zaWduLWluLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAc21hbGxlc3Qtc3BhY2U6IDVweDtcclxuQHNtYWxsLXNwYWNlOiAxMHB4O1xyXG5Ac3BhY2U6IDIwcHg7XHJcbkB3aGl0ZS10ZXh0LWNvbG9yOiB3aGl0ZTtcclxuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XHJcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcclxuQGxpZ2h0LWJyb3duLWNvbG9yOiAjOWY2OTY5O1xyXG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcclxuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XHJcbkBlcnJvci10ZXh0LWNvbG9yOiAjMWUwNDU2O1xyXG5AYm9yZGVyLXJhZGl1czogNXB4O1xyXG5AZm9ybS13aWR0aDogMjQwcHg7XHJcbkBzbWFsbC1pY29uLXdpZHRoOiAxLjNlbTtcclxuQHNtYWxsZXN0LWljb24td2lkdGg6IDAuN2VtO1xyXG5cclxuQGJhY2tncm91bmQtZGFyay10aGVtZTogIzJiMmUzMDtcclxuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XHJcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xyXG5AdGV4dC1kYXJrLWNvbG9yOiB3aGl0ZTtcclxuXHJcbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuQHdpbmRvdy1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICM0YTRhNGE7XHJcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XHJcblxyXG5AZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xyXG5cclxuLml0YWxpYyB7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uaC1jZW50ZXItYWxpZ24ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmZ1bGxzY3JlZW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5jZW50ZXJlZC10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5qdXN0aWZ5LXRleHQge1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5zbW9vdGgtYW5pbWF0aW9uIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcclxufVxyXG5cclxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5mb250LXNldCB7XHJcbiAgZm9udC1mYW1pbHk6IEBmb250LWZhbWlseTtcclxufVxyXG5cclxuLmJvbGQtdGV4dCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICBjb2xvcjogIzY0NTViMjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mbGV4LWdyb3cge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmZpeGVkLWJvdHRvbSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmctYm90dG9tOiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICBwYWRkaW5nOiBAc3BhY2U7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiBAc3BhY2UgMDtcclxufVxyXG5cclxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IEBzbWFsbC1zcGFjZSAwO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcclxuICBwYWRkaW5nOiAwIEBzcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XHJcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgQHNwYWNlIDAgMDtcclxufVxyXG5cclxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnNtYWxsLXRvcC1tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgQHNwYWNlO1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xyXG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcclxuICBtYXJnaW46IDAgMCAwIEBzcGFjZTtcclxufVxyXG5cclxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcclxuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcclxufVxyXG5cclxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XHJcbn1cclxuXHJcbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcclxuICBtYXJnaW46IGF1dG8gMCBhdXRvIEBzbWFsbC1zcGFjZTtcclxufVxyXG5cclxuLmJvdHRvbS1tYXJnaW4ge1xyXG4gIG1hcmdpbi1ib3R0b206IEBzcGFjZTtcclxufVxyXG5cclxuLnZlcnRpY2FsLW1hcmdpbiB7XHJcbiAgbWFyZ2luOiBAc3BhY2UgMDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuXHJcbi5jZW50ZXItYWxpZ25lZCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ucmlnaHQtYWxpZ25lZCB7XHJcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xyXG59XHJcblxyXG4ubGVmdC1hbGlnbmVkIHtcclxuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XHJcbn1cclxuXHJcbi5jb2x1bW4tZGlzcGxheSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ucm93LWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4uc21hbGxlc3QtaWNvbiB7XHJcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xyXG4gIGhlaWdodDogQHNtYWxsZXN0LWljb24td2lkdGg7XHJcbn1cclxuXHJcbi5zbWFsbC1pY29uIHtcclxuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XHJcbn1cclxuXHJcbi5zaWduLWluIHtcclxuICAuYnV0dG9uO1xyXG4gIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcclxuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XHJcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbn1cclxuXHJcbi5zaWduLXVwIHtcclxuICAuYnV0dG9uO1xyXG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xyXG4gIGJvcmRlci1jb2xvcjogQGdyZXktY29sb3I7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG59XHJcblxyXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxufVxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgcGFkZGluZzogMC41ZW07XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4udGhlbWUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMi43ZW07XHJcbiAgaGVpZ2h0OiAyLjdlbTtcclxuICBsZWZ0OiAwLjdlbTtcclxuICB0b3A6IDAuN2VtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB6LWluZGV4OiAxO1xyXG4gICYtaWNvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmxpZ2h0LXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcclxuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbiAgJi1idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDUlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xyXG4gICAgLnNtb290aC1hbmltYXRpb247XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5kYXJrLXRoZW1lIHtcclxuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xyXG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG4gICYtYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XHJcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndpbmRvdy1saWdodC10aGVtZSB7XHJcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4ud2luZG93LWRhcmstdGhlbWUge1xyXG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XHJcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XHJcbiAgLnNtb290aC1hbmltYXRpb247XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwO1xyXG59XHJcblxyXG4ubG9hZC1wb3B1cCB7XHJcbiAgLmNvbHVtbi1kaXNwbGF5O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5sb2FkLWljb24ge1xyXG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAuc21vb3RoLWFuaW1hdGlvbjtcclxufVxyXG5cclxuLmxvYWQtaW1hZ2Uge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtaW4td2lkdGg6IDMwcHg7XHJcbiAgbWF4LXdpZHRoOiA4NXB4O1xyXG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xyXG59XHJcblxyXG4ubG9hZC1waHJhc2Uge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xyXG59XHJcblxyXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcclxufVxyXG5cclxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xyXG4gIGJhY2tncm91bmQ6ICByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XHJcbn1cclxuXHJcbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcclxufVxyXG5cclxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XHJcbn1cclxuXHJcbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcclxuICBjb2xvcjogIzFlMDQ1NjtcclxufVxyXG5cclxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XHJcbiAgY29sb3I6ICNjYWQ2ZmY7XHJcbn1cclxuIiwiLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uZnVsbHNjcmVlbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cbi5zbW9vdGgtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG59XG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubGluayB7XG4gIGNvbG9yOiAjNjQ1NWIyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbi5ib3R0b20tc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG4udmVydGljYWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLmhvcml6b250YWwtcmlnaHQtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDA7XG59XG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uc21hbGwtdG9wLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuLmhvcml6b250YWwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMTBweCBhdXRvIDA7XG59XG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbGVmdC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIDEwcHg7XG59XG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4udmVydGljYWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG4ubGVmdC1hbGlnbmVkIHtcbiAgbWFyZ2luOiAwIGF1dG8gYXV0byAwO1xufVxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IDAuN2VtO1xuICBoZWlnaHQ6IDAuN2VtO1xufVxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogMS4zZW07XG59XG4uc2lnbi1pbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwYTEwMDtcbiAgYm9yZGVyLWNvbG9yOiAjMDBhMTAwO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zaWduLXVwIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2Q3ZDdkNztcbiAgYm9yZGVyLWNvbG9yOiAjZDdkN2Q3O1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJzb2x1dGUtaW4tdG9wLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xufVxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi50aGVtZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBsZWZ0OiAwLjdlbTtcbiAgdG9wOiAwLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG59XG4udGhlbWUtaWNvbiB7XG4gIGxpbmUtaGVpZ2h0OiAwLjdlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi5saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNlOGU4ZTg7XG4gIGNvbG9yOiAjMWExYTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjMWYyMTIzO1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gIzFmMjEyMztcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzEzMTQxNTtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjMDAwMDAwO1xufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjMmIyZTMwO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICNjZmNmY2Y7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmRhcmstdGhlbWUtYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDFlbSAjZThlOGU4O1xufVxuLndpbmRvdy1saWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiAjMWExYTFhO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICM0YTRhNGE7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG4ubG9hZC1wb3B1cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtcGhyYXNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG4ucG9wdXAtdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OSwgMjQ5LCAyNDksIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLmxvYWQtcGhyYXNlLXRleHQtZGFyayB7XG4gIGNvbG9yOiAjY2FkNmZmO1xufVxuLnJlbW92ZS1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNldC1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG4ucG9pbnRlcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yaWdodC1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgei1pbmRleDogMDtcbn1cbi5yaWdodC1pY29uLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5mb3JtIHtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMjQwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmZvcm0tZmllbGQtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uZm9ybS1maWVsZC1pbnB1dCB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG4uZm9ybS1maWVsZC1pbnB1dC1wYXNzd29yZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybS1maWVsZC1pbnB1dC1sb2dpbi1sb2FkaW5nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmZvcm0tc3VibWl0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDYwcHg7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBoZWlnaHQ6IDIuM2VtO1xuICBiYWNrZ3JvdW5kOiAjNTk2YjlmO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5mb3JtLXN1Ym1pdDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzNkNTA4ODtcbn1cbi5mb3JtLXN1Ym1pdDpkaXNhYmxlZCB7XG4gIGN1cnNvcjogYXV0bztcbiAgYmFja2dyb3VuZDogI2E4YWNiNjtcbn1cbi5mb3JtLXN1Ym1pdDphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjOGQ5MTllO1xufVxuLmlucHV0LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xuICBib3JkZXItY29sb3I6ICNlZmVmZWY7XG59XG4uZXJyb3Ige1xuICBtYXJnaW46IDAgMTBweDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogI2Q2ZGZlZjtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubWVzc2FnZS1zaWduOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKaoFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWUwNDU2O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uYXV0aC1lcnJvciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWluLXdpZHRoOiAyNDBweDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjYjU4NDg0O1xuICBiYWNrZ3JvdW5kOiAjYmY5NDk0O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWVzc2FnZS1zaWduOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKaoFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGlucHV0LXdpZHRoOiAxNzBweDtcbkBzbWFsbC1pbnB1dC13aWR0aDogMTAwcHg7XG5AZm9udC1zaXplOiAxNnB4O1xuLnJlbW92ZS1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2V0LWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnBvaW50ZXIge1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5yaWdodC1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xuICB6LWluZGV4OiAwO1xufVxuLnJpZ2h0LWljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cbi5mb3JtIHtcbiAgLnBhZGRpbmc7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiBAZm9ybS13aWR0aDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICYtZmllbGQge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAudmVydGljYWwtc21hbGwtcGFkZGluZztcbiAgICAmLXRleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgICAmLWlucHV0IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICAgIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgICAgICYtcGFzc3dvcmQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgICAmLWxvZ2luLWxvYWRpbmcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYtc3VibWl0IHtcbiAgICAuYnV0dG9uO1xuICAgIG1hcmdpbi1sZWZ0OiAzICogQHNwYWNlO1xuICAgIG1hcmdpbi1yaWdodDogMyAqIEBzcGFjZTtcbiAgICBtYXJnaW4tdG9wOiBAc3BhY2U7XG4gICAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICAgIGhlaWdodDogMi4zZW07XG4gICAgYmFja2dyb3VuZDogQGJsdWUtY29sb3I7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHNhdHVyYXRlKGRhcmtlbihAYmx1ZS1jb2xvciwgMTAlKSwgMTAlKTtcbiAgICB9XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kOiBkZXNhdHVyYXRlKGxpZ2h0ZW4oQGJsdWUtY29sb3IsIDIwJSksIDIwJSk7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUobGlnaHRlbihAYmx1ZS1jb2xvciwgMTAlKSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cblxuLmlucHV0LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG59XG5cbi5lcnJvciB7XG4gIC5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbjtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6IEBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yO1xuICBjb2xvcjogQGVycm9yLXRleHQtY29sb3I7XG59XG5cbi5tZXNzYWdlIHtcbiAgJi1zaWduIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLimqBcIjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBAZXJyb3ItdGV4dC1jb2xvcjtcbiAgICAgIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgfVxufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGltcG9ydCBcIi4uL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3NcIjtcbkBhdXRoLWVycm9yLWJhY2tncm91bmQ6ICNiZjk0OTQ7XG5cbi5hdXRoLWVycm9yIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgQHNwYWNlO1xuICBtaW4td2lkdGg6IEBmb3JtLXdpZHRoO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKEBhdXRoLWVycm9yLWJhY2tncm91bmQsIDUlKTtcbiAgYmFja2dyb3VuZDogQGF1dGgtZXJyb3ItYmFja2dyb3VuZDtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yXG59XG5cbi5tZXNzYWdlIHtcbiAgJi1zaWduIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLimqBcIjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgICAgIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgfVxufVxuXG4iXX0= */");

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
/* harmony import */ var _model_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/messages */ "./src/app/model/messages.ts");
/* harmony import */ var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cookies-service/cookies.service */ "./src/app/services/cookies-service/cookies.service.ts");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/services/theme-store.service/theme-store.service */ "./src/app/store/services/theme-store.service/theme-store.service.ts");
/* harmony import */ var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/services/user-store.service/user-store.service */ "./src/app/store/services/user-store.service/user-store.service.ts");
/* harmony import */ var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/services/waiting-store.service/waiting-store.service */ "./src/app/store/services/waiting-store.service/waiting-store.service.ts");










let SignInFormComponent = class SignInFormComponent {
    constructor(userService, userStore, themeStore, waitingStore, cookieService, cdr, router) {
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
            passwordDoesntMatch: false,
        };
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
    resetErrorSigns() {
        this.authErrors = {
            getError: false,
            loginDoesntExist: false,
            passwordDoesntMatch: false,
        };
        this.cdr.markForCheck();
    }
    submitForm() {
        if (this.loginForm.invalid) {
            return;
        }
        this.loginForm.get("submitButton").disable();
        this.loginForm.markAsUntouched();
        this.resetErrorSigns();
        const login = this.loginForm.get("login").value;
        const password = this.loginForm.get("password").value;
        this.waitingStore.activateLoading();
        this.userService.loginUser(login, password).subscribe(data => {
            this.userStore.loginUser(data);
            this.cookieService.saveLogin(data.login);
            this.cookieService.savePassword(data.password);
            this.waitingStore.deactivateLoading();
            this.router.navigate(["", "profile"]).then();
        }, (error) => {
            this.authErrors.getError = true;
            if (error.status === 404) {
                this.authErrors.loginDoesntExist = true;
                this.authErrors.passwordDoesntMatch = false;
            }
            if (error.status === 502) {
                this.authErrors.loginDoesntExist = false;
                this.authErrors.passwordDoesntMatch = true;
            }
            this.waitingStore.deactivateLoading();
            this.cdr.markForCheck();
        });
    }
    ngDoCheck() {
        if (this.loginForm.untouched) {
            this.loginForm.get("submitButton").disable();
            return;
        }
        this.loginForm.valid
            ? this.loginForm.get("submitButton").enable()
            : this.loginForm.get("submitButton").disable();
    }
    ngOnInit() {
        this.themeStore.loadThemeInfo().subscribe(mode => {
            this.darkThemeEnable = mode;
            this.cdr.markForCheck();
        });
    }
};
SignInFormComponent.ctorParameters = () => [
    { type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_8__["UserStoreService"] },
    { type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_7__["ThemeStoreService"] },
    { type: _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_9__["WaitingStoreService"] },
    { type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_5__["CookiesService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignInFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sign-in-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-in-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-in-form/sign-in-form.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
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
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n.remove-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  border-left: none;\n}\n.set-left-border {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n}\n.pointer:hover {\n  cursor: pointer;\n}\n.right-icon {\n  outline: none;\n  border-radius: 5px;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  background: #ffffff;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n  z-index: 0;\n}\n.right-icon-container {\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 1;\n  padding: 0 10px;\n  background: #ffffff;\n  width: 1.3em;\n}\n.form {\n  padding: 20px;\n  font-family: \"Georgia\", sans-serif;\n  position: relative;\n  min-width: 240px;\n  width: 25%;\n  border-radius: 5px;\n}\n.form-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10px 0;\n}\n.form-field-text {\n  margin-bottom: 10px;\n}\n.form-field-input {\n  outline: none;\n  border-radius: 5px;\n  background: #ffffff;\n  border-color: #cecaca;\n  border-width: 1px;\n  border-style: solid;\n  height: 2em;\n  font-size: 16px;\n  text-align: center;\n  padding-left: 10px;\n}\n.form-field-input-password {\n  text-align: center;\n  border-radius: 5px;\n  border: none;\n  height: 2em;\n  font-size: 16px;\n  outline: none;\n}\n.form-field-input-login-loading {\n  height: 100%;\n}\n.form-submit {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  margin-left: 60px;\n  margin-right: 60px;\n  margin-top: 20px;\n  font-size: 16px;\n  height: 2.3em;\n  background: #596b9f;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  transition: all 500ms ease;\n}\n.form-submit:hover {\n  cursor: pointer;\n  background: #3d5088;\n}\n.form-submit:disabled {\n  cursor: auto;\n  background: #a8acb6;\n}\n.form-submit:active {\n  background: #8d919e;\n}\n.input-dark-theme {\n  background: #efefef;\n  border-color: #efefef;\n}\n.error {\n  margin: 0 10px;\n  padding: 5px 10px;\n  border-radius: 5px;\n  background: #d6dfef;\n  color: #1e0456;\n}\n.message-sign::before {\n  content: \"⚠\";\n  text-align: center;\n  color: #1e0456;\n  margin-right: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ24tdXAtZm9ybS9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiLCJzaWduLXVwLWZvcm0vTjovd29ya3NwYWNlcy9pZGVhLXdvcmtzcGFjZS9waW5nLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL3NpZ24tdXAtZm9ybS9zaWduLXVwLWZvcm0uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBO0VBQ0Usa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLDBCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsMEJBQUE7QUMvQkY7QURrQ0E7RUFDRSxrQ0FBQTtBQ2hDRjtBRG1DQTtFQUNFLGlCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDbENGO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxvQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxlQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0FDMUNGO0FENkNBO0VBQ0UsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsZ0JBQUE7QUM3Q0Y7QURnREE7RUFDRSxjQUFBO0FDOUNGO0FEaURBO0VBQ0UsY0FB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QUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRCtQTiIsImZpbGUiOiJzaWduLXVwLWZvcm0vc2lnbi11cC1mb3JtLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNtYWxsZXN0LXNwYWNlOiA1cHg7XG5Ac21hbGwtc3BhY2U6IDEwcHg7XG5Ac3BhY2U6IDIwcHg7XG5Ad2hpdGUtdGV4dC1jb2xvcjogd2hpdGU7XG5AZ3JleS1jb2xvcjogI2Q3ZDdkNztcbkBncmVlbi1jb2xvcjogIzAwYTEwMDtcbkBsaWdodC1icm93bi1jb2xvcjogIzlmNjk2OTtcbkBibHVlLWNvbG9yOiAjNTk2YjlmO1xuQGVycm9yLWJhY2tncm91bmQtY29sb3I6ICNkNmRmZWY7XG5AZXJyb3ItdGV4dC1jb2xvcjogIzFlMDQ1NjtcbkBib3JkZXItcmFkaXVzOiA1cHg7XG5AZm9ybS13aWR0aDogMjQwcHg7XG5Ac21hbGwtaWNvbi13aWR0aDogMS4zZW07XG5Ac21hbGxlc3QtaWNvbi13aWR0aDogMC43ZW07XG5cbkBiYWNrZ3JvdW5kLWRhcmstdGhlbWU6ICMyYjJlMzA7XG5AYmFja2dyb3VuZC1saWdodC10aGVtZTogI2U4ZThlODtcbkB0ZXh0LWxpZ2h0LWNvbG9yOiBsaWdodGVuKGJsYWNrLCAxMCUpO1xuQHRleHQtZGFyay1jb2xvcjogd2hpdGU7XG5cbkB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogI2ZmZmZmZjtcbkB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kOiAjNGE0YTRhO1xuQGlucHV0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogI2VmZWZlZjtcblxuQGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcblxuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmNlbnRlcmVkLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuXG4uc21vb3RoLWZhc3QtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2U7XG59XG5cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG59XG5cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmxleC1ncm93IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiBAc21hbGwtc3BhY2UgMDtcbn1cblxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZSAwIDA7XG59XG5cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCBAc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byBAc21hbGwtc3BhY2UgYXV0byAwO1xufVxuXG4uc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luLXJpZ2h0OiBAc21hbGwtc3BhY2U7XG59XG5cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBAc21hbGwtc3BhY2U7XG59XG5cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogQHNwYWNlO1xufVxuXG4udmVydGljYWwtbWFyZ2luIHtcbiAgbWFyZ2luOiBAc3BhY2UgMDtcbn1cblxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cblxuLmNlbnRlci1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cblxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cblxuLmNvbHVtbi1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IEBzbWFsbGVzdC1zcGFjZSBAc21hbGwtc3BhY2U7XG59XG5cbi5zbWFsbGVzdC1pY29uIHtcbiAgd2lkdGg6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xuICBoZWlnaHQ6IEBzbWFsbGVzdC1pY29uLXdpZHRoO1xufVxuXG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cblxuLnNpZ24taW4ge1xuICAuYnV0dG9uO1xuICBjb2xvcjogQHdoaXRlLXRleHQtY29sb3I7XG4gIGJhY2tncm91bmQ6IEBncmVlbi1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2lnbi11cCB7XG4gIC5idXR0b247XG4gIGJhY2tncm91bmQ6IEBncmV5LWNvbG9yO1xuICBib3JkZXItY29sb3I6IEBncmV5LWNvbG9yO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMC41ZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgJi1pY29uIHtcbiAgICBsaW5lLWhlaWdodDogMC43ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1saWdodC10aGVtZTtcbiAgY29sb3I6IEB0ZXh0LWxpZ2h0LWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCA1JSk7XG4gICAgLnNtb290aC1hbmltYXRpb247XG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDIwJSk7XG4gICAgfVxuICB9XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEBiYWNrZ3JvdW5kLWRhcmstdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1kYXJrLWNvbG9yO1xuICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgJi1idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDUlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gZGFya2VuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCAxMCUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbGlnaHRlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxZW0gQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gICAgfVxuICB9XG59XG5cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi53aW5kb3ctZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6IEB3aW5kb3ctZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cblxuLmxvYWQtcG9wdXAge1xuICAuY29sdW1uLWRpc3BsYXk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogQHNwYWNlIEBzcGFjZSArIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgLnNtb290aC1hbmltYXRpb247XG59XG5cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiBAc21hbGwtc3BhY2U7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cblxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiAgcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuXG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCA2MywgNjMsIDAuNyk7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG5cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbiIsIi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uaC1jZW50ZXItYWxpZ24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLmZ1bGxzY3JlZW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmp1c3RpZnktdGV4dCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uc21vb3RoLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuLmZvbnQtc2V0IHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xufVxuLmJvbGQtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmxpbmsge1xuICBjb2xvcjogIzY0NTViMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5maXhlZC1ib3R0b20ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uYm90dG9tLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuLnZlcnRpY2FsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uaG9yaXpvbnRhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLXJpZ2h0LXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDIwcHggMCAwO1xufVxuLmhvcml6b250YWwtYXV0by1tYXJnaW4ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuLnNtYWxsLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmhvcml6b250YWwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgMTBweDtcbn1cbi5ob3Jpem9udGFsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtcmlnaHQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDEwcHggYXV0byAwO1xufVxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLWxlZnQtbWFyZ2luIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byAxMHB4O1xufVxuLmJvdHRvbS1tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuLnZlcnRpY2FsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5yaWdodC1hbGlnbmVkIHtcbiAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvO1xufVxuLmxlZnQtYWxpZ25lZCB7XG4gIG1hcmdpbjogMCBhdXRvIGF1dG8gMDtcbn1cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93LWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG59XG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiAwLjdlbTtcbiAgaGVpZ2h0OiAwLjdlbTtcbn1cbi5zbWFsbC1pY29uIHtcbiAgd2lkdGg6IDEuM2VtO1xufVxuLnNpZ24taW4ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMGExMDA7XG4gIGJvcmRlci1jb2xvcjogIzAwYTEwMDtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG59XG4uc2lnbi11cCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNkN2Q3ZDc7XG4gIGJvcmRlci1jb2xvcjogI2Q3ZDdkNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuLnJlbGF0aXZlLXBvc2l0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFic29sdXRlLWluLXRvcC1yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4udGhlbWUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAyLjdlbTtcbiAgaGVpZ2h0OiAyLjdlbTtcbiAgbGVmdDogMC43ZW07XG4gIHRvcDogMC43ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xuICB6LWluZGV4OiAxO1xufVxuLnRoZW1lLWljb24ge1xuICBsaW5lLWhlaWdodDogMC43ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG4ubGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubGlnaHQtdGhlbWUtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzFmMjEyMztcbiAgYm94LXNoYWRvdzogMCAwIDAuNWVtICMxZjIxMjM7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMxMzE0MTU7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gIzAwMDAwMDtcbn1cbi5kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzJiMmUzMDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjY2ZjZmNmO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5kYXJrLXRoZW1lLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAxZW0gI2U4ZThlODtcbn1cbi53aW5kb3ctbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogIzFhMWExYTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiAjNGE0YTRhO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAwO1xufVxuLmxvYWQtcG9wdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cbi5sb2FkLWljb24ge1xuICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxvYWQtaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi13aWR0aDogMzBweDtcbiAgbWF4LXdpZHRoOiA4NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLXBocmFzZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyMTMsIDIxMywgMjEzLCAwLjcpO1xufVxuLnBvcHVwLXRyYW5zcGFyZW50LWRhcmsge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDkxLCA5MSwgOTEsIDAuNyk7XG59XG4ubG9hZC1pY29uLXRyYW5zcGFyZW50LWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI0OSwgMjQ5LCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuLmxvYWQtcGhyYXNlLXRleHQtbGlnaHQge1xuICBjb2xvcjogIzFlMDQ1Njtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWRhcmsge1xuICBjb2xvcjogI2NhZDZmZjtcbn1cbi5yZW1vdmUtbGVmdC1ib3JkZXIge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cbi5zZXQtbGVmdC1ib3JkZXIge1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICBib3JkZXItY29sb3I6ICNjZWNhY2E7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuLnBvaW50ZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmlnaHQtaWNvbiB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWNvbG9yOiAjY2VjYWNhO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAyZW07XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHotaW5kZXg6IDA7XG59XG4ucmlnaHQtaWNvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB3aWR0aDogMS4zZW07XG59XG4uZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDI0MHB4O1xuICB3aWR0aDogMjUlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5mb3JtLWZpZWxkLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLmZvcm0tZmllbGQtaW5wdXQge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2NlY2FjYTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmZvcm0tZmllbGQtaW5wdXQtcGFzc3dvcmQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0tZmllbGQtaW5wdXQtbG9naW4tbG9hZGluZyB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mb3JtLXN1Ym1pdCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA2MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgaGVpZ2h0OiAyLjNlbTtcbiAgYmFja2dyb3VuZDogIzU5NmI5ZjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZm9ybS1zdWJtaXQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzZDUwODg7XG59XG4uZm9ybS1zdWJtaXQ6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGF1dG87XG4gIGJhY2tncm91bmQ6ICNhOGFjYjY7XG59XG4uZm9ybS1zdWJtaXQ6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogIzhkOTE5ZTtcbn1cbi5pbnB1dC1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbiAgYm9yZGVyLWNvbG9yOiAjZWZlZmVmO1xufVxuLmVycm9yIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkNmRmZWY7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuLm1lc3NhZ2Utc2lnbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLimqBcIjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzFlMDQ1NjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uL2FwcC5jb21wb25lbnQubGVzc1wiO1xuQGlucHV0LXdpZHRoOiAxNzBweDtcbkBzbWFsbC1pbnB1dC13aWR0aDogMTAwcHg7XG5AZm9udC1zaXplOiAxNnB4O1xuLnJlbW92ZS1sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItY29sb3I6IHNhdHVyYXRlKGRhcmtlbihAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQsIDIwJSksIDMlKTtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuXG4uc2V0LWxlZnQtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnBvaW50ZXIge1xuICAmOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbn1cbi5yaWdodC1pY29uIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBoZWlnaHQ6IDJlbTtcbiAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogQHNtYWxsLXNwYWNlO1xuICB6LWluZGV4OiAwO1xufVxuLnJpZ2h0LWljb24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ7XG4gIHdpZHRoOiBAc21hbGwtaWNvbi13aWR0aDtcbn1cbi5mb3JtIHtcbiAgLnBhZGRpbmc7XG4gIGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiBAZm9ybS13aWR0aDtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gICYtZmllbGQge1xuICAgIC5jb2x1bW4tZGlzcGxheTtcbiAgICAudmVydGljYWwtc21hbGwtcGFkZGluZztcbiAgICAmLXRleHQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgICAmLWlucHV0IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiBAYm9yZGVyLXJhZGl1cztcbiAgICAgIGJhY2tncm91bmQ6IEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZDtcbiAgICAgIGJvcmRlci1jb2xvcjogc2F0dXJhdGUoZGFya2VuKEB3aW5kb3ctbGlnaHQtdGhlbWUtYmFja2dyb3VuZCwgMjAlKSwgMyUpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IEBzbWFsbC1zcGFjZTtcbiAgICAgICYtcGFzc3dvcmQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICBmb250LXNpemU6IEBmb250LXNpemU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG4gICAgICAmLWxvZ2luLWxvYWRpbmcge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gICYtc3VibWl0IHtcbiAgICAuYnV0dG9uO1xuICAgIG1hcmdpbi1sZWZ0OiAzICogQHNwYWNlO1xuICAgIG1hcmdpbi1yaWdodDogMyAqIEBzcGFjZTtcbiAgICBtYXJnaW4tdG9wOiBAc3BhY2U7XG4gICAgZm9udC1zaXplOiBAZm9udC1zaXplO1xuICAgIGhlaWdodDogMi4zZW07XG4gICAgYmFja2dyb3VuZDogQGJsdWUtY29sb3I7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzO1xuICAgIGNvbG9yOiBAd2hpdGUtdGV4dC1jb2xvcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQ6IHNhdHVyYXRlKGRhcmtlbihAYmx1ZS1jb2xvciwgMTAlKSwgMTAlKTtcbiAgICB9XG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IGF1dG87XG4gICAgICBiYWNrZ3JvdW5kOiBkZXNhdHVyYXRlKGxpZ2h0ZW4oQGJsdWUtY29sb3IsIDIwJSksIDIwJSk7XG4gICAgfVxuICAgICY6YWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUobGlnaHRlbihAYmx1ZS1jb2xvciwgMTAlKSwgMjAlKTtcbiAgICB9XG4gIH1cbn1cblxuLmlucHV0LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAaW5wdXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6IEBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ7XG59XG5cbi5lcnJvciB7XG4gIC5ob3Jpem9udGFsLXNtYWxsLW1hcmdpbjtcbiAgcGFkZGluZzogQHNtYWxsZXN0LXNwYWNlIEBzbWFsbC1zcGFjZTtcbiAgYm9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXM7XG4gIGJhY2tncm91bmQ6IEBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yO1xuICBjb2xvcjogQGVycm9yLXRleHQtY29sb3I7XG59XG5cbi5tZXNzYWdlIHtcbiAgJi1zaWduIHtcbiAgICAmOjpiZWZvcmUge1xuICAgICAgY29udGVudDogXCLimqBcIjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiBAZXJyb3ItdGV4dC1jb2xvcjtcbiAgICAgIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xuICAgIH1cbiAgfVxufVxuIl19 */");

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
/* harmony import */ var _custom_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../custom-validators/password-match.validator */ "./src/app/custom-validators/password-match.validator.ts");
/* harmony import */ var _model_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/messages */ "./src/app/model/messages.ts");
/* harmony import */ var _model_notification__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/notification */ "./src/app/model/notification.ts");
/* harmony import */ var _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/cookies-service/cookies.service */ "./src/app/services/cookies-service/cookies.service.ts");
/* harmony import */ var _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/user-service/user.service */ "./src/app/services/user-service/user.service.ts");
/* harmony import */ var _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/services/theme-store.service/theme-store.service */ "./src/app/store/services/theme-store.service/theme-store.service.ts");
/* harmony import */ var _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store/services/user-store.service/user-store.service */ "./src/app/store/services/user-store.service/user-store.service.ts");
/* harmony import */ var _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../store/services/waiting-store.service/waiting-store.service */ "./src/app/store/services/waiting-store.service/waiting-store.service.ts");












let SignUpFormComponent = class SignUpFormComponent {
    constructor(userService, cookieService, userStore, themeStore, waitingStore, cdr, router) {
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
            free: false,
        };
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\w*[A-Za-z]+[_]*\d*$/),
            ]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
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
        }, Object(_custom_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_4__["passwordMatch"])());
    }
    submitForm() {
        this.registerForm.get("submitButton").disable();
        this.registerForm.markAsUntouched();
        if (this.registerForm.invalid) {
            return;
        }
        const newUser = {
            _id: 0,
            status: "student",
            login: this.registerForm.get("login").value,
            username: this.registerForm.get("username").value,
            password: this.registerForm.get("password").value,
            education: {
                materials: [],
            },
            notifications: [_model_notification__WEBPACK_IMPORTED_MODULE_6__["welcomeNotification"]],
        };
        this.waitingStore.activateLoading();
        this.userService.registerNewUser(newUser).subscribe(data => {
            this.cookieService.saveLogin(data.login);
            this.cookieService.savePassword(data.password);
            this.userStore.loginUser(data);
            this.waitingStore.deactivateLoading();
            this.router.navigate(["", "profile"]).then();
        }, () => this.waitingStore.deactivateLoading());
    }
    controlStatus(control, name) {
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
    showLoading() {
        this.loginCheckStatus.pending = true;
        this.loginCheckStatus.exist = false;
        this.loginCheckStatus.free = false;
        this.cdr.markForCheck();
    }
    resetLoadSigns() {
        this.loginCheckStatus.pending = false;
        this.loginCheckStatus.exist = false;
        this.loginCheckStatus.free = false;
        this.cdr.markForCheck();
    }
    checkLogin() {
        if (this.registerForm.get("login").invalid) {
            return;
        }
        this.showLoading();
        this.userService.checkLogin(this.registerForm.get("login").value).subscribe(() => {
            {
                this.loginCheckStatus.pending = false;
                this.loginCheckStatus.exist = true;
                this.loginCheckStatus.free = false;
                this.cdr.markForCheck();
            }
        }, () => {
            this.loginCheckStatus.pending = false;
            this.loginCheckStatus.exist = false;
            this.loginCheckStatus.free = true;
            this.cdr.markForCheck();
        });
    }
    ngDoCheck() {
        if (this.registerForm.untouched) {
            this.registerForm.get("submitButton").disable();
            return;
        }
        this.registerForm.valid && this.loginCheckStatus.free
            ? this.registerForm.get("submitButton").enable()
            : this.registerForm.get("submitButton").disable();
    }
    ngOnInit() {
        this.themeStore.loadThemeInfo().subscribe(mode => {
            this.darkThemeEnable = mode;
            this.cdr.markForCheck();
        });
    }
};
SignUpFormComponent.ctorParameters = () => [
    { type: _services_user_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _services_cookies_service_cookies_service__WEBPACK_IMPORTED_MODULE_7__["CookiesService"] },
    { type: _store_services_user_store_service_user_store_service__WEBPACK_IMPORTED_MODULE_10__["UserStoreService"] },
    { type: _store_services_theme_store_service_theme_store_service__WEBPACK_IMPORTED_MODULE_9__["ThemeStoreService"] },
    { type: _store_services_waiting_store_service_waiting_store_service__WEBPACK_IMPORTED_MODULE_11__["WaitingStoreService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignUpFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-sign-up-form",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-up-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-up-form/sign-up-form.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-up-form.component.less */ "./src/app/components/sign-up-form/sign-up-form.component.less")).default]
    })
], SignUpFormComponent);

// "\f06e"


/***/ }),

/***/ "./src/app/components/test-creator/test-creator.component.less":
/*!*********************************************************************!*\
  !*** ./src/app/components/test-creator/test-creator.component.less ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".italic {\n  font-style: italic;\n}\n.h-center-align {\n  margin-left: auto;\n  margin-right: auto;\n}\n.fullscreen {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.centered-text {\n  text-align: center;\n}\n.justify-text {\n  text-align: justify;\n}\n.smooth-animation {\n  transition: all 500ms ease;\n}\n.smooth-fast-animation {\n  transition: all 100ms ease;\n}\n.font-set {\n  font-family: \"Georgia\", sans-serif;\n}\n.bold-text {\n  font-weight: bold;\n}\n.link {\n  color: #6455b2;\n  text-decoration: none;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n.fixed-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n.bottom-small-padding {\n  padding-bottom: 10px;\n}\n.padding {\n  padding: 20px;\n}\n.vertical-padding {\n  padding: 20px 0;\n}\n.vertical-small-padding {\n  padding: 10px 0;\n}\n.horizontal-padding {\n  padding: 0 20px;\n}\n.horizontal-small-padding {\n  padding: 0 10px;\n}\n.horizontal-right-padding {\n  padding: 0 20px 0 0;\n}\n.horizontal-auto-margin {\n  margin-left: auto;\n  margin-right: auto;\n}\n.small-top-margin {\n  margin-top: 10px;\n}\n.horizontal-margin {\n  margin: 0 20px;\n}\n.horizontal-small-margin {\n  margin: 0 10px;\n}\n.horizontal-left-margin {\n  margin: 0 0 0 20px;\n}\n.horizontal-small-right-margin {\n  margin: auto 10px auto 0;\n}\n.small-right-margin {\n  margin-right: 10px;\n}\n.horizontal-small-left-margin {\n  margin: auto 0 auto 10px;\n}\n.bottom-margin {\n  margin-bottom: 20px;\n}\n.vertical-margin {\n  margin: 20px 0;\n}\n.vertical-auto-margin {\n  margin-top: auto;\n  margin-bottom: auto;\n}\n.center-aligned {\n  margin: auto;\n}\n.right-aligned {\n  margin: auto 0 auto auto;\n}\n.left-aligned {\n  margin: 0 auto auto 0;\n}\n.column-display {\n  display: flex;\n  flex-direction: column;\n}\n.row-display {\n  display: flex;\n}\n.button {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n}\n.smallest-icon {\n  width: 0.7em;\n  height: 0.7em;\n}\n.small-icon {\n  width: 1.3em;\n}\n.sign-in {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  color: white;\n  background: #00a100;\n  border-color: #00a100;\n  border-left: none;\n}\n.sign-up {\n  font-family: \"Georgia\", sans-serif;\n  outline: none;\n  padding: 5px 10px;\n  background: #d7d7d7;\n  border-color: #d7d7d7;\n  border-right: none;\n}\n.relative-position {\n  position: relative;\n}\n.absolute-in-top-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.background {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding: 0.5em;\n  overflow-y: scroll;\n}\n.theme {\n  position: fixed;\n  width: 2.7em;\n  height: 2.7em;\n  left: 0.7em;\n  top: 0.7em;\n  border: 1px solid transparent;\n  border-radius: 100%;\n  outline: none;\n  z-index: 1;\n}\n.theme-icon {\n  line-height: 0.7em;\n  font-size: 1.2em;\n}\n.light-theme {\n  background: #e8e8e8;\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.light-theme-button {\n  background: #1f2123;\n  box-shadow: 0 0 0.5em #1f2123;\n  transition: all 500ms ease;\n}\n.light-theme-button:hover {\n  background: #131415;\n  box-shadow: 0 0 1em #000000;\n}\n.dark-theme {\n  background: #2b2e30;\n  color: white;\n  transition: all 500ms ease;\n}\n.dark-theme-button {\n  background: #f5f5f5;\n  box-shadow: 0 0 0.5em #cfcfcf;\n  transition: all 500ms ease;\n}\n.dark-theme-button:hover {\n  background: #ffffff;\n  box-shadow: 0 0 1em #e8e8e8;\n}\n.window-light-theme {\n  background: #ffffff;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n  color: #1a1a1a;\n  transition: all 500ms ease;\n}\n.window-dark-theme {\n  background: #4a4a4a;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.26);\n  color: white;\n  transition: all 500ms ease;\n}\n::-webkit-scrollbar {\n  width: 0;\n}\n.load-popup {\n  display: flex;\n  flex-direction: column;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.load-icon {\n  padding: 20px 30px;\n  border-radius: 30px;\n  transition: all 500ms ease;\n}\n.load-image {\n  margin: auto;\n  min-width: 30px;\n  max-width: 85px;\n  transition: all 500ms ease;\n}\n.load-phrase {\n  font-size: 18px;\n  font-weight: bold;\n  padding-top: 10px;\n}\n.popup-transparent-light {\n  background: rgba(213, 213, 213, 0.7);\n}\n.popup-transparent-dark {\n  background: rgba(91, 91, 91, 0.7);\n}\n.load-icon-transparent-light {\n  background: rgba(249, 249, 249, 0.7);\n}\n.load-icon-transparent-dark {\n  background: rgba(63, 63, 63, 0.7);\n}\n.load-phrase-text-light {\n  color: #1e0456;\n}\n.load-phrase-text-dark {\n  color: #cad6ff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtY3JlYXRvci9OOi93b3Jrc3BhY2VzL2lkZWEtd29ya3NwYWNlL3BpbmctdGVzdC9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInRlc3QtY3JlYXRvci90ZXN0LWNyZWF0b3IuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJBO0VBQ0Usa0JBQUE7QUN6QkY7QUQ0QkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDMUJGO0FENkJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDM0JGO0FEOEJBO0VBQ0Usa0JBQUE7QUM1QkY7QUQrQkE7RUFDRSxtQkFBQTtBQzdCRjtBRGdDQTtFQUNFLDBCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsMEJBQUE7QUMvQkY7QURrQ0E7RUFDRSxrQ0FBQTtBQ2hDRjtBRG1DQTtFQUNFLGlCQUFBO0FDakNGO0FEb0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDbENGO0FEcUNBO0VBQ0UsWUFBQTtBQ25DRjtBRHNDQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUNwQ0Y7QUR1Q0E7RUFDRSxvQkFBQTtBQ3JDRjtBRHdDQTtFQUNFLGFBQUE7QUN0Q0Y7QUR5Q0E7RUFDRSxlQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3hDRjtBRDJDQTtFQUNFLGVBQUE7QUN6Q0Y7QUQ0Q0E7RUFDRSxlQUFBO0FDMUNGO0FENkNBO0VBQ0UsbUJBQUE7QUMzQ0Y7QUQ4Q0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDNUNGO0FEK0NBO0VBQ0UsZ0JBQUE7QUM3Q0Y7QURnREE7RUFDRSxjQUFBO0FDOUNGO0FEaURBO0VBQ0UsY0FBQTtBQy9DRjtBRGtEQTtFQUNFLGtCQUFBO0FDaERGO0FEbURBO0VBQ0Usd0JBQUE7QUNqREY7QURvREE7RUFDRSxrQkFBQTtBQ2xERjtBRHFEQTtFQUNFLHdCQUFBO0FDbkRGO0FEc0RBO0VBQ0UsbUJBQUE7QUNwREY7QUR1REE7RUFDRSxjQUFBO0FDckRGO0FEd0RBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ3RERjtBRHlEQTtFQUNFLFlBQUE7QUN2REY7QUQwREE7RUFDRSx3QkFBQTtBQ3hERjtBRDJEQTtFQUNFLHFCQUFBO0FDekRGO0FENERBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDMURGO0FENkRBO0VBQ0UsYUFBQTtBQzNERjtBRDhEQTtFQUNFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDNURGO0FEK0RBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUM3REY7QURnRUE7RUFDRSxZQUFBO0FDOURGO0FEaUVBO0VBZEUsa0NBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFjQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDN0RGO0FEZ0VBO0VBdEJFLGtDQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBc0JBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQzVERjtBRCtEQTtFQUNFLGtCQUFBO0FDN0RGO0FEZ0VBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtBQzlERjtBRGlFQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDL0RGO0FEa0VBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNoRUY7QURpRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDL0RKO0FEbUVBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBbE1BLDBCQUFBO0FDa0lGO0FEa0VFO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQXRNRiwwQkFBQTtBQ3VJRjtBRGlFSTtFQUNFLG1CQUFBO0VBQ0EsMkJBQUE7QUMvRE47QURtRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFoTkEsMEJBQUE7QUNnSkY7QURrRUU7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBcE5GLDBCQUFBO0FDcUpGO0FEaUVJO0VBQ0UsbUJBQUE7RUFDQSwyQkFBQTtBQy9ETjtBRG9FQTtFQUNFLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBaE9BLDBCQUFBO0FDK0pGO0FEcUVBO0VBQ0UsbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7RUF2T0EsMEJBQUE7QUNxS0Y7QURzRUE7RUFDRSxRQUFBO0FDcEVGO0FEdUVBO0VBekhFLGFBQUE7RUFDQSxzQkFBQTtFQTBIQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ3BFRjtBRHVFQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUExUEEsMEJBQUE7QUNzTEY7QUR3RUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFqUUEsMEJBQUE7QUM0TEY7QUR5RUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ3ZFRjtBRDBFQTtFQUNFLG9DQUFBO0FDeEVGO0FEMkVBO0VBQ0UsaUNBQUE7QUN6RUY7QUQ0RUE7RUFDRSxvQ0FBQTtBQzFFRjtBRDZFQTtFQUNFLGlDQUFBO0FDM0VGO0FEOEVBO0VBQ0UsY0FBQTtBQzVFRjtBRCtFQTtFQUNFLGNBQUE7QUM3RUYiLCJmaWxlIjoidGVzdC1jcmVhdG9yL3Rlc3QtY3JlYXRvci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBzbWFsbGVzdC1zcGFjZTogNXB4O1xuQHNtYWxsLXNwYWNlOiAxMHB4O1xuQHNwYWNlOiAyMHB4O1xuQHdoaXRlLXRleHQtY29sb3I6IHdoaXRlO1xuQGdyZXktY29sb3I6ICNkN2Q3ZDc7XG5AZ3JlZW4tY29sb3I6ICMwMGExMDA7XG5AbGlnaHQtYnJvd24tY29sb3I6ICM5ZjY5Njk7XG5AYmx1ZS1jb2xvcjogIzU5NmI5ZjtcbkBlcnJvci1iYWNrZ3JvdW5kLWNvbG9yOiAjZDZkZmVmO1xuQGVycm9yLXRleHQtY29sb3I6ICMxZTA0NTY7XG5AYm9yZGVyLXJhZGl1czogNXB4O1xuQGZvcm0td2lkdGg6IDI0MHB4O1xuQHNtYWxsLWljb24td2lkdGg6IDEuM2VtO1xuQHNtYWxsZXN0LWljb24td2lkdGg6IDAuN2VtO1xuXG5AYmFja2dyb3VuZC1kYXJrLXRoZW1lOiAjMmIyZTMwO1xuQGJhY2tncm91bmQtbGlnaHQtdGhlbWU6ICNlOGU4ZTg7XG5AdGV4dC1saWdodC1jb2xvcjogbGlnaHRlbihibGFjaywgMTAlKTtcbkB0ZXh0LWRhcmstY29sb3I6IHdoaXRlO1xuXG5Ad2luZG93LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5Ad2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDogIzRhNGE0YTtcbkBpbnB1dC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6ICNlZmVmZWY7XG5cbkBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG5cbi5pdGFsaWMge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5oLWNlbnRlci1hbGlnbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jZW50ZXJlZC10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uanVzdGlmeS10ZXh0IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cblxuLnNtb290aC1mYXN0LWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlO1xufVxuXG4uZm9udC1zZXQge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xufVxuXG4uYm9sZC10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saW5rIHtcbiAgY29sb3I6ICM2NDU1YjI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZsZXgtZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cblxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IEBzbWFsbC1zcGFjZTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiBAc3BhY2U7XG59XG5cbi52ZXJ0aWNhbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogQHNtYWxsLXNwYWNlIDA7XG59XG5cbi5ob3Jpem9udGFsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIEBzcGFjZTtcbn1cblxuLmhvcml6b250YWwtc21hbGwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCBAc3BhY2UgMCAwO1xufVxuXG4uaG9yaXpvbnRhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1tYXJnaW4ge1xuICBtYXJnaW46IDAgQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgQHNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW46IGF1dG8gQHNtYWxsLXNwYWNlIGF1dG8gMDtcbn1cblxuLnNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbi1yaWdodDogQHNtYWxsLXNwYWNlO1xufVxuXG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gQHNtYWxsLXNwYWNlO1xufVxuXG4uYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IEBzcGFjZTtcbn1cblxuLnZlcnRpY2FsLW1hcmdpbiB7XG4gIG1hcmdpbjogQHNwYWNlIDA7XG59XG5cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG5cbi5jZW50ZXItYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnJpZ2h0LWFsaWduZWQge1xuICBtYXJnaW46IGF1dG8gMCBhdXRvIGF1dG87XG59XG5cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG5cbi5jb2x1bW4tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5yb3ctZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogQGZvbnQtZmFtaWx5O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiBAc21hbGxlc3Qtc3BhY2UgQHNtYWxsLXNwYWNlO1xufVxuXG4uc21hbGxlc3QtaWNvbiB7XG4gIHdpZHRoOiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbiAgaGVpZ2h0OiBAc21hbGxlc3QtaWNvbi13aWR0aDtcbn1cblxuLnNtYWxsLWljb24ge1xuICB3aWR0aDogQHNtYWxsLWljb24td2lkdGg7XG59XG5cbi5zaWduLWluIHtcbiAgLmJ1dHRvbjtcbiAgY29sb3I6IEB3aGl0ZS10ZXh0LWNvbG9yO1xuICBiYWNrZ3JvdW5kOiBAZ3JlZW4tY29sb3I7XG4gIGJvcmRlci1jb2xvcjogQGdyZWVuLWNvbG9yO1xuICBib3JkZXItbGVmdDogbm9uZTtcbn1cblxuLnNpZ24tdXAge1xuICAuYnV0dG9uO1xuICBiYWNrZ3JvdW5kOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLWNvbG9yOiBAZ3JleS1jb2xvcjtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ucmVsYXRpdmUtcG9zaXRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi50aGVtZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDIuN2VtO1xuICBoZWlnaHQ6IDIuN2VtO1xuICBsZWZ0OiAwLjdlbTtcbiAgdG9wOiAwLjdlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHotaW5kZXg6IDE7XG4gICYtaWNvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cblxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQGJhY2tncm91bmQtbGlnaHQtdGhlbWU7XG4gIGNvbG9yOiBAdGV4dC1saWdodC1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwLjVlbSBkYXJrZW4oQGJhY2tncm91bmQtZGFyay10aGVtZSwgNSUpO1xuICAgIC5zbW9vdGgtYW5pbWF0aW9uO1xuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKEBiYWNrZ3JvdW5kLWRhcmstdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIGRhcmtlbihAYmFja2dyb3VuZC1kYXJrLXRoZW1lLCAyMCUpO1xuICAgIH1cbiAgfVxufVxuLmRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAYmFja2dyb3VuZC1kYXJrLXRoZW1lO1xuICBjb2xvcjogQHRleHQtZGFyay1jb2xvcjtcbiAgLnNtb290aC1hbmltYXRpb247XG4gICYtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lLCA1JSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIGRhcmtlbihAYmFja2dyb3VuZC1saWdodC10aGVtZSwgMTAlKTtcbiAgICAuc21vb3RoLWFuaW1hdGlvbjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oQGJhY2tncm91bmQtbGlnaHQtdGhlbWUsIDEwJSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMWVtIEBiYWNrZ3JvdW5kLWxpZ2h0LXRoZW1lO1xuICAgIH1cbiAgfVxufVxuXG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogQHdpbmRvdy1saWdodC10aGVtZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBjb2xvcjogQHRleHQtbGlnaHQtY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ud2luZG93LWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kOiBAd2luZG93LWRhcmstdGhlbWUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IEB0ZXh0LWRhcmstY29sb3I7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDA7XG59XG5cbi5sb2FkLXBvcHVwIHtcbiAgLmNvbHVtbi1kaXNwbGF5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmxvYWQtaWNvbiB7XG4gIHBhZGRpbmc6IEBzcGFjZSBAc3BhY2UgKyBAc21hbGwtc3BhY2U7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1pbWFnZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWluLXdpZHRoOiAzMHB4O1xuICBtYXgtd2lkdGg6IDg1cHg7XG4gIC5zbW9vdGgtYW5pbWF0aW9uO1xufVxuXG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogQHNtYWxsLXNwYWNlO1xufVxuXG4ucG9wdXAtdHJhbnNwYXJlbnQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDIxMywgMjEzLCAyMTMsIDAuNyk7XG59XG5cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogIHJnYmEoOTEsIDkxLCA5MSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cblxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2MywgNjMsIDYzLCAwLjcpO1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1saWdodCB7XG4gIGNvbG9yOiAjMWUwNDU2O1xufVxuXG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4iLCIuaXRhbGljIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmgtY2VudGVyLWFsaWduIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5mdWxsc2NyZWVuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY2VudGVyZWQtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5qdXN0aWZ5LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLnNtb290aC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5zbW9vdGgtZmFzdC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZTtcbn1cbi5mb250LXNldCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdlb3JnaWFcIiwgc2Fucy1zZXJpZjtcbn1cbi5ib2xkLXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5saW5rIHtcbiAgY29sb3I6ICM2NDU1YjI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mbGV4LWdyb3cge1xuICBmbGV4LWdyb3c6IDE7XG59XG4uZml4ZWQtYm90dG9tIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmJvdHRvbS1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmVydGljYWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1zbWFsbC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuLmhvcml6b250YWwtcGFkZGluZyB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1yaWdodC1wYWRkaW5nIHtcbiAgcGFkZGluZzogMCAyMHB4IDAgMDtcbn1cbi5ob3Jpem9udGFsLWF1dG8tbWFyZ2luIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5zbWFsbC10b3AtbWFyZ2luIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ob3Jpem9udGFsLW1hcmdpbiB7XG4gIG1hcmdpbjogMCAyMHB4O1xufVxuLmhvcml6b250YWwtc21hbGwtbWFyZ2luIHtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uaG9yaXpvbnRhbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cbi5ob3Jpem9udGFsLXNtYWxsLXJpZ2h0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAxMHB4IGF1dG8gMDtcbn1cbi5zbWFsbC1yaWdodC1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uaG9yaXpvbnRhbC1zbWFsbC1sZWZ0LW1hcmdpbiB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gMTBweDtcbn1cbi5ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi52ZXJ0aWNhbC1tYXJnaW4ge1xuICBtYXJnaW46IDIwcHggMDtcbn1cbi52ZXJ0aWNhbC1hdXRvLW1hcmdpbiB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IGF1dG87XG59XG4uY2VudGVyLWFsaWduZWQge1xuICBtYXJnaW46IGF1dG87XG59XG4ucmlnaHQtYWxpZ25lZCB7XG4gIG1hcmdpbjogYXV0byAwIGF1dG8gYXV0bztcbn1cbi5sZWZ0LWFsaWduZWQge1xuICBtYXJnaW46IDAgYXV0byBhdXRvIDA7XG59XG4uY29sdW1uLWRpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnJvdy1kaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5idXR0b24ge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuLnNtYWxsZXN0LWljb24ge1xuICB3aWR0aDogMC43ZW07XG4gIGhlaWdodDogMC43ZW07XG59XG4uc21hbGwtaWNvbiB7XG4gIHdpZHRoOiAxLjNlbTtcbn1cbi5zaWduLWluIHtcbiAgZm9udC1mYW1pbHk6IFwiR2VvcmdpYVwiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDBhMTAwO1xuICBib3JkZXItY29sb3I6ICMwMGExMDA7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xufVxuLnNpZ24tdXAge1xuICBmb250LWZhbWlseTogXCJHZW9yZ2lhXCIsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZDdkN2Q3O1xuICBib3JkZXItY29sb3I6ICNkN2Q3ZDc7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cbi5yZWxhdGl2ZS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYnNvbHV0ZS1pbi10b3AtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLnRoZW1lIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMi43ZW07XG4gIGhlaWdodDogMi43ZW07XG4gIGxlZnQ6IDAuN2VtO1xuICB0b3A6IDAuN2VtO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgei1pbmRleDogMTtcbn1cbi50aGVtZS1pY29uIHtcbiAgbGluZS1oZWlnaHQ6IDAuN2VtO1xuICBmb250LXNpemU6IDEuMmVtO1xufVxuLmxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLmxpZ2h0LXRoZW1lLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMxZjIxMjM7XG4gIGJveC1zaGFkb3c6IDAgMCAwLjVlbSAjMWYyMTIzO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5saWdodC10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMTMxNDE1O1xuICBib3gtc2hhZG93OiAwIDAgMWVtICMwMDAwMDA7XG59XG4uZGFyay10aGVtZSB7XG4gIGJhY2tncm91bmQ6ICMyYjJlMzA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBib3gtc2hhZG93OiAwIDAgMC41ZW0gI2NmY2ZjZjtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4uZGFyay10aGVtZS1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMWVtICNlOGU4ZTg7XG59XG4ud2luZG93LWxpZ2h0LXRoZW1lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgY29sb3I6ICMxYTFhMWE7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlO1xufVxuLndpbmRvdy1kYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZDogIzRhNGE0YTtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMDtcbn1cbi5sb2FkLXBvcHVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG4ubG9hZC1pY29uIHtcbiAgcGFkZGluZzogMjBweCAzMHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZTtcbn1cbi5sb2FkLWltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIG1heC13aWR0aDogODVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2U7XG59XG4ubG9hZC1waHJhc2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjEzLCAyMTMsIDIxMywgMC43KTtcbn1cbi5wb3B1cC10cmFuc3BhcmVudC1kYXJrIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5MSwgOTEsIDkxLCAwLjcpO1xufVxuLmxvYWQtaWNvbi10cmFuc3BhcmVudC1saWdodCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNDksIDI0OSwgMC43KTtcbn1cbi5sb2FkLWljb24tdHJhbnNwYXJlbnQtZGFyayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjMsIDYzLCA2MywgMC43KTtcbn1cbi5sb2FkLXBocmFzZS10ZXh0LWxpZ2h0IHtcbiAgY29sb3I6ICMxZTA0NTY7XG59XG4ubG9hZC1waHJhc2UtdGV4dC1kYXJrIHtcbiAgY29sb3I6ICNjYWQ2ZmY7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/test-creator/test-creator.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/test-creator/test-creator.component.ts ***!
  \*******************************************************************/
/*! exports provided: TestCreatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestCreatorComponent", function() { return TestCreatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestCreatorComponent = class TestCreatorComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
    }
};
TestCreatorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
TestCreatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-test-creator",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test-creator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/test-creator/test-creator.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test-creator.component.less */ "./src/app/components/test-creator/test-creator.component.less")).default]
    })
], TestCreatorComponent);



/***/ }),

/***/ "./src/app/custom-validators/password-match.validator.ts":
/*!***************************************************************!*\
  !*** ./src/app/custom-validators/password-match.validator.ts ***!
  \***************************************************************/
/*! exports provided: passwordMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordMatch", function() { return passwordMatch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function passwordMatch() {
    return (formGroup) => {
        if (!formGroup.get("password").hasError("minlength")) {
            if (formGroup.get("password").value !== formGroup.get("passwordAgain").value) {
                return { "doesntMatch": true };
            }
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/directives/change-image/change-image.directive.ts":
/*!*******************************************************************!*\
  !*** ./src/app/directives/change-image/change-image.directive.ts ***!
  \*******************************************************************/
/*! exports provided: ChangeImageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeImageDirective", function() { return ChangeImageDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChangeImageDirective = class ChangeImageDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.click = 0;
    }
    toggle() {
        this.elementRef.nativeElement.childNodes[0].src = this.appChangeImage[this.click % 2];
        this.click += 1;
    }
};
ChangeImageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeImageDirective.prototype, "appChangeImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
], ChangeImageDirective.prototype, "toggle", null);
ChangeImageDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appChangeImage]"
    })
], ChangeImageDirective);



/***/ }),

/***/ "./src/app/directives/clear-input-tips/clear-input-tips.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/directives/clear-input-tips/clear-input-tips.directive.ts ***!
  \***************************************************************************/
/*! exports provided: ClearInputTipsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClearInputTipsDirective", function() { return ClearInputTipsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClearInputTipsDirective = class ClearInputTipsDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    empty() {
        this.appClearInputTips.control.setValue(this.appClearInputTips.message);
        this.appClearInputTips.control.markAsPristine();
        this.appClearInputTips.control.setErrors({ require: true });
        this.elementRef.nativeElement.style.fontStyle = "italic";
        this.elementRef.nativeElement.style.color = "#aeaeae";
    }
    ngOnInit() {
        this.empty();
    }
    clearField() {
        if (this.appClearInputTips.control.pristine) {
            this.appClearInputTips.control.setValue("");
            this.elementRef.nativeElement.style.fontStyle = "normal";
            this.elementRef.nativeElement.style.color = "#000000";
        }
    }
    setTip() {
        if (!this.appClearInputTips.control.value) {
            this.empty();
        }
    }
};
ClearInputTipsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ClearInputTipsDirective.prototype, "appClearInputTips", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("focusin")
], ClearInputTipsDirective.prototype, "clearField", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("focusout")
], ClearInputTipsDirective.prototype, "setTip", null);
ClearInputTipsDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appClearInputTips]"
    })
], ClearInputTipsDirective);



/***/ }),

/***/ "./src/app/directives/set-status/set-status.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/directives/set-status/set-status.directive.ts ***!
  \***************************************************************/
/*! exports provided: SetStatusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetStatusDirective", function() { return SetStatusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SetStatusDirective = class SetStatusDirective {
    constructor(elementRef) {
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
            lightBlue: "#528ca2",
        };
    }
    setColors() {
        const changingProperty = this.appSetStatus.darkTheme ? "color" : "background";
        const constantProperty = !this.appSetStatus.darkTheme ? "color" : "background";
        this.elementRef.nativeElement.style[constantProperty] = this[constantProperty].white;
        switch (this.appSetStatus.status) {
            case "student": {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].yellow;
                break;
            }
            case "teacher": {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].green;
                break;
            }
            case "developer": {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].violet;
                break;
            }
            case "god": {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].lightBlue;
                break;
            }
            default: {
                this.elementRef.nativeElement.style[changingProperty] = this[changingProperty].white;
                this.elementRef.nativeElement.style.color = this.color.black;
                break;
            }
        }
    }
    ngAfterViewChecked() {
        this.setColors();
    }
};
SetStatusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SetStatusDirective.prototype, "appSetStatus", void 0);
SetStatusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appSetStatus]"
    })
], SetStatusDirective);



/***/ }),

/***/ "./src/app/directives/show-password/show-password.directive.ts":
/*!*********************************************************************!*\
  !*** ./src/app/directives/show-password/show-password.directive.ts ***!
  \*********************************************************************/
/*! exports provided: ShowPasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPasswordDirective", function() { return ShowPasswordDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShowPasswordDirective = class ShowPasswordDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.clickCount = 0;
    }
    showPassword() {
        this.clickCount += 1;
        this.clickCount % 2 === 0
            ? this.elementRef.nativeElement.parentNode.parentNode.childNodes[0].type = `password`
            : this.elementRef.nativeElement.parentNode.parentNode.childNodes[0].type = `text`;
    }
};
ShowPasswordDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click")
], ShowPasswordDirective.prototype, "showPassword", null);
ShowPasswordDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appShowPassword]"
    })
], ShowPasswordDirective);



/***/ }),

/***/ "./src/app/directives/tooltip.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/tooltip.directive.ts ***!
  \*************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TooltipDirective = class TooltipDirective {
    constructor() { }
};
TooltipDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appTooltip]'
    })
], TooltipDirective);



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
    welcomeMessage: "Привет! Добро пожаловать в сервис.",
    welcomeOwner: "Приложение",
    validation: {
        requireError: "Нужно заполнить поле",
        loginExistError: "Логин занят",
        patternError: "Недопустимые символы",
        loginMinLengthError: "Логин слишком короткий",
        usernameMinLengthError: "Имя слишком короткое",
        passwordMinLengthError: "Пароль слишком короткий",
        passwordDoesntMatch: "Пароли не совпадают",
    },
    authentication: {
        loginDoesntExist: "Пользователя с таким логином не существует",
        passwordDoesntMatch: "Неверный пароль",
    },
    confirmation: {
        deleteAccountQuestion: "Действительно удалить аккаунт?",
        deleteAccountInfo: "Действие нельзя отменить - страница будет удалена без возможности восстановления",
        deleteAccountConfirm: "Удалить",
        deleteAccountCancel: "Отменить",
    },
    education: {
        materialsEmpty: "пока нет материалов",
        materialsAddPhrase: "Загрузить",
        tasksEmpty: "пока нет заданий",
        tasksAddPhrase: "Новое задание",
    },
    testCreator: {
        questionTip: "Придумайте вопрос..?",
        answerTip: "Запишите вариант ответа",
        addAnswerPhrase: "Добавить вариант ответа",
        completeCreatingAnswer: "Сохранить вопрос"
    }
};


/***/ }),

/***/ "./src/app/model/notification.ts":
/*!***************************************!*\
  !*** ./src/app/model/notification.ts ***!
  \***************************************/
/*! exports provided: Notification, welcomeNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "welcomeNotification", function() { return welcomeNotification; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages */ "./src/app/model/messages.ts");


class Notification {
    constructor(message, owner, lifetime) {
        this.message = message;
        this.owner = owner;
        this.datetime = new Date();
        this.lifetime = lifetime;
        this.checked = false;
    }
    markAsChecked() {
        this.checked = true;
    }
}
const welcomeNotification = new Notification(_messages__WEBPACK_IMPORTED_MODULE_1__["messages"].welcomeMessage, "welcome", 60 * 1000);


/***/ }),

/***/ "./src/app/model/test.ts":
/*!*******************************!*\
  !*** ./src/app/model/test.ts ***!
  \*******************************/
/*! exports provided: SimpleTestUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTestUnit", function() { return SimpleTestUnit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class SimpleTestUnit {
    constructor(question, correctAnswer, wrongAnswerOptions) {
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.wrongAnswerOptions = wrongAnswerOptions;
    }
}


/***/ }),

/***/ "./src/app/services/cookies-service/cookies.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/cookies-service/cookies.service.ts ***!
  \*************************************************************/
/*! exports provided: CookiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesService", function() { return CookiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm2015/ngx-cookie-service.js");



let CookiesService = class CookiesService {
    constructor(cookie) {
        this.cookie = cookie;
    }
    saveLogin(login) {
        this.cookie.set("login", login, new Date(2999, 1, 1));
    }
    savePassword(password) {
        this.cookie.set("password", password, new Date(2999, 1, 1));
    }
    saveInfo(cookieName, value, timeout) {
        this.cookie.set(cookieName, value, timeout ? timeout : new Date(2999, 1, 1));
    }
    checkInfo(cookieName) {
        return this.cookie.get(cookieName);
    }
    deleteCookies() {
        this.cookie.delete("login");
        this.cookie.delete("password");
    }
    deleteCookie(cookieName) {
        this.cookie.delete(cookieName);
    }
};
CookiesService.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
];
CookiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CookiesService);



/***/ }),

/***/ "./src/app/services/user-service/user.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/user-service/user.service.ts ***!
  \*******************************************************/
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");






let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
        this.usersURL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url + "users/";
    }
    forCheck() {
        return this._http.get(this.usersURL + `natalia`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err)));
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
    deleteAccount(userID) {
        return this._http.delete(this.usersURL + `${userID}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data));
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

/***/ "./src/app/store/actions/theme.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/theme.actions.ts ***!
  \************************************************/
/*! exports provided: toggleTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTheme", function() { return toggleTheme; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const TOGGLE = "[Theme] theme toggled";
const toggleTheme = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(TOGGLE);


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

/***/ "./src/app/store/actions/waiting.actions.ts":
/*!**************************************************!*\
  !*** ./src/app/store/actions/waiting.actions.ts ***!
  \**************************************************/
/*! exports provided: activateWait, deactivateWait */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateWait", function() { return activateWait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deactivateWait", function() { return deactivateWait; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const ACTIVATE_WAIT = "[Waiting] activate";
const DEACTIVATE_WAIT = "[Waiting] deactivate";
const activateWait = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(ACTIVATE_WAIT);
const deactivateWait = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])(DEACTIVATE_WAIT);


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
/* harmony import */ var _theme_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme.reducer */ "./src/app/store/reducers/theme.reducer.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.reducer */ "./src/app/store/reducers/user.reducer.ts");
/* harmony import */ var _waiting_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./waiting.reducer */ "./src/app/store/reducers/waiting.reducer.ts");




const appReducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["userReducer"],
    theme: _theme_reducer__WEBPACK_IMPORTED_MODULE_1__["themeReducer"],
    pleaseWait: _waiting_reducer__WEBPACK_IMPORTED_MODULE_3__["waitingReducer"],
};


/***/ }),

/***/ "./src/app/store/reducers/theme.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/theme.reducer.ts ***!
  \*************************************************/
/*! exports provided: themeReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeReducer", function() { return themeReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_theme_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/theme.actions */ "./src/app/store/actions/theme.actions.ts");
/* harmony import */ var _state_theme_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/theme.state */ "./src/app/store/state/theme.state.ts");




const themeReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_theme_state__WEBPACK_IMPORTED_MODULE_3__["initialThemeState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_theme_actions__WEBPACK_IMPORTED_MODULE_2__["toggleTheme"], (state) => ({ darkThemeEnable: !state.darkThemeEnable })));


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

/***/ "./src/app/store/reducers/waiting.reducer.ts":
/*!***************************************************!*\
  !*** ./src/app/store/reducers/waiting.reducer.ts ***!
  \***************************************************/
/*! exports provided: waitingReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitingReducer", function() { return waitingReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_waiting_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/waiting.actions */ "./src/app/store/actions/waiting.actions.ts");
/* harmony import */ var _state_waiting_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/waiting.state */ "./src/app/store/state/waiting.state.ts");




const waitingReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(_state_waiting_state__WEBPACK_IMPORTED_MODULE_3__["initialWaitingState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_waiting_actions__WEBPACK_IMPORTED_MODULE_2__["activateWait"], () => ({ waiting: true })), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_waiting_actions__WEBPACK_IMPORTED_MODULE_2__["deactivateWait"], () => ({ waiting: false })));


/***/ }),

/***/ "./src/app/store/selectors/theme.selectors.ts":
/*!****************************************************!*\
  !*** ./src/app/store/selectors/theme.selectors.ts ***!
  \****************************************************/
/*! exports provided: selectThemeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectThemeInfo", function() { return selectThemeInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectTheme = (appState) => appState.theme;
const selectThemeInfo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectTheme, (state) => state.darkThemeEnable);


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

/***/ "./src/app/store/selectors/waiting.selectors.ts":
/*!******************************************************!*\
  !*** ./src/app/store/selectors/waiting.selectors.ts ***!
  \******************************************************/
/*! exports provided: selectWaiting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWaiting", function() { return selectWaiting; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");


const selectPleaseWait = (appState) => appState.pleaseWait;
const selectWaiting = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(selectPleaseWait, (state) => state.waiting);


/***/ }),

/***/ "./src/app/store/services/theme-store.service/theme-store.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/store/services/theme-store.service/theme-store.service.ts ***!
  \***************************************************************************/
/*! exports provided: ThemeStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeStoreService", function() { return ThemeStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_theme_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/theme.actions */ "./src/app/store/actions/theme.actions.ts");
/* harmony import */ var _selectors_theme_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/theme.selectors */ "./src/app/store/selectors/theme.selectors.ts");





let ThemeStoreService = class ThemeStoreService {
    constructor(store$) {
        this.store$ = store$;
    }
    loadThemeInfo() {
        return this.store$.select(_selectors_theme_selectors__WEBPACK_IMPORTED_MODULE_4__["selectThemeInfo"]);
    }
    toggleTheme() {
        this.store$.dispatch(Object(_actions_theme_actions__WEBPACK_IMPORTED_MODULE_3__["toggleTheme"])());
    }
};
ThemeStoreService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ThemeStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ThemeStoreService);



/***/ }),

/***/ "./src/app/store/services/user-store.service/user-store.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/store/services/user-store.service/user-store.service.ts ***!
  \*************************************************************************/
/*! exports provided: UserStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreService", function() { return UserStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_user_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/user.actions */ "./src/app/store/actions/user.actions.ts");
/* harmony import */ var _selectors_user_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/user.selectors */ "./src/app/store/selectors/user.selectors.ts");





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

/***/ "./src/app/store/services/waiting-store.service/waiting-store.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/store/services/waiting-store.service/waiting-store.service.ts ***!
  \*******************************************************************************/
/*! exports provided: WaitingStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitingStoreService", function() { return WaitingStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _actions_waiting_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/waiting.actions */ "./src/app/store/actions/waiting.actions.ts");
/* harmony import */ var _selectors_waiting_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../selectors/waiting.selectors */ "./src/app/store/selectors/waiting.selectors.ts");





let WaitingStoreService = class WaitingStoreService {
    constructor(store$) {
        this.store$ = store$;
    }
    loadInfo() {
        return this.store$.select(_selectors_waiting_selectors__WEBPACK_IMPORTED_MODULE_4__["selectWaiting"]);
    }
    activateLoading() {
        this.store$.dispatch(Object(_actions_waiting_actions__WEBPACK_IMPORTED_MODULE_3__["activateWait"])());
    }
    deactivateLoading() {
        this.store$.dispatch(Object(_actions_waiting_actions__WEBPACK_IMPORTED_MODULE_3__["deactivateWait"])());
    }
};
WaitingStoreService.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
WaitingStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], WaitingStoreService);



/***/ }),

/***/ "./src/app/store/state/theme.state.ts":
/*!********************************************!*\
  !*** ./src/app/store/state/theme.state.ts ***!
  \********************************************/
/*! exports provided: initialThemeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialThemeState", function() { return initialThemeState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const initialThemeState = {
    darkThemeEnable: false
};


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

/***/ "./src/app/store/state/waiting.state.ts":
/*!**********************************************!*\
  !*** ./src/app/store/state/waiting.state.ts ***!
  \**********************************************/
/*! exports provided: initialWaitingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialWaitingState", function() { return initialWaitingState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const initialWaitingState = {
    waiting: false
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

const environment = {
    production: false,
    url: "https://mysterious-oasis-74963.herokuapp.com/",
    versionSign: "notifications"
};


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
webpackJsonp(["auth.module"],{

/***/ "../../../../../src/app/shared/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_routing__ = __webpack_require__("../../../../../src/app/shared/auth/auth.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_module__ = __webpack_require__("../../../../../src/app/shared/auth/+login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { AuthComponent } from './auth.component';
// import { AuthService } from './auth.service';


var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__auth_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__login_login_module__["LoginModule"]
        ],
        declarations: [],
        providers: [
            // AuthService,
            __WEBPACK_IMPORTED_MODULE_5__utils_notification_service__["a" /* NotificationService */]
        ]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

var routes = [
    {
        path: 'login',
        loadChildren: './+login/login.module#LoginModule'
    }
    // {
    //   path: 'register',
    //   loadChildren: './+register/register.module#RegisterModule'
    // },
    // {
    //   path: 'forgot-password',
    //   loadChildren: './+forgot/forgot.module#ForgotModule'
    // },
    // {
    //   path: 'locked',
    //   loadChildren: './+locked/locked.module#LockedModule'
    // }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=auth.routing.js.map

/***/ })

});
//# sourceMappingURL=auth.module.chunk.js.map
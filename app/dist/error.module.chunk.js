webpackJsonp(["error.module"],{

/***/ "../../../../../src/app/+error/error.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <!-- row -->\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"text-center error-box\">\n            <h1 class=\"error-text-2 bounceInDown animated\"> Error {{code}} <span class=\"particle particle--c\"></span><span class=\"particle particle--a\"></span><span class=\"particle particle--b\"></span></h1>\n\n            <h2 class=\"font-xl\"><strong><i class=\"fa fa-fw fa-warning fa-lg text-warning\"></i> Page\n              <u>Not</u> Found</strong></h2>\n            <br>\n\n            <p class=\"lead\">\n              The page you requested could not be found, either contact your webmaster or try again. Use\n              your browsers <b>Back</b> button to navigate to the page you have prevously come from\n            </p>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- end row -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorComponent = (function () {
    function ErrorComponent(route) {
        this.route = route;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.code = Number(params['code']);
            switch (_this.code) {
                case Number(401):
                    _this.mensaje = 'No autorizado';
                    break;
                case Number(403):
                    _this.mensaje = 'Acceso restringido';
                    break;
                case Number(404):
                    _this.mensaje = 'Página no encontrada';
                    break;
                case Number(500):
                    _this.mensaje = 'Problemas en el servidor';
                    break;
            }
        });
    };
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error',
        template: __webpack_require__("../../../../../src/app/+error/error.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ErrorComponent);

var _a;
//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/+error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_routing__ = __webpack_require__("../../../../../src/app/+error/error.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_component__ = __webpack_require__("../../../../../src/app/+error/error.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ErrorModule = (function () {
    function ErrorModule() {
    }
    return ErrorModule;
}());
ErrorModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__error_component__["a" /* ErrorComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__error_routing__["a" /* routing */]
            // SmartadminModule
        ]
    })
], ErrorModule);

//# sourceMappingURL=error.module.js.map

/***/ }),

/***/ "../../../../../src/app/+error/error.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error_component__ = __webpack_require__("../../../../../src/app/+error/error.component.ts");


var routes = [
    {
        path: ':code',
        component: __WEBPACK_IMPORTED_MODULE_1__error_component__["a" /* ErrorComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=error.routing.js.map

/***/ })

});
//# sourceMappingURL=error.module.chunk.js.map
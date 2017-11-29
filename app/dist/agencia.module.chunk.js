webpackJsonp(["agencia.module"],{

/***/ "../../../../../src/app/+agencia/agencia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgenciaModule", function() { return AgenciaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agencia_routing__ = __webpack_require__("../../../../../src/app/+agencia/agencia.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_subagencias_service__ = __webpack_require__("../../../../../src/app/+agencia/shared/subagencias.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgenciaModule = (function () {
    function AgenciaModule() {
    }
    return AgenciaModule;
}());
AgenciaModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__agencia_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_subagencias_service__["a" /* SubAgenciasService */]]
    })
], AgenciaModule);

//# sourceMappingURL=agencia.module.js.map

/***/ }),

/***/ "../../../../../src/app/+agencia/agencia.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

var routes = [
    {
        path: '',
        redirectTo: 'subagencias',
        pathMatch: 'full'
    },
    {
        path: 'mi-agencia',
        loadChildren: './+mi-agencia/mi-agencia.module#MiAgenciaModule',
        data: { pageTitle: 'Mi Agencia' }
    },
    {
        path: 'subagencias',
        loadChildren: './+subagencias/subagencias.module#SubagenciasModule',
        data: { pageTitle: 'Sub Agencias' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=agencia.routing.js.map

/***/ })

});
//# sourceMappingURL=agencia.module.chunk.js.map
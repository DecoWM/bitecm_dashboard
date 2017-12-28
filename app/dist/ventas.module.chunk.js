webpackJsonp(["ventas.module"],{

/***/ "../../../../../src/app/+ventas/ventas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentasModule", function() { return VentasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ventas_routing__ = __webpack_require__("../../../../../src/app/+ventas/ventas.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var VentasModule = (function () {
    function VentasModule() {
    }
    return VentasModule;
}());
VentasModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ventas_routing__["a" /* routing */]
        ]
    })
], VentasModule);

//# sourceMappingURL=ventas.module.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/ventas.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

var routes = [
    {
        path: '',
        redirectTo: 'ordenes',
        pathMatch: 'full'
    },
    {
        path: 'ordenes',
        loadChildren: './+ordenes/ordenes.module#OrdenesModule',
        data: { pageTitle: 'Ordenes' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=ventas.routing.js.map

/***/ })

});
//# sourceMappingURL=ventas.module.chunk.js.map
webpackJsonp(["productos.module"],{

/***/ "../../../../../src/app/+productos/productos.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosModule", function() { return ProductosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__productos_routing__ = __webpack_require__("../../../../../src/app/+productos/productos.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ProductosModule = (function () {
    function ProductosModule() {
    }
    return ProductosModule;
}());
ProductosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__productos_routing__["a" /* routing */]
        ]
    })
], ProductosModule);

//# sourceMappingURL=productos.module.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/productos.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

var routes = [
    {
        path: '',
        redirectTo: 'catalogo',
        pathMatch: 'full'
    },
    {
        path: 'catalogo',
        loadChildren: './+catalogo/catalogo.module#CatalogoModule',
        data: { pageTitle: 'Catalogo' }
    },
    {
        path: 'chip',
        loadChildren: './+chip/chip.module#ChipModule',
        data: { pageTitle: 'Chip' }
    },
    {
        path: 'importacion',
        loadChildren: './+importacion/importacion.module#ImportacionModule',
        data: { pageTitle: 'Importación' }
    },
    {
        path: 'planes',
        loadChildren: './+planes/planes.module#PlanesModule',
        data: { pageTitle: 'Planes' }
    },
    {
        path: 'contratos',
        loadChildren: './+contratos/contratos.module#ContratosModule',
        data: { pageTitle: 'Contratos' }
    },
    {
        path: 'sucursales',
        loadChildren: './+sucursales/sucursales.module#SucursalesModule',
        data: { pageTitle: 'Sucursales' }
    },
    {
        path: 'distritos',
        loadChildren: './+distritos/distritos.module#DistritosModule',
        data: { pageTitle: 'Distritos' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=productos.routing.js.map

/***/ })

});
//# sourceMappingURL=productos.module.chunk.js.map
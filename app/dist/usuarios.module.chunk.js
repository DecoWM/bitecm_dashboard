webpackJsonp(["usuarios.module"],{

/***/ "../../../../../src/app/+usuarios/usuarios.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__usuarios_routing__ = __webpack_require__("../../../../../src/app/+usuarios/usuarios.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_clientes_service__ = __webpack_require__("../../../../../src/app/+usuarios/shared/clientes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {AdminComponent} from './+admin/admin.component';
var UsuariosModule = (function () {
    function UsuariosModule() {
    }
    return UsuariosModule;
}());
UsuariosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__usuarios_routing__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__shared_clientes_service__["a" /* ClientesService */]]
    })
], UsuariosModule);

//# sourceMappingURL=usuarios.module.js.map

/***/ }),

/***/ "../../../../../src/app/+usuarios/usuarios.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");

// import {AdminComponent} from './+admin/admin.component';
var routes = [
    {
        path: '',
        redirectTo: 'clientes',
        pathMatch: 'full'
    },
    /*{
        path: 'admin',
        component: AdminComponent,
        data: {pageTitle: 'Administrador'}
    },*/
    {
        path: 'agentes',
        loadChildren: './+agentes/agentes.module#AgentesModule',
        data: { pageTitle: 'Agentes' }
    },
    {
        path: 'operadores',
        loadChildren: './+operadores/operadores.module#OperadoresModule',
        data: { pageTitle: 'Operadores' }
    },
    {
        path: 'clientes',
        loadChildren: './+clientes/clientes.module#ClientesModule',
        data: { pageTitle: 'Clientes' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=usuarios.routing.js.map

/***/ })

});
//# sourceMappingURL=usuarios.module.chunk.js.map
webpackJsonp(["subagencias.module"],{

/***/ "../../../../../src/app/+agencia/+subagencias/subagencias-detalle/subagencias-detalle.component.html":
/***/ (function(module, exports) {

module.exports = "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n  <tbody><tr>\n      <td style=\"width:100px\"><b>Nombre:</b></td>\n      <td>{{data.nombre}}</td>\n  </tr>\n  <tr>\n      <td><b>Slogan:</b></td>\n      <td>{{data.slogan}}</td>\n  </tr>\n  <tr>\n      <td><b>Descripción:</b></td>\n      <td>{{data.desc}}</td>\n  </tr>\n  <tr>\n    <td><b>Estilos:</b></td>\n    <td>\n        Colores:\n        <div *ngFor=\"let estilo of estilos\">\n            {{ estilo }}: <strong>{{ colors[estilo] }}</strong>\n            <span style=\"display:inline-block; width: 15px; height: 15px; border-radius: 15px;\" [style.backgroundColor]=\"colors[estilo]\"></span>\n        </div>\n    </td>\n  </tr>\n  <tr>\n      <td><b>Creado:</b></td>\n      <td>{{data.creado | date:\"dd-MM-yy\" }}</td>\n  </tr>\n  <tr>\n      <td><b>Modificado:</b></td>\n      <td>\n          {{data.modificado | date:\"dd-MM-yy\" }}\n      </td>\n  </tr>\n  <tr>\n    <td><b>Logo:</b></td>\n    <td>\n        <img [src]=\"data.logo\" style=\"width: 160px; height: auto\" alt=\"imagen logo\">\n      <!-- <button (click)=\"Desactivar(data)\" class=\"btn btn-xs btn-danger pull-right\" style=\"margin-left:5px\">Desactivar</button> -->\n      <button (click)=\"Editar(data)\" class=\"btn btn-xs btn-success pull-right\">Editar</button>\n    </td>\n  </tr>\n</tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/+agencia/+subagencias/subagencias-detalle/subagencias-detalle.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubagenciasDetalleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubagenciasDetalleComponent = (function () {
    function SubagenciasDetalleComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    SubagenciasDetalleComponent.prototype.ngOnInit = function () {
        if (this.data.estilos) {
            this.estilos = Object.keys(this.data.estilos.color);
            this.colors = this.data.estilos.color;
        }
    };
    SubagenciasDetalleComponent.prototype.Detalle = function (data) {
        this.router.navigate(['detalle', data._id], { relativeTo: this.route });
    };
    SubagenciasDetalleComponent.prototype.Editar = function (data) {
        this.router.navigate(['editar', data._id], { relativeTo: this.route });
    };
    SubagenciasDetalleComponent.prototype.Desactivar = function (data) {
        this.router.navigate(['desactivar', data._id], { relativeTo: this.route });
    };
    return SubagenciasDetalleComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SubagenciasDetalleComponent.prototype, "data", void 0);
SubagenciasDetalleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-subagencias-detalle',
        template: __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-detalle/subagencias-detalle.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SubagenciasDetalleComponent);

var _a, _b;
//# sourceMappingURL=subagencias-detalle.component.js.map

/***/ }),

/***/ "../../../../../src/app/+agencia/+subagencias/subagencias-form/subagencias-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"[' Subagencias', mode]\" icon=\"building\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget color=\"darken\">\n        </sa-widget>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>"

/***/ }),

/***/ "../../../../../src/app/+agencia/+subagencias/subagencias-form/subagencias-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubagenciasFormComponent; });
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


var SubagenciasFormComponent = (function () {
    function SubagenciasFormComponent(route) {
        this.route = route;
        this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
    }
    SubagenciasFormComponent.prototype.ngOnInit = function () {
    };
    return SubagenciasFormComponent;
}());
SubagenciasFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subagencias-form',
        template: __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-form/subagencias-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], SubagenciasFormComponent);

var _a;
//# sourceMappingURL=subagencias-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+agencia/+subagencias/subagencias-list/subagencias-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"[' Subagencias']\" icon=\"building\"\n        class=\"col-xs-10 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <div class=\"col-xs-2 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-6\">\n      <!-- <a routerLink=\"./crear\" class=\"btn btn-primary btn-lg pull-right\">Crear Paquete</a> -->\n    </div>\n  </div>  \n  <sa-widgets-grid>\n      <div class=\"row\">\n        <article class=\"col-sm-12\">\n          <sa-widget color=\"darken\">\n            <div>\n              <div class=\"widget-body no-padding\">\n                <sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \n                  [paginationLength]=\"true\" tableClass=\"table table-striped table-bordered table-hover\">\n                  <thead>\n                    <tr>\n                      <th></th>\n                      <th [style.width]=\"'200px'\">\n                        <i class=\"fa fa-fw fa-cube text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Logo\n                      </th>\n                      <th [style.width]=\"'40%'\">\n                        <i class=\"fa fa-fw fa-flag text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Nombre\n                      </th>\n                      <th [style.width]=\"'25%'\" data-hide=\"mobile-p\">\n                        <i class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Creado\n                      </th>\n                      <th [style.width]=\"'2%'\" data-hide=\"mobile-p\">Editar</th>\n                    </tr>\n                  </thead>                  \n                  <tbody *ngIf=\"itemsObs | async as items; else loading\">                    \n                    <ng-container *ngFor=\"let item of items; let last = last\"\n                      sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\n                      <tr>\n                        <td id=\"{{ item._id }}\" class=\"details-control\"></td>\n                        <td>\n                          <img [src]=\"item.logo\" style=\"width: 160px; height: auto\" alt=\"imagen logo\">\n                        </td>\n                        <td>{{ item.nombre }}</td>\n                        <td [attr.data-order]=\"item.creado | moment:'x'\">{{ item.creado | date:\"dd-MM-yy\" }}</td>\n                        <td class=\"text-center\">\n                            <a (click)=\"Editar(item)\">\n                              <i class=\"fa fa-lg fa-fw fa-pencil\"></i>\n                            </a>\n                        </td>\n                      </tr>\n                      <sa-dt-detalle [data]=\"item\" [type]=\"dcomp\" [trigger]=\"item._id\" [cols]=\"5\"></sa-dt-detalle>\n                    </ng-container>\n                  </tbody>\n                  <ng-template #loading>\n                    <tr class=\"odd\">\n                      <td valign=\"top\" colspan=\"9\" class=\"dataTables_empty\">\n                        Cargando datos...\n                      </td>\n                    </tr>\n                  </ng-template>\n                </sa-datatable>\n              </div>\n            </div>\n          </sa-widget>\n        </article>\n    </div>\n  </sa-widgets-grid>\n</div>"

/***/ }),

/***/ "../../../../../src/app/+agencia/+subagencias/subagencias-list/subagencias-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubagenciasListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_subagencias_service__ = __webpack_require__("../../../../../src/app/+agencia/shared/subagencias.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subagencias_detalle_subagencias_detalle_component__ = __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-detalle/subagencias-detalle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SubagenciasListComponent = (function () {
    function SubagenciasListComponent(route, router, subagenciasService) {
        this.route = route;
        this.router = router;
        this.subagenciasService = subagenciasService;
        this.itemsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dcomp = __WEBPACK_IMPORTED_MODULE_6__subagencias_detalle_subagencias_detalle_component__["a" /* SubagenciasDetalleComponent */];
        this.options = {
            dom: 'Bfrtip',
            columnDefs: [{
                    targets: [0, 4],
                    orderable: false
                }],
            order: [[3, 'desc']],
            colReorder: true
        };
    }
    SubagenciasListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subagenciasService.getSubagencias()
            .subscribe(function (data) {
            _this.itemsObs.next(data.result);
        });
    };
    SubagenciasListComponent.prototype.Editar = function (data) {
        this.router.navigate(['editar', data._id], { relativeTo: this.route });
    };
    return SubagenciasListComponent;
}());
SubagenciasListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-subagencias-list',
        template: __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-list/subagencias-list.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_subagencias_service__["a" /* SubAgenciasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_subagencias_service__["a" /* SubAgenciasService */]) === "function" && _c || Object])
], SubagenciasListComponent);

var _a, _b, _c;
//# sourceMappingURL=subagencias-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/+agencia/+subagencias/subagencias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubagenciasModule", function() { return SubagenciasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__ = __webpack_require__("../../../../../src/app/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subagencias_form_subagencias_form_component__ = __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-form/subagencias-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subagencias_list_subagencias_list_component__ = __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-list/subagencias-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subagencias_routing__ = __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_subagencias_service__ = __webpack_require__("../../../../../src/app/+agencia/shared/subagencias.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__subagencias_detalle_subagencias_detalle_component__ = __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-detalle/subagencias-detalle.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SubagenciasModule = (function () {
    function SubagenciasModule() {
    }
    return SubagenciasModule;
}());
SubagenciasModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_7__subagencias_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_0__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__subagencias_form_subagencias_form_component__["a" /* SubagenciasFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__subagencias_list_subagencias_list_component__["a" /* SubagenciasListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__subagencias_detalle_subagencias_detalle_component__["a" /* SubagenciasDetalleComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__subagencias_detalle_subagencias_detalle_component__["a" /* SubagenciasDetalleComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_subagencias_service__["a" /* SubAgenciasService */]]
    })
], SubagenciasModule);

//# sourceMappingURL=subagencias.module.js.map

/***/ }),

/***/ "../../../../../src/app/+agencia/+subagencias/subagencias.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subagencias_form_subagencias_form_component__ = __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-form/subagencias-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subagencias_list_subagencias_list_component__ = __webpack_require__("../../../../../src/app/+agencia/+subagencias/subagencias-list/subagencias-list.component.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__subagencias_list_subagencias_list_component__["a" /* SubagenciasListComponent */],
        data: { pageTitle: 'Sub Agencias' }
    },
    {
        path: 'crear',
        component: __WEBPACK_IMPORTED_MODULE_1__subagencias_form_subagencias_form_component__["a" /* SubagenciasFormComponent */],
        data: { pageTitle: 'Crear Sub Agencia' }
    },
    {
        path: 'editar/:id',
        component: __WEBPACK_IMPORTED_MODULE_1__subagencias_form_subagencias_form_component__["a" /* SubagenciasFormComponent */],
        data: {
            pageTitle: 'Editar Sub Agencia'
        }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=subagencias.routing.js.map

/***/ })

});
//# sourceMappingURL=subagencias.module.chunk.js.map
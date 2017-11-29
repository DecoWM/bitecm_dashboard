webpackJsonp(["agentes.module"],{

/***/ "../../../../../src/app/+usuarios/+agentes/agente-form/agente-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Agente', mode]\" icon=\"calendar\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget color=\"darken\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-hashtag\"></i> </span>\n            <h2>ID: {{agente._id}}</h2>\n          </header>\n          <div class=\"widget-body\">\n            <form-container\n              (onValidationSuccess)=\"onValidationSuccess($event)\"\n              [validatorOptions]=\"validationOptions\">\n              <fieldset>\n                <legend>Información de Contacto</legend>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Nombre*</label>\n                  <div class=\"col-md-4\">\n                    <input [(ngModel)]=\"agente.nombre\" name=\"nombre\" required class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Email*</label>\n                  <div class=\"col-md-4\">\n                    <input [(ngModel)]=\"agente.email\" name=\"email\" required class=\"form-control\" type=\"email\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Celular*</label>\n                  <div class=\"col-md-4\">\n                    <input\n                      [(ngModel)]=\"agente.celular\" name=\"celular\" required class=\"form-control\" type=\"text\"\n                      (keyup)=\"update($event)\"\n                      saMaskedInput=\"999-999-999\"\n                      saMaskedPlaceholder=\"*\"\n                    >\n                  </div>\n                </div>\n              </fieldset>\n              <fieldset>\n                <legend>Establecer Contraseña</legend>\n                <div *ngIf=\"!agente.hasOwnProperty('_id')\">\n                  <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Contraseña*</label>\n                    <div class=\"col-md-4\">\n                      <input [(ngModel)]=\"agente.password\" name=\"password\" required class=\"form-control\" type=\"text\">\n                    </div>\n                  </div>\n                </div>\n                <div *ngIf=\"agente.hasOwnProperty('_id')\">\n                  <div *ngIf=\"!isChanginPassword\" class=\"form-group\">\n                    <div class=\"col-md-6\">\n                      <button type=\"button\" class=\"btn btn-default\" (click)=\"isChanginPassword=true\">Cambiar Contraseña</button>\n                    </div>\n                  </div>\n                  <div *ngIf=\"isChanginPassword\" class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Contraseña*</label>\n                    <div class=\"col-md-4\">\n                      <input [(ngModel)]=\"agente.newPassword\" name=\"newPassword\" required class=\"form-control\" type=\"text\">\n                      <button type=\"button\" class=\"btn btn-default\" (click)=\"isChanginPassword=false\">Cancelar</button>\n                    </div>\n                  </div>\n                </div>\n              </fieldset>\n              <div class=\"form-actions\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.back();\">Regresar</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n                  </div>\n                </div>\n              </div>\n            </form-container>\n          </div>\n        </sa-widget>\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/+usuarios/+agentes/agente-form/agente-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgenteFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_personal_service__ = __webpack_require__("../../../../../src/app/+usuarios/shared/personal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_personal_validation_options__ = __webpack_require__("../../../../../src/app/+usuarios/shared/personal-validation-options.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AgenteFormComponent = (function () {
    function AgenteFormComponent(router, route, personalService) {
        this.router = router;
        this.route = route;
        this.personalService = personalService;
        this.agente = {};
        this.isChanginPassword = false;
        this.validationOptions = __WEBPACK_IMPORTED_MODULE_3__shared_personal_validation_options__["a" /* personalValidationOptions */];
        this.lastEmail = '';
        this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
    }
    AgenteFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agente = __assign({}, this.personalService.personalModel, { roles: [2] });
        this.route.params
            .subscribe(function (params) {
            _this.render(params.hasOwnProperty('id') ? params['id'] : false);
        });
    };
    AgenteFormComponent.prototype.render = function (id) {
        var _this = this;
        if (id === void 0) { id = false; }
        if (id) {
            this.personalService.getPersonal(id)
                .subscribe(function (data) {
                _this.agente = data.result;
            });
        }
    };
    AgenteFormComponent.prototype.update = function (ev) {
        this.agente[ev.target.name] = ev.target.value;
    };
    AgenteFormComponent.prototype.save = function (agente) {
        var _this = this;
        if (!agente.hasOwnProperty('_id')) {
            this.personalService.createPerfil(agente)
                .subscribe(function (data) { return _this.handleSuccess(data); });
        }
        else {
            if (typeof agente.newPassword !== 'undefined') {
                agente['password'] = agente.newPassword;
            }
            else {
                delete agente['password'];
            }
            this.personalService.updatePerfil(agente)
                .subscribe(function (data) { return _this.handleSuccess(data); });
        }
    };
    AgenteFormComponent.prototype.handleSuccess = function (status) {
        if (status.success) {
            this.router.navigate(['usuarios', 'agentes']);
        }
        else {
            if (status.code === 11000) {
                this.$form.find('input[name=email]').data('last-mail', this.agente.email);
                this.$form.data('bootstrapValidator').revalidateField('email');
            }
        }
    };
    AgenteFormComponent.prototype.onValidationSuccess = function (e) {
        this.$form = $(e.currentTarget);
        if (e.type === 'success') {
            this.save(this.agente);
        }
    };
    return AgenteFormComponent;
}());
AgenteFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-agente-form',
        template: __webpack_require__("../../../../../src/app/+usuarios/+agentes/agente-form/agente-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_personal_service__["a" /* PersonalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_personal_service__["a" /* PersonalService */]) === "function" && _c || Object])
], AgenteFormComponent);

var _a, _b, _c;
//# sourceMappingURL=agente-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+usuarios/+agentes/agentes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"[' Agentes']\" icon=\"users\"\n        class=\"col-xs-10 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <div class=\"col-xs-2 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-6\">\n      <a routerLink=\"./crear\" class=\"btn btn-primary btn-lg pull-right\">Crear Agente</a>\n    </div>\n  </div>  \n  <sa-widgets-grid>\n      <div class=\"row\">\n        <article class=\"col-sm-12\">\n          <sa-widget color=\"darken\">\n            <div>\n              <div class=\"widget-body no-padding\">\n                <sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \n                  [paginationLength]=\"true\" tableClass=\"table table-striped table-bordered table-hover\">\n                  <thead>\n                    <tr>\n                      <th [style.width]=\"'4%'\"></th>\n                      <th>\n                        <i class=\"fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Nombre\n                      </th>\n                      <th>\n                        <i class=\"fa fa-fw fa-email text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Email\n                      </th>\n                      <th>\n                        <i class=\"fa fa-fw fa-phone text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Celular\n                      </th>\n                      <th [style.width]=\"'8%'\" data-hide=\"mobile-p\">\n                        <i class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Creado\n                      </th>\n                      <th [style.width]=\"'2%'\" data-hide=\"mobile-p\">Editar</th>\n                    </tr>\n                  </thead>                  \n                  <tbody *ngIf=\"itemsObs | async as items; else loading\">\n                    <ng-container *ngFor=\"let item of items; let last = last\"\n                      sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\n                      <tr>\n                        <td id=\"{{ item._id }}\" class=\"details-control\"></td>\n                        <td>{{ item.nombre }}</td>\n                        <td>{{ item.email }}</td>\n                        <td>{{ item.celular }}</td>\n                        <td [attr.data-order]=\"item.creado | moment:'x'\">{{ item.creado | date:\"dd-MM-yy\" }}</td>\n                        <td class=\"text-center\">\n                            <a (click)=\"Editar(item)\">\n                              <i class=\"fa fa-lg fa-fw fa-pencil\"></i>\n                            </a>\n                        </td>\n                      </tr>\n                      <sa-dt-detalle [data]=\"item\" [type]=\"dcomp\" [trigger]=\"item._id\" [cols]=\"6\"></sa-dt-detalle>\n                    </ng-container>\n                  </tbody>\n                  <ng-template #loading>\n                    <tr class=\"odd\">\n                      <td valign=\"top\" colspan=\"6\" class=\"dataTables_empty\">\n                        Cargando datos...\n                      </td>\n                    </tr>\n                  </ng-template>\n                </sa-datatable>\n              </div>\n            </div>\n          </sa-widget>\n        </article>\n    </div>\n  </sa-widgets-grid>\n</div>"

/***/ }),

/***/ "../../../../../src/app/+usuarios/+agentes/agentes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_agente_component__ = __webpack_require__("../../../../../src/app/+usuarios/+agentes/detalle/detalle-agente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_personal_service__ = __webpack_require__("../../../../../src/app/+usuarios/shared/personal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AgentesComponent = (function () {
    function AgentesComponent(router, route, personalService) {
        this.router = router;
        this.route = route;
        this.personalService = personalService;
        this.itemsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dcomp = __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_agente_component__["a" /* DetalleAgenteComponent */];
        this.options = {
            dom: 'Bfrtip',
            columnDefs: [{
                    targets: [0, 5],
                    orderable: false
                }],
            order: [[4, 'desc']],
            colReorder: true
        };
    }
    AgentesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.personalService.getAgentes()
            .subscribe(function (data) {
            _this.itemsObs.next(data.result);
        });
    };
    AgentesComponent.prototype.Editar = function (data) {
        this.router.navigate(['editar', data._id], { relativeTo: this.route });
    };
    return AgentesComponent;
}());
AgentesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'agentes',
        template: __webpack_require__("../../../../../src/app/+usuarios/+agentes/agentes.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__shared_personal_service__["a" /* PersonalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_personal_service__["a" /* PersonalService */]) === "function" && _c || Object])
], AgentesComponent);

var _a, _b, _c;
//# sourceMappingURL=agentes.component.js.map

/***/ }),

/***/ "../../../../../src/app/+usuarios/+agentes/agentes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentesModule", function() { return AgentesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agentes_routing__ = __webpack_require__("../../../../../src/app/+usuarios/+agentes/agentes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agentes_component__ = __webpack_require__("../../../../../src/app/+usuarios/+agentes/agentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_agente_component__ = __webpack_require__("../../../../../src/app/+usuarios/+agentes/detalle/detalle-agente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__itinerarios_shared_form_container_form_container_module__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/form-container/form-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_forms_input_smartadmin_input_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_personal_service__ = __webpack_require__("../../../../../src/app/+usuarios/shared/personal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agente_form_agente_form_component__ = __webpack_require__("../../../../../src/app/+usuarios/+agentes/agente-form/agente-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AgentesModule = (function () {
    function AgentesModule() {
    }
    return AgentesModule;
}());
AgentesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__agentes_component__["a" /* AgentesComponent */],
            __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_agente_component__["a" /* DetalleAgenteComponent */],
            __WEBPACK_IMPORTED_MODULE_9__agente_form_agente_form_component__["a" /* AgenteFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__agentes_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__itinerarios_shared_form_container_form_container_module__["a" /* FormContainerModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__detalle_detalle_agente_component__["a" /* DetalleAgenteComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__shared_personal_service__["a" /* PersonalService */]]
    })
], AgentesModule);

//# sourceMappingURL=agentes.module.js.map

/***/ }),

/***/ "../../../../../src/app/+usuarios/+agentes/agentes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agentes_component__ = __webpack_require__("../../../../../src/app/+usuarios/+agentes/agentes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agente_form_agente_form_component__ = __webpack_require__("../../../../../src/app/+usuarios/+agentes/agente-form/agente-form.component.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__agentes_component__["a" /* AgentesComponent */],
        data: { pageTitle: '' }
    },
    {
        path: 'crear',
        component: __WEBPACK_IMPORTED_MODULE_2__agente_form_agente_form_component__["a" /* AgenteFormComponent */],
        data: { pageTitle: 'Crear Agente' }
    },
    {
        path: 'editar/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__agente_form_agente_form_component__["a" /* AgenteFormComponent */],
        data: {
            pageTitle: 'Editar Agente'
        }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=agentes.routing.js.map

/***/ }),

/***/ "../../../../../src/app/+usuarios/+agentes/detalle/detalle-agente.component.html":
/***/ (function(module, exports) {

module.exports = "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n    <tbody><tr>\n        <td style=\"width:100px\"><b>Nombre:</b></td>\n        <td>{{data.nombre}}</td>\n    </tr>\n    <tr>\n        <td><b>Email:</b></td>\n        <td>{{data.email}}</td>\n    </tr>\n    <tr>\n        <td><b>Celular:</b></td>\n        <td>{{data.celular}}</td>\n    </tr>\n    <tr>\n        <td><b>Creado:</b></td>\n        <td>{{data.creado | date:\"dd-MM-yy\" }}</td>\n    </tr>\n    <tr>\n        <td><b>Modificado:</b></td>\n        <td>\n            {{data.modificado | date:\"dd-MM-yy\" }}\n            <button (click)=\"Desactivar(data)\" class=\"btn btn-xs btn-danger pull-right\" style=\"margin-left:5px\">Desactivar</button>\n            <button (click)=\"Editar(data)\" class=\"btn btn-xs btn-success pull-right\">Editar</button>\n        </td>\n    </tr></tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/+usuarios/+agentes/detalle/detalle-agente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleAgenteComponent; });
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


var DetalleAgenteComponent = (function () {
    function DetalleAgenteComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    DetalleAgenteComponent.prototype.Detalle = function (data) {
        this.router.navigate(['detalle', data._id], { relativeTo: this.route });
    };
    DetalleAgenteComponent.prototype.Editar = function (data) {
        this.router.navigate(['editar', data._id], { relativeTo: this.route });
    };
    DetalleAgenteComponent.prototype.Desactivar = function (data) {
        this.router.navigate(['desactivar', data._id], { relativeTo: this.route });
    };
    return DetalleAgenteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DetalleAgenteComponent.prototype, "data", void 0);
DetalleAgenteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/+usuarios/+agentes/detalle/detalle-agente.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], DetalleAgenteComponent);

var _a, _b;
//# sourceMappingURL=detalle-agente.component.js.map

/***/ })

});
//# sourceMappingURL=agentes.module.chunk.js.map
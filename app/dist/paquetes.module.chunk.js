webpackJsonp(["paquetes.module"],{

/***/ "../../../../../src/app/+itinerarios/+paquetes/detalle/detalle-paquete.component.html":
/***/ (function(module, exports) {

module.exports = "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n    <tbody><tr>\n        <td style=\"width:100px\"><b>Idiomas:</b></td>\n        <td>{{data.langCodes.join(', ')}}</td>\n    </tr>\n    <tr>\n        <td><b>Título:</b></td>\n        <td>{{data.titulo[0]}}</td>\n    </tr>\n    <tr>\n        <td><b>Descripción:</b></td>\n        <td>{{data.desc[0]}}</td>\n    </tr>\n    <tr>\n        <td><b>Creado:</b></td>\n        <td>{{data.creado | date:\"dd-MM-yy\" }}</td>\n    </tr>\n    <tr>\n        <td><b>Modificado:</b></td>\n        <td>\n            {{data.modificado | date:\"dd-MM-yy\" }}\n            <!-- <button (click)=\"Desactivar(data)\" class=\"btn btn-xs btn-danger pull-right\" style=\"margin-left:5px\">Desactivar</button> -->\n            <button (click)=\"Editar(data)\" class=\"btn btn-xs btn-success pull-right\">Editar</button>\n        </td>\n    </tr></tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+paquetes/detalle/detalle-paquete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallePaqueteComponent; });
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


var DetallePaqueteComponent = (function () {
    function DetallePaqueteComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    DetallePaqueteComponent.prototype.Detalle = function (data) {
        this.router.navigate(['detalle', data._id], { relativeTo: this.route });
    };
    DetallePaqueteComponent.prototype.Editar = function (data) {
        this.router.navigate(['editar', data._id], { relativeTo: this.route });
    };
    DetallePaqueteComponent.prototype.Desactivar = function (data) {
        this.router.navigate(['desactivar', data._id], { relativeTo: this.route });
    };
    return DetallePaqueteComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DetallePaqueteComponent.prototype, "data", void 0);
DetallePaqueteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/detalle/detalle-paquete.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], DetallePaqueteComponent);

var _a, _b;
//# sourceMappingURL=detalle-paquete.component.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+paquetes/paquete-form/paquete-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Paquete', mode]\" icon=\"calendar\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget color=\"darken\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-hashtag\"></i> </span>\n            <h2>ID: {{paquete._id}}</h2>\n          </header>\n          <div class=\"widget-body\">\n            <form-container\n              (onValidationSuccess)=\"onValidationSuccess($event)\"\n              [validatorOptions]=\"validationOptions\"\n            >\n              <fieldset>\n                  <legend>Contenido</legend>\n\n                  <div class=\"form-group\">\n                    <div class=\"col-md-10 col-md-push-2\">\n                        <div class=\"btn-group\" data-toggle=\"buttons\">\n                          <label\n                            class=\"btn btn-default btn-xs\"\n                            *ngFor=\"let lang of langCodes;\"\n                            [saToggleActive]=\"lang.code == selectedLang\">\n                            <input  type=\"radio\"\n                                    (click)=\"setLang(lang.code)\"\n                                    [checked]=\"lang.code == selectedLang\"\n                                    name=\"selectedLang\"> {{ lang.label }}\n                          </label>\n                        </div>\n                    </div>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label class=\"col-md-2 control-label\">Titulo*</label>\n                      <div class=\"col-md-4\">\n                        <input [(ngModel)]=\"paquete[selectedLang].titulo\" name=\"titulo\" required class=\"form-control\" type=\"text\">\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <label class=\"col-md-2 control-label\">Descripción</label>\n                      <div class=\"col-md-4\">\n                        <textarea [(ngModel)]=\"paquete[selectedLang].desc\" name=\"desc\" class=\"form-control\" rows=\"3\"></textarea>\n                      </div>\n                  </div>\n\n              </fieldset>\n\n              <div class=\"form-actions\">\n                <div class=\"row\">\n                  <div class=\"col-md-12\">\n                    <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.back();\">Regresar</button>\n                    <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n                  </div>\n                </div>\n              </div>\n            </form-container>\n          </div>\n        </sa-widget>\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+paquetes/paquete-form/paquete-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaqueteFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_paquetes_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/paquetes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_multilanguages_utils__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/multilanguages.utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaqueteFormComponent = (function () {
    function PaqueteFormComponent(router, route, paquetesService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.paquetesService = paquetesService;
        this.selectedLang = 'es';
        this.langCodes = [{ code: 'es', label: 'Español' }, { code: 'en', label: 'Inglés' }];
        this.paquete = {};
        this.validationOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                titulo: {
                    validators: {
                        notEmpty: {
                            message: 'Titulo en cada idioma requerido'
                        }
                    }
                }
            }
        };
        this.langCodes.map(function (lang) { return _this.paquete[lang.code] = {}; });
        this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
    }
    PaqueteFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.render(params.hasOwnProperty('id') ? params['id'] : false);
        });
    };
    PaqueteFormComponent.prototype.onValidationSuccess = function (e) {
        if (e.type === 'success') {
            this.save(this.paquete);
        }
    };
    PaqueteFormComponent.prototype.render = function (id) {
        var _this = this;
        if (id === void 0) { id = false; }
        if (id) {
            this.paquetesService.getPaquete(id).subscribe(function (data) {
                if (data.success) {
                    var paquete = data.result;
                    _this.paquete = __WEBPACK_IMPORTED_MODULE_3__shared_multilanguages_utils__["a" /* multilanguageUtils */].storeToMultilanguage(paquete, _this.langCodes);
                }
            });
        }
    };
    PaqueteFormComponent.prototype.save = function (paquete) {
        var _this = this;
        if (paquete) {
            var newPaquete = __WEBPACK_IMPORTED_MODULE_3__shared_multilanguages_utils__["a" /* multilanguageUtils */].multiLanguageToStore(paquete, this.langCodes);
            if (!newPaquete.hasOwnProperty('_id')) {
                this.paquetesService.createPaquete(newPaquete).subscribe(function (savedPaquete) {
                    _this.router.navigate(['itinerarios', 'paquetes']);
                });
            }
            else {
                this.paquetesService.updatePaquete(newPaquete).subscribe(function (savedPaquete) {
                    _this.router.navigate(['itinerarios', 'paquetes']);
                });
            }
        }
    };
    PaqueteFormComponent.prototype.setLang = function (lang) {
        this.selectedLang = lang;
        // const bootstrapValidator = this.getFormValidator();
        // bootstrapValidator.validate();
    };
    return PaqueteFormComponent;
}());
PaqueteFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paquete-form',
        template: __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/paquete-form/paquete-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_paquetes_service__["a" /* PaquetesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_paquetes_service__["a" /* PaquetesService */]) === "function" && _c || Object])
], PaqueteFormComponent);

var _a, _b, _c;
//# sourceMappingURL=paquete-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+paquetes/paquetes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Paquetes']\" icon=\"cube\"\n        class=\"col-xs-10 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <div class=\"col-xs-2 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-6\">\n      <a routerLink=\"./crear\" class=\"btn btn-primary btn-lg pull-right\">Crear Paquete</a>\n    </div>\n  </div>  \n  \n  <sa-widgets-grid>\n    \n      <div class=\"row\">\n        <article class=\"col-sm-12\">\n\n          <sa-widget color=\"darken\">\n            <div>\n              <div class=\"widget-body no-padding\">\n                <sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \n                  [paginationLength]=\"true\" tableClass=\"table table-striped table-bordered table-hover\">\n                  <thead>\n                    <tr>\n                      <th [style.width]=\"'4%'\"></th>\n                      <th>\n                        <i class=\"fa fa-fw fa-cube text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Título\n                      </th>\n                      <th>\n                        <i class=\"fa fa-fw fa-flag text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Idiomas\n                      </th>\n                      <th [style.width]=\"'8%'\" data-hide=\"mobile-p\">\n                        <i class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Creado\n                      </th>\n                      <th [style.width]=\"'2%'\" data-hide=\"mobile-p\">Editar</th>\n                    </tr>\n                  </thead>                  \n                  <tbody *ngIf=\"itemsObs | async as items; else loading\">\n                    <ng-container *ngFor=\"let item of items; let last = last\"\n                      sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\n                      <tr>\n                        <td id=\"{{ item._id }}\" class=\"details-control\"></td>\n                        <td>{{ item.titulo[0] }}</td>\n                        <td>{{ item.langCodes.join(', ') }}</td>\n                        <td [attr.data-order]=\"item.creado | moment:'x'\">{{ item.creado | date:\"dd-MM-yy\" }}</td>\n                        <td class=\"text-center\">\n                            <a (click)=\"Editar(item)\">\n                              <i class=\"fa fa-lg fa-fw fa-pencil\"></i>\n                            </a>\n                        </td>\n                      </tr>\n                      <sa-dt-detalle [data]=\"item\" [type]=\"dcomp\" [trigger]=\"item._id\" [cols]=\"5\"></sa-dt-detalle>\n                    </ng-container>\n                  </tbody>\n                  <ng-template #loading>\n                    <tr class=\"odd\">\n                      <td valign=\"top\" colspan=\"9\" class=\"dataTables_empty\">\n                        Cargando datos...\n                      </td>\n                    </tr>\n                  </ng-template>\n                </sa-datatable>\n              </div>\n            </div>\n          </sa-widget>\n        \n        </article>\n    </div>\n\n  </sa-widgets-grid>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+paquetes/paquetes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaquetesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_paquetes_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/paquetes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detalle_detalle_paquete_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/detalle/detalle-paquete.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaquetesComponent = (function () {
    function PaquetesComponent(route, router, paquetesService) {
        this.route = route;
        this.router = router;
        this.paquetesService = paquetesService;
        this.itemsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dcomp = __WEBPACK_IMPORTED_MODULE_6__detalle_detalle_paquete_component__["a" /* DetallePaqueteComponent */];
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
    PaquetesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paquetesService.getPaquetes().subscribe(function (data) {
            _this.itemsObs.next(data.result);
        });
    };
    PaquetesComponent.prototype.Editar = function (data) {
        this.router.navigate(['editar', data._id], { relativeTo: this.route });
    };
    return PaquetesComponent;
}());
PaquetesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paquetes',
        template: __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/paquetes.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_paquetes_service__["a" /* PaquetesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_paquetes_service__["a" /* PaquetesService */]) === "function" && _c || Object])
], PaquetesComponent);

var _a, _b, _c;
//# sourceMappingURL=paquetes.component.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+paquetes/paquetes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaquetesModule", function() { return PaquetesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_form_container_form_container_module__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/form-container/form-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_forms_validation_smartadmin_validation_module__ = __webpack_require__("../../../../../src/app/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paquetes_routing__ = __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/paquetes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__paquetes_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/paquetes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detalle_detalle_paquete_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/detalle/detalle-paquete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__paquete_form_paquete_form_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/paquete-form/paquete-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_paquetes_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/paquetes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PaquetesModule = (function () {
    function PaquetesModule() {
    }
    return PaquetesModule;
}());
PaquetesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__paquetes_component__["a" /* PaquetesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__detalle_detalle_paquete_component__["a" /* DetallePaqueteComponent */],
            __WEBPACK_IMPORTED_MODULE_9__paquete_form_paquete_form_component__["a" /* PaqueteFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_6__paquetes_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_form_container_form_container_module__["a" /* FormContainerModule */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_8__detalle_detalle_paquete_component__["a" /* DetallePaqueteComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__shared_paquetes_service__["a" /* PaquetesService */]
        ]
    })
], PaquetesModule);

//# sourceMappingURL=paquetes.module.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+paquetes/paquetes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paquetes_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/paquetes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paquete_form_paquete_form_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+paquetes/paquete-form/paquete-form.component.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__paquetes_component__["a" /* PaquetesComponent */],
        data: { pageTitle: '' }
    },
    {
        path: 'crear',
        component: __WEBPACK_IMPORTED_MODULE_2__paquete_form_paquete_form_component__["a" /* PaqueteFormComponent */],
        data: { pageTitle: 'Crear Paquete' }
    },
    {
        path: 'editar/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__paquete_form_paquete_form_component__["a" /* PaqueteFormComponent */],
        data: { pageTitle: 'Editar Paquete' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=paquetes.routing.js.map

/***/ })

});
//# sourceMappingURL=paquetes.module.chunk.js.map
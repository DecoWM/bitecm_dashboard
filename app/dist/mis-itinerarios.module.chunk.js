webpackJsonp(["mis-itinerarios.module"],{

/***/ "../../../../../src/app/+itinerarios/+mis-itinerarios/detalle/detalle-itinerario.component.html":
/***/ (function(module, exports) {

module.exports = "<table cell-padding=\"5\" cell-spacing=\"0\" border=\"0\" class=\"table table-hover table-condensed\">\n    <tbody><tr>\n        <td style=\"width:100px\"><b>Paquete:</b></td>\n        <td>{{data.paquete?.titulo[0]}}</td>\n    </tr>\n    <tr>\n        <td><b>Voucher:</b></td>\n        <td>{{data.voucher}}</td>\n    </tr>\n    <tr>\n        <td><b>PIN:</b></td>\n        <td>{{data.pin}}</td>\n    </tr>\n    <tr>\n        <td><b>Participantes:</b></td>\n        <td>{{data.participantes.join(', ')}}</td>\n    </tr>\n    <tr>\n        <td><b>Creado:</b></td>\n        <td>{{data.creado | date:\"dd-MM-yy\" }}</td>\n    </tr>\n    <tr>\n        <td><b>Modificado:</b></td>\n        <td>{{data.modificado | date:\"dd-MM-yy\" }}</td>\n    </tr>\n    <tr>\n        <td><b>Actividades:</b></td>\n        <td>\n            <button (click)=\"Actividades(data)\" class=\"btn btn-xs btn-primary\">Ver Actividades</button>\n            <!-- <button (click)=\"Desactivar(data)\" class=\"btn btn-xs btn-danger pull-right\" style=\"margin-left:5px\">Desactivar</button> -->\n            <button (click)=\"Editar(data)\" class=\"btn btn-xs btn-success pull-right\">Editar</button>\n        </td>\n    </tr></tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+mis-itinerarios/detalle/detalle-itinerario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleItinerarioComponent; });
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


var DetalleItinerarioComponent = (function () {
    function DetalleItinerarioComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    DetalleItinerarioComponent.prototype.Actividades = function (data) {
        this.router.navigate([data._id, 'actividades'], { relativeTo: this.route });
    };
    DetalleItinerarioComponent.prototype.Editar = function (data) {
        this.router.navigate(['editar', data._id], { relativeTo: this.route });
    };
    DetalleItinerarioComponent.prototype.Desactivar = function (data) {
        this.router.navigate(['desactivar', data._id], { relativeTo: this.route });
    };
    return DetalleItinerarioComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DetalleItinerarioComponent.prototype, "data", void 0);
DetalleItinerarioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/detalle/detalle-itinerario.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], DetalleItinerarioComponent);

var _a, _b;
//# sourceMappingURL=detalle-itinerario.component.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+mis-itinerarios/itinerario-form/itinerario-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\" *ngIf=\"blockContent | async\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Mis Itinerarios', mode]\" icon=\"calendar\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  <sa-widgets-grid>\n    <!-- row -->\n    <div class=\"row\">\n      <!-- NEW WIDGET START -->\n      <article class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n        <!-- Widget ID (each widget will need unique ID)-->\n        <sa-widget color=\"darken\">\n          <header>\n            <span class=\"widget-icon\"> <i class=\"fa fa-hashtag\"></i> </span>\n            <h2>ID: {{itinerario._id}}</h2>\n          </header>\n          <div class=\"widget-body\">\n            <form-container\n              (onValidationSuccess)=\"onValidationSuccess($event)\"\n              [validatorOptions]=\"validationOptions\"\n            >\n              <fieldset>\n                <legend>Detalles Itinerario</legend>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">PIN*</label>\n                  <div class=\"col-md-4\">\n                    <input [(ngModel)]=\"itinerario.pin\" name=\"pin\" readonly class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Idioma*</label>\n                  <div class=\"col-md-4\">\n                      <select\n                        [(ngModel)]=\"itinerario.langCode\"\n                        required class=\"form-control\"\n                      >\n                        <option *ngFor=\"let lang of langCodes\" [ngValue]=\"lang.code\">{{lang.label}}</option>\n                      </select>\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Fecha de inicio*</label>\n                  <div class=\"col-md-4\">\n                    <input\n                      [(ngModel)]=\"fecha_inicio\" name=\"fecha_inicio\" required class=\"form-control\" type=\"text\"\n                      (onSmartDatepickerChange)=\"onDateChange($event)\"\n                      [saUiDatepicker]=\"{ dateFormat: 'dd/mm/yy'}\"\n                    >\n                  </div>\n                </div>\n                <!-- <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Fecha de fin*</label>\n                  <div class=\"col-md-4\">\n                    <input\n                      [(ngModel)]=\"fecha_fin\" name=\"fecha_fin\" required class=\"form-control\" type=\"text\"\n                      (onSmartDatepickerChange)=\"onDateChange($event)\"\n                      [saUiDatepicker]=\"{ dateFormat: 'dd/mm/yy'}\"\n                    >\n                  </div>\n                </div> -->\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Paquete*</label>\n                    <div class=\"col-md-4\">\n                      <select\n                        name=\"paquete\"\n                        required class=\"form-control\"\n                        select2 data-select-search=\"true\"\n                        [smartSelect2Options]=\"{placeholder: 'Selecciona un paquete'}\"\n                        [smartSelect2Selected]=\"itinerario.paquete?._id\"\n                        (onSmartSelect2Select)=\"onSelectChange($event)\"\n                      >\n                        <option *ngFor=\"let paquete of paquetes\" [attr.value]=\"paquete._id\">{{paquete.titulo | itinerariosTranslate:itinerario.langCode:paquete.langCodes}}</option>\n                      </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Subagencia*</label>\n                    <div class=\"col-md-4\">\n                        <select\n                          name=\"subagencia\"\n                          required class=\"form-control\"\n                          select2 data-select-search=\"true\"\n                          [smartSelect2Options]=\"{placeholder: 'Selecciona una Subagencia'}\"\n                          [smartSelect2Selected]=\"itinerario.subagencia?._id\"\n                          (onSmartSelect2Select)=\"onSelectChange($event)\"\n                        >\n                          <option *ngFor=\"let subagencia of subagencias\" [attr.value]=\"subagencia._id\">{{subagencia.nombre}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Cliente</label>\n                  <div class=\"col-md-4\"  >\n                    <input [(ngModel)]=\"nombreCliente\" name=\"cliente\" class=\"form-control\" type=\"text\" readonly>\n                  </div>\n                </div>\n                <!-- <div class=\"form-group\">\n                    <label class=\"col-md-2 control-label\">Cliente*</label>\n                    <div class=\"col-md-4\">\n                        <select\n                          name=\"cliente\"\n                          required class=\"form-control\"\n                          select2 data-select-search=\"true\"\n                          [smartSelect2Options]=\"{placeholder: 'Selecciona un Cliente'}\"\n                          [smartSelect2Selected]=\"itinerario.cliente?._id\"\n                          (onSmartSelect2Select)=\"onSelectChange($event)\"\n                        >\n                          <option *ngFor=\"let cliente of clientes\" [attr.value]=\"cliente._id\">{{cliente.nombre}}</option>\n                        </select>\n                    </div>\n                </div> -->\n                <div class=\"form-group\">\n                  <label class=\"col-md-2 control-label\">Voucher</label>\n                  <div class=\"col-md-4\">\n                    <input style=\"text-transform:uppercase;\" [(ngModel)]=\"itinerario.voucher\" name=\"voucher\" class=\"form-control\" type=\"text\">\n                  </div>\n                </div>\n            </fieldset>\n            <fieldset>\n              <legend>Participantes</legend>\n              <div class=\"form-group\">\n                  <ol class=\"col-md-4 col-md-push-2 participantes-list\">\n                    <li *ngFor=\"let participante of participantes; index as i\">\n                        <div class=\"input-group\">\n                          <input [(ngModel)]=\"itinerario.participantes[i]\" class=\"form-control\" type=\"text\">\n                          <span class=\"input-group-btn\">\n                            <button class=\"btn btn-danger\" (click)=\"removeParticipante(i)\" type=\"button\">Quitar</button>\n                          </span>\n                        </div>\n                    </li>\n                    <li>\n                      <div class=\"input-group\">\n                        <input placeholder=\"Ingresa un nuevo nombre\" class=\"form-control\" type=\"text\"\n                        #nuevoParticipante (keyup.enter)=\"addParticipante(nuevoParticipante, $event)\">\n                        <span class=\"input-group-btn\">\n                            <button class=\"btn btn-primary\" (click)=\"addParticipante(nuevoParticipante)\" type=\"button\">Agregar</button>\n                        </span>\n                      </div>\n                    </li>\n                  </ol>\n              </div>\n            </fieldset>\n            <div class=\"form-actions\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <button type=\"button\" class=\"btn btn-default\" onclick=\"window.history.back();\">Regresar</button>\n                  <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n                </div>\n              </div>\n            </div>\n          </form-container>\n        </div>\n      </sa-widget>\n        <!-- end widget -->\n      </article>\n      <!-- WIDGET END -->\n    </div>\n    <!-- end row -->\n  </sa-widgets-grid>\n  <!-- end widget grid -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+mis-itinerarios/itinerario-form/itinerario-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItinerarioFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_itinerarios_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/itinerarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agencia_shared_subagencias_service__ = __webpack_require__("../../../../../src/app/+agencia/shared/subagencias.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__usuarios_shared_clientes_service__ = __webpack_require__("../../../../../src/app/+usuarios/shared/clientes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_paquetes_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/paquetes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
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









var ItinerarioFormComponent = (function () {
    function ItinerarioFormComponent(router, route, itinerarioService, paquetesService, usuariosService, subAgenciasService) {
        this.router = router;
        this.route = route;
        this.itinerarioService = itinerarioService;
        this.paquetesService = paquetesService;
        this.usuariosService = usuariosService;
        this.subAgenciasService = subAgenciasService;
        this.blockContent = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__["Subject"]();
        this.langCodes = [{ code: 'es', label: 'Español' }, { code: 'en', label: 'Inglés' }];
        this.itinerario = { langCode: 'es', participantes: [] };
        this.participantes = [];
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
        this.fecha_inicio = this.itinerarioService.fromISOToSimpleDate((new Date()).toISOString());
        this.fecha_fin = this.itinerarioService.fromISOToSimpleDate((new Date()).toISOString());
        this.mode = this.route.snapshot.params.id ? 'Editar' : 'Crear';
    }
    ItinerarioFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockUI.start();
        __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__["Observable"].zip(this.paquetesService.getPaquetes(), this.usuariosService.getClientes(), this.subAgenciasService.getSubagencias(), this.route.params).subscribe(function (_a) {
            var d_paquetes = _a[0], d_clientes = _a[1], d_subagencias = _a[2], params = _a[3];
            _this.paquetes = d_paquetes.result;
            _this.clientes = d_clientes.result;
            _this.subagencias = d_subagencias.result;
            _this.render(params.hasOwnProperty('id') ? params['id'] : false);
        });
    };
    ItinerarioFormComponent.prototype.onSelectChange = function (event) {
        var data = event.params.data;
        var inputName = event.currentTarget.name;
        this.itinerario[inputName] = data.id;
    };
    ItinerarioFormComponent.prototype.onDateChange = function (event) {
        this[event.currentTarget.name] = event.data;
        this.itinerario[event.currentTarget.name] = this.itinerarioService.fromSimpleDateToISO(event.data);
    };
    ItinerarioFormComponent.prototype.onValidationSuccess = function (e) {
        if (e.type === 'success') {
            this.save(this.itinerario);
        }
    };
    ItinerarioFormComponent.prototype.render = function (id) {
        var _this = this;
        if (id === void 0) { id = false; }
        if (id) {
            this.itinerarioService.getItinerario(id)
                .subscribe(function (data) {
                if (data.success) {
                    var itinerario = data.result;
                    _this.itinerario = itinerario;
                    if (itinerario.cliente) {
                        _this.nombreCliente = itinerario.cliente.nombre;
                    }
                    _this.fecha_inicio = _this.itinerarioService.fromISOToSimpleDate(itinerario.fecha_inicio);
                    _this.fecha_fin = _this.itinerarioService.fromISOToSimpleDate(itinerario.fecha_fin);
                    _this.participantes = _this.itinerario['participantes'].map(function (e, i) { return i; });
                }
                _this.blockUI.stop();
                _this.blockContent.next(true);
            });
        }
        else {
            /* this.itinerario['pin'] = this.itinerarioService.generateUID(); */
            this.blockUI.stop();
            this.blockContent.next(true);
        }
    };
    ItinerarioFormComponent.prototype.addParticipante = function (nameObj, event) {
        if (event === void 0) { event = null; }
        if (event) {
            event.preventDefault();
        }
        if (Array.isArray(this.itinerario.participantes)) {
            this.itinerario.participantes.push(nameObj.value);
            this.participantes.push(this.itinerario.participantes.length);
            nameObj.value = '';
        }
    };
    ItinerarioFormComponent.prototype.removeParticipante = function (index) {
        if (Array.isArray(this.itinerario['participantes']) && this.itinerario['participantes'].length > 0) {
            this.itinerario['participantes'].splice(index, 1);
            this.participantes.splice(index, 1);
        }
    };
    ItinerarioFormComponent.prototype.save = function (itinerario) {
        var _this = this;
        if (itinerario) {
            var newItinerario = __assign({}, itinerario);
            newItinerario.voucher = newItinerario.voucher.toUpperCase();
            newItinerario['pin'] = this.itinerarioService.generateUID();
            newItinerario['fecha_inicio'] = this.itinerarioService.fromSimpleDateToISO(this.fecha_inicio);
            /* newItinerario['fecha_fin'] = this.itinerarioService.fromSimpleDateToISO(this.fecha_fin); */
            console.log(newItinerario);
            if (!newItinerario.hasOwnProperty('_id')) {
                this.itinerarioService.createItinerario(newItinerario).subscribe(function (message) {
                    _this.router.navigate(['itinerarios', 'mis-itinerarios']);
                });
            }
            else {
                this.itinerarioService.updateItinerario(newItinerario).subscribe(function (message) {
                    _this.router.navigate(['itinerarios', 'mis-itinerarios']);
                });
            }
        }
    };
    return ItinerarioFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUI"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["NgBlockUI"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["NgBlockUI"]) === "function" && _a || Object)
], ItinerarioFormComponent.prototype, "blockUI", void 0);
ItinerarioFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-itinerario-form',
        template: __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/itinerario-form/itinerario-form.component.html"),
        styles: ["\n    .participantes-list{ list-style: none; }\n    .participantes-list li{ padding-bottom: 5px; }\n  "]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_itinerarios_service__["a" /* ItinerariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_itinerarios_service__["a" /* ItinerariosService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_paquetes_service__["a" /* PaquetesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_paquetes_service__["a" /* PaquetesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__usuarios_shared_clientes_service__["a" /* ClientesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__usuarios_shared_clientes_service__["a" /* ClientesService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__agencia_shared_subagencias_service__["a" /* SubAgenciasService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__agencia_shared_subagencias_service__["a" /* SubAgenciasService */]) === "function" && _g || Object])
], ItinerarioFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=itinerario-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+mis-itinerarios/mis-itinerarios.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Mis Itinerarios']\" icon=\"table\"\n        class=\"col-xs-10 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <div class=\"col-xs-2 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-6\">\n      <a routerLink=\"./crear\" class=\"btn btn-primary btn-lg pull-right\">Crear Itinerario</a>\n    </div>\n  </div>  \n  \n  <sa-widgets-grid>\n    \n      <div class=\"row\">\n        <article class=\"col-sm-12\">\n\n          <sa-widget color=\"darken\">\n            <div>\n              <div class=\"widget-body no-padding\">\n                <sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \n                  [paginationLength]=\"true\" tableClass=\"table table-striped table-bordered table-hover\">                  \n                  <thead>\n                    <tr>\n                      <th></th>\n                      <th [style.width]=\"'10%'\">\n                        <i class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Empieza\n                      </th>\n                      <th [style.width]=\"'10%'\">\n                        <i class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Termina\n                      </th>\n                      <th>\n                        <i class=\"fa fa-fw fa-cube text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Paquete\n                      </th>\n                      <th>\n                        <i class=\"fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Cliente\n                      </th>\n                      <th>\n                        <i class=\"fa fa-fw fa-user text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Agente\n                      </th>\n                      <th [style.width]=\"'10%'\">\n                        <i class=\"fa fa-fw fa-building text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Subagencia\n                      </th>\n                      <th [style.width]=\"'8%'\" data-hide=\"mobile-p\">\n                        <i class=\"fa fa-fw fa-calendar text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        Creado\n                      </th>\n                      <th [style.width]=\"'8%'\" data-hide=\"mobile-p\">\n                        <i class=\"fa fa-fw fa-hashtag text-muted hidden-md hidden-sm hidden-xs\"></i>\n                        PIN\n                      </th>\n                      <!--th [style.width]=\"'8%'\" data-hide=\"mobile-p\">Nro. Actividades</th-->\n                      <th [style.width]=\"'2%'\" data-hide=\"mobile-p\">Editar</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngIf=\"itemsObs | async as items; else loading\">\n                    <ng-container *ngFor=\"let item of items; let last = last\" \n                      sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\n                      <tr>\n                        <td id=\"{{ item._id }}\" class=\"details-control\">\n                        </td>\n                        <td [attr.data-order]=\"item.fecha_inicio | moment:'x'\">{{ item.fecha_inicio | date:\"dd-MM-yy\" }}</td>\n                        <td [attr.data-order]=\"item.fecha_fin | moment:'x'\">{{ item.fecha_fin | date:\"dd-MM-yy\" }}</td>\n                        <td>{{ item.paquete?.titulo[0] }}</td>\n                        <td>{{ item.cliente?.nombre }}</td>\n                        <td>{{ item.agente?.nombre }}</td>\n                        <td>{{ item.subagencia?.nombre }}</td>\n                        <td [attr.data-order]=\"item.creado | moment:'x'\">{{ item.creado | date:\"dd-MM-yy\" }}</td>\n                        <td>{{ item.pin }}</td>\n                        <td class=\"text-center\">\n                            <a (click)=\"Editar(item)\">\n                              <i class=\"fa fa-lg fa-fw fa-pencil\"></i>\n                            </a>\n                        </td>\n                      </tr>\n                      <sa-dt-detalle [data]=\"item\" [type]=\"dcomp\" [trigger]=\"item._id\" [cols]=\"10\"></sa-dt-detalle>\n                    </ng-container>                    \n                  </tbody>\n                  <ng-template #loading>\n                    <tr class=\"odd\">\n                      <td valign=\"top\" colspan=\"10\" class=\"dataTables_empty\">\n                        {{ loadingStatus }}\n                      </td>\n                    </tr>\n                  </ng-template>\n                  <!--tfoot>\n                    <tr>\n                      <th></th>\n                      <th>Fecha Inicio</th>\n                      <th>Fecha Fin</th>\n                      <th>Paquete</th>\n                      <th>Cliente</th>\n                      <th>Agente</th>\n                      <th>Subagencia</th>\n                      <th>Creado</th>\n                      <th>Editar</th>\n                    </tr>\n                  </tfoot-->\n                </sa-datatable>\n\n              </div>\n            </div>\n          </sa-widget>\n        \n        </article>\n    </div>\n\n  </sa-widgets-grid>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+mis-itinerarios/mis-itinerarios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisItinerariosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_itinerarios_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/itinerarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detalle_detalle_itinerario_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/detalle/detalle-itinerario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MisItinerariosComponent = (function () {
    function MisItinerariosComponent(route, router, itinerariosService, blockui) {
        this.route = route;
        this.router = router;
        this.itinerariosService = itinerariosService;
        this.blockui = blockui;
        this.itemsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dcomp = __WEBPACK_IMPORTED_MODULE_6__detalle_detalle_itinerario_component__["a" /* DetalleItinerarioComponent */];
        this.options = {
            dom: 'Bfrtip',
            columnDefs: [{
                    targets: [0, 8],
                    orderable: false
                }],
            order: [[7, 'desc']],
            colReorder: true
        };
        this.loadingStatus = 'Cargando datos...';
    }
    MisItinerariosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockui.start('content');
        this.itinerariosService.getItinerarios()
            .subscribe(function (data) {
            _this.blockui.stop('content');
            var items = data.result;
            _this.itemsObs.next(items);
            if (items.length === 0) {
                _this.loadingStatus = 'No se encontraron registros';
            }
        }, function (error) {
            _this.blockui.stop('content');
            if (error.status === 401) {
                // this.authService.logout(true);
            }
        });
    };
    MisItinerariosComponent.prototype.Editar = function (data) {
        this.router.navigate(['editar', data._id], { relativeTo: this.route });
    };
    return MisItinerariosComponent;
}());
MisItinerariosComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'mis-itinerarios',
        template: __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/mis-itinerarios.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_itinerarios_service__["a" /* ItinerariosService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_itinerarios_service__["a" /* ItinerariosService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"]) === "function" && _d || Object])
], MisItinerariosComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=mis-itinerarios.component.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+mis-itinerarios/mis-itinerarios.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisItinerariosModule", function() { return MisItinerariosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_input_smartadmin_input_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_form_container_form_container_module__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/form-container/form-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_forms_input_select2_select2_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/select2/select2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_itinerarios_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/itinerarios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mis_itinerarios_routing__ = __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/mis-itinerarios.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mis_itinerarios_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/mis-itinerarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detalle_detalle_itinerario_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/detalle/detalle-itinerario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__itinerario_form_itinerario_form_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/itinerario-form/itinerario-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_paquetes_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/paquetes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_predefinidas_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/predefinidas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_actividades_service__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/actividades.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_itinerarios_translate_pipe__ = __webpack_require__("../../../../../src/app/+itinerarios/shared/itinerarios-translate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__agencia_shared_subagencias_service__ = __webpack_require__("../../../../../src/app/+agencia/shared/subagencias.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__usuarios_shared_clientes_service__ = __webpack_require__("../../../../../src/app/+usuarios/shared/clientes.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var MisItinerariosModule = (function () {
    function MisItinerariosModule() {
    }
    return MisItinerariosModule;
}());
MisItinerariosModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__mis_itinerarios_component__["a" /* MisItinerariosComponent */],
            __WEBPACK_IMPORTED_MODULE_9__detalle_detalle_itinerario_component__["a" /* DetalleItinerarioComponent */],
            __WEBPACK_IMPORTED_MODULE_10__itinerario_form_itinerario_form_component__["a" /* ItinerarioFormComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_itinerarios_translate_pipe__["a" /* ItinerariosTranslatePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_form_container_form_container_module__["a" /* FormContainerModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_input_select2_select2_module__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_7__mis_itinerarios_routing__["a" /* routing */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__detalle_detalle_itinerario_component__["a" /* DetalleItinerarioComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__shared_itinerarios_service__["a" /* ItinerariosService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_actividades_service__["a" /* ActividadesService */],
            __WEBPACK_IMPORTED_MODULE_12__shared_predefinidas_service__["a" /* PredefinidasService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_paquetes_service__["a" /* PaquetesService */],
            __WEBPACK_IMPORTED_MODULE_16__usuarios_shared_clientes_service__["a" /* ClientesService */],
            __WEBPACK_IMPORTED_MODULE_15__agencia_shared_subagencias_service__["a" /* SubAgenciasService */]
        ]
    })
], MisItinerariosModule);

//# sourceMappingURL=mis-itinerarios.module.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/+mis-itinerarios/mis-itinerarios.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mis_itinerarios_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/mis-itinerarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__itinerario_form_itinerario_form_component__ = __webpack_require__("../../../../../src/app/+itinerarios/+mis-itinerarios/itinerario-form/itinerario-form.component.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__mis_itinerarios_component__["a" /* MisItinerariosComponent */],
        data: { pageTitle: '' }
    },
    {
        path: 'crear',
        component: __WEBPACK_IMPORTED_MODULE_2__itinerario_form_itinerario_form_component__["a" /* ItinerarioFormComponent */],
        data: { pageTitle: 'Crear Itinerario' }
    },
    {
        path: 'editar/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__itinerario_form_itinerario_form_component__["a" /* ItinerarioFormComponent */],
        data: { pageTitle: 'Editar Itinerario' }
    },
    {
        path: ':itinerario_id/actividades',
        loadChildren: './../+actividades/actividades.module#ActividadesModule',
        data: { pageTitle: 'Actividades del Itinerario' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=mis-itinerarios.routing.js.map

/***/ }),

/***/ "../../../../../src/app/+itinerarios/shared/itinerarios-translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItinerariosTranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ItinerariosTranslatePipe = (function () {
    function ItinerariosTranslatePipe() {
    }
    ItinerariosTranslatePipe.prototype.transform = function (value, args) {
        return value[0];
    };
    return ItinerariosTranslatePipe;
}());
ItinerariosTranslatePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'itinerariosTranslate'
    })
], ItinerariosTranslatePipe);

//# sourceMappingURL=itinerarios-translate.pipe.js.map

/***/ })

});
//# sourceMappingURL=mis-itinerarios.module.chunk.js.map
webpackJsonp(["reportes.module"],{

/***/ "../../../../../src/app/+ventas/+reportes/export/export.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"[' Reportes']\" icon=\"line-chart\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"></sa-big-breadcrumbs>\n  </div>\n\n  <ng-container *ngIf=\"alert\">\n    <alert *ngFor=\"let a of alert\" type=\"{{a.mode}}\" dismissible=\"true\">\n      <i class=\"fa-fw fa fa-{{a.icon}}\"></i>\n      <strong>{{a.title}}</strong> {{a.message}}\n    </alert>\n  </ng-container>\n\n  <sa-widgets-grid>\n    <div class=\"row\">\n      <article>\n        <div class=\"col-sm-12\">\n          <!-- FORM GENERAL SALES -->\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n            <!-- widget div-->\n            <div>\n              <!-- widget content -->\n              <div class=\"no-padding widget-body\">\n                <div class=\"smart-form\">\n                  <div class=\"detalle-order\">\n                    <header>\n                      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\n                      Reporte General de Ventas\n                    </header>\n                    <form #formGeneralSales=\"ngForm\" class=\"smart-form margin-top-10\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onValidationSuccess)=\"exportGeneralSales($event)\" name=\"form-general-sales\">\n                      <div class=\"detalle-registro row padding-row\">\n                        <div class=\"col col-sm-4\">\n                          <div class=\"form-group\">\n                            <label>Fecha de Inicio</label>\n                            <div class=\"input-group\">\n                              <input class=\"form-control\" id=\"begin_date_1\" name=\"begin_date\" [saUiDatepicker]=\"{\n                                dateFormat: 'dd/mm/yy',\n                                defaultDate: '-1w',\n                                changesMonth: true,\n                                numberOfMonth: 3,\n                                minRestrict: '#end_date_1'\n                               }\" type=\"text\" placeholder=\"Fecha de Inicio\">\n                              <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col col-sm-4\">\n                          <div class=\"form-group\">\n                            <label>Fecha de Fin</label>\n                            <div class=\"input-group\">\n                              <input class=\"form-control\" id=\"end_date_1\" name=\"end_date\" [saUiDatepicker]=\"{\n                                dateFormat: 'dd/mm/yy',\n                                defaultDate: 'now',\n                                changesMonth: true,\n                                numberOfMonth: 3,\n                                maxRestrict: '#begin_date_1'\n                               }\" type=\"text\" placeholder=\"Fecha de Fin\">\n                              <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col col-sm-12\">\n                          <div class=\"row\">\n                            <footer>\n                              <div class=\"btn-footer\">\n                                <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Exportar</button>\n                              </div>\n                            </footer>\n                          </div>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </sa-widget>\n          <!-- FORM BEST SELLERS -->\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n            <!-- widget div-->\n            <div>\n              <!-- widget content -->\n              <div class=\"no-padding widget-body\">\n                <div class=\"smart-form\">\n                  <div class=\"detalle-order\">\n                    <header>\n                      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\n                      Reporte de Productos mas Vendidos\n                    </header>\n                    <form #formBestSellers=\"ngForm\" class=\"smart-form margin-top-10\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onValidationSuccess)=\"exportBestSellers($event)\" name=\"form-best-sellers\">\n                      <div class=\"detalle-registro row padding-row\">\n                        <div class=\"col col-sm-4\">\n                          <div class=\"form-group\">\n                            <label>Fecha de Inicio</label>\n                            <div class=\"input-group\">\n                              <input class=\"form-control\" id=\"begin_date_2\" name=\"begin_date\" [saUiDatepicker]=\"{\n                                dateFormat: 'dd/mm/yy',\n                                defaultDate: '-1w',\n                                changesMonth: true,\n                                numberOfMonth: 3,\n                                minRestrict: '#end_date_2'\n                               }\" type=\"text\" placeholder=\"Fecha de Inicio\">\n                              <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col col-sm-4\">\n                          <div class=\"form-group\">\n                            <label>Fecha de Fin</label>\n                            <div class=\"input-group\">\n                              <input class=\"form-control\" id=\"end_date_2\" name=\"end_date\" [saUiDatepicker]=\"{\n                                dateFormat: 'dd/mm/yy',\n                                defaultDate: 'now',\n                                changesMonth: true,\n                                numberOfMonth: 3,\n                                maxRestrict: '#begin_date_2'\n                               }\" type=\"text\" placeholder=\"Fecha de Fin\">\n                              <span class=\"input-group-addon\"><i class=\"fa fa-calendar\"></i></span>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col col-sm-12\">\n                          <div class=\"row\">\n                            <footer>\n                              <div class=\"btn-footer\">\n                                <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Exportar</button>\n                              </div>\n                            </footer>\n                          </div>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </sa-widget>\n        </div>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>"

/***/ }),

/***/ "../../../../../src/app/+ventas/+reportes/export/export.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reportes_service__ = __webpack_require__("../../../../../src/app/+ventas/+reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ExportComponent = (function () {
    function ExportComponent(route, router, blockui, reportesService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.reportesService = reportesService;
        this.notificationService = notificationService;
        this.alert = null;
        this.validationOptions = {
            rules: {
                begin_date: {
                    required: true
                },
                end_date: {
                    required: true
                }
            },
            messages: {
                begin_date: {
                    required: 'Debes seleccionar una fecha de inicio'
                },
                end_date: {
                    required: 'Debes seleccionar una fecha de fin'
                }
            }
        };
    }
    ExportComponent.prototype.ngOnInit = function () {
        this.alert = null;
    };
    ExportComponent.prototype.exportGeneralSales = function (e) {
        var _this = this;
        var formData = new FormData(document.forms.namedItem('form-general-sales'));
        this.reportesService.exportGeneralSales(formData)
            .subscribe(function (data) {
            if (data.success) {
                _this.getAlert(data, 'Reporte General de Ventas');
                var link = document.createElement('a');
                link.href = data.result.file_url;
                link.download = data.result.file_name;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                $(link).remove();
            }
        });
    };
    ExportComponent.prototype.exportBestSellers = function (e) {
        var _this = this;
        var formData = new FormData(document.forms.namedItem('form-best-sellers'));
        this.reportesService.exportBestSellers(formData)
            .subscribe(function (data) {
            if (data.success) {
                _this.getAlert(data, 'Reporte de Productos mas Vendidos');
                var link = document.createElement('a');
                link.href = data.result.file_url;
                link.download = data.result.file_name;
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                $(link).remove();
            }
        });
    };
    ExportComponent.prototype.getAlert = function (data, title_mode) {
        var mode, title, message = '';
        if (data.success) {
            mode = 'success';
            title = 'Reporte exitoso';
            message = title_mode + ': ' + data.result.file_name + ' generado.';
        }
        else {
            mode = 'danger';
            title = 'Reporte fallido';
            message = title_mode + ' no pudo ser generado ';
        }
        this.printAlert({
            'title': title,
            'message': message,
            'mode': mode
        });
    };
    ExportComponent.prototype.printAlert = function (alert) {
        var _this = this;
        if (!alert) {
            alert = [];
        }
        if (alert && !(alert instanceof Array)) {
            alert = [alert];
        }
        alert.map(function (item, ix) {
            switch (item.mode) {
                case 'success':
                    item.icon = 'check';
                    item.color = '#8ac38b';
                    break;
                case 'danger':
                    item.icon = 'warning';
                    item.color = '#c46a69';
                    break;
            }
            return item;
        });
        this.alert = alert;
        this.alert.forEach(function (item, ix) {
            _this.notificationService.smallBox({
                title: item.title,
                content: item.message,
                color: item.color,
                iconSmall: 'fa-fw fa fa-' + item.icon + ' bounce animated',
                timeout: 4000
            });
        });
    };
    return ExportComponent;
}());
ExportComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ventas-reportes-export',
        template: __webpack_require__("../../../../../src/app/+ventas/+reportes/export/export.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__reportes_service__["a" /* ReportesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__reportes_service__["a" /* ReportesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], ExportComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=export.component.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/+reportes/reportes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportesModule", function() { return ReportesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__ = __webpack_require__("../../../../../src/app/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__ = __webpack_require__("../../../../../src/app/shared/forms/custom/form-container/form-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/select2/select2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reportes_service__ = __webpack_require__("../../../../../src/app/+ventas/+reportes/reportes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reportes_routing__ = __webpack_require__("../../../../../src/app/+ventas/+reportes/reportes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__export_export_component__ = __webpack_require__("../../../../../src/app/+ventas/+reportes/export/export.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ReportesModule = (function () {
    function ReportesModule() {
    }
    return ReportesModule;
}());
ReportesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__export_export_component__["a" /* ExportComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__["a" /* FormContainerModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_8__reportes_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__reportes_service__["a" /* ReportesService */]
        ]
    })
], ReportesModule);

//# sourceMappingURL=reportes.module.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/+reportes/reportes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__export_export_component__ = __webpack_require__("../../../../../src/app/+ventas/+reportes/export/export.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__export_export_component__["a" /* ExportComponent */],
        data: { pageTitle: '' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=reportes.routing.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/+reportes/reportes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportesService = (function () {
    function ReportesService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = '/api/admin/ordenes/reportes';
    }
    ReportesService.prototype.exportGeneralSales = function (formData) {
        return this.http
            .post(this.getUrl('general_sales'), formData);
    };
    ReportesService.prototype.exportBestSellers = function (formData) {
        return this.http
            .post(this.getUrl('best_sellers'), formData);
    };
    ReportesService.prototype.getUrl = function (params) {
        if (params === void 0) { params = ''; }
        var urlParts = [this.url];
        if (params.toString().length) {
            if (params instanceof Array) {
                urlParts = urlParts.concat(params);
            }
            else {
                urlParts.push(params);
            }
        }
        return urlParts.join('/');
    };
    return ReportesService;
}());
ReportesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ReportesService);

var _a, _b;
//# sourceMappingURL=reportes.service.js.map

/***/ })

});
//# sourceMappingURL=reportes.module.chunk.js.map
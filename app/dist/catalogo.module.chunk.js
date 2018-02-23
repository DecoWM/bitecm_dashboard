webpackJsonp(["catalogo.module"],{

/***/ "../../../../../src/app/+productos/+catalogo/catalogo.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"row\">\r\n    <sa-big-breadcrumbs [items]=\"['Catálogo']\" icon=\"shopping-cart\"\r\n      class=\"col-xs-10 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\r\n    <div class=\"col-xs-2 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-6\">\r\n      <a routerLink=\"./nuevo\" class=\"btn btn-primary btn-lg pull-right\" style=\"margin: 8px 0px;\">Nuevo Producto</a>\r\n    </div>\r\n  </div>\r\n\r\n  <alert *ngFor=\"let a of alert\" type=\"{{a.mode}}\" dismissible=\"true\">\r\n    <i class=\"fa-fw fa fa-check\"></i>\r\n    <strong>{{a.title}}</strong> {{a.message}}\r\n  </alert>\r\n  \r\n  <sa-widgets-grid>\r\n    \r\n    <div class=\"row\">\r\n      <article class=\"col-sm-12\">\r\n\r\n        <sa-widget class=\"well\" color=\"darken\">\r\n          <div>\r\n            <div class=\"widget-body no-padding\">\r\n              <sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \r\n                [paginationLength]=\"true\" [filter]=\"true\" tableClass=\"table table-striped table-bordered table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <!--th class=\"hasinput\" style=\"width:10%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Nro. Producto\">\r\n                    </th-->\r\n                    <th class=\"hasinput\" style=\"width:12%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Categoría\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:12%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Marca\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:12%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Modelo\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:10%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Prioridad\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:13%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Actualizado\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:13%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Publicado\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:8%\"></th>\r\n                    <th class=\"hasinput\" style=\"width:10%\"></th>\r\n                  </tr>\r\n                  <tr>\r\n                    <!--th data-class=\"expand\" style=\"width:10%\">Nro. Producto</th-->\r\n                    <th style=\"width:13%\">Categoría</th>\r\n                    <th style=\"width:13%\">Marca</th>\r\n                    <th style=\"width:13%\">Modelo</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:11%\">Prioridad</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:15%\">Actualizado</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:15%\">Publicado</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:9%\">Activo</th>\r\n                    <th style=\"width:11%\">Acción</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"itemsObs | async as items; else loading\">\r\n                  <ng-container *ngFor=\"let item of items; let last = last\" \r\n                    sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\r\n                    <tr>\r\n                      <!--td id=\"{{ item.product_id }}\">\r\n                        {{ item.product_id }}\r\n                      </td-->\r\n                      <td>{{ item.category_name }}</td>\r\n                      <td>{{ item.brand_name }}</td>\r\n                      <td>{{ item.product_model }}</td>\r\n                      <td>{{ item.product_priority }}</td>\r\n                      <td [attr.data-order]=\"item.updated_at | moment:'x'\">{{ item.updated_at }}</td>\r\n                      <td [attr.data-order]=\"item.publish_at | moment:'x'\">{{ item.publish_at }}</td>\r\n                      <td [attr.data-order]=\"item.active\">\r\n                        <span *ngIf=\"item.active\" class=\"fa fa-check-circle\" style=\"color: green;\"></span>\r\n                        <span *ngIf=\"!item.active\" class=\"fa fa-minus-circle\" style=\"color: red;\"></span>\r\n                      </td>\r\n                      <td>\r\n                        <div class=\"btn-group dropdown\" dropdown>\r\n                          <button class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\r\n                            <i class=\"fa fa-gear\"></i>\r\n                            <i class=\"fa fa-caret-down\"></i>\r\n                          </button>\r\n                          <ul *dropdownMenu class=\"dropdown-menu\">\r\n                            <li>\r\n                              <a (click)=\"detail(item)\">Editar</a>\r\n                            </li>\r\n                            <li *ngIf=\"!item.active\">\r\n                              <a (click)=\"showPopupPublish(item)\">Publicar</a>\r\n                            </li>\r\n                            <li *ngIf=\"item.active\">\r\n                              <a (click)=\"showPopupUnpublish(item)\">Despublicar</a>\r\n                            </li>\r\n                          </ul>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>                \r\n                </tbody>\r\n                <ng-template #loading>\r\n                  <tr class=\"odd\">\r\n                    <td valign=\"top\" colspan=\"10\" class=\"dataTables_empty\">\r\n                      {{ loadingStatus }}\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </sa-datatable>\r\n            </div>\r\n          </div>\r\n        </sa-widget>\r\n      \r\n      </article>\r\n    </div>\r\n\r\n  </sa-widgets-grid>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/catalogo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatalogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
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








var CatalogoComponent = (function () {
    function CatalogoComponent(route, router, blockui, productService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.productService = productService;
        this.notificationService = notificationService;
        this.itemsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.alert = null;
        this.options = {
            dom: 'Bfrtip',
            pageLength: 25,
            columnDefs: [{
                    targets: [7],
                    orderable: false
                }],
            order: [[4, 'desc']],
        };
        this.loadingStatus = 'Cargando productos...';
    }
    CatalogoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alert = null;
        this.blockui.start('content');
        this.productService.getProducts()
            .subscribe(function (data) {
            console.log(data);
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
    CatalogoComponent.prototype.detail = function (product) {
        this.router.navigate([product.product_id], { relativeTo: this.route });
    };
    CatalogoComponent.prototype.showPopupPublish = function (product) {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class=\"fa fa-sign-out txt-color-orangeDark\"></i> Publicar \n        <span class=\"txt-color-orangeDark\">\n          <strong>" + product.brand_name + " " + product.product_model + "</strong>\n        </span>",
            content: '¿Seguro que quieres publicar este producto? Aparecerá en la tienda para poder ser adquirido.',
            buttons: '[No][Si]'
        }, function (ButtonPressed) {
            if (ButtonPressed === 'Si') {
                _this.publish(product);
            }
        });
    };
    CatalogoComponent.prototype.showPopupUnpublish = function (product) {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class=\"fa fa-sign-out txt-color-orangeDark\"></i> Despublicar \n        <span class=\"txt-color-orangeDark\">\n          <strong>" + product.brand_name + " " + product.product_model + "</strong>\n        </span>",
            content: '¿Seguro que quieres despublicar este producto? Desaparecerá de la tienda y ya no podrá ser adquirido.',
            buttons: '[No][Si]'
        }, function (ButtonPressed) {
            if (ButtonPressed === 'Si') {
                _this.unpublish(product);
            }
        });
    };
    CatalogoComponent.prototype.publish = function (product) {
        var _this = this;
        this.blockui.start('content');
        this.productService.publishProduct(product.product_id)
            .subscribe(function (res) {
            if (res.success) {
                product.active = 1;
                product.updated_at = res.result.updated_at;
                product.publish_at = res.result.publish_at;
                _this.printAlert(_this.getAlertPublish(res, product));
            }
            _this.blockui.stop('content');
        });
    };
    CatalogoComponent.prototype.unpublish = function (product) {
        var _this = this;
        this.blockui.start('content');
        this.productService.unpublishProduct(product.product_id)
            .subscribe(function (res) {
            if (res.success) {
                product.active = 0;
                product.updated_at = res.result.updated_at;
                _this.printAlert(_this.getAlertUnpublish(res, product));
            }
            _this.blockui.stop('content');
        });
    };
    CatalogoComponent.prototype.getAlertPublish = function (result, product) {
        var mode, title, message;
        if (result.success) {
            mode = 'success';
            title = 'Publicación completada';
            message = 'El producto ' + product.brand_name + ' ' + product.product_model + ' ha sido publicado';
        }
        else {
            mode = 'danger';
            title = 'Publicación fallida';
            message = 'El producto ' + product.brand_name + ' ' + product.product_model + ' no pudo ser publicado';
        }
        return {
            'title': title,
            'message': message,
            'mode': mode
        };
    };
    CatalogoComponent.prototype.getAlertUnpublish = function (result, product) {
        var mode, title, message;
        if (result.success) {
            mode = 'success';
            title = 'Despublicación completada';
            message = 'El producto ' + product.brand_name + ' ' + product.product_model + ' ha sido despublicado';
        }
        else {
            mode = 'danger';
            title = 'Despublicación fallida';
            message = 'El producto ' + product.brand_name + ' ' + product.product_model + ' no pudo ser despublicado';
        }
        return {
            'title': title,
            'message': message,
            'mode': mode
        };
    };
    CatalogoComponent.prototype.printAlert = function (alert) {
        if (alert && !(alert instanceof Array)) {
            alert = [alert];
        }
        this.alert = alert;
    };
    return CatalogoComponent;
}());
CatalogoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'catalogo',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/catalogo.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], CatalogoComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=catalogo.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/catalogo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogoModule", function() { return CatalogoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__ = __webpack_require__("../../../../../src/app/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__ = __webpack_require__("../../../../../src/app/shared/forms/custom/form-container/form-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/select2/select2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stockmodel_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__variation_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__catalogo_routing__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/catalogo.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__catalogo_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/catalogo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_product_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_basic_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__product_specs_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product/specs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__stockmodels_stockmodels_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodels/stockmodels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__stockmodels_stockmodel_form_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodels/stockmodel-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__variations_prepago_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/prepago.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__variations_prepago_form_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/prepago-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__variations_postpago_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__variations_postpago_affiliations_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago-affiliations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__variations_postpago_plans_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago-plans.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__variations_postpago_form_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var CatalogoModule = (function () {
    function CatalogoModule() {
    }
    return CatalogoModule;
}());
CatalogoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__catalogo_component__["a" /* CatalogoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_14__product_basic_component__["a" /* ProductBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_15__product_specs_component__["a" /* ProductSpecsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__stockmodels_stockmodels_component__["a" /* StockModelsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__stockmodels_stockmodel_form_component__["a" /* StockModelFormComponent */],
            __WEBPACK_IMPORTED_MODULE_18__variations_prepago_component__["a" /* PrepagoVariationsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__variations_prepago_form_component__["a" /* PrepagoFormComponent */],
            __WEBPACK_IMPORTED_MODULE_20__variations_postpago_component__["a" /* PostpagoVariationsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__variations_postpago_affiliations_component__["a" /* PostpagoAffiliationsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__variations_postpago_plans_component__["a" /* PostpagoPlansComponent */],
            __WEBPACK_IMPORTED_MODULE_23__variations_postpago_form_component__["a" /* PostpagoFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__["a" /* FormContainerModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_11__catalogo_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_9__stockmodel_service__["a" /* StockModelService */],
            __WEBPACK_IMPORTED_MODULE_10__variation_service__["a" /* VariationService */]
        ]
    })
], CatalogoModule);

//# sourceMappingURL=catalogo.module.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/catalogo.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalogo_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/catalogo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_product_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product/product.component.ts");



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__catalogo_component__["a" /* CatalogoComponent */],
        data: { pageTitle: '' }
    },
    {
        path: 'nuevo',
        component: __WEBPACK_IMPORTED_MODULE_2__product_product_component__["a" /* ProductComponent */],
        data: { pageTitle: 'Nuevo Producto' }
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_2__product_product_component__["a" /* ProductComponent */],
        data: { pageTitle: 'Editar Producto' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=catalogo.routing.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.url = '/api/admin/productos';
    }
    ProductService.prototype.getProducts = function () {
        return this.http
            .get(this.url);
    };
    ProductService.prototype.getProduct = function (product_id) {
        return this.http
            .get(this.getUrl(product_id));
    };
    ProductService.prototype.publishProduct = function (product_id) {
        return this.http
            .put(this.getUrl([product_id, 'publish']), {});
    };
    ProductService.prototype.unpublishProduct = function (product_id) {
        return this.http
            .put(this.getUrl([product_id, 'hide']), {});
    };
    ProductService.prototype.getCategories = function () {
        return this.http
            .get(this.getUrl('category'));
    };
    ProductService.prototype.getBrands = function () {
        return this.http
            .get(this.getUrl('brand'));
    };
    ProductService.prototype.saveBasic = function (formData) {
        return this.http
            .post(this.url, formData);
    };
    ProductService.prototype.updateBasic = function (product_id, formData) {
        formData.append('_method', 'put');
        return this.http
            .post(this.getUrl(product_id), formData);
    };
    ProductService.prototype.updateSpecs = function (product_id, formData) {
        formData.append('_method', 'put');
        return this.http
            .post(this.getUrl([product_id, 'specifications']), formData);
    };
    ProductService.prototype.getUrl = function (params) {
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
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\r\n  <!-- widget div-->\r\n  <div>\r\n    <!-- widget content -->\r\n    <div class=\"widget-body no-padding\">\r\n\r\n      <div class=\"smart-form\">\r\n        <div class=\"detalle-order\">\r\n          <header>\r\n            <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\r\n            Información Básica\r\n          </header>\r\n          <form #formBasic=\"ngForm\" #form class=\"smart-form margin-top-10\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onValidationSuccess)=\"onValidationSuccess($event)\" name=\"form-basic\">\r\n            <div class=\"detalle-registro row padding-row\">\r\n              <div class=\"col col-sm-7\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-4\">\r\n                    <label for=\"category_id\">Categoría</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-8\">\r\n                    <div class=\"select\" [class.state-disabled]=\"product.product_id\">\r\n                      <select [attr.disabled]=\"product.product_id ? 'disabled' : null\" name=\"category_id\" id=\"category_id\" [(ngModel)]=\"product.category_id\" (change)=\"onSelectChange($event)\">\r\n                        <option value=\"\">Seleccionar categoría</option>\r\n                        <option *ngFor=\"let item of categories\" value=\"{{item.category_id}}\">\r\n                          {{item.category_name}}\r\n                        </option>\r\n                      </select> <i></i>\r\n                      <input *ngIf=\"product.product_id\" type=\"hidden\" name=\"category_id\" value=\"{{product.category_id}}\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-7 col-sm-4\">\r\n                    <label for=\"brand_id\">Marca</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-5 col-sm-8\">\r\n                    <div class=\"select\" [class.state-disabled]=\"product.product_id\">\r\n                      <select [attr.disabled]=\"product.product_id ? 'disabled' : null\" name=\"brand_id\" id=\"brand_id\" [(ngModel)]=\"product.brand_id\" (change)=\"onSelectChange($event)\">\r\n                        <option value=\"\">Seleccionar marca</option>\r\n                        <option *ngFor=\"let item of brands\" value=\"{{item.brand_id}}\">\r\n                          {{item.brand_name}}\r\n                        </option>\r\n                      </select> <i></i>\r\n                      <input *ngIf=\"product.product_id\" type=\"hidden\" name=\"brand_id\" value=\"{{product.brand_id}}\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-7 col-sm-4\">\r\n                    <label for=\"product_model\">Modelo</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-5 col-sm-8\">\r\n                    <div class=\"input\" [class.state-disabled]=\"product.product_id\">\r\n                      <input [attr.disabled]=\"product.product_id ? 'disabled' : null\" id=\"product_model\" name=\"product_model\" type=\"text\" [(ngModel)]=\"product.product_model\">\r\n                      <input *ngIf=\"product.product_id\" type=\"hidden\" name=\"product_model\" value=\"{{product.product_model}}\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-7 col-sm-4\">\r\n                    <label for=\"product_tag\">Etiqueta</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-5 col-sm-8\">\r\n                    <div class=\"select\">\r\n                      <select name=\"product_tag\" id=\"product_tag\" [(ngModel)]=\"product.product_tag\" (change)=\"onSelectChange($event)\">\r\n                        <option value=\"\">Seleccionar etiqueta</option>\r\n                        <option *ngFor=\"let item of ['Nuevo','Destacado']\" value=\"{{item}}\">\r\n                          {{item}}\r\n                        </option>\r\n                      </select> <i></i>\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-7 col-sm-4\">\r\n                    <label for=\"product_price\">Precio</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-5 col-sm-8\">\r\n                    <div class=\"input\">\r\n                      <input id=\"product_price\" name=\"product_price\" type=\"text\" [(ngModel)]=\"product.product_price\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-7 col-sm-4\">\r\n                    <label for=\"product_priority\">Prioridad</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-5 col-sm-8\">\r\n                    <div class=\"input\">\r\n                      <input id=\"product_priority\" name=\"product_priority\" type=\"text\" [(ngModel)]=\"product.product_priority\" maxlength=\"3\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-sm-5\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-sm-12\">\r\n                    <div class=\"text-center\" style=\"border: 1px solid #ccc;\">\r\n                      <img *ngIf=\"product.product_image_url\" class=\"product-image\" src=\"{{product.product_image_url}}\">\r\n                      <img *ngIf=\"!product.product_image_url\" class=\"product-image\" src=\"/images/smartphone_placeholder.png\" style=\"width: 170px;height: 320px;\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <section class=\"col col-sm-12\">\r\n                    <div class=\"input input-file\">\r\n                      <span class=\"button\">\r\n                        <input #productImageInput id=\"product_image\" name=\"product_image\" type=\"file\" (change)=\"changeFilename($event)\">Subir\r\n                      </span>\r\n                      <input type=\"text\" placeholder=\"\" value=\"{{productImageUrl}}\" readonly>\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-sm-12\">\r\n                <div class=\"row\">\r\n                  <footer>\r\n                    <div class=\"btn-footer\">\r\n                      <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Guardar</button>\r\n                    </div>\r\n                  </footer>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- end widget content -->\r\n  </div>\r\n  <!-- end widget div -->\r\n</sa-widget>"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductBasicComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
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








var ProductBasicComponent = (function () {
    function ProductBasicComponent(route, router, blockui, productService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.productService = productService;
        this.notificationService = notificationService;
        this.categories = [];
        this.brands = [];
        this.productImageUrl = '';
        this.product = {};
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validationOptions = {
            rules: {
                category_id: {
                    required: true
                },
                brand_id: {
                    required: true
                },
                product_model: {
                    required: true
                },
                product_price: {
                    required: true,
                    number: true
                    // pattern: /\d+(\.\d{1,2})?/
                },
                product_priority: {
                    required: true,
                    number: true,
                    maxlength: 3
                }
            },
            messages: {
                category_id: {
                    required: 'Debes seleccionar una categoría.'
                },
                brand_id: {
                    required: 'Debes seleccionar una marca'
                },
                product_model: {
                    required: 'Debes ingresar un modelo'
                },
                product_price: {
                    required: 'Debes ingresar un precio',
                    number: 'Debes ingresar un número',
                    pattern: 'Solo se aceptan números con 2 decimales'
                },
                product_priority: {
                    required: 'Debes ingresar una prioridad',
                    number: 'Debes ingresar un número',
                    maxlength: 'Éste número acepta como máximo 3 dígitos'
                }
            }
        };
    }
    ProductBasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productImageUrl = '';
        this.blockui.start('content');
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].zip(this.productService.getCategories(), this.productService.getBrands()).subscribe(function (_a) {
            var cats = _a[0], brands = _a[1];
            if (cats.success) {
                _this.categories = cats.result;
            }
            if (brands.success) {
                _this.brands = brands.result;
            }
            _this.blockui.stop('content');
        });
    };
    ProductBasicComponent.prototype.ngAfterViewChecked = function () {
        if (typeof this.product.category_id !== 'undefined' && this.product.category_id === null) {
            this.product.category_id = '';
        }
        if (typeof this.product.brand_id !== 'undefined' && this.product.brand_id === null) {
            this.product.brand_id = '';
        }
        if (typeof this.product.product_tag !== 'undefined' && this.product.product_tag === null) {
            this.product.product_tag = '';
        }
    };
    ProductBasicComponent.prototype.changeFilename = function (event) {
        var uploadedFiles = event.target.files;
        this.productImageUrl = uploadedFiles[0].name;
    };
    ProductBasicComponent.prototype.onSelectChange = function (event) {
        $(event.currentTarget).blur();
    };
    ProductBasicComponent.prototype.onValidationSuccess = function (e) {
        this.save(e);
    };
    ProductBasicComponent.prototype.save = function (e) {
        var _this = this;
        var fileBrowser = this.productImageInput.nativeElement;
        var formData = new FormData(document.forms.namedItem('form-basic'));
        this.blockui.start('content');
        if (this.product.product_id) {
            this.productService.updateBasic(this.product.product_id, formData)
                .subscribe(function (data) {
                _this.onAlert.emit(_this.getAlert(data, _this.product, 'Actualización', 'actualizado'));
                if (data.success && formData.has('product_image')) {
                    _this.productImageUrl = '';
                    if (data.product_image_url) {
                        _this.product.product_image_url = data.product_image_url + '?v' + (new Date().getTime().toString());
                    }
                }
                _this.blockui.stop('content');
            }, function (error) {
                _this.onAlert.emit({
                    'title': 'Archivo pesado',
                    'message': 'El archivo de imágen es muy pesado, solo se permiten 10mb',
                    'mode': 'danger'
                });
                _this.blockui.stop('content');
            });
        }
        else {
            this.productService.saveBasic(formData)
                .subscribe(function (data) {
                _this.onAlert.emit(_this.getAlert(data, _this.product, 'Creación', 'creado'));
                if (data.success) {
                    _this.productImageUrl = '';
                    _this.router.navigate([data.id], { relativeTo: _this.route.parent });
                }
                _this.blockui.stop('content');
            }, function (error) {
                _this.onAlert.emit({
                    'title': 'Archivo pesado',
                    'message': 'El archivo de imágen es muy pesado, solo se permiten 10mb',
                    'mode': 'danger'
                });
                _this.blockui.stop('content');
            });
        }
    };
    ProductBasicComponent.prototype.getAlert = function (result, product, title_mode, desc_mode) {
        var mode, title, message = '';
        if (!product.brand_name) {
            product.brand_name = '';
        }
        if (result.messages && result.messages.product_image) {
            message = 'Para un producto nuevo es obligatoria una imagen';
        }
        if (result.messages && result.messages.product_model) {
            message = 'El modelo ingresado ya fue tomado por otro producto';
        }
        if (result.success) {
            mode = 'success';
            title = title_mode + ' completada';
            message = message.length ? message : 'El producto ' + product.brand_name + ' ' + product.product_model + ' ha sido ' + desc_mode;
        }
        else {
            mode = 'danger';
            title = title_mode + ' fallida';
            message = message.length ? message : 'El producto ' + product.brand_name + ' ' + product.product_model + ' no pudo ser ' + desc_mode;
        }
        return {
            'title': title,
            'message': message,
            'mode': mode
        };
    };
    return ProductBasicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductBasicComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ProductBasicComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ProductBasicComponent.prototype, "onUpdate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formBasic'),
    __metadata("design:type", Object)
], ProductBasicComponent.prototype, "formBasic", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('productImageInput'),
    __metadata("design:type", Object)
], ProductBasicComponent.prototype, "productImageInput", void 0);
ProductBasicComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-basic',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/product/basic.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _g || Object])
], ProductBasicComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\r\n<div id=\"content\">\r\n  <div class=\"row\">\r\n    <sa-big-breadcrumbs [items]=\"[' Producto', subtitle]\" icon=\"cube\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"></sa-big-breadcrumbs>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"alert\">\r\n    <alert *ngFor=\"let a of alert\" type=\"{{a.mode}}\" dismissible=\"true\">\r\n      <i class=\"fa-fw fa fa-{{a.icon}}\"></i>\r\n      <strong>{{a.title}}</strong> {{a.message}}\r\n    </alert>\r\n  </ng-container>\r\n\r\n  <sa-widgets-grid>\r\n    <div class=\"row\">\r\n      <article>\r\n        <div class=\"col-sm-6 col-md-5 col-lg-5\">\r\n          <!-- PRODUCT BASIC -->\r\n          <product-basic [product]=\"product\" (onAlert)=\"printAlert($event)\" (onUpdate)=\"refreshProduct()\"></product-basic>\r\n          <!-- PRODUCT SPECS -->\r\n          <product-specs *ngIf=\"product.product_id && product.category_id\" [product]=\"product\" (onAlert)=\"printAlert($event)\" (onUpdate)=\"refreshProduct()\"></product-specs>\r\n        </div>\r\n        <div *ngIf=\"product.product_id && product.category_id\" class=\"col-sm-6 col-md-7 col-lg-7\">\r\n\r\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\r\n\r\n            <header>\r\n              <span class=\"widget-icon\">\r\n                <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i>\r\n              </span>\r\n              \r\n              <h2>Variaciones </h2>\r\n\r\n              <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\r\n                <li *ngIf=\"product.product_id && product.category_id\" [class.active]=\"active == 'tab-r1'\">\r\n                  <a (click)=\"active = 'tab-r1'\"><span class=\"hidden-mobile hidden-tablet\">Modelos de Stock</span></a>\r\n                </li>\r\n\r\n                <li *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" [class.active]=\"active == 'tab-r2'\">\r\n                  <a (click)=\"active = 'tab-r2'\"><span class=\"hidden-mobile hidden-tablet\">Variaciones Prepago</span></a>\r\n                </li>\r\n\r\n                <li *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" [class.active]=\"active == 'tab-r3'\">\r\n                  <a (click)=\"active = 'tab-r3'\"><span class=\"hidden-mobile hidden-tablet\">Variaciones Postpago</span></a>\r\n                </li>\r\n              </ul>\r\n            </header>\r\n\r\n            <!-- widget div-->\r\n            <div>\r\n              <!-- widget content -->\r\n              <div class=\"no-padding widget-body\">\r\n                \r\n                <tabset>\r\n                  <tab [active]=\"active == 'tab-r1'\">\r\n                    <!-- STOCK MODEL CODES -->\r\n                    <stock-models *ngIf=\"product.product_id && product.category_id\" (onAlert)=\"printAlert($event)\"></stock-models>\r\n                  </tab>\r\n                  <tab [active]=\"active == 'tab-r2'\">\r\n                    <!-- PREPAGO VARIATIONS -->\r\n                    <prepago-variations *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" (onAlert)=\"printAlert($event)\"></prepago-variations>\r\n                  </tab>\r\n                  <tab [active]=\"active == 'tab-r3'\">\r\n                    <!-- POSTPAGO VARIATIONS -->\r\n                    <postpago-variations *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" (onAlert)=\"printAlert($event)\"></postpago-variations>\r\n                  </tab>\r\n                </tabset>\r\n              \r\n              </div>\r\n            </div>\r\n          </sa-widget>\r\n        </div>\r\n      </article>\r\n    </div>\r\n  </sa-widgets-grid>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product.service.ts");
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







var ProductComponent = (function () {
    function ProductComponent(route, router, blockui, notificationService, productService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.notificationService = notificationService;
        this.productService = productService;
        this.product = {
            category_id: '',
            brand_id: '',
            product_tag: '',
            product_internal_memory: '',
            product_external_memory: '',
            product_band: ''
        };
        this.alert = null;
        this.active = null;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active = 'tab-r1';
        this.alert = null;
        var product_id = this.route.snapshot.params.id;
        if (product_id) {
            this.subtitle = 'Nro. #' + product_id;
            this.blockui.start('content');
            this.productService.getProduct(product_id)
                .subscribe(function (data) {
                console.log(data);
                if (data.success) {
                    _this.product = data.result;
                }
                _this.blockui.stop('content');
            });
        }
        else {
            this.subtitle = 'Nuevo producto';
        }
    };
    ProductComponent.prototype.refreshProduct = function () {
        /*this.productService.getProduct(this.product.product_id)
          .subscribe((data: any) => {
            if (data.success) {
              this.product = data.result;
            }
          });*/
    };
    ProductComponent.prototype.printAlert = function (alert) {
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
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/product/product.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */]) === "function" && _e || Object])
], ProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/specs.component.html":
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\r\n  <!-- widget div-->\r\n  <div>\r\n    <!-- widget content -->\r\n    <div class=\"widget-body no-padding\">\r\n\r\n      <div class=\"smart-form\">\r\n        <div class=\"detalle-order\">\r\n          <header>\r\n            <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\r\n            Especificaciones\r\n          </header>\r\n          <form #formSpecs=\"ngForm\" class=\"smart-form margin-top-10\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onValidationSuccess)=\"onValidationSuccess($event)\" name=\"form-specs\">\r\n            <div class=\"detalle-registro row padding-row\">\r\n              <div class=\"col col-xs-12 col-sm-12\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-3 col-sm-12\">\r\n                    <label for=\"product_description\">Descripción</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-9 col-sm-12\">\r\n                    <textarea class=\"form-control\" placeholder=\"Ingresa una descripción\" rows=\"4\" name=\"product_description\" [(ngModel)]=\"product.product_description\"></textarea>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-6 col-sm-6 col-md-4\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"product_internal_memory\">Memoria Interna</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"select\">\r\n                      <select name=\"product_internal_memory\" id=\"product_internal_memory\" [(ngModel)]=\"product.product_internal_memory\" (change)=\"onSelectChange($event)\">\r\n                        <option value=\"\">Seleccionar capacidad</option>\r\n                        <option *ngFor=\"let item of [1,2,4,8,16,32,64,128,256,512,1024,2048]\" value=\"{{item}}\">\r\n                          {{item}} GB\r\n                        </option>\r\n                      </select> <i></i>\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-6 col-sm-6 col-md-4\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"external_memory\">Memoria Externa</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"select\">\r\n                      <select name=\"product_external_memory\" id=\"product_external_memory\" [(ngModel)]=\"product.product_external_memory\" (change)=\"onSelectChange($event)\">\r\n                        <option value=\"\">Seleccionar capacidad</option>\r\n                        <option *ngFor=\"let item of [1,2,4,8,16,32,64,128,256,512,1024,2048]\" value=\"{{item}}\">\r\n                          {{item}} GB\r\n                        </option>\r\n                      </select> <i></i>\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-sm-6 col-md-4\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"product_screen_size\">Pantalla</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"input\"> <i class=\"icon-append fa\">\"</i>\r\n                      <input id=\"product_screen_size\" name=\"product_screen_size\" type=\"text\" [(ngModel)]=\"product.product_screen_size\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-6 col-sm-6 col-md-4\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"product_camera_1\">Cámara Frontal</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"input\"> <i class=\"icon-append fa\">MP</i>\r\n                      <input id=\"product_camera_1\" name=\"product_camera_1\" type=\"text\" [(ngModel)]=\"product.product_camera_1\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-6 col-sm-6 col-md-4\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"product_camera_2\">Cámara Trasera</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"input\"> <i class=\"icon-append fa\">MP</i>\r\n                      <input id=\"product_camera_2\" name=\"product_camera_2\" type=\"text\" [(ngModel)]=\"product.product_camera_2\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-6 col-sm-6 col-md-4\">\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-6 col-sm-6 col-md-8\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"product_processor_name\">Procesador</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"input\">\r\n                      <input id=\"product_processor_name\" name=\"product_processor_name\" type=\"text\" [(ngModel)]=\"product.product_processor_name\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-6 col-sm-6 col-md-4\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"product_processor_power\">Velocidad</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"input\"> <i class=\"icon-append fa\">GHz</i>\r\n                      <input id=\"product_processor_power\" name=\"product_processor_power\" type=\"text\" [(ngModel)]=\"product.product_processor_power\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col  col-xs-6 col-sm-12\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"product_os\">Sistema Operativo</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"input\">\r\n                      <input id=\"product_os\" name=\"product_os\" type=\"text\" [(ngModel)]=\"product.product_os\"><i></i>\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-6 col-sm-6\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-5 col-sm-12\">\r\n                    <label for=\"product_battery\">Batería</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-7 col-sm-12\">\r\n                    <div class=\"input\"> <i class=\"icon-append fa\">mAh</i>\r\n                      <input id=\"product_battery\" name=\"product_battery\" type=\"text\" [(ngModel)]=\"product.product_battery\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-4 col-sm-6\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-xs-4 col-sm-12\">\r\n                    <label for=\"product_band\">Banda</label>\r\n                  </section>\r\n                  <section class=\"col col-xs-8 col-sm-12\">\r\n                    <div class=\"select\">\r\n                      <select name=\"product_band\" id=\"product_band\" [(ngModel)]=\"product.product_band\" (change)=\"onSelectChange($event)\">\r\n                        <option value=\"\">Seleccionar banda</option>\r\n                        <option *ngFor=\"let item of ['2G','3G','4G','4G LTE','5G']\" value=\"{{item}}\">\r\n                          {{item}}\r\n                        </option>\r\n                      </select> <i></i>\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-2 col-sm-6 col-md-3\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-sm-12\">\r\n                    <label class=\"checkbox\">\r\n                      <input id=\"product_radio_check\" name=\"product_radio_check\" type=\"checkbox\" [(ngModel)]=\"product.product_radio_check\"><i></i>Radio\r\n                    </label>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-2 col-sm-6 col-md-3\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-sm-12\">\r\n                    <label class=\"checkbox\">\r\n                      <input id=\"product_bluetooth_check\" name=\"product_bluetooth_check\" type=\"checkbox\" [(ngModel)]=\"product.product_bluetooth_check\"><i></i>Bluetooth\r\n                    </label>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-2 col-sm-6 col-md-3\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-sm-12\">\r\n                    <label class=\"checkbox\">\r\n                      <input id=\"product_wlan_check\" name=\"product_wlan_check\" type=\"checkbox\" [(ngModel)]=\"product.product_wlan_check\"><i></i>NFC\r\n                    </label>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"product.product_id && product.category_id && (product.category_id == 1 || product.category_id == 3)\" class=\"col col-xs-2 col-sm-6 col-md-3\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-sm-12\">\r\n                    <label class=\"checkbox\">\r\n                      <input id=\"product_gps_check\" name=\"product_gps_check\" type=\"checkbox\" [(ngModel)]=\"product.product_gps_check\"><i></i>GPS\r\n                    </label>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <div class=\"col col-sm-12\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-sm-12\">\r\n                    <label for=\"product_data_sheet\">Especificaciones Técnicas</label>\r\n                  </section>\r\n                  <section *ngIf=\"product.product_data_sheet\" class=\"col col-sm-12\">\r\n                    <a href=\"{{product.product_data_sheet}}\" target=\"_blank\">{{product.product_data_sheet_name}}</a>\r\n                  </section>\r\n                  <section class=\"col col-sm-12\">\r\n                    <div class=\"input input-file\">\r\n                      <span class=\"button\">\r\n                        <input #dataSheetInput id=\"product_data_sheet\" name=\"product_data_sheet\" type=\"file\" (change)=\"changeFilename($event)\">Subir\r\n                      </span>\r\n                      <input type=\"text\" placeholder=\"\" value=\"{{dataSheetUrl}}\" readonly>\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div>\r\n              <!--div class=\"col col-sm-12\">\r\n                <div class=\"row\">\r\n                  <section class=\"col col-sm-12\">\r\n                    <label for=\"product_keywords\">Palabras Clave</label>\r\n                  </section>\r\n                  <section class=\"col col-sm-12\">\r\n                    <div class=\"input form-group\">\r\n                      <input smartTags id=\"product_keywords\" name=\"product_keywords\" [(ngModel)]=\"product.product_keywords\" class=\"form-control tagsinput\" data-role=\"tagsinput\">\r\n                    </div>\r\n                  </section>\r\n                </div>\r\n              </div-->\r\n              <div class=\"col col-sm-12\">\r\n                <div class=\"row\">\r\n                  <footer>\r\n                    <div class=\"btn-footer\">\r\n                      <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Guardar</button>\r\n                    </div>\r\n                  </footer>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <!-- end widget content -->\r\n  </div>\r\n  <!-- end widget div -->\r\n</sa-widget>"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/specs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSpecsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product.service.ts");
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







var ProductSpecsComponent = (function () {
    function ProductSpecsComponent(route, router, blockui, productService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.productService = productService;
        this.notificationService = notificationService;
        this.dataSheetUrl = '';
        this.product = {};
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validationOptions = {
            rules: {
                product_description: {},
                product_internal_memory: {
                    required: true
                },
                product_external_memory: {
                    required: true
                },
                product_screen_size: {
                    required: true,
                    number: true,
                    maxlength: 10
                },
                product_camera_1: {
                    required: true,
                    // number: true,
                    maxlength: 10
                },
                product_camera_2: {
                    required: true,
                    number: true,
                    maxlength: 10
                },
                product_os: {
                    required: true,
                    maxlength: 250
                },
                product_processor_name: {
                    required: true,
                    maxlength: 250
                },
                product_processor_power: {
                    required: true,
                    number: true,
                    maxlength: 10
                },
                product_battery: {
                    required: true,
                    number: true,
                    maxlength: 10
                },
                product_band: {
                    required: true,
                    maxlength: 50
                },
                product_data_sheet: {
                    // required: true,
                    accept: 'application/pdf'
                }
            },
            messages: {
                product_description: {},
                product_internal_memory: {
                    required: 'Este campo es obligatorio'
                },
                product_external_memory: {
                    required: 'Este campo es obligatorio'
                },
                product_screen_size: {
                    required: 'Este campo es obligatorio',
                    number: 'Debes ingresar un número',
                    maxlength: 'Máximo 10 caracteres'
                },
                product_camera_1: {
                    required: 'Este campo es obligatorio',
                    // number: 'Debes ingresar un número',
                    maxlength: 'Máximo 10 caracteres'
                },
                product_camera_2: {
                    required: 'Este campo es obligatorio',
                    number: 'Debes ingresar un número',
                    maxlength: 'Máximo 10 caracteres'
                },
                product_os: {
                    required: 'Este campo es obligatorio',
                    maxlength: 'Cadena muy larga'
                },
                product_processor_name: {
                    required: 'Este campo es obligatorio',
                    maxlength: 'Cadena muy larga'
                },
                product_processor_power: {
                    required: 'Este campo es obligatorio',
                    number: 'Debes ingresar un número',
                    maxlength: 'Máximo 10 caracteres'
                },
                product_battery: {
                    required: 'Este campo es obligatorio',
                    number: 'Debes ingresar un número',
                    maxlength: 'Máximo 10 caracteres'
                },
                product_band: {
                    required: 'Este campo es obligatorio',
                    maxlength: 'Máximo 50 caracteres'
                },
                product_data_sheet: {
                    // required: 'Este campo es obligatorio',
                    accept: 'Solo se aceptan archivos PDF'
                }
            }
        };
    }
    ProductSpecsComponent.prototype.ngOnInit = function () {
        this.dataSheetUrl = '';
    };
    ProductSpecsComponent.prototype.ngAfterViewChecked = function () {
        if (!this.product.product_data_sheet_name && this.product.product_data_sheet) {
            var img_url = this.product.product_data_sheet;
            var img_url_arr = img_url.split('/');
            this.product.product_data_sheet_name = img_url_arr[img_url_arr.length - 1];
        }
        if (typeof this.product.product_internal_memory !== 'undefined' && this.product.product_internal_memory === null) {
            this.product.product_internal_memory = '';
        }
        if (typeof this.product.product_external_memory !== 'undefined' && this.product.product_external_memory === null) {
            this.product.product_external_memory = '';
        }
        if (typeof this.product.product_band !== 'undefined' && this.product.product_band === null) {
            this.product.product_band = '';
        }
        if (typeof this.product.product_radio_check === 'undefined') {
            if (this.product.product_radio === 'Si') {
                this.product.product_radio_check = 1;
            }
            else if (this.product.product_radio === 'No') {
                this.product.product_radio_check = 0;
            }
            else {
                this.product.product_radio_check = 1;
            }
        }
        if (typeof this.product.product_bluetooth_check === 'undefined') {
            if (this.product.product_bluetooth === 'Si') {
                this.product.product_bluetooth_check = 1;
            }
            else if (this.product.product_bluetooth === 'No') {
                this.product.product_bluetooth_check = 0;
            }
            else {
                this.product.product_bluetooth_check = 1;
            }
        }
        if (typeof this.product.product_wlan_check === 'undefined') {
            if (this.product.product_wlan === 'Si') {
                this.product.product_wlan_check = 1;
            }
            else if (this.product.product_wlan === 'No') {
                this.product.product_wlan_check = 0;
            }
            else {
                this.product.product_wlan_check = 1;
            }
        }
        if (typeof this.product.product_gps_check === 'undefined') {
            if (this.product.product_gps === 'Si') {
                this.product.product_gps_check = 1;
            }
            else if (this.product.product_gps === 'No') {
                this.product.product_gps_check = 0;
            }
            else {
                this.product.product_gps_check = 1;
            }
        }
    };
    ProductSpecsComponent.prototype.changeFilename = function (event) {
        var uploadedFiles = event.target.files;
        this.dataSheetUrl = uploadedFiles[0].name;
    };
    ProductSpecsComponent.prototype.onSelectChange = function (event) {
        $(event.currentTarget).blur();
    };
    ProductSpecsComponent.prototype.onValidationSuccess = function (e) {
        this.save(e);
    };
    ProductSpecsComponent.prototype.save = function (e) {
        var _this = this;
        var fileBrowser = this.dataSheetInput.nativeElement;
        var formData = new FormData(document.forms.namedItem('form-specs'));
        if (this.product.product_radio_check) {
            formData.append('product_radio', 'Si');
        }
        else {
            formData.append('product_radio', 'No');
        }
        if (this.product.product_bluetooth_check) {
            formData.append('product_bluetooth', 'Si');
        }
        else {
            formData.append('product_bluetooth', 'No');
        }
        if (this.product.product_wlan_check) {
            formData.append('product_wlan', 'Si');
        }
        else {
            formData.append('product_wlan', 'No');
        }
        if (this.product.product_gps_check) {
            formData.append('product_gps', 'Si');
        }
        else {
            formData.append('product_gps', 'No');
        }
        if (!this.dataSheetUrl.length) {
            formData.delete('product_data_sheet');
        }
        this.blockui.start('content');
        this.productService.updateSpecs(this.product.product_id, formData)
            .subscribe(function (data) {
            _this.dataSheetUrl = '';
            _this.onAlert.emit(_this.getAlert(data, _this.product, 'Actualización', 'actualizado'));
            if (data.success && formData.has('product_data_sheet')) {
                _this.product.product_data_sheet = _this.product.product_data_sheet + '?v' + (new Date().getTime().toString());
            }
            _this.blockui.stop('content');
        }, function (error) {
            _this.onAlert.emit({
                'title': 'Archivo pesado',
                'message': 'El archivo de especificaciones ténicas es muy pesado, solo se permiten 10mb',
                'mode': 'danger'
            });
            _this.blockui.stop('content');
        });
    };
    ProductSpecsComponent.prototype.getAlert = function (result, product, title_mode, desc_mode) {
        var mode, title, message;
        if (result.success) {
            mode = 'success';
            title = title_mode + ' completada';
            message = 'El producto ' + product.brand_name + ' ' + product.product_model + ' ha sido ' + desc_mode;
        }
        else {
            mode = 'danger';
            title = title_mode + ' fallida';
            message = 'El producto ' + product.brand_name + ' ' + product.product_model + ' no pudo ser ' + desc_mode;
        }
        return {
            'title': title,
            'message': message,
            'mode': mode
        };
    };
    return ProductSpecsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductSpecsComponent.prototype, "product", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ProductSpecsComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ProductSpecsComponent.prototype, "onUpdate", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formSpecs'),
    __metadata("design:type", Object)
], ProductSpecsComponent.prototype, "formSpecs", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('dataSheetInput'),
    __metadata("design:type", Object)
], ProductSpecsComponent.prototype, "dataSheetInput", void 0);
ProductSpecsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-specs',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/product/specs.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _g || Object])
], ProductSpecsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=specs.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/stockmodel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockModelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockModelService = (function () {
    function StockModelService(http) {
        this.http = http;
        this.url = '/api/admin/productos';
    }
    StockModelService.prototype.getColors = function () {
        return this.http
            .get(this.getUrl('color'));
    };
    StockModelService.prototype.saveColor = function (color) {
        var formData = new FormData();
        formData.append('color_name', color.color_name);
        formData.append('color_hexcode', color.color_hexcode);
        return this.http
            .post(this.getUrl('color'), formData);
    };
    StockModelService.prototype.getStockModels = function (product_id) {
        return this.http
            .get(this.getUrl([product_id, 'smc']));
    };
    StockModelService.prototype.saveStockModel = function (product_id, formData) {
        return this.http
            .post(this.getUrl([product_id, 'smc']), formData);
    };
    StockModelService.prototype.updateStockModel = function (product_id, formData, stock_model_id) {
        formData.append('_method', 'put');
        return this.http
            .post(this.getUrl([product_id, 'smc', stock_model_id]), formData);
    };
    StockModelService.prototype.getStockModel = function (product_id, stock_model_id) {
        return this.http
            .get(this.getUrl([product_id, 'smc', stock_model_id]));
    };
    StockModelService.prototype.removeProductImage = function (product_image_id) {
        return this.http
            .delete(this.getUrl(['image', product_image_id]));
    };
    StockModelService.prototype.getUrl = function (params) {
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
    return StockModelService;
}());
StockModelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], StockModelService);

var _a;
//# sourceMappingURL=stockmodel.service.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/stockmodels/stockmodel-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #formStockModel=\"ngForm\" #form class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onInitComplete)=\"referenceValidator($event)\" (onValidationSuccess)=\"onValidationSuccess($event)\" name=\"form-stock-model{{stockmodel.stock_model_id}}\" style=\"border: 1px solid #bbb; padding-top: 10px;\">\r\n  <input *ngIf=\"stockmodel.stock_model_id\" type=\"hidden\" name=\"stock_model_id\" [(ngModel)]=\"stockmodel.stock_model_id\">\r\n  <div class=\"row detalle-registro padding-row\">\r\n    <div class=\"col col-sm-10 col-md-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-3\">\r\n          <label for=\"color_id\" class=\"select\">Color</label>\r\n        </section>\r\n        <section class=\"col col-sm-9\">\r\n          <div class=\"select\">\r\n            <select name=\"color_id\" id=\"color_id\" [(ngModel)]=\"stockmodel.color_id\" (change)=\"onSelectChange($event)\">\r\n              <option value=\"\">Seleccionar color</option>\r\n              <option *ngFor=\"let item of colors\" value=\"{{item.color_id}}\">\r\n                {{item.color_name}}\r\n              </option>\r\n            </select> <i></i>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-2 col-md-1\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <a class=\"btn btn-primary btn-xs\" (click)=\"addColor()\" style=\"float: none;position: static;margin-left: -20px;margin-top: 5px;\"><i class=\"fa fa-plus\"></i></a>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-10 col-md-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-3\">\r\n          <label for=\"color_id\">Código Stock</label>\r\n        </section>\r\n        <section class=\"col col-sm-9\">\r\n          <div class=\"input\">\r\n            <input id=\"stock_model_code\" name=\"stock_model_code\" type=\"text\" placeholder=\"Stock Model Code\" [(ngModel)]=\"stockmodel.stock_model_code\"><i></i>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-2 col-md-3\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <label *ngIf=\"stockmodel.stock_model_id\" class=\"checkbox\">\r\n            <input id=\"active\" name=\"active\" type=\"checkbox\" [(ngModel)]=\"stockmodel.active\"><i></i>Habilitado\r\n          </label>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-12\">\r\n      <label class=\"margin-bottom-10\">Imágenes</label>\r\n      <div class=\"padding-10 margin-bottom-10 product-images\" style=\"border: 1px solid #ccc;\">\r\n        <div class=\"row\">\r\n          <ng-container *ngFor=\"let product_image of stockmodel.product_images; let i = index\">\r\n            <section class=\"col col-sm-2\" style=\"height: 120px;\">\r\n              <div class=\"text-center\">\r\n                <img class=\"product-image\" src=\"{{product_image.product_image_url}}\" style=\"max-height: 100px\">\r\n              </div>\r\n            </section>\r\n            <section class=\"col col-sm-2\" style=\"height: 120px;\">\r\n              <div>\r\n                <a target=\"_blank\" href=\"{{product_image.product_image_url}}\">{{product_image.product_image_name}}</a>\r\n              </div>\r\n              <span>Orden</span>\r\n              <label class=\"input margin-top-5\">\r\n                <i class=\"icon-prepend fa fa-question-circle\"></i>\r\n                <input name=\"weight_{{i}}\" type=\"text\" placeholder=\"Orden\" [(ngModel)]=\"product_image.weight\" style=\"width: 60px\">\r\n                <b class=\"tooltip tooltip-left\">\r\n                  <i class=\"fa fa-warning txt-color-teal\"></i>\r\n                  Colocar el orden que desea que aparezca la imagen\r\n                </b>\r\n              </label>\r\n              <a class=\"btn btn-primary btn-sm margin-top-5\" (click)=\"showPopupRemoveImage(product_image)\">Eliminar</a>\r\n              <input type=\"hidden\" name=\"product_image_id_{{i}}\" [(ngModel)]=\"product_image.product_image_id\">\r\n              <input type=\"hidden\" name=\"product_image_url_{{i}}\" [(ngModel)]=\"product_image.product_image_url\">\r\n            </section>\r\n          </ng-container>\r\n        </div>\r\n        <div *ngFor=\"let number of allowedImages; let ix = index\" class=\"row\">\r\n          <section class=\"col col-sm-12\">\r\n            <div class=\"input input-file\">\r\n              <span class=\"button\">\r\n                <input name=\"product_images[]\" type=\"file\" (change)=\"changeFilename($event, ix)\">Subir\r\n              </span>\r\n              <input type=\"text\" placeholder=\"Nueva imagen\" value=\"{{productImageUrl[ix]}}\" readonly>\r\n            </div>\r\n          </section>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-12\">\r\n      <div class=\"row\">\r\n        <footer>\r\n          <div class=\"btn-footer\">\r\n            <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Guardar</button>\r\n          </div>\r\n        </footer>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/stockmodels/stockmodel-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockModelFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stockmodel_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodel.service.ts");
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







var StockModelFormComponent = (function () {
    function StockModelFormComponent(route, router, blockui, stockModelService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.stockModelService = stockModelService;
        this.notificationService = notificationService;
        this.product_id = null;
        this.stockmodel = {
            stock_model_id: null,
            color_id: '',
            stock_model_code: null,
            active: null
        };
        this.colors = [];
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onAddColor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.productImageUrl = [];
        this._addImages = 5;
        this.validationOptions = {
            rules: {
                color_id: {
                    required: true
                },
                stock_model_code: {
                    required: true
                }
            },
            messages: {
                color_id: {
                    required: 'Debes seleccionar un color'
                },
                stock_model_code: {
                    required: 'Debes ingresar un stock model code'
                }
            }
        };
    }
    Object.defineProperty(StockModelFormComponent.prototype, "allowedImages", {
        get: function () {
            var limit = this._addImages;
            if (this.stockmodel.product_images) {
                limit = limit - this.stockmodel.product_images.length;
            }
            var foo = [];
            for (var i = 1; i <= limit; i++) {
                foo.push(i);
            }
            return foo;
        },
        enumerable: true,
        configurable: true
    });
    StockModelFormComponent.prototype.ngOnInit = function () {
        if (!this.stockmodel.color_id) {
            this.stockmodel.color_id = '';
        }
        this.productImageUrl = [];
        if (this.stockmodel.active === null) {
            this.stockmodel.active = false;
        }
        if (this.stockmodel.stock_model_id) {
            this.stockmodel.product_images.map(function (i, x) {
                var img_url = i.product_image_url;
                var img_url_arr = img_url.split('/');
                i.product_image_name = img_url_arr[img_url_arr.length - 1];
                return i;
            });
        }
    };
    StockModelFormComponent.prototype.ngAfterViewChecked = function () { };
    StockModelFormComponent.prototype.onSelectChange = function (event) {
        $(event.currentTarget).blur();
    };
    StockModelFormComponent.prototype.onValidationSuccess = function (e) {
        this.save(e);
    };
    StockModelFormComponent.prototype.referenceValidator = function (formValidate) {
        this.formValidate = formValidate;
    };
    StockModelFormComponent.prototype.changeFilename = function (event, ix) {
        var uploadedFiles = event.target.files;
        this.productImageUrl[ix] = uploadedFiles[0].name;
    };
    StockModelFormComponent.prototype.addColor = function () {
        this.onAddColor.emit();
    };
    StockModelFormComponent.prototype.save = function (e) {
        var _this = this;
        var formData = new FormData(document.forms
            .namedItem('form-stock-model' + (this.stockmodel.stock_model_id ? this.stockmodel.stock_model_id : '')));
        if (this.formStockModel.dirty || (formData.has('product_images[]') && this.productImageUrl.length)) {
            this.blockui.start('content');
            if (!this.productImageUrl.length) {
                formData.delete('product_images[]');
            }
            if (this.stockmodel.stock_model_id) {
                formData.append('stock_model_images', JSON.stringify(this.stockmodel.product_images));
                formData.set('active', this.stockmodel.active ? '1' : '0');
                this.stockModelService.updateStockModel(this.product_id, formData, this.stockmodel.stock_model_id)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.productImageUrl = [];
                        _this.stockModelService.getStockModel(_this.product_id, _this.stockmodel.stock_model_id)
                            .subscribe(function (smc) {
                            if (smc.success) {
                                _this.stockmodel = smc.result;
                                _this.stockmodel.product_images.map(function (i, x) {
                                    var img_url = i.product_image_url;
                                    var img_url_arr = img_url.split('/');
                                    i.product_image_name = img_url_arr[img_url_arr.length - 1];
                                    i.product_image_url = i.product_image_url + '?v' + (new Date().getTime().toString());
                                    return i;
                                });
                            }
                            _this.blockui.stop('content');
                        });
                    }
                    else {
                        _this.blockui.stop('content');
                    }
                    _this.onAlert.emit(_this.getAlert(data));
                });
            }
            else {
                this.stockModelService.saveStockModel(this.product_id, formData)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.productImageUrl = [];
                        _this.stockModelService.getStockModel(_this.product_id, data.id)
                            .subscribe(function (smc) {
                            if (smc.success) {
                                _this.stockmodel = smc.result;
                                _this.stockmodel.product_images.map(function (i, x) {
                                    var img_url = i.product_image_url;
                                    var img_url_arr = img_url.split('/');
                                    i.product_image_name = img_url_arr[img_url_arr.length - 1];
                                    i.product_image_url = i.product_image_url + '?v' + (new Date().getTime().toString());
                                    return i;
                                });
                            }
                            _this.blockui.stop('content');
                        });
                    }
                    else {
                        _this.blockui.stop('content');
                    }
                    _this.onAlert.emit(_this.getAlert(data));
                });
            }
        }
    };
    StockModelFormComponent.prototype.removeImage = function (product_image) {
        var _this = this;
        this.blockui.start('content');
        this.stockModelService.removeProductImage(product_image.product_image_id)
            .subscribe(function (data) {
            _this.onAlert.emit(_this.getAlert(data));
            if (data.success) {
                for (var key in _this.stockmodel.product_images) {
                    if (_this.stockmodel.product_images[key].product_image_id === product_image.product_image_id) {
                        _this.stockmodel.product_images.splice(key, 1);
                    }
                }
                _this.blockui.stop('content');
            }
        });
    };
    StockModelFormComponent.prototype.showPopupRemoveImage = function (product_image) {
        var _this = this;
        this.notificationService.smartMessageBox({
            title: "<i class=\"fa fa-sign-out txt-color-orangeDark\"></i> Eliminar imagen\n        <span class=\"txt-color-orangeDark\">\n          <strong>" + product_image.product_image_name + "</strong>\n        </span>",
            content: '¿Seguro que quieres eliminar esta imagen? Desparecerá del detalle del producto.',
            buttons: '[No][Si]'
        }, function (ButtonPressed) {
            if (ButtonPressed === 'Si') {
                _this.removeImage(product_image);
            }
        });
    };
    StockModelFormComponent.prototype.getAlert = function (result) {
        var mode, title, message;
        if (result.success) {
            mode = 'success';
            title = 'Éxito!';
            message = result.result;
        }
        else {
            mode = 'danger';
            title = 'Error';
            message = result.result;
        }
        return {
            'title': title,
            'message': message,
            'mode': mode
        };
    };
    return StockModelFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StockModelFormComponent.prototype, "product_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StockModelFormComponent.prototype, "stockmodel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], StockModelFormComponent.prototype, "colors", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StockModelFormComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], StockModelFormComponent.prototype, "onAddColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formStockModel'),
    __metadata("design:type", Object)
], StockModelFormComponent.prototype, "formStockModel", void 0);
StockModelFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'stockmodel-form',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodels/stockmodel-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__stockmodel_service__["a" /* StockModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__stockmodel_service__["a" /* StockModelService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _g || Object])
], StockModelFormComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=stockmodel-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/stockmodels/stockmodels.component.html":
/***/ (function(module, exports) {

module.exports = "<div bsModal #lgModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" (click)=\"hideColorModal()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h4 class=\"modal-title\">Agregar color</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form #formColor=\"ngForm\" [saUiValidate]=\"validationOptions\" (onValidationInit)=\"referenceValidator($event)\" (onValidationSuccess)=\"addColor($event)\" class=\"smart-form\" novalidate=\"novalidate\" name=\"form-color\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"row\">\r\n                <section class=\"col col-sm-12\">\r\n                  <label for=\"color_id\">Nombre</label>\r\n                </section>\r\n                <section class=\"col col-sm-12\">\r\n                  <div class=\"input\">\r\n                    <input id=\"color_name\" name=\"color_name\" [(ngModel)]=\"color.color_name\" type=\"text\" placeholder=\"Color\">\r\n                  </div>\r\n                </section>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"row\">\r\n                <section class=\"col col-sm-12\">\r\n                  <label for=\"color_id\">Código</label>\r\n                </section>\r\n                <section class=\"col col-sm-12\">\r\n                  <div class=\"input\">\r\n                    <i class=\"icon-append fa\">#</i>\r\n                    <input id=\"color_hexcode\" name=\"color_hexcode\" maxlength=\"6\" [(ngModel)]=\"color.color_hexcode\" type=\"text\" placeholder=\"Valor Hexadecimal\">\r\n                  </div>\r\n                </section>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button class=\"btn btn-default\" type=\"button\" (click)=\"hideColorModal()\">\r\n              Cancelar\r\n            </button>\r\n            <button class=\"btn btn-primary\" type=\"submit\" name=\"submit\">\r\n              Agregar\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"smart-form\">\r\n  <div class=\"detalle-order\">\r\n    <header>\r\n      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\r\n      Modelos de Stock\r\n      <label class=\"btn btn-primary btn-sm pull-right\" style=\"line-height: 12px; margin-right: 5px\" (click)=\"addSMC()\">\r\n        Agregar\r\n      </label>\r\n    </header>\r\n    <div *ngFor=\"let stockmodel of stockmodels\" class=\"padding-10 margin-top-10\">\r\n      <stockmodel-form [product_id]=\"product_id\" [stockmodel]=\"stockmodel\" [colors]=\"colors\" (onAlert)=\"printAlert($event)\" (onAddColor)=\"showColorModal($event)\"></stockmodel-form>\r\n    </div>\r\n    <div *ngFor=\"let number of allowedBlocks\" class=\"padding-10 margin-top-10\">\r\n      <stockmodel-form [product_id]=\"product_id\" [colors]=\"colors\" (onAlert)=\"printAlert($event)\" (onAddColor)=\"showColorModal($event)\"></stockmodel-form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/stockmodels/stockmodels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stockmodel_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var StockModelsComponent = (function () {
    function StockModelsComponent(route, router, blockui, stockModelService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.stockModelService = stockModelService;
        this.notificationService = notificationService;
        this.color = {};
        this.colors = [];
        this.stockmodels = [];
        this._addBlocks = 1;
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validationOptions = {
            rules: {
                color_name: {
                    required: true
                },
                color_hexcode: {
                    required: true,
                    minlength: 6,
                    maxlength: 6
                }
            },
            messages: {
                color_name: {
                    required: 'Debes ingresar un nombre de color'
                },
                color_hexcode: {
                    required: 'Debes ingresar un código hexadecimal para el color',
                    minlength: 'El código solo acepta 6 caracteres',
                    maxlength: 'El código solo acepta 6 caracteres'
                }
            }
        };
    }
    Object.defineProperty(StockModelsComponent.prototype, "allowedBlocks", {
        get: function () {
            var foo = [];
            for (var i = 1; i <= this._addBlocks; i++) {
                foo.push(i);
            }
            return foo;
        },
        enumerable: true,
        configurable: true
    });
    StockModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product_id = this.route.snapshot.params.id;
        this.blockui.start('content');
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].zip(this.stockModelService.getColors(), this.stockModelService.getStockModels(this.product_id)).subscribe(function (_a) {
            var colors = _a[0], stockmodels = _a[1];
            if (colors.success) {
                _this.colors = colors.result;
            }
            if (stockmodels.success) {
                _this.stockmodels = stockmodels.result;
            }
            _this.blockui.stop('content');
        });
    };
    StockModelsComponent.prototype.addSMC = function () {
        this._addBlocks++;
    };
    StockModelsComponent.prototype.showColorModal = function () {
        this.lgModal.show();
    };
    StockModelsComponent.prototype.hideColorModal = function () {
        this.lgModal.hide();
        this.formColor.resetForm();
        this.formValidate.resetForm();
    };
    StockModelsComponent.prototype.addColor = function (e) {
        var _this = this;
        this.blockui.start('content');
        this.stockModelService.saveColor(this.color)
            .subscribe(function (data) {
            _this.onAlert.emit(_this.getAlert(data));
            if (data.success) {
                _this.colors.push({
                    color_id: data.id,
                    color_name: _this.color.color_name
                });
                _this.lgModal.hide();
                _this.formColor.resetForm();
                e.resetForm();
            }
            _this.blockui.stop('content');
        });
    };
    StockModelsComponent.prototype.referenceValidator = function (formValidate) {
        this.formValidate = formValidate;
    };
    StockModelsComponent.prototype.getAlert = function (result) {
        var mode, title, message;
        if (result.success) {
            mode = 'success';
            title = 'Éxito!';
            message = result.result;
        }
        else {
            mode = 'danger';
            title = 'Error';
            message = result.result;
        }
        return {
            'title': title,
            'message': message,
            'mode': mode
        };
    };
    StockModelsComponent.prototype.printAlert = function (alert) {
        this.onAlert.emit(alert);
    };
    return StockModelsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], StockModelsComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lgModal'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["e" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["e" /* ModalDirective */]) === "function" && _b || Object)
], StockModelsComponent.prototype, "lgModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formColor'),
    __metadata("design:type", Object)
], StockModelsComponent.prototype, "formColor", void 0);
StockModelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'stock-models',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodels/stockmodels.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__["BlockUIService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__stockmodel_service__["a" /* StockModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__stockmodel_service__["a" /* StockModelService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _g || Object])
], StockModelsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=stockmodels.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VariationService = (function () {
    function VariationService(http) {
        this.http = http;
        this.url = '/api/admin/productos';
    }
    VariationService.prototype.getPrepaidVariations = function (product_id) {
        return this.http
            .get(this.getUrl([product_id, 'variation', 'prepaid']));
    };
    VariationService.prototype.getPostpaidVariations = function (product_id, affiliation_id, contract_id) {
        return this.http
            .get(this.getUrl([product_id, 'variation', 'postpaid', affiliation_id, contract_id]));
    };
    VariationService.prototype.savePrepaidVariations = function (product_id, variations) {
        if (!variations.length) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].of({ nop: true, success: false });
        }
        var formData = new FormData();
        formData.append('variation', JSON.stringify(variations));
        return this.http
            .post(this.getUrl([product_id, 'variation', 'prepaid']), formData);
    };
    VariationService.prototype.updatePrepaidVariations = function (product_id, variations) {
        if (!variations.length) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].of({ nop: true, success: false });
        }
        var formData = new FormData();
        formData.append('variation', JSON.stringify(variations));
        formData.append('_method', 'put');
        return this.http
            .post(this.getUrl([product_id, 'variation', 'prepaid']), formData);
    };
    VariationService.prototype.savePostpaidVariations = function (product_id, variations, affiliation_id, contract_id) {
        if (!variations.length) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].of({ nop: true, success: false });
        }
        var formData = new FormData();
        formData.append('variation', JSON.stringify(variations));
        formData.append('affiliation_id', affiliation_id);
        formData.append('contract_id', contract_id);
        return this.http
            .post(this.getUrl([product_id, 'variation', 'postpaid']), formData);
    };
    VariationService.prototype.updatePostpaidVariations = function (product_id, variations) {
        if (!variations.length) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].of({ nop: true, success: false });
        }
        var formData = new FormData();
        formData.append('variation', JSON.stringify(variations));
        formData.append('_method', 'put');
        return this.http
            .post(this.getUrl([product_id, 'variation', 'postpaid']), formData);
    };
    VariationService.prototype.getPrepaidPlans = function () {
        return this.http
            .get('/api/admin/plan/prepago');
    };
    VariationService.prototype.getPostpaidPlans = function () {
        return this.http
            .get('/api/admin/plan/postpago');
    };
    VariationService.prototype.getAffiliations = function () {
        return this.http
            .get('/api/admin/affiliation');
    };
    VariationService.prototype.getContracts = function () {
        return this.http
            .get('/api/admin/contract');
    };
    VariationService.prototype.getUrl = function (params) {
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
    return VariationService;
}());
VariationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], VariationService);

var _a;
//# sourceMappingURL=variation.service.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago-affiliations.component.html":
/***/ (function(module, exports) {

module.exports = "<ul id=\"myTab1\" class=\"nav nav-tabs bordered\">\r\n  <li *ngFor=\"let affiliation of affiliations; let i = index\" [class.active]=\"active == 'tab-r'+i\">\r\n    <a (click)=\"active = 'tab-r'+i\">\r\n      {{affiliation.affiliation_name}}\r\n    </a>\r\n  </li>\r\n</ul>\r\n<tabset>\r\n  <tab *ngFor=\"let affiliation of affiliations; let i = index\" [active]=\"active == 'tab-r'+i\">\r\n    <postpago-plans [affiliation_id]=\"affiliation.affiliation_id\" [contract_id]=\"contract_id\" (onAlert)=\"printAlert($event)\"></postpago-plans>\r\n  </tab>\r\n</tabset>"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago-affiliations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostpagoAffiliationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__variation_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variation.service.ts");
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







var PostpagoAffiliationsComponent = (function () {
    function PostpagoAffiliationsComponent(route, router, blockui, variationService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.variationService = variationService;
        this.notificationService = notificationService;
        this.affiliations = [];
        this.active = null;
        this.contract_id = null;
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PostpagoAffiliationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.active = 'tab-r0';
        this.variationService.getAffiliations()
            .subscribe(function (data) {
            if (data.success) {
                _this.affiliations = data.result;
            }
        });
    };
    PostpagoAffiliationsComponent.prototype.printAlert = function (alert) {
        this.onAlert.emit(alert);
    };
    return PostpagoAffiliationsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostpagoAffiliationsComponent.prototype, "contract_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PostpagoAffiliationsComponent.prototype, "onAlert", void 0);
PostpagoAffiliationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'postpago-affiliations',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago-affiliations.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__variation_service__["a" /* VariationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__variation_service__["a" /* VariationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], PostpagoAffiliationsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=postpago-affiliations.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #formPostpago=\"ngForm\" #form class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onInitComplete)=\"setValidationRef($event)\">\r\n  <input type=\"hidden\" name=\"plan_id\" [(ngModel)]=\"plan_id\">\r\n  <input *ngIf=\"variation.product_variation_id\" type=\"hidden\" name=\"product_variation_id\" [(ngModel)]=\"variation.product_variation_id\">\r\n  <input *ngIf=\"variation.promo_id\" type=\"hidden\" name=\"promo_id\" [(ngModel)]=\"variation.promo_id\">\r\n  <div class=\"row detalle-registro\">\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div class=\"input\"> <i class=\"icon-append fa\">#</i>\r\n            <input id=\"reason_code\" name=\"reason_code\" type=\"text\" placeholder=\"Reason Code\" [(ngModel)]=\"variation.reason_code\">\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div class=\"input\"> <i class=\"icon-append fa\">#</i>\r\n            <input id=\"product_package\" name=\"product_package\" type=\"text\" placeholder=\"Product Package\" [(ngModel)]=\"variation.product_package\">\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <label class=\"checkbox\">\r\n            <input id=\"variation_allowed\" name=\"variation_allowed\" type=\"checkbox\" [(ngModel)]=\"variation.variation_allowed\"><i></i>Habilitar Plan\r\n          </label>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row detalle-registro\">\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div class=\"input\"> <i class=\"icon-append fa\">S/</i>\r\n            <input id=\"product_variation_price\" name=\"product_variation_price\" type=\"text\" placeholder=\"Variation Price\" [(ngModel)]=\"variation.product_variation_price\">\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div [ngClass]=\"{'input':true, 'state-disabled': !variation.product_variation_id}\"> <i class=\"icon-append fa\">S/</i>\r\n            <input id=\"promo_price\" name=\"promo_price\" type=\"text\" placeholder=\"Promo Price\" [(ngModel)]=\"variation.promo_price\" (keyup)=\"calcDiscount()\" [attr.disabled]=\"!variation.product_variation_id ? 'disabled' : null\">\r\n            <div *ngIf=\"!variation.product_variation_id\" class=\"note\">\r\n              <strong>Nota:</strong> Habilitar plan para poder editar este campo\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div [ngClass]=\"{'input':true, 'state-disabled': !variation.product_variation_id}\"> <i class=\"icon-append fa\">%</i>\r\n            <input id=\"promo_discount\" name=\"promo_discount_calc\" type=\"text\" placeholder=\"Promo Discount\" [(ngModel)]=\"variation.promo_discount_calc\" (keyup)=\"calcPrice()\">\r\n            <input type=\"hidden\" name=\"promo_discount\" [(ngModel)]=\"variation.promo_discount\" [attr.disabled]=\"!variation.product_variation_id ? 'disabled' : null\">\r\n            <div *ngIf=\"!variation.product_variation_id\" class=\"note\">\r\n              <strong>Nota:</strong> Habilitar plan para poder editar este campo\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostpagoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostpagoFormComponent = (function () {
    function PostpagoFormComponent(route, router, blockui, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.notificationService = notificationService;
        this.variation = {
            plan_id: null,
            product_variation_id: null,
            reason_code: null,
            product_package: null,
            promo_price: null,
            promo_discount: null
        };
        this.plan_id = null;
        this.validationOptions = {
            rules: {
                product_variation_price: {
                    required: true,
                    number: true
                },
                promo_price: {
                    number: true
                },
                promo_discount_calc: {
                    number: true
                }
            },
            messages: {
                product_variation_price: {
                    required: 'Debes ingresar un precio para la variación',
                    number: 'Debes colocar un número'
                },
                promo_price: {
                    number: 'Debes colocar un número'
                },
                promo_discount_calc: {
                    number: 'Debes colocar un número'
                }
            }
        };
    }
    PostpagoFormComponent.prototype.ngOnInit = function () { };
    PostpagoFormComponent.prototype.ngAfterViewChecked = function () {
        if (typeof this.variation.promo_discount_calc === 'undefined' && this.variation.promo_discount) {
            this.variation.promo_discount_calc = (parseFloat(this.variation.promo_discount) * 100).toFixed(2);
        }
        if (typeof this.variation.variation_allowed === 'undefined') {
            this.variation.variation_allowed = this.variation.product_variation_id && this.variation.active ? true : false;
        }
    };
    PostpagoFormComponent.prototype.setValidationRef = function (formValidate) {
        this.formValidate = formValidate;
    };
    PostpagoFormComponent.prototype.calcDiscount = function () {
        if (this.variation.promo_price.toString().length > 0 &&
            parseFloat(this.variation.promo_price) &&
            parseFloat(this.variation.promo_price) !== 0) {
            this.variation.promo_discount = (1 - (parseFloat(this.variation.promo_price) / parseFloat(this.variation.product_variation_price))).toFixed(4);
            this.variation.promo_discount_calc = (parseFloat(this.variation.promo_discount) * 100).toFixed(2);
        }
        else {
            this.variation.promo_discount = null;
            this.variation.promo_discount_calc = null;
        }
    };
    PostpagoFormComponent.prototype.calcPrice = function () {
        if (typeof this.variation.promo_discount_calc !== 'undefined' &&
            this.variation.promo_discount_calc.toString().length > 0 &&
            parseFloat(this.variation.promo_discount_calc) &&
            parseFloat(this.variation.promo_discount_calc) !== 0) {
            this.variation.promo_discount = (parseFloat(this.variation.promo_discount_calc) / 100).toFixed(4);
            this.variation.promo_price = (parseFloat(this.variation.product_variation_price) * (1 - parseFloat(this.variation.promo_discount))).toFixed(2);
        }
        else {
            this.variation.promo_discount = null;
            this.variation.promo_price = null;
        }
    };
    return PostpagoFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostpagoFormComponent.prototype, "variation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostpagoFormComponent.prototype, "plan_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formPostpago'),
    __metadata("design:type", Object)
], PostpagoFormComponent.prototype, "formPostpago", void 0);
PostpagoFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'postpago-form',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _d || Object])
], PostpagoFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=postpago-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago-plans.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let plan of plans\" class=\"row padding-row\">\r\n  <div style=\"display: inline-block; border-bottom: 1px dotted; width: 100%\">\r\n    <div class=\"col col-sm-2\">\r\n      {{plan.plan_name}}\r\n    </div>\r\n    <div class=\"col col-sm-10\">\r\n      <postpago-form *ngIf=\"variationsByPlan[plan.plan_id]\" [variation]=\"variationsByPlan[plan.plan_id]\" [plan_id]=\"plan.plan_id\"></postpago-form>\r\n      <postpago-form *ngIf=\"!variationsByPlan[plan.plan_id]\" [plan_id]=\"plan.plan_id\"></postpago-form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"row padding-row detalle-registro\">\r\n  <footer>\r\n    <div class=\"btn-footer\">\r\n      <button class=\"btn btn-primary\" (click)=\"saveAll()\" type=\"button\">Guardar</button>\r\n    </div>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago-plans.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostpagoPlansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__postpago_form_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variation_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PostpagoPlansComponent = (function () {
    function PostpagoPlansComponent(route, router, blockui, variationService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.variationService = variationService;
        this.notificationService = notificationService;
        this.plans = [];
        this.affiliation_id = null;
        this.contract_id = null;
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.variations = [];
        this.variationsByPlan = {};
        this.validationOptions = {};
    }
    PostpagoPlansComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product_id = this.route.snapshot.params.id;
        this.blockui.start('content');
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].zip(this.variationService.getPostpaidPlans(), this.variationService.getPostpaidVariations(this.product_id, this.affiliation_id, this.contract_id)).subscribe(function (_a) {
            var plans = _a[0], vars = _a[1];
            if (plans.success) {
                _this.plans = plans.result;
            }
            if (vars.success) {
                _this.variations = vars.result;
                _this.variations.map(function (variation, index) {
                    _this.variationsByPlan[variation.plan_id] = variation;
                    return variation;
                });
            }
            _this.blockui.stop('content');
        });
    };
    PostpagoPlansComponent.prototype.saveAll = function () {
        var _this = this;
        this.onAlert.emit(null);
        var saveVariations = [];
        var updateVariations = [];
        var count = 0;
        this.planForms.forEach(function (formComp, index) {
            var variation = formComp.formPostpago.value;
            variation.active = 1;
            if (formComp.formPostpago.dirty && formComp.formValidate.valid()) {
                if (variation.product_variation_id) {
                    variation.active = variation.variation_allowed ? 1 : 0;
                    updateVariations.push(variation);
                }
                else {
                    if (variation.variation_allowed) {
                        saveVariations.push(variation);
                    }
                }
                // formComp.formPostpago.resetForm();
            }
            count++;
            if (count === _this.planForms.length && (saveVariations.length || updateVariations.length)) {
                _this.blockui.start('content');
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].zip(_this.variationService.savePostpaidVariations(_this.product_id, saveVariations, _this.affiliation_id, _this.contract_id), _this.variationService.updatePostpaidVariations(_this.product_id, updateVariations)).subscribe(function (_a) {
                    var save = _a[0], update = _a[1];
                    var alerts = [];
                    if (!save.nop) {
                        alerts.push(_this.getAlert(save, 'agregadas'));
                    }
                    if (!update.nop) {
                        alerts.push(_this.getAlert(update, 'actualizadas'));
                    }
                    if (save.success || update.success) {
                        _this.variationService.getPostpaidVariations(_this.product_id, _this.affiliation_id, _this.contract_id)
                            .subscribe(function (vars) {
                            if (vars.success) {
                                _this.variations = vars.result;
                                _this.variations.map(function (item, i) {
                                    _this.variationsByPlan[item.plan_id] = item;
                                    return item;
                                });
                            }
                            _this.blockui.stop('content');
                        });
                    }
                    else {
                        _this.blockui.stop('content');
                    }
                    _this.onAlert.emit(alerts);
                });
            }
        });
    };
    PostpagoPlansComponent.prototype.getAlert = function (result, title_mode) {
        var mode, title, message;
        if (result.success) {
            mode = 'success';
            title = 'Variaciones postpago ' + title_mode;
            message = result.result;
        }
        else {
            mode = 'danger';
            title = 'Variaciones postpago no pudieron ser ' + title_mode;
            message = result.result;
        }
        return {
            'title': title,
            'message': message,
            'mode': mode
        };
    };
    return PostpagoPlansComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostpagoPlansComponent.prototype, "affiliation_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PostpagoPlansComponent.prototype, "contract_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PostpagoPlansComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5__postpago_form_component__["a" /* PostpagoFormComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _b || Object)
], PostpagoPlansComponent.prototype, "planForms", void 0);
PostpagoPlansComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'postpago-plans',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago-plans.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__["BlockUIService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__variation_service__["a" /* VariationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__variation_service__["a" /* VariationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _g || Object])
], PostpagoPlansComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=postpago-plans.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"smart-form\">\r\n  <div class=\"detalle-order\">\r\n    <header>\r\n      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\r\n      Variaciones Postpago\r\n    </header>\r\n    <accordion *ngFor=\"let contract of contracts\" class=\"smart-accordion-default panel-group\" [closeOthers]=\"true\">\r\n      <accordion-group [isOpen]=\"true\" #group1>\r\n        <h4 class=\"panel-title\" accordion-heading>\r\n          <a><i class=\"pull-right fa fa-lg\" [ngClass]=\"{'fa-angle-down': group1?.isOpen, 'fa-angle-up': !group1?.isOpen}\"></i>{{contract.contract_name}}</a>\r\n        </h4>\r\n        <postpago-affiliations [contract_id]=\"contract.contract_id\" (onAlert)=\"printAlert($event)\"></postpago-affiliations>\r\n      </accordion-group>\r\n    </accordion>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostpagoVariationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__variation_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variation.service.ts");
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







var PostpagoVariationsComponent = (function () {
    function PostpagoVariationsComponent(route, router, blockui, variationService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.variationService = variationService;
        this.notificationService = notificationService;
        this.contracts = [];
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PostpagoVariationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.variationService.getContracts()
            .subscribe(function (data) {
            if (data.success) {
                _this.contracts = data.result;
            }
        });
    };
    PostpagoVariationsComponent.prototype.printAlert = function (alert) {
        this.onAlert.emit(alert);
    };
    return PostpagoVariationsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PostpagoVariationsComponent.prototype, "onAlert", void 0);
PostpagoVariationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'postpago-variations',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__variation_service__["a" /* VariationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__variation_service__["a" /* VariationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], PostpagoVariationsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=postpago.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/prepago-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #formPrepago=\"ngForm\" #form class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onInitComplete)=\"setValidationRef($event)\">\r\n  <input type=\"hidden\" name=\"plan_id\" [(ngModel)]=\"plan_id\">\r\n  <input *ngIf=\"variation.product_variation_id\" type=\"hidden\" name=\"product_variation_id\" [(ngModel)]=\"variation.product_variation_id\">\r\n  <input *ngIf=\"variation.promo_id\" type=\"hidden\" name=\"promo_id\" [(ngModel)]=\"variation.promo_id\">\r\n  <div class=\"row detalle-registro\">\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div class=\"input\"> <i class=\"icon-append fa\">#</i>\r\n            <input id=\"reason_code\" name=\"reason_code\" type=\"text\" placeholder=\"Reason Code\" [(ngModel)]=\"variation.reason_code\">\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div class=\"input\"> <i class=\"icon-append fa\">#</i>\r\n            <input id=\"product_package\" name=\"product_package\" type=\"text\" placeholder=\"Product Package\" [(ngModel)]=\"variation.product_package\">\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <label class=\"checkbox\">\r\n            <input id=\"variation_allowed\" name=\"variation_allowed\" type=\"checkbox\" [(ngModel)]=\"variation.variation_allowed\"><i></i>Habilitar Plan\r\n          </label>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row detalle-registro\">\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div [ngClass]=\"{'input':true, 'state-disabled': !variation.product_variation_id}\"> <i class=\"icon-append fa\">S/</i>\r\n            <input id=\"promo_price\" name=\"promo_price\" type=\"text\" placeholder=\"Promo Price\" [(ngModel)]=\"variation.promo_price\" (keyup)=\"calcDiscount()\" [attr.disabled]=\"!variation.product_variation_id ? 'disabled' : null\">\r\n            <div *ngIf=\"!variation.product_variation_id\" class=\"note\">\r\n              <strong>Nota:</strong> Habilitar plan para poder editar este campo\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n    <div class=\"col col-sm-4\">\r\n      <div class=\"row\">\r\n        <section class=\"col col-sm-12\">\r\n          <div [ngClass]=\"{'input':true, 'state-disabled': !variation.product_variation_id}\"> <i class=\"icon-append fa\">%</i>\r\n            <input id=\"promo_discount\" name=\"promo_discount_calc\" type=\"text\" placeholder=\"Promo Discount\" [(ngModel)]=\"variation.promo_discount_calc\" (keyup)=\"calcPrice()\" [attr.disabled]=\"!variation.product_variation_id ? 'disabled' : null\">\r\n            <input type=\"hidden\" name=\"promo_discount\" [(ngModel)]=\"variation.promo_discount\">\r\n            <div *ngIf=\"!variation.product_variation_id\" class=\"note\">\r\n              <strong>Nota:</strong> Habilitar plan para poder editar este campo\r\n            </div>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/prepago-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepagoFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PrepagoFormComponent = (function () {
    function PrepagoFormComponent(route, router, blockui, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.notificationService = notificationService;
        this.variation = {
            plan_id: null,
            product_variation_id: null,
            reason_code: null,
            product_package: null,
            promo_price: null,
            promo_discount: null
        };
        this.plan_id = null;
        this.onValidation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.validationOptions = {
            rules: {
                promo_price: {
                    number: true
                },
                promo_discount_calc: {
                    number: true
                }
            },
            messages: {
                promo_price: {
                    number: 'Debes colocar un número'
                },
                promo_discount_calc: {
                    number: 'Debes colocar un número'
                }
            }
        };
    }
    PrepagoFormComponent.prototype.ngOnInit = function () { };
    PrepagoFormComponent.prototype.ngAfterViewChecked = function () {
        if (typeof this.variation.promo_discount_calc === 'undefined' && this.variation.promo_discount) {
            this.variation.promo_discount_calc = (parseFloat(this.variation.promo_discount) * 100).toFixed(2);
        }
        if (typeof this.variation.variation_allowed === 'undefined') {
            this.variation.variation_allowed = this.variation.product_variation_id && this.variation.active ? true : false;
        }
    };
    PrepagoFormComponent.prototype.setValidationRef = function (formValidate) {
        this.formValidate = formValidate;
    };
    PrepagoFormComponent.prototype.calcDiscount = function () {
        if (this.variation.promo_price.toString().length > 0 &&
            parseFloat(this.variation.promo_price) &&
            parseFloat(this.variation.promo_price) !== 0) {
            this.variation.promo_discount = (1 - (parseFloat(this.variation.promo_price) / parseFloat(this.variation.product_variation_price))).toFixed(4);
            this.variation.promo_discount_calc = (parseFloat(this.variation.promo_discount) * 100).toFixed(2);
        }
        else {
            this.variation.promo_discount = null;
            this.variation.promo_discount_calc = null;
        }
    };
    PrepagoFormComponent.prototype.calcPrice = function () {
        if (typeof this.variation.promo_discount_calc !== 'undefined' &&
            this.variation.promo_discount_calc.toString().length > 0 &&
            parseFloat(this.variation.promo_discount_calc) &&
            parseFloat(this.variation.promo_discount_calc) !== 0) {
            this.variation.promo_discount = (parseFloat(this.variation.promo_discount_calc) / 100).toFixed(4);
            this.variation.promo_price = (parseFloat(this.variation.product_variation_price) * (1 - parseFloat(this.variation.promo_discount))).toFixed(2);
        }
        else {
            this.variation.promo_discount = null;
            this.variation.promo_price = null;
        }
    };
    return PrepagoFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PrepagoFormComponent.prototype, "variation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PrepagoFormComponent.prototype, "plan_id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PrepagoFormComponent.prototype, "onValidation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formPrepago'),
    __metadata("design:type", Object)
], PrepagoFormComponent.prototype, "formPrepago", void 0);
PrepagoFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'prepago-form',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/prepago-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], PrepagoFormComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=prepago-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/prepago.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"smart-form\">\r\n  <div class=\"detalle-order\">\r\n    <header class=\"margin-bottom-10\">\r\n      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\r\n      Variaciones Prepago\r\n    </header>\r\n    <div *ngFor=\"let plan of plans\" class=\"row padding-row\">\r\n      <div style=\"display: inline-block; border-bottom: 1px dotted; width: 100%\">\r\n        <div class=\"col col-sm-2\">\r\n          {{plan.plan_name}}\r\n        </div>\r\n        <div class=\"col col-sm-10\">\r\n          <prepago-form *ngIf=\"variationsByPlan[plan.plan_id]\" [variation]=\"variationsByPlan[plan.plan_id]\" [plan_id]=\"plan.plan_id\"></prepago-form>\r\n          <prepago-form *ngIf=\"!variationsByPlan[plan.plan_id]\" [plan_id]=\"plan.plan_id\"></prepago-form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row padding-row detalle-registro\">\r\n      <footer>\r\n        <div class=\"btn-footer\">\r\n          <button class=\"btn btn-primary\" (click)=\"saveAll()\" type=\"button\">Guardar</button>\r\n        </div>\r\n      </footer>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/prepago.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepagoVariationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prepago_form_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/prepago-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__variation_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PrepagoVariationsComponent = (function () {
    function PrepagoVariationsComponent(route, router, blockui, variationService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.variationService = variationService;
        this.notificationService = notificationService;
        this.plans = [];
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.variations = [];
        this.variationsByPlan = {};
        this.validationOptions = {};
    }
    PrepagoVariationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product_id = this.route.snapshot.params.id;
        this.blockui.start('content');
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].zip(this.variationService.getPrepaidPlans(), this.variationService.getPrepaidVariations(this.product_id)).subscribe(function (_a) {
            var plans = _a[0], vars = _a[1];
            if (plans.success) {
                _this.plans = plans.result;
            }
            if (vars.success) {
                _this.variations = vars.result;
                _this.variations.map(function (variation, index) {
                    _this.variationsByPlan[variation.plan_id] = variation;
                    return variation;
                });
            }
            _this.blockui.stop('content');
        });
    };
    PrepagoVariationsComponent.prototype.saveAll = function () {
        var _this = this;
        this.onAlert.emit(null);
        var saveVariations = [];
        var updateVariations = [];
        var count = 0;
        this.planForms.forEach(function (formComp, index) {
            var variation = formComp.formPrepago.value;
            variation.active = 1;
            if (formComp.formPrepago.dirty && formComp.formValidate.valid()) {
                if (variation.product_variation_id) {
                    variation.active = variation.variation_allowed ? 1 : 0;
                    updateVariations.push(variation);
                }
                else {
                    if (variation.variation_allowed) {
                        saveVariations.push(variation);
                    }
                }
                // formComp.formPrepago.resetForm();
            }
            count++;
            if (count === _this.planForms.length && (saveVariations.length || updateVariations.length)) {
                _this.blockui.start('content');
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].zip(_this.variationService.savePrepaidVariations(_this.product_id, saveVariations), _this.variationService.updatePrepaidVariations(_this.product_id, updateVariations)).subscribe(function (_a) {
                    var save = _a[0], update = _a[1];
                    var alerts = [];
                    if (!save.nop) {
                        alerts.push(_this.getAlert(save, 'agregadas'));
                    }
                    if (!update.nop) {
                        alerts.push(_this.getAlert(update, 'actualizadas'));
                    }
                    if (save.success || update.success) {
                        _this.variationService.getPrepaidVariations(_this.product_id)
                            .subscribe(function (vars) {
                            if (vars.success) {
                                _this.variations = vars.result;
                                _this.variations.map(function (item, i) {
                                    _this.variationsByPlan[item.plan_id] = item;
                                    return item;
                                });
                            }
                            _this.blockui.stop('content');
                        });
                    }
                    else {
                        _this.blockui.stop('content');
                    }
                    _this.onAlert.emit(alerts);
                });
            }
        });
    };
    PrepagoVariationsComponent.prototype.getAlert = function (result, title_mode) {
        var mode, title, message;
        if (result.success) {
            mode = 'success';
            title = 'Variaciones prepago ' + title_mode;
            message = result.result;
        }
        else {
            mode = 'danger';
            title = 'Variaciones prepago no pudieron ser ' + title_mode;
            message = result.result;
        }
        return {
            'title': title,
            'message': message,
            'mode': mode
        };
    };
    return PrepagoVariationsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PrepagoVariationsComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_5__prepago_form_component__["a" /* PrepagoFormComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _b || Object)
], PrepagoVariationsComponent.prototype, "planForms", void 0);
PrepagoVariationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'prepago-variations',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/prepago.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng_block_ui__["BlockUIService"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__variation_service__["a" /* VariationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__variation_service__["a" /* VariationService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _g || Object])
], PrepagoVariationsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=prepago.component.js.map

/***/ })

});
//# sourceMappingURL=catalogo.module.chunk.js.map
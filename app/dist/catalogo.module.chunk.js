webpackJsonp(["catalogo.module"],{

/***/ "../../../../../src/app/+productos/+catalogo/catalogo.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Catálogo']\" icon=\"shopping-cart\"\n      class=\"col-xs-10 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <div class=\"col-xs-2 col-sm-2 col-sm-offset-3 col-md-2 col-md-offset-3 col-lg-2 col-lg-offset-6\">\n      <a routerLink=\"./nuevo\" class=\"btn btn-primary btn-lg pull-right\" style=\"margin: 8px 0px;\">Nuevo Producto</a>\n    </div>\n  </div>\n\n  <div *ngIf=\"alert\" class=\"alert alert-block alert-{{alert.mode}}\" dismisser=\"\">\n    <h4 class=\"alert-heading\">\n      <i class=\"fa fa-check-square-o\"></i> {{alert.title}}\n    </h4>\n    <p>{{alert.message}}</p>\n  </div>\n  \n  <sa-widgets-grid>\n    \n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n\n        <sa-widget class=\"well\" color=\"darken\">\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \n                [paginationLength]=\"true\" tableClass=\"table table-striped table-bordered table-hover\">\n                <thead>\n                  <tr>\n                    <th data-class=\"expand\" style=\"width:10%\">Nro. Producto</th>\n                    <th style=\"width:12%\">Categoría</th>\n                    <th style=\"width:12%\">Marca</th>\n                    <th style=\"width:12%\">Modelo</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Prioridad</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:13%\">Actualizado</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:13%\">Publicado</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:8%\">Activo</th>\n                    <th style=\"width:10%\">Acción</th>\n                  </tr>\n                </thead>\n                <tbody *ngIf=\"itemsObs | async as items; else loading\">\n                  <ng-container *ngFor=\"let item of items; let last = last\" \n                    sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\n                    <tr>\n                      <td id=\"{{ item.product_id }}\">\n                        {{ item.product_id }}\n                      </td>\n                      <td>{{ item.category_name }}</td>\n                      <td>{{ item.brand_name }}</td>\n                      <td>{{ item.product_model }}</td>\n                      <td>{{ item.product_priority }}</td>\n                      <td [attr.data-order]=\"item.updated_at | moment:'x'\">{{ item.updated_at }}</td>\n                      <td [attr.data-order]=\"item.publish_at | moment:'x'\">{{ item.publish_at }}</td>\n                      <td>\n                        <span *ngIf=\"item.active\" class=\"fa fa-check-circle\" style=\"color: green;\"></span>\n                        <span *ngIf=\"!item.active\" class=\"fa fa-minus-circle\" style=\"color: red;\"></span>\n                      </td>\n                      <td>\n                        <div class=\"btn-group dropdown\" dropdown>\n                          <button class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                            <i class=\"fa fa-gear\"></i>\n                            <i class=\"fa fa-caret-down\"></i>\n                          </button>\n                          <ul *dropdownMenu class=\"dropdown-menu\">\n                            <li>\n                              <a (click)=\"detail(item)\">Editar</a>\n                            </li>\n                            <li *ngIf=\"!item.active\">\n                              <a (click)=\"showPopupPublish(item)\">Publicar</a>\n                            </li>\n                            <li *ngIf=\"item.active\">\n                              <a (click)=\"showPopupUnpublish(item)\">Despublicar</a>\n                            </li>\n                          </ul>\n                        </div>\n                      </td>\n                    </tr>\n                  </ng-container>                \n                </tbody>\n                <ng-template #loading>\n                  <tr class=\"odd\">\n                    <td valign=\"top\" colspan=\"10\" class=\"dataTables_empty\">\n                      {{ loadingStatus }}\n                    </td>\n                  </tr>\n                </ng-template>\n              </sa-datatable>\n            </div>\n          </div>\n        </sa-widget>\n      \n      </article>\n    </div>\n\n  </sa-widgets-grid>\n\n</div>"

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
                    targets: [8],
                    orderable: false
                }],
            order: [[5, 'desc']],
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
                _this.alert = _this.getAlertPublish(res, product);
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
                _this.alert = _this.getAlertUnpublish(res, product);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stockmodel_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__variation_service__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__catalogo_routing__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/catalogo.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__catalogo_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/catalogo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_basic_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__product_specs_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/product/specs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stockmodels_stockmodels_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodels/stockmodels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__variations_prepago_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/prepago.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__variations_postpago_component__ = __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_11__catalogo_component__["a" /* CatalogoComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_13__product_basic_component__["a" /* ProductBasicComponent */],
            __WEBPACK_IMPORTED_MODULE_14__product_specs_component__["a" /* ProductSpecsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__stockmodels_stockmodels_component__["a" /* StockModelsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__variations_prepago_component__["a" /* PrepagoVariationsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__variations_postpago_component__["a" /* PostpagoVariationsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__["a" /* FormContainerModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_10__catalogo_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_8__stockmodel_service__["a" /* StockModelService */],
            __WEBPACK_IMPORTED_MODULE_9__variation_service__["a" /* VariationService */]
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
        return this.http
            .post(this.getUrl(product_id), formData);
    };
    ProductService.prototype.getUrl = function (params) {
        if (params === void 0) { params = ''; }
        var urlParts = [this.url];
        if (params.length) {
            if (typeof params === 'object') {
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

module.exports = "<sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n  <!-- widget div-->\n  <div>\n    <!-- widget content -->\n    <div class=\"widget-body no-padding\">\n\n      <div class=\"smart-form\">\n        <div class=\"detalle-order\">\n          <header>\n            <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\n            Información Básica\n          </header>\n          <form #formBasic=\"ngForm\" id=\"smart-form-register\" class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onValidationSuccess)=\"onValidationSuccess($event)\" name=\"form-basic\">\n            <div id=\"field-detalle-order\" class=\"detalle-registro row\">\n              <div class=\"col col-sm-6\">\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"category_id\" class=\"select\">Categoría</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"select\" [class.state-disabled]=\"product.product_id\">\n                      <select [attr.disabled]=\"product.product_id ? 'disabled' : null\" name=\"category_id\" id=\"category_id\" [(ngModel)]=\"product.category_id\" (change)=\"onSelectChange($event)\">\n                        <option value=\"\">Seleccionar categoría</option>\n                        <option *ngFor=\"let item of categories\" value=\"{{item.category_id}}\">\n                          {{item.category_name}}\n                        </option>\n                      </select> <i></i>\n                      <input *ngIf=\"product.product_id\" type=\"hidden\" name=\"category_id\" value=\"{{product.category_id}}\">\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"brand_id\">Marca</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"select\" [class.state-disabled]=\"product.product_id\">\n                      <select [attr.disabled]=\"product.product_id ? 'disabled' : null\" name=\"brand_id\" id=\"brand_id\" [(ngModel)]=\"product.brand_id\" (change)=\"onSelectChange($event)\">\n                        <option value=\"\">Seleccionar marca</option>\n                        <option *ngFor=\"let item of brands\" value=\"{{item.brand_id}}\">\n                          {{item.brand_name}}\n                        </option>\n                      </select> <i></i>\n                      <input *ngIf=\"product.product_id\" type=\"hidden\" name=\"brand_id\" value=\"{{product.brand_id}}\">\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"product_model\">Modelo</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"input\" [class.state-disabled]=\"product.product_id\">\n                      <input [attr.disabled]=\"product.product_id ? 'disabled' : null\" id=\"product_model\" name=\"product_model\" type=\"text\" [(ngModel)]=\"product.product_model\"><i></i>\n                      <input *ngIf=\"product.product_id\" type=\"hidden\" name=\"product_model\" value=\"{{product.product_model}}\">\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"product_price\">Precio</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"input\">\n                      <input id=\"product_price\" name=\"product_price\" type=\"text\" [(ngModel)]=\"product.product_price\"><i></i>\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"product_priority\">Prioridad</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"input\">\n                      <input id=\"product_priority\" name=\"product_priority\" type=\"text\" [(ngModel)]=\"product.product_priority\"><i></i>\n                    </label>\n                  </section>\n                </div>\n              </div>\n              <div class=\"col col-sm-6\">\n                <div class=\"row\">\n                  <section class=\"col col-sm-12\">\n                    <label for=\"product_image\">Imagen</label>\n                  </section>\n                  <section class=\"col col-sm-12\">\n                    <label class=\"\">\n                      <img *ngIf=\"product.product_image_url\" class=\"product-image\" src=\"{{product.product_image_url}}\">\n                      <img *ngIf=\"!product.product_image_url\" class=\"product-image\" src=\"\">\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-12\">\n                    <label class=\"input input-file\">\n                      <span class=\"button\">\n                        <input #productImageInput id=\"product_image\" name=\"product_image\" type=\"file\" (change)=\"changeFilename($event)\">Buscar Imagen\n                      </span>\n                      <input type=\"text\" placeholder=\"\" value=\"{{productImageUrl}}\" readonly>\n                    </label>\n                  </section>\n                </div>\n              </div>\n              <div class=\"col col-sm-12\">\n                <div class=\"row\">\n                  <footer>\n                    <div class=\"btn-footer\">\n                      <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Guardar</button>\n                    </div>\n                  </footer>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n    <!-- end widget content -->\n  </div>\n  <!-- end widget div -->\n</sa-widget>"

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
        this.validationOptions = {
            rules: {
                category_id: {
                    required: true
                }
            },
            messages: {
                category_id: {
                    required: 'Debes seleccionar una categoría.'
                },
            }
        };
    }
    ProductBasicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productImageUrl = '';
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].zip(this.productService.getCategories(), this.productService.getBrands()).subscribe(function (_a) {
            var cats = _a[0], brands = _a[1];
            if (cats.success) {
                _this.categories = cats.result;
            }
            if (brands.success) {
                _this.brands = brands.result;
            }
        });
    };
    ProductBasicComponent.prototype.changeFilename = function (event) {
        var uploadedFiles = event.srcElement.files;
        this.productImageUrl = uploadedFiles[0].name;
    };
    ProductBasicComponent.prototype.onSelectChange = function (event) {
        $(event.currentTarget).blur();
    };
    ProductBasicComponent.prototype.onValidationSuccess = function (e) {
        console.log(e);
        this.save(e);
    };
    ProductBasicComponent.prototype.save = function (e) {
        var _this = this;
        var fileBrowser = this.productImageInput.nativeElement;
        var formData = new FormData(document.forms.namedItem('form-basic'));
        if (this.product.product_id) {
            this.productService.updateBasic(this.product.product_id, formData)
                .subscribe(function (data) {
                if (data.success) {
                    _this.product = data.result;
                }
            });
        }
        else {
            this.productService.saveBasic(formData)
                .subscribe(function (data) {
                if (data.success) {
                    // this.product = data.result;
                    console.log(data.result);
                }
            });
        }
    };
    ProductBasicComponent.prototype.buildFormData = function (data) {
    };
    return ProductBasicComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProductBasicComponent.prototype, "product", void 0);
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__product_service__["a" /* ProductService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], ProductBasicComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"[' Producto', subtitle]\" icon=\"cube\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"></sa-big-breadcrumbs>\n  </div>\n\n  <div *ngIf=\"alert\" class=\"alert alert-block alert-{{alert.mode}}\" dismisser=\"\">\n    <h4 class=\"alert-heading\">\n      <i class=\"fa fa-check-square-o\"></i>{{alert.title}}\n    </h4>\n    <p>{{alert.message}}</p>\n  </div>\n\n  <sa-widgets-grid>\n    <div class=\"row\">\n      <article>\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n          <!-- PRODUCT BASIC -->\n          <product-basic [product]=\"product\"></product-basic>\n          <!-- PRODUCT SPECS -->\n          <product-specs></product-specs>\n        </div>\n        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n          <!-- STOCK MODEL CODES -->\n          <!--stock-models></stock-models-->\n          <!-- PREPAGO VARIATIONS -->\n          <prepago-variations *ngIf=\"product.product_id && product.category_id && product.category_id == 1\"></prepago-variations>\n          <!-- POSTPAGO VARIATIONS -->\n          <postpago-variations *ngIf=\"product.product_id && product.category_id && product.category_id == 1\"></postpago-variations>\n        </div>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>"

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






var ProductComponent = (function () {
    function ProductComponent(route, router, blockui, productService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.productService = productService;
        this.product = {};
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/product/product.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__product_service__["a" /* ProductService */]) === "function" && _d || Object])
], ProductComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/specs.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/product/specs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSpecsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductSpecsComponent = (function () {
    function ProductSpecsComponent() {
    }
    ProductSpecsComponent.prototype.ngOnInit = function () {
    };
    return ProductSpecsComponent;
}());
ProductSpecsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'product-specs',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/product/specs.component.html"),
        styles: []
    })
], ProductSpecsComponent);

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
        this.url = '/api/admin/importar';
    }
    StockModelService.prototype.getUrl = function (param) {
        if (param === void 0) { param = ''; }
        var urlParts = [this.url];
        if (param.length) {
            urlParts.push(param);
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

/***/ "../../../../../src/app/+productos/+catalogo/stockmodels/stockmodels.component.html":
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n  <!-- widget div-->\n  <div>\n    <!-- widget content -->\n    <div class=\"widget-body no-padding\">\n\n      <div class=\"smart-form\">\n        <div class=\"detalle-order\">\n          <header>\n            <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\n            Stock Model Codes\n          </header>\n          <form id=\"smart-form-register\" class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onValidationSuccess)=\"onValidationSuccess($event)\">\n            <div id=\"field-detalle-order\" class=\"detalle-registro row\">\n              <div class=\"col col-sm-6\">\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"category_id\" class=\"select\">Color</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"select\">\n                      <select [attr.disabled]=\"product.product_id ? 'disabled' : null\" name=\"category_id\" id=\"category_id\" [(ngModel)]=\"product.category_id\" (change)=\"onSelectChange($event)\">\n                        <option value=\"\">Seleccionar categoría</option>\n                        <option *ngFor=\"let item of categories\" value=\"{{item.category_id}}\">\n                          {{item.category_name}}\n                        </option>\n                      </select> <i></i>\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"brand_id\">Marca</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"select\">\n                      <select [attr.disabled]=\"product.product_id ? 'disabled' : null\" name=\"brand_id\" id=\"brand_id\" [(ngModel)]=\"product.brand_id\" (change)=\"onSelectChange($event)\">\n                        <option value=\"\">Seleccionar marca</option>\n                        <option *ngFor=\"let item of brands\" value=\"{{item.brand_id}}\">\n                          {{item.brand_name}}\n                        </option>\n                      </select> <i></i>\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"product_model\">Modelo</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"input\">\n                      <input [attr.disabled]=\"product.product_id ? 'disabled' : null\" id=\"product_model\" name=\"product_model\" type=\"text\" [(ngModel)]=\"product.product_model\"><i></i>\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"product_price\">Precio</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"input\">\n                      <input id=\"product_price\" name=\"product_price\" type=\"text\" [(ngModel)]=\"product.product_price\"><i></i>\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-4\">\n                    <label for=\"product_priority\">Prioridad</label>\n                  </section>\n                  <section class=\"col col-sm-8\">\n                    <label class=\"input\">\n                      <input id=\"product_priority\" name=\"product_priority\" type=\"text\" [(ngModel)]=\"product.product_priority\"><i></i>\n                    </label>\n                  </section>\n                </div>\n              </div>\n              <div class=\"col col-sm-6\">\n                <div class=\"row\">\n                  <section class=\"col col-sm-12\">\n                    <label for=\"product_image_url\">Imagen</label>\n                  </section>\n                  <section class=\"col col-sm-12\">\n                    <label class=\"\">\n                      <img *ngIf=\"product.product_image_url\" class=\"product-image\" src=\"{{product.product_image_url}}\">\n                      <img *ngIf=\"!product.product_image_url\" class=\"product-image\" src=\"\">\n                    </label>\n                  </section>\n                </div>\n                <div class=\"row\">\n                  <section class=\"col col-sm-12\">\n                    <label class=\"input input-file\">\n                      <span class=\"button\">\n                        <input id=\"product_image_url\" name=\"product_image_url\" type=\"file\" (change)=\"changeFilename($event)\">Buscar Imagen\n                      </span>\n                      <input type=\"text\" placeholder=\"\" value=\"{{productImageUrl}}\" readonly>\n                    </label>\n                  </section>\n                </div>\n              </div>\n              <div class=\"col col-sm-12\">\n                <div class=\"row\">\n                  <footer>\n                    <div class=\"btn-footer\">\n                      <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Guardar</button>\n                    </div>\n                  </footer>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n\n    </div>\n    <!-- end widget content -->\n  </div>\n  <!-- end widget div -->\n</sa-widget>"

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/stockmodels/stockmodels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StockModelsComponent = (function () {
    function StockModelsComponent() {
    }
    StockModelsComponent.prototype.ngOnInit = function () {
    };
    return StockModelsComponent;
}());
StockModelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'stock-models',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/stockmodels/stockmodels.component.html"),
        styles: []
    })
], StockModelsComponent);

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
        this.url = '/api/admin/importar';
    }
    VariationService.prototype.getUrl = function (param) {
        if (param === void 0) { param = ''; }
        var urlParts = [this.url];
        if (param.length) {
            urlParts.push(param);
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

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/postpago.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostpagoVariationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostpagoVariationsComponent = (function () {
    function PostpagoVariationsComponent() {
    }
    PostpagoVariationsComponent.prototype.ngOnInit = function () {
    };
    return PostpagoVariationsComponent;
}());
PostpagoVariationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'postpago-variations',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/postpago.component.html"),
        styles: []
    })
], PostpagoVariationsComponent);

//# sourceMappingURL=postpago.component.js.map

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/prepago.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/+productos/+catalogo/variations/prepago.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrepagoVariationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrepagoVariationsComponent = (function () {
    function PrepagoVariationsComponent() {
    }
    PrepagoVariationsComponent.prototype.ngOnInit = function () {
    };
    return PrepagoVariationsComponent;
}());
PrepagoVariationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'prepago-variations',
        template: __webpack_require__("../../../../../src/app/+productos/+catalogo/variations/prepago.component.html"),
        styles: []
    })
], PrepagoVariationsComponent);

//# sourceMappingURL=prepago.component.js.map

/***/ })

});
//# sourceMappingURL=catalogo.module.chunk.js.map
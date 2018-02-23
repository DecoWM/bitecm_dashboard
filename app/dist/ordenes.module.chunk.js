webpackJsonp(["ordenes.module"],{

/***/ "../../../../../src/app/+ventas/+ordenes/detalle/detalle-orden.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\r\n<div id=\"content\">\r\n  <div class=\"row\">\r\n    <sa-big-breadcrumbs [items]=\"[' Detalle de Orden', 'Nro. #'+order.order_id]\" icon=\"cube\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"></sa-big-breadcrumbs>\r\n  </div>\r\n\r\n  <!--div class=\"alert alert-block alert-success\" dismisser=\"\">\r\n    <h4 class=\"alert-heading\"><i class=\"fa fa-check-square-o\"></i> Check validation!</h4>\r\n\r\n    <p>\r\n      You may also check the form validation by clicking on the form action button. Please try and see the results\r\n      below!\r\n    </p>\r\n  </div-->\r\n\r\n  <!-- widget grid -->\r\n  <sa-widgets-grid>\r\n    <!-- START ROW -->\r\n\r\n    <div class=\"row\">\r\n      <!-- NEW COL START -->\r\n      <article>\r\n\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n          <!-- Widget ID (each widget will need unique ID)-->\r\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\r\n            <!-- widget div-->\r\n            <div>\r\n              <!-- widget content -->\r\n              <div class=\"widget-body no-padding\">\r\n\r\n                <form id=\"checkout-form\" class=\"smart-form\" novalidate=\"novalidate\">\r\n                  <div class=\"detalle-order\">\r\n                    <header>\r\n                      <i class=\"icon-prepend fa fa-shopping-cart\"></i>\r\n                      Detalle de orden\r\n                    </header>\r\n                    <div id=\"field-detalle-order\">\r\n                      <div class=\"field-order\">\r\n                        <i class=\"icon-prepend fa fa-list\"></i>\r\n                        <p>\r\n                          Pedido \"{{order.order_status_name}}\"\r\n                        </p>\r\n                        <a class=\"btn btn-primary btn-xs\" (click)=\"statusHistory()\">Cambiar <i class=\"fa fa-gear\"></i></a>\r\n                      </div>\r\n                      <div class=\"field-order\">\r\n                        <i class=\"icon-prepend fa fa-building\"></i>\r\n                        <p>Sucursal {{order.branch_name ? order.branch_name : 'Ninguna'}}</p>\r\n                      </div>\r\n                      <div class=\"field-order\">\r\n                        <i class=\"icon-prepend fa fa-calendar\"></i>\r\n                        <p>{{order.order_date}}</p>\r\n                      </div>\r\n                      <div class=\"field-order\">\r\n                        <i class=\"icon-prepend fa fa-credit-card\"></i>\r\n                        <p>{{order.method_name}}</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n\r\n              </div>\r\n              <!-- end widget content -->\r\n            </div>\r\n            <!-- end widget div -->\r\n          </sa-widget>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\r\n            <!-- widget div-->\r\n            <div>\r\n              <!-- widget content -->\r\n              <div class=\"widget-body no-padding\">\r\n                <form id=\"checkout-form\" class=\"smart-form\" novalidate=\"novalidate\">\r\n                  <div class=\"detalle-order\">\r\n                      <header>\r\n                        <i class=\"icon-prepend fa fa-user\"></i>\r\n                        Detalle del Cliente\r\n                      </header>\r\n                      <div id=\"field-detalle-order\">\r\n                        <div class=\"field-order\">\r\n                            <i class=\"icon-prepend fa fa-user\"></i>\r\n                            <p>{{order.first_name}} {{order.last_name}}</p>\r\n                        </div>\r\n                        <div class=\"field-order\">\r\n                            <i class=\"icon-prepend fa  fa-home\"></i>\r\n                            <p>{{order.billing_district}}</p>\r\n                        </div>\r\n                        <div class=\"field-order\">\r\n                            <i class=\"icon-prepend fa fa-envelope\"></i>\r\n                            <p>{{order.contact_email}}</p>\r\n                        </div>\r\n                        <div class=\"field-order\">\r\n                            <i class=\"icon-prepend fa fa-phone\"></i>\r\n                            <p>{{order.billing_phone}}</p>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </sa-widget>\r\n        </div>\r\n\r\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\r\n            <!-- widget div-->\r\n            <div>\r\n              <!-- widget content -->\r\n              <div class=\"widget-body no-padding\">\r\n                <form id=\"checkout-form\" class=\"smart-form\" novalidate=\"novalidate\">\r\n                  <div class=\"detalle-order\">\r\n                      <header>\r\n                        <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\r\n                        Mas información\r\n                      </header>\r\n                      <div id=\"field-detalle-order\">\r\n                        <div class=\"field-order\">\r\n                          <i class=\"icon-prepend fa fa-credit-card\"></i>\r\n                          <p>Crédito: \"{{order.credit_status}}\"</p>\r\n                          <div class=\"btn-group dropdown\" dropdown>\r\n                            <button class=\"btn btn-primary btn-xs dropdown-toggle\" dropdownToggle>\r\n                              Cambiar\r\n                              <i class=\"fa fa-gear\"></i>\r\n                              <i class=\"fa fa-caret-down\"></i>\r\n                            </button>\r\n                            <ul *dropdownMenu class=\"dropdown-menu\">\r\n                              <li *ngFor=\"let item of credit_status_list\">\r\n                                <a *ngIf=\"item != order.credit_status\" (click)=\"showPopupCreditStatus(item)\">{{item}}</a>\r\n                              </li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                        <div *ngIf=\"order.device\" class=\"field-order\">\r\n                          <i class=\"icon-prepend fa fa-code\"></i>\r\n                          <p>Product Code: {{order.device.product_code}}</p>\r\n                        </div>\r\n                        <div *ngIf=\"order.device\" class=\"field-order\">\r\n                          <i class=\"icon-prepend fa fa-code\"></i>\r\n                          <p>Reason Code: {{order.device.reason_code}}</p>\r\n                        </div>\r\n                        <div *ngIf=\"order.device\" class=\"field-order\">\r\n                          <i class=\"icon-prepend fa fa-code\"></i>\r\n                          <p>Product Package: {{order.device.product_package}}</p>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </sa-widget>\r\n        </div>\r\n\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\r\n            <!-- widget div-->\r\n            <div>\r\n              <!-- widget content -->\r\n              <div class=\"widget-body no-padding\">\r\n                <form id=\"checkout-form\" class=\"smart-form\" novalidate=\"novalidate\">\r\n                  <div class=\"detalle-order\">\r\n                    <header>\r\n                      <i class=\"icon-prepend fa fa-cube\"></i>\r\n                      Orden <span>#{{order.order_id}}</span>\r\n                    </header>\r\n                    <div id=\"field-detalle-order\" class=\"detalle-info\">\r\n                      <div class=\"direccion-de-envio\">\r\n                        <header>\r\n                          <i class=\"icon-prepend fa fa-truck\"></i>\r\n                          Información de Envío\r\n                        </header>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"field-order\">\r\n                              <p class=\"field\">Distrito: </p>\r\n                              <p>{{order.delivery_district}}</p>\r\n                            </div>\r\n                            <div class=\"field-order\">\r\n                              <p class=\"field\">Dirección: </p>\r\n                              <p>{{order.delivery_address}}</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"field-order\">\r\n                              <p class=\"field\">Teléfono: </p>\r\n                              <p>{{order.contact_phone}}</p>\r\n                            </div>\r\n                            <div class=\"field-order\">\r\n                              <p class=\"field\">Correo Electrónico </p>\r\n                              <p>{{order.contact_email}}</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"direccion-de-envio\">\r\n                        <header>\r\n                          <i class=\"icon-prepend fa fa-phone\"></i>\r\n                          Información de afiliación\r\n                        </header>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"field-order\">\r\n                              <p class=\"field\">Afiliación: </p>\r\n                              <p>{{order.affiliation_type}}</p>\r\n                            </div>\r\n                            <div class=\"field-order\">\r\n                              <p class=\"field\">Porting Status: </p>\r\n                              <p>{{order.porting_status_desc}}</p>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-sm-6\">\r\n                            <div class=\"field-order\">\r\n                              <p class=\"field\">Número a portar: </p>\r\n                              <p>{{order.porting_phone}}</p>\r\n                            </div>\r\n                            <div class=\"field-order\">\r\n                              <p class=\"field\">Operador: </p>\r\n                              <p>{{order.source_operator}}</p>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"direccion-de-envio data-table table-responsive\">\r\n                        <table class=\"dataTable responsive display projects-table table table-striped table-bordered table-hover no-footer dtr-inline\" width=\"100%\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"sorting\" data-class=\"vermascol\" style=\"width:10%\">Producto</th>\r\n                              <th class=\"sorting\" data-class=\"expand\" style=\"width:10%\">Marca</th>\r\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Modelo</th>\r\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Color</th>\r\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Stock Model Code</th>\r\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Cantidad</th>\r\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Precio Unitario</th>\r\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Sub-total</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of order.items\">\r\n                              <td>{{item.product_id}}</td>\r\n                              <td>{{item.brand_name}}</td>\r\n                              <td>{{item.product_model}}</td>\r\n                              <td>\r\n                                <div *ngIf=\"item.stock_models.length > 1\" class=\"btn-group dropdown\" dropdown>\r\n                                  <button class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\r\n                                    <span>{{item.color_name}}</span>\r\n                                    <span class=\"caret\"></span>\r\n                                  </button>\r\n                                  <ul *dropdownMenu class=\"dropdown-menu\">\r\n                                    <li *ngFor=\"let stock_model of item.stock_models\">\r\n                                      <a *ngIf=\"stock_model.color_id != item.color_id\" (click)=\"showPopupColor(item.order_item_id, stock_model.stock_model_id)\">{{stock_model.color_name}}</a>\r\n                                    </li>\r\n                                  </ul>\r\n                                </div>\r\n                                <span *ngIf=\"item.stock_models.length == 1\">{{item.color_name}}</span>\r\n                              </td>\r\n                              <td>\r\n                                <div *ngIf=\"item.stock_models.length > 1\" class=\"btn-group dropdown\" dropdown>\r\n                                  <button class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\r\n                                    <span>{{item.stock_model_code}}</span>\r\n                                    <span class=\"caret\"></span>\r\n                                  </button>\r\n                                  <ul *dropdownMenu class=\"dropdown-menu\">\r\n                                    <li *ngFor=\"let stock_model of item.stock_models\">\r\n                                      <a *ngIf=\"stock_model.stock_model_id != item.stock_model_id\" (click)=\"showPopupStockModel(item.order_item_id, stock_model.stock_model_id)\">{{stock_model.stock_model_code}}</a>\r\n                                    </li>\r\n                                  </ul>\r\n                                </div>\r\n                                <span *ngIf=\"item.stock_models.length == 1\">{{item.stock_model_code}}</span>\r\n                              </td>\r\n                              <td>{{item.quantity}}</td>\r\n                              <td *ngIf=\"!item.promo_id\">{{item.product_price}}</td>\r\n                              <td *ngIf=\"item.promo_id\">\r\n                                <span>{{item.promo_price}}</span>\r\n                                <span class=\"normal-price\">{{item.product_price}}</span>\r\n                              </td>\r\n                              <td>{{item.subtotal_igv}}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                          <tfoot>\r\n                            <tr>\r\n                              <td colspan=\"6\"></td>\r\n                              <td>Total + IGV</td>\r\n                              <td>{{order.total_igv}}</td>\r\n                            </tr>\r\n                          </tfoot>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </form>\r\n              </div>\r\n\r\n            </div>\r\n          </sa-widget>\r\n        </div>\r\n\r\n      </article>\r\n    </div>\r\n  </sa-widgets-grid>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/+ventas/+ordenes/detalle/detalle-orden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleOrdenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordenes_service__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetalleOrdenComponent = (function () {
    function DetalleOrdenComponent(route, router, blockui, ordenesService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.ordenesService = ordenesService;
        this.notificationService = notificationService;
        this.order = {};
        this.credit_status_list = [
            'Pendiente', 'Aprobada', 'Rechazada', 'Observada'
        ];
        this.options = {
            columnDefs: [{
                    targets: [0, 1, 2, 3, 4, 5, 6, 7],
                    orderable: false
                }]
        };
    }
    DetalleOrdenComponent.prototype.ngOnInit = function () {
        var _this = this;
        var order_id = this.route.snapshot.params.id;
        this.blockui.start('content');
        this.ordenesService.getOrden(order_id)
            .subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this.order = data.result;
            }
            _this.blockui.stop('content');
        });
    };
    DetalleOrdenComponent.prototype.statusHistory = function () {
        if (this.order.order_id) {
            this.router.navigate(['status'], { relativeTo: this.route });
        }
    };
    DetalleOrdenComponent.prototype.showPopupCreditStatus = function (credit_status) {
        var _this = this;
        if (this.order.credit_status === credit_status) {
            return;
        }
        this.notificationService.smartMessageBox({
            title: '<i class="fa fa-sign-out txt-color-orangeDark"></i> Actualizar <span class="txt-color-orangeDark"><strong>Evaluación Crediticia</strong></span>',
            content: '¿Seguro que quieres actualizar el estado de la evaluación crediticia?',
            buttons: '[No][Si]'
        }, function (ButtonPressed) {
            if (ButtonPressed === 'Si') {
                _this.updateCreditStatus(credit_status);
            }
        });
    };
    DetalleOrdenComponent.prototype.updateCreditStatus = function (credit_status) {
        var _this = this;
        if (this.order.credit_status === credit_status) {
            return;
        }
        this.blockui.start('content');
        var old_cred_stat = this.order.credit_status;
        this.order.credit_status = credit_status;
        this.ordenesService.updateOrden(this.order)
            .subscribe(function (data) {
            console.log(data);
            if (data.success) {
                console.log(data.result);
            }
            else {
                _this.order.credit_status = old_cred_stat;
            }
            _this.blockui.stop('content');
        });
    };
    DetalleOrdenComponent.prototype.showPopupColor = function (order_item_id, stock_model_id) {
        var _this = this;
        if (this._getItem(order_item_id).stock_model_id === stock_model_id) {
            return;
        }
        this.notificationService.smartMessageBox({
            title: '<i class="fa fa-sign-out txt-color-orangeDark"></i> Actualizar <span class="txt-color-orangeDark"><strong>Color</strong></span>',
            content: '¿Seguro que quieres actualizar el color de este producto? Se actualizará también el stock model code.',
            buttons: '[No][Si]'
        }, function (ButtonPressed) {
            if (ButtonPressed === 'Si') {
                _this.updateStockModel(order_item_id, stock_model_id);
            }
        });
    };
    DetalleOrdenComponent.prototype.showPopupStockModel = function (order_item_id, stock_model_id) {
        var _this = this;
        if (this._getItem(order_item_id).stock_model_id === stock_model_id) {
            return;
        }
        this.notificationService.smartMessageBox({
            title: '<i class="fa fa-sign-out txt-color-orangeDark"></i> Actualizar <span class="txt-color-orangeDark"><strong>Stock Model Code</strong></span>',
            content: '¿Seguro que quieres actualizar el stock model code de este producto? Se actualizará también el color.',
            buttons: '[No][Si]'
        }, function (ButtonPressed) {
            if (ButtonPressed === 'Si') {
                _this.updateStockModel(order_item_id, stock_model_id);
            }
        });
    };
    DetalleOrdenComponent.prototype.updateStockModel = function (order_item_id, stock_model_id) {
        var _this = this;
        var item = this._getItem(order_item_id);
        if (item.stock_model_id === stock_model_id) {
            return;
        }
        this.blockui.start('content');
        var params = {
            'order_item_id': order_item_id,
            'stock_model_id': stock_model_id
        };
        this.ordenesService.updateItem(this.order.order_id, params)
            .subscribe(function (res) {
            console.log(res);
            if (res.success) {
                _this.ordenesService.getOrden(_this.order.order_id)
                    .subscribe(function (data) {
                    console.log(data);
                    if (data.success) {
                        _this.order = data.result;
                    }
                    _this.blockui.stop('content');
                });
            }
            else {
                _this.blockui.stop('content');
            }
        });
    };
    DetalleOrdenComponent.prototype.removeProduct = function (product_id) {
        console.log(product_id);
    };
    DetalleOrdenComponent.prototype.editOrder = function () {
        console.log(this.order);
    };
    DetalleOrdenComponent.prototype._getItem = function (order_item_id) {
        for (var i = 0; i < this.order.items.length; i++) {
            if (this.order.items[i].order_item_id === order_item_id) {
                return this.order.items[i];
            }
        }
        return null;
    };
    return DetalleOrdenComponent;
}());
DetalleOrdenComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'order-detail',
        template: __webpack_require__("../../../../../src/app/+ventas/+ordenes/detalle/detalle-orden.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ordenes_service__["a" /* OrdenesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ordenes_service__["a" /* OrdenesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _e || Object])
], DetalleOrdenComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=detalle-orden.component.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/+ordenes/ordenes.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n  <div class=\"row\">\r\n    <sa-big-breadcrumbs [items]=\"['Ordenes']\" icon=\"shopping-cart\"\r\n      class=\"col-xs-10 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"alert\">\r\n    <alert *ngFor=\"let a of alert\" type=\"{{a.mode}}\" dismissible=\"true\">\r\n      <i class=\"fa-fw fa fa-{{a.icon}}\"></i>\r\n      <strong>{{a.title}}</strong> {{a.message}}\r\n    </alert>\r\n  </ng-container>\r\n  \r\n  <sa-widgets-grid>\r\n    \r\n    <div class=\"row\">\r\n      <article class=\"col-sm-12\">\r\n\r\n        <sa-widget class=\"well\" color=\"darken\">\r\n          <div>\r\n            <div class=\"widget-body no-padding\">\r\n              <mini-general-orders (onDateChanged)=\"filterByDateRange()\"></mini-general-orders>\r\n              <sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \r\n                [paginationLength]=\"true\" [filter]=\"true\" [dateRangeOptions]=\"dateRangeOptions\" (onInit)=\"initDtObj($event)\" tableClass=\"table table-striped table-bordered table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th class=\"hasinput\" style=\"width:10%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Nro. Pedido\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:16%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Fecha\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:10%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Cliente / DNI\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:10%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Tipo de Linea\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:10%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Servicio\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:10%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Plan\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:12%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Estado\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:10%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Total\">\r\n                    </th>\r\n                    <th class=\"hasinput\" style=\"width:12%\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Evaluación\">\r\n                    </th>\r\n                  </tr>\r\n                  <tr>\r\n                    <th data-class=\"expand\" style=\"width:10%\">Nro. Pedido</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:16%\">Fecha</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Cliente / DNI</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Tipo de Linea</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Servicio</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Plan</th>\r\n                    <!--<th data-hide=\"phone,tablet\">Sucursal</th>-->\r\n                    <th data-hide=\"phone,tablet\" style=\"width:12%\">Estado</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Total</th>\r\n                    <th data-hide=\"phone,tablet\" style=\"width:12%\">Evaluación</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngIf=\"itemsObs | async as items; else loading\">\r\n                  <ng-container *ngFor=\"let item of items; let last = last\" \r\n                    sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\r\n                    <tr>\r\n                      <td id=\"{{ item.order_id }}\">\r\n                        <a class=\"clic-icon\" (click)=\"detail(item)\"><span class=\"fa fa-eye\"></span> {{ item.order_id }}</a>\r\n                      </td>\r\n                      <td [attr.data-order]=\"item.created_at | moment:'x'\">{{ item.created_at }}</td>\r\n                      <td>{{ item.id_number }}</td>\r\n                      <td>{{ item.affiliation_type }}</td>\r\n                      <td>{{ item.service_type }}</td>\r\n                      <td>{{ item.plan_name }}</td>\r\n                      <!--<td>{{ item.branch_name }}</td>-->\r\n                      <td>{{ item.order_status_name }}</td>\r\n                      <td>{{ item.total_igv }}</td>\r\n                      <td>{{ item.credit_status }}</td>\r\n                    </tr>\r\n                  </ng-container>                \r\n                </tbody>\r\n                <ng-template #loading>\r\n                  <tr class=\"odd\">\r\n                    <td valign=\"top\" colspan=\"10\" class=\"dataTables_empty\">\r\n                      {{ loadingStatus }}\r\n                    </td>\r\n                  </tr>\r\n                </ng-template>\r\n              </sa-datatable>\r\n\r\n            </div>\r\n          </div>\r\n        </sa-widget>\r\n      \r\n      </article>\r\n    </div>\r\n\r\n  </sa-widgets-grid>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/+ventas/+ordenes/ordenes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ordenes_service__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__ = __webpack_require__("../../../../ng-socket-io/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrdenesComponent = (function () {
    function OrdenesComponent(route, router, blockui, ordenesService, notificationService, socket) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.ordenesService = ordenesService;
        this.notificationService = notificationService;
        this.socket = socket;
        this.itemsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.ordenes = [];
        this.alert = null;
        this.dtObj = null;
        this.options = {
            buttons: [
                { extend: 'excel', text: 'Exportar filtrado' }
            ],
            pageLength: 25,
            order: [[1, 'desc']]
        };
        this.dateRangeOptions = {
            from: '#begin_date',
            to: '#end_date',
            column: 1
        };
        this.loadingStatus = 'Cargando ordenes...';
    }
    OrdenesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        this.alert = null;
        this.socket.on('connect', function () {
            console.log('Conectado a socket.io');
        });
        this.socket.on('order completed', function (event) {
            console.log('Nueva orden #' + event.order_id);
            self.ordenesService.getOrdenSimple(event.order_id)
                .subscribe(function (data) {
                if (data.success) {
                    var orden = data.result;
                    self.ordenes.unshift({
                        'order_id': orden.order_id,
                        'created_at': orden.order_date,
                        'id_number': orden.id_number,
                        'affiliation_type': orden.affiliation_type,
                        'service_type': orden.service_type,
                        'plan_name': event.plan_name,
                        'order_status_name': orden.order_status_name,
                        'total_igv': orden.total_igv,
                        'credit_status': orden.credit_status
                    });
                    self.notificationService.smallBox({
                        title: 'Nueva orden registrada #' + orden.order_id,
                        content: orden.created_at,
                        color: '#8ac38b',
                        iconSmall: 'fa-fw fa fa-check bounce animated',
                        timeout: 4000
                    });
                }
            });
        });
        this.blockui.start('content');
        this.ordenesService.getOrdenes()
            .subscribe(function (data) {
            // console.log(data);
            _this.blockui.stop('content');
            _this.ordenes = data.result;
            _this.itemsObs.next(_this.ordenes);
            if (_this.ordenes.length === 0) {
                _this.loadingStatus = 'No se encontraron registros';
            }
        }, function (error) {
            _this.blockui.stop('content');
            if (error.status === 401) {
                // this.authService.logout(true);
            }
        });
    };
    OrdenesComponent.prototype.initDtObj = function (dtObj) {
        this.dtObj = dtObj;
    };
    OrdenesComponent.prototype.filterByDateRange = function () {
        if (this.dtObj) {
            this.dtObj.draw();
        }
    };
    OrdenesComponent.prototype.detail = function (data) {
        this.router.navigate([data.order_id], { relativeTo: this.route });
    };
    OrdenesComponent.prototype.printAlert = function (alert) {
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
    return OrdenesComponent;
}());
OrdenesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ordenes',
        template: __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ordenes_service__["a" /* OrdenesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ordenes_service__["a" /* OrdenesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["Socket"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_ng_socket_io__["Socket"]) === "function" && _f || Object])
], OrdenesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=ordenes.component.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/+ordenes/ordenes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdenesModule", function() { return OrdenesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__ = __webpack_require__("../../../../../src/app/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__ = __webpack_require__("../../../../../src/app/shared/forms/custom/form-container/form-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/select2/select2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reportes_reportes_module__ = __webpack_require__("../../../../../src/app/+ventas/+reportes/reportes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ordenes_service__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ordenes_routing__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ordenes_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__detalle_detalle_orden_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/detalle/detalle-orden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__status_form_status_form_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/status-form/status-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var OrdenesModule = (function () {
    function OrdenesModule() {
    }
    return OrdenesModule;
}());
OrdenesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__ordenes_component__["a" /* OrdenesComponent */],
            __WEBPACK_IMPORTED_MODULE_11__detalle_detalle_orden_component__["a" /* DetalleOrdenComponent */],
            __WEBPACK_IMPORTED_MODULE_12__status_form_status_form_component__["a" /* StatusFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__["a" /* FormContainerModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_9__ordenes_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_7__reportes_reportes_module__["ReportesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ordenes_service__["a" /* OrdenesService */]
        ]
    })
], OrdenesModule);

//# sourceMappingURL=ordenes.module.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/+ordenes/ordenes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordenes_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__status_form_status_form_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/status-form/status-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__detalle_detalle_orden_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/detalle/detalle-orden.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ModuleWithProviders } from '@angular/core'



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ordenes_component__["a" /* OrdenesComponent */],
        data: { pageTitle: '' }
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_4__detalle_detalle_orden_component__["a" /* DetalleOrdenComponent */],
        data: { pageTitle: 'Orden' }
    },
    {
        path: ':id/status',
        component: __WEBPACK_IMPORTED_MODULE_3__status_form_status_form_component__["a" /* StatusFormComponent */],
        data: { pageTitle: 'Estados de la Orden' }
    }
];
var routing = (function () {
    function routing() {
    }
    return routing;
}());
routing = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], routing);

//# sourceMappingURL=ordenes.routing.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/+ordenes/ordenes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdenesService; });
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






var OrdenesService = (function () {
    function OrdenesService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.url = '/api/admin/ordenes';
    }
    OrdenesService.prototype.getOrdenes = function () {
        return this.http
            .get(this.url);
    };
    OrdenesService.prototype.getOrden = function (id) {
        return this.http
            .get(this.getUrl(id));
    };
    OrdenesService.prototype.getOrdenSimple = function (id) {
        return this.http
            .get(this.getUrl([id, 'simple']));
    };
    OrdenesService.prototype.updateOrden = function (orden) {
        return this.http
            .put(this.getUrl(orden.order_id), orden);
    };
    OrdenesService.prototype.deleteOrden = function (id) {
        return this.http
            .delete(this.getUrl(id));
    };
    OrdenesService.prototype.createItem = function (id, item) {
    };
    OrdenesService.prototype.updateItem = function (id, item) {
        return this.http
            .put(this.getUrl([id, 'item']), item);
    };
    OrdenesService.prototype.deleteItem = function (id, item) {
    };
    OrdenesService.prototype.getStatusList = function () {
        return this.http
            .get(this.getUrl('status'));
    };
    OrdenesService.prototype.getStatusHistory = function (id) {
        return this.http
            .get(this.getUrl([id, 'status']));
    };
    OrdenesService.prototype.createStatus = function (order_id, status) {
        return this.http
            .post(this.getUrl([order_id, 'status']), status);
    };
    OrdenesService.prototype.getUrl = function (params) {
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
    return OrdenesService;
}());
OrdenesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], OrdenesService);

var _a, _b;
//# sourceMappingURL=ordenes.service.js.map

/***/ }),

/***/ "../../../../../src/app/+ventas/+ordenes/status-form/status-form.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\r\n<div id=\"content\">\r\n  <div class=\"row\">\r\n    <sa-big-breadcrumbs [items]=\"['Estados de la Orden', 'Nro. #'+order_id]\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\"></sa-big-breadcrumbs>\r\n  </div>\r\n\r\n  <div *ngIf=\"alert\" class=\"alert alert-block alert-{{alert.mode}}\" dismisser=\"\">\r\n    <h4 class=\"alert-heading\">\r\n      <i class=\"fa fa-check-square-o\"></i> Cambio {{alert.title}}\r\n    </h4>\r\n    <p>{{alert.message}}</p>\r\n  </div>\r\n\r\n  <!-- widget grid -->\r\n  <sa-widgets-grid>\r\n    <!-- START ROW -->\r\n\r\n    <div class=\"row\">\r\n      <!-- NEW COL START -->\r\n      <article>\r\n\r\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n          <!-- Widget ID (each widget will need unique ID)-->\r\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\r\n            <!-- widget div-->\r\n            <div>\r\n              <!-- widget content -->\r\n              <div class=\"widget-body no-padding\">\r\n\r\n                <div class=\"smart-form\">\r\n                  <div class=\"detalle-order\">\r\n                    <header>\r\n                      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\r\n                      Historial\r\n                    </header>\r\n                    <div id=\"field-detalle-order\" class=\"detalle-registro \">\r\n                      <div class=\"direccion-de-envio data-table table-responsive\">\r\n                        <!--sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \r\n                          [paginationLength]=\"true\" tableClass=\"table table-striped table-bordered table-hover\"-->\r\n                        <table class=\"dataTable responsive display projects-table table table-striped table-bordered table-hover no-footer dtr-inline\" width=\"100%\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th class=\"sorting\" data-class=\"vermascol\" style=\"width:20%\">Fecha</th>\r\n                              <th class=\"sorting\" data-class=\"expand\" style=\"width:35%\">Comentario</th>\r\n                              <th class=\"sorting\" data-hide=\"phone, tablet\" style=\"width:25%\">Estado</th>\r\n                              <th class=\"sorting\" data-hide=\"phone, tablet\" style=\"width:20%\">Notificación a Usuario</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <ng-container *ngFor=\"let item of status_history; let last = last\" sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\r\n                              <tr>\r\n                                <td>{{item.created_at}}</td>\r\n                                <td>{{item.comment}}</td>\r\n                                <td>{{item.order_status_name}}</td>\r\n                                <td>{{item.notify_customer ? 'Si' : 'No'}}</td>\r\n                              </tr>\r\n                            </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                        <!--/sa-datatable-->\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"detalle-order\">\r\n                    <header>\r\n                      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\r\n                      Ingresar Registro\r\n                    </header>\r\n                    <form id=\"smart-form-register\" class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onValidationSuccess)=\"onValidationSuccess($event)\">\r\n                      <div id=\"field-detalle-order\" class=\"detalle-registro\">\r\n                        <div class=\"row\">\r\n                          <section class=\"col col-6\">\r\n                            <label for=\"select-estado\" class=\"select\">Estado de orden</label>\r\n                          </section>\r\n                          <section class=\"col col-6\">\r\n                            <label class=\"select\">\r\n                              <select name=\"order_status_id\" id=\"select-estado\" [(ngModel)]=\"status.order_status_id\" (change)=\"onSelectChange($event)\">\r\n                                <option value=\"\">Seleccionar estado</option>\r\n                                <option *ngFor=\"let item of status_list\" value=\"{{item.order_status_id}}\">\r\n                                  {{item.order_status_name}}\r\n                                </option>\r\n                              </select> <i></i>\r\n                            </label>\r\n                          </section>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <section class=\"col col-6\">\r\n                            <label for=\"check-usuario\">Notificación a Usuario</label>\r\n                          </section>\r\n                          <section class=\"col col-6\">\r\n                            <label class=\"checkbox\">\r\n                              <input id=\"notify_customer\" name=\"notify_customer\" type=\"checkbox\" [(ngModel)]=\"status.notify_customer\"><i></i>\r\n                            </label>\r\n                          </section>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <section class=\"col col-6\">\r\n                            <label for=\"message\">Comentario</label>\r\n                          </section>\r\n                          <section class=\"col col-6\">\r\n                            <label class=\"textarea\">\r\n                              <i class=\"icon-append fa fa-comment\"></i>\r\n                              <textarea id=\"comment\" name=\"comment\" rows=\"4\" [(ngModel)]=\"status.comment\"></textarea>\r\n                            </label>\r\n                          </section>\r\n                        </div>\r\n                        <footer>\r\n                          <div class=\"row\">\r\n                            <div class=\"btn-footer\">\r\n                              <button class=\"btn btn-primary\" name=\"back\" type=\"button\" onclick=\"window.history.back();\">Regresar</button>\r\n                              <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Crear Estado</button>\r\n                            </div>\r\n                          </div>\r\n                        </footer>\r\n                      </div>\r\n                    </form>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <!-- end widget content -->\r\n            </div>\r\n            <!-- end widget div -->\r\n          </sa-widget>\r\n        </div>\r\n\r\n      </article>\r\n    </div>\r\n  </sa-widgets-grid>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/+ventas/+ordenes/status-form/status-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ordenes_service__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StatusFormComponent = (function () {
    function StatusFormComponent(router, route, blockui, ordenesService) {
        this.router = router;
        this.route = route;
        this.blockui = blockui;
        this.ordenesService = ordenesService;
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Subject"]();
        this.alert = null;
        this.status = {
            order_status_id: '',
            notify_customer: false,
            comment: ''
        };
        this.status_history = [];
        this.validationOptions = {
            rules: {
                order_status_id: {
                    required: true
                }
            },
            messages: {
                order_status_id: {
                    required: 'Debes seleccionar un estado.'
                },
            }
        };
        this.options = {
            dom: 'Bfrtip',
            pageLength: 10,
            order: [[0, 'desc']]
        };
    }
    StatusFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alert = null;
        this.blockui.start('content');
        this.order_id = this.route.snapshot.params.id;
        __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].zip(this.ordenesService.getStatusHistory(this.order_id), this.ordenesService.getStatusList()).subscribe(function (_a) {
            var d_sh = _a[0], d_sl = _a[1];
            console.log(d_sh, d_sl);
            if (d_sh.success) {
                _this.status_history = d_sh.result;
            }
            if (d_sl.success) {
                _this.status_list = d_sl.result;
            }
            _this.blockui.stop('content');
        });
    };
    StatusFormComponent.prototype.onSelectChange = function (event) {
        $(event.currentTarget).blur();
    };
    StatusFormComponent.prototype.onValidationSuccess = function (e) {
        console.log(e);
        this.save(this.status, e);
    };
    StatusFormComponent.prototype.save = function (status, e) {
        var _this = this;
        if (status) {
            this.blockui.start('content');
            this.ordenesService.createStatus(this.order_id, status)
                .subscribe(function (message) {
                _this.alert = _this.getAlert(message);
                if (message.success) {
                    _this.status = {
                        order_status_id: '',
                        notify_customer: false,
                        comment: ''
                    };
                    e.resetForm();
                    $('#select-estado').parent('label').removeClass('state-error').removeClass('state-success');
                }
                else {
                    $('#select-estado').parent('label').removeClass('state-success').addClass('state-error');
                }
                _this.blockui.stop('content');
                _this.blockui.start('content');
                // $('button[name="submit"]').prop('disabled', (i, v) => !v);
                _this.ordenesService.getStatusHistory(_this.order_id)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.status_history = data.result;
                    }
                    _this.blockui.stop('content');
                });
            });
        }
    };
    StatusFormComponent.prototype.getAlert = function (data) {
        var mode, title;
        if (data.success) {
            mode = 'success';
            title = 'Completado';
        }
        else {
            mode = 'danger';
            title = 'Fallido';
        }
        return {
            'title': title,
            'message': data.result,
            'mode': mode
        };
    };
    return StatusFormComponent;
}());
StatusFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'status-form',
        template: __webpack_require__("../../../../../src/app/+ventas/+ordenes/status-form/status-form.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ordenes_service__["a" /* OrdenesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ordenes_service__["a" /* OrdenesService */]) === "function" && _d || Object])
], StatusFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=status-form.component.js.map

/***/ })

});
//# sourceMappingURL=ordenes.module.chunk.js.map
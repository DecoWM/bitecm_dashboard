webpackJsonp(["ordenes.module"],{

/***/ "../../../../../src/app/+ventas/+ordenes/detalle/detalle-orden.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"[' Detalle de Orden', 'Nro. #'+order.order_id]\" icon=\"cube\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"></sa-big-breadcrumbs>\n  </div>\n\n  <!--div class=\"alert alert-block alert-success\" dismisser=\"\">\n    <h4 class=\"alert-heading\"><i class=\"fa fa-check-square-o\"></i> Check validation!</h4>\n\n    <p>\n      You may also check the form validation by clicking on the form action button. Please try and see the results\n      below!\n    </p>\n  </div-->\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- START ROW -->\n\n    <div class=\"row\">\n      <!-- NEW COL START -->\n      <article>\n\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n          <!-- Widget ID (each widget will need unique ID)-->\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n            <!-- widget div-->\n            <div>\n              <!-- widget content -->\n              <div class=\"widget-body no-padding\">\n\n                <form id=\"checkout-form\" class=\"smart-form\" novalidate=\"novalidate\">\n                  <div class=\"detalle-order\">\n                    <header>\n                      <i class=\"icon-prepend fa fa-shopping-cart\"></i>\n                      Detalle de orden\n                    </header>\n                    <div id=\"field-detalle-order\">\n                      <div class=\"field-order\">\n                        <i class=\"icon-prepend fa fa-list\"></i>\n                        <p>\n                          Pedido {{order.order_status_name}}\n                        </p>\n                        <a class=\"btn btn-primary btn-xs\" (click)=\"statusHistory()\"><i class=\"fa fa-gear\"></i></a>\n                      </div>\n                      <div class=\"field-order\">\n                        <i class=\"icon-prepend fa fa-building\"></i>\n                        <p>Sucursal {{order.branch_name ? order.branch_name : 'Ninguna'}}</p>\n                      </div>\n                      <div class=\"field-order\">\n                        <i class=\"icon-prepend fa fa-calendar\"></i>\n                        <p>{{order.created_at}}</p>\n                      </div>\n                      <div class=\"field-order\">\n                        <i class=\"icon-prepend fa fa-credit-card\"></i>\n                        <p>{{order.method_name}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n\n              </div>\n              <!-- end widget content -->\n            </div>\n            <!-- end widget div -->\n          </sa-widget>\n        </div>\n\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n            <!-- widget div-->\n            <div>\n              <!-- widget content -->\n              <div class=\"widget-body no-padding\">\n                <form id=\"checkout-form\" class=\"smart-form\" novalidate=\"novalidate\">\n                  <div class=\"detalle-order\">\n                      <header>\n                        <i class=\"icon-prepend fa fa-user\"></i>\n                        Detalle del Cliente\n                      </header>\n                      <div id=\"field-detalle-order\">\n                        <div class=\"field-order\">\n                            <i class=\"icon-prepend fa fa-user\"></i>\n                            <p>{{order.first_name}} {{order.last_name}}</p>\n                        </div>\n                        <div class=\"field-order\">\n                            <i class=\"icon-prepend fa  fa-home\"></i>\n                            <p>{{order.billing_district}}</p>\n                        </div>\n                        <div class=\"field-order\">\n                            <i class=\"icon-prepend fa fa-envelope\"></i>\n                            <p>{{order.contact_email}}</p>\n                        </div>\n                        <div class=\"field-order\">\n                            <i class=\"icon-prepend fa fa-phone\"></i>\n                            <p>{{order.billing_phone}}</p>\n                        </div>\n                      </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </sa-widget>\n        </div>\n\n        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n            <!-- widget div-->\n            <div>\n              <!-- widget content -->\n              <div class=\"widget-body no-padding\">\n                <form id=\"checkout-form\" class=\"smart-form\" novalidate=\"novalidate\">\n                  <div class=\"detalle-order\">\n                      <header>\n                        <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\n                        Mas información\n                      </header>\n                      <div id=\"field-detalle-order\">\n                        <div class=\"field-order\">\n                          <i class=\"icon-prepend fa fa-credit-card\"></i>\n                          <p>Crédito: {{order.credit_status}}</p>\n                          <div class=\"btn-group dropdown\" dropdown>\n                            <button class=\"btn btn-primary btn-xs dropdown-toggle\" dropdownToggle>\n                              <i class=\"fa fa-gear\"></i>\n                              <i class=\"fa fa-caret-down\"></i>\n                            </button>\n                            <ul *dropdownMenu class=\"dropdown-menu\">\n                              <li *ngFor=\"let item of credit_status_list\">\n                                <a *ngIf=\"item != order.credit_status\" (click)=\"showPopupCreditStatus(item)\">{{item}}</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                        <div *ngIf=\"order.device\" class=\"field-order\">\n                          <i class=\"icon-prepend fa fa-code\"></i>\n                          <p>Product Code: {{order.device.product_code}}</p>\n                        </div>\n                        <div *ngIf=\"order.device\" class=\"field-order\">\n                          <i class=\"icon-prepend fa fa-code\"></i>\n                          <p>Reason Code: {{order.device.reason_code}}</p>\n                        </div>\n                        <div *ngIf=\"order.device\" class=\"field-order\">\n                          <i class=\"icon-prepend fa fa-code\"></i>\n                          <p>Product Package: {{order.device.product_package}}</p>\n                        </div>\n                      </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </sa-widget>\n        </div>\n\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n            <!-- widget div-->\n            <div>\n              <!-- widget content -->\n              <div class=\"widget-body no-padding\">\n                <form id=\"checkout-form\" class=\"smart-form\" novalidate=\"novalidate\">\n                  <div class=\"detalle-order\">\n                    <header>\n                      <i class=\"icon-prepend fa fa-cube\"></i>\n                      Orden <span>#{{order.order_id}}</span>\n                    </header>\n                    <div id=\"field-detalle-order\" class=\"detalle-info\">\n                      <div class=\"direccion-de-envio\">\n                        <header>\n                          <i class=\"icon-prepend fa fa-truck\"></i>\n                          Información de Envío\n                        </header>\n                        <div class=\"row\">\n                          <div class=\"col-sm-6\">\n                            <div class=\"field-order\">\n                              <p class=\"field\">Distrito: </p>\n                              <p>{{order.delivery_district}}</p>\n                            </div>\n                            <div class=\"field-order\">\n                              <p class=\"field\">Dirección: </p>\n                              <p>{{order.delivery_address}}</p>\n                            </div>\n                          </div>\n                          <div class=\"col-sm-6\">\n                            <div class=\"field-order\">\n                              <p class=\"field\">Teléfono: </p>\n                              <p>{{order.contact_phone}}</p>\n                            </div>\n                            <div class=\"field-order\">\n                              <p class=\"field\">Correo Electrónico </p>\n                              <p>{{order.contact_email}}</p>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"direccion-de-envio data-table table-responsive\">\n                        <table class=\"dataTable responsive display projects-table table table-striped table-bordered table-hover no-footer dtr-inline\" width=\"100%\">\n                          <thead>\n                            <tr>\n                              <th class=\"sorting\" data-class=\"vermascol\" style=\"width:10%\">Producto</th>\n                              <th class=\"sorting\" data-class=\"expand\" style=\"width:10%\">Marca</th>\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Modelo</th>\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Color</th>\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Stock Model Code</th>\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Cantidad</th>\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Precio Unitario</th>\n                              <th class=\"sorting\" data-hide=\"phone,tablet\" style=\"width:10%\">Sub-total</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let item of order.items\">\n                              <td>{{item.product_id}}</td>\n                              <td>{{item.brand_name}}</td>\n                              <td>{{item.product_model}}</td>\n                              <td>\n                                <div *ngIf=\"item.stock_models.length > 1\" class=\"btn-group dropdown\" dropdown>\n                                  <button class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                                    <span>{{item.color_name}}</span>\n                                    <span class=\"caret\"></span>\n                                  </button>\n                                  <ul *dropdownMenu class=\"dropdown-menu\">\n                                    <li *ngFor=\"let stock_model of item.stock_models\">\n                                      <a *ngIf=\"stock_model.color_id != item.color_id\" (click)=\"showPopupColor(item.order_item_id, stock_model.stock_model_id)\">{{stock_model.color_name}}</a>\n                                    </li>\n                                  </ul>\n                                </div>\n                                <span *ngIf=\"item.stock_models.length == 1\">{{item.color_name}}</span>\n                              </td>\n                              <td>\n                                <div *ngIf=\"item.stock_models.length > 1\" class=\"btn-group dropdown\" dropdown>\n                                  <button class=\"btn btn-primary dropdown-toggle\" dropdownToggle>\n                                    <span>{{item.stock_model_code}}</span>\n                                    <span class=\"caret\"></span>\n                                  </button>\n                                  <ul *dropdownMenu class=\"dropdown-menu\">\n                                    <li *ngFor=\"let stock_model of item.stock_models\">\n                                      <a *ngIf=\"stock_model.stock_model_id != item.stock_model_id\" (click)=\"showPopupStockModel(item.order_item_id, stock_model.stock_model_id)\">{{stock_model.stock_model_code}}</a>\n                                    </li>\n                                  </ul>\n                                </div>\n                                <span *ngIf=\"item.stock_models.length == 1\">{{item.stock_model_code}}</span>\n                              </td>\n                              <td>{{item.quantity}}</td>\n                              <td *ngIf=\"!item.promo_id\">{{item.product_price}}</td>\n                              <td *ngIf=\"item.promo_id\">\n                                <span>{{item.promo_price}}</span>\n                                <span class=\"normal-price\">{{item.product_price}}</span>\n                              </td>\n                              <td>{{item.subtotal}}</td>\n                            </tr>\n                          </tbody>\n                          <tfoot>\n                            <tr>\n                              <td colspan=\"6\"></td>\n                              <td>Total</td>\n                              <td>{{order.total}}</td>\n                            </tr>\n                            <tr>\n                              <td colspan=\"6\"></td>\n                              <td>Total + IGV</td>\n                              <td>{{order.total_igv}}</td>\n                            </tr>\n                          </tfoot>\n                        </table>\n                      </div>\n                    </div>\n                  </div>\n\n                </form>\n              </div>\n\n            </div>\n          </sa-widget>\n        </div>\n\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

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

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Ordenes']\" icon=\"shopping-cart\"\n      class=\"col-xs-10 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n  </div>\n  \n  <sa-widgets-grid>\n    \n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n\n        <sa-widget class=\"well\" color=\"darken\">\n          <div>\n            <div class=\"widget-body no-padding\">\n              <sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \n                [paginationLength]=\"true\" tableClass=\"table table-striped table-bordered table-hover\">\n                <thead>\n                  <!--tr>\n                    <th class=\"hasinput\" style=\"width:10%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar ID\">\n                    </th>\n                    <th class=\"hasinput icon-addon\">\n                      <input id=\"dateselect_filter\" type=\"text\" placeholder=\"Buscar Fecha\" class=\"form-control datepicker\" data-dateformat=\"yy/mm/dd\" style=\"width:100%\">\n                      <label for=\"dateselect_filter\" class=\"glyphicon glyphicon-calendar no-margin padding-top-15\" rel=\"tooltip\" title=\"\" data-original-title=\"Purchase Date\"></label>\n                    </th>\n                    <th class=\"hasinput\" style=\"width:10%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar DNI\">\n                    </th>\n                    <th class=\"hasinput\" style=\"width:10%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Tipo de Linea\">\n                    </th>\n                    <th class=\"hasinput\" style=\"width:10%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Servicio\">\n                    </th>\n                    <th class=\"hasinput\" style=\"width:10%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Planes\">\n                    </th>\n                    <!-th class=\"hasinput\" style=\"width:8%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Sucursales\">\n                    </th->\n                    <th class=\"hasinput\" style=\"width:15%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Estado\">\n                    </th>\n                    <th class=\"hasinput\" style=\"width:10%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Precio\">\n                    </th>\n                    <th class=\"hasinput\" style=\"width:15%\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Buscar Evaluación\">\n                    </th>\n                  </tr-->\n                  <tr>\n                    <th data-class=\"expand\" style=\"width:10%\">Nro. Pedido</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:16%\">Fecha</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Cliente / DNI</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Tipo de Linea</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Servicio</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Plan</th>\n                    <!--<th data-hide=\"phone,tablet\">Sucursal</th>-->\n                    <th data-hide=\"phone,tablet\" style=\"width:12%\">Estado</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:10%\">Total</th>\n                    <th data-hide=\"phone,tablet\" style=\"width:12%\">Evaluación</th>\n                  </tr>\n                </thead>\n                <tbody *ngIf=\"itemsObs | async as items; else loading\">\n                  <ng-container *ngFor=\"let item of items; let last = last\" \n                    sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\n                    <tr>\n                      <td id=\"{{ item.order_id }}\">\n                        <a class=\"clic-icon\" (click)=\"detail(item)\"><span class=\"fa fa-eye\"></span> {{ item.order_id }}</a>\n                      </td>\n                      <td [attr.data-order]=\"item.created_at | moment:'x'\">{{ item.created_at }}</td>\n                      <td>{{ item.id_number }}</td>\n                      <td>{{ item.affiliation_type }}</td>\n                      <td>{{ item.service_type }}</td>\n                      <td>{{ item.plan_name }}</td>\n                      <!--<td>{{ item.branch_name }}</td>-->\n                      <td>{{ item.order_status_name }}</td>\n                      <td>{{ item.total_igv }}</td>\n                      <td>{{ item.credit_status }}</td>\n                    </tr>\n                  </ng-container>                \n                </tbody>\n                <ng-template #loading>\n                  <tr class=\"odd\">\n                    <td valign=\"top\" colspan=\"10\" class=\"dataTables_empty\">\n                      {{ loadingStatus }}\n                    </td>\n                  </tr>\n                </ng-template>\n              </sa-datatable>\n\n            </div>\n          </div>\n        </sa-widget>\n      \n      </article>\n    </div>\n\n  </sa-widgets-grid>\n\n</div>"

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







var OrdenesComponent = (function () {
    function OrdenesComponent(route, router, blockui, ordenesService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.ordenesService = ordenesService;
        this.itemsObs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.options = {
            dom: 'Bfrtip',
            pageLength: 25,
            /*columnDefs: [ {
              targets: [0, 8],
              orderable: false
            } ],*/
            order: [[1, 'desc']],
        };
        this.loadingStatus = 'Cargando ordenes...';
    }
    OrdenesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockui.start('content');
        this.ordenesService.getOrdenes()
            .subscribe(function (data) {
            // console.log(data);
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
    OrdenesComponent.prototype.detail = function (data) {
        this.router.navigate([data.order_id], { relativeTo: this.route });
    };
    OrdenesComponent.prototype.publish = function (data) {
    };
    OrdenesComponent.prototype.unpublish = function (data) {
    };
    return OrdenesComponent;
}());
OrdenesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ordenes',
        template: __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ordenes_service__["a" /* OrdenesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ordenes_service__["a" /* OrdenesService */]) === "function" && _d || Object])
], OrdenesComponent);

var _a, _b, _c, _d;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ordenes_service__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ordenes_routing__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ordenes_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__detalle_detalle_orden_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/detalle/detalle-orden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__status_form_status_form_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/status-form/status-form.component.ts");
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
            __WEBPACK_IMPORTED_MODULE_9__ordenes_component__["a" /* OrdenesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__detalle_detalle_orden_component__["a" /* DetalleOrdenComponent */],
            __WEBPACK_IMPORTED_MODULE_11__status_form_status_form_component__["a" /* StatusFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__["a" /* FormContainerModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_8__ordenes_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__ordenes_service__["a" /* OrdenesService */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordenes_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/ordenes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_form_status_form_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/status-form/status-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detalle_detalle_orden_component__ = __webpack_require__("../../../../../src/app/+ventas/+ordenes/detalle/detalle-orden.component.ts");




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__ordenes_component__["a" /* OrdenesComponent */],
        data: { pageTitle: '' }
    },
    {
        path: ':id',
        component: __WEBPACK_IMPORTED_MODULE_3__detalle_detalle_orden_component__["a" /* DetalleOrdenComponent */],
        data: { pageTitle: 'Orden' }
    },
    {
        path: ':id/status',
        component: __WEBPACK_IMPORTED_MODULE_2__status_form_status_form_component__["a" /* StatusFormComponent */],
        data: { pageTitle: 'Estados de la Orden' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
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
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]({
            'Content-Type': 'application/json',
        });
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
            .put(this.getUrl(id, 'item'), item);
    };
    OrdenesService.prototype.deleteItem = function (id, item) {
    };
    OrdenesService.prototype.getStatusList = function () {
        return this.http
            .get(this.getUrl(null, 'status'));
    };
    OrdenesService.prototype.getStatusHistory = function (id) {
        return this.http
            .get(this.getUrl(id, 'status'));
    };
    OrdenesService.prototype.createStatus = function (order_id, status) {
        return this.http
            .post(this.getUrl(order_id, 'status'), status);
    };
    OrdenesService.prototype.getUrl = function (id, param) {
        if (id === void 0) { id = null; }
        if (param === void 0) { param = ''; }
        var urlParts = [this.url];
        if (id) {
            urlParts.push(id);
        }
        if (param.length) {
            urlParts.push(param);
        }
        return urlParts.join('/');
    };
    OrdenesService.prototype.formatTime = function (digitsTime) {
        var hours = digitsTime.slice(0, -2);
        var minutes = digitsTime.slice(-2);
        var meridian = hours > 12 ? 'pm' : 'am';
        if (hours > 12) {
            hours -= 12;
        }
        return hours + ":" + minutes + " " + meridian;
    };
    OrdenesService.prototype.fromSimpleDateToISO = function (simpleDate) {
        var dateParts = simpleDate.split('/');
        var date = new Date(dateParts[2] + "/" + dateParts[1] + "/" + dateParts[0]);
        date.setDate(parseInt(dateParts[0], 10));
        date.setHours(0);
        return date.toISOString();
    };
    OrdenesService.prototype.fromISOToSimpleDate = function (isoDate) {
        var date = new Date(isoDate);
        var _a = {
            year: date.getFullYear(),
            month: ('0' + (date.getMonth() + 1)).slice(-2),
            day: ('0' + (date.getDate())).slice(-2)
        }, year = _a.year, month = _a.month, day = _a.day;
        return day + "/" + month + "/" + year;
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

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Estados de la Orden', 'Nro. #'+order_id]\" icon=\"pencil-square-o\" class=\"col-xs-12 col-sm-9 col-md-9 col-lg-9\"></sa-big-breadcrumbs>\n  </div>\n\n  <div *ngIf=\"alert\" class=\"alert alert-block alert-{{alert.mode}}\" dismisser=\"\">\n    <h4 class=\"alert-heading\">\n      <i class=\"fa fa-check-square-o\"></i> Cambio {{alert.title}}\n    </h4>\n    <p>{{alert.message}}</p>\n  </div>\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n    <!-- START ROW -->\n\n    <div class=\"row\">\n      <!-- NEW COL START -->\n      <article>\n\n        <div class=\"col-sm-12 col-md-12 col-lg-12\">\n          <!-- Widget ID (each widget will need unique ID)-->\n          <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n            <!-- widget div-->\n            <div>\n              <!-- widget content -->\n              <div class=\"widget-body no-padding\">\n\n                <div class=\"smart-form\">\n                  <div class=\"detalle-order\">\n                    <header>\n                      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\n                      Historial\n                    </header>\n                    <div id=\"field-detalle-order\" class=\"detalle-registro \">\n                      <div class=\"direccion-de-envio data-table table-responsive\">\n                        <!--sa-datatable [options]=\"options\" [dtTrigger]=\"dtTrigger\" \n                          [paginationLength]=\"true\" tableClass=\"table table-striped table-bordered table-hover\"-->\n                        <table class=\"dataTable responsive display projects-table table table-striped table-bordered table-hover no-footer dtr-inline\" width=\"100%\">\n                          <thead>\n                            <tr>\n                              <th class=\"sorting\" data-class=\"vermascol\" style=\"width:20%\">Fecha</th>\n                              <th class=\"sorting\" data-class=\"expand\" style=\"width:35%\">Comentario</th>\n                              <th class=\"sorting\" data-hide=\"phone, tablet\" style=\"width:25%\">Estado</th>\n                              <th class=\"sorting\" data-hide=\"phone, tablet\" style=\"width:20%\">Notificación a Usuario</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <ng-container *ngFor=\"let item of status_history; let last = last\" sa-cond-trigger [cond]=\"last ? true : false\" [trigger]=\"dtTrigger\">\n                              <tr>\n                                <td>{{item.created_at}}</td>\n                                <td>{{item.comment}}</td>\n                                <td>{{item.order_status_name}}</td>\n                                <td>{{item.notify_customer ? 'Si' : 'No'}}</td>\n                              </tr>\n                            </ng-container>\n                          </tbody>\n                        </table>\n                        <!--/sa-datatable-->\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"detalle-order\">\n                    <header>\n                      <i class=\"icon-prepend fa fa-exclamation-circle\"></i>\n                      Ingresar Registro\n                    </header>\n                    <form id=\"smart-form-register\" class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onValidationSuccess)=\"onValidationSuccess($event)\">\n                      <div id=\"field-detalle-order\" class=\"detalle-registro\">\n                        <div class=\"row\">\n                          <section class=\"col col-6\">\n                            <label for=\"select-estado\" class=\"select\">Estado de orden</label>\n                          </section>\n                          <section class=\"col col-6\">\n                            <label class=\"select\">\n                              <select name=\"order_status_id\" id=\"select-estado\" [(ngModel)]=\"status.order_status_id\" (change)=\"onSelectChange($event)\">\n                                <option value=\"\">Seleccionar estado</option>\n                                <option *ngFor=\"let item of status_list\" value=\"{{item.order_status_id}}\">\n                                  {{item.order_status_name}}\n                                </option>\n                              </select> <i></i>\n                            </label>\n                          </section>\n                        </div>\n                        <div class=\"row\">\n                          <section class=\"col col-6\">\n                            <label for=\"check-usuario\">Notificación a Usuario</label>\n                          </section>\n                          <section class=\"col col-6\">\n                            <label class=\"checkbox\">\n                              <input id=\"notify_customer\" name=\"notify_customer\" type=\"checkbox\" [(ngModel)]=\"status.notify_customer\"><i></i>\n                            </label>\n                          </section>\n                        </div>\n                        <div class=\"row\">\n                          <section class=\"col col-6\">\n                            <label for=\"message\">Comentario</label>\n                          </section>\n                          <section class=\"col col-6\">\n                            <label class=\"textarea\">\n                              <i class=\"icon-append fa fa-comment\"></i>\n                              <textarea id=\"comment\" name=\"comment\" rows=\"4\" [(ngModel)]=\"status.comment\"></textarea>\n                            </label>\n                          </section>\n                        </div>\n                        <footer>\n                          <div class=\"row\">\n                            <div class=\"btn-footer\">\n                              <button class=\"btn btn-primary\" name=\"back\" type=\"button\" onclick=\"window.history.back();\">Regresar</button>\n                              <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Crear Estado</button>\n                            </div>\n                          </div>\n                        </footer>\n                      </div>\n                    </form>\n                  </div>\n                </div>\n\n              </div>\n              <!-- end widget content -->\n            </div>\n            <!-- end widget div -->\n          </sa-widget>\n        </div>\n\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

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
    StatusFormComponent.prototype.onDateChange = function (event) {
        this[event.currentTarget.name] = event.data;
        this.status[event.currentTarget.name] = this.ordenesService.fromSimpleDateToISO(event.data);
    };
    StatusFormComponent.prototype.onValidationSuccess = function (e) {
        console.log(e);
        this.save(this.status, e);
    };
    StatusFormComponent.prototype.save = function (status, e) {
        var _this = this;
        console.log(e);
        if (status) {
            console.log(status);
            this.ordenesService.createStatus(this.order_id, status)
                .subscribe(function (message) {
                console.log(message);
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
                // $('button[name="submit"]').prop('disabled', (i, v) => !v);
                _this.ordenesService.getStatusHistory(_this.order_id)
                    .subscribe(function (data) {
                    if (data.success) {
                        _this.status_history = data.result;
                    }
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
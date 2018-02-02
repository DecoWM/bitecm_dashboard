webpackJsonp(["imagenes.module"],{

/***/ "../../../../../src/app/+imagenes/banner/bannermodel-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #formBanner=\"ngForm\" #form class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onInitComplete)=\"referenceValidator($event)\" (onValidationSuccess)=\"onValidationSuccess($event)\" name=\"form-banner-{{bannermodel.image_id}}\" style=\"border: 1px solid #bbb; padding-top: 10px;\">\n  \n  <div class=\"row detalle-registro padding-row\">\n    \n    <div class=\"col col-sm-12\">\n      <!-- <label class=\"margin-bottom-10\">Banner Principal - Sliders</label> -->\n      <div class=\"padding-10 margin-bottom-10 product-images\" style=\"border: 1px solid #ccc;\">\n        <label class=\"margin-bottom-10\">{{bannermodel.image_description}}</label>\n        <br>\n        <div  class=\"row\">\n          <section class=\"col col-sm-6\">\n            <div class=\"images-content\">\n              <span class=\"label-content\"> Imágen :  </span>\n              <div class=\"input-content input input-file\">\n                <span class=\"button\">\n                  <input name=\"slider_images[]\" type=\"file\" (change)=\"changeFilename($event, 0)\">Subir\n                </span>\n                <input type=\"text\" placeholder=\"Nueva imagen\" value=\"{{bannerImageUrl[0]}}\" readonly>\n              </div>\n            </div>\n            <br>\n            <div class=\"images-content\">\n              <span class=\"label-content\"> Link : </span>\n              <div class=\"input-content input input-file\">\n                <input type=\"text\" placeholder=\"Nuevo link\" name=\"slider_link\" value=\"{{bannermodel.image_link}}\" >\n              </div>  \n            </div>\n            \n          </section>\n          <section class=\"col col-sm-3 text-center\"> \n              <img src=\"{{bannermodel.image_url}}\" width=\"200px\" height=\"100px\">\n          </section>\n          <section class=\"col col-sm-3 text-center\">\n              <img src=\"{{bannermodel.image_demo}}\" width=\"120px\" height=\"180px\">\n          </section>\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"col col-sm-12\">\n      <div class=\"row\">\n        <footer>\n          <div class=\"btn-footer\">\n            <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Guardar</button>\n          </div>\n        </footer>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/+imagenes/banner/bannermodel-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerModelFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__ = __webpack_require__("../../../../../src/app/+imagenes/slidermodel.service.ts");
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







var BannerModelFormComponent = (function () {
    function BannerModelFormComponent(route, router, blockui, sliderModelService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.sliderModelService = sliderModelService;
        this.notificationService = notificationService;
        this.bannermodel = {
            image_id: null,
            image_name: null,
            image_description: null,
            image_url: null,
            image_demo: null,
            image_link: null,
            active: null
        };
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.bannerImageUrl = [];
        this.validationOptions = {
            rules: {
                slider_link: {
                    required: true
                }
            },
            messages: {
                slider_link: {
                    required: 'Debes ingresar un link'
                }
            }
        };
    }
    BannerModelFormComponent.prototype.ngOnInit = function () {
        if (this.bannermodel.active === null) {
            this.bannermodel.active = false;
        }
        this.bannermodel.image_demo = this.bannermodel.image_demo.replace('rutademo', 'images//banner-demo-' + this.bannermodel.image_id + '.png');
        this.bannerImageUrl = [];
    };
    BannerModelFormComponent.prototype.ngAfterViewChecked = function () { };
    BannerModelFormComponent.prototype.onValidationSuccess = function (e) {
        this.save(e);
    };
    BannerModelFormComponent.prototype.referenceValidator = function (formValidate) {
        this.formValidate = formValidate;
    };
    BannerModelFormComponent.prototype.onSelectChange = function (event) {
        $(event.currentTarget).blur();
    };
    BannerModelFormComponent.prototype.changeFilename = function (event, ix) {
        var uploadedFiles = event.target.files;
        this.bannerImageUrl[ix] = uploadedFiles[0].name;
    };
    BannerModelFormComponent.prototype.save = function (e) {
        var _this = this;
        var formData = new FormData(document.forms
            .namedItem('form-banner-' + this.bannermodel.image_id + (this.bannermodel.slider_model_id ? this.bannermodel.slider_model_id : '')));
        if (this.formBanner.dirty || (formData.has('slider_images[]') && this.bannerImageUrl.length)) {
            if (!this.bannerImageUrl.length) {
                formData.delete('slider_images[]');
            }
            if (this.bannermodel.stock_model_id) {
            }
            else {
                //formData.set('active', this.homemodel.active ? '1' : '0');
                formData.set('active', '1');
                var type = 'banner-' + this.bannermodel.image_id;
                this.sliderModelService.saveImage(type, formData)
                    .subscribe(function (data) {
                    _this.onAlert.emit(_this.getAlert(data));
                    if (data.success) {
                        _this.bannerImageUrl = [];
                        // this.sliderModelService.getImage(data.id)
                        //   .subscribe((smc: any) => {
                        //     if (smc.success) {
                        //       this.slidermodel = smc.result;
                        //       this.slidermodel.slider_images.map((i, x) => {
                        //         const img_url = i.product_image_url;
                        //         const img_url_arr = img_url.split('/');
                        //         i.product_image_name = img_url_arr[img_url_arr.length - 1];
                        //         i.product_image_url = i.product_image_url + '?v' + (new Date().getTime().toString());
                        //         return i;
                        //       });
                        //     }
                        //   });
                    }
                });
            }
        }
    };
    BannerModelFormComponent.prototype.getAlert = function (result) {
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
    return BannerModelFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BannerModelFormComponent.prototype, "bannermodel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BannerModelFormComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formBanner'),
    __metadata("design:type", Object)
], BannerModelFormComponent.prototype, "formBanner", void 0);
BannerModelFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'banner-form',
        template: __webpack_require__("../../../../../src/app/+imagenes/banner/bannermodel-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], BannerModelFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=bannermodel-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/banner/bannermodels.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div *ngFor=\"let bannermodel of bannermodels\" class=\"padding-10 margin-top-10\">\n\t\t<banner-form [bannermodel]=\"bannermodel\"   (onAlert)=\"printAlert($event)\"></banner-form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+imagenes/banner/bannermodels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BannerModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__ = __webpack_require__("../../../../../src/app/+imagenes/slidermodel.service.ts");
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







var BannerModelsComponent = (function () {
    function BannerModelsComponent(route, router, blockui, sliderModelService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.sliderModelService = sliderModelService;
        this.notificationService = notificationService;
        this.bannermodels = [];
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BannerModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sliderModelService.getImages('BANNERS').subscribe(function (bannermodels) {
            if (bannermodels.success) {
                console.log(bannermodels);
                _this.bannermodels = bannermodels.result;
            }
        });
    };
    BannerModelsComponent.prototype.printAlert = function (alert) {
        this.onAlert.emit(alert);
    };
    return BannerModelsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BannerModelsComponent.prototype, "onAlert", void 0);
BannerModelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'banner-models',
        template: __webpack_require__("../../../../../src/app/+imagenes/banner/bannermodels.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], BannerModelsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=bannermodels.component.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/home/homemodel-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #formHome=\"ngForm\" #form class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onInitComplete)=\"referenceValidator($event)\" (onValidationSuccess)=\"onValidationSuccess($event)\" name=\"form-home-{{homemodel.image_id}}\" style=\"border: 1px solid #bbb; padding-top: 10px;\">\n  \n  <div class=\"row detalle-registro padding-row\">\n    \n    <div class=\"col col-sm-12\">\n      <!-- <label class=\"margin-bottom-10\">Banner Principal - Sliders</label> -->\n      <div class=\"padding-10 margin-bottom-10 product-images\" style=\"border: 1px solid #ccc;\">\n        <label class=\"margin-bottom-10\">{{homemodel.image_description}}</label>\n        <br>\n        <div  class=\"row\">\n          <section class=\"col col-sm-6\">\n            <div class=\"images-content\">\n              <span class=\"label-content\"> Imágen :  </span>\n              <div class=\"input-content input input-file\">\n                <span class=\"button\">\n                  <input name=\"slider_images[]\" type=\"file\" (change)=\"changeFilename($event, 0)\">Subir\n                </span>\n                <input type=\"text\" placeholder=\"Nueva imagen\" value=\"{{homeImageUrl[0]}}\" readonly>\n              </div>\n            </div>\n            <br>\n            <div class=\"images-content\">\n              <span class=\"label-content\"> Link : </span>\n              <div class=\"input-content input input-file\">\n                <input type=\"text\" placeholder=\"Nuevo link\" name=\"slider_link\" value=\"{{homemodel.image_link}}\" >\n              </div>  \n            </div>\n            \n          </section>\n          <section class=\"col col-sm-3 text-center\"> \n              <img src=\"{{homemodel.image_url}}\" width=\"120px\" height=\"180px\">\n          </section>\n          <section class=\"col col-sm-3 text-center\">\n              <img src=\"{{homemodel.image_demo}}\" width=\"120px\" height=\"180px\">\n          </section>\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"col col-sm-12\">\n      <div class=\"row\">\n        <footer>\n          <div class=\"btn-footer\">\n            <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Guardar</button>\n          </div>\n        </footer>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/+imagenes/home/homemodel-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModelFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__ = __webpack_require__("../../../../../src/app/+imagenes/slidermodel.service.ts");
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







var HomeModelFormComponent = (function () {
    function HomeModelFormComponent(route, router, blockui, sliderModelService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.sliderModelService = sliderModelService;
        this.notificationService = notificationService;
        this.homemodel = {
            image_id: null,
            image_name: null,
            image_description: null,
            image_url: null,
            image_demo: null,
            image_link: null,
            active: null
        };
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.homeImageUrl = [];
        this.validationOptions = {
            rules: {
                slider_link: {
                    required: true
                }
            },
            messages: {
                slider_link: {
                    required: 'Debes ingresar un link'
                }
            }
        };
    }
    HomeModelFormComponent.prototype.ngOnInit = function () {
        if (this.homemodel.active === null) {
            this.homemodel.active = false;
        }
        this.homemodel.image_demo = this.homemodel.image_demo.replace('rutademo', 'images//home-demo-' + this.homemodel.image_id + '.png');
        this.homeImageUrl = [];
    };
    HomeModelFormComponent.prototype.ngAfterViewChecked = function () { };
    HomeModelFormComponent.prototype.onValidationSuccess = function (e) {
        this.save(e);
    };
    HomeModelFormComponent.prototype.referenceValidator = function (formValidate) {
        this.formValidate = formValidate;
    };
    HomeModelFormComponent.prototype.onSelectChange = function (event) {
        $(event.currentTarget).blur();
    };
    HomeModelFormComponent.prototype.changeFilename = function (event, ix) {
        var uploadedFiles = event.target.files;
        this.homeImageUrl[ix] = uploadedFiles[0].name;
    };
    HomeModelFormComponent.prototype.save = function (e) {
        var _this = this;
        var formData = new FormData(document.forms
            .namedItem('form-home-' + this.homemodel.image_id + (this.homemodel.slider_model_id ? this.homemodel.slider_model_id : '')));
        if (this.formHome.dirty || (formData.has('slider_images[]') && this.homeImageUrl.length)) {
            if (!this.homeImageUrl.length) {
                formData.delete('slider_images[]');
            }
            if (this.homemodel.stock_model_id) {
            }
            else {
                //formData.set('active', this.homemodel.active ? '1' : '0');
                formData.set('active', '1');
                var type = 'home-' + this.homemodel.image_id;
                this.sliderModelService.saveImage(type, formData)
                    .subscribe(function (data) {
                    _this.onAlert.emit(_this.getAlert(data));
                    if (data.success) {
                        _this.homeImageUrl = [];
                        // this.sliderModelService.getImage(data.id)
                        //   .subscribe((smc: any) => {
                        //     if (smc.success) {
                        //       this.slidermodel = smc.result;
                        //       this.slidermodel.slider_images.map((i, x) => {
                        //         const img_url = i.product_image_url;
                        //         const img_url_arr = img_url.split('/');
                        //         i.product_image_name = img_url_arr[img_url_arr.length - 1];
                        //         i.product_image_url = i.product_image_url + '?v' + (new Date().getTime().toString());
                        //         return i;
                        //       });
                        //     }
                        //   });
                    }
                });
            }
        }
    };
    HomeModelFormComponent.prototype.getAlert = function (result) {
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
    return HomeModelFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], HomeModelFormComponent.prototype, "homemodel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], HomeModelFormComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formHome'),
    __metadata("design:type", Object)
], HomeModelFormComponent.prototype, "formHome", void 0);
HomeModelFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-form',
        template: __webpack_require__("../../../../../src/app/+imagenes/home/homemodel-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], HomeModelFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=homemodel-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/home/homemodels.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div *ngFor=\"let homemodel of homemodels\" class=\"padding-10 margin-top-10\">\n\t\t<home-form [homemodel]=\"homemodel\"   (onAlert)=\"printAlert($event)\"></home-form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+imagenes/home/homemodels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__ = __webpack_require__("../../../../../src/app/+imagenes/slidermodel.service.ts");
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







var HomeModelsComponent = (function () {
    function HomeModelsComponent(route, router, blockui, sliderModelService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.sliderModelService = sliderModelService;
        this.notificationService = notificationService;
        this.homemodels = [];
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    HomeModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sliderModelService.getImages('HOME').subscribe(function (homemodels) {
            if (homemodels.success) {
                console.log(homemodels);
                _this.homemodels = homemodels.result;
            }
        });
    };
    HomeModelsComponent.prototype.printAlert = function (alert) {
        this.onAlert.emit(alert);
    };
    return HomeModelsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], HomeModelsComponent.prototype, "onAlert", void 0);
HomeModelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'home-models',
        template: __webpack_require__("../../../../../src/app/+imagenes/home/homemodels.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], HomeModelsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=homemodels.component.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/imagenes.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- MAIN CONTENT -->\n<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"[' Importación de Imágenes']\" icon=\"sign-in\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\"></sa-big-breadcrumbs>\n  </div>\n\n  <ng-container *ngIf=\"alert\">\n    <alert *ngFor=\"let a of alert\" type=\"{{a.mode}}\" dismissible=\"true\">\n      <i class=\"fa-fw fa fa-{{a.icon}}\"></i>\n      <strong>{{a.title}}</strong> {{a.message}}\n    </alert>\n  </ng-container>\n\n  <!-- widget grid -->\n  <sa-widget [editbutton]=\"false\" [custombutton]=\"false\">\n\n            <header>\n              <span class=\"widget-icon\">\n                <i class=\"glyphicon glyphicon-picture txt-color-darken\"></i>\n              </span>\n              \n              <h2>Imágenes </h2>\n\n              <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\n                <li [class.active]=\"active == 'tab-r1'\">\n                  <a (click)=\"active = 'tab-r1'\"><span class=\"hidden-mobile hidden-tablet\">Slider Principal</span></a>\n                </li>\n\n                <li [class.active]=\"active == 'tab-r2'\">\n                  <a (click)=\"active = 'tab-r2'\"><span class=\"hidden-mobile hidden-tablet\">Imágenes Home</span></a>\n                </li>\n\n                <li [class.active]=\"active == 'tab-r3'\">\n                  <a (click)=\"active = 'tab-r3'\"><span class=\"hidden-mobile hidden-tablet\">Banners</span></a>\n                </li>\n              </ul>\n            </header>\n\n            <!-- widget div-->\n            <div>\n              <!-- widget content -->\n              <div class=\"no-padding widget-body\">\n                \n                <tabset>\n                  <tab [active]=\"active == 'tab-r1'\">\n                    <!-- STOCK MODEL CODES -->\n                    <slider-models  (onAlert)=\"printAlert($event)\"></slider-models>\n                  </tab>\n                  <tab [active]=\"active == 'tab-r2'\">\n                    <!--HOME  -->\n                    <home-models (onAlert)=\"printAlert($event)\"></home-models>\n                  </tab>\n                  <tab [active]=\"active == 'tab-r3'\">\n                    <!--HOME  -->\n                    <banner-models (onAlert)=\"printAlert($event)\"></banner-models>\n                  </tab>\n                </tabset>\n              \n              </div>\n            </div>\n          </sa-widget>\n</div>"

/***/ }),

/***/ "../../../../../src/app/+imagenes/imagenes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__ = __webpack_require__("../../../../../src/app/shared/utils/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imagenes_service__ = __webpack_require__("../../../../../src/app/+imagenes/imagenes.service.ts");
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







var ImagenesComponent = (function () {
    function ImagenesComponent(route, router, blockui, notificationService, imagesService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.notificationService = notificationService;
        this.imagesService = imagesService;
        this.alert = null;
        this.active = null;
    }
    ImagenesComponent.prototype.ngOnInit = function () {
        this.alert = null;
        this.active = 'tab-r1';
    };
    ImagenesComponent.prototype.getAlert = function (data) {
        var mode, title;
        if (data.success) {
            mode = 'success';
            title = 'Completada';
        }
        else {
            mode = 'danger';
            title = 'Fallida';
        }
        return {
            'title': title,
            'message': data.result,
            'mode': mode
        };
    };
    ImagenesComponent.prototype.printAlert = function (alert) {
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
    return ImagenesComponent;
}());
ImagenesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'imagenes',
        template: __webpack_require__("../../../../../src/app/+imagenes/imagenes.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__imagenes_service__["a" /* ImagenesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__imagenes_service__["a" /* ImagenesService */]) === "function" && _e || Object])
], ImagenesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=imagenes.component.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/imagenes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenesModule", function() { return ImagenesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__ = __webpack_require__("../../../../../src/app/shared/smartadmin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__ = __webpack_require__("../../../../../src/app/shared/ui/datatable/smartadmin-datatable.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__ = __webpack_require__("../../../../../src/app/shared/forms/validation/smartadmin-validation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/smartadmin-input.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__ = __webpack_require__("../../../../../src/app/shared/forms/custom/form-container/form-container.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__ = __webpack_require__("../../../../../src/app/shared/forms/input/select2/select2.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__slider_slidermodels_component__ = __webpack_require__("../../../../../src/app/+imagenes/slider/slidermodels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__slider_slider_form_component__ = __webpack_require__("../../../../../src/app/+imagenes/slider/slider-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_homemodels_component__ = __webpack_require__("../../../../../src/app/+imagenes/home/homemodels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_homemodel_form_component__ = __webpack_require__("../../../../../src/app/+imagenes/home/homemodel-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__banner_bannermodels_component__ = __webpack_require__("../../../../../src/app/+imagenes/banner/bannermodels.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__banner_bannermodel_form_component__ = __webpack_require__("../../../../../src/app/+imagenes/banner/bannermodel-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__imagenes_service__ = __webpack_require__("../../../../../src/app/+imagenes/imagenes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__slidermodel_service__ = __webpack_require__("../../../../../src/app/+imagenes/slidermodel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__imagenes_routing__ = __webpack_require__("../../../../../src/app/+imagenes/imagenes.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__imagenes_component__ = __webpack_require__("../../../../../src/app/+imagenes/imagenes.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var ImagenesModule = (function () {
    function ImagenesModule() {
    }
    return ImagenesModule;
}());
ImagenesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__imagenes_component__["a" /* ImagenesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__slider_slidermodels_component__["a" /* SliderModelsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__slider_slider_form_component__["a" /* SliderFormComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_homemodels_component__["a" /* HomeModelsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_homemodel_form_component__["a" /* HomeModelFormComponent */],
            __WEBPACK_IMPORTED_MODULE_11__banner_bannermodels_component__["a" /* BannerModelsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__banner_bannermodel_form_component__["a" /* BannerModelFormComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_ui_datatable_smartadmin_datatable_module__["a" /* SmartadminDatatableModule */],
            __WEBPACK_IMPORTED_MODULE_3__shared_forms_validation_smartadmin_validation_module__["a" /* SmartadminValidationModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_forms_input_smartadmin_input_module__["a" /* SmartadminInputModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_custom_form_container_form_container_module__["a" /* FormContainerModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_forms_input_select2_select2_module__["a" /* Select2Module */],
            __WEBPACK_IMPORTED_MODULE_15__imagenes_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__imagenes_service__["a" /* ImagenesService */],
            __WEBPACK_IMPORTED_MODULE_14__slidermodel_service__["a" /* SliderModelService */]
        ]
    })
], ImagenesModule);

//# sourceMappingURL=imagenes.module.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/imagenes.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imagenes_component__ = __webpack_require__("../../../../../src/app/+imagenes/imagenes.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__imagenes_component__["a" /* ImagenesComponent */],
        data: { pageTitle: '' }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=imagenes.routing.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/imagenes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagenesService; });
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





var ImagenesService = (function () {
    function ImagenesService(http) {
        this.http = http;
        this.url = '/api/admin/importar';
    }
    ImagenesService.prototype.getUrl = function (param) {
        if (param === void 0) { param = ''; }
        var urlParts = [this.url];
        if (param.length) {
            urlParts.push(param);
        }
        return urlParts.join('/');
    };
    return ImagenesService;
}());
ImagenesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], ImagenesService);

var _a;
//# sourceMappingURL=imagenes.service.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/slider/slider-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #formSlider=\"ngForm\" #form class=\"smart-form\" novalidate=\"novalidate\" [saUiValidate]=\"validationOptions\" (onInitComplete)=\"referenceValidator($event)\" (onValidationSuccess)=\"onValidationSuccess($event)\" name=\"form-slider-{{slidermodel.image_id}}\" style=\"border: 1px solid #bbb; padding-top: 10px;\">\n  \n  <div class=\"row detalle-registro padding-row\">\n    \n    <div class=\"col col-sm-12\">\n      <!-- <label class=\"margin-bottom-10\">Banner Principal - Sliders</label> -->\n      <div class=\"padding-10 margin-bottom-10 product-images\" style=\"border: 1px solid #ccc;\">\n        <label class=\"margin-bottom-10\">{{slidermodel.image_description}}</label>\n        <br>\n        <div  class=\"row\">\n          <section class=\"col col-sm-6\">\n            <div class=\"images-content\">\n              <span class=\"label-content\"> Imágen :  </span>\n              <div class=\"input-content input input-file\">\n                <span class=\"button\">\n                  <input name=\"slider_images[]\" type=\"file\" (change)=\"changeFilename($event, 0)\">Subir\n                </span>\n                <input type=\"text\" placeholder=\"Nueva imagen\" value=\"{{sliderImageUrl[0]}}\" readonly>\n              </div>\n            </div>\n            <br>\n            <div class=\"images-content\">\n              <span class=\"label-content\"> Link : </span>\n              <div class=\"input-content input input-file\">\n              <input type=\"text\" placeholder=\"Nuevo link\" name=\"slider_link\" value=\"{{slidermodel.image_link}}\" >\n            </div>  \n            </div>\n            \n          </section>\n          <section class=\"col col-sm-3\"> \n              <img src=\"{{slidermodel.image_url}}\" width=\"200px\" height=\"100px\">\n          </section>\n          <section class=\"col col-sm-3\">\n              <div class=\"col col-sm-2 col-md-3\">\n              <div class=\"row\">\n                <section class=\"col col-sm-12\">\n                  <label  class=\"checkbox\">\n                    <input id=\"active\" name=\"active\" type=\"checkbox\" [(ngModel)]=\"slidermodel.active\" ><i></i>Habilitado\n                  </label>\n                </section>\n              </div>\n            </div>\n          </section>\n        </div>\n      </div>\n\n\n    </div>\n    <div class=\"col col-sm-12\">\n      <div class=\"row\">\n        <footer>\n          <div class=\"btn-footer\">\n            <button class=\"btn btn-primary\" name=\"submit\" type=\"submit\">Guardar</button>\n          </div>\n        </footer>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/+imagenes/slider/slider-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__ = __webpack_require__("../../../../../src/app/+imagenes/slidermodel.service.ts");
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







var SliderFormComponent = (function () {
    function SliderFormComponent(route, router, blockui, sliderModelService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.sliderModelService = sliderModelService;
        this.notificationService = notificationService;
        this.slidermodel = {
            image_id: null,
            image_name: null,
            image_description: null,
            image_url: null,
            image_link: null,
            active: null
        };
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.sliderImageUrl = [];
        this.validationOptions = {
            rules: {
                slider_link: {
                    required: true
                }
            },
            messages: {
                slider_link: {
                    required: 'Debes ingresar un link'
                }
            }
        };
    }
    SliderFormComponent.prototype.ngOnInit = function () {
        if (this.slidermodel.active === null) {
            this.slidermodel.active = false;
        }
        this.sliderImageUrl = [];
    };
    SliderFormComponent.prototype.ngAfterViewChecked = function () { };
    SliderFormComponent.prototype.onValidationSuccess = function (e) {
        this.save(e);
    };
    SliderFormComponent.prototype.referenceValidator = function (formValidate) {
        this.formValidate = formValidate;
    };
    SliderFormComponent.prototype.onSelectChange = function (event) {
        $(event.currentTarget).blur();
    };
    SliderFormComponent.prototype.changeFilename = function (event, ix) {
        var uploadedFiles = event.target.files;
        this.sliderImageUrl[ix] = uploadedFiles[0].name;
    };
    SliderFormComponent.prototype.save = function (e) {
        var _this = this;
        var formData = new FormData(document.forms
            .namedItem('form-slider-' + this.slidermodel.image_id + (this.slidermodel.slider_model_id ? this.slidermodel.slider_model_id : '')));
        if (this.formSliderModel.dirty || (formData.has('slider_images[]') && this.sliderImageUrl.length)) {
            if (!this.sliderImageUrl.length) {
                formData.delete('slider_images[]');
            }
            if (this.slidermodel.stock_model_id) {
            }
            else {
                formData.set('active', this.slidermodel.active ? '1' : '0');
                var type = 'slider-' + this.slidermodel.image_id;
                this.sliderModelService.saveImage(type, formData)
                    .subscribe(function (data) {
                    _this.onAlert.emit(_this.getAlert(data));
                    if (data.success) {
                        _this.sliderImageUrl = [];
                        // this.sliderModelService.getImage(data.id)
                        //   .subscribe((smc: any) => {
                        //     if (smc.success) {
                        //       this.slidermodel = smc.result;
                        //       this.slidermodel.slider_images.map((i, x) => {
                        //         const img_url = i.product_image_url;
                        //         const img_url_arr = img_url.split('/');
                        //         i.product_image_name = img_url_arr[img_url_arr.length - 1];
                        //         i.product_image_url = i.product_image_url + '?v' + (new Date().getTime().toString());
                        //         return i;
                        //       });
                        //     }
                        //   });
                    }
                });
            }
        }
    };
    SliderFormComponent.prototype.getAlert = function (result) {
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
    return SliderFormComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SliderFormComponent.prototype, "slidermodel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SliderFormComponent.prototype, "onAlert", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('formSlider'),
    __metadata("design:type", Object)
], SliderFormComponent.prototype, "formSliderModel", void 0);
SliderFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'slider-form',
        template: __webpack_require__("../../../../../src/app/+imagenes/slider/slider-form.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], SliderFormComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=slider-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/slider/slidermodels.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div *ngFor=\"let slidermodel of slidermodels\" class=\"padding-10 margin-top-10\">\n\t\t<slider-form [slidermodel]=\"slidermodel\"  (onAlert)=\"printAlert($event)\"></slider-form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/+imagenes/slider/slidermodels.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderModelsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__ = __webpack_require__("../../../../../src/app/+imagenes/slidermodel.service.ts");
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







var SliderModelsComponent = (function () {
    function SliderModelsComponent(route, router, blockui, sliderModelService, notificationService) {
        this.route = route;
        this.router = router;
        this.blockui = blockui;
        this.sliderModelService = sliderModelService;
        this.notificationService = notificationService;
        this.slidermodels = [];
        this.onAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SliderModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sliderModelService.getImages('SLIDER').subscribe(function (slidermodels) {
            if (slidermodels.success) {
                _this.slidermodels = slidermodels.result;
            }
        });
    };
    SliderModelsComponent.prototype.printAlert = function (alert) {
        this.onAlert.emit(alert);
    };
    return SliderModelsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SliderModelsComponent.prototype, "onAlert", void 0);
SliderModelsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'slider-models',
        template: __webpack_require__("../../../../../src/app/+imagenes/slider/slidermodels.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["BlockUIService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__slidermodel_service__["a" /* SliderModelService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_utils_notification_service__["a" /* NotificationService */]) === "function" && _f || Object])
], SliderModelsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=slidermodels.component.js.map

/***/ }),

/***/ "../../../../../src/app/+imagenes/slidermodel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderModelService; });
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





var SliderModelService = (function () {
    function SliderModelService(http) {
        this.http = http;
        this.url = '/api/admin/images';
    }
    SliderModelService.prototype.getImage = function (image_id) {
        return this.http
            .get(this.getUrl([image_id]));
    };
    SliderModelService.prototype.saveImage = function (type, formData) {
        return this.http
            .post(this.getUrl([type]), formData);
    };
    SliderModelService.prototype.getImages = function (type) {
        return this.http
            .get(this.getUrl([type]));
    };
    SliderModelService.prototype.getUrl = function (params) {
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
    return SliderModelService;
}());
SliderModelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], SliderModelService);

var _a;
//# sourceMappingURL=slidermodel.service.js.map

/***/ })

});
//# sourceMappingURL=imagenes.module.chunk.js.map
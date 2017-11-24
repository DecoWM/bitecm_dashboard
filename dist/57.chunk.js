webpackJsonp([57,94],{

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__miscellaneous_routing__ = __webpack_require__(1391);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousModule", function() { return MiscellaneousModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiscellaneousModule = (function () {
    function MiscellaneousModule() {
    }
    return MiscellaneousModule;
}());
MiscellaneousModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__miscellaneous_routing__["a" /* routing */],
        ],
        declarations: []
    })
], MiscellaneousModule);

//# sourceMappingURL=miscellaneous.module.js.map

/***/ }),

/***/ 1391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var routes = [
    {
        path: '',
        redirectTo: 'blank'
    },
    {
        path: 'blank',
        loadChildren: './+blank/blank.module#BlankModule'
    },
    {
        path: 'ckeditor',
        loadChildren: './+ckeditor/ckeditor.module#CkeditorModule'
    },
    {
        path: 'email-template',
        loadChildren: './+email-template/email-template.module#EmailTemplateModule'
    },
    {
        path: 'error404',
        loadChildren: './+error404/error404.module#Error404Module'
    },
    {
        path: 'error500',
        loadChildren: './+error500/error500.module#Error500Module'
    },
    {
        path: 'invoice',
        loadChildren: './+invoice/invoice.module#InvoiceModule'
    },
    {
        path: 'pricing-tables',
        loadChildren: './+pricing-tables/pricing-tables.module#PricingTablesModule'
    },
    {
        path: 'search',
        loadChildren: './+search/search.module#SearchModule'
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=miscellaneous.routing.js.map

/***/ })

});
//# sourceMappingURL=57.chunk.js.map
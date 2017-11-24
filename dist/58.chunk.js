webpackJsonp([58,94],{

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_showcase_routing__ = __webpack_require__(1374);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsShowcaseModule", function() { return FormsShowcaseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FormsShowcaseModule = (function () {
    function FormsShowcaseModule() {
    }
    return FormsShowcaseModule;
}());
FormsShowcaseModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__forms_showcase_routing__["a" /* routing */],
        ],
        providers: [],
        entryComponents: []
    })
], FormsShowcaseModule);

//# sourceMappingURL=forms-showcase.module.js.map

/***/ }),

/***/ 1374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var routes = [
    { path: 'editors',
        loadChildren: 'app/+forms/+bootstrap-editors/bootstrap-editors.module#BootstrapEditorsModule',
        data: { pageTitle: 'Bootstrap Editors' }
    },
    { path: 'bootstrap-elements',
        loadChildren: 'app/+forms/+bootstrap-elements/bootstrap-elements.module#BootstrapElementsModule',
        data: { pageTitle: 'Bootstrap Elements' }
    },
    {
        path: 'bootstrap-validation',
        loadChildren: 'app/+forms/+bootstrap-validation/bootstrap-validation.module#BootstrapValidationModule',
        data: { pageTitle: 'Bootstrap Validation' }
    },
    {
        path: 'dropzone',
        loadChildren: 'app/+forms/+dropzone-showcase/dropzone-showcase.module#DropzoneShowcaseModule',
        data: { pageTitle: 'Dropzone' }
    },
    {
        path: 'elements',
        loadChildren: 'app/+forms/+form-elements/form-elements.module#FormElementsModule',
        data: { pageTitle: 'Elements' }
    },
    {
        path: 'layouts',
        loadChildren: 'app/+forms/+form-layouts/form-layouts.module#FormLayoutsModule',
        data: { pageTitle: 'Layouts' }
    },
    {
        path: 'plugins',
        loadChildren: 'app/+forms/+form-plugins/form-plugins.module#FormPluginsModule',
        data: { pageTitle: 'Plugins' }
    },
    {
        path: 'validation',
        loadChildren: 'app/+forms/+form-validation/form-validation.module#FormValidationModule',
        data: { pageTitle: 'Validation' }
    },
    {
        path: 'image-cropping',
        loadChildren: 'app/+forms/+image-cropping/image-editor.module#ImageEditorModule',
        data: { pageTitle: 'Image Cropping' }
    },
    {
        path: 'wizards',
        loadChildren: 'app/+forms/+wizards/wizards.module#WizardsModule',
        data: { pageTitle: 'Wizards' }
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=forms-showcase.routing.js.map

/***/ })

});
//# sourceMappingURL=58.chunk.js.map
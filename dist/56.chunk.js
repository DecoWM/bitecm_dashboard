webpackJsonp([56,94],{

/***/ 1121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ui_elements_routing__ = __webpack_require__(1406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementsModule", function() { return UiElementsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UiElementsModule = (function () {
    function UiElementsModule() {
    }
    return UiElementsModule;
}());
UiElementsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ui_elements_routing__["a" /* routing */],
        ],
        providers: [],
    })
], UiElementsModule);

//# sourceMappingURL=ui-elements.module.js.map

/***/ }),

/***/ 1406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });

var routes = [
    {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full',
    },
    { path: 'buttons', loadChildren: 'app/+ui-elements/+buttons/buttons.module#ButtonsModule', data: { pageTitle: 'Buttons' } },
    { path: 'grid', loadChildren: 'app/+ui-elements/+grid/grid.module#GridModule', data: { pageTitle: 'Grid' } },
    { path: 'typography', loadChildren: 'app/+ui-elements/+typography/typography.module#TypographyModule', data: { pageTitle: 'Typography' } },
    { path: 'tree-views', loadChildren: 'app/+ui-elements/+tree-views/tree-views.module#TreeViewsModule', data: { pageTitle: 'Tree Views' } },
    { path: 'nestable-lists', loadChildren: 'app/+ui-elements/+nestable-lists/nestable-lists.module#NestableListsModule', data: { pageTitle: 'Nestable Lists' } },
    { path: 'jquery-ui', loadChildren: 'app/+ui-elements/+jquery-ui/jquery-ui.module#JqueryUiShowcaseModule', data: { pageTitle: 'Jquery Ui' } },
    { path: 'general', loadChildren: 'app/+ui-elements/+general-elements/general-elements.module#GeneralElementsModule', data: { pageTitle: 'General Elements' } },
    { path: 'icons', loadChildren: 'app/+ui-elements/+icons/icons.module#IconsModule', data: { pageTitle: 'Icons' } },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=ui-elements.routing.js.map

/***/ })

});
//# sourceMappingURL=56.chunk.js.map
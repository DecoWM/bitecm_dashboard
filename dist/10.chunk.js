webpackJsonp([10,94],{

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizards_routing__ = __webpack_require__(1373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wizards_component__ = __webpack_require__(1243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_smartadmin_module__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_forms_wizards_smartadmin_wizards_module__ = __webpack_require__(1422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_wizard_widget_basic_wizard_widget_component__ = __webpack_require__(1371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fuel_ux_wizard_widget_fuel_ux_wizard_widget_component__ = __webpack_require__(1372);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardsModule", function() { return WizardsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WizardsModule = (function () {
    function WizardsModule() {
    }
    return WizardsModule;
}());
WizardsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__wizards_routing__["a" /* wizardsRouting */],
            __WEBPACK_IMPORTED_MODULE_4__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_5__shared_forms_wizards_smartadmin_wizards_module__["a" /* SmartadminWizardsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__wizards_component__["a" /* WizardsComponent */], __WEBPACK_IMPORTED_MODULE_6__basic_wizard_widget_basic_wizard_widget_component__["a" /* BasicWizardWidgetComponent */], __WEBPACK_IMPORTED_MODULE_7__fuel_ux_wizard_widget_fuel_ux_wizard_widget_component__["a" /* FuelUxWizardWidgetComponent */]]
    })
], WizardsModule);

//# sourceMappingURL=wizards.module.js.map

/***/ }),

/***/ 1123:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ 1124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__ = __webpack_require__(1127);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InlineGraphsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var InlineGraphsModule = (function () {
    function InlineGraphsModule() {
    }
    return InlineGraphsModule;
}());
InlineGraphsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__["a" /* EasyPieChartContainer */], __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__["a" /* SparklineContainer */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__easy_pie_chart_container_directive__["a" /* EasyPieChartContainer */], __WEBPACK_IMPORTED_MODULE_3__sparkline_container_directive__["a" /* SparklineContainer */]],
    })
], InlineGraphsModule);

//# sourceMappingURL=inline-graphs.module.js.map

/***/ }),

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = FadeInTop;
/**
 * Created by griga on 12/26/16.
 */
function FadeInTop() {
    var __ref__ = window['Reflect'];
    function parseMeta(metaInformation) {
        for (var _i = 0, metaInformation_1 = metaInformation; _i < metaInformation_1.length; _i++) {
            var metadata = metaInformation_1[_i]; //metadata is @Component metadata
            // metadata.animations = [fadeInTop()];
            // metadata.host = {"[@fadeInTop]": ''};
            //your logic here
            // mine was metadata.styles = [builtStyles]
        }
    }
    //value represents the annotation parameter(s)
    return function (target) {
        var metaInformation = __ref__.getOwnMetadata('annotations', target);
        if (metaInformation) {
            parseMeta(metaInformation);
        }
    };
}
//# sourceMappingURL=fade-in-top.decorator.js.map

/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__ = __webpack_require__(1133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_jquery_easy_pie_chart_dist_jquery_easypiechart_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyPieChartContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EasyPieChartContainer = (function () {
    function EasyPieChartContainer(container) {
        this.container = container;
        this.counter = 0;
    }
    EasyPieChartContainer.prototype.render = function () {
        $('.easy-pie-chart', this.container.nativeElement).each(function (idx, element) {
            var $this = $(element), barColor = $this.css('color') || $this.data('pie-color'), trackColor = $this.data('pie-track-color') || 'rgba(0,0,0,0.04)', size = parseInt($this.data('pie-size')) || 25;
            $this.easyPieChart({
                barColor: barColor,
                trackColor: trackColor,
                scaleColor: false,
                lineCap: 'butt',
                lineWidth: size / 8.5,
                animate: 1500,
                rotate: -90,
                size: size,
                onStep: function (from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        });
    };
    EasyPieChartContainer.prototype.ngAfterContentChecked = function () {
        var _this = this;
        var counter = $('.easy-pie-chart').length;
        if (counter != this.counter) {
            this.counter = counter;
            setTimeout(function () {
                _this.render();
            }, 25);
        }
    };
    EasyPieChartContainer.prototype.ngAfterContentInit = function () {
        this.render();
    };
    return EasyPieChartContainer;
}());
EasyPieChartContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saEasyPieChartContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], EasyPieChartContainer);

var _a;
//# sourceMappingURL=easy-pie-chart-container.directive.js.map

/***/ }),

/***/ 1127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js__ = __webpack_require__(1134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_script_loader_smartadmin_plugins_bower_components_relayfoods_jquery_sparkline_dist_jquery_sparkline_min_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineContainer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SparklineContainer = (function () {
    function SparklineContainer(el) {
        this.el = el;
        this.container = this.el.nativeElement;
    }
    SparklineContainer.prototype.ngOnInit = function () {
        this.drawSparklines();
    };
    SparklineContainer.prototype.barChart = function ($el) {
        var barColor = $el.data('sparkline-bar-color') || $el.css('color') || '#0000f0';
        var sparklineHeight = $el.data('sparkline-height') || '26px';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 5;
        var sparklineBarSpacing = $el.data('sparkline-barspacing') || 2;
        var sparklineNegBarColor = $el.data('sparkline-negbar-color') || '#A90329';
        var sparklineStackedColor = $el.data('sparkline-barstacked-color') || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"];
        $el.sparkline('html', {
            barColor: barColor,
            type: 'bar',
            height: sparklineHeight,
            barWidth: sparklineBarWidth,
            barSpacing: sparklineBarSpacing,
            stackedBarColor: sparklineStackedColor,
            negBarColor: sparklineNegBarColor,
            zeroAxis: 'false',
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.lineChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '90px';
        var thisLineColor = $el.data('sparkline-line-color') || $el.css('color') || '#0000f0';
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisFill = $el.data('fill-color') || '#c0d0f0';
        var thisSpotColor = $el.data('sparkline-spot-color') || '#f08000';
        var thisMinSpotColor = $el.data('sparkline-minspot-color') || '#ed1c24';
        var thisMaxSpotColor = $el.data('sparkline-maxspot-color') || '#f08000';
        var thishighlightSpotColor = $el.data('sparkline-highlightspot-color') || '#50f050';
        var thisHighlightLineColor = $el.data('sparkline-highlightline-color') || 'f02020';
        var thisSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisChartMinYRange = $el.data('sparkline-min-y');
        var thisChartMaxYRange = $el.data('sparkline-max-y');
        var thisChartMinXRange = $el.data('sparkline-min-x');
        var thisChartMaxXRange = $el.data('sparkline-max-x');
        var thisMinNormValue = $el.data('min-val');
        var thisMaxNormValue = $el.data('max-val');
        var thisNormColor = $el.data('norm-color') || '#c0c0c0';
        var thisDrawNormalOnTop = $el.data('draw-normal') || false;
        $el.sparkline('html', {
            type: 'line',
            width: sparklineWidth,
            height: sparklineHeight,
            lineWidth: thisLineWidth,
            lineColor: thisLineColor,
            fillColor: thisFill,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor,
            maxSpotColor: thisMaxSpotColor,
            highlightSpotColor: thishighlightSpotColor,
            highlightLineColor: thisHighlightLineColor,
            spotRadius: thisSpotRadius,
            chartRangeMin: thisChartMinYRange,
            chartRangeMax: thisChartMaxYRange,
            chartRangeMinX: thisChartMinXRange,
            chartRangeMaxX: thisChartMaxXRange,
            normalRangeMin: thisMinNormValue,
            normalRangeMax: thisMaxNormValue,
            normalRangeColor: thisNormColor,
            drawNormalOnTop: thisDrawNormalOnTop,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.pieChart = function ($el) {
        var pieColors = $el.data('sparkline-piecolor') || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"];
        var pieWidthHeight = $el.data('sparkline-piesize') || 90;
        var pieBorderColor = $el.data('border-color') || '#45494C';
        var pieOffset = $el.data('sparkline-offset') || 0;
        $el.sparkline('html', {
            type: 'pie',
            width: pieWidthHeight,
            height: pieWidthHeight,
            tooltipFormat: '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
            sliceColors: pieColors,
            borderWidth: 1,
            offset: pieOffset,
            borderColor: pieBorderColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.boxChart = function ($el) {
        var thisBoxWidth = $el.data('sparkline-width') || 'auto';
        var thisBoxHeight = $el.data('sparkline-height') || 'auto';
        var thisBoxRaw = $el.data('sparkline-boxraw');
        var thisBoxTarget = $el.data('sparkline-targetval');
        var thisBoxMin = $el.data('sparkline-min');
        var thisBoxMax = $el.data('sparkline-max');
        var thisShowOutlier = $el.data('sparkline-showoutlier') || true;
        var thisIQR = $el.data('sparkline-outlier-iqr') || 1.5;
        var thisBoxSpotRadius = $el.data('sparkline-spotradius') || 1.5;
        var thisBoxLineColor = $el.css('color') || '#000000';
        var thisBoxFillColor = $el.data('fill-color') || '#c0d0f0';
        var thisBoxWhisColor = $el.data('sparkline-whis-color') || '#000000';
        var thisBoxOutlineColor = $el.data('sparkline-outline-color') || '#303030';
        var thisBoxOutlineFill = $el.data('sparkline-outlinefill-color') || '#f0f0f0';
        var thisBoxMedianColor = $el.data('sparkline-outlinemedian-color') || '#f00000';
        var thisBoxTargetColor = $el.data('sparkline-outlinetarget-color') || '#40a020';
        $el.sparkline('html', {
            type: 'box',
            width: thisBoxWidth,
            height: thisBoxHeight,
            raw: thisBoxRaw,
            target: thisBoxTarget,
            minValue: thisBoxMin,
            maxValue: thisBoxMax,
            showOutliers: thisShowOutlier,
            outlierIQR: thisIQR,
            spotRadius: thisBoxSpotRadius,
            boxLineColor: thisBoxLineColor,
            boxFillColor: thisBoxFillColor,
            whiskerColor: thisBoxWhisColor,
            outlierLineColor: thisBoxOutlineColor,
            outlierFillColor: thisBoxOutlineFill,
            medianColor: thisBoxMedianColor,
            targetColor: thisBoxTargetColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.bulletChart = function ($el) {
        var thisBulletHeight = $el.data('sparkline-height') || 'auto';
        var thisBulletWidth = $el.data('sparkline-width') || 2;
        var thisBulletColor = $el.data('sparkline-bullet-color') || '#ed1c24';
        var thisBulletPerformanceColor = $el.data('sparkline-performance-color') || '#3030f0';
        var thisBulletRangeColors = $el.data('sparkline-bulletrange-color') || ["#d3dafe", "#a8b6ff", "#7f94ff"];
        $el.sparkline('html', {
            type: 'bullet',
            height: thisBulletHeight,
            targetWidth: thisBulletWidth,
            targetColor: thisBulletColor,
            performanceColor: thisBulletPerformanceColor,
            rangeColors: thisBulletRangeColors,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.discreteChart = function ($el) {
        var thisDiscreteHeight = $el.data('sparkline-height') || 26;
        var thisDiscreteWidth = $el.data('sparkline-width') || 50;
        var thisDiscreteLineColor = $el.css('color');
        var thisDiscreteLineHeight = $el.data('sparkline-line-height') || 5;
        var thisDiscreteThrushold = $el.data('sparkline-threshold');
        var thisDiscreteThrusholdColor = $el.data('sparkline-threshold-color') || '#ed1c24';
        $el.sparkline('html', {
            type: 'discrete',
            width: thisDiscreteWidth,
            height: thisDiscreteHeight,
            lineColor: thisDiscreteLineColor,
            lineHeight: thisDiscreteLineHeight,
            thresholdValue: thisDiscreteThrushold,
            thresholdColor: thisDiscreteThrusholdColor,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.tristaneChart = function ($el) {
        var thisTristateHeight = $el.data('sparkline-height') || 26;
        var thisTristatePosBarColor = $el.data('sparkline-posbar-color') || '#60f060';
        var thisTristateNegBarColor = $el.data('sparkline-negbar-color') || '#f04040';
        var thisTristateZeroBarColor = $el.data('sparkline-zerobar-color') || '#909090';
        var thisTristateBarWidth = $el.data('sparkline-barwidth') || 5;
        var thisTristateBarSpacing = $el.data('sparkline-barspacing') || 2;
        var thisZeroAxis = $el.data('sparkline-zeroaxis');
        $el.sparkline('html', {
            type: 'tristate',
            height: thisTristateHeight,
            posBarColor: thisTristatePosBarColor,
            negBarColor: thisTristateNegBarColor,
            zeroBarColor: thisTristateZeroBarColor,
            barWidth: thisTristateBarWidth,
            barSpacing: thisTristateBarSpacing,
            zeroAxis: thisZeroAxis,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeBarChart = function ($el) {
        var sparklineHeight = $el.data('sparkline-height') || '20px';
        var sparklineWidth = $el.data('sparkline-width') || '100%';
        var sparklineBarWidth = $el.data('sparkline-barwidth') || 3;
        var thisLineWidth = $el.data('sparkline-line-width') || 1;
        var thisLineColor = $el.data('sparkline-color-top') || '#ed1c24';
        var thisBarColor = $el.data('sparkline-color-bottom') || '#333333';
        $el.sparkline($el.data('sparkline-bar-val'), {
            type: 'bar',
            width: sparklineWidth,
            height: sparklineHeight,
            barColor: thisBarColor,
            barWidth: sparklineBarWidth,
            tooltipContainer: this.container
            //barSpacing: 5
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor,
            lineWidth: thisLineWidth,
            composite: true,
            fillColor: false,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.compositeLineChart = function ($el) {
        // @todo webpack gets stuck on chunk optimization if uncomment defaults
        var sparklineHeight = $el.data('sparkline-height'); // || '20px';
        var sparklineWidth = $el.data('sparkline-width'); // || '90px';
        var sparklineValue = $el.data('sparkline-bar-val');
        var sparklineValueSpots1 = $el.data('sparkline-bar-val-spots-top');
        var sparklineValueSpots2 = $el.data('sparkline-bar-val-spots-bottom');
        var thisLineWidth1 = $el.data('sparkline-line-width-top'); //  || 1;
        var thisLineWidth2 = $el.data('sparkline-line-width-bottom'); // || 1;
        var thisLineColor1 = $el.data('sparkline-color-top'); //  || '#333333';
        var thisLineColor2 = $el.data('sparkline-color-bottom'); //  || '#ed1c24';
        var thisSpotRadius1 = $el.data('sparkline-spotradius-top'); // || 1.5;
        var thisSpotRadius2 = $el.data('sparkline-spotradius-bottom'); // || thisSpotRadius1;
        var thisSpotColor = $el.data('sparkline-spot-color'); // || '#f08000';
        var thisMinSpotColor1 = $el.data('sparkline-minspot-color-top'); // || '#ed1c24';
        var thisMaxSpotColor1 = $el.data('sparkline-maxspot-color-top'); //  || '#f08000';
        var thisMinSpotColor2 = $el.data('sparkline-minspot-color-bottom'); // || thisMinSpotColor1;
        var thisMaxSpotColor2 = $el.data('sparkline-maxspot-color-bottom'); //  || thisMaxSpotColor1;
        var thishighlightSpotColor1 = $el.data('sparkline-highlightspot-color-top'); //  || '#50f050';
        var thisHighlightLineColor1 = $el.data('sparkline-highlightline-color-top'); // || '#f02020';
        var thishighlightSpotColor2 = $el.data('sparkline-highlightspot-color-bottom'); // || thishighlightSpotColor1;
        var thisHighlightLineColor2 = $el.data('sparkline-highlightline-color-bottom'); // || thisHighlightLineColor1;
        var thisFillColor1 = $el.data('sparkline-fillcolor-top'); // || 'transparent';
        var thisFillColor2 = $el.data('sparkline-fillcolor-bottom'); // || 'transparent';
        $el.sparkline(sparklineValue, {
            type: 'line',
            spotRadius: thisSpotRadius1,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor1,
            maxSpotColor: thisMaxSpotColor1,
            highlightSpotColor: thishighlightSpotColor1,
            highlightLineColor: thisHighlightLineColor1,
            valueSpots: sparklineValueSpots1,
            lineWidth: thisLineWidth1,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor1,
            fillColor: thisFillColor1,
            tooltipContainer: this.container
        });
        $el.sparkline($el.data('sparkline-line-val'), {
            type: 'line',
            spotRadius: thisSpotRadius2,
            spotColor: thisSpotColor,
            minSpotColor: thisMinSpotColor2,
            maxSpotColor: thisMaxSpotColor2,
            highlightSpotColor: thishighlightSpotColor2,
            highlightLineColor: thisHighlightLineColor2,
            valueSpots: sparklineValueSpots2,
            lineWidth: thisLineWidth2,
            width: sparklineWidth,
            height: sparklineHeight,
            lineColor: thisLineColor2,
            composite: true,
            fillColor: thisFillColor2,
            tooltipContainer: this.container
        });
    };
    SparklineContainer.prototype.drawSparklines = function () {
        var _this = this;
        $('.sparkline:not(:has(>canvas))', this.container).each(function (i, el) {
            var $el = $(el), sparklineType = $el.data('sparkline-type') || 'bar';
            if (sparklineType == 'bar') {
                _this.barChart($el);
            }
            if (sparklineType == 'line') {
                _this.lineChart($el);
            }
            if (sparklineType == 'pie') {
                _this.pieChart($el);
            }
            if (sparklineType == 'box') {
                _this.boxChart($el);
            }
            if (sparklineType == 'bullet') {
                _this.bulletChart($el);
            }
            if (sparklineType == 'discrete') {
                _this.discreteChart($el);
            }
            if (sparklineType == 'tristate') {
                _this.tristaneChart($el);
            }
            if (sparklineType == 'compositebar') {
                _this.compositeBarChart($el);
            }
            if (sparklineType == 'compositeline') {
                _this.compositeLineChart($el);
            }
        });
    };
    return SparklineContainer;
}());
SparklineContainer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saSparklineContainer]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SparklineContainer);

var _a;
//# sourceMappingURL=sparkline-container.directive.js.map

/***/ }),

/***/ 1128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    return StatsComponent;
}());
StatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-stats',
        template: __webpack_require__(1132)
    }),
    __metadata("design:paramtypes", [])
], StatsComponent);

//# sourceMappingURL=stats.component.js.map

/***/ }),

/***/ 1129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats_component__ = __webpack_require__(1128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__graphs_inline_inline_graphs_module__ = __webpack_require__(1124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var StatsModule = (function () {
    function StatsModule() {
    }
    return StatsModule;
}());
StatsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__graphs_inline_inline_graphs_module__["a" /* InlineGraphsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__stats_component__["a" /* StatsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__stats_component__["a" /* StatsComponent */]],
    })
], StatsModule);

//# sourceMappingURL=stats.module.js.map

/***/ }),

/***/ 1130:
/***/ (function(module, exports) {

module.exports = "/**!\n * easyPieChart\n * Lightweight plugin to render simple, animated and retina optimized pie charts\n *\n * @license \n * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)\n * @version 2.1.6\n **/\n!function(a,b){\"object\"==typeof exports?module.exports=b(require(\"jquery\")):\"function\"==typeof define&&define.amd?define([\"jquery\"],b):b(a.jQuery)}(this,function(a){var b=function(a,b){var c,d=document.createElement(\"canvas\");a.appendChild(d),\"undefined\"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(d);var e=d.getContext(\"2d\");d.width=d.height=b.size;var f=1;window.devicePixelRatio>1&&(f=window.devicePixelRatio,d.style.width=d.style.height=[b.size,\"px\"].join(\"\"),d.width=d.height=b.size*f,e.scale(f,f)),e.translate(b.size/2,b.size/2),e.rotate((-0.5+b.rotate/180)*Math.PI);var g=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(g-=b.scaleLength+2),Date.now=Date.now||function(){return+new Date};var h=function(a,b,c){c=Math.min(Math.max(-1,c||0),1);var d=0>=c?!0:!1;e.beginPath(),e.arc(0,0,g,0,2*Math.PI*c,d),e.strokeStyle=a,e.lineWidth=b,e.stroke()},i=function(){var a,c;e.lineWidth=1,e.fillStyle=b.scaleColor,e.save();for(var d=24;d>0;--d)d%6===0?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),e.fillRect(-b.size/2+a,0,c,1),e.rotate(Math.PI/12);e.restore()},j=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}(),k=function(){b.scaleColor&&i(),b.trackColor&&h(b.trackColor,b.trackWidth||b.lineWidth,1)};this.getCanvas=function(){return d},this.getCtx=function(){return e},this.clear=function(){e.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){b.scaleColor||b.trackColor?e.getImageData&&e.putImageData?c?e.putImageData(c,0,0):(k(),c=e.getImageData(0,0,b.size*f,b.size*f)):(this.clear(),k()):this.clear(),e.lineCap=b.lineCap;var d;d=\"function\"==typeof b.barColor?b.barColor(a):b.barColor,h(d,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate.duration),g=b.easing(this,f,a,c-a,b.animate.duration);this.draw(g),b.onStep(a,c,g),f>=b.animate.duration?b.onStop(a,c):j(e)}.bind(this);j(e)}.bind(this)},c=function(a,c){var d={barColor:\"#ef1e25\",trackColor:\"#f9f9f9\",scaleColor:\"#dfe0e0\",scaleLength:5,lineCap:\"round\",lineWidth:3,trackWidth:void 0,size:110,rotate:0,animate:{duration:1e3,enabled:!0},easing:function(a,b,c,d,e){return b/=e/2,1>b?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}};if(\"undefined\"!=typeof b)d.renderer=b;else{if(\"undefined\"==typeof SVGRenderer)throw new Error(\"Please load either the SVG- or the CanvasRenderer\");d.renderer=SVGRenderer}var e={},f=0,g=function(){this.el=a,this.options=e;for(var b in d)d.hasOwnProperty(b)&&(e[b]=c&&\"undefined\"!=typeof c[b]?c[b]:d[b],\"function\"==typeof e[b]&&(e[b]=e[b].bind(this)));e.easing=\"string\"==typeof e.easing&&\"undefined\"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[e.easing])?jQuery.easing[e.easing]:d.easing,\"number\"==typeof e.animate&&(e.animate={duration:e.animate,enabled:!0}),\"boolean\"!=typeof e.animate||e.animate||(e.animate={duration:1e3,enabled:e.animate}),this.renderer=new e.renderer(a,e),this.renderer.draw(f),a.dataset&&a.dataset.percent?this.update(parseFloat(a.dataset.percent)):a.getAttribute&&a.getAttribute(\"data-percent\")&&this.update(parseFloat(a.getAttribute(\"data-percent\")))}.bind(this);this.update=function(a){return a=parseFloat(a),e.animate.enabled?this.renderer.animate(f,a):this.renderer.draw(a),f=a,this}.bind(this),this.disableAnimation=function(){return e.animate.enabled=!1,this},this.enableAnimation=function(){return e.animate.enabled=!0,this},g()};a.fn.easyPieChart=function(b){return this.each(function(){var d;a.data(this,\"easyPieChart\")||(d=a.extend({},b,a(this).data()),a.data(this,\"easyPieChart\",new c(this,d)))})}});"

/***/ }),

/***/ 1131:
/***/ (function(module, exports) {

module.exports = "/* jquery.sparkline 2.1.3 - http://omnipotent.net/jquery.sparkline/ \n Licensed under the New BSD License - see above site for details */\n!function(a,b,c){!function(a){\"function\"==typeof define&&define.amd?define([\"jquery\"],a):jQuery&&!jQuery.fn.sparkline&&a(jQuery)}(function(d){\"use strict\";var e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K={},L=0;e=function(){return{common:{type:\"line\",lineColor:\"#00f\",fillColor:\"#cdf\",defaultPixelsPerValue:3,width:\"auto\",height:\"auto\",composite:!1,tagValuesAttribute:\"values\",tagOptionsPrefix:\"spark\",enableTagOptions:!1,enableHighlight:!0,highlightLighten:1.4,tooltipSkipNull:!0,tooltipPrefix:\"\",tooltipSuffix:\"\",disableHiddenCheck:!1,numberFormatter:!1,numberDigitGroupCount:3,numberDigitGroupSep:\",\",numberDecimalMark:\".\",disableTooltips:!1,disableInteraction:!1},line:{spotColor:\"#f80\",highlightSpotColor:\"#5f5\",highlightLineColor:\"#f22\",spotRadius:1.5,minSpotColor:\"#f80\",maxSpotColor:\"#f80\",lineWidth:1,normalRangeMin:c,normalRangeMax:c,normalRangeColor:\"#ccc\",drawNormalOnTop:!1,chartRangeMin:c,chartRangeMax:c,chartRangeMinX:c,chartRangeMaxX:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{y}}{{suffix}}')},bar:{barColor:\"#3366cc\",negBarColor:\"#f44\",stackedBarColor:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],zeroColor:c,nullColor:c,zeroAxis:!0,barWidth:4,barSpacing:1,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,colorMap:c,tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{prefix}}{{value}}{{suffix}}')},tristate:{barWidth:4,barSpacing:1,posBarColor:\"#6f6\",negBarColor:\"#f44\",zeroBarColor:\"#999\",colorMap:{},tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value:map}}'),tooltipValueLookups:{map:{\"-1\":\"Loss\",0:\"Draw\",1:\"Win\"}}},discrete:{lineHeight:\"auto\",thresholdColor:c,thresholdValue:0,chartRangeMax:c,chartRangeMin:c,chartRangeClip:!1,tooltipFormat:new g(\"{{prefix}}{{value}}{{suffix}}\")},bullet:{targetColor:\"#f33\",targetWidth:3,performanceColor:\"#33f\",rangeColors:[\"#d3dafe\",\"#a8b6ff\",\"#7f94ff\"],base:c,tooltipFormat:new g(\"{{fieldkey:fields}} - {{value}}\"),tooltipValueLookups:{fields:{r:\"Range\",p:\"Performance\",t:\"Target\"}}},pie:{offset:0,sliceColors:[\"#3366cc\",\"#dc3912\",\"#ff9900\",\"#109618\",\"#66aa00\",\"#dd4477\",\"#0099c6\",\"#990099\"],borderWidth:0,borderColor:\"#000\",tooltipFormat:new g('<span style=\"color: {{color}}\">&#9679;</span> {{value}} ({{percent.1}}%)')},box:{raw:!1,boxLineColor:\"#000\",boxFillColor:\"#cdf\",whiskerColor:\"#000\",outlierLineColor:\"#333\",outlierFillColor:\"#fff\",medianColor:\"#f00\",showOutliers:!0,outlierIQR:1.5,spotRadius:1.5,target:c,targetColor:\"#4a2\",chartRangeMax:c,chartRangeMin:c,tooltipFormat:new g(\"{{field:fields}}: {{value}}\"),tooltipFormatFieldlistKey:\"field\",tooltipValueLookups:{fields:{lq:\"Lower Quartile\",med:\"Median\",uq:\"Upper Quartile\",lo:\"Left Outlier\",ro:\"Right Outlier\",lw:\"Left Whisker\",rw:\"Right Whisker\"}}}}},D='.jqstooltip { position: absolute;left: 0px;top: 0px;visibility: hidden;background: rgb(0, 0, 0) transparent;background-color: rgba(0,0,0,0.6);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);-ms-filter: \"progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)\";color: white;font: 10px arial, san serif;text-align: left;white-space: nowrap;padding: 5px;border: 1px solid white;box-sizing: content-box;z-index: 10000;}.jqsfield { color: white;font: 10px arial, san serif;text-align: left;}',f=function(){var a,b;return a=function(){this.init.apply(this,arguments)},arguments.length>1?(arguments[0]?(a.prototype=d.extend(new arguments[0],arguments[arguments.length-1]),a._super=arguments[0].prototype):a.prototype=arguments[arguments.length-1],arguments.length>2&&(b=Array.prototype.slice.call(arguments,1,-1),b.unshift(a.prototype),d.extend.apply(d,b))):a.prototype=arguments[0],a.prototype.cls=a,a},d.SPFormatClass=g=f({fre:/\\{\\{([\\w.]+?)(:(.+?))?\\}\\}/g,precre:/(\\w+)\\.(\\d+)/,init:function(a,b){this.format=a,this.fclass=b},render:function(a,b,d){var e,f,g,h,i,j=this,k=a;return this.format.replace(this.fre,function(){var a;return f=arguments[1],g=arguments[3],e=j.precre.exec(f),e?(i=e[2],f=e[1]):i=!1,h=k[f],h===c?\"\":g&&b&&b[g]?(a=b[g],a.get?b[g].get(h)||h:b[g][h]||h):(m(h)&&(h=d.get(\"numberFormatter\")?d.get(\"numberFormatter\")(h):r(h,i,d.get(\"numberDigitGroupCount\"),d.get(\"numberDigitGroupSep\"),d.get(\"numberDecimalMark\"))),h)})}}),d.spformat=function(a,b){return new g(a,b)},h=function(a,b,c){return b>a?b:a>c?c:a},i=function(a,c){var d;return 2===c?(d=b.floor(a.length/2),a.length%2?a[d]:(a[d-1]+a[d])/2):a.length%2?(d=(a.length*c+c)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1]):(d=(a.length*c+2)/4,d%1?(a[b.floor(d)]+a[b.floor(d)-1])/2:a[d-1])},j=function(a){var b;switch(a){case\"undefined\":a=c;break;case\"null\":a=null;break;case\"true\":a=!0;break;case\"false\":a=!1;break;default:b=parseFloat(a),a==b&&(a=b)}return a},k=function(a){var b,c=[];for(b=a.length;b--;)c[b]=j(a[b]);return c},l=function(a,b){var c,d,e=[];for(c=0,d=a.length;d>c;c++)a[c]!==b&&e.push(a[c]);return e},m=function(a){return!isNaN(parseFloat(a))&&isFinite(a)},r=function(a,b,c,e,f){var g,h;for(a=(b===!1?parseFloat(a).toString():a.toFixed(b)).split(\"\"),g=(g=d.inArray(\".\",a))<0?a.length:g,g<a.length&&(a[g]=f),h=g-c;h>0;h-=c)a.splice(h,0,e);return a.join(\"\")},n=function(a,b,c){var d;for(d=b.length;d--;)if((!c||null!==b[d])&&b[d]!==a)return!1;return!0},o=function(a){var b,c=0;for(b=a.length;b--;)c+=\"number\"==typeof a[b]?a[b]:0;return c},q=function(a){return d.isArray(a)?a:[a]},p=function(b){var c,d;if(a.createStyleSheet)try{return a.createStyleSheet().cssText=b,void 0}catch(e){d=!0}c=a.createElement(\"style\"),c.type=\"text/css\",a.getElementsByTagName(\"head\")[0].appendChild(c),d?a.styleSheets[a.styleSheets.length-1].cssText=b:c[\"string\"==typeof a.body.style.WebkitAppearance?\"innerText\":\"innerHTML\"]=b},d.fn.simpledraw=function(b,e,f,g){var h,i;if(f&&(h=this.data(\"_jqs_vcanvas\")))return h;if(d.fn.sparkline.canvas===!1)return!1;if(d.fn.sparkline.canvas===c){var j=a.createElement(\"canvas\");if(j.getContext&&j.getContext(\"2d\"))d.fn.sparkline.canvas=function(a,b,c,d){return new H(a,b,c,d)};else{if(!a.namespaces||a.namespaces.v)return d.fn.sparkline.canvas=!1,!1;a.namespaces.add(\"v\",\"urn:schemas-microsoft-com:vml\",\"#default#VML\"),d.fn.sparkline.canvas=function(a,b,c){return new I(a,b,c)}}}return b===c&&(b=d(this).innerWidth()),e===c&&(e=d(this).innerHeight()),h=d.fn.sparkline.canvas(b,e,this,g),i=d(this).data(\"_jqs_mhandler\"),i&&i.registerCanvas(h),h},d.fn.cleardraw=function(){var a=this.data(\"_jqs_vcanvas\");a&&a.reset()},d.RangeMapClass=s=f({init:function(a){var b,c,d=[];for(b in a)a.hasOwnProperty(b)&&\"string\"==typeof b&&b.indexOf(\":\")>-1&&(c=b.split(\":\"),c[0]=0===c[0].length?-1/0:parseFloat(c[0]),c[1]=0===c[1].length?1/0:parseFloat(c[1]),c[2]=a[b],d.push(c));this.map=a,this.rangelist=d||!1},get:function(a){var b,d,e,f=this.rangelist;if((e=this.map[a])!==c)return e;if(f)for(b=f.length;b--;)if(d=f[b],d[0]<=a&&d[1]>=a)return d[2];return c}}),d.range_map=function(a){return new s(a)},t=f({init:function(a,b){var c=d(a);this.$el=c,this.options=b,this.currentPageX=0,this.currentPageY=0,this.el=a,this.splist=[],this.tooltip=null,this.over=!1,this.displayTooltips=!b.get(\"disableTooltips\"),this.highlightEnabled=!b.get(\"disableHighlight\")},registerSparkline:function(a){this.splist.push(a),this.over&&this.updateDisplay()},registerCanvas:function(a){var b=d(a.canvas);this.canvas=a,this.$canvas=b,b.mouseenter(d.proxy(this.mouseenter,this)),b.mouseleave(d.proxy(this.mouseleave,this)),b.click(d.proxy(this.mouseclick,this))},reset:function(a){this.splist=[],this.tooltip&&a&&(this.tooltip.remove(),this.tooltip=c)},mouseclick:function(a){var b=d.Event(\"sparklineClick\");b.originalEvent=a,b.sparklines=this.splist,this.$el.trigger(b)},mouseenter:function(b){d(a.body).unbind(\"mousemove.jqs\"),d(a.body).bind(\"mousemove.jqs\",d.proxy(this.mousemove,this)),this.over=!0,this.currentPageX=b.pageX,this.currentPageY=b.pageY,this.currentEl=b.target,!this.tooltip&&this.displayTooltips&&(this.tooltip=new u(this.options),this.tooltip.updatePosition(b.pageX,b.pageY)),this.updateDisplay()},mouseleave:function(){d(a.body).unbind(\"mousemove.jqs\");var b,c,e=this.splist,f=e.length,g=!1;for(this.over=!1,this.currentEl=null,this.tooltip&&(this.tooltip.remove(),this.tooltip=null),c=0;f>c;c++)b=e[c],b.clearRegionHighlight()&&(g=!0);g&&this.canvas.render()},mousemove:function(a){this.currentPageX=a.pageX,this.currentPageY=a.pageY,this.currentEl=a.target,this.tooltip&&this.tooltip.updatePosition(a.pageX,a.pageY),this.updateDisplay()},updateDisplay:function(){var a,b,c,e,f,g=this.splist,h=g.length,i=!1,j=this.$canvas.offset(),k=this.currentPageX-j.left,l=this.currentPageY-j.top;if(this.over){for(c=0;h>c;c++)b=g[c],e=b.setRegionHighlight(this.currentEl,k,l),e&&(i=!0);if(i){if(f=d.Event(\"sparklineRegionChange\"),f.sparklines=this.splist,this.$el.trigger(f),this.tooltip){for(a=\"\",c=0;h>c;c++)b=g[c],a+=b.getCurrentRegionTooltip();this.tooltip.setContent(a)}this.disableHighlight||this.canvas.render()}null===e&&this.mouseleave()}}}),u=f({sizeStyle:\"position: static !important;display: block !important;visibility: hidden !important;float: left !important;\",init:function(b){var c,e=b.get(\"tooltipClassname\",\"jqstooltip\"),f=this.sizeStyle;this.container=b.get(\"tooltipContainer\")||a.body,this.tooltipOffsetX=b.get(\"tooltipOffsetX\",10),this.tooltipOffsetY=b.get(\"tooltipOffsetY\",12),d(\"#jqssizetip\").remove(),d(\"#jqstooltip\").remove(),this.sizetip=d(\"<div/>\",{id:\"jqssizetip\",style:f,\"class\":e}),this.tooltip=d(\"<div/>\",{id:\"jqstooltip\",\"class\":e}).appendTo(this.container),c=this.tooltip.offset(),this.offsetLeft=c.left,this.offsetTop=c.top,this.hidden=!0,d(window).unbind(\"resize.jqs scroll.jqs\"),d(window).bind(\"resize.jqs scroll.jqs\",d.proxy(this.updateWindowDims,this)),this.updateWindowDims()},updateWindowDims:function(){this.scrollTop=d(window).scrollTop(),this.scrollLeft=d(window).scrollLeft(),this.scrollRight=this.scrollLeft+d(window).width(),this.updatePosition()},getSize:function(a){this.sizetip.html(a).appendTo(this.container),this.width=this.sizetip.width()+1,this.height=this.sizetip.height(),this.sizetip.remove()},setContent:function(a){return a?(this.getSize(a),this.tooltip.html(a).css({width:this.width,height:this.height,visibility:\"visible\"}),this.hidden&&(this.hidden=!1,this.updatePosition()),void 0):(this.tooltip.css(\"visibility\",\"hidden\"),this.hidden=!0,void 0)},updatePosition:function(a,b){if(a===c){if(this.mousex===c)return;a=this.mousex-this.offsetLeft,b=this.mousey-this.offsetTop}else this.mousex=a-=this.offsetLeft,this.mousey=b-=this.offsetTop;this.height&&this.width&&!this.hidden&&(b-=this.height+this.tooltipOffsetY,a+=this.tooltipOffsetX,b<this.scrollTop&&(b=this.scrollTop),a<this.scrollLeft?a=this.scrollLeft:a+this.width>this.scrollRight&&(a=this.scrollRight-this.width),this.tooltip.css({left:a,top:b}))},remove:function(){this.tooltip.remove(),this.sizetip.remove(),this.sizetip=this.tooltip=c,d(window).unbind(\"resize.jqs scroll.jqs\")}}),E=function(){p(D)},d(E),J=[],d.fn.sparkline=function(b,e){return this.each(function(){var f,g,h=new d.fn.sparkline.options(this,e),i=d(this);if(f=function(){var e,f,g,j,k,l,m;return\"html\"===b||b===c?(m=this.getAttribute(h.get(\"tagValuesAttribute\")),(m===c||null===m)&&(m=i.html()),e=m.replace(/(^\\s*<!--)|(-->\\s*$)|\\s+/g,\"\").split(\",\")):e=b,f=\"auto\"===h.get(\"width\")?e.length*h.get(\"defaultPixelsPerValue\"):h.get(\"width\"),\"auto\"===h.get(\"height\")?h.get(\"composite\")&&d.data(this,\"_jqs_vcanvas\")||(j=a.createElement(\"span\"),j.innerHTML=\"a\",i.html(j),g=d(j).innerHeight()||d(j).height(),d(j).remove(),j=null):g=h.get(\"height\"),h.get(\"disableInteraction\")?k=!1:(k=d.data(this,\"_jqs_mhandler\"),k?h.get(\"composite\")||k.reset():(k=new t(this,h),d.data(this,\"_jqs_mhandler\",k))),h.get(\"composite\")&&!d.data(this,\"_jqs_vcanvas\")?(d.data(this,\"_jqs_errnotify\")||(alert(\"Attempted to attach a composite sparkline to an element with no existing sparkline\"),d.data(this,\"_jqs_errnotify\",!0)),void 0):(l=new(d.fn.sparkline[h.get(\"type\")])(this,e,h,f,g),l.render(),k&&k.registerSparkline(l),void 0)},d(this).html()&&!h.get(\"disableHiddenCheck\")&&d(this).is(\":hidden\")||!d(this).parents(\"body\").length){if(!h.get(\"composite\")&&d.data(this,\"_jqs_pending\"))for(g=J.length;g;g--)J[g-1][0]==this&&J.splice(g-1,1);J.push([this,f]),d.data(this,\"_jqs_pending\",!0)}else f.call(this)})},d.fn.sparkline.defaults=e(),d.sparkline_display_visible=function(){var a,b,c,e=[];for(b=0,c=J.length;c>b;b++)a=J[b][0],d(a).is(\":visible\")&&!d(a).parents().is(\":hidden\")?(J[b][1].call(a),d.data(J[b][0],\"_jqs_pending\",!1),e.push(b)):d(a).closest(\"html\").length||d.data(a,\"_jqs_pending\")||(d.data(J[b][0],\"_jqs_pending\",!1),e.push(b));for(b=e.length;b;b--)J.splice(e[b-1],1)},d.fn.sparkline.options=f({init:function(a,b){var c,e,f,g;this.userOptions=b=b||{},this.tag=a,this.tagValCache={},e=d.fn.sparkline.defaults,f=e.common,this.tagOptionsPrefix=b.enableTagOptions&&(b.tagOptionsPrefix||f.tagOptionsPrefix),g=this.getTagSetting(\"type\"),c=g===K?e[b.type||f.type]:e[g],this.mergedOptions=d.extend({},f,c,b)},getTagSetting:function(a){var b,d,e,f,g=this.tagOptionsPrefix;if(g===!1||g===c)return K;if(this.tagValCache.hasOwnProperty(a))b=this.tagValCache.key;else{if(b=this.tag.getAttribute(g+a),b===c||null===b)b=K;else if(\"[\"===b.substr(0,1))for(b=b.substr(1,b.length-2).split(\",\"),d=b.length;d--;)b[d]=j(b[d].replace(/(^\\s*)|(\\s*$)/g,\"\"));else if(\"{\"===b.substr(0,1))for(e=b.substr(1,b.length-2).split(\",\"),b={},d=e.length;d--;)f=e[d].split(\":\",2),b[f[0].replace(/(^\\s*)|(\\s*$)/g,\"\")]=j(f[1].replace(/(^\\s*)|(\\s*$)/g,\"\"));else b=j(b);this.tagValCache.key=b}return b},get:function(a,b){var d,e=this.getTagSetting(a);return e!==K?e:(d=this.mergedOptions[a])===c?b:d}}),d.fn.sparkline._base=f({disabled:!1,init:function(a,b,e,f,g){this.el=a,this.$el=d(a),this.values=b,this.options=e,this.width=f,this.height=g,this.currentRegion=c},initTarget:function(){var a=!this.options.get(\"disableInteraction\");(this.target=this.$el.simpledraw(this.width,this.height,this.options.get(\"composite\"),a))?(this.canvasWidth=this.target.pixelWidth,this.canvasHeight=this.target.pixelHeight):this.disabled=!0},render:function(){return this.disabled?(this.el.innerHTML=\"\",!1):!0},getRegion:function(){},setRegionHighlight:function(a,b,d){var e,f=this.currentRegion,g=!this.options.get(\"disableHighlight\");return b>this.canvasWidth||d>this.canvasHeight||0>b||0>d?null:(e=this.getRegion(a,b,d),f!==e?(f!==c&&g&&this.removeHighlight(),this.currentRegion=e,e!==c&&g&&this.renderHighlight(),!0):!1)},clearRegionHighlight:function(){return this.currentRegion!==c?(this.removeHighlight(),this.currentRegion=c,!0):!1},renderHighlight:function(){this.changeHighlight(!0)},removeHighlight:function(){this.changeHighlight(!1)},changeHighlight:function(){},getCurrentRegionTooltip:function(){var a,b,e,f,h,i,j,k,l,m,n,o,p,q,r=this.options,s=\"\",t=[];if(this.currentRegion===c)return\"\";if(a=this.getCurrentRegionFields(),n=r.get(\"tooltipFormatter\"))return n(this,r,a);if(r.get(\"tooltipChartTitle\")&&(s+='<div class=\"jqs jqstitle\">'+r.get(\"tooltipChartTitle\")+\"</div>\\n\"),b=this.options.get(\"tooltipFormat\"),!b)return\"\";if(d.isArray(b)||(b=[b]),d.isArray(a)||(a=[a]),j=this.options.get(\"tooltipFormatFieldlist\"),k=this.options.get(\"tooltipFormatFieldlistKey\"),j&&k){for(l=[],i=a.length;i--;)m=a[i][k],-1!=(q=d.inArray(m,j))&&(l[q]=a[i]);a=l}for(e=b.length,p=a.length,i=0;e>i;i++)for(o=b[i],\"string\"==typeof o&&(o=new g(o)),f=o.fclass||\"jqsfield\",q=0;p>q;q++)a[q].isNull&&r.get(\"tooltipSkipNull\")||(d.extend(a[q],{prefix:r.get(\"tooltipPrefix\"),suffix:r.get(\"tooltipSuffix\")}),h=o.render(a[q],r.get(\"tooltipValueLookups\"),r),t.push('<div class=\"'+f+'\">'+h+\"</div>\"));return t.length?s+t.join(\"\\n\"):\"\"},getCurrentRegionFields:function(){},calcHighlightColor:function(a,c){var d,e,f,g,i=c.get(\"highlightColor\"),j=c.get(\"highlightLighten\");if(i)return i;if(j&&(d=/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a)||/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(a))){for(f=[],e=4===a.length?16:1,g=0;3>g;g++)f[g]=h(b.round(parseInt(d[g+1],16)*e*j),0,255);return\"rgb(\"+f.join(\",\")+\")\"}return a}}),v={changeHighlight:function(a){var b,c=this.currentRegion,e=this.target,f=this.regionShapes[c];f&&(b=this.renderRegion(c,a),d.isArray(b)||d.isArray(f)?(e.replaceWithShapes(f,b),this.regionShapes[c]=d.map(b,function(a){return a.id})):(e.replaceWithShape(f,b),this.regionShapes[c]=b.id))},render:function(){var a,b,c,e,f=this.values,g=this.target,h=this.regionShapes;if(this.cls._super.render.call(this)){for(c=f.length;c--;)if(a=this.renderRegion(c))if(d.isArray(a)){for(b=[],e=a.length;e--;)a[e].append(),b.push(a[e].id);h[c]=b}else a.append(),h[c]=a.id;else h[c]=null;g.render()}}},d.fn.sparkline.line=w=f(d.fn.sparkline._base,{type:\"line\",init:function(a,b,c,d,e){w._super.init.call(this,a,b,c,d,e),this.vertices=[],this.regionMap=[],this.xvalues=[],this.yvalues=[],this.yminmax=[],this.hightlightSpotId=null,this.lastShapeId=null,this.initTarget()},getRegion:function(a,b){var d,e=this.regionMap;for(d=e.length;d--;)if(null!==e[d]&&b>=e[d][0]&&b<=e[d][1])return e[d][2];return c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:null===this.yvalues[a],x:this.xvalues[a],y:this.yvalues[a],color:this.options.get(\"lineColor\"),fillColor:this.options.get(\"fillColor\"),offset:a}},renderHighlight:function(){var a,b,d=this.currentRegion,e=this.target,f=this.vertices[d],g=this.options,h=g.get(\"spotRadius\"),i=g.get(\"highlightSpotColor\"),j=g.get(\"highlightLineColor\");f&&(h&&i&&(a=e.drawCircle(f[0],f[1],h,c,i),this.highlightSpotId=a.id,e.insertAfterShape(this.lastShapeId,a)),j&&(b=e.drawLine(f[0],this.canvasTop,f[0],this.canvasTop+this.canvasHeight,j),this.highlightLineId=b.id,e.insertAfterShape(this.lastShapeId,b)))},removeHighlight:function(){var a=this.target;this.highlightSpotId&&(a.removeShapeId(this.highlightSpotId),this.highlightSpotId=null),this.highlightLineId&&(a.removeShapeId(this.highlightLineId),this.highlightLineId=null)},scanValues:function(){var a,c,d,e,f,g=this.values,h=g.length,i=this.xvalues,j=this.yvalues,k=this.yminmax;for(a=0;h>a;a++)c=g[a],d=\"string\"==typeof g[a],e=\"object\"==typeof g[a]&&g[a]instanceof Array,f=d&&g[a].split(\":\"),d&&2===f.length?(i.push(Number(f[0])),j.push(Number(f[1])),k.push(Number(f[1]))):e?(i.push(c[0]),j.push(c[1]),k.push(c[1])):(i.push(a),null===g[a]||\"null\"===g[a]?j.push(null):(j.push(Number(c)),k.push(Number(c))));this.options.get(\"xvalues\")&&(i=this.options.get(\"xvalues\")),this.maxy=this.maxyorg=b.max.apply(b,k),this.miny=this.minyorg=b.min.apply(b,k),this.maxx=b.max.apply(b,i),this.minx=b.min.apply(b,i),this.xvalues=i,this.yvalues=j,this.yminmax=k},processRangeOptions:function(){var a=this.options,b=a.get(\"normalRangeMin\"),d=a.get(\"normalRangeMax\");b!==c&&(b<this.miny&&(this.miny=b),d>this.maxy&&(this.maxy=d)),a.get(\"chartRangeMin\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMin\")<this.miny)&&(this.miny=a.get(\"chartRangeMin\")),a.get(\"chartRangeMax\")!==c&&(a.get(\"chartRangeClip\")||a.get(\"chartRangeMax\")>this.maxy)&&(this.maxy=a.get(\"chartRangeMax\")),a.get(\"chartRangeMinX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMinX\")<this.minx)&&(this.minx=a.get(\"chartRangeMinX\")),a.get(\"chartRangeMaxX\")!==c&&(a.get(\"chartRangeClipX\")||a.get(\"chartRangeMaxX\")>this.maxx)&&(this.maxx=a.get(\"chartRangeMaxX\"))},drawNormalRange:function(a,d,e,f,g){var h=this.options.get(\"normalRangeMin\"),i=this.options.get(\"normalRangeMax\"),j=d+b.round(e-e*((i-this.miny)/g)),k=b.round(e*(i-h)/g);this.target.drawRect(a,j,f,k,c,this.options.get(\"normalRangeColor\")).append()},render:function(){var a,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,x,y,z,A,B,C,D,E=this.options,F=this.target,G=this.canvasWidth,H=this.canvasHeight,I=this.vertices,J=E.get(\"spotRadius\"),K=this.regionMap;if(w._super.render.call(this)&&(this.scanValues(),this.processRangeOptions(),B=this.xvalues,C=this.yvalues,this.yminmax.length&&!(this.yvalues.length<2))){for(g=h=0,a=this.maxx-this.minx===0?1:this.maxx-this.minx,e=this.maxy-this.miny===0?1:this.maxy-this.miny,f=this.yvalues.length-1,J&&(4*J>G||4*J>H)&&(J=0),J&&(z=E.get(\"highlightSpotColor\")&&!E.get(\"disableInteraction\"),(z||E.get(\"minSpotColor\")||E.get(\"spotColor\")&&C[f]===this.miny)&&(H-=b.ceil(J)),(z||E.get(\"maxSpotColor\")||E.get(\"spotColor\")&&C[f]===this.maxy)&&(H-=b.ceil(J),g+=b.ceil(J)),(z||(E.get(\"minSpotColor\")||E.get(\"maxSpotColor\"))&&(C[0]===this.miny||C[0]===this.maxy))&&(h+=b.ceil(J),G-=b.ceil(J)),(z||E.get(\"spotColor\")||E.get(\"minSpotColor\")||E.get(\"maxSpotColor\")&&(C[f]===this.miny||C[f]===this.maxy))&&(G-=b.ceil(J))),H--,E.get(\"normalRangeMin\")===c||E.get(\"drawNormalOnTop\")||this.drawNormalRange(h,g,H,G,e),j=[],k=[j],q=r=null,t=C.length,D=0;t>D;D++)l=B[D],n=B[D+1],m=C[D],o=h+b.round((l-this.minx)*(G/a)),p=t-1>D?h+b.round((n-this.minx)*(G/a)):G,r=o+(p-o)/2,K[D]=[q||0,r,D],q=r,null===m?D&&(null!==C[D-1]&&(j=[],k.push(j)),I.push(null)):(m<this.miny&&(m=this.miny),m>this.maxy&&(m=this.maxy),j.length||j.push([o,g+H]),i=[o,g+b.round(H-H*((m-this.miny)/e))],j.push(i),I.push(i));for(u=[],v=[],x=k.length,D=0;x>D;D++)j=k[D],j.length&&(E.get(\"fillColor\")&&(j.push([j[j.length-1][0],g+H]),v.push(j.slice(0)),j.pop()),j.length>2&&(j[0]=[j[0][0],j[1][1]]),u.push(j));for(x=v.length,D=0;x>D;D++)F.drawShape(v[D],E.get(\"fillColor\"),E.get(\"fillColor\")).append();for(E.get(\"normalRangeMin\")!==c&&E.get(\"drawNormalOnTop\")&&this.drawNormalRange(h,g,H,G,e),x=u.length,D=0;x>D;D++)F.drawShape(u[D],E.get(\"lineColor\"),c,E.get(\"lineWidth\")).append();if(J&&E.get(\"valueSpots\"))for(y=E.get(\"valueSpots\"),y.get===c&&(y=new s(y)),D=0;t>D;D++)A=y.get(C[D]),A&&F.drawCircle(h+b.round((B[D]-this.minx)*(G/a)),g+b.round(H-H*((C[D]-this.miny)/e)),J,c,A).append();J&&E.get(\"spotColor\")&&null!==C[f]&&F.drawCircle(h+b.round((B[B.length-1]-this.minx)*(G/a)),g+b.round(H-H*((C[f]-this.miny)/e)),J,c,E.get(\"spotColor\")).append(),this.maxy!==this.minyorg&&(J&&E.get(\"minSpotColor\")&&(l=B[d.inArray(this.minyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.minyorg-this.miny)/e)),J,c,E.get(\"minSpotColor\")).append()),J&&E.get(\"maxSpotColor\")&&(l=B[d.inArray(this.maxyorg,C)],F.drawCircle(h+b.round((l-this.minx)*(G/a)),g+b.round(H-H*((this.maxyorg-this.miny)/e)),J,c,E.get(\"maxSpotColor\")).append())),this.lastShapeId=F.getLastShapeId(),this.canvasTop=g,F.render()}}}),d.fn.sparkline.bar=x=f(d.fn.sparkline._base,v,{type:\"bar\",init:function(a,e,f,g,i){var m,n,o,p,q,r,t,u,v,w,y,z,A,B,C,D,E,F,G,H,I,J,K=parseInt(f.get(\"barWidth\"),10),L=parseInt(f.get(\"barSpacing\"),10),M=f.get(\"chartRangeMin\"),N=f.get(\"chartRangeMax\"),O=f.get(\"chartRangeClip\"),P=1/0,Q=-1/0;for(x._super.init.call(this,a,e,f,g,i),r=0,t=e.length;t>r;r++)H=e[r],m=\"string\"==typeof H&&H.indexOf(\":\")>-1,(m||d.isArray(H))&&(C=!0,m&&(H=e[r]=k(H.split(\":\"))),H=l(H,null),n=b.min.apply(b,H),o=b.max.apply(b,H),P>n&&(P=n),o>Q&&(Q=o));this.stacked=C,this.regionShapes={},this.barWidth=K,this.barSpacing=L,this.totalBarWidth=K+L,this.width=g=e.length*K+(e.length-1)*L,this.initTarget(),O&&(A=M===c?-1/0:M,B=N===c?1/0:N),q=[],p=C?[]:q;var R=[],S=[];for(r=0,t=e.length;t>r;r++)if(C)for(D=e[r],e[r]=G=[],R[r]=0,p[r]=S[r]=0,E=0,F=D.length;F>E;E++)H=G[E]=O?h(D[E],A,B):D[E],null!==H&&(H>0&&(R[r]+=H),0>P&&Q>0?0>H?S[r]+=b.abs(H):p[r]+=H:p[r]+=b.abs(H-(0>H?Q:P)),q.push(H));else H=O?h(e[r],A,B):e[r],H=e[r]=j(H),null!==H&&q.push(H);this.max=z=b.max.apply(b,q),this.min=y=b.min.apply(b,q),this.stackMax=Q=C?b.max.apply(b,R):z,this.stackMin=P=C?b.min.apply(b,q):y,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<y)&&(y=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>z)&&(z=f.get(\"chartRangeMax\")),this.zeroAxis=v=f.get(\"zeroAxis\",!0),w=0>=y&&z>=0&&v?0:0==v?y:y>0?y:z,this.xaxisOffset=w,u=C?b.max.apply(b,p)+b.max.apply(b,S):z-y,this.canvasHeightEf=v&&0>y?this.canvasHeight-2:this.canvasHeight-1,w>y?(J=C&&z>=0?Q:z,I=(J-w)/u*this.canvasHeight,I!==b.ceil(I)&&(this.canvasHeightEf-=2,I=b.ceil(I))):I=this.canvasHeight,this.yoffset=I,d.isArray(f.get(\"colorMap\"))?(this.colorMapByIndex=f.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=f.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.range=u},getRegion:function(a,d){var e=b.floor(d/this.totalBarWidth);return 0>e||e>=this.values.length?c:e},getCurrentRegionFields:function(){var a,b,c=this.currentRegion,d=q(this.values[c]),e=[];for(b=d.length;b--;)a=d[b],e.push({isNull:null===a,value:a,color:this.calcColor(b,a,c),offset:c});return e},calcColor:function(a,b,e){var f,g,h=this.colorMapByIndex,i=this.colorMapByValue,j=this.options;return f=this.stacked?j.get(\"stackedBarColor\"):0>b?j.get(\"negBarColor\"):j.get(\"barColor\"),0===b&&j.get(\"zeroColor\")!==c&&(f=j.get(\"zeroColor\")),i&&(g=i.get(b))?f=g:h&&h.length>e&&(f=h[e]),d.isArray(f)?f[a%f.length]:f},renderRegion:function(a,e){var f,g,h,i,j,k,l,m,o,p,q=this.values[a],r=this.options,s=this.xaxisOffset,t=[],u=this.range,v=this.stacked,w=this.target,x=a*this.totalBarWidth,y=this.canvasHeightEf,z=this.yoffset;if(q=d.isArray(q)?q:[q],l=q.length,m=q[0],i=n(null,q),p=n(s,q,!0),i)return r.get(\"nullColor\")?(h=e?r.get(\"nullColor\"):this.calcHighlightColor(r.get(\"nullColor\"),r),f=z>0?z-1:z,w.drawRect(x,f,this.barWidth-1,0,h,h)):c;for(j=z,k=0;l>k;k++){if(m=q[k],v&&m===s){if(!p||o)continue;o=!0}g=u>0?b.floor(y*(b.abs(m-s)/u))+1:1,s>m||m===s&&0===z?(f=j,j+=g):(f=z-g,z-=g),h=this.calcColor(k,m,a),e&&(h=this.calcHighlightColor(h,r)),t.push(w.drawRect(x,f,this.barWidth-1,g-1,h,h))}return 1===t.length?t[0]:t}}),d.fn.sparkline.tristate=y=f(d.fn.sparkline._base,v,{type:\"tristate\",init:function(a,b,e,f,g){var h=parseInt(e.get(\"barWidth\"),10),i=parseInt(e.get(\"barSpacing\"),10);y._super.init.call(this,a,b,e,f,g),this.regionShapes={},this.barWidth=h,this.barSpacing=i,this.totalBarWidth=h+i,this.values=d.map(b,Number),this.width=f=b.length*h+(b.length-1)*i,d.isArray(e.get(\"colorMap\"))?(this.colorMapByIndex=e.get(\"colorMap\"),this.colorMapByValue=null):(this.colorMapByIndex=null,this.colorMapByValue=e.get(\"colorMap\"),this.colorMapByValue&&this.colorMapByValue.get===c&&(this.colorMapByValue=new s(this.colorMapByValue))),this.initTarget()},getRegion:function(a,c){return b.floor(c/this.totalBarWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],color:this.calcColor(this.values[a],a),offset:a}},calcColor:function(a,b){var c,d,e=this.values,f=this.options,g=this.colorMapByIndex,h=this.colorMapByValue;return c=h&&(d=h.get(a))?d:g&&g.length>b?g[b]:e[b]<0?f.get(\"negBarColor\"):e[b]>0?f.get(\"posBarColor\"):f.get(\"zeroBarColor\")},renderRegion:function(a,c){var d,e,f,g,h,i,j=this.values,k=this.options,l=this.target;return d=l.pixelHeight,f=b.round(d/2),g=a*this.totalBarWidth,j[a]<0?(h=f,e=f-1):j[a]>0?(h=0,e=f-1):(h=f-1,e=2),i=this.calcColor(j[a],a),null!==i?(c&&(i=this.calcHighlightColor(i,k)),l.drawRect(g,h,this.barWidth-1,e-1,i,i)):void 0}}),d.fn.sparkline.discrete=z=f(d.fn.sparkline._base,v,{type:\"discrete\",init:function(a,e,f,g,h){z._super.init.call(this,a,e,f,g,h),this.regionShapes={},this.values=e=d.map(e,Number),this.min=b.min.apply(b,e),this.max=b.max.apply(b,e),this.range=this.max-this.min,this.width=g=\"auto\"===f.get(\"width\")?2*e.length:this.width,this.interval=b.floor(g/e.length),this.itemWidth=g/e.length,f.get(\"chartRangeMin\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMin\")<this.min)&&(this.min=f.get(\"chartRangeMin\")),f.get(\"chartRangeMax\")!==c&&(f.get(\"chartRangeClip\")||f.get(\"chartRangeMax\")>this.max)&&(this.max=f.get(\"chartRangeMax\")),this.initTarget(),this.target&&(this.lineHeight=\"auto\"===f.get(\"lineHeight\")?b.round(.3*this.canvasHeight):f.get(\"lineHeight\"))},getRegion:function(a,c){return b.floor(c/this.itemWidth)},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],offset:a}},renderRegion:function(a,c){var d,e,f,g,i=this.values,j=this.options,k=this.min,l=this.max,m=this.range,n=this.interval,o=this.target,p=this.canvasHeight,q=this.lineHeight,r=p-q;return e=h(i[a],k,l),g=a*n,d=b.round(r-r*((e-k)/m)),f=j.get(\"thresholdColor\")&&e<j.get(\"thresholdValue\")?j.get(\"thresholdColor\"):j.get(\"lineColor\"),c&&(f=this.calcHighlightColor(f,j)),o.drawLine(g,d,g,d+q,f)}}),d.fn.sparkline.bullet=A=f(d.fn.sparkline._base,{type:\"bullet\",init:function(a,d,e,f,g){var h,i,j;A._super.init.call(this,a,d,e,f,g),this.values=d=k(d),j=d.slice(),j[0]=null===j[0]?j[2]:j[0],j[1]=null===d[1]?j[2]:j[1],h=b.min.apply(b,d),i=b.max.apply(b,d),h=e.get(\"base\")===c?0>h?h:0:e.get(\"base\"),this.min=h,this.max=i,this.range=i-h,this.shapes={},this.valueShapes={},this.regiondata={},this.width=f=\"auto\"===e.get(\"width\")?\"4.0em\":f,this.target=this.$el.simpledraw(f,g,e.get(\"composite\")),d.length||(this.disabled=!0),this.initTarget()},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{fieldkey:a.substr(0,1),value:this.values[a.substr(1)],region:a}},changeHighlight:function(a){var b,c=this.currentRegion,d=this.valueShapes[c];switch(delete this.shapes[d],c.substr(0,1)){case\"r\":b=this.renderRange(c.substr(1),a);break;case\"p\":b=this.renderPerformance(a);break;case\"t\":b=this.renderTarget(a)}this.valueShapes[c]=b.id,this.shapes[b.id]=c,this.target.replaceWithShape(d,b)},renderRange:function(a,c){var d=this.values[a],e=b.round(this.canvasWidth*((d-this.min)/this.range)),f=this.options.get(\"rangeColors\")[a-2];return c&&(f=this.calcHighlightColor(f,this.options)),this.target.drawRect(0,0,e-1,this.canvasHeight-1,f,f)},renderPerformance:function(a){var c=this.values[1],d=b.round(this.canvasWidth*((c-this.min)/this.range)),e=this.options.get(\"performanceColor\");return a&&(e=this.calcHighlightColor(e,this.options)),this.target.drawRect(0,b.round(.3*this.canvasHeight),d-1,b.round(.4*this.canvasHeight)-1,e,e)},renderTarget:function(a){var c=this.values[0],d=b.round(this.canvasWidth*((c-this.min)/this.range)-this.options.get(\"targetWidth\")/2),e=b.round(.1*this.canvasHeight),f=this.canvasHeight-2*e,g=this.options.get(\"targetColor\");return a&&(g=this.calcHighlightColor(g,this.options)),this.target.drawRect(d,e,this.options.get(\"targetWidth\")-1,f-1,g,g)},render:function(){var a,b,c=this.values.length,d=this.target;if(A._super.render.call(this)){for(a=2;c>a;a++)b=this.renderRange(a).append(),this.shapes[b.id]=\"r\"+a,this.valueShapes[\"r\"+a]=b.id;null!==this.values[1]&&(b=this.renderPerformance().append(),this.shapes[b.id]=\"p1\",this.valueShapes.p1=b.id),null!==this.values[0]&&(b=this.renderTarget().append(),this.shapes[b.id]=\"t0\",this.valueShapes.t0=b.id),d.render()}}}),d.fn.sparkline.pie=B=f(d.fn.sparkline._base,{type:\"pie\",init:function(a,c,e,f,g){var h,i=0;if(B._super.init.call(this,a,c,e,f,g),this.shapes={},this.valueShapes={},this.values=c=d.map(c,Number),\"auto\"===e.get(\"width\")&&(this.width=this.height),c.length>0)for(h=c.length;h--;)i+=c[h];this.total=i,this.initTarget(),this.radius=b.floor(b.min(this.canvasWidth,this.canvasHeight)/2)},getRegion:function(a,b,d){var e=this.target.getShapeAt(a,b,d);return e!==c&&this.shapes[e]!==c?this.shapes[e]:c},getCurrentRegionFields:function(){var a=this.currentRegion;return{isNull:this.values[a]===c,value:this.values[a],percent:this.values[a]/this.total*100,color:this.options.get(\"sliceColors\")[a%this.options.get(\"sliceColors\").length],offset:a}},changeHighlight:function(a){var b=this.currentRegion,c=this.renderSlice(b,a),d=this.valueShapes[b];delete this.shapes[d],this.target.replaceWithShape(d,c),this.valueShapes[b]=c.id,this.shapes[c.id]=b},renderSlice:function(a,d){var e,f,g,h,i,j=this.target,k=this.options,l=this.radius,m=k.get(\"borderWidth\"),n=k.get(\"offset\"),o=2*b.PI,p=this.values,q=this.total,r=n?2*b.PI*(n/360):0;for(h=p.length,g=0;h>g;g++){if(e=r,f=r,q>0&&(f=r+o*(p[g]/q)),a===g)return i=k.get(\"sliceColors\")[g%k.get(\"sliceColors\").length],d&&(i=this.calcHighlightColor(i,k)),j.drawPieSlice(l,l,l-m,e,f,c,i);\nr=f}},render:function(){var a,d,e=this.target,f=this.values,g=this.options,h=this.radius,i=g.get(\"borderWidth\");if(B._super.render.call(this)){for(i&&e.drawCircle(h,h,b.floor(h-i/2),g.get(\"borderColor\"),c,i).append(),d=f.length;d--;)f[d]&&(a=this.renderSlice(d).append(),this.valueShapes[d]=a.id,this.shapes[a.id]=d);e.render()}}}),d.fn.sparkline.box=C=f(d.fn.sparkline._base,{type:\"box\",init:function(a,b,c,e,f){C._super.init.call(this,a,b,c,e,f),this.values=d.map(b,Number),this.width=\"auto\"===c.get(\"width\")?\"4.0em\":e,this.initTarget(),this.values.length||(this.disabled=1)},getRegion:function(){return 1},getCurrentRegionFields:function(){var a=[{field:\"lq\",value:this.quartiles[0]},{field:\"med\",value:this.quartiles[1]},{field:\"uq\",value:this.quartiles[2]}];return this.loutlier!==c&&a.push({field:\"lo\",value:this.loutlier}),this.routlier!==c&&a.push({field:\"ro\",value:this.routlier}),this.lwhisker!==c&&a.push({field:\"lw\",value:this.lwhisker}),this.rwhisker!==c&&a.push({field:\"rw\",value:this.rwhisker}),a},render:function(){var a,d,e,f,g,h,j,k,l,m,n,o=this.target,p=this.values,q=p.length,r=this.options,s=this.canvasWidth,t=this.canvasHeight,u=r.get(\"chartRangeMin\")===c?b.min.apply(b,p):r.get(\"chartRangeMin\"),v=r.get(\"chartRangeMax\")===c?b.max.apply(b,p):r.get(\"chartRangeMax\"),w=0;if(C._super.render.call(this)){if(r.get(\"raw\"))r.get(\"showOutliers\")&&p.length>5?(d=p[0],a=p[1],f=p[2],g=p[3],h=p[4],j=p[5],k=p[6]):(a=p[0],f=p[1],g=p[2],h=p[3],j=p[4]);else if(p.sort(function(a,b){return a-b}),f=i(p,1),g=i(p,2),h=i(p,3),e=h-f,r.get(\"showOutliers\")){for(a=j=c,l=0;q>l;l++)a===c&&p[l]>f-e*r.get(\"outlierIQR\")&&(a=p[l]),p[l]<h+e*r.get(\"outlierIQR\")&&(j=p[l]);d=p[0],k=p[q-1]}else a=p[0],j=p[q-1];this.quartiles=[f,g,h],this.lwhisker=a,this.rwhisker=j,this.loutlier=d,this.routlier=k,n=s/(v-u+1),r.get(\"showOutliers\")&&(w=b.ceil(r.get(\"spotRadius\")),s-=2*b.ceil(r.get(\"spotRadius\")),n=s/(v-u+1),a>d&&o.drawCircle((d-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append(),k>j&&o.drawCircle((k-u)*n+w,t/2,r.get(\"spotRadius\"),r.get(\"outlierLineColor\"),r.get(\"outlierFillColor\")).append()),o.drawRect(b.round((f-u)*n+w),b.round(.1*t),b.round((h-f)*n),b.round(.8*t),r.get(\"boxLineColor\"),r.get(\"boxFillColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/2),b.round((f-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((a-u)*n+w),b.round(t/4),b.round((a-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/2),b.round((h-u)*n+w),b.round(t/2),r.get(\"lineColor\")).append(),o.drawLine(b.round((j-u)*n+w),b.round(t/4),b.round((j-u)*n+w),b.round(t-t/4),r.get(\"whiskerColor\")).append(),o.drawLine(b.round((g-u)*n+w),b.round(.1*t),b.round((g-u)*n+w),b.round(.9*t),r.get(\"medianColor\")).append(),r.get(\"target\")&&(m=b.ceil(r.get(\"spotRadius\")),o.drawLine(b.round((r.get(\"target\")-u)*n+w),b.round(t/2-m),b.round((r.get(\"target\")-u)*n+w),b.round(t/2+m),r.get(\"targetColor\")).append(),o.drawLine(b.round((r.get(\"target\")-u)*n+w-m),b.round(t/2),b.round((r.get(\"target\")-u)*n+w+m),b.round(t/2),r.get(\"targetColor\")).append()),o.render()}}}),F=f({init:function(a,b,c,d){this.target=a,this.id=b,this.type=c,this.args=d},append:function(){return this.target.appendShape(this),this}}),G=f({_pxregex:/(\\d+)(px)?\\s*$/i,init:function(a,b,c){a&&(this.width=a,this.height=b,this.target=c,this.lastShapeId=null,c[0]&&(c=c[0]),d.data(c,\"_jqs_vcanvas\",this))},drawLine:function(a,b,c,d,e,f){return this.drawShape([[a,b],[c,d]],e,f)},drawShape:function(a,b,c,d){return this._genShape(\"Shape\",[a,b,c,d])},drawCircle:function(a,b,c,d,e,f){return this._genShape(\"Circle\",[a,b,c,d,e,f])},drawPieSlice:function(a,b,c,d,e,f,g){return this._genShape(\"PieSlice\",[a,b,c,d,e,f,g])},drawRect:function(a,b,c,d,e,f){return this._genShape(\"Rect\",[a,b,c,d,e,f])},getElement:function(){return this.canvas},getLastShapeId:function(){return this.lastShapeId},reset:function(){alert(\"reset not implemented\")},_insert:function(a,b){d(b).html(a)},_calculatePixelDims:function(a,b,c){var e;e=this._pxregex.exec(b),this.pixelHeight=e?e[1]:d(c).height(),e=this._pxregex.exec(a),this.pixelWidth=e?e[1]:d(c).width()},_genShape:function(a,b){var c=L++;return b.unshift(c),new F(this,c,a,b)},appendShape:function(){alert(\"appendShape not implemented\")},replaceWithShape:function(){alert(\"replaceWithShape not implemented\")},insertAfterShape:function(){alert(\"insertAfterShape not implemented\")},removeShapeId:function(){alert(\"removeShapeId not implemented\")},getShapeAt:function(){alert(\"getShapeAt not implemented\")},render:function(){alert(\"render not implemented\")}}),H=f(G,{init:function(b,e,f,g){H._super.init.call(this,b,e,f),this.canvas=a.createElement(\"canvas\"),f[0]&&(f=f[0]),d.data(f,\"_jqs_vcanvas\",this),d(this.canvas).css({display:\"inline-block\",width:b,height:e,verticalAlign:\"top\"}),this._insert(this.canvas,f),this._calculatePixelDims(b,e,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,this.interact=g,this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c,d(this.canvas).css({width:this.pixelWidth,height:this.pixelHeight})},_getContext:function(a,b,d){var e=this.canvas.getContext(\"2d\");return a!==c&&(e.strokeStyle=a),e.lineWidth=d===c?1:d,b!==c&&(e.fillStyle=b),e},reset:function(){var a=this._getContext();a.clearRect(0,0,this.pixelWidth,this.pixelHeight),this.shapes={},this.shapeseq=[],this.currentTargetShapeId=c},_drawShape:function(a,b,d,e,f){var g,h,i=this._getContext(d,e,f);for(i.beginPath(),i.moveTo(b[0][0]+.5,b[0][1]+.5),g=1,h=b.length;h>g;g++)i.lineTo(b[g][0]+.5,b[g][1]+.5);d!==c&&i.stroke(),e!==c&&i.fill(),this.targetX!==c&&this.targetY!==c&&i.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawCircle:function(a,d,e,f,g,h,i){var j=this._getContext(g,h,i);j.beginPath(),j.arc(d,e,f,0,2*b.PI,!1),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a),g!==c&&j.stroke(),h!==c&&j.fill()},_drawPieSlice:function(a,b,d,e,f,g,h,i){var j=this._getContext(h,i);j.beginPath(),j.moveTo(b,d),j.arc(b,d,e,f,g,!1),j.lineTo(b,d),j.closePath(),h!==c&&j.stroke(),i&&j.fill(),this.targetX!==c&&this.targetY!==c&&j.isPointInPath(this.targetX,this.targetY)&&(this.currentTargetShapeId=a)},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b+d,c],[b+d,c+e],[b,c+e],[b,c]],f,g)},appendShape:function(a){return this.shapes[a.id]=a,this.shapeseq.push(a.id),this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c,d=this.shapeseq;for(this.shapes[b.id]=b,c=d.length;c--;)d[c]==a&&(d[c]=b.id);delete this.shapes[a]},replaceWithShapes:function(a,b){var c,d,e,f=this.shapeseq,g={};for(d=a.length;d--;)g[a[d]]=!0;for(d=f.length;d--;)c=f[d],g[c]&&(f.splice(d,1),delete this.shapes[c],e=d);for(d=b.length;d--;)f.splice(e,0,b[d].id),this.shapes[b[d].id]=b[d]},insertAfterShape:function(a,b){var c,d=this.shapeseq;for(c=d.length;c--;)if(d[c]===a)return d.splice(c+1,0,b.id),this.shapes[b.id]=b,void 0},removeShapeId:function(a){var b,c=this.shapeseq;for(b=c.length;b--;)if(c[b]===a){c.splice(b,1);break}delete this.shapes[a]},getShapeAt:function(a,b,c){return this.targetX=b,this.targetY=c,this.render(),this.currentTargetShapeId},render:function(){var a,b,c,d=this.shapeseq,e=this.shapes,f=d.length,g=this._getContext();for(g.clearRect(0,0,this.pixelWidth,this.pixelHeight),c=0;f>c;c++)a=d[c],b=e[a],this[\"_draw\"+b.type].apply(this,b.args);this.interact||(this.shapes={},this.shapeseq=[])}}),I=f(G,{init:function(b,c,e){var f;I._super.init.call(this,b,c,e),e[0]&&(e=e[0]),d.data(e,\"_jqs_vcanvas\",this),this.canvas=a.createElement(\"span\"),d(this.canvas).css({display:\"inline-block\",position:\"relative\",overflow:\"hidden\",width:b,height:c,margin:\"0px\",padding:\"0px\",verticalAlign:\"top\"}),this._insert(this.canvas,e),this._calculatePixelDims(b,c,this.canvas),this.canvas.width=this.pixelWidth,this.canvas.height=this.pixelHeight,f='<v:group coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\" style=\"position:absolute;top:0;left:0;width:'+this.pixelWidth+\"px;height=\"+this.pixelHeight+'px;\"></v:group>',this.canvas.insertAdjacentHTML(\"beforeEnd\",f),this.group=d(this.canvas).children()[0],this.rendered=!1,this.prerender=\"\"},_drawShape:function(a,b,d,e,f){var g,h,i,j,k,l,m,n=[];for(m=0,l=b.length;l>m;m++)n[m]=\"\"+b[m][0]+\",\"+b[m][1];return g=n.splice(0,1),f=f===c?1:f,h=d===c?' stroked=\"false\" ':' strokeWeight=\"'+f+'px\" strokeColor=\"'+d+'\" ',i=e===c?' filled=\"false\"':' fillColor=\"'+e+'\" filled=\"true\" ',j=n[0]===n[n.length-1]?\"x \":\"\",k='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+h+i+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+g+\" l \"+n.join(\", \")+\" \"+j+'e\"> </v:shape>'},_drawCircle:function(a,b,d,e,f,g,h){var i,j,k;return b-=e,d-=e,i=f===c?' stroked=\"false\" ':' strokeWeight=\"'+h+'px\" strokeColor=\"'+f+'\" ',j=g===c?' filled=\"false\"':' fillColor=\"'+g+'\" filled=\"true\" ',k='<v:oval  id=\"jqsshape'+a+'\" '+i+j+' style=\"position:absolute;top:'+d+\"px; left:\"+b+\"px; width:\"+2*e+\"px; height:\"+2*e+'px\"></v:oval>'},_drawPieSlice:function(a,d,e,f,g,h,i,j){var k,l,m,n,o,p,q,r;if(g===h)return\"\";if(h-g===2*b.PI&&(g=0,h=2*b.PI),l=d+b.round(b.cos(g)*f),m=e+b.round(b.sin(g)*f),n=d+b.round(b.cos(h)*f),o=e+b.round(b.sin(h)*f),l===n&&m===o){if(h-g<b.PI)return\"\";l=n=d+f,m=o=e}return l===n&&m===o&&h-g<b.PI?\"\":(k=[d-f,e-f,d+f,e+f,l,m,n,o],p=i===c?' stroked=\"false\" ':' strokeWeight=\"1px\" strokeColor=\"'+i+'\" ',q=j===c?' filled=\"false\"':' fillColor=\"'+j+'\" filled=\"true\" ',r='<v:shape coordorigin=\"0 0\" coordsize=\"'+this.pixelWidth+\" \"+this.pixelHeight+'\"  id=\"jqsshape'+a+'\" '+p+q+' style=\"position:absolute;left:0px;top:0px;height:'+this.pixelHeight+\"px;width:\"+this.pixelWidth+'px;padding:0px;margin:0px;\"  path=\"m '+d+\",\"+e+\" wa \"+k.join(\", \")+' x e\"> </v:shape>')},_drawRect:function(a,b,c,d,e,f,g){return this._drawShape(a,[[b,c],[b,c+e],[b+d,c+e],[b+d,c],[b,c]],f,g)},reset:function(){this.group.innerHTML=\"\"},appendShape:function(a){var b=this[\"_draw\"+a.type].apply(this,a.args);return this.rendered?this.group.insertAdjacentHTML(\"beforeEnd\",b):this.prerender+=b,this.lastShapeId=a.id,a.id},replaceWithShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].outerHTML=e},replaceWithShapes:function(a,b){var c,e=d(\"#jqsshape\"+a[0]),f=\"\",g=b.length;for(c=0;g>c;c++)f+=this[\"_draw\"+b[c].type].apply(this,b[c].args);for(e[0].outerHTML=f,c=1;c<a.length;c++)d(\"#jqsshape\"+a[c]).remove()},insertAfterShape:function(a,b){var c=d(\"#jqsshape\"+a),e=this[\"_draw\"+b.type].apply(this,b.args);c[0].insertAdjacentHTML(\"afterEnd\",e)},removeShapeId:function(a){var b=d(\"#jqsshape\"+a);this.group.removeChild(b[0])},getShapeAt:function(a){var b=a.id.substr(8);return b},render:function(){this.rendered||(this.group.innerHTML=this.prerender,this.rendered=!0)}})})}(document,Math);"

/***/ }),

/***/ 1132:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12 col-sm-5 col-md-5 col-lg-8\" saSparklineContainer>\n  <ul id=\"sparks\" class=\"\">\n    <li class=\"sparks-info\">\n      <h5> My Income <span class=\"txt-color-blue\">$47,171</span></h5>\n      <div class=\"sparkline txt-color-blue hidden-mobile hidden-md hidden-sm\">\n        1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Site Traffic <span class=\"txt-color-purple\"><i class=\"fa fa-arrow-circle-up\"></i>&nbsp;45%</span></h5>\n      <div class=\"sparkline txt-color-purple hidden-mobile hidden-md hidden-sm\">\n        110,150,300,130,400,240,220,310,220,300, 270, 210\n      </div>\n    </li>\n    <li class=\"sparks-info\">\n      <h5> Site Orders <span class=\"txt-color-greenDark\"><i class=\"fa fa-shopping-cart\"></i>&nbsp;2447</span></h5>\n      <div class=\"sparkline txt-color-greenDark hidden-mobile hidden-md hidden-sm\">\n        110,150,300,130,400,240,220,310,220,300, 270, 210\n      </div>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 1133:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1123)(__webpack_require__(1130))

/***/ }),

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1123)(__webpack_require__(1131))

/***/ }),

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__ = __webpack_require__(1138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnOffSwitchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OnOffSwitchModule = (function () {
    function OnOffSwitchModule() {
    }
    return OnOffSwitchModule;
}());
OnOffSwitchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__["a" /* OnOffSwitchComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__on_off_switch_component__["a" /* OnOffSwitchComponent */]]
    })
], OnOffSwitchModule);

//# sourceMappingURL=on-off-switch.module.js.map

/***/ }),

/***/ 1136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select2_directive__ = __webpack_require__(1139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select2Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Select2Module = (function () {
    function Select2Module() {
    }
    return Select2Module;
}());
Select2Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__select2_directive__["a" /* Select2Directive */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__select2_directive__["a" /* Select2Directive */]],
    })
], Select2Module);

//# sourceMappingURL=select2.module.js.map

/***/ }),

/***/ 1137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__layout__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__i18n_i18n_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__voice_control_voice_control_module__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__widgets_smartadmin_widgets_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_utils_module__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chat_chat_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__stats_stats_module__ = __webpack_require__(1129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__graphs_inline_inline_graphs_module__ = __webpack_require__(1124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__forms_smartadmin_forms_lite_module__ = __webpack_require__(1140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ui_smart_progressbar_smart_progressbar_module__ = __webpack_require__(1155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var SmartadminModule = (function () {
    function SmartadminModule() {
    }
    return SmartadminModule;
}());
SmartadminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
        ],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* ModalModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["b" /* ButtonsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["c" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["d" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["e" /* TooltipModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["f" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["g" /* ProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_6_ngx_popover__["PopoverModule"],
            __WEBPACK_IMPORTED_MODULE_7__layout__["a" /* SmartadminLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_8__i18n_i18n_module__["a" /* I18nModule */],
            __WEBPACK_IMPORTED_MODULE_11__utils_utils_module__["a" /* UtilsModule */],
            __WEBPACK_IMPORTED_MODULE_15__forms_smartadmin_forms_lite_module__["a" /* SmartadminFormsLiteModule */],
            __WEBPACK_IMPORTED_MODULE_16__ui_smart_progressbar_smart_progressbar_module__["a" /* SmartProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_14__graphs_inline_inline_graphs_module__["a" /* InlineGraphsModule */],
            __WEBPACK_IMPORTED_MODULE_10__widgets_smartadmin_widgets_module__["a" /* SmartadminWidgetsModule */],
            __WEBPACK_IMPORTED_MODULE_12__chat_chat_module__["a" /* ChatModule */],
            __WEBPACK_IMPORTED_MODULE_13__stats_stats_module__["a" /* StatsModule */],
            __WEBPACK_IMPORTED_MODULE_9__voice_control_voice_control_module__["a" /* VoiceControlModule */],
        ]
    })
], SmartadminModule);

//# sourceMappingURL=smartadmin.module.js.map

/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnOffSwitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnOffSwitchComponent = OnOffSwitchComponent_1 = (function () {
    function OnOffSwitchComponent() {
        this.modelChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    OnOffSwitchComponent.prototype.ngOnInit = function () {
        this.value = this.model;
        this.widgetId = 'on-off-switch' + OnOffSwitchComponent_1.widgetsCounter++;
    };
    OnOffSwitchComponent.prototype.onChange = function () {
        this.modelChange.emit(this.value);
    };
    return OnOffSwitchComponent;
}());
OnOffSwitchComponent.widgetsCounter = 0;
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], OnOffSwitchComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], OnOffSwitchComponent.prototype, "model", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "modelChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], OnOffSwitchComponent.prototype, "value", void 0);
OnOffSwitchComponent = OnOffSwitchComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'on-off-switch',
        template: __webpack_require__(1157),
    }),
    __metadata("design:paramtypes", [])
], OnOffSwitchComponent);

var OnOffSwitchComponent_1;
//# sourceMappingURL=on-off-switch.component.js.map

/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__ = __webpack_require__(1156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Select2Directive; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Select2Directive = (function () {
    function Select2Directive(el) {
        this.el = el;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__["a" /* addClassName */])(this.el.nativeElement, ['sa-cloak', 'sa-hidden']);
    }
    Select2Directive.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(71).then(__webpack_require__.bind(null, 1159)).then(function () {
            $(_this.el.nativeElement).select2();
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_dom_helpers__["b" /* removeClassName */])(_this.el.nativeElement, ['sa-hidden']);
        });
    };
    return Select2Directive;
}());
Select2Directive = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[select2]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], Select2Directive);

var _a;
//# sourceMappingURL=select2.directive.js.map

/***/ }),

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__input_select2_select2_module__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__input_on_off_switch_on_off_switch_module__ = __webpack_require__(1135);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminFormsLiteModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SmartadminFormsLiteModule = (function () {
    function SmartadminFormsLiteModule() {
    }
    return SmartadminFormsLiteModule;
}());
SmartadminFormsLiteModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]],
        declarations: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__input_select2_select2_module__["a" /* Select2Module */], __WEBPACK_IMPORTED_MODULE_4__input_on_off_switch_on_off_switch_module__["a" /* OnOffSwitchModule */]
        ]
    })
], SmartadminFormsLiteModule);

//# sourceMappingURL=smartadmin-forms-lite.module.js.map

/***/ }),

/***/ 1141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__footer_component__ = __webpack_require__(458);
/* unused harmony reexport FooterComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_message_component__ = __webpack_require__(459);
/* unused harmony reexport ActivitiesMessageComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_notification_component__ = __webpack_require__(460);
/* unused harmony reexport ActivitiesNotificationComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_task_component__ = __webpack_require__(461);
/* unused harmony reexport ActivitiesTaskComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activities_component__ = __webpack_require__(462);
/* unused harmony reexport ActivitiesComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__activities_message__ = __webpack_require__(1142);
/* unused harmony reexport ActivitiesMessageComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activities_task__ = __webpack_require__(1144);
/* unused harmony reexport ActivitiesTaskComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__activities_notification__ = __webpack_require__(1143);
/* unused harmony reexport ActivitiesNotificationComponent */




//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collapse_menu_component__ = __webpack_require__(463);
/* unused harmony reexport CollapseMenuComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__full_screen_component__ = __webpack_require__(464);
/* unused harmony reexport FullScreenComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header_component__ = __webpack_require__(465);
/* unused harmony reexport HeaderComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_module__ = __webpack_require__(466);
/* unused harmony reexport HeaderModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_screen__ = __webpack_require__(1147);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collapse_menu__ = __webpack_require__(1146);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recent_projects__ = __webpack_require__(1149);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__activities__ = __webpack_require__(1145);
/* unused harmony namespace reexport */






//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__recent_projects_component__ = __webpack_require__(467);
/* unused harmony reexport RecentProjectsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recent_projects_service__ = __webpack_require__(468);
/* unused harmony reexport RecentProjectsService */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_switcher_component__ = __webpack_require__(469);
/* unused harmony reexport LayoutSwitcherComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__(36);
/* unused harmony reexport LayoutService */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_module__ = __webpack_require__(455);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__layout_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer__ = __webpack_require__(1141);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header__ = __webpack_require__(1148);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation__ = __webpack_require__(1151);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ribbon__ = __webpack_require__(1152);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shortcut__ = __webpack_require__(1153);
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__navigation_component__ = __webpack_require__(472);
/* unused harmony reexport NavigationComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__big_breadcrumbs_component__ = __webpack_require__(470);
/* unused harmony reexport BigBreadcrumbsComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__minify_menu_component__ = __webpack_require__(471);
/* unused harmony reexport MinifyMenuComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__smart_menu_directive__ = __webpack_require__(474);
/* unused harmony reexport SmartMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_module__ = __webpack_require__(473);
/* unused harmony reexport NavigationModule */





//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ribbon_component__ = __webpack_require__(475);
/* unused harmony reexport RibbonComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shortcut_component__ = __webpack_require__(476);
/* unused harmony reexport ShortcutComponent */

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressbarDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressbarDirective = (function () {
    function ProgressbarDirective(el) {
        this.el = el;
    }
    ProgressbarDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(90).then(__webpack_require__.bind(null, 1158)).then(function () {
            $(_this.el.nativeElement).progressbar(_this.saProgressbar || {
                display_text: 'fill'
            });
        });
    };
    return ProgressbarDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProgressbarDirective.prototype, "saProgressbar", void 0);
ProgressbarDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saProgressbar]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ProgressbarDirective);

var _a;
//# sourceMappingURL=progressbar.directive.js.map

/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressbar_directive__ = __webpack_require__(1154);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartProgressbarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SmartProgressbarModule = (function () {
    function SmartProgressbarModule() {
    }
    return SmartProgressbarModule;
}());
SmartProgressbarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__progressbar_directive__["a" /* ProgressbarDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__progressbar_directive__["a" /* ProgressbarDirective */]],
    })
], SmartProgressbarModule);

//# sourceMappingURL=smart-progressbar.module.js.map

/***/ }),

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClassName;
/* harmony export (immutable) */ __webpack_exports__["b"] = removeClassName;
/**
 * by griga
 */
/**
 * by griga
 */ function addClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else {
            el.className += ' ' + className;
        }
    });
    return el;
}
function removeClassName(el, classNames) {
    if (!Array.isArray(classNames)) {
        classNames = [classNames];
    }
    classNames.forEach(function (className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    });
    return el;
}
//# sourceMappingURL=dom-helpers.js.map

/***/ }),

/***/ 1157:
/***/ (function(module, exports) {

module.exports = "<div class=\"onoffswitch-container\">\n  <span class=\"onoffswitch-title\">{{title}}<ng-content></ng-content></span>\n  <span class=\"onoffswitch\">\n    <input type=\"checkbox\" class=\"onoffswitch-checkbox\" [(ngModel)]=\"value\" [checked]=\"value\"\n           (ngModelChange)=\"onChange()\"\n           id=\"{{widgetId}}\"/>\n    <label class=\"onoffswitch-label\" htmlFor=\"{{widgetId}}\">\n      <span class=\"onoffswitch-inner\"  data-swchon-text=\"ON\"\n            data-swchoff-text=\"OFF\"></span>\n        <span class=\"onoffswitch-switch\"></span>\n    </label>\n  </span>\n</div>\n"

/***/ }),

/***/ 1243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__ = __webpack_require__(1125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WizardsComponent = (function () {
    function WizardsComponent() {
    }
    WizardsComponent.prototype.ngOnInit = function () {
    };
    return WizardsComponent;
}());
WizardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-wizards',
        template: __webpack_require__(1596),
    }),
    __metadata("design:paramtypes", [])
], WizardsComponent);

//# sourceMappingURL=wizards.component.js.map

/***/ }),

/***/ 1371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicWizardWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicWizardWidgetComponent = (function () {
    function BasicWizardWidgetComponent() {
        this.model = {
            email: '',
            firstname: '',
            lastname: '',
            country: '',
            city: '',
            postal: '',
            wphone: '',
            hphone: ''
        };
        this.steps = [
            {
                key: 'step1',
                title: 'Basic information',
                valid: false,
                checked: false,
                submitted: false,
            },
            {
                key: 'step2',
                title: 'Billing information',
                valid: false,
                checked: false,
                submitted: false,
            },
            {
                key: 'step3',
                title: 'Domain Setup',
                valid: true,
                checked: false,
                submitted: false,
            },
            {
                key: 'step4',
                title: 'Save Form',
                valid: true,
                checked: false,
                submitted: false,
            },
        ];
        this.activeStep = this.steps[0];
    }
    BasicWizardWidgetComponent.prototype.ngOnInit = function () {
    };
    BasicWizardWidgetComponent.prototype.setActiveStep = function (steo) {
        this.activeStep = steo;
    };
    BasicWizardWidgetComponent.prototype.prevStep = function () {
        var idx = this.steps.indexOf(this.activeStep);
        if (idx > 0) {
            this.activeStep = this.steps[idx - 1];
        }
    };
    BasicWizardWidgetComponent.prototype.nextStep = function () {
        this.activeStep.submitted = true;
        if (!this.activeStep.valid) {
            return;
        }
        this.activeStep.checked = true;
        if (this.steps.every(function (it) { return (it.valid && it.checked); })) {
            this.onWizardComplete(this.model);
        }
        else {
            var idx = this.steps.indexOf(this.activeStep);
            this.activeStep = null;
            while (!this.activeStep) {
                idx = idx == this.steps.length - 1 ? 0 : idx + 1;
                if (!this.steps[idx].valid || !this.steps[idx].checked) {
                    this.activeStep = this.steps[idx];
                }
            }
        }
    };
    BasicWizardWidgetComponent.prototype.onWizardComplete = function (data) {
        console.log('basic wizard complete', data);
    };
    // custom change detection
    BasicWizardWidgetComponent.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.lastModel) {
            // backup model to compare further with
            this.lastModel = Object.assign({}, this.model);
        }
        else {
            if (Object.keys(this.model).some(function (it) { return _this.model[it] != _this.lastModel[it]; })) {
                // change detected
                this.steps.find(function (it) { return it.key == 'step1'; }).valid = !!(this.model.email && this.model.firstname && this.model.lastname);
                this.steps.find(function (it) { return it.key == 'step2'; }).valid = !!(this.model.country && this.model.city && this.model.postal);
                this.lastModel = Object.assign({}, this.model);
            }
        }
    };
    return BasicWizardWidgetComponent;
}());
BasicWizardWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'basic-wizard-widget',
        template: __webpack_require__(1594),
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('changePane', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: 0,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    height: '*',
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('out => in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('in => out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('250ms 300ms ease-in '))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], BasicWizardWidgetComponent);

//# sourceMappingURL=basic-wizard-widget.component.js.map

/***/ }),

/***/ 1372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelUxWizardWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuelUxWizardWidgetComponent = (function () {
    function FuelUxWizardWidgetComponent() {
    }
    FuelUxWizardWidgetComponent.prototype.ngOnInit = function () {
    };
    FuelUxWizardWidgetComponent.prototype.onWizardComplete = function (data) {
        console.log('fuel-ux wizard complete', data);
    };
    return FuelUxWizardWidgetComponent;
}());
FuelUxWizardWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fuel-ux-wizard-widget',
        template: __webpack_require__(1595),
    }),
    __metadata("design:paramtypes", [])
], FuelUxWizardWidgetComponent);

//# sourceMappingURL=fuel-ux-wizard-widget.component.js.map

/***/ }),

/***/ 1373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wizards_component__ = __webpack_require__(1243);
/* unused harmony export wizardsRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wizardsRouting; });


var wizardsRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__wizards_component__["a" /* WizardsComponent */]
    }];
var wizardsRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(wizardsRoutes);
//# sourceMappingURL=wizards.routing.js.map

/***/ }),

/***/ 1421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelUxWizardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FuelUxWizardComponent = (function () {
    function FuelUxWizardComponent(el) {
        this.el = el;
        this.complete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FuelUxWizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(76).then(__webpack_require__.bind(null, 1638)).then(function () {
            _this.render();
        });
    };
    FuelUxWizardComponent.prototype.render = function () {
        var _this = this;
        var element = $(this.el.nativeElement);
        var wizard = element.wizard();
        var $form = element.find('form');
        wizard.on('actionclicked.fu.wizard', function (e, data) {
            if ($form.data('validator')) {
                if (!$form.valid()) {
                    $form.data('validator').focusInvalid();
                    e.preventDefault();
                }
            }
        });
        wizard.on('finished.fu.wizard', function (e, data) {
            var formData = {};
            $form.serializeArray().forEach(function (field) {
                formData[field.name] = field.value;
            });
            _this.complete.emit(formData);
        });
    };
    return FuelUxWizardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FuelUxWizardComponent.prototype, "complete", void 0);
FuelUxWizardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'fuel-ux-wizard',
        template: "\n    <div>\n      <ng-content></ng-content>\n    </div>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FuelUxWizardComponent);

var _a;
//# sourceMappingURL=fuel-ux-wizard.component.js.map

/***/ }),

/***/ 1422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fuel_ux_wizard_component__ = __webpack_require__(1421);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SmartadminWizardsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SmartadminWizardsModule = (function () {
    function SmartadminWizardsModule() {
    }
    return SmartadminWizardsModule;
}());
SmartadminWizardsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__fuel_ux_wizard_component__["a" /* FuelUxWizardComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__fuel_ux_wizard_component__["a" /* FuelUxWizardComponent */]]
    })
], SmartadminWizardsModule);

//# sourceMappingURL=smartadmin-wizards.module.js.map

/***/ }),

/***/ 1594:
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" [deletebutton]=\"false\" color=\"darken\">\n  <!-- widget options:\n  usage: <sa-widget [editbutton]=\"false\">\n\n  [colorbutton]=\"false\"\n  [editbutton]=\"false\"\n  [togglebutton]=\"false\"\n  [deletebutton]=\"false\"\n  [fullscreenbutton]=\"false\"\n  [custombutton]=\"false\"\n  [collapsed]=\"true\"\n  [sortable]=\"false\"\n\n  -->\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-check\"></i> </span>\n\n    <h2>Very Basic Wizard Example </h2>\n\n  </header>\n\n  <!-- widget div-->\n  <div>\n\n    <!-- widget content -->\n    <div class=\"widget-body\">\n\n      <div class=\"row\">\n        <form novalidate=\"novalidate\">\n          <div class=\"col-sm-12\">\n            <div class=\"form-bootstrapWizard clearfix\">\n              <ul class=\"bootstrapWizard\">\n                <li *ngFor=\"let pane of steps; let i = index\" [class.active]=\"activeStep == pane\">\n                  <a (click)=\"setActiveStep(pane)\"> <span class=\"step\">\n                    <span *ngIf=\"!pane.checked\">{{i + 1}}</span>\n                    <i class=\"fa fa-check\" *ngIf=\"pane.checked\"></i>\n                  </span> <span class=\"title\">{{pane.title}}</span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"tab-content\">\n              <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step1'\">\n                <br>\n\n                <h3><strong>Step 1 </strong> - Basic Information</h3>\n\n                <div class=\"row\">\n\n                  <div class=\"col-sm-12\">\n                    <div class=\"form-group\" [ngClass]=\"{\n                      'has-success':email.valid && activeStep.submitted,\n                      'has-error':!email.valid && activeStep.submitted\n                      }\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" placeholder=\"email@address.com\" type=\"email\"\n                               name=\"email\" #email=\"ngModel\"\n                               required [(ngModel)]=\"model.email\">\n                      </div>\n                      <span [class.hidden]=\"email.valid || !activeStep.submitted\" class=\"help-block\">\n                          We need your email address to contact you\n                        </span>\n                    </div>\n\n                  </div>\n\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{\n                      'has-success':firstname.valid && activeStep.submitted,\n                      'has-error':!firstname.valid && activeStep.submitted\n                      }\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" placeholder=\"First Name\" type=\"text\"\n                               name=\"firstname\" #firstname=\"ngModel\"\n                               required [(ngModel)]=\"model.firstname\" >\n                      </div>\n                      <span [class.hidden]=\"firstname.valid || !activeStep.submitted\" class=\"help-block\">\n                          Please specify your First name\n                        </span>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\" [ngClass]=\"{\n                      'has-success':lastname.valid && activeStep.submitted,\n                      'has-error':!lastname.valid && activeStep.submitted\n                      }\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-user fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" placeholder=\"Last Name\" type=\"text\"\n                               name=\"lastname\" #lastname=\"ngModel\"\n                               required [(ngModel)]=\"model.lastname\">\n                      </div>\n                      <span [class.hidden]=\"lastname.valid || !activeStep.submitted\" class=\"help-block\">\n                          Please specify your Last name\n                        </span>\n                    </div>\n                  </div>\n                </div>\n\n              </div>\n              <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step2'\">\n                <br>\n\n                <h3><strong>Step 2</strong> - Billing Information</h3>\n\n                <div class=\"row\">\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':country.valid && activeStep.submitted,\n                      'has-error':!country.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-flag fa-lg fa-fw\"></i></span>\n                        <select name=\"country\" required [(ngModel)]=\"model.country\" #country=\"ngModel\"\n                                class=\"form-control input-lg\">\n                          <option value=\"\" selected=\"selected\">Select Country</option>\n                          <option value=\"United States\">United States</option>\n                          <option value=\"United Kingdom\">United Kingdom</option>\n                          <option value=\"Afghanistan\">Afghanistan</option>\n                          <option value=\"Albania\">Albania</option>\n                          <option value=\"Algeria\">Algeria</option>\n                          <option value=\"American Samoa\">American Samoa</option>\n                          <option value=\"Andorra\">Andorra</option>\n                          <option value=\"Angola\">Angola</option>\n                          <option value=\"Anguilla\">Anguilla</option>\n                          <option value=\"Antarctica\">Antarctica</option>\n                          <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n                          <option value=\"Argentina\">Argentina</option>\n                          <option value=\"Armenia\">Armenia</option>\n                          <option value=\"Aruba\">Aruba</option>\n                          <option value=\"Australia\">Australia</option>\n                          <option value=\"Austria\">Austria</option>\n                          <option value=\"Azerbaijan\">Azerbaijan</option>\n                          <option value=\"Bahamas\">Bahamas</option>\n                          <option value=\"Bahrain\">Bahrain</option>\n                          <option value=\"Bangladesh\">Bangladesh</option>\n                          <option value=\"Barbados\">Barbados</option>\n                          <option value=\"Belarus\">Belarus</option>\n                          <option value=\"Belgium\">Belgium</option>\n                          <option value=\"Belize\">Belize</option>\n                          <option value=\"Benin\">Benin</option>\n                          <option value=\"Bermuda\">Bermuda</option>\n                          <option value=\"Bhutan\">Bhutan</option>\n                          <option value=\"Bolivia\">Bolivia</option>\n                          <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n                          <option value=\"Botswana\">Botswana</option>\n                          <option value=\"Bouvet Island\">Bouvet Island</option>\n                          <option value=\"Brazil\">Brazil</option>\n                          <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n                          <option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n                          <option value=\"Bulgaria\">Bulgaria</option>\n                          <option value=\"Burkina Faso\">Burkina Faso</option>\n                          <option value=\"Burundi\">Burundi</option>\n                          <option value=\"Cambodia\">Cambodia</option>\n                          <option value=\"Cameroon\">Cameroon</option>\n                          <option value=\"Canada\">Canada</option>\n                          <option value=\"Cape Verde\">Cape Verde</option>\n                          <option value=\"Cayman Islands\">Cayman Islands</option>\n                          <option value=\"Central African Republic\">Central African Republic</option>\n                          <option value=\"Chad\">Chad</option>\n                          <option value=\"Chile\">Chile</option>\n                          <option value=\"China\">China</option>\n                          <option value=\"Christmas Island\">Christmas Island</option>\n                          <option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n                          <option value=\"Colombia\">Colombia</option>\n                          <option value=\"Comoros\">Comoros</option>\n                          <option value=\"Congo\">Congo</option>\n                          <option value=\"Congo, The Democratic Republic of The\">Congo, The Democratic Republic of\n                            The\n                          </option>\n                          <option value=\"Cook Islands\">Cook Islands</option>\n                          <option value=\"Costa Rica\">Costa Rica</option>\n                          <option value=\"Cote D'ivoire\">Cote D'ivoire</option>\n                          <option value=\"Croatia\">Croatia</option>\n                          <option value=\"Cuba\">Cuba</option>\n                          <option value=\"Cyprus\">Cyprus</option>\n                          <option value=\"Czech Republic\">Czech Republic</option>\n                          <option value=\"Denmark\">Denmark</option>\n                          <option value=\"Djibouti\">Djibouti</option>\n                          <option value=\"Dominica\">Dominica</option>\n                          <option value=\"Dominican Republic\">Dominican Republic</option>\n                          <option value=\"Ecuador\">Ecuador</option>\n                          <option value=\"Egypt\">Egypt</option>\n                          <option value=\"El Salvador\">El Salvador</option>\n                          <option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n                          <option value=\"Eritrea\">Eritrea</option>\n                          <option value=\"Estonia\">Estonia</option>\n                          <option value=\"Ethiopia\">Ethiopia</option>\n                          <option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n                          <option value=\"Faroe Islands\">Faroe Islands</option>\n                          <option value=\"Fiji\">Fiji</option>\n                          <option value=\"Finland\">Finland</option>\n                          <option value=\"France\">France</option>\n                          <option value=\"French Guiana\">French Guiana</option>\n                          <option value=\"French Polynesia\">French Polynesia</option>\n                          <option value=\"French Southern Territories\">French Southern Territories</option>\n                          <option value=\"Gabon\">Gabon</option>\n                          <option value=\"Gambia\">Gambia</option>\n                          <option value=\"Georgia\">Georgia</option>\n                          <option value=\"Germany\">Germany</option>\n                          <option value=\"Ghana\">Ghana</option>\n                          <option value=\"Gibraltar\">Gibraltar</option>\n                          <option value=\"Greece\">Greece</option>\n                          <option value=\"Greenland\">Greenland</option>\n                          <option value=\"Grenada\">Grenada</option>\n                          <option value=\"Guadeloupe\">Guadeloupe</option>\n                          <option value=\"Guam\">Guam</option>\n                          <option value=\"Guatemala\">Guatemala</option>\n                          <option value=\"Guinea\">Guinea</option>\n                          <option value=\"Guinea-bissau\">Guinea-bissau</option>\n                          <option value=\"Guyana\">Guyana</option>\n                          <option value=\"Haiti\">Haiti</option>\n                          <option value=\"Heard Island and Mcdonald Islands\">Heard Island and Mcdonald Islands</option>\n                          <option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n                          <option value=\"Honduras\">Honduras</option>\n                          <option value=\"Hong Kong\">Hong Kong</option>\n                          <option value=\"Hungary\">Hungary</option>\n                          <option value=\"Iceland\">Iceland</option>\n                          <option value=\"India\">India</option>\n                          <option value=\"Indonesia\">Indonesia</option>\n                          <option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n                          <option value=\"Iraq\">Iraq</option>\n                          <option value=\"Ireland\">Ireland</option>\n                          <option value=\"Israel\">Israel</option>\n                          <option value=\"Italy\">Italy</option>\n                          <option value=\"Jamaica\">Jamaica</option>\n                          <option value=\"Japan\">Japan</option>\n                          <option value=\"Jordan\">Jordan</option>\n                          <option value=\"Kazakhstan\">Kazakhstan</option>\n                          <option value=\"Kenya\">Kenya</option>\n                          <option value=\"Kiribati\">Kiribati</option>\n                          <option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic\n                            of\n                          </option>\n                          <option value=\"Korea, Republic of\">Korea, Republic of</option>\n                          <option value=\"Kuwait\">Kuwait</option>\n                          <option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n                          <option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n                          <option value=\"Latvia\">Latvia</option>\n                          <option value=\"Lebanon\">Lebanon</option>\n                          <option value=\"Lesotho\">Lesotho</option>\n                          <option value=\"Liberia\">Liberia</option>\n                          <option value=\"Libyan Arab Jamahiriya\">Libyan Arab Jamahiriya</option>\n                          <option value=\"Liechtenstein\">Liechtenstein</option>\n                          <option value=\"Lithuania\">Lithuania</option>\n                          <option value=\"Luxembourg\">Luxembourg</option>\n                          <option value=\"Macao\">Macao</option>\n                          <option value=\"Macedonia, The Former Yugoslav Republic of\">Macedonia, The Former Yugoslav\n                            Republic of\n                          </option>\n                          <option value=\"Madagascar\">Madagascar</option>\n                          <option value=\"Malawi\">Malawi</option>\n                          <option value=\"Malaysia\">Malaysia</option>\n                          <option value=\"Maldives\">Maldives</option>\n                          <option value=\"Mali\">Mali</option>\n                          <option value=\"Malta\">Malta</option>\n                          <option value=\"Marshall Islands\">Marshall Islands</option>\n                          <option value=\"Martinique\">Martinique</option>\n                          <option value=\"Mauritania\">Mauritania</option>\n                          <option value=\"Mauritius\">Mauritius</option>\n                          <option value=\"Mayotte\">Mayotte</option>\n                          <option value=\"Mexico\">Mexico</option>\n                          <option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n                          <option value=\"Moldova, Republic of\">Moldova, Republic of</option>\n                          <option value=\"Monaco\">Monaco</option>\n                          <option value=\"Mongolia\">Mongolia</option>\n                          <option value=\"Montserrat\">Montserrat</option>\n                          <option value=\"Morocco\">Morocco</option>\n                          <option value=\"Mozambique\">Mozambique</option>\n                          <option value=\"Myanmar\">Myanmar</option>\n                          <option value=\"Namibia\">Namibia</option>\n                          <option value=\"Nauru\">Nauru</option>\n                          <option value=\"Nepal\">Nepal</option>\n                          <option value=\"Netherlands\">Netherlands</option>\n                          <option value=\"Netherlands Antilles\">Netherlands Antilles</option>\n                          <option value=\"New Caledonia\">New Caledonia</option>\n                          <option value=\"New Zealand\">New Zealand</option>\n                          <option value=\"Nicaragua\">Nicaragua</option>\n                          <option value=\"Niger\">Niger</option>\n                          <option value=\"Nigeria\">Nigeria</option>\n                          <option value=\"Niue\">Niue</option>\n                          <option value=\"Norfolk Island\">Norfolk Island</option>\n                          <option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n                          <option value=\"Norway\">Norway</option>\n                          <option value=\"Oman\">Oman</option>\n                          <option value=\"Pakistan\">Pakistan</option>\n                          <option value=\"Palau\">Palau</option>\n                          <option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\n                          <option value=\"Panama\">Panama</option>\n                          <option value=\"Papua New Guinea\">Papua New Guinea</option>\n                          <option value=\"Paraguay\">Paraguay</option>\n                          <option value=\"Peru\">Peru</option>\n                          <option value=\"Philippines\">Philippines</option>\n                          <option value=\"Pitcairn\">Pitcairn</option>\n                          <option value=\"Poland\">Poland</option>\n                          <option value=\"Portugal\">Portugal</option>\n                          <option value=\"Puerto Rico\">Puerto Rico</option>\n                          <option value=\"Qatar\">Qatar</option>\n                          <option value=\"Reunion\">Reunion</option>\n                          <option value=\"Romania\">Romania</option>\n                          <option value=\"Russian Federation\">Russian Federation</option>\n                          <option value=\"Rwanda\">Rwanda</option>\n                          <option value=\"Saint Helena\">Saint Helena</option>\n                          <option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n                          <option value=\"Saint Lucia\">Saint Lucia</option>\n                          <option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n                          <option value=\"Saint Vincent and The Grenadines\">Saint Vincent and The Grenadines</option>\n                          <option value=\"Samoa\">Samoa</option>\n                          <option value=\"San Marino\">San Marino</option>\n                          <option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n                          <option value=\"Saudi Arabia\">Saudi Arabia</option>\n                          <option value=\"Senegal\">Senegal</option>\n                          <option value=\"Serbia and Montenegro\">Serbia and Montenegro</option>\n                          <option value=\"Seychelles\">Seychelles</option>\n                          <option value=\"Sierra Leone\">Sierra Leone</option>\n                          <option value=\"Singapore\">Singapore</option>\n                          <option value=\"Slovakia\">Slovakia</option>\n                          <option value=\"Slovenia\">Slovenia</option>\n                          <option value=\"Solomon Islands\">Solomon Islands</option>\n                          <option value=\"Somalia\">Somalia</option>\n                          <option value=\"South Africa\">South Africa</option>\n                          <option value=\"South Georgia and The South Sandwich Islands\">South Georgia and The South\n                            Sandwich Islands\n                          </option>\n                          <option value=\"Spain\">Spain</option>\n                          <option value=\"Sri Lanka\">Sri Lanka</option>\n                          <option value=\"Sudan\">Sudan</option>\n                          <option value=\"Suriname\">Suriname</option>\n                          <option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n                          <option value=\"Swaziland\">Swaziland</option>\n                          <option value=\"Sweden\">Sweden</option>\n                          <option value=\"Switzerland\">Switzerland</option>\n                          <option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n                          <option value=\"Taiwan, Province of China\">Taiwan, Province of China</option>\n                          <option value=\"Tajikistan\">Tajikistan</option>\n                          <option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n                          <option value=\"Thailand\">Thailand</option>\n                          <option value=\"Timor-leste\">Timor-leste</option>\n                          <option value=\"Togo\">Togo</option>\n                          <option value=\"Tokelau\">Tokelau</option>\n                          <option value=\"Tonga\">Tonga</option>\n                          <option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n                          <option value=\"Tunisia\">Tunisia</option>\n                          <option value=\"Turkey\">Turkey</option>\n                          <option value=\"Turkmenistan\">Turkmenistan</option>\n                          <option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n                          <option value=\"Tuvalu\">Tuvalu</option>\n                          <option value=\"Uganda\">Uganda</option>\n                          <option value=\"Ukraine\">Ukraine</option>\n                          <option value=\"United Arab Emirates\">United Arab Emirates</option>\n                          <option value=\"United Kingdom\">United Kingdom</option>\n                          <option value=\"United States\">United States</option>\n                          <option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands\n                          </option>\n                          <option value=\"Uruguay\">Uruguay</option>\n                          <option value=\"Uzbekistan\">Uzbekistan</option>\n                          <option value=\"Vanuatu\">Vanuatu</option>\n                          <option value=\"Venezuela\">Venezuela</option>\n                          <option value=\"Viet Nam\">Viet Nam</option>\n                          <option value=\"Virgin Islands, British\">Virgin Islands, British</option>\n                          <option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n                          <option value=\"Wallis and Futuna\">Wallis and Futuna</option>\n                          <option value=\"Western Sahara\">Western Sahara</option>\n                          <option value=\"Yemen\">Yemen</option>\n                          <option value=\"Zambia\">Zambia</option>\n                          <option value=\"Zimbabwe\">Zimbabwe</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':city.valid && activeStep.submitted,\n                      'has-error':!city.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-map-marker fa-lg fa-fw\"></i></span>\n                        <select class=\"form-control input-lg\" required [(ngModel)]=\"model.city\" #city=\"ngModel\"\n                                name=\"city\">\n                          <option value=\"\" selected=\"selected\">Select City</option>\n                          <option>Amsterdam</option>\n                          <option>Atlanta</option>\n                          <option>Baltimore</option>\n                          <option>Boston</option>\n                          <option>Buenos Aires</option>\n                          <option>Calgary</option>\n                          <option>Chicago</option>\n                          <option>Denver</option>\n                          <option>Dubai</option>\n                          <option>Frankfurt</option>\n                          <option>Hong Kong</option>\n                          <option>Honolulu</option>\n                          <option>Houston</option>\n                          <option>Kuala Lumpur</option>\n                          <option>London</option>\n                          <option>Los Angeles</option>\n                          <option>Melbourne</option>\n                          <option>Mexico City</option>\n                          <option>Miami</option>\n                          <option>Minneapolis</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-4\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':postal.valid && activeStep.submitted,\n                      'has-error':!postal.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-envelope-o fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" placeholder=\"Postal Code\" type=\"text\" name=\"postal\"\n                               [(ngModel)]=\"model.postal\" #postal=\"ngModel\" required minLength=\"4\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':wphone.valid && activeStep.submitted,\n                      'has-error':!wphone.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-phone fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" saMaskedInput=\"+99 (999) 999-9999\"\n                               saMaskedPlaceholder=\"X\" placeholder=\"+1\" type=\"text\" name=\"wphone\"\n                               [(ngModel)]=\"model.wphone\" #wphone=\"ngModel\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <div class=\"form-group\">\n                      <div class=\"input-group\" [ngClass]=\"{\n                      'has-success':hphone.valid && activeStep.submitted,\n                      'has-error':!hphone.valid && activeStep.submitted\n                      }\">\n                        <span class=\"input-group-addon\"><i class=\"fa fa-mobile fa-lg fa-fw\"></i></span>\n                        <input class=\"form-control input-lg\" saMaskedInput=\"+99 (999) 999-9999\"\n                               saMaskedPlaceholder=\"X\" placeholder=\"+1\" type=\"text\" name=\"hphone\"\n                               [(ngModel)]=\"model.hphone\" #hphone=\"ngModel\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step3'\">\n                <br>\n\n                <h3><strong>Step 3</strong> - Domain Setup</h3>\n\n                <alert type=\"info\" dismissible=\"true\">\n                  <i class=\"fa-fw fa fa-info\"></i>\n                  <strong>Info!</strong> Place an info message box if you wish.\n                </alert>\n                <div class=\"form-group\">\n                  <label>This is a label</label>\n                  <input class=\"form-control input-lg\" placeholder=\"Another input box here...\" type=\"text\" name=\"etc\"\n                         id=\"etc\">\n                </div>\n              </div>\n              <div class=\"tab-pane\" [class.active]=\"activeStep.key == 'step4'\">\n                <br>\n\n                <h3><strong>Step 4</strong> - Save Form</h3>\n                <br>\n\n                <h1 class=\"text-center text-success\"><strong><i class=\"fa fa-check fa-lg\"></i> Complete</strong></h1>\n                <h4 class=\"text-center\">Click next to finish</h4>\n                <br>\n                <br>\n              </div>\n\n              <div class=\"form-actions\">\n                <div class=\"row\">\n                  <div class=\"col-sm-12\">\n                    <ul class=\"pager wizard no-margin\">\n                      <li class=\"previous\">\n                        <a (click)=\"prevStep()\" [class.disabled]=\"steps.indexOf(activeStep) == 0\"\n                                class=\"btn btn-lg btn-default\"> Previous\n                        </a>\n                      </li>\n                      <li class=\"next\">\n                        <a (click)=\"nextStep()\" [class.disabled]=\"activeStep.submitted && !activeStep.valid\" class=\"btn btn-lg txt-color-darken\"> Next\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n    <!-- end widget content -->\n\n  </div>\n  <!-- end widget div -->\n\n</sa-widget>\n"

/***/ }),

/***/ 1595:
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" [deletebutton]=\"false\">\n  <!-- widget options:\n  usage: <sa-widget [editbutton]=\"false\">\n\n  [colorbutton]=\"false\"\n  [editbutton]=\"false\"\n  [togglebutton]=\"false\"\n  [deletebutton]=\"false\"\n  [fullscreenbutton]=\"false\"\n  [custombutton]=\"false\"\n  [collapsed]=\"true\"\n  [sortable]=\"false\"\n\n  -->\n  <header>\n    <h2>Fuel Wizard </h2>\n\n  </header>\n\n  <!-- widget div-->\n  <div>\n\n    <!-- widget content -->\n    <div class=\"widget-body fuelux\">\n      <fuel-ux-wizard (complete)=\"onWizardComplete($event)\">\n        <div class=\"wizard\">\n          <div class=\"steps-container\">\n            <ul class=\"steps\">\n              <li data-step=\"1\" class=\"active\">\n                <span class=\"badge badge-info\">1</span>Step 1<span class=\"chevron\"></span>\n              </li>\n              <li data-step=\"2\">\n                <span class=\"badge\">2</span>Step 2<span class=\"chevron\"></span>\n              </li>\n              <li data-step=\"3\">\n                <span class=\"badge\">3</span>Step 3<span class=\"chevron\"></span>\n              </li>\n              <li data-step=\"4\">\n                <span class=\"badge\">4</span>Step 4<span class=\"chevron\"></span>\n              </li>\n              <li data-step=\"5\">\n                <span class=\"badge\">5</span>Step 5<span class=\"chevron\"></span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"actions\">\n            <button type=\"button\" class=\"btn btn-sm btn-primary btn-prev\">\n              <i class=\"fa fa-arrow-left\"></i>Prev\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-success btn-next\" data-last=\"Finish\">\n              Next<i class=\"fa fa-arrow-right\"></i>\n            </button>\n          </div>\n        </div>\n        <div class=\"step-content\">\n          <form class=\"form-horizontal\">\n\n            <div class=\"step-pane active\" data-step=\"1\">\n              <h3><strong>Step 1 </strong> - Validation states</h3>\n\n              <!-- wizard form starts here -->\n              <fieldset>\n\n                <div class=\"form-group has-warning\">\n                  <label class=\"col-md-2 control-label\">Input warning</label>\n\n                  <div class=\"col-md-10\">\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" type=\"text\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-warning\"></i></span>\n                    </div>\n                    <span class=\"help-block\">Something may have gone wrong</span>\n                  </div>\n\n                </div>\n\n                <div class=\"form-group has-error\">\n                  <label class=\"col-md-2 control-label\">Input error</label>\n\n                  <div class=\"col-md-10\">\n                    <div class=\"input-group\">\n                      <input class=\"form-control\" type=\"text\">\n                      <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-remove-circle\"></i></span>\n                    </div>\n                    <span class=\"help-block\"><i class=\"fa fa-warning\"></i> Please correct the error</span>\n                  </div>\n                </div>\n\n                <div class=\"form-group has-success\">\n                  <label class=\"col-md-2 control-label\">Input success</label>\n\n                  <div class=\"col-md-10\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-dollar\"></i></span>\n                      <input class=\"form-control\" type=\"text\">\n                      <span class=\"input-group-addon\"><i class=\"fa fa-check\"></i></span>\n                    </div>\n                    <span class=\"help-block\">Something may have gone wrong</span>\n                  </div>\n                </div>\n\n                <div class=\"form-group\">\n                  <label class=\"control-label col-md-2\">Input icon success</label>\n\n                  <div class=\"col-md-10\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-12\">\n\n                        <div class=\"input-icon-left\">\n                          <i class=\"fa txt-color-green fa-check\"></i>\n                          <input class=\"form-control\" placeholder=\"Left Icon\" type=\"text\">\n                        </div>\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n              </fieldset>\n\n            </div>\n\n            <div class=\"step-pane\" data-step=\"2\">\n              <h3><strong>Step 2 </strong> - Alerts</h3>\n\n              <alert type=\"warning\" dismissible=\"true\">\n                <i class=\"fa-fw fa fa-warning\"></i>\n                <strong>Warning</strong> Your monthly traffic is reaching limit.\n              </alert>\n\n              <alert type=\"success\" dismissible=\"true\">\n                <i class=\"fa-fw fa fa-check\"></i>\n                <strong>Success</strong> The page has been added.\n              </alert>\n\n              <alert type=\"info\" dismissible=\"true\">\n                <i class=\"fa-fw fa fa-info\"></i>\n                <strong>Info!</strong> You have 198 unread messages.\n              </alert>\n\n              <alert type=\"danger\" dismissible=\"true\">\n                <i class=\"fa-fw fa fa-times\"></i>\n                <strong>Error!</strong> The daily cronjob has failed.\n              </alert>\n\n            </div>\n\n            <div class=\"step-pane\" data-step=\"3\">\n              <h3><strong>Step 3 </strong> - Wizard continued</h3>\n              <br>\n              <br>\n\n              <h1 class=\"text-center text-primary\"> This will be your Step 3 </h1>\n              <br>\n              <br>\n              <br>\n              <br>\n            </div>\n\n            <div class=\"step-pane\" data-step=\"4\">\n              <h3><strong>Step 4 </strong> - Wizard continued...</h3>\n              <br>\n              <br>\n\n              <h1 class=\"text-center text-danger\"> This will be your Step 4 </h1>\n              <br>\n              <br>\n              <br>\n              <br>\n            </div>\n\n            <div class=\"step-pane\" data-step=\"5\">\n              <h3><strong>Step 5 </strong> - Finished!</h3>\n              <br>\n              <br>\n\n              <h1 class=\"text-center text-success\"><i class=\"fa fa-check\"></i> Congratulations!\n                <br>\n                <small>Click finish to end wizard</small>\n              </h1>\n              <br>\n              <br>\n              <br>\n              <br>\n            </div>\n\n          </form>\n        </div>\n      </fuel-ux-wizard>\n    </div>\n    <!-- end widget content -->\n\n  </div>\n  <!-- end widget div -->\n\n</sa-widget>\n"

/***/ }),

/***/ 1596:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Forms', 'Wizards']\" icon=\"table\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n\n  <!-- widget grid -->\n  <sa-widgets-grid>\n\n    <!-- row -->\n    <div class=\"row\">\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n        <basic-wizard-widget></basic-wizard-widget>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n      <!-- NEW WIDGET START -->\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <!-- Widget ID (each widget will need unique ID)-->\n          <fuel-ux-wizard-widget></fuel-ux-wizard-widget>\n        <!-- end widget -->\n\n      </article>\n      <!-- WIDGET END -->\n\n    </div>\n\n    <!-- end row -->\n\n  </sa-widgets-grid>\n\n\n  <!-- end widget grid -->\n\n\n</div>\n"

/***/ })

});
//# sourceMappingURL=10.chunk.js.map
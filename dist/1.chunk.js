webpackJsonp([1,7,94],{

/***/ 1063:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__add_event_add_event_component__ = __webpack_require__(1174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calendar_widget_calendar_widget_component__ = __webpack_require__(1175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__draggable_event_draggable_event_directive__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_events_service__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__external_events_external_events_component__ = __webpack_require__(1178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calendar_component__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_smartadmin_module__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__calendar_routing__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__ = __webpack_require__(479);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return CalendarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CalendarModule = (function () {
    function CalendarModule() {
    }
    return CalendarModule;
}());
CalendarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_8__calendar_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__add_event_add_event_component__["a" /* AddEventComponent */],
            __WEBPACK_IMPORTED_MODULE_2__calendar_widget_calendar_widget_component__["a" /* CalendarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_3__draggable_event_draggable_event_directive__["a" /* DraggableEvent */],
            __WEBPACK_IMPORTED_MODULE_5__external_events_external_events_component__["a" /* ExternalEventsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__calendar_component__["a" /* CalendarComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__add_event_add_event_component__["a" /* AddEventComponent */],
            __WEBPACK_IMPORTED_MODULE_2__calendar_widget_calendar_widget_component__["a" /* CalendarWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_3__draggable_event_draggable_event_directive__["a" /* DraggableEvent */],
            __WEBPACK_IMPORTED_MODULE_5__external_events_external_events_component__["a" /* ExternalEventsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__calendar_component__["a" /* CalendarComponent */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__shared_events_service__["a" /* EventsService */]]
    })
], CalendarModule);

//# sourceMappingURL=calendar.module.js.map

/***/ }),

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__ = __webpack_require__(1137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_routing_module__ = __webpack_require__(1326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__analytics_component__ = __webpack_require__(1227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__live_feeds_social_network_component__ = __webpack_require__(1331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__live_feeds_live_feeds_component__ = __webpack_require__(1328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__live_feeds_live_stats_component__ = __webpack_require__(1329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__live_feeds_revenue_component__ = __webpack_require__(1330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bird_eye_bird_eye_component__ = __webpack_require__(1327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calendar_calendar_module__ = __webpack_require__(1063);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__todo_widget_todo_widget_component__ = __webpack_require__(1333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__todo_widget_todo_list_component__ = __webpack_require__(1332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_graphs_flot_chart_flot_chart_module__ = __webpack_require__(1205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_graphs_d3_d3_module__ = __webpack_require__(1427);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AnalyticsModule = (function () {
    function AnalyticsModule() {
    }
    return AnalyticsModule;
}());
AnalyticsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_smartadmin_module__["a" /* SmartadminModule */],
            __WEBPACK_IMPORTED_MODULE_2__analytics_routing_module__["a" /* AnalyticsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__calendar_calendar_module__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_12__shared_graphs_flot_chart_flot_chart_module__["a" /* FlotChartModule */],
            __WEBPACK_IMPORTED_MODULE_13__shared_graphs_d3_d3_module__["a" /* D3Module */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__analytics_component__["a" /* AnalyticsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__live_feeds_live_feeds_component__["a" /* LiveFeedsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__live_feeds_live_stats_component__["a" /* LiveStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__live_feeds_revenue_component__["a" /* RevenueComponent */],
            __WEBPACK_IMPORTED_MODULE_4__live_feeds_social_network_component__["a" /* SocialNetworkComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bird_eye_bird_eye_component__["a" /* BirdEyeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__todo_widget_todo_widget_component__["a" /* TodoWidgetComponent */],
            __WEBPACK_IMPORTED_MODULE_11__todo_widget_todo_list_component__["a" /* TodoListComponent */]
        ],
        providers: [],
    })
], AnalyticsModule);

//# sourceMappingURL=analytics.module.js.map

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

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__EVENTS_MOCK__ = __webpack_require__(1179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__EXTERNAL_EVENTS_MOCK__ = __webpack_require__(1180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventsService = (function () {
    function EventsService() {
        this.store = {
            events: __WEBPACK_IMPORTED_MODULE_1__EVENTS_MOCK__["a" /* default */],
            externalEvents: __WEBPACK_IMPORTED_MODULE_2__EXTERNAL_EVENTS_MOCK__["a" /* externalEvents */],
            removeAfterDrop: false,
        };
        this.subject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Subject"]();
    }
    EventsService.prototype.subscribe = function (next, error, complete) {
        return this.subject.subscribe(next, error, complete);
    };
    EventsService.prototype.addEvent = function (event) {
        var dropId = event.id;
        event.id = this.generateId();
        this.store.events.push(event);
        if (this.store.removeAfterDrop) {
            this.store.externalEvents.splice(this.store.externalEvents.findIndex(function (it) { return it.id == dropId; }), 1);
        }
        this.subject.next(this.store);
    };
    EventsService.prototype.addExternalEvent = function (event) {
        this.store.externalEvents.push(event);
        this.subject.next(this.store);
    };
    EventsService.prototype.setRemoveAfterDrop = function (value) {
        this.store.removeAfterDrop = value;
        this.subject.next(this.store);
    };
    EventsService.prototype.generateId = function () {
        return Math.random().toString(36).slice(2);
    };
    return EventsService;
}());
EventsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], EventsService);

//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-calendar',
        template: __webpack_require__(1209),
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colors", function() { return colors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barChartDemoOptions", function() { return barChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sinChartDemoOptions", function() { return sinChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalChartDemoOptions", function() { return horizontalChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "salesChartDemoOptions", function() { return salesChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillChartDemoOptions", function() { return fillChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pieChartDemoOptions", function() { return pieChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteStatsDemoOptions", function() { return siteStatsDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoUpdatingChartDemoOptions", function() { return autoUpdatingChartDemoOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeDataSource", function() { return FakeDataSource; });
var colors = {
    "chartBorderColor": "#efefef",
    "chartGridColor": "#DDD",
    "charMain": "#E24913",
    "chartSecond": "#6595b4",
    "chartThird": "#FF9F01",
    "chartFourth": "#7e9d3a",
    "chartFifth": "#BD362F",
    "chartMono": "#000"
};
var barChartDemoOptions = {
    colors: [colors.chartSecond, colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
var sinChartDemoOptions = {
    series: {
        lines: {
            show: true
        },
        points: {
            show: true
        }
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        //content : "Value <b>$x</b> Value <span>$y</span>",
        defaultTheme: false
    },
    colors: [colors.chartSecond, colors.chartFourth],
    yaxis: {
        min: -1.1,
        max: 1.1
    },
    xaxis: {
        min: 0,
        max: 15
    }
};
var horizontalChartDemoOptions = {
    colors: [colors.chartSecond, colors.chartFourth, "#666", "#BBB"],
    grid: {
        show: true,
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    legend: true,
    tooltip: true,
    tooltipOpts: {
        content: "<b>%x</b> = <span>%y</span>",
        defaultTheme: false
    }
};
var salesChartDemoOptions = {
    xaxis: {
        mode: "time",
        tickLength: 5
    },
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        //points: { show: true },
        shadowSize: 0
    },
    selection: {
        mode: "x"
    },
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "Your sales for <b>%x</b> was <span>$%y</span>",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [colors.chartSecond]
};
var fillChartDemoOptions = {
    xaxis: {
        tickDecimals: 0
    },
    yaxis: {
        tickFormatter: function (v) {
            return v + " cm";
        }
    }
};
var pieChartDemoOptions = {
    series: {
        pie: {
            show: true,
            innerRadius: 0.5,
            radius: 1,
            label: {
                show: false,
                radius: 2 / 3,
                formatter: function (label, series) {
                    return '<div style="font-size:11px;text-align:center;padding:4px;color:white;">' + label + '<br/>' + Math.round(series.percent) + '%</div>';
                },
                threshold: 0.1
            }
        }
    },
    legend: {
        show: true,
        noColumns: 1,
        labelFormatter: null,
        labelBoxBorderColor: "#000",
        container: null,
        position: "ne",
        margin: [5, 10],
        backgroundColor: "#efefef",
        backgroundOpacity: 1 // set to 0 to avoid background
    },
    grid: {
        hoverable: true,
        clickable: true
    }
};
var siteStatsDemoOptions = {
    series: {
        lines: {
            show: true,
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.1
                    }, {
                        opacity: 0.15
                    }]
            }
        },
        points: {
            show: true
        },
        shadowSize: 0
    },
    yaxes: [{
            min: 20,
            tickLength: 5
        }],
    grid: {
        hoverable: true,
        clickable: true,
        tickColor: colors.chartBorderColor,
        borderWidth: 0,
        borderColor: colors.chartBorderColor
    },
    tooltip: true,
    tooltipOpts: {
        content: "%s for <b>%x:00 hrs</b> was %y",
        dateFormat: "%y-%0m-%0d",
        defaultTheme: false
    },
    colors: [colors.charMain, colors.chartSecond],
    xaxis: {
        mode: "time",
        tickLength: 10,
        ticks: 15,
        tickDecimals: 2
    },
    yaxis: {
        ticks: 15,
        tickDecimals: 0
    }
};
var autoUpdatingChartDemoOptions = {
    yaxis: {
        min: 0,
        max: 100
    },
    xaxis: {
        min: 0,
        max: 100
    },
    colors: [colors.chartFourth],
    series: {
        lines: {
            lineWidth: 1,
            fill: true,
            fillColor: {
                colors: [{
                        opacity: 0.4
                    }, {
                        opacity: 0
                    }]
            },
            steps: false
        }
    }
};
var FakeDataSource = {
    data: [],
    total: 200,
    getRandomData: function () {
        if (this.data.length > 0)
            this.data = this.data.slice(1);
        // do a random walk
        while (this.data.length < this.total) {
            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
            var y = prev + Math.random() * 10 - 5;
            if (y < 0)
                y = 0;
            if (y > 100)
                y = 100;
            this.data.push(y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < this.data.length; ++i)
            res.push([i, this.data[i]]);
        return res;
    }
};
//# sourceMappingURL=flot-examples.js.map

/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_events_service__ = __webpack_require__(1161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarEvent = (function () {
    function CalendarEvent(id, title, description, className, icon) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.className = className;
        this.icon = icon;
    }
    return CalendarEvent;
}());
var AddEventComponent = (function () {
    function AddEventComponent(eventsService) {
        this.eventsService = eventsService;
        this.icons = [
            'fa-info',
            'fa-warning',
            'fa-check',
            'fa-user',
            'fa-lock',
            'fa-clock-o'
        ];
        this.colorClassNames = [
            {
                bg: 'bg-color-darken',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blue',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-orange',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-greenLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-blueLight',
                txt: 'txt-color-white'
            },
            {
                bg: 'bg-color-red',
                txt: 'txt-color-white'
            }
        ];
    }
    AddEventComponent.prototype.ngOnInit = function () {
        this.activeIcon = this.icons[0];
        this.activeColorClass = this.colorClassNames[0];
    };
    AddEventComponent.prototype.setIcon = function (icon) {
        this.activeIcon = icon;
    };
    AddEventComponent.prototype.setColorClass = function (colorClassName) {
        this.activeColorClass = colorClassName;
    };
    AddEventComponent.prototype.addExternalEvent = function () {
        if (!this.description || !this.title) {
            return;
        }
        var event = new CalendarEvent(this.eventsService.generateId(), this.title, this.description, this.activeColorClass.bg + ' ' + this.activeColorClass.txt, this.activeIcon);
        this.eventsService.addExternalEvent(event);
        this.description = '';
        this.title = '';
    };
    return AddEventComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddEventComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AddEventComponent.prototype, "description", void 0);
AddEventComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-add-event',
        template: __webpack_require__(1207),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventsService */]) === "function" && _a || Object])
], AddEventComponent);

var _a;
//# sourceMappingURL=add-event.component.js.map

/***/ }),

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_events_service__ = __webpack_require__(1161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarWidgetComponent = (function () {
    function CalendarWidgetComponent(el, eventsService) {
        var _this = this;
        this.el = el;
        this.eventsService = eventsService;
        this.period = 'Showing';
        __webpack_require__.e/* import() */(69).then(__webpack_require__.bind(null, 1305)).then(function () {
            _this.render();
        });
    }
    CalendarWidgetComponent.prototype.render = function () {
        var _this = this;
        this.$calendarRef = $('#calendar', this.el.nativeElement);
        this.calendar = this.$calendarRef.fullCalendar({
            lang: 'en',
            editable: true,
            draggable: true,
            selectable: false,
            selectHelper: true,
            unselectAuto: false,
            disableResizing: false,
            droppable: true,
            header: {
                left: 'title',
                center: 'prev, next, today',
                right: 'month, agendaWeek, agendaDay' //month, agendaDay,
            },
            drop: function (date, event, ui) {
                // retrieve the dropped element's stored Event Object
                var originalEventObject = ui.helper.data('eventObject');
                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);
                // assign it the date that was reported
                copiedEventObject.start = date;
                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                _this.$calendarRef.fullCalendar('renderEvent', copiedEventObject, true);
                _this.eventsService.addEvent(copiedEventObject);
            },
            select: function (start, end, allDay) {
                var title = prompt('Event Title:');
                if (title) {
                    _this.calendar.fullCalendar('renderEvent', {
                        title: title,
                        start: start,
                        end: end,
                        allDay: allDay
                    }, true // make the event "stick"
                    );
                }
                _this.calendar.fullCalendar('unselect');
            },
            events: function (start, end, timezone, callback) {
                callback(_this.eventsService.store.events);
            },
            eventRender: function (event, element, icon) {
                if (event.description != "") {
                    element.find('.fc-event-title').append("<br/><span class='ultra-light'>" + event.description + "</span>");
                }
                if (event.icon != "") {
                    element.find('.fc-event-title').append("<i class='air air-top-right fa " + event.icon + " '></i>");
                }
            }
        });
        $('.fc-header-right, .fc-header-center', this.$calendarRef).hide();
        $('.fc-left', this.$calendarRef).addClass('fc-header-title');
    };
    CalendarWidgetComponent.prototype.ngOnDestroy = function () {
        this.calendar.fullCalendar('destroy');
    };
    CalendarWidgetComponent.prototype.changeView = function (period) {
        this.calendar.fullCalendar('changeView', period);
        this.period = period;
    };
    CalendarWidgetComponent.prototype.next = function () {
        $('.fc-next-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent.prototype.prev = function () {
        $('.fc-prev-button', this.el.nativeElement).click();
    };
    CalendarWidgetComponent.prototype.today = function () {
        $('.fc-today-button', this.el.nativeElement).click();
    };
    return CalendarWidgetComponent;
}());
CalendarWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'calendar-widget',
        template: __webpack_require__(1208),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventsService */]) === "function" && _b || Object])
], CalendarWidgetComponent);

var _a, _b;
//# sourceMappingURL=calendar-widget.component.js.map

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_component__ = __webpack_require__(1164);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__calendar_component__["a" /* CalendarComponent */],
        data: { pageTitle: 'Calendar' }
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forChild(routes);
//# sourceMappingURL=calendar.routing.js.map

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DraggableEvent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DraggableEvent = (function () {
    function DraggableEvent(el) {
        this.el = el;
    }
    DraggableEvent.prototype.ngOnInit = function () {
        this.type = this.event.className;
        $(this.el.nativeElement)
            .data('eventObject', this.event)
            .draggable({
            zIndex: 999,
            revert: true,
            revertDuration: 0 //  original position after the drag
        });
    };
    return DraggableEvent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DraggableEvent.prototype, "event", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class'),
    __metadata("design:type", Object)
], DraggableEvent.prototype, "type", void 0);
DraggableEvent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[saDraggableEvent]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], DraggableEvent);

var _a;
//# sourceMappingURL=draggable-event.directive.js.map

/***/ }),

/***/ 1178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_events_service__ = __webpack_require__(1161);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalEventsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExternalEventsComponent = (function () {
    function ExternalEventsComponent(eventsService) {
        this.eventsService = eventsService;
        this.removeAfterDrop = false;
    }
    ExternalEventsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.events = this.eventsService.store.externalEvents;
        this.removeAfterDrop = this.eventsService.store.removeAfterDrop;
        this.sub = this.eventsService.subscribe(function (store) {
            _this.events = store.externalEvents;
        });
    };
    ExternalEventsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ExternalEventsComponent.prototype.toggleRemoveAfterDrop = function () {
        this.eventsService.setRemoveAfterDrop(this.removeAfterDrop);
    };
    return ExternalEventsComponent;
}());
ExternalEventsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-external-events',
        template: __webpack_require__(1210),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_events_service__["a" /* EventsService */]) === "function" && _a || Object])
], ExternalEventsComponent);

var _a;
//# sourceMappingURL=external-events.component.js.map

/***/ }),

/***/ 1179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

/* harmony default export */ __webpack_exports__["a"] = [{
        "id": "544c4183be624ef013bb009a",
        "title": "All Day Event",
        "start": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(15, 'day').startOf('day').add(21, 'hours'),
        "description": "long description",
        "icon": "fa-check",
        "className": ["event", "bg-color-greenLight"]
    }, {
        "id": "544c4183be624ef013bb009b",
        "title": "Long Event",
        "start": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(12, 'day').startOf('day'),
        "end": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(11, 'day').startOf('day'),
        "icon": "fa-lock",
        "className": ["event", "bg-color-red"]
    }, {
        "id": "544c4183be624ef013bb009c",
        "title": "Repeating Event",
        "start": __WEBPACK_IMPORTED_MODULE_0_moment__().subtract(7, 'day').startOf('day').add(13, 'hours'),
        "allDay": false,
        "icon": "fa-clock-o",
        "className": ["event", "bg-color-blue"]
    }, {
        "id": "544c4183be624ef013bb009d",
        "title": "Repeating Event",
        "start": __WEBPACK_IMPORTED_MODULE_0_moment__().add(14, 'day').startOf('day').add(14, 'hours'),
        "allDay": false,
        "icon": "fa-clock-o",
        "className": ["event", "bg-color-blue"]
    }, {
        "id": "544c4183be624ef013bb009e",
        "title": "Meeting",
        "start": __WEBPACK_IMPORTED_MODULE_0_moment__().add(1, 'day').startOf('day').add(8, 'hours').add(30, 'minutes'),
        "allDay": false,
        "className": ["event", "bg-color-darken"]
    }, {
        "id": "544c4183be624ef013bb009f",
        "title": "Lunch",
        "start": __WEBPACK_IMPORTED_MODULE_0_moment__().add(3, 'day').startOf('day').add(10, 'hours'),
        "end": __WEBPACK_IMPORTED_MODULE_0_moment__().add(3, 'day').startOf('day').add(12, 'hours'),
        "allDay": false,
        "className": ["event", "bg-color-darken"]
    }, {
        "id": "544c4183be624ef013bb00a0",
        "title": "Birthday Party",
        "start": __WEBPACK_IMPORTED_MODULE_0_moment__().add(5, 'day').startOf('day').add(17, 'hours'),
        "end": __WEBPACK_IMPORTED_MODULE_0_moment__().add(5, 'day').startOf('day').add(20, 'hours').add(30, 'minutes'),
        "allDay": false,
        "className": ["event", "bg-color-darken"]
    }, {
        "id": "544c4183be624ef013bb00a1",
        "title": "Smartadmin Open Day",
        "start": __WEBPACK_IMPORTED_MODULE_0_moment__().add(7, 'day').startOf('day').add(22, 'hours'),
        "end": __WEBPACK_IMPORTED_MODULE_0_moment__().add(8, 'day').startOf('day').add(22, 'hours'),
        "className": ["event", "bg-color-darken"]
    }];
//# sourceMappingURL=EVENTS_MOCK.js.map

/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return externalEvents; });
var externalEvents = [
    {
        id: 'ee1',
        title: "Office Meeting",
        description: "Currently busy",
        className: "bg-color-darken txt-color-white",
        icon: "fa-time"
    },
    {
        id: 'ee2',
        title: "Lunch Break",
        description: "No Description",
        className: "bg-color-blue txt-color-white",
        icon: "fa-pie"
    },
    {
        id: 'ee3',
        title: "URGENT",
        description: "urgent tasks",
        className: "bg-color-red txt-color-white",
        icon: "fa-alert"
    }
];
//# sourceMappingURL=EXTERNAL_EVENTS_MOCK.js.map

/***/ }),

/***/ 1204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlotChartComponent = (function () {
    function FlotChartComponent(el) {
        this.el = el;
        this.graphClass = '';
        this.width = '100%';
        this.height = '250px';
        this.vendorLoaded = false;
    }
    FlotChartComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(87).then(__webpack_require__.bind(null, 1287)).then(function () {
            _this.vendorLoaded = true;
            _this.render(_this.data);
        });
    };
    FlotChartComponent.prototype.render = function (data) {
        if (data) {
            $.plot(this.el.nativeElement.children[0], data, this.options);
        }
    };
    FlotChartComponent.prototype.ngOnChanges = function (changes) {
        if (this.vendorLoaded && changes.data.currentValue) {
            this.render(changes.data.currentValue);
        }
    };
    return FlotChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "graphClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotChartComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "type", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlotChartComponent.prototype, "height", void 0);
FlotChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-flot-chart',
        template: "\n    <div class=\"sa-flot-chart\" [ngStyle]=\"{width: width, height: height}\">&nbsp;</div>\n  ",
        styles: ["\n  .sa-flot-chart{\n    overflow: hidden;\n  }\n"]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FlotChartComponent);

var _a;
//# sourceMappingURL=flot-chart.component.js.map

/***/ }),

/***/ 1205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flot_chart_component__ = __webpack_require__(1204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotChartModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FlotChartModule = (function () {
    function FlotChartModule() {
    }
    return FlotChartModule;
}());
FlotChartModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__flot_chart_component__["a" /* FlotChartComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__flot_chart_component__["a" /* FlotChartComponent */]],
    })
], FlotChartModule);

//# sourceMappingURL=flot-chart.module.js.map

/***/ }),

/***/ 1207:
/***/ (function(module, exports) {

module.exports = "<form id=\"add-event-form\">\n  <fieldset>\n    <div class=\"form-group\">\n      <label>Select Event Icon</label>\n      <div class=\"btn-group btn-group-sm btn-group-justified\">\n\n        <label *ngFor=\"let icon of icons\"\n               class=\"btn btn-default\"\n               [saToggleActive]=\"icon == activeIcon\"\n               (click)=\"setIcon(icon)\">\n          <i class=\"fa text-muted {{icon}}\"></i>\n\n        </label>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Event Title</label>\n      <input [(ngModel)]=\"title\" class=\"form-control\" id=\"title\"\n             name=\"title\" maxLength=\"40\" type=\"text\"\n             placeholder=\"Event Title\"/>\n    </div>\n    <div class=\"form-group\">\n      <label>Event Description</label>\n        <textarea [(ngModel)]=\"description\" name=\"description\"\n                  class=\"form-control\"\n                  placeholder=\"Please be brief\" rows=\"3\" max-length=\"40\"\n                  id=\"description\"></textarea>\n      <p class=\"note\">Maxlength is set to 40 characters</p>\n    </div>\n\n    <div class=\"form-group\">\n      <label>Select Event Color</label>\n      <div class=\"btn-group btn-group-sm btn-group-justified btn-select-tick\">\n\n        <label *ngFor=\"let colorClassName of colorClassNames\"\n               [saToggleActive]=\"colorClassName == activeColorClass\"\n               class=\"btn {{colorClassName.bg}}\" (click)=\"setColorClass(colorClassName)\">\n\n          <i class=\"fa fa-check {{colorClassName.txt}}\"></i>\n        </label>\n      </div>\n    </div>\n\n  </fieldset>\n  <div class=\"form-actions\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button class=\"btn btn-default\" type=\"button\" id=\"add-event\"\n                (click)=\"addExternalEvent()\">\n          Add Event\n        </button>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ 1208:
/***/ (function(module, exports) {

module.exports = "<sa-widget color=\"blueDark\">\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-calendar\"></i> </span>\n\n    <h2> My Events </h2>\n\n    <div class=\"widget-toolbar\">\n\n      <div class=\"btn-group\" dropdown>\n        <button id=\"single-button\" type=\"button\" class=\"btn btn-xs btn-default\" dropdownToggle>\n          {{period}} <span class=\"caret\"></span>\n        </button>\n        <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\">\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeView('month')\">Month</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeView('agendaWeek')\">Agenda</a></li>\n          <li role=\"menuitem\"><a class=\"dropdown-item\" (click)=\"changeView('agendaDay')\">Today</a></li>\n        </ul>\n      </div>\n    </div>\n  </header>\n\n  <div>\n    <div class=\"widget-body no-padding\">\n\n      <div class=\"widget-body-toolbar\">\n\n        <div id=\"calendar-buttons\">\n\n          <div class=\"btn-group\">\n            <a (click)=\"prev()\" class=\"btn btn-default btn-xs\"><i\n              class=\"fa fa-chevron-left\"></i></a>\n            <a (click)=\"next()\" class=\"btn btn-default btn-xs\"><i\n              class=\"fa fa-chevron-right\"></i></a>\n          </div>\n        </div>\n\n      </div>\n\n\n      <div id=\"calendar\"></div>\n\n    </div>\n\n  </div>\n\n</sa-widget>\n"

/***/ }),

/***/ 1209:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Calendar', 'Add Events']\" icon=\"calendar\"\n                        class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\"></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n  </div>\n\n  <sa-widgets-grid>\n    <div class=\"row\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-3\">\n\n        <sa-widget color=\"blueDark\"  [editbutton]=\"false\" [colorbutton]=\"false\" [togglebutton]=\"false\"\n                   [fullscreenbutton]=\"false\" [deletebutton]=\"false\">\n          <header>\n            <h2> Add Events </h2>\n          </header>\n\n          <div>\n            <div class=\"widget-body\">\n\n              <sa-add-event></sa-add-event>\n            </div>\n          </div>\n        </sa-widget>\n\n        <div class=\"well well-sm\" id=\"event-container\">\n\n\n          <sa-external-events></sa-external-events>\n\n\n        </div>\n      </article>\n\n\n      <article class=\"col-sm-12 col-md-12 col-lg-9\">\n\n        <calendar-widget></calendar-widget>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1210:
/***/ (function(module, exports) {

module.exports = "<form>\n  <legend>\n    Draggable Events\n  </legend>\n  <ul id=\"external-events\" class=\"list-unstyled\">\n\n    <li saDraggableEvent [event]=\"event\" *ngFor=\"let event of events\">\n                                <span [class]=\"event.class\"\n                                      description=\"event.description\"\n                                      icon=\"event.icon\">\n                                    {{event.title}}</span>\n    </li>\n\n  </ul>\n  <div class=\"checkbox\">\n    <label>\n      <input type=\"checkbox\" id=\"drop-remove\" class=\"checkbox style-0\"\n            [(ngModel)]=\"removeAfterDrop\" name=\"drop-remove\"\n             (ngModelChange)=\"toggleRemoveAfterDrop()\"/>\n      <span>remove after drop</span>\n    </label>\n  </div>\n</form>\n"

/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
  else this[name] = definition()
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el)
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()
        
        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }
        
        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});


/***/ }),

/***/ 1227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__ = __webpack_require__(1125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnalyticsComponent = (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    return AnalyticsComponent;
}());
AnalyticsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_animations_fade_in_top_decorator__["a" /* FadeInTop */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sa-analytics',
        template: __webpack_require__(1552),
    }),
    __metadata("design:paramtypes", [])
], AnalyticsComponent);

//# sourceMappingURL=analytics.component.js.map

/***/ }),

/***/ 1228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo__ = __webpack_require__(1229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]('Release', 'Critical'),
            new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]('Misc', 'Important'),
            new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]('E-commerce', 'Important'),
        ];
        this.states = [
            { name: "Critical", title: "Critical Tasks", icon: "warning" },
            { name: "Important", title: "Important Tasks", icon: "exclamation" },
            { name: "Completed", title: "Completed Tasks", icon: "check" }
        ];
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Subject"]();
    }
    TodoService.prototype.createTodo = function (todo) {
        todo.createdAt = new Date();
        if (todo.state = 'Completed') {
            todo.completedAt = new Date();
        }
        this.todos.push(todo);
        this.subject.next(this.todos);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        if (todo.completedAt) {
            todo.state = 'Important';
            todo.completedAt = null;
        }
        else {
            todo.state = 'Completed';
            todo.completedAt = new Date();
        }
        this.subject.next(this.todos);
    };
    TodoService.prototype.updateTodo = function (id, state) {
        this.todos.find(function (it) { return it.id == id; }).state = state.name;
        this.subject.next(this.todos);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.subject.next(this.todos);
    };
    return TodoService;
}());
TodoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], TodoService);

//# sourceMappingURL=todo.service.js.map

/***/ }),

/***/ 1229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo(title, state) {
        this.id = '' + Todo._id++;
        this.title = title;
        this.state = state;
        this.createdAt = new Date();
    }
    return Todo;
}());

Todo._id = 0;
//# sourceMappingURL=todo.js.map

/***/ }),

/***/ 1326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__analytics_component__ = __webpack_require__(1227);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyticsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__analytics_component__["a" /* AnalyticsComponent */],
        data: { pageTitle: 'Analytics' }
    }];
var AnalyticsRoutingModule = (function () {
    function AnalyticsRoutingModule() {
    }
    return AnalyticsRoutingModule;
}());
AnalyticsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: []
    })
], AnalyticsRoutingModule);

//# sourceMappingURL=analytics-routing.module.js.map

/***/ }),

/***/ 1327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BirdEyeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BirdEyeComponent = (function () {
    function BirdEyeComponent() {
        this.data = {
            "Afghanistan": 16.63, "Albania": 11.58, "Algeria": 158.97, "Angola": 85.81, "Antigua and Barbuda": 1.1, "Argentina": 351.02, "Armenia": 8.83, "Australia": 1219.72, "Austria": 366.26, "Azerbaijan": 52.17, "Bahamas": 7.54, "Bahrain": 21.73, "Bangladesh": 105.4, "Barbados": 3.96, "Belarus": 52.89, "Belgium": 461.33, "Belize": 1.43, "Benin": 6.49, "Bhutan": 1.4, "Bolivia": 19.18, "Bosnia and Herzegovina": 16.2, "Botswana": 12.5, "Brazil": 2023.53, "Brunei": 11.96, "Bulgaria": 44.84, "Burkina Faso": 8.67, "Burundi": 1.47, "Cambodia": 11.36, "Cameroon": 21.88, "Canada": 1563.66, "Cape Verde": 1.57, "Central African Republic": 2.11, "Chad": 7.59, "Chile": 199.18, "China": 5745.13, "Colombia": 283.11, "Comoros": 0.56, "Costa Rica": 35.02, "Croatia": 59.92, "Cyprus": 22.75, "Czech Republic": 195.23, "Democratic Republic of the Congo": 12.6, "Denmark": 304.56, "Djibouti": 1.14, "Dominica": 0.38, "Dominican Republic": 50.87, "East Timor": 0.62, "Ecuador": 61.49, "Egypt": 216.83, "El Salvador": 21.8, "Equatorial Guinea": 14.55, "Eritrea": 2.25, "Estonia": 19.22, "Ethiopia": 30.94, "Fiji": 3.15, "Finland": 231.98, "France": 2555.44, "Gabon": 12.56, "Gambia": 1.04, "Georgia": 11.23, "Germany": 3305.9, "Ghana": 18.06, "Greece": 305.01, "Grenada": 0.65, "Guatemala": 40.77, "Guinea": 4.34, "Guinea-Bissau": 0.83, "Guyana": 2.2, "Haiti": 6.5, "Honduras": 15.34, "Hong Kong": 226.49, "Hungary": 132.28, "Iceland": 12.77, "India": 1430.02, "Indonesia": 695.06, "Iran": 337.9, "Iraq": 84.14, "Ireland": 204.14, "Israel": 201.25, "Italy": 2036.69, "Ivory Coast": 22.38, "Jamaica": 13.74, "Japan": 5390.9, "Jordan": 27.13, "Kazakhstan": 129.76, "Kenya": 32.42, "Kiribati": 0.15, "Kuwait": 117.32, "Kyrgyzstan": 4.44, "Laos": 6.34, "Latvia": 23.39, "Lebanon": 39.15, "Lesotho": 1.8, "Liberia": 0.98, "Libya": 77.91, "Lithuania": 35.73, "Luxembourg": 52.43, "Macedonia": 9.58, "Madagascar": 8.33, "Malawi": 5.04, "Malaysia": 218.95, "Maldives": 1.43, "Mali": 9.08, "Malta": 7.8, "Mauritania": 3.49, "Mauritius": 9.43, "Mexico": 1004.04, "Moldova": 5.36, "Mongolia": 5.81, "Montenegro": 3.88, "Morocco": 91.7, "Mozambique": 10.21, "Myanmar": 35.65, "Namibia": 11.45, "Nepal": 15.11, "Netherlands": 770.31, "New Zealand": 138, "Nicaragua": 6.38, "Niger": 5.6, "Nigeria": 206.66, "Norway": 413.51, "Oman": 53.78, "Pakistan": 174.79, "Panama": 27.2, "Papua New Guinea": 8.81, "Paraguay": 17.17, "Peru": 153.55, "Philippines": 189.06, "Poland": 438.88, "Portugal": 223.7, "Qatar": 126.52, "Republic of the Congo": 11.88, "Romania": 158.39, "Russian Federation": 3476.91, "Rwanda": 5.69, "Saint Kitts and Nevis": 0.56, "Saint Lucia": 1, "Saint Vincent and the Grenadines": 0.58, "Samoa": 0.55, "Sao Tome and Principe": 0.19, "Saudi Arabia": 434.44, "Senegal": 12.66, "Serbia": 38.92, "Seychelles": 0.92, "Sierra Leone": 1.9, "Singapore": 217.38, "Slovakia": 86.26, "Slovenia": 46.44, "Solomon Islands": 0.67, "South Africa": 354.41, "South Korea": 986.26, "Spain": 1374.78, "Sri Lanka": 48.24, "Sudan": 65.93, "Suriname": 3.3, "Swaziland": 3.17, "Sweden": 444.59, "Switzerland": 522.44, "Syria": 59.63, "Taiwan": 426.98, "Tajikistan": 5.58, "Tanzania": 22.43, "Thailand": 312.61, "Togo": 3.07, "Tonga": 0.3, "Trinidad and Tobago": 21.2, "Tunisia": 43.86, "Turkey": 729.05, "Turkmenistan": 0, "Uganda": 17.12, "Ukraine": 136.56, "United Arab Emirates": 239.65, "United Kingdom": 2258.57, "United States": 6624.18, "Uruguay": 40.71, "Uzbekistan": 37.72, "Vanuatu": 0.72, "Venezuela": 285.21, "Vietnam": 101.99, "Yemen": 30.02, "Zambia": 15.69, "Zimbabwe": 5.57, "Bolivia, Plurinational State of": 121.34, "Somalia": 0.47, "Tanzania, United Republic of": 0.78, "South Sudan": 0.98, "Congo, the Democratic Republic of the": 1.45
        };
    }
    BirdEyeComponent.prototype.ngOnInit = function () {
    };
    return BirdEyeComponent;
}());
BirdEyeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        selector: 'bird-eye-widget',
        template: __webpack_require__(1553),
    }),
    __metadata("design:paramtypes", [])
], BirdEyeComponent);

//# sourceMappingURL=bird-eye.component.js.map

/***/ }),

/***/ 1328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveFeedsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiveFeedsComponent = (function () {
    function LiveFeedsComponent() {
    }
    LiveFeedsComponent.prototype.ngOnInit = function () {
    };
    return LiveFeedsComponent;
}());
LiveFeedsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'live-feeds-widget',
        template: __webpack_require__(1554),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], LiveFeedsComponent);

//# sourceMappingURL=live-feeds.component.js.map

/***/ }),

/***/ 1329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphs_flot_charts_flot_examples__ = __webpack_require__(1169);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveStatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveStatsComponent = (function () {
    function LiveStatsComponent(zone) {
        this.zone = zone;
        this.liveSwitch = false;
        this.liveStatsChartOptions = {
            yaxis: {
                min: 0,
                max: 100
            },
            xaxis: {
                min: 0,
                max: 100
            },
            colors: ['rgb(87, 136, 156)'],
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            series: {
                lines: {
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.4
                            },
                            {
                                opacity: 0
                            }
                        ]
                    },
                    steps: false
                }
            }
        };
    }
    LiveStatsComponent.prototype.ngOnInit = function () {
        this.updateStats();
    };
    LiveStatsComponent.prototype.updateStats = function () {
        this.liveStats = [__WEBPACK_IMPORTED_MODULE_1__graphs_flot_charts_flot_examples__["FakeDataSource"].getRandomData()];
    };
    LiveStatsComponent.prototype.toggleSwitch = function () {
        var _this = this;
        if (this.liveSwitch) {
            this.interval = setInterval(function () {
                _this.updateStats();
            }, 1000);
        }
        else {
            clearInterval(this.interval);
        }
    };
    LiveStatsComponent.prototype.ngOnDestroy = function () {
        this.interval && clearInterval(this.interval);
    };
    return LiveStatsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], LiveStatsComponent.prototype, "liveSwitch", void 0);
LiveStatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'live-stats-feed',
        template: __webpack_require__(1555),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object])
], LiveStatsComponent);

var _a;
//# sourceMappingURL=live-stats.component.js.map

/***/ }),

/***/ 1330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RevenueComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RevenueComponent = (function () {
    function RevenueComponent() {
        this.state = {
            targetsShow: true,
            actualsShow: true,
            signupsShow: true
        };
        this.revenueChartOptions = {
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            },
            xaxis: {
                mode: "time"
            },
            yaxes: {
                tickFormatter: function (val, axis) {
                    return "$" + val;
                },
                max: 1200
            }
        };
    }
    RevenueComponent.prototype.ngOnInit = function () {
        this.updateData();
    };
    RevenueComponent.prototype.updateData = function () {
        var data = [];
        if (this.state.targetsShow)
            data.push(this.getTargetsData());
        if (this.state.actualsShow)
            data.push(this.getActualsData());
        if (this.state.signupsShow)
            data.push(this.getSignupsData());
        this.revenueData = data;
    };
    RevenueComponent.prototype.getTargetsData = function () {
        return {
            label: "Target Profit",
            data: [[1354586000000, 153], [1364587000000, 658], [1374588000000, 198], [1384589000000, 663], [1394590000000, 801], [1404591000000, 1080], [1414592000000, 353], [1424593000000, 749], [1434594000000, 523], [1444595000000, 258], [1454596000000, 688], [1464597000000, 364]],
            bars: {
                show: true,
                align: "center",
                barWidth: 30 * 30 * 60 * 1000 * 80
            }
        };
    };
    RevenueComponent.prototype.getActualsData = function () {
        return {
            label: "Actual Profit",
            data: [[1354586000000, 53], [1364587000000, 65], [1374588000000, 98], [1384589000000, 83], [1394590000000, 980], [1404591000000, 808], [1414592000000, 720], [1424593000000, 674], [1434594000000, 23], [1444595000000, 79], [1454596000000, 88], [1464597000000, 36]],
            color: '#3276B1',
            lines: {
                show: true,
                lineWidth: 3
            },
            points: {
                show: true
            }
        };
    };
    RevenueComponent.prototype.getSignupsData = function () {
        return {
            label: "Actual Signups",
            data: [[1354586000000, 647], [1364587000000, 435], [1374588000000, 784], [1384589000000, 346], [1394590000000, 487], [1404591000000, 463], [1414592000000, 479], [1424593000000, 236], [1434594000000, 843], [1444595000000, 657], [1454596000000, 241], [1464597000000, 341]],
            color: '#71843F',
            lines: {
                show: true,
                lineWidth: 1
            },
            points: {
                show: true
            }
        };
    };
    return RevenueComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RevenueComponent.prototype, "state", void 0);
RevenueComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'revenue-feed',
        template: __webpack_require__(1556),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], RevenueComponent);

//# sourceMappingURL=revenue.component.js.map

/***/ }),

/***/ 1331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialNetworkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialNetworkComponent = (function () {
    function SocialNetworkComponent() {
        this.statsData = [
            {
                label: "Twitter",
                data: [
                    [1, 27],
                    [2, 34],
                    [3, 51],
                    [4, 48],
                    [5, 55],
                    [6, 65],
                    [7, 61],
                    [8, 70],
                    [9, 65],
                    [10, 75],
                    [11, 57],
                    [12, 59],
                    [13, 62]
                ],
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            },
            {
                label: "Facebook",
                data: [
                    [1, 25],
                    [2, 31],
                    [3, 45],
                    [4, 37],
                    [5, 38],
                    [6, 40],
                    [7, 47],
                    [8, 55],
                    [9, 43],
                    [10, 50],
                    [11, 47],
                    [12, 39],
                    [13, 47]
                ],
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            }
        ];
        this.statsChartOptions = {
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            colors: ["#568A89", "#3276B1"],
            tooltip: true,
            tooltipOpts: {
                //content : "Value <b>$x</b> Value <span>$y</span>",
                defaultTheme: false
            },
            xaxis: {
                ticks: [
                    [1, "JAN"],
                    [2, "FEB"],
                    [3, "MAR"],
                    [4, "APR"],
                    [5, "MAY"],
                    [6, "JUN"],
                    [7, "JUL"],
                    [8, "AUG"],
                    [9, "SEP"],
                    [10, "OCT"],
                    [11, "NOV"],
                    [12, "DEC"],
                    [13, "JAN+1"]
                ]
            },
            yaxes: {}
        };
    }
    SocialNetworkComponent.prototype.ngOnInit = function () {
    };
    return SocialNetworkComponent;
}());
SocialNetworkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'social-network-feed',
        template: __webpack_require__(1557),
        styles: []
    }),
    __metadata("design:paramtypes", [])
], SocialNetworkComponent);

//# sourceMappingURL=social-network.component.js.map

/***/ }),

/***/ 1332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__(1228);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoListComponent = (function () {
    function TodoListComponent(el, todoService) {
        this.el = el;
        this.todoService = todoService;
        this.items = [];
    }
    TodoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.subject.subscribe(function (todos) {
            _this.setItems(todos);
        });
        this.setItems(this.todoService.todos);
    };
    TodoListComponent.prototype.setItems = function (todos) {
        var _this = this;
        this.items = todos.filter(function (it) { return it.state == _this.state.name; });
    };
    TodoListComponent.prototype.toggleTodo = function (todo) {
        this.todoService.toggleTodo(todo);
    };
    TodoListComponent.prototype.deleteTodo = function (todo) {
        this.todoService.deleteTodo(todo);
    };
    return TodoListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TodoListComponent.prototype, "state", void 0);
TodoListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'todo-list',
        template: __webpack_require__(1558),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === "function" && _b || Object])
], TodoListComponent);

var _a, _b;
//# sourceMappingURL=todo-list.component.js.map

/***/ }),

/***/ 1333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todo_service__ = __webpack_require__(1228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__todo__ = __webpack_require__(1229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoWidgetComponent = (function () {
    function TodoWidgetComponent(todoService) {
        this.todoService = todoService;
        this.states = this.todoService.states;
    }
    TodoWidgetComponent.prototype.ngOnInit = function () {
    };
    TodoWidgetComponent.prototype.createTodo = function () {
        this.todoService.createTodo(this.newTodo);
        this.newTodo = null;
    };
    TodoWidgetComponent.prototype.toggleAdd = function () {
        if (this.newTodo) {
            this.newTodo = null;
        }
        else {
            this.newTodo = new __WEBPACK_IMPORTED_MODULE_2__todo__["a" /* Todo */]();
            this.newTodo.state = 'Important';
        }
    };
    return TodoWidgetComponent;
}());
TodoWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'todo-widget',
        template: __webpack_require__(1559),
        styles: [""],
        providers: [__WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__todo_service__["a" /* TodoService */]) === "function" && _a || Object])
], TodoWidgetComponent);

var _a;
//# sourceMappingURL=todo-widget.component.js.map

/***/ }),

/***/ 1426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__smartadmin_config__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//noinspection TypeScriptUnresolvedFunction
var $script = __webpack_require__(1213);
var D3MapComponent = (function () {
    function D3MapComponent(el, layoutService) {
        var _this = this;
        this.el = el;
        this.layoutService = layoutService;
        this.data = [];
        this.initialized = false;
        this.layoutSub = this.layoutService.subscribe(function () {
            _this.initialized && _this.throttle();
        });
    }
    D3MapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $script(['https://d3js.org/d3.v4.min.js',
            'https://d3js.org/topojson.v1.min.js'], function () {
            _this.d3Init();
        });
    };
    D3MapComponent.prototype.d3Init = function () {
        var _this = this;
        d3.select(window).on("resize", this.throttle.bind(this));
        this.zoom = d3.zoom()
            .scaleExtent([1, 20])
            .on("zoom", this.move.bind(this));
        this.container = d3.select(this.getContainer());
        this.width = this.getContainer().offsetWidth;
        this.height = Math.max(this.width / 2, 300);
        //offsets for tooltips
        this.offsetL = this.container.offsetLeft + 20;
        this.offsetT = this.container.offsetTop + 10;
        //var graticule = d3.geo.graticule();
        this.graticule = d3.geoGraticule();
        this.tooltip = this.container.append("div").attr("class", "tooltip hidden");
        this.setup(this.width, this.height);
        d3.json(__WEBPACK_IMPORTED_MODULE_2__smartadmin_config__["a" /* config */].API_URL + '/graphs/d3/world-topo-min.json', function (err, world) {
            world.objects.countries.geometries = world.objects.countries.geometries.map(function (it) {
                it.properties.value = _this.data[it.properties.name];
                return it;
            });
            _this.countries = topojson.feature(world, world.objects.countries).features;
            var maxVal = Object.keys(_this.data).reduce(function (current, next) {
                return current >= _this.data[next] ? current : _this.data[next];
            }, 0);
            _this.color = d3.scaleLinear().domain([0, maxVal])
                .range([0, 100])
                .range([d3.color('rgba(0, 113, 164, 0.6)'), d3.color('rgba(0, 113, 164, 1)')])
                .nice(100);
            _this.draw();
            _this.initialized = true;
        });
    };
    D3MapComponent.prototype.setup = function (width, height) {
        //projection = d3.geo.mercator()
        this.projection = d3.geoMercator()
            .translate([(width / 2), (height / 2)])
            .scale(width / 2 / Math.PI);
        //path = d3.geo.path().projection(projection);
        this.path = d3.geoPath().projection(this.projection);
        this.svg = this.container.append("svg")
            .attr("width", width)
            .attr("height", height)
            .call(this.zoom)
            .on("click", this.click.bind(this));
        this.g = this.svg.append("g");
        this.zoom.scaleBy(this.svg.transition().duration(750), 0.9);
        this.zoom.translateBy(this.svg.transition().duration(750), 0, 20);
    };
    D3MapComponent.prototype.handleMouseOver = function (country) {
        var mouse = d3.mouse(this.svg.node()).map(function (d) {
            return parseInt(d);
        });
        this.tooltip.classed("hidden", false)
            .attr("style", "left:" + (mouse[0] + this.offsetL) + "px;top:" + (mouse[1] + this.offsetT) + "px")
            .html(country.properties.name);
    };
    D3MapComponent.prototype.handleMouseOut = function () {
        this.tooltip.classed("hidden", true);
    };
    D3MapComponent.prototype.isVisible = function () {
        var container = this.getContainer();
        return (container.clientHeight > 0 &&
            container.clientWidth > 0);
    };
    D3MapComponent.prototype.isInViewport = function () {
        var container = this.getContainer();
        var rect = container.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    D3MapComponent.prototype.draw = function () {
        var _this = this;
        if (!this.isVisible())
            return;
        // this.svg.append("path")
        //   .datum(this.graticule)
        //   .attr("class", "graticule")
        //   .attr("d", this.path);
        // this.g.append("path")
        //   .datum({ type: "LineString", coordinates: [[-180, 0], [-90, 0], [0, 0], [90, 0], [180, 0]] })
        //   .attr("class", "equator")
        //   .attr("d", this.path);
        var country = this.g.selectAll(".country").data(this.countries);
        country.enter().insert("path")
            .attr("class", "country")
            .attr("d", this.path)
            .attr("id", function (d, i) {
            return d.id;
        })
            .attr("title", function (d, i) {
            return d.properties.name;
        })
            .style("stroke", d3.color('white'))
            .style("fill", function (d, i) {
            return !d.properties.value ? d3.color('rgba(0, 113, 164, 0.0)') : _this.color(d.properties.value);
        })
            .style("stroke-width", '0.5')
            .on("mouseover", this.handleMouseOver.bind(this))
            .on("mouseout", this.handleMouseOut.bind(this));
        //tooltips
        /*
         d3.select("#container svg path")
         .on("mousemove", function(d,i) {
         console.log(d);
         var mouse = d3.mouse(svg.node()).map( function(d) { return parseInt(d); } );
    
         tooltip.classed("hidden", false)
         .attr("style", "left:"+(mouse[0]+offsetL)+"px;top:"+(mouse[1]+offsetT)+"px")
         .html(d.properties.name);
    
         })
         .on("mouseout",  function(d,i) {
         tooltip.classed("hidden", true);
         }); */
    };
    D3MapComponent.prototype.redraw = function () {
        this.width = this.getContainer().offsetWidth;
        this.height = Math.max(this.width / 2, 300);
        d3.select('svg').remove();
        this.setup(this.width, this.height);
        this.draw();
    };
    D3MapComponent.prototype.move = function () {
        //const t = d3.event.translate;
        var t = [d3.event.transform.x, d3.event.transform.y];
        //const s = d3.event.scale; 
        var s = d3.event.transform.k;
        var zscale = s;
        var h = this.height / 4;
        t[0] = Math.min((this.width / this.height) * (s - 1), Math.max(this.width * (1 - s), t[0]));
        t[1] = Math.min(h * (s - 1) + h * s, Math.max(this.height * (1 - s) - h * s, t[1]));
        //zoom.translateBy(t);
        this.g.attr("transform", "translate(" + t + ")scale(" + s + ")");
        //adjust the country hover stroke width based on zoom level
        // d3.selectAll(".country").style("stroke-width", 1.5 / s);
    };
    D3MapComponent.prototype.zoomIn = function () {
        this.zoom.scaleBy(this.svg.transition().duration(750), 1.3);
    };
    D3MapComponent.prototype.zoomOut = function () {
        this.zoom.scaleBy(this.svg.transition().duration(750), 0.7);
    };
    D3MapComponent.prototype.throttle = function () {
        var _this = this;
        window.clearTimeout(this.throttleTimer);
        this.throttleTimer = window.setTimeout(function () {
            _this.redraw();
        }, 200);
    };
    //geo translation on mouse click in map
    D3MapComponent.prototype.click = function () {
        var latlon = this.projection.invert(d3.mouse(this.svg.node()));
        console.log(latlon);
    };
    //function to add points and text to the map (used in plotting capitals)
    D3MapComponent.prototype.addpoint = function (lon, lat, text) {
        var gpoint = this.g.append("g").attr("class", "gpoint");
        var x = this.projection([lon, lat])[0];
        var y = this.projection([lon, lat])[1];
        gpoint.append("svg:circle")
            .attr("cx", x)
            .attr("cy", y)
            .attr("class", "point")
            .attr("r", 1.5);
        //conditional in case a point has no associated text
        if (text.length > 0) {
            gpoint.append("text")
                .attr("x", x + 2)
                .attr("y", y + 2)
                .attr("class", "text")
                .text(text);
        }
    };
    D3MapComponent.prototype.getContainer = function () {
        if (!this.cachedContainer) {
            this.cachedContainer = this.el.nativeElement.querySelector('.d3-map');
        }
        return this.cachedContainer;
    };
    return D3MapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], D3MapComponent.prototype, "data", void 0);
D3MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'd3-map',
        template: "\n  <div class=\"d3-zoomin\" (click)=\"zoomIn()\"><i class=\"fa fa-plus\"></i></div>\n  <div class=\"d3-zoomout\" (click)=\"zoomOut()\"><i class=\"fa fa-minus\"></i></div>\n  <div ngNonBindable class=\"d3-map\"></div>",
        styles: [__webpack_require__(1506)],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__layout_layout_service__["a" /* LayoutService */]) === "function" && _b || Object])
], D3MapComponent);

var _a, _b;
//# sourceMappingURL=d3-map.component.js.map

/***/ }),

/***/ 1427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__d3_map_component__ = __webpack_require__(1426);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3Module; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var D3Module = (function () {
    function D3Module() {
    }
    return D3Module;
}());
D3Module = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__d3_map_component__["a" /* D3MapComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__d3_map_component__["a" /* D3MapComponent */]],
    })
], D3Module);

//# sourceMappingURL=d3.module.js.map

/***/ }),

/***/ 1506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(478)(false);
// imports


// module
exports.push([module.i, ".d3-map .country:hover{\n  stroke: #fff;\n  stroke-width: 1.5px;\n}\n.d3-map .text{\n  font-size:10px;\n  text-transform:capitalize;\n}\nd3-map {\n  position: relative;\n  display: block;\n  padding:10px;\n  overflow:hidden;\n}\n\n.d3-map{\n  height:300px;\n}\n.d3-map .hidden { \n  display: none; \n}\n.d3-map div.tooltip {\n  color: #222; \n  background: #fff; \n  padding: .5em; \n  text-shadow: #f5f5f5 0 1px 0;\n  border-radius: 2px; \n  box-shadow: 0px 0px 2px 0px #a6a6a6; \n  opacity: 0.9; \n  right: 0;\n  position: absolute;\n}\n.d3-map .graticule {\n  fill: none;\n  stroke: #bbb;\n  stroke-width: .5px;\n  stroke-opacity: .5;\n}\n.d3-map .equator {\n  stroke: #ccc;\n  stroke-width: 1px;\n}\n\n.d3-zoomin{\n  top: 10px;\n}\n\n.d3-zoomout{\n  top: 34px;\n}\n\n.d3-zoomin, .d3-zoomout{\n  position: absolute;\n  background: #292929;\n  padding: 4px;\n  width: 22px;\n  height: 22px;\n  cursor: pointer;\n  line-height: 10px;\n  text-align: center;\n  font-size: 14px;\n  border-radius: 2px;\n  box-shadow: inset 0 -2px 0 rgba(0,0,0,.05);\n  background-color: #fff;\n  border: 1px solid #bfbfbf;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 1552:
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n\n  <div class=\"row\">\n    <sa-big-breadcrumbs [items]=\"['Dashboard', 'My Dashboard']\" icon=\"home\"\n    class=\"col-xs-12 col-sm-7 col-md-7 col-lg-4\" ></sa-big-breadcrumbs>\n    <sa-stats></sa-stats>\n\n  </div>\n\n  <sa-widgets-grid>\n\n    <div class=\"row\">\n      <article class=\"col-sm-12\">\n\n        <live-feeds-widget></live-feeds-widget>\n\n      </article>\n    </div>\n\n\n    <div class=\"row\">\n\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <chat-widget></chat-widget>\n\n        <calendar-widget></calendar-widget>\n      </article>\n\n      <article class=\"col-sm-12 col-md-12 col-lg-6\">\n\n        <bird-eye-widget></bird-eye-widget>\n\n       <todo-widget></todo-widget>\n      </article>\n    </div>\n  </sa-widgets-grid>\n</div>\n"

/***/ }),

/***/ 1553:
/***/ (function(module, exports) {

module.exports = "<sa-widget [colorbutton]=\"false\" [editbutton]=\"false\">\n\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-map-marker\"></i> </span>\n\n    <h2>Birds Eye</h2>\n\n    <div class=\"widget-toolbar hidden-mobile\">\n      <on-off-switch ><i class=\"fa fa-location-arrow\"></i> Realtime</on-off-switch>\n    </div>\n  </header>\n\n  <div>\n    <div class=\"widget-body no-padding\">\n      <d3-map [data]=\"data\"></d3-map>\n\n      <div id=\"heat-fill\">\n        <span class=\"fill-a\">0</span>\n\n        <span class=\"fill-b\">5,000</span>\n      </div>\n        <table saSparklineContainer class=\"table table-striped table-hover table-condensed\">\n          <thead>\n          <tr>\n            <th>Country</th>\n            <th>Visits</th>\n            <th class=\"text-align-center\">User Activity</th>\n            <th class=\"text-align-center\">Online</th>\n            <th class=\"text-align-center\">Demographic</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr>\n            <td><a (click)=\"(null)\">USA</a></td>\n            <td>4,977</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                2700, 3631, 2471, 1300, 1877, 2500, 2577, 2700, 3631, 2471,\n                2000, 2100, 3000\n              </div>\n            </td>\n            <td class=\"text-align-center\">143</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                17,83\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\"\n                data-dropdown>\n                <button class=\"btn btn-xs btn-default dropdown-toggle\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Australia</a></td>\n            <td>4,873</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                1000, 1100, 3030, 1300, -1877, -2500, -2577, -2700, 3631, 2471,\n                4700, 1631, 2471\n              </div>\n            </td>\n            <td class=\"text-align-center\">247</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                22,88\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">India</a></td>\n            <td>3,671</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                3631, 1471, 2400, 3631, 471, 1300, 1177, 2500, 2577, 3000, 4100,\n                3000, 7700\n              </div>\n            </td>\n            <td class=\"text-align-center\">373</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                10,90\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Brazil</a></td>\n            <td>2,476</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                2700, 1877, 2500, 2577, 2000, 3631, 2471, -2700, -3631, 2471,\n                1300, 2100, 3000,\n              </div>\n            </td>\n            <td class=\"text-align-center\">741</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                34,66\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Turkey</a></td>\n            <td>1,476</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-blue text-align-center\"\n                   data-sparkline-height=\"22px\" data-sparkline-width=\"90px\"\n                   data-sparkline-barwidth=\"2\">\n                1300, 1877, 2500, 2577, 2000, 2100, 3000, -2471, -2700, -3631,\n                -2471, 2700, 3631\n              </div>\n            </td>\n            <td class=\"text-align-center\">123</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                75,25\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          <tr>\n            <td><a (click)=\"(null)\">Canada</a></td>\n            <td>146</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline txt-color-orange text-align-center\"\n                   data-sparkline-height=\"22px\"\n                   data-sparkline-width=\"90px\" data-sparkline-barwidth=\"2\">\n                5, 34, 10, 1, 4, 6, -9, -1, 0, 0, 5, 6, 7\n              </div>\n            </td>\n            <td class=\"text-align-center\">23</td>\n            <td class=\"text-align-center\">\n              <div class=\"sparkline display-inline\" data-sparkline-type='pie'\n                   data-sparkline-piecolor='[\"#E979BB\", \"#57889C\"]'\n                   data-sparkline-offset=\"90\" data-sparkline-piesize=\"23px\">\n                50,50\n              </div>\n              <div\n                class=\"btn-group display-inline pull-right text-align-left hidden-tablet\">\n                <button class=\"btn btn-xs btn-default dropdown-toggle\"\n                        data-toggle=\"dropdown\">\n                  <i class=\"fa fa-cog fa-lg\"></i>\n                </button>\n                <ul class=\"dropdown-menu dropdown-menu-xs pull-right\">\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-file fa-lg fa-fw txt-color-greenLight\"></i>\n                      <u>P</u>DF</a>\n                  </li>\n                  <li>\n                    <a (click)=\"(null)\"><i\n                      class=\"fa fa-times fa-lg fa-fw txt-color-red\"></i>\n                      <u>D</u>elete</a>\n                  </li>\n                  <li class=\"divider\"></li>\n                  <li class=\"text-align-center\">\n                    <a (click)=\"(null)\">Cancel</a>\n                  </li>\n                </ul>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n          <tfoot>\n          <tr>\n            <td colspan=\"5\">\n              <ul class=\"pagination pagination-xs no-margin\">\n                <li class=\"prev disabled\">\n                  <a (click)=\"(null)\">Previous</a>\n                </li>\n                <li class=\"active\">\n                  <a (click)=\"(null)\">1</a>\n                </li>\n                <li>\n                  <a (click)=\"(null)\">2</a>\n                </li>\n                <li>\n                  <a (click)=\"(null)\">3</a>\n                </li>\n                <li class=\"next\">\n                  <a (click)=\"(null)\">Next</a>\n                </li>\n              </ul>\n            </td>\n          </tr>\n          </tfoot>\n        </table>\n\n\n    </div>\n\n  </div>\n</sa-widget>\n"

/***/ }),

/***/ 1554:
/***/ (function(module, exports) {

module.exports = "<sa-widget\n  [togglebutton]=\"false\"\n  [editbutton]=\"false\"\n  [fullscreenbutton]=\"false\"\n  [colorbutton]=\"false\"\n  [deletebutton]=\"false\" saSparklineContainer saEasyPieChartContainer>\n\n  <header>\n                    <span class=\"widget-icon\">\n                        <i class=\"glyphicon glyphicon-stats txt-color-darken\"></i> </span>\n\n    <h2>Live Feeds </h2>\n\n    <ul class=\"nav nav-tabs pull-right in\" id=\"myTab\">\n      <li class=\"active\">\n        <a data-toggle=\"tab\" href=\"#s1\"><i class=\"fa fa-clock-o\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">Live Stats</span></a>\n      </li>\n\n      <li>\n        <a data-toggle=\"tab\" href=\"#s2\"><i class=\"fa fa-facebook\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">Social Network</span></a>\n      </li>\n\n      <li>\n        <a data-toggle=\"tab\" href=\"#s3\"><i class=\"fa fa-dollar\" ></i> <span\n          class=\"hidden-mobile hidden-tablet\">Revenue</span></a>\n      </li>\n    </ul>\n\n  </header>\n\n  <div class=\"no-padding\">\n\n    <div class=\"widget-body\">\n\n      <div id=\"myTabContent\" class=\"tab-content\">\n\n        <live-stats-feed class=\"tab-pane fade active in padding-10 no-padding-bottom\" id=\"s1\"></live-stats-feed>\n\n        <social-network-feed class=\"tab-pane fade\" id=\"s2\" ></social-network-feed>\n\n        <revenue-feed class=\"tab-pane fade\" id=\"s3\" ></revenue-feed>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</sa-widget>\n"

/***/ }),

/***/ 1555:
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row no-space\">\n    <div class=\"col-xs-12 col-sm-12 col-md-8 col-lg-8\">\n      <on-off-switch class=\"demo-liveupdate-1\" title=\"Live switch\" [(model)]=\"liveSwitch\"\n                     (modelChange)=\"toggleSwitch()\"></on-off-switch>\n\n      <sa-flot-chart class=\"chart-large txt-color-blue\" [data]=\"liveStats\"\n                     [options]=\"liveStatsChartOptions\"></sa-flot-chart>\n\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 show-stats\">\n\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> My Tasks <span\n          class=\"pull-right\">130/200</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blueDark\"\n                 style=\"width: 65%\"></div>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> Transfered <span\n          class=\"pull-right\">440 GB</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blue\"\n                 style=\"width:34%\"></div>\n          </div>\n        </div>\n\n\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> Bugs Squashed<span\n          class=\"pull-right\">77%</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-blue\"\n                 style=\"width: 77%\"></div>\n          </div>\n        </div>\n        <div class=\"col-xs-6 col-sm-6 col-md-12 col-lg-12\"><span\n          class=\"text\"> User Testing <span\n          class=\"pull-right\">7 Days</span> </span>\n\n          <div class=\"progress\">\n            <div class=\"progress-bar bg-color-greenLight\" style=\"width:84%\"></div>\n          </div>\n        </div>\n\n        <span class=\"show-stat-buttons\">\n          <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n             <a (click)=\"(null)\" class=\"btn btn-default btn-block hidden-xs\">Generate PDF</a>\n          </span>\n          <span class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n              <a (click)=\"(null)\" class=\"btn btn-default btn-block hidden-xs\">Report a bug</a>\n          </span>\n        </span>\n      </div>\n    </div>\n\n\n  </div>\n\n  <div class=\"show-stat-microcharts\">\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n\n      <div class=\"easy-pie-chart txt-color-orangeDark\" data-percent=\"33\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">35</span>\n      </div>\n      <span class=\"easy-pie-title\"> Server Load <i\n        class=\"fa fa-caret-up icon-color-bad\"></i> </span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n        <span class=\"label bg-color-greenLight\"><i\n          class=\"fa fa-caret-up\"></i> 97%</span>\n        </li>\n        <li>\n        <span class=\"label bg-color-blueLight\"><i\n          class=\"fa fa-caret-down\"></i> 44%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-greenLight hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\" data-sparkline-height=\"33px\"\n           data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        130, 187, 250, 257, 200, 210, 300, 270, 363, 247, 270, 363, 247\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-greenLight\" data-percent=\"78.9\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">78.9 </span>\n      </div>\n      <span class=\"easy-pie-title\"> Disk Space <i\n        class=\"fa fa-caret-down icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n            <span class=\"label bg-color-blueDark\"><i\n              class=\"fa fa-caret-up\"></i> 76%</span>\n        </li>\n        <li>\n          <span class=\"label bg-color-blue\"><i\n            class=\"fa fa-caret-down\"></i> 3%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-blue hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\"\n           data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        257, 200, 210, 300, 270, 363, 130, 187, 250, 247, 270, 363, 247\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-blue\" data-percent=\"23\"\n           data-pie-size=\"50\">\n        <span class=\"percent percent-sign\">23 </span>\n      </div>\n      <span class=\"easy-pie-title\"> Transfered <i\n        class=\"fa fa-caret-up icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n          <span class=\"label bg-color-darken\">10GB</span>\n        </li>\n        <li>\n        <span class=\"label bg-color-blueDark\"><i\n          class=\"fa fa-caret-up\"></i> 10%</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-darken hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\" data-sparkline-height=\"33px\"\n           data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        200, 210, 363, 247, 300, 270, 130, 187, 250, 257, 363, 247, 270\n      </div>\n    </div>\n    <div class=\"col-xs-12 col-sm-3 col-md-3 col-lg-3\">\n      <div class=\"easy-pie-chart txt-color-darken\" data-percent=\"36\"\n           data-pie-size=\"50\">\n        <span class=\"percent degree-sign\">36 <i class=\"fa fa-caret-up\"></i></span>\n      </div>\n      <span class=\"easy-pie-title\"> Temperature <i\n        class=\"fa fa-caret-down icon-color-good\"></i></span>\n      <ul class=\"smaller-stat hidden-sm pull-right\">\n        <li>\n          <span class=\"label bg-color-red\"><i class=\"fa fa-caret-up\"></i> 124</span>\n        </li>\n        <li>\n          <span class=\"label bg-color-blue\"><i class=\"fa fa-caret-down\"></i> 40 F</span>\n        </li>\n      </ul>\n      <div class=\"sparkline txt-color-red hidden-sm hidden-md pull-right\"\n           data-sparkline-type=\"line\"\n           data-sparkline-height=\"33px\" data-sparkline-width=\"70px\"\n           data-fill-color=\"transparent\">\n        2700, 3631, 2471, 2700, 3631, 2471, 1300, 1877, 2500, 2577, 2000, 2100, 3000\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 1556:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div class=\"widget-body-toolbar bg-color-white smart-form\" id=\"rev-toggles\">\n\n    <div class=\"inline-group\">\n\n      <label for=\"gra-0\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-0\" [(ngModel)]=\"state.targetsShow\" (ngModelChange)=\"updateData()\" />\n        <i></i> Target </label>\n      <label for=\"gra-1\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-1\" [(ngModel)]=\"state.actualsShow\" (ngModelChange)=\"updateData()\"/>\n        <i></i> Actual </label>\n      <label for=\"gra-2\" class=\"checkbox\">\n        <input type=\"checkbox\" id=\"gra-2\" [(ngModel)]=\"state.signupsShow\" (ngModelChange)=\"updateData()\"/>\n        <i></i> Signups </label>\n    </div>\n\n    <div class=\"btn-group hidden-phone pull-right\">\n      <a class=\"btn dropdown-toggle btn-xs btn-default\" data-toggle=\"dropdown\"><i\n        class=\"fa fa-cog\"></i> More <span class=\"caret\"> </span> </a>\n      <ul class=\"dropdown-menu pull-right\">\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-file-text-alt\"></i>> Export to PDF</a>\n        </li>\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-question-sign\"></i> Help</a>\n        </li>\n      </ul>\n    </div>\n\n  </div>\n\n  <div class=\"padding-10\">\n    <sa-flot-chart class=\"chart-large has-legend-unique\"\n                   [data]=\"revenueData\" [options]=\"revenueChartOptions\"></sa-flot-chart>\n  </div>\n</div>\n"

/***/ }),

/***/ 1557:
/***/ (function(module, exports) {

module.exports = "<div >\n  <div class=\"widget-body-toolbar bg-color-white\">\n\n    <form class=\"form-inline\" role=\"form\">\n\n      <div class=\"form-group\">\n        <label class=\"sr-only\" for=\"s123\">Show From</label>\n        <input type=\"email\" class=\"form-control input-sm\" id=\"s123\"\n               placeholder=\"Show From\"/>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control input-sm\" id=\"s124\"\n               placeholder=\"To\"/>\n      </div>\n\n      <div class=\"btn-group hidden-phone pull-right\">\n        <a class=\"btn dropdown-toggle btn-xs btn-default\"\n           data-toggle=\"dropdown\"><i\n          class=\"fa fa-cog\" ></i> More <span class=\"caret\"> </span> </a><ul class=\"dropdown-menu pull-right\">\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-file-text-alt\" ></i> Export to PDF</a>\n        </li>\n        <li>\n          <a (click)=\"(null)\"><i class=\"fa fa-question-sign\" ></i> Help</a>\n        </li>\n      </ul>\n      </div>\n\n    </form>\n\n  </div>\n  <div class=\"padding-10\">\n    <sa-flot-chart class=\"chart-large has-legend-unique\" [data]=\"statsData\" [options]=\"statsChartOptions\" ></sa-flot-chart>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 1558:
/***/ (function(module, exports) {

module.exports = "<div>\n  <h5 class=\"todo-group-title\"><i class=\"fa fa-{{state.icon}}\"></i> {{state.title}} {{items.length}}</h5>\n  <ul class=\"todo\" >\n    <li *ngFor=\"let todo of items; let i = index\"\n        [class.complete]=\"todo.completedAt\"\n       >\n    \t<span class=\"handle\"> <label class=\"checkbox\">\n            <input type=\"checkbox\" (click)=\"toggleTodo(todo)\" [checked]=\"todo.completedAt\"\n                   name=\"checkbox-inline\">\n            <i></i> </label> </span>\n\n      <p>\n        <strong>Ticket #{{i + 1}}</strong> - {{todo.title}}\n        <span class=\"text-muted\" *ngIf=\"todo.description\">{{todo.description}}</span>\n        <span class=\"date\">{{todo.createdAt | moment : 'HH:mm YYYY-MM-DD'}} - <a (click)=\"deleteTodo(todo)\" class=\"text-muted\"><i\n          class=\"fa fa-trash\"></i></a></span>\n\n      </p>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 1559:
/***/ (function(module, exports) {

module.exports = "<sa-widget [editbutton]=\"false\" color=\"blue\">\n  <header>\n    <span class=\"widget-icon\"> <i class=\"fa fa-check txt-color-white\"></i> </span>\n\n    <h2> ToDo's </h2>\n\n    <div class=\"widget-toolbar\">\n      <button class=\"btn btn-xs btn-default\"\n              [class.active]=\"newTodo\" (click)=\"toggleAdd()\"><i\n        *ngIf=\"!newTodo\" class=\"fa fa-plus\"></i><i\n        *ngIf=\"newTodo\" class=\"fa fa-times\"></i> Add</button>\n\n    </div>\n  </header>\n  <!-- widget div-->\n  <div>\n    <div class=\"widget-body no-padding smart-form\">\n      <!-- content goes here -->\n      <div *ngIf=\"newTodo\">\n        <h5 class=\"todo-group-title\"><i class=\"fa fa-plus-circle\"></i> New Todo</h5>\n\n        <form #newTodoForm=\"ngForm\" class=\"smart-form\">\n          <fieldset>\n            <section>\n              <label class=\"input\">\n                <input type=\"text\" required class=\"input-lg\" [(ngModel)]=\"newTodo.title\" name=\"title\"\n                       placeholder=\"What needs to be done?\">\n              </label>\n            </section>\n            <section>\n              <div class=\"col-xs-6\">\n                <label class=\"select\">\n                  <select class=\"input-sm\" name=\"state\" [(ngModel)]=\"newTodo.state\" >\n                    <option *ngFor=\"let state of states\" [value]=\"state.name\">{{state.name}}</option>\n                  </select> <i></i> </label>\n              </div>\n            </section>\n          </fieldset>\n          <footer>\n            <button [disabled]=\"!newTodoForm.form.valid\" type=\"button\" class=\"btn btn-primary\"\n                    (click)=\"createTodo()\">\n              Add\n            </button>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"toggleAdd()\">\n              Cancel\n            </button>\n          </footer>\n        </form>\n      </div>\n\n      <todo-list *ngFor=\"let state of states\" [state]=\"state\"></todo-list>\n\n      <!-- end content -->\n    </div>\n\n  </div>\n  <!-- end widget div -->\n</sa-widget>\n"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })

});
//# sourceMappingURL=1.chunk.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _views_Home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home/home.component */ "./src/app/views/Home/home.component.ts");
/* harmony import */ var _views_colors_colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/colors/colors.component */ "./src/app/views/colors/colors.component.ts");






const routes = [
    { path: "", redirectTo: 'home', pathMatch: "full" },
    { path: "home", component: _views_Home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "colors", component: _views_colors_colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'color-guideline';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/colors/colors.component */ "./src/app/views/colors/colors.component.ts");
/* harmony import */ var _views_Home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Home/home.component */ "./src/app/views/Home/home.component.ts");
/* harmony import */ var _components_color_color_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/color/color.component */ "./src/app/components/color/color.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
            ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _views_Home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _views_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _components_color_color_component__WEBPACK_IMPORTED_MODULE_7__["ColorComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
        ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _views_Home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _views_colors_colors_component__WEBPACK_IMPORTED_MODULE_5__["ColorsComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _components_color_color_component__WEBPACK_IMPORTED_MODULE_7__["ColorComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                    ngx_clipboard__WEBPACK_IMPORTED_MODULE_12__["ClipboardModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/color/color.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/color/color.component.ts ***!
  \*****************************************************/
/*! exports provided: ColorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorComponent", function() { return ColorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/__ivy_ngcc__/fesm2015/ngx-clipboard.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "background-color": a0 }; };
class ColorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ColorComponent.ɵfac = function ColorComponent_Factory(t) { return new (t || ColorComponent)(); };
ColorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorComponent, selectors: [["app-color"]], inputs: { year: "year", name: "name", color: "color", pantone: "pantone" }, decls: 15, vars: 8, consts: [["ngxClipboard", "", "data-toggle", "modal", "data-target", "#exampleModal", 1, "color-link", 3, "cbContent"], [1, "box-color"], [1, "color-swatch", 3, "ngStyle"], [1, "p-2", "color-info"], [1, "text-left"], [1, "text-center"], [1, "text-right"]], template: function ColorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cbContent", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.color));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.year);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pantone);
    } }, directives: [ngx_clipboard__WEBPACK_IMPORTED_MODULE_1__["ClipboardDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".box-color[_ngcontent-%COMP%]{\n    border-radius: 20px;\n    -webkit-border-radius: 20px;\n    -moz-border-radius: 20px;\n    -o-border-radius: 20px;\n    \n    box-shadow: 0px 0px 10px 2px rgba(173,173,173,1);\n    color: #666666;\n    transition: 300ms all ease;\n}\n.color-swatch[_ngcontent-%COMP%]{\n    height: 100px;\n    border-top-right-radius: 20px;\n    -webkit-border-top-right-radius: 20px;\n    -moz-border-top-right-radius: 20px;\n    -o-border-top-right-radius: 20px;\n    border-top-left-radius:20px;\n    -webkit-border-top-left-radius: 20px;\n    -moz-border-top-left-radius: 20px;\n    -o-border-top-left-radius: 20px;\n}\n.color-info[_ngcontent-%COMP%]{\n    background-color: #fff;;\n    border-bottom-right-radius: 20px;\n    -webkit-border-bottom-right-radius: 20px;\n    -moz-border-bottom-right-radius: 20px;\n    -o-border-bottom-right-radius: 20px;\n    border-bottom-left-radius:20px;\n    -webkit-border-bottom-left-radius: 20px;\n    -moz-border-bottom-left-radius: 20px;\n    -o-border-bottom-left-radius: 20px;\n}\n.h3[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 0;\n}\np[_ngcontent-%COMP%]{\n    margin: 0;\n}\nbutton.color-link[_ngcontent-%COMP%]{\n    text-transform: none;\n    width: 100%;\n    height: 100%;\n    background: none;\n    border: none;\n}\nbutton.color-link[_ngcontent-%COMP%]:hover   .box-color[_ngcontent-%COMP%]{\n    box-shadow: 0px 0px 20px 2px rgba(173,173,173,1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xvci9jb2xvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUc1QixnREFBZ0Q7SUFDaEQsY0FBYztJQUNkLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQywrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsd0NBQXdDO0lBQ3hDLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2QyxvQ0FBb0M7SUFDcEMsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBRUE7SUFHSSxnREFBZ0Q7QUFDcEQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbG9yL2NvbG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWNvbG9ye1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7ICovXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMnB4IHJnYmEoMTczLDE3MywxNzMsMSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgIHRyYW5zaXRpb246IDMwMG1zIGFsbCBlYXNlO1xufVxuLmNvbG9yLXN3YXRjaHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgLW1vei1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAtby1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjIwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIC1tb3otYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAtby1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuLmNvbG9yLWluZm97XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjs7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICAtbW96LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIC1vLWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MjBweDtcbiAgICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICAgIC1vLWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG4uaDMsIGgzIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbnB7XG4gICAgbWFyZ2luOiAwO1xufVxuYnV0dG9uLmNvbG9yLWxpbmt7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b24uY29sb3ItbGluazpob3ZlciAuYm94LWNvbG9ye1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDJweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IDJweCByZ2JhKDE3MywxNzMsMTczLDEpO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAycHggcmdiYSgxNzMsMTczLDE3MywxKTtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-color',
                templateUrl: './color.component.html',
                styleUrls: ['./color.component.css']
            }]
    }], function () { return []; }, { year: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pantone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [["id", "footer"], [1, "container-lg"], [1, "row"], [1, "col-12", "text-center"], ["id", "clouds", "alt", "Gray Clouds Background", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "David Alfredo Villarroel Contreras - 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#footer[_ngcontent-%COMP%]{\n    height: 40px;\n}\n#footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 10px;\n    color: #333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZm9vdGVye1xuICAgIGhlaWdodDogNDBweDtcbn1cbiNmb290ZXIgcHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICMzMzM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "navbar", "navbar-dark", "bg-dark"], ["routerLink", "/home", 1, "navbar-brand"], [1, "icon-davos"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".icon-davos[_ngcontent-%COMP%]{\n    font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbi1kYXZvc3tcbiAgICBmb250LXNpemU6IDQwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/colors.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/colors.service.ts ***!
  \********************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ColorsService {
    constructor(http) {
        this.http = http;
        this.colorsUno = {};
        this.colorsDos = {};
        this.info = [];
        this.cargada = false;
        http.get("https://reqres.in/api/colors")
            .subscribe(resp => {
            this.colorsUno = resp;
            this.colorsUno.data.forEach((item) => {
                this.info.push(item);
            });
        });
        http.get("https://reqres.in/api/colors?page=2")
            .subscribe(response => {
            this.colorsDos = response;
            this.colorsDos.data.forEach((items) => {
                this.info.push(items);
            });
        });
    }
}
ColorsService.ɵfac = function ColorsService_Factory(t) { return new (t || ColorsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ColorsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorsService, factory: ColorsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/Home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/Home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 12, vars: 0, consts: [["id", "home", 1, "d-flex", "align-items-center"], [1, "container-lg"], [1, "row"], [1, "col-12", "col-md-6", "mx-auto", "d-flex", "flex-column", "align-items-center"], [1, "icon-davos"], ["routerLink", "/colors", 1, "btn", "btn-info"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "David Alfredo Villarroel Contreras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dise\u00F1ador Gr\u00E1fico/web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Guideline uso de color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#home[_ngcontent-%COMP%]{\n    height: 90vh;\n}\n#home[_ngcontent-%COMP%]   .icon-davos[_ngcontent-%COMP%]{\n    font-size: 100px;\n    color: #E2583E;\n    margin-bottom: 24px;\n}\n#home[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvSG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL0hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWV7XG4gICAgaGVpZ2h0OiA5MHZoO1xufVxuI2hvbWUgLmljb24tZGF2b3N7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBjb2xvcjogI0UyNTgzRTtcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4jaG9tZSBoMXtcbiAgICBmb250LXNpemU6IDI0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/views/colors/colors.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/colors/colors.component.ts ***!
  \**************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/__ivy_ngcc__/dist/ngx-pagination.js");
/* harmony import */ var _components_color_color_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/color/color.component */ "./src/app/components/color/color.component.ts");






function ColorsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-color", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearChange", function ColorsComponent_div_10_Template_app_color_yearChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const color_r1 = ctx.$implicit; return color_r1.year = $event; })("nameChange", function ColorsComponent_div_10_Template_app_color_nameChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const color_r1 = ctx.$implicit; return color_r1.name = $event; })("colorChange", function ColorsComponent_div_10_Template_app_color_colorChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const color_r1 = ctx.$implicit; return color_r1.color = $event; })("pantoneChange", function ColorsComponent_div_10_Template_app_color_pantoneChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const color_r1 = ctx.$implicit; return color_r1.pantone_value = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("year", color_r1.year)("name", color_r1.name)("color", color_r1.color)("pantone", color_r1.pantone_value);
} }
const _c0 = function (a1) { return { itemsPerPage: 6, currentPage: a1 }; };
class ColorsComponent {
    constructor(colorService) {
        this.colorService = colorService;
        this.actualPage = 1;
    }
    ngOnInit() {
    }
}
ColorsComponent.ɵfac = function ColorsComponent_Factory(t) { return new (t || ColorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorsService"])); };
ColorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColorsComponent, selectors: [["app-colors"]], decls: 26, vars: 6, consts: [[1, "py-4"], [1, "container-lg"], [1, "row"], [1, "col-12", "text-center"], [1, "w-100", "my-3", "text-center"], ["class", "col-6 col-md-4 my-2", 4, "ngFor", "ngForOf"], [1, "my-pagination", 3, "pageChange"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "icon-ui-theme", "mr-2"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-6", "col-md-4", "my-2"], [3, "year", "name", "color", "pantone", "yearChange", "nameChange", "colorChange", "pantoneChange"]], template: function ColorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Por favor si necesitas usar un hexadecimal, has click sobre el pantone que necesites y se copiar\u00E1 automaticamente a tu portapapeles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColorsComponent_div_10_Template, 2, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "pagination-controls", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ColorsComponent_Template_pagination_controls_pageChange_12_listener($event) { return ctx.actualPage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "!A pintar el dise\u00F1o!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "El hexadecimal fue copiado correctamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 1, ctx.colorService.info, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.actualPage)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginationControlsComponent"], _components_color_color_component__WEBPACK_IMPORTED_MODULE_4__["ColorComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["PaginatePipe"]], styles: [".my-pagination[_ngcontent-%COMP%]{\n    width: 100%;\n}\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    margin-top: 20px;\n    padding: 0;\n}\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination .current {\n    border: 1px solid #E2583E;\n    background-color: #fff;\n    color: #333;\n    border-radius: 4px;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    -o-border-radius: 4px;\n}\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a, .my-pagination[_ngcontent-%COMP%]     .ngx-pagination button {\n    color: #333;\n}\n.my-pagination[_ngcontent-%COMP%]     .ngx-pagination a:hover, .my-pagination[_ngcontent-%COMP%]     .ngx-pagination button:hover {\n    background-color: #E2583E;\n    color: #fff;\n    border-radius: 4px;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    -o-border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29sb3JzL2NvbG9ycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb2xvcnMvY29sb3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktcGFnaW5hdGlvbntcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG59XG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRTI1ODNFO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBhLCAubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5teS1wYWdpbmF0aW9uIC9kZWVwLyAubmd4LXBhZ2luYXRpb24gYTpob3ZlciwgLm15LXBhZ2luYXRpb24gL2RlZXAvIC5uZ3gtcGFnaW5hdGlvbiBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMjU4M0U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-colors',
                templateUrl: './colors.component.html',
                styleUrls: ['./colors.component.css']
            }]
    }], function () { return [{ type: src_app_services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorsService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vithoesponja/Desktop/proyectos-personales/proyectos-web/color-guideline/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
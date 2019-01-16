(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _national_trust_national_trust_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./national-trust/national-trust.component */ "./src/app/national-trust/national-trust.component.ts");
/* harmony import */ var _english_heritage_english_heritage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./english-heritage/english-heritage.component */ "./src/app/english-heritage/english-heritage.component.ts");
/* harmony import */ var _hha_hha_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hha/hha.component */ "./src/app/hha/hha.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _national_trust_n_property_n_property_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./national-trust/n-property/n-property.component */ "./src/app/national-trust/n-property/n-property.component.ts");
/* harmony import */ var _english_heritage_e_property_e_property_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./english-heritage/e-property/e-property.component */ "./src/app/english-heritage/e-property/e-property.component.ts");
/* harmony import */ var _hha_h_property_h_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hha/h-property/h-property.component */ "./src/app/hha/h-property/h-property.component.ts");











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'national-trust', component: _national_trust_national_trust_component__WEBPACK_IMPORTED_MODULE_3__["NationalTrustComponent"], children: [
            { path: ':id', component: _national_trust_n_property_n_property_component__WEBPACK_IMPORTED_MODULE_8__["NPropertyComponent"] }
        ] },
    { path: 'english-heritage', component: _english_heritage_english_heritage_component__WEBPACK_IMPORTED_MODULE_4__["EnglishHeritageComponent"], children: [
            { path: ':id', component: _english_heritage_e_property_e_property_component__WEBPACK_IMPORTED_MODULE_9__["EPropertyComponent"] }
        ] },
    { path: 'hha', component: _hha_hha_component__WEBPACK_IMPORTED_MODULE_5__["HhaComponent"], children: [
            { path: ':id', component: _hha_h_property_h_property_component__WEBPACK_IMPORTED_MODULE_10__["HPropertyComponent"] }
        ] },
    { path: '', redirectTo: '/not-found', pathMatch: 'full' },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"], data: { message: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  color: #6c757d;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <app-header></app-header>\n  <h1 class=\"text-center  my-4\">Castles in Great Britain</h1>\n  <router-outlet></router-outlet>\n  \n  <!-- <app-national-trust></app-national-trust> -->\n  <!-- <hr>\n  <app-english-heritage></app-english-heritage>\n  <hr>\n  <app-hha></app-hha> -->\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-links';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _national_trust_national_trust_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./national-trust/national-trust.component */ "./src/app/national-trust/national-trust.component.ts");
/* harmony import */ var _english_heritage_english_heritage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./english-heritage/english-heritage.component */ "./src/app/english-heritage/english-heritage.component.ts");
/* harmony import */ var _hha_hha_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hha/hha.component */ "./src/app/hha/hha.component.ts");
/* harmony import */ var _national_trust_n_property_n_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./national-trust/n-property/n-property.component */ "./src/app/national-trust/n-property/n-property.component.ts");
/* harmony import */ var _english_heritage_e_property_e_property_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./english-heritage/e-property/e-property.component */ "./src/app/english-heritage/e-property/e-property.component.ts");
/* harmony import */ var _hha_h_property_h_property_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hha/h-property/h-property.component */ "./src/app/hha/h-property/h-property.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _services_national_trust_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/national-trust.service */ "./src/app/services/national-trust.service.ts");
/* harmony import */ var _services_english_heritage_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/english-heritage.service */ "./src/app/services/english-heritage.service.ts");
/* harmony import */ var _services_hha_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/hha.service */ "./src/app/services/hha.service.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _national_trust_national_trust_component__WEBPACK_IMPORTED_MODULE_7__["NationalTrustComponent"],
                _english_heritage_english_heritage_component__WEBPACK_IMPORTED_MODULE_8__["EnglishHeritageComponent"],
                _hha_hha_component__WEBPACK_IMPORTED_MODULE_9__["HhaComponent"],
                _national_trust_n_property_n_property_component__WEBPACK_IMPORTED_MODULE_10__["NPropertyComponent"],
                _english_heritage_e_property_e_property_component__WEBPACK_IMPORTED_MODULE_11__["EPropertyComponent"],
                _hha_h_property_h_property_component__WEBPACK_IMPORTED_MODULE_12__["HPropertyComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["NoopAnimationsModule"]
            ],
            providers: [_services_national_trust_service__WEBPACK_IMPORTED_MODULE_15__["NService"], _services_english_heritage_service__WEBPACK_IMPORTED_MODULE_16__["EService"], _services_hha_service__WEBPACK_IMPORTED_MODULE_17__["HService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/english-heritage/e-property/e-property.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/english-heritage/e-property/e-property.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2xpc2gtaGVyaXRhZ2UvZS1wcm9wZXJ0eS9lLXByb3BlcnR5LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/english-heritage/e-property/e-property.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/english-heritage/e-property/e-property.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mb-4\">\n  {{ eProperty.name }}\n</h5>\n<div class=\"row\">\n  <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\n    <p>Address</p>\n    <p class=\"ml-2 font-weight-light\">\n      {{ eProperty.address }}\n    </p>\n    <p>Website</p>\n    <p>\n      <a href=\"{{ eProperty.website }}\" \n        target=\"_blank\"\n        class=\"ml-2\">\n        {{ eProperty.website }}\n      </a>\n    </p>\n    <p>Phone</p>\n    <p class=\"ml-2 font-weight-light\">\n      {{ eProperty.phone }}\n    </p>\n  </div>\n  <div class=\"col-12 col-lg-6 order-1 order-lg-2\">\n    <img \n      src=\"{{ eProperty.imgUrl }}\" \n      alt=\"{{ eProperty.name }}\" \n      title=\"{{ eProperty.name }}\"\n      class=\"img-fluid\"\n      style=\"max-height: 20rem;\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/english-heritage/e-property/e-property.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/english-heritage/e-property/e-property.component.ts ***!
  \*********************************************************************/
/*! exports provided: EPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPropertyComponent", function() { return EPropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_english_heritage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/english-heritage.service */ "./src/app/services/english-heritage.service.ts");




var EPropertyComponent = /** @class */ (function () {
    function EPropertyComponent(eService, route, router) {
        this.eService = eService;
        this.route = route;
        this.router = router;
    }
    EPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.eProperty = this.eService.getProperty(id);
        this.route.params
            .subscribe(function (params) {
            _this.eProperty = _this.eService.getProperty(+params['id']);
        });
    };
    EPropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-e-property',
            template: __webpack_require__(/*! ./e-property.component.html */ "./src/app/english-heritage/e-property/e-property.component.html"),
            styles: [__webpack_require__(/*! ./e-property.component.css */ "./src/app/english-heritage/e-property/e-property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_english_heritage_service__WEBPACK_IMPORTED_MODULE_3__["EService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EPropertyComponent);
    return EPropertyComponent;
}());



/***/ }),

/***/ "./src/app/english-heritage/english-heritage.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/english-heritage/english-heritage.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VuZ2xpc2gtaGVyaXRhZ2UvZW5nbGlzaC1oZXJpdGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/english-heritage/english-heritage.component.html":
/*!******************************************************************!*\
  !*** ./src/app/english-heritage/english-heritage.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row justify-content-center\">\n    <div class=\"col col-md-5\">\n      <h4 class=\"my-5\">English Heritage Properties</h4>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center mb-2 shadow\"\n        *ngFor=\"let property of eProperties\">\n          <a \n            [routerLink]=\"['/english-heritage', property.id]\"\n            class=\"d-flex w-100 justify-content-between\">\n            <p>{{ property.name }}</p>\n            <img\n              style=\"height: 3rem; width: 5.5rem;\"\n              src=\"{{ property.imgUrl }}\"\n              alt=\"{{ property.name }}\" \n              title=\"{{ property.name }}\">\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col col-md-7\">\n      <h4 class=\"my-5\">Description</h4>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/english-heritage/english-heritage.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/english-heritage/english-heritage.component.ts ***!
  \****************************************************************/
/*! exports provided: EnglishHeritageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnglishHeritageComponent", function() { return EnglishHeritageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_english_heritage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/english-heritage.service */ "./src/app/services/english-heritage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EnglishHeritageComponent = /** @class */ (function () {
    function EnglishHeritageComponent(eService, router, route) {
        this.eService = eService;
        this.router = router;
        this.route = route;
        this.eProperties = [];
    }
    EnglishHeritageComponent.prototype.ngOnInit = function () {
        this.eProperties = this.eService.getEproperties();
    };
    EnglishHeritageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-english-heritage',
            template: __webpack_require__(/*! ./english-heritage.component.html */ "./src/app/english-heritage/english-heritage.component.html"),
            styles: [__webpack_require__(/*! ./english-heritage.component.css */ "./src/app/english-heritage/english-heritage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_english_heritage_service__WEBPACK_IMPORTED_MODULE_2__["EService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], EnglishHeritageComponent);
    return EnglishHeritageComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header class=\"shadow\">\n    <nav class=\"navbar\">\n      <ul class=\"nav\">\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">\n          <a routerLink=\"/\" class=\"nav-link\">Home</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\">\n          <a routerLink=\"/national-trust\" class=\"nav-link\">National Trust</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\">\n          <a routerLink=\"/english-heritage\" class=\"nav-link\">English Heritage</a>\n        </li>\n        <li class=\"nav-item\" role=\"presentation\" routerLinkActive=\"active\">\n          <a routerLink=\"/hha\" class=\"nav-link\">HHA</a>\n        </li>\n      </ul>\n    </nav>\n  </header>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/hha/h-property/h-property.component.css":
/*!*********************************************************!*\
  !*** ./src/app/hha/h-property/h-property.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hoYS9oLXByb3BlcnR5L2gtcHJvcGVydHkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/hha/h-property/h-property.component.html":
/*!**********************************************************!*\
  !*** ./src/app/hha/h-property/h-property.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mb-4\">\n  {{ hProperty.name }}\n</h5>\n<div class=\"row\">\n  <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\n    <p>Address</p>\n    <p class=\"ml-2 font-weight-light\">\n      {{ hProperty.address }}\n    </p>\n    <p>Website</p>\n    <p>\n      <a href=\"{{ hProperty.website }}\" \n        target=\"_blank\"\n        class=\"ml-2\">\n        {{ hProperty.website }}\n      </a>\n    </p>\n    <p>Phone</p>\n    <p class=\"ml-2 font-weight-light\">\n      {{ hProperty.email }}\n    </p>\n  </div>\n  <div class=\"col-12 col-lg-6 order-1 order-lg-2\">\n    <img \n      src=\"{{ hProperty.imgUrl }}\" \n      alt=\"{{ hProperty.name }}\" \n      title=\"{{ hProperty.name }}\" \n      class=\"img-fluid\"\n      style=\"max-height: 20rem;\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/hha/h-property/h-property.component.ts":
/*!********************************************************!*\
  !*** ./src/app/hha/h-property/h-property.component.ts ***!
  \********************************************************/
/*! exports provided: HPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HPropertyComponent", function() { return HPropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_hha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/hha.service */ "./src/app/services/hha.service.ts");




var HPropertyComponent = /** @class */ (function () {
    function HPropertyComponent(hService, route, router) {
        this.hService = hService;
        this.route = route;
        this.router = router;
    }
    HPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.hProperty = this.hService.getProperty(id);
        this.route.params
            .subscribe(function (params) {
            _this.hProperty = _this.hService.getProperty(+params['id']);
        });
    };
    HPropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-h-property',
            template: __webpack_require__(/*! ./h-property.component.html */ "./src/app/hha/h-property/h-property.component.html"),
            styles: [__webpack_require__(/*! ./h-property.component.css */ "./src/app/hha/h-property/h-property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_hha_service__WEBPACK_IMPORTED_MODULE_3__["HService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HPropertyComponent);
    return HPropertyComponent;
}());



/***/ }),

/***/ "./src/app/hha/hha.component.css":
/*!***************************************!*\
  !*** ./src/app/hha/hha.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hoYS9oaGEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/hha/hha.component.html":
/*!****************************************!*\
  !*** ./src/app/hha/hha.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"row justify-content-center\">\n    <div class=\"col col-md-5\">\n      <h4 class=\"my-5\">HHA Properties</h4>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center mb-2 shadow\"\n        *ngFor=\"let property of hProperties\">\n          <a \n            [routerLink]=\"['/hha', property.id]\"\n            class=\"d-flex w-100 justify-content-between\">\n            <p>{{ property.name }}</p>\n            <img\n              style=\"height: 3rem; width: 5.5rem;\"\n              src=\"{{ property.imgUrl }}\"\n              alt=\"{{ property.name }}\" \n              title=\"{{ property.name }}\">\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col col-md-7\">\n      <h4 class=\"my-5\">Description</h4>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/hha/hha.component.ts":
/*!**************************************!*\
  !*** ./src/app/hha/hha.component.ts ***!
  \**************************************/
/*! exports provided: HhaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HhaComponent", function() { return HhaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_hha_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/hha.service */ "./src/app/services/hha.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HhaComponent = /** @class */ (function () {
    function HhaComponent(hService, router, route) {
        this.hService = hService;
        this.router = router;
        this.route = route;
        this.hProperties = [];
    }
    HhaComponent.prototype.ngOnInit = function () {
        this.hProperties = this.hService.getHproperties();
    };
    HhaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hha',
            template: __webpack_require__(/*! ./hha.component.html */ "./src/app/hha/hha.component.html"),
            styles: [__webpack_require__(/*! ./hha.component.css */ "./src/app/hha/hha.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_hha_service__WEBPACK_IMPORTED_MODULE_2__["HService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], HhaComponent);
    return HhaComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-width-img {\r\n  height: 5rem;\r\n  width: 5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC13aWR0aC1pbWcge1xyXG4gIGhlaWdodDogNXJlbTtcclxuICB3aWR0aDogNXJlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\">\n  <iframe width=\"100%\" height=\"500\" scrolling=\"no\" frameborder=\"no\" src=\"https://fusiontables.google.com/embedviz?q=select+col5+from+1NjaK0gJGx-HWJ6-cffCsI6pDyWCYSUnYDr37WAiG&amp;viz=MAP&amp;h=false&amp;lat=51.9835888301689&amp;lng=-1.4302129312500256&amp;t=1&amp;z=8&amp;l=col5&amp;y=2&amp;tmplt=2&amp;hml=GEOCODABLE\"></iframe>\n</div> -->\n<div class=\"container\">\n  <!-- <hr> -->\n  <div class=\"card mb-4\">\n    <p class=\"card-header\">\n      There are three major non-profit organizations in the UK.\n      Their main purpose is to look after historic properties for the next generations.\n    </p>\n  </div>\n  <ul \n    class=\"list-group\">\n    <li class=\"list-group-item shadow mb-3 d-flex\">\n      <div class=\"flex-width-img mr-2\">\n        <img src=\"https://www.sisley.co.uk/wp-content/uploads/2017/01/National-Trust-logo.jpg\" alt=\"National Trust logo\" class=\"img-fluid\">\n      </div>\n      <div class=\"div-width-container\">\n        <a\n          routerLink=\"/national-trust\"\n          class=\"list-link\">National Trust (NT)\n        </a>\n        <p>With over 500 properties.</p>\n        <p>Mainly castles, houses, buildings and gardens.</p>\n      </div>\n    </li>\n\n    <li class=\"list-group-item shadow mb-3 d-flex\">\n      <div class=\"flex-width-img mr-2\">\n        <img src=\"http://whatsgoodtodo.co.uk/wp-content/uploads/2015/04/EnglishHeritage.png\" alt=\"English Heritage logo\" class=\"img-fluid\">\n      </div>\n      <div class=\"div-width-container\">\n        <a\n          routerLink=\"/english-heritage\"\n          class=\"list-link\">English Heritage (EH)\n        </a>\n        <p>With over 450 properties.</p>\n        <p>Mainly castles, ruins, houses and buildings.</p>\n      </div>\n    </li>\n\n    <li class=\"list-group-item shadow mb-3 d-flex \">\n      <div class=\"flex-width-img mr-2\">\n        <img src=\"http://www.sherlox.org/JDD/images/logos/HHA_logo.gif\" alt=\"National Trust logo\" class=\"img-fluid\">\n      </div>\n      <div class=\"div-width-container\">\n        <a\n          routerLink=\"/hha\"\n          class=\"list-link\">Historic Houses Association (HHA)\n        </a>\n        <p>With over 1600 buildings. 500 of them are available for public viewing.</p>\n        <p>Mainly private houses and gardens.</p>\n      </div>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/models/eProperty.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/eProperty.model.ts ***!
  \*******************************************/
/*! exports provided: eProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eProperty", function() { return eProperty; });
var eProperty = /** @class */ (function () {
    function eProperty(id, name, imgUrl, address, website, phone) {
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.address = address;
        this.website = website;
        this.phone = phone;
    }
    return eProperty;
}());



/***/ }),

/***/ "./src/app/models/hProperty.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/hProperty.model.ts ***!
  \*******************************************/
/*! exports provided: hProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hProperty", function() { return hProperty; });
var hProperty = /** @class */ (function () {
    function hProperty(id, name, imgUrl, address, website, email) {
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.address = address;
        this.website = website;
        this.email = email;
    }
    return hProperty;
}());



/***/ }),

/***/ "./src/app/models/nProperty.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/nProperty.model.ts ***!
  \*******************************************/
/*! exports provided: nProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nProperty", function() { return nProperty; });
var nProperty = /** @class */ (function () {
    function nProperty(id, name, imgUrl, address, website, email) {
        this.id = id;
        this.name = name;
        this.imgUrl = imgUrl;
        this.address = address;
        this.website = website;
        this.email = email;
    }
    return nProperty;
}());



/***/ }),

/***/ "./src/app/national-trust/n-property/n-property.component.css":
/*!********************************************************************!*\
  !*** ./src/app/national-trust/n-property/n-property.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdGlvbmFsLXRydXN0L24tcHJvcGVydHkvbi1wcm9wZXJ0eS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/national-trust/n-property/n-property.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/national-trust/n-property/n-property.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mb-4\">\n  {{ nProperty.name }}\n</h5>\n<div class=\"row\">\n  <div class=\"col-12 col-lg-6 order-2 order-lg-1\">\n    <p>Address</p>\n    <p class=\"ml-2 font-weight-light\">\n      {{ nProperty.address }}\n    </p>\n    <p>Website</p>\n    <p>\n      <a href=\"{{ nProperty.website }}\" \n        target=\"_blank\"\n        class=\"ml-2\">\n        {{ nProperty.website }}\n      </a>\n    </p>\n    <p>Email</p>\n    <p class=\"ml-2 font-weight-light\">\n      {{ nProperty.email }}\n    </p>\n  </div>\n  <div class=\"col-12 col-lg-6 order-1 order-lg-2\">\n    <img \n      src=\"{{ nProperty.imgUrl }}\" \n      alt=\"{{ nProperty.name }}\" \n      title=\"{{ nProperty.name }}\"\n      class=\"img-fluid\"\n      style=\"max-height: 20rem;\">\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/national-trust/n-property/n-property.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/national-trust/n-property/n-property.component.ts ***!
  \*******************************************************************/
/*! exports provided: NPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPropertyComponent", function() { return NPropertyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_national_trust_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/national-trust.service */ "./src/app/services/national-trust.service.ts");




var NPropertyComponent = /** @class */ (function () {
    function NPropertyComponent(nService, route, router) {
        this.nService = nService;
        this.route = route;
        this.router = router;
    }
    NPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.nProperty = this.nService.getProperty(id);
        this.route.params
            .subscribe(function (params) {
            _this.nProperty = _this.nService.getProperty(+params['id']);
        });
    };
    NPropertyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-n-property',
            template: __webpack_require__(/*! ./n-property.component.html */ "./src/app/national-trust/n-property/n-property.component.html"),
            styles: [__webpack_require__(/*! ./n-property.component.css */ "./src/app/national-trust/n-property/n-property.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_national_trust_service__WEBPACK_IMPORTED_MODULE_3__["NService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NPropertyComponent);
    return NPropertyComponent;
}());



/***/ }),

/***/ "./src/app/national-trust/national-trust.component.css":
/*!*************************************************************!*\
  !*** ./src/app/national-trust/national-trust.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdGlvbmFsLXRydXN0L25hdGlvbmFsLXRydXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/national-trust/national-trust.component.html":
/*!**************************************************************!*\
  !*** ./src/app/national-trust/national-trust.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <!-- DODAC KONTENER PO PRAWEJ I PO LEWEJ -->\n  <div class=\"row justify-content-center\">\n    <div class=\"col col-md-5\">\n      <h4 class=\"my-5\">National Trust Properties</h4>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item d-flex justify-content-between align-items-center mb-2 shadow\"\n        *ngFor=\"let property of nProperties\">\n          <a \n            [routerLink]=\"['/national-trust', property.id]\"\n            class=\"d-flex w-100 justify-content-between\">\n            <p>{{ property.name }}</p>\n            <img\n              style=\"height: 3rem; width: 5.5rem;\"\n              src=\"{{ property.imgUrl }}\"\n              alt=\"{{ property.name }}\" \n              title=\"{{ property.name }}\">\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col col-md-7\">\n      <h4 class=\"my-5\">Description</h4>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/national-trust/national-trust.component.ts":
/*!************************************************************!*\
  !*** ./src/app/national-trust/national-trust.component.ts ***!
  \************************************************************/
/*! exports provided: NationalTrustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NationalTrustComponent", function() { return NationalTrustComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_national_trust_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/national-trust.service */ "./src/app/services/national-trust.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NationalTrustComponent = /** @class */ (function () {
    function NationalTrustComponent(nService, router, route) {
        this.nService = nService;
        this.router = router;
        this.route = route;
        this.nProperties = [];
    }
    NationalTrustComponent.prototype.ngOnInit = function () {
        this.nProperties = this.nService.getNproperties();
    };
    NationalTrustComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-national-trust',
            template: __webpack_require__(/*! ./national-trust.component.html */ "./src/app/national-trust/national-trust.component.html"),
            styles: [__webpack_require__(/*! ./national-trust.component.css */ "./src/app/national-trust/national-trust.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_national_trust_service__WEBPACK_IMPORTED_MODULE_2__["NService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NationalTrustComponent);
    return NationalTrustComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  No page found like this!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/services/english-heritage.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/english-heritage.service.ts ***!
  \******************************************************/
/*! exports provided: EService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EService", function() { return EService; });
/* harmony import */ var _models_eProperty_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/eProperty.model */ "./src/app/models/eProperty.model.ts");

var EService = /** @class */ (function () {
    function EService() {
        this.eProperties = [
            new _models_eProperty_model__WEBPACK_IMPORTED_MODULE_0__["eProperty"](1, 'Tintagel Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/04/Tintagel-Castle-003-Z.jpg', 'Castle Road, Tintagel, Cornwall, PL34 0HE', 'http://www.english-heritage.org.uk/visit/places/tintagel-castle/', '01840 770328'),
            new _models_eProperty_model__WEBPACK_IMPORTED_MODULE_0__["eProperty"](2, 'Dover Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/04/Dover-Castle-002-Z.jpg', 'Castle Hill, Dover, Kent, CT16 1HU', 'http://www.english-heritage.org.uk/visit/places/dover-castle/', '01304 211 067'),
            new _models_eProperty_model__WEBPACK_IMPORTED_MODULE_0__["eProperty"](3, 'Rievaulx Abbey', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/03/Rievaulx-Abbey-003-Z.jpg', 'Rievaulx Bank, Rievaulx, Helmsley YO62 5LB', 'http://www.english-heritage.org.uk/visit/places/rievaulx-abbey/', '01439 798228'),
            new _models_eProperty_model__WEBPACK_IMPORTED_MODULE_0__["eProperty"](4, 'Kenilworth Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/03/Kenilworth-Castle-004-Z.jpg', 'Castle Green, Off Castle Road, Kenilworth, Warwickshire CV8 1NG', 'http://www.english-heritage.org.uk/visit/places/kenilworth-castle/', '01926 852078'),
            new _models_eProperty_model__WEBPACK_IMPORTED_MODULE_0__["eProperty"](5, 'Lindisfarne Priory', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/09/Lindisfarne-Priory-001-Z.jpg', 'Holy Island, Berwick-Upon-Tweed, Northumberland, TD15 2RX', 'http://www.english-heritage.org.uk/visit/places/lindisfarne-priory/', '0128 938 9200'),
            new _models_eProperty_model__WEBPACK_IMPORTED_MODULE_0__["eProperty"](6, 'Kirby Hall', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/04/Kirby-Hall-001-Z.jpg', 'BOff Kirby Lane, Corby, Northamptonshire, NN17 3EN', 'http://www.english-heritage.org.uk/visit/places/kirby-hall/', '01536 203230'),
        ];
    }
    EService.prototype.getEproperties = function () {
        // console.log(eProperty);
        return this.eProperties;
    };
    EService.prototype.getProperty = function (id) {
        return this.eProperties.find(function (el) { return el.id === id; });
    };
    return EService;
}());



/***/ }),

/***/ "./src/app/services/hha.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/hha.service.ts ***!
  \*****************************************/
/*! exports provided: HService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HService", function() { return HService; });
/* harmony import */ var _models_hProperty_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/hProperty.model */ "./src/app/models/hProperty.model.ts");

var HService = /** @class */ (function () {
    function HService() {
        this.hProperties = [
            new _models_hProperty_model__WEBPACK_IMPORTED_MODULE_0__["hProperty"](1, 'Lowther Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/02/Lowther-Castle-003-Z.jpg', 'Lowther, Penrith CA10 2HH', 'http://www.lowthercastle.org/', 'info@lowthercastle.org'),
            new _models_hProperty_model__WEBPACK_IMPORTED_MODULE_0__["hProperty"](2, 'Mapperton Gardens', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/10/Mapperton-Gardens-001-Z.jpg', 'Beaminster, Dorset, DT8 3NR', 'http://www.hha.org.uk/Property/1128/Mapperton', 'office@mapperton.com'),
            new _models_hProperty_model__WEBPACK_IMPORTED_MODULE_0__["hProperty"](3, 'Leeds Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/10/Leeds-Castle-001-Z.jpg', 'Maidstone, Kent, ME17 1PL', 'http://www.hha.org.uk/Property/736/Leeds-Castle', 'enquiries@leeds-castle.co.uk'),
            new _models_hProperty_model__WEBPACK_IMPORTED_MODULE_0__["hProperty"](4, 'Alnwick Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/11/Alnwick-Castle-004-Z.jpg', 'Alnwick, Northumberland, NE66 1NQ', 'http://www.hha.org.uk/Property/615/Alnwick-Castle', 'info@alnwickcastle.com'),
            new _models_hProperty_model__WEBPACK_IMPORTED_MODULE_0__["hProperty"](5, 'Eilean Donan Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/10/Eilean-Donan-Castle-003-Z.jpg', 'Eilean Castle, Scotland, IV40 8DX', 'http://www.hha.org.uk/Property/1634/Eilean-Donan-Castle', 'eileandonan@btconnect.com'),
            new _models_hProperty_model__WEBPACK_IMPORTED_MODULE_0__["hProperty"](6, 'Inveraray Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/10/Inveraray-Castle-003-Z.jpg', 'Inveraray, Argyll, Scotland, PA328XE', 'http://www.hha.org.uk/Property/1509/Inveraray-Castle-and-Garden', '44 1499 302203'),
        ];
    }
    HService.prototype.getHproperties = function () {
        // console.log(hProperty);
        return this.hProperties;
    };
    HService.prototype.getProperty = function (id) {
        return this.hProperties.find(function (el) { return el.id === id; });
    };
    return HService;
}());



/***/ }),

/***/ "./src/app/services/national-trust.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/national-trust.service.ts ***!
  \****************************************************/
/*! exports provided: NService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NService", function() { return NService; });
/* harmony import */ var _models_nProperty_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/nProperty.model */ "./src/app/models/nProperty.model.ts");

var NService = /** @class */ (function () {
    function NService() {
        this.nProperties = [
            new _models_nProperty_model__WEBPACK_IMPORTED_MODULE_0__["nProperty"](1, 'Waddesdon Manor', 'http://www.ciekaweuk.pl/wp-content/uploads/2017/01/Waddesdon-Manor-003-Z.jpg', 'Waddesdon, Aylesbury, Buckinghamshire, England, HP18 OJH', 'https://www.nationaltrust.org.uk/waddesdon-manor', 'waddesdonmanor@nationaltrust.org.uk'),
            new _models_nProperty_model__WEBPACK_IMPORTED_MODULE_0__["nProperty"](2, 'St Michael\'s Mount', 'http://www.ciekaweuk.pl/wp-content/uploads/2016/09/St-michaels-mount-P-004-Z.jpg', 'Marazion, Cornwall, TR17 0HS', 'https://www.nationaltrust.org.uk/st-michaels-mount', 'stmichaelsmount@nationaltrust.org.uk'),
            new _models_nProperty_model__WEBPACK_IMPORTED_MODULE_0__["nProperty"](3, 'Glendurgan Garden', 'http://www.ciekaweuk.pl/wp-content/uploads/2016/10/Glendurgan-Garden-001-Z.jpg', 'Durgan, Mawnan Smith, Falmouth, Cornwall, England, TR11 5JZ', 'https://www.nationaltrust.org.uk/glendurgan-garden', 'glendurgan@nationaltrust.org.uk'),
            new _models_nProperty_model__WEBPACK_IMPORTED_MODULE_0__["nProperty"](4, 'Bodiam Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2016/09/Bodiam-Castle-009-Z.jpg', 'Bodiam, Robertsbridge, East Sussex, England, TN32 5UA', 'https://www.nationaltrust.org.uk/bodiam-castle', 'bodiamcastle@nationaltrust.org.uk '),
            new _models_nProperty_model__WEBPACK_IMPORTED_MODULE_0__["nProperty"](5, 'Dunster Castle', 'http://www.ciekaweuk.pl/wp-content/uploads/2016/11/Dunster-Castle-001-Z.jpg', 'Dunster, Minehead, Somerset, England, TA24 6SL', 'https://www.nationaltrust.org.uk/dunster-castle', 'dunstercastle@nationaltrust.org.uk'),
            new _models_nProperty_model__WEBPACK_IMPORTED_MODULE_0__["nProperty"](6, 'Hadrian\'s Wall and Housesteads Roman Fort', 'http://www.ciekaweuk.pl/wp-content/uploads/2016/10/Housesteads-Roman-Fort-002-Z.jpg', 'Bardon Mill, Hexham, Northumberland, NE47 6NN', 'https://www.nationaltrust.org.uk/hadrians-wall-and-housesteads-fort', 'housesteads@nationaltrust.org.uk'),
        ];
    }
    NService.prototype.getNproperties = function () {
        // console.log(nProperty);
        return this.nProperties;
    };
    NService.prototype.getProperty = function (id) {
        return this.nProperties.find(function (el) { return el.id === id; });
    };
    return NService;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projekty WWW\Cwiczeniowe\Angular\angular-links\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
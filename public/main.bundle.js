webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"footer\">\n  <div class=\"container\">\n      <p class=\"text-muted\">&copy; Copyright 2017 | kaXet app</p>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'kaXet';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_user_login_login_component__ = __webpack_require__("../../../../../src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__ = __webpack_require__("../../../../../src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_password_password_component__ = __webpack_require__("../../../../../src/app/components/user/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_user_logout_component__ = __webpack_require__("../../../../../src/app/components/user/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_artist_editartist_editartist_component__ = __webpack_require__("../../../../../src/app/components/artist/editartist/editartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_artist_listartist_listartist_component__ = __webpack_require__("../../../../../src/app/components/artist/listartist/listartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_artist_viewartist_viewartist_component__ = __webpack_require__("../../../../../src/app/components/artist/viewartist/viewartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_artist_addartist_addartist_component__ = __webpack_require__("../../../../../src/app/components/artist/addartist/addartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_artist_editartistphoto_editartistphoto_component__ = __webpack_require__("../../../../../src/app/components/artist/editartistphoto/editartistphoto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_album_addalbum_addalbum_component__ = __webpack_require__("../../../../../src/app/components/album/addalbum/addalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_album_listalbum_listalbum_component__ = __webpack_require__("../../../../../src/app/components/album/listalbum/listalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_album_viewalbum_viewalbum_component__ = __webpack_require__("../../../../../src/app/components/album/viewalbum/viewalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_album_editalbum_editalbum_component__ = __webpack_require__("../../../../../src/app/components/album/editalbum/editalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_album_editalbumphoto_editalbumphoto_component__ = __webpack_require__("../../../../../src/app/components/album/editalbumphoto/editalbumphoto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_song_addsong_addsong_component__ = __webpack_require__("../../../../../src/app/components/song/addsong/addsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_song_listsong_listsong_component__ = __webpack_require__("../../../../../src/app/components/song/listsong/listsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_song_editsongfiles_editsongfiles_component__ = __webpack_require__("../../../../../src/app/components/song/editsongfiles/editsongfiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_song_viewsong_viewsong_component__ = __webpack_require__("../../../../../src/app/components/song/viewsong/viewsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_song_editsong_editsong_component__ = __webpack_require__("../../../../../src/app/components/song/editsong/editsong.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/* Services Modules */






/* common Modules */


























var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_20__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_19__components_user_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'password', component: __WEBPACK_IMPORTED_MODULE_17__components_user_password_password_component__["a" /* PasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addartist', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_25__components_artist_addartist_addartist_component__["a" /* AddartistComponent */] },
    { path: 'editartist/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_22__components_artist_editartist_editartist_component__["a" /* EditartistComponent */] },
    { path: 'listartist', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_23__components_artist_listartist_listartist_component__["a" /* ListartistComponent */] },
    { path: 'editartistphoto/:id', component: __WEBPACK_IMPORTED_MODULE_26__components_artist_editartistphoto_editartistphoto_component__["a" /* EditartistphotoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'viewartist/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_24__components_artist_viewartist_viewartist_component__["a" /* ViewartistComponent */] },
    { path: 'addalbum', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_27__components_album_addalbum_addalbum_component__["a" /* AddalbumComponent */] },
    { path: 'listalbum', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_28__components_album_listalbum_listalbum_component__["a" /* ListalbumComponent */] },
    { path: 'viewalbum/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_29__components_album_viewalbum_viewalbum_component__["a" /* ViewalbumComponent */] },
    { path: 'editalbum/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_30__components_album_editalbum_editalbum_component__["a" /* EditalbumComponent */] },
    { path: 'editalbumphoto/:id', component: __WEBPACK_IMPORTED_MODULE_31__components_album_editalbumphoto_editalbumphoto_component__["a" /* EditalbumphotoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addsong', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_32__components_song_addsong_addsong_component__["a" /* AddsongComponent */] },
    { path: 'listsong', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_33__components_song_listsong_listsong_component__["a" /* ListsongComponent */] },
    { path: 'editsongfiles/:id', component: __WEBPACK_IMPORTED_MODULE_34__components_song_editsongfiles_editsongfiles_component__["a" /* EditsongfilesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'viewsong/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_35__components_song_viewsong_viewsong_component__["a" /* ViewsongComponent */] },
    { path: 'editsong/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_36__components_song_editsong_editsong_component__["a" /* EditsongComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_password_password_component__["a" /* PasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_user_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_artist_editartist_editartist_component__["a" /* EditartistComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_artist_listartist_listartist_component__["a" /* ListartistComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_artist_viewartist_viewartist_component__["a" /* ViewartistComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_artist_addartist_addartist_component__["a" /* AddartistComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_artist_editartistphoto_editartistphoto_component__["a" /* EditartistphotoComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_album_addalbum_addalbum_component__["a" /* AddalbumComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_album_listalbum_listalbum_component__["a" /* ListalbumComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_album_viewalbum_viewalbum_component__["a" /* ViewalbumComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_album_editalbum_editalbum_component__["a" /* EditalbumComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_album_editalbumphoto_editalbumphoto_component__["a" /* EditalbumphotoComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_song_addsong_addsong_component__["a" /* AddsongComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_song_listsong_listsong_component__["a" /* ListsongComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_song_editsongfiles_editsongfiles_component__["a" /* EditsongfilesComponent */],
            __WEBPACK_IMPORTED_MODULE_35__components_song_viewsong_viewsong_component__["a" /* ViewsongComponent */],
            __WEBPACK_IMPORTED_MODULE_36__components_song_editsong_editsong_component__["a" /* EditsongComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_9__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_10__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_12__angular_common__["d" /* DatePipe */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/common/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastrService = (function () {
    function ToastrService() {
    }
    ToastrService.prototype.success = function (message, title) {
        toastr.success(message, title);
    };
    ToastrService.prototype.info = function (message, title) {
        toastr.info(message, title);
    };
    ToastrService.prototype.warning = function (message, title) {
        toastr.warning(message, title);
    };
    ToastrService.prototype.error = function (message, title) {
        toastr.error(message, title);
    };
    return ToastrService;
}());
ToastrService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ToastrService);

//# sourceMappingURL=toastr.service.js.map

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n    <h1></h1>\n</div>\n  <div class=\"jumbotron\">\n    <img src=\"../../../cassetteicon.png\">\n      <h2>kaXet v1.0</h2>\n      <p>An app for inspiring and commercial music</p>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/addalbum/addalbum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/addalbum/addalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Add Album</h3>\n  </div>\n\n  <form [formGroup]=\"addAlbumForm\" (ngSubmit)=\"addAlbum(addAlbumForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('artistid').invalid && addAlbumForm.get('artistid').dirty}\">\n      <label for=\"artistid\" class=\"col-sm-2 control-label\">Artist Id <sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n        <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n        <select class=\"form-control\" [formControl]=\"artistid\">\n            <option ng-selected=\"true\" value=\"\">Select the artist</option>\n            <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n        </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('artistid').dirty && addAlbumForm.get('artistid').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('artistid').errors.required\">\n              Please enter the artist\n          </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumname').invalid && addAlbumForm.get('albumname').dirty}\">\n        <label for=\"albumname\" class=\"col-sm-2 control-label\">Album Name <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"albumname\" id=\"albumname\" placeholder=\"Album Name\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('albumname').dirty && addAlbumForm.get('albumname').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumname').errors.required\">\n                Please enter the album name\n            </span>\n        </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumyear').invalid && addAlbumForm.get('albumyear').dirty}\">\n      <label for=\"albumyear\" class=\"col-sm-2 control-label\">Album Year <sup>*</sup></label>\n      <div class=\"input-group col-sm-6\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n          <input type=\"text\" class=\"form-control\" [formControl]=\"albumyear\" id=\"albumyear\" placeholder=\"Album Year\">\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('albumyear').dirty && addAlbumForm.get('albumyear').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumyear').errors.required\">\n              Please enter the album year\n          </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumgenre').invalid && addAlbumForm.get('albumgenre').dirty}\">\n      <label for=\"albumgenre\" class=\"col-sm-2 control-label\">Genre</label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n          <select class=\"form-control\" [formControl]=\"albumgenre\">\n              <option ng-selected=\"true\" value=\"\">Select the genre</option>\n              <option *ngFor=\"let a of genre\" >{{a}}</option>\n          </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('albumgenre').dirty && addAlbumForm.get('albumgenre').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumgenre').errors.required\">\n              Please select album genre\n          </span>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumprice').invalid && addAlbumForm.get('albumprice').dirty}\">\n      <label for=\"albumprice\" class=\"col-sm-2 control-label\">Price</label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\">Rp</div>\n          <input type=\"number\" class=\"form-control\" id=\"albumprice\" [formControl]=\"albumprice\" placeholder=\"Album Price\">\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('albumprice').dirty && addAlbumForm.get('albumprice').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumprice').errors.required\">\n              Please enter price\n          </span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumprice').errors.pattern\">\n              Please enter a valid amount\n          </span>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumimage').invalid && addAlbumForm.get('albumimage').dirty}\">\n        <label for=\"albumimage\" class=\"col-sm-2 control-label\">Album Photo</label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n            <input type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"albumimage\" id=\"albumimage\" placeholder=\"Album image\">\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\"></label>\n        <div class=\"col-sm-5\">\n            <button type=\"submit\" [disabled]=\"addAlbumForm.invalid\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n        </div>\n        <div class=\"col-sm-5\" style=\"text-align:right\">\n            <sup>*</sup> required\n        </div>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/album/addalbum/addalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddalbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddalbumComponent = (function () {
    function AddalbumComponent(fb, authService, artistService, albumService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.genre = ['Alternative', 'Blues', 'Children', 'Classical', 'Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop', 'Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age', 'Pop', 'RnB', 'Reggae', 'Rock', 'Soundtrack', 'Vocal', 'Others'];
        this.filesToUpload = [];
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumprice = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
    }
    AddalbumComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.getArtistList(this.userObj.userid);
        this.albumid = '';
        this.addAlbumForm = this.fb.group({
            artistid: this.artistid,
            albumname: this.albumname,
            albumyear: this.albumyear,
            albumgenre: this.albumgenre,
            albumprice: this.albumprice,
            albumimage: this.filesToUpload,
            albumphotopath: this.albumphotopath,
            albumphotoname: this.albumphotoname
        });
    };
    AddalbumComponent.prototype.getArtistList = function (id) {
        var _this = this;
        this.artistService.getArtistList(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.artistlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.artistlist = [{ _id: '', artistname: 'Error artist list' }];
                }
            }
        });
    };
    AddalbumComponent.prototype.addAlbum = function (formdata) {
        var _this = this;
        if (this.addAlbumForm.dirty && this.addAlbumForm.valid) {
            var files = this.filesToUpload;
            var theForm_1 = this.addAlbumForm.value;
            var lformData = new FormData();
            console.log('Ini file: ' + files[0]['name']);
            lformData.append('albumimage', files[0], files[0]['name']);
            console.log(lformData.getAll('albumimage'));
            console.dir(theForm_1);
            this.albumService.uploadAlbumphoto(lformData)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.toastr.error(data.message);
                }
                else {
                    theForm_1.albumphotopath = data.filedata.albumphotopath;
                    theForm_1.albumphotoname = data.filedata.albumphotoname;
                    theForm_1.status = 'active';
                    console.log('Ini file path: ' + theForm_1.albumphotopath);
                    if (_this.albumid !== '') {
                        theForm_1.albumid = _this.albumid;
                    }
                    _this.albumService.saveAlbum(_this.userObj.userid, theForm_1.artistid, theForm_1)
                        .subscribe(function (data) {
                        if (data.success === false) {
                            _this.toastr.error(data.message);
                        }
                        else {
                            _this.toastr.success(data.message);
                            _this.router.navigate(['report']);
                        }
                        _this.addAlbumForm.reset();
                    });
                }
            });
        }
    };
    AddalbumComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('content file: ' + this.filesToUpload);
    };
    return AddalbumComponent;
}());
AddalbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-addalbum',
        template: __webpack_require__("../../../../../src/app/components/album/addalbum/addalbum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/addalbum/addalbum.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _h || Object])
], AddalbumComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=addalbum.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/editalbum/editalbum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/editalbum/editalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Edit Album</h3>\n    </div>\n    <form [formGroup]=\"albumForm\" (ngSubmit)=\"saveAlbum(albumForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('albumname').invalid && albumForm.get('albumname').dirty}\">\n            <label for=\"albumname\" class=\"col-sm-2 control-label\">Album Name</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <input type=\"text\" class=\"form-control\" id=\"albumname\" [formControl]=\"albumname\" placeholder=\"Album Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('albumname').dirty && albumForm.get('albumname').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your {{ userObj.username }} album name</span>\n            </div>\n        </div>\n        \n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('artistid').invalid && albumForm.get('artistid').dirty}\">\n            <label for=\"artistid\" class=\"col-sm-2 control-label\">Artist</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"artistid\">\n                    <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('artistid').dirty && albumForm.get('artistid').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('artistid').errors.required\">\n                    Please select artist status\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('albumyear').invalid && albumForm.get('albumyear').dirty}\">\n            <label for=\"albumyear\" class=\"col-sm-2 control-label\">Album Year</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <input type=\"text\" class=\"form-control\" id=\"albumyear\" [formControl]=\"albumyear\" placeholder=\"Album Year\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('albumyear').dirty && albumForm.get('albumyear').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter album year</span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('albumgenre').invalid && albumForm.get('albumgenre').dirty}\">\n            <label for=\"albumgenre\" class=\"col-sm-2 control-label\">Album Genre</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"albumgenre\">\n                    <option *ngFor=\"let g of genre\" >{{g}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('albumgenre').dirty && albumForm.get('albumgenre').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('albumgenre').errors.required\">\n                    Please select album genre\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('albumprice').invalid && albumForm.get('albumprice').dirty}\">\n            <label for=\"albumprice\" class=\"col-sm-2 control-label\">Price</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">Rp</div>\n                <input type=\"number\" class=\"form-control\" id=\"albumprice\" [formControl]=\"albumprice\" placeholder=\"Enter price\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('albumprice').dirty && albumForm.get('albumprice').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('albumprice').errors.required\">\n                    Please enter price\n                </span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('albumprice').errors.pattern\">\n                    Please enter a valid amount\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('status').invalid && albumForm.get('status').dirty}\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"status\">\n                    <option *ngFor=\"let a of sts\" >{{a}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('status').dirty && albumForm.get('status').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('status').errors.required\">\n                    Please select album status\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"submit\" [disabled]=\"albumForm.invalid\" class=\"btn btn-primary\">{{ btnLbl }}</button>\n                <button type=\"reset\" class=\"btn btn-default\" (click)=\"onBack()\">Back</button>\n            </div>\n        </div>\n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/album/editalbum/editalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditalbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditalbumComponent = (function () {
    function EditalbumComponent(fb, authService, artistService, albumService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.sts = ['active', 'inactive'];
        this.genre = ['Alternative', 'Blues', 'Children', 'Classical', 'Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop', 'Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age', 'Pop', 'RnB', 'Reggae', 'Rock', 'Soundtrack', 'Vocal', 'Others'];
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumprice = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
    }
    EditalbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.albumid = params['id'];
            _this.getAlbum(_this.albumid);
            _this.btnLbl = "Update";
        });
        this.userObj = this.authService.currentUser;
        this.getArtistList(this.userObj.userid);
        this.albumForm = this.fb.group({
            artistid: this.artistid,
            albumname: this.albumname,
            albumyear: this.albumyear,
            albumgenre: this.albumgenre,
            albumprice: this.albumprice,
            status: this.status
        });
    };
    EditalbumComponent.prototype.getArtistList = function (id) {
        var _this = this;
        this.artistService.getArtistList(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.artistlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.artistlist = [{ _id: '', artistname: 'Error artist list' }];
                }
            }
        });
    };
    EditalbumComponent.prototype.getAlbum = function (id) {
        var _this = this;
        this.albumService.getAlbum(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Album id is incorrect in the URL');
                    _this.router.navigate(['listalbum']);
                }
            }
        });
    };
    EditalbumComponent.prototype.populateForm = function (data) {
        this.albumForm.patchValue({
            artistid: data.artistid,
            albumname: data.albumname,
            albumyear: data.albumyear,
            albumgenre: data.albumgenre,
            albumprice: data.albumprice,
            status: data.status
        });
    };
    EditalbumComponent.prototype.saveAlbum = function (formdata) {
        var _this = this;
        if (this.albumForm.valid) {
            var theForm = this.albumForm.value;
            if (this.albumid !== '') {
                theForm.albumid = this.albumid;
            }
            this.albumService.saveAlbum(this.userObj.userid, theForm.artistid, theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                }
                if (!_this.albumid) {
                    _this.albumForm.reset();
                }
            });
        }
    };
    EditalbumComponent.prototype.onBack = function () {
        this.router.navigate(['/listalbum'], { preserveQueryParams: true });
    };
    return EditalbumComponent;
}());
EditalbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editalbum',
        template: __webpack_require__("../../../../../src/app/components/album/editalbum/editalbum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/editalbum/editalbum.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _h || Object])
], EditalbumComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=editalbum.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/editalbumphoto/editalbumphoto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/editalbumphoto/editalbumphoto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1>Change Photo</h1>\n    </div>\n  \n    <form [formGroup]=\"albumForm\" (ngSubmit)=\"updatePhoto(albumForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n\n        <div class=\"col-lg-6 col-sm-6 col-12\">\n            <label for=\"albumimage\" class=\"col-sm-3 control-label\"></label>\n            <img src=\"{{ this.displayImg }}\" width=\"170\" height=\"170\">\n            <br><br>\n            <div class=\"input-group\">\n                <label class=\"input-group-btn\">\n                    <span class=\"btn btn-primary\">\n                        Browse&hellip; <input type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"albumimage\" id=\"albumimage\" style=\"display:none\">\n                    </span>\n                </label>\n                <input type=\"text\" class=\"form-control\" value=\"{{ this.newfile }}\">  \n              </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">     </label>\n            <div class=\"col-sm-10\">\n                <br>\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/album/editalbumphoto/editalbumphoto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditalbumphotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditalbumphotoComponent = (function () {
    function EditalbumphotoComponent(fb, authService, albumService, route, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.albumService = albumService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.filesToUpload = [];
        this.albumphotopath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.albumphotoname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
    }
    EditalbumphotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.albumForm = this.fb.group({
            albumphotopath: this.albumphotopath,
            albumphotoname: this.albumphotoname
        });
        this.route.params.subscribe(function (params) {
            _this.albumid = params['id'];
            _this.getAlbum(_this.albumid);
        });
    };
    EditalbumphotoComponent.prototype.getAlbum = function (id) {
        var _this = this;
        this.albumService.getAlbum(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.album = data.data[0];
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Album id is incorrect in the URL');
                    _this.router.navigate(['listalbum']);
                }
            }
        });
    };
    EditalbumphotoComponent.prototype.populateForm = function (data) {
        this.deletedFilename = this.album.albumphotoname;
        this.displayImg = this.album.albumphotopath;
        this.albumForm.patchValue({
            albumphotopath: data.albumphotopath,
            albumphotoname: data.albumphotoname
        });
    };
    EditalbumphotoComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.newfile = this.filesToUpload[0]['name'];
        console.log('content file: ' + this.filesToUpload);
        this.uploadNewPhoto(this.filesToUpload);
    };
    EditalbumphotoComponent.prototype.uploadNewPhoto = function (newFileData) {
        var _this = this;
        var files = newFileData;
        var lformData = new FormData();
        lformData.append('albumimage', files[0], files[0]['name']);
        this.albumService.uploadAlbumphoto(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.toastr.error(data.message);
            }
            else {
                _this.displayImg = data.filedata.albumphotopath;
                var payloadData_1 = _this.albumForm.value;
                _this.albumService.deleteAlbumPhoto(payloadData_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        //this.toastr.error(data.message);
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        console.log('File deleted - ' + payloadData_1.albumphotoname);
                    }
                });
                _this.albumForm.value.albumphotopath = data.filedata.albumphotopath;
                _this.albumForm.value.albumphotoname = data.filedata.albumphotoname;
                console.log('Update database photo - ' + _this.displayImg);
                _this.albumService.updateAlbumphoto(_this.albumid, _this.albumForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        console.log('Success update database photo - ' + _this.displayImg);
                        _this.toastr.success(data.message);
                    }
                });
            }
        });
    };
    EditalbumphotoComponent.prototype.onBack = function () {
        this.router.navigate(['/listalbum'], { preserveQueryParams: true });
    };
    return EditalbumphotoComponent;
}());
EditalbumphotoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editalbumphoto',
        template: __webpack_require__("../../../../../src/app/components/album/editalbumphoto/editalbumphoto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/editalbumphoto/editalbumphoto.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _f || Object])
], EditalbumphotoComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=editalbumphoto.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/listalbum/listalbum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/listalbum/listalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>List Album</h3>\n  </div>\n\n  <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Search Parameter</h3>\n      </div>\n      <div class=\"panel-body\">\n          <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n              <div class=\"row\">\n                  <div class=\"col-sm-12 col-md-6\">\n                      <label for=\"albumname\">Album Name</label>\n                      <div class=\"input-group col-sm-10\">\n                          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                          <input type=\"text\" class=\"form-control\" id=\"albumname\" [formControl]=\"albumname\" placeholder=\"Album Name\">\n                      </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-2\">\n                      <label for=\"albumyear\">Album Year</label>\n                      <div class=\"input-group col-sm-10\">\n                          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                          <input type=\"text\" class=\"form-control\" id=\"albumyear\" [formControl]=\"albumyear\" placeholder=\"Album Year\">\n                      </div>\n                  </div>\n                  <div class=\"col-sm-12 col-md-3\">\n                      <label for=\"albumgenre\">Genre</label>\n                      <div class=\"input-group col-sm-10\">\n                          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                          <select class=\"form-control\" [formControl]=\"albumgenre\">\n                            <option ng-selected=\"true\" value=\"\">Select the genre</option>  \n                            <option *ngFor=\"let g of genre\" >{{g}}</option>\n                          </select>\n                      </div>\n                  </div>\n              </div><br>\n              <div class=\"row\">\n                  <div class=\"col-sm-12 col-md-6\">\n                      <label for=\"artistid\">Artist</label>\n                      <div class=\"input-group col-sm-5\">\n                          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                          <select class=\"form-control\" [formControl]=\"artistid\">\n                              <option ng-selected=\"true\" value=\"\">Select the artist</option>\n                              <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n                          </select>\n                        </div>\n                  </div>                \n                  <div class=\"col-sm-12 col-md-3\">\n                      <label for=\"status\">Status</label>\n                      <div class=\"input-group col-sm-10\">\n                          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                          <select class=\"form-control\" [formControl]=\"status\">\n                            <option ng-selected=\"true\" value=\"\">Select the status</option>  \n                            <option *ngFor=\"let a of sts\" >{{a}}</option>\n                          </select>\n                      </div>\n                  </div><br>\n                  <div class=\"col-sm-12 col-md-2\">\n                      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                  </div>                \n              </div>\n          </form>\n      </div>\n  </div>\n\n  <div class=\"panel panel-danger\" *ngIf=\"albums && totalrows < 1\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">No album found</h3> \n      </div>\n\n      <div class=\"panel-body\">\n          It seems like you havn't entered any albums for the selected criteria. Please add the album <a style=\"cursor:pointer\" (click)=\"toaddAlbums()\">here</a>.\n      </div>\n  </div>\n\n  <div class=\"panel panel-default\" *ngIf=\"albums && totalrows > 0\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n      </div>\n      <div class=\"panel-body\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                  <thead>\n                      <tr>\n                          <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumname')\">Album Name</a></th>\n                          <th width=\"20%\">Artist</th>\n                          <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumyear')\">Year</a></th>\n                          <th width=\"9%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumgenre')\">Genre</a></th>\n                          <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumprice')\">Price</a></th>\n                          <!-- <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th> -->\n                          <th width=\"20%\">Action</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor='let albm of albums; let albIndex = index'>\n                          <td><a style=\"cursor:pointer\" (click)=\"showAlbum(albm._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ albm.albumname}}</a></td>\n                          <td>{{ albm.artist }}</td>\n                          <td>{{ albm.albumyear}}</td>\n                          <td>{{ albm.albumgenre}}</td>\n                          <td class=\"text-right\">{{ albm.albumprice | currency: 'IDR':true }}</td>\n                          <!-- <td>{{ albm.status}}</td> -->\n                          <td>\n                              <button type=\"button\" class=\"btn-xs btn-info\" aria-label=\"View\" (click)=\"editAlbumPhoto(albm._id)\">\n                                  <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Album Photo\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Edit\" (click)=\"editAlbum(albm._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Album Data\">\n                                  <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-primary\" aria-label=\"Delete\" (click)=\"confirmDel(albIndex, albm._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Album\">\n                                  <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                              </button>\n                          </td>\n                      </tr>\n                      \n                  </tbody>\n              </table>\n          </div>\n\n          <div style=\"text-align:center\" *ngIf=\"albums && totalrows > 10\">\n              <nav aria-label=\"Page navigation\">\n                  <ul class=\"pagination\">\n                      <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                          <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                      </li>\n                  </ul>\n              </nav>\n          </div>\n\n      </div>\n  </div>  \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/album/listalbum/listalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListalbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListalbumComponent = (function () {
    //artistname: String;
    function ListalbumComponent(fb, authService, artistService, albumService, songService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.genre = ['Alternative', 'Blues', 'Children', 'Classical', 'Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop', 'Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age', 'Pop', 'RnB', 'Reggae', 'Rock', 'Soundtrack', 'Vocal', 'Others'];
        this.sts = ['active', 'inactive'];
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.albumname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.albumgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('active', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
    }
    ListalbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.reportForm = this.fb.group({
            artistid: this.artistid,
            albumname: this.albumname,
            albumyear: this.albumyear,
            albumgenre: this.albumgenre,
            status: this.status
        });
        this.getArtistList(this.userObj.userid);
        this.route.queryParams.forEach(function (params) {
            _this.qartistid = params['artistid'] || '';
            _this.qalbumname = params['albumname'] || '';
            _this.qalbumyear = params['albumyear'] || '';
            _this.qalbumgenre = params['albumgenre'] || '';
            _this.qstatus = params['status'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            var payload = {};
            payload.status = _this.qstatus;
            payload.artistid = _this.qartistid;
            payload.albumname = _this.qalbumyear;
            payload.albumyear = _this.qalbumyear;
            payload.albumgenre = _this.qalbumgenre;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(_this.userObj.userid, payload);
            _this.reportForm.patchValue({
                artistid: _this.qartistid,
                albumname: _this.qalbumname,
                albumyear: _this.qalbumyear,
                albumgenre: _this.qalbumgenre,
                status: _this.qstatus
            });
        });
    };
    ListalbumComponent.prototype.getArtistList = function (id) {
        var _this = this;
        this.artistService.getArtistList(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.artistlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.artistlist = [{ _id: '', artistname: 'Error artist list' }];
                }
            }
        });
    };
    ListalbumComponent.prototype.getReport = function (formdata) {
        if (this.reportForm.valid) {
            this.fetchReport(this.userObj.userid, this.reportForm.value);
        }
    };
    ListalbumComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.albumService.getAggAlbums(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                //this.albums = data.data.docs;
                _this.albums = data.data;
                //console.log(this.albums);
                //this.totalrows = +data.data.totalcount;
                _this.totalrows = +data.totalcount;
                //console.log(this.totalrows);
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qartistid = formval.artistid;
                _this.qalbumname = formval.albumname;
                _this.qalbumyear = formval.albumyear;
                _this.qalbumgenre = formval.albumgenre;
                _this.qstatus = formval.status;
                _this.reportTitle = 'Albums Result';
            }
        });
    };
    ListalbumComponent.prototype.setPage = function (page) {
        this.router.navigate(['listalbum'], {
            queryParams: { artistid: this.qartistid,
                albumname: this.qalbumname,
                albumyear: this.qalbumyear,
                albumgenre: this.qalbumgenre,
                status: this.qstatus,
                page: page,
                sortby: this.qsort }
        });
    };
    ListalbumComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    ListalbumComponent.prototype.sortAlbum = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(['listalbum'], {
            queryParams: { artistid: this.qartistid,
                albumname: this.qalbumname,
                albumyear: this.qalbumyear,
                albumgenre: this.qalbumgenre,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort }
        });
    };
    /*   getArtistName(id){
        this.artistService.getArtist(id).subscribe(data => {
          if (data.success === true) {
            if (data.data[0]) {
              return data.data[0].artistname;
            } else {
              return 'Artist id is incorrect in the URL';
            }
          }
        });
      } */
    ListalbumComponent.prototype.showAlbum = function (albumid) {
        this.router.navigate(["viewalbum/" + albumid], {
            queryParams: { artistid: this.qartistid,
                albumname: this.qalbumname,
                albumyear: this.qalbumyear,
                albumgenre: this.qalbumgenre,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort }
        });
    };
    ListalbumComponent.prototype.confirmDel = function (idx, albumid) {
        var _this = this;
        var totalsong;
        var payload = {};
        payload.albumid = albumid;
        this.songService.getSongs(this.userObj.userid, payload)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.toastr.error(data.message);
            }
            else {
                totalsong = +data.data.total;
                if (totalsong > 0) {
                    _this.toastr.warning('Can not delete album. It already has songs.');
                }
                else {
                    if (confirm('Do you really want to delete this record?')) {
                        _this.albumService.deleteAlbum(albumid)
                            .subscribe(function (data) {
                            if (data.success === false) {
                                if (data.errcode) {
                                    _this.authService.logout();
                                    _this.router.navigate(['login']);
                                }
                                _this.toastr.error(data.message);
                            }
                            else {
                                _this.albums.splice(idx, 1);
                                _this.totalrows = _this.totalrows - 1;
                                _this.toastr.success(data.message);
                            }
                        });
                    }
                }
            }
        });
    };
    ListalbumComponent.prototype.editAlbum = function (albumid) {
        this.router.navigate(["editalbum/" + albumid], {
            queryParams: { artistid: this.qartistid,
                albumname: this.qalbumname,
                albumyear: this.qalbumyear,
                albumgenre: this.qalbumgenre,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort }
        });
    };
    ListalbumComponent.prototype.editAlbumPhoto = function (albumid) {
        this.router.navigate(["editalbumphoto/" + albumid], {
            queryParams: { artistid: this.qartistid,
                albumname: this.qalbumname,
                albumyear: this.qalbumyear,
                albumgenre: this.qalbumgenre,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort }
        });
    };
    ListalbumComponent.prototype.toaddAlbums = function () {
        this.router.navigate(['/addalbum']);
    };
    return ListalbumComponent;
}());
ListalbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listalbum',
        template: __webpack_require__("../../../../../src/app/components/album/listalbum/listalbum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/listalbum/listalbum.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _j || Object])
], ListalbumComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=listalbum.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/album/viewalbum/viewalbum.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/album/viewalbum/viewalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Album Details</h3>\n    </div>\n    <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label for=\"albumname\" class=\"col-sm-2 control-label\">Album Name</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ album?.albumname }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"artistname\" class=\"col-sm-2 control-label\">Artist</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ artist?.artistname }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"albumyear\" class=\"col-sm-2 control-label\">Album Year</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ album?.albumyear }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"albumgenre\" class=\"col-sm-2 control-label\">Album Genre</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ album?.albumgenre }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"albumprice\" class=\"col-sm-2 control-label\">Album Price</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">Rp</div>\n                <div class=\"form-ele\">{{ album?.albumprice | currency: 'IDR':true }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <div class=\"form-ele\">{{ album?.status }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"albumphoto\" class=\"col-sm-2 control-label\">Photo</label>\n            <div class=\"input-group col-sm-10\">\n              <img src=\"{{ album?.albumphotopath }}\" class=\"rounded float-right\" width=\"170\" height=\"170\">\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"listsong\" class=\"col-sm-2 control-label\">Song</label>\n            <div class=\"input-group col-sm-10\" *ngIf=\"songs && totalrows > 0\">\n                <div class=\"col-sm-12 col-md-10\">\n                    <i>({{ totalrows }} songs found) </i> \n                </div><br>\n                <div class=\"col-sm-12 col-md-10\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\" width=\"50%\">\n                            <thead>\n                                <tr>\n                                    <th width=\"30%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songname')\">Song Name</a></th>\n                                    <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songpublish')\">Published?</a></th>\n                                    <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songbuy')\">Total Purchase</a></th>\n                                    <th width=\"10%\" class=\"text-right\"><a style=\"cursor:pointer\" (click)=\"sortSong('songprice')\">Price</a></th>\n                                    <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor='let song of songs; let songIndex = index'>\n                                    <td>{{ song.songname}}</td>\n                                    <td>{{ song.songpublish}}</td>\n                                    <td>{{ song.songbuy}}</td>\n                                    <td class=\"text-right\">{{ song.songprice | currency: 'IDR':true }}</td>\n                                    <td>{{ song.status}}</td>\n                                </tr>\n                                \n                            </tbody>\n                        </table>\n                    </div>\n            \n                    <div style=\"text-align:center\" *ngIf=\"songs && totalrows > 10\">\n                        <nav aria-label=\"Page navigation\">\n                            <ul class=\"pagination\">\n                                <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                                    <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                                </li>\n                            </ul>\n                        </nav>\n                    </div>\n            \n                </div>\n            </div>      \n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n    </form>\n  \n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/album/viewalbum/viewalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewalbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewalbumComponent = (function () {
    function ViewalbumComponent(authService, artistService, albumService, songService, toastr, route, router) {
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
    }
    ViewalbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.sub = this.route.params.subscribe(function (params) {
            var albumid = params['id'];
            _this.albumid = albumid;
        });
        console.log(this.albumid);
        this.getAlbum(this.albumid);
        this.route.queryParams.forEach(function (params) {
            _this.qalbumid = params['albumid'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            var payload = {};
            _this.qalbumid = _this.albumid;
            payload.albumid = _this.qalbumid;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(_this.userObj.userid, payload);
        });
    };
    ViewalbumComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewalbumComponent.prototype.getAlbum = function (id) {
        var _this = this;
        this.albumService.getAlbum(id).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                if (data.data[0]) {
                    _this.album = data.data[0];
                    _this.getArtistName(_this.album.artistid);
                }
                else {
                    _this.toastr.error('Album id is incorrect in the URL');
                }
            }
        });
    };
    ViewalbumComponent.prototype.getArtistName = function (id) {
        var _this = this;
        this.artistService.getArtist(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.artist = data.data[0];
                }
                else {
                    _this.toastr.error('Artist id is incorrect in the URL');
                }
            }
        });
    };
    ViewalbumComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.songService.getSongs(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.songs = data.data.docs;
                _this.totalrows = +data.data.total;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qalbumid = formval.albumid;
                _this.reportTitle = 'Songs Result';
            }
        });
    };
    ViewalbumComponent.prototype.setPage = function (page) {
        this.router.navigate(["viewalbum/" + this.albumid], {
            queryParams: { albumid: this.qalbumid,
                page: page,
                sortby: this.qsort }
        });
    };
    ViewalbumComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    ViewalbumComponent.prototype.sortSong = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(["viewalbum/" + this.albumid], {
            queryParams: { albumid: this.qalbumid,
                page: this.qpage || 1,
                sortby: this.qsort }
        });
    };
    ViewalbumComponent.prototype.onBack = function () {
        this.router.navigate(['/listalbum'], { preserveQueryParams: true });
    };
    return ViewalbumComponent;
}());
ViewalbumComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-viewalbum',
        template: __webpack_require__("../../../../../src/app/components/album/viewalbum/viewalbum.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/album/viewalbum/viewalbum.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_artist_service__["a" /* ArtistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_album_service__["a" /* AlbumService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__common_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object])
], ViewalbumComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=viewalbum.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/artist/addartist/addartist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/artist/addartist/addartist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Add Artist</h3>\n  </div>\n\n  <form [formGroup]=\"addArtistForm\" (ngSubmit)=\"addArtist(addArtistForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addArtistForm.get('artistname').invalid && addArtistForm.get('artistname').dirty}\">\n        <label for=\"artistname\" class=\"col-sm-2 control-label\">Artist Name <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"artistname\" id=\"artistname\" placeholder=\"Artist Name\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"addArtistForm.get('artistname').dirty && addArtistForm.get('artistname').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addArtistForm.get('artistname').errors.required\">\n                Please enter the artist name\n            </span>\n        </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addArtistForm.get('artistimage').invalid && addArtistForm.get('artistimage').dirty}\">\n        <label for=\"artistimage\" class=\"col-sm-2 control-label\">Artist Photo</label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n            <input type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"artistimage\" id=\"artistimage\" placeholder=\"Artistimage\">\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\"></label>\n        <div class=\"col-sm-5\">\n            <button type=\"submit\" [disabled]=\"addArtistForm.invalid\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n        </div>\n        <div class=\"col-sm-5\" style=\"text-align:right\">\n            <sup>*</sup> required\n        </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/artist/addartist/addartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddartistComponent = (function () {
    function AddartistComponent(fb, authService, artistService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        //status: any = ['active', 'inactive'];
        this.filesToUpload = [];
        this.artistname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
    }
    AddartistComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.artistid = '';
        this.addArtistForm = this.fb.group({
            artistname: this.artistname,
            artistimage: this.filesToUpload,
            artistphotopath: this.artistphotopath,
            artistphotoname: this.artistphotoname
        });
    };
    AddartistComponent.prototype.addArtist = function (formdata) {
        var _this = this;
        if (this.addArtistForm.dirty && this.addArtistForm.valid) {
            var files = this.filesToUpload;
            var theForm_1 = this.addArtistForm.value;
            var lformData = new FormData();
            console.log('Ini file: ' + files[0]['name']);
            lformData.append('artistimage', files[0], files[0]['name']);
            console.log(lformData.getAll('artistimage'));
            console.dir(theForm_1);
            this.artistService.uploadArtistphoto(lformData)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.toastr.error(data.message);
                }
                else {
                    theForm_1.artistphotopath = data.filedata.artistphotopath;
                    theForm_1.artistphotoname = data.filedata.artistphotoname;
                    theForm_1.status = 'active';
                    console.log('Ini file path: ' + theForm_1.artistphotopath);
                    if (_this.artistid !== '') {
                        theForm_1.artistid = _this.artistid;
                    }
                    _this.artistService.saveArtist(_this.userObj.userid, theForm_1)
                        .subscribe(function (data) {
                        if (data.success === false) {
                            _this.toastr.error(data.message);
                        }
                        else {
                            _this.toastr.success(data.message);
                            _this.router.navigate(['report']);
                        }
                        _this.addArtistForm.reset();
                    });
                }
            });
        }
    };
    AddartistComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('content file: ' + this.filesToUpload);
    };
    return AddartistComponent;
}());
AddartistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-addartist',
        template: __webpack_require__("../../../../../src/app/components/artist/addartist/addartist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/artist/addartist/addartist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _g || Object])
], AddartistComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=addartist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/artist/editartist/editartist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/artist/editartist/editartist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Edit Artist</h3>\n    </div>\n    <form [formGroup]=\"artistForm\" (ngSubmit)=\"saveArtist(artistForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': artistForm.get('artistname').invalid && artistForm.get('artistname').dirty}\">\n            <label for=\"artistname\" class=\"col-sm-2 control-label\">Name</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <input type=\"text\" class=\"form-control\" id=\"artistname\" [formControl]=\"artistname\" placeholder=\"Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"artistForm.get('artistname').dirty && artistForm.get('artistname').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your {{ userObj.username }} artist name</span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': artistForm.get('status').invalid && artistForm.get('status').dirty}\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"status\">\n                    <option *ngFor=\"let a of sts\" >{{a}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"artistForm.get('status').dirty && artistForm.get('status').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"artistForm.get('status').errors.required\">\n                    Please select artist status\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"submit\" [disabled]=\"artistForm.invalid\" class=\"btn btn-primary\">{{ btnLbl }}</button>\n                <button type=\"reset\" class=\"btn btn-default\" (click)=\"onBack()\">Back</button>\n            </div>\n        </div>\n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/artist/editartist/editartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditartistComponent = (function () {
    function EditartistComponent(fb, authService, artistService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.sts = ['active', 'inactive'];
        this.artistname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
    }
    EditartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.artistid = params['id'];
            _this.getArtist(_this.artistid);
            _this.btnLbl = "Update";
        });
        this.userObj = this.authService.currentUser;
        this.artistForm = this.fb.group({
            artistname: this.artistname,
            status: this.status
        });
    };
    EditartistComponent.prototype.getArtist = function (id) {
        var _this = this;
        this.artistService.getArtist(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Artist id is incorrect in the URL');
                    _this.router.navigate(['listartist']);
                }
            }
        });
    };
    EditartistComponent.prototype.populateForm = function (data) {
        this.artistForm.patchValue({
            artistname: data.artistname,
            status: data.status
        });
    };
    EditartistComponent.prototype.saveArtist = function (formdata) {
        var _this = this;
        if (this.artistForm.valid) {
            var theForm = this.artistForm.value;
            if (this.artistid !== '') {
                theForm.artistid = this.artistid;
            }
            this.artistService.saveArtist(this.userObj.userid, theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                }
                if (!_this.artistid) {
                    _this.artistForm.reset();
                }
            });
        }
    };
    EditartistComponent.prototype.onBack = function () {
        this.router.navigate(['/listartist'], { preserveQueryParams: true });
    };
    return EditartistComponent;
}());
EditartistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editartist',
        template: __webpack_require__("../../../../../src/app/components/artist/editartist/editartist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/artist/editartist/editartist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _g || Object])
], EditartistComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=editartist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/artist/editartistphoto/editartistphoto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/artist/editartistphoto/editartistphoto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h1>Change Photo</h1>\n  </div>\n\n  <form [formGroup]=\"artistForm\" (ngSubmit)=\"updatePhoto(artistForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n<!--       <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('imgpath').invalid && profileForm.get('imgpath').dirty}\">\n          <label for=\"imgpath\" class=\"col-sm-2 control-label\">Image Path</label>\n          <div class=\"input-group col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"imgpath\" [formControl]=\"imgpath\" placeholder=\"Img Path\">\n          </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('imgoriname').invalid && profileForm.get('imgoriname').dirty}\">\n          <label for=\"imgoriname\" class=\"col-sm-2 control-label\">Image Oriname</label>\n          <div class=\"input-group col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"imgoriname\" [formControl]=\"imgoriname\" placeholder=\"Img Oriname\">\n          </div>\n      </div> -->\n      <div class=\"col-lg-6 col-sm-6 col-12\">\n          <label for=\"artistimage\" class=\"col-sm-3 control-label\"></label>\n          <img src=\"{{ this.displayImg }}\" width=\"170\" height=\"170\">\n          <br><br>\n          <div class=\"input-group\">\n              <label class=\"input-group-btn\">\n                  <span class=\"btn btn-primary\">\n                      Browse&hellip; <input type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"artistimage\" id=\"artistimage\" style=\"display:none\">\n                  </span>\n              </label>\n              <input type=\"text\" class=\"form-control\" value=\"{{ this.newfile }}\">  \n            </div>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\">     </label>\n          <div class=\"col-sm-10\">\n              <br>\n              <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n          </div>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/artist/editartistphoto/editartistphoto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditartistphotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditartistphotoComponent = (function () {
    function EditartistphotoComponent(fb, authService, artistService, route, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.filesToUpload = [];
        this.artistphotopath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.artistphotoname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
    }
    EditartistphotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.artistForm = this.fb.group({
            artistphotopath: this.artistphotopath,
            artistphotoname: this.artistphotoname
        });
        this.route.params.subscribe(function (params) {
            _this.artistid = params['id'];
            _this.getArtist(_this.artistid);
        });
    };
    EditartistphotoComponent.prototype.getArtist = function (id) {
        var _this = this;
        this.artistService.getArtist(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.artist = data.data[0];
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Artist id is incorrect in the URL');
                    _this.router.navigate(['listartist']);
                }
            }
        });
    };
    EditartistphotoComponent.prototype.populateForm = function (data) {
        this.deletedFilename = this.artist.artistphotoname;
        this.displayImg = this.artist.artistphotopath;
        this.artistForm.patchValue({
            artistphotopath: data.artistphotopath,
            artistphotoname: data.artistphotoname
        });
    };
    EditartistphotoComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.newfile = this.filesToUpload[0]['name'];
        console.log('content file: ' + this.filesToUpload);
        this.uploadNewPhoto(this.filesToUpload);
    };
    EditartistphotoComponent.prototype.uploadNewPhoto = function (newFileData) {
        var _this = this;
        var files = newFileData;
        var lformData = new FormData();
        lformData.append('artistimage', files[0], files[0]['name']);
        this.artistService.uploadArtistphoto(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.toastr.error(data.message);
            }
            else {
                _this.displayImg = data.filedata.artistphotopath;
                var payloadData_1 = _this.artistForm.value;
                _this.artistService.deleteArtistPhoto(payloadData_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        //this.toastr.error(data.message);
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        console.log('File deleted - ' + payloadData_1.artistphotoname);
                    }
                });
                _this.artistForm.value.artistphotopath = data.filedata.artistphotopath;
                _this.artistForm.value.artistphotoname = data.filedata.artistphotoname;
                console.log('Update database photo - ' + _this.displayImg);
                _this.artistService.updateArtistphoto(_this.artistid, _this.artistForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        console.log('Success update database photo - ' + _this.displayImg);
                        _this.toastr.success(data.message);
                    }
                });
            }
        });
    };
    EditartistphotoComponent.prototype.onBack = function () {
        this.router.navigate(['/listartist'], { preserveQueryParams: true });
    };
    return EditartistphotoComponent;
}());
EditartistphotoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editartistphoto',
        template: __webpack_require__("../../../../../src/app/components/artist/editartistphoto/editartistphoto.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/artist/editartistphoto/editartistphoto.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _f || Object])
], EditartistphotoComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=editartistphoto.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/artist/listartist/listartist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/artist/listartist/listartist.component.html":
/***/ (function(module, exports) {

module.exports = "<script>\n    $(document).ready(function(){\n        $('[data-toggle=\"tooltip\"]').tooltip();   \n    });\n</script>\n    \n<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>List Artist</h3>\n    </div>\n\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Search Parameter</h3>\n        </div>\n        <div class=\"panel-body\">\n            <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-7\">\n                        <label for=\"artistname\">Artist Name</label>\n                        <div class=\"input-group col-sm-10\">\n                            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                            <input type=\"text\" class=\"form-control\" id=\"artistname\" [formControl]=\"artistname\" placeholder=\"Artist Name\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-3\">\n                        <label for=\"status\">Status</label>\n                        <div class=\"input-group col-sm-10\">\n                            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                            <select class=\"form-control\" [formControl]=\"status\">\n                                <option ng-selected=\"true\" value=\"\">Select the status</option>\n                                <option *ngFor=\"let a of sts\" >{{a}}</option>\n                            </select>\n                        </div>\n                    </div><br>\n                    <div class=\"col-sm-12 col-md-2\">\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                    </div> \n                </div>\n            </form>\n        </div>\n    </div>\n  \n    <div class=\"panel panel-danger\" *ngIf=\"artists && totalrows < 1\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">No artist found</h3> \n        </div>\n  \n        <div class=\"panel-body\">\n            It seems like you havn't entered any artists for the selected criteria. Please add the artist <a style=\"cursor:pointer\" (click)=\"toaddArtists()\">here</a>.\n        </div>\n    </div>\n  \n  \n    <div class=\"panel panel-default\" *ngIf=\"artists && totalrows > 0\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n        </div>\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th width=\"50%\"><a style=\"cursor:pointer\" (click)=\"sortArtist('artistname')\">Artist Name</a></th>\n                            <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortArtist('status')\">Status</a></th>\n                            <th width=\"20%\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let artst of artists; let artIndex = index'>\n                            <td><a style=\"cursor:pointer\" (click)=\"showArtist(artst._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ artst.artistname}}</a></td>\n                            <td>{{ artst.status}}</td>\n                            <td>\n                                <button type=\"button\" class=\"btn-xs btn-info\" aria-label=\"View\" (click)=\"editArtistPhoto(artst._id)\">\n                                    <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Artist Photo\"></span>\n                                </button>\n                                <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Edit\" (click)=\"editArtist(artst._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Artist Data\">\n                                    <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                                </button>\n                                <button type=\"button\" class=\"btn-xs btn-primary\" aria-label=\"Delete\" (click)=\"confirmDel(artIndex, artst._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Artist\">\n                                    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                        \n                    </tbody>\n                </table>\n            </div>\n  \n            <div style=\"text-align:center\" *ngIf=\"artists && totalrows > 10\">\n                <nav aria-label=\"Page navigation\">\n                    <ul class=\"pagination\">\n                        <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                            <a [ngClass]=\"{'selected': qpage == idx + 1 }\"class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n  \n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/artist/listartist/listartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ListartistComponent = (function () {
    function ListartistComponent(fb, authService, artistService, albumService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.sts = ['active', 'inactive'];
        this.artistname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('active', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
    }
    //startdt = new FormControl({value: '', disabled: true});
    ListartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.reportForm = this.fb.group({
            artistname: this.artistname,
            status: this.status
        });
        this.route.queryParams.forEach(function (params) {
            _this.qartistname = params['artistname'] || '';
            _this.qstatus = params['status'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            //      if(this.qstatus !== '') {
            var payload = {};
            payload.status = _this.qstatus;
            //        if( (this.qartistname !== '')){
            payload.artistname = _this.qartistname;
            //        }
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(_this.userObj.userid, payload);
            _this.reportForm.patchValue({
                artistname: _this.qartistname,
                status: _this.qstatus
            });
            //      }
        });
    };
    ListartistComponent.prototype.getReport = function (formdata) {
        if (this.reportForm.valid) {
            this.fetchReport(this.userObj.userid, this.reportForm.value);
        }
    };
    ListartistComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.artistService.getArtists(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.artists = data.data.docs;
                _this.totalrows = +data.data.total;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qartistname = formval.artistname;
                _this.qstatus = formval.status;
                _this.reportTitle = 'Artists Result';
                /* if (formval.status === 'active') {
                  this.reportTitle = 'Selected active Artists'
                } else {
                  this.reportTitle = 'Selected inactive Artists'
                } */
            }
        });
    };
    ListartistComponent.prototype.setPage = function (page) {
        this.router.navigate(['listartist'], {
            queryParams: { artistname: this.qartistname, status: this.qstatus, page: page, sortby: this.qsort }
        });
    };
    ListartistComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    ListartistComponent.prototype.showArtist = function (artistid) {
        this.router.navigate(["viewartist/" + artistid], {
            queryParams: { artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
        });
    };
    ListartistComponent.prototype.confirmDel = function (idx, artistid) {
        var _this = this;
        var totalalbum;
        var payload = {};
        payload.artistid = artistid;
        this.albumService.getAlbums(this.userObj.userid, payload)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.toastr.error(data.message);
            }
            else {
                totalalbum = +data.data.total;
                if (totalalbum > 0) {
                    _this.toastr.warning('Can not delete artist. It already has albums.');
                }
                else {
                    if (confirm('Do you really want to delete this record?')) {
                        _this.artistService.deleteArtist(artistid)
                            .subscribe(function (data) {
                            if (data.success === false) {
                                if (data.errcode) {
                                    _this.authService.logout();
                                    _this.router.navigate(['login']);
                                }
                                _this.toastr.error(data.message);
                            }
                            else {
                                _this.artists.splice(idx, 1);
                                _this.totalrows = _this.totalrows - 1;
                                _this.toastr.success(data.message);
                            }
                        });
                    }
                }
            }
        });
    };
    ListartistComponent.prototype.editArtist = function (artistid) {
        this.router.navigate(["editartist/" + artistid], {
            queryParams: { artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
        });
    };
    ListartistComponent.prototype.editArtistPhoto = function (artistid) {
        this.router.navigate(["editartistphoto/" + artistid], {
            queryParams: { artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
        });
    };
    ListartistComponent.prototype.sortArtist = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(['listartist'], {
            queryParams: { artistname: this.qartistname, status: this.qstatus, page: this.qpage || 1, sortby: this.qsort }
        });
    };
    ListartistComponent.prototype.toaddArtists = function () {
        this.router.navigate(['/addartist']);
    };
    return ListartistComponent;
}());
ListartistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listartist',
        template: __webpack_require__("../../../../../src/app/components/artist/listartist/listartist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/artist/listartist/listartist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _h || Object])
], ListartistComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=listartist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/artist/viewartist/viewartist.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/artist/viewartist/viewartist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h1>Artist Details</h1>\n  </div>\n  <form class=\"form-horizontal\">\n      <div class=\"form-group\">\n          <label for=\"artistname\" class=\"col-sm-2 control-label\">Name</label>\n          <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n              <div class=\"form-ele\">{{ artist?.artistname }}</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n          <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n              <div class=\"form-ele\">{{ artist?.status }}</div>\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"artistphoto\" class=\"col-sm-2 control-label\">Photo</label>\n          <div class=\"input-group col-sm-10\">\n            <img src=\"{{ artist?.artistphotopath }}\" class=\"rounded float-right\" width=\"170\" height=\"170\">\n          </div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"listalbum\" class=\"col-sm-2 control-label\">Album</label>\n          <div class=\"input-group col-sm-10\" *ngIf=\"albums && totalrows > 0\">\n              <div class=\"col-sm-12 col-md-10\">\n                  <i>({{ totalrows }} albums found) </i> \n              </div><br>\n              <div class=\"col-sm-12 col-md-10\">\n                  <div class=\"table-responsive\">\n                      <table class=\"table table-striped\" width=\"50%\">\n                          <thead>\n                              <tr>\n                                  <th width=\"30%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumname')\">Album Name</a></th>\n                                  <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumyear')\">Year</a></th>\n                                  <th width=\"9%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumgenre')\">Genre</a></th>\n                                  <th width=\"10%\" class=\"text-right\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumprice')\">Price</a></th>\n                                  <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr *ngFor='let albm of albums; let albIndex = index'>\n                                  <td>{{ albm.albumname}}</td>\n                                  <td>{{ albm.albumyear}}</td>\n                                  <td>{{ albm.albumgenre}}</td>\n                                  <td class=\"text-right\">{{ albm.albumprice | currency: 'IDR':true }}</td>\n                                  <td>{{ albm.status}}</td>\n                              </tr>\n                              \n                          </tbody>\n                      </table>\n                  </div>\n        \n                  <div style=\"text-align:center\" *ngIf=\"albums && totalrows > 10\">\n                      <nav aria-label=\"Page navigation\">\n                          <ul class=\"pagination\">\n                              <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                                  <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                              </li>\n                          </ul>\n                      </nav>\n                  </div>\n        \n              </div>\n          </div>      \n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\"></label>\n          <div class=\"col-sm-10\">\n              <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n          </div>\n      </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/artist/viewartist/viewartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewartistComponent = (function () {
    function ViewartistComponent(authService, artistService, albumService, toastr, route, router) {
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
    }
    ViewartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.sub = this.route.params.subscribe(function (params) {
            var artistid = params['id'];
            _this.artistid = artistid;
            _this.getArtist(artistid);
        });
        this.route.queryParams.forEach(function (params) {
            _this.qartistid = params['artistid'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            var payload = {};
            //this.qartistid = this.artistid;
            payload.artistid = _this.qartistid;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(_this.userObj.userid, payload);
        });
    };
    ViewartistComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewartistComponent.prototype.getArtist = function (id) {
        var _this = this;
        this.artistService.getArtist(id).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                if (data.data[0]) {
                    _this.artist = data.data[0];
                }
                else {
                    _this.toastr.error('Artist id is incorrect in the URL');
                }
            }
        });
    };
    ViewartistComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.albumService.getAlbums(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.albums = data.data.docs;
                _this.totalrows = +data.data.total;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qartistid = formval.artistid;
                _this.reportTitle = 'Albums Result';
            }
        });
    };
    ViewartistComponent.prototype.setPage = function (page) {
        this.router.navigate(["viewartist/" + this.artistid], {
            queryParams: { artistid: this.qartistid,
                page: page,
                sortby: this.qsort }
        });
    };
    ViewartistComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    ViewartistComponent.prototype.sortAlbum = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(["viewartist/" + this.artistid], {
            queryParams: { artistid: this.qartistid,
                page: this.qpage || 1,
                sortby: this.qsort }
        });
    };
    ViewartistComponent.prototype.onBack = function () {
        this.router.navigate(['/listartist'], { preserveQueryParams: true });
    };
    return ViewartistComponent;
}());
ViewartistComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-viewartist',
        template: __webpack_require__("../../../../../src/app/components/artist/viewartist/viewartist.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/artist/viewartist/viewartist.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_artist_service__["a" /* ArtistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_album_service__["a" /* AlbumService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__common_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], ViewartistComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=viewartist.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Dashboard</h3>\n  </div>\n\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n        <label for=\"labelname\" class=\"col-sm-2 control-label\">Label Name</label>\n        <div class=\"input-group col-sm-6\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n            <div class=\"form-ele\">{{ this.name }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n        <div class=\"input-group col-sm-6\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n            <div class=\"form-ele\">{{ this.email }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"contactno\" class=\"col-sm-2 control-label\">Contact No</label>\n      <div class=\"input-group col-sm-6\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></div>\n          <div class=\"form-ele\">{{ this.contactno }}</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"balance\" class=\"col-sm-2 control-label\">Balance</label>\n        <div class=\"input-group col-sm-6\">\n            <div class=\"input-group-addon\">Rp</div>\n            <div class=\"form-ele\">{{ this.balance }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\"></label>\n        <div class=\"col-sm-7\">\n          <!-- You have {{ this.totalrows }} active artists. To see the details, click <a style=\"cursor:pointer\" (click)=\"toArtists()\">here</a>. -->\n            You have <b><i><a style=\"cursor:pointer\" (click)=\"toArtists()\">({{ this.totalrows }})</a></i></b> active artists, <b><i><a style=\"cursor:pointer\" (click)=\"toAlbums()\">({{ this.totalalbums }})</a></i></b> active albums, \n            and <b><i><a style=\"cursor:pointer\" (click)=\"toSongs()\">({{ this.totalsongs }})</a></i></b> active songs.\n        </div>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = (function () {
    function DashboardComponent(authService, artistService, albumService, songService, userService, toastr, route, router) {
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.userService = userService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.name = this.userObj.name;
        this.userService.getUser(this.userObj.userid).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.user = data.data[0];
                _this.email = _this.user.email;
                _this.contactno = _this.user.contactno;
                _this.balance = _this.user.balance;
            }
        });
        var payload = {};
        payload.status = 'active';
        this.fetchReport(this.userObj.userid, payload);
    };
    DashboardComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.artistService.getArtists(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.artists = data.data.docs;
                _this.totalrows = +data.data.total;
                _this.albumService.getAlbums(userid, formval)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.albums = data.data.docs;
                        _this.totalalbums = +data.data.total;
                        _this.songService.getSongs(userid, formval)
                            .subscribe(function (data) {
                            if (data.success === false) {
                                if (data.errcode) {
                                    _this.authService.logout();
                                    _this.router.navigate(['login']);
                                }
                                _this.toastr.error(data.message);
                            }
                            else {
                                _this.totalsongs = +data.data.total;
                            }
                        });
                    }
                });
            }
        });
    };
    DashboardComponent.prototype.toArtists = function () {
        this.router.navigate(['/listartist']);
    };
    DashboardComponent.prototype.toAlbums = function () {
        this.router.navigate(['/listalbum']);
    };
    DashboardComponent.prototype.toSongs = function () {
        this.router.navigate(['/listsong']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_song_service__["a" /* SongService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _h || Object])
], DashboardComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n<nav class=\"navbar navbar-default navbar-fixed-top\">\n  <div class=\"container\">\n      <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" *ngIf=\"!authService.isLoggedIn()\" routerLink=\"login\">kaXet</a>\n          <a class=\"navbar-brand\" *ngIf=\"authService.isLoggedIn()\" routerLink=\"report\">kaXet</a>\n      </div>\n      <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n              \n<!--               <li ><a routerLink=\"report\" *ngIf=\"authService.isLoggedIn()\" routerLinkActive=\"active\">Report</a></li>\n              <li><a routerLink=\"editexpense\" *ngIf=\"authService.isLoggedIn()\" routerLinkActive=\"active\">Add Expense</a></li> -->\n              <li><a routerLink=\"about\" routerLinkActive=\"active\">About</a></li>\n              <li *ngIf=\"authService.isLoggedIn()\">\n                  <ul class=\"menu\">\n                      <li>\n                          Artist\n                          <ul>\n                              <li routerLink=\"addartist\" routerLinkActive=\"active\">Add Artist</li>\n                              <li routerLink=\"listartist\" routerLinkActive=\"active\">Manage Artist</li>\n                          </ul>\n                      </li>\n                      <li>\n                        Album\n                        <ul>\n                            <li routerLink=\"addalbum\" routerLinkActive=\"active\">Add Album</li>\n                            <li routerLink=\"listalbum\" routerLinkActive=\"active\">Manage Album</li>\n                        </ul>\n                    </li>\n                    <li>\n                        Song\n                        <ul>\n                            <li routerLink=\"addsong\" routerLinkActive=\"active\">Add Song</li>\n                            <li routerLink=\"listsong\" routerLinkActive=\"active\">Manage Song</li>\n                        </ul>\n                    </li>\n                  </ul>\n              </li>\n          </ul>\n          <ul class=\"nav navbar-nav navbar-right\">\n              <li *ngIf=\"!authService.isLoggedIn()\">\n                  <a routerLink=\"login\" routerLinkActive=\"active\">Log In</a>\n              </li>\n              <li *ngIf=\"authService.isLoggedIn()\">\n                  <ul class=\"menu\">\n                      <li>\n                          Welcome {{ authService.currentUser.name }}\n                          <ul>\n                              <li routerLink=\"profile\" routerLinkActive=\"active\">My Profile</li>\n                              <li routerLink=\"password\" routerLinkActive=\"active\">Change Password</li>\n                              <li routerLink=\"logout\" routerLinkActive=\"active\">Logout</li>\n                          </ul>\n                      </li>\n                  </ul>\n              </li>\n          </ul>\n      </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/song/addsong/addsong.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/song/addsong/addsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Add Song</h3>\n  </div>\n\n  <form [formGroup]=\"addSongForm\" (ngSubmit)=\"addSong(addSongForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('artistid').invalid && addSongForm.get('artistid').dirty}\">\n      <label for=\"artistid\" class=\"col-sm-2 control-label\">Artist<sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n        <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n        <select class=\"form-control\" [formControl]=\"artistid\" (change)=\"artistChangeEvent($event)\">\n            <option ng-selected=\"true\" value=\"\">Select the artist</option>\n            <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n        </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('artistid').dirty && addSongForm.get('artistid').errors\">\n        <span class=\"col-sm-2\"></span>\n        <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('artistid').errors.required\">\n            Please enter the artist\n        </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('albumid').invalid && addSongForm.get('albumid').dirty}\">\n      <label for=\"albumid\" class=\"col-sm-2 control-label\">Album<sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n        <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n        <select class=\"form-control\" [formControl]=\"albumid\">\n            <option ng-selected=\"true\" value=\"\">Select the album</option>\n            <option *ngFor=\"let album of albumlist\" [ngValue]=\"album._id\">{{album.albumname}}</option>\n        </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('albumid').dirty && addSongForm.get('albumid').errors\">\n        <span class=\"col-sm-2\"></span>\n        <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('albumid').errors.required\">\n            Please enter the album\n        </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songname').invalid && addSongForm.get('songname').dirty}\">\n      <label for=\"songname\" class=\"col-sm-2 control-label\">Song Name <sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n          <input type=\"text\" class=\"form-control\" [formControl]=\"songname\" id=\"songname\" placeholder=\"Song Name\">\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('songname').dirty && addSongForm.get('songname').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('songname').errors.required\">\n              Please enter the song name\n          </span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"songlyric\" class=\"col-sm-2 control-label\">Lyric</label>\n      <div class=\"input-group col-sm-10\">\n          <textarea class=\"form-control\" id=\"songlyric\" rows=\"10\" [formControl]=\"songlyric\" placeholder=\"Song Lyric\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songgenre').invalid && addSongForm.get('songgenre').dirty}\">\n      <label for=\"songgenre\" class=\"col-sm-2 control-label\">Genre</label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n          <select class=\"form-control\" [formControl]=\"songgenre\">\n              <option ng-selected=\"true\" value=\"\">Select the genre</option>\n              <option *ngFor=\"let a of genre\" >{{a}}</option>\n          </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('songgenre').dirty && addSongForm.get('songgenre').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('songgenre').errors.required\">\n              Please select song genre\n          </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songprice').invalid && addSongForm.get('songprice').dirty}\">\n      <label for=\"songprice\" class=\"col-sm-2 control-label\">Price</label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\">Rp</div>\n          <input type=\"number\" class=\"form-control\" id=\"songprice\" [formControl]=\"songprice\" placeholder=\"Song Price\">\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('songprice').dirty && addSongForm.get('songprice').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('songprice').errors.required\">\n              Please enter price\n          </span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('songprice').errors.pattern\">\n              Please enter a valid amount\n          </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songprvw').invalid && addSongForm.get('songprvw').dirty}\">\n      <label for=\"songprvw\" class=\"col-sm-2 control-label\">Song Preview</label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n          <input type=\"file\" (change)=\"prvwfileChangeEvent($event)\" name=\"songprvw\" id=\"songprvw\" placeholder=\"Song preview\">\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songfile').invalid && addSongForm.get('songfile').dirty}\">\n      <label for=\"songfile\" class=\"col-sm-2 control-label\">Song File</label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n          <input type=\"file\" (change)=\"songfileChangeEvent($event)\" name=\"songfile\" id=\"songfile\" placeholder=\"Song file\">\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\"></label>\n      <div class=\"col-sm-5\">\n          <button type=\"submit\" [disabled]=\"addSongForm.invalid\" class=\"btn btn-primary\">Submit</button>\n          <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n      </div>\n      <div class=\"col-sm-5\" style=\"text-align:right\">\n          <sup>*</sup> required\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/song/addsong/addsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddsongComponent = (function () {
    function AddsongComponent(fb, authService, artistService, albumService, songService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.genre = ['Alternative', 'Blues', 'Children', 'Classical', 'Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop', 'Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age', 'Pop', 'RnB', 'Reggae', 'Rock', 'Soundtrack', 'Vocal', 'Others'];
        this.PrvwfilesToUpload = [];
        this.SongfilesToUpload = [];
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songlyric = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songprice = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
    }
    AddsongComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.getArtistList(this.userObj.userid);
        this.getAlbumList(this.userObj.userid);
        this.songid = '';
        this.addSongForm = this.fb.group({
            artistid: this.artistid,
            albumid: this.albumid,
            songname: this.songname,
            songlyric: this.songlyric,
            songgenre: this.songgenre,
            songprice: this.songprice,
            songprvw: this.PrvwfilesToUpload,
            songfile: this.SongfilesToUpload,
            songprvwpath: this.songprvwpath,
            songprvwname: this.songprvwname,
            songfilepath: this.songfilepath,
            songfilename: this.songfilename,
        });
    };
    AddsongComponent.prototype.getArtistList = function (id) {
        var _this = this;
        this.artistService.getArtistList(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.artistlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.artistlist = [{ _id: '', artistname: 'Error artist list' }];
                }
            }
        });
    };
    AddsongComponent.prototype.getAlbumList = function (id) {
        var _this = this;
        this.albumService.getAlbumList(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.albumlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.albumlist = [{ _id: '', albumname: 'Error album list' }];
                }
            }
        });
    };
    AddsongComponent.prototype.getAlbumListbyArtist = function (id, artistid) {
        var _this = this;
        this.albumService.getAlbumListbyArtist(id, artistid).subscribe(function (data) {
            if (data.success === true) {
                console.log(data.data[0]);
                if (data.data[0]) {
                    _this.albumlist = data.data;
                    //console.log(this.albumlist);
                }
                else {
                    _this.albumlist = [{ _id: '', albumname: 'No album list available' }];
                }
            }
        });
    };
    AddsongComponent.prototype.addSong = function (formdata) {
        var _this = this;
        if (this.addSongForm.dirty && this.addSongForm.valid) {
            var prvwfiles = this.PrvwfilesToUpload;
            var theForm_1 = this.addSongForm.value;
            var lformData_1 = new FormData();
            //console.log('Ini file: '+ prvwfiles[0]['name']);
            lformData_1.append('songprvw', prvwfiles[0], prvwfiles[0]['name']);
            //console.log(lformData.getAll('songprvw'));
            //console.dir(theForm);
            this.songService.uploadSongPreview(lformData_1)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.toastr.error(data.message);
                }
                else {
                    theForm_1.songprvwpath = data.filedata.songprvwpath;
                    theForm_1.songprvwname = data.filedata.songprvwname;
                    var songfiles = _this.SongfilesToUpload;
                    lformData_1.append('songfile', songfiles[0], songfiles[0]['name']);
                    _this.songService.uploadSongFile(lformData_1)
                        .subscribe(function (data) {
                        if (data.success === false) {
                            _this.toastr.error(data.message);
                        }
                        else {
                            theForm_1.songfilepath = data.filedata.songfilepath;
                            theForm_1.songfilename = data.filedata.songfilename;
                            theForm_1.status = 'active';
                            if (_this.songid !== '') {
                                theForm_1.songid = _this.songid;
                            }
                            _this.songService.saveSong(_this.userObj.userid, theForm_1.artistid, theForm_1.albumid, theForm_1)
                                .subscribe(function (data) {
                                if (data.success === false) {
                                    _this.toastr.error(data.message);
                                }
                                else {
                                    _this.toastr.success(data.message);
                                    _this.router.navigate(['listsong']);
                                }
                                _this.addSongForm.reset();
                            });
                        }
                    });
                }
            });
        }
    };
    AddsongComponent.prototype.prvwfileChangeEvent = function (fileInput) {
        this.PrvwfilesToUpload = fileInput.target.files;
        console.log('content file: ' + this.PrvwfilesToUpload);
    };
    AddsongComponent.prototype.songfileChangeEvent = function (fileInput) {
        this.SongfilesToUpload = fileInput.target.files;
        console.log('content file: ' + this.SongfilesToUpload);
    };
    AddsongComponent.prototype.artistChangeEvent = function (selectedValue) {
        var result = selectedValue.target.value;
        // result is 1: artistid. Therefore need split
        var res = result.split(" ");
        this.getAlbumListbyArtist(this.userObj.userid, res[1]);
    };
    return AddsongComponent;
}());
AddsongComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-addsong',
        template: __webpack_require__("../../../../../src/app/components/song/addsong/addsong.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/song/addsong/addsong.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _j || Object])
], AddsongComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=addsong.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/song/editsong/editsong.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/song/editsong/editsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Edit Song</h3>\n    </div>\n\n    <form [formGroup]=\"songForm\" (ngSubmit)=\"saveSong(songForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('songname').invalid && songForm.get('songname').dirty}\">\n            <label for=\"songname\" class=\"col-sm-2 control-label\">Song Name</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <input type=\"text\" class=\"form-control\" id=\"songname\" [formControl]=\"songname\" placeholder=\"Song Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('songname').dirty && songForm.get('songname').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your {{ userObj.username }} song name</span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('artistid').invalid && songForm.get('artistid').dirty}\">\n            <label for=\"artistid\" class=\"col-sm-2 control-label\">Artist</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"artistid\" (change)=\"artistChangeEvent($event)\">\n                    <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('artistid').dirty && songForm.get('artistid').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('artistid').errors.required\">\n                    Please select artist status\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('albumid').invalid && songForm.get('albumid').dirty}\">\n            <label for=\"albumid\" class=\"col-sm-2 control-label\">Album</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"albumid\">\n                    <option *ngFor=\"let album of albumlist\" [ngValue]=\"album._id\">{{album.albumname}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('albumid').dirty && songForm.get('albumid').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('albumid').errors.required\">\n                    Please select album song\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"songlyric\" class=\"col-sm-2 control-label\">Lyric</label>\n            <div class=\"input-group col-sm-10\">\n                <textarea class=\"form-control\" id=\"songlyric\" rows=\"10\" [formControl]=\"songlyric\" placeholder=\"Song Lyric\"></textarea>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('songgenre').invalid && songForm.get('songgenre').dirty}\">\n            <label for=\"songgenre\" class=\"col-sm-2 control-label\">Song Genre</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"songgenre\">\n                    <option *ngFor=\"let g of genre\" >{{g}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('songgenre').dirty && songForm.get('songgenre').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('songgenre').errors.required\">\n                    Please select song genre\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('songprice').invalid && songForm.get('songprice').dirty}\">\n            <label for=\"songprice\" class=\"col-sm-2 control-label\">Price</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">Rp</div>\n                <input type=\"number\" class=\"form-control\" id=\"songprice\" [formControl]=\"songprice\" placeholder=\"Enter price\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('songprice').dirty && songForm.get('songprice').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('songprice').errors.required\">\n                    Please enter price\n                </span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('songprice').errors.pattern\">\n                    Please enter a valid amount\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('songpublish').invalid && songForm.get('songpublish').dirty}\">\n            <label for=\"songpublish\" class=\"col-sm-2 control-label\">Song Published?</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"songpublish\">\n                    <option *ngFor=\"let g of ynlist\" >{{g}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('songpublish').dirty && songForm.get('songpublish').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('songpublish').errors.required\">\n                    Please select the options\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songbuy\" class=\"col-sm-2 control-label\">Total Purchased</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-download\"></i></div>\n                <div class=\"form-ele\">{{ song?.songbuy }}</div>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('status').invalid && songForm.get('status').dirty}\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select class=\"form-control\" [formControl]=\"status\">\n                    <option *ngFor=\"let a of sts\" >{{a}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('status').dirty && songForm.get('status').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('status').errors.required\">\n                    Please select song status\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"submit\" [disabled]=\"songForm.invalid\" class=\"btn btn-primary\">{{ btnLbl }}</button>\n                <button type=\"reset\" class=\"btn btn-default\" (click)=\"onBack()\">Back</button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/song/editsong/editsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditsongComponent = (function () {
    function EditsongComponent(fb, authService, artistService, albumService, songService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.sts = ['active', 'inactive'];
        this.genre = ['Alternative', 'Blues', 'Children', 'Classical', 'Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop', 'Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age', 'Pop', 'RnB', 'Reggae', 'Rock', 'Soundtrack', 'Vocal', 'Others'];
        this.ynlist = ['Y', 'N'];
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.albumid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songlyric = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songprice = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
        this.songpublish = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.songbuy = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
    }
    EditsongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.songid = params['id'];
            _this.btnLbl = "Update";
        });
        this.getSelectedSong(this.songid);
        this.userObj = this.authService.currentUser;
        this.getArtistList(this.userObj.userid);
        this.songForm = this.fb.group({
            artistid: this.artistid,
            albumid: this.albumid,
            songname: this.songname,
            songlyric: this.songlyric,
            songgenre: this.songgenre,
            songprice: this.songprice,
            songpublish: this.songpublish,
            songbuy: this.songbuy,
            status: this.status
        });
    };
    EditsongComponent.prototype.getArtistList = function (id) {
        var _this = this;
        this.artistService.getArtistList(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.artistlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.artistlist = [{ _id: '', artistname: 'Error artist list' }];
                }
            }
        });
    };
    EditsongComponent.prototype.getAlbumListbyArtist = function (id, artistid) {
        var _this = this;
        this.albumService.getAlbumListbyArtist(id, artistid).subscribe(function (data) {
            if (data.success === true) {
                console.log(data.data[0]);
                if (data.data[0]) {
                    _this.albumlist = data.data;
                    //console.log(this.albumlist);
                }
                else {
                    _this.albumlist = [{ _id: '', albumname: 'No album list available' }];
                }
            }
        });
    };
    EditsongComponent.prototype.getSelectedSong = function (id) {
        var _this = this;
        this.songService.getSong(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.partistid = data.data[0].artistid;
                    _this.getAlbumListbyArtist(_this.userObj.userid, _this.partistid);
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Song id is incorrect in the URL');
                    _this.router.navigate(['listsong']);
                }
            }
        });
    };
    EditsongComponent.prototype.populateForm = function (data) {
        this.songForm.patchValue({
            artistid: data.artistid,
            albumid: data.albumid,
            songname: data.songname,
            songlyric: data.songlyric,
            songgenre: data.songgenre,
            songprice: data.songprice,
            songpublish: data.songpublish,
            songbuy: data.songbuy,
            status: data.status
        });
    };
    EditsongComponent.prototype.saveSong = function (formdata) {
        var _this = this;
        if (this.songForm.valid) {
            var theForm = this.songForm.value;
            if (this.songid !== '') {
                theForm.songid = this.songid;
            }
            this.songService.saveSong(this.userObj.userid, theForm.artistid, theForm.albumid, theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                }
                if (!_this.songid) {
                    _this.songForm.reset();
                }
            });
        }
    };
    EditsongComponent.prototype.onBack = function () {
        this.router.navigate(['/listsong'], { preserveQueryParams: true });
    };
    EditsongComponent.prototype.artistChangeEvent = function (selectedValue) {
        var result = selectedValue.target.value;
        // result is 1: artistid. Therefore need split
        var res = result.split(" ");
        this.getAlbumListbyArtist(this.userObj.userid, res[1]);
    };
    return EditsongComponent;
}());
EditsongComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editsong',
        template: __webpack_require__("../../../../../src/app/components/song/editsong/editsong.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/song/editsong/editsong.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _j || Object])
], EditsongComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=editsong.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/song/editsongfiles/editsongfiles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/song/editsongfiles/editsongfiles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Change Song Files</h3>\n    </div>\n    <form [formGroup]=\"songForm\" (ngSubmit)=\"updateSong(songForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"input-group col-sm-10\">\n          <label for=\"songprvw\" class=\"col-sm-3 control-label\">Song Preview</label>\n          <div class=\"input-group\">\n              <label class=\"input-group-btn\">\n                  <span class=\"btn btn-primary\">\n                      Browse&hellip; <input type=\"file\" (change)=\"PrvwfileChangeEvent($event)\" name=\"songprvw\" id=\"songprvw\" style=\"display:none\">\n                  </span>\n              </label>\n              <input type=\"text\" class=\"form-control\" value=\"{{ this.newprvwfile }}\">  \n            </div>\n      </div>\n      <br><br>\n      <div class=\"input-group col-sm-10\">\n          <label for=\"songfile\" class=\"col-sm-3 control-label\">Song File</label>\n          <div class=\"input-group\">\n              <label class=\"input-group-btn\">\n                  <span class=\"btn btn-primary\">\n                      Browse&hellip; <input type=\"file\" (change)=\"SongfileChangeEvent($event)\" name=\"songfile\" id=\"songfile\" style=\"display:none\">\n                  </span>\n              </label>\n              <input type=\"text\" class=\"form-control\" value=\"{{ this.newsongfile }}\">  \n            </div>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\">     </label>\n          <div class=\"col-sm-10\">\n              <br>\n              <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n          </div>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/song/editsongfiles/editsongfiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditsongfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditsongfilesComponent = (function () {
    function EditsongfilesComponent(fb, authService, songService, route, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.songService = songService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.PrvwfilesToUpload = [];
        this.SongfilesToUpload = [];
        this.songprvwpath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.songprvwname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.songfilepath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.songfilename = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
    }
    EditsongfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.songForm = this.fb.group({
            songprvwpath: this.songprvwpath,
            songprvwname: this.songprvwname,
            songfilepath: this.songfilepath,
            songfilename: this.songfilename,
        });
        this.route.params.subscribe(function (params) {
            _this.songid = params['id'];
            _this.getSong(_this.songid);
        });
    };
    EditsongfilesComponent.prototype.getSong = function (id) {
        var _this = this;
        this.songService.getSong(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.song = data.data[0];
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Song id is incorrect in the URL');
                    _this.router.navigate(['listsong']);
                }
            }
        });
    };
    EditsongfilesComponent.prototype.populateForm = function (data) {
        this.deletedPrvwFile = this.song.songprvwname;
        this.deletedSongFile = this.song.songfilename;
        this.songForm.patchValue({
            songprvwpath: data.songprvwpath,
            songprvwname: data.songprvwname,
            songfilepath: data.songfilepath,
            songfilename: data.songfilename
        });
    };
    EditsongfilesComponent.prototype.PrvwfileChangeEvent = function (fileInput) {
        this.PrvwfilesToUpload = fileInput.target.files;
        this.newprvwfile = this.PrvwfilesToUpload[0]['name'];
        this.uploadNewPreview(this.PrvwfilesToUpload);
    };
    EditsongfilesComponent.prototype.SongfileChangeEvent = function (fileInput) {
        this.SongfilesToUpload = fileInput.target.files;
        this.newsongfile = this.SongfilesToUpload[0]['name'];
        this.uploadNewSong(this.SongfilesToUpload);
    };
    EditsongfilesComponent.prototype.uploadNewPreview = function (newFileData) {
        var _this = this;
        var files = newFileData;
        var lformData = new FormData();
        lformData.append('songprvw', files[0], files[0]['name']);
        this.songService.uploadSongPreview(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.toastr.error(data.message);
            }
            else {
                var payloadData_1 = _this.songForm.value;
                _this.songService.deleteSongPreview(payloadData_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        if (payloadData_1) {
                            console.log('File deleted - ' + payloadData_1.songprvwname);
                        }
                    }
                });
                _this.songForm.value.songprvwpath = data.filedata.songprvwpath;
                _this.songForm.value.songprvwname = data.filedata.songprvwname;
                _this.songService.updateSongPreview(_this.songid, _this.songForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        console.log('Success update song preview.');
                        _this.toastr.success(data.message);
                    }
                });
            }
        });
    };
    EditsongfilesComponent.prototype.uploadNewSong = function (newFileData) {
        var _this = this;
        var files = newFileData;
        var lformData = new FormData();
        lformData.append('songfile', files[0], files[0]['name']);
        this.songService.uploadSongFile(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.toastr.error(data.message);
            }
            else {
                var payloadData_2 = _this.songForm.value;
                _this.songService.deleteSongFile(payloadData_2)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        console.log('File deleted - ' + payloadData_2.songfilename);
                    }
                });
                _this.songForm.value.songfilepath = data.filedata.songfilepath;
                _this.songForm.value.songfilename = data.filedata.songfilename;
                _this.songService.updateSongFile(_this.songid, _this.songForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        console.log('Success update song file.');
                        _this.toastr.success(data.message);
                    }
                });
            }
        });
    };
    EditsongfilesComponent.prototype.onBack = function () {
        this.router.navigate(['/listsong'], { preserveQueryParams: true });
    };
    return EditsongfilesComponent;
}());
EditsongfilesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-editsongfiles',
        template: __webpack_require__("../../../../../src/app/components/song/editsongfiles/editsongfiles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/song/editsongfiles/editsongfiles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _f || Object])
], EditsongfilesComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=editsongfiles.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/song/listsong/listsong.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/song/listsong/listsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>List Song</h3>\n  </div>\n\n  <div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Search Parameter</h3>\n    </div>\n    <div class=\"panel-body\">\n      <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n                <label for=\"artistid\">Artist</label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                    <select class=\"form-control\" [formControl]=\"artistid\" (change)=\"artistChangeEvent($event)\">\n                        <option ng-selected=\"true\" value=\"\">Select the artist</option>\n                        <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n                    </select>\n                  </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n                <label for=\"albumid\">Album</label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                    <select class=\"form-control\" [formControl]=\"albumid\">\n                        <option ng-selected=\"true\" value=\"\">Select the album</option>\n                        <option *ngFor=\"let album of albumlist\" [ngValue]=\"album._id\">{{album.albumname}}</option>\n                    </select>\n                  </div>\n            </div>\n\n\n          </div><br>\n\n          <div class=\"row\">\n              <div class=\"col-sm-12 col-md-6\">\n                  <label for=\"songname\">Song Name</label>\n                  <div class=\"input-group col-sm-10\">\n                      <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                      <input type=\"text\" class=\"form-control\" id=\"songname\" [formControl]=\"songname\" placeholder=\"Song Name\">\n                  </div>\n              </div>\n              <div class=\"col-sm-12 col-md-2\">\n                  <label for=\"albumyear\">Album Year</label>\n                  <div class=\"input-group col-sm-10\">\n                      <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                      <input type=\"text\" class=\"form-control\" id=\"albumyear\" [formControl]=\"albumyear\" placeholder=\"Album Year\">\n                  </div>\n              </div>\n              <div class=\"col-sm-12 col-md-3\">\n                  <label for=\"songgenre\">Genre</label>\n                  <div class=\"input-group col-sm-10\">\n                      <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                      <select class=\"form-control\" [formControl]=\"songgenre\">\n                        <option ng-selected=\"true\" value=\"\">Select the genre</option>  \n                        <option *ngFor=\"let g of genre\" >{{g}}</option>\n                      </select>\n                  </div>\n              </div>\n          </div><br>\n          <div class=\"row\">\n              <div class=\"col-sm-12 col-md-3\">\n                  <label for=\"songpublish\">Publish?</label>\n                  <div class=\"input-group col-sm-10\">\n                      <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                      <select class=\"form-control\" [formControl]=\"songpublish\">\n                        <option ng-selected=\"true\" value=\"\">Select the options</option>  \n                        <option *ngFor=\"let a of ynlist\" >{{a}}</option>\n                      </select>\n                  </div>\n              </div>  \n              <div class=\"col-sm-12 col-md-3\">\n                  <label for=\"songbuy\">Buy?</label>\n                  <div class=\"input-group col-sm-10\">\n                      <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                      <select class=\"form-control\" [formControl]=\"songbuy\">\n                        <option ng-selected=\"true\" value=\"\">Select the options</option>  \n                        <option *ngFor=\"let a of ynlist\" >{{a}}</option>\n                      </select>\n                  </div>\n              </div>  \n              <div class=\"col-sm-12 col-md-3\">\n                  <label for=\"status\">Status</label>\n                  <div class=\"input-group col-sm-10\">\n                      <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                      <select class=\"form-control\" [formControl]=\"status\">\n                        <option ng-selected=\"true\" value=\"\">Select the status</option>  \n                        <option *ngFor=\"let a of sts\" >{{a}}</option>\n                      </select>\n                  </div>\n              </div><br>\n              <div class=\"col-sm-12 col-md-2\">\n                  <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n              </div>                  \n          </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"panel panel-danger\" *ngIf=\"songs && totalrows < 1\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">No song found</h3> \n      </div>\n\n      <div class=\"panel-body\">\n          It seems like you havn't entered any songs for the selected criteria. Please add the song <a style=\"cursor:pointer\" (click)=\"toaddSongs()\">here</a>.\n      </div>\n  </div>\n\n  <div class=\"panel panel-default\" *ngIf=\"songs && totalrows > 0\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n      </div>\n      <div class=\"panel-body\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                  <thead>\n                      <tr>\n                          <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songname')\">Song Name</a></th>\n                          <th width=\"20%\">Artist</th>\n                          <th width=\"20%\">Album</th>\n                          <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortSong('albumyear')\">Year</a></th>\n                          <th width=\"9%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songgenre')\">Genre</a></th>\n                          <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songprice')\">Price</a></th>\n                          <!-- <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th> -->\n                          <th width=\"20%\">Action</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor='let song of songs; let songIndex = index'>\n                          <td><a style=\"cursor:pointer\" (click)=\"showSong(song._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ song.songname}}</a></td>\n                          <td>{{ song.artist }}</td>\n                          <td>{{ song.album }}</td>\n                          <td>{{ song.albumyear}}</td>\n                          <td>{{ song.songgenre}}</td>\n                          <td class=\"text-right\">{{ song.songprice | currency: 'IDR':true }}</td>\n                          <!-- <td>{{ albm.status}}</td> -->\n                          <td>\n                              <button type=\"button\" class=\"btn-xs btn-info\" aria-label=\"View\" (click)=\"editSongFiles(song._id, song.songpublish, song.songbuy)\">\n                                  <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Song File\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Edit\" (click)=\"editSong(song._id, song.songpublish, song.songbuy)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Song Data\">\n                                  <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-primary\" aria-label=\"Delete\" (click)=\"confirmDel(songIndex, song._id, song.songpublish, song.songbuy)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Song\">\n                                  <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                              </button>\n                          </td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div> \n          <div style=\"text-align:center\" *ngIf=\"songs && totalrows > 10\">\n              <nav aria-label=\"Page navigation\">\n                  <ul class=\"pagination\">\n                      <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                          <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                      </li>\n                  </ul>\n              </nav>\n          </div> \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/song/listsong/listsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("../../../../../src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("../../../../../src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListsongComponent = (function () {
    function ListsongComponent(fb, authService, artistService, albumService, songService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.genre = ['Alternative', 'Blues', 'Children', 'Classical', 'Comedy', 'Country', 'Dance', 'Easy Listening', 'Electronic', 'Hip Hop', 'Christian Gospel', 'Instrumental', 'Jazz', 'Latin', 'New Age', 'Pop', 'RnB', 'Reggae', 'Rock', 'Soundtrack', 'Vocal', 'Others'];
        this.sts = ['active', 'inactive'];
        this.ynlist = ['Y', 'N'];
        this.songname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.albumid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.songgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.songpublish = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.songbuy = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('active', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].nullValidator]);
    }
    ListsongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.reportForm = this.fb.group({
            songname: this.songname,
            artistid: this.artistid,
            albumid: this.albumid,
            albumyear: this.albumyear,
            songgenre: this.songgenre,
            songpublish: this.songpublish,
            songbuy: this.songbuy,
            status: this.status
        });
        this.getArtistList(this.userObj.userid);
        this.getAlbumList(this.userObj.userid);
        this.route.queryParams.forEach(function (params) {
            _this.qsongname = params['songname'] || '';
            _this.qartistid = params['artistid'] || '';
            _this.qalbumid = params['albumid'] || '';
            _this.qalbumyear = params['albumyear'] || '';
            _this.qsonggenre = params['songgenre'] || '';
            _this.qsongpublish = params['songpublish'] || '';
            _this.qsongbuy = params['songbuy'] || '';
            _this.qstatus = params['status'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            var payload = {};
            payload.status = _this.qstatus;
            payload.artistid = _this.qartistid;
            payload.albumid = _this.qalbumid;
            payload.songname = _this.qsongname;
            payload.albumyear = _this.qalbumyear;
            payload.songgenre = _this.qsonggenre;
            payload.songpublish = _this.qsongpublish;
            payload.songbuy = _this.qsongbuy;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(_this.userObj.userid, payload);
            _this.reportForm.patchValue({
                songname: _this.qsongname,
                artistid: _this.qartistid,
                albumid: _this.qalbumid,
                albumyear: _this.qalbumyear,
                songgenre: _this.qsonggenre,
                songpublish: _this.qsongpublish,
                songbuy: _this.qsongbuy,
                status: _this.qstatus
            });
        });
    };
    ListsongComponent.prototype.getArtistList = function (id) {
        var _this = this;
        this.artistService.getArtistList(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.artistlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.artistlist = [{ _id: '', artistname: 'Error artist list' }];
                }
            }
        });
    };
    ListsongComponent.prototype.getAlbumList = function (id) {
        var _this = this;
        this.albumService.getAlbumList(id).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.albumlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.albumlist = [{ _id: '', albumname: 'Error album list' }];
                }
            }
        });
    };
    ListsongComponent.prototype.getAlbumListbyArtist = function (id, artistid) {
        var _this = this;
        this.albumService.getAlbumListbyArtist(id, artistid).subscribe(function (data) {
            if (data.success === true) {
                console.log(data.data[0]);
                if (data.data[0]) {
                    _this.albumlist = data.data;
                    //console.log(this.albumlist);
                }
                else {
                    _this.albumlist = [{ _id: '', albumname: 'No album list available' }];
                }
            }
        });
    };
    ListsongComponent.prototype.getReport = function (formdata) {
        if (this.reportForm.valid) {
            this.fetchReport(this.userObj.userid, this.reportForm.value);
        }
    };
    ListsongComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.songService.getAggSongs(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.songs = data.data;
                _this.totalrows = +data.totalcount;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qsongname = formval.songname;
                _this.qartistid = formval.artistid;
                _this.qalbumid = formval.albumid;
                _this.qalbumyear = formval.albumyear;
                _this.qsonggenre = formval.songgenre;
                _this.qsongpublish = formval.songpublish;
                _this.qsongbuy = formval.songbuy;
                _this.qstatus = formval.status;
                _this.reportTitle = 'Songs Result';
            }
        });
    };
    ListsongComponent.prototype.setPage = function (page) {
        this.router.navigate(['listsong'], {
            queryParams: {
                songname: this.qsongname,
                artistid: this.qartistid,
                albumid: this.qalbumid,
                albumyear: this.qalbumyear,
                songgenre: this.qsonggenre,
                songpublish: this.qsongpublish,
                songbuy: this.qsongbuy,
                status: this.qstatus,
                page: page,
                sortby: this.qsort
            }
        });
    };
    ListsongComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    ListsongComponent.prototype.sortSong = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(['listsong'], {
            queryParams: {
                songname: this.qsongname,
                artistid: this.qartistid,
                albumid: this.qalbumid,
                albumyear: this.qalbumyear,
                songgenre: this.qsonggenre,
                songpublish: this.qsongpublish,
                songbuy: this.qsongbuy,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort
            }
        });
    };
    ListsongComponent.prototype.artistChangeEvent = function (selectedValue) {
        var result = selectedValue.target.value;
        // result is 1: artistid. Therefore need split
        var res = result.split(" ");
        this.getAlbumListbyArtist(this.userObj.userid, res[1]);
    };
    ListsongComponent.prototype.editSongFiles = function (songid, songpublish, songbuy) {
        if (songbuy > 0) {
            this.toastr.warning("This song has been purchased. The file can not be edited");
        }
        else {
            //this.toastr.warning("This song id: " + songid);      
            this.router.navigate(["editsongfiles/" + songid], {
                queryParams: {
                    songname: this.qsongname,
                    artistid: this.qartistid,
                    albumid: this.qalbumid,
                    albumyear: this.qalbumyear,
                    songgenre: this.qsonggenre,
                    songpublish: this.qsongpublish,
                    songbuy: this.qsongbuy,
                    status: this.qstatus,
                    page: this.qpage || 1,
                    sortby: this.qsort
                }
            });
        }
    };
    ListsongComponent.prototype.showSong = function (songid) {
        this.router.navigate(["viewsong/" + songid], {
            queryParams: {
                songname: this.qsongname,
                artistid: this.qartistid,
                albumid: this.qalbumid,
                albumyear: this.qalbumyear,
                songgenre: this.qsonggenre,
                songpublish: this.qsongpublish,
                songbuy: this.qsongbuy,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort
            }
        });
    };
    ListsongComponent.prototype.editSong = function (songid, songpublish, songbuy) {
        if (songbuy > 0) {
            this.toastr.warning("This song has been purchased. The file can not be edited");
        }
        else {
            this.router.navigate(["editsong/" + songid], {
                queryParams: {
                    songname: this.qsongname,
                    artistid: this.qartistid,
                    albumid: this.qalbumid,
                    albumyear: this.qalbumyear,
                    songgenre: this.qsonggenre,
                    songpublish: this.qsongpublish,
                    songbuy: this.qsongbuy,
                    status: this.qstatus,
                    page: this.qpage || 1,
                    sortby: this.qsort
                }
            });
        }
    };
    ListsongComponent.prototype.confirmDel = function (idx, songid, songpublish, songbuy) {
        var _this = this;
        if (songbuy > 0) {
            this.toastr.warning("This song has been purchased. The file can not be edited");
        }
        else {
            if (confirm('Do you really want to delete this record?')) {
                this.songService.deleteSong(songid)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.songs.splice(idx, 1);
                        _this.totalrows = _this.totalrows - 1;
                        _this.toastr.success(data.message);
                    }
                });
            }
        }
    };
    ListsongComponent.prototype.toaddSongs = function () {
        this.router.navigate(['/addsong']);
    };
    return ListsongComponent;
}());
ListsongComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-listsong',
        template: __webpack_require__("../../../../../src/app/components/song/listsong/listsong.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/song/listsong/listsong.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]) === "function" && _j || Object])
], ListsongComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=listsong.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/song/viewsong/viewsong.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/song/viewsong/viewsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Song Details</h3>\n    </div>\n    <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label for=\"songname\" class=\"col-sm-2 control-label\">Song Name</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.songname }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"artist\" class=\"col-sm-2 control-label\">Artist</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.artist }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"album\" class=\"col-sm-2 control-label\">Album</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.album }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songlyric\" class=\"col-sm-2 control-label\">Lyric</label>\n            \n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.songlyric }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songgenre\" class=\"col-sm-2 control-label\">Genre</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.songgenre }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songprice\" class=\"col-sm-2 control-label\">Price</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">Rp</div>\n                <div class=\"form-ele\">{{ song?.songprice | currency: 'IDR':true }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songprvwpath\" class=\"col-sm-2 control-label\">Preview</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-music\"></i></div>\n                <div class=\"form-ele\">{{ song?.songprvwpath }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songfilepath\" class=\"col-sm-2 control-label\">File</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-music\"></i></div>\n                <div class=\"form-ele\">{{ song?.songfilepath }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songpublish\" class=\"col-sm-2 control-label\">Publish?</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.songpublish }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songbuy\" class=\"col-sm-2 control-label\">Total Purchased</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-download\"></i></div>\n                <div class=\"form-ele\">{{ song?.songbuy }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.status }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">    </label>\n            <div class=\"col-sm-10\">\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/song/viewsong/viewsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_song_service__ = __webpack_require__("../../../../../src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewsongComponent = (function () {
    function ViewsongComponent(authService, songService, toastr, route, router) {
        this.authService = authService;
        this.songService = songService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
    }
    ViewsongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var songid = params['id'];
            _this.getSong(songid);
        });
    };
    ViewsongComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewsongComponent.prototype.getSong = function (id) {
        var _this = this;
        this.songService.getSongAgg(id).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                if (data.data[0]) {
                    _this.song = data.data[0];
                }
                else {
                    _this.toastr.error('Song id is incorrect in the URL');
                }
            }
        });
    };
    ViewsongComponent.prototype.onBack = function () {
        this.router.navigate(['/listsong'], { preserveQueryParams: true });
    };
    return ViewsongComponent;
}());
ViewsongComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-viewsong',
        template: __webpack_require__("../../../../../src/app/components/song/viewsong/viewsong.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/song/viewsong/viewsong.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_song_service__["a" /* SongService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], ViewsongComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=viewsong.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  \n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\" class=\"form-signin\" novalidate autocomplete=\"off\">\n      <h3>Please sign in</h3>\n      <label for=\"inputUser\" class=\"sr-only\">Username</label>\n      <input type=\"text\" id=\"inputUser\" class=\"form-control\" [formControl]=\"username\" placeholder=\"Username\" autofocus>\n      <div class=\"text-danger\" *ngIf=\"loginForm.get('username').dirty && loginForm.get('username').invalid\">\n          Please enter username\n      </div>\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [formControl]=\"password\" placeholder=\"Password\">\n      <div class=\"text-danger\" *ngIf=\"loginForm.get('password').dirty && loginForm.get('password').invalid\">\n          Please enter password\n      </div>\n      <br><br>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"loginForm.invalid\" >Sign in</button>\n      <br>\n      <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xs-6\">Forgot Password</div>\n          <div class=\"col-md-6 col-sm-6 col-xs-6\" style=\"text-align: right\"><a [routerLink]=\"['/register']\">Register</a></div>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, authService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.loginForm = this.fb.group({
            username: this.username,
            password: this.password,
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function (formdata) {
        var _this = this;
        if (this.loginForm.dirty && this.loginForm.valid) {
            this.authService.login(this.loginForm.value)
                .subscribe(function (data) {
                if (data.json().success === false) {
                    _this.toastr.error(data.json().message);
                }
                else {
                    _this.toastr.success('Login successful.');
                    _this.router.navigate(['report']);
                }
                _this.loginForm.reset();
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = (function () {
    function LogoutComponent(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.authService.logout();
        this.toastr.success('You have been logged out.');
        this.router.navigate(['login']);
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], LogoutComponent);

var _a, _b, _c;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/password/password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1>Change Password</h1>\n    </div>\n  \n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"updatePassword(passwordForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('oldpassword').invalid && passwordForm.get('oldpassword').dirty}\">\n            <label for=\"oldpassword\" class=\"col-sm-2 control-label\">Existing Password</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-lock\"></i></div>\n                <input type=\"password\" class=\"form-control\" id=\"oldpassword\" [formControl]=\"oldpassword\" placeholder=\"Existing Password\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"passwordForm.get('oldpassword').dirty && passwordForm.get('oldpassword').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('oldpassword').errors.required\">\n                    Please enter existing password\n                </span>\n            </div>\n        </div>\n  \n        <div formGroupName=\"passwordGroup\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup').errors }\">\n  \n            <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup.password').invalid && passwordForm.get('passwordGroup.password').dirty}\">\n                <label for=\"password\" class=\"col-sm-2 control-label\">New Password</label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input type=\"password\" class=\"form-control\" id=\"password\" [formControl]=\"password\" placeholder=\"New Pasword\">\n                </div>\n                <div class=\"text-danger\"  *ngIf=\"passwordForm.get('passwordGroup.password').dirty && passwordForm.get('passwordGroup.password').errors\">\n                    <span class=\"col-sm-2\"></span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.password').errors.required\">\n                        Please enter password\n                    </span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.password').errors.pattern\">\n                        Password must contain one letter, number & special characters\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup.retypepass').invalid && passwordForm.get('passwordGroup.retypepass').dirty}\">\n                <label for=\"retypepass\" class=\"col-sm-2 control-label\">Retype Password <sup>*</sup></label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input type=\"password\" class=\"form-control\" [formControl]=\"retypepass\" id=\"retypepass\" placeholder=\"Retype Password\">\n                </div>\n                <div class=\"text-danger\" *ngIf=\"(passwordForm.get('passwordGroup.retypepass').touched || passwordForm.get('passwordGroup.retypepass').dirty) && (passwordForm.get('passwordGroup.retypepass').errors || passwordForm.get('passwordGroup').errors)\">\n                    <span class=\"col-sm-2\"></span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.retypepass').errors?.required\">\n                        Please confirm your password\n                    </span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup').errors?.mismatchedPassword\">\n                        Password do not match\n                    </span>\n                </div>\n            </div>\n  \n        </div>\n    \n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"submit\" [disabled]=\"passwordForm.invalid\" class=\"btn btn-primary\">Update</button>\n                <button type=\"reset\" class=\"btn btn-default\">Cancel</button>\n            </div>\n        </div>\n    </form>\n  \n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/components/user/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordComponent = (function () {
    function PasswordComponent(fb, authService, userService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.oldpassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
        this.retypepass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
    }
    PasswordComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.passwordForm = this.fb.group({
            oldpassword: this.oldpassword,
            passwordGroup: this.fb.group({
                password: this.password,
                retypepass: this.retypepass,
            }, { validator: comparePassword })
        });
    };
    PasswordComponent.prototype.updatePassword = function (formdata) {
        var _this = this;
        if (this.passwordForm.dirty && this.passwordForm.valid) {
            var theForm = this.passwordForm.value;
            var thePass = this.passwordForm.value.passwordGroup.password;
            theForm.password = thePass;
            delete theForm.passwordGroup;
            this.userService.updatePassword(this.userObj.userid, theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                }
                _this.passwordForm.reset();
            });
        }
    };
    return PasswordComponent;
}());
PasswordComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-password',
        template: __webpack_require__("../../../../../src/app/components/user/password/password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/password/password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object])
], PasswordComponent);

function comparePassword(c) {
    var passwordControl = c.get('password');
    var confirmControl = c.get('retypepass');
    if (passwordControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (passwordControl.value === confirmControl.value) {
        return null;
    }
    return { 'mismatchedPassword': true };
}
var _a, _b, _c, _d, _e;
//# sourceMappingURL=password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h1>My Profile</h1>\n    </div>\n    <div class=\"clearfix\">\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateUser(profileForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n          <div class=\"form-group\">\n              <label for=\"username\" class=\"col-sm-2 control-label\">Username</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n                  <div class=\"form-ele\">{{ userObj.username }}</div>\n              </div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('name').invalid && profileForm.get('name').dirty}\">\n              <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                  <input type=\"text\" class=\"form-control\" id=\"name\" [formControl]=\"name\" placeholder=\"Name\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('name').dirty && profileForm.get('name').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your {{ userObj.username }} name</span>\n              </div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('email').invalid && profileForm.get('email').dirty}\">\n              <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\">@</div>\n                  <input type=\"text\" class=\"form-control\" id=\"email\" [formControl]=\"email\" placeholder=\"Email\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('email').dirty && profileForm.get('email').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter a valid email</span>\n              </div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('contactno').invalid && profileForm.get('contactno').dirty}\">\n              <label for=\"contactno\" class=\"col-sm-2 control-label\">Contact No</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-bold\"></i></div>\n                  <input type=\"text\" class=\"form-control\" id=\"contactno\" [formControl]=\"contactno\" placeholder=\"Contact No\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('contactno').dirty && profileForm.get('contactno').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your Contact Number</span>\n              </div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('bankaccno').invalid && profileForm.get('bankaccno').dirty}\">\n              <label for=\"bankaccno\" class=\"col-sm-2 control-label\">Bank Account No</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-bold\"></i></div>\n                  <input type=\"text\" class=\"form-control\" id=\"bankaccno\" [formControl]=\"bankaccno\" placeholder=\"Bank Account No\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('bankaccno').dirty && profileForm.get('bankaccno').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your Bank Account Number</span>\n              </div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('bankname').invalid && profileForm.get('bankname').dirty}\">\n              <label for=\"bankname\" class=\"col-sm-2 control-label\">Bank Name</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-bold\"></i></div>\n                  <input type=\"text\" class=\"form-control\" id=\"bankname\" [formControl]=\"bankname\" placeholder=\"Bank Name\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('bankname').dirty && profileForm.get('bankname').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your Bank Name</span>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"usertype\" class=\"col-sm-2 control-label\">User Type</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n                  <div class=\"form-ele\">{{ userObj.usertype }}</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"lastlogin\" class=\"col-sm-2 control-label\">Last Login</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-calendar\"></i></div>\n                  <div class=\"form-ele\">{{ userObj.lastlogin | date:'medium' }}</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 control-label\"></label>\n              <div class=\"col-sm-10\">\n                  <button type=\"submit\" [disabled]=\"profileForm.invalid\" class=\"btn btn-primary\">Update</button>\n                  <button type=\"reset\" class=\"btn btn-default\" (click)=\"ngOnInit()\">Cancel</button>\n              </div>\n          </div>\n      </form>                \n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(fb, authService, userService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]);
        this.contactno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.bankaccno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.bankname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.profileForm = this.fb.group({
            name: this.name,
            email: this.email,
            contactno: this.contactno,
            bankaccno: this.bankaccno,
            bankname: this.bankname
        });
        this.userService.getUser(this.userObj.userid).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.user = data.data[0];
                _this.populateForm(_this.user);
            }
        });
    };
    ProfileComponent.prototype.populateForm = function (data) {
        this.profileForm.patchValue({
            name: data.name,
            email: data.email,
            contactno: data.contactno,
            bankaccno: data.bankaccno,
            bankname: data.bankname
        });
    };
    ProfileComponent.prototype.updateUser = function (formdata) {
        var _this = this;
        if (this.profileForm.dirty && this.profileForm.valid) {
            this.userService.updateUser(this.userObj.userid, this.profileForm.value)
                .subscribe(function (data) {
                if (data.success === false) {
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                    var theUser = JSON.parse(localStorage.getItem('currentUser'));
                    theUser.user.name = _this.profileForm.value.name;
                    localStorage.setItem('currentUser', JSON.stringify(theUser));
                }
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _e || Object])
], ProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Register Label</h3>\n  </div>\n\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser(registerForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('name').invalid && registerForm.get('name').dirty}\">\n          <label for=\"name\" class=\"col-sm-2 control-label\">Label Name <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n              <input type=\"text\" class=\"form-control\" [formControl]=\"name\" id=\"name\" placeholder=\"Label Name\">\n          </div>\n          <div class=\"text-danger\" *ngIf=\"registerForm.get('name').dirty && registerForm.get('name').errors\">\n              <span class=\"col-sm-2\"></span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('name').errors.required\">\n                  Please enter your label name\n              </span>\n          </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('email').invalid && registerForm.get('email').dirty}\">\n          <label for=\"email\" class=\"col-sm-2 control-label\">Email <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\">@</div>\n              <input type=\"text\" class=\"form-control\" [formControl]=\"email\" id=\"email\" placeholder=\"Email\">\n          </div>\n          <div class=\"text-danger\" *ngIf=\"registerForm.get('email').dirty && registerForm.get('email').errors\">\n              <span class=\"col-sm-2\"></span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('email').invalid\">\n                  Please enter a valid email\n              </span>\n          </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('contactno').invalid && registerForm.get('contactno').dirty}\">\n        <label for=\"contactno\" class=\"col-sm-2 control-label\">Contact No <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-earphone\"></i></div>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"contactno\" id=\"contactno\" placeholder=\"Contact No\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"registerForm.get('contactno').dirty && registerForm.get('contactno').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('contactno').errors.required\">\n                Please enter your contact no\n            </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('bankaccno').invalid && registerForm.get('bankaccno').dirty}\">\n        <label for=\"bankaccno\" class=\"col-sm-2 control-label\">Bank Account No <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-bitcoin\"></i></div>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"bankaccno\" id=\"bankaccno\" placeholder=\"Bank Account No\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"registerForm.get('bankaccno').dirty && registerForm.get('bankaccno').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('bankaccno').errors.required\">\n                Please enter your bank account no\n            </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('bankname').invalid && registerForm.get('bankname').dirty}\">\n        <label for=\"bankname\" class=\"col-sm-2 control-label\">Bank Name <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-bitcoin\"></i></div>\n            <input type=\"text\" class=\"form-control\" [formControl]=\"bankname\" id=\"bankname\" placeholder=\"Bank Name\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"registerForm.get('bankname').dirty && registerForm.get('bankname').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('bankname').errors.required\">\n                Please enter your bank name\n            </span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"usertype\" class=\"col-sm-2 control-label\">Usertype</label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n            <div class=\"form-ele\">{{ this.usertype.value }}</div>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').invalid && registerForm.get('username').dirty}\">\n          <label for=\"username\" class=\"col-sm-2 control-label\">Username <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n              <input type=\"text\" class=\"form-control\" [formControl]=\"username\" id=\"username\" placeholder=\"Username\">\n          </div>\n          <div class=\"text-danger\" *ngIf=\"registerForm.get('username').dirty && registerForm.get('username').errors\">\n              <span class=\"col-sm-2\"></span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.required\">\n                  Please enter username\n              </span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.minlength\">\n                  Username must be longer than 3 characters.\n              </span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.maxlength\">\n                  Username cannot be longer than 16 characters.\n              </span>\n          </div>\n      </div>\n\n       <div formGroupName=\"passwordGroup\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup').errors }\">\n           \n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup.password').invalid && registerForm.get('passwordGroup.password').dirty}\">\n              <label for=\"password\" class=\"col-sm-2 control-label\">Password <sup>*</sup></label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                  <input type=\"password\" class=\"form-control\" [formControl]=\"password\" id=\"password\" placeholder=\"Pasword\">\n              </div>\n              <div class=\"text-danger\"  *ngIf=\"registerForm.get('passwordGroup.password').dirty && registerForm.get('passwordGroup.password').errors\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.password').errors.required\">\n                      Please enter password\n                  </span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.password').errors.pattern\">\n                      Password must contain one letter, number & special characters\n                  </span>\n              </div>\n          \n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup.retypepass').invalid && registerForm.get('passwordGroup.retypepass').dirty}\">\n              <label for=\"retypepass\" class=\"col-sm-2 control-label\">Retype Password <sup>*</sup></label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                  <input type=\"password\" class=\"form-control\" [formControl]=\"retypepass\" id=\"retypepass\" placeholder=\"Retype Password\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"(registerForm.get('passwordGroup.retypepass').touched || registerForm.get('passwordGroup.retypepass').dirty) && (registerForm.get('passwordGroup.retypepass').errors || registerForm.get('passwordGroup').errors)\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.retypepass').errors?.required\">\n                      Please confirm your password\n                  </span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup').errors?.mismatchedPassword\">\n                      Password do not match\n                  </span>\n              </div>\n          </div>\n       </div>\n      <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\"></label>\n          <div class=\"col-sm-5\">\n              <button type=\"submit\" [disabled]=\"registerForm.invalid\" class=\"btn btn-primary\">Submit</button>\n              <button type=\"reset\" class=\"btn btn-default\">Reset</button>\n          </div>\n          <div class=\"col-sm-5\" style=\"text-align:right\">\n              <sup>*</sup> required\n          </div>\n      </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(fb, userService, router, toastr) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]);
        this.contactno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.bankaccno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.bankname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.usertype = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('label', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(16)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
        this.retypepass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            name: this.name,
            email: this.email,
            contactno: this.contactno,
            bankaccno: this.bankaccno,
            bankname: this.bankname,
            usertype: this.usertype,
            username: this.username,
            passwordGroup: this.fb.group({
                password: this.password,
                retypepass: this.retypepass,
            }, { validator: comparePassword })
        });
    };
    RegisterComponent.prototype.registerUser = function (formdata) {
        var _this = this;
        if (this.registerForm.dirty && this.registerForm.valid) {
            var theForm = this.registerForm.value;
            var thePass = this.registerForm.value.passwordGroup.password;
            theForm.password = thePass;
            delete theForm.passwordGroup;
            this.userService.register(theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.toastr.error(data.message);
                }
                else {
                    _this.toastr.success(data.message);
                    _this.router.navigate(['login']);
                }
                _this.registerForm.reset();
            });
        }
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _d || Object])
], RegisterComponent);

function comparePassword(c) {
    var passwordControl = c.get('password');
    var confirmControl = c.get('retypepass');
    if (passwordControl.pristine || confirmControl.pristine) {
        return null;
    }
    if (passwordControl.value === confirmControl.value) {
        return null;
    }
    return { 'mismatchedPassword': true };
}
var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = (function () {
    function AuthGuard(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.checkLoggedIn(state.url);
    };
    AuthGuard.prototype.checkLoggedIn = function (url) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.toastr.info("Please login to access this page.");
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlbumService = (function () {
    function AlbumService(http) {
        this.http = http;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    AlbumService.prototype.uploadAlbumphoto = function (oFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(oFile.getAll('albumimage'));
        return this.http.post('http://localhost:2000/api/albumphotoupload', oFile, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.saveAlbum = function (userid, artistid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:2000/api/album/" + userid + "?artistid=" + artistid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.updateAlbumphoto = function (albumid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("http://localhost:2000/api/updatealbumphoto/" + albumid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.deleteAlbumPhoto = function (oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:2000/api/albumphotodelete', oAlbum, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbums = function (userid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:2000/api/album/report/" + userid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAggAlbums = function (userid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:2000/api/album/aggreport/" + userid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbum = function (albumid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:2000/api/album/" + albumid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbumList = function (userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:2000/api/albumlist/" + userid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbumListbyArtist = function (userid, artistid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:2000/api/albumlistbyartist/" + userid + "?artistid=" + artistid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.deleteAlbum = function (albumid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete("http://localhost:2000/api/album/" + albumid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return AlbumService;
}());
AlbumService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AlbumService);

var _a;
//# sourceMappingURL=album.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/artist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArtistService = (function () {
    function ArtistService(http) {
        this.http = http;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    ArtistService.prototype.uploadArtistphoto = function (oFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(oFile.getAll('artistimage'));
        return this.http.post('http://localhost:2000/api/artistphotoupload', oFile, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.saveArtist = function (userid, oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:2000/api/artist/" + userid, JSON.stringify(oArtist), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.updateArtistphoto = function (artistid, oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("http://localhost:2000/api/updateartistphoto/" + artistid, JSON.stringify(oArtist), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.deleteArtistPhoto = function (oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:2000/api/artistphotodelete', oArtist, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtists = function (userid, oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:2000/api/artist/report/" + userid, JSON.stringify(oArtist), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtist = function (artistid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:2000/api/artist/" + artistid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtistList = function (userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:2000/api/artistlist/" + userid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.deleteArtist = function (artistid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete("http://localhost:2000/api/artist/" + artistid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return ArtistService;
}());
ArtistService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ArtistService);

var _a;
//# sourceMappingURL=artist.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.isLoggedIn = function () {
        try {
            var theUser = JSON.parse(localStorage.getItem('currentUser'));
            if (theUser) {
                this.currentUser = theUser.user;
            }
        }
        catch (e) {
            return false;
        }
        return !!this.currentUser;
    };
    AuthService.prototype.login = function (oUser) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:2000/api/login', JSON.stringify(oUser), options)
            .do(function (response) {
            if (response.json().success) {
                _this.currentUser = response.json().message;
                var userObj = {};
                userObj.user = response.json().message;
                userObj.token = response.json().token;
                localStorage.setItem('currentUser', JSON.stringify(userObj));
            }
            response.json();
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    };
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/song.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SongService = (function () {
    function SongService(http) {
        this.http = http;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    SongService.prototype.uploadSongPreview = function (oFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:2000/api/songprvwupload', oFile, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.uploadSongFile = function (oFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:2000/api/songfileupload', oFile, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.deleteSongPreview = function (oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:2000/api/songprvwdelete', oSong, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.deleteSongFile = function (oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:2000/api/songfiledelete', oSong, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.saveSong = function (userid, artistid, albumid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:2000/api/song/" + userid + "?artistid=" + artistid + "&albumid=" + albumid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.publishSong = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("http://localhost:2000/api/publishsong/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.cancelPublishSong = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("http://localhost:2000/api/cancelpublishsong/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.updateSongPreview = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("http://localhost:2000/api/updatesongpreview/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.updateSongFile = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("http://localhost:2000/api/updatesongfile/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getSong = function (songid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:2000/api/song/" + songid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getSongAgg = function (songid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:2000/api/songaggregate/" + songid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.deleteSong = function (songid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete("http://localhost:2000/api/song/" + songid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getAggSongs = function (userid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:2000/api/song/aggreport/" + userid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getSongs = function (userid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("http://localhost:2000/api/song/report/" + userid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return SongService;
}());
SongService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SongService);

var _a;
//# sourceMappingURL=song.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http) {
        this.http = http;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    /*   uploadpreview(oFile){
        console.log(oFile.getAll('usrimage'));
        return this.http.post('http://localhost:2000/flupload', oFile)
          .map((response: Response) => response.json())
          .catch(this.handleError);
      }
     */
    UserService.prototype.register = function (oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:2000/register', JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:2000/api/user/" + userid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (userid, oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("http://localhost:2000/api/user/" + userid, JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    /*   updatePhoto(userid, oUser){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `${this.jwtToken}`);
        let options = new RequestOptions({ headers: headers });
    
        return this.http.put(`http://localhost:2000/api/editphoto/${userid}`, JSON.stringify(oUser), options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
      }
     
      deletePhoto(oUser){
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', `${this.jwtToken}`);
        let options = new RequestOptions({ headers: headers });
    
        return this.http.post('http://localhost:2000/api/delphoto', JSON.stringify(oUser), options)
            .map((response: Response) => response.json())
            .catch(this.handleError);
      }
    */
    UserService.prototype.updatePassword = function (userid, oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("http://localhost:2000/api/password/" + userid, JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.json().error || 'Server error');
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
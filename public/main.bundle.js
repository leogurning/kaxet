webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n<footer class=\"footer\">\n  <div class=\"container\">\n      <p class=\"text-muted\">&copy; Copyright 2017 | kaXet app</p>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'kaXet';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.global.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.artistuploadpath = 'kaxet/images/artists/';
        this.albumuploadpath = 'kaxet/images/albums/';
        this.configuploadpath = 'kaxet/images/genres/';
        this.prvwuploadpath = 'kaxet/previews/';
        this.songuploadpath = 'kaxet/songs/';
        this.adminurl = 'http://localhost:2002';
        //adminurl: String = 'https://kxadmin.herokuapp.com';
        //notifurl: String = 'http://localhost:2004';
        this.notifurl = 'https://kxnotif.herokuapp.com';
        //filetransferurl: String = 'http://localhost:2005';
        this.filetransferurl = 'https://kxfiletrf.herokuapp.com';
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_loading__ = __webpack_require__("./node_modules/ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("./node_modules/angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_global__ = __webpack_require__("./src/app/app.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_admin_usermgt_service__ = __webpack_require__("./src/app/services/admin/usermgt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_admin_songadmin_service__ = __webpack_require__("./src/app/services/admin/songadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_notif_service__ = __webpack_require__("./src/app/services/notif.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_user_password_password_component__ = __webpack_require__("./src/app/components/user/password/password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_user_logout_component__ = __webpack_require__("./src/app/components/user/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_about_about_component__ = __webpack_require__("./src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_artist_editartist_editartist_component__ = __webpack_require__("./src/app/components/artist/editartist/editartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_artist_listartist_listartist_component__ = __webpack_require__("./src/app/components/artist/listartist/listartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_artist_viewartist_viewartist_component__ = __webpack_require__("./src/app/components/artist/viewartist/viewartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_artist_addartist_addartist_component__ = __webpack_require__("./src/app/components/artist/addartist/addartist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_artist_editartistphoto_editartistphoto_component__ = __webpack_require__("./src/app/components/artist/editartistphoto/editartistphoto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_album_addalbum_addalbum_component__ = __webpack_require__("./src/app/components/album/addalbum/addalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_album_listalbum_listalbum_component__ = __webpack_require__("./src/app/components/album/listalbum/listalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_album_viewalbum_viewalbum_component__ = __webpack_require__("./src/app/components/album/viewalbum/viewalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_album_editalbum_editalbum_component__ = __webpack_require__("./src/app/components/album/editalbum/editalbum.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_album_editalbumphoto_editalbumphoto_component__ = __webpack_require__("./src/app/components/album/editalbumphoto/editalbumphoto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_song_addsong_addsong_component__ = __webpack_require__("./src/app/components/song/addsong/addsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_song_listsong_listsong_component__ = __webpack_require__("./src/app/components/song/listsong/listsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_song_editsongfiles_editsongfiles_component__ = __webpack_require__("./src/app/components/song/editsongfiles/editsongfiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_song_viewsong_viewsong_component__ = __webpack_require__("./src/app/components/song/viewsong/viewsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_song_editsong_editsong_component__ = __webpack_require__("./src/app/components/song/editsong/editsong.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_user_postregistered_postregistered_component__ = __webpack_require__("./src/app/components/user/postregistered/postregistered.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_usermgt_usermgt_component__ = __webpack_require__("./src/app/components/usermgt/usermgt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_usermgt_viewlabel_viewlabel_component__ = __webpack_require__("./src/app/components/usermgt/viewlabel/viewlabel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_user_updateemail_updateemail_component__ = __webpack_require__("./src/app/components/user/updateemail/updateemail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_user_emailverification_emailverification_component__ = __webpack_require__("./src/app/components/user/emailverification/emailverification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_songmgt_songmgt_component__ = __webpack_require__("./src/app/components/songmgt/songmgt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_msconfig_addconfig_addconfig_component__ = __webpack_require__("./src/app/components/msconfig/addconfig/addconfig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_msconfig_addgroup_addgroup_component__ = __webpack_require__("./src/app/components/msconfig/addgroup/addgroup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_msconfig_listconfig_listconfig_component__ = __webpack_require__("./src/app/components/msconfig/listconfig/listconfig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_msconfig_viewconfig_viewconfig_component__ = __webpack_require__("./src/app/components/msconfig/viewconfig/viewconfig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_msconfig_editconfigfile_editconfigfile_component__ = __webpack_require__("./src/app/components/msconfig/editconfigfile/editconfigfile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_msconfig_editconfig_editconfig_component__ = __webpack_require__("./src/app/components/msconfig/editconfig/editconfig.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_kx_info_dialog_kx_info_dialog_component__ = __webpack_require__("./src/app/components/kx-info-dialog/kx-info-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_user_forgotpassword_forgotpassword_component__ = __webpack_require__("./src/app/components/user/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_user_resetuserpasswd_resetuserpasswd_component__ = __webpack_require__("./src/app/components/user/resetuserpasswd/resetuserpasswd.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












/* Global Variables */

/* Services Modules */











/* common Modules */









































var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_27__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'forgotpassword', component: __WEBPACK_IMPORTED_MODULE_61__components_user_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */] },
    { path: 'postregistered/:nm', component: __WEBPACK_IMPORTED_MODULE_48__components_user_postregistered_postregistered_component__["a" /* PostregisteredComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_26__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_31__components_about_about_component__["a" /* AboutComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_30__components_user_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_29__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'password', component: __WEBPACK_IMPORTED_MODULE_28__components_user_password_password_component__["a" /* PasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'report', component: __WEBPACK_IMPORTED_MODULE_32__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addartist', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_36__components_artist_addartist_addartist_component__["a" /* AddartistComponent */] },
    { path: 'editartist/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_33__components_artist_editartist_editartist_component__["a" /* EditartistComponent */] },
    { path: 'listartist', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_34__components_artist_listartist_listartist_component__["a" /* ListartistComponent */] },
    { path: 'editartistphoto/:id', component: __WEBPACK_IMPORTED_MODULE_37__components_artist_editartistphoto_editartistphoto_component__["a" /* EditartistphotoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'viewartist/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_35__components_artist_viewartist_viewartist_component__["a" /* ViewartistComponent */] },
    { path: 'addalbum', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_38__components_album_addalbum_addalbum_component__["a" /* AddalbumComponent */] },
    { path: 'listalbum', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_39__components_album_listalbum_listalbum_component__["a" /* ListalbumComponent */] },
    { path: 'viewalbum/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_40__components_album_viewalbum_viewalbum_component__["a" /* ViewalbumComponent */] },
    { path: 'editalbum/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_41__components_album_editalbum_editalbum_component__["a" /* EditalbumComponent */] },
    { path: 'editalbumphoto/:id', component: __WEBPACK_IMPORTED_MODULE_42__components_album_editalbumphoto_editalbumphoto_component__["a" /* EditalbumphotoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'addsong', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_43__components_song_addsong_addsong_component__["a" /* AddsongComponent */] },
    { path: 'listsong', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_44__components_song_listsong_listsong_component__["a" /* ListsongComponent */] },
    { path: 'editsongfiles/:id', component: __WEBPACK_IMPORTED_MODULE_45__components_song_editsongfiles_editsongfiles_component__["a" /* EditsongfilesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'viewsong/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_46__components_song_viewsong_viewsong_component__["a" /* ViewsongComponent */] },
    { path: 'editsong/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_47__components_song_editsong_editsong_component__["a" /* EditsongComponent */] },
    { path: 'usermanagement', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_49__components_usermgt_usermgt_component__["a" /* UsermgtComponent */] },
    { path: 'viewlabel/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_50__components_usermgt_viewlabel_viewlabel_component__["a" /* ViewlabelComponent */] },
    { path: 'updateemail', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_51__components_user_updateemail_updateemail_component__["a" /* UpdateemailComponent */] },
    { path: 'verify', component: __WEBPACK_IMPORTED_MODULE_52__components_user_emailverification_emailverification_component__["a" /* EmailverificationComponent */] },
    { path: 'songmanagement', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_53__components_songmgt_songmgt_component__["a" /* SongmgtComponent */] },
    { path: 'addconfig', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_54__components_msconfig_addconfig_addconfig_component__["a" /* AddconfigComponent */] },
    { path: 'addgroup', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_55__components_msconfig_addgroup_addgroup_component__["a" /* AddgroupComponent */] },
    { path: 'listconfig', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_56__components_msconfig_listconfig_listconfig_component__["a" /* ListconfigComponent */] },
    { path: 'viewconfig/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_57__components_msconfig_viewconfig_viewconfig_component__["a" /* ViewconfigComponent */] },
    { path: 'editconfigfile/:id', component: __WEBPACK_IMPORTED_MODULE_58__components_msconfig_editconfigfile_editconfigfile_component__["a" /* EditconfigfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'editconfig/:id', component: __WEBPACK_IMPORTED_MODULE_59__components_msconfig_editconfig_editconfig_component__["a" /* EditconfigComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_62__components_user_resetuserpasswd_resetuserpasswd_component__["a" /* ResetuserpasswdComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_user_password_password_component__["a" /* PasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_user_logout_component__["a" /* LogoutComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_artist_editartist_editartist_component__["a" /* EditartistComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_artist_listartist_listartist_component__["a" /* ListartistComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_artist_viewartist_viewartist_component__["a" /* ViewartistComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_artist_addartist_addartist_component__["a" /* AddartistComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_artist_editartistphoto_editartistphoto_component__["a" /* EditartistphotoComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_album_addalbum_addalbum_component__["a" /* AddalbumComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_album_listalbum_listalbum_component__["a" /* ListalbumComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_album_viewalbum_viewalbum_component__["a" /* ViewalbumComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_album_editalbum_editalbum_component__["a" /* EditalbumComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_album_editalbumphoto_editalbumphoto_component__["a" /* EditalbumphotoComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_song_addsong_addsong_component__["a" /* AddsongComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_song_listsong_listsong_component__["a" /* ListsongComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_song_editsongfiles_editsongfiles_component__["a" /* EditsongfilesComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_song_viewsong_viewsong_component__["a" /* ViewsongComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_song_editsong_editsong_component__["a" /* EditsongComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_user_postregistered_postregistered_component__["a" /* PostregisteredComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_usermgt_usermgt_component__["a" /* UsermgtComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_usermgt_viewlabel_viewlabel_component__["a" /* ViewlabelComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_user_updateemail_updateemail_component__["a" /* UpdateemailComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_user_emailverification_emailverification_component__["a" /* EmailverificationComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_songmgt_songmgt_component__["a" /* SongmgtComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_msconfig_addconfig_addconfig_component__["a" /* AddconfigComponent */],
                __WEBPACK_IMPORTED_MODULE_55__components_msconfig_addgroup_addgroup_component__["a" /* AddgroupComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_msconfig_listconfig_listconfig_component__["a" /* ListconfigComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_msconfig_viewconfig_viewconfig_component__["a" /* ViewconfigComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_msconfig_editconfigfile_editconfigfile_component__["a" /* EditconfigfileComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_msconfig_editconfig_editconfig_component__["a" /* EditconfigComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_kx_info_dialog_kx_info_dialog_component__["a" /* KxInfoDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_61__components_user_forgotpassword_forgotpassword_component__["a" /* ForgotpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_62__components_user_resetuserpasswd_resetuserpasswd_component__["a" /* ResetuserpasswdComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
                __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["b" /* LoadingModule */].forRoot({
                    animationType: __WEBPACK_IMPORTED_MODULE_5_ngx_loading__["a" /* ANIMATION_TYPES */].threeBounce,
                    backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                    backdropBorderRadius: '4px',
                    primaryColour: '#ce3b3b',
                    secondaryColour: '#ce3b3b',
                    tertiaryColour: '#ce3b3b'
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_60__components_kx_info_dialog_kx_info_dialog_component__["a" /* KxInfoDialogComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__app_global__["a" /* Globals */],
                __WEBPACK_IMPORTED_MODULE_22__common_toastr_service__["a" /* ToastrService */],
                __WEBPACK_IMPORTED_MODULE_11__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_13__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_14__services_artist_service__["a" /* ArtistService */],
                __WEBPACK_IMPORTED_MODULE_15__services_album_service__["a" /* AlbumService */],
                __WEBPACK_IMPORTED_MODULE_16__services_song_service__["a" /* SongService */],
                __WEBPACK_IMPORTED_MODULE_23__angular_common__["DatePipe"],
                __WEBPACK_IMPORTED_MODULE_17__services_admin_usermgt_service__["a" /* UsermgtService */],
                __WEBPACK_IMPORTED_MODULE_18__services_admin_songadmin_service__["a" /* SongadminService */],
                __WEBPACK_IMPORTED_MODULE_19__services_admin_msconfig_service__["a" /* MsconfigService */],
                __WEBPACK_IMPORTED_MODULE_20__services_notif_service__["a" /* NotifService */],
                __WEBPACK_IMPORTED_MODULE_21__services_filetransfer_service__["a" /* FiletransferService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_24__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToastrService = /** @class */ (function () {
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
    ToastrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n    <h1></h1>\n</div>\n  <div class=\"jumbotron\">\n    <img src=\"../../../cassetteicon.png\">\n      <h2>kaXet v1.0</h2>\n      <p>An app for inspiring and commercial music</p>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/album/addalbum/addalbum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/album/addalbum/addalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Add Album</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <form [formGroup]=\"addAlbumForm\" (ngSubmit)=\"addAlbum(addAlbumForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('artistid').invalid && addAlbumForm.get('artistid').dirty}\">\n      <label for=\"artistid\" class=\"col-sm-2 control-label\">Artist Id <sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n        <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n        <select #inputartist [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"artistid\">\n            <option ng-selected=\"true\" value=\"\">Select the artist</option>\n            <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n        </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('artistid').dirty && addAlbumForm.get('artistid').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('artistid').errors.required\">\n              Please enter the artist\n          </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumname').invalid && addAlbumForm.get('albumname').dirty}\">\n        <label for=\"albumname\" class=\"col-sm-2 control-label\">Album Name <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n            <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"albumname\" id=\"albumname\" placeholder=\"Album Name\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('albumname').dirty && addAlbumForm.get('albumname').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumname').errors.required\">\n                Please enter the album name\n            </span>\n        </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumyear').invalid && addAlbumForm.get('albumyear').dirty}\">\n      <label for=\"albumyear\" class=\"col-sm-2 control-label\">Album Year <sup>*</sup></label>\n      <div class=\"input-group col-sm-6\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n          <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"albumyear\" id=\"albumyear\" placeholder=\"Album Year\">\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('albumyear').dirty && addAlbumForm.get('albumyear').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumyear').errors.required\">\n              Please enter the album year\n          </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumgenre').invalid && addAlbumForm.get('albumgenre').dirty}\">\n      <label for=\"albumgenre\" class=\"col-sm-2 control-label\">Genre <sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n          <select #inputgenre [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"albumgenre\">\n              <option ng-selected=\"true\" value=\"\">Select the genre</option>\n              <option *ngFor=\"let a of genre\" [ngValue]=\"a.code\">{{a.value}}</option>\n          </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('albumgenre').dirty && addAlbumForm.get('albumgenre').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumgenre').errors.required\">\n              Please select album genre\n          </span>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumprice').invalid && addAlbumForm.get('albumprice').dirty}\">\n      <label for=\"albumprice\" class=\"col-sm-2 control-label\">Price <sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\">Rp</div>\n          <input [disabled]=\"this.loading == true\" type=\"number\" class=\"form-control\" id=\"albumprice\" [formControl]=\"albumprice\" placeholder=\"Album Price\">\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addAlbumForm.get('albumprice').dirty && addAlbumForm.get('albumprice').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumprice').errors.required\">\n              Please enter price\n          </span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addAlbumForm.get('albumprice').errors.pattern\">\n              Please enter a valid amount\n          </span>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addAlbumForm.get('albumimage').invalid && addAlbumForm.get('albumimage').dirty}\">\n        <label for=\"albumimage\" class=\"col-sm-2 control-label\">Album Photo <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n            <input [disabled]=\"this.loading == true\" #inputimg type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"albumimage\" id=\"albumimage\" placeholder=\"Album image\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">  </label>\n      <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n      <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n   </div>\n    <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\"></label>\n        <div class=\"col-sm-5\" style=\"padding:0;margin:0;\">\n            <button type=\"submit\" [disabled]=\"addAlbumForm.invalid || this.loading == true\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\">Reset</button>\n        </div>\n        <div class=\"col-sm-5\" style=\"text-align:right\">\n            <sup>*</sup> required\n        </div>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/album/addalbum/addalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddalbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AddalbumComponent = /** @class */ (function () {
    function AddalbumComponent(fb, authService, artistService, albumService, msconfigService, route, router, toastr, datePipe, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.ftService = ftService;
        this.globals = globals;
        this.filesToUpload = [];
        this.loading = false;
        this.progressvalue = 0;
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumprice = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
    }
    AddalbumComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.albumuploadpath = this.globals.albumuploadpath;
        this.progressvalue = 0;
        this.getArtistList(this.userObj.userid);
        this.getMsconfigGroupList('GENRE');
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
    AddalbumComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.genre = data.data;
                }
                else {
                    _this.genre = [{ code: '', value: 'Error ms config list' }];
                }
            }
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
        this.progressvalue = 0;
        var files = this.filesToUpload;
        if (this.addAlbumForm.dirty && this.addAlbumForm.valid && files[0]) {
            this.progressvalue = 10;
            //const files: Array<File> = this.filesToUpload;
            var theForm_1 = this.addAlbumForm.value;
            var lformData = new FormData();
            //console.log('Ini file: '+ files[0]['name']);
            this.progressvalue = 20;
            //lformData.append('albumimage',files[0],files[0]['name']);
            lformData.append('fileinputsrc', files[0], files[0]['name']);
            lformData.append('uploadpath', this.albumuploadpath);
            //console.dir(theForm);
            this.loading = true;
            this.progressvalue = 40;
            this.ftService.uploadInputFile(lformData)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    _this.progressvalue = 0;
                    _this.toastr.error(data.message);
                }
                else {
                    _this.progressvalue = 60;
                    theForm_1.albumphotopath = data.filedata.filepath;
                    theForm_1.albumphotoname = data.filedata.filename;
                    theForm_1.status = 'STSACT';
                    if (_this.albumid !== '') {
                        theForm_1.albumid = _this.albumid;
                    }
                    _this.progressvalue = 80;
                    _this.albumService.saveAlbum(_this.userObj.userid, theForm_1.artistid, theForm_1)
                        .subscribe(function (data) {
                        if (data.success === false) {
                            _this.loading = false;
                            _this.progressvalue = 0;
                            _this.toastr.error(data.message);
                        }
                        else {
                            _this.progressvalue = 90;
                            _this.loading = false;
                            _this.toastr.success(data.message);
                            //this.router.navigate(['listalbum']);
                            _this.progressvalue = 100;
                        }
                        _this.addAlbumForm.reset();
                        _this.artistVar.nativeElement.selectedIndex = 0;
                        _this.genreVar.nativeElement.selectedIndex = 0;
                        _this.albumimageVar.nativeElement.value = "";
                        _this.progressvalue = 0;
                    });
                }
            });
        }
        else {
            this.toastr.error('Please provide the album cover/image...');
        }
    };
    AddalbumComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('content file: ' + this.filesToUpload);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputimg'),
        __metadata("design:type", Object)
    ], AddalbumComponent.prototype, "albumimageVar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputartist'),
        __metadata("design:type", Object)
    ], AddalbumComponent.prototype, "artistVar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgenre'),
        __metadata("design:type", Object)
    ], AddalbumComponent.prototype, "genreVar", void 0);
    AddalbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addalbum',
            template: __webpack_require__("./src/app/components/album/addalbum/addalbum.component.html"),
            styles: [__webpack_require__("./src/app/components/album/addalbum/addalbum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_9__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_10__app_global__["a" /* Globals */]])
    ], AddalbumComponent);
    return AddalbumComponent;
}());



/***/ }),

/***/ "./src/app/components/album/editalbum/editalbum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/album/editalbum/editalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Edit Album</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"albumForm\" (ngSubmit)=\"saveAlbum(albumForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('albumname').invalid && albumForm.get('albumname').dirty}\">\n            <label for=\"albumname\" class=\"col-sm-2 control-label\">Album Name</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"albumname\" [formControl]=\"albumname\" placeholder=\"Album Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('albumname').dirty && albumForm.get('albumname').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your {{ userObj.username }} album name</span>\n            </div>\n        </div>\n        \n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('artistid').invalid && albumForm.get('artistid').dirty}\">\n            <label for=\"artistid\" class=\"col-sm-2 control-label\">Artist</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"artistid\">\n                    <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('artistid').dirty && albumForm.get('artistid').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('artistid').errors.required\">\n                    Please select artist status\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('albumyear').invalid && albumForm.get('albumyear').dirty}\">\n            <label for=\"albumyear\" class=\"col-sm-2 control-label\">Album Year</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"albumyear\" [formControl]=\"albumyear\" placeholder=\"Album Year\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('albumyear').dirty && albumForm.get('albumyear').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter album year</span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('albumgenre').invalid && albumForm.get('albumgenre').dirty}\">\n            <label for=\"albumgenre\" class=\"col-sm-2 control-label\">Album Genre</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"albumgenre\">\n                    <option *ngFor=\"let g of genre\" [ngValue]=\"g.code\">{{g.value}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('albumgenre').dirty && albumForm.get('albumgenre').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('albumgenre').errors.required\">\n                    Please select album genre\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('albumprice').invalid && albumForm.get('albumprice').dirty}\">\n            <label for=\"albumprice\" class=\"col-sm-2 control-label\">Price</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">Rp</div>\n                <input [disabled]=\"this.loading == true\" type=\"number\" class=\"form-control\" id=\"albumprice\" [formControl]=\"albumprice\" placeholder=\"Enter price\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('albumprice').dirty && albumForm.get('albumprice').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('albumprice').errors.required\">\n                    Please enter price\n                </span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('albumprice').errors.pattern\">\n                    Please enter a valid amount\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': albumForm.get('status').invalid && albumForm.get('status').dirty}\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"status\">\n                    <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"albumForm.get('status').dirty && albumForm.get('status').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"albumForm.get('status').errors.required\">\n                    Please select album status\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <button type=\"submit\" [disabled]=\"albumForm.invalid || this.loading == true\" class=\"btn btn-primary\">{{ btnLbl }}</button>\n                <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\" (click)=\"onBack()\">Back</button>\n            </div>\n        </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/album/editalbum/editalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditalbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditalbumComponent = /** @class */ (function () {
    function EditalbumComponent(fb, authService, artistService, albumService, msconfigService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.loading = false;
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumprice = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    EditalbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.albumid = params['id'];
            _this.getAlbum(_this.albumid);
            _this.btnLbl = "Update";
        });
        this.userObj = this.authService.currentUser;
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GENRE');
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
    EditalbumComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'GENRE') {
                        _this.genre = data.data;
                    }
                }
                else {
                    _this.genre = [{ code: '', value: 'Error ms config list' }];
                }
            }
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
            this.loading = true;
            this.albumService.saveAlbum(this.userObj.userid, theForm.artistid, theForm)
                .subscribe(function (data) {
                _this.loading = false;
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
    EditalbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editalbum',
            template: __webpack_require__("./src/app/components/album/editalbum/editalbum.component.html"),
            styles: [__webpack_require__("./src/app/components/album/editalbum/editalbum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], EditalbumComponent);
    return EditalbumComponent;
}());



/***/ }),

/***/ "./src/app/components/album/editalbumphoto/editalbumphoto.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/album/editalbumphoto/editalbumphoto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Change Photo</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"albumForm\" (ngSubmit)=\"updatePhoto(albumForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n\n        <div class=\"form-group\">\n            <!-- <label for=\"albumimage\" class=\"col-sm-2 control-label\"></label> -->\n            <div class=\"col-sm-12\">\n                <img src=\"{{ this.displayImg }}\" width=\"170\" height=\"170\">\n            </div>\n        </div>\n        <div class=\"form-group\">   \n            <!-- <label class=\"col-sm-2 control-label\"></label> -->\n            <div class=\"col-sm-12\">\n                <div class=\"input-group\">\n                    <label class=\"input-group-btn\">\n                        <span *ngIf=\"this.loading == false\" class=\"btn btn-primary\">\n                            Browse&hellip; <input [disabled]=\"this.loading == true\" type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"albumimage\" id=\"albumimage\" style=\"display:none\">\n                        </span>\n                    </label>\n                    <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" value=\"{{ this.newfile }}\">  \n                </div>\n            </div>            \n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">  </label>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">  </label>\n            <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n            <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n          </div>\n        <div class=\"form-group\">\n            <div class=\"col-sm-12\">\n                <button [disabled]=\"this.loading == true\" type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/album/editalbumphoto/editalbumphoto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditalbumphotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditalbumphotoComponent = /** @class */ (function () {
    function EditalbumphotoComponent(fb, authService, albumService, route, router, toastr, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.albumService = albumService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.ftService = ftService;
        this.globals = globals;
        this.filesToUpload = [];
        this.loading = false;
        this.progressvalue = 0;
        this.albumphotopath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.albumphotoname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    EditalbumphotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.albumuploadpath = this.globals.albumuploadpath;
        this.progressvalue = 0;
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
        //console.log('content file: ' + this.filesToUpload);
        this.progressvalue = 0;
        this.uploadNewPhoto(this.filesToUpload);
    };
    EditalbumphotoComponent.prototype.uploadNewPhoto = function (newFileData) {
        var _this = this;
        var files = newFileData;
        var lformData = new FormData();
        this.progressvalue = 10;
        lformData.append('fileinputsrc', files[0], files[0]['name']);
        lformData.append('uploadpath', this.albumuploadpath);
        this.progressvalue = 30;
        this.loading = true;
        this.progressvalue = 40;
        this.ftService.uploadInputFile(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.progressvalue = 0;
                _this.toastr.error(data.message);
            }
            else {
                _this.progressvalue = 60;
                _this.displayImg = data.filedata.filepath;
                var payloadData_1 = {};
                payloadData_1.uploadpath = _this.albumuploadpath;
                payloadData_1.filename = _this.albumForm.value.albumphotoname;
                _this.progressvalue = 80;
                _this.ftService.deleteInputFile(payloadData_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        //this.toastr.error(data.message);
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        console.log('File deleted - ' + payloadData_1.filename);
                    }
                });
                _this.progressvalue = 90;
                _this.albumForm.value.albumphotopath = data.filedata.filepath;
                _this.albumForm.value.albumphotoname = data.filedata.filename;
                //console.log('Update database photo - ' + this.displayImg);
                _this.albumService.updateAlbumphoto(_this.albumid, _this.albumForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        _this.progressvalue = 0;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.progressvalue = 100;
                        _this.loading = false;
                        console.log('Success update database photo - ' + _this.displayImg);
                        _this.toastr.success(data.message);
                        _this.progressvalue = 0;
                    }
                });
            }
        });
    };
    EditalbumphotoComponent.prototype.onBack = function () {
        this.router.navigate(['/listalbum'], { preserveQueryParams: true });
    };
    EditalbumphotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editalbumphoto',
            template: __webpack_require__("./src/app/components/album/editalbumphoto/editalbumphoto.component.html"),
            styles: [__webpack_require__("./src/app/components/album/editalbumphoto/editalbumphoto.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Globals */]])
    ], EditalbumphotoComponent);
    return EditalbumphotoComponent;
}());



/***/ }),

/***/ "./src/app/components/album/listalbum/listalbum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/album/listalbum/listalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>List Album</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <div *ngIf=\"this.loading == false\" class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Search Parameter</h3>\n      </div>\n      <div class=\"panel-body\">\n          <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n              <div class=\"row rowmarginsearch\">\n                  <div class=\"col-sm-6 col-md-6\">\n                      <label for=\"albumname\" class=\"col-sm-2 paddingsearch\">Name</label>\n                      <div class=\"col-sm-10\">\n                          <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                          <input type=\"text\" class=\"form-control\" id=\"albumname\" [formControl]=\"albumname\" placeholder=\"Album Name\">\n                      </div>\n                  </div>\n                  <div class=\"col-sm-6 col-md-6\">\n                        <label for=\"artistid\" class=\"col-sm-2 paddingsearch\">Artist</label>\n                        <div class=\"col-sm-10\">\n                            <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                            <select class=\"form-control\" [formControl]=\"artistid\">\n                                <option ng-selected=\"true\" value=\"\">Select the artist</option>\n                                <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n                            </select>\n                          </div>\n                    </div>                \n\n                </div>\n               <div class=\"row rowmarginsearch\">   \n                  <div class=\"col-sm-6 col-md-6\">\n                      <label for=\"albumgenre\" class=\"col-sm-2 paddingsearch\">Genre</label>\n                      <div class=\"col-sm-10\">\n                          <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                          <select class=\"form-control\" [formControl]=\"albumgenre\">\n                            <option ng-selected=\"true\" value=\"\">Select the genre</option>\n                            <option *ngFor=\"let g of genre\" [ngValue]=\"g.code\">{{g.value}}</option>\n                         </select>\n                      </div>\n                  </div>\n                  <div class=\"col-sm-6 col-md-6\">\n                        <label for=\"albumyear\" class=\"col-sm-2 paddingsearch\">Year</label>\n                        <div class=\"col-sm-10\">\n                            <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                            <input type=\"text\" class=\"form-control\" id=\"albumyear\" [formControl]=\"albumyear\" placeholder=\"Album Year\">\n                        </div>\n                    </div>\n              </div>\n              <div class=\"row rowmarginsearch\">\n\n                  <div class=\"col-sm-6 col-md-6\">\n                      <label for=\"status\" class=\"col-sm-2 paddingsearch\">Status</label>\n                      <div class=\"col-sm-10\">\n                          <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                          <select class=\"form-control\" [formControl]=\"status\">\n                            <option ng-selected=\"true\" value=\"\">Select the status</option>\n                            <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                          </select>\n                      </div>\n                  </div>\n                  <div class=\"col-sm-6 col-md-6\">\n                    <label class=\"col-sm-2 paddingsearch\"></label>\n                    <div class=\"col-sm-10\">\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                    </div>\n                  </div>                \n              </div>\n          </form>\n      </div>\n  </div>\n\n  <div class=\"panel panel-danger\" *ngIf=\"albums && totalrows < 1\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">No album found</h3> \n      </div>\n\n      <div class=\"panel-body\">\n          It seems like you havn't entered any albums for the selected criteria. Please add the album <a style=\"cursor:pointer\" (click)=\"toaddAlbums()\">here</a>.\n      </div>\n  </div>\n\n  <div class=\"panel panel-default\" *ngIf=\"albums && totalrows > 0 && this.loading == false\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n      </div>\n      <div class=\"panel-body\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-hover\">\n                  <thead>\n                      <tr>\n                          <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumname')\">Album Name</a></th>\n                          <th width=\"20%\">Artist</th>\n                          <!-- <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumyear')\">Year</a></th> -->\n                          <th width=\"9%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumgenre')\">Genre</a></th>\n                          <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumprice')\">Price</a></th>\n                          <!-- <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th> -->\n                          <th width=\"20%\">Action</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor='let albm of albums; let albIndex = index'>\n                          <td><a style=\"cursor:pointer\" (click)=\"showAlbum(albm._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ albm.albumname}}</a></td>\n                          <td>{{ albm.artist }}</td>\n                          <!-- <td>{{ albm.albumyear}}</td> -->\n                          <td>{{ albm.genrevalue}}</td>\n                          <td class=\"text-right\">{{ albm.albumprice | currency: 'IDR':'symbol-narrow' }}</td>\n                          <!-- <td>{{ albm.status}}</td> -->\n                          <td>\n                              <button type=\"button\" class=\"btn-xs btn-info\" aria-label=\"View\" (click)=\"editAlbumPhoto(albm._id)\">\n                                  <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Album Photo\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Edit\" (click)=\"editAlbum(albm._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Album Data\">\n                                  <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-primary\" aria-label=\"Delete\" (click)=\"confirmDel(albIndex, albm._id, albm.albumname, albm.albumphotoname )\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Album\">\n                                  <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                              </button>\n                          </td>\n                      </tr>\n                      \n                  </tbody>\n              </table>\n          </div>\n\n          <div style=\"text-align:center\" *ngIf=\"albums && totalrows > 10\">\n              <nav aria-label=\"Page navigation\">\n                  <ul class=\"pagination\">\n                      <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                          <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                      </li>\n                  </ul>\n              </nav>\n          </div>\n\n      </div>\n  </div>  \n</div>"

/***/ }),

/***/ "./src/app/components/album/listalbum/listalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListalbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ListalbumComponent = /** @class */ (function () {
    function ListalbumComponent(fb, authService, artistService, albumService, songService, msconfigService, route, router, toastr, datePipe, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.ftService = ftService;
        this.globals = globals;
        //artistname: String;
        this.loading = false;
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.albumname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.albumgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    ListalbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.albumuploadpath = this.globals.albumuploadpath;
        this.reportForm = this.fb.group({
            artistid: this.artistid,
            albumname: this.albumname,
            albumyear: this.albumyear,
            albumgenre: this.albumgenre,
            status: this.status
        });
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GENRE');
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
        });
    };
    ListalbumComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'GENRE') {
                        _this.genre = data.data;
                    }
                }
                else {
                    _this.genre = [{ code: '', value: 'Error ms config list' }];
                }
            }
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
            //this.fetchReport(this.userObj.userid, this.reportForm.value);
            this.router.navigate(['listalbum'], {
                queryParams: { artistid: this.reportForm.value.artistid,
                    albumname: this.reportForm.value.albumname,
                    albumyear: this.reportForm.value.albumyear,
                    albumgenre: this.reportForm.value.albumgenre,
                    status: this.reportForm.value.status,
                    page: 1,
                    sortby: null }
            });
        }
    };
    ListalbumComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.loading = true;
        this.albumService.getAggAlbums(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.loading = false;
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
                _this.reportForm.patchValue({
                    artistid: _this.qartistid,
                    albumname: _this.qalbumname,
                    albumyear: _this.qalbumyear,
                    albumgenre: _this.qalbumgenre,
                    status: _this.qstatus
                });
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
    ListalbumComponent.prototype.confirmDel = function (idx, albumid, albumname, albumphotoname) {
        var _this = this;
        var totalsong;
        var payload = {};
        payload.albumid = albumid;
        this.loading = true;
        this.songService.getSongCount(this.userObj.userid, payload)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.toastr.error(data.message);
            }
            else {
                _this.loading = false;
                totalsong = +data.totalcount;
                if (totalsong > 0) {
                    _this.toastr.warning('Can not delete album. It already has songs.');
                }
                else {
                    if (confirm('Do you really want to delete this album: ' + albumname + ' record?')) {
                        var payloadData = {};
                        payloadData.uploadpath = _this.albumuploadpath;
                        payloadData.filename = albumphotoname;
                        _this.loading = true;
                        _this.ftService.deleteInputFile(payloadData)
                            .subscribe(function (data) {
                            if (data.success === false) {
                                _this.loading = false;
                                if (data.errcode) {
                                    _this.authService.logout();
                                    _this.router.navigate(['login']);
                                }
                                _this.toastr.error(data.message);
                            }
                            else {
                                _this.albumService.deleteAlbum(albumid)
                                    .subscribe(function (data) {
                                    if (data.success === false) {
                                        _this.loading = false;
                                        if (data.errcode) {
                                            _this.authService.logout();
                                            _this.router.navigate(['login']);
                                        }
                                        _this.toastr.error(data.message);
                                    }
                                    else {
                                        _this.loading = false;
                                        _this.albums.splice(idx, 1);
                                        _this.totalrows = _this.totalrows - 1;
                                        _this.toastr.success(data.message);
                                    }
                                });
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
    ListalbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listalbum',
            template: __webpack_require__("./src/app/components/album/listalbum/listalbum.component.html"),
            styles: [__webpack_require__("./src/app/components/album/listalbum/listalbum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_9__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_10__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_11__app_global__["a" /* Globals */]])
    ], ListalbumComponent);
    return ListalbumComponent;
}());



/***/ }),

/***/ "./src/app/components/album/viewalbum/viewalbum.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/album/viewalbum/viewalbum.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Album Details</h3>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n          <form [formGroup]=\"albumForm\" class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label for=\"albumname\" class=\"col-sm-2 control-label\">Name</label>\n                <div class=\"form-ele col-sm-10\">{{ album?.albumname }}\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                    <div class=\"form-ele\">{{ album?.albumname }}</div> -->\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"artistname\" class=\"col-sm-2 control-label\">Artist</label>\n                <div class=\"form-ele col-sm-10\">{{ artist?.artistname }}\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                    <div class=\"form-ele\">{{ artist?.artistname }}</div> -->\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"albumyear\" class=\"col-sm-2 control-label\">Year</label>\n                <div class=\"form-ele col-sm-10\">{{ album?.albumyear }}\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                    <div class=\"form-ele\">{{ album?.albumyear }}</div> -->\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"albumgenre\" class=\"col-sm-2 control-label\">Genre</label>\n                <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                    <select class=\"form-control selectfontsize\" [formControl]=\"albumgenre\" disabled>\n                        <option *ngFor=\"let g of genre\" [ngValue]=\"g.code\">{{g.value}}</option>\n                    </select>\n                    <!-- <div class=\"form-ele\">{{ album?.albumgenre }}</div> -->\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"albumprice\" class=\"col-sm-2 control-label\">Price</label>\n                <div class=\"form-ele col-sm-10\">{{ album?.albumprice | currency: 'IDR':'symbol-narrow' }}\n                    <!-- <div class=\"input-group-addon\">Rp</div>\n                    <div class=\"form-ele\">{{ album?.albumprice | currency: 'IDR':true }}</div> -->\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n                <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                    <select class=\"form-control selectfontsize\" [formControl]=\"status\" disabled>\n                        <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                    </select>\n                    <!-- <div class=\"form-ele\">{{ album?.status }}</div> -->\n                </div>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-sm-4 thumbpadding\">\n            <img src=\"{{ album?.albumphotopath }}\" class=\"img-thumbnail thumbviewsize\">\n        </div>\n    </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12 dtlpadding\" *ngIf=\"songs && totalrows > 0\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <b>( TOTAL : {{ totalrows }} songs ) </b> \n                </div><br>\n                <div class=\"col-sm-12 col-md-12\">\n                    <div class=\"table-responsive\">\n                        <table class=\"table table-striped\" width=\"80%\">\n                            <thead>\n                                <tr>\n                                    <th width=\"30%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songname')\">Song Name</a></th>\n                                    <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songpublish')\">Published?</a></th>\n                                    <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songbuy')\">Total Purchase</a></th>\n                                    <th width=\"10%\" class=\"text-right\"><a style=\"cursor:pointer\" (click)=\"sortSong('songprice')\">Price</a></th>\n                                    <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor='let song of songs; let songIndex = index'>\n                                    <td>{{ song.songname}}</td>\n                                    <td>{{ song.songpublish}}</td>\n                                    <td>{{ song.songbuy}}</td>\n                                    <td class=\"text-right\">{{ song.songprice | currency: 'IDR':'symbol-narrow' }}</td>\n                                    <td>{{ song.stsvalue}}</td>\n                                </tr>\n                                \n                            </tbody>\n                        </table>\n                    </div>\n            \n                    <div style=\"text-align:center\" *ngIf=\"songs && totalrows > 10\">\n                        <nav aria-label=\"Page navigation\">\n                            <ul class=\"pagination\">\n                                <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                                    <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                                </li>\n                            </ul>\n                        </nav>\n                    </div>\n            \n                </div>\n            </div>      \n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n        <br>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/album/viewalbum/viewalbum.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewalbumComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ViewalbumComponent = /** @class */ (function () {
    function ViewalbumComponent(fb, authService, artistService, albumService, songService, msconfigService, toastr, route, router) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.msconfigService = msconfigService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.albumgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    ViewalbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.sub = this.route.params.subscribe(function (params) {
            var albumid = params['id'];
            _this.albumid = albumid;
        });
        console.log(this.albumid);
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GENRE');
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
        this.albumForm = this.fb.group({
            albumgenre: this.albumgenre,
            status: this.status
        });
    };
    ViewalbumComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewalbumComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'GENRE') {
                        _this.genre = data.data;
                    }
                }
                else {
                    _this.sts = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
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
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Album id is incorrect in the URL');
                }
            }
        });
    };
    ViewalbumComponent.prototype.populateForm = function (data) {
        this.albumForm.patchValue({
            albumgenre: data.albumgenre,
            status: data.status
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
        this.songService.getSongList(userid, formval)
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
    ViewalbumComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewalbum',
            template: __webpack_require__("./src/app/components/album/viewalbum/viewalbum.component.html"),
            styles: [__webpack_require__("./src/app/components/album/viewalbum/viewalbum.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_5__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_7__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewalbumComponent);
    return ViewalbumComponent;
}());



/***/ }),

/***/ "./src/app/components/artist/addartist/addartist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/artist/addartist/addartist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Add Artist</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <form  [formGroup]=\"addArtistForm\" (ngSubmit)=\"addArtist(addArtistForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addArtistForm.get('artistname').invalid && addArtistForm.get('artistname').dirty}\">\n        <label for=\"artistname\" class=\"col-sm-2 control-label\">Artist Name <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n            <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"artistname\" id=\"artistname\" placeholder=\"Artist Name\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"addArtistForm.get('artistname').dirty && addArtistForm.get('artistname').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addArtistForm.get('artistname').errors.required\">\n                Please enter the artist name\n            </span>\n        </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addArtistForm.get('artistimage').invalid && addArtistForm.get('artistimage').dirty}\">\n        <label for=\"artistimage\" class=\"col-sm-2 control-label\">Artist Photo <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n            <input [disabled]=\"this.loading == true\" #inputimg type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"artistimage\" id=\"artistimage\" placeholder=\"Artistimage\">\n        </div>\n    </div>\n    <div class=\"form-group\">\n         <label class=\"col-sm-2 control-label\">  </label>\n       <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n       <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\"></label>\n        <div class=\"col-sm-5\" style=\"padding:0;margin:0;\">\n            <button type=\"submit\" [disabled]=\"addArtistForm.invalid || this.loading == true\" class=\"btn btn-primary\">Submit</button>\n            <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\">Reset</button>\n        </div>\n        <div class=\"col-sm-5\" style=\"text-align:right\">\n            <sup>*</sup> required\n        </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/artist/addartist/addartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddartistComponent = /** @class */ (function () {
    function AddartistComponent(fb, authService, artistService, ftService, route, router, toastr, datePipe, globals) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.ftService = ftService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.globals = globals;
        //status: any = ['active', 'inactive'];
        this.filesToUpload = [];
        this.loading = false;
        this.progressvalue = 0;
        this.artistname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    AddartistComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.artistid = '';
        this.artistuploadpath = this.globals.artistuploadpath;
        this.progressvalue = 0;
        this.addArtistForm = this.fb.group({
            artistname: this.artistname,
            artistimage: this.filesToUpload,
            artistphotopath: this.artistphotopath,
            artistphotoname: this.artistphotoname
        });
    };
    AddartistComponent.prototype.addArtist = function (formdata) {
        var _this = this;
        this.progressvalue = 0;
        var files = this.filesToUpload;
        if (this.addArtistForm.dirty && this.addArtistForm.valid && files[0]) {
            this.progressvalue = 10;
            var theForm_1 = this.addArtistForm.value;
            var lformData = new FormData();
            //console.log('Ini file: '+ files[0]['name']);
            this.progressvalue = 30;
            lformData.append('fileinputsrc', files[0], files[0]['name']);
            lformData.append('uploadpath', this.artistuploadpath);
            //console.log(lformData.getAll('artistimage'));
            //console.dir(theForm);
            this.loading = true;
            this.progressvalue = 50;
            this.ftService.uploadInputFile(lformData)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    _this.progressvalue = 0;
                    _this.toastr.error(data.message);
                }
                else {
                    _this.progressvalue = 70;
                    theForm_1.artistphotopath = data.filedata.filepath;
                    theForm_1.artistphotoname = data.filedata.filename;
                    theForm_1.status = 'STSACT';
                    _this.progressvalue = 90;
                    //console.log('Ini file path: '+ theForm.artistphotopath);
                    if (_this.artistid !== '') {
                        theForm_1.artistid = _this.artistid;
                    }
                    _this.artistService.saveArtist(_this.userObj.userid, theForm_1)
                        .subscribe(function (data) {
                        if (data.success === false) {
                            _this.loading = false;
                            _this.progressvalue = 0;
                            _this.toastr.error(data.message);
                        }
                        else {
                            _this.loading = false;
                            _this.progressvalue = 100;
                            _this.toastr.success(data.message);
                            //this.router.navigate(['listartist']);
                        }
                        _this.addArtistForm.reset();
                        _this.artistimageVar.nativeElement.value = "";
                        _this.progressvalue = 0;
                    });
                }
            });
        }
        else {
            this.toastr.error('Please provide artist photo...');
        }
    };
    AddartistComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('content file: ' + this.filesToUpload);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputimg'),
        __metadata("design:type", Object)
    ], AddartistComponent.prototype, "artistimageVar", void 0);
    AddartistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addartist',
            template: __webpack_require__("./src/app/components/artist/addartist/addartist.component.html"),
            styles: [__webpack_require__("./src/app/components/artist/addartist/addartist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_7__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_8__app_global__["a" /* Globals */]])
    ], AddartistComponent);
    return AddartistComponent;
}());



/***/ }),

/***/ "./src/app/components/artist/editartist/editartist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/artist/editartist/editartist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Edit Artist</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"artistForm\" (ngSubmit)=\"saveArtist(artistForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': artistForm.get('artistname').invalid && artistForm.get('artistname').dirty}\">\n            <label for=\"artistname\" class=\"col-sm-2 control-label\">Name</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"artistname\" [formControl]=\"artistname\" placeholder=\"Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"artistForm.get('artistname').dirty && artistForm.get('artistname').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your {{ userObj.username }} artist name</span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': artistForm.get('status').invalid && artistForm.get('status').dirty}\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"status\">\n                    <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"artistForm.get('status').dirty && artistForm.get('status').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"artistForm.get('status').errors.required\">\n                    Please select artist status\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <button type=\"submit\" [disabled]=\"artistForm.invalid || this.loading == true\" class=\"btn btn-primary\">{{ btnLbl }}</button>\n                <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\" (click)=\"onBack()\">Back</button>\n            </div>\n        </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/artist/editartist/editartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditartistComponent = /** @class */ (function () {
    function EditartistComponent(fb, authService, artistService, msconfigService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.loading = false;
        this.artistname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    EditartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.artistid = params['id'];
            _this.getMsconfigGroupList('CSTATUS');
            _this.getArtist(_this.artistid);
            _this.btnLbl = "Update";
        });
        this.userObj = this.authService.currentUser;
        this.artistForm = this.fb.group({
            artistname: this.artistname,
            status: this.status
        });
    };
    EditartistComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.sts = data.data;
                }
                else {
                    _this.sts = [{ code: '', value: 'Error ms config list' }];
                }
            }
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
            this.loading = true;
            this.artistService.saveArtist(this.userObj.userid, theForm)
                .subscribe(function (data) {
                _this.loading = false;
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
    EditartistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editartist',
            template: __webpack_require__("./src/app/components/artist/editartist/editartist.component.html"),
            styles: [__webpack_require__("./src/app/components/artist/editartist/editartist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_7__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], EditartistComponent);
    return EditartistComponent;
}());



/***/ }),

/***/ "./src/app/components/artist/editartistphoto/editartistphoto.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/artist/editartistphoto/editartistphoto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Change Photo</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <form [formGroup]=\"artistForm\" (ngSubmit)=\"updatePhoto(artistForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n<!--       <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('imgpath').invalid && profileForm.get('imgpath').dirty}\">\n          <label for=\"imgpath\" class=\"col-sm-2 control-label\">Image Path</label>\n          <div class=\"input-group col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"imgpath\" [formControl]=\"imgpath\" placeholder=\"Img Path\">\n          </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('imgoriname').invalid && profileForm.get('imgoriname').dirty}\">\n          <label for=\"imgoriname\" class=\"col-sm-2 control-label\">Image Oriname</label>\n          <div class=\"input-group col-sm-10\">\n              <input type=\"text\" class=\"form-control\" id=\"imgoriname\" [formControl]=\"imgoriname\" placeholder=\"Img Oriname\">\n          </div>\n      </div> -->\n      <div class=\"form-group\">\n        <div class=\"col-sm-12\">\n            <img src=\"{{ this.displayImg }}\" width=\"170\" height=\"170\">\n        </div>\n      </div>    \n      <div class=\"form-group\">\n        <div class=\"col-sm-12\">\n          <div class=\"input-group\">\n              <label class=\"input-group-btn\">\n                  <span *ngIf=\"this.loading == false\" class=\"btn btn-primary\">\n                      Browse&hellip; <input [disabled]=\"this.loading == true\" type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"artistimage\" id=\"artistimage\" style=\"display:none\">\n                  </span>\n              </label>\n              <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" value=\"{{ this.newfile }}\">  \n            </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">  </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">  </label>\n        <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n        <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n      </div>\n      <div class=\"form-group\">\n          <div class=\"col-sm-12\">\n              <button [disabled]=\"this.loading == true\" type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n          </div>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/artist/editartistphoto/editartistphoto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditartistphotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditartistphotoComponent = /** @class */ (function () {
    function EditartistphotoComponent(fb, authService, artistService, ftService, route, router, toastr, globals) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.ftService = ftService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.globals = globals;
        this.filesToUpload = [];
        this.loading = false;
        this.progressvalue = 0;
        this.artistphotopath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.artistphotoname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    EditartistphotoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.progressvalue = 0;
        this.artistuploadpath = this.globals.artistuploadpath;
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
        this.progressvalue = 0;
        this.uploadNewPhoto(this.filesToUpload);
    };
    EditartistphotoComponent.prototype.uploadNewPhoto = function (newFileData) {
        var _this = this;
        var files = newFileData;
        var lformData = new FormData();
        this.progressvalue = 10;
        lformData.append('fileinputsrc', files[0], files[0]['name']);
        lformData.append('uploadpath', this.artistuploadpath);
        this.loading = true;
        this.progressvalue = 30;
        this.ftService.uploadInputFile(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.progressvalue = 0;
                _this.toastr.error(data.message);
            }
            else {
                _this.progressvalue = 50;
                _this.displayImg = data.filedata.filepath;
                var payloadData_1 = {};
                payloadData_1.uploadpath = _this.artistuploadpath;
                payloadData_1.filename = _this.artistForm.value.artistphotoname;
                _this.progressvalue = 70;
                _this.ftService.deleteInputFile(payloadData_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        //this.toastr.error(data.message);
                        _this.progressvalue = 0;
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        console.log('File deleted - ' + payloadData_1.filename);
                    }
                });
                _this.progressvalue = 80;
                _this.artistForm.value.artistphotopath = data.filedata.filepath;
                _this.artistForm.value.artistphotoname = data.filedata.filename;
                console.log('Update database photo - ' + _this.displayImg);
                _this.artistService.updateArtistphoto(_this.artistid, _this.artistForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        _this.progressvalue = 0;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.loading = false;
                        _this.progressvalue = 100;
                        console.log('Success update database photo - ' + _this.displayImg);
                        _this.toastr.success(data.message);
                        _this.progressvalue = 0;
                    }
                });
            }
        });
    };
    EditartistphotoComponent.prototype.onBack = function () {
        this.router.navigate(['/listartist'], { preserveQueryParams: true });
    };
    EditartistphotoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editartistphoto',
            template: __webpack_require__("./src/app/components/artist/editartistphoto/editartistphoto.component.html"),
            styles: [__webpack_require__("./src/app/components/artist/editartistphoto/editartistphoto.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Globals */]])
    ], EditartistphotoComponent);
    return EditartistphotoComponent;
}());



/***/ }),

/***/ "./src/app/components/artist/listartist/listartist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/artist/listartist/listartist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>List Artist</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <div *ngIf=\"this.loading == false\" class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Search Parameter</h3>\n        </div>\n        <div class=\"panel-body\">\n            <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n                <div class=\"row rowmarginsearch\">\n                    <div class=\"col-sm-7 col-md-7\">\n                        <label for=\"artistname\" class=\"col-sm-2 paddingsearch\">Name</label>\n                        <div class=\"col-sm-10\">\n                            <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                            <input type=\"text\" class=\"form-control\" id=\"artistname\" [formControl]=\"artistname\" placeholder=\"Artist Name\">\n                        </div>\n                    </div>\n                    <div class=\"col-sm-5 col-md-5\">\n                        <label for=\"status\" class=\"col-sm-2 paddingsearch\">Status</label>\n                        <div class=\"col-sm-10\">\n                            <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                            <select class=\"form-control\" [formControl]=\"status\">\n                                <option ng-selected=\"true\" value=\"\">Select the status</option>\n                                <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row rowmarginsearch\">\n                    <div class=\"col-sm-7 col-md-7\">\n                        <label for=\"submit\" class=\"col-sm-2 paddingsearch\">      </label>\n                        <div class=\"col-sm-5\">\n                            <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                        </div>\n                    </div> \n                </div>\n            </form>\n        </div>\n    </div>\n  \n    <div class=\"panel panel-danger\" *ngIf=\"artists && totalrows < 1\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">No artist found</h3> \n        </div>\n  \n        <div class=\"panel-body\">\n            It seems like you havn't entered any artists for the selected criteria. Please add the artist <a style=\"cursor:pointer\" (click)=\"toaddArtists()\">here</a>.\n        </div>\n    </div>\n  \n  \n    <div class=\"panel panel-default\" *ngIf=\"artists && totalrows > 0 && this.loading == false\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n        </div>\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th width=\"50%\"><a style=\"cursor:pointer\" (click)=\"sortArtist('artistname')\">Artist Name</a></th>\n                            <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortArtist('status')\">Status</a></th>\n                            <th width=\"20%\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let artst of artists; let artIndex = index'>\n                            <td><a style=\"cursor:pointer\" (click)=\"showArtist(artst._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ artst.artistname}}</a></td>\n                            <td>{{ artst.stsvalue}}</td>\n                            <td>\n                                <button type=\"button\" class=\"btn-xs btn-info\" aria-label=\"View\" (click)=\"editArtistPhoto(artst._id)\">\n                                    <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Artist Photo\"></span>\n                                </button>\n                                <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Edit\" (click)=\"editArtist(artst._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Artist Data\">\n                                    <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                                </button>\n                                <button type=\"button\" class=\"btn-xs btn-primary\" aria-label=\"Delete\" (click)=\"confirmDel(artIndex, artst._id, artst.artistname,artst.artistphotoname)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Artist\">\n                                    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                        \n                    </tbody>\n                </table>\n            </div>\n  \n            <div style=\"text-align:center\" *ngIf=\"artists && totalrows > 10\">\n                <nav aria-label=\"Page navigation\">\n                    <ul class=\"pagination\">\n                        <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                            <a [ngClass]=\"{'selected': qpage == idx + 1 }\"class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div>\n  \n        </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/artist/listartist/listartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ListartistComponent = /** @class */ (function () {
    function ListartistComponent(fb, authService, artistService, albumService, ftService, msconfigService, route, router, toastr, datePipe, globals) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.ftService = ftService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.globals = globals;
        /*   sts: any = [  {id: '',desc: 'Select option'},
                        {id: 'active', desc: 'active'},
                        {id: 'inactive', desc: 'inactive'}
                      ]; */
        this.loading = false;
        this.artistname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    //startdt = new FormControl({value: '', disabled: true});
    ListartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.artistuploadpath = this.globals.artistuploadpath;
        this.reportForm = this.fb.group({
            artistname: this.artistname,
            status: this.status
        });
        this.route.queryParams.forEach(function (params) {
            _this.qartistname = params['artistname'] || '';
            _this.qstatus = params['status'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            _this.getMsconfigGroupList('CSTATUS');
            var payload = {};
            payload.status = _this.qstatus;
            payload.artistname = _this.qartistname;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(_this.userObj.userid, payload);
        });
    };
    ListartistComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.sts = data.data;
                }
                else {
                    _this.sts = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
    };
    ListartistComponent.prototype.getReport = function (formdata) {
        if (this.reportForm.valid) {
            //this.fetchReport(this.userObj.userid, this.reportForm.value);
            this.router.navigate(['listartist'], {
                queryParams: { artistname: this.reportForm.value.artistname, status: this.reportForm.value.status, page: 1, sortby: null }
            });
        }
    };
    ListartistComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.loading = true;
        this.artistService.getAggArtists(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.loading = false;
                //this.artists = data.data.docs;
                _this.artists = data.data;
                //this.totalrows = +data.data.total;
                _this.totalrows = +data.totalcount;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qartistname = formval.artistname;
                _this.qstatus = formval.status;
                _this.reportTitle = 'Artists Result';
                _this.reportForm.patchValue({
                    artistname: _this.qartistname,
                    status: _this.qstatus
                });
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
    ListartistComponent.prototype.confirmDel = function (idx, artistid, artistname, artistphotoname) {
        var _this = this;
        var totalalbum;
        var payload = {};
        payload.artistid = artistid;
        this.loading = true;
        this.albumService.getAlbumCount(this.userObj.userid, payload)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.toastr.error(data.message);
            }
            else {
                _this.loading = false;
                totalalbum = +data.totalcount;
                if (totalalbum > 0) {
                    _this.toastr.warning('Can not delete artist. It already has albums.');
                }
                else {
                    if (confirm('Do you really want to delete this artist: ' + artistname + ' record?')) {
                        var payloadData = {};
                        payloadData.uploadpath = _this.artistuploadpath;
                        payloadData.filename = artistphotoname;
                        _this.loading = true;
                        _this.ftService.deleteInputFile(payloadData)
                            .subscribe(function (data) {
                            if (data.success === false) {
                                _this.loading = false;
                                if (data.errcode) {
                                    _this.authService.logout();
                                    _this.router.navigate(['login']);
                                }
                                _this.toastr.error(data.message);
                            }
                            else {
                                _this.artistService.deleteArtist(artistid)
                                    .subscribe(function (data) {
                                    if (data.success === false) {
                                        _this.loading = false;
                                        if (data.errcode) {
                                            _this.authService.logout();
                                            _this.router.navigate(['login']);
                                        }
                                        _this.toastr.error(data.message);
                                    }
                                    else {
                                        _this.loading = false;
                                        _this.artists.splice(idx, 1);
                                        _this.totalrows = _this.totalrows - 1;
                                        _this.toastr.success(data.message);
                                    }
                                });
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
    ListartistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listartist',
            template: __webpack_require__("./src/app/components/artist/listartist/listartist.component.html"),
            styles: [__webpack_require__("./src/app/components/artist/listartist/listartist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_9__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_10__app_global__["a" /* Globals */]])
    ], ListartistComponent);
    return ListartistComponent;
}());



/***/ }),

/***/ "./src/app/components/artist/viewartist/viewartist.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/artist/viewartist/viewartist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Artist Details</h3>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-8\">\n        <form [formGroup]=\"artistForm\" class=\"form-horizontal\">\n            <div class=\"form-group\">\n                <label for=\"artistname\" class=\"col-sm-2 control-label\">Name</label>\n                <div class=\"col-sm-10 form-ele\">{{ artist?.artistname }}\n                  <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                    <div class=\"form-ele\">{{ artist?.artistname }}</div> -->\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n                <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                    <select class=\"form-control selectfontsize\" [formControl]=\"status\" disabled>\n                          <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                    </select>\n                    <!-- <div class=\"form-ele\">{{ artist?.status }}</div> -->\n                </div>\n            </div>\n        </form>\n    </div>\n    <div class=\"col-sm-4 thumbpadding\">        \n        <img src=\"{{ artist?.artistphotopath }}\" class=\"img-thumbnail thumbviewsize\">\n    </div>\n  </div>\n  \n    <div class=\"row\">\n        <div class=\"col-sm-12 dtlpadding\" *ngIf=\"albums && totalrows > 0\">\n            <div class=\"col-sm-12 col-md-12\">\n                <b>( TOTAL : {{ totalrows }} albums ) </b> \n            </div>\n            <div class=\"col-sm-12 col-md-12\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\" width=\"80%\">\n                        <thead>\n                            <tr>\n                                <th width=\"30%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumname')\">Album Name</a></th>\n                                <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumyear')\">Year</a></th>\n                                <th width=\"9%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumgenre')\">Genre</a></th>\n                                <th width=\"10%\" class=\"text-right\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('albumprice')\">Price</a></th>\n                                <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor='let albm of albums; let albIndex = index'>\n                                <td>{{ albm.albumname}}</td>\n                                <td>{{ albm.albumyear}}</td>\n                                <td>{{ albm.genrevalue}}</td>\n                                <td class=\"text-right\">{{ albm.albumprice | currency: 'IDR':true }}</td>\n                                <td>{{ albm.stsvalue}}</td>\n                            </tr>\n                            \n                        </tbody>\n                    </table>\n                </div>\n    \n                <div style=\"text-align:center\" *ngIf=\"albums && totalrows > 10\">\n                    <nav aria-label=\"Page navigation\">\n                        <ul class=\"pagination\">\n                            <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                                <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                            </li>\n                        </ul>\n                    </nav>\n                </div>\n    \n            </div>\n        </div>      \n    </div>\n\n      <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n          </div>\n          <br>\n      </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/artist/viewartist/viewartist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewartistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ViewartistComponent = /** @class */ (function () {
    function ViewartistComponent(fb, authService, artistService, albumService, msconfigService, toastr, route, router) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.msconfigService = msconfigService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    ViewartistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.sub = this.route.params.subscribe(function (params) {
            var artistid = params['id'];
            _this.artistid = artistid;
            _this.getMsconfigGroupList('CSTATUS');
            _this.getArtist(artistid);
        });
        this.route.queryParams.forEach(function (params) {
            _this.qartistid = params['artistid'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            var payload = {};
            _this.qartistid = _this.artistid;
            payload.artistid = _this.qartistid;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(_this.userObj.userid, payload);
        });
        this.artistForm = this.fb.group({
            status: this.status
        });
    };
    ViewartistComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewartistComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.sts = data.data;
                }
                else {
                    _this.sts = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
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
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Artist id is incorrect in the URL');
                }
            }
        });
    };
    ViewartistComponent.prototype.populateForm = function (data) {
        this.artistForm.patchValue({
            status: data.status
        });
    };
    ViewartistComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.albumService.getArtistAlbums(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.albums = data.data;
                _this.totalrows = +data.totalcount;
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
    ViewartistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewartist',
            template: __webpack_require__("./src/app/components/artist/viewartist/viewartist.component.html"),
            styles: [__webpack_require__("./src/app/components/artist/viewartist/viewartist.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_7__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_6__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewartistComponent);
    return ViewartistComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Dashboard</h3>\n  </div>\n\n  <form class=\"form-horizontal\">\n    <div class=\"form-group\">\n        <label for=\"labelname\" class=\"control-label\">Name</label>\n        <div class=\"input-group col-sm-12\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></div>\n            <div class=\"form-ele\">{{ this.name }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"email\" class=\"control-label\">Email</label>\n        <div class=\"input-group col-sm-12\">\n            <div class=\"input-group-addon\">@</div>\n            <div class=\"form-ele\">{{ this.email }}</div>\n        </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\">\n      <label for=\"contactno\" class=\"control-label\">Contact No</label>\n      <div class=\"input-group col-sm-12\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-earphone\"></i></div>\n          <div class=\"form-ele\">{{ this.contactno }}</div>\n      </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\">\n        <label for=\"balance\" class=\"control-label\">Balance</label>\n        <div class=\"input-group col-sm-12\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-bold\"></i></div>\n            <div class=\"form-ele\">{{ this.balance | currency:'IDR':'symbol-narrow'}}</div>\n        </div>\n    </div>\n    <div class=\"form-group\" *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                <h3 class=\"panel-title\">Total Assets</h3>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"col-sm-12\" style=\"padding:0;margin:0\"><i class=\"fa fa-angle-double-right\"></i>  \n                    <b><i><a style=\"cursor:pointer\" (click)=\"toArtists()\">({{ this.totalrows }})</a></i></b> active artists\n                </div>        \n                <div class=\"col-sm-12\" style=\"padding:0;margin:0\"><i class=\"fa fa-angle-double-right\"></i>  \n                    <b><i><a style=\"cursor:pointer\" (click)=\"toAlbums()\">({{ this.totalalbums }})</a></i></b> active albums\n                </div>        \n                <div class=\"col-sm-12\" style=\"padding:0;margin:0\"><i class=\"fa fa-angle-double-right\"></i>  \n                    <b><i><a style=\"cursor:pointer\" (click)=\"toSongs()\">({{ this.totalsongs }})</a></i></b> active songs\n                </div>                    \n            </div>\n        </div>  \n<!--         <label class=\"col-sm-2 control-label\"></label>\n        <div class=\"col-sm-7\">\n            You have <b><i><a style=\"cursor:pointer\" (click)=\"toArtists()\">({{ this.totalrows }})</a></i></b> active artists, <b><i><a style=\"cursor:pointer\" (click)=\"toAlbums()\">({{ this.totalalbums }})</a></i></b> active albums, \n            and <b><i><a style=\"cursor:pointer\" (click)=\"toSongs()\">({{ this.totalsongs }})</a></i></b> active songs.\n        </div> -->\n    </div>\n    <div class=\"form-group\" *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LIS'\">\n        <label class=\"col-sm-2 control-label\"></label>\n        <div class=\"col-sm-7\">\n            You have logged in as Listener. <br>\n            Please use the kaXet mobile apps to buy songs.\n        </div>\n    </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardComponent = /** @class */ (function () {
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
        payload.status = 'STSACT';
        this.fetchReport(this.userObj.userid, payload);
    };
    DashboardComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.artistService.getArtistCount(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                //this.artists = data.data.docs;
                _this.totalrows = +data.totalcount;
                _this.albumService.getAlbumCount(userid, formval)
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
                        _this.totalalbums = +data.totalcount;
                        _this.songService.getSongCount(userid, formval)
                            .subscribe(function (data) {
                            if (data.success === false) {
                                if (data.errcode) {
                                    _this.authService.logout();
                                    _this.router.navigate(['login']);
                                }
                                _this.toastr.error(data.message);
                            }
                            else {
                                _this.totalsongs = +data.totalcount;
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
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_4__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_5__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_7__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/kx-info-dialog/kx-info-dialog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/kx-info-dialog/kx-info-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"md-dialog-container\">\n  <h3 mat-dialog-title>INFO</h3>\n  <hr>\n  <mat-dialog-content>\n    <strong>{{data}}</strong>\n  </mat-dialog-content>\n  <hr>\n  <mat-dialog-actions>\n      <!-- <button mat-raised-button (click)=\"onCloseConfirm()\">Confirm</button> -->\n      <button class=\"btn btn-info\" mat-raised-button (click)=\"onCloseCancel()\">Close</button>\n  </mat-dialog-actions>\n</div>"

/***/ }),

/***/ "./src/app/components/kx-info-dialog/kx-info-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KxInfoDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var KxInfoDialogComponent = /** @class */ (function () {
    function KxInfoDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    KxInfoDialogComponent.prototype.ngOnInit = function () {
        //this.changePosition();
    };
    KxInfoDialogComponent.prototype.onCloseConfirm = function () {
        this.dialogRef.close('Confirm');
    };
    KxInfoDialogComponent.prototype.onCloseCancel = function () {
        this.dialogRef.close('Cancel');
    };
    KxInfoDialogComponent.prototype.changePosition = function () {
        this.dialogRef.updatePosition({ top: '50px', left: '50px' });
    };
    KxInfoDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-kx-info-dialog',
            template: __webpack_require__("./src/app/components/kx-info-dialog/kx-info-dialog.component.html"),
            styles: [__webpack_require__("./src/app/components/kx-info-dialog/kx-info-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], String])
    ], KxInfoDialogComponent);
    return KxInfoDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/msconfig/addconfig/addconfig.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/msconfig/addconfig/addconfig.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Add Config</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form  [formGroup]=\"addConfigForm\" (ngSubmit)=\"addMsconfig(addConfigForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': addConfigForm.get('code').invalid && addConfigForm.get('code').dirty}\">\n            <label for=\"code\" class=\"col-sm-2 control-label\">Code <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"code\" id=\"code\" placeholder=\"Ms Code\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"addConfigForm.get('code').dirty && addConfigForm.get('code').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addConfigForm.get('code').errors.required\">\n                    Please enter the code\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': addConfigForm.get('value').invalid && addConfigForm.get('value').dirty}\">\n            <label for=\"value\" class=\"col-sm-2 control-label\">Value <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"value\" id=\"value\" placeholder=\"Ms Value\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"addConfigForm.get('value').dirty && addConfigForm.get('value').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addConfigForm.get('value').errors.required\">\n                    Please enter the value\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': addConfigForm.get('group').invalid && addConfigForm.get('group').dirty}\">\n            <label for=\"group\" class=\"col-sm-2 control-label\">Group <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select #inputgroup [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"group\">\n                    <option ng-selected=\"true\" value=\"\">Select the group</option>\n                    <option *ngFor=\"let g of grouplist\" [ngValue]=\"g.code\">{{g.value}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"addConfigForm.get('group').dirty && addConfigForm.get('group').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addConfigForm.get('group').errors.required\">\n                    Please select config group\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"desc\" class=\"col-sm-2 control-label\">Description</label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <textarea [disabled]=\"this.loading == true\" class=\"form-control\" id=\"desc\" rows=\"10\" [formControl]=\"desc\" placeholder=\"Description\"></textarea>\n            </div>\n        </div>\n        <div class=\"form-group\" >\n            <label for=\"genreimage\" class=\"col-sm-2 control-label\">Config Photo</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n                <input [disabled]=\"this.loading == true\" #inputimg type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"genreimage\" id=\"genreimage\" placeholder=\"Genreimage\">\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">  </label>\n          <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n          <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n       </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-5\" style=\"padding:0;margin:0;\">\n                <button type=\"submit\" [disabled]=\"addConfigForm.invalid || this.loading == true\" class=\"btn btn-primary\">Submit</button>\n                <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\">Reset</button>\n            </div>\n            <div class=\"col-sm-5\" style=\"text-align:right\">\n                <sup>*</sup> required\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/msconfig/addconfig/addconfig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddconfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddconfigComponent = /** @class */ (function () {
    function AddconfigComponent(fb, authService, msconfigService, route, router, toastr, datePipe, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.ftService = ftService;
        this.globals = globals;
        //status: any = ['active', 'inactive'];
        this.filesToUpload = [];
        this.loading = false;
        this.progressvalue = 0;
        this.code = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.value = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.desc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    AddconfigComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.configuploadpath = this.globals.configuploadpath;
        this.progressvalue = 0;
        this.msconfigid = '';
        this.addConfigForm = this.fb.group({
            code: this.code,
            value: this.value,
            group: this.group,
            desc: this.desc,
            genreimage: this.filesToUpload,
            filepath: this.filepath,
            filename: this.filename
        });
        this.getMsconfiggroup();
    };
    AddconfigComponent.prototype.getMsconfiggroup = function () {
        var _this = this;
        this.msconfigService.getMsconfiggroup().subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.grouplist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.grouplist = [{ code: '', value: 'Error group list' }];
                }
            }
        });
    };
    AddconfigComponent.prototype.addMsconfig = function (formdata) {
        var _this = this;
        this.progressvalue = 0;
        if (this.addConfigForm.dirty && this.addConfigForm.valid) {
            var files = this.filesToUpload;
            var theForm_1 = this.addConfigForm.value;
            this.loading = true;
            this.progressvalue = 10;
            if (this.genreimageVar.nativeElement.value) {
                this.progressvalue = 30;
                var lformData = new FormData();
                //console.log('Ini file: '+ files[0]['name']); 
                //lformData.append('genreimage',files[0],files[0]['name']);
                lformData.append('fileinputsrc', files[0], files[0]['name']);
                lformData.append('uploadpath', this.configuploadpath);
                //console.log(lformData.getAll('artistimage'));
                //console.dir(theForm);
                this.progressvalue = 50;
                this.ftService.uploadInputFile(lformData)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        _this.progressvalue = 0;
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.progressvalue = 70;
                        theForm_1.filepath = data.filedata.filepath;
                        theForm_1.filename = data.filedata.filename;
                        theForm_1.status = 'STSACT';
                        //console.log('Ini file path: '+ theForm.artistphotopath);
                        if (_this.msconfigid !== '') {
                            theForm_1.msconfigid = _this.msconfigid;
                        }
                        _this.progressvalue = 90;
                        _this.msconfigService.saveMsconfig(_this.userObj.userid, theForm_1)
                            .subscribe(function (data) {
                            if (data.success === false) {
                                _this.loading = false;
                                _this.progressvalue = 0;
                                _this.toastr.error(data.message);
                            }
                            else {
                                _this.progressvalue = 100;
                                _this.loading = false;
                                _this.toastr.success(data.message);
                                //this.router.navigate(['listartist']);
                            }
                            _this.addConfigForm.reset();
                            _this.inputgroupVar.nativeElement.selectedIndex = 0;
                            _this.genreimageVar.nativeElement.value = "";
                            _this.progressvalue = 0;
                        });
                    }
                });
            }
            else {
                this.progressvalue = 30;
                theForm_1.status = 'STSACT';
                //console.log('Ini file path: '+ theForm.artistphotopath);
                if (this.msconfigid !== '') {
                    theForm_1.msconfigid = this.msconfigid;
                }
                this.progressvalue = 70;
                this.msconfigService.saveMsconfig(this.userObj.userid, theForm_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        _this.progressvalue = 0;
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.progressvalue = 90;
                        _this.loading = false;
                        _this.toastr.success(data.message);
                        //this.router.navigate(['listartist']);
                        _this.progressvalue = 100;
                    }
                    _this.addConfigForm.reset();
                    _this.inputgroupVar.nativeElement.selectedIndex = 0;
                    _this.genreimageVar.nativeElement.value = "";
                    _this.progressvalue = 0;
                });
            }
        }
    };
    AddconfigComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        console.log('content file: ' + this.filesToUpload);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputimg'),
        __metadata("design:type", Object)
    ], AddconfigComponent.prototype, "genreimageVar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgroup'),
        __metadata("design:type", Object)
    ], AddconfigComponent.prototype, "inputgroupVar", void 0);
    AddconfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addconfig',
            template: __webpack_require__("./src/app/components/msconfig/addconfig/addconfig.component.html"),
            styles: [__webpack_require__("./src/app/components/msconfig/addconfig/addconfig.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_7__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_8__app_global__["a" /* Globals */]])
    ], AddconfigComponent);
    return AddconfigComponent;
}());



/***/ }),

/***/ "./src/app/components/msconfig/addgroup/addgroup.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/msconfig/addgroup/addgroup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Add Group</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form  [formGroup]=\"addGroupForm\" (ngSubmit)=\"addMsgroup(addGroupForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': addGroupForm.get('code').invalid && addGroupForm.get('code').dirty}\">\n            <label for=\"code\" class=\"col-sm-2 control-label\">Code <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"code\" id=\"code\" placeholder=\"Ms Code\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"addGroupForm.get('code').dirty && addGroupForm.get('code').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addGroupForm.get('code').errors.required\">\n                    Please enter the code\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': addGroupForm.get('value').invalid && addGroupForm.get('value').dirty}\">\n            <label for=\"value\" class=\"col-sm-2 control-label\">Value <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"value\" id=\"value\" placeholder=\"Ms Value\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"addGroupForm.get('value').dirty && addGroupForm.get('value').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addGroupForm.get('value').errors.required\">\n                    Please enter the value\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"desc\" class=\"col-sm-2 control-label\">Description</label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <textarea [disabled]=\"this.loading == true\" class=\"form-control\" id=\"desc\" rows=\"10\" [formControl]=\"desc\" placeholder=\"Description\"></textarea>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-5\" style=\"padding:0;margin:0;\">\n                <button type=\"submit\" [disabled]=\"addGroupForm.invalid || this.loading == true\" class=\"btn btn-primary\">Submit</button>\n                <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\">Reset</button>\n            </div>\n            <div class=\"col-sm-5\" style=\"text-align:right\">\n                <sup>*</sup> required\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/msconfig/addgroup/addgroup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddgroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddgroupComponent = /** @class */ (function () {
    function AddgroupComponent(fb, authService, msconfigService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        //status: any = ['active', 'inactive'];
        this.loading = false;
        this.code = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.value = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.desc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    AddgroupComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.addGroupForm = this.fb.group({
            code: this.code,
            value: this.value,
            desc: this.desc
        });
    };
    AddgroupComponent.prototype.addMsgroup = function (formdata) {
        var _this = this;
        if (this.addGroupForm.dirty && this.addGroupForm.valid) {
            var theForm = this.addGroupForm.value;
            this.loading = true;
            theForm.group = 'GROUP';
            theForm.status = 'STSACT';
            //console.log('Ini file path: '+ theForm.artistphotopath);
            this.msconfigService.saveMsconfig(this.userObj.userid, theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    _this.toastr.error(data.message);
                }
                else {
                    _this.loading = false;
                    _this.toastr.success(data.message);
                    //this.router.navigate(['listartist']);
                }
                _this.addGroupForm.reset();
            });
        }
    };
    AddgroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addgroup',
            template: __webpack_require__("./src/app/components/msconfig/addgroup/addgroup.component.html"),
            styles: [__webpack_require__("./src/app/components/msconfig/addgroup/addgroup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], AddgroupComponent);
    return AddgroupComponent;
}());



/***/ }),

/***/ "./src/app/components/msconfig/editconfig/editconfig.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/msconfig/editconfig/editconfig.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Edit Config</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"msconfigForm\" (ngSubmit)=\"saveMsconfig(msconfigForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\">\n            <label for=\"code\" class=\"col-sm-2 control-label\">Code</label>\n            <div class=\"form-ele col-sm-10\">{{ this.mscode }}\n              <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ this.mscode }}</div> -->\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': msconfigForm.get('value').invalid && msconfigForm.get('value').dirty}\">\n            <label for=\"value\" class=\"col-sm-2 control-label\">Value</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"value\" [formControl]=\"value\" placeholder=\"Ms Value\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"msconfigForm.get('value').dirty && msconfigForm.get('value').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter the Ms config value</span>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': msconfigForm.get('group').invalid && msconfigForm.get('group').dirty}\">\n            <label for=\"group\" class=\"col-sm-2 control-label\">Group</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"group\">\n                    <option *ngFor=\"let g of grouplist\" [ngValue]=\"g.code\">{{g.value}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"msconfigForm.get('group').dirty && msconfigForm.get('group').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"msconfigForm.get('group').errors.required\">\n                    Please select Ms Config Group\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"desc\" class=\"col-sm-2 control-label\">Description</label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <textarea [disabled]=\"this.loading == true\" class=\"form-control\" id=\"desc\" rows=\"10\" [formControl]=\"desc\" placeholder=\"Desc\"></textarea>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': msconfigForm.get('status').invalid && msconfigForm.get('status').dirty}\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"status\">\n                    <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"msconfigForm.get('status').dirty && msconfigForm.get('status').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"msconfigForm.get('status').errors.required\">\n                    Please select config status\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <button type=\"submit\" [disabled]=\"msconfigForm.invalid || this.loading == true\" class=\"btn btn-primary\">{{ btnLbl }}</button>\n                <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\" (click)=\"onBack()\">Back</button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/msconfig/editconfig/editconfig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditconfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditconfigComponent = /** @class */ (function () {
    function EditconfigComponent(fb, authService, msconfigService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.loading = false;
        this.code = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.value = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.desc = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    EditconfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.msconfigid = params['id'];
            _this.getMsconfig(_this.msconfigid);
            _this.btnLbl = "Update";
        });
        this.userObj = this.authService.currentUser;
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfiggroup();
        this.msconfigForm = this.fb.group({
            code: this.code,
            value: this.value,
            group: this.group,
            desc: this.desc,
            status: this.status
        });
    };
    EditconfigComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                }
                else {
                    _this.sts = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
    };
    EditconfigComponent.prototype.getMsconfiggroup = function () {
        var _this = this;
        this.msconfigService.getMsconfiggroup().subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.grouplist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.grouplist = [{ code: '', value: 'Error group list' }];
                }
            }
        });
    };
    EditconfigComponent.prototype.getMsconfig = function (id) {
        var _this = this;
        this.msconfigService.getMsconfigAgg(id).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                if (data.data[0]) {
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('MsConfig id is incorrect in the URL');
                }
            }
        });
    };
    EditconfigComponent.prototype.populateForm = function (data) {
        this.mscode = data.code;
        this.msconfigForm.patchValue({
            code: data.code,
            value: data.value,
            group: data.group,
            desc: data.desc,
            status: data.status
        });
    };
    EditconfigComponent.prototype.saveMsconfig = function (formdata) {
        var _this = this;
        if (this.msconfigForm.valid) {
            var theForm = this.msconfigForm.value;
            if (this.msconfigid !== '') {
                theForm.msconfigid = this.msconfigid;
            }
            this.loading = true;
            this.msconfigService.saveMsconfig(this.userObj.userid, theForm)
                .subscribe(function (data) {
                _this.loading = false;
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
                if (!_this.msconfigid) {
                    _this.msconfigForm.reset();
                }
            });
        }
    };
    EditconfigComponent.prototype.onBack = function () {
        this.router.navigate(['/listconfig'], { preserveQueryParams: true });
    };
    EditconfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editconfig',
            template: __webpack_require__("./src/app/components/msconfig/editconfig/editconfig.component.html"),
            styles: [__webpack_require__("./src/app/components/msconfig/editconfig/editconfig.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], EditconfigComponent);
    return EditconfigComponent;
}());



/***/ }),

/***/ "./src/app/components/msconfig/editconfigfile/editconfigfile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/msconfig/editconfigfile/editconfigfile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Change File</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"msconfigForm\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"col-lg-6 col-sm-6 col-12\">\n            <label for=\"genreimage\" class=\"col-sm-3 control-label\"></label>\n            <img src=\"{{ this.displayImg }}\" width=\"170\" height=\"170\">\n            <br><br>\n            <div class=\"input-group\">\n                <label class=\"input-group-btn\">\n                    <span *ngIf=\"this.loading == false\" class=\"btn btn-primary\">\n                        Browse&hellip; <input [disabled]=\"this.loading == true\" type=\"file\" (change)=\"fileChangeEvent($event)\" name=\"genreimage\" id=\"genreimage\" style=\"display:none\">\n                    </span>\n                </label>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" value=\"{{ this.newfile }}\">  \n              </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">  </label>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">  </label>\n            <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n            <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">     </label>\n            <div class=\"col-sm-10\">\n                <br>\n                <button [disabled]=\"this.loading == true\" type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/msconfig/editconfigfile/editconfigfile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditconfigfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditconfigfileComponent = /** @class */ (function () {
    function EditconfigfileComponent(fb, authService, msconfigService, route, router, toastr, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.ftService = ftService;
        this.globals = globals;
        this.filesToUpload = [];
        this.loading = false;
        this.progressvalue = 0;
        this.filepath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.filename = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    EditconfigfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.configuploadpath = this.globals.configuploadpath;
        this.progressvalue = 0;
        this.msconfigForm = this.fb.group({
            filepath: this.filepath,
            filename: this.filename
        });
        this.route.params.subscribe(function (params) {
            var msconfigid = params['id'];
            _this.msconfigid = msconfigid;
            _this.getMsconfig(msconfigid);
        });
    };
    EditconfigfileComponent.prototype.getMsconfig = function (id) {
        var _this = this;
        this.msconfigService.getMsconfigAgg(id).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                if (data.data[0]) {
                    _this.msconfig = data.data[0];
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('MsConfig id is incorrect in the URL');
                }
            }
        });
    };
    EditconfigfileComponent.prototype.populateForm = function (data) {
        this.deletedFilename = this.msconfig.filename;
        this.displayImg = this.msconfig.filepath;
        this.msconfigForm.patchValue({
            filepath: data.filepath,
            filename: data.filename
        });
    };
    EditconfigfileComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        this.newfile = this.filesToUpload[0]['name'];
        console.log('content file: ' + this.filesToUpload);
        this.progressvalue = 0;
        this.uploadNewPhoto(this.filesToUpload);
    };
    EditconfigfileComponent.prototype.uploadNewPhoto = function (newFileData) {
        var _this = this;
        this.progressvalue = 30;
        var files = newFileData;
        var lformData = new FormData();
        //lformData.append('genreimage',files[0],files[0]['name']);
        lformData.append('fileinputsrc', files[0], files[0]['name']);
        lformData.append('uploadpath', this.configuploadpath);
        this.loading = true;
        this.progressvalue = 60;
        this.ftService.uploadInputFile(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.progressvalue = 0;
                _this.toastr.error(data.message);
            }
            else {
                _this.progressvalue = 70;
                _this.displayImg = data.filedata.filepath;
                //let payloadData: any = this.msconfigForm.value;
                var payloadData_1 = {};
                payloadData_1.uploadpath = _this.configuploadpath;
                payloadData_1.filename = _this.msconfigForm.value.filename;
                _this.progressvalue = 80;
                _this.ftService.deleteInputFile(payloadData_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        //this.toastr.error(data.message);
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        console.log('File deleted - ' + payloadData_1.filename);
                    }
                });
                _this.msconfigForm.value.msconfigid = _this.msconfigid;
                _this.msconfigForm.value.filepath = data.filedata.filepath;
                _this.msconfigForm.value.filename = data.filedata.filename;
                _this.progressvalue = 90;
                //console.log('Update database photo - ' + this.displayImg);
                _this.msconfigService.updateMsconfigfile(_this.userObj.userid, _this.msconfigForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        _this.progressvalue = 0;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.progressvalue = 100;
                        _this.loading = false;
                        console.log('Success update database photo - ' + _this.displayImg);
                        _this.toastr.success(data.message);
                        _this.progressvalue = 0;
                    }
                });
            }
        });
    };
    EditconfigfileComponent.prototype.onBack = function () {
        this.router.navigate(['/listconfig'], { preserveQueryParams: true });
    };
    EditconfigfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editconfigfile',
            template: __webpack_require__("./src/app/components/msconfig/editconfigfile/editconfigfile.component.html"),
            styles: [__webpack_require__("./src/app/components/msconfig/editconfigfile/editconfigfile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Globals */]])
    ], EditconfigfileComponent);
    return EditconfigfileComponent;
}());



/***/ }),

/***/ "./src/app/components/msconfig/listconfig/listconfig.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/msconfig/listconfig/listconfig.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>List Config</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <div *ngIf=\"this.loading == false\" class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Search Parameter</h3>\n        </div>\n        <div class=\"panel-body\">\n            <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n                <div class=\"row rowmarginsearch\">\n                  <div class=\"col-sm-6 col-md-6\">\n                      <label for=\"code\" class=\"col-sm-2 paddingsearch\">Code</label>\n                      <div class=\"col-sm-10\">\n                          <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                          <input type=\"text\" class=\"form-control\" id=\"code\" [formControl]=\"code\" placeholder=\"Ms Code\">\n                      </div>\n                  </div>\n                  <div class=\"col-sm-6 col-md-6\">\n                      <label for=\"value\" class=\"col-sm-2 paddingsearch\">Value</label>\n                      <div class=\"col-sm-10\">\n                          <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                          <input type=\"text\" class=\"form-control\" id=\"value\" [formControl]=\"value\" placeholder=\"Ms Value\">\n                      </div>\n                  </div>\n                </div>\n                <div class=\"row rowmarginsearch\">\n                  <div class=\"col-sm-6 col-md-6\">\n                        <label for=\"group\" class=\"col-sm-2 paddingsearch\">Group</label>\n                        <div class=\"col-sm-10\">\n                            <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                            <select class=\"form-control\" [formControl]=\"group\">\n                                <!-- <option ng-selected=\"true\" value=\"\">Select the artist</option> -->\n                                <option ng-selected=\"true\" value=\"\">Select the group</option>\n                                <option value=\"GROUP\">Group Config</option>\n                                <option *ngFor=\"let g of grouplist\" [ngValue]=\"g.code\">{{g.value}}</option>\n                            </select>\n                          </div>\n                    </div>\n                    <div class=\"col-sm-6 col-md-6\">\n                        <label for=\"status\" class=\"col-sm-2 paddingsearch\">Status</label>\n                        <div class=\"col-sm-10\">\n                            <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                            <select class=\"form-control\" [formControl]=\"status\">\n                              <option ng-selected=\"true\" value=\"\">Select the status</option>\n                              <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">    \n                    <div class=\"col-sm-6 col-md-6\">\n                        <label for=\"submit\" class=\"col-sm-2 paddingsearch\"> </label>\n                        <div class=\"col-sm-10\">\n                          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                        </div>\n                    </div>                  \n                </div>\n\n            </form>\n        </div>\n    </div>\n    <div class=\"panel panel-danger\" *ngIf=\"msconfigs && totalrows < 1\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">No config found</h3> \n        </div>\n  \n        <div class=\"panel-body\">\n            There is NO any configs found for the selected criteria.\n        </div>\n    </div>\n    <div class=\"panel panel-default\" *ngIf=\"msconfigs && totalrows > 0 && this.loading == false\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n        </div>\n        <div class=\"panel-body\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-hover\">\n                    <thead>\n                        <tr>\n                            <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortConfig('code')\">Code</a></th>\n                            <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortConfig('value')\">Value</a></th>\n                            <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortConfig('group')\">Group</a></th>\n                            <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortConfig('status')\">Status</a></th>\n                            <th width=\"20%\">Action</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor='let config of msconfigs; let cfgIndex = index'>\n                            <td><a style=\"cursor:pointer\" (click)=\"showConfig(config._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ config.code}}</a></td>\n                            <td>{{ config.value }}</td>\n                            <td>{{ config.groupname }}</td>\n                            <td>{{ config.stsvalue}}</td>\n                            <td>\n                                <button type=\"button\" class=\"btn-xs btn-info\" aria-label=\"View\" (click)=\"editConfigFiles(config._id)\">\n                                    <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Config File\"></span>\n                                </button>\n                                <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Edit\" (click)=\"editConfig(config._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Config Data\">\n                                    <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                                </button>\n                                <button type=\"button\" class=\"btn-xs btn-primary\" aria-label=\"Delete\" (click)=\"confirmDel(cfgIndex, config._id, config.code, config.filename)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Config\">\n                                    <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                                </button>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div> \n            <div style=\"text-align:center\" *ngIf=\"msconfigs && totalrows > 10\">\n                <nav aria-label=\"Page navigation\">\n                    <ul class=\"pagination\">\n                        <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                            <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                        </li>\n                    </ul>\n                </nav>\n            </div> \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/msconfig/listconfig/listconfig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListconfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListconfigComponent = /** @class */ (function () {
    function ListconfigComponent(fb, authService, msconfigService, route, router, toastr, datePipe, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.ftService = ftService;
        this.globals = globals;
        this.sts = [{ code: '', value: 'Error ms config list' }];
        this.grouplist = [{ code: '', value: 'Error ms config list' }];
        this.loading = false;
        this.code = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.value = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    ListconfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.configuploadpath = this.globals.configuploadpath;
        this.reportForm = this.fb.group({
            code: this.code,
            value: this.value,
            group: this.group,
            status: this.status
        });
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GROUP');
        this.route.queryParams.forEach(function (params) {
            _this.qcode = params['code'] || '';
            _this.qvalue = params['value'] || '';
            _this.qgroup = params['group'] || '';
            _this.qstatus = params['status'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            var payload = {};
            payload.code = _this.qcode;
            payload.value = _this.qvalue;
            payload.group = _this.qgroup;
            payload.status = _this.qstatus;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(payload);
            _this.reportForm.patchValue({
                code: _this.qcode,
                value: _this.qvalue,
                group: _this.qgroup,
                status: _this.qstatus
            });
        });
    };
    ListconfigComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'GROUP') {
                        _this.grouplist = data.data;
                    }
                }
            }
        });
    };
    ListconfigComponent.prototype.getReport = function (formdata) {
        if (this.reportForm.valid) {
            this.router.navigate(['listconfig'], {
                queryParams: {
                    code: this.reportForm.value.code,
                    value: this.reportForm.value.value,
                    group: this.reportForm.value.group,
                    status: this.reportForm.value.status,
                    page: 1,
                    sortby: null
                }
            });
            //this.fetchReport(this.reportForm.value);
        }
    };
    ListconfigComponent.prototype.fetchReport = function (formval) {
        var _this = this;
        this.loading = true;
        this.msconfigService.getAggMsconfig(formval)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.loading = false;
                _this.msconfigs = data.data;
                _this.totalrows = +data.totalcount;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qcode = formval.code;
                _this.qvalue = formval.value;
                _this.qgroup = formval.group;
                _this.qstatus = formval.status;
                _this.reportTitle = 'Ms Config Result';
                _this.reportForm.patchValue({
                    code: _this.qcode,
                    value: _this.qvalue,
                    group: _this.qgroup,
                    status: _this.qstatus
                });
            }
        });
    };
    ListconfigComponent.prototype.setPage = function (page) {
        this.router.navigate(['listconfig'], {
            queryParams: {
                code: this.qcode,
                value: this.qvalue,
                group: this.qgroup,
                status: this.qstatus,
                page: page,
                sortby: this.qsort
            }
        });
    };
    ListconfigComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    ListconfigComponent.prototype.sortConfig = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(['listconfig'], {
            queryParams: {
                code: this.qcode,
                value: this.qvalue,
                group: this.qgroup,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort
            }
        });
    };
    ListconfigComponent.prototype.showConfig = function (msconfigid) {
        this.router.navigate(["viewconfig/" + msconfigid], {
            queryParams: {
                code: this.qcode,
                value: this.qvalue,
                group: this.qgroup,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort
            }
        });
    };
    ListconfigComponent.prototype.editConfigFiles = function (msconfigid) {
        this.router.navigate(["editconfigfile/" + msconfigid], {
            queryParams: {
                code: this.qcode,
                value: this.qvalue,
                group: this.qgroup,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort
            }
        });
    };
    ListconfigComponent.prototype.editConfig = function (msconfigid) {
        this.router.navigate(["editconfig/" + msconfigid], {
            queryParams: {
                code: this.qcode,
                value: this.qvalue,
                group: this.qgroup,
                status: this.qstatus,
                page: this.qpage || 1,
                sortby: this.qsort
            }
        });
    };
    ListconfigComponent.prototype.confirmDel = function (idx, msconfigid, code, filename) {
        var _this = this;
        this.loading = true;
        if (confirm('Do you really want to delete this config: ' + code + ' record?')) {
            if (filename) {
                var payloadData_1 = {};
                payloadData_1.uploadpath = this.configuploadpath;
                payloadData_1.filename = filename;
                this.ftService.deleteInputFile(payloadData_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        //this.toastr.error(data.message);
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        console.log('File deleted - ' + payloadData_1.filename);
                    }
                });
            }
            this.msconfigService.deleteMsconfig(msconfigid)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.loading = false;
                    _this.msconfigs.splice(idx, 1);
                    _this.totalrows = _this.totalrows - 1;
                    _this.toastr.success(data.message);
                }
            });
        }
    };
    ListconfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listconfig',
            template: __webpack_require__("./src/app/components/msconfig/listconfig/listconfig.component.html"),
            styles: [__webpack_require__("./src/app/components/msconfig/listconfig/listconfig.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_7__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_8__app_global__["a" /* Globals */]])
    ], ListconfigComponent);
    return ListconfigComponent;
}());



/***/ }),

/***/ "./src/app/components/msconfig/viewconfig/viewconfig.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/msconfig/viewconfig/viewconfig.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Config Details</h3>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <form [formGroup]=\"msconfigForm\" class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label for=\"code\" class=\"col-sm-2 control-label\">Code</label>\n                    <div class=\"col-sm-10 form-ele\">{{ msconfig?.code }}\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                        <div class=\"form-ele\">{{ msconfig?.code }}</div>-->\n                    </div> \n                </div>\n                <div class=\"form-group\">\n                    <label for=\"value\" class=\"col-sm-2 control-label\">Value</label>\n                    <div class=\"form-ele col-sm-10\">{{ msconfig?.value }}\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                        <div class=\"form-ele\">{{ msconfig?.value }}</div> -->\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"group\" class=\"col-sm-2 control-label\">Group</label>\n                    <div class=\"form-ele col-sm-10\">{{ msconfig?.groupname }}\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                        <div class=\"form-ele\">{{ msconfig?.groupname }}</div> -->\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"desc\" class=\"col-sm-2 control-label\">Desc</label>\n                    \n                    <div class=\"form-ele col-sm-10\">{{ msconfig?.desc }}\n                        <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                        <div class=\"form-ele\">{{ msconfig?.desc }}</div> -->\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n                    <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                        <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                        <select class=\"form-control selectfontsize\" [formControl]=\"status\" disabled>\n                            <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                        </select>\n                        <!-- <div class=\"form-ele\">{{ artist?.status }}</div> -->\n                    </div>\n                </div>\n            </form>\n        </div>\n        <div class=\"col-sm-4 thumbpadding\" *ngIf=\"msconfig?.filepath != ''\">\n                <img src=\"{{ msconfig?.filepath }}\" class=\"img-thumbnail thumbviewsize\">\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-8\">\n            <form class=\"form-horizontal\">\n                <div class=\"form-group\">\n                    <label class=\"col-sm-2 control-label\"></label>\n                    <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                        <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/msconfig/viewconfig/viewconfig.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewconfigComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewconfigComponent = /** @class */ (function () {
    function ViewconfigComponent(fb, authService, msconfigService, toastr, route, router) {
        this.fb = fb;
        this.authService = authService;
        this.msconfigService = msconfigService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    ViewconfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.sub = this.route.params.subscribe(function (params) {
            var msconfigid = params['id'];
            _this.getMsconfigGroupList('CSTATUS');
            _this.getMsconfig(msconfigid);
        });
        this.msconfigForm = this.fb.group({
            status: this.status
        });
    };
    ViewconfigComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewconfigComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.sts = data.data;
                }
                else {
                    _this.sts = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
    };
    ViewconfigComponent.prototype.getMsconfig = function (id) {
        var _this = this;
        this.msconfigService.getMsconfigAgg(id).subscribe(function (data) {
            if (data.success === false) {
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                if (data.data[0]) {
                    _this.msconfig = data.data[0];
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('MsConfig id is incorrect in the URL');
                }
            }
        });
    };
    ViewconfigComponent.prototype.populateForm = function (data) {
        this.msconfigForm.patchValue({
            status: data.status
        });
    };
    ViewconfigComponent.prototype.onBack = function () {
        this.router.navigate(['/listconfig'], { preserveQueryParams: true });
    };
    ViewconfigComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewconfig',
            template: __webpack_require__("./src/app/components/msconfig/viewconfig/viewconfig.component.html"),
            styles: [__webpack_require__("./src/app/components/msconfig/viewconfig/viewconfig.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewconfigComponent);
    return ViewconfigComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n<div id=\"wrap\">\n    \n        <header>   \n            <div class=\"inner relative\">\n                <a class=\"logo\" routerLink=\"about\"><img src=\"KXLOGO6.png\" alt=\"kaxet\"></a>\n                <a id=\"menu-toggle\" class=\"button dark\" href=\"#\"><i class=\"fa fa-bars fa-2x\"></i></a>\n                <nav id=\"navigation\">\n                    <ul id=\"main-menu\" onclick=\"toggleMenu()\">\n                        <li *ngIf=\"authService.isLoggedIn()\">\n                            <a style=\"cursor:pointer;float:center;color:#fce86c\" routerLink=\"report\" routerLinkActive=\"active\"><i class=\"fa fa-home fa-lg\"></i></a>\n                        </li>\n                        <li class=\"parent\" *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\">\n                            <a routerLink=\"listartist\" routerLinkActive=\"active\">Artist</a>\n                            <ul class=\"sub-menu\">\n                                <li><a routerLink=\"addartist\" routerLinkActive=\"active\"><i class=\"fa fa-plus-square\"></i>  Add Artist</a></li>\n                                <li><a routerLink=\"listartist\" routerLinkActive=\"active\"><i class=\"fa fa-edit\"></i>  Manage Artist</a></li>\n                            </ul>\n                        </li>\n                        <!-- <li><a href=\"http://www.freshdesignweb.com/responsive-drop-down-menu-jquery-css3-using-icon-symbol.html\">Portfolio</a></li> -->\n                        <li class=\"parent\" *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\">\n                            <a routerLink=\"listalbum\" routerLinkActive=\"active\">Album</a>\n                            <ul class=\"sub-menu\">\n                                <li><a routerLink=\"addalbum\" routerLinkActive=\"active\"><i class=\"fa fa-plus-square\"></i>  Add Album</a></li>\n                                <li><a routerLink=\"listalbum\" routerLinkActive=\"active\"><i class=\"fa fa-edit\"></i>  Manage Album</a></li>\n                            </ul>\n                        </li>\n                        <li class=\"parent\" *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\">\n                            <a routerLink=\"listsong\" routerLinkActive=\"active\">Song  <i class=\"fa fa-music\"></i></a>\n                            <ul class=\"sub-menu\">\n                                <li><a routerLink=\"addsong\" routerLinkActive=\"active\"><i class=\"fa fa-plus-square\"></i>  Add Song</a></li>\n                                <li><a routerLink=\"listsong\" routerLinkActive=\"active\"><i class=\"fa fa-edit\"></i>  Manage Song</a></li>\n                            </ul>\n                        </li>\n                        <li *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'ADM'\">\n                            <a routerLink=\"usermanagement\" [queryParams]=\"{status:'STSPEND',veremail:'Y'}\" routerLinkActive=\"active\">Labels</a>\n                        </li>\n                        <li *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'ADM'\">\n                            <a routerLink=\"songmanagement\" [queryParams]=\"{songpublish:'N'}\" routerLinkActive=\"active\"><i class=\"fa fa-music\"></i>  Songs</a>\n                        </li>\n                        <li class=\"parent\" *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'ADM'\">\n                                <a routerLink=\"listconfig\" routerLinkActive=\"active\">Master Config  <i class=\"fa fa-wrench\"></i></a>\n                                <ul class=\"sub-menu\">\n                                    <li><a routerLink=\"addconfig\" routerLinkActive=\"active\">Add Config</a></li>\n                                    <li><a routerLink=\"addgroup\" routerLinkActive=\"active\">Add Group</a></li>\n                                    <li><a routerLink=\"listconfig\" routerLinkActive=\"active\">Manage Config</a></li>\n                                </ul>\n                        </li>\n                        <li class=\"current-menu-item\" *ngIf=\"!authService.isLoggedIn()\"><a routerLink=\"login\" routerLinkActive=\"active\"><i class=\"fa fa-angle-right\"></i><i class=\"fa fa-angle-right\"></i>  Login</a></li>\n                        <li class=\"parent\" *ngIf=\"authService.isLoggedIn()\">\n                                <a routerLink=\"profile\" routerLinkActive=\"active\">Hi, {{ authService.currentUser.name }}  <i class=\"fa fa-user\"></i></a>\n                                <ul class=\"sub-menu\">\n                                    <li><a routerLink=\"profile\" routerLinkActive=\"active\">My Profile</a></li>\n                                    <li><a routerLink=\"updateemail\" routerLinkActive=\"active\">Change Email</a></li>\n                                    <li><a routerLink=\"password\" routerLinkActive=\"active\">Change Password</a></li>\n                                    <li><a routerLink=\"logout\" routerLinkActive=\"active\">Logout</a></li>\n                                </ul>\n                            </li>\n                    </ul>\n                </nav>\n                <div class=\"clear\"></div>\n            </div>\n        </header>\t\n    </div> "

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/song/addsong/addsong.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/song/addsong/addsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Add Song</h3>\n  </div>  \n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <form [formGroup]=\"addSongForm\" (ngSubmit)=\"addSong(addSongForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n    <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">  </label>\n      <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n      <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n   </div>\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('artistid').invalid && addSongForm.get('artistid').dirty}\">\n      <label for=\"artistid\" class=\"col-sm-2 control-label\">Artist<sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n        <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n        <select #inputartist [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"artistid\" (change)=\"artistChangeEvent($event)\">\n            <option ng-selected=\"true\" value=\"\">Select the artist</option>\n            <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n        </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('artistid').dirty && addSongForm.get('artistid').errors\">\n        <span class=\"col-sm-2\"></span>\n        <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('artistid').errors.required\">\n            Please enter the artist\n        </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('albumid').invalid && addSongForm.get('albumid').dirty}\">\n      <label for=\"albumid\" class=\"col-sm-2 control-label\">Album<sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n        <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n        <select #inputalbum [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"albumid\">\n            <option ng-selected=\"true\" value=\"\">Select the album</option>\n            <option *ngFor=\"let album of albumlist\" [ngValue]=\"album._id\">{{album.albumname}}</option>\n        </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('albumid').dirty && addSongForm.get('albumid').errors\">\n        <span class=\"col-sm-2\"></span>\n        <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('albumid').errors.required\">\n            Please enter the album\n        </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songname').invalid && addSongForm.get('songname').dirty}\">\n      <label for=\"songname\" class=\"col-sm-2 control-label\">Song Name <sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n          <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"songname\" id=\"songname\" placeholder=\"Song Name\">\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('songname').dirty && addSongForm.get('songname').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('songname').errors.required\">\n              Please enter the song name\n          </span>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"songlyric\" class=\"col-sm-2 control-label\">Lyric <sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <textarea [disabled]=\"this.loading == true\" class=\"form-control\" id=\"songlyric\" rows=\"10\" [formControl]=\"songlyric\" placeholder=\"Song Lyric\"></textarea>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songgenre').invalid && addSongForm.get('songgenre').dirty}\">\n      <label for=\"songgenre\" class=\"col-sm-2 control-label\">Genre<sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n          <select #inputgenre [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"songgenre\">\n              <option ng-selected=\"true\" value=\"\">Select the genre</option>\n              <option *ngFor=\"let a of genre\" [ngValue]=\"a.code\">{{a.value}}</option>\n          </select>\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('songgenre').dirty && addSongForm.get('songgenre').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('songgenre').errors.required\">\n              Please select song genre\n          </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songprice').invalid && addSongForm.get('songprice').dirty}\">\n      <label for=\"songprice\" class=\"col-sm-2 control-label\">Price<sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\">Rp</div>\n          <input [disabled]=\"this.loading == true\" type=\"number\" class=\"form-control\" id=\"songprice\" [formControl]=\"songprice\" placeholder=\"Song Price\">\n      </div>\n      <div class=\"text-danger\" *ngIf=\"addSongForm.get('songprice').dirty && addSongForm.get('songprice').errors\">\n          <span class=\"col-sm-2\"></span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('songprice').errors.required\">\n              Please enter price\n          </span>\n          <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"addSongForm.get('songprice').errors.pattern\">\n              Please enter a valid amount\n          </span>\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songprvw').invalid && addSongForm.get('songprvw').dirty}\">\n      <label for=\"songprvw\" class=\"col-sm-2 control-label\">Song Preview<sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n          <input [disabled]=\"this.loading == true\" #inputprev type=\"file\" (change)=\"prvwfileChangeEvent($event)\" name=\"songprvw\" id=\"songprvw\" placeholder=\"Song preview\">\n      </div>\n    </div>\n\n    <div class=\"form-group\" [ngClass]=\"{'has-error': addSongForm.get('songfile').invalid && addSongForm.get('songfile').dirty}\">\n      <label for=\"songfile\" class=\"col-sm-2 control-label\">Song File<sup>*</sup></label>\n      <div class=\"input-group col-sm-10\">\n          <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-file\"></i></div>\n          <input [disabled]=\"this.loading == true\" #inputsong type=\"file\" (change)=\"songfileChangeEvent($event)\" name=\"songfile\" id=\"songfile\" placeholder=\"Song file\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">  </label>\n      <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n      <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n   </div>\n    <div class=\"form-group\">\n      <label class=\"col-sm-2 control-label\"></label>\n      <div class=\"col-sm-5\" style=\"padding:0;margin:0;\">\n          <button type=\"submit\" [disabled]=\"addSongForm.invalid || this.loading == true\" class=\"btn btn-primary\">Submit</button>\n          <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\">Reset</button>\n      </div>\n      <div class=\"col-sm-5\" style=\"text-align:right\">\n          <sup>*</sup> required\n      </div>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/song/addsong/addsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AddsongComponent = /** @class */ (function () {
    function AddsongComponent(fb, authService, artistService, albumService, songService, msconfigService, route, router, toastr, datePipe, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.ftService = ftService;
        this.globals = globals;
        this.PrvwfilesToUpload = [];
        this.SongfilesToUpload = [];
        this.loading = false;
        this.progressvalue = 0;
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.songname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.songlyric = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.songgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.songprice = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
    }
    AddsongComponent.prototype.ngOnInit = function () {
        this.progressvalue = 0;
        this.userObj = this.authService.currentUser;
        this.prvwuploadpath = this.globals.prvwuploadpath;
        this.songuploadpath = this.globals.songuploadpath;
        this.getMsconfigGroupList('GENRE');
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
    AddsongComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.genre = data.data;
                }
                else {
                    _this.genre = [{ code: '', value: 'Error ms config list' }];
                }
            }
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
        this.progressvalue = 0;
        var prvwfiles = this.PrvwfilesToUpload;
        var songfiles = this.SongfilesToUpload;
        if (this.addSongForm.dirty && this.addSongForm.valid && prvwfiles[0] && songfiles[0]) {
            this.progressvalue = 10;
            //const prvwfiles: Array<File> = this.PrvwfilesToUpload;
            var theForm_1 = this.addSongForm.value;
            this.progressvalue = 20;
            var lformData = new FormData();
            //console.log('Ini file: '+ prvwfiles[0]['name']);
            lformData.append('fileinputsrc', prvwfiles[0], prvwfiles[0]['name']);
            lformData.append('uploadpath', this.prvwuploadpath);
            this.loading = true;
            this.progressvalue = 30;
            this.ftService.uploadInputFile(lformData)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    _this.progressvalue = 0;
                    _this.toastr.error(data.message);
                }
                else {
                    _this.progressvalue = 40;
                    theForm_1.songprvwpath = data.filedata.filepath;
                    theForm_1.songprvwname = data.filedata.filename;
                    //const songfiles: Array<File> = this.SongfilesToUpload;
                    var lformData1 = new FormData();
                    lformData1.append('fileinputsrc', songfiles[0], songfiles[0]['name']);
                    lformData1.append('uploadpath', _this.songuploadpath);
                    //formdata.set is not supported in Safari and other browsers
                    //lformData.set('fileinputsrc',songfiles[0],songfiles[0]['name']);
                    //lformData.set('uploadpath',this.songuploadpath);
                    _this.progressvalue = 50;
                    _this.ftService.uploadInputFile(lformData1)
                        .subscribe(function (data) {
                        if (data.success === false) {
                            _this.loading = false;
                            _this.progressvalue = 0;
                            _this.toastr.error(data.message);
                        }
                        else {
                            _this.progressvalue = 60;
                            theForm_1.songfilepath = data.filedata.filepath;
                            theForm_1.songfilename = data.filedata.filename;
                            theForm_1.status = 'STSACT';
                            if (_this.songid !== '') {
                                theForm_1.songid = _this.songid;
                            }
                            _this.progressvalue = 80;
                            _this.songService.saveSong(_this.userObj.userid, theForm_1.artistid, theForm_1.albumid, theForm_1)
                                .subscribe(function (data) {
                                if (data.success === false) {
                                    _this.loading = false;
                                    _this.progressvalue = 0;
                                    _this.toastr.error(data.message);
                                }
                                else {
                                    _this.loading = false;
                                    _this.progressvalue = 100;
                                    _this.toastr.success(data.message);
                                    //this.router.navigate(['listsong']);
                                }
                                _this.addSongForm.reset();
                                _this.progressvalue = 0;
                                _this.artistVar.nativeElement.selectedIndex = 0;
                                _this.albumVar.nativeElement.selectedIndex = 0;
                                _this.genreVar.nativeElement.selectedIndex = 0;
                                _this.inputpreVar.nativeElement.value = "";
                                _this.inputsongVar.nativeElement.value = "";
                            });
                        }
                    });
                }
            });
        }
        else {
            this.toastr.error('Please provide BOTH Song Preview and Song File...');
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputprev'),
        __metadata("design:type", Object)
    ], AddsongComponent.prototype, "inputpreVar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputsong'),
        __metadata("design:type", Object)
    ], AddsongComponent.prototype, "inputsongVar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputartist'),
        __metadata("design:type", Object)
    ], AddsongComponent.prototype, "artistVar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputalbum'),
        __metadata("design:type", Object)
    ], AddsongComponent.prototype, "albumVar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputgenre'),
        __metadata("design:type", Object)
    ], AddsongComponent.prototype, "genreVar", void 0);
    AddsongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-addsong',
            template: __webpack_require__("./src/app/components/song/addsong/addsong.component.html"),
            styles: [__webpack_require__("./src/app/components/song/addsong/addsong.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_9__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_10__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_11__app_global__["a" /* Globals */]])
    ], AddsongComponent);
    return AddsongComponent;
}());



/***/ }),

/***/ "./src/app/components/song/editsong/editsong.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/song/editsong/editsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Edit Song</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"songForm\" (ngSubmit)=\"saveSong(songForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('songname').invalid && songForm.get('songname').dirty}\">\n            <label for=\"songname\" class=\"col-sm-2 control-label\">Song Name</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"songname\" [formControl]=\"songname\" placeholder=\"Song Name\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('songname').dirty && songForm.get('songname').invalid\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your {{ userObj.username }} song name</span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('artistid').invalid && songForm.get('artistid').dirty}\">\n            <label for=\"artistid\" class=\"col-sm-2 control-label\">Artist</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"artistid\" (change)=\"artistChangeEvent($event)\">\n                    <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('artistid').dirty && songForm.get('artistid').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('artistid').errors.required\">\n                    Please select artist\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('albumid').invalid && songForm.get('albumid').dirty}\">\n            <label for=\"albumid\" class=\"col-sm-2 control-label\">Album</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"albumid\">\n                    <option *ngFor=\"let album of albumlist\" [ngValue]=\"album._id\">{{album.albumname}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('albumid').dirty && songForm.get('albumid').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('albumid').errors.required\">\n                    Please select album song\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"songlyric\" class=\"col-sm-2 control-label\">Lyric</label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <textarea class=\"form-control\" [disabled]=\"this.loading == true\" id=\"songlyric\" rows=\"10\" [formControl]=\"songlyric\" placeholder=\"Song Lyric\"></textarea>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('songgenre').invalid && songForm.get('songgenre').dirty}\">\n            <label for=\"songgenre\" class=\"col-sm-2 control-label\">Song Genre</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"songgenre\">\n                    <option *ngFor=\"let g of genre\" [ngValue]=\"g.code\">{{g.value}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('songgenre').dirty && songForm.get('songgenre').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('songgenre').errors.required\">\n                    Please select song genre\n                </span>\n            </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('songprice').invalid && songForm.get('songprice').dirty}\">\n            <label for=\"songprice\" class=\"col-sm-2 control-label\">Price</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">Rp</div>\n                <input [disabled]=\"this.loading == true\" type=\"number\" class=\"form-control\" id=\"songprice\" [formControl]=\"songprice\" placeholder=\"Enter price\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('songprice').dirty && songForm.get('songprice').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('songprice').errors.required\">\n                    Please enter price\n                </span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('songprice').errors.pattern\">\n                    Please enter a valid amount\n                </span>\n            </div>\n        </div>\n<!--         <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('songpublish').invalid && songForm.get('songpublish').dirty}\">\n            <label for=\"songpublish\" class=\"col-sm-2 control-label\">Song Published?</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <div class=\"form-ele\">{{ this.songpublish }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songbuy\" class=\"col-sm-2 control-label\">Total Purchased</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-download\"></i></div>\n              <div class=\"form-ele\">{{ this.songbuy }}</div>\n            </div>\n        </div>\n -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error': songForm.get('status').invalid && songForm.get('status').dirty}\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div>\n                <select [disabled]=\"this.loading == true\" class=\"form-control\" [formControl]=\"status\">\n                    <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                </select>\n            </div>\n            <div class=\"text-danger\" *ngIf=\"songForm.get('status').dirty && songForm.get('status').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"songForm.get('status').errors.required\">\n                    Please select song status\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <button type=\"submit\" [disabled]=\"songForm.invalid || this.loading == true\" class=\"btn btn-primary\">{{ btnLbl }}</button>\n                <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\" (click)=\"onBack()\">Back</button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/song/editsong/editsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditsongComponent = /** @class */ (function () {
    function EditsongComponent(fb, authService, artistService, albumService, songService, msconfigService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.loading = false;
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.albumid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.songname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.songlyric = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.songgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.songprice = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('[0-9]+(\.[0-9][0-9]?)?')]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    EditsongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.songid = params['id'];
            _this.btnLbl = "Update";
        });
        this.getSelectedSong(this.songid);
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GENRE');
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
    EditsongComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'GENRE') {
                        _this.genre = data.data;
                    }
                }
                else {
                    _this.genre = [{ code: '', value: 'Error ms config list' }];
                }
            }
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
        this.songpublish = data.songpublish;
        this.songbuy = data.songbuy;
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
            this.loading = true;
            this.songService.saveSong(this.userObj.userid, theForm.artistid, theForm.albumid, theForm)
                .subscribe(function (data) {
                _this.loading = false;
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
    EditsongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editsong',
            template: __webpack_require__("./src/app/components/song/editsong/editsong.component.html"),
            styles: [__webpack_require__("./src/app/components/song/editsong/editsong.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_9__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], EditsongComponent);
    return EditsongComponent;
}());



/***/ }),

/***/ "./src/app/components/song/editsongfiles/editsongfiles.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/song/editsongfiles/editsongfiles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Change Song Files</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"songForm\" (ngSubmit)=\"updateSong(songForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\">\n          <label for=\"songprvw\" class=\"col-sm-2 control-label\">Song Preview</label>\n          <div class=\"input-group col-sm-10\">\n              <label class=\"input-group-btn\">\n                  <span *ngIf=\"this.loading == false\" class=\"btn btn-primary\">\n                      Browse&hellip; <input [disabled]=\"this.loading == true\" type=\"file\" (change)=\"PrvwfileChangeEvent($event)\" name=\"songprvw\" id=\"songprvw\" style=\"display:none\">\n                  </span>\n              </label>\n              <input type=\"text\" class=\"form-control\" value=\"{{ this.newprvwfile }}\">  \n            </div>\n      </div>\n      <br>\n      <div class=\"form-group\">\n          <label for=\"songfile\" class=\"col-sm-2 control-label\">Song File</label>\n          <div class=\"input-group col-sm-10\">\n              <label class=\"input-group-btn\">\n                  <span *ngIf=\"this.loading == false\" class=\"btn btn-primary\">\n                      Browse&hellip; <input [disabled]=\"this.loading == true\" type=\"file\" (change)=\"SongfileChangeEvent($event)\" name=\"songfile\" id=\"songfile\" style=\"display:none\">\n                  </span>\n              </label>\n              <input type=\"text\" class=\"form-control\" value=\"{{ this.newsongfile }}\">  \n            </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">  </label>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">  </label>\n        <mat-progress-bar mode=\"determinate\" value=\"{{this.progressvalue}}\"></mat-progress-bar>\n        <sup *ngIf=\"progressvalue > 0\">{{ this.progressvalue }} %</sup>\n      </div>\n      <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\">     </label>\n          <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n              <br>\n              <button type=\"button\" [disabled]=\"this.loading == true\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n          </div>\n      </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/song/editsongfiles/editsongfiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditsongfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditsongfilesComponent = /** @class */ (function () {
    function EditsongfilesComponent(fb, authService, songService, route, router, toastr, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.songService = songService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.ftService = ftService;
        this.globals = globals;
        this.PrvwfilesToUpload = [];
        this.SongfilesToUpload = [];
        this.loading = false;
        this.progressvalue = 0;
        this.songprvwpath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songprvwname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songfilepath = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songfilename = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    EditsongfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.prvwuploadpath = this.globals.prvwuploadpath;
        this.songuploadpath = this.globals.songuploadpath;
        this.progressvalue = 0;
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
        this.progressvalue = 0;
        this.uploadNewPreview(this.PrvwfilesToUpload);
    };
    EditsongfilesComponent.prototype.SongfileChangeEvent = function (fileInput) {
        this.SongfilesToUpload = fileInput.target.files;
        this.newsongfile = this.SongfilesToUpload[0]['name'];
        this.progressvalue = 0;
        this.uploadNewSong(this.SongfilesToUpload);
    };
    EditsongfilesComponent.prototype.uploadNewPreview = function (newFileData) {
        var _this = this;
        var files = newFileData;
        var lformData = new FormData();
        this.progressvalue = 10;
        //lformData.append('songprvw',files[0],files[0]['name']);
        lformData.append('fileinputsrc', files[0], files[0]['name']);
        lformData.append('uploadpath', this.prvwuploadpath);
        this.loading = true;
        this.progressvalue = 40;
        this.ftService.uploadInputFile(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.progressvalue = 0;
                _this.toastr.error(data.message);
            }
            else {
                //let payloadData: any = this.songForm.value;
                _this.progressvalue = 60;
                var payloadData_1 = {};
                payloadData_1.uploadpath = _this.prvwuploadpath;
                payloadData_1.filename = _this.songForm.value.songprvwname;
                _this.progressvalue = 80;
                _this.ftService.deleteInputFile(payloadData_1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        if (payloadData_1) {
                            console.log('File deleted - ' + payloadData_1.filename);
                        }
                    }
                });
                _this.progressvalue = 90;
                _this.songForm.value.songprvwpath = data.filedata.filepath;
                _this.songForm.value.songprvwname = data.filedata.filename;
                _this.songService.updateSongPreview(_this.songid, _this.songForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        _this.progressvalue = 0;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.progressvalue = 100;
                        _this.loading = false;
                        console.log('Success update song preview.');
                        _this.toastr.success(data.message);
                        _this.progressvalue = 0;
                    }
                });
            }
        });
    };
    EditsongfilesComponent.prototype.uploadNewSong = function (newFileData) {
        var _this = this;
        var files = newFileData;
        var lformData = new FormData();
        this.progressvalue = 10;
        //lformData.append('songfile',files[0],files[0]['name']);
        lformData.append('fileinputsrc', files[0], files[0]['name']);
        lformData.append('uploadpath', this.songuploadpath);
        this.loading = true;
        this.progressvalue = 40;
        this.ftService.uploadInputFile(lformData)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.progressvalue = 0;
                _this.toastr.error(data.message);
            }
            else {
                //let payloadData: any = this.songForm.value;
                _this.progressvalue = 60;
                var payloadData_2 = {};
                payloadData_2.uploadpath = _this.songuploadpath;
                payloadData_2.filename = _this.songForm.value.songfilename;
                _this.progressvalue = 80;
                _this.ftService.deleteInputFile(payloadData_2)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        console.log('Error deleted ' + data.message);
                    }
                    else {
                        console.log('File deleted - ' + payloadData_2.filename);
                    }
                });
                _this.progressvalue = 90;
                _this.songForm.value.songfilepath = data.filedata.filepath;
                _this.songForm.value.songfilename = data.filedata.filename;
                _this.songService.updateSongFile(_this.songid, _this.songForm.value)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        _this.progressvalue = 0;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.progressvalue = 100;
                        _this.loading = false;
                        console.log('Success update song file.');
                        _this.toastr.success(data.message);
                        _this.progressvalue = 0;
                    }
                });
            }
        });
    };
    EditsongfilesComponent.prototype.onBack = function () {
        this.router.navigate(['/listsong'], { preserveQueryParams: true });
    };
    EditsongfilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editsongfiles',
            template: __webpack_require__("./src/app/components/song/editsongfiles/editsongfiles.component.html"),
            styles: [__webpack_require__("./src/app/components/song/editsongfiles/editsongfiles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_7__app_global__["a" /* Globals */]])
    ], EditsongfilesComponent);
    return EditsongfilesComponent;
}());



/***/ }),

/***/ "./src/app/components/song/listsong/listsong.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/song/listsong/listsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>List Song</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <div *ngIf=\"this.loading == false\" class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Search Parameter</h3>\n    </div>\n    <div class=\"panel-body\">\n      <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"row rowmarginsearch\">\n            <div class=\"col-sm-6 col-md-6\">\n                <label for=\"artistid\" class=\"col-sm-2 paddingsearch\">Artist</label>\n                <div class=\"col-sm-10\">\n                <!-- <div class=\"input-group col-sm-10\"> -->\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                    <select class=\"form-control\" [formControl]=\"artistid\" (change)=\"artistChangeEvent($event)\">\n                        <!-- <option ng-selected=\"true\" value=\"\">Select the artist</option> -->\n                        <option value=\"\">Select the artist</option>\n                        <option *ngFor=\"let artist of artistlist\" [ngValue]=\"artist._id\">{{artist.artistname}}</option>\n                    </select>\n                  </div>\n            </div>\n            <div class=\"col-sm-6 col-md-6\">\n                <label for=\"albumid\" class=\"col-sm-2 paddingsearch\">Album</label>\n                <div class=\"col-sm-10\">\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                    <select class=\"form-control\" [formControl]=\"albumid\">\n                        <option value=\"\">Select the album</option>\n                        <option *ngFor=\"let album of albumlist\" [ngValue]=\"album._id\">{{album.albumname}}</option>\n                    </select>\n                  </div>\n            </div>\n\n\n          </div>\n\n          <div class=\"row rowmarginsearch\">\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"songname\" class=\"col-sm-2 paddingsearch\">Title</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                      <input type=\"text\" class=\"form-control\" id=\"songname\" [formControl]=\"songname\" placeholder=\"Song Name\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"albumyear\" class=\"col-sm-2 paddingsearch\">Year</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                      <input type=\"text\" class=\"form-control\" id=\"albumyear\" [formControl]=\"albumyear\" placeholder=\"Album Year\">\n                  </div>\n              </div>\n          </div>\n          <div class=\"row rowmarginsearch\">\n            <div class=\"col-sm-6 col-md-6\">\n                    <label for=\"songgenre\" class=\"col-sm-2 paddingsearch\">Genre</label>\n                    <div class=\"col-sm-10\">\n                        <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                        <select class=\"form-control\" [formControl]=\"songgenre\">\n                            <option ng-selected=\"true\" value=\"\">Select the genre</option>\n                            <option *ngFor=\"let g of genre\" [ngValue]=\"g.code\">{{g.value}}</option>\n                        </select>\n                    </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"songpublish\" class=\"col-sm-2 paddingsearch\">Publish?</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                      <select class=\"form-control\" [formControl]=\"songpublish\">\n                        <option ng-selected=\"true\" value=\"\">Select the option</option>\n                        <option *ngFor=\"let a of ynlist\" [ngValue]=\"a.code\">{{a.value}}</option>\n                      </select>\n                  </div>\n              </div>  \n            </div>\n            <div class=\"row rowmarginsearch\">  \n                <div class=\"col-sm-6 col-md-6\">\n                    <label for=\"status\" class=\"col-sm-2 paddingsearch\">Status</label>\n                    <div class=\"col-sm-10\">\n                        <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                        <select class=\"form-control\" [formControl]=\"status\">\n                            <option ng-selected=\"true\" value=\"\">Select the status</option>\n                            <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"songbuy\" class=\"col-sm-2 paddingsearch\">Buy?</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                      <select class=\"form-control\" [formControl]=\"songbuy\">\n                        <option ng-selected=\"true\" value=\"\">Select the option</option>\n                        <option *ngFor=\"let a of ynlist\" [ngValue]=\"a.code\">{{a.value}}</option>\n                      </select>\n                  </div>\n                </div>  \n              </div>\n            <div class=\"row rowmarginsearch\">  \n                <div class=\"col-sm-6 col-md-6\">\n                  <label class=\"col-sm-2 paddingsearch\"></label>\n                  <div class=\"col-sm-10\">\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                  </div>\n                </div>                  \n          </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"panel panel-danger\" *ngIf=\"songs && totalrows < 1\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">No song found</h3> \n      </div>\n\n      <div class=\"panel-body\">\n          It seems like you havn't entered any songs for the selected criteria. Please add the song <a style=\"cursor:pointer\" (click)=\"toaddSongs()\">here</a>.\n      </div>\n  </div>\n\n  <div class=\"panel panel-default\" *ngIf=\"songs && totalrows > 0 && this.loading == false\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n      </div>\n      <div class=\"panel-body\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-hover\">\n                  <thead>\n                      <tr>\n                          <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songname')\">Song Name</a></th>\n                          <th width=\"20%\">Artist</th>\n                          <th width=\"20%\">Album</th>\n                          <!-- <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortSong('albumyear')\">Year</a></th> -->\n                          <th width=\"9%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songgenre')\">Genre</a></th>\n                          <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songprice')\">Price</a></th>\n                          <!-- <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th> -->\n                          <th width=\"20%\">Action</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor='let song of songs; let songIndex = index'>\n                          <td><a style=\"cursor:pointer\" (click)=\"showSong(song._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ song.songname}}</a></td>\n                          <td>{{ song.artist }}</td>\n                          <td>{{ song.album }}</td>\n                          <!-- <td>{{ song.albumyear}}</td> -->\n                          <td>{{ song.genrevalue}}</td>\n                          <td class=\"text-right\">{{ song.songprice | currency: 'IDR':'symbol-narrow' }}</td>\n                          <!-- <td>{{ albm.status}}</td> -->\n                          <td>\n                              <button type=\"button\" class=\"btn-xs btn-info\" aria-label=\"View\" (click)=\"editSongFiles(song._id, song.songpublish, song.songbuy)\">\n                                  <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Song File\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Edit\" (click)=\"editSong(song._id, song.songpublish, song.songbuy)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change Song Data\">\n                                  <span class=\"glyphicon glyphicon-pencil\" aria-hidden=\"true\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-primary\" aria-label=\"Delete\" (click)=\"confirmDel(songIndex, song._id, song.songpublish, song.songbuy, song.songname, song.songprvwname, song.songfilename)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete Song\">\n                                  <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n                              </button>\n                          </td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div> \n          <div style=\"text-align:center\" *ngIf=\"songs && totalrows > 10\">\n              <nav aria-label=\"Page navigation\">\n                  <ul class=\"pagination\">\n                      <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                          <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                      </li>\n                  </ul>\n              </nav>\n          </div> \n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/song/listsong/listsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_artist_service__ = __webpack_require__("./src/app/services/artist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_album_service__ = __webpack_require__("./src/app/services/album.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_filetransfer_service__ = __webpack_require__("./src/app/services/filetransfer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_global__ = __webpack_require__("./src/app/app.global.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var ListsongComponent = /** @class */ (function () {
    function ListsongComponent(fb, authService, artistService, albumService, songService, msconfigService, route, router, toastr, datePipe, ftService, globals) {
        this.fb = fb;
        this.authService = authService;
        this.artistService = artistService;
        this.albumService = albumService;
        this.songService = songService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.ftService = ftService;
        this.globals = globals;
        this.loading = false;
        this.songname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.artistid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.albumid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songpublish = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songbuy = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    ListsongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.prvwuploadpath = this.globals.prvwuploadpath;
        this.songuploadpath = this.globals.songuploadpath;
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
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GENRE');
        this.getMsconfigGroupList('YRN');
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
    ListsongComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'GENRE') {
                        _this.genre = data.data;
                    }
                    if (groupid == 'YRN') {
                        _this.ynlist = data.data;
                    }
                }
                else {
                    _this.genre = [{ code: '', value: 'Error ms config list' }];
                }
            }
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
            //this.fetchReport(this.userObj.userid, this.reportForm.value);
            this.router.navigate(['listsong'], {
                queryParams: {
                    songname: this.reportForm.value.songname,
                    artistid: this.reportForm.value.artistid,
                    albumid: this.reportForm.value.albumid,
                    albumyear: this.reportForm.value.albumyear,
                    songgenre: this.reportForm.value.songgenre,
                    songpublish: this.reportForm.value.songpublish,
                    songbuy: this.reportForm.value.songbuy,
                    status: this.reportForm.value.status,
                    page: 1,
                    sortby: null
                }
            });
        }
    };
    ListsongComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.loading = true;
        this.songService.getAggSongs(userid, formval)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.loading = false;
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
                if (_this.qartistid) {
                    _this.getAlbumListbyArtist(_this.userObj.userid, _this.qartistid);
                }
                else {
                    _this.getAlbumList(_this.userObj.userid);
                }
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
        if (songpublish == 'Y') {
            this.toastr.warning("This song files has been published. The file can not be edited");
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
            this.toastr.warning("This song has been purchased. Data can not be edited");
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
    ListsongComponent.prototype.confirmDel = function (idx, songid, songpublish, songbuy, songname, songprvwname, songfilename) {
        var _this = this;
        if (songbuy > 0) {
            this.toastr.warning("This song has been purchased. Data can not be deleted");
        }
        else {
            if (confirm('Do you really want to delete this song: ' + songname + ' record?')) {
                this.loading = true;
                var payload = {};
                payload.uploadpath = this.prvwuploadpath;
                payload.filename = songprvwname;
                //payload.songprvwname = songprvwname;
                this.ftService.deleteInputFile(payload)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        console.log('Error delete preview' + data.message);
                    }
                    else {
                        console.log('Success delete preview...');
                    }
                });
                var payloadData = {};
                //payloadData.songfilename = songfilename;
                payloadData.uploadpath = this.songuploadpath;
                payloadData.filename = songfilename;
                this.ftService.deleteInputFile(payloadData)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        console.log('Error delete songfile' + data.message);
                    }
                    else {
                        console.log('Success delete SongFile... ');
                    }
                });
                this.songService.deleteSong(songid)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.loading = false;
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
    ListsongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-listsong',
            template: __webpack_require__("./src/app/components/song/listsong/listsong.component.html"),
            styles: [__webpack_require__("./src/app/components/song/listsong/listsong.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_8__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__services_artist_service__["a" /* ArtistService */],
            __WEBPACK_IMPORTED_MODULE_6__services_album_service__["a" /* AlbumService */],
            __WEBPACK_IMPORTED_MODULE_7__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_9__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_10__services_filetransfer_service__["a" /* FiletransferService */],
            __WEBPACK_IMPORTED_MODULE_11__app_global__["a" /* Globals */]])
    ], ListsongComponent);
    return ListsongComponent;
}());



/***/ }),

/***/ "./src/app/components/song/viewsong/viewsong.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/song/viewsong/viewsong.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Song Details</h3>\n    </div>\n    <form class=\"form-horizontal\">\n        <div class=\"form-group\">\n            <label for=\"songname\" class=\"col-sm-2 control-label\">Title</label>\n            <div class=\"form-ele col-sm-10\"> {{ song?.songname }}\n              <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n              <!-- <div class=\"form-ele\">{{ song?.songname }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"artist\" class=\"col-sm-2 control-label\">Artist</label>\n            <div class=\"form-ele col-sm-10\">{{ song?.artist }}\n              <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.artist }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"album\" class=\"col-sm-2 control-label\">Album</label>\n            <div class=\"form-ele col-sm-10\">{{ song?.album }} \n<!--               <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.album }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songlyric\" class=\"col-sm-2 control-label\">Lyric</label>\n            \n            <div class=\"form-ele col-sm-10\">{{ song?.songlyric }}\n                <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.songlyric }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songgenre\" class=\"col-sm-2 control-label\">Genre</label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n              <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></div> -->\n              <select disabled class=\"form-control selectfontsize\" [formControl]=\"songgenre\">\n                  <option *ngFor=\"let g of genre\" [ngValue]=\"g.code\">{{g.value}}</option>\n              </select>\n              <!-- <div class=\"form-ele\">{{ song?.songgenre }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songprice\" class=\"col-sm-2 control-label\">Price</label>\n            <div class=\"form-ele col-sm-10\">{{ song?.songprice | currency: 'IDR':'symbol-narrow' }}\n                <!-- <div class=\"input-group-addon\">Rp</div> -->\n                <!-- <div class=\"form-ele\">{{ song?.songprice | currency: 'IDR':true }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songprvwpath\" class=\"col-sm-2 control-label\">Preview</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\" style=\"border:1px\"><i class=\"glyphicon glyphicon-music\"></i></div>\n              <a href=\"{{ song.songprvwpath }}\" style=\"cursor:pointer;padding-right:5px;float:center;color:#C92020\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Play Preview\"><i class=\"fa fa-play-circle fa-2x\"></i></a>\n              <!-- <div class=\"form-ele\">{{ song?.songprvwpath }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songfilepath\" class=\"col-sm-2 control-label\">File</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\" style=\"border:1px\"><i class=\"glyphicon glyphicon-music\"></i></div>\n                <a href=\"{{ song.songfilepath }}\" style=\"cursor:pointer;float:center;color:#11DFDF\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Play Song\"><i class=\"fa fa-play-circle fa-2x\"></i></a>\n                <!-- <div class=\"form-ele\">{{ song?.songfilepath }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songpublish\" class=\"col-sm-2 control-label\">Publish?</label>\n            <div class=\"form-ele col-sm-10\">{{ song?.songpublish }}\n              <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ song?.songpublish }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"songbuy\" class=\"col-sm-2 control-label\">Total Purchased</label>\n            <div class=\"form-ele col-sm-10\">{{ song?.songbuy }}\n              <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-download\"></i></div>\n                <div class=\"form-ele\">{{ song?.songbuy }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"status\" class=\"col-sm-2 control-label\">Status</label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n              <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list\"></i></div> -->\n              <select class=\"form-control selectfontsize\" [formControl]=\"status\" disabled>\n                    <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n              </select>\n              <!-- <div class=\"form-ele\">{{ song?.status }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/song/viewsong/viewsong.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewsongComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_song_service__ = __webpack_require__("./src/app/services/song.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewsongComponent = /** @class */ (function () {
    function ViewsongComponent(fb, authService, songService, msconfigService, toastr, route, router) {
        this.fb = fb;
        this.authService = authService;
        this.songService = songService;
        this.msconfigService = msconfigService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.songgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    ViewsongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.sub = this.route.params.subscribe(function (params) {
            var songid = params['id'];
            _this.getMsconfigGroupList('CSTATUS');
            _this.getMsconfigGroupList('GENRE');
            _this.getSong(songid);
        });
        this.songForm = this.fb.group({
            songgenre: this.songgenre,
            status: this.status
        });
    };
    ViewsongComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewsongComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'GENRE') {
                        _this.genre = data.data;
                    }
                }
                else {
                    _this.sts = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
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
                    _this.populateForm(data.data[0]);
                }
                else {
                    _this.toastr.error('Song id is incorrect in the URL');
                }
            }
        });
    };
    ViewsongComponent.prototype.populateForm = function (data) {
        this.songForm.patchValue({
            songgenre: data.songgenre,
            status: data.status
        });
    };
    ViewsongComponent.prototype.onBack = function () {
        if (this.userObj.usertype === 'ADM') {
            this.router.navigate(['/songmanagement'], { preserveQueryParams: true });
        }
        else {
            this.router.navigate(['/listsong'], { preserveQueryParams: true });
        }
    };
    ViewsongComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewsong',
            template: __webpack_require__("./src/app/components/song/viewsong/viewsong.component.html"),
            styles: [__webpack_require__("./src/app/components/song/viewsong/viewsong.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__services_song_service__["a" /* SongService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_5__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ViewsongComponent);
    return ViewsongComponent;
}());



/***/ }),

/***/ "./src/app/components/songmgt/songmgt.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/songmgt/songmgt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>List Song</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <div *ngIf=\"this.loading == false\" class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Search Parameter</h3>\n    </div>\n    <div class=\"panel-body\">\n      <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"row rowmarginsearch\">\n            <div class=\"col-sm-6 col-md-6\">\n                <label for=\"labelid\" class=\"col-sm-2 paddingsearch\">Label</label>\n                <div class=\"col-sm-10\">\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                    <select class=\"form-control\" [formControl]=\"labelid\">\n                        <!-- <option ng-selected=\"true\" value=\"\">Select the artist</option> -->\n                        <option value=\"\">Select the label</option>\n                        <option *ngFor=\"let label of userlist\" [ngValue]=\"label._id\">{{label.name}}</option>\n                    </select>\n                  </div>\n            </div>\n            <div class=\"col-sm-6 col-md-6\">\n              <label for=\"songname\" class=\"col-sm-2 paddingsearch\">Title</label>\n              <div class=\"col-sm-10\">\n                  <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                  <input type=\"text\" class=\"form-control\" id=\"songname\" [formControl]=\"songname\" placeholder=\"Song Name\">\n              </div>\n            </div>            \n        </div>\n          <div class=\"row rowmarginsearch\">\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"artistname\" class=\"col-sm-2 paddingsearch\">Artist</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                      <input type=\"text\" class=\"form-control\" id=\"artistname\" [formControl]=\"artistname\" placeholder=\"Artist Name\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6\">\n                <label for=\"albumname\" class=\"col-sm-2 paddingsearch\">Album</label>\n                <div class=\"col-sm-10\">\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                    <input type=\"text\" class=\"form-control\" id=\"albumname\" [formControl]=\"albumname\" placeholder=\"Album Name\">\n                </div>\n              </div>\n          </div>\n          <div class=\"row rowmarginsearch\">    \n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"albumyear\" class=\"col-sm-2 paddingsearch\">Year</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                      <input type=\"text\" class=\"form-control\" id=\"albumyear\" [formControl]=\"albumyear\" placeholder=\"Year\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"songgenre\" class=\"col-sm-2 paddingsearch\">Genre</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                      <select class=\"form-control\" [formControl]=\"songgenre\">\n                        <option ng-selected=\"true\" value=\"\">Select the genre</option>\n                        <option *ngFor=\"let g of genre\" [ngValue]=\"g.code\">{{g.value}}</option>\n                      </select>\n                  </div>\n              </div>\n           </div>\n          <div class=\"row rowmarginsearch\">        \n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"songpublish\" class=\"col-sm-2 paddingsearch\">Publish?</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                      <select class=\"form-control\" [formControl]=\"songpublish\">\n                        <option ng-selected=\"true\" value=\"\">Select the option</option>\n                        <option *ngFor=\"let a of ynlist\" [ngValue]=\"a.code\">{{a.value}}</option>\n                      </select>\n                  </div>\n              </div>  \n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"songbuy\" class=\"col-sm-2 paddingsearch\">Buy?</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                      <select class=\"form-control\" [formControl]=\"songbuy\">\n                        <option ng-selected=\"true\" value=\"\">Select the option</option>\n                        <option *ngFor=\"let a of ynlist\" [ngValue]=\"a.code\">{{a.value}}</option>\n                      </select>\n                  </div>\n              </div>  \n          </div>\n          <div class=\"row rowmarginsearch\">\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"status\" class=\"col-sm-2 paddingsearch\">Status</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                      <select class=\"form-control\" [formControl]=\"status\">\n                        <option ng-selected=\"true\" value=\"\">Select the status</option>\n                        <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                      </select>\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"submit\" class=\"col-sm-2 paddingsearch\">     </label>\n                  <div class=\"col-sm-5\">\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                  </div>\n              </div>                  \n          </div>\n      </form>\n    </div>\n  </div>\n    <div class=\"panel panel-danger\" *ngIf=\"songs && totalrows < 1\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">No song found</h3> \n        </div>\n  \n        <div class=\"panel-body\">\n            There is NO any songs found for the selected criteria.\n        </div>\n    </div>\n\n  <div class=\"panel panel-default\" *ngIf=\"songs && totalrows > 0 && this.loading == false\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n      </div>\n      <div class=\"panel-body\">\n          <div class=\"table-responsive\">\n              <table class=\"table table-hover\">\n                  <thead>\n                      <tr>\n                          <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songname')\">Song Name</a></th>\n                          <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortSong('label')\">Label</a></th>\n                          <th width=\"10%\">Artist</th>\n                          <th width=\"20%\">Album</th>\n                          <th width=\"5%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songbuy')\">Purchase</a></th>\n                          <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortSong('songprice')\">Publish?</a></th>\n                          <th width=\"5%\">Preview</th>\n                          <th width=\"5%\">Song</th>\n                          <!-- <th width=\"6%\"><a style=\"cursor:pointer\" (click)=\"sortAlbum('status')\">Status</a></th> -->\n                          <th width=\"20%\">Action</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor='let song of songs; let songIndex = index'>\n                          <td><a style=\"font-size:12px;cursor:pointer\" (click)=\"showSong(song._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ song.songname}}</a></td>\n                          <td style=\"font-size:12px\">{{ song.label }}</td>\n                          <td style=\"font-size:12px\">{{ song.artist }}</td>\n                          <td style=\"font-size:12px\">{{ song.album }}</td>\n                          <td class=\"text-right\" style=\"font-size:12px\">{{ song.songbuy}} x {{ song.songprice | currency: 'IDR':'symbol-narrow' }}</td>\n                          <td style=\"font-size:12px\">{{ song.songpublish }}</td>\n                          <td><a href=\"{{ song.songprvwpath }}\" style=\"cursor:pointer;float:center;color:#C92020\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Play Preview\"><i class=\"fa fa-play-circle fa-2x\"></i></a></td>\n                          <td><a href=\"{{ song.songfilepath }}\" style=\"cursor:pointer;float:center;color:#11DFDF\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Play Song\"><i class=\"fa fa-play-circle fa-2x\"></i></a></td>\n                          <!-- <td>{{ albm.status}}</td> -->\n                          <td>\n                               <a alt=\"Publish\" style=\"cursor:pointer;float:center;color:#11DFDF\" (click)=\"publishSong(song._id, song.songname, song.songpublish)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Publish\"><i class=\"fa fa-cloud-upload fa-2x\"></i></a>\n                               <a alt=\"Unpublish\" style=\"cursor:pointer;float:center;color:grey\" (click)=\"unpublishSong(song._id, song.songname, song.songpublish)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Unpublish\"><i class=\"fa fa-cloud-download fa-2x\"></i></a>\n<!--                               <button type=\"button\" class=\"btn-xs btn-success\" aria-label=\"Publish\" (click)=\"publishSong(song._id, song.songname, song.songpublish)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Publish Song\">\n                                  <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\n                              </button>\n                              <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"UnPublish\" (click)=\"unpublishSong(song._id, song.songname, song.songpublish)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Cancel Publish Song\">\n                                  <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                              </button> -->\n                          </td>\n                      </tr>\n                  </tbody>\n              </table>\n          </div> \n          <div style=\"text-align:center\" *ngIf=\"songs && totalrows > 10\">\n              <nav aria-label=\"Page navigation\">\n                  <ul class=\"pagination\">\n                      <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                          <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                      </li>\n                  </ul>\n              </nav>\n          </div> \n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/songmgt/songmgt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongmgtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_usermgt_service__ = __webpack_require__("./src/app/services/admin/usermgt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_admin_songadmin_service__ = __webpack_require__("./src/app/services/admin/songadmin.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SongmgtComponent = /** @class */ (function () {
    function SongmgtComponent(fb, authService, labelmgtService, msconfigService, route, router, toastr, datePipe, songadminService) {
        this.fb = fb;
        this.authService = authService;
        this.labelmgtService = labelmgtService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.songadminService = songadminService;
        this.loading = false;
        this.songname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.labelid = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.artistname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.albumname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.albumyear = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songgenre = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songpublish = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.songbuy = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    SongmgtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.reportForm = this.fb.group({
            labelid: this.labelid,
            songname: this.songname,
            artistname: this.artistname,
            albumname: this.albumname,
            albumyear: this.albumyear,
            songgenre: this.songgenre,
            songpublish: this.songpublish,
            songbuy: this.songbuy,
            status: this.status
        });
        this.getMsconfigGroupList('CSTATUS');
        this.getMsconfigGroupList('GENRE');
        this.getMsconfigGroupList('YRN');
        this.getLabels();
        this.route.queryParams.forEach(function (params) {
            _this.qlabelid = params['labelid'] || '';
            _this.qsongname = params['songname'] || '';
            _this.qartistname = params['artistname'] || '';
            _this.qalbumname = params['albumname'] || '';
            _this.qalbumyear = params['albumyear'] || '';
            _this.qsonggenre = params['songgenre'] || '';
            _this.qsongpublish = params['songpublish'] || '';
            _this.qsongbuy = params['songbuy'] || '';
            _this.qstatus = params['status'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            var payload = {};
            payload.status = _this.qstatus;
            payload.labelid = _this.qlabelid;
            payload.artistname = _this.qartistname;
            payload.albumname = _this.qalbumname;
            payload.songname = _this.qsongname;
            payload.albumyear = _this.qalbumyear;
            payload.songgenre = _this.qsonggenre;
            payload.songpublish = _this.qsongpublish;
            payload.songbuy = _this.qsongbuy;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(payload);
            _this.reportForm.patchValue({
                labelid: _this.qlabelid,
                songname: _this.qsongname,
                artistname: _this.qartistname,
                albumname: _this.qalbumname,
                albumyear: _this.qalbumyear,
                songgenre: _this.qsonggenre,
                songpublish: _this.qsongpublish,
                songbuy: _this.qsongbuy,
                status: _this.qstatus
            });
        });
    };
    SongmgtComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'CSTATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'GENRE') {
                        _this.genre = data.data;
                    }
                    if (groupid == 'YRN') {
                        _this.ynlist = data.data;
                    }
                }
                else {
                    _this.genre = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
    };
    SongmgtComponent.prototype.getLabels = function () {
        var _this = this;
        this.labelmgtService.getLabelList().subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.userlist = data.data;
                    //console.log(this.artistlist);
                }
                else {
                    _this.userlist = [{ _id: '', name: 'Error label list' }];
                }
            }
        });
    };
    SongmgtComponent.prototype.getReport = function (formdata) {
        if (this.reportForm.valid) {
            //this.fetchReport(this.reportForm.value);
            this.router.navigate(['songmanagement'], {
                queryParams: {
                    labelid: this.reportForm.value.labelid,
                    songname: this.reportForm.value.songname,
                    artistname: this.reportForm.value.artistname,
                    albumname: this.reportForm.value.albumname,
                    albumyear: this.reportForm.value.albumyear,
                    songgenre: this.reportForm.value.songgenre,
                    songpublish: this.reportForm.value.songpublish,
                    songbuy: this.reportForm.value.songbuy,
                    status: this.reportForm.value.status,
                    page: 1,
                    sortby: null
                }
            });
        }
    };
    SongmgtComponent.prototype.fetchReport = function (formval) {
        var _this = this;
        this.loading = true;
        this.songadminService.getAggSongs(formval)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.loading = false;
                _this.songs = data.data;
                _this.totalrows = +data.totalcount;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qlabelid = formval.labelid;
                _this.qsongname = formval.songname;
                _this.qartistname = formval.artistname;
                _this.qalbumname = formval.albumname;
                _this.qalbumyear = formval.albumyear;
                _this.qsonggenre = formval.songgenre;
                _this.qsongpublish = formval.songpublish;
                _this.qsongbuy = formval.songbuy;
                _this.qstatus = formval.status;
                _this.reportTitle = 'Songs Result';
                _this.reportForm.patchValue({
                    labelid: _this.qlabelid,
                    songname: _this.qsongname,
                    artistname: _this.qartistname,
                    albumid: _this.qalbumname,
                    albumyear: _this.qalbumyear,
                    songgenre: _this.qsonggenre,
                    songpublish: _this.qsongpublish,
                    songbuy: _this.qsongbuy,
                    status: _this.qstatus
                });
            }
        });
    };
    SongmgtComponent.prototype.setPage = function (page) {
        this.router.navigate(['songmanagement'], {
            queryParams: {
                labelid: this.qlabelid,
                songname: this.qsongname,
                artistname: this.qartistname,
                albumname: this.qalbumname,
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
    SongmgtComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    SongmgtComponent.prototype.sortSong = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(['songmanagement'], {
            queryParams: {
                labelid: this.qlabelid,
                songname: this.qsongname,
                artistname: this.qartistname,
                albumname: this.qalbumname,
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
    SongmgtComponent.prototype.showSong = function (songid) {
        this.router.navigate(["viewsong/" + songid], {
            queryParams: {
                labelid: this.qlabelid,
                songname: this.qsongname,
                artistname: this.qartistname,
                albumname: this.qalbumname,
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
    SongmgtComponent.prototype.publishSong = function (songid, songname, songpublish) {
        var _this = this;
        this.loading = true;
        if (songpublish === 'Y') {
            this.loading = false;
            this.toastr.warning('This song has already been published.');
        }
        else {
            if (confirm('Do you really want to publish this song: ' + songname + ' record?')) {
                var payload = {};
                payload.status = 'STSACT';
                this.songadminService.publishSong(songid, payload)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.loading = false;
                        _this.fetchReport(_this.reportForm.value);
                        _this.toastr.success(data.message);
                    }
                });
            }
            else {
                this.loading = false;
            }
        }
    };
    SongmgtComponent.prototype.unpublishSong = function (songid, songname, songpublish) {
        var _this = this;
        this.loading = true;
        if (songpublish === 'N') {
            this.loading = false;
            this.toastr.warning('This song is already still unpublished.');
        }
        else {
            if (confirm('Do you really want to unpublish this song: ' + songname + ' record?')) {
                var payload = {};
                payload.status = 'STSACT';
                this.songadminService.cancelpublishSong(songid, payload)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.loading = false;
                        _this.fetchReport(_this.reportForm.value);
                        _this.toastr.success(data.message);
                    }
                });
            }
            else {
                this.loading = false;
            }
        }
    };
    SongmgtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-songmgt',
            template: __webpack_require__("./src/app/components/songmgt/songmgt.component.html"),
            styles: [__webpack_require__("./src/app/components/songmgt/songmgt.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_usermgt_service__["a" /* UsermgtService */],
            __WEBPACK_IMPORTED_MODULE_8__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_7__services_admin_songadmin_service__["a" /* SongadminService */]])
    ], SongmgtComponent);
    return SongmgtComponent;
}());



/***/ }),

/***/ "./src/app/components/user/emailverification/emailverification.component.css":
/***/ (function(module, exports) {

module.exports = "\n/* Base ------------------------------ */\n\n*:not(br):not(tr):not(html) {\n  font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  width: 100% !important;\n  height: 100%;\n  margin: 0;\n  line-height: 1.4;\n  background-color: #F2F4F6;\n  color: #74787E;\n  -webkit-text-size-adjust: none;\n}\n\np,\nul,\nol,\nblockquote {\n  line-height: 1.4;\n  text-align: left;\n}\n\na {\n  color: #3869D4;\n}\n\na img {\n  border: none;\n}\n\ntd {\n  word-break: break-word;\n}\n\n/* Layout ------------------------------ */\n\n.email-wrapper {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  -premailer-width: 100%;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n  background-color: #F2F4F6;\n}\n\n.email-content {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  -premailer-width: 100%;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n}\n\n/* Masthead ----------------------- */\n\n.email-masthead {\n  padding: 25px 0;\n  text-align: center;\n}\n\n.email-masthead_logo {\n  width: 94px;\n}\n\n.email-masthead_name {\n  font-size: 16px;\n  font-weight: bold;\n  color: #bbbfc3;\n  text-decoration: none;\n  text-shadow: 0 1px 0 white;\n}\n\n/* Body ------------------------------ */\n\n.email-body {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  -premailer-width: 100%;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n  border-top: 1px solid #EDEFF2;\n  border-bottom: 1px solid #EDEFF2;\n  background-color: #FFFFFF;\n}\n\n.email-body_inner {\n  width: 570px;\n  margin: 0 auto;\n  padding: 0;\n  -premailer-width: 570px;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n  background-color: #FFFFFF;\n}\n\n.email-footer {\n  width: 570px;\n  margin: 0 auto;\n  padding: 0;\n  -premailer-width: 570px;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n  text-align: center;\n}\n\n.email-footer p {\n  color: #AEAEAE;\n}\n\n.body-action {\n  width: 100%;\n  margin: 30px auto;\n  padding: 0;\n  -premailer-width: 100%;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n  text-align: center;\n}\n\n.body-sub {\n  margin-top: 25px;\n  padding-top: 25px;\n  border-top: 1px solid #EDEFF2;\n}\n\n.content-cell {\n  padding: 35px;\n}\n\n.preheader {\n  display: none !important;\n  visibility: hidden;\n  mso-hide: all;\n  font-size: 1px;\n  line-height: 1px;\n  max-height: 0;\n  max-width: 0;\n  opacity: 0;\n  overflow: hidden;\n}\n\n/* Attribute list ------------------------------ */\n\n.attributes {\n  margin: 0 0 21px;\n}\n\n.attributes_content {\n  background-color: #EDEFF2;\n  padding: 16px;\n}\n\n.attributes_item {\n  padding: 0;\n}\n\n/* Related Items ------------------------------ */\n\n.related {\n  width: 100%;\n  margin: 0;\n  padding: 25px 0 0 0;\n  -premailer-width: 100%;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n}\n\n.related_item {\n  padding: 10px 0;\n  color: #74787E;\n  font-size: 15px;\n  line-height: 18px;\n}\n\n.related_item-title {\n  display: block;\n  margin: .5em 0 0;\n}\n\n.related_item-thumb {\n  display: block;\n  padding-bottom: 10px;\n}\n\n.related_heading {\n  border-top: 1px solid #EDEFF2;\n  text-align: center;\n  padding: 25px 0 10px;\n}\n\n/* Discount Code ------------------------------ */\n\n.discount {\n  width: 100%;\n  margin: 0;\n  padding: 24px;\n  -premailer-width: 100%;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n  background-color: #EDEFF2;\n  border: 2px dashed #9BA2AB;\n}\n\n.discount_heading {\n  text-align: center;\n}\n\n.discount_body {\n  text-align: center;\n  font-size: 15px;\n}\n\n/* Social Icons ------------------------------ */\n\n.social {\n  width: auto;\n}\n\n.social td {\n  padding: 0;\n  width: auto;\n}\n\n.social_icon {\n  height: 20px;\n  margin: 0 8px 10px 8px;\n  padding: 0;\n}\n\n/* Data table ------------------------------ */\n\n.purchase {\n  width: 100%;\n  margin: 0;\n  padding: 35px 0;\n  -premailer-width: 100%;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n}\n\n.purchase_content {\n  width: 100%;\n  margin: 0;\n  padding: 25px 0 0 0;\n  -premailer-width: 100%;\n  -premailer-cellpadding: 0;\n  -premailer-cellspacing: 0;\n}\n\n.purchase_item {\n  padding: 10px 0;\n  color: #74787E;\n  font-size: 15px;\n  line-height: 18px;\n}\n\n.purchase_heading {\n  padding-bottom: 8px;\n  border-bottom: 1px solid #EDEFF2;\n}\n\n.purchase_heading p {\n  margin: 0;\n  color: #9BA2AB;\n  font-size: 12px;\n}\n\n.purchase_footer {\n  padding-top: 15px;\n  border-top: 1px solid #EDEFF2;\n}\n\n.purchase_total {\n  margin: 0;\n  text-align: right;\n  font-weight: bold;\n  color: #2F3133;\n}\n\n.purchase_total--label {\n  padding: 0 15px 0 0;\n}\n\n/* Utilities ------------------------------ */\n\n.align-right {\n  text-align: right;\n}\n\n.align-left {\n  text-align: left;\n}\n\n.align-center {\n  text-align: center;\n}\n\n/*Media Queries ------------------------------ */\n\n@media only screen and (max-width: 600px) {\n  .email-body_inner,\n  .email-footer {\n    width: 100% !important;\n  }\n}\n\n@media only screen and (max-width: 500px) {\n  .button {\n    width: 100% !important;\n  }\n}\n\n/* Buttons ------------------------------ */\n\n.button {\n  background-color: #3869D4;\n  border-top: 10px solid #3869D4;\n  border-right: 18px solid #3869D4;\n  border-bottom: 10px solid #3869D4;\n  border-left: 18px solid #3869D4;\n  display: inline-block;\n  color: #FFF;\n  text-decoration: none;\n  border-radius: 3px;\n  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);\n          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);\n  -webkit-text-size-adjust: none;\n}\n\n.button--green {\n  background-color: #22BC66;\n  border-top: 10px solid #22BC66;\n  border-right: 18px solid #22BC66;\n  border-bottom: 10px solid #22BC66;\n  border-left: 18px solid #22BC66;\n}\n\n.button--red {\n  background-color: #FF6136;\n  border-top: 10px solid #FF6136;\n  border-right: 18px solid #FF6136;\n  border-bottom: 10px solid #FF6136;\n  border-left: 18px solid #FF6136;\n}\n\n/* Type ------------------------------ */\n\nh1 {\n  margin-top: 0;\n  color: #2F3133;\n  font-size: 19px;\n  font-weight: bold;\n  text-align: left;\n}\n\nh2 {\n  margin-top: 0;\n  color: #2F3133;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: left;\n}\n\nh3 {\n  margin-top: 0;\n  color: #2F3133;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: left;\n}\n\np {\n  margin-top: 0;\n  color: #74787E;\n  font-size: 16px;\n  line-height: 1.5em;\n  text-align: left;\n}\n\np.sub {\n  font-size: 12px;\n}\n\np.center {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/user/emailverification/emailverification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <table class=\"email-wrapper\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n    <tr>\n      <td align=\"center\">\n        <table class=\"email-content\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n          <!-- Email Body -->\n          <tr>\n            <td class=\"email-body\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n              <table class=\"email-body_inner\" align=\"center\" width=\"570\" cellpadding=\"0\" cellspacing=\"0\">\n                <!-- Body content -->\n                <tr>\n                  <td class=\"content-cell\">\n                    <h1>Hi, {{name}}!</h1>\n                    <p><strong>Thanks for the email confirmation !</strong></p>\n                    <p>{{ this.remarks1 }}</p>\n                    <p>{{ this.remarks2 }} <a href=\"mailto:{{ this.csemail.value }}\">{{ this.csemail.value }}</a></p>\n                    <p>For reference, here's your account information:</p>\n                    <table class=\"attributes\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n                      <tr>\n                        <td class=\"attributes_content\">\n                          <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\n                            <tr>\n                              <td class=\"attributes_item\"><strong>Username:</strong> {{this.username}}</td>\n                            </tr>\n                                                          <tr>\n                              <td class=\"attributes_item\"><strong>Name:</strong> {{this.name}}</td>\n                            </tr>\n                                                          <tr>\n                              <td class=\"attributes_item\"><strong>Email:</strong> {{ this.email }}</td>\n                            </tr>\n                              <tr>\n                              <td class=\"attributes_item\"><strong>Usertype:</strong> {{ this.utype }}</td>\n                            </tr>\n                          </table>\n                        </td>\n                      </tr>\n                    </table>\n                    <!-- Sub copy -->\n                  </td>\n                </tr>\n              </table>\n            </td>\n          </tr>\n        </table>\n      </td>\n    </tr>\n  </table>\n </div> "

/***/ }),

/***/ "./src/app/components/user/emailverification/emailverification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailverificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_notif_service__ = __webpack_require__("./src/app/services/notif.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmailverificationComponent = /** @class */ (function () {
    function EmailverificationComponent(route, router, notifService, msconfigService, toastr) {
        this.route = route;
        this.router = router;
        this.notifService = notifService;
        this.msconfigService = msconfigService;
        this.toastr = toastr;
        this.loading = false;
    }
    EmailverificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.sub = this.route.queryParams.subscribe(function (params) {
            var hash = params['id'];
            var postind = params['post'];
            _this.getMsconfigGroupList('REMARKS');
            _this.notifService.recvemailverification(hash)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    _this.router.navigate(['login']);
                    _this.toastr.error(data.message);
                }
                else {
                    _this.loading = false;
                    _this.username = data.message.username;
                    _this.name = data.message.name;
                    _this.email = data.message.email;
                    _this.utype = data.message.usertype;
                    if (postind === 'Y') {
                        _this.remarks1 = "Your email has been verified.";
                        _this.remarks2 = "If you have any queries, please send email to ";
                    }
                    else {
                        _this.remarks1 = _this.getremarksvalue('REMARKS1');
                        _this.remarks2 = _this.getremarksvalue('REMARKS2');
                    }
                }
            });
        });
        this.getMsconfigVal('CSEML', 'EMAIL');
    };
    EmailverificationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EmailverificationComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.remarks = data.data;
                }
                else {
                    _this.remarks = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
    };
    EmailverificationComponent.prototype.getMsconfigVal = function (code, groupid) {
        var _this = this;
        this.msconfigService.getMsconfigvalue(code, groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.csemail = data.data[0];
                }
                else {
                    _this.csemail = { code: '', value: 'Error ms config list' };
                }
            }
        });
    };
    EmailverificationComponent.prototype.getremarksvalue = function (premarks) {
        var result = '';
        for (var _i = 0, _a = this.remarks; _i < _a.length; _i++) {
            var oremark = _a[_i];
            if (premarks === oremark.code) {
                result = oremark.value;
            }
        }
        return result;
    };
    EmailverificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-emailverification',
            template: __webpack_require__("./src/app/components/user/emailverification/emailverification.component.html"),
            styles: [__webpack_require__("./src/app/components/user/emailverification/emailverification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_notif_service__["a" /* NotifService */],
            __WEBPACK_IMPORTED_MODULE_3__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */]])
    ], EmailverificationComponent);
    return EmailverificationComponent;
}());



/***/ }),

/***/ "./src/app/components/user/forgotpassword/forgotpassword.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/forgotpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Reset Password</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  \n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"sendEmail(profileForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\">\n            <p style=\"margin:0;padding-right:20px;\" class=\"col-sm-12\">\n                If you forgot your password, we can help you reset your password using your email address link to your account.\n            </p>\n        </div>        \n        <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('email').invalid && profileForm.get('email').dirty}\">\n            <label for=\"email\" class=\"col-sm-2 control-label\">Email <sup>*</sup></label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">@</div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"email\" id=\"email\" placeholder=\"Email\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"profileForm.get('email').dirty && profileForm.get('email').errors\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"profileForm.get('email').invalid\">\n                    Please enter a valid email\n                </span>\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\" class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-5\" style=\"margin:0;padding:0;\">\n                <button type=\"submit\" [disabled]=\"profileForm.invalid || this.loading == true\" class=\"btn btn-primary\">Submit</button>\n                <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\">Reset</button>\n            </div>\n            <div class=\"col-sm-5\" style=\"text-align:right\">\n                <sup>*</sup> required\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/user/forgotpassword/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__kx_info_dialog_kx_info_dialog_component__ = __webpack_require__("./src/app/components/kx-info-dialog/kx-info-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_notif_service__ = __webpack_require__("./src/app/services/notif.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent(fb, userService, notifService, router, toastr, dialog) {
        this.fb = fb;
        this.userService = userService;
        this.notifService = notifService;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.loading = false;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
        this.profileForm = this.fb.group({
            email: this.email,
        });
    };
    ForgotpasswordComponent.prototype.sendEmail = function (formdata) {
        var _this = this;
        var payload = {};
        payload.email = this.profileForm.value.email;
        this.loading = true;
        this.userService.resetPasswd(payload)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.toastr.error(data.message);
            }
            else {
                var payload1 = {};
                payload1.emailto = _this.profileForm.value.email;
                payload1.vlink = data.vlink;
                _this.notifService.sendresetpasswd(payload1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__kx_info_dialog_kx_info_dialog_component__["a" /* KxInfoDialogComponent */], {
                            disableClose: true,
                            width: '400px',
                            data: 'Hi, We are sorry to inform that the email to reset password failed to be sent to ' + _this.profileForm.value.email + '. Please try again in few minutes.'
                        });
                        //below code is to get result from modal dialog
                        /*       dialogRef.afterClosed().subscribe(result => {
                                console.log(`Dialog closed: ${result}`);
                                this.dialogResult = result;
                              }); */
                    }
                    else {
                        _this.loading = false;
                        var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__kx_info_dialog_kx_info_dialog_component__["a" /* KxInfoDialogComponent */], {
                            disableClose: true,
                            width: '400px',
                            data: 'Email to reset password has been sent to ' + _this.profileForm.value.email + '. Please follow the instruction in the email.'
                        });
                    }
                });
            }
        });
    };
    ForgotpasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__("./src/app/components/user/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__("./src/app/components/user/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_notif_service__["a" /* NotifService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatDialog */]])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"loginUser(loginForm.value)\" class=\"form-signin\" novalidate autocomplete=\"off\">\n      <h3>Please sign in</h3>\n      <label for=\"inputUser\" class=\"sr-only\">Username</label>\n      <input type=\"text\" id=\"inputUser\" class=\"form-control\" [formControl]=\"username\" placeholder=\"Username\" autofocus>\n      <div class=\"text-danger\" *ngIf=\"loginForm.get('username').dirty && loginForm.get('username').invalid\">\n          Please enter username\n      </div>\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n      <input type=\"password\" id=\"inputPassword\" class=\"form-control\" [formControl]=\"password\" placeholder=\"Password\">\n      <div class=\"text-danger\" *ngIf=\"loginForm.get('password').dirty && loginForm.get('password').invalid\">\n          Please enter password\n      </div>\n      <br><br>\n      <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"loginForm.invalid\" >Sign In</button>\n      <br>\n      <div class=\"row\">\n          <div class=\"col-md-6 col-sm-6 col-xs-6\"><a [routerLink]=\"['/forgotpassword']\">Forgot Password  <i class=\"fa fa-question fa-lg\"></i></a></div>\n          <div class=\"col-md-6 col-sm-6 col-xs-6\" style=\"text-align: right\"><a [routerLink]=\"['/register']\"><i class=\"fa fa-child fa-lg\"></i>  Register</a></div>\n      </div>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.loginForm = this.fb.group({
            username: this.username,
            password: this.password,
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authService.logout();
    };
    LoginComponent.prototype.loginUser = function (formdata) {
        var _this = this;
        this.authService.logout();
        if (this.loginForm.dirty && this.loginForm.valid) {
            this.loading = true;
            this.authService.login(this.loginForm.value)
                .subscribe(function (data) {
                if (data.json().success === false) {
                    _this.loading = false;
                    _this.toastr.error(data.json().message);
                }
                else {
                    _this.loading = false;
                    _this.toastr.success('Login successful.');
                    _this.router.navigate(['report']);
                }
                _this.loginForm.reset();
            });
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
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
    LogoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: ''
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__common_toastr_service__["a" /* ToastrService */]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/user/password/password.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/password/password.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Change Password</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"updatePassword(passwordForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('oldpassword').invalid && passwordForm.get('oldpassword').dirty}\">\n            <label for=\"oldpassword\" class=\"col-sm-3 control-label\">Existing Password</label>\n            <div class=\"input-group col-sm-9\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-lock\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"password\" class=\"form-control\" id=\"oldpassword\" [formControl]=\"oldpassword\" placeholder=\"Existing Password\">\n            </div>\n            <div class=\"text-danger\" *ngIf=\"passwordForm.get('oldpassword').dirty && passwordForm.get('oldpassword').errors\">\n                <span class=\"col-sm-3\"></span>\n                <span class=\"col-sm-9\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('oldpassword').errors.required\">\n                    Please enter existing password\n                </span>\n            </div>\n        </div>\n  \n        <div formGroupName=\"passwordGroup\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup').errors }\">\n  \n            <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup.password').invalid && passwordForm.get('passwordGroup.password').dirty}\">\n                <label for=\"password\" class=\"col-sm-3 control-label\">New Password</label>\n                <div class=\"input-group col-sm-9\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input [disabled]=\"this.loading == true\" type=\"password\" class=\"form-control\" id=\"password\" [formControl]=\"password\" placeholder=\"New Pasword\">\n                </div>\n                <div class=\"text-danger\"  *ngIf=\"passwordForm.get('passwordGroup.password').dirty && passwordForm.get('passwordGroup.password').errors\">\n                    <span class=\"col-sm-3\"></span>\n                    <span class=\"col-sm-9\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.password').errors.required\">\n                        Please enter password\n                    </span>\n                    <span class=\"col-sm-9\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.password').errors.pattern\">\n                        Password must be minimum 6 and maximum 12 characters AND contain one letter, number & special characters\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup.retypepass').invalid && passwordForm.get('passwordGroup.retypepass').dirty}\">\n                <label for=\"retypepass\" class=\"col-sm-3 control-label\">Retype Password <sup>*</sup></label>\n                <div class=\"input-group col-sm-9\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input [disabled]=\"this.loading == true\" type=\"password\" class=\"form-control\" [formControl]=\"retypepass\" id=\"retypepass\" placeholder=\"Retype Password\">\n                </div>\n                <div class=\"text-danger\" *ngIf=\"(passwordForm.get('passwordGroup.retypepass').touched || passwordForm.get('passwordGroup.retypepass').dirty) && (passwordForm.get('passwordGroup.retypepass').errors || passwordForm.get('passwordGroup').errors)\">\n                    <span class=\"col-sm-3\"></span>\n                    <span class=\"col-sm-9\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.retypepass').errors?.required\">\n                        Please confirm your password\n                    </span>\n                    <span class=\"col-sm-9\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup').errors?.mismatchedPassword\">\n                        Password do not match\n                    </span>\n                </div>\n            </div>\n  \n        </div>\n    \n        <div class=\"form-group\">\n            <label class=\"col-sm-3 control-label\"></label>\n            <div class=\"col-sm-9\" style=\"padding:0;margin:0;\">\n                <button type=\"submit\" [disabled]=\"passwordForm.invalid || this.loading == true\" class=\"btn btn-primary\">Update</button>\n                <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\" (click)=\"onBack()\">Cancel</button>\n            </div>\n        </div>\n    </form>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/components/user/password/password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PasswordComponent = /** @class */ (function () {
    function PasswordComponent(fb, authService, userService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.oldpassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
        this.retypepass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
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
            this.loading = true;
            this.userService.updatePassword(this.userObj.userid, theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.loading = false;
                    _this.toastr.success(data.message);
                }
                _this.passwordForm.reset();
            });
        }
    };
    PasswordComponent.prototype.onBack = function () {
        this.router.navigate(['/report']);
    };
    PasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-password',
            template: __webpack_require__("./src/app/components/user/password/password.component.html"),
            styles: [__webpack_require__("./src/app/components/user/password/password.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]])
    ], PasswordComponent);
    return PasswordComponent;
}());

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


/***/ }),

/***/ "./src/app/components/user/postregistered/postregistered.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/postregistered/postregistered.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Confirmation</h3>\n  </div>\n  <div *ngIf=\"this.uname != 'err'\" class=\"panel panel-success\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Success</h3>\n      </div>\n      <div class=\"panel-body\">\n          <h4>Thank You !</h4>\n          <p>{{ this.getremarksvalue('REMARKS3') }}</p>\n          <p>Below is the account information for your reference,</p>\n          <div class=\"row rowmarginsearch\">\n              <div class=\"col-xs-3 col-sm-2\" style=\"text-align:right;\">Label:</div>\n              <div class=\"col-xs-9 col-sm-10\" style=\"padding:0;\">{{ this.uname }}</div>\n            </div>\n            <div class=\"row rowmarginsearch\">\n              <div class=\"col-xs-3 col-sm-2\" style=\"text-align:right;\">Email:</div>\n              <div class=\"col-xs-9 col-sm-10\" style=\"padding:0;\">{{ this.qemailto }}</div>\n            </div>\n          <br>\n          <div class=\"col-sm-12\" style=\"margin:0;padding:0;\">\n              <button type=\"button\" (click)=\"onLogin()\" class=\"btn btn-info\">Back to Login</button>\n          </div>  \n      </div>\n  </div>\n  <div *ngIf=\"this.uname == 'err'\" class=\"panel panel-danger\">\n      <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">Error</h3>\n      </div>\n      <div class=\"panel-body\">\n          <p>Oops, Sorry.. {{ this.getremarksvalue('REMARKS4') }}</p>\n          <br>\n          <div class=\"col-sm-12\" style=\"margin:0;padding:0;\">\n              <button type=\"button\" (click)=\"onLogin()\" class=\"btn btn-info\">Back to Login</button>\n          </div>  \n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/user/postregistered/postregistered.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostregisteredComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostregisteredComponent = /** @class */ (function () {
    function PostregisteredComponent(route, router, msconfigService) {
        this.route = route;
        this.router = router;
        this.msconfigService = msconfigService;
    }
    PostregisteredComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var param = params['nm'];
            var strlist = param.split("?");
            _this.uname = strlist[0];
            _this.qemailto = strlist[1];
        });
        this.getMsconfigGroupList('REMARKS');
        this.getMsconfigVal('CSEML', 'EMAIL');
    };
    PostregisteredComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PostregisteredComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.remarks = data.data;
                }
                else {
                    _this.remarks = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
    };
    PostregisteredComponent.prototype.getMsconfigVal = function (code, groupid) {
        var _this = this;
        this.msconfigService.getMsconfigvalue(code, groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    _this.csemail = data.data[0];
                }
                else {
                    _this.csemail = { code: '', value: 'Error ms config list' };
                }
            }
        });
    };
    PostregisteredComponent.prototype.getremarksvalue = function (premarks) {
        var result = '';
        for (var _i = 0, _a = this.remarks; _i < _a.length; _i++) {
            var oremark = _a[_i];
            if (premarks === oremark.code) {
                result = oremark.value;
            }
        }
        return result;
    };
    PostregisteredComponent.prototype.onLogin = function () {
        this.router.navigate(['/login']);
    };
    PostregisteredComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-postregistered',
            template: __webpack_require__("./src/app/components/user/postregistered/postregistered.component.html"),
            styles: [__webpack_require__("./src/app/components/user/postregistered/postregistered.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_admin_msconfig_service__["a" /* MsconfigService */]])
    ], PostregisteredComponent);
    return PostregisteredComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>My Profile</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <div class=\"clearfix\">\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateUser(profileForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n          <div class=\"form-group\">\n              <label for=\"username\" class=\"col-sm-2 control-label\">Username</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n                  <div class=\"form-ele\">{{ userObj.username }}</div>\n              </div>\n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('name').invalid && profileForm.get('name').dirty}\">\n              <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                  <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"name\" [formControl]=\"name\" placeholder=\"Name\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('name').dirty && profileForm.get('name').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your {{ userObj.username }} name</span>\n              </div>\n          </div>\n<!--           <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('email').invalid && profileForm.get('email').dirty}\">\n              <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\">@</div>\n                  <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"email\" [formControl]=\"email\" placeholder=\"Email\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('email').dirty && profileForm.get('email').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter a valid email</span>\n              </div>\n          </div> -->\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\">@</div>\n                <div class=\"form-ele\">{{ userObj.email }}</div>\n            </div>\n            <div class=\"text-warning\" *ngIf=\"authService.currentUser.verified_email == 'N'\">\n                <span class=\"col-sm-2\"></span>\n                <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Email is not verified yet. Please verify by clicking <a style=\"cursor:pointer\" (click)=\"verifyEmail(userObj.username, userObj.name, userObj.email)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Verify\">HERE</a> !</span>\n            </div>\n          </div>\n          <div *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\" class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('contactno').invalid && profileForm.get('contactno').dirty}\">\n              <label for=\"contactno\" class=\"col-sm-2 control-label\">Contact No</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-pencil\"></i></div>\n                  <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"contactno\" [formControl]=\"contactno\" placeholder=\"Contact No\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('contactno').dirty && profileForm.get('contactno').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your Contact Number</span>\n              </div>\n          </div>\n          <div *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\" class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('bankaccno').invalid && profileForm.get('bankaccno').dirty}\">\n              <label for=\"bankaccno\" class=\"col-sm-2 control-label\">Bank Account No</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-pencil\"></i></div>\n                  <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"bankaccno\" [formControl]=\"bankaccno\" placeholder=\"Bank Account No\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('bankaccno').dirty && profileForm.get('bankaccno').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your Bank Account Number</span>\n              </div>\n          </div>\n          <div *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\" class=\"form-group\">\n            <label for=\"bankcode\" class=\"col-sm-2 control-label\">Bank Code</label>\n            <div class=\"input-group col-sm-10\">\n                <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n                <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"bankcode\" id=\"bankcode\" placeholder=\"Bank Code\">\n            </div>\n          </div>\n          <div *ngIf=\"authService.isLoggedIn() && authService.currentUser.usertype == 'LBL'\" class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('bankname').invalid && profileForm.get('bankname').dirty}\">\n              <label for=\"bankname\" class=\"col-sm-2 control-label\">Bank Name</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-pencil\"></i></div>\n                  <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"bankname\" [formControl]=\"bankname\" placeholder=\"Bank Name\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"profileForm.get('bankname').dirty && profileForm.get('bankname').invalid\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\">Please enter your Bank Name</span>\n              </div>\n          </div>\n<!--           <div class=\"form-group\">\n              <label for=\"usertype\" class=\"col-sm-2 control-label\">User Type</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n                  <div class=\"form-ele\">{{ userObj.usertype }}</div>\n              </div>\n          </div> -->\n          <div class=\"form-group\">\n              <label for=\"lastlogin\" class=\"col-sm-2 control-label\">Last Login</label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-calendar\"></i></div>\n                  <div class=\"form-ele\">{{ userObj.lastlogin | date:'medium' }}</div>\n              </div>\n          </div>\n          <div class=\"form-group\">\n              <label class=\"col-sm-2 control-label\"></label>\n              <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                  <button type=\"submit\" [disabled]=\"profileForm.invalid || this.loading == true\" class=\"btn btn-primary\">Update</button>\n                  <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\" (click)=\"onBack()\">Cancel</button>\n              </div>\n          </div>\n      </form>                \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__kx_info_dialog_kx_info_dialog_component__ = __webpack_require__("./src/app/components/kx-info-dialog/kx-info-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_notif_service__ = __webpack_require__("./src/app/services/notif.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileComponent = /** @class */ (function () {
    //  dialogResult = "";
    function ProfileComponent(fb, authService, userService, notifService, router, toastr, dialog) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.notifService = notifService;
        this.router = router;
        this.toastr = toastr;
        this.dialog = dialog;
        this.loading = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        //email = new FormControl('', [Validators.email]);
        this.contactno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.bankaccno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.bankcode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.bankname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.profileForm = this.fb.group({
            name: this.name,
            contactno: this.contactno,
            bankaccno: this.bankaccno,
            bankcode: this.bankcode,
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
            //email: data.email,
            contactno: data.contactno,
            bankaccno: data.bankaccno,
            bankcode: data.bankcode,
            bankname: data.bankname
        });
    };
    ProfileComponent.prototype.updateUser = function (formdata) {
        var _this = this;
        if (this.profileForm.dirty && this.profileForm.valid) {
            this.loading = true;
            this.userService.updateUser(this.userObj.userid, this.profileForm.value)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.loading = false;
                    _this.toastr.success(data.message);
                    var theUser = JSON.parse(localStorage.getItem('currentUser'));
                    theUser.user.name = _this.profileForm.value.name;
                    localStorage.setItem('currentUser', JSON.stringify(theUser));
                }
            });
        }
    };
    ProfileComponent.prototype.verifyEmail = function (username, name, email) {
        var _this = this;
        var payload = {};
        payload.email = email;
        payload.name = name;
        payload.username = username;
        this.loading = true;
        this.userService.emailVerify(payload)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                _this.toastr.error(data.message);
            }
            else {
                var nm = data.name;
                var payload1 = {};
                payload1.emailto = email;
                payload1.vlink = data.vlink;
                _this.notifService.sendemailverification(payload1)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__kx_info_dialog_kx_info_dialog_component__["a" /* KxInfoDialogComponent */], {
                            disableClose: true,
                            width: '400px',
                            data: 'Hi ' + name + ', We are sorry to inform that the email verification failed to be sent to ' + email + '. Please try again in few minutes.'
                        });
                        //below code is to get result from modal dialog
                        /*       dialogRef.afterClosed().subscribe(result => {
                                console.log(`Dialog closed: ${result}`);
                                this.dialogResult = result;
                              }); */
                    }
                    else {
                        _this.loading = false;
                        var dialogRef = _this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__kx_info_dialog_kx_info_dialog_component__["a" /* KxInfoDialogComponent */], {
                            disableClose: true,
                            width: '400px',
                            data: 'Hi ' + name + ', email verification has been sent to ' + email + '. Please follow the instruction in the email.'
                        });
                    }
                });
            }
        });
    };
    ProfileComponent.prototype.onBack = function () {
        this.router.navigate(['/report']);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__services_notif_service__["a" /* NotifService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatDialog */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Register Label</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser(registerForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('name').invalid && registerForm.get('name').dirty}\">\n          <label for=\"name\" class=\"col-sm-2 control-label\">Label Name <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n              <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"name\" id=\"name\" placeholder=\"Label Name\">\n          </div>\n          <div class=\"text-danger\" *ngIf=\"registerForm.get('name').dirty && registerForm.get('name').errors\">\n              <span class=\"col-sm-2\"></span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('name').errors.required\">\n                  Please enter your label name\n              </span>\n          </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('email').invalid && registerForm.get('email').dirty}\">\n          <label for=\"email\" class=\"col-sm-2 control-label\">Email <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\">@</div>\n              <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"email\" id=\"email\" placeholder=\"Email\">\n          </div>\n          <div class=\"text-danger\" *ngIf=\"registerForm.get('email').dirty && registerForm.get('email').errors\">\n              <span class=\"col-sm-2\"></span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('email').invalid\">\n                  Please enter a valid email\n              </span>\n          </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('contactno').invalid && registerForm.get('contactno').dirty}\">\n        <label for=\"contactno\" class=\"col-sm-2 control-label\">Contact No <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-earphone\"></i></div>\n            <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"contactno\" id=\"contactno\" placeholder=\"Contact No\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"registerForm.get('contactno').dirty && registerForm.get('contactno').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('contactno').errors.required\">\n                Please enter your contact no\n            </span>\n        </div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('bankaccno').invalid && registerForm.get('bankaccno').dirty}\">\n        <label for=\"bankaccno\" class=\"col-sm-2 control-label\">Bank Account No <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n            <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"bankaccno\" id=\"bankaccno\" placeholder=\"Bank Account No\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"registerForm.get('bankaccno').dirty && registerForm.get('bankaccno').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('bankaccno').errors.required\">\n                Please enter your bank account no\n            </span>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"bankcode\" class=\"col-sm-2 control-label\">Bank Code</label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n            <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"bankcode\" id=\"bankcode\" placeholder=\"Bank Code\">\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('bankname').invalid && registerForm.get('bankname').dirty}\">\n        <label for=\"bankname\" class=\"col-sm-2 control-label\">Bank Name <sup>*</sup></label>\n        <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-pencil\"></i></div>\n            <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"bankname\" id=\"bankname\" placeholder=\"Bank Name\">\n        </div>\n        <div class=\"text-danger\" *ngIf=\"registerForm.get('bankname').dirty && registerForm.get('bankname').errors\">\n            <span class=\"col-sm-2\"></span>\n            <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('bankname').errors.required\">\n                Please enter your bank name\n            </span>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('username').invalid && registerForm.get('username').dirty}\">\n          <label for=\"username\" class=\"col-sm-2 control-label\">Username <sup>*</sup></label>\n          <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n              <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" [formControl]=\"username\" id=\"username\" placeholder=\"Username\">\n          </div>\n          <div class=\"text-danger\" *ngIf=\"registerForm.get('username').dirty && registerForm.get('username').errors\">\n              <span class=\"col-sm-2\"></span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.required\">\n                  Please enter username\n              </span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.minlength\">\n                  Username must be longer than 3 characters.\n              </span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('username').errors.maxlength\">\n                  Username cannot be longer than 16 characters.\n              </span>\n          </div>\n      </div>\n\n       <div formGroupName=\"passwordGroup\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup').errors }\">\n           \n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup.password').invalid && registerForm.get('passwordGroup.password').dirty}\">\n              <label for=\"password\" class=\"col-sm-2 control-label\">Password <sup>*</sup></label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                  <input [disabled]=\"this.loading == true\" type=\"password\" class=\"form-control\" [formControl]=\"password\" id=\"password\" placeholder=\"Pasword\">\n              </div>\n              <div class=\"text-danger\"  *ngIf=\"registerForm.get('passwordGroup.password').dirty && registerForm.get('passwordGroup.password').errors\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.password').errors.required\">\n                      Please enter password\n                  </span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.password').errors.pattern\">\n                      Password must be minimum 6 and maximum 12 characters AND contain one letter, number & special characters\n                  </span>\n              </div>\n          \n          </div>\n          <div class=\"form-group\" [ngClass]=\"{'has-error': registerForm.get('passwordGroup.retypepass').invalid && registerForm.get('passwordGroup.retypepass').dirty}\">\n              <label for=\"retypepass\" class=\"col-sm-2 control-label\">Retype Password <sup>*</sup></label>\n              <div class=\"input-group col-sm-10\">\n                  <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                  <input [disabled]=\"this.loading == true\" type=\"password\" class=\"form-control\" [formControl]=\"retypepass\" id=\"retypepass\" placeholder=\"Retype Password\">\n              </div>\n              <div class=\"text-danger\" *ngIf=\"(registerForm.get('passwordGroup.retypepass').touched || registerForm.get('passwordGroup.retypepass').dirty) && (registerForm.get('passwordGroup.retypepass').errors || registerForm.get('passwordGroup').errors)\">\n                  <span class=\"col-sm-2\"></span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup.retypepass').errors?.required\">\n                      Please confirm your password\n                  </span>\n                  <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"registerForm.get('passwordGroup').errors?.mismatchedPassword\">\n                      Password do not match\n                  </span>\n              </div>\n          </div>\n       </div>\n      <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\"></label>\n          <div class=\"col-sm-5\" style=\"padding:0;margin:0;\">\n              <button type=\"submit\" [disabled]=\"registerForm.invalid || this.loading == true\" class=\"btn btn-primary\">Submit</button>\n              <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\">Reset</button>\n          </div>\n          <div class=\"col-sm-5\" style=\"text-align:right\">\n              <sup>*</sup> required\n          </div>\n      </div>\n  </form>\n\n</div>"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_notif_service__ = __webpack_require__("./src/app/services/notif.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, userService, notifService, router, toastr) {
        this.fb = fb;
        this.userService = userService;
        this.notifService = notifService;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
        this.contactno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.bankaccno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.bankcode = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.bankname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].maxLength(16)]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
        this.retypepass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            name: this.name,
            email: this.email,
            contactno: this.contactno,
            bankaccno: this.bankaccno,
            bankcode: this.bankcode,
            bankname: this.bankname,
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
            var theForm_1 = this.registerForm.value;
            var thePass = this.registerForm.value.passwordGroup.password;
            theForm_1.password = thePass;
            delete theForm_1.passwordGroup;
            this.loading = true;
            this.userService.register(theForm_1)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    _this.toastr.error(data.message);
                }
                else {
                    //this.toastr.success(data.message);
                    //this.loading = false;
                    var nm_1 = data.name;
                    var payload = {};
                    payload.emailto = theForm_1.email;
                    payload.vlink = data.vlink;
                    _this.notifService.sendemailverification(payload)
                        .subscribe(function (data) {
                        if (data.success === false) {
                            _this.loading = false;
                            _this.router.navigate(["postregistered/err?" + theForm_1.email]);
                        }
                        else {
                            _this.loading = false;
                            _this.router.navigate(["postregistered/" + nm_1 + "?" + theForm_1.email]);
                        }
                    });
                }
                _this.registerForm.reset();
            });
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_notif_service__["a" /* NotifService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());

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


/***/ }),

/***/ "./src/app/components/user/resetuserpasswd/resetuserpasswd.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/resetuserpasswd/resetuserpasswd.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n    <div class=\"page-header\">\n        <h3>Reset Password</h3>\n    </div>\n    <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n    <form [formGroup]=\"passwordForm\" (ngSubmit)=\"resetPassword(passwordForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n  \n        <div formGroupName=\"passwordGroup\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup').errors }\">\n  \n            <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup.password').invalid && passwordForm.get('passwordGroup.password').dirty}\">\n                <label for=\"password\" class=\"col-sm-2 control-label\">New Password</label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input [disabled]=\"this.loading == true\" type=\"password\" class=\"form-control\" id=\"password\" [formControl]=\"password\" placeholder=\"New Pasword\">\n                </div>\n                <div class=\"text-danger\"  *ngIf=\"passwordForm.get('passwordGroup.password').dirty && passwordForm.get('passwordGroup.password').errors\">\n                    <span class=\"col-sm-2\"></span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.password').errors.required\">\n                        Please enter password\n                    </span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.password').errors.pattern\">\n                        Password must be minimum 6 and maximum 12 characters AND contain one letter, number & special characters\n                    </span>\n                </div>\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{'has-error': passwordForm.get('passwordGroup.retypepass').invalid && passwordForm.get('passwordGroup.retypepass').dirty}\">\n                <label for=\"retypepass\" class=\"col-sm-2 control-label\">Retype Password <sup>*</sup></label>\n                <div class=\"input-group col-sm-10\">\n                    <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-asterisk\"></i></div>\n                    <input [disabled]=\"this.loading == true\" type=\"password\" class=\"form-control\" [formControl]=\"retypepass\" id=\"retypepass\" placeholder=\"Retype Password\">\n                </div>\n                <div class=\"text-danger\" *ngIf=\"(passwordForm.get('passwordGroup.retypepass').touched || passwordForm.get('passwordGroup.retypepass').dirty) && (passwordForm.get('passwordGroup.retypepass').errors || passwordForm.get('passwordGroup').errors)\">\n                    <span class=\"col-sm-2\"></span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup.retypepass').errors?.required\">\n                        Please confirm your password\n                    </span>\n                    <span class=\"col-sm-10\" style=\"padding:4px 0 0\" *ngIf=\"passwordForm.get('passwordGroup').errors?.mismatchedPassword\">\n                        Password do not match\n                    </span>\n                </div>\n            </div>\n  \n        </div>\n    \n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\"></label>\n            <div class=\"col-sm-10\">\n                <button type=\"submit\" [disabled]=\"passwordForm.invalid || this.loading == true\" class=\"btn btn-primary\">Submit</button>\n            </div>\n        </div>\n    </form>\n  \n  </div>\n  "

/***/ }),

/***/ "./src/app/components/user/resetuserpasswd/resetuserpasswd.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetuserpasswdComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_notif_service__ = __webpack_require__("./src/app/services/notif.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ResetuserpasswdComponent = /** @class */ (function () {
    function ResetuserpasswdComponent(fb, route, router, notifService, msconfigService, toastr, userService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.notifService = notifService;
        this.msconfigService = msconfigService;
        this.toastr = toastr;
        this.userService = userService;
        this.loading = false;
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,12}$')]);
        this.retypepass = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    ResetuserpasswdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.sub = this.route.queryParams.subscribe(function (params) {
            var hash = params['id'];
            _this.notifService.pageverification(hash)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    _this.router.navigate(['login']);
                    _this.toastr.error(data.message);
                }
                else {
                    _this.loading = false;
                    _this.vhash = data.hash;
                }
            });
        });
        this.passwordForm = this.fb.group({
            passwordGroup: this.fb.group({
                password: this.password,
                retypepass: this.retypepass,
            }, { validator: comparePassword })
        });
    };
    ResetuserpasswdComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ResetuserpasswdComponent.prototype.resetPassword = function (formdata) {
        var _this = this;
        if (this.passwordForm.dirty && this.passwordForm.valid) {
            var theForm = this.passwordForm.value;
            var thePass = this.passwordForm.value.passwordGroup.password;
            theForm.password = thePass;
            theForm.hash = this.vhash;
            delete theForm.passwordGroup;
            this.loading = true;
            this.userService.doResetPasswd(theForm)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    _this.toastr.error(data.message);
                }
                else {
                    _this.loading = false;
                    _this.toastr.success(data.message);
                }
                _this.passwordForm.reset();
                _this.router.navigate(['login']);
            });
        }
    };
    ResetuserpasswdComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resetuserpasswd',
            template: __webpack_require__("./src/app/components/user/resetuserpasswd/resetuserpasswd.component.html"),
            styles: [__webpack_require__("./src/app/components/user/resetuserpasswd/resetuserpasswd.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__services_notif_service__["a" /* NotifService */],
            __WEBPACK_IMPORTED_MODULE_4__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]])
    ], ResetuserpasswdComponent);
    return ResetuserpasswdComponent;
}());

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


/***/ }),

/***/ "./src/app/components/user/updateemail/updateemail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/updateemail/updateemail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>Change email</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <div class=\"clearfix\">\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateEmail(profileForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\">\n            <label for=\"oldemail\" class=\"col-sm-2 control-label\">Existing Email</label>\n            <div class=\"input-group col-sm-10\">\n              <div class=\"input-group-addon\">@</div>\n                <div class=\"form-ele\">{{ userObj.email }}</div>\n            </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': profileForm.get('email').invalid && profileForm.get('email').dirty}\">\n          <label for=\"email\" class=\"col-sm-2 control-label\">New Email</label>\n          <div class=\"input-group col-sm-10\">\n            <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-pencil\"></i></div>\n              <input [disabled]=\"this.loading == true\" type=\"text\" class=\"form-control\" id=\"email\" [formControl]=\"email\" placeholder=\"New Email\">\n          </div>\n          <div class=\"text-danger\"  *ngIf=\"profileForm.get('email').dirty && profileForm.get('email').errors\">\n              <span class=\"col-sm-2\"></span>\n              <span class=\"col-sm-10\" style=\"padding:4px 0 0\">\n                  Please enter email\n              </span>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"col-sm-2 control-label\"></label>\n          <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n              <button type=\"submit\" [disabled]=\"profileForm.invalid || this.loading == true\" class=\"btn btn-primary\">Update</button>\n              <button type=\"reset\" [disabled]=\"this.loading == true\" class=\"btn btn-default\" (click)=\"onBack()\">Cancel</button>\n          </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/updateemail/updateemail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateemailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UpdateemailComponent = /** @class */ (function () {
    function UpdateemailComponent(fb, authService, userService, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
    }
    UpdateemailComponent.prototype.ngOnInit = function () {
        this.userObj = this.authService.currentUser;
        this.profileForm = this.fb.group({
            email: this.email
        });
    };
    UpdateemailComponent.prototype.updateEmail = function (formdata) {
        var _this = this;
        if (this.profileForm.dirty && this.profileForm.valid) {
            this.loading = true;
            this.userService.updateEmail(this.userObj.userid, this.profileForm.value)
                .subscribe(function (data) {
                if (data.success === false) {
                    _this.loading = false;
                    if (data.errcode) {
                        _this.authService.logout();
                        _this.router.navigate(['login']);
                    }
                    _this.toastr.error(data.message);
                }
                else {
                    _this.loading = false;
                    _this.toastr.success(data.message);
                    var theUser = JSON.parse(localStorage.getItem('currentUser'));
                    theUser.user.email = _this.profileForm.value.email;
                    localStorage.setItem('currentUser', JSON.stringify(theUser));
                }
            });
        }
    };
    UpdateemailComponent.prototype.onBack = function () {
        this.router.navigate(['/report']);
    };
    UpdateemailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-updateemail',
            template: __webpack_require__("./src/app/components/user/updateemail/updateemail.component.html"),
            styles: [__webpack_require__("./src/app/components/user/updateemail/updateemail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]])
    ], UpdateemailComponent);
    return UpdateemailComponent;
}());



/***/ }),

/***/ "./src/app/components/usermgt/usermgt.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/usermgt/usermgt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>LABEL MANAGEMENT</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <div *ngIf=\"this.loading == false\" class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">Search Parameter</h3>\n    </div>\n    <div class=\"panel-body\">\n      <form [formGroup]=\"reportForm\" (ngSubmit)=\"getReport(reportForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n\n          <div class=\"row rowmarginsearch\">\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"username\" class=\"col-sm-2 paddingsearch\">Username</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                      <input type=\"text\" class=\"form-control\" id=\"username\" [formControl]=\"username\" placeholder=\"User Name\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6\">\n                <label for=\"name\" class=\"col-sm-2 paddingsearch\">Name</label>\n                <div class=\"col-sm-10\">\n                    <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div> -->\n                    <input type=\"text\" class=\"form-control\" id=\"name\" [formControl]=\"name\" placeholder=\"Label Name\">\n                </div>\n              </div>\n          </div>\n          <div class=\"row rowmarginsearch\">\n              <div class=\"col-sm-6 col-md-6\">\n                  <label for=\"status\" class=\"col-sm-2 paddingsearch\">Status</label>\n                  <div class=\"col-sm-10\">\n                      <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                      <select class=\"form-control\" [formControl]=\"status\">\n                            <option value=\"\">Select the status</option>\n                            <option *ngFor=\"let a of sts\" [ngValue]=\"a.code\">{{a.value}}</option>\n                      </select>\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6\">\n                    <label for=\"veremail\" class=\"col-sm-3 paddingsearch\">Email Verified?</label>\n                    <div class=\"col-sm-9\">\n                        <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-list-alt\"></i></div> -->\n                        <select class=\"form-control\" [formControl]=\"veremail\">\n                              <option value=\"\">Select the option</option>\n                              <option *ngFor=\"let b of yn\" [ngValue]=\"b.code\">{{b.value}}</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row rowmarginsearch\">\n              <div class=\"col-sm-6 col-md-6\">\n                  <label class=\"col-sm-2 paddingsearch\">      </label>\n                  <div class=\"col-sm-5\">\n                    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"reportForm.invalid\">Submit</button>\n                  </div>\n              </div>                  \n          </div>\n      </form>\n    </div>\n  </div>  \n\n  <div class=\"panel panel-danger\" *ngIf=\"labellist && totalrows < 1\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">No LABELS found</h3> \n        </div>\n  \n        <div class=\"panel-body\">\n            No Labels found from above criterias.\n        </div>\n    </div>\n  \n    <div class=\"panel panel-default\" *ngIf=\"labellist && totalrows > 0 && this.loading == false\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\"><i>{{reportTitle}}</i> <b> ({{ totalrows }} records found)</b> </h3> \n        </div>\n        <div class=\"panel-body\">\n                <div class=\"table-responsive\"> \n                        <table class=\"table table-hover\">\n                            <thead>\n                                    <tr>\n                                        <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortLabel('username')\">User Name</a></th>\n                                        <th width=\"30%\"><a style=\"cursor:pointer\" (click)=\"sortLabel('name')\">Label Name</a></th>\n                                        <th width=\"20%\"><a style=\"cursor:pointer\" (click)=\"sortLabel('email')\">Email</a></th>\n                                        <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortLabel('verified_email')\">Email Verified?</a></th>\n                                        <th width=\"10%\"><a style=\"cursor:pointer\" (click)=\"sortLabel('status')\">Status</a></th>\n                                        <th width=\"20%\">Action</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor='let lbl of labellist; let lblIndex = index'>\n                                        <td><a style=\"cursor:pointer\" (click)=\"showLabel(lbl._id)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"View Detail\">{{ lbl.username}}</a></td>\n                                        <td>{{ lbl.name}}</td>\n                                        <td>{{ lbl.email}}</td>\n                                        <td>{{ lbl.verified_email }}</td>\n                                        <td>{{ lbl.stsvalue}}</td>\n                                        <td>\n                                            <button type=\"button\" class=\"btn-xs btn-success\" aria-label=\"Activate\" (click)=\"activateLabel(lbl._id, lbl.name, lbl.status)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Activate Label\">\n                                                <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\n                                            </button>\n                                            <button type=\"button\" class=\"btn-xs btn-danger\" aria-label=\"Deactivate\" (click)=\"deactivateLabel(lbl._id, lbl.name, lbl.status)\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Deactivate Label\">\n                                                <span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></span>\n                                            </button>\n                                        </td>\n                                    </tr>     \n                                </tbody>    \n                        </table>\n                </div>\n                <div style=\"text-align:center\" *ngIf=\"labellist && totalrows > 10\">\n                        <nav aria-label=\"Page navigation\">\n                            <ul class=\"pagination\">\n                                <li *ngFor=\"let item of createPager(pgCounter); let idx = index\">\n                                    <a [ngClass]=\"{'selected': qpage == idx + 1 }\" class=\"selected\" style=\"cursor:pointer\" (click) = \"setPage(idx + 1)\">{{ idx + 1 }}</a>\n                                </li>\n                            </ul>\n                        </nav>\n                </div> \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/usermgt/usermgt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermgtComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_admin_usermgt_service__ = __webpack_require__("./src/app/services/admin/usermgt.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_admin_msconfig_service__ = __webpack_require__("./src/app/services/admin/msconfig.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsermgtComponent = /** @class */ (function () {
    function UsermgtComponent(fb, authService, labelmgtService, msconfigService, route, router, toastr, datePipe) {
        this.fb = fb;
        this.authService = authService;
        this.labelmgtService = labelmgtService;
        this.msconfigService = msconfigService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.datePipe = datePipe;
        this.loading = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.status = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
        this.veremail = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].nullValidator]);
    }
    UsermgtComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userObj = this.authService.currentUser;
        this.reportForm = this.fb.group({
            name: this.name,
            username: this.username,
            status: this.status,
            veremail: this.veremail
        });
        this.getMsconfigGroupList('STATUS');
        this.getMsconfigGroupList('YRN');
        this.route.queryParams.forEach(function (params) {
            _this.qlabelname = params['name'] || '';
            _this.qusername = params['username'] || '';
            _this.qstatus = params['status'] || '';
            _this.qveremail = params['veremail'] || '';
            _this.qpage = params['page'] || '';
            _this.qsort = params['sortby'] || '';
            var payload = {};
            payload.status = _this.qstatus;
            payload.name = _this.qlabelname;
            payload.username = _this.qusername;
            payload.veremail = _this.qveremail;
            payload.page = _this.qpage;
            payload.sortby = _this.qsort;
            _this.fetchReport(_this.userObj.userid, payload);
            _this.reportForm.patchValue({
                name: _this.qlabelname,
                username: _this.qusername,
                status: _this.qstatus,
                veremail: _this.qveremail
            });
        });
    };
    UsermgtComponent.prototype.getMsconfigGroupList = function (groupid) {
        var _this = this;
        this.msconfigService.getMsconfigbygroup(groupid).subscribe(function (data) {
            if (data.success === true) {
                if (data.data[0]) {
                    if (groupid == 'STATUS') {
                        _this.sts = data.data;
                    }
                    if (groupid == 'YRN') {
                        _this.yn = data.data;
                    }
                }
                else {
                    _this.sts = [{ code: '', value: 'Error ms config list' }];
                    _this.yn = [{ code: '', value: 'Error ms config list' }];
                }
            }
        });
    };
    UsermgtComponent.prototype.getReport = function (formdata) {
        if (this.reportForm.valid) {
            //this.fetchReport(this.userObj.userid, this.reportForm.value);
            this.router.navigate(['usermanagement'], {
                queryParams: {
                    name: this.reportForm.value.name,
                    username: this.reportForm.value.username,
                    status: this.reportForm.value.status,
                    veremail: this.reportForm.value.veremail,
                    page: 1,
                    sortby: null
                }
            });
        }
    };
    UsermgtComponent.prototype.fetchReport = function (userid, formval) {
        var _this = this;
        this.loading = true;
        this.labelmgtService.getUserLabels(formval)
            .subscribe(function (data) {
            if (data.success === false) {
                _this.loading = false;
                if (data.errcode) {
                    _this.authService.logout();
                    _this.router.navigate(['login']);
                }
                _this.toastr.error(data.message);
            }
            else {
                _this.loading = false;
                _this.labellist = data.data;
                _this.totalrows = +data.totalcount;
                _this.pgCounter = Math.floor((_this.totalrows + 10 - 1) / 10);
                _this.qlabelname = formval.name;
                _this.qusername = formval.username;
                _this.qstatus = formval.status;
                _this.qveremail = formval.veremail;
                _this.reportTitle = 'Labels Result';
                _this.reportForm.patchValue({
                    name: _this.qlabelname,
                    username: _this.qusername,
                    status: _this.qstatus,
                    veremail: _this.qveremail
                });
            }
        });
    };
    UsermgtComponent.prototype.setPage = function (page) {
        this.router.navigate(['usermanagement'], {
            queryParams: {
                name: this.qlabelname,
                username: this.qusername,
                status: this.qstatus,
                veremail: this.qveremail,
                page: page,
                sortby: this.qsort
            }
        });
    };
    UsermgtComponent.prototype.createPager = function (number) {
        var items = [];
        for (var i = 1; i <= number; i++) {
            items.push(i);
        }
        return items;
    };
    UsermgtComponent.prototype.sortLabel = function (sortby) {
        if (this.qsort === '') {
            this.qsort = sortby;
        }
        else if (this.qsort.indexOf('-') > -1) {
            this.qsort = sortby;
        }
        else {
            this.qsort = '-' + sortby;
        }
        this.router.navigate(['usermanagement'], {
            queryParams: {
                name: this.qlabelname,
                username: this.qusername,
                status: this.qstatus,
                veremail: this.qveremail,
                page: this.qpage || 1,
                sortby: this.qsort
            }
        });
    };
    UsermgtComponent.prototype.activateLabel = function (userid, labelname, status) {
        var _this = this;
        this.loading = true;
        if (status == 'STSACT') {
            this.loading = false;
            this.toastr.warning('The label is already active.');
        }
        else {
            if (confirm('Do you really want to activate this label: ' + labelname + ' record?')) {
                var payloadData = {};
                payloadData.status = 'STSACT';
                this.labelmgtService.updateLabelStatus(userid, payloadData)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.loading = false;
                        _this.fetchReport(_this.userObj.userid, _this.reportForm.value);
                        _this.toastr.success(data.message);
                    }
                });
            }
            else {
                this.loading = false;
            }
        }
    };
    UsermgtComponent.prototype.deactivateLabel = function (userid, labelname, status) {
        var _this = this;
        this.loading = true;
        if (status != 'STSACT') {
            this.loading = false;
            this.toastr.warning('The label is already NOT active.');
        }
        else {
            if (confirm('Do you really want to deactivate this label: ' + labelname + ' record?')) {
                var payloadData = {};
                payloadData.status = 'STSINACT';
                this.labelmgtService.updateLabelStatus(userid, payloadData)
                    .subscribe(function (data) {
                    if (data.success === false) {
                        _this.loading = false;
                        if (data.errcode) {
                            _this.authService.logout();
                            _this.router.navigate(['login']);
                        }
                        _this.toastr.error(data.message);
                    }
                    else {
                        _this.loading = false;
                        _this.fetchReport(_this.userObj.userid, _this.reportForm.value);
                        _this.toastr.success(data.message);
                    }
                });
            }
            else {
                this.loading = false;
            }
        }
    };
    UsermgtComponent.prototype.showLabel = function (userid) {
        this.router.navigate(["viewlabel/" + userid], {
            queryParams: {
                name: this.qlabelname,
                username: this.qusername,
                status: this.qstatus,
                veremail: this.qveremail,
                page: this.qpage || 1,
                sortby: this.qsort
            }
        });
    };
    UsermgtComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usermgt',
            template: __webpack_require__("./src/app/components/usermgt/usermgt.component.html"),
            styles: [__webpack_require__("./src/app/components/usermgt/usermgt.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_admin_usermgt_service__["a" /* UsermgtService */],
            __WEBPACK_IMPORTED_MODULE_7__services_admin_msconfig_service__["a" /* MsconfigService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], UsermgtComponent);
    return UsermgtComponent;
}());



/***/ }),

/***/ "./src/app/components/usermgt/viewlabel/viewlabel.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/usermgt/viewlabel/viewlabel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pagecontainer\">\n  <div class=\"page-header\">\n      <h3>LABEL DETAILS</h3>\n  </div>\n  <ngx-loading [show]=\"loading\" [config]=\"{ backdropBorderRadius: '14px' }\"></ngx-loading>\n  <div class=\"clearfix\">\n    <form [formGroup]=\"profileForm\" (ngSubmit)=\"updateUser(profileForm.value)\" class=\"form-horizontal\" novalidate autocomplete=\"off\">\n        <div class=\"form-group\">\n            <label for=\"username\" class=\"col-sm-2 control-label\">Username</label>\n            <div class=\"form-ele col-sm-10\">{{ user.username }}\n                <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-user\"></i></div>\n                <div class=\"form-ele\">{{ user.username }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"name\" class=\"col-sm-2 control-label\">Name</label>\n            <div class=\"form-ele col-sm-10\">{{ user.name }}\n                <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-font\"></i></div>\n                <div class=\"form-ele\">{{ user.name }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n            <div class=\"form-ele col-sm-10\">{{ user.email }}\n                <!-- <div class=\"input-group-addon\">@</div>\n                <div class=\"form-ele\">{{ user.email }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"contactno\" class=\"col-sm-2 control-label\">Contact No</label>\n            <div class=\"form-ele col-sm-10\">{{ user.contactno }}\n                <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-bold\"></i></div>\n                <div class=\"form-ele\">{{ user.contactno }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"bankaccno\" class=\"col-sm-2 control-label\">Bank Account No</label>\n            <div class=\"form-ele col-sm-10\">{{ user.bankaccno }}\n                <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-bold\"></i></div>\n                <div class=\"form-ele\">{{ user.bankaccno }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"bankname\" class=\"col-sm-2 control-label\">Bank Name</label>\n            <div class=\"form-ele col-sm-10\">{{ user.bankname }}\n                <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-bold\"></i></div>\n                <div class=\"form-ele\">{{ user.bankname }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"lastlogin\" class=\"col-sm-2 control-label\">Last Login</label>\n            <div class=\"form-ele col-sm-10\">{{ user.lastlogin | date:'medium' }}\n                <!-- <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon glyphicon-calendar\"></i></div>\n                <div class=\"form-ele\">{{ user.lastlogin | date:'medium' }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label for=\"balance\" class=\"col-sm-2 control-label\">Balance</label>\n            <div class=\"form-ele col-sm-10\">{{ user.balance | currency:'IDR'}}\n                <!-- <div class=\"input-group-addon\">Rp</div>\n                <div class=\"form-ele\">{{ user.balance }}</div> -->\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-sm-2 control-label\">       </label>\n            <div class=\"col-sm-10\" style=\"padding:0;margin:0;\">\n                <button type=\"button\" (click)=\"onBack()\" class=\"btn btn-default\">Back</button>\n            </div>\n        </div>\n    </form>                \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/usermgt/viewlabel/viewlabel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewlabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewlabelComponent = /** @class */ (function () {
    function ViewlabelComponent(fb, authService, userService, route, router, toastr) {
        this.fb = fb;
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.loading = false;
        this.name = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]);
        this.contactno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.bankaccno = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.bankname = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.lastlogin = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
        this.balance = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required]);
    }
    ViewlabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            var labelid = params['id'];
            _this.getLabel(labelid);
        });
        this.profileForm = this.fb.group({
            name: this.name,
            email: this.email,
            contactno: this.contactno,
            bankaccno: this.bankaccno,
            bankname: this.bankname,
            lastlogin: this.lastlogin,
            balance: this.balance
        });
    };
    ViewlabelComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ViewlabelComponent.prototype.getLabel = function (id) {
        var _this = this;
        this.userService.getUser(id).subscribe(function (data) {
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
    ViewlabelComponent.prototype.populateForm = function (data) {
        this.profileForm.patchValue({
            name: data.name,
            email: data.email,
            contactno: data.contactno,
            bankaccno: data.bankaccno,
            bankname: data.bankname,
            lastlogin: this.lastlogin,
            balance: this.balance
        });
    };
    ViewlabelComponent.prototype.onBack = function () {
        this.router.navigate(['../usermanagement'], { preserveQueryParams: true });
    };
    ViewlabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewlabel',
            template: __webpack_require__("./src/app/components/usermgt/viewlabel/viewlabel.component.html"),
            styles: [__webpack_require__("./src/app/components/usermgt/viewlabel/viewlabel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]])
    ], ViewlabelComponent);
    return ViewlabelComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("./src/app/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
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
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/admin/msconfig.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MsconfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__("./src/app/app.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MsconfigService = /** @class */ (function () {
    function MsconfigService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.adminurl = globals.adminurl;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    MsconfigService.prototype.uploadGenrephoto = function (oFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.adminurl + "/api/genrephotoupload", oFile, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.deleteGenrephoto = function (oGenre) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.adminurl + "/api/genrephotodelete", oGenre, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.saveMsconfig = function (userid, oMsconfig) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.adminurl + "/api/msconfig/" + userid, JSON.stringify(oMsconfig), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.deleteMsconfig = function (msconfigid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.adminurl + "/api/msconfig/" + msconfigid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.updateMsconfigfile = function (userid, oMsconfig) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.adminurl + "/api/msconfig/" + userid, JSON.stringify(oMsconfig), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.getAggMsconfig = function (oMsconfig) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.adminurl + "/api/mscfgaggreport", JSON.stringify(oMsconfig), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.getMsconfigAgg = function (msconfigid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.adminurl + "/api/msconfigagg/" + msconfigid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.getMsconfig = function (msconfigid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.adminurl + "/api/msconfig/" + msconfigid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.getMsconfigbygroup = function (msconfiggroup) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.adminurl + "/msconfigbygroup/" + msconfiggroup, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.getMsconfigvalue = function (msconfigcode, msconfiggroup) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.adminurl + "/msconfigvalue/" + msconfigcode + "?group=" + msconfiggroup, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.getMsconfiggroup = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.adminurl + "/msconfiggroup", options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MsconfigService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    MsconfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Globals */]])
    ], MsconfigService);
    return MsconfigService;
}());



/***/ }),

/***/ "./src/app/services/admin/songadmin.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongadminService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__("./src/app/app.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SongadminService = /** @class */ (function () {
    function SongadminService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.adminurl = globals.adminurl;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    SongadminService.prototype.publishSong = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.adminurl + "/api/publishsong/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongadminService.prototype.cancelpublishSong = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.adminurl + "/api/cancelpublishsong/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongadminService.prototype.getAggSongs = function (oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.adminurl + "/api/songadm/aggreport", JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongadminService.prototype.getSong = function (songid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.adminurl + "/api/songadm/" + songid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongadminService.prototype.getSongAgg = function (songid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.adminurl + "/api/songaggregate/" + songid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongadminService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    SongadminService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Globals */]])
    ], SongadminService);
    return SongadminService;
}());



/***/ }),

/***/ "./src/app/services/admin/usermgt.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsermgtService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__("./src/app/app.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UsermgtService = /** @class */ (function () {
    function UsermgtService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.adminurl = globals.adminurl;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    UsermgtService.prototype.registerAdmin = function (oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.adminurl + "/registerAdmin", JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsermgtService.prototype.getUserLabels = function (oLabels) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.adminurl + "/api/userlabelreport", JSON.stringify(oLabels), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsermgtService.prototype.updateLabelStatus = function (labelid, oLabel) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.adminurl + "/api/changelabelstatus/" + labelid, JSON.stringify(oLabel), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsermgtService.prototype.updateLabelBalance = function (labelid, oLabel) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.adminurl + "/api/changelabelbalance/" + labelid, JSON.stringify(oLabel), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsermgtService.prototype.getLabelList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.adminurl + "/api/labellist", options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UsermgtService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    UsermgtService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Globals */]])
    ], UsermgtService);
    return UsermgtService;
}());



/***/ }),

/***/ "./src/app/services/album.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlbumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AlbumService = /** @class */ (function () {
    function AlbumService(http) {
        this.http = http;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    AlbumService.prototype.saveAlbum = function (userid, artistid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/album/" + userid + "?artistid=" + artistid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.updateAlbumphoto = function (albumid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/updatealbumphoto/" + albumid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbums = function (userid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/album/report/" + userid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbumCount = function (userid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/albumcount/" + userid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getArtistAlbums = function (userid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/album/artistalbumreport/" + userid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAggAlbums = function (userid, oAlbum) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/album/aggreport/" + userid, JSON.stringify(oAlbum), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbum = function (albumid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("api/album/" + albumid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbumList = function (userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("api/albumlist/" + userid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getAlbumListbyArtist = function (userid, artistid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("api/albumlistbyartist/" + userid + "?artistid=" + artistid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.deleteAlbum = function (albumid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete("api/album/" + albumid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    AlbumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AlbumService);
    return AlbumService;
}());



/***/ }),

/***/ "./src/app/services/artist.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArtistService = /** @class */ (function () {
    function ArtistService(http) {
        this.http = http;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    ArtistService.prototype.saveArtist = function (userid, oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/artist/" + userid, JSON.stringify(oArtist), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.updateArtistphoto = function (artistid, oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/updateartistphoto/" + artistid, JSON.stringify(oArtist), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtists = function (userid, oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/artist/report/" + userid, JSON.stringify(oArtist), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtistCount = function (userid, oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/artistcount/" + userid, JSON.stringify(oArtist), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getAggArtists = function (userid, oArtist) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/artist/aggreport/" + userid, JSON.stringify(oArtist), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtist = function (artistid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("api/artist/" + artistid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getArtistList = function (userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("api/artistlist/" + userid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.deleteArtist = function (artistid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete("api/artist/" + artistid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    ArtistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ArtistService);
    return ArtistService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
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
        return this.http.post('api/login', JSON.stringify(oUser), options)
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
        //Clear storage after specific time
        var logoutTimer = setTimeout(function () { localStorage.clear(); }, 100);
    };
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/filetransfer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiletransferService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__("./src/app/app.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FiletransferService = /** @class */ (function () {
    function FiletransferService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.filetransferurl = globals.filetransferurl;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    FiletransferService.prototype.uploadInputFile = function (oFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //console.log(oFile.getAll('artistimage'));
        return this.http.post(this.filetransferurl + "/api/inputfileupload", oFile, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FiletransferService.prototype.deleteInputFile = function (oFile) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.filetransferurl + "/api/inputfiledelete", oFile, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FiletransferService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    FiletransferService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Globals */]])
    ], FiletransferService);
    return FiletransferService;
}());



/***/ }),

/***/ "./src/app/services/notif.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_global__ = __webpack_require__("./src/app/app.global.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NotifService = /** @class */ (function () {
    function NotifService(http, globals) {
        this.http = http;
        this.globals = globals;
        this.notifurl = globals.notifurl;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    NotifService.prototype.sendemailverification = function (oLink) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.notifurl + "/sendverification", JSON.stringify(oLink), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotifService.prototype.sendresetpasswd = function (oLink) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.notifurl + "/sendresetpassword", JSON.stringify(oLink), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotifService.prototype.recvemailverification = function (hash) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.notifurl + "/verify?id=" + hash, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotifService.prototype.pageverification = function (hash) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.notifurl + "/pgverify?id=" + hash, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotifService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    NotifService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__app_global__["a" /* Globals */]])
    ], NotifService);
    return NotifService;
}());



/***/ }),

/***/ "./src/app/services/song.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SongService = /** @class */ (function () {
    function SongService(http) {
        this.http = http;
        var theUser = JSON.parse(localStorage.getItem('currentUser'));
        if (theUser) {
            this.jwtToken = theUser.token;
        }
    }
    SongService.prototype.saveSong = function (userid, artistid, albumid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/song/" + userid + "?artistid=" + artistid + "&albumid=" + albumid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.publishSong = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/publishsong/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.cancelPublishSong = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/cancelpublishsong/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.updateSongPreview = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/updatesongpreview/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.updateSongFile = function (songid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/updatesongfile/" + songid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getSong = function (songid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("api/song/" + songid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getSongAgg = function (songid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("api/songaggregate/" + songid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.deleteSong = function (songid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete("api/song/" + songid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getAggSongs = function (userid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/song/aggreport/" + userid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getSongs = function (userid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/song/report/" + userid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getSongCount = function (userid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/songcount/" + userid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.getSongList = function (userid, oSong) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("api/song/list/" + userid, JSON.stringify(oSong), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SongService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    SongService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SongService);
    return SongService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = /** @class */ (function () {
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
        return this.http.post('register', JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("api/user/" + userid, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateUser = function (userid, oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/user/" + userid, JSON.stringify(oUser), options)
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
        return this.http.put("api/password/" + userid, JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.updateEmail = function (userid, oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/email/" + userid, JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.emailVerify = function (oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', "" + this.jwtToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put("api/emailverify", JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.resetPasswd = function (oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("resetpwd", JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.doResetPasswd = function (oUser) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post("doresetpwd", JSON.stringify(oUser), options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
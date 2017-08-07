"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var global_observable_service_1 = require("../global-observable.service");
var ACCESS_TOKEN = 'id_token', REFRESH_TOKEN = 'refresh_token', PROFILE = 'profile', CART = "cart";
var IAuthService = (function () {
    function IAuthService() {
    }
    return IAuthService;
}());
exports.IAuthService = IAuthService;
var Profile = (function () {
    function Profile(source) {
        if (!source) {
            return;
        }
        this.roles = source.roles;
        this.picture = source.picture;
        this.name = source.userName;
    }
    return Profile;
}());
exports.Profile = Profile;
var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(ngHttp, gloSrv) {
        var _this = _super.call(this) || this;
        _this.ngHttp = ngHttp;
        _this.gloSrv = gloSrv;
        _this._profile = new Profile;
        _this._authSubject = new BehaviorSubject_1.BehaviorSubject({
            isAuthenticated: _this.isAuthenticated(),
            profile: _this._profile
        });
        return _this;
    }
    Object.defineProperty(AuthService.prototype, "profile", {
        get: function () {
            return this._profile;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getProfile = function () {
        return this._profile;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.getAuthToken() ? true : false;
    };
    AuthService.prototype.authenticatedObservable = function () {
        return this._authSubject.asObservable();
    };
    AuthService.prototype.isInRole = function (role) {
        var roles = this._profile.roles;
        if (!roles) {
            return false;
        }
        return (-1 < roles.indexOf(role));
    };
    AuthService.prototype.logOut = function () {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        localStorage.removeItem(PROFILE);
        localStorage.removeItem(CART);
        this._authSubject.next({
            isAuthenticated: false,
            profile: new Profile
        });
    };
    AuthService.prototype.getAuthToken = function () {
        return localStorage.getItem(ACCESS_TOKEN);
    };
    AuthService.prototype.signIn = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = new http_1.URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', 'password');
        this.ngHttp
            .post(window.GlobalSettings.LoginUrl, body, options)
            .subscribe(function (response) {
            if (response.ok) {
                var json = response.json();
                localStorage.setItem(ACCESS_TOKEN, json.access_token);
                localStorage.setItem(REFRESH_TOKEN, json.refresh_token);
                //localStorage.setItem(PROFILE, response.text()); // Save profile json to rebuild profile data after page refresh
                _this._profile = new Profile(json);
                localStorage.setItem(PROFILE, JSON.stringify(json));
                _this._authSubject.next({
                    isAuthenticated: true,
                    profile: _this._profile
                });
            }
        }, function (err) {
            console.log(err);
            _this.gloSrv.changeMess('invalid username or password');
        });
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, global_observable_service_1.GlobalService])
    ], AuthService);
    return AuthService;
}(IAuthService));
exports.AuthService = AuthService;

//# sourceMappingURL=auth.service.js.map

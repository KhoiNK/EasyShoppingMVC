"use strict";
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
var router_1 = require("@angular/router");
var auth_service_1 = require("./auth.service");
var global_observable_service_1 = require("../global-observable.service");
var LoginComponent = (function () {
    function LoginComponent(authService, router, gloSrv) {
        this.authService = authService;
        this.router = router;
        this.gloSrv = gloSrv;
        this.err = "";
        //this.gloSrv.globalMess$.subscribe(res => {
        //    this.err = res;
        //}, err => {
        //    console.log(err);
        //});
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.isAuthenticated()) {
            this.router.navigate(['/']);
        }
        else {
            this.authService
                .authenticatedObservable()
                .subscribe(function (res) {
                if (res.isAuthenticated) {
                    _this.router.navigate(['/']);
                }
            });
        }
        this.gloSrv.globalMess$.subscribe(function (res) {
            _this.err = res;
        });
    };
    LoginComponent.prototype.login = function () {
        // Validate
        this.authService.signIn(this.username, this.password);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: 'User/Login'
        }),
        __metadata("design:paramtypes", [auth_service_1.IAuthService, router_1.Router, global_observable_service_1.GlobalService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;

//# sourceMappingURL=login.component.js.map

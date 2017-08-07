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
var auth_service_1 = require("./auth/auth.service");
var user_service_1 = require("./user/user.service");
var product_service_1 = require("./product/product.service");
var router_1 = require("@angular/router");
var angular2_jwt_1 = require("angular2-jwt");
var message_service_1 = require("../app/message/message.service");
var global_observable_service_1 = require("./global-observable.service");
var PROFILE = 'profile', CART = 'cart';
var Header = (function () {
    function Header(authService, router, userservice, productSrv, el, messSrv, gloSrv) {
        this.authService = authService;
        this.router = router;
        this.userservice = userservice;
        this.productSrv = productSrv;
        this.el = el;
        this.messSrv = messSrv;
        this.gloSrv = gloSrv;
        this.isSignedIn = false;
        this.searchkey = "";
        this.count = 0;
        this.systemMess = "";
        var cacheProfile = {};
        var cartId = localStorage.getItem(CART);
        this.profile = {};
        this.user = {};
    }
    Header.prototype.ngOnInit = function () {
        var _this = this;
        this.authService
            .authenticatedObservable()
            .subscribe(function (res) {
            var cacheProfile = localStorage.getItem(PROFILE);
            _this.profile = JSON.parse(cacheProfile);
            _this.isSignedIn = res.isAuthenticated;
            if (_this.isSignedIn == true) {
                _this.userservice.GetUser(_this.profile.userName).subscribe(function (res) {
                    _this.user = res;
                });
                _this.role = _this.profile.role;
                _this.GetMessCount();
            }
            else {
                _this.isSignedIn = false;
            }
        });
        setInterval(function () {
            if (angular2_jwt_1.tokenNotExpired('id_token')) {
                _this.GetMessCount();
            }
        }, 3000);
    };
    Header.prototype.loggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    Header.prototype.logout = function () {
        this.authService.logOut();
        this.user = {};
        this.isSignedIn = false;
        this.mess = [];
        this.count = 0;
        this.role = {};
        this.router.navigate(['/']);
    };
    Header.prototype.GetMessCount = function () {
        var _this = this;
        this.messSrv.GetUnread().subscribe(function (res) {
            _this.count = res;
        }, function (err) {
            console.log(err);
            _this.count = 0;
        });
    };
    Header.prototype.SearchProduct = function () {
        var _this = this;
        if (this.searchkey.trim() != "") {
            this.productSrv.GetByName(this.searchkey).subscribe(function (res) {
                _this.products = res;
            }, function (err) {
                console.log(err);
            });
        }
        if (this.searchkey.trim() == "") {
            this.products = [];
        }
    };
    Header.prototype.GetMessage = function () {
        var _this = this;
        this.messSrv.GetMessThumb().subscribe(function (res) {
            if (res) {
                _this.mess = res;
            }
            else if (res.status === 400) {
                _this.mess = [];
            }
        }, function (err) {
            console.log(err);
            _this.mess = [];
        });
    };
    Header.prototype.SetSearchKey = function () {
        this.router.navigate(['/searchs', this.searchkey]);
    };
    Header.prototype.MarkAsRead = function (id, mess) {
        var _this = this;
        if (id != 0) {
            this.messSrv.MarkAsRead(id).subscribe(function (res) {
                if (res == true) {
                    _this.SetNoti(mess);
                }
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.SetNoti(mess);
        }
    };
    Header.prototype.SetNoti = function (mess) {
        this.systemMess = mess;
    };
    Header = __decorate([
        core_1.Component({
            selector: 'my-header',
            templateUrl: '/Home/Header',
            providers: [user_service_1.UserServices, product_service_1.ProductService, message_service_1.MessageServices, global_observable_service_1.GlobalService]
        }),
        __metadata("design:paramtypes", [auth_service_1.IAuthService,
            router_1.Router,
            user_service_1.UserServices,
            product_service_1.ProductService,
            core_1.ElementRef,
            message_service_1.MessageServices,
            global_observable_service_1.GlobalService])
    ], Header);
    return Header;
}());
exports.Header = Header;

//# sourceMappingURL=header.component.js.map

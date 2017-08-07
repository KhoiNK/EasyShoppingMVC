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
var user_service_1 = require("./user.service");
var router_1 = require("@angular/router");
var country_service_1 = require("../country/country.service");
var UserDetailComponent = (function () {
    function UserDetailComponent(userservice, activateRoute, countryservice) {
        this.userservice = userservice;
        this.activateRoute = activateRoute;
        this.countryservice = countryservice;
        this.user = {};
        this.country = {};
    }
    UserDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.userservice.GetUserByID(this.id)
            .subscribe(function (user) {
            return _this.user = user;
            //return this.countryservice.GetSingleCountry(this.user['CountryID']);
        });
        //.subscribe(country => this.country = country);
    };
    UserDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'User/UserDetail',
            providers: [user_service_1.UserServices, country_service_1.CountryServices]
        }),
        __metadata("design:paramtypes", [user_service_1.UserServices, router_1.ActivatedRoute, country_service_1.CountryServices])
    ], UserDetailComponent);
    return UserDetailComponent;
}());
exports.UserDetailComponent = UserDetailComponent;

//# sourceMappingURL=user-detail.component.js.map

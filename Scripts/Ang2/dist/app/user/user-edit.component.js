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
var UserEditComponent = (function () {
    function UserEditComponent(userservice, activateRoute, router) {
        this.userservice = userservice;
        this.activateRoute = activateRoute;
        this.router = router;
        this.user = {};
    }
    ;
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.userservice.GetUserByID(this.id)
            .subscribe(function (user) {
            return _this.user = user;
            //return this.countryservice.GetSingleCountry(this.user['CountryID']);
        });
    };
    ;
    UserEditComponent.prototype.editUser = function () {
        var _this = this;
        this.userservice.EditUser(this.user).subscribe(function (res) {
            if (res == "true") {
                alert("Edit successful!");
            }
            _this.router.navigate['/'];
        }, function (err) {
            console.log(err);
        });
    };
    UserEditComponent = __decorate([
        core_1.Component({
            selector: 'user-edit',
            templateUrl: 'User/EditUser',
            providers: [user_service_1.UserServices]
        }),
        __metadata("design:paramtypes", [user_service_1.UserServices, router_1.ActivatedRoute, router_1.Router])
    ], UserEditComponent);
    return UserEditComponent;
}());
exports.UserEditComponent = UserEditComponent;

//# sourceMappingURL=user-edit.component.js.map

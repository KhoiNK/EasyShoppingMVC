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
var shipper_service_1 = require("./shipper.service");
var user_service_1 = require("../user/user.service");
var ShipperApplyComponent = (function () {
    function ShipperApplyComponent(shipperSrv, router, el, userSrv) {
        this.shipperSrv = shipperSrv;
        this.router = router;
        this.el = el;
        this.userSrv = userSrv;
        this.message = "";
        this.error = "";
        this.shipper = {};
        this.user = {};
    }
    ShipperApplyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSrv.GetUserDetail().subscribe(function (res) {
            _this.user = res;
        }, function (err) {
            console.log(err);
        });
    };
    ShipperApplyComponent.prototype.SaveChange = function () {
        var _this = this;
        this.shipperSrv.Apply(this.shipper).subscribe(function (res) {
            if (res.ID) {
                var inputEl = _this.el.nativeElement.querySelector('#messageModal');
                inputEl.click();
                _this.shipper = res;
            }
        }, function (err) {
            _this.error = "Applied failed!";
            console.log(err);
        });
    };
    ShipperApplyComponent = __decorate([
        core_1.Component({
            selector: 'shipper-apply',
            templateUrl: 'Shipper/Register',
            providers: [shipper_service_1.ShipperServices, user_service_1.UserServices]
        }),
        __metadata("design:paramtypes", [shipper_service_1.ShipperServices, router_1.Router, core_1.ElementRef, user_service_1.UserServices])
    ], ShipperApplyComponent);
    return ShipperApplyComponent;
}());
exports.ShipperApplyComponent = ShipperApplyComponent;

//# sourceMappingURL=shipper-apply.component.js.map

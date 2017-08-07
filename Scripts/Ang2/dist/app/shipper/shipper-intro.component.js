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
var shipper_service_1 = require("./shipper.service");
var ShipperIntroComponent = (function () {
    function ShipperIntroComponent(shipperSrv) {
        this.shipperSrv = shipperSrv;
        this.isShipper = false;
        this.isApplied = false;
    }
    ShipperIntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shipperSrv.IsApplied().subscribe(function (res) {
            _this.isApplied = res;
        }, function (err) {
            console.log(err);
        });
        this.shipperSrv.IsShipper().subscribe(function (res) {
            _this.isShipper = res;
        }, function (err) {
            console.log(err);
        });
    };
    ShipperIntroComponent = __decorate([
        core_1.Component({
            selector: 'shipper-intro',
            templateUrl: 'Shipper/Apply',
            providers: [shipper_service_1.ShipperServices]
        }),
        __metadata("design:paramtypes", [shipper_service_1.ShipperServices])
    ], ShipperIntroComponent);
    return ShipperIntroComponent;
}());
exports.ShipperIntroComponent = ShipperIntroComponent;

//# sourceMappingURL=shipper-intro.component.js.map

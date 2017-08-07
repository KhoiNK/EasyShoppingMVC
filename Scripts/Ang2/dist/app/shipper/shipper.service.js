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
var angular2_jwt_1 = require("angular2-jwt/angular2-jwt");
var ShipperServices = (function () {
    function ShipperServices(_http) {
        this._http = _http;
        this.apiUrl = window.GlobalSettings.ApiBase + 'Shipper';
    }
    ShipperServices.prototype.GetById = function (id) {
        return this._http.get(this.apiUrl + "/GetApproveList/" + id).map(function (res) { return res.json(); });
    };
    ShipperServices.prototype.Approve = function (id) {
        return this._http.get(this.apiUrl + "/Approve/" + id).map(function (res) { return res.json(); });
    };
    ShipperServices.prototype.GetByStoreId = function (id) {
        return this._http.get(this.apiUrl + "/GetByStore/" + id).map(function (res) { return res.json(); });
    };
    ShipperServices.prototype.RejectShipper = function (id) {
        return this._http.get(this.apiUrl + "/Reject/" + id).map(function (res) { return res.json(); });
    };
    ShipperServices.prototype.Apply = function (data) {
        return this._http.post(this.apiUrl + "/Apply", data).map(function (res) { return res.json(); });
    };
    ShipperServices.prototype.IsShipper = function () {
        return this._http.get(this.apiUrl + "/IsShipper").map(function (res) { return res.json(); });
    };
    ShipperServices.prototype.IsApplied = function () {
        return this._http.get(this.apiUrl + "/IsApplied").map(function (res) { return res.json(); });
    };
    ShipperServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], ShipperServices);
    return ShipperServices;
}());
exports.ShipperServices = ShipperServices;

//# sourceMappingURL=shipper.service.js.map

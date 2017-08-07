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
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var PartnerService = (function () {
    function PartnerService(_http) {
        this._http = _http;
        this.apiUrl = window.GlobalSettings.ApiBase + 'Partner';
    }
    PartnerService.prototype.Apply = function (storeId) {
        return this._http.get(this.apiUrl + "/Apply/" + storeId).map(function (res) { return res.json(); });
    };
    PartnerService.prototype.GetList = function (storeId) {
        return this._http.get(this.apiUrl + "/GetList/" + storeId).map(function (res) { return res.json(); });
    };
    PartnerService.prototype.Approve = function (id) {
        return this._http.get(this.apiUrl + "/Approve/" + id).map(function (res) { return res.json(); });
    };
    PartnerService.prototype.IsApplied = function (id) {
        return this._http.get(this.apiUrl + "/IsApplied/" + id).map(function (res) { return res.json(); });
    };
    PartnerService.prototype.RemoveApply = function (id) {
        return this._http.get(this.apiUrl + "/RemoveApply/" + id).map(function (res) { return res.json(); });
    };
    PartnerService.prototype.RemovePartner = function (id) {
        return this._http.delete(this.apiUrl + "/" + id).map(function (res) { return res.json(); });
    };
    PartnerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], PartnerService);
    return PartnerService;
}());
exports.PartnerService = PartnerService;

//# sourceMappingURL=partner.service.js.map

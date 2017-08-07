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
var StoreServices = (function () {
    function StoreServices(_http) {
        this._http = _http;
        this.apiUrl = window.GlobalSettings.ApiBase + 'Store';
    }
    StoreServices.prototype.GetListStore = function (search) {
        return this._http.get(this.apiUrl + "/Search/" + search).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.GetStoreById = function (id) {
        return this._http.get(this.apiUrl + "/Get/" + id).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.GetStoreByUserId = function (id) {
        return this._http.get(this.apiUrl + "/GetByUserId/" + id).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.GetStoreByName = function (name) {
        return this._http.get(this.apiUrl + "/?storename=" + name).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.CreateStore = function (data) {
        return this._http.post(this.apiUrl, data).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.CheckOwner = function (storeId) {
        return this._http.get(this.apiUrl + "/IsOwner/" + storeId).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.CheckAllowance = function (storeId) {
        return this._http.get(this.apiUrl + "/GetAllowance/" + storeId).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.EditStore = function (data) {
        return this._http.put(this.apiUrl, data).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.RemoveStore = function (id) {
        return this._http.delete(this.apiUrl + "/" + id).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.Approve = function (id) {
        return this._http.get(this.apiUrl + "/Approve/" + id).map(function (res) { return res.json(); });
    };
    StoreServices.prototype.UpgradeStore = function (data) {
        return this._http.put(this.apiUrl + "/UpgradeStore", data).map(function (res) { return res.json(); });
    };
    StoreServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], StoreServices);
    return StoreServices;
}());
exports.StoreServices = StoreServices;

//# sourceMappingURL=store.service.js.map

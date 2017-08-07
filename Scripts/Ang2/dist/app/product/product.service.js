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
var ProductService = (function () {
    //private approveUrl = window.GlobalSetting.ApiBase + 'Approvement';
    function ProductService(_http) {
        this._http = _http;
        this.apiUrl = window.GlobalSettings.ApiBase + 'Product';
    }
    ProductService.prototype.GetList = function () {
        return this._http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    ProductService.prototype.AddProduct = function (data) {
        return this._http.post(this.apiUrl, data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.GetApproveList = function (id) {
        return this._http.get(this.apiUrl + "/ApproveList/" + id).map(function (res) { return res.json(); });
    };
    ProductService.prototype.Approve = function (id) {
        return this._http.put(this.apiUrl + "/Approvement", id).map(function (res) { return res.json(); });
    };
    ProductService.prototype.GetDetail = function (id) {
        return this._http.get(this.apiUrl + "/GetDetail/" + id).map(function (res) { return res.json(); });
    };
    ProductService.prototype.Edit = function (data) {
        return this._http.put(this.apiUrl + "/EditProduct", data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.GetByName = function (data) {
        return this._http.get(this.apiUrl + "/GetWithName/" + data).map(function (res) { return res.json(); });
    };
    ProductService.prototype.Delete = function (id) {
        return this._http.delete(this.apiUrl + "/" + id).map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;

//# sourceMappingURL=product.service.js.map

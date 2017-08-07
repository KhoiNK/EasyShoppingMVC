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
var OrderServices = (function () {
    function OrderServices(_http) {
        this._http = _http;
        this.apiUrl = window.GlobalSettings.ApiBase + 'Order';
    }
    OrderServices.prototype.AddToCart = function (data) {
        return this._http.post(this.apiUrl, data).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.GetOrderByUserId = function (pageIndex) {
        return this._http.get(this.apiUrl + "/GetByUser/" + pageIndex).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.GetByStore = function (id) {
        return this._http.get(this.apiUrl + "/GetByStore/" + id).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.GetDetail = function (id) {
        return this._http.get(this.apiUrl + "/GetDetail/" + id).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.GetOrderDetail = function (id) {
        return this._http.get(this.apiUrl + "/GetOrderDetail/" + id).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.ChangeQuantity = function (data) {
        return this._http.put(this.apiUrl + "/ChangeQuantity", data).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.CheckOut = function (data) {
        return this._http.put(this.apiUrl + "/CheckOut", data).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.GetByStatus = function (id) {
        return this._http.get(this.apiUrl + "/GetByStatus/" + id).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.RemoveItem = function (id) {
        return this._http.delete(this.apiUrl + "/RemoveItem/" + id).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.RemoveOrder = function (id) {
        return this._http.delete(this.apiUrl + "/RemoveOrder/" + id).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.AcceptOrder = function (id) {
        return this._http.get(this.apiUrl + "/AcceptOrder/" + id).map(function (res) { return res.json(); });
    };
    OrderServices.prototype.CancelOrder = function (id) {
        return this._http.get(this.apiUrl + "/CancelOrder/" + id).map(function (res) { return res.json(); });
    };
    OrderServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], OrderServices);
    return OrderServices;
}());
exports.OrderServices = OrderServices;

//# sourceMappingURL=order.service.js.map

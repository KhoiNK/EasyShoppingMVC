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
var UserServices = (function () {
    function UserServices(_http) {
        this._http = _http;
        this.apiUrl = window.GlobalSettings.ApiBase + 'User';
    }
    UserServices.prototype.GetUserList = function () {
        return this._http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    UserServices.prototype.GetUserByID = function (id) {
        return this._http.get(this.apiUrl + "/" + id).map(function (res) { return res.json(); });
    };
    UserServices.prototype.GetUser = function (username) {
        return this._http.get(this.apiUrl + "/?username=" + username).map(function (res) { return res.json(); });
    };
    UserServices.prototype.EditUser = function (data) {
        return this._http.put(this.apiUrl + data.ID, data).map(function (res) { return res.json(); });
    };
    UserServices.prototype.RemoveUser = function (id) {
        var delObv = this._http.delete(this.apiUrl + "/" + id);
        return delObv.map(function (res) { return res.status == 200; });
    };
    UserServices.prototype.GetUserDetail = function () {
        return this._http.get(this.apiUrl + "/GetUser/").map(function (res) { return res.json(); });
    };
    UserServices = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], UserServices);
    return UserServices;
}());
exports.UserServices = UserServices;

//# sourceMappingURL=user.service.js.map

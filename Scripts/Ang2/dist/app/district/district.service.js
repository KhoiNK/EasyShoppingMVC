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
var DistrictService = (function () {
    function DistrictService(_http) {
        this._http = _http;
        this.apiUrl = window.GlobalSettings.ApiBase + 'District';
    }
    DistrictService.prototype.GetAll = function () {
        return this._http.get(this.apiUrl).map(function (res) { return res.json(); });
    };
    DistrictService.prototype.GetById = function (id) {
        return this._http.get(this.apiUrl + "/" + id).map(function (res) { return res.json(); });
    };
    DistrictService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], DistrictService);
    return DistrictService;
}());
exports.DistrictService = DistrictService;

//# sourceMappingURL=district.service.js.map

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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var API_KEY = "AIzaSyCIzpyPuW4FjgRxhMnVBOSoq0j7uRNkl7Q";
var LoadLocationService = (function () {
    //ex: https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
    function LoadLocationService(_http) {
        this._http = _http;
        this.apirUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    }
    LoadLocationService.prototype.TrackLocation = function (address, district, city, country) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var result;
        var options = new http_1.RequestOptions({ headers: headers });
        var teststring = this.apirUrl + address + "," + district + "," + city + "," + country + "&key=" + API_KEY;
        this._http.get(this.apirUrl + address + "," + district + "," + city + "," + country + "&key=" + API_KEY, options).map(function (res) {
            res.json();
            result = res.json();
            console.log("result: " + result + "and " + res);
        });
        return result;
    };
    LoadLocationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoadLocationService);
    return LoadLocationService;
}());
exports.LoadLocationService = LoadLocationService;

//# sourceMappingURL=load-location.service.js.map

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
var country_service_1 = require("./country.service");
var GetListCountries = (function () {
    function GetListCountries(countryservice) {
        this.countryservice = countryservice;
    }
    GetListCountries.prototype.ngOnInit = function () {
        var _this = this;
        this.countryservice.GetCountryList().subscribe(function (response) {
            _this.countries = response;
        }, function (error) {
            console.log(error);
        });
    };
    GetListCountries = __decorate([
        core_1.Component({
            selector: 'country-list',
            templateUrl: '/Country',
            providers: [country_service_1.CountryServices]
        }),
        __metadata("design:paramtypes", [country_service_1.CountryServices])
    ], GetListCountries);
    return GetListCountries;
}());
exports.GetListCountries = GetListCountries;

//# sourceMappingURL=country-list.component.js.map

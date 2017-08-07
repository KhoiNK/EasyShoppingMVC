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
var store_service_1 = require("./store.service");
var router_1 = require("@angular/router");
var StoreListComponent = (function () {
    function StoreListComponent(storeservice, activatedRoute) {
        this.storeservice = storeservice;
        this.activatedRoute = activatedRoute;
    }
    StoreListComponent.prototype.LoadData = function () {
        var _this = this;
        this.storeservice.GetListStore(this.searchkey).subscribe(function (res) {
            _this.stores = res;
        }, function (error) {
            console.log(error);
        });
    };
    StoreListComponent = __decorate([
        core_1.Component({
            selector: 'store-list',
            templateUrl: '/Store',
            providers: [store_service_1.StoreServices]
        }),
        __metadata("design:paramtypes", [store_service_1.StoreServices, router_1.ActivatedRoute])
    ], StoreListComponent);
    return StoreListComponent;
}());
exports.StoreListComponent = StoreListComponent;

//# sourceMappingURL=store-list.component.js.map

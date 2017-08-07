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
var StoreApproveList = (function () {
    function StoreApproveList(storeService, router, el) {
        this.storeService = storeService;
        this.router = router;
        this.el = el;
        this.store = {};
    }
    StoreApproveList.prototype.SearchStore = function () {
        var _this = this;
        if (this.searchkey != 0) {
            this.storeService.GetStoreById(this.searchkey).subscribe(function (res) {
                _this.store = res;
            }, function (err) {
                var inputEl = _this.el.nativeElement.querySelector('#errorMess');
                inputEl.removeAttribute('hidden');
                console.log(err);
            });
        }
    };
    StoreApproveList.prototype.Approve = function (id) {
        var _this = this;
        this.storeService.Approve(id).subscribe(function (res) {
            if (res == true) {
                var inputEl = _this.el.nativeElement.querySelector('#approveMess');
                inputEl.removeAttribute('hidden');
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            }
        }, function (err) {
            console.log(err);
        });
    };
    StoreApproveList = __decorate([
        core_1.Component({
            selector: 'store-approve-list',
            templateUrl: 'Store/ApproveList',
            providers: [store_service_1.StoreServices]
        }),
        __metadata("design:paramtypes", [store_service_1.StoreServices, router_1.Router, core_1.ElementRef])
    ], StoreApproveList);
    return StoreApproveList;
}());
exports.StoreApproveList = StoreApproveList;

//# sourceMappingURL=store-approve-list.component.js.map

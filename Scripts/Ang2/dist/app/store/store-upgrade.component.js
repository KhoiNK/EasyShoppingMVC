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
var router_1 = require("@angular/router");
var store_service_1 = require("./store.service");
var StoreUpgradeComponent = (function () {
    function StoreUpgradeComponent(storeSrv, el, activatedRoute) {
        this.storeSrv = storeSrv;
        this.el = el;
        this.activatedRoute = activatedRoute;
        this.store = {};
        this.package = {};
    }
    StoreUpgradeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subcription = this.activatedRoute.params.subscribe(function (params) {
            _this.storeId = params['id'];
        });
        this.LoadStore();
    };
    StoreUpgradeComponent.prototype.LoadStore = function () {
        var _this = this;
        this.storeSrv.GetStoreById(this.storeId).subscribe(function (res) {
            _this.store = res;
        }, function (err) {
            console.log(err);
        });
    };
    StoreUpgradeComponent.prototype.Purchase = function (id) {
        var _this = this;
        this.package.ObjectID = this.storeId;
        this.package.PackageID = id;
        this.storeSrv.UpgradeStore(this.package).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Purchased successfully!");
                setTimeout(function () {
                    window.location.reload();
                }, 2000);
            }
        }, function (err) {
            _this.SetErrMessage("Purchased failed!");
            setTimeout(function () {
                window.location.reload();
            }, 2000);
            console.log(err);
        });
    };
    StoreUpgradeComponent.prototype.SetMessage = function (mess) {
        var inputEl = this.el.nativeElement.querySelector('#succMess');
        inputEl.removeAttribute('hidden');
        this.message = mess;
        setTimeout(function () {
            inputEl.hidden = true;
        }, 3000);
    };
    StoreUpgradeComponent.prototype.SetErrMessage = function (mess) {
        var inputEl = this.el.nativeElement.querySelector('#errMess');
        inputEl.removeAttribute('hidden');
        this.message = mess;
        setTimeout(function () {
            inputEl.hidden = true;
        }, 3000);
    };
    StoreUpgradeComponent.prototype.ngOnDestroy = function () {
        this.subcription.unsubscribe();
    };
    StoreUpgradeComponent = __decorate([
        core_1.Component({
            selector: 'store-upgrade',
            templateUrl: 'Store/UpgradeStore',
            providers: [store_service_1.StoreServices]
        }),
        __metadata("design:paramtypes", [store_service_1.StoreServices, core_1.ElementRef, router_1.ActivatedRoute])
    ], StoreUpgradeComponent);
    return StoreUpgradeComponent;
}());
exports.StoreUpgradeComponent = StoreUpgradeComponent;

//# sourceMappingURL=store-upgrade.component.js.map

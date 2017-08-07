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
var shipper_service_1 = require("./shipper.service");
var order_service_1 = require("../order/order.service");
var global_observable_service_1 = require("../global-observable.service");
var ShipperGetByStoreComponent = (function () {
    function ShipperGetByStoreComponent(shipperSrvc, activateRoute, router, orderSrv, el, gloSrv) {
        this.shipperSrvc = shipperSrvc;
        this.activateRoute = activateRoute;
        this.router = router;
        this.orderSrv = orderSrv;
        this.el = el;
        this.gloSrv = gloSrv;
        this.message = "";
    }
    ;
    ShipperGetByStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.storeid = params['id'];
        });
        this.LoadData();
        this.LoadOrder();
        this.gloSrv.GetLoad().subscribe(function (res) {
            if (res == true) {
                _this.LoadData();
                _this.LoadOrder();
                _this.gloSrv.ClearLoadPage();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ShipperGetByStoreComponent.prototype.LoadData = function () {
        var _this = this;
        this.shipperSrvc.GetByStoreId(this.storeid).subscribe(function (res) {
            _this.shippers = res;
        }, function (err) {
            console.log(err);
        });
    };
    ShipperGetByStoreComponent.prototype.LoadOrder = function () {
        var _this = this;
        this.orderSrv.GetByStore(this.storeid).subscribe(function (res) {
            _this.orders = res;
        }, function (err) {
            console.log(err);
        });
    };
    ShipperGetByStoreComponent.prototype.RejectShipper = function (id) {
        var _this = this;
        this.shipperSrvc.RejectShipper(id).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Rejected Successfully!");
                _this.LoadData();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ShipperGetByStoreComponent.prototype.SetMessage = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#succMess');
        this.message = mess;
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 1000);
    };
    ShipperGetByStoreComponent.prototype.SetErrMess = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#errMess');
        this.message = mess;
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 5000);
    };
    ShipperGetByStoreComponent.prototype.CancelOrder = function (id) {
        var _this = this;
        this.orderSrv.CancelOrder(id).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Canceled successfully!");
                _this.LoadOrder();
                _this.gloSrv.SetLoadPage();
            }
        }, function (err) {
            _this.SetErrMess("Cancelled failed");
            console.log(err);
        });
    };
    ShipperGetByStoreComponent.prototype.AcceptOrder = function (id) {
        var _this = this;
        this.orderSrv.AcceptOrder(id).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Approved successfully!");
                _this.LoadOrder();
                _this.gloSrv.SetLoadPage();
            }
        }, function (err) {
            console.log(err);
            _this.SetErrMess("Accepted failed");
        });
    };
    ShipperGetByStoreComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ShipperGetByStoreComponent = __decorate([
        core_1.Component({
            selector: 'shipper-getbystore',
            templateUrl: 'Shipper/GetByStore',
            providers: [shipper_service_1.ShipperServices, order_service_1.OrderServices]
        }),
        __metadata("design:paramtypes", [shipper_service_1.ShipperServices,
            router_1.ActivatedRoute,
            router_1.Router,
            order_service_1.OrderServices,
            core_1.ElementRef,
            global_observable_service_1.GlobalService])
    ], ShipperGetByStoreComponent);
    return ShipperGetByStoreComponent;
}());
exports.ShipperGetByStoreComponent = ShipperGetByStoreComponent;

//# sourceMappingURL=shipper-getbystoreId.component.js.map

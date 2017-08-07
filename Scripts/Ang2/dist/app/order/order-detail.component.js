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
var order_service_1 = require("./order.service");
var router_1 = require("@angular/router");
var global_observable_service_1 = require("../global-observable.service");
var OrderDetailComponent = (function () {
    function OrderDetailComponent(orderService, activateRoute, el, gloSrv) {
        this.orderService = orderService;
        this.activateRoute = activateRoute;
        this.el = el;
        this.gloSrv = gloSrv;
        this.Math = Math;
        this.data = {};
        this.order = {};
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.orderService.GetDetail(this.id).subscribe(function (res) {
            _this.order = res;
        }, function (err) {
            console.log(err);
        });
        this.LoadData(this.id);
        //.subscribe(country => this.country = country);
        this.subscription = this.gloSrv.GetLoad().subscribe(function (res) {
            if (res == true) {
                _this.LoadData(_this.id);
                _this.gloSrv.ClearLoadPage();
            }
        }, function (err) {
            console.log();
        });
    };
    OrderDetailComponent.prototype.LoadData = function (id) {
        var _this = this;
        this.orderService.GetOrderDetail(id).subscribe(function (res) {
            _this.details = res;
        }, function (err) {
            console.log(err);
        });
    };
    OrderDetailComponent.prototype.ChangeQuantity = function (id) {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector("#item" + id);
        var quantity = inputEl.value;
        this.data.ID = id;
        this.data.Quantity = quantity;
        this.orderService.ChangeQuantity(this.data).subscribe(function (res) {
            if (res == true) {
                _this.message = "Changed successfully!";
            }
            else {
                _this.message = "Changed failed!";
            }
        });
        return;
    };
    OrderDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    OrderDetailComponent = __decorate([
        core_1.Component({
            selector: 'order-detail',
            templateUrl: 'Order/OrderDetail',
            providers: [order_service_1.OrderServices]
        }),
        __metadata("design:paramtypes", [order_service_1.OrderServices,
            router_1.ActivatedRoute,
            core_1.ElementRef,
            global_observable_service_1.GlobalService])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;

//# sourceMappingURL=order-detail.component.js.map

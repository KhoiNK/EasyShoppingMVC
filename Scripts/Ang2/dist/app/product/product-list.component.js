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
var product_service_1 = require("./product.service");
var order_service_1 = require("../order/order.service");
var global_observable_service_1 = require("../global-observable.service");
var product_type_service_1 = require("./product-type.service");
var ProductListComponent = (function () {
    function ProductListComponent(productservice, orderService, globalSrv, productTypeSrv, el, router) {
        this.productservice = productservice;
        this.orderService = orderService;
        this.globalSrv = globalSrv;
        this.productTypeSrv = productTypeSrv;
        this.el = el;
        this.router = router;
        this.CART = "cart";
        this.PROFILE = 'profile';
        this.message = "";
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    ProductListComponent.prototype.loadData = function () {
        var _this = this;
        this.productservice.GetList().subscribe(function (res) {
            _this.products = res;
        }, function (err) {
            console.log(err);
        });
        this.productTypeSrv.GetList().subscribe(function (res) {
            _this.types = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.AddToCart = function (productId) {
        var _this = this;
        if (localStorage.getItem(this.PROFILE) == {}) {
            alert("please login first!");
            event.preventDefault();
        }
        else {
            var order = {};
            var cartId = localStorage.getItem(this.CART);
            if (cartId == null) {
                order.productId = productId;
                this.orderService.AddToCart(order).subscribe(function (res) {
                    localStorage.setItem(_this.CART, JSON.stringify(res.ID));
                    _this.SetMessage();
                }, function (err) {
                    _this.SetErrMess("Please login first");
                    setTimeout(function () {
                        _this.router.navigate(['/login']);
                    }, 3000);
                    console.log(err);
                });
            }
            else {
                order.productId = productId;
                order.cartId = cartId;
                this.orderService.AddToCart(order).subscribe(function (res) {
                    if (JSON.stringify(res) == 'true') {
                        _this.SetMessage();
                    }
                }, function (err) {
                    _this.SetErrMess("Added failed");
                    console.log(err);
                });
            }
        }
    };
    ProductListComponent.prototype.SetMessage = function () {
        var inputel = this.el.nativeElement.querySelector('#cartMess');
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 1000);
    };
    ProductListComponent.prototype.SetErrMess = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#errMess');
        this.message = mess;
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 5000);
    };
    ProductListComponent.prototype.LoadWithName = function (name) {
        var _this = this;
        this.productservice.GetByName(name).subscribe(function (res) {
            _this.products = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            templateUrl: '/Product',
            providers: [product_service_1.ProductService, order_service_1.OrderServices, global_observable_service_1.GlobalService, product_type_service_1.ProductTypeService]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            order_service_1.OrderServices,
            global_observable_service_1.GlobalService,
            product_type_service_1.ProductTypeService,
            core_1.ElementRef,
            router_1.Router])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;

//# sourceMappingURL=product-list.component.js.map

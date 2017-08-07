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
var product_service_1 = require("./product.service");
var router_1 = require("@angular/router");
var order_service_1 = require("../order/order.service");
var product_type_service_1 = require("./product-type.service");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, activatedRoute, orderService, el, productTypeSrv) {
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.el = el;
        this.productTypeSrv = productTypeSrv;
        this.CART = "cart";
        this.PROFILE = 'profile';
        this.message = "";
        this.product = {};
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.GetData();
    };
    ProductDetailComponent.prototype.AddToCart = function (productId) {
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
    ProductDetailComponent.prototype.SetMessage = function () {
        var inputel = this.el.nativeElement.querySelector('#cartMess');
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 1000);
    };
    ProductDetailComponent.prototype.SetErrMess = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#errMess');
        this.message = mess;
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 5000);
    };
    ProductDetailComponent.prototype.GetData = function () {
        var _this = this;
        this.productService.GetDetail(this.id).subscribe(function (res) {
            if (res.ID) {
                _this.product = res;
                _this.GetSameData("" + _this.product.Name);
            }
        }, function (err) {
            console.log(err);
        });
        this.productTypeSrv.GetList().subscribe(function (res) {
            _this.types = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProductDetailComponent.prototype.GetSameData = function (name) {
        var _this = this;
        this.productService.GetByName(name).subscribe(function (res) {
            if (res) {
                _this.sameproducts = res;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'product-detail',
            templateUrl: 'Product/ProductDetail',
            providers: [product_service_1.ProductService, order_service_1.OrderServices, product_type_service_1.ProductTypeService]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute,
            order_service_1.OrderServices,
            core_1.ElementRef,
            product_type_service_1.ProductTypeService])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;

//# sourceMappingURL=product-detail.component.js.map

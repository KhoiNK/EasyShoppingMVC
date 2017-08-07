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
var order_service_1 = require("../order/order.service");
var partner_service_1 = require("../partner/partner.service");
var product_service_1 = require("../product/product.service");
var product_type_service_1 = require("../product/product-type.service");
var StoreDetailComponent = (function () {
    function StoreDetailComponent(storeservice, activatedRoute, orderService, partnerService, router, productservice, el, productTypeSrv) {
        this.storeservice = storeservice;
        this.activatedRoute = activatedRoute;
        this.orderService = orderService;
        this.partnerService = partnerService;
        this.router = router;
        this.productservice = productservice;
        this.el = el;
        this.productTypeSrv = productTypeSrv;
        this.CART = "cart";
        this.isOwner = false;
        this.isAllowed = false;
        this.isApplied = false;
        this.command = "";
        this.message = "";
        this.tempId = 0;
        this.store = {};
    }
    StoreDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.LoadData(this.id);
        this.storeservice.CheckAllowance(this.id).subscribe(function (res) {
            if (res == true) {
                _this.isAllowed = true;
            }
        }, function (err) {
            console.log(err);
        });
        this.storeservice.CheckOwner(this.id).subscribe(function (res) {
            if (res == true == true) {
                _this.isOwner = true;
            }
        }, function (err) {
            console.log(err);
        });
        this.partnerService.IsApplied(this.id).subscribe(function (res) {
            _this.isApplied = res;
        }, function (err) {
            console.log(err);
        });
    };
    StoreDetailComponent.prototype.Apply = function () {
        var _this = this;
        this.partnerService.Apply(this.store.ID).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Applied successfully!");
                window.location.reload();
            }
        }, function (err) {
            console.log(err);
        });
    };
    StoreDetailComponent.prototype.SetCommand = function (command, id) {
        this.command = command;
        this.tempId = id;
    };
    StoreDetailComponent.prototype.LoadData = function (id) {
        var _this = this;
        this.storeservice.GetStoreById(id)
            .subscribe(function (res) {
            return _this.store = res;
        }, function (err) {
            console.log(err);
        });
        this.productTypeSrv.GetList().subscribe(function (res) {
            _this.types = res;
        }, function (err) {
            console.log(err);
        });
    };
    StoreDetailComponent.prototype.AddToCart = function (productId) {
        var _this = this;
        var order = {};
        var cartId = localStorage.getItem(this.CART);
        if (cartId == null) {
            order.productId = productId;
            this.orderService.AddToCart(order).subscribe(function (res) {
                localStorage.setItem(_this.CART, JSON.stringify(res.ID));
                _this.SetMessage("Added successfully!");
            }, function (err) {
                console.log(err);
            });
        }
        else {
            order.productId = productId;
            order.cartId = cartId;
            this.orderService.AddToCart(order).subscribe(function (res) {
                if (JSON.stringify(res) == 'true') {
                    _this.SetMessage("Added successfully!");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    StoreDetailComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    StoreDetailComponent.prototype.SetRecruitment = function () {
        var _this = this;
        this.store.IsRecruiting = true;
        this.storeservice.EditStore(this.store).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Edited successfully!");
                window.location.reload();
            }
        }, function (err) {
            console.log(err);
        });
    };
    StoreDetailComponent.prototype.DisableRecruitment = function () {
        var _this = this;
        this.store.IsRecruiting = false;
        this.storeservice.EditStore(this.store).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Edited successfully!");
                window.location.reload();
            }
        }, function (err) {
            console.log(err);
        });
    };
    StoreDetailComponent.prototype.Remove = function () {
        var _this = this;
        if (this.command == "product") {
            this.productservice.Delete(this.tempId).subscribe(function (res) {
                if (res == true) {
                    _this.SetMessage("Removed successfully!");
                    _this.LoadData(_this.id);
                }
                else {
                    _this.SetMessage("Removed failed!");
                    _this.LoadData(_this.id);
                }
            }, function (err) {
                console.log(err);
            });
        }
        if (this.command == "store") {
            this.storeservice.RemoveStore(this.tempId).subscribe(function (res) {
                if (res == true) {
                    _this.SetMessage("Removed successfully!");
                    _this.router.navigate(['/']);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    StoreDetailComponent.prototype.RemoveApply = function () {
        var _this = this;
        this.partnerService.RemoveApply(this.id).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Removed successful!");
                setTimeout(function () {
                    window.location.reload();
                }, 1000);
            }
            else {
                alert("remove failed!");
            }
        }, function (err) {
            console.log(err);
        });
    };
    StoreDetailComponent.prototype.SetMessage = function (mess) {
        this.message = mess;
        var inputEl = this.el.nativeElement.querySelector('#storeMess');
        inputEl.removeAttribute('hidden');
        setTimeout(function () {
            inputEl.hidden = true;
        }, 1000);
    };
    StoreDetailComponent = __decorate([
        core_1.Component({
            selector: 'store-detail',
            templateUrl: 'Store/StoreDetail',
            providers: [
                store_service_1.StoreServices,
                order_service_1.OrderServices,
                partner_service_1.PartnerService,
                product_service_1.ProductService,
                product_type_service_1.ProductTypeService
            ]
        }),
        __metadata("design:paramtypes", [store_service_1.StoreServices,
            router_1.ActivatedRoute,
            order_service_1.OrderServices,
            partner_service_1.PartnerService,
            router_1.Router,
            product_service_1.ProductService,
            core_1.ElementRef,
            product_type_service_1.ProductTypeService])
    ], StoreDetailComponent);
    return StoreDetailComponent;
}());
exports.StoreDetailComponent = StoreDetailComponent;

//# sourceMappingURL=store-detail.component.js.map

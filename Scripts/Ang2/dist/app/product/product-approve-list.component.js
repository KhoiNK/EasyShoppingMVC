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
var approve_product_service_1 = require("../approvement/approve-product.service");
var store_service_1 = require("../store/store.service");
var ProductApproveListComponent = (function () {
    function ProductApproveListComponent(productService, router, activateRoute, approveSrv, storeservice, el) {
        this.productService = productService;
        this.router = router;
        this.activateRoute = activateRoute;
        this.approveSrv = approveSrv;
        this.storeservice = storeservice;
        this.el = el;
        this.isAllowed = false;
        this.isOwner = false;
    }
    ProductApproveListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRoute.params.subscribe(function (params) {
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
    };
    ProductApproveListComponent.prototype.LoadData = function (id) {
        var _this = this;
        this.productService.GetApproveList(id).subscribe(function (res) {
            _this.products = res;
        }, function (err) {
            console.log(err);
        });
    };
    ProductApproveListComponent.prototype.Approve = function (id) {
        var _this = this;
        this.approveSrv.ApproveProduct(id).subscribe(function (res) {
            if (res == true) {
                alert("Approve successfully!");
                _this.LoadData(_this.id);
            }
            else {
                alert("Approvement failed!");
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProductApproveListComponent.prototype.SetMessage = function () {
        var inputel = this.el.nativeElement.querySelector('#succMess');
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 1000);
    };
    ProductApproveListComponent.prototype.SetErrMess = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#errMess');
        this.message = mess;
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 5000);
    };
    ProductApproveListComponent = __decorate([
        core_1.Component({
            selector: 'product-approve-list',
            templateUrl: "/Product/ApproveList",
            providers: [product_service_1.ProductService, approve_product_service_1.ApprovementServices, store_service_1.StoreServices]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.Router,
            router_1.ActivatedRoute,
            approve_product_service_1.ApprovementServices,
            store_service_1.StoreServices,
            core_1.ElementRef])
    ], ProductApproveListComponent);
    return ProductApproveListComponent;
}());
exports.ProductApproveListComponent = ProductApproveListComponent;

//# sourceMappingURL=product-approve-list.component.js.map

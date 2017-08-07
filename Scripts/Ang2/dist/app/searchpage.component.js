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
var product_service_1 = require("../app/product/product.service");
var store_service_1 = require("../app/store/store.service");
var SearchPageComponent = (function () {
    function SearchPageComponent(productservice, activateRoute, storeservice, router) {
        this.productservice = productservice;
        this.activateRoute = activateRoute;
        this.storeservice = storeservice;
        this.router = router;
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.searchname = params['searchname'];
            _this.LoadProduct(_this.searchname);
            _this.LoadStore(_this.searchname);
        });
    };
    SearchPageComponent.prototype.LoadProduct = function (name) {
        var _this = this;
        name = this.searchname;
        this.productservice.GetByName(name).subscribe(function (res) {
            if (res) {
                _this.products = res;
            }
            else {
                _this.products = [];
            }
        }, function (err) {
            console.log(err);
        });
    };
    SearchPageComponent.prototype.LoadStore = function (name) {
        var _this = this;
        name = this.searchname;
        this.storeservice.GetListStore(name).subscribe(function (res) {
            if (res) {
                _this.stores = res;
            }
            else {
                _this.stores = [];
            }
        }, function (err) {
            console.log(err);
        });
    };
    SearchPageComponent = __decorate([
        core_1.Component({
            selector: 'my-searchpage',
            templateUrl: '/Home/SearchPage',
            providers: [product_service_1.ProductService, store_service_1.StoreServices]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute,
            store_service_1.StoreServices,
            router_1.Router])
    ], SearchPageComponent);
    return SearchPageComponent;
}());
exports.SearchPageComponent = SearchPageComponent;

//# sourceMappingURL=searchpage.component.js.map

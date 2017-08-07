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
var country_service_1 = require("../country/country.service");
var product_type_service_1 = require("./product-type.service");
var base64Encode_service_1 = require("../upload/base64Encode.service");
var upload_image_service_1 = require("../upload/upload-image.service");
var ProductEditComponent = (function () {
    function ProductEditComponent(productservice, activateRoute, router, uploadservice, countryService, productTypeService, el, b64) {
        this.productservice = productservice;
        this.activateRoute = activateRoute;
        this.router = router;
        this.uploadservice = uploadservice;
        this.countryService = countryService;
        this.productTypeService = productTypeService;
        this.el = el;
        this.b64 = b64;
        this.message = "";
        this.product = {};
    }
    ;
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.GetCountryList().subscribe(function (res) { return _this.countries = res; });
        this.productTypeService.GetList().subscribe(function (res) { return _this.types = res; });
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.productservice.GetDetail(this.id).subscribe(function (res) {
            if (res.ID) {
                _this.product = res;
            }
            else {
                alert("Cannot find this product");
            }
        }, function (err) {
            alert("Cannot find this product");
        });
    };
    ProductEditComponent.prototype.setB64 = function () {
        var inputEl = this.el.nativeElement.querySelector('#photo');
        var file = inputEl.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        console.log(this);
        reader.readAsBinaryString(file);
    };
    ProductEditComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.b64String = btoa(binaryString);
        //console.log(btoa(binaryString));
    };
    ProductEditComponent.prototype.SaveChange = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#photo');
        if (inputEl.files.length > 0) {
            var file = inputEl.files[0];
            return new Promise(function (resolve) {
                resolve(_this.setB64());
            }).then(function (result) {
                _this.uploadservice.UploadImage(_this.b64String).subscribe(function (res) {
                    _this.product.ThumbailLink = res.data.link;
                    _this.product.ThumbailCode = res.data.id;
                    _this.EditProduct(_this.product);
                }, function (err) {
                    alert("Your uploaded file is wrong format");
                    return false;
                });
            }, function (err) {
                console.log(err);
            }).catch(function (err) { return console.log(err); });
            //let thumbailImg: string = this.b64.GetB64(file);
        }
        else {
            this.EditProduct(this.product);
        }
    };
    ProductEditComponent.prototype.EditProduct = function (product) {
        var _this = this;
        this.productservice.Edit(product).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage();
                setTimeout(function (result) {
                    _this.router.navigate(['/stores/store-detail/' + product.StoreID]);
                }, 3000);
            }
        }, function (err) {
            _this.SetErrMess("Added failed");
            console.log(err);
        });
    };
    ProductEditComponent.prototype.SetMessage = function () {
        var inputel = this.el.nativeElement.querySelector('#succMess');
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 1000);
    };
    ProductEditComponent.prototype.SetErrMess = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#errMess');
        this.message = mess;
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 5000);
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductEditComponent = __decorate([
        core_1.Component({
            selector: 'product-add',
            templateUrl: 'Product/Edit',
            providers: [product_service_1.ProductService, upload_image_service_1.UploadService, country_service_1.CountryServices, product_type_service_1.ProductTypeService, base64Encode_service_1.Base64EncodeService]
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService,
            router_1.ActivatedRoute,
            router_1.Router,
            upload_image_service_1.UploadService,
            country_service_1.CountryServices,
            product_type_service_1.ProductTypeService,
            core_1.ElementRef,
            base64Encode_service_1.Base64EncodeService])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;

//# sourceMappingURL=product-edit.component.js.map

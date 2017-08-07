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
var upload_image_service_1 = require("../upload/upload-image.service");
var country_service_1 = require("../country/country.service");
var product_type_service_1 = require("./product-type.service");
var base64Encode_service_1 = require("../upload/base64Encode.service");
//import { FirebaseService } from '../firebase/firebase.service';
//import { Upload } from '../firebase/Upload';
var ProductAddComponent = (function () {
    function ProductAddComponent(productservice, activateRoute, router, uploadservice, countryService, productTypeService, el, b64) {
        this.productservice = productservice;
        this.activateRoute = activateRoute;
        this.router = router;
        this.uploadservice = uploadservice;
        this.countryService = countryService;
        this.productTypeService = productTypeService;
        this.el = el;
        this.b64 = b64;
        this.productType = "";
        this.product = {};
    }
    ;
    ProductAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countryService.GetCountryList().subscribe(function (res) { return _this.countries = res; });
        this.productTypeService.GetList().subscribe(function (res) { return _this.types = res; });
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.storeId = params['storeId'];
        });
    };
    ProductAddComponent.prototype.setCountryId = function (countryid) {
        this.product.ManufacturedCountryID = countryid;
    };
    ProductAddComponent.prototype.SetType = function () {
        var _this = this;
        this.productType = this.types.filter(function (x) { return x.ID == _this.product.ProductTypeID; })[0].Name;
    };
    ProductAddComponent.prototype.setThumbailImg = function () {
        var inputEl = this.el.nativeElement.querySelector('#photo');
        var file = inputEl.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    };
    ProductAddComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        var inputEl = this.el.nativeElement.querySelector('#previewImg');
        inputEl.setAttribute('src', "data:image/jpeg;base64," + btoa(binaryString));
        this.thumbailImg = btoa(binaryString);
        //console.log(btoa(binaryString));
    };
    ProductAddComponent.prototype.saveProduct = function () {
        var _this = this;
        this.product.StoreID = this.storeId;
        var inputEl = this.el.nativeElement.querySelector('#photo');
        if (inputEl.files[0] == null) {
            alert("Add image please!");
            return false;
        }
        if (inputEl.files.length > 0) {
            var file = inputEl.files[0];
            this.uploadservice.UploadImage(this.thumbailImg).subscribe(function (res) {
                _this.product.ThumbailLink = res.data.link;
                _this.product.ThumbailCode = res.data.id;
                _this.AddProduct(_this.product);
            }, function (err) {
                return false;
            });
        }
        else {
            this.AddProduct(this.product);
        }
    };
    ProductAddComponent.prototype.AddProduct = function (product) {
        var _this = this;
        this.productservice.AddProduct(product).subscribe(function (res) {
            if (res.ID) {
                _this.SetMessage();
                setTimeout(function () {
                    _this.router.navigate(['/stores/store-detail/' + product.StoreID]);
                }, 3000);
            }
        }, function (err) {
            _this.SetErrMess("Added failed");
            console.log(err);
        });
    };
    ProductAddComponent.prototype.SetMessage = function () {
        var inputel = this.el.nativeElement.querySelector('#succMess');
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 1000);
    };
    ProductAddComponent.prototype.SetErrMess = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#errMess');
        this.message = mess;
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 5000);
    };
    ProductAddComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ProductAddComponent = __decorate([
        core_1.Component({
            selector: 'product-add',
            templateUrl: 'Product/AddProduct',
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
    ], ProductAddComponent);
    return ProductAddComponent;
}());
exports.ProductAddComponent = ProductAddComponent;

//# sourceMappingURL=product-add.component.js.map

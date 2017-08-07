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
var upload_image_service_1 = require("../upload/upload-image.service");
var forms_1 = require("@angular/forms");
var base64Encode_service_1 = require("../upload/base64Encode.service");
var core_2 = require("angular2-google-maps/core");
var StoreAddComponent = (function () {
    function StoreAddComponent(storeService, uploadService, el, b64, router, mapsAPILoader, ngZone) {
        this.storeService = storeService;
        this.uploadService = uploadService;
        this.el = el;
        this.b64 = b64;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.store = {};
        //this.location = {};
    }
    StoreAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new forms_1.FormControl();
        //set current position
        this.setCurrentPosition();
        //load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.address = place.formatted_address;
                    _this.position = place.address_components;
                    _this.zoom = 12;
                });
            });
        });
    };
    StoreAddComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    StoreAddComponent.prototype.setThumbailImg = function () {
        var inputEl = this.el.nativeElement.querySelector('#photo');
        var file = inputEl.files[0];
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    };
    StoreAddComponent.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        var inputEl = this.el.nativeElement.querySelector('#previewImg');
        inputEl.setAttribute('src', "data:image/jpeg;base64," + btoa(binaryString));
        this.thumbailImg = btoa(binaryString);
        //console.log(btoa(binaryString));
    };
    StoreAddComponent.prototype.SaveChange = function () {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector('#photo');
        var file = inputEl.files[0];
        this.store.Address = this.address;
        this.store.LatX = this.latitude;
        this.store.LatY = this.longitude;
        this.position.forEach(function (component) {
            if (component.types[0] == 'administrative_area_level_2') {
                _this.store.District = component.long_name;
            }
            if (component.types[0] == 'administrative_area_level_1') {
                _this.store.City = component.long_name;
            }
            if (component.types[0] == 'country') {
                _this.store.Country = component.short_name;
            }
        });
        if (file == null) {
            this.CreateStore(this.store);
        }
        if (file != null) {
            this.uploadService.UploadImage(this.thumbailImg).subscribe(function (res) {
                _this.store.ImgLink = res.data.link;
                _this.CreateStore(_this.store);
            }, function (err) {
                console.log(err);
            });
        }
    };
    StoreAddComponent.prototype.CreateStore = function (store) {
        var _this = this;
        this.storeService.CreateStore(store).subscribe(function (res) {
            if (res == null) {
                var inputEl_1 = _this.el.nativeElement.querySelector('#storeMess');
                inputEl_1.removeAttribute('hidden');
                setTimeout(function () {
                    inputEl_1.hidden == true;
                }, 1000);
            }
            if (res.ID) {
                alert("Added Successfully!");
                _this.store = res;
                var inputEl = _this.el.nativeElement.querySelector('#modalClick');
                inputEl.click();
                //setTimeout(() => {
                //    this.router.navigate[''];
                //}, 20000);
            }
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], StoreAddComponent.prototype, "searchElementRef", void 0);
    StoreAddComponent = __decorate([
        core_1.Component({
            selector: 'store-add',
            templateUrl: 'Store/AddStore',
            providers: [store_service_1.StoreServices, upload_image_service_1.UploadService, base64Encode_service_1.Base64EncodeService]
        }),
        __metadata("design:paramtypes", [store_service_1.StoreServices,
            upload_image_service_1.UploadService,
            core_1.ElementRef,
            base64Encode_service_1.Base64EncodeService,
            router_1.Router,
            core_2.MapsAPILoader,
            core_1.NgZone])
    ], StoreAddComponent);
    return StoreAddComponent;
}());
exports.StoreAddComponent = StoreAddComponent;

//# sourceMappingURL=store-add.component.js.map

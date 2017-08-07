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
var forms_1 = require("@angular/forms");
var core_2 = require("angular2-google-maps/core");
var user_service_1 = require("../user/user.service");
var global_observable_service_1 = require("../global-observable.service");
var CART = "cart";
var CheckOutComponent = (function () {
    function CheckOutComponent(orderService, activateRoute, el, router, mapsAPILoader, ngZone, userSrv, gloSrv) {
        this.orderService = orderService;
        this.activateRoute = activateRoute;
        this.el = el;
        this.router = router;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.userSrv = userSrv;
        this.gloSrv = gloSrv;
        this.shippingfee = 0;
        this.total = 0;
        this.flag = false;
        this.message = "";
        this.order = {};
        this.user = {};
    }
    CheckOutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.LoadData(this.id);
        //set google maps defaults
        this.zoom = 4;
        this.latitude = 39.8282;
        this.longitude = -98.5795;
        //create search FormControl
        this.searchControl = new forms_1.FormControl();
        //set current position
        //this.setCurrentPosition();
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
                    _this.address = place.formatted_address;
                    var places = place.address_components;
                    _this.setPosition(place.address_components);
                    _this.zoom = 12;
                });
            });
        });
        //this.setCurrentPosition();
        //.subscribe(country => this.country = country);
    };
    CheckOutComponent.prototype.TurnFlag = function () {
        this.flag = !this.flag;
    };
    CheckOutComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    CheckOutComponent.prototype.setPosition = function (place) {
        this.location = place;
    };
    CheckOutComponent.prototype.LoadData = function (id) {
        var _this = this;
        this.orderService.GetDetail(id).subscribe(function (res) {
            _this.order = res;
            var details = _this.order.details;
            var weight = 0;
            details.forEach(function (item) {
                _this.total = _this.total + (+item.Price * +item.Quantity);
                weight = weight + (+item.Weight * +item.Quantity);
            });
            _this.shippingfee = 50 * weight;
            _this.total = _this.total + _this.shippingfee;
            //load Places Autocomplete
            _this.searchElementRef.nativeElement.value = res.Address;
        }, function (err) {
            console.log(err);
        });
        this.userSrv.GetUserDetail().subscribe(function (res) {
            _this.user = res;
        }, function (err) {
            console.log(err);
        });
    };
    CheckOutComponent.prototype.SaveChange = function () {
        var _this = this;
        if (this.flag == true) {
            this.order.Address = this.address;
            this.location.forEach(function (component) {
                if (component.types[0] == 'administrative_area_level_2') {
                    _this.order.District = component.long_name;
                }
                if (component.types[0] == 'administrative_area_level_1') {
                    _this.order.City = component.long_name;
                }
                if (component.types[0] == 'country') {
                    _this.order.Country = component.short_name;
                }
            });
        }
        else {
            this.order.Address = this.user.Address;
            this.order.District = this.user.District;
            this.order.City = this.user.City;
            this.order.Country = this.user.Country;
        }
        this.CheckOut(this.order);
    };
    CheckOutComponent.prototype.CheckOut = function (order) {
        var _this = this;
        this.order.Note = this.note + "Phone:" + this.phone;
        this.orderService.CheckOut(order).subscribe(function (res) {
            if (res == true) {
                localStorage.removeItem(CART);
                _this.SetMessage("Checked out successfully!");
                _this.gloSrv.SetLoadPage();
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 3000);
            }
            else {
                _this.SetErrMess("Checked out failed!");
            }
        }, function (err) {
            console.log(err);
        });
    };
    CheckOutComponent.prototype.SetMessage = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#succMess');
        inputel.removeAttribute('hidden');
        this.message = mess;
        setTimeout(function () {
            inputel.hidden = true;
        }, 1000);
    };
    CheckOutComponent.prototype.SetErrMess = function (mess) {
        var inputel = this.el.nativeElement.querySelector('#errMess');
        this.message = mess;
        inputel.removeAttribute('hidden');
        setTimeout(function () {
            inputel.hidden = true;
        }, 5000);
    };
    CheckOutComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], CheckOutComponent.prototype, "searchElementRef", void 0);
    CheckOutComponent = __decorate([
        core_1.Component({
            selector: 'order-checkout',
            templateUrl: 'Order/CheckOut',
            providers: [order_service_1.OrderServices, user_service_1.UserServices]
        }),
        __metadata("design:paramtypes", [order_service_1.OrderServices,
            router_1.ActivatedRoute,
            core_1.ElementRef,
            router_1.Router,
            core_2.MapsAPILoader,
            core_1.NgZone,
            user_service_1.UserServices,
            global_observable_service_1.GlobalService])
    ], CheckOutComponent);
    return CheckOutComponent;
}());
exports.CheckOutComponent = CheckOutComponent;

//# sourceMappingURL=order-checkout.component.js.map

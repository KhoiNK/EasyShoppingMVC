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
var partner_service_1 = require("./partner.service");
var router_1 = require("@angular/router");
var partnerListComponent = (function () {
    function partnerListComponent(partnerservice, activateRoute, router) {
        this.partnerservice = partnerservice;
        this.activateRoute = activateRoute;
        this.router = router;
    }
    ;
    partnerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activateRoute.params.subscribe(function (params) {
            _this.storeId = params['id'];
        });
        this.LoadData();
    };
    partnerListComponent.prototype.LoadData = function () {
        var _this = this;
        this.partnerservice.GetList(this.storeId).subscribe(function (res) {
            _this.partners = res;
        }, function (err) {
            console.log(err);
        });
    };
    partnerListComponent.prototype.Approve = function (id) {
        var _this = this;
        this.partnerservice.Approve(id).subscribe(function (res) {
            if (res == true) {
                alert("Approve successfully!");
                _this.LoadData();
            }
        }, function (err) {
            console.log(err);
        });
    };
    partnerListComponent.prototype.RemovePartner = function (id) {
        var _this = this;
        var result = confirm("Are you sure want to remove this partner?");
        if (result) {
            this.partnerservice.RemovePartner(id).subscribe(function (res) {
                if (res == true) {
                    alert("Remove Successfully!");
                    _this.LoadData();
                }
                else {
                    alert("Remove failed!");
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    partnerListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    partnerListComponent = __decorate([
        core_1.Component({
            selector: 'product-add',
            templateUrl: 'Partner/PartnerList',
            providers: [partner_service_1.PartnerService]
        }),
        __metadata("design:paramtypes", [partner_service_1.PartnerService, router_1.ActivatedRoute, router_1.Router])
    ], partnerListComponent);
    return partnerListComponent;
}());
exports.partnerListComponent = partnerListComponent;

//# sourceMappingURL=part-list.component.js.map

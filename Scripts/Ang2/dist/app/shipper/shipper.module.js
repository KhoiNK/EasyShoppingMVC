"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var shipper_routing_1 = require("./shipper.routing");
var shipper_component_1 = require("./shipper.component");
var shipper_apply_component_1 = require("./shipper-apply.component");
var shipper_approve_component_1 = require("./shipper-approve.component");
var shipper_getbystoreId_component_1 = require("./shipper-getbystoreId.component");
var shipper_intro_component_1 = require("./shipper-intro.component");
var ShipperModule = (function () {
    function ShipperModule() {
    }
    ShipperModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                shipper_routing_1.routing
            ],
            declarations: [
                shipper_component_1.ShipperComponent,
                shipper_getbystoreId_component_1.ShipperGetByStoreComponent,
                shipper_approve_component_1.ShipperListComponent,
                shipper_apply_component_1.ShipperApplyComponent,
                shipper_intro_component_1.ShipperIntroComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]
        })
    ], ShipperModule);
    return ShipperModule;
}());
exports.ShipperModule = ShipperModule;

//# sourceMappingURL=shipper.module.js.map

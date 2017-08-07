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
var partner_routing_1 = require("./partner.routing");
var partner_component_1 = require("./partner.component");
var part_list_component_1 = require("./part-list.component");
var PartnerModule = (function () {
    function PartnerModule() {
    }
    PartnerModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                partner_routing_1.routing
            ],
            declarations: [
                partner_component_1.PartnerComponent,
                part_list_component_1.partnerListComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]
        })
    ], PartnerModule);
    return PartnerModule;
}());
exports.PartnerModule = PartnerModule;

//# sourceMappingURL=partner.module.js.map

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
var store_routing_1 = require("./store.routing");
var store_list_component_1 = require("./store-list.component");
var store_detail_component_1 = require("./store-detail.component");
var store_listbyuserid_component_1 = require("./store-listbyuserid.component");
var store_component_1 = require("./store.component");
var store_add_component_1 = require("./store-add.component");
var store_approve_list_component_1 = require("./store-approve-list.component");
var store_edit_component_1 = require("./store-edit.component");
var store_upgrade_component_1 = require("./store-upgrade.component");
//import { GoogleMapComponent } from '../commonService/google-map.component';
var StoreModule = (function () {
    function StoreModule() {
    }
    StoreModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                store_routing_1.routing
            ],
            declarations: [
                store_component_1.StoreComponent,
                store_list_component_1.StoreListComponent,
                store_detail_component_1.StoreDetailComponent,
                store_listbyuserid_component_1.StoreListByUserComponent,
                store_add_component_1.StoreAddComponent,
                store_approve_list_component_1.StoreApproveList,
                store_edit_component_1.StoreEditComponent,
                store_upgrade_component_1.StoreUpgradeComponent
                //GoogleMapComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], StoreModule);
    return StoreModule;
}());
exports.StoreModule = StoreModule;

//# sourceMappingURL=store.module.js.map

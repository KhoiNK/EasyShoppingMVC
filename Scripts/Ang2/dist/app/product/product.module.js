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
var product_routing_1 = require("./product.routing");
var product_list_component_1 = require("./product-list.component");
var product_component_1 = require("./product.component");
var product_add_component_1 = require("./product-add.component");
var product_approve_list_component_1 = require("./product-approve-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_edit_component_1 = require("./product-edit.component");
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                product_routing_1.routing
            ],
            declarations: [
                product_add_component_1.ProductAddComponent,
                product_component_1.ProductComponent,
                product_list_component_1.ProductListComponent,
                product_approve_list_component_1.ProductApproveListComponent,
                product_detail_component_1.ProductDetailComponent,
                product_edit_component_1.ProductEditComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]
        })
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;

//# sourceMappingURL=product.module.js.map

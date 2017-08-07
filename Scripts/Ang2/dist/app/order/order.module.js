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
var order_routing_1 = require("./order.routing");
var order_component_1 = require("./order.component");
var order_list_component_1 = require("./order-list.component");
var order_detail_component_1 = require("./order-detail.component");
var order_checkout_component_1 = require("./order-checkout.component");
var OrderModule = (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                //ContactModule,
                order_routing_1.routing
            ],
            declarations: [
                order_component_1.OrderComponent,
                order_list_component_1.OrderList,
                order_detail_component_1.OrderDetailComponent,
                order_checkout_component_1.CheckOutComponent
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;

//# sourceMappingURL=order.module.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var order_component_1 = require("./order.component");
var order_list_component_1 = require("./order-list.component");
var order_detail_component_1 = require("./order-detail.component");
var order_checkout_component_1 = require("./order-checkout.component");
var appRoutes = [{
        path: '',
        component: order_component_1.OrderComponent,
        data: {
            title: 'Order'
        },
        children: [
            {
                path: '',
                component: order_list_component_1.OrderList
            },
            {
                path: 'order-detail/:id',
                component: order_detail_component_1.OrderDetailComponent
            },
            {
                path: 'order-checkout/:id',
                component: order_checkout_component_1.CheckOutComponent
            }
        ]
    }];
exports.routing = router_1.RouterModule.forChild(appRoutes);

//# sourceMappingURL=order.routing.js.map

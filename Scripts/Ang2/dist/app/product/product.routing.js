"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var product_component_1 = require("./product.component");
var product_add_component_1 = require("./product-add.component");
var product_approve_list_component_1 = require("./product-approve-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_list_component_1 = require("./product-list.component");
var product_edit_component_1 = require("./product-edit.component");
var appRoutes = [{
        path: '',
        component: product_component_1.ProductComponent,
        data: {
            title: 'Product'
        },
        children: [
            {
                path: '',
                component: product_list_component_1.ProductListComponent,
            },
            {
                path: 'product-add/:storeId',
                component: product_add_component_1.ProductAddComponent,
            },
            {
                path: 'product-approve-list/:id',
                component: product_approve_list_component_1.ProductApproveListComponent,
            },
            {
                path: 'product-detail/:id',
                component: product_detail_component_1.ProductDetailComponent,
            },
            {
                path: 'product-edit/:id',
                component: product_edit_component_1.ProductEditComponent,
            }
        ]
    }];
exports.routing = router_1.RouterModule.forChild(appRoutes);

//# sourceMappingURL=product.routing.js.map

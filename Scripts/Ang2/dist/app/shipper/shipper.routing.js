"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var shipper_component_1 = require("./shipper.component");
var shipper_apply_component_1 = require("./shipper-apply.component");
var shipper_approve_component_1 = require("./shipper-approve.component");
var shipper_getbystoreId_component_1 = require("./shipper-getbystoreId.component");
var shipper_intro_component_1 = require("./shipper-intro.component");
var appRoutes = [{
        path: '',
        component: shipper_component_1.ShipperComponent,
        data: {
            title: 'Shipper'
        },
        children: [
            {
                path: '',
                component: shipper_intro_component_1.ShipperIntroComponent,
            },
            {
                path: 'shipperlist',
                component: shipper_approve_component_1.ShipperListComponent
            },
            {
                path: 'shipper-store-list/:id',
                component: shipper_getbystoreId_component_1.ShipperGetByStoreComponent
            },
            {
                path: 'shipper-register',
                component: shipper_apply_component_1.ShipperApplyComponent
            }
        ]
    }];
exports.routing = router_1.RouterModule.forChild(appRoutes);

//# sourceMappingURL=shipper.routing.js.map

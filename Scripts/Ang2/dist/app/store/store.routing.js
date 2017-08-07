"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var store_list_component_1 = require("./store-list.component");
var store_component_1 = require("./store.component");
var store_detail_component_1 = require("./store-detail.component");
var store_listbyuserid_component_1 = require("./store-listbyuserid.component");
var store_add_component_1 = require("./store-add.component");
var store_approve_list_component_1 = require("./store-approve-list.component");
var store_edit_component_1 = require("./store-edit.component");
var store_upgrade_component_1 = require("./store-upgrade.component");
var appRoutes = [{
        path: '',
        component: store_component_1.StoreComponent,
        data: {
            title: 'Store'
        },
        children: [
            {
                path: '',
                component: store_list_component_1.StoreListComponent,
            }, {
                path: 'store-detail/:id',
                component: store_detail_component_1.StoreDetailComponent,
            },
            {
                path: 'store-by-user-id/:id',
                component: store_listbyuserid_component_1.StoreListByUserComponent,
            },
            {
                path: 'store-add',
                component: store_add_component_1.StoreAddComponent,
            },
            {
                path: 'store-approve-list',
                component: store_approve_list_component_1.StoreApproveList,
            },
            {
                path: 'store-edit/:id',
                component: store_edit_component_1.StoreEditComponent
            },
            {
                path: 'store-upgrade/:id',
                component: store_upgrade_component_1.StoreUpgradeComponent
            }
        ]
    }];
exports.routing = router_1.RouterModule.forChild(appRoutes);

//# sourceMappingURL=store.routing.js.map

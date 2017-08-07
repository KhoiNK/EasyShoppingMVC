"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_routing_1 = require("./auth/login.routing");
var searchpage_component_1 = require("./searchpage.component");
var routes = [
    {
        path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: 'users',
        loadChildren: 'app/user/user.module#UserModule'
    },
    {
        path: 'stores',
        loadChildren: 'app/store/store.module#StoreModule'
    },
    {
        path: 'products',
        loadChildren: 'app/product/product.module#ProductModule'
    },
    {
        path: 'orders',
        loadChildren: 'app/order/order.module#OrderModule'
    },
    {
        path: 'shippers',
        loadChildren: 'app/shipper/shipper.module#ShipperModule'
    },
    {
        path: 'partners',
        loadChildren: 'app/partner/partner.module#PartnerModule'
    },
    {
        path: 'searchs/:searchname',
        component: searchpage_component_1.SearchPageComponent
    }
].concat(login_routing_1.loginRoutes);
exports.routing = router_1.RouterModule.forRoot(routes);

//# sourceMappingURL=app.routing.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var partner_component_1 = require("./partner.component");
var part_list_component_1 = require("./part-list.component");
var appRoutes = [{
        path: '',
        component: partner_component_1.PartnerComponent,
        data: {
            title: 'Store'
        },
        children: [
            {
                path: '',
                component: partner_component_1.PartnerComponent,
            },
            {
                path: 'partner-list/:id',
                component: part_list_component_1.partnerListComponent,
            }
        ]
    }];
exports.routing = router_1.RouterModule.forChild(appRoutes);

//# sourceMappingURL=partner.routing.js.map

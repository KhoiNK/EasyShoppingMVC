"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var user_component_1 = require("./user.component");
var user_list_component_1 = require("./user-list.component");
var user_detail_component_1 = require("./user-detail.component");
var user_edit_component_1 = require("./user-edit.component");
var appRoutes = [{
        path: '',
        component: user_component_1.UserComponent,
        data: {
            title: 'User'
        },
        children: [
            {
                path: '',
                component: user_list_component_1.UserListComponent,
            }, {
                path: 'user-detail/:id',
                component: user_detail_component_1.UserDetailComponent,
            }, {
                path: 'user-edit/:id',
                component: user_edit_component_1.UserEditComponent,
            }
        ]
    }];
exports.routing = router_1.RouterModule.forChild(appRoutes);

//# sourceMappingURL=user.routing.js.map

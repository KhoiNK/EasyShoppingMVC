"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var login_component_1 = require("./login.component");
exports.loginRoutes = [
    {
        path: 'login',
        component: login_component_1.LoginComponent,
        data: {
            title: 'Login'
        }
    }
];
exports.routing = router_1.RouterModule.forChild(exports.loginRoutes);

//# sourceMappingURL=login.routing.js.map

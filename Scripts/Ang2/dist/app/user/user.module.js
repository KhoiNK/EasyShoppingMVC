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
//import { ContactModule } from '../contact/contact.module';
var user_component_1 = require("./user.component");
var user_list_component_1 = require("./user-list.component");
var user_routing_1 = require("./user.routing");
var user_detail_component_1 = require("./user-detail.component");
var user_edit_component_1 = require("./user-edit.component");
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                common_1.CommonModule,
                //ContactModule,
                user_routing_1.routing
            ],
            declarations: [
                user_component_1.UserComponent,
                user_list_component_1.UserListComponent,
                user_detail_component_1.UserDetailComponent,
                user_edit_component_1.UserEditComponent
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]
        })
    ], UserModule);
    return UserModule;
}());
exports.UserModule = UserModule;

//# sourceMappingURL=user.module.js.map

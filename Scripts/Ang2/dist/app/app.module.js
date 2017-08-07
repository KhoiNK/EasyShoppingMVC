"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var angular2_jwt_1 = require("angular2-jwt/angular2-jwt");
var core_2 = require("angular2-google-maps/core");
//import { AgmCoreModule } from '@agm/core';
var app_component_1 = require("./app.component");
var login_component_1 = require("./auth/login.component");
var auth_service_1 = require("./auth/auth.service");
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var sidebar_component_1 = require("./sidebar.component");
var slider_component_1 = require("./slider.component");
var searchpage_component_1 = require("./searchpage.component");
//import { GetListCountries } from './country-list/country-list.component';
var app_routing_1 = require("./app.routing");
var global_observable_service_1 = require("./global-observable.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                common_1.CommonModule,
                app_routing_1.routing,
                core_2.AgmCoreModule.forRoot({
                    apiKey: 'AIzaSyAnEYt5edclSFmFHCSgp665PgUvIesC_jo',
                    libraries: ["places"]
                }),
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                header_component_1.Header,
                footer_component_1.Footer,
                sidebar_component_1.SideBar,
                slider_component_1.SliderComponent,
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                searchpage_component_1.SearchPageComponent
            ],
            providers: [
                { provide: auth_service_1.IAuthService, useClass: auth_service_1.AuthService },
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                angular2_jwt_1.AuthHttp,
                angular2_jwt_1.provideAuth({
                    headerName: 'Authorization',
                    headerPrefix: 'Bearer',
                    tokenName: 'id_token',
                    tokenGetter: function () {
                        return localStorage.getItem('id_token');
                    },
                    noJwtError: true
                }),
                global_observable_service_1.GlobalService
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map

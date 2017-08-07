"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/share");
var Subject_1 = require("rxjs/Subject");
var angular2_jwt_1 = require("angular2-jwt");
var GlobalService = (function () {
    function GlobalService() {
        this._sysmess = new Subject_1.Subject();
        this._isSignedin = new Subject_1.Subject();
        this._isLoad = new Subject_1.Subject();
        this.globalMess$ = this._sysmess.asObservable();
        this.tokenexpired = this._isSignedin.asObservable();
        //isLoad$ = this._isLoad.asObservable();
        this.isLoad$ = new BehaviorSubject_1.BehaviorSubject(false);
    }
    GlobalService.prototype.changeMess = function (key) {
        this._sysmess.next(key);
    };
    GlobalService.prototype.CheckToken = function () {
        this._isSignedin.next(angular2_jwt_1.tokenNotExpired('id_token'));
    };
    GlobalService.prototype.SetLoadPage = function () {
        this._isLoad.next(true);
    };
    GlobalService.prototype.ClearLoadPage = function () {
        this.isLoad$.next(false);
    };
    GlobalService.prototype.GetLoad = function () {
        return this._isLoad.asObservable();
    };
    GlobalService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], GlobalService);
    return GlobalService;
}());
exports.GlobalService = GlobalService;

//# sourceMappingURL=global-observable.service.js.map

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Base64EncodeService = (function () {
    function Base64EncodeService() {
        //GetBase64(file: any): string {
        //    var reader = new FileReader();
        //    let b64: string;
        //    reader.readAsDataURL(file);
        //    reader.onload = function () {
        //        b64 = reader.result + "";
        //        console.log(reader.result);
        //    };
        //    reader.onerror = function (error) {
        //        console.log('Error: ', error);
        //    };
        //    console.log(b64);
        //    return b64;
        //}
        this.base64textString = "";
    }
    Base64EncodeService.prototype.GetB64 = function (file) {
        var _this = this;
        return new Promise(function (re) {
            re(_this.handleFileSelect(file));
        }).then(function () {
            return _this.base64textString;
        });
    };
    Base64EncodeService.prototype.GetB64String = function () {
        return this.base64textString;
    };
    Base64EncodeService.prototype.SetB64String = function (input) {
        this.base64textString = input;
    };
    Base64EncodeService.prototype.handleFileSelect = function (file) {
        var reader = new FileReader();
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsBinaryString(file);
    };
    Base64EncodeService.prototype._handleReaderLoaded = function (readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        this.SetB64String(btoa(binaryString));
    };
    Base64EncodeService = __decorate([
        core_1.Injectable()
    ], Base64EncodeService);
    return Base64EncodeService;
}());
exports.Base64EncodeService = Base64EncodeService;

//# sourceMappingURL=base64Encode.service.js.map

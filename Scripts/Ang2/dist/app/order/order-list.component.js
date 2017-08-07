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
var order_service_1 = require("./order.service");
var OrderList = (function () {
    function OrderList(orderService, el) {
        this.orderService = orderService;
        this.el = el;
        this.id = 0;
        this.message = "";
        this.total = 0;
        this.statusId = 1;
        this.page = 1;
        this.Math = Math;
        this.data = {};
        this.orderdetail = {};
    }
    OrderList.prototype.ngOnInit = function () {
        this.LoadData(4);
    };
    OrderList.prototype.LoadData = function (id) {
        //this.orderService.GetOrderByUserId().subscribe((res: any) => {
        //    this.orders = res;
        //}, err => {
        //    console.log(err);
        //});
        var _this = this;
        if (id == null || id == undefined) {
            id = 4;
        }
        this.statusId = id;
        this.orderService.GetByStatus(id).subscribe(function (res) {
            _this.orders = res;
        }, function (err) {
            console.log(err);
        });
    };
    OrderList.prototype.LoadAll = function (command) {
        if (command == "init") {
            this.LoadByUser(this.page);
        }
        if (command == "next") {
            this.page = this.page + 1;
            this.LoadByUser(this.page);
        }
        if (command == "back") {
            this.page = this.page - 1;
            this.LoadByUser(this.page);
        }
    };
    OrderList.prototype.LoadByUser = function (page) {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector("#nextPage");
        this.orderService.GetOrderByUserId(page).subscribe(function (res) {
            if (res != []) {
                _this.orders = res;
            }
            if (res.lenght <= 0) {
                inputEl.hidden = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    OrderList.prototype.ChangeQuantity = function (id, command, productId) {
        var _this = this;
        var inputEl = this.el.nativeElement.querySelector("#item" + id);
        var quantity = inputEl.value;
        this.data.ID = id;
        this.data.ProductID = productId;
        if (command == "add") {
            this.data.Quantity = +quantity + 1;
        }
        if (command == "minus") {
            this.data.Quantity = +quantity - 1;
        }
        this.orderService.ChangeQuantity(this.data).subscribe(function (res) {
            if (res == true) {
                if (command == "add") {
                    inputEl.value = "" + (parseInt(inputEl.value) + 1);
                }
                if (command == "minus") {
                    inputEl.value = "" + (parseInt(inputEl.value) - 1);
                }
                _this.SetMessage("Changed successfully!");
                _this.LoadData(_this.statusId);
                _this.SetOrderDetail(_this.id);
            }
            else {
                _this.SetMessage("Changed failed!");
            }
        });
        return;
    };
    OrderList.prototype.SetOrderDetail = function (id) {
        var _this = this;
        this.total = 0;
        this.orderdetail = this.orders.filter(function (x) { return x.ID == id; });
        this.id = id;
        this.orderdetail[0].details.forEach(function (component) {
            _this.total = _this.total + (+component.Quantity * +component.Price);
        });
    };
    OrderList.prototype.ResetValue = function () {
        this.total = 0;
        this.orderdetail = {};
        this.id = 0;
    };
    OrderList.prototype.RemoveItem = function (id) {
        var _this = this;
        this.orderService.RemoveItem(id).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Removed successfully!");
                _this.LoadData(_this.statusId);
            }
            if (res == false) {
                _this.SetMessage("Removed failed!");
            }
        }, function (err) {
            _this.SetMessage("Removed failed!");
            console.log(err);
        });
    };
    OrderList.prototype.RemoveOrder = function (id) {
        var _this = this;
        this.orderService.RemoveOrder(id).subscribe(function (res) {
            if (res == true) {
                _this.SetMessage("Removed successfully!");
                localStorage.removeItem("cart");
                _this.LoadData(_this.statusId);
            }
            if (res == false) {
                _this.SetMessage("Removed failed!");
            }
        }, function (err) {
            _this.SetMessage("Removed failed!");
            console.log(err);
        });
    };
    OrderList.prototype.SetMessage = function (mess) {
        var _this = this;
        this.inputElement = this.el.nativeElement.querySelector('#cartMess');
        this.inputElement.removeAttribute('hidden');
        setTimeout(function () {
            _this.inputElement.hidden = true;
        }, 1000);
        this.message = mess;
    };
    OrderList = __decorate([
        core_1.Component({
            selector: 'order-list',
            templateUrl: 'Order/OrderList',
            providers: [order_service_1.OrderServices]
        }),
        __metadata("design:paramtypes", [order_service_1.OrderServices, core_1.ElementRef])
    ], OrderList);
    return OrderList;
}());
exports.OrderList = OrderList;

//# sourceMappingURL=order-list.component.js.map

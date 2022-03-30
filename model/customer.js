"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(name) {
        this.name = name;
    }
    Customer.prototype.getname = function () {
        return this.name;
    };
    Customer.prototype.getDisplayDetails = function () {
        return console.log(this.name);
    };
    return Customer;
}());
exports.Customer = Customer;

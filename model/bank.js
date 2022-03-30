"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(bankName) {
        this.bankName = bankName;
    }
    Bank.prototype.getbankName = function () {
        return this.bankName;
    };
    Bank.prototype.getDisplayDetails = function () {
        return console.log(this.bankName);
    };
    return Bank;
}());
exports.Bank = Bank;

"use strict";
exports.__esModule = true;
exports.Balance = void 0;
var Balance = /** @class */ (function () {
    function Balance() {
    }
    Balance.prototype.setValues = function (PaymentData) {
        this.checkMonth = PaymentData[3];
        console.log("balance model class:" + this.checkMonth);
    };
    Balance.prototype.getamountPaid = function () {
        return this.amountPaid;
    };
    Balance.prototype.getemiMonthsLeft = function () {
        return this.emiMonthsLeft;
    };
    return Balance;
}());
exports.Balance = Balance;

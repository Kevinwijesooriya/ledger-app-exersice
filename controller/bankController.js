"use strict";
exports.__esModule = true;
exports.BankController = void 0;
var BankController = /** @class */ (function () {
    function BankController(loanData) {
        this.loanData = loanData;
        this.paymentData = Array();
    }
    BankController.prototype.addPaymentData = function (paymentData) {
        this.paymentData.push(paymentData);
    };
    return BankController;
}());
exports.BankController = BankController;

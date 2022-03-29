"use strict";
exports.__esModule = true;
exports.BalanceController = void 0;
var balance_1 = require("../model/balance");
var BalanceController = /** @class */ (function () {
    function BalanceController(input) {
    }
    BalanceController.prototype.setInputDetails = function () {
        // this.amountPaid = this.calculateAmountPaid();
        // this.emiMonthsLeft = this.calculateEmiMonthsLeft();
        new balance_1.Balance(this.amountPaid, this.emiMonthsLeft);
    };
    BalanceController.prototype.calculateAmountPaid = function () {
        // return amountPaid;
    };
    BalanceController.prototype.calculateEmiMonthsLeft = function () {
        // return emiMonthsLeft
    };
    return BalanceController;
}());
exports.BalanceController = BalanceController;

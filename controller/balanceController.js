"use strict";
exports.__esModule = true;
exports.BalanceController = void 0;
var balance_1 = require("../model/balance");
var bankController_1 = require("./bankController");
var BalanceController = /** @class */ (function () {
    function BalanceController(input) {
        this.setInputDetails(input);
    }
    BalanceController.prototype.setInputDetails = function (input) {
        var BankName = input[1];
        var Name = input[2];
        var balanceMonth = input[3];
        var amountPaid = this.countLoanAmountPaid(this.bankController, balanceMonth);
        var emiMonthsLeft = this.countEMIMonthsLeft(this.bankController.getLoanData(), amountPaid);
        this.bankController = bankController_1.BankController.findAccount(BankName, Name);
        this.balanceData = new balance_1.Balance(amountPaid, emiMonthsLeft);
        this.displayBalanceDetails();
        console.log("received data to payment controller:");
    };
    BalanceController.prototype.displayBalanceDetails = function () {
        var BankName = this.bankController.getLoanData().getBankName();
        var Name = this.bankController.getLoanData().getName();
        var amountPaid = this.balanceData.getamountPaid();
        var emiMonthsLeft = this.balanceData.getemiMonthsLeft();
        console.log("".concat(BankName, " ").concat(Name, " ").concat(amountPaid, " ").concat(emiMonthsLeft));
    };
    BalanceController.prototype.countLoanAmountPaid = function (accountData, balanceMonth) {
        return 750;
    };
    BalanceController.prototype.countEMIMonthsLeft = function (loanData, amountPaid) {
        return 677;
    };
    return BalanceController;
}());
exports.BalanceController = BalanceController;

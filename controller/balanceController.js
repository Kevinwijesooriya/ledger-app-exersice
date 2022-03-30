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
        this.bankController = bankController_1.BankController.findAccount(BankName, Name);
        var emiMonthsLeft = this.countEMIMonthsLeft(this.bankController, amountPaid);
        this.balanceData = new balance_1.Balance(amountPaid, emiMonthsLeft);
        this.displayBalanceDetails();
        console.log("received data to payment controller:");
    };
    BalanceController.prototype.displayBalanceDetails = function () {
        var BankName = this.bankController.BankName;
        var Name = this.bankController.Name;
        var amountPaid = this.balanceData.amountPaid;
        var emiMonthsLeft = this.balanceData.emiMonthsLeft;
        console.log("display balance :::::: ".concat(BankName, " ").concat(Name, " ").concat(amountPaid, " ").concat(emiMonthsLeft));
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

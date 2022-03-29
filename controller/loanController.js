"use strict";
exports.__esModule = true;
exports.LoanController = void 0;
var loan_1 = require("../model/loan");
var bankController_1 = require("./bankController");
var LoanController = /** @class */ (function () {
    function LoanController(input) {
        this.setInputDetails(input);
    }
    LoanController.prototype.setInputDetails = function (input) {
        var PrincipalAmount = input[3];
        var NumberOfYear = input[4];
        var rate = input[5];
        var Interest = this.calculateInterestAmount(PrincipalAmount, NumberOfYear, rate);
        var AmountToPay = PrincipalAmount + Interest;
        var EmiAmount = this.calculateInterestAmount(PrincipalAmount, NumberOfYear, rate);
        this.loanData = new loan_1.Loan(PrincipalAmount, NumberOfYear, rate, Interest, AmountToPay, EmiAmount);
        console.log("received data to loan controller");
    };
    LoanController.prototype.allocateLoan = function () {
        var bankController = new bankController_1.BankController(this.loanData);
    };
    LoanController.prototype.calculateEmiAmount = function (AmountToPay, NumberOfYear) {
        return Math.ceil(AmountToPay / (NumberOfYear * 12));
    };
    LoanController.prototype.calculateInterestAmount = function (PrincipalAmount, NumberOfYear, rate) {
        return Math.ceil((PrincipalAmount * NumberOfYear * rate) / 100);
    };
    return LoanController;
}());
exports.LoanController = LoanController;

"use strict";
exports.__esModule = true;
exports.LoanController = void 0;
var loan_1 = require("../model/loan");
var LoanController = /** @class */ (function () {
    function LoanController() {
    }
    LoanController.prototype.setValues = function (input) {
        this.GetInput = input;
        this.setInputDetails();
        this.CalculateInterest();
        this.CalculateAmountToPay();
        this.CalculateEmiAmount();
    };
    LoanController.prototype.CalculateInterest = function () {
        this.interest =
            this.GetInput[3] * this.GetInput[4] * (this.GetInput[5] / 100);
        return this.interest;
    };
    LoanController.prototype.CalculateAmountToPay = function () {
        this.repayAmount = -(-this.GetInput[3] - this.interest);
        return this.repayAmount;
    };
    LoanController.prototype.CalculateEmiAmount = function () {
        this.emi = Math.ceil((this.repayAmount / 12) * this.GetInput[4]);
        return this.emi;
    };
    LoanController.prototype.setInputDetails = function () {
        var x = this.CalculateInterest();
        var y = this.CalculateAmountToPay();
        var v = this.CalculateEmiAmount();
        var ob = new loan_1.Loan();
        ob.setValues(this.GetInput, x, y, v);
    };
    return LoanController;
}());
exports.LoanController = LoanController;

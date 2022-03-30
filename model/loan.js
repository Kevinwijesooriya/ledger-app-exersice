"use strict";
exports.__esModule = true;
exports.Loan = void 0;
var Loan = /** @class */ (function () {
    function Loan() {
    }
    Loan.prototype.setValues = function (LoanData, Interest, AmountToPay, EmiAount) {
        this.PrincipalAmount = LoanData[3];
        this.rate = LoanData[5];
        this.NumberOfYear = LoanData[4];
        this.Interest = Interest;
        this.AmountToPay = AmountToPay;
        this.EmiAount = EmiAount;
        this.GetPrincipleAmount();
    };
    Loan.prototype.GetPrincipleAmount = function () {
        console.log("loan modle class:" + this.PrincipalAmount, this.rate, this.NumberOfYear, this.Interest, this.AmountToPay, this.EmiAount);
    };
    Loan.prototype.GetRate = function () {
        return this.rate;
    };
    Loan.prototype.GetNumberOfYears = function () {
        return this.NumberOfYear;
    };
    Loan.prototype.GetInterest = function () {
        return this.Interest;
    };
    Loan.prototype.GetEmiAmount = function () {
        console.log("dddddd:" + this.AmountToPay);
        return this.AmountToPay;
    };
    Loan.prototype.GetAmountToPay = function () {
        return this.AmountToPay;
    };
    return Loan;
}());
exports.Loan = Loan;

"use strict";
exports.__esModule = true;
exports.Loan = void 0;
var Loan = /** @class */ (function () {
    function Loan(BankName, Name, PrincipalAmount, NumberOfYear, rate, Interest, AmountToPay, EmiAmount) {
        this.BankName = BankName;
        this.Name = Name;
        this.PrincipalAmount = PrincipalAmount;
        this.NumberOfYear = NumberOfYear;
        this.rate = rate;
        this.Interest = Interest;
        this.AmountToPay = AmountToPay;
        this.EmiAmount = EmiAmount;
        this.GetPrincipleAmount();
    }
    Loan.prototype.GetPrincipleAmount = function () {
        console.log(this.PrincipalAmount, this.rate, this.NumberOfYear, this.Interest, this.AmountToPay, this.EmiAmount);
    };
    Loan.prototype.GetRate = function () { };
    Loan.prototype.GetNumberOfYears = function () { };
    Loan.prototype.GetInterest = function () { };
    Loan.prototype.GetEmiAmount = function () { };
    Loan.prototype.GetAmountToPay = function () { };
    Loan.prototype.SetInterest = function () { };
    Loan.prototype.SetAmountToPay = function () { };
    Loan.prototype.getBankName = function () {
        return this.BankName;
    };
    Loan.prototype.getName = function () {
        return this.Name;
    };
    return Loan;
}());
exports.Loan = Loan;

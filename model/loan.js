"use strict";
exports.__esModule = true;
exports.Loan = void 0;
var Loan = /** @class */ (function () {
  function Loan(LoanData) {
    this.PrincipalAmount = LoanData[1];
    this.rate = LoanData[2];
    this.NumberOfYear = LoanData[3];
    this.Interest = LoanData[4];
    this.GetPrincipleAmount();
  }
  Loan.prototype.GetPrincipleAmount = function () {
    console.log(
      this.PrincipalAmount,
      this.rate,
      this.NumberOfYear,
      this.Interest
    );
  };
  Loan.prototype.GetRate = function () {};
  Loan.prototype.GetNumberOfYears = function () {};
  Loan.prototype.GetInterest = function () {};
  Loan.prototype.GetEmiAmount = function () {};
  Loan.prototype.GetAmountToPay = function () {};
  Loan.prototype.SetInterest = function () {};
  Loan.prototype.SetAmountToPay = function () {};
  return Loan;
})();
exports.Loan = Loan;

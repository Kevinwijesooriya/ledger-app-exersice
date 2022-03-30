"use strict";
exports.__esModule = true;
exports.Balance = void 0;
var Balance = /** @class */ (function () {
  function Balance(amountPaid, emiMonthsLeft) {
    this.amountPaid = amountPaid;
    this.emiMonthsLeft = emiMonthsLeft;
  }
  Balance.prototype.getamountPaid = function () {
    return this.amountPaid;
  };
  Balance.prototype.getemiMonthsLeft = function () {
    return this.emiMonthsLeft;
  };
  return Balance;
})();
exports.Balance = Balance;

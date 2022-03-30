"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(lumpSum, emiNum) {
        this.lumpSum = lumpSum;
        this.emiNum = emiNum;
    }
    Payment.prototype.getLumpSum = function () {
        return this.lumpSum;
    };
    Payment.prototype.getEmiNum = function () {
        return this.emiNum;
    };
    return Payment;
}());
exports.Payment = Payment;

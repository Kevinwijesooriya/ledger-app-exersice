"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.setValues = function (inputData) {
        this.lumpSum = inputData[3];
        this.emiNum = inputData[4];
        console.log(this.lumpSum);
        console.log(this.emiNum);
    };
    Payment.prototype.getLumpSum = function () {
        console.log("ddddddd:" + this.lumpSum);
        return this.lumpSum;
    };
    Payment.prototype.getEmiNum = function () {
        return this.emiNum;
    };
    return Payment;
}());
exports.Payment = Payment;

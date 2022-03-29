"use strict";
exports.__esModule = true;
exports.PaymentController = void 0;
var payment_1 = require("../model/payment");
var PaymentController = /** @class */ (function () {
    function PaymentController(input) {
        this.setInputDetails(input);
    }
    PaymentController.prototype.setInputDetails = function (input) {
        var lumpSum = input[3];
        var emiNum = input[4];
        new payment_1.Payment(lumpSum, emiNum);
        console.log("received data to payment controller:");
    };
    return PaymentController;
}());
exports.PaymentController = PaymentController;

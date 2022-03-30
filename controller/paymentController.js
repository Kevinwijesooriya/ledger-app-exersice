"use strict";
exports.__esModule = true;
exports.PaymentController = void 0;
var payment_1 = require("../model/payment");
var PaymentController = /** @class */ (function () {
    function PaymentController(input) {
        this.GetInput = input;
        this.setInputDetails();
    }
    PaymentController.prototype.setInputDetails = function () {
        var ob = new payment_1.Payment();
        ob.setValues(this.GetInput);
        console.log("received data to paymnet controller:" + this.GetInput);
    };
    return PaymentController;
}());
exports.PaymentController = PaymentController;

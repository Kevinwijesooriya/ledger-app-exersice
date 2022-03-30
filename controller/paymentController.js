"use strict";
exports.__esModule = true;
exports.PaymentController = void 0;
var payment_1 = require("../model/payment");
var bankController_1 = require("./bankController");
var PaymentController = /** @class */ (function () {
  function PaymentController(input) {
    this.setInputDetails(input);
  }
  PaymentController.prototype.setInputDetails = function (input) {
    var BankName = input[1];
    var Name = input[2];
    var lumpSum = input[3];
    var emiNum = input[4];
    this.bankController = bankController_1.BankController.findAccount(
      BankName,
      Name
    );
    this.paymentData = new payment_1.Payment(lumpSum, emiNum);
    console.log("received data to payment controller:");
  };
  PaymentController.prototype.addPaymentData = function () {
    this.bankController.addPaymentData(this.paymentData);
  };
  return PaymentController;
})();
exports.PaymentController = PaymentController;

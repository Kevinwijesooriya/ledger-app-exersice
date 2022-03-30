"use strict";
exports.__esModule = true;
exports.InputController = void 0;
var balanceController_1 = require("./balanceController");
var loanController_1 = require("./loanController");
var paymentController_1 = require("./paymentController");
var InputController = /** @class */ (function () {
    function InputController(inputData) {
        this.tokanize(inputData);
    }
    InputController.prototype.tokanize = function (inputData) {
        for (var i = 0; i < inputData.length; i++) {
            var token = inputData[i].split(" ");
            var key = token[0];
            console.log("received data to input controller:" + key);
            switch (key) {
                case "LOAN":
                    var loanController = new loanController_1.LoanController(token);
                    loanController.allocateLoan();
                    break;
                case "PAYMENT":
                    var paymentController = new paymentController_1.PaymentController(token);
                    paymentController.addPaymentData();
                    break;
                case "BALANCE":
                    var balanceController = new balanceController_1.BalanceController(token);
                    balanceController.displayBalanceDetails();
                    break;
            }
        }
    };
    return InputController;
}());
exports.InputController = InputController;

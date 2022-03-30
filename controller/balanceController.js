"use strict";
exports.__esModule = true;
exports.BalanceController = void 0;
var balance_1 = require("../model/balance");
var payment_1 = require("../model/payment");
var loan_1 = require("../model/loan");
var BalanceController = /** @class */ (function () {
    function BalanceController() {
    }
    BalanceController.prototype.setValues = function (input) {
        this.GetInput = input;
        this.setInputDetails();
        this.CalculateAmountPaid();
        this.displayDetails();
    };
    BalanceController.prototype.setInputDetails = function () {
        var ob = new balance_1.Balance();
        ob.setValues(this.GetInput);
        console.log("received data to balance controller:" + this.GetInput);
    };
    BalanceController.prototype.CalculateAmountPaid = function () {
        var p1 = new payment_1.Payment();
        var ob = new loan_1.Loan();
        if (this.GetInput[3] >= p1.getEmiNum()) {
            this.amountPaid = loan_1.Loan.GetEmiAmount();
            console.log("received data to balance controller:" + this.amountPaid);
        }
        else {
            this.amountPaid = loan_1.Loan.GetEmiAmount();
            console.log("received data to balance controller:" + this.amountPaid);
        }
        this.remaingAmount = loan_1.Loan.GetEmiAmount() - this.amountPaid;
        this.remaingEMIs = Math.ceil(this.remaingAmount / loan_1.Loan.GetEmiAmount());
    };
    BalanceController.prototype.displayDetails = function () {
        // console.log("received data to balance controller:" + this.amountPaid);
        // console.log("received data to balance controller:" + this.remaingAmount);
        // console.log("received data to balance controller:" + this.remaingEMIs);
    };
    return BalanceController;
}());
exports.BalanceController = BalanceController;

"use strict";
exports.__esModule = true;
exports.LoanController = void 0;
var loan_1 = require("../model/loan");
var LoanController = /** @class */ (function () {
    function LoanController(input) {
        this.GetInput = input;
        this.setInputDetails();
    }
    LoanController.prototype.setInputDetails = function () {
        new loan_1.Loan(this.GetInput);
        console.log("received data to loan controller:" + this.GetInput);
    };
    return LoanController;
}());
exports.LoanController = LoanController;

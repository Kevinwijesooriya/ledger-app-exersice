"use strict";
exports.__esModule = true;
exports.BankController = void 0;
var BankController = /** @class */ (function () {
    function BankController(loanData) {
        this.loanData = loanData;
        this.paymentData = Array();
    }
    BankController.prototype.addPaymentData = function (paymentData) {
        this.paymentData.push(paymentData);
    };
    BankController.prototype.getLoanData = function () {
        return this.loanData;
    };
    BankController.prototype.getPaymentData = function () {
        return this.paymentData;
    };
    BankController.storeData = function (bankController) {
        this.allData = [];
        this.allData.push(bankController);
    };
    BankController.findAccount = function (BankName, Name) {
        var loan = { BankName: 'IDIDI', Name: 'Dale', PrincipalAmount: '5000', NumberOfYear: '1', rate: '6', Interest: 300, AmountToPay: 5300, EmiAmount: 300 };
        return loan;
    };
    return BankController;
}());
exports.BankController = BankController;

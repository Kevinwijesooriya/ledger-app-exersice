"use strict";
exports.__esModule = true;
exports.BankController = void 0;
var BankController = /** @class */ (function () {
    function BankController(loanData) {
        this.loanData = loanData;
        this.paymentData = Array();
    }
    BankController.prototype.addPaymentData = function (paymentData) {
        console.log;
        this.paymentData.push(paymentData);
    };
    BankController.prototype.getLoanData = function () {
        return this.loanData;
    };
    BankController.prototype.getPaymentData = function () {
        return this.paymentData;
    };
    BankController.storeData = function (bankController) {
        this.allData.push(bankController);
    };
    BankController.findAccount = function (BankName, Name) {
        var accountIndex;
        for (var i = 0; i < this.allData.length; i++) {
            if (this.allData[i].loanData.BankName === BankName && this.allData[i].loanData.Name === Name) {
                accountIndex = i;
            }
        }
        return this.allData[accountIndex].loanData;
    };
    BankController.allData = [];
    return BankController;
}());
exports.BankController = BankController;

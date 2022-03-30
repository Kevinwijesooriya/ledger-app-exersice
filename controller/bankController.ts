import { Loan } from "../model/loan";
import { Payment } from "../model/payment";

class BankController {
  amountPaid: number;
  emiMonthsLeft: number;
  loanData: Loan;
  paymentData: Payment[];
  static allData: Array<BankController>;

  constructor(loanData: Loan) {
    this.loanData = loanData;
    this.paymentData = Array<Payment>();
  }

  addPaymentData(paymentData: Payment) {
    this.paymentData.push(paymentData);
  }

  getLoanData() {
    return this.loanData;
  }

  getPaymentData() {
    return this.paymentData;
  }

  static storeData(bankController: BankController) {
    this.allData = [];
    this.allData.push(bankController);
  }

  static findAccount(BankName: string, Name: string): any {}
}
export { BankController };

import { Loan } from "../model/loan";
import { Payment } from "../model/payment";

class BankController {
  amountPaid: number;
  emiMonthsLeft: number;
  loanData: Loan;
  paymentData: Payment[];
  static allData: Array<BankController>;
  BankName: any;
  Name: any;

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

  static findAccount(BankName: string, Name: string): any {
    let loan = {BankName: 'IDIDI', Name: 'Dale',PrincipalAmount: '5000',NumberOfYear: '1',rate: '6',Interest: 300,AmountToPay: 5300,EmiAmount: 300}
    return loan
  }
}
export { BankController };

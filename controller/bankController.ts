import { Loan } from "../model/loan";
import { Payment } from "../model/payment";

class BankController {
  amountPaid: number;
  emiMonthsLeft: number;
  loanData: Loan;
  paymentData: Payment[];

  constructor(loanData: Loan) {
    this.loanData = loanData;
    this.paymentData = Array<Payment>();
  }

  addPaymentData(paymentData: Payment) {
    this.paymentData.push(paymentData);
  }
}
export { BankController };

import { Loan } from "../model/loan";
import { Payment } from "../model/payment";

class BankController {
  amountPaid: number;
  emiMonthsLeft: number;
  loanData: Loan;
  paymentData: Payment[];
  static allData: BankController[] = [];
  BankName: any;
  Name: any;

  constructor(loanData: Loan) {
    this.loanData = loanData;
    this.paymentData = Array<Payment>();
  }

  addPaymentData(paymentData: Payment) {
    console.log
    this.paymentData.push(paymentData);
  }

 getLoanData() {
    return this.loanData;
  }

  getPaymentData() {
    return this.paymentData;
  }

  static storeData(bankController: BankController) {
    this.allData.push(bankController);
  }

  static findAccount(BankName: string, Name: string): any {
    let accountIndex;
    
    for(let i=0; i<this.allData.length; i++){
      if(this.allData[i].loanData.BankName  === BankName && this.allData[i].loanData.Name  === Name){
        accountIndex = i
      }
    }

    return this.allData[accountIndex].loanData
  }
}
export { BankController };

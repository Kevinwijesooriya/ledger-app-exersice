import { Balance } from "../model/balance";
import { Payment } from "../model/payment";
import { Loan } from "../model/loan";
import { LoanController } from "../controller/loanController";

class BalanceController {
  GetInput: number[];
  amountPaid: number;
  remaingAmount: number;
  remaingEMIs: number;

  constructor() {}

  setValues(input) {
    this.GetInput = input;
    this.setInputDetails();
    this.CalculateAmountPaid();
    this.displayDetails();
  }
  public setInputDetails() {
    const ob = new Balance();
    ob.setValues(this.GetInput);
    console.log("received data to balance controller:" + this.GetInput);
  }
  public CalculateAmountPaid() {
    const p1 = new Payment();
    new Loan();

    if (this.GetInput[3] >= p1.getEmiNum()) {
      console.log("received data to balance controller:" + this.amountPaid);
    } else {
      console.log("received data to balance controller:" + this.amountPaid);
    }
    this.remaingAmount = -this.amountPaid;
  }
  public displayDetails() {
    // console.log("received data to balance controller:" + this.amountPaid);
    // console.log("received data to balance controller:" + this.remaingAmount);
    // console.log("received data to balance controller:" + this.remaingEMIs);
  }
}
export { BalanceController };

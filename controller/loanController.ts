import { Loan } from "../model/loan";
import { inputSetter } from "../utils/inputSetter";
import { InputController } from "./inputController";

class LoanController implements inputSetter {
  repayAmount: number;
  interest: number;
  emi: number;

  GetInput: number[];
  constructor() {}

  setValues(input) {
    this.GetInput = input;
    this.setInputDetails();
    this.CalculateInterest();
    this.CalculateAmountToPay();
    this.CalculateEmiAmount();
  }
  public CalculateInterest() {
    this.interest =
      this.GetInput[3] * this.GetInput[4] * (this.GetInput[5] / 100);
    return this.interest;
  }
  public CalculateAmountToPay() {
    this.repayAmount = -(-this.GetInput[3] - this.interest);
    return this.repayAmount;
  }
  public CalculateEmiAmount() {
    this.emi = Math.ceil((this.repayAmount / 12) * this.GetInput[4]);
    return this.emi;
  }
  public setInputDetails() {
    const x = this.CalculateInterest();
    const y = this.CalculateAmountToPay();
    const v = this.CalculateEmiAmount();

    const ob = new Loan();
    ob.setValues(this.GetInput, x, y, v);
  }
}

export { LoanController };

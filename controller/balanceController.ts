import { Balance } from "../model/balance";
import { inputSetter } from "../utils/inputSetter";

class BalanceController implements inputSetter {
  amountPaid: number;
  emiMonthsLeft: number;

  constructor(input) {
      
  }
  public setInputDetails() {
    // this.amountPaid = this.calculateAmountPaid();
    // this.emiMonthsLeft = this.calculateEmiMonthsLeft();
    new Balance(this.amountPaid, this.emiMonthsLeft);
  }

  calculateAmountPaid() {
    // return amountPaid;
  }
  calculateEmiMonthsLeft() {
    // return emiMonthsLeft
  }
}
export { BalanceController };

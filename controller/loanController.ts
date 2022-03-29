import { Loan } from "../model/loan";
import { inputSetter } from "../utils/inputSetter";
import { BankController } from "./bankController";

class LoanController implements inputSetter {
  loanData: Loan;

  constructor(input) {
    this.setInputDetails(input);
  }
  public setInputDetails(input) {
    const PrincipalAmount:Number = input[3];
    const NumberOfYear = input[4];
    const rate = input[5];
    const Interest:Number = this.calculateInterestAmount(
      PrincipalAmount,
      NumberOfYear,
      rate
    );
    const AmountToPay:Number = Number.parseInt(PrincipalAmount.toString()) + Number.parseFloat(Interest.toString());
    const EmiAmount = this.calculateInterestAmount(
      PrincipalAmount,
      NumberOfYear,
      rate
    );

    this.loanData = new Loan(
      PrincipalAmount,
      NumberOfYear,
      rate,
      Interest,
      AmountToPay,
      EmiAmount
    );
  }

  allocateLoan() {
    const bankController = new BankController(this.loanData);
  }
  calculateEmiAmount(AmountToPay, NumberOfYear) {
    return Math.ceil(AmountToPay / (NumberOfYear * 12));
  }
  calculateInterestAmount(PrincipalAmount, NumberOfYear, rate) {
    return Math.ceil((PrincipalAmount * NumberOfYear * rate) / 100);
  }
}

export { LoanController };

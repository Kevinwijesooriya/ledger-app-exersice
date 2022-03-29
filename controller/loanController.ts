import { Loan } from "../model/loan";
import { inputSetter } from "../utils/inputSetter";
import { BankController } from "./bankController";

class LoanController implements inputSetter {
  loanData: Loan;

  constructor(input) {
    this.setInputDetails(input);
  }
  public setInputDetails(input) {
    const PrincipalAmount = input[3];
    const NumberOfYear = input[4];
    const rate = input[5];
    const Interest = this.calculateInterestAmount(
      PrincipalAmount,
      NumberOfYear,
      rate
    );
    const AmountToPay = PrincipalAmount + Interest;
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
    console.log("received data to loan controller");
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

import { Balance } from "../model/balance";
import { Loan } from "../model/loan";
import { inputSetter } from "../utils/inputSetter";
import { BankController } from "./bankController";

class BalanceController implements inputSetter {
  emiMonthsLeft: number;
  balanceData: Balance;
  bankController: BankController;

  constructor(input) {
    this.setInputDetails(input);
  }
  public setInputDetails(input) {
    const BankName = input[1];
    const Name = input[2];
    const balanceMonth = input[3];
    const amountPaid = this.countLoanAmountPaid(
      this.bankController,
      balanceMonth
    );

    this.bankController = BankController.findAccount(BankName, Name);
    const emiMonthsLeft = this.countEMIMonthsLeft( this.bankController, amountPaid);
    this.balanceData = new Balance(amountPaid, emiMonthsLeft);
    this.displayBalanceDetails();
    console.log("received data to payment controller:");
  }

  displayBalanceDetails() {
    const BankName = this.bankController.BankName;
    const Name = this.bankController.Name;
    const amountPaid = this.balanceData.amountPaid;
    const emiMonthsLeft = this.balanceData.emiMonthsLeft;
    console.log(`display balance :::::: ${BankName} ${Name} ${amountPaid} ${emiMonthsLeft}`);
  }
  countLoanAmountPaid(
    accountData: BankController,
    balanceMonth: number
  ): number {
    return 750;
  }

  countEMIMonthsLeft(loanData, amountPaid: number): number {
    return 677;
  }
}
export { BalanceController };

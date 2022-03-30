import { LoanController } from "../controller/loanController";
class Loan {
  PrincipalAmount: number;
  rate: number;
  NumberOfYear: number;
  Interest: number;
  public AmountToPay: number;
  EmiAount: number;

  Paymnent: number;

  constructor() {}

  setValues(LoanData, Interest, AmountToPay, EmiAount) {
    this.PrincipalAmount = LoanData[3];
    this.rate = LoanData[5];
    this.NumberOfYear = LoanData[4];
    this.Interest = Interest;
    this.AmountToPay = AmountToPay;
    this.EmiAount = EmiAount;

    this.GetPrincipleAmount();
  }

  GetPrincipleAmount(): void {
    console.log(
      "loan modle class:" + this.PrincipalAmount,
      this.rate,
      this.NumberOfYear,

      this.Interest,
      this.AmountToPay,
      this.EmiAount
    );
  }
  GetRate() {
    return this.rate;
  }
  GetNumberOfYears() {
    return this.NumberOfYear;
  }
  GetInterest() {
    return this.Interest;
  }
  public GetEmiAmount(): number {
    console.log("dddddd:" + this.AmountToPay);
    return this.AmountToPay;
  }
  GetAmountToPay() {
    return this.AmountToPay;
  }
}

export { Loan };

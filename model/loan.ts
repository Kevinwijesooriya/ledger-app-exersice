import { LoanController } from "../controller/loanController";
class Loan {
  BankName: string;
  Name: string;
  PrincipalAmount: Number;
  rate: Number;
  NumberOfYear: Number;
  Interest: Number;
  AmountToPay: Number;
  EmiAmount: Number;
  Payment: Number;

  constructor(
    BankName,
    Name,
    PrincipalAmount,
    NumberOfYear,
    rate,
    Interest,
    AmountToPay,
    EmiAmount
  ) {
    this.BankName = BankName;
    this.Name = Name;
    this.PrincipalAmount = PrincipalAmount;
    this.NumberOfYear = NumberOfYear;
    this.rate = rate;
    this.Interest = Interest;
    this.AmountToPay = AmountToPay;
    this.EmiAmount = EmiAmount;
    this.GetPrincipleAmount();
  }

  GetPrincipleAmount(): void {
    console.log(
      this.PrincipalAmount,
      " , ",
      this.rate,
      " , ",
      this.NumberOfYear,
      " , ",
      this.Interest,
      " , ",
      this.AmountToPay,
      " , ",
      this.EmiAmount
    );
  }

  GetRate(): void {}
  GetNumberOfYears(): void {}
  GetInterest(): void {}
  GetEmiAmount(): void {}
  GetAmountToPay(): void {}
  SetInterest(): void {}
  SetAmountToPay(): void {}
  getBankName() {
    return this.BankName;
  }
  getName() {
    return this.Name;
  }
}

export { Loan };

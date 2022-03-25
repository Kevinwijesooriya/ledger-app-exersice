class Loan {
  PrincipalAmount: Number;
  rate: Number;
  NumberOfYear: Number;
  Interest: Number;
  AmountToPay: Number;
  EmiAount: Number;
  Paymnent: Number;

  constructor(
    PrincipalAmount: Number,
    rate: Number,
    NumberOfYear: Number,
    Interest: Number,
    AmountToPay: Number,
    EmiAount: Number,
    Paymnent: Number
  ) {
    this.PrincipalAmount = PrincipalAmount;
    this.rate = rate;
    this.NumberOfYear = NumberOfYear;
    this.Interest = Interest;
    this.AmountToPay = AmountToPay;
    this.EmiAount = EmiAount;
    this.Paymnent = Paymnent;
  }

  GetPrincipleAmount(): void {}
  GetRate(): void {}
  GetNumberOfYears(): void {}
  GetInterest(): void {}
  GetEmiAmount(): void {}
  GetAmountToPay(): void {}
  SetInterest(): void {}
  SetAmountToPay(): void {}
}

class Loan {
  PrincipalAmount: Number;
  rate: Number;
  NumberOfYear: Number;
  Interest: Number;
  AmountToPay: Number;
  EmiAount: Number;
  Paymnent: Number;

  constructor(LoanData) {
    this.PrincipalAmount = LoanData[1];
    this.rate = LoanData[2];
    this.NumberOfYear = LoanData[3];
    this.Interest = LoanData[4];
    this.GetPrincipleAmount();
  }

  GetPrincipleAmount(): void {
    console.log(
      this.PrincipalAmount,
      this.rate,
      this.NumberOfYear,
      this.Interest
    );
  }
  GetRate(): void {}
  GetNumberOfYears(): void {}
  GetInterest(): void {}
  GetEmiAmount(): void {}
  GetAmountToPay(): void {}
  SetInterest(): void {}
  SetAmountToPay(): void {}
}

export { Loan };

class Balance {
  amountPaid: number;
  emiMonthsLeft: number;
  EmiAmount: any;
  AmountToPay: any;

  constructor(amountPaid, emiMonthsLeft) {
    this.amountPaid = amountPaid;
    this.emiMonthsLeft = emiMonthsLeft;
  }

  getamountPaid() {
    return this.amountPaid;
  }

  getemiMonthsLeft() {
    return this.emiMonthsLeft;
  }
}
export { Balance };

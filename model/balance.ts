class Balance {
  amountPaid: number;
  emiMonthsLeft: number;

  constructor(amountPaid, emiMonthsLeft) {
    this.amountPaid = amountPaid;
    this.emiMonthsLeft = emiMonthsLeft;
  }

  get getamountPaid() {
    return this.amountPaid;
  }

  get getemiMonthsLeft() {
    return this.emiMonthsLeft;
  }
}
export { Balance };

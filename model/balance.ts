class Balance {
  amountPaid: number;
  emiMonthsLeft: number;
  EmiAmount: any;
  AmountToPay: any;

  checkMonth: Number;

  constructor() {}

  setValues(PaymentData) {
    this.checkMonth = PaymentData[3];

    console.log("balance model class:" + this.checkMonth);
  }

  getamountPaid() {
    return this.amountPaid;
  }

  getemiMonthsLeft() {
    return this.emiMonthsLeft;
  }
}
export { Balance };

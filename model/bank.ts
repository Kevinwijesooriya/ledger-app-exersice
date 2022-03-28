import { DisplayDataGetter } from "../utils/displayDataGetter";

class Bank implements DisplayDataGetter {
  bankName: number;

  constructor(bankName) {
    this.bankName = bankName;
  }

  get getbankName() {
    return this.bankName;
  }

  getDisplayDetails() {
    return console.log(this.bankName);
  }
}
export { Bank };

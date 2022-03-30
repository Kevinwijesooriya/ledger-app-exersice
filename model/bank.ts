import { DisplayDataGetter } from "../utils/displayDataGetter";

class Bank implements DisplayDataGetter {
  bankName: string;

  constructor(bankName) {
    this.bankName = bankName;
  }

  getbankName() {
    return this.bankName;
  }

  getDisplayDetails() {
    return console.log(this.bankName);
  }
}
export { Bank };

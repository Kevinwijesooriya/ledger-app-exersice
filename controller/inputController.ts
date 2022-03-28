import { BalanceController } from "./balanceController";
import { LoanController } from "./loanController";
import { PaymentController } from "./paymentController";

class InputController {
  toKanizeDtatSet: String;

  constructor(inputData) {
    this.tokanize(inputData);
  }

  tokanize(inputData) {
    for (let i = 0; i < inputData.length; i++) {
      const token = inputData[i].split(" ");
      const key = token[0];

      console.log("received data to input controller:" + key);

      switch (key) {
        case "LOAN":
          new LoanController(token);

          break;
        case "PAYMENT":
          new PaymentController(token);

          break;
        case `BALANCE`:
          new BalanceController(token);

          break;
      }
    }
  }
}

export { InputController };

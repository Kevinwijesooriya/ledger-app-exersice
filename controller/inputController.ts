import { BalanceController } from "./balanceController";
import { LoanController } from "./loanController";
import { PaymentController } from "./paymentController";

class InputController {
  constructor(inputData) {
    this.tokanize(inputData);
  }

  tokanize(inputData) {
    for (let i = 0; i < inputData.length; i++) {
      const token = inputData[i].split(" ");
      const key = token[0];

      switch (key) {
        case "LOAN":
          const loanController = new LoanController(token);
          loanController.allocateLoan();
          break;
        case "PAYMENT":
          const paymentController = new PaymentController(token);
          paymentController.addPaymentData();

          break;
        case `BALANCE`:
          const balanceController = new BalanceController(token);
          balanceController.displayBalanceDetails();

          break;
      }
    }
  }
}

export { InputController };

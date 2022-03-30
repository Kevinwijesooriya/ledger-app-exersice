import { Payment } from "../model/payment";
import { inputSetter } from "../utils/inputSetter";
import { BankController } from "./bankController";

class PaymentController implements inputSetter {
  lumpSum: number;
  emiNum: number;
  paymentData: Payment;
  bankController: BankController;

  constructor(input) {
    this.setInputDetails(input);
  }
  public setInputDetails(input) {
    const BankName = input[1];
    const Name = input[2];
    const lumpSum = input[3];
    const emiNum = input[4];
    this.bankController = BankController.findAccount(BankName, Name);
    this.paymentData = new Payment(lumpSum, emiNum);
    console.log("received data to payment controller:");
  }

  addPaymentData() {
    this.bankController.addPaymentData(this.paymentData);
  }
}
export { PaymentController };

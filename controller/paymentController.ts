import { Payment } from "../model/payment";
import { inputSetter } from "../utils/inputSetter";

class PaymentController implements inputSetter {
  lumpSum: number;
  emiNum: number;

  constructor(input) {
    this.setInputDetails(input);
  }
  public setInputDetails(input) {
    const lumpSum = input[3];
    const emiNum = input[4];
    new Payment(lumpSum, emiNum);
    console.log("received data to payment controller:");
  }
}
export { PaymentController };

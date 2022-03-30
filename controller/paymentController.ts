import { Payment } from "../model/payment";

class PaymentController {
  GetInput: string[];

  constructor(input) {
    this.GetInput = input;
    this.setInputDetails();
  }
  public setInputDetails() {
    const ob = new Payment();
    ob.setValues(this.GetInput);
    console.log("received data to paymnet controller:" + this.GetInput);
  }
}
export { PaymentController };

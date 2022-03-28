import { Loan } from "../model/loan";
import { inputSetter } from "../utils/inputSetter";
import { InputController } from "./inputController";

class LoanController implements inputSetter {
  GetInput: string[];

  constructor(input) {
    this.GetInput = input;
    this.setInputDetails();
  }
  public setInputDetails() {
    new Loan(this.GetInput);
    console.log("received data to loan controller:" + this.GetInput);
  }
}

export { LoanController };

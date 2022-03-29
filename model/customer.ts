import { DisplayDataGetter } from "../utils/displayDataGetter";

class Customer implements DisplayDataGetter {
  name: number;

  constructor(name) {
    this.name = name;
  }

  getname() {
    return this.name;
  }

  getDisplayDetails() {
    return console.log(this.name);
  }
}
export { Customer };

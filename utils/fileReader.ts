import * as fs from "fs";
import { InputController } from "../controller/inputController";

class FileReader {
  constructor() {}
  public readInputFile(filename) {
    fs.readFile(`./../main/${filename}`, function (err, data) {
      if (err) throw err;
      const inputData = data.toString().replace(/\r\n/g, "\n").split("\n");
      new InputController(inputData);
    });
  }
}
export { FileReader };
const fileReader = new FileReader();
fileReader.readInputFile("input2.txt");

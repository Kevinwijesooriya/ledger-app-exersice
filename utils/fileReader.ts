import * as fs from "fs";

class FileReader {
  constructor() {}
  public readInputFile(filename) {
    fs.readFile(`./../main/${filename}`, function (err, data) {
      if (err) throw err;
      const arr = data.toString().replace(/\r\n/g, "\n").split("\n");
    });
  }
}
export { FileReader };

class Payment {
  lumpSum: number;
  emiNum: number;

  constructor() {}

  setValues(inputData) {
    this.lumpSum = inputData[3];
    this.emiNum = inputData[4];

    console.log(this.lumpSum);
    console.log(this.emiNum);
  }

  getLumpSum() {
    console.log("ddddddd:" + this.lumpSum);
    return this.lumpSum;
  }

  getEmiNum() {
    return this.emiNum;
  }
}
export { Payment };

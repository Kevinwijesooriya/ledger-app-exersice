class Payment {
  lumpSum: number;
  emiNum: number;

  constructor(lumpSum, emiNum) {
    this.lumpSum = lumpSum;
    this.emiNum = emiNum;
  }

  getLumpSum() {
    return this.lumpSum;
  }

  getEmiNum() {
    return this.emiNum;
  }
}
export { Payment };

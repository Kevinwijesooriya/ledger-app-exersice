class Payment {
  lumpSum: number;
  emiNum: number;

  constructor(lumpSum, emiNum) {
    this.lumpSum = lumpSum;
    this.emiNum = emiNum;
  }

  get getLumpSum() {
    return this.lumpSum;
  }

  get getEmiNum() {
    return this.emiNum;
  }
}
export { Payment };

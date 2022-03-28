const file = require('./fileReader.js');

test('read file', () => {
  expect(file.FileReader("input1.txt")).toBe(3);
});
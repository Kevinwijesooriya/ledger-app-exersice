"use strict";
exports.__esModule = true;
exports.FileReader = void 0;
var fs = require("fs");
var inputController_1 = require("../controller/inputController");
var FileReader = /** @class */ (function () {
    function FileReader() {
    }
    FileReader.prototype.readInputFile = function (filename) {
        fs.readFile("./../main/".concat(filename), function (err, data) {
            if (err)
                throw err;
            var inputData = data.toString().replace(/\r\n/g, "\n").split("\n");
            new inputController_1.InputController(inputData);
        });
    };
    return FileReader;
}());
exports.FileReader = FileReader;
var fileReader = new FileReader();
fileReader.readInputFile("input2.txt");

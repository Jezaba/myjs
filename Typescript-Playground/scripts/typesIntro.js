"use strict";
let isDog = true;
let dogAge = 5;
let dogName = "Doggy";
let dogNames = ["A", "B", "C", "D"];
let dogAges = [4, 6, 2.1, 8];
let someUnknownThings = [true, "string", 55];
function doStuff() {
    console.log("doing stuff");
}
doStuff();
//ENUM
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["OUT_OF_MEMORY"] = 123] = "OUT_OF_MEMORY";
    ErrorCode[ErrorCode["WRONG_INPUT"] = 234] = "WRONG_INPUT";
})(ErrorCode || (ErrorCode = {}));
let error = ErrorCode.WRONG_INPUT;
//TUPEL
let tuple = ['Otto', 25];

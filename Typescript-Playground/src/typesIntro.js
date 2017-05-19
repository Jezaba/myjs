"use strict";
var isDog = true;
var dogAge = 5;
var dogName = "Doggy";
var dogNames = ["A", "B", "C", "D"];
var dogAges = [4, 6, 2.1, 8];
var someUnknownThings = [true, "string", 55];
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
var error = ErrorCode.WRONG_INPUT;
//TUPEL
var tuple = ['Otto', 25];

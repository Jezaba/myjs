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
var Color;
(function (Color) {
    Color[Color["RED"] = 3] = "RED";
    Color[Color["BLUE"] = 44.1] = "BLUE";
})(Color || (Color = {}));

"use strict";
//Boolean
var isThisOK = false;
//Numbers
var myNumber = 3.3;
//string
var myName = "Otto";
//Template strings
var greeting = "Hello, " + myName;
var greeting2 = 'Hello, ${myName}';
//Arrays
var count = [1, 2, 2, 3, 4];
var count2 = [1, 2, 2, 3, 4];
var count3 = [1, 2, 3, 4, 5];
//Any Type
var anything = 4;
anything = "ölkj";
anything = false;
//Return nothing --> void
function greeter(name) {
    console.log("hello " + name);
}
//Enums
var joystickstatus = 1;
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
if (joystickstatus === Directions.Left) {
    console.log("muv2left");
}

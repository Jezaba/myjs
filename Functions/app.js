"use strict";
function greet(firstName, lastName) {
    if (lastName === void 0) { lastName = ""; }
    console.log("Hello1 " + firstName + " " + lastName);
}
greet("Susi");
var Greeter = (function () {
    function Greeter() {
        this.firstname = "Olga";
    }
    Greeter.prototype.sayHello = function () {
        setTimeout(function () {
            // this zeigt nicht mehr auf firsname
            // sondern auf das Window Objekt,
            // deshalb Arrowfunction verwenden
            // siehe sayHello2()
            console.log("Hello2, " + this.firstname);
        }, 500);
    };
    Greeter.prototype.sayHello2 = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello3, " + _this.firstname);
        }, 500);
    };
    return Greeter;
}());
var g = new Greeter();
g.sayHello();
g.sayHello2();

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class Animal{        
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("my name = " + this.name + " i lof " + distance + " Meter.");
    };
    return Animal;
}());
// da Animal abstract ist, kann es nicht instanziert werden
var ani = new Animal("Pferd");
ani.walk(500);
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(theName) {
        return _super.call(this, theName) || this;
    }
    return Snake;
}(Animal));
var snaki = new Snake("Serpente");
snaki.walk(55);

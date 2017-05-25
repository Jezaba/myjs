"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class Cat {
    constructor(name, numberOfLives) {
        this.name = name;
        this.numberOfLives = numberOfLives;
    }
}
exports.Cat = Cat;
class Dog {
    constructor(name, isBarkingOnNeighbors) {
        this.name = name;
        this.isBarkingOnNeighbors = isBarkingOnNeighbors;
    }
}
exports.Dog = Dog;
//T & U ist der Intersection-Type
function compose(obj1, obj2) {
    return _.assignIn({}, obj1, obj2);
}
const monster = compose(new Cat('Mizzi', 9), new Dog("Otto", false));
monster.name = "SparkiMizzi";
monster.numberOfLives = 100;
monster.isBarkingOnNeighbors = true;
function destroyIfTooLong(obj) {
    if (obj.length > 1000) {
        obj.destroy();
    }
    else {
        console.log("limit isn't reached. Only", obj.length);
    }
}
class Reise {
    constructor(length) {
        this.length = length;
    }
    destroy() {
        console.log("wird destroyed", this.length);
    }
}
let reise = new Reise(1000);
destroyIfTooLong(reise);

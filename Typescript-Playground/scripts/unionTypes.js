"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Person = Person;
//Nur bestimmte können renamed werden
function rename(thing, newName) {
    thing.name = newName;
}
rename(new Cat('Fluffy', 9), "mizzy");
rename(new Dog('Spark', true), "speedy");
rename(new Person('Ben', 19), "benny");
function printDate(date) {
    //prints the date
}
printDate(new Date());
printDate('8,4,64');

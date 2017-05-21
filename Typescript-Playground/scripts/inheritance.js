"use strict";
function testAnimal(animal) {
    console.log("number of legs: ", animal.numberOfLegs);
    animal.makeSound();
    animal.eatFood("milk");
    animal.eatFood("meat2");
}
class Animal {
    constructor(numberOfLegs) {
        this.numberOfLegs = numberOfLegs;
    }
    eatFood(food) {
        console.log("yam yam " + food);
    }
}
class Dog extends Animal {
    constructor() {
        super(4);
    }
    makeSound() {
        console.log("Wau");
    }
    eatFood(food) {
        if (food !== "meat") {
            console.log("bääh");
            return;
        }
        super.eatFood(food);
    }
}
let hund = new Dog();
hund.eatFood("holz");
hund.makeSound();
//hund.numberOfLegs = 3;
console.log(hund.numberOfLegs);

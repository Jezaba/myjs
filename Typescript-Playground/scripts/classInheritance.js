"use strict";
class Person2 {
    constructor(name) {
        console.log("Person constructor " + name);
    }
    getID() { return 10; }
}
class Employee extends Person2 {
    constructor(name) {
        super(name);
        console.log("Employee ctor " + name);
    }
    getID() { return super.getID(); }
}
let e = new Employee("Otto");
console.log(e.getID());

"use strict";
let firstname = "Otto";
let lastname = "Bing";
let person = {
    firstname,
    lastname
};
function createPerson(a, b) {
    let c = a + " - " + b;
    return { a, b, c };
}
console.log(person.firstname);
console.log(person.lastname);

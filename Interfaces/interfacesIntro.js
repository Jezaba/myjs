//Eine Variante
let santa = {
    numberOfKidsToVisit: 987634239,
    test: () => { },
    giveGift: (callback) => { callback(true); },
    fly: () => { }
};
//Eine andere Variante
class SS {
    test() { }
    giveGift(callback) { }
    fly() { }
}
if (santa.fly) {
    santa.fly();
}
//  Übung über anonyme Interfaces
function getNameAndAge() {
    return ['Slava', 27];
}
// im nextn  kann man ned wirkl wissen, was was bedeuted
//deshalb kann man hier gut interfaces (weiter unten) verwenden.
//Und weil wir das hier nur in einem kurzen Teil brauchen, machen wir es anonym
let tuple = getNameAndAge();
let someName = tuple[0];
//Hier das Ano..Interface
function getNameAndAge2() {
    return {
        name: "Slava",
        age: 27
    };
}

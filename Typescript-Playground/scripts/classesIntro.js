"use strict";
class Car {
    constructor(brandName) {
        this.brandName = brandName;
        this.brandName = brandName;
        Car._counter++;
        this._seriesnumber = Car._counter;
    }
    static BuyCar(brandName, ownerName) {
        let car = new Car(brandName);
        car.OwnerName = ownerName;
        return car;
    }
    startCar() {
        this._startEnginge();
    }
    _startEnginge() {
        console.log("starting engine ...");
    }
    get SeriesNumber() {
        return this._seriesnumber;
    }
    get OwnerName() {
        return this._ownerName; //if not set it'll be undifined - also mit ? bestücken 
    }
    set OwnerName(name) {
        this._ownerName = name;
    }
}
Car._counter = 0;
let car = Car.BuyCar("Mustang", "Otto");
car.startCar();
console.log(car.brandName, car.SeriesNumber);

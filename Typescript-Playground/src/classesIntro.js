"use strict";
var Car = (function () {
    function Car(brandName) {
        this.brandName = brandName;
        this.brandName = brandName;
        Car._counter++;
        this._seriesnumber = Car._counter;
    }
    Car.BuyCar = function (brandName, ownerName) {
        var car = new Car(brandName);
        car.OwnerName = ownerName;
        return car;
    };
    Car.prototype.startCar = function () {
        this._startEnginge();
    };
    Car.prototype._startEnginge = function () {
        console.log("starting engine ...");
    };
    Object.defineProperty(Car.prototype, "SeriesNumber", {
        get: function () {
            return this._seriesnumber;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "OwnerName", {
        get: function () {
            return this._ownerName; //if not set it'll be undifined - also mit ? bestücken 
        },
        set: function (name) {
            this._ownerName = name;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
Car._counter = 0;
var car = Car.BuyCar("Mustang", "Otto");
car.startCar();
console.log(car.brandName, car.SeriesNumber);

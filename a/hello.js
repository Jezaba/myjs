"use strict";
var myNamen = "Jürgen";
var myElement = document.getElementById("myName");
//let myElement=(<HTMLScriptElement[]><any>document.getElementById("myName"));
myElement.innerHTML = "My Name is " + myNamen;
var Reisekosten = (function () {
    function Reisekosten() {
    }
    Reisekosten.prototype.Gesamtbetrag = function () {
        this.Betrag = 999;
    };
    return Reisekosten;
}());
var ReisekostenPosition = (function () {
    function ReisekostenPosition() {
    }
    ReisekostenPosition.prototype.BerechneKMGeld = function () {
        if (this.Km != null && this.KmGeld != null) {
            this.Betrag = this.Km * this.KmGeld;
        }
        else {
            this.Betrag = 0;
        }
    };
    return ReisekostenPosition;
}());
(function (Reisekosten) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Offen"] = 0] = "Offen";
        StatusEnum[StatusEnum["Geschlossen"] = 1] = "Geschlossen";
    })(StatusEnum = Reisekosten.StatusEnum || (Reisekosten.StatusEnum = {}));
})(Reisekosten || (Reisekosten = {}));
var FahrzeugtypenEnum;
(function (FahrzeugtypenEnum) {
    FahrzeugtypenEnum[FahrzeugtypenEnum["Auto"] = 0] = "Auto";
    FahrzeugtypenEnum[FahrzeugtypenEnum["Motorrad"] = 1] = "Motorrad";
    FahrzeugtypenEnum[FahrzeugtypenEnum["\u00F6ffi"] = 2] = "\u00F6ffi";
    FahrzeugtypenEnum[FahrzeugtypenEnum["Flugzeug"] = 3] = "Flugzeug";
})(FahrzeugtypenEnum || (FahrzeugtypenEnum = {}));

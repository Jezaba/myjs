"use strict";
let myNamen = "Jürgen";
let myElement = document.getElementById("myName");
//let myElement=(<HTMLScriptElement[]><any>document.getElementById("myName"));
myElement.innerHTML = "My Name is " + myNamen;
class Reisekosten {
    Gesamtbetrag() {
        let lsSum = 0;
        this.Positionen.forEach(element => {
            lsSum += element.Kosten;
        });
        this.Kostengesamt = lsSum;
    }
}
class ReisekostenPosition {
    constructor() {
        this.mKosten = 0;
        this.mSatz = 1;
    }
    get Beschreibung() {
        if (this.mBeschreibung === null) {
            return "";
        }
        else {
            return this.mBeschreibung;
        }
    }
    set Beschreibung(tsBeschreibung) {
        this.mBeschreibung = tsBeschreibung;
    }
    get Satz() {
        return NZnumber(this.mSatz);
    }
    set Satz(tnSatz) {
        this.mSatz = tnSatz;
    }
    get Kosten() {
        return NZnumber(this.mKosten);
    }
    set Kosten(tnKosten) {
        this.mKosten = tnKosten;
    }
}
class KilometergeldPos extends ReisekostenPosition {
    get Fahrzeugtyp() {
        return this.mFahrzeugTyp;
    }
    set Fahrzeugtyp(tsFahrzeugtyp) {
        this.mFahrzeugTyp = tsFahrzeugtyp;
    }
    get Km() {
        return NZnumber(this.mKm);
    }
    set Km(tnKm) {
        this.mKm = tnKm;
    }
    get Satz() {
        return NZnumber(this.mSatz);
    }
    set Satz(tnSatz) {
        this.mSatz = tnSatz;
    }
    BerechneKosten() {
        this.mKosten = NZnumber(this.Satz, 0) * NZnumber(this.mKm, 0);
    }
}
class AussergewoehnlicheAusgabePos extends ReisekostenPosition {
    get Land() {
        return this.mLand;
    }
    set Land(tsLand) {
        this.mLand = tsLand;
    }
    BerechneKosten() {
        this.mKosten = NZnumber(this.mSatz, 0);
    }
}
class TaggeldPos extends ReisekostenPosition {
    get Mahlzeit() {
        return this.mMahlzeit;
    }
    set Mahlzeit(tsMahlzeit) {
        this.mMahlzeit = tsMahlzeit;
    }
    get Land() {
        return this.mLand;
    }
    set Land(tsLand) {
        this.mLand = tsLand;
    }
    BerechneKosten() {
        this.mKosten = NZnumber(this.mSatz, 0);
    }
}
class NaechtigungsgeldPos extends ReisekostenPosition {
    BerechneKosten() {
        this.mKosten = NZnumber(this.mKosten, 0);
    }
}
function NZnumber(namba, thenvalue = 0) {
    if (namba === null) {
        return 0;
    }
    return namba;
}
(function (Reisekosten) {
    var EnumStati;
    (function (EnumStati) {
        EnumStati[EnumStati["Offen"] = 0] = "Offen";
        EnumStati[EnumStati["Geschlossen"] = 1] = "Geschlossen";
    })(EnumStati = Reisekosten.EnumStati || (Reisekosten.EnumStati = {}));
    ;
    var EnumFahrzeugtypen;
    (function (EnumFahrzeugtypen) {
        EnumFahrzeugtypen[EnumFahrzeugtypen["PKW"] = "PKW"] = "PKW";
        EnumFahrzeugtypen[EnumFahrzeugtypen["Motorrad"] = "Motorrad"] = "Motorrad";
        EnumFahrzeugtypen[EnumFahrzeugtypen["Fahrrad"] = "Fahrrad"] = "Fahrrad";
        EnumFahrzeugtypen[EnumFahrzeugtypen["PKW_Klient"] = "PKW v. Klient"] = "PKW_Klient";
    })(EnumFahrzeugtypen = Reisekosten.EnumFahrzeugtypen || (Reisekosten.EnumFahrzeugtypen = {}));
    ;
    var EnumNebenkostenarten;
    (function (EnumNebenkostenarten) {
        EnumNebenkostenarten[EnumNebenkostenarten["null"] = ""] = "null";
        EnumNebenkostenarten[EnumNebenkostenarten["OeV_Inland"] = "ÖV Inland"] = "OeV_Inland";
        EnumNebenkostenarten[EnumNebenkostenarten["OeV_mit_Auslandsbezug"] = "ÖV mit Auslandsbezug"] = "OeV_mit_Auslandsbezug";
        EnumNebenkostenarten[EnumNebenkostenarten["Nebenkosten"] = "Nebenkosten"] = "Nebenkosten";
        EnumNebenkostenarten[EnumNebenkostenarten["Aussergwoehnliche_Ausgaben"] = "Aussergwöhnliche Ausgaben"] = "Aussergwoehnliche_Ausgaben";
        EnumNebenkostenarten[EnumNebenkostenarten["Auslandsdiaeten_JiP"] = "Auslandsdiäten JiP"] = "Auslandsdiaeten_JiP";
    })(EnumNebenkostenarten = Reisekosten.EnumNebenkostenarten || (Reisekosten.EnumNebenkostenarten = {}));
    ;
    var EnumMahlzeiten;
    (function (EnumMahlzeiten) {
        EnumMahlzeiten[EnumMahlzeiten["null"] = ""] = "null";
        EnumMahlzeiten[EnumMahlzeiten["nix"] = "keines"] = "nix";
        EnumMahlzeiten[EnumMahlzeiten["Mittagessen"] = "Mittagessen"] = "Mittagessen";
        EnumMahlzeiten[EnumMahlzeiten["Abendessen"] = "Abendessen"] = "Abendessen";
        EnumMahlzeiten[EnumMahlzeiten["MittagUndAbendessen"] = "Mittag & Abendessen"] = "MittagUndAbendessen";
    })(EnumMahlzeiten = Reisekosten.EnumMahlzeiten || (Reisekosten.EnumMahlzeiten = {}));
    ;
    var EnumLaender;
    (function (EnumLaender) {
        EnumLaender[EnumLaender["Oesterreich"] = 0] = "Oesterreich";
        EnumLaender[EnumLaender["Deutschland"] = 1] = "Deutschland";
        EnumLaender[EnumLaender["Schweiz"] = 2] = "Schweiz";
        EnumLaender[EnumLaender["Uruguay"] = 3] = "Uruguay";
    })(EnumLaender = Reisekosten.EnumLaender || (Reisekosten.EnumLaender = {}));
    ;
})(Reisekosten || (Reisekosten = {}));
/*
Abrechnung KmGelder
Datum Kraftfahrzeug ifs-MaOderKlient Satz Beschreibung(Start/Ziel,Zwech,NameMitfahrerin) Km Kosten
Abrechnung Öffis, Nabenkosten aupwergewöhnliche Ausgaben
Datum ArtNebenkosten(null,ÖV Inland,ÖV mit Auslandsbezug,Nebenkosten,Ausßergwöhnliche Ausgaben,Auslandsiäten JiP),
     Beschreibung(Start/Ziel,Grund u Zweck der Reise), Kosten
Abrechnung Taggerlder
Datum Std. Land(Staaten) Satz BezahlteMahlzeiten(null,keine,Mittagessen,Abendessen,Mittag&Abendessen) Kosten
Abrechnung Nächtigungsgelder
Datum Land(Staaten) Kosten
*/
let km = new KilometergeldPos();
//let ip = document.getElementById("ip").innerHTML = km.BerechneKosten();
myElement.innerHTML = "My Name is " + km.BerechneKosten();

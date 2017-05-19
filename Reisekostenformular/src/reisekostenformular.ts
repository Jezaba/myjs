let myNamen: string = "Jürgen";

let myElement = <HTMLScriptElement>document.getElementById("myName");
//let myElement=(<HTMLScriptElement[]><any>document.getElementById("myName"));

myElement.innerHTML = "My Name is " + myNamen;

interface IReisekostenPosition {
    datum: Date;
    kosten: number;
    beschreibung?: string;  //mit Fragezeichen ist es ein optionale Datentyp
    satz?: number;
    kfz?: Reisekosten.EnumFahrzeugtypen;
    nebenkostenart?: Reisekosten.EnumNebenkostenarten;
    land?: Reisekosten.EnumLaender;
    mahlzeit?: Reisekosten.EnumMahlzeiten;
}

class Reisekosten {
    Filename: string;
    Username: string;
    Kostenstelle: string;
    AbrechnungszeitraumVon: Date;
    AbrechnungszeitraumBis: Date;
    Status: Reisekosten.EnumStati;
    Positionen: ReisekostenPosition[];
    Kostengesamt: number;

    Gesamtbetrag(): void {
        let lsSum: number = 0;
        this.Positionen.forEach(element => {
            lsSum += element.Kosten;
        });
        this.Kostengesamt = lsSum;
    }
}

abstract class ReisekostenPosition {
    mDatum: Date;
    mSatz: number;
    mBeschreibung: string;
    mKosten: number;

    constructor() {
        this.mKosten = 0;
        this.mSatz = 1;
    }
    get Beschreibung(): string {
        if (this.mBeschreibung === null) {
            return "";
        }
        else {
            return this.mBeschreibung;
        }
    }
    set Beschreibung(tsBeschreibung: string) {
        this.mBeschreibung = tsBeschreibung;
    }
    get Satz(): number {
        return NZnumber(this.mSatz);
    }
    set Satz(tnSatz: number) {
        this.mSatz = tnSatz;
    }
    get Kosten(): number {
        return NZnumber(this.mKosten);
    }
    set Kosten(tnKosten: number) {
        this.mKosten = tnKosten;
    }
    abstract BerechneKosten(): void;
}

class KilometergeldPos extends ReisekostenPosition {
    mKm: number;
    mAnzMitfahrer: number;
    mFahrzeugTyp: Reisekosten.EnumFahrzeugtypen;


    get Fahrzeugtyp(): Reisekosten.EnumFahrzeugtypen {
        return this.mFahrzeugTyp;
    }
    set Fahrzeugtyp(tsFahrzeugtyp: Reisekosten.EnumFahrzeugtypen) {
        this.mFahrzeugTyp = tsFahrzeugtyp;
    }

    get Km(): number {
        return NZnumber(this.mKm);
    }
    set Km(tnKm: number) {
        this.mKm = tnKm;
    }

    get Satz(): number {
        return NZnumber(this.mSatz);
    }
    set Satz(tnSatz: number) {
        this.mSatz = tnSatz;
    }

    BerechneKosten(): void {
        this.mKosten = NZnumber(this.Satz, 0) * NZnumber(this.mKm, 0);
    }
}

class AussergewoehnlicheAusgabePos extends ReisekostenPosition {
    mNebenkostenart: Reisekosten.EnumNebenkostenarten;
    mLand: Reisekosten.EnumLaender;

    get Land(): Reisekosten.EnumLaender {
        return this.mLand;
    }
    set Land(tsLand: Reisekosten.EnumLaender) {
        this.mLand = tsLand;
    }

    BerechneKosten(): void {
        this.mKosten = NZnumber(this.mSatz, 0);
    }
}

class TaggeldPos extends ReisekostenPosition {
    mMahlzeit: Reisekosten.EnumMahlzeiten;
    mLand: Reisekosten.EnumLaender;

    get Mahlzeit(): Reisekosten.EnumMahlzeiten {
        return this.mMahlzeit;
    }
    set Mahlzeit(tsMahlzeit: Reisekosten.EnumMahlzeiten) {
        this.mMahlzeit = tsMahlzeit;
    }

    get Land(): Reisekosten.EnumLaender {
        return this.mLand;
    }
    set Land(tsLand: Reisekosten.EnumLaender) {
        this.mLand = tsLand;
    }

    BerechneKosten(): void {
        this.mKosten = NZnumber(this.mSatz, 0);
    }
}

class NaechtigungsgeldPos extends ReisekostenPosition {
    mLand: Reisekosten.EnumLaender;

    BerechneKosten(): void {
        this.mKosten = NZnumber(this.mKosten, 0);
    }
}



function NZnumber(namba: number, thenvalue: number = 0): number {
    if (namba === null) {
        return 0;
    }
    return namba;
}

module Reisekosten {
    export enum EnumStati {
        Offen,
        Geschlossen
    };
    export enum EnumFahrzeugtypen {
        PKW = <any>"PKW",
        Motorrad = <any>"Motorrad",
        Fahrrad = <any>"Fahrrad",
        PKW_Klient = <any>"PKW v. Klient"
    };
    export enum EnumNebenkostenarten {
        null = <any>"",
        OeV_Inland = <any>"ÖV Inland",
        OeV_mit_Auslandsbezug = <any>"ÖV mit Auslandsbezug",
        Nebenkosten = <any>"Nebenkosten",
        Aussergwoehnliche_Ausgaben = <any>"Aussergwöhnliche Ausgaben",
        Auslandsdiaeten_JiP = <any>"Auslandsdiäten JiP"
    };
    export enum EnumMahlzeiten {
        null = <any>"",
        nix = <any>"keines"
        , Mittagessen = <any>"Mittagessen"
        , Abendessen = <any>"Abendessen"
        , MittagUndAbendessen = <any>"Mittag & Abendessen"
    };
    export enum EnumLaender {
        Oesterreich,
        Deutschland,
        Schweiz,
        Uruguay
    };
}

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
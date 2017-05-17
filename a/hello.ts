let myNamen:string = "Jürgen";

let myElement=<HTMLScriptElement>document.getElementById("myName");
//let myElement=(<HTMLScriptElement[]><any>document.getElementById("myName"));

 myElement.innerHTML="My Name is " + myNamen;


class Reisekosten{
    Filename:string;
    Username:string;
    AbrechnungszeitraumVon:Date;
    AbrechnungszeitraumBis:Date;
    Status:Reisekosten.StatusEnum;
    Positionen:ReisekostenPosition[];
    Betrag:number;
    Gesamtbetrag():void{
        this.Betrag = 999;
    }
}

class ReisekostenPosition{
    Beschreibung:string;
    Km:number;
    KmGeld:number;
    Betrag:number;
    Mitfahrer:number;
    FahrzeugTyp:FahrzeugtypenEnum;

    BerechneKMGeld():void{
        if(this.Km !=null && this.KmGeld !=null){
            this.Betrag = this.Km*this.KmGeld;
        }else{
            this.Betrag=0;
        }
    }
}

module Reisekosten{
    export enum StatusEnum{
        Offen,
        Geschlossen
    }
}

enum FahrzeugtypenEnum{
        Auto,
        Motorrad,
        öffi,
        Flugzeug
}

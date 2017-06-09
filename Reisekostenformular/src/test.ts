class Person{
    fname:string;
    lname:string;
}

class Firma{
    name:string;
    Angestelle:Array<Person>=[];
    constructor() {
        //this.Angestelle= new A
        
    }
}

let firma = new Firma();
firma.name = "Faigle";

let p1 = new Person();
let p2 = new Person();
let p3 = new Person();

p1.fname="jürgen";
p2.fname="Sylvia";
p3.fname="otto";

console.log("lenght1", firma.Angestelle.length );
let n:number = firma.Angestelle.push(p1,p2,p3);
console.log("length2",n);
n = firma.Angestelle.push(p1,p2,p3);
console.log("length3",n);
//class Animal{        
abstract class Animal{// abstract kann NICHT instanziert werden
    private name: string;
    constructor(theName: string){
        this.name = theName;
    }
    walk(distance:number){
        console.log("my name = " + this.name + " i lof " + distance + " Meter.")
    }
}

// da Animal abstract ist, kann es nicht instanziert werden
let ani = new Animal("Pferd");
ani.walk(500);

class Snake extends Animal{
    constructor(theName:string) {
        super(theName);        
    }
}

let snaki = new Snake("Serpente");
snaki.walk(55);
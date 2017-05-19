interface IAnimal{
    readonly numberOfLegs:number;
    makeSound():void;
    eatFood(food:string):void;
}

function testAnimal(animal: IAnimal):void{
    console.log("number of legs: ",animal.numberOfLegs);
    animal.makeSound();
    animal.eatFood("milk");
    animal.eatFood("meat2");
}

abstract class Animal implements IAnimal {
    constructor(public readonly numberOfLegs:number) {
    
    }
    abstract makeSound():void;
    eatFood(food:string):void{
        console.log("yam yam " + food);
    }
}

class Dog extends Animal{
    constructor() {
        super(4);        
    }
    makeSound(){
        console.log("Wau");
    }
    eatFood(food:string):void{
        if(food!=="meat"){
            console.log("bääh");
            return;
        }
        super.eatFood(food);
    }
}
let hund = new Dog();
hund.eatFood("holz");
hund.makeSound();
hund.numberOfLegs = 3;
console.log(hund.numberOfLegs);
export class Cat{
    constructor(public name:string, public numberOfLives:number) {}
}

export class Dog{
    constructor(public name:string, public isBarkingOnNeighbors:boolean) {}
}

export class Person{
    constructor(public name:string, public age:number) {}
}


//Nur bestimmte können renamed werden
function rename(thing:Cat|Dog|Person,newName:string):void{
    thing.name=newName;
}
rename(new Cat('Fluffy',9), "mizzy");
rename(new Dog('Spark',true), "speedy");
rename(new Person('Ben',19), "benny");



function printDate(date:Date):void{
    //prints the date
}
printDate(new Date());
printDate('8,4,64');
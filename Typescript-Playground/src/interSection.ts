import * as _ from 'lodash';

export class Cat{
    constructor(public name:string, public numberOfLives:number) {}
}

export class Dog{
    constructor(public name:string, public isBarkingOnNeighbors:boolean) {}
}

//T & U ist der Intersection-Type
function compose<T,U>(obj1:T,obj2:U):T & U{
    return _.assignIn({},obj1,obj2);
}

const monster = compose(new Cat('Mizzi',9),new Dog("Otto",false));
monster.name = "SparkiMizzi";
monster.numberOfLives = 100;
monster.isBarkingOnNeighbors =true;
//#################################

interface Destroyable{destroy():void;}
interface Lengthable{readonly length:number;}

function destroyIfTooLong(obj:Lengthable & Destroyable):void{
    if(obj.length>1000){
        obj.destroy();
    }else{
        console.log("limit isn't reached. Only", obj.length);
        
    }
}
class Reise implements Destroyable, Lengthable {
    constructor(public length:number){}
    destroy(): void {
        console.log("wird destroyed", this.length);
    }
}
let reise = new Reise(1000);
destroyIfTooLong(reise);

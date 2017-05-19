interface Santa{
    readonly numberOfKidsToVisit:number;
    test():void;
    giveGift(callback:GiftGivenCallback):void;
    drinkMilk?():void;   //optional Function
}

interface GiftGivenCallback{
    (success:boolean):void;  // Function interface
}

interface Santa{  //Erweiterung zu obigem Santa-interface
    fly?():void;
}

//Eine Variante
let santa: Santa={
    numberOfKidsToVisit:987634239,
    test:()=>{},
    giveGift:(callback:GiftGivenCallback)=>{callback(true);},
    fly:()=>{}
}; 



//Eine andere Variante
class SS implements Santa{
    numberOfKidsToVisit:number;
    test(){}
    giveGift(callback:GiftGivenCallback):void{}
    fly(){}
}

if (santa.fly){
    santa.fly();
}

//  Übung über anonyme Interfaces

function getNameAndAge():[string, number]{
    return ['Slava',27];
}

// im nextn  kann man ned wirkl wissen, was was bedeuted
//deshalb kann man hier gut interfaces (weiter unten) verwenden.
//Und weil wir das hier nur in einem kurzen Teil brauchen, machen wir es anonym
let tuple:[string, number] = getNameAndAge();
let someName=tuple[0];

//Hier das Ano..Interface
function getNameAndAge2():{name: string, age: number}{
    return {//ein Object can be returned  
        name:"Slava",
        age:27
    };
}

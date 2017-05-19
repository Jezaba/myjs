let isDog:boolean = true;
let dogAge:number=5;
let dogName:string="Doggy";

let dogNames:string[]=["A","B","C","D"];
let dogAges:number[]=[4,6,2.1,8];

let someUnknownThings:any=[true,"string",55];

function doStuff():void{
    console.log("doing stuff");
}
doStuff();

//ENUM
 enum ErrorCode{
     OUT_OF_MEMORY = 123,
     WRONG_INPUT = 234
 }
 let error = ErrorCode.WRONG_INPUT;

 //TUPEL
 let tuple:[ string, number]=['Otto',25];
 

 

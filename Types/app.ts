//Boolean
let isThisOK:boolean=false;

//Numbers
let myNumber:number=3.3;

//string
let myName:string="Otto";

//Template strings
let greeting:string="Hello, " + myName;
let greeting2:string='Hello, ${myName}';

//Arrays
let count = [1,2,2,3,4];
let count2:number[] = [1,2,2,3,4];
let count3: Array<number>=[1,2,3,4,5];

//Any Type
let anything:any = 4;
anything = "ölkj";
anything = false;

//Return nothing --> void
function greeter(name:string):void{
    console.log("hello " + name);
}

//Enums
let joystickstatus=1;
enum Directions{
    Up,Down,Left,Right
};
if(joystickstatus===Directions.Left) {
    console.log("muv2left");
}









